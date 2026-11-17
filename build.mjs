// SPDX-License-Identifier: MIT OR Apache-2.0 — Copyright (c) 2025-2026 Nu-Time Inc.
// Static site build for nu-time.com. No dependencies: `node build.mjs` or `bun build.mjs`.
// Reads locales/*.json and docs/*.md, writes dist/ (English at /, other languages at /<lang>/).
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");
const SITE = "https://nu-time.com";
const ORDER = ["en", "zh", "hi", "ur", "es", "fr", "de", "it"];
const NT = createRequire(import.meta.url)("./reference/js/nutime.js");
const locales = ORDER.filter((l) => existsSync(join(ROOT, "locales", l + ".json")))
  .map((l) => JSON.parse(readFileSync(join(ROOT, "locales", l + ".json"), "utf8")));
const EN = locales.find((t) => t.lang === "en");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const path = (l) => (l === "en" ? "/" : `/${l}/`);
const hl = (l) => (l === "zh" ? "zh-Hans" : l);
const logo = (L, href) => `<a class="logo" href="${href}" aria-label="Nu:Time"><span class="inv">U</span>U:TIME<sup>™</sup>${L === "zh" ? '<span class="zh">刻时</span>' : ""}</a>`;
const NOON_CITIES = [["Beijing", 116.407], ["Shanghai", 121.474], ["Tokyo", 139.65], ["Delhi", 77.209], ["Dubai", 55.271], ["Paris", 2.352], ["London", -0.128], ["São Paulo", -46.633], ["New York", -74.006], ["San Francisco", -122.419]];

function head(t, title, desc, canonical, alternates) {
  return `<!doctype html>
<html lang="${hl(t.lang)}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${canonical}">
${alternates || ""}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/og.jpg">
<meta property="og:url" content="${SITE}${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1a1a1a">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/orbitron.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>`;
}

function topbar(t, sub) {
  const L = t.lang, base = path(L);
  const langLinks = locales.map((x) => `<a href="${path(x.lang)}" lang="${hl(x.lang)}"${x.lang === L ? ' aria-current="true"' : ""}>${esc(x.langName)}</a>`).join("");
  return `<header class="top">
  <div class="bar">
    ${logo(L, base)}
    <nav class="nav"><a href="/spec/">${esc(t.nav.spec)}</a><a href="/developers/">${esc(t.nav.build)}</a><a href="https://nu-watch.com">${esc(t.nav.watch)}</a></nav>
    <details class="langs"><summary>${esc(t.langName)}</summary><div>${langLinks}</div></details>
    <a class="btn small" href="${base}#join">${esc(t.nav.join)}</a>
  </div>
  ${sub || ""}
</header>`;
}

function footer(t) {
  const L = t.lang;
  const langLinks = locales.map((x) => `<a href="${path(x.lang)}" lang="${hl(x.lang)}">${esc(x.langName)}</a>`).join("");
  return `<footer class="foot">
  ${logo(L, path(L))}
  <p class="small" style="margin-top:12px">${esc(t.footer.tagline)}</p>
  <nav>${langLinks}</nav>
  <p class="small">${esc(t.footer.rights)} ${esc(t.footer.open)}</p>
  <p class="small"><a href="/spec/">${esc(t.nav.spec)}</a> · <a href="/developers/">${esc(t.nav.build)}</a> · <a href="/developers/#using-the-name">${esc(t.footer.brand)}</a> · <a href="/privacy/">Privacy</a> · <a href="mailto:hello@nu-time.com">${esc(t.footer.contact)}</a> · <a href="mailto:press@nu-time.com">${esc(t.footer.press)}</a></p>
</footer>`;
}

