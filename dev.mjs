// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
// Local dev server: serves dist/ (with clean URLs, like Vercel) and runs the api/*.js functions.
//   node build.mjs && node dev.mjs          (or: bun build.mjs && bun dev.mjs)
// Signups are stored in .data/signups.jsonl. Export: curl -H "Authorization: Bearer dev" localhost:4310/api/signup
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname, normalize } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");
const PORT = +(process.env.PORT || 4310);
process.env.NUTIME_LOCAL_STORE ||= join(ROOT, ".data", "signups.jsonl");
process.env.ADMIN_KEY ||= "local-dev-admin-key";   // the API requires 16+ characters

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain",
  ".py": "text/plain; charset=utf-8", ".h": "text/plain; charset=utf-8" };

function vercelRes(res) {   // the small subset of Vercel's response helpers our functions use
  res.status = (c) => { res.statusCode = c; return res; };
  res.json = (o) => { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); return res; };
  res.send = (s) => { res.end(s); return res; };
  return res;
}

async function api(req, res, name) {
  const file = join(ROOT, "api", name + ".js");
  try { await stat(file); } catch { res.statusCode = 404; return res.end("no such function"); }
  const chunks = []; for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  req.body = (req.headers["content-type"] || "").includes("json") && raw ? JSON.parse(raw) : raw;
  req.query = Object.fromEntries(new URL(req.url, "http://x").searchParams);
  const mod = await import(pathToFileURL(file).href + "?t=" + Date.now());   // re-import so edits apply without restart
  try { await mod.default(req, vercelRes(res)); } catch (e) { console.error(e); if (!res.headersSent) { res.statusCode = 500; res.end("error"); } }
}

async function file(res, urlPath) {
  let p = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const tries = [join(DIST, p), join(DIST, p, "index.html"), join(DIST, p + ".html")];
  for (const f of tries) {
    try {
      if (!(await stat(f)).isFile()) continue;
      res.setHeader("content-type", TYPES[extname(f)] || "application/octet-stream");
      res.setHeader("cache-control", "no-cache");
      return res.end(await readFile(f));
    } catch {}
  }
  res.statusCode = 404; res.end("not found");
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://x");
  const m = /^\/api\/([a-z0-9-]+)\/?$/.exec(pathname);
  if (m) return api(req, res, m[1]);
  return file(res, pathname);
}).listen(PORT, () => console.log(`Nu:Time dev server on http://localhost:${PORT} · signups → ${process.env.NUTIME_LOCAL_STORE}`));
