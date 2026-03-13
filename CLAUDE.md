# Project: LSO Course
## URL: https://lsocourse.zone.net.au

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- No database — content in TypeScript data files
- Dark theme UI
- ElevenLabs TTS (eleven_flash_v2_5, George voice) — pre-generated audio in `public/audio/`
- Unsplash stock images in `public/images/module1/`

## File Structure
- `src/app/page.tsx` — Landing page with module grid
- `src/app/module/[slug]/` — Module pages (server + client components)
- `src/app/api/tts/route.ts` — TTS API (fallback if static audio missing)
- `src/components/visuals/` — 9 interactive visual components (all "use client")
- `src/components/quiz/` — Quiz system (question cards, results, state machine)
- `src/components/ui/` — Shared UI (header, footer, module cards, section blocks)
- `src/components/ui/section-player.tsx` — Per-paragraph TTS player (solo, skip, rewind, progress)
- `src/components/ui/section-block.tsx` — Section renderer with paragraph highlighting + margin images
- `src/components/ui/para-image.tsx` — Image/placeholder card for paragraph visuals
- `src/data/` — Module metadata, content, quiz data, and image mappings
- `src/data/module1/images.ts` — Image slot definitions (38 slots, see IMAGE_SLOTS.csv)
- `src/data/module1/quiz.ts` — 20-question bank (10 drawn randomly per attempt)
- `src/lib/elevenlabs.ts` — TTS generation with abbreviation expansion + number-to-words
- `src/types/` — TypeScript interfaces
- `scripts/prebuild-tts.ts` — Script to pre-generate all TTS audio files

## TTS System
- Pre-generated static mp3 files: `public/audio/module1/{sectionId}-{paraIndex}.mp3`
- Naming: `1.1-0.mp3` = section 1.1, paragraph 0
- Text preprocessing: numbers → words, abbreviations → full words (nm → nanometres, etc.)
- Regenerate: `npx tsx scripts/prebuild-tts.ts` (skips existing, needs ELEVENLABS_API_KEY in .env)
- Server-side cache: `.tts-cache/` (gitignored, speeds up dev regeneration)
- Fallback: if static file missing, `/api/tts` endpoint generates on-demand

## Image System
- Stock photos: `public/images/module1/*.jpg` (Unsplash, free license)
- Slot spreadsheet: `public/images/module1/IMAGE_SLOTS.csv` (open in Excel/Sheets)
- Image config: `src/data/module1/images.ts` — each slot has src, alt, placeholder, icon
- To replace: drop new file in `public/images/module1/`, update `src` in images.ts
- Desktop only: images appear in right margin next to active paragraph during TTS playback
- Hidden on mobile

## Quiz System
- 20-question bank, 10 drawn randomly per attempt
- Pass threshold: 8/10 (80%)
- Different questions on retake

## Infrastructure
- VPS path: /var/www/lso-course
- PM2 name: lso-course
- Port: 3011
- Nginx: /etc/nginx/sites-available/lsocourse.zone.net.au
- Database: none
- Repo: github.com/laserxz/LSOcourse

## Deploy
```bash
cd /var/www/lso-course
npm run build
pm2 restart lso-course
```

## Key Info
- Module 1 (Laser Physics & Classification) is fully implemented
- Modules 2-11 show as locked on landing page
- No auth/payments — content is freely accessible
- Build spec: /var/www/temp_files/BUILD_SPEC_v1.md

## Rules
- Dark theme UI
- Contact: apps@zone.net.au
