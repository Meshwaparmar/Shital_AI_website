# Shital AI LLP website deployment

This repository is a Next.js App Router project intended for Vercel.

## Local production verification

Use Node.js 22 and npm with the committed lockfile:

```bash
npm ci
npm run check
npm run build
npm run start
```

There is currently no automated test-suite script. `npm run check` runs the available ESLint and TypeScript checks.

## Environment variables

Copy `.env.example` to `.env.local` only for local development. Never commit `.env.local` or expose private integration credentials through `NEXT_PUBLIC_` variables.

Configure these values in **Vercel Project Settings → Environment Variables**:

| Variable | Required | Visibility | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public | Final canonical origin, without a trailing slash, for metadata, sitemap, robots.txt, and JSON-LD. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Recommended | Public | Shital AI LLP WhatsApp number in E.164 digits without `+`; it overrides the verified built-in destination for the floating button. |

## Contact form and Telyxan status

The contact API validates the enquiry, rejects malformed requests, blocks the honeypot field, and applies a best-effort rate limit of five valid attempts per IP every 15 minutes. It does not send email.

The project has no verified Telyxan API or webhook specification, endpoint, account credentials, authentication scheme, or success-response contract. The public Telyxan site links remain available, but the contact form will return a truthful `503` response until the following are supplied by an authorized Telyxan account owner:

1. Official API or webhook documentation for creating an enquiry.
2. The exact endpoint and authentication method.
3. Required payload fields and the success-response contract.
4. A server-only credential to configure in Vercel.

Do not add unverified `TELYXAN_*` variables, endpoints, tokens, or payload formats. Once the integration contract is available, add only its documented server-only variables and update this file with the delivery test procedure.

The floating WhatsApp button is rendered on every public page and opens the verified business WhatsApp conversation with a prefilled enquiry greeting. It uses a standard `wa.me` link because a visitor-initiated conversation must open in WhatsApp Web or the WhatsApp app. The configured public number can override the verified default when required.

Telyxan's server-side send endpoint must not be called from the floating button: it is an authenticated outbound-message API and cannot open a visitor's WhatsApp session. Keep its API key in Vercel only, never in browser code or source files. Before it can deliver contact-form enquiries, provide the approved WhatsApp template name and its variable mapping (or a documented Telyxan enquiry endpoint) so the validated enquiry fields can be sent without inventing a payload.

## Vercel settings

- Framework Preset: Next.js (auto-detected)
- Root Directory: repository root (`./`)
- Install Command: default (`npm install`/lockfile auto-detection)
- Build Command: default (`npm run build`)
- Output Directory: default (`.next`)
- Node.js Version: 22.x

No `vercel.json` is required. After changing environment variables, redeploy so the serverless function receives the new values.

## React compatibility note

The verified stack uses React 18.3.1. Next.js 16 still supports React 18.2 and later, but marks React 18 support as deprecated and will require React 19 in Next.js 17. Keep the current version for this deployment; plan a separate React 19 and UI-library compatibility upgrade before moving to Next.js 17.
