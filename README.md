# KINETIX Performance Studio

Marketing website for **KINETIX Performance Studio** — a 45-minute group strength & conditioning studio in Kukatpally, Hyderabad.

## Stack

- Vite + TanStack Start (SSR) + TypeScript
- Tailwind CSS v4
- Motion for React
- lucide-react

## Development

```sh
npm install
npm run dev
```

## Content config

All client-editable content lives in `src/lib/`:

| File | What it controls |
|---|---|
| `site.ts` | Name, contact, socials, hours |
| `plans.ts` | Membership pricing |
| `schedule.ts` | Batch timings |

## Deploy

Target: Vercel. Push to `main` — Vercel picks it up automatically.
