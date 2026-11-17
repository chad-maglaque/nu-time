// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
// POST /api/signup — store an interest signup.  GET /api/signup (Bearer ADMIN_KEY) — export CSV.
// Storage: Upstash Redis over REST (Vercel Marketplace → Upstash, which sets KV_REST_API_URL/TOKEN
// or UPSTASH_REDIS_REST_URL/TOKEN). Optional NOTIFY_WEBHOOK_URL (Slack/Discord/Feishu-compatible JSON).
// No dependencies; runs on Vercel's Node runtime.

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const FIELDS = ["email", "name", "lastname", "role", "country", "postal", "model", "budget", "message", "lang", "site", "page", "tz", "consent"];

async function redis(...cmds) {
  const r = await fetch(`${URL_}/pipeline`, {
    method: "POST", headers: { authorization: `Bearer ${TOKEN}`, "content-type": "application/json" }, body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error("redis " + r.status);
  return r.json();
}
const clean = (v, n = 200) => String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, n);

export default async function handler(req, res) {
  res.setHeader("cache-control", "no-store");
  if (!URL_ || !TOKEN) return res.status(503).json({ ok: false, error: "storage-not-configured" });

  if (req.method === "GET") {
    if (!process.env.ADMIN_KEY || req.headers.authorization !== `Bearer ${process.env.ADMIN_KEY}`) return res.status(401).end();
    const site = clean(req.query.site || "", 20);
    const keys = (await redis(["ZRANGE", "signups", "0", "-1"]))[0].result;
    const rows = keys.length ? (await redis(...keys.map((k) => ["HGETALL", k]))).map((x) => {
      const a = x.result, o = {}; for (let i = 0; i < a.length; i += 2) o[a[i]] = a[i + 1]; return o;
    }) : [];
    const cols = ["at", "ip_country", ...FIELDS];
    const q = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...rows.filter((r) => !site || r.site === site).map((r) => cols.map((c) => q(r[c])).join(","))].join("\n");
    res.setHeader("content-type", "text/csv; charset=utf-8");
    return res.status(200).send(csv);
  }
  if (req.method !== "POST") return res.status(405).end();

  const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: pretend success
  const email = clean(b.email, 200).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ ok: false, error: "invalid-email" });

  const ip = clean((req.headers["x-forwarded-for"] || "").split(",")[0], 64) || "unknown";
  const rl = (await redis(["INCR", `rl:${ip}`], ["EXPIRE", `rl:${ip}`, "3600"]))[0].result;
  if (rl > 30) return res.status(429).json({ ok: false, error: "rate-limited" });

  const site = ["nu-time", "nu-watch"].includes(b.site) ? b.site : "nu-time";
  const rec = { at: new Date().toISOString(), ip_country: clean(req.headers["x-vercel-ip-country"], 4) };
  for (const f of FIELDS) rec[f] = clean(b[f], f === "message" ? 2000 : 200);
  rec.email = email; rec.site = site; rec.consent = b.consent ? "yes" : "no";
  const key = `signup:${site}:${rec.role === "contact" ? "contact:" + Date.now() + ":" : ""}${email}`;
  await redis(["HSET", key, ...Object.entries(rec).flat()], ["ZADD", "signups", String(Date.now()), key], ["INCR", `count:${site}`]);

  if (process.env.NOTIFY_WEBHOOK_URL) {
    const text = `New ${site} signup: ${rec.name || "—"} <${email}> · ${rec.role || ""} ${rec.model || ""} · ${rec.country || rec.ip_country} · ${rec.lang}`;
    fetch(process.env.NOTIFY_WEBHOOK_URL, { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ text, content: text }) }).catch(() => {}); // Slack uses text, Discord uses content
  }
  return res.status(200).json({ ok: true });
}
