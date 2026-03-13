# Project: LSO Course
## URL: https://lsocourse.zone.net.au

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- No database — content in TypeScript data files
- Dark theme UI

## File Structure
- `src/app/page.tsx` — Landing page with module grid
- `src/app/module/[slug]/` — Module pages (server + client components)
- `src/components/visuals/` — 9 interactive visual components (all "use client")
- `src/components/quiz/` — Quiz system (question cards, results, state machine)
- `src/components/ui/` — Shared UI (header, footer, module cards, section blocks)
- `src/data/` — Module metadata, content, and quiz data
- `src/types/` — TypeScript interfaces

## Infrastructure
- VPS path: /var/www/lso-course
- PM2 name: lso-course
- Port: 3011
- Nginx: /etc/nginx/sites-available/lsocourse.zone.net.au
- Database: none

## Deploy
```bash
cd /var/www/lso-course
npm run build
pm2 restart lso-course
```

## Key Info
- Module 1 (Laser Physics & Classification) is fully implemented
- Modules 2-11 show as locked on landing page
- Quiz pass threshold: 4/5 (70%)
- No auth/payments — content is freely accessible
- Build spec: /var/www/temp_files/BUILD_SPEC_v1.md

## Rules
- Dark theme UI
- Contact: apps@zone.net.au
