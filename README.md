# Web Fast Technology — Digital Marketing & IT Solutions

A modern, SEO-optimized website for **Web Fast Technology**, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Branded header with logo, top contact bar, and mega menu
- Hero with lead capture form (“Book a Free Audit”)
- About section with mission, vision, and company details
- Client logo grid (15 brands)
- Client appreciation / Google-style testimonials grid
- 9 SEO service pages (`/services/[slug]`)
- Contact form with Resend API
- WhatsApp + phone floating action buttons
- Favicon and metadata use `/public/logo.png`

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and add your keys locally. **Never commit `.env.local` or paste API keys into `.env.example`.**

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (default: https://www.webfasttech.com) |
| `RESEND_API_KEY` | Resend API key for contact emails |
| `RESEND_FROM_EMAIL` | Verified sender email in Resend (optional in dev) |
| `CONTACT_EMAIL_TO` | Where form submissions are sent |

### Deploy (Vercel / hosting)

Add the same variables in your host’s **Environment Variables** dashboard — not in the repo.

### Security

- `.env.local` is gitignored.
- If an API key was ever committed, **revoke it in Resend** and create a new one.

## Customize

| File | What to change |
|------|----------------|
| `src/lib/constants.ts` | Company info, phones, GSTIN, branches |
| `src/lib/clients-data.ts` | Client names and logo paths |
| `src/lib/testimonials-data.ts` | Review content |
| `public/logo.png` | Brand logo (also used as favicon) |
| `public/clients/*.png` | Individual client logos |

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Resend API
