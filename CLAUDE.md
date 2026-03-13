# Project: LSO Course
## URL: https://lsocourse.zone.net.au

## Stack
- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- Prisma 7 + PostgreSQL (`lsocourse_db`, user `lsocourse`, PrismaPg adapter)
- Auth.js v5 (next-auth 5.0.0-beta.30) with Credentials provider, JWT sessions
- Dark theme UI
- ElevenLabs TTS (eleven_flash_v2_5, George voice) — pre-generated audio in `public/audio/`
- Unsplash stock images in `public/images/module{N}/`
- Resend API for transactional email (noreply@zone.net.au)

## Database
- PostgreSQL 16, `lsocourse_db`, user `lsocourse`
- Prisma config: `prisma.config.ts` (DB URL from env, NOT in schema.prisma)
- Models: User, Enrollment, ModuleProgress, QuizAttempt, ExamAttempt, PhotoId, Certificate, Coupon, SequenceCounter
- Singleton: `src/lib/db.ts` (PrismaPg adapter pattern)
- Seed: `npx tsx prisma/seed.ts` (admin user + cert sequence counter)

## Auth System
- `src/lib/auth.ts` — NextAuth config (Credentials + JWT + role in token)
- `src/middleware.ts` — Edge-safe JWT route protection (uses `getToken()`, no Prisma import)
- `src/lib/actions/auth.ts` — Server actions: register, verifyEmail, login, forgotPassword, resetPassword
- `src/lib/email.ts` — Resend email (verify email, password reset, welcome)
- `src/types/next-auth.d.ts` — Type augmentation for role on User/Session/JWT
- Auth pages: `/login`, `/register`, `/verify-email`, `/forgot-password`, `/reset-password`
- Public routes: `/`, `/module/laser-physics-classification` (Module 1 free), `/verify`, auth pages
- Admin routes: `/admin/*` (require admin role)
- Protected routes: `/dashboard`, `/module/*` (except Module 1), `/exam`

## File Structure
- `src/app/page.tsx` — Landing page with module grid
- `src/app/module/[slug]/` — Module pages (server + client components)
- `src/app/(auth)/` — Auth pages (login, register, verify-email, forgot/reset password)
- `src/app/dashboard/page.tsx` — Student dashboard (enrollment status, progress, module grid)
- `src/app/api/auth/[...nextauth]/route.ts` — NextAuth API handlers
- `src/app/api/tts/route.ts` — TTS API (fallback if static audio missing)
- `src/components/visuals/` — Interactive visual components (all "use client")
- `src/components/quiz/` — Quiz system (question cards, results, state machine)
- `src/components/ui/` — Shared UI (header, footer, module cards, section blocks)
- `src/components/ui/section-player.tsx` — Per-paragraph TTS player (solo, skip, rewind, progress)
- `src/components/ui/section-block.tsx` — Section renderer with paragraph highlighting + margin images
- `src/data/` — Module metadata, content, quiz data, and image mappings
- `src/data/module1/` — Module 1 content, quiz (20 Qs), images (38 slots)
- `src/data/module2/` — Module 2 content, quiz (20 Qs), images (24 slots)
- `src/lib/` — DB, auth, email, ElevenLabs, server actions
- `src/types/` — TypeScript interfaces
- `scripts/prebuild-tts.ts` — Script to pre-generate all TTS audio files

## TTS System
- Pre-generated static mp3 files: `public/audio/module{N}/{sectionId}-{paraIndex}.mp3`
- Naming: `1.1-0.mp3` = section 1.1, paragraph 0
- Text preprocessing: numbers → words, abbreviations → full words (nm → nanometres, etc.)
- Regenerate: `npx tsx scripts/prebuild-tts.ts` (skips existing, needs ELEVENLABS_API_KEY in .env)
- Module 2 TTS: 29/50 done, 21 pending (ElevenLabs quota ran out, re-run when reset)
- Fallback: browser speech synthesis if static file missing

## Image System
- Stock photos: `public/images/module{N}/*.jpg` (Unsplash, free license)
- Slot spreadsheets: `public/images/module{N}/IMAGE_SLOTS.csv`
- Image config: `src/data/module{N}/images.ts` — each slot has src, alt, placeholder, icon
- To replace: drop new file in `public/images/module{N}/`, update `src` in images.ts
- Desktop only: images appear in right margin next to active paragraph during TTS playback

## Quiz System
- Per module: 20-question bank, 5-10 drawn randomly per attempt
- Pass threshold: 70% (module quizzes are formative, gating only)
- Final exam: 65 questions from separate 130+ bank, 75% pass, 90 min, 3 attempts

## Infrastructure
- VPS path: /var/www/lso-course
- PM2 name: lso-course
- Port: 3011
- Nginx: /etc/nginx/sites-available/lsocourse.zone.net.au
- Database: PostgreSQL `lsocourse_db`
- Repo: github.com/laserxz/LSOcourse

## Deploy
```bash
cd /var/www/lso-course
npm run build
pm2 restart lso-course
pm2 save
```

## Key Gotchas
- **Prisma 7**: DB URL in `prisma.config.ts` (not schema.prisma). Client needs PrismaPg adapter.
- **Auth.js v5 beta**: Don't use client-side signIn() with redirect:false — use server actions.
- **Middleware**: Uses `getToken()` from next-auth/jwt (edge-safe). Does NOT import Prisma or auth.ts.
- **After schema changes**: Run `npx prisma generate` before `npm run build`
- **pg Pool type mismatch**: Use `as any` cast when passing pg.Pool to PrismaPg (type version conflict)

## Implementation Status
- [x] Phase 1: DB + Auth (schema, migration, auth system, middleware, auth pages, dashboard, seed)
- [ ] Phase 2: Stripe payment + enrollment
- [ ] Phase 3: Progress tracking (DB-driven module gating, quiz saves to DB)
- [ ] Phase 4: Exam engine (130+ question bank, timer, scoring, attempts)
- [ ] Phase 5: Certificate + public verification
- [ ] Phase 6: Admin panel
- [ ] Phase 7: Email triggers + cron + polish

## Plan
- Full system design: `/root/.claude/plans/cheeky-napping-pizza.md`
- Build spec: `/var/www/temp_files/BUILD_SPEC_v1.md`

## Rules
- Dark theme UI
- Contact: apps@zone.net.au
