/* Nu:Time(TM) reference core for C / embedded — https://nu-time.com
 * Copyright (c) 2025-2026 Nu-Time Inc. Licensed under MIT OR Apache-2.0, at your option.
 * "Nu:Time", "Ke-Shi" and "刻时" are trademarks of Nu-Time Inc.
 *
 * Header-only. Integer arithmetic only; no floating point, no libc time zones.
 */
#ifndef NUTIME_H
#define NUTIME_H
#include <stdint.h>

#define NT_DAY_MS 86400000UL
#define NT_TICKS  100000UL

typedef struct { uint8_t gong, beat, tick; uint32_t ticks_of_day; } nt_time;

/* Milliseconds into the (universal) day -> Nu:Time. Truncates; never rounds ahead. */
static inline nt_time nt_from_ms(uint32_t ms_into_day) {
  nt_time t;
  uint32_t ticks = (uint32_t)(((uint64_t)(ms_into_day % NT_DAY_MS) * NT_TICKS) / NT_DAY_MS);
  t.ticks_of_day = ticks;
  t.gong = (uint8_t)(ticks / 10000);
  t.beat = (uint8_t)(ticks / 100 % 100);
  t.tick = (uint8_t)(ticks % 100);
  return t;
}

/* Unix time (ms) -> universal Nu:Time. */
static inline nt_time nt_from_unix_ms(uint64_t unix_ms) { return nt_from_ms((uint32_t)(unix_ms % NT_DAY_MS)); }

/* Nu:Day number (Modified Julian Day): whole days since 1858-11-17 at Greenwich. No leap years. */
static inline uint32_t nt_nu_day(uint64_t unix_ms) { return (uint32_t)(unix_ms / NT_DAY_MS) + 40587UL; }

/* "GG:BB:TT\0" into buf[9]. */
static inline void nt_format(nt_time t, char buf[9]) {
  buf[0] = '0' + t.gong / 10; buf[1] = '0' + t.gong % 10; buf[2] = ':';
  buf[3] = '0' + t.beat / 10; buf[4] = '0' + t.beat % 10; buf[5] = ':';
  buf[6] = '0' + t.tick / 10; buf[7] = '0' + t.tick % 10; buf[8] = '\0';
}

/* ── 32.768 kHz phase accumulator: 32768 × 0.864 = 28311 + 69/125 cycles per tick ──
 * Call nt_acc_next() after each tick to get the cycle count for the following tick.
 * Long-run average is exact relative to the crystal. */
typedef struct { uint8_t phase; } nt_acc;
static inline uint16_t nt_acc_next(nt_acc *a) {
  a->phase = (uint8_t)(a->phase + 69);
  if (a->phase >= 125) { a->phase = (uint8_t)(a->phase - 125); return 28312; }
  return 28311;
}

/* 3.456 MHz reference crystal: exactly 2,985,984 cycles per tick. */
#define NT_CYCLES_PER_TICK_3456KHZ 2985984UL

#endif /* NUTIME_H */
