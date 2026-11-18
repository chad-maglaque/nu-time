# Deploying nu-time.com

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
   curl -H "Authorization: Bearer $ADMIN_KEY" https://nu-time.com/api/signup > nu-time-signups.csv
   ```
   The CSV has one row per email: date, country (detected), email, name, role, country (typed), message, language, page, time zone, consent.

## 3. Domains and DNS

All four domains are registered at GoDaddy and use GoDaddy DNS today. They move to **Cloudflare DNS** (free); the site is served by Vercel. Decided: **nu-time.com** is the site; **nu-watch.com, nu.watch and nu-beat.com redirect to nu-time.com** (Nu-Watch is not launching).

1. **(you)** GoDaddy → each domain → **DNSSEC**: make sure it is off before changing nameservers (otherwise the domain stops resolving).
2. **(you)** Cloudflare (free account) → **Add a domain** for each of the four → Free plan. Cloudflare imports GoDaddy's records.
3. In Cloudflare DNS for each domain, **delete the imported GoDaddy records**: the `A` records (50.63.7.149, 3.33.251.168, 15.197.225.128), `www` CNAMEs, and the GoDaddy mail records (`MX` mailstore1/smtp.secureserver.net) — no GoDaddy mailboxes are in use.
4. Add the Vercel records for each domain, **DNS only** (grey cloud) so Vercel issues the HTTPS certificates:
   - `A @ 76.76.21.21`
   - `CNAME www cname.vercel-dns.com`
5. **(you)** GoDaddy → each domain → **Nameservers → Change → Enter my own** → the two Cloudflare nameservers. Propagation: minutes to a few hours.
6. Vercel → project **nu-time** → **Settings → Domains**:
   - `nu-time.com` (primary) and `www.nu-time.com` → redirect to `nu-time.com`.
   - `nu-beat.com`, `www.nu-beat.com`, `nu-watch.com`, `www.nu-watch.com`, `nu.watch`, `www.nu.watch` → each **Redirect to** `nu-time.com` (308).

## 4. Email addresses used on the site

The site shows **info@**, **press@**, **privacy@** and **standards@nu-time.com**. Decided: Cloudflare **Email Routing** (free) forwards all four to the owner's work inbox.

1. **(you)** Cloudflare → nu-time.com → **Email → Email Routing** → enable. Cloudflare adds its `MX` and `TXT` (SPF) records.
2. **Destination address**: the owner's work inbox → click the verification link Cloudflare sends.
3. **Routing rules**: `info@`, `press@`, `privacy@`, `standards@` → that inbox (or one catch-all rule).
4. Send a test message to each address from a different account.
5. Replies come from the personal inbox. Sending *as* info@nu-time.com needs a mail service later (not needed for launch).

## 5. Launch checks

- [ ] Overview, The Standard, Developers and Privacy load on `https://nu-time.com`.
- [ ] Clock: "Use my location" works; on a browser that refuses location, the approximate city appears (`/api/where`).
- [ ] Join form: a test signup appears in the CSV export (step 2.5).
- [ ] Footer Contact (info@) and Press (press@) emails arrive.
- [ ] Reachability from mainland China (e.g. a China-based uptime checker such as 17ce.com or chinaz.com). If Vercel is blocked or slow, plan a Hong Kong mirror.
- [ ] Repository switched to public when the Standard is published.
