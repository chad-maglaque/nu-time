"""Nu:Time(TM) reference core for Python — https://nu-time.org

Copyright (c) 2025-2026 Nu-Time Inc. Licensed under MIT OR Apache-2.0, at your option.
"Nu:Time", "Ke-Shi" and "刻时" are trademarks of Nu-Time Inc.

1 day = 10 gongs = 100 Kè = 1,000 beats = 100,000 ticks; 1 tick = 0.864 s. Display GG:BB:TT.
Integer microseconds throughout; truncate, never round ahead.
The reference is the Earth's rotation (UT1): pass dut1 (UT1 - UTC, seconds, from IERS) for full accuracy.
No leap seconds, ever.
"""
from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone

DAY_US = 86_400_000_000
TICKS = 100_000


@dataclass(frozen=True)
class NuTime:
    ticks_of_day: int

    @property
    def gong(self) -> int: return self.ticks_of_day // 10_000
    @property
    def beat(self) -> int: return self.ticks_of_day // 100 % 100
    @property
    def tick(self) -> int: return self.ticks_of_day % 100
    @property
    def ke(self) -> int: return self.ticks_of_day // 1_000
    @property
    def beats_of_day(self) -> float: return self.ticks_of_day / 100

    def __str__(self) -> str:
        return f"{self.gong:02d}:{self.beat:02d}:{self.tick:02d}"


def _us_into_utc_day(dt: datetime) -> int:
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    dt = dt.astimezone(timezone.utc)
    return ((dt.hour * 3600 + dt.minute * 60 + dt.second) * 1_000_000 + dt.microsecond)


def from_datetime(dt: datetime, reference: str = "utc", longitude: float | None = None, dut1: float = 0.0) -> NuTime:
    """Nu:Time for an instant. reference: 'utc' (universal, default), 'solar' or 'ke' (needs longitude)."""
    us = _us_into_utc_day(dt) + round(dut1 * 1_000_000)
    if reference in ("solar", "ke"):
        if longitude is None:
            raise ValueError("longitude required for solar references")
        lon = round(longitude / 3.6) * 3.6 if reference == "ke" else longitude
        us += round(lon / 15 * 3_600_000_000)
    elif reference != "utc":
        raise ValueError(f"unknown reference {reference!r}")
    return NuTime(us % DAY_US * TICKS // DAY_US)


def now(reference: str = "utc", longitude: float | None = None) -> NuTime:
    return from_datetime(datetime.now(timezone.utc), reference, longitude)


def parse(text: str) -> NuTime:
    g, b, t = (int(x) for x in text.split(":"))
    if not (0 <= g <= 9 and 0 <= b <= 99 and 0 <= t <= 99):
        raise ValueError("expected GG:BB:TT with GG 00-09, BB 00-99, TT 00-99")
    return NuTime(g * 10_000 + b * 100 + t)


def to_seconds(nt: NuTime) -> float:
    """SI seconds since the reference midnight at which this tick begins."""
    return nt.ticks_of_day * 0.864


def nu_day(dt: datetime) -> int:
    """Nu:Day number (Modified Julian Day) at Greenwich: days since 1858-11-17. No leap years."""
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc).toordinal() - 678576


# ── Kè: 1/100 day = 1/100 circle = 3.6° ──
def degrees_to_ke(deg: float) -> float: return deg * 100 / 360
def ke_to_degrees(ke: float) -> float: return ke * 360 / 100
def nu_lat(lat_deg: float) -> float: return degrees_to_ke(lat_deg)


def nu_long(lon_deg: float) -> float:
    k = (degrees_to_ke(lon_deg) + 50) % 100 - 50
    return 50.0 if k == -50 else k


def solar_noon(lon_deg: float) -> NuTime:
    """Mean solar noon in universal Nu:Time: 05:00:00 minus 10 beats per Kè east."""
    return NuTime(round(50_000 - nu_long(lon_deg) * 1_000) % TICKS)


if __name__ == "__main__":
    print("universal Nu:Time:", now())
