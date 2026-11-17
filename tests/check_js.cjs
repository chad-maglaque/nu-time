// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
const N = require("../reference/js/nutime.js"), v = require("./vectors.json");
for (const [utc, want] of v.time) {
  const [h, m, s] = utc.split(":"), ms = ((+h * 60 + +m) * 60) * 1000 + Math.round(parseFloat(s) * 1000);
  const got = N.now(Date.UTC(2026, 0, 1) + ms, "utc").display;
  if (got !== want) throw new Error(`${utc}: ${got} != ${want}`);
}
for (const [deg, ke] of v.ke) if (Math.abs(N.nuLong(deg) - ke) > 1e-3) throw new Error(`${deg}: ${N.nuLong(deg)} != ${ke}`);
for (const [d, n] of v.nuDay) { const ms = Date.parse(d + "T12:00:00Z"); if (N.nuDay(ms) !== n) throw new Error(`${d}: ${N.nuDay(ms)} != ${n}`); }
console.log("js: ok");
