# Ke-Shi / Nu:Time — Architecture and Implementation Handoff

**Status:** Consolidation of the agreed time-unit model and previously discussed browser implementation, with hardware design recommendations clearly identified as proposals.  
**Date:** 2026-11-16

## 1. Executive overview

**Ke-Shi / Nu:Time** is a decimal, 10-part division of the civil day, with a culturally localized vocabulary and a location-aware astronomical presentation. It is **not** a claim to reproduce an historical Chinese clock exactly. Its decimal arithmetic is modern; its names and the idea of dividing the day into named watches draw inspiration from East Asian timekeeping.

The canonical hierarchy is:

- **1 day = 10 gongs/geng** (top-level divisions).
- **1 gong = 100 beats** (middle-level divisions).
- **1 beat = 100 ticks** (smallest displayed divisions).
- Thus **1 day = 1,000 beats = 100,000 ticks**.
- Canonical display: **`GG:BB:TT`**, with `GG` in `00–09`, `BB` in `00–99`, and `TT` in `00–99`.

**Important:** A *beat* is **not** 1/100,000 of a day. That is a **tick**. Earlier discussions confused these quantities; the definitions above are authoritative for this handoff.

## 2. Units and exact SI conversions

| Unit | Subdivisions | Fraction of day | Conventional duration |
|---|---:|---:|---:|
| Day | 10 gongs | 1 | 24 h = 86,400 s |
| Gong / geng | 100 beats | 1/10 | 2 h 24 min = 8,640 s |
| Beat / fen | 100 ticks | 1/1,000 | 86.4 s |
| Tick / ke | — | 1/100,000 | 0.864 s |

Consequences:

- **1 conventional second = 1.157407407… ticks.**
- **1 conventional minute = 69.444444… ticks = 0.694444… beats.**
- **1 conventional hour = 41.666666… beats.**
- **Noon = `05:00:00` = beat 500**, when using local civil midnight as the epoch.
- **06:00 = `02:50:00` = beat 250; 18:00 = `07:50:00` = beat 750.**
- Example: **07:12:00 = beat 300 = `03:00:00`.**
- Example: **07:13:00 ≈ beat 300.6944 = `03:00:69`** (truncate ticks; rounding gives `03:00:69` as well).

**Canonical indexing:** `totalTicks = gong × 10,000 + beatWithinGong × 100 + tickWithinBeat`; `totalBeats = totalTicks / 100`. Display values are zero-padded and generally truncated to the current tick, not rounded ahead.

## 3. Historical and cultural context

### Chinese and East Asian timekeeping

Traditional Chinese timekeeping used several systems over different eras, including **twelve double-hours** (`shíchen`, 時辰/时辰), **night watches** (`gēng`, 更), and subdivisions associated with **kè** (刻), often linked to water clocks and later standardized schemes. Their lengths, uses, and relationships changed historically. A *gēng* was commonly a **night watch**, not a universal 1/10-of-day unit; *kè* historically did **not** mean the modern Nu:Time 0.864-second tick. The term **fēn** (分) denotes a division or minute in modern Chinese usage, but the Nu:Time beat is a newly defined duration.

Ke-Shi therefore borrows a **linguistic and conceptual lineage**—named divisions, watches, and attention to the Sun—without representing its `10 × 100 × 100` hierarchy as an ancient Chinese standard. The name **Ke-Shi** and its exact Chinese-character styling should be treated as product nomenclature rather than a historically attested label for this decimal scheme.

### Other decimal-time precedents

Modern decimal time has precedents in proposals such as French Revolutionary decimal time (10 hours/day, 100 decimal minutes/hour, 100 decimal seconds/minute). Nu:Time shares the decimal structure, but intentionally assigns different names and emphasizes geolocation and solar context. The exact Nu:Time **tick** corresponds in duration to a French decimal second; the **beat** corresponds to a French decimal minute.

## 4. Localized nomenclature

The following naming choices were agreed in earlier design work:

| Locale | Gong / first field | Beat / second field | Tick / third field | Spoken pattern |
|---|---|---|---|---|
| Chinese | **gēng** (更) | **fēn** (分) | **kè** (刻) | gēng : fēn : kè |
| English | **gong** | **beat** | **tick** | gong : beat : tick |
| French | **gong** | **beat** | **tic** | gong : beat : tic |
| Spanish | **gong** | **beat** | **tic** | gong : beat : tic |
| German | **gong** | **beat** | **tick** | gong : beat : tick |

**Localization principle:** Translate the *labels*, **not** the durations or field order. Preserve `GG:BB:TT` for interchange and numeric display. The Chinese characters above are the agreed UI labels; do not infer that they carry the same duration in historical Chinese usage.

