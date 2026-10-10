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

Copy `.env.example` to `.env.local` only for local development. Never commit `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: the public production origin, such as `https://www.example.com`. It is used for canonical metadata, `robots.txt`, `sitemap.xml`, and JSON-LD. If omitted on Vercel, the app falls back to Vercel's production project URL.
- `CONTACT_FORM_WEBHOOK_URL`: required for enquiry delivery. It must be an HTTPS endpoint that accepts the validated JSON payload described below.
- `CONTACT_FORM_WEBHOOK_AUTH_TOKEN`: optional server-only bearer token for that endpoint.

The contact webhook receives:

```json
{
  "event": "business_enquiry",
  "submittedAt": "2026-01-01T00:00:00.000Z",
  "source": "Shital AI LLP website",
  "data": {
    "fullName": "Example Name",
    "company": "Example Company",
    "email": "name@example.com",
    "phone": "",
    "businessType": "Small Business",
    "interestedIn": "AI Solutions",
    "message": "Example enquiry message"
  }
}
```

The browser never receives the webhook URL or authentication token. The server validates and limits the request before forwarding it, and the form only reports success after the webhook returns a successful HTTP status.

## Vercel settings

- Framework Preset: Next.js (auto-detected)
- Root Directory: repository root (`./`)
- Install Command: default (`npm install`/lockfile auto-detection)
- Build Command: default (`npm run build`)
- Output Directory: default (`.next`)
- Node.js Version: 22.x

No `vercel.json` is required.

## React compatibility note

The verified stack uses React 18.3.1. Next.js 16 still supports React 18.2 and later, but marks React 18 support as deprecated and will require React 19 in Next.js 17. Keep the current version for this deployment; plan a separate React 19 and UI-library compatibility upgrade before moving to Next.js 17.
