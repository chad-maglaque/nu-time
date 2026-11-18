// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
// POST /api/signup — store a launch / developer interest signup.
// GET  /api/signup — export all signups as CSV (requires `Authorization: Bearer $ADMIN_KEY`).
//
// Storage, in order of preference:
//   1. Upstash Redis over REST (production) — set by Vercel Marketplace → Upstash:
//      KV_REST_API_URL + KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN).
//   2. A local JSON-lines file (development) — NUTIME_LOCAL_STORE=/path/to/signups.jsonl (set by dev.mjs).
//   With neither, the endpoint answers 503 so the form shows an error instead of silently losing data.
// Optional: NOTIFY_WEBHOOK_URL — Slack- or Discord-compatible webhook pinged for each new signup.
// No dependencies; runs on Vercel's Node runtime and under dev.mjs.

import { appendFile, readFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const FIELDS = ["email", "name", "role", "country", "message", "lang", "page", "tz", "consent"];
const COLS = ["at", "ip_country", ...FIELDS];
const clean = (v, n = 200) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, n);

function upstashStore(url, token) {
  const redis = async (...cmds) => {
    const r = await fetch(`${url}/pipeline`, {
      method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify(cmds),
    });
    if (!r.ok) throw new Error("redis " + r.status);
    return r.json();
  };
  return {
    async hit(ip) { return (await redis(["INCR", `rl:${ip}`], ["EXPIRE", `rl:${ip}`, "3600"]))[0].result; },
    async save(rec) {
      const key = `signup:nu-time:${rec.email}`;   // one row per email; re-joining updates it
      await redis(["HSET", key, ...Object.entries(rec).flat()], ["ZADD", "signups", String(Date.now()), key]);
    },
    async list() {
      const keys = (await redis(["ZRANGE", "signups", "0", "-1"]))[0].result;
      if (!keys.length) return [];
      return (await redis(...keys.map((k) => ["HGETALL", k]))).map((x) => {
        const a = x.result, o = {}; for (let i = 0; i < a.length; i += 2) o[a[i]] = a[i + 1]; return o;
      });
    },
  };
}

function fileStore(path) {
  const hits = new Map();
  return {
    async hit(ip) { const n = (hits.get(ip) || 0) + 1; hits.set(ip, n); return n; },
    async save(rec) { await mkdir(dirname(path), { recursive: true }); await appendFile(path, JSON.stringify(rec) + "\n"); },
    async list() {
      let text = ""; try { text = await readFile(path, "utf8"); } catch { return []; }
      const byEmail = new Map();   // latest row per email, like the Redis store
      for (const line of text.split("\n")) if (line.trim()) { const r = JSON.parse(line); byEmail.set(r.email, r); }
      return [...byEmail.values()];
    },
  };
}

function store() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) return upstashStore(url, token);
  if (process.env.NUTIME_LOCAL_STORE) return fileStore(process.env.NUTIME_LOCAL_STORE);
  return null;
}

export default async function handler(req, res) {
  res.setHeader("cache-control", "no-store");
  const db = store();
  if (!db) return res.status(503).json({ ok: false, error: "storage-not-configured" });

  if (req.method === "GET") {
    if (!process.env.ADMIN_KEY || req.headers.authorization !== `Bearer ${process.env.ADMIN_KEY}`) return res.status(401).end();
    const q = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = (await db.list()).sort((a, b) => String(a.at).localeCompare(String(b.at)));
    res.setHeader("content-type", "text/csv; charset=utf-8");
    res.setHeader("content-disposition", 'attachment; filename="nu-time-signups.csv"');
    return res.status(200).send([COLS.join(","), ...rows.map((r) => COLS.map((c) => q(r[c])).join(","))].join("\n"));
  }
  if (req.method !== "POST") return res.status(405).end();

  let b = req.body || {};
  if (typeof b === "string") { try { b = JSON.parse(b || "{}"); } catch { return res.status(400).json({ ok: false, error: "bad-json" }); } }
  if (b.website) return res.status(200).json({ ok: true });   // honeypot: pretend success to bots
  const email = clean(b.email, 200).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ ok: false, error: "invalid-email" });

  const ip = clean(String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0], 64) || "unknown";
  if ((await db.hit(ip)) > 30) return res.status(429).json({ ok: false, error: "rate-limited" });

  const rec = { at: new Date().toISOString(), ip_country: clean(req.headers["x-vercel-ip-country"], 4) };
  for (const f of FIELDS) rec[f] = clean(b[f], f === "message" ? 2000 : 200);
  rec.email = email; rec.consent = b.consent ? "yes" : "no";
  await db.save(rec);

  if (process.env.NOTIFY_WEBHOOK_URL) {
    const text = `New Nu:Time signup: ${rec.name || "—"} <${email}> · ${rec.role || "—"} · ${rec.country || rec.ip_country || "—"} · ${rec.lang}`;
    try {
      await fetch(process.env.NOTIFY_WEBHOOK_URL, { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ text, content: text }), signal: AbortSignal.timeout(3000) });   // Slack uses text, Discord uses content
    } catch {}
  }
  return res.status(200).json({ ok: true });
}
