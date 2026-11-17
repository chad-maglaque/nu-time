# The Nu:Time Standard v1.0

**Status:** Public draft for comment · **Steward:** Nu-Time Inc. · **Licence:** CC BY 4.0 · **Updated:** 2026-11-17

Nu:Time™ (刻时 Ke-Shi™) is an open standard for representing time and place. It defines a decimal division of the day, one universal clock for the whole planet, and a single angular unit — the **kè** — shared by time and geography. Its reference is the Earth itself: the day is one turn of the planet, so Nu:Time never needs a leap second.

## 1. Units of time

| Unit | Chinese | Fraction of day | Subdivision | Nominal SI duration |
|---|---|---:|---|---:|
| Day | 日 rì | 1 | 10 gongs | 86,400 s |
| **Gong** | 更 gēng | 1/10 | 10 kè · 100 beats | 8,640 s (2 h 24 min) |
| **Kè** | *see §1.2* | 1/100 | 10 beats | 864 s (14.4 min) |
| **Beat** | *see §1.2* | 1/1,000 | 100 ticks | 86.4 s |
| **Tick** | *see §1.2* | 1/100,000 | — | 0.864 s |

- 1 day = 10 gongs = 100 kè = 1,000 beats = 100,000 ticks.
- **The Earth is the reference.** A Nu:Time day is one rotation of the Earth (the mean solar day, as measured by UT1), and every unit is an exact fraction of it. SI durations are nominal: as the Earth's rotation varies, a real tick differs from 0.864 s by roughly ten nanoseconds.
- Nominally, 1 SI second = 1.157407… ticks and 1 hour = 41.666… beats.

### 1.1 Display format

The canonical display is **`GG:BB:TT`** — gong (00–09), beat within the gong (00–99), tick within the beat (00–99). The kè is the tens digit of `BB`: in `05:37:50`, the time is gong 5, kè 53, beat 537 of the day.

```
ticksOfDay = gong × 10,000 + beatWithinGong × 100 + tickWithinBeat
beatsOfDay = ticksOfDay / 100
keOfDay    = ticksOfDay / 1,000
```

Implementations **must** truncate (floor) to the current tick and never round ahead.

### 1.2 Localized names

Translate the names, never the durations or the field order. `GG:BB:TT` is identical in every locale.

| Locale | Gong | Kè | Beat | Tick |
|---|---|---|---|---|
| English | gong | kè | beat | tick |
| French / Spanish / Italian | gong | kè | beat | tic |
| German | Gong | Kè | Beat | Tick |
| Chinese | 更 gēng | *under review* | *under review* | *under review* |

**Chinese names are under cultural review.** Earlier design work labelled gong, beat and tick 更 · 分 · 刻; this standard's use of the kè as a hundredth of the day (and 3.6° of arc) follows the historical 刻. The two readings conflict, and the choice touches language and heritage, so v1.0 fixes only 更 for the gong and leaves the other Chinese names open until review with native speakers, historians of Chinese timekeeping and the community (§9).

## 2. Universal synchronization

- **Universal Nu:Time** is the default and canonical reference. Gong `00:00:00` begins at midnight on the Prime Meridian — **00:00:00 UT1**, which is 00:00 UTC to within 0.9 s (about one tick). `05:00:00` is noon at Greenwich.
- Every place on Earth reads the same universal Nu:Time at the same instant. Nu:Time defines no time zones, no daylight saving and no date line.
- Every stored or transmitted Nu:Time value **must** carry its reference (§5). Absent a reference, a value is universal.

### 2.1 No leap seconds

UTC fixes the day at 86,400 atomic seconds. The Earth's turn is not fixed — it varies by a millisecond or two — so UTC has needed 27 leap seconds since 1972 to stay within 0.9 s of the planet, and international metrology has resolved to stop adding them by 2035, after which civil time will drift away from the sun.

