# Deploying nu-time.com

A checklist for going live. Steps marked **(you)** need your accounts or sign-in.

## 1. Vercel project

1. **(you)** Sign in to the Vercel CLI: `npx vercel login` (or `bunx vercel login`).
2. From this repository: `npx vercel link` → create project **nu-time**.
3. Build settings come from `vercel.json`: build command `node build.mjs`, output directory `dist`. No install step is needed.
4. First deploy to a preview URL: `npx vercel` → open it and click through Overview, The Standard and Developers.

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

## 3. Domain

nu-time.com is registered at GoDaddy and currently served by GoDaddy hosting.

1. **(you)** Create a free Cloudflare account → **Add site** → `nu-time.com` → Free plan. Cloudflare imports the existing DNS records.
2. **(you)** GoDaddy → nu-time.com → **Nameservers** → **Change** → enter the two Cloudflare nameservers. Propagation takes minutes to a few hours.
3. In Vercel → project **nu-time** → **Domains** → add `nu-time.com` and `www.nu-time.com`.
4. In Cloudflare DNS, set the records Vercel shows (typically `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`), **DNS only** (grey cloud) so Vercel handles HTTPS.
5. Optional: point `nu-beat.com` at nu-time.com with a Cloudflare redirect rule.

## 4. Email addresses used on the site

The site shows **info@**, **press@**, **privacy@** and **standards@nu-time.com**. Before launch:

1. **(you)** Cloudflare → nu-time.com → **Email** → **Email Routing** → enable (Cloudflare adds the MX records).
2. Add a forwarding rule for each address (or a catch-all) to the inbox that should receive it, and verify that inbox.
3. Send a test message to each address.

## 5. Launch checks

- [ ] Overview, The Standard, Developers and Privacy load on `https://nu-time.com`.
- [ ] Clock: "Use my location" works; on a browser that refuses location, the approximate city appears (`/api/where`).
- [ ] Join form: a test signup appears in the CSV export (step 2.5).
- [ ] Footer Contact (info@) and Press (press@) emails arrive.
- [ ] Reachability from mainland China (e.g. a China-based uptime checker such as 17ce.com or chinaz.com). If Vercel is blocked or slow, plan a Hong Kong mirror.
- [ ] Repository switched to public when the Standard is published.
