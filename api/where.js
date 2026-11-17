// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
// GET /api/where — approximate location from the visitor's connection (Vercel edge geo headers).
// Used only as a fallback when the browser can't or won't share a precise position. Nothing is stored.
export default function handler(req, res) {
  const h = req.headers, dec = (v) => { try { return v ? decodeURIComponent(v) : null; } catch { return v; } };
  res.setHeader("cache-control", "private, no-store");
  const lat = h["x-vercel-ip-latitude"], lon = h["x-vercel-ip-longitude"];
  if (!lat || !lon) return res.status(404).json({ error: "no-geo" });
  res.status(200).json({ lat: +lat, lon: +lon, city: dec(h["x-vercel-ip-city"]), region: h["x-vercel-ip-country-region"] || null,
    country: h["x-vercel-ip-country"] || null, tz: h["x-vercel-ip-timezone"] || null });
}