Nu:Time has nothing to leap. It divides the Earth's actual turn, so the day is the unit and the tick is derived from it — not the other way round. Nu:Time stays with the sun indefinitely.

Implementations obtain universal Nu:Time from **UT1 = UTC + DUT1**, where DUT1 (|DUT1| < 0.9 s today) is published by the International Earth Rotation and Reference Systems Service (IERS). A device without DUT1 **may** use UTC directly; its error is then under about one tick. A device deriving Nu:Time from UTC **must not** step backwards during a UTC leap second: it holds the current tick.

### 2.2 Days, not leap years

Nu:Time v1 defines the time of day. Dates **may** be written as a **Nu:Day number** — the Modified Julian Day number, a plain count of days beginning at midnight at Greenwich on 17 November 1858 (Nu:Day 0). It has no months, no weeks and no leap years: 1 January 2000 is Nu:Day 51544; 17 November 2026 is Nu:Day 61361. A full Nu:Time stamp reads `61361 · 05:37:50`.

Calendars that keep a year in step with the seasons always need some leap rule, because the Earth's orbit is about 365.2422 days long. Such calendars may be used alongside Nu:Time and are outside this standard.

### 2.3 Optional local references

Devices **may** additionally display, clearly labelled:

| Reference | Day begins at | Use |
|---|---|---|
| `utc` (universal) | Midnight at Greenwich | Canonical. Coordination, records, interchange. |
| `solar` (mean solar) | Local mean solar midnight: universal + longitude/15 h | "Your sun": noon ≈ 05:00:00 at your longitude. |
| `ke` (kè-quantized solar) | As `solar`, longitude rounded to the nearest kè (3.6°) | Regional solar days in 10-beat steps. |
| `civil` (legacy) | Local wall-clock midnight (IANA zone) | Transition aid during adoption. |

Universal and local values **must never** be mixed silently.

## 3. The kè as an angle

A full circle is **100 kè**: 1 kè = 3.6°, 1° = 5/18 kè ≈ 0.2778 kè. Because the Earth turns one circle per day, one kè of longitude equals one kè of time.

### 3.1 Coordinates

- **Nu:Long** — longitude in kè, 0 to 50 east (positive) or west (negative). 50 kè = 180°. The Prime Meridian (Greenwich) is 0 kè.
- **Nu:Lat** — latitude in kè, 0 to 25 north (positive) or south (negative). 25 kè = 90°.

### 3.2 Geometry

| Angle | Kè | Degrees |
|---|---:|---:|
| Full turn | 100 | 360° |
| Straight angle · sum of a triangle's angles | 50 | 180° |
| Right angle | 25 | 90° |
| Equilateral triangle | 16⅔ | 60° |
| Regular pentagon, interior / exterior | 30 / 20 | 108° / 72° |
| Regular hexagon, interior | 33⅓ | 120° |

Trigonometric functions take kè naturally: sin 25 kè = 1, cos 50 kè = −1; a daily cycle has a period of exactly 100 kè.

### 3.3 Dials

An analog Nu:Time dial has no numerals: four quarter marks (0, 25, 50, 75 kè) with zero emphasized, where gong, beat and tick roll over. The dial **should** be turned by the wearer's Nu:Long (rounded to the nearest kè): at Greenwich zero sits at the bottom, and everywhere the gong hand points straight up at local solar noon.

## 4. Solar position

Local **mean** solar noon, in universal Nu:Time, at a Nu:Long of *X* kè east:

```
solarNoon = 05:00:00 − X kè = 500 − 10·X beats   (X negative for west)
```

Examples: Shanghai (121.47° E = 33.74 kè E) → about `01:62:58`; Delhi (77.21° E = 21.45 kè E) → about `02:85:53`; New York (74.01° W = 20.56 kè W) → about `07:05:57`.

