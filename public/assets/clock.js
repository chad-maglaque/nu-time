// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
/* Nu:Time live clock — © Nu-Time Inc., MIT OR Apache-2.0. Needs NuTime (nutime.js).
 *
 * Dial:
 *  - The digits always show UNIVERSAL Nu:Time.
 *  - The face has no numerals: four quarter marks (0 / 25 / 50 / 75 Kè) and 100 fine graduations.
 *    The emphasized zero mark is where gong, beat and tick roll over.
 *  - At Greenwich the zero mark is at the very bottom (0 Kè / 0°). Elsewhere the whole face turns
 *    clockwise by the place's longitude east of Greenwich, so solar noon is always at the top and
 *    the dial matches the local sky, while the time it tells is the same for everyone.
 *  Hands: red gong hand (1 turn/day), blue beat hand (1 turn/gong), gold tick hand (1 turn/beat).
 *  The gold day ring is shaded between sunset and sunrise; triangles mark sunrise (gold) and
 *  sunset (cream); the orange dot on the ring is solar noon.
 */
(function () {
  "use strict";
  var NT = window.NuTime, root = document.querySelector("[data-clock]");
  if (!NT || !root) return;
  // Exactly the nu-time.com list, in the same order: [city, country, latitude, longitude, IANA zone]
  var CITIES = [
    ["Anchorage", "USA", 61.2181, -149.9003, "America/Anchorage"],
    ["Atlanta", "USA", 33.7490, -84.3880, "America/New_York"],
    ["Bangkok", "Thailand", 13.7563, 100.5018, "Asia/Bangkok"],
    ["Barcelona", "Spain", 41.3851, 2.1737, "Europe/Madrid"],
    ["Beijing", "China", 39.9075, 116.3972, "Asia/Shanghai"],
    ["Berlin", "Germany", 52.5244, 13.4105, "Europe/Berlin"],
    ["Bogota", "Colombia", 4.7109, -74.0721, "America/Bogota"],
    ["Cairo", "Egypt", 30.0444, 31.2357, "Africa/Cairo"],
    ["Cape Town", "South Africa", -33.9258, 18.4232, "Africa/Johannesburg"],
    ["Chicago", "USA", 41.8781, -87.6298, "America/Chicago"],
    ["Delhi", "India", 28.6139, 77.2090, "Asia/Kolkata"],
    ["Dubai", "UAE", 25.277, 55.296, "Asia/Dubai"],
    ["Helsinki", "Finland", 60.169856, 24.938379, "Europe/Helsinki"],
    ["Hong Kong", "Hong Kong SAR", 22.3193, 114.1694, "Asia/Hong_Kong"],
    ["Houston", "USA", 29.7604, -95.3698, "America/Chicago"],
    ["Istanbul", "Turkey", 41.0082, 28.9784, "Europe/Istanbul"],
    ["Jakarta", "Indonesia", -6.2088, 106.8456, "Asia/Jakarta"],
    ["Johannesburg", "South Africa", -26.2041, 28.0473, "Africa/Johannesburg"],
    ["Karachi", "Pakistan", 24.8607, 67.0011, "Asia/Karachi"],
    ["Kuala Lumpur", "Malaysia", 3.1390, 101.6869, "Asia/Kuala_Lumpur"],
    ["Lagos", "Nigeria", 6.5244, 3.3792, "Africa/Lagos"],
    ["London", "United Kingdom", 51.5074, -0.1278, "Europe/London"],
    ["Los Angeles", "USA", 34.0522, -118.2437, "America/Los_Angeles"],
    ["Madrid", "Spain", 40.4168, -3.7038, "Europe/Madrid"],
    ["Manila", "Philippines", 14.5995, 120.9842, "Asia/Manila"],
    ["Mexico City", "Mexico", 19.4326, -99.1332, "America/Mexico_City"],
    ["Moscow", "Russia", 55.7558, 37.6173, "Europe/Moscow"],
    ["Mumbai", "India", 19.0760, 72.8777, "Asia/Kolkata"],
    ["Nairobi", "Kenya", -1.2921, 36.8219, "Africa/Nairobi"],
    ["New York City", "USA", 40.7128, -74.0060, "America/New_York"],
    ["Paris", "France", 48.8566, 2.3522, "Europe/Paris"],
    ["Reykjavik", "Iceland", 64.15, -21.94, "Atlantic/Reykjavik"],
    ["Rio de Janeiro", "Brazil", -22.9068, -43.1729, "America/Sao_Paulo"],
    ["Riyadh", "Saudi Arabia", 24.7136, 46.6753, "Asia/Riyadh"],
    ["Rome", "Italy", 41.9028, 12.4964, "Europe/Rome"],
    ["Santiago", "Chile", -33.4489, -70.6693, "America/Santiago"],
    ["San Francisco", "USA", 37.7749, -122.4194, "America/Los_Angeles"],
    ["Sao Paulo", "Brazil", -23.5505, -46.6333, "America/Sao_Paulo"],
    ["Seattle", "USA", 47.6062, -122.3321, "America/Los_Angeles"],
    ["Seoul", "South Korea", 37.5665, 126.9780, "Asia/Seoul"],
    ["Shanghai", "China", 31.2304, 121.4737, "Asia/Shanghai"],
    ["Singapore", "Singapore", 1.3521, 103.8198, "Asia/Singapore"],
    ["Stockholm", "Sweden", 59.32788, 18.05327, "Europe/Stockholm"],
    ["Sydney", "Australia", -33.8688, 151.2093, "Australia/Sydney"],
    ["Taipei", "Taiwan", 25.0329, 121.5654, "Asia/Taipei"],
    ["Tel Aviv", "Israel", 32.0853, 34.7818, "Asia/Jerusalem"],
    ["Tokyo", "Japan", 35.6895, 139.6917, "Asia/Tokyo"],
    ["Ushuaia", "Argentina", -54.81, -68.31, "America/Argentina/Ushuaia"],
    ["Vancouver", "Canada", 49.2827, -123.1207, "America/Vancouver"],
    ["Washington D.C.", "USA", 38.9072, -77.0369, "America/New_York"]
  ];
  var DEFAULT_BY_LANG = { zh: "Beijing", hi: "Delhi", ur: "Delhi", fr: "Paris", it: "Rome", de: "Berlin", es: "Madrid", ja: "Tokyo", pt: "Sao Paulo", ru: "Moscow" };
  var GREENWICH = ["Greenwich", "Royal Observatory", 51.4826, 0.0077, "Europe/London"];   // default, as on nu-time.com
  var lang = (document.documentElement.lang || "en").slice(0, 2);
  var $ = function (s) { return root.querySelector(s); };
  var sel = $("[data-city]"), canvas = $("canvas"), ctx = canvas.getContext("2d"), status = $("[data-locstatus]");
  var place = null, skyAt = 0, events = null, sunUp = true, last = "";
  var say = function (k, extra) { if (status) status.textContent = (k ? root.getAttribute("data-" + k) : "") + (extra || ""); };

  function setPlace(name, lat, lon, tz, kind) {
    place = { name: name, lat: lat, lon: lon, tz: tz || Intl.DateTimeFormat().resolvedOptions().timeZone, kind: kind || "city" };
    try { localStorage.setItem("nt-place", JSON.stringify(place)); } catch (e) {}
    skyAt = 0; last = "";
  }
  // options: "Choose a location", "Current Location (Auto-Detect)", then the cities as "City, Country"
  // Labels in the page language: city names from the locale file, country names from the browser (CLDR).
  var CC = {"Argentina": "AR", "Australia": "AU", "Brazil": "BR", "Canada": "CA", "Chile": "CL", "China": "CN", "Colombia": "CO", "Egypt": "EG", "Finland": "FI", "France": "FR", "Germany": "DE", "Hong Kong SAR": "HK", "Iceland": "IS", "India": "IN", "Indonesia": "ID", "Israel": "IL", "Italy": "IT", "Japan": "JP", "Kenya": "KE", "Malaysia": "MY", "Mexico": "MX", "Nigeria": "NG", "Pakistan": "PK", "Philippines": "PH", "Russia": "RU", "Saudi Arabia": "SA", "Singapore": "SG", "South Africa": "ZA", "South Korea": "KR", "Spain": "ES", "Sweden": "SE", "Taiwan": "TW", "Thailand": "TH", "Turkey": "TR", "UAE": "AE", "USA": "US", "United Kingdom": "GB"};
  var cityNames = window.NT_CITIES || {}, regionNames = null;
  try { regionNames = new Intl.DisplayNames([document.documentElement.lang || "en"], { type: "region" }); } catch (e) {}
  // Chinese page: mainland convention for Taiwan and Hong Kong (decided 2026-11-18).
  var REGION_OVERRIDES = { zh: { TW: "中国台湾", HK: "中国香港" } };
  var regionOverride = REGION_OVERRIDES[(document.documentElement.lang || "en").slice(0, 2)] || {};
  function label(c) { var cc = CC[c[1]], country = regionOverride[cc] || (regionNames && cc && regionNames.of(cc)) || c[1]; return (cityNames[c[0]] || c[0]) + ", " + country; }
  CITIES.forEach(function (c, i) { var o = document.createElement("option"); o.value = i; o.textContent = label(c); sel.appendChild(o); });
  function pickCity(i) { var c = CITIES[i]; sel.value = String(i); setPlace(c[0], c[2], c[3], c[4]); say(""); }
  function indexOf(name) { for (var i = 0; i < CITIES.length; i++) if (CITIES[i][0] === name) return i; return -1; }

  // "Current Location": precise position from the browser; if that is refused or unavailable,
  // the approximate position our host derives from the connection (/api/where); else say why.
  function locate(byUser) {
    sel.value = "current"; say("locating");
    var approx = function () {
      fetch("/api/where", { cache: "no-store" }).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (g) {
        if (g.lat == null || g.lon == null) throw 0;
        setPlace(g.city || "≈", +g.lat, +g.lon, g.tz, "approx");
        if (g.city) say("approx", " " + g.city + (g.region ? ", " + g.region : "")); else say("");
      }).catch(function () { say("locfail"); });
    };
    if (!navigator.geolocation || window.isSecureContext === false) return approx();
    navigator.geolocation.getCurrentPosition(function (p) {
      var lat = p.coords.latitude, lon = p.coords.longitude;
      setPlace("current", lat, lon, null, "current");
      say("");
    }, approx, { enableHighAccuracy: false, timeout: 15000, maximumAge: 300000 });
  }
  sel.addEventListener("change", function () { if (sel.value === "current") locate(true); else if (sel.value !== "") pickCity(+sel.value); });
  var locBtn = $("[data-locate]");
  if (locBtn) locBtn.addEventListener("click", function () { locate(true); });

  var saved = null; try { saved = JSON.parse(localStorage.getItem("nt-place")); } catch (e) {}
  if (saved && saved.lat != null && saved.kind === "city" && indexOf(saved.name) >= 0) pickCity(indexOf(saved.name));
  else if (saved && saved.lat != null && saved.kind !== "city") { sel.value = "current"; setPlace(saved.name, saved.lat, saved.lon, saved.tz, saved.kind); if (saved.kind === "approx" && saved.name !== "≈") say("approx", " " + saved.name); }
  else if (DEFAULT_BY_LANG[lang] && indexOf(DEFAULT_BY_LANG[lang]) >= 0) pickCity(indexOf(DEFAULT_BY_LANG[lang]));
  else { sel.value = ""; setPlace.apply(null, [GREENWICH[0], GREENWICH[2], GREENWICH[3], GREENWICH[4]]); }
  // If the visitor has already granted location access, refresh it silently (no prompt on page load).
  try { if (navigator.permissions && (!saved || saved.kind === "current")) navigator.permissions.query({ name: "geolocation" }).then(function (r) { if (r.state === "granted") locate(); }); } catch (e) {}

  var big = $("[data-big]"), rise = $("[data-rise]"), set = $("[data-set]"), latEl = $("[data-lat]"), lonEl = $("[data-lon]"),
      noon = $("[data-noon]"), bar = $("[data-bar]"), barNow = $("[data-bar-now]");
  var dir = { E: root.getAttribute("data-e"), W: root.getAttribute("data-w"), N: root.getAttribute("data-n"), S: root.getAttribute("data-s") };
  var uni = function (ms) { return NT.now(ms, "utc"); };
  var frac = function (ms) { return NT.msIntoDay(ms, "utc") / NT.DAY_MS; };   // fraction of the universal day

  // ── sky colour: the original nu-time.com formula (five blended bands, twilight warmth, night shimmer) ──
  function mix(c1, c2, t) { return [0, 1, 2].map(function (k) { return Math.round(c1[k] + (c2[k] - c1[k]) * t); }); }
  function smooth(e0, e1, x) { var t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); }
  function skyColor(ms, alt, lon, ev) {
    var ASTRO_NIGHT = [1, 1, 5], NIGHT = [4, 8, 20], PREDAWN = [12, 22, 52], NAUTICAL_BLUE = [28, 52, 115],
        CIVIL_BLUE = [60, 120, 215], NOON_BLUE = [86, 170, 255], TWILIGHT_WARM = [255, 150, 70], MILKY_HINT = [30, 38, 64];
    var dayW = smooth(-2, 8, alt),
        civilW = smooth(-8, 2, alt) * (1 - smooth(8, 20, alt)),
        nauticalW = smooth(-14, -4, alt) * (1 - smooth(-2, 6, alt)),
        astroW = smooth(-22, -10, alt) * (1 - smooth(-8, 0, alt)),
        nightW = 1 - smooth(-20, -12, alt);
    var dayT = Math.pow(Math.max(0, Math.min(1, alt / 90)), 0.58);
    var d = new Date(ms), localHour = (d.getUTCHours() + d.getUTCMinutes() / 60 + lon / 15 + 24) % 24;
    var distMid = Math.min(localHour, 24 - localHour) / 24, deep = 1 - smooth(0.10, 0.25, distMid);
    var palette = [mix(mix(CIVIL_BLUE, NOON_BLUE, 0.22), NOON_BLUE, dayT), CIVIL_BLUE, mix(PREDAWN, NAUTICAL_BLUE, 0.75),
                   mix(NIGHT, PREDAWN, 0.35), mix(NIGHT, ASTRO_NIGHT, deep)];
    var w = [dayW, civilW, nauticalW, astroW, nightW], total = w[0] + w[1] + w[2] + w[3] + w[4];
    if (total <= 1e-9) { w = [0, 0, 0, 0, 1]; total = 1; }
    var sky = [0, 0, 0];
    for (var i = 0; i < 5; i++) for (var k = 0; k < 3; k++) sky[k] += w[i] / total * palette[i][k];
    sky = sky.map(Math.round);
    var half = 30 * 60 * 1000;
    var dawn = ev && ev.sunrise ? Math.exp(-Math.pow(Math.abs(ms - ev.sunrise) / half, 2)) : 0;
    var dusk = ev && ev.sunset ? Math.exp(-Math.pow(Math.abs(ms - ev.sunset) / half, 2)) : 0;
    var warm = 0.10 * (dawn + dusk) * smooth(-8, 3, alt) * (1 - smooth(6, 18, alt));
    sky = mix(sky, TWILIGHT_WARM, Math.max(0, Math.min(1, warm)));
    var milky = 0.05 * nightW * (1 - smooth(0.11, 0.24, distMid)) * (0.5 + 0.5 * Math.sin((localHour / 24) * 2 * Math.PI * 3 + 1.2));
    return mix(sky, MILKY_HINT, Math.max(0, Math.min(1, milky)));
  }

  function updateSky(ms) {
    var s = NT.sun(ms, place.lat, place.lon);
    sunUp = s.altitude > -0.833;
    events = NT.sunEvents(ms, place.lat, place.lon);
    document.documentElement.style.setProperty("--sky", "rgb(" + skyColor(ms, s.altitude, place.lon, events).join(",") + ")");
    if (events.polar) { rise.textContent = root.getAttribute(events.polar === "day" ? "data-polar-day" : "data-polar-night"); set.textContent = "—"; }
    else { rise.textContent = uni(events.sunrise).display.slice(0, 5); set.textContent = uni(events.sunset).display.slice(0, 5); }
    noon.textContent = uni(events.solarNoon).display.slice(0, 5);
    latEl.textContent = NT.formatKe(NT.nuLat(place.lat), dir.N, dir.S, 1);
    lonEl.textContent = NT.formatKe(NT.nuLong(place.lon), dir.E, dir.W, 1);
    var pct = function (t) { return (frac(t) * 100).toFixed(2) + "%"; }, dark = "#2a2a2a", lit = "#FFB347";
    if (events.polar) bar.style.background = events.polar === "day" ? lit : dark;
    else {
      var r = pct(events.sunrise), st = pct(events.sunset);
      bar.style.background = parseFloat(r) < parseFloat(st)
        ? "linear-gradient(90deg," + dark + " " + r + "," + lit + " " + r + "," + lit + " " + st + "," + dark + " " + st + ")"
        : "linear-gradient(90deg," + lit + " " + st + "," + dark + " " + st + "," + dark + " " + r + "," + lit + " " + r + ")";
    }
  }

  // ── dial: the original Nu:Time face, rotated to your longitude ──
  // Zero (where gong, beat and tick roll over) is at the very bottom at Greenwich (0 Kè / 0°),
  // and the whole face turns clockwise by the place's longitude east of Greenwich — so every
  // place's solar noon is at the top and its solar midnight at the bottom.
  var DPR = Math.min(window.devicePixelRatio || 1, 3), W = 0;
  function size() { var w = canvas.clientWidth || 320; canvas.width = w * DPR; canvas.height = w * DPR; W = canvas.width; }
  size(); window.addEventListener("resize", size);
  function offset() { return Math.round(place.lon / 3.6) * 3.6 * Math.PI / 180; } // snapped to the nearest Kè (3.6°), as on nu-time.com
  function ang(f) { return Math.PI / 2 + f * 2 * Math.PI + offset(); }             // canvas angle; f = fraction of universal day
  var shadeCtx = null;
  function shadeLayer() {
    if (!shadeCtx) shadeCtx = document.createElement("canvas").getContext("2d");
    if (shadeCtx.canvas.width !== W) { shadeCtx.canvas.width = W; shadeCtx.canvas.height = W; }
    return shadeCtx;
  }
  function hand(a, len, w, color, back) {
    ctx.beginPath(); ctx.lineCap = "round"; ctx.lineWidth = w; ctx.strokeStyle = color;
    ctx.moveTo(-Math.cos(a) * (back || 0), -Math.sin(a) * (back || 0)); ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len); ctx.stroke();
  }
  function draw(ms) {
    var R = W / 2 * 0.96, f = frac(ms);
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, W); ctx.translate(W / 2, W / 2);
    // Geometry (× R). The gold ring keeps its width but sits on a smaller radius: the outer dark
    // channel (the sun's path) is wider and the inner dark disc narrower.
    var FACE = 0.96, RING = 0.60, RW = 0.2, LINE = 0.012;
    var TEAL = RING + RW / 2 + LINE / 2, CREAM = RING - RW / 2 - LINE / 2;
    var TEAL_OUT = TEAL + LINE / 2, SUN_R = (TEAL_OUT + FACE) / 2;   // the sun runs centred in the outer channel
    ctx.lineCap = "butt";
    // case + face
    ctx.beginPath(); ctx.arc(0, 0, R, 0, 2 * Math.PI); ctx.fillStyle = "#c8a86c"; ctx.fill();
    ctx.beginPath(); ctx.arc(0, 0, R * FACE, 0, 2 * Math.PI); ctx.fillStyle = "#151515"; ctx.fill();
    // day ring with teal (outer) and cream (inner) guide lines
    ctx.beginPath(); ctx.arc(0, 0, R * RING, 0, 2 * Math.PI); ctx.lineWidth = R * RW; ctx.strokeStyle = "#f2b04a"; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, R * TEAL, 0, 2 * Math.PI); ctx.lineWidth = R * LINE; ctx.strokeStyle = "#35545c"; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, R * CREAM, 0, 2 * Math.PI); ctx.lineWidth = R * LINE; ctx.strokeStyle = "#f5deb3"; ctx.stroke();
    // fine graduations (one per Kè) on the outer edge of the day ring. No numerals.
    var RING_OUT = RING + RW / 2;
    for (var i = 0; i < 100; i++) {
      if (i % 25 === 0) continue;
      var a = ang(i / 100);
      ctx.beginPath(); ctx.lineWidth = R * 0.007; ctx.strokeStyle = "rgba(26,26,26,.55)";
      ctx.moveTo(Math.cos(a) * R * (RING_OUT - 0.04), Math.sin(a) * R * (RING_OUT - 0.04)); ctx.lineTo(Math.cos(a) * R * RING_OUT, Math.sin(a) * R * RING_OUT); ctx.stroke();
    }
    // quarter marks: short, soft cream; the tip meets the teal ring's outer edge.
    // Zero (the Prime Meridian): a small triangle of the same length, base on the teal ring, point toward the centre.
    [0, 25, 50, 75].forEach(function (k) {
      var a = ang(k / 100), c = Math.cos(a), s = Math.sin(a);
      if (k === 0) {
        var ro = R * TEAL_OUT, ri = R * (TEAL_OUT - 0.08), hw = R * 0.026;
        ctx.beginPath();
        ctx.moveTo(c * ro - s * hw, s * ro + c * hw); ctx.lineTo(c * ro + s * hw, s * ro - c * hw); ctx.lineTo(c * ri, s * ri);
        ctx.closePath(); ctx.fillStyle = "#ede3cc"; ctx.fill();
        return;
      }
      ctx.beginPath(); ctx.lineWidth = R * 0.016; ctx.strokeStyle = "#ede3cc";
      ctx.moveTo(Math.cos(a) * R * (TEAL_OUT - 0.08), Math.sin(a) * R * (TEAL_OUT - 0.08)); ctx.lineTo(Math.cos(a) * R * TEAL_OUT, Math.sin(a) * R * TEAL_OUT); ctx.stroke();
    });
    // night: a translucent shade over the ring and marks, sunset → sunrise, in one fill (no double shading).
    // Sunrise end convex (shade bulges into day); sunset end concave (day bulges into the shade).
    var NIN = CREAM + LINE / 2, NOUT = TEAL_OUT, NMID = (NIN + NOUT) / 2, NCAP = (NOUT - NIN) / 2;
    var SHADE = "rgba(24,16,6,.32)";   // lighter, more transparent; edges softened below where the browser supports canvas filters
    var at = function (fx, r) { var a = ang(fx); return [Math.cos(a) * R * r, Math.sin(a) * R * r]; };
    // Drawn on its own layer (bite included), then composited with one blur so both ends feather alike.
    if (events && (events.polar === "night" || !events.polar)) {
      var o = shadeLayer();
      o.setTransform(1, 0, 0, 1, 0, 0); o.clearRect(0, 0, W, W); o.translate(W / 2, W / 2);
      o.beginPath();
      if (events.polar === "night") {
        o.arc(0, 0, R * NOUT, 0, 2 * Math.PI, false); o.arc(0, 0, R * NIN, 0, 2 * Math.PI, true);
        o.fillStyle = SHADE; o.fill("nonzero");
      } else {
        var fr = frac(events.sunrise), fs = frac(events.sunset), a1 = ang(fs), a2 = ang(fr) + (fr < fs ? 2 * Math.PI : 0);
        o.arc(0, 0, R * NOUT, a1, a2, false); o.arc(0, 0, R * NIN, a2, a1, true); o.closePath();
        var u = at(fr, NMID); o.moveTo(u[0] + R * NCAP, u[1]); o.arc(u[0], u[1], R * NCAP, 0, 2 * Math.PI, false);   // sunrise: convex cap
        o.fillStyle = SHADE; o.fill("nonzero");
        var c = at(fs, NMID);                                                                                           // sunset: concave bite
        o.globalCompositeOperation = "destination-out"; o.beginPath(); o.arc(c[0], c[1], R * NCAP, 0, 2 * Math.PI); o.fillStyle = "#000"; o.fill();
        o.globalCompositeOperation = "source-over";
      }
      ctx.save();
      if ("filter" in ctx) ctx.filter = "blur(" + Math.max(1, R * 0.012).toFixed(1) + "px)";   // soft, not abrupt
      ctx.drawImage(o.canvas, -W / 2, -W / 2);
      ctx.restore();
    }
    // the sun: travels the dark outer channel with the gong hand (as on nu-time.com) —
    // #FFB347 while up, #E2E2E2 below the horizon, like the moon. Drawn above the marks, below the hands.
    var sa = ang(f), sx = Math.cos(sa) * R * SUN_R, sy = Math.sin(sa) * R * SUN_R;
    if (sunUp) { ctx.beginPath(); ctx.arc(sx, sy, R * 0.092, 0, 2 * Math.PI); ctx.fillStyle = "rgba(255,179,71,.22)"; ctx.fill(); }
    ctx.beginPath(); ctx.arc(sx, sy, R * 0.07, 0, 2 * Math.PI); ctx.fillStyle = sunUp ? "#ffb347" : "#e2e2e2"; ctx.fill();
    // sun disc
    ctx.beginPath(); ctx.arc(0, 0, R * 0.2, 0, 2 * Math.PI); ctx.fillStyle = "#ff8c00"; ctx.fill();
    ctx.lineWidth = R * 0.012; ctx.strokeStyle = "#ffb347"; ctx.stroke();
    // hands: gong/day (red), beat (blue: one turn per gong), tick (gold: one turn per beat)
    hand(ang(f), R * (CREAM + 0.01), R * 0.055, "#d9452b", R * 0.08);   // rounded tip just reaches over the inner edge of the brass ring
    hand(ang((f * 10) % 1), R * (TEAL_OUT - 0.0175), R * 0.035, "#3d6be0", R * 0.1);   // rounded tip ends exactly at the teal ring's outer edge
    hand(ang((f * 1000) % 1), R * 0.88, R * 0.012, "#e8c45a", R * 0.14);
    ctx.beginPath(); ctx.arc(0, 0, R * 0.05, 0, 2 * Math.PI); ctx.fillStyle = "#1a1a1a"; ctx.fill();
  }

  // ── share poster: a 1080×1440 image of this visitor's dial, sun times and a QR code back to the site ──
  // Made in the browser and nothing is uploaded. Long-press to save (works in WeChat), or Save / Share.
  var pBtn = root.querySelector("[data-poster]"), dlg = root.querySelector("[data-poster-dlg]");
  if (pBtn && dlg && dlg.showModal) {
    var pImg = dlg.querySelector("[data-poster-img]"), pSave = dlg.querySelector("[data-poster-save]"),
        pShare = dlg.querySelector("[data-poster-share]"), pFile = null;
    var attr = function (k) { return dlg.getAttribute("data-" + k) || ""; };
    var dtOf = function (el) { return el && el.previousElementSibling ? el.previousElementSibling.textContent.trim() : ""; };
    function placeName() {
      if (sel.value !== "" && sel.value !== "current" && sel.selectedIndex >= 0) return sel.options[sel.selectedIndex].textContent;
      if (place && place.kind === "approx" && place.name && place.name !== "≈") return place.name;
      if (place && place.kind === "city") return place.name;   // Greenwich default
      return attr("place") + " · " + latEl.textContent + " · " + lonEl.textContent;
    }
    function wrap(c, text, x, y, maxW, lineH) {
      var words = /[　-鿿＀-￯]/.test(text) ? text.split("") : text.split(" "), sep = /[　-鿿]/.test(text) ? "" : " ", line = "";
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + sep + words[i] : words[i];
        if (c.measureText(test).width > maxW && line) { c.fillText(line, x, y); line = words[i]; y += lineH; } else line = test;
      }
      if (line) c.fillText(line, x, y);
      return y;
    }
    function makePoster() {
      var ms = Date.now(), PW = 1080, PH = 1440, cv = document.createElement("canvas");
      cv.width = PW; cv.height = PH;
      var c = cv.getContext("2d"), sans = getComputedStyle(document.body).fontFamily, logo = '"Orbitron", ' + sans;
      var L = attr("lang"), sky = getComputedStyle(document.documentElement).getPropertyValue("--sky").trim() || "rgb(24,30,66)";
      c.fillStyle = "#1a1a1a"; c.fillRect(0, 0, PW, PH);
      // header: 刻时 (Chinese page) + the wordmark with its upside-down U
      c.textBaseline = "alphabetic"; c.fillStyle = "#ffb347";
      var x = 72, y = 128;
      if (L === "zh") { c.font = "600 46px " + sans; c.fillText("刻时", x, y); x += c.measureText("刻时").width + 22; }
      c.font = "800 46px " + logo;
      var uw = c.measureText("U").width;
      c.save(); c.translate(x, y - 16); c.scale(1, -1); c.fillText("U", 0, 16); c.restore();   // flip about the cap-height midline
      c.fillText("U:TIME", x + uw, y);
      // label + the big universal time
      c.textAlign = "center"; c.fillStyle = "#9ca3af"; c.font = "500 30px " + sans;
      c.fillText(attr("label"), PW / 2, 236);
      c.fillStyle = "#ffb347"; c.font = "800 150px " + logo;
      c.fillText(uni(ms).display, PW / 2, 392);
      // the dial, as it is right now, on a glow of the place's sky colour
      var D = 620, dx = (PW - D) / 2, dy = 440;
      var g = c.createRadialGradient(PW / 2, dy + D / 2, D * 0.3, PW / 2, dy + D / 2, D * 0.62);
      g.addColorStop(0, sky); g.addColorStop(1, "rgba(26,26,26,0)");
      c.fillStyle = g; c.fillRect(0, dy - 60, PW, D + 120);
      c.drawImage(canvas, dx, dy, D, D);
      // place
      c.fillStyle = "#ffffff"; c.font = "600 38px " + sans;
      c.fillText(placeName(), PW / 2, dy + D + 76);
      // footer: sun times, tagline, address · QR code on the right
      c.strokeStyle = "#333"; c.lineWidth = 2; c.beginPath(); c.moveTo(72, 1170); c.lineTo(PW - 72, 1170); c.stroke();
      c.textAlign = "left";
      if (events && events.polar) {
        // polar day / night: no sunrise or sunset to list, so one line across the row up to the QR code,
        // shrunk if needed (the sentence is far wider than one 230px time slot in every language)
        var pw = PW - 72 - 214 - 24 - 72, fs = 44;
        c.direction = document.documentElement.dir === "rtl" ? "rtl" : "ltr";   // left-aligned like the tagline below it
        c.fillStyle = "#9ca3af"; c.font = "500 24px " + sans; c.fillText(dtOf(events.polar === "day" ? set : rise), 72, 1216);
        c.fillStyle = "#ffb347"; c.font = "700 44px " + logo;
        while (fs > 26 && c.measureText(rise.textContent).width > pw) { fs -= 2; c.font = "700 " + fs + "px " + logo; }
        c.fillText(rise.textContent, 72, 1266);
        c.direction = "ltr";
      } else {
        [[rise, 72], [noon, 302], [set, 532]].forEach(function (s) {
          c.fillStyle = "#9ca3af"; c.font = "500 24px " + sans; c.fillText(dtOf(s[0]), s[1], 1216);
          c.fillStyle = "#ffb347"; c.font = "700 44px " + logo; c.fillText(s[0].textContent, s[1], 1266);
        });
      }
      c.direction = document.documentElement.dir === "rtl" ? "rtl" : "ltr";   // Urdu shapes and orders correctly
      c.fillStyle = "#ffffff"; c.font = "600 34px " + sans;   // the site's lead line (hero.title)
      var ty = wrap(c, attr("tagline"), 72, 1322, 690, 42);
      c.direction = "ltr";
      c.fillStyle = "#ffb347"; c.font = "700 30px " + logo;
      var qr = (window.NT_QR || {})[L] || (window.NT_QR || {}).en;
      c.fillText(qr ? qr.url.replace(/^https:\/\//, "").replace(/\/$/, "") : "nu-time.org", 72, Math.max(1396, ty + 50));
      if (qr) {
        var n = qr.rows.length, Q = 214, qx = PW - 72 - Q, qy = 1196, m = (Q - 20) / n;
        c.fillStyle = "#ffffff"; c.beginPath();
        if (c.roundRect) c.roundRect(qx, qy, Q, Q, 14); else c.rect(qx, qy, Q, Q);
        c.fill(); c.fillStyle = "#111";
        for (var r = 0; r < n; r++) for (var k = 0; k < n; k++)
          if (qr.rows[r].charAt(k) === "1") c.fillRect(qx + 10 + k * m, qy + 10 + r * m, Math.ceil(m), Math.ceil(m));
        c.textAlign = "center"; c.fillStyle = "#9ca3af"; c.font = "500 20px " + sans;
        c.fillText(attr("scan"), qx + Q / 2, qy + Q + 30);
      }
      return cv;
    }
    function openPoster() {
      var go = function () {
        var cv = makePoster(), url = cv.toDataURL("image/png");
        pImg.src = url; pSave.href = url;
        pFile = null; pShare.hidden = true;
        if (cv.toBlob && navigator.canShare) cv.toBlob(function (b) {
          try { var f = new File([b], "nu-time.png", { type: "image/png" }); if (navigator.canShare({ files: [f] })) { pFile = f; pShare.hidden = false; } } catch (e) {}
        }, "image/png");
        if (!dlg.open) dlg.showModal();
      };
      // make sure the wordmark font is ready before drawing on the canvas
      if (document.fonts && document.fonts.load) document.fonts.load('800 46px "Orbitron"').then(go, go); else go();
    }
    pBtn.addEventListener("click", openPoster);
    pShare.addEventListener("click", function () { if (pFile) navigator.share({ files: [pFile], text: "https://nu-time.org" }).catch(function () {}); });
    dlg.querySelector("[data-poster-close]").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });   // tap outside to close
  } else if (pBtn) pBtn.hidden = true;   // very old browsers: no <dialog>, no poster

  function frame() {
    var ms = Date.now();
    if (ms - skyAt > 1000) { skyAt = ms; updateSky(ms); }
    var d = uni(ms).display;
    if (d !== last) {
      last = d; big.innerHTML = d.split("").map(function (ch) { return ch === ":" ? '<span class="cl">:</span>' : '<span class="dg">' + ch + "</span>"; }).join("");
      barNow.style.left = (frac(ms) * 100).toFixed(2) + "%";
    }
    draw(ms);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
