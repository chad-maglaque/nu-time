# Deploying nu-time.org

A checklist for going live. Steps marked **(you)** need your accounts or sign-in.

## 1. Vercel project

Decided: **Vercel Pro** (company site; Hobby is non-commercial only), deployed from GitHub so every push to `main` goes live.

1. **(you)** Sign in at vercel.com with GitHub and upgrade the team to **Pro**.
2. **(you)** **Add New → Project → Import** `chad-maglaque/nu-time` and approve Vercel's access to that repository. Framework preset: **Other**. Build settings come from `vercel.json` (build `node build.mjs`, output `dist`); leave the install command empty.
3. Deploy. Vercel gives a preview URL (`nu-time-….vercel.app`): open it and click through Overview, a few languages, The Standard, Developers and Privacy.

## 2. Signup form storage — required before launch

The **Join** form must save every signup somewhere. In production it saves to Upstash Redis; without it the form shows "That didn't go through" and nothing is captured.

1. **(you)** Vercel dashboard → project **nu-time** → **Storage** → **Marketplace** → **Upstash for Redis** → create (free tier) → **Connect** to the project. This adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.
2. **Settings → Environment Variables** → add `ADMIN_KEY` = a long random string (e.g. from `openssl rand -hex 24`). Keep it private.
3. Optional: `NOTIFY_WEBHOOK_URL` = a Slack or Discord incoming-webhook URL, pinged on every signup.
4. Redeploy (`npx vercel --prod` or **Redeploy** in the dashboard).
5. **Test**: submit one signup on the live site, then download the list as CSV:
   ```sh
   curl -H "Authorization: Bearer $ADMIN_KEY" https://nu-time.org/api/signup > nu-time-signups.csv
   ```
   The CSV has one row per email: date, country (detected), email, name, role, country (typed), message, language, page, time zone, consent.

## 3. Domains, DNS and email

Nu:Time is an open standard, so **nu-time.org** is the domain of record. **nu-time.com** and **nutime.org** (and all three `www`) 301-redirect to it, keeping the path and query. All three zones are on **Cloudflare DNS** (free), DNS only (grey cloud); the site is served by Vercel.

Only named addresses forward, through Cloudflare **Email Routing** (free), to the owner's work inbox: **info@**, **press@**, **privacy@**, **standards@** and **legal@nu-time.org** (the ones the site shows), and the same five at nutime.org and nu-time.com. Mail to any other address is dropped: the catch-all stays off on all three zones. The list is `MAIL_ADDRESSES` in the script.

The commercial watch domains (**nu-watch.com, nu.watch, nu-beat.com**) are separate and are not part of this setup. Nothing here touches them.

All of it is scripted, and both scripts are safe to re-run:

- [tools/domains.sh](../tools/domains.sh) makes the changes in Cloudflare, Vercel and GitHub.
- [tools/check-domains.sh](../tools/check-domains.sh) checks the result. It is read-only and needs no tokens.

1. **(you)** Create `.env.domains` at the repository root. Git ignores it, so it stays private if the repository goes public:
   ```sh
   CLOUDFLARE_API_TOKEN=…   # My Profile → API Tokens → Custom Token: Zone·Zone·Read, Zone·DNS·Edit,
                            # Zone·Zone Settings·Edit, Zone·Email Routing Rules·Edit, Account·Email Routing Addresses·Edit
   VERCEL_TOKEN=…           # vercel.com/account/tokens, scope: the team that owns project nu-time
   EMAIL_DEST=…             # the inbox the named addresses forward to
   ```
2. `tools/domains.sh` is a dry run: it prints every change it would make.
3. `tools/domains.sh --apply` makes the changes, in this order:
   1. Adds `EMAIL_DEST` as a Cloudflare mail destination if it is new. Cloudflare emails it a verification link; click it.
   2. Points Cloudflare DNS for each zone at Vercel: apex `A` and `www` `CNAME`, DNS only, so Vercel issues the certificates. It deletes old parking records and old mail records, and keeps everything else.
   3. Turns on Email Routing on each zone, which adds Cloudflare's `MX` and SPF records.
   4. In Vercel (project **nu-time** → Domains), adds `nu-time.org` to serve the site, and adds `www.nu-time.org`, `nutime.org` and `www.nutime.org` as redirects. If Vercel asks for an ownership TXT record, it adds the record in Cloudflare and verifies.
   5. Waits until `https://nu-time.org` serves the site, then sets `www.nu-time.com` and `nu-time.com` to **Redirect to** `nu-time.org` (301, which Google's Change of Address tool requires), nu-time.com last.
   6. Points each address in `MAIL_ADDRESSES` at `EMAIL_DEST`, creating the rule or repointing it. It turns any catch-all off, and reports, without changing, rules for other addresses. It waits for the verification click first, if that is still pending.
   7. Sets the GitHub repository's homepage to `https://nu-time.org`.
   8. Runs `tools/check-domains.sh`. It checks the site, canonical tag, sitemap, redirects and mail records.
4. Google Search Console. nu-time.org, nutime.org and nu-time.com are verified as Domain properties, by a `google-site-verification` TXT record in each zone; keep those records. `https://nutime.org/` and `https://nu-time.com/` are URL-prefix properties. The nu-time.org sitemap is submitted. The other domains only redirect, so they need no sitemap.
   - **Change of address:** run it from the URL-prefix property (`https://…/`), not the Domain property. The Domain property tests `http://`, where Vercel first sends its own http→https 308, which the checker rejects. Go to **Settings → Change of address**, choose **nu-time.org**, then **Validate & update**, then **Confirm move**.
   - **nutime.org → nu-time.org:** move confirmed 2026-11-19.
   - **nu-time.com → nu-time.org:** still pending on 2026-11-19. Google's fetch got a stale `200` from Vercel's edge cache (`X-Vercel-Cache: HIT`), the old page from before the redirect. A production redeploy clears that cache. Then retry the change of address.
5. Send a test message to a few addresses at each domain from a different account. Replies come from the work inbox. Sending *as* info@nu-time.org needs a mail service later (not needed for launch).

## 4. Launch checks

- [ ] Overview, The Standard, Developers and Privacy load on `https://nu-time.org`.
- [ ] Clock: "Use my location" works; on a browser that refuses location, the approximate city appears (`/api/where`).
- [ ] Join form: a test signup appears in the CSV export (step 2.5).
- [ ] Footer Contact (info@) and Press (press@) emails arrive.
- [ ] `tools/check-domains.sh` passes.
- [x] Reachability from mainland China (e.g. a China-based uptime checker such as 17ce.com or chinaz.com). If Vercel is blocked or slow, plan a Hong Kong mirror.
  - **2026-11-18, Globalping probes in mainland China (~60 requests, 20+ cities, Unicom / Mobile / Telecom / Alibaba / Tencent):** not blocked. DNS resolves correctly everywhere (216.150.1.1, no poisoning). `/zh/`, `/assets/clock.js` and `/api/where` return 200, typically 0.3–1 s; `/api/where` returns the right Chinese city. Outliers: some China Telecom probes take 4–5 s; one Unicom probe in Fuzhou is reset on every request. No Hong Kong mirror needed for launch. Re-check weekly, because Vercel IP ranges can be blocked without notice. Test the link inside WeChat by hand (it can't be tested from outside).
  - **2026-11-19, nu-time.org (new domain of record):** 19 of 20 mainland probes return `/zh/` with 200, mostly in 0.6–2.5 s; one Tencent probe in Chongqing timed out. DNS resolves to Vercel (216.150.1.1 / 216.150.16.1) with no poisoning.
- [x] Repository switched to public when the Standard is published (2026-11-19).
