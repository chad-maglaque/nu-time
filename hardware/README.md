# Nu:Time reference clock (open hardware)

**Status:** design notes and bill of materials — schematic and PCB to follow. Licensed CERN-OHL-P 2.0.

A low-power reference clock that shows universal Nu:Time and the local sky, for makers and manufacturers to build on.

## Block diagram

```
 GNSS (BeiDou/GPS/Galileo) ──► MCU ◄── RTC 32.768 kHz (deep sleep)
   UTC + Nu:Lat/Nu:Long          │  ▲
                                 │  └── 3.456 MHz Nu:Time oscillator (2,985,984 cycles/tick)
            ┌────────────────────┼─────────────────┐
     MIP LCD / e-ink        Haptic driver       Buttons / touch
     GG:BB:TT + day ring    pulse every kè      Piezo (gong chime)
                                 │
                       LiPo + charger + LDO
```

## Bill of materials (reference parts or equivalents)

| Block | Part | Role |
|---|---|---|
| MCU | Ultra-low-power Arm Cortex-M4, e.g. STM32L4 | Decimal core, display, power management |
| Nu:Time oscillator | 3.456 MHz quartz + load capacitors | Exactly 2,985,984 cycles per tick |
| RTC crystal | 32.768 kHz tuning fork | Deep-sleep timekeeping (phase accumulator 28,311 / 28,312) |
| GNSS | Multi-constellation, e.g. u-blox M8/M10 | UTC discipline; position in kè |
| Display | 1.54" memory-in-pixel LCD or e-ink, SPI | `GG:BB:TT` and the day ring at near-zero power |
| Haptics | TI DRV2605L + LRA | A gentle pulse every kè (14.4 min) |
| Audio | Piezo buzzer | Optional gong chime |
| Power | 1-cell LiPo, MCP73831 charger, low-Iq LDO | |

## Firmware rules

1. Keep the RTC in UTC; apply DUT1 when known (Standard §2.1).
2. Derive Nu:Time from the absolute instant on every update — never by sleeping 864 ms in a loop.
3. Discipline to GNSS or NTP when available; record sync quality.
4. Compute the Sun at ≤ 1 Hz; turn the dial by Nu:Long rounded to the nearest kè ([dial design](../docs/design/DIAL.md)).
5. Use [reference/c/nutime.h](../reference/c/nutime.h) and pass `tests/` vectors.

Note: 3.456 MHz is not a common stock crystal; any frequency divisible by 125 (1, 4, 8, 10, 16 MHz) also divides exactly, and a 32.768 kHz crystal works with the accumulator.
