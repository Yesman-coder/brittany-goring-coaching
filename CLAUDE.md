# CLAUDE.md

Context for Claude Code when working in this repository.

## What this is

A one-page marketing website for **Brittany Goring, a mental health coach** in
Philadelphia. She is also the CEO of two home-care agencies (WeAllCare Home
Health Care and ICare Home Care); the site's core narrative is her pivot from
**physical health → mental health** ("For years, she cared for the body. Now
she's here for the mind."). The page's single job is to get visitors to **book a
free consultation**.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** for styling
- **Framer Motion** for scroll-reveal animations (via `src/components/Reveal.tsx`)
- **lucide-react** for icons
- **@fontsource-variable** for self-hosted fonts (no external font CDN)
- Booking via **Calendly** embed; contact form via **Formspree** (both optional,
  configured with env vars)

Node 18.17+ required (Node 20+ recommended).

## Commands

```bash
npm run dev        # local preview at http://localhost:3000
npm run build      # production build (must pass before shipping)
npm run lint       # ESLint (next/core-web-vitals) — keep at zero warnings
npm run typecheck  # tsc --noEmit — keep clean
```

Always run `npm run build` and `npm run lint` after changes; both should pass
with no errors or warnings.

## Where things live

- **All editable content is in `src/config/site.ts`.** Copy, services, packages,
  prices, contact info, team photo list, disclaimer — everything a non-technical
  owner would change. Prefer editing this file over hardcoding text in components.
- **Sections are one component each** in `src/components/`: `Nav`, `Hero`,
  `About`, `Services`, `Packages`, `Team`, `Booking`, `Contact`, `Footer`. They
  are composed in `src/app/page.tsx`.
- **Design tokens** (colors, fonts, base component classes like `.btn-primary`,
  `.card`, `.eyebrow`) are in `tailwind.config.ts` and `src/app/globals.css`.
- **Photos** go in `public/images/` with fixed file names (see that folder's
  README). `ImageWithFallback` renders a branded placeholder until a file exists.

## Design system (keep consistent)

- **Palette:** `forest` #22332A (dark text/sections), `pine` #385B48 (primary
  green), `sage`/`sage-soft` (muted greens), `ivory` #FAF7F0 (background),
  `ivory-deep` (alternating sections), `honey` #C79447 (single warm accent),
  `apricot`/`honey-soft` (soft fills).
- **Type:** `font-display` = Fraunces Variable (serif, headings); `font-body` =
  Instrument Sans Variable (sans, body). Use the `text-display-xl/lg/md` scales
  for headings.
- **Motion:** wrap reveals in `<Reveal>`; it already respects
  `prefers-reduced-motion`. Don't scatter ad-hoc animations.
- **Accent discipline:** honey is the one bold color — use it sparingly for
  emphasis and CTAs, keep everything else calm.
- **Accessibility floor:** keyboard focus is visible globally, layout is
  responsive to mobile, reduced motion is respected. Preserve these.

## Content & compliance notes

- **Credential wording matters.** `site.credential` must reflect what Brittany
  can truthfully claim. Do not describe her as a "licensed coach" (coaching is
  not a licensed profession) and do not imply Capella issued a *license*
  (universities grant degrees/certificates). If asked to change it, keep it
  accurate.
- **Keep the coaching disclaimer** (`disclaimer` in site config, shown in the
  footer): coaching is not therapy/medical care, with the 988 crisis line.
- Facts confirmed from public sources: WeAllCare Home Health Care (Philadelphia,
  PA; phone (215) 291-4383; "500+ families served"); ICare / ICARE trademark
  owned by Brittany Goring. Keep any factual claims consistent with these.

## Conventions

- Client components (those using hooks/state/Framer Motion) start with
  `"use client"`: `Nav`, `Reveal`, `Booking`, `Contact`, `ImageWithFallback`.
  Keep the rest as server components.
- Use the `@/` path alias for imports from `src/` (configured in `tsconfig.json`).
- Tailwind opacity steps 8/12/15/45/55/85 are added in `tailwind.config.ts`;
  reuse the existing tokens rather than introducing new arbitrary values.
- Environment variables are `NEXT_PUBLIC_CALENDLY_URL` and
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (see `.env.example`). Never commit `.env.local`.

## Good first requests to expect

- Update package names/prices in `site.ts`.
- Swap in real photos and adjust captions/alt text.
- Add a testimonials or FAQ section (create a component, add it to `page.tsx`,
  add its content to `site.ts`).
- Set the real Calendly and Formspree values.
