/*! Nu:Time(TM) reference core for JavaScript — https://nu-time.org
 *  Copyright (c) 2025-2026 Nu-Time Inc. Licensed under MIT OR Apache-2.0, at your option.
 *  SPDX-License-Identifier: MIT OR Apache-2.0
 *  "Nu:Time", "Ke-Shi" and "刻时" are trademarks of Nu-Time Inc. (see TRADEMARKS.md).
 *
 *  1 day = 10 gongs = 1,000 beats = 100,000 ticks.  1 beat = 86.4 s, 1 tick = 0.864 s.
 *  Display GG:BB:TT.  Integer milliseconds throughout, truncating, never rounding ahead.
 *  Always derive from the absolute instant on every render; never accumulate ticks.
 *  The reference is the Earth's rotation (UT1). Pass dut1Ms (UT1 − UTC, published by IERS) for full accuracy;
 *  without it, UTC is used directly (error under ~1 tick). No leap seconds, ever.
 */
(function (root) {
  "use strict";
  var DAY_MS = 86400000, TICKS = 100000;

  // Localized labels. Translate the labels, never the durations or the field order.
  var LABELS = {
    en: { gong: "gong", ke: "Kè", beat: "beat", tick: "tick" }, fr: { gong: "gong", ke: "Kè", beat: "beat", tick: "tic" },
    it: { gong: "gong", ke: "Kè", beat: "beat", tick: "tic" },  de: { gong: "Gong", ke: "Kè", beat: "Beat", tick: "Tick" },
    es: { gong: "gong", ke: "Kè", beat: "beat", tick: "tic" },
    zh: { gong: "更", ke: "刻", beat: "分", tick: "秒" }
  };

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function mod(a, n) { return ((a % n) + n) % n; }

  /** Split a tick-of-day index (0..99999) into gong/beat/tick fields. */
  function fields(ticks) {
    ticks = mod(ticks, TICKS);
    var gong = Math.floor(ticks / 10000), beat = Math.floor(ticks / 100) % 100, tick = ticks % 100;
    return { ticksOfDay: ticks, gong: gong, beat: beat, tick: tick, beatsOfDay: ticks / 100,
             display: pad(gong) + ":" + pad(beat) + ":" + pad(tick) };
  }

  /** Milliseconds into a (nominal 86,400 s) day -> integer tick index. Floors, never rounds. */
  function ticksFromMs(msIntoDay) {
    return Math.floor(mod(Math.floor(msIntoDay), DAY_MS) * TICKS / DAY_MS);
  }

  /** Inverse: GG:BB:TT -> SI seconds since the chosen midnight. */
  function secondsFromFields(gong, beat, tick) { return (gong * 10000 + beat * 100 + tick) * 0.864; }

  // ── solar model (NOAA general solar position; artistic accuracy ~1 min) ──
  function terms(ms) {
    var d = new Date(ms), y = d.getUTCFullYear();
    var len = (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 366 : 365;
    var doy = Math.floor((Date.UTC(y, d.getUTCMonth(), d.getUTCDate()) - Date.UTC(y, 0, 1)) / DAY_MS) + 1;
    var hour = d.getUTCHours() + d.getUTCMinutes() / 60 + (d.getUTCSeconds() + d.getUTCMilliseconds() / 1000) / 3600;
    var g = 2 * Math.PI / len * (doy - 1 + (hour - 12) / 24);
    var eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    var decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) +
               0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    return { eqt: eqt, decl: decl, utcMin: hour * 60 };
  }
  /** Sun altitude/azimuth (degrees) at an instant and place. */
  function sun(ms, lat, lon) {
    var t = terms(ms), R = Math.PI / 180;
    var ha = ((t.utcMin + t.eqt + 4 * lon) / 4 - 180) * R, phi = lat * R;
    var cz = Math.sin(phi) * Math.sin(t.decl) + Math.cos(phi) * Math.cos(t.decl) * Math.cos(ha);
    cz = Math.max(-1, Math.min(1, cz));
    var alt = 90 - Math.acos(cz) / R;
    var az = mod(Math.atan2(Math.sin(ha), Math.cos(ha) * Math.sin(phi) - Math.tan(t.decl) * Math.cos(phi)) / R + 180, 360);
    return { altitude: alt, azimuth: az };
  }
  /** Sunrise / solar noon / sunset (UTC ms) for the solar day containing `ms` at `lon`. */
  function sunEvents(ms, lat, lon, zenith) {
    var s = new Date(ms + lon / 15 * 3600000);
    var mid = Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate());
    var t = terms(mid + DAY_MS / 2 - 4 * lon * 60000), R = Math.PI / 180, phi = lat * R;
    var x = Math.cos((zenith || 90.833) * R) / (Math.cos(phi) * Math.cos(t.decl)) - Math.tan(phi) * Math.tan(t.decl);
    var noon = mid + (720 - 4 * lon - t.eqt) * 60000;
    if (x < -1) return { polar: "day", solarNoon: noon };
    if (x > 1) return { polar: "night", solarNoon: noon };
    var h = Math.acos(x) / R;
    return { polar: null, solarNoon: noon, sunrise: mid + (720 - 4 * (lon + h) - t.eqt) * 60000,
             sunset: mid + (720 - 4 * (lon - h) - t.eqt) * 60000 };
  }

  // ── reference layer: which "midnight" the day is counted from ──
  function wallMs(ms, tz) {
    try {
      var p = {};
      new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", hour: "2-digit", minute: "2-digit", second: "2-digit" })
        .formatToParts(new Date(ms)).forEach(function (x) { p[x.type] = +x.value; });
      return ((p.hour % 24) * 3600 + p.minute * 60 + p.second) * 1000 + mod(Math.floor(ms), 1000);
    } catch (e) {
      var d = new Date(ms);
      return (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) * 1000 + d.getMilliseconds();
    }
  }
  /**
   * mode: "utc"   — one global day, midnight at 00:00 UTC (reproducible everywhere)
   *       "solar" — mean solar day at longitude o.lon (no political time zones)
   *       "ke"    — solar day with longitude quantized to 3.6° steps (1/100 day = 10 beats)
   *       "civil" — local wall clock in IANA zone o.tz (familiar; follows DST)
   */
  function msIntoDay(ms, mode, o) {
    o = o || {};
    if (mode === "utc") return mod(ms, DAY_MS);
    if (mode === "civil") return wallMs(ms, o.tz);
    if (mode === "solar" || mode === "ke") {
      var lon = mode === "ke" ? Math.round(o.lon / 3.6) * 3.6 : o.lon;
      return mod(ms + lon / 15 * 3600000, DAY_MS);
    }
    throw new Error("unknown Nu:Time reference mode: " + mode);
  }
  function now(ms, mode, o) {
    if (o && o.dut1Ms) ms += o.dut1Ms;
    var r = fields(ticksFromMs(msIntoDay(ms, mode, o)));
    r.reference = mode;
    return r;
  }
  /** Interchange record (schema nu-time/v1). */
  function record(ms, mode, o) {
    o = o || {};
    var r = now(ms, mode, o);
    return { schema: "nu-time/v1", instant: new Date(ms).toISOString(), reference: mode, nuDay: nuDay(ms),
             location: o.lat != null ? { latitude: o.lat, longitude: o.lon, ianaTimeZone: o.tz || null } : null,
             ticksOfDay: r.ticksOfDay, gong: r.gong, beat: r.beat, tick: r.tick, display: r.display, locale: o.locale || "en" };
  }

  // ── sky colour from solar altitude (an artistic visualization, not physics) ──
  var STOPS = [[-90, [6, 9, 22]], [-18, [11, 16, 38]], [-12, [24, 30, 66]], [-6, [62, 58, 110]],
               [-2, [176, 96, 82]], [2, [238, 150, 90]], [8, [150, 190, 230]], [30, [96, 160, 228]], [90, [60, 130, 220]]];
  function sky(alt) {
    for (var i = 1; i < STOPS.length; i++) if (alt <= STOPS[i][0]) {
      var a = STOPS[i - 1], b = STOPS[i], t = (alt - a[0]) / (b[0] - a[0]);
      return [0, 1, 2].map(function (k) { return Math.round(a[1][k] + (b[1][k] - a[1][k]) * t); });
    }
    return [60, 130, 220];
  }

  /** Nu:Day number (Modified Julian Day): whole days since midnight at Greenwich, 1858-11-17. No leap years. */
  function nuDay(ms) { return Math.floor(ms / DAY_MS) + 40587; }

  // ── Kè: 1/100 of a day = 1/100 of a circle = 3.6° ──
  function degreesToKe(deg) { return deg * 100 / 360; }
  function keToDegrees(ke) { return ke * 360 / 100; }
  /** Nu:Long in Kè, east positive, normalized to (-50, 50]. */
  function nuLong(lonDeg) { var k = mod(degreesToKe(lonDeg) + 50, 100) - 50; return k === -50 ? 50 : k; }
  /** Nu:Lat in Kè, north positive, -25..25. */
  function nuLat(latDeg) { return degreesToKe(latDeg); }
  /** Mean solar noon at a longitude, as a universal tick-of-day (05:00:00 minus 10 beats per Kè east). */
  function solarNoonTicks(lonDeg) { return mod(Math.round(50000 - nuLong(lonDeg) * 1000), TICKS); }
  /** "32.34 Kè E" style formatting. */
  function formatKe(ke, pos, neg, digits) { return Math.abs(ke).toFixed(digits == null ? 2 : digits) + " Kè " + (ke >= 0 ? pos : neg); }

  var api = { DAY_MS: DAY_MS, TICKS: TICKS, LABELS: LABELS, fields: fields, ticksFromMs: ticksFromMs,
              degreesToKe: degreesToKe, keToDegrees: keToDegrees, nuLong: nuLong, nuLat: nuLat,
              solarNoonTicks: solarNoonTicks, formatKe: formatKe, nuDay: nuDay,
              secondsFromFields: secondsFromFields, msIntoDay: msIntoDay, now: now, record: record,
              sun: sun, sunEvents: sunEvents, sky: sky, equationOfTimeMinutes: function (ms) { return terms(ms).eqt; } };
  if (typeof module === "object" && module.exports) module.exports = api; else root.NuTime = api;
})(this);