**Apparent** (true) solar noon differs from mean solar noon by the equation of time — at most about ±1.1 kè (±16 min) through the year — and implementations displaying the real sun **should** apply it. Sunrise and sunset use the standard horizon depression of 0.833° (0.231 kè) and depend on date and Nu:Lat; near the poles the sun may not rise or set.

Solar calculations **must** use the absolute instant, never a decimal value misread as UTC.

## 5. Interchange record: `nu-time/v1`

```json
{
  "schema": "nu-time/v1",
  "instant": "2026-11-17T12:00:00Z",
  "reference": "utc",
  "nuDay": 61361,
  "location": { "nuLat": 8.68, "nuLong": 33.74, "latitude": 31.23, "longitude": 121.47 },
  "ticksOfDay": 50000,
  "gong": 5, "beat": 0, "tick": 0,
  "display": "05:00:00",
  "locale": "en"
}
```

Invariants: `0 ≤ gong ≤ 9`; `0 ≤ beat ≤ 99`; `0 ≤ tick ≤ 99`; `ticksOfDay = gong·10000 + beat·100 + tick`; units identical in every locale; instant and location are separate fields.

## 6. Conformance test vectors

Time of day, with DUT1 = 0:

| UT1 / UTC | Nu:Time (`utc`) |
|---|---|
| 00:00:00.000 | `00:00:00` |
| 00:00:00.863 | `00:00:00` |
| 00:00:00.864 | `00:00:01` |
| 06:00:00 | `02:50:00` |
| 07:12:00 | `03:00:00` |
| 12:00:00 | `05:00:00` |
| 18:00:00 | `07:50:00` |
| 23:59:59 | `09:99:98` |
| 23:59:59.136 | `09:99:99` |

| Degrees | Kè |
|---:|---:|
| 3.6 | 1 |
| 90 | 25 |
| −74.006 (New York) | −20.557 |
| 180 / −180 | 50 |

| Date (at Greenwich) | Nu:Day |
|---|---:|
| 1858-11-17 | 0 |
| 1970-01-01 | 40587 |
| 2000-01-01 | 51544 |
| 2026-11-17 | 61361 |

A conforming implementation passes every vector, derives time from the absolute instant on every update (never by accumulating ticks), and labels any non-universal reference.

## 7. Hardware timing

One tick is nominally 0.864 s, so an oscillator of *f* Hz needs *f* × 0.864 cycles per tick. Any frequency divisible by 125 divides exactly.

| Crystal | Cycles per tick | Method |
|---|---:|---|
| **3.456 MHz** | **2,985,984** | Exact integer divide — the reference Nu:Time crystal |
| 32.768 kHz | 28,311.552 | Phase accumulator alternating 28,311 / 28,312 cycles (69 of every 125 ticks are long) |
| 1 / 10 / 16 MHz | 864,000 / 8,640,000 / 13,824,000 | Exact integer divide |

Accuracy is set by the oscillator's ppm error, temperature and ageing, not by the divider: 20 ppm ≈ 2 ticks/day; 2 ppm ≈ 0.2 ticks/day. Devices **should** discipline their clock via GNSS or NTP and apply DUT1 when available, and **must not** advance time by sleeping 864 ms in a loop.

## 8. Names and certification

The specification text is licensed CC BY 4.0. The names **Nu:Time™**, **Ke-Shi™**, **刻时™** and their logos are trademarks of Nu-Time Inc. and are not licensed by this document. The names of the units — gong, kè, beat, tick and any Chinese names adopted for them — are ordinary words and are not claimed by anyone: use them freely. Any implementation may describe itself as "Nu:Time compatible". Implementations passing §6 may apply for the **Nu:Time Certified** mark. Nu-Time Inc. pledges not to assert any patent it holds that is necessarily infringed by implementing this standard.

## 9. Planned for v1.1

- Chinese names for the kè, beat and tick, after cultural review (§1.2).
- Standard binary encoding and network time protocol profile.
- Conformance programme operating rules.
