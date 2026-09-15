# Shop Writer Assist

Marketing site for **Shop Writer Assist** ([shopwriterasst.com](https://shopwriterasst.com)) — an AI sidekick for service writers (service advisors who write repair orders, talk to customers, and run the front of a repair shop or dealership service department).

This repo is a Next.js App Router landing page: value proposition, product story, placeholder pricing, waitlist/demo form, and a short privacy note. There are **no real payments**. Example quotes and price bands are labeled as placeholder copy.

## Local development

Requirements: Node.js 20+ (22 is fine) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## What’s on the site

- Hero, problem, solution, features, how it works, audience, pricing, FAQ, waitlist
- Wordmark: clipboard mark + “Shop Writer” + italic “Assist”
- Waitlist `POST /api/waitlist` validates email and returns success. It does **not** persist to a database or ESP yet — wire that up before launch (Resend, Loops, HubSpot, etc.)
- Contact placeholder: [contact@shopwriterasst.com](mailto:contact@shopwriterasst.com)

## Point shopwriterasst.com at this site

The straightforward path is [Vercel](https://vercel.com) (native Next.js hosting):

1. Push this repo to GitHub (already the case for this project).
2. In Vercel, **Add New → Project** and import `Shop-writer-assist`.
3. Leave the defaults (`npm run build`, Next.js). Deploy.
4. Project → **Settings → Domains** → add `shopwriterasst.com` and `www.shopwriterasst.com`.
5. At your domain registrar, add the DNS records Vercel shows (usually an A record for the apex and a CNAME for `www`).
6. Wait for DNS and TLS to finish. Prefer the apex or `www` as primary and redirect the other.

Other Node hosts (Netlify, Cloudflare Pages with the Next adapter, a VPS + Node) also work. If you need a fully static export later, remove or replace the waitlist API route first — `output: "export"` cannot serve `/api/*`.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- TypeScript

## Project layout

```
app/            pages, layout, metadata, waitlist API
components/     landing sections, header, footer, form
public/         static assets (wordmark SVG)
```