**Terminology caution:** Previous drafts sometimes used “geng hours,” “minutes,” “seconds,” or “100,000 beats/day.” For unambiguous engineering documentation, use **gong/beat/tick**, with *geng/fen/ke* as Chinese localized names, and reserve **second** for the SI second.

## 5. Time reference, geography, and astronomical interpretation

There are three distinct quantities to keep separate:

1. **Absolute instant:** UTC/Unix time; the shared source of truth.
2. **Displayed decimal time:** Fraction of a specified day (e.g., UTC day, local civil day, or a longitude-offset solar day).
3. **Solar conditions:** Sun altitude and azimuth for a selected latitude, longitude, and instant; used for sunrise/sunset and sky-color rendering.

A prior Nu:Time browser prototype computes its digital decimal readout from **UTC**, while its analog clock hands use a **longitude-derived offset** (longitude rounded to the nearest **3.6°**, equivalent to one-hundredth of a day / 14.4 conventional minutes). This distinction can produce different apparent times on the two displays; it is a **legacy implementation detail**, not a resolved universal time-zone policy.

### Recommended explicit modes (design proposal)

- **UTC Nu:Time:** Day boundary at 00:00 UTC; reproducible worldwide.
- **Civil-local Nu:Time:** Day boundary at local civil midnight, using an IANA time zone and its DST rules.
- **Longitude/solar Nu:Time:** Day boundary derived from longitude (`longitude / 15` conventional hours from UTC), without political time zones. This is **mean solar time**, not true apparent solar time; equation-of-time corrections would be needed for an apparent-solar clock.

Store and expose the chosen mode. Do **not** silently conflate longitude offset, civil local time, and solar noon. Sunrise is **not** fixed at beat 250, and sunset is **not** fixed at beat 750: these depend on date, latitude, longitude, time zone, and solar geometry.

For civil-local conversion, a day containing a DST change has 23 or 25 elapsed hours; decide whether the decimal display tracks **local wall-clock fraction of nominal 24 h** (recommended for familiarity) or **elapsed fraction of the actual civil day**. These yield different results during transitions. This policy remains to be finalized.

## 6. Mathematical conversion

For an ordinary 86,400-SI-second reference day, let `s` be elapsed conventional seconds since the chosen midnight, including fractions, normalized to `[0,86400)`.

```text
fractionOfDay = s / 86400
beatsOfDay    = fractionOfDay * 1000
wholeTicks    = floor(fractionOfDay * 100000)

gong          = floor(wholeTicks / 10000)
beat          = floor((wholeTicks % 10000) / 100)
tick          = wholeTicks % 100

format = pad2(gong) + ':' + pad2(beat) + ':' + pad2(tick)
```

Inverse:

```text
ticksOfDay    = gong*10000 + beat*100 + tick
secondsOfDay  = ticksOfDay * 0.864
beatsOfDay    = ticksOfDay / 100
```

**Examples:**

| Conventional local time | Beats since midnight | Nu:Time |
|---|---:|---|
| 00:00:00 | 0 | `00:00:00` |
| 06:00:00 | 250 | `02:50:00` |
| 07:12:00 | 300 | `03:00:00` |
| 12:00:00 | 500 | `05:00:00` |
| 18:00:00 | 750 | `07:50:00` |
| 23:59:59 | 999.9884… | `09:99:98` |

For 23:59:59, the integer tick index is `99998`; the last tick `09:99:99` begins at 23:59:59.136 conventional time.

### JavaScript reference conversion

```js
function nuTimeFromSeconds(secondsSinceMidnight) {
  const s = ((secondsSinceMidnight % 86400) + 86400) % 86400;
  const totalTicks = Math.floor(s * 100000 / 86400);
  const gong = Math.floor(totalTicks / 10000);
  const beat = Math.floor(totalTicks / 100) % 100;
  const tick = totalTicks % 100;
  const pad = n => String(n).padStart(2, '0');
  return {
    gong, beat, tick,
    beatsOfDay: totalTicks / 100,
    text: `${pad(gong)}:${pad(beat)}:${pad(tick)}`
  };
}
```

For a robust clock, derive the time from an absolute timestamp on every render, rather than accumulating fractional ticks frame-by-frame.

## 7. Browser/software implementation — existing prototype

Previously discussed browser architecture:

- **HTML/CSS/JavaScript** single-page clock, with **Tailwind CSS** for styling.
- **Canvas** analog dial with moving hands and a digital `GG:BB:TT` readout.
- **`requestAnimationFrame`** display update loop; compute current time using `new Date()` rather than incrementing a local counter.
- **City selector** with a collection of approximately 50 cities, including Helsinki; each city supplies latitude and longitude.
- **Geolocation API** to obtain user coordinates when permission is granted; **Greenwich** as the fallback.
- **SunCalc v1.8.0** to compute solar position for a selected instant and coordinates.
- **Sunrise/sunset markers** and a dynamically changing sky-color background.
- A sky-color implementation blends a palette across solar-altitude ranges, including blue daylight, warm twilight, and dark astronomical night; colors change continuously as time advances.
- Background color transition CSS around **0.8 s** smooths visual updates.

