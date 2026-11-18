# Nu:Time™ — time and location reimagined

**Nu:Time (刻时 Ke-Shi™)** is an open standard for time and place: one clock for the whole planet, a decimal day of **10 gongs · 100 kè · 1,000 beats · 100,000 ticks**, and one unit — the **kè** — that measures both *when* (1/100 of a day) and *where* (3.6° of arc). Its reference is the Earth's own rotation, so it never needs a leap second.

This repository holds the standard, the reference implementations, the open-hardware reference clock and the [nu-time.com](https://nu-time.com) website.

| | |
|---|---|
| **The Standard** | [docs/SPEC.md](docs/SPEC.md) — Nu:Time Standard v1.0 (public draft) |
| **Developer guide** | [docs/DEVELOPERS.md](docs/DEVELOPERS.md) — APIs, hardware, using the name |
| **Reference code** | [reference/js](reference/js) · [reference/python](reference/python) · [reference/c](reference/c) |
| **Conformance tests** | [tests/](tests) — shared vectors; `tests/run.sh` checks all three cores |
| **Hardware** | [hardware/](hardware) — reference clock design notes and BOM |
| **Design** | [docs/design/](docs/design) — dial geometry, sky colour, brand system |
| **Background** | [docs/background/](docs/background) — architecture handoff, original nu-time.com clock |
| **Website** | `build.mjs`, `locales/`, `public/`, `api/` — static site + two serverless functions |

## Quick start

```sh
tests/run.sh                 # conformance: JS, Python and C cores
node build.mjs               # or: bun build.mjs  →  dist/
python3 -m http.server 4310 --directory dist
```

The site has no build dependencies and loads nothing from third-party CDNs or font services (so it works in mainland China). Fonts (Orbitron, Inter) are self-hosted under the SIL Open Font License.

### Website services (Vercel)

| Endpoint | Purpose |
|---|---|
| `POST /api/signup` | The "Join" form: stores name, email, role, country, message, language, time zone, consent. Honeypot field and per-IP rate limit (30/hour) against bots. One row per email; re-joining updates it. |
| `GET /api/signup` | Download every signup as CSV — `curl -H "Authorization: Bearer $ADMIN_KEY" https://nu-time.com/api/signup > signups.csv` |
| `DELETE /api/signup?email=…` | Remove one signup (privacy requests) — `curl -X DELETE -H "Authorization: Bearer $ADMIN_KEY" "https://nu-time.com/api/signup?email=someone@example.com"` |
| `GET /api/where` | Approximate visitor location for the clock when the browser won't share one (Vercel geo headers); nothing stored |

**Local development** — `npm run dev` (or `bun build.mjs && bun dev.mjs`) serves the site and runs the functions at http://localhost:4310. Signups go to `.data/signups.jsonl` (git-ignored); export with `curl -H "Authorization: Bearer dev" localhost:4310/api/signup`.

**Production setup** — the full go-live checklist (Vercel, signup storage, domain, email) is in [docs/DEPLOY.md](docs/DEPLOY.md). For the form specifically, once, in the Vercel dashboard for the nu-time project:

1. **Storage** — Storage → Marketplace → **Upstash for Redis** → create (free tier) and connect to the project. This sets `KV_REST_API_URL` and `KV_REST_API_TOKEN`. Without it the form answers "That didn't go through" rather than losing data.
2. **Export key** — Settings → Environment Variables → `ADMIN_KEY` = a long random string (keep it private).
3. **Notifications (optional)** — `NOTIFY_WEBHOOK_URL` = a Slack or Discord incoming-webhook URL to be pinged on every signup.
4. Redeploy, submit a test signup on the live site, and check it appears in the CSV export.

### Languages

English is the source. Nu:Time is planned in eight languages — English, French, Italian, German, Spanish, Simplified Chinese, Hindi and Urdu — as `locales/<lang>.json` files with the same keys as `locales/en.json`. Translation is on hold until the English copy is final. Chinese unit names are fixed in the Standard (§1.2): 更 gēng · 刻 kè · 分 fēn · 秒 miǎo.

## Licensing

Nu:Time is a standard, so it is open by design; the name is what's protected. See [LICENSING.md](LICENSING.md).

| What | Licence |
|---|---|
| Reference code, website code, tests | **MIT OR Apache-2.0**, at your option |
| The Standard, docs, website text | **CC BY 4.0** |
| Hardware designs | **CERN-OHL-P 2.0** |
| Patents | Royalty-free [patent pledge](PATENTS.md) for implementers |
| Names and logos: Nu:Time™, Ke-Shi™, 刻时™ | Trademarks of Nu-Time Inc. — see [TRADEMARKS.md](TRADEMARKS.md) |

Copyright © 2025–2026 Nu-Time Inc. and contributors. Contributions: [CONTRIBUTING.md](CONTRIBUTING.md).
