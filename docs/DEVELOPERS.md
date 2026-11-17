# Developers

Everything you need to build with Nu:Time™: reference code in three languages sharing one set of test vectors, an open-hardware reference clock, and the rules for using the name.

**Licences:** code MIT OR Apache-2.0 · Standard and docs CC BY 4.0 · hardware CERN-OHL-P 2.0 · royalty-free patent pledge for implementers.

## JavaScript

Works in browsers and Node; no dependencies. [Download nutime.js](/assets/nutime.js)

```js
// <script src="https://nu-time.com/assets/nutime.js"></script>  or  const NuTime = require("./nutime.js")
NuTime.now(Date.now(), "utc").display          // "05:37:50"  universal Nu:Time
NuTime.now(Date.now(), "solar", { lon: 121.47 }) // your local solar day (Shanghai)
NuTime.nuLong(121.47)                           // 33.742 kè east
NuTime.fields(NuTime.solarNoonTicks(121.47)).display  // "01:62:58" mean solar noon, universal
NuTime.degreesToKe(90)                          // 25
NuTime.nuDay(Date.now())                        // 61361  Nu:Day number (no leap years)
NuTime.now(Date.now(), "utc", { dut1Ms: -120 }) // follow the Earth exactly with IERS DUT1 (no leap seconds)
NuTime.sun(Date.now(), 31.23, 121.47)           // { altitude, azimuth } in degrees
NuTime.record(Date.now(), "utc", { lat: 31.23, lon: 121.47 }) // nu-time/v1 interchange record
```

## Python

Python 3.8+, standard library only. [nutime.py](/reference/python/nutime.py)

```python
import nutime
print(nutime.now())                        # 05:37:50  (universal)
print(nutime.now("solar", longitude=77.21))  # Delhi solar day
nutime.nu_long(-74.006)                    # -20.557  (kè west)
print(nutime.solar_noon(-74.006))          # 07:05:57
nutime.parse("03:00:00").beats_of_day      # 300.0
nutime.nu_day(datetime.now(timezone.utc))  # 61361
```

## C (embedded)

Header-only, integer arithmetic, no time zones. [nutime.h](/reference/c/nutime.h)

```c
#include "nutime.h"
char buf[9];
nt_format(nt_from_unix_ms(unix_ms), buf);   /* "05:37:50" */
uint32_t day = nt_nu_day(unix_ms);           /* 61361 */

/* 32.768 kHz RTC: alternate 28,311 / 28,312 cycles per tick, exact on average */
nt_acc acc = {0};
uint16_t cycles = nt_acc_next(&acc);

/* 3.456 MHz crystal: exactly NT_CYCLES_PER_TICK_3456KHZ (2,985,984) cycles per tick */
```

## Test vectors

All three cores pass the same vectors ([vectors.json](/reference/vectors.json)). A conforming implementation must pass them too — see §6 of [the Standard](/spec/).

## Hardware

The Nu:Time reference clock is an open-hardware design for makers and manufacturers to build on.

| Block | Reference part (or equivalent) | Role |
|---|---|---|
| MCU | Ultra-low-power Arm Cortex-M4, e.g. STM32L4 | Decimal core, display, sleep management |
| Nu:Time oscillator | 3.456 MHz quartz + load capacitors | Exactly 2,985,984 cycles per tick |
| RTC crystal | 32.768 kHz tuning fork | Deep-sleep timekeeping via phase accumulator |
| GNSS | Multi-constellation (BeiDou, GPS, Galileo, GLONASS), e.g. u-blox M8/M10 | UTC discipline and Nu:Lat/Nu:Long in kè |
| Display | 1.54" memory-in-pixel LCD or e-ink (SPI) | `GG:BB:TT` and the day ring, near-zero power |
| Haptics | TI DRV2605L + LRA | A gentle pulse every kè (14.4 min) |
| Audio | Piezo buzzer | Optional gong chime |
| Power | Single-cell LiPo, MCP73831 charger, low-Iq LDO | |

Firmware rules: keep the RTC in UTC; derive Nu:Time from the absolute instant on every update; discipline to GNSS or NTP when available; compute the sun at ≤1 Hz; never advance time by sleeping 864 ms.

## Using the name

Nu:Time™, Ke-Shi™ and 刻时™ are trademarks of Nu-Time Inc. The open licences cover code, docs and designs — not the names or logos.

**Free for everyone:** the unit names — gong, kè, beat, tick, and the Chinese names (under cultural review) — and the arithmetic itself. Nobody owns them.

**You may, without asking:** say your product is "Nu:Time compatible", "supports the Nu:Time Standard" or "displays Nu:Time"; write about, teach and review Nu:Time.

**Please don't, without a licence:** name a product or company with Nu:Time, Ke-Shi or 刻时 (e.g. "Nu:Time Pro"); use the official logos; alter the marks (e.g. "NuTime"); or suggest your product is made, endorsed or certified by Nu-Time Inc.

**Nu:Time Certified:** implementations that pass the conformance tests may apply to use the Certified mark free of charge. Contact standards@nu-time.com.