**Known implementation nuance:** The existing prototype updates the background-color function from the animation loop, but actual solar color changes are slow. For efficiency, the astronomical calculation could be throttled to ~1 Hz or slower while clock hands animate at display refresh rate.

**Prior generated prototype artifact:** `nu_time_exact_with_sky_background.html` (previous conversation artifact; availability/path should be verified before modifying it).

### Proposed module boundaries

```text
UTC clock / system clock / optional NTP
                  |
          Time reference layer
       (UTC, IANA civil, solar)
                  |
         Decimal conversion core
          (ticks, beats, gong)
                  |
         Locale / formatting layer
                  |
    +-------------+---------------+
    |             |               |
 Digital UI    Dial UI       External API
    |
 Astronomical view <--- SunCalc / ephemeris
    |                    ^
 Sky gradient          date + lat/lon
 Sunrise/sunset
```

Keep the **conversion core independent of locale and rendering**. Solar position must use the **absolute UTC instant**, not a decimalized wall-clock value misinterpreted as UTC.

## 8. Hardware clock implementation

**Design status:** The following are technically viable **engineering proposals**, not evidence that a specific crystal, PCB, firmware, or RTC was previously selected or built.

### 8.1 Fundamental oscillator math

A Nu:Time tick lasts exactly **0.864 SI seconds** on a nominal 86,400-second day, so the required tick rate is:

```text
100000 / 86400 = 125/108 = 1.157407407... ticks/s
```

For a quartz oscillator at `f` hertz, the average required oscillator cycles per tick are:

```text
cyclesPerTick = f * 0.864 = f * 108 / 125
```

An oscillator frequency divisible by **125** produces an **integer** number of cycles per tick. Common crystal frequencies and their relationships:

| Crystal / reference | Cycles per 0.864-s tick | Implementation |
|---|---:|---|
| **32,768 Hz** watch crystal | **28,311.552** | Fractional divider / accumulator; no fixed integer divider |
| **1 MHz** | **864,000** | Exact integer divide |
| **4 MHz** | **3,456,000** | Exact integer divide |
| **8 MHz** | **6,912,000** | Exact integer divide |
| **10 MHz** | **8,640,000** | Exact integer divide |
| **12 MHz** | **10,368,000** | Exact integer divide |
| **16 MHz** | **13,824,000** | Exact integer divide |
| **20 MHz** | **17,280,000** | Exact integer divide |

**Key point:** A standard **32.768-kHz watch crystal is entirely suitable**; its fractional cycles/tick are handled digitally. A faster clock divisible by 125 makes the divider especially simple but is not inherently more accurate: **ppm tolerance, temperature drift, aging, and synchronization** determine accuracy.

### 8.2 32.768-kHz crystal: exact rational division

Because `32768 × 108/125 = 28311 + 69/125` cycles/tick, successive tick lengths can alternate between **28,311 and 28,312 oscillator cycles**, distributed by an accumulator so the long-term average is exact relative to the crystal. More generally, count quartz cycles and calculate the integer tick count as:

```text
ticksElapsed = floor(oscillatorCycles * 125 / (32768 * 108))
             = floor(oscillatorCycles * 125 / 3538944)
```

This produces a precisely averaged **100,000 ticks per 86,400 SI seconds** assuming an ideal 32,768-Hz source. Actual time accuracy follows the quartz reference's ppm error.

An easier MCU approach is to run the RTC at **1 Hz**, maintain the current UTC second and fractional phase, and compute `floor(millisecondsSinceMidnight * 100000 / 86400000)`; this is correct to millisecond resolution without requiring a physical 1.1574-Hz interrupt.

### 8.3 Recommended physical architecture

```text
32.768 kHz temperature-compensated RTC / crystal
                 |
        RTC UTC epoch counter
                 |
     MCU (low-power or standard)
       |          |           |
 Decimal core  Time-zone   Solar model
       |          |           |
  LCD/OLED/e-ink  Buttons/GPS/Wi-Fi/BLE
       |
  GG:BB:TT display / optional analog hands
```

**Suggested components/classes:** RTC with backup supply, MCU with integer arithmetic and low-power sleep, optional GPS PPS or NTP for synchronization, and a display sized for `GG:BB:TT`. A **TCXO** or calibrated RTC improves holdover stability relative to an uncompensated watch crystal.

### 8.4 Firmware design

1. Initialize RTC in **UTC** and check validity/backup status.
2. Synchronize against NTP or GNSS when available; record sync quality.
3. Resolve selected city, latitude/longitude, IANA zone, and reference mode.
4. Derive decimal fields from the **current absolute time** and chosen day-boundary rule.
5. Update display on each tick transition (about every **864 ms**), or more often for smooth analog hands.
6. Compute Sun altitude/sunrise/sunset separately at a slower rate.
7. Preserve UTC and location/time-zone settings in nonvolatile storage; handle power failure and DST.

