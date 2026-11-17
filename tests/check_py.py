import json, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(root / "reference/python"))
import nutime
from datetime import datetime, timezone
v = json.loads((root / "tests/vectors.json").read_text())
for utc, want in v["time"]:
    h, m, s = utc.split(":"); sec, ms = s.split(".")
    got = str(nutime.from_datetime(datetime(2026, 1, 1, int(h), int(m), int(sec), int(ms) * 1000, tzinfo=timezone.utc)))
    assert got == want, (utc, got, want)
for deg, ke in v["ke"]:
    assert abs(nutime.nu_long(deg) - ke) < 1e-3, (deg, nutime.nu_long(deg), ke)
from datetime import date
for d, n in v["nuDay"]:
    y, mo, da = map(int, d.split("-"))
    assert nutime.nu_day(datetime(y, mo, da, 12, tzinfo=timezone.utc)) == n, (d, n)
print("python: ok")
