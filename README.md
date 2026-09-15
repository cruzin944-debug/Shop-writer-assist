# Shop Writer Assist

Marketing site for **Shop Writer Assist** ([shopwriterasst.com](https://shopwriterasst.com)) — an AI sidekick for service writers (service advisors who write repair orders, talk to customers, and run the front of a repair shop or dealership service department).

This repo is a **static** Next.js App Router landing page (`output: "export"`). It builds to an `out/` folder of HTML/CSS/JS for Cloudflare Pages. There are **no real payments** and **no API routes**. Example quotes and price bands are labeled as placeholder copy.

## Local development

Requirements: Node.js 20+ (22 is fine) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production static export → out/
npx --yes serve out   # preview the exported site locally
npm run lint     # ESLint
```

## What’s on the site

- Hero, problem, solution, features, how it works, audience, pricing, FAQ, waitlist, privacy
- Wordmark: clipboard mark + “Shop Writer” + italic “Assist”
- Waitlist form is client-only: it opens a `mailto:contact@shopwriterasst.com` draft. Nothing is stored on a server.
- Contact: [contact@shopwriterasst.com](mailto:contact@shopwriterasst.com)

## Deploy on Cloudflare Pages

Use one of Jerry’s free Pages projects. This is a **static HTML export**, not a Next.js Worker.

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages**.
2. **Import a GitHub repository** and select `cruzin944-debug/Shop-writer-assist`.
3. Framework preset: **Next.js (Static HTML Export)**.
4. Production branch: **`main`**.
5. Build command: **`npx next build`**.
6. Build directory: **`out`**.
7. Save and deploy. Confirm the Pages URL loads the landing page.
8. **Custom domain:** in the Pages project, add `shopwriterasst.com` (and `www` if you want it). Follow Cloudflare’s DNS prompts so the domain is proxied to this Pages project.

After merge, production deploys from `main`. Preview deployments still run on PR branches if that is enabled on the project.

### Local check that Pages will get files

```bash
npm run build
ls out/index.html out/privacy.html out/404.html
```

## Stack

- Next.js 16 (App Router) + React 19, `output: "export"`
- Tailwind CSS v4
- TypeScript

## Project layout

```
app/            pages, layout, metadata
components/     landing sections, header, footer, mailto waitlist form
public/         static assets (wordmark SVG)
out/            generated on build (gitignored) — Cloudflare Pages publish dir
```