**Avoid cumulative drift:** Do not implement a Nu:Time tick by simply sleeping 864 ms in a loop; scheduling latency accumulates. Instead compare the current RTC/monotonic timestamp to the next absolute tick boundary.

### 8.5 Precision and drift examples

At **20 ppm**, a free-running oscillator can drift approximately:

```text
86400 s/day × 20/1,000,000 = 1.728 SI s/day
1.728 / 0.864 = 2 Nu:Time ticks/day
```

At **2 ppm**, the corresponding drift is **0.1728 SI s/day = 0.2 Nu:Time ticks/day**. These are examples of nominal oscillator error, not guaranteed component specifications.

## 9. Solar visualization and sky-color matrix

The astronomical display is driven by **solar altitude** (and optionally azimuth), computed from date, absolute time, latitude, and longitude. It is independent of the decimal unit hierarchy.

Earlier exploration included:

- A **1,000-column timeline**, one column per **beat** across the day.
- Latitude/date-dependent gradients with transitions across astronomical night, twilight, sunrise/sunset, and daylight.
- Solstice/equinox tests, including high latitudes and polar day/night.
- An optimization idea using **effective latitude** (`latitude − solar declination`) to compress a lookup matrix, approximately **1,000 × 227** samples over a proposed effective-latitude range of roughly **−113.44° to +113.44°**. This is an **approximation/visualization proposal**, not a general replacement for full solar-position computation.

Use actual Sun altitude to drive rendering whenever possible. A color gradient is an **artistic visualization**; real sky color additionally depends on cloud cover, atmospheric aerosols, weather, elevation, and viewing direction.

## 10. Data model and interoperability (proposal)

Recommended serialized form:

```json
{
  "schema": "nu-time/v1",
  "instant": "2026-11-16T12:00:00Z",
  "reference": "UTC",
  "location": { "latitude": 60.1699, "longitude": 24.9384, "ianaTimeZone": "Europe/Helsinki" },
  "ticksOfDay": 50000,
  "gong": 5,
  "beat": 0,
  "tick": 0,
  "display": "05:00:00",
  "locale": "en"
}
```

The example intentionally uses **UTC** as its reference; `05:00:00` is the decimal representation of **12:00 UTC**, **not** of Helsinki local noon. In software, always include the reference mode with any timestamp to avoid this ambiguity.

### Core invariants

- `0 ≤ gong ≤ 9`; `0 ≤ beat ≤ 99`; `0 ≤ tick ≤ 99`.
- `0 ≤ ticksOfDay ≤ 99,999`.
- `ticksOfDay = gong*10000 + beat*100 + tick`.
- `0 ≤ beatsOfDay < 1000`.
- Time units and conversions are **identical in every locale**.
- UTC instant and location are separate fields.

## 11. Testing and acceptance criteria

**Conversion:** Test midnight, 06:00, 07:12, noon, 18:00, last tick of day, and wraparound. Verify that exactly **100,000 ticks** and **1,000 beats** span a nominal day.

**Localization:** Verify the agreed Chinese/English/French/Spanish/German terms without changing arithmetic.

**Geography:** Compare UTC, Helsinki civil-local time, and longitude-based solar time for the same instant. Test DST transitions explicitly.

**Astronomy:** Verify sunrise/sunset positions at equinox/solstice, near the poles, and during polar day/night. Ensure the visual background advances with the selected city's **actual** solar altitude, not a generic fixed beat.

**Hardware:** Validate divider/phase accumulator against a UTC reference for at least a full day; test RTC battery backup, time synchronization, oscillator drift, and wake-from-sleep transitions.

## 12. Decisions and open items

### Established

- **10 gongs/day; 100 beats/gong; 100 ticks/beat.**
- **1,000 beats/day; 100,000 ticks/day.**
- **86.4 SI seconds/beat; 0.864 SI seconds/tick.**
- **`GG:BB:TT`** display format.
- Localized terms as listed in §4.
- Browser prototype with canvas clock, city selection, SunCalc, sunrise/sunset, and solar-altitude background.

### Not established in the retrieved design history

- A finalized hardware PCB, selected crystal/RTC part number, or exact oscillator frequency.
- Whether UTC, civil-local, or solar-local time should be the **default canonical display** across all implementations.
- A final policy for DST days, leap seconds, and apparent versus mean solar time.
- A finalized API protocol, synchronization transport, or hardware product specification.
- Historically validated Chinese branding/characters beyond the agreed localized UI labels.

The crystal and MCU design in §8 and the schema in §10 are **handoff-ready proposals**, not assertions that these decisions were previously made.