function home(t) {
  const L = t.lang, u = t.units, h = t.hero;
  const alt = locales.map((x) => `<link rel="alternate" hreflang="${hl(x.lang)}" href="${SITE}${path(x.lang)}">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${SITE}/">`;
  const mine = { zh: "zh", hi: "in", ur: "in", fr: "fr", it: "it", es: "es", de: "de" }[L];
  const heritage = [...t.heritage.items.filter((x) => x.key === mine), ...t.heritage.items.filter((x) => x.key !== mine)];
  const subnav = `<nav class="sub" data-subnav>
    <a href="#time">${esc(t.nav.time)}</a><a href="#how">${esc(t.nav.how)}</a><a href="#ke">${esc(t.nav.ke)}</a><a href="#geometry">${esc(t.nav.geometry)}</a><a href="#heritage">${esc(t.nav.heritage)}</a><a href="#why">${esc(t.nav.why)}</a><a href="#build">${esc(t.nav.build)}</a><a href="#join">${esc(t.nav.join)}</a>
  </nav>`;
  const noonRows = NOON_CITIES.map(([n, lon]) => {
    const k = NT.nuLong(lon);
    return `<tr><th>${esc(n)}</th><td>${NT.formatKe(k, h.east, h.west, 1)}</td><td class="nu">${NT.fields(NT.solarNoonTicks(lon)).display}</td></tr>`;
  }).join("");
  return `${head(t, t.meta.title, t.meta.description, path(L), alt)}
${topbar(t, subnav)}
<main>
<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">${esc(h.eyebrow)}</p>
    <h1>${esc(h.title)}</h1>
    <p class="lead">${esc(h.sub)}</p>
    <div class="ctas"><a class="btn ghost" href="#time">${esc(h.ctaExplore)}</a><a class="btn" href="#join">${esc(h.ctaJoin)}</a></div>
  </div>
  <div class="clock" data-clock data-polar-day="${esc(h.polarDay)}" data-polar-night="${esc(h.polarNight)}" data-locating="${esc(h.locating)}" data-located="${esc(h.located)}" data-approx="${esc(h.approx)}" data-locfail="${esc(h.locfail)}" data-e="${esc(h.east)}" data-w="${esc(h.west)}" data-n="${esc(h.north)}" data-s="${esc(h.south)}">
    <canvas width="640" height="640" role="img" aria-label="${esc(h.clockLabel)}"></canvas>
    <div class="readout">
      <span class="label" data-label>${esc(h.clockLabel)}</span>
      <output class="big" data-big>00:00:00</output>
      <span class="units"><i>${esc(u.gong)}</i><i>${esc(u.beat)}</i><i>${esc(u.tick)}</i></span>
      <span class="label">${esc(h.nuDay)} <span data-nuday>—</span></span>
    </div>
    <p class="hint">${esc(h.dialHint)}</p>
    <div class="loc"><label>${esc(h.city)} <select data-city><option value="" disabled>${esc(h.choose)}</option><option value="current">${esc(h.current)}</option></select></label></div>
    <p class="hint" data-locstatus aria-live="polite"></p>
    <dl class="facts">
      <div><dt>${esc(h.position)}</dt><dd data-pos>—</dd></div>
      <div><dt>${esc(h.noon)}</dt><dd data-noon>—</dd></div>
      <div><dt>${esc(h.solarTime)}</dt><dd data-solar>—</dd></div>
      <div><dt>${esc(h.conventional)}</dt><dd data-conv>—</dd></div>
      <div><dt>${esc(h.sunrise)}</dt><dd data-rise>—</dd></div>
      <div><dt>${esc(h.sunset)}</dt><dd data-set>—</dd></div>
    </dl>
    <div class="daybar"><span>${esc(h.dayBar)}</span><div class="track" data-bar><span class="now" data-bar-now></span></div><div class="scale"><span>0</span><span>25</span><span>50</span><span>75</span><span>100 ${esc(u.kes)}</span></div></div>
  </div>
</section>

<section class="elim" aria-labelledby="elim-h">
  <h2 id="elim-h">${esc(t.eliminates.title)}</h2>
  <ul>${t.eliminates.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
  <p>${esc(t.eliminates.tail)}</p>
</section>

<section id="time" class="band">
  <h2>${esc(t.time.title)}</h2>
  <p class="lead">${esc(t.time.lead)}</p>
  <div class="grid4">${t.time.points.map((p) => `<article class="card"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join("")}</div>
</section>

<section id="how" class="band alt">
  <h2>${esc(t.how.title)}</h2>
  <p class="lead">${esc(t.how.lead)}</p>
  <div class="cards4">${t.how.cards.map((c) => `<article class="card"><strong>${esc(c.n)}</strong><span class="unit">${esc(c.unit)}</span><p>${esc(c.text)}</p></article>`).join("")}</div>
  <div class="split">
    <div>
      <h3>${esc(t.how.tableTitle)}</h3>
      <table class="tbl"><thead><tr><th></th><th>${esc(t.how.colConventional)}</th><th>${esc(t.how.colBeats)}</th><th>${esc(t.how.colNu)}</th></tr></thead>
      <tbody>${t.how.rows.map((r) => `<tr><th>${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td class="nu">${esc(r[3])}</td></tr>`).join("")}</tbody></table>
    </div>
    <div><h3>${esc(t.how.mathTitle)}</h3><ul class="ticks">${t.how.math.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></div>
  </div>
</section>

<section id="ke" class="band">
  <h2>${esc(t.ke.title)}</h2>
  <p class="lead">${esc(t.ke.lead)}</p>
  <div class="grid4 kefacts">${t.ke.facts.map((f) => `<article class="card"><strong>${esc(f.n)}</strong><p>${esc(f.text)}</p></article>`).join("")}</div>
  <div class="rule"><h3>${esc(t.ke.ruleTitle)}</h3><p>${esc(t.ke.rule)}</p></div>
  <h3>${esc(t.ke.tableTitle)}</h3>
  <table class="tbl"><thead><tr><th>${esc(t.ke.colPlace)}</th><th>${esc(t.ke.colLong)}</th><th>${esc(t.ke.colNoon)}</th></tr></thead><tbody>${noonRows}</tbody></table>
  <p class="note">${esc(t.ke.note)}</p>
</section>

<section id="geometry" class="band alt">
  <h2>${esc(t.geometry.title)}</h2>
  <p class="lead">${esc(t.geometry.lead)}</p>
  <div class="split">
    <table class="tbl"><thead><tr><th>${esc(t.geometry.colAngle)}</th><th>${esc(t.geometry.colKe)}</th><th>${esc(t.geometry.colDeg)}</th></tr></thead>
    <tbody>${t.geometry.items.map((r) => `<tr><th>${esc(r[0])}</th><td class="nu">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table>
    <div>
      <p class="trig">${esc(t.geometry.trig)}</p>
      <h3>${esc(t.geometry.convertTitle)}</h3>
      <div class="conv" data-conv-ke><label>${esc(t.geometry.deg)}<input type="number" step="any" value="90" data-deg></label><span>⇄</span><label>${esc(t.geometry.keLabel)}<input type="number" step="any" value="25" data-ke></label></div>
    </div>
  </div>
</section>

<section id="heritage" class="band">
  <h2>${esc(t.heritage.title)}</h2>
  <p class="lead">${esc(t.heritage.lead)}</p>
  <ol class="timeline">${heritage.map((x) => `<li class="card" data-k="${x.key}"><span class="era">${esc(x.era)} · ${esc(x.place)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></li>`).join("")}</ol>
</section>

<section id="why" class="band alt">
  <h2>${esc(t.why.title)}</h2>
  <p class="lead">${esc(t.why.lead)}</p>
  <div class="grid3">${t.why.items.map((i, n) => `<article class="card"><span class="num">0${n + 1}</span><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join("")}</div>
  <h3>${esc(t.roadmap.title)}</h3>
  <ol class="road">${t.roadmap.items.map((r) => `<li><b>${esc(r.when)}</b><span>${esc(r.text)}</span></li>`).join("")}</ol>
</section>

<section id="build" class="band">
  <h2>${esc(t.build.title)}</h2>
  <p class="lead">${esc(t.build.lead)}</p>
  <div class="grid3">${t.build.items.map((i) => `<article class="card"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p><a class="more" href="${i.href}">${esc(i.link)} →</a></article>`).join("")}</div>
  <div class="split">
    <div>
      <h3>${esc(t.build.quartzTitle)}</h3>
      <table class="tbl"><thead><tr><th>${esc(t.build.colCrystal)}</th><th>${esc(t.build.colCycles)}</th><th>${esc(t.build.colMethod)}</th></tr></thead>
      <tbody>${t.build.quartz.map((r) => `<tr><th>${esc(r[0])}</th><td class="nu">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table>
    </div>
    <div class="card"><h3>${esc(t.build.certTitle)}</h3><p>${esc(t.build.cert)}</p></div>
  </div>
  <p class="note">${esc(t.build.license)}</p>
</section>

<section class="watch">
  <img src="/assets/watch-black.webp" alt="Nu:Watch" loading="lazy" width="512" height="768">
  <div><p class="eyebrow">${esc(t.watch.eyebrow)}</p><h2>${esc(t.watch.title)}</h2><p class="lead">${esc(t.watch.text)}</p><a class="btn" href="https://nu-watch.com">${esc(t.watch.cta)}</a></div>
</section>

<section id="join" class="band alt">
  <h2>${esc(t.join.title)}</h2>
  <p class="lead">${esc(t.join.lead)}</p>
  <form class="signup" data-signup data-site="nu-time" data-ok="${esc(t.join.ok)}" data-err="${esc(t.join.err)}" data-invalid="${esc(t.join.invalid)}" data-sending="${esc(t.join.sending)}" novalidate>
    <label>${esc(t.join.name)}<input name="name" autocomplete="name" maxlength="120"></label>
    <label>${esc(t.join.email)} *<input name="email" type="email" autocomplete="email" required maxlength="200"></label>
    <label>${esc(t.join.role)}<select name="role">${Object.entries(t.join.roles).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join("")}</select></label>
    <label>${esc(t.join.country)}<input name="country" autocomplete="country-name" maxlength="80"></label>
    <label class="wide">${esc(t.join.message)}<textarea name="message" rows="3" maxlength="2000"></textarea></label>
    <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
    <label class="check wide"><input type="checkbox" name="consent" checked> <span>${esc(t.join.consent)} <a href="/privacy/">Privacy</a></span></label>
    <input type="hidden" name="lang" value="${L}">
    <button class="btn" type="submit">${esc(t.join.submit)}</button>
    <p class="status" role="status" aria-live="polite"></p>
  </form>
</section>
</main>
${footer(t)}
<script src="/assets/nutime.js"></script>
<script src="/assets/clock.js"></script>
<script src="/assets/site.js"></script>
</body>
</html>`;
}

// ── tiny Markdown renderer (headings, paragraphs, lists, tables, code, links, bold, inline code) ──
function inline(s) {
  return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
const slug = (s) => s.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
function md(src) {
  const out = [], lines = src.split("\n");
  for (let i = 0; i < lines.length; ) {
    const l = lines[i];
    if (l.startsWith("```")) { const buf = []; i++; while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]); i++; out.push(`<pre><code>${esc(buf.join("\n"))}</code></pre>`); continue; }
    const h = /^(#{1,3}) (.*)$/.exec(l);
    if (h) { const txt = h[2]; out.push(`<h${h[1].length} id="${slug(txt)}">${inline(txt)}</h${h[1].length}>`); i++; continue; }
    if (l.startsWith("|")) {
      const rows = []; while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const [hd, , ...body] = rows;
      out.push(`<div class="tblwrap"><table class="tbl"><thead><tr>${cells(hd).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (/^- /.test(l)) { const items = []; while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i++].slice(2)); out.push(`<ul>${items.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`); continue; }
    if (!l.trim()) { i++; continue; }
    const para = []; while (i < lines.length && lines[i].trim() && !/^(#|\||- |```)/.test(lines[i])) para.push(lines[i++]);
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return out.join("\n");
}
function docPage(file, urlPath) {
  const src = readFileSync(join(ROOT, "docs", file), "utf8");
  const title = /^# (.*)$/m.exec(src)[1];
  const desc = src.split("\n").find((l) => l && !l.startsWith("#") && !l.startsWith("**")) || title;
  return `${head(EN, title + " · Nu:Time™", desc.slice(0, 200), urlPath)}
${topbar(EN)}
<main class="doc">${md(src)}</main>
${footer(EN)}
</body></html>`;
}

// ── write ──
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(join(ROOT, "public"), DIST, { recursive: true });
cpSync(join(ROOT, "reference/js/nutime.js"), join(DIST, "assets/nutime.js"));
cpSync(join(ROOT, "reference"), join(DIST, "reference"), { recursive: true });
cpSync(join(ROOT, "tests/vectors.json"), join(DIST, "reference/vectors.json"));
for (const t of locales) {
  const dir = t.lang === "en" ? DIST : join(DIST, t.lang);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), home(t));
}
for (const [file, p] of [["SPEC.md", "/spec/"], ["DEVELOPERS.md", "/developers/"], ["PRIVACY.md", "/privacy/"]]) {
  if (!existsSync(join(ROOT, "docs", file))) continue;
  mkdirSync(join(DIST, p), { recursive: true });
  writeFileSync(join(DIST, p, "index.html"), docPage(file, p));
}
const urls = [...locales.map((t) => path(t.lang)), "/spec/", "/developers/"].map((u) => `<url><loc>${SITE}${u}</loc></url>`).join("");
writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("built", locales.map((t) => t.lang).join(", "), "+ spec, developers");
