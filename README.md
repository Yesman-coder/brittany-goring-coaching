# Brittany Goring — Mental Health Coaching Website

[![GitHub Repo](https://img.shields.io/badge/GitHub-brittany--goring--coaching-181717?logo=github&logoColor=white)](https://github.com/Yesman-coder/brittany-goring-coaching)

A fast, polished one-page website for **Brittany Goring, Mental Health Coach**.
Built with Next.js 14, TypeScript, and Tailwind CSS. Everything you'd normally
need to touch — her bio, services, packages, prices, contact info, photos — lives
in **one plain-text file**, so you rarely have to open the code.

---

## Table of contents

1. [What's on the site](#whats-on-the-site)
2. [Before you launch: two important notes](#before-you-launch-two-important-notes)
3. [Run it on your computer](#run-it-on-your-computer)
4. [Edit the content](#edit-the-content)
5. [Add the photos](#add-the-photos)
6. [Turn on the booking calendar (Calendly)](#turn-on-the-booking-calendar-calendly)
7. [Turn on the contact form (Formspree)](#turn-on-the-contact-form-formspree)
8. [Push to GitHub](#push-to-github)
9. [Deploy it live (Vercel)](#deploy-it-live-vercel)
10. [Project structure](#project-structure)
11. [Working in Claude Code](#working-in-claude-code)

---

## What's on the site

A single scrolling page with these sections:

- **Hero** — the story: *"For years, she cared for the body. Now she's here for the mind."*
- **About** — Brittany's background as a home-care CEO and her move into mental health
- **Coaching** — the five service areas: Career counseling, Peer support, Life coaching,
  Juvenile & adult coaching, and Healthy mental-health environments
- **Packages** — a free consultation plus two paid tiers (prices are placeholders you set)
- **Team** — a photo gallery of Brittany and her team
- **Book** — a free-consultation booking calendar (Calendly)
- **Contact** — a message form plus phone/email/location
- **Footer** — links and a coaching disclaimer

---

## Before you launch: two important notes

**1. Credential wording.** The site currently says
*"Mental Health Coach · Trained at Capella University."* Please double-check the
exact wording with Brittany before going live. A few things to keep in mind:

- "Coach" is generally **not a state-licensed title**, so avoid "licensed coach"
  unless she actually holds a specific state license (e.g., LPC).
- A university grants a **degree or certificate**, not a license — so
  "credential *from* Capella" should describe what she earned there
  (e.g., "graduate certificate in mental health counseling").

Edit the exact line in `src/config/site.ts` → `site.credential`.

**2. Coaching disclaimer.** The footer includes a standard note that coaching is
not therapy or medical care, with the 988 crisis line. This is recommended for
coaching sites. You can adjust the text in `src/config/site.ts` → `disclaimer`.

---

## Run it on your computer

You need **Node.js 18.17 or newer** (Node 20+ recommended). Get it from
[nodejs.org](https://nodejs.org). Then, in a terminal:

```bash
# 1. Go into the project folder
cd brittany-goring-coaching

# 2. Install dependencies (first time only)
npm install

# 3. Start the local dev server
npm run dev
```

Open **http://localhost:3000** in your browser. Changes you save appear instantly.

Other commands:

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the local preview server                |
| `npm run build`     | Build the production version                  |
| `npm run start`     | Run the built production version locally      |
| `npm run lint`      | Check the code for problems                   |
| `npm run typecheck` | Check the TypeScript types                    |

---

## Edit the content

**Almost everything is in one file: [`src/config/site.ts`](src/config/site.ts).**

Open it in any text editor. It's organized into clearly labeled sections —
`hero`, `about`, `services`, `packages`, `teamPhotos`, contact details, and so on.
Change the text between the quotation marks, save, and the site updates.

Examples:

- **Change the phone/email** → `site.contact`
- **Change a service description** → `services`
- **Set the real prices** → `packages` (replace the `$—` placeholders)
- **Reword the hero headline** → `hero.headlineLead` / `hero.headlineEmphasis`

You do not need to know how to code to edit this file.

---

## Add the photos

Put Brittany's real photos in the **`public/images/`** folder using these exact
file names (there's a reminder file in that folder too):

| File name               | Where it appears     | Best shape        |
| ----------------------- | -------------------- | ----------------- |
| `brittany-portrait.jpg` | Hero (main portrait) | Tall (4:5)        |
| `about-1.jpg`           | About section        | Tall (3:4)        |
| `about-2.jpg`           | About section        | Tall (3:4)        |
| `team-1.jpg`            | Team gallery         | Tall (3:4)        |
| `team-2.jpg`            | Team gallery         | Tall (3:4)        |
| `team-3.jpg`            | Team gallery         | Tall (3:4)        |
| `team-4.jpg`            | Team gallery         | Tall (3:4)        |

Until a photo exists, the site shows a tidy placeholder in its spot — nothing
ever looks broken. Compress large photos first (try
[squoosh.app](https://squoosh.app)) so the site stays fast.

---

## Turn on the booking calendar (Calendly)

The **Book** section shows a live calendar once you connect Calendly (free plan
works fine).

1. Sign up at [calendly.com](https://calendly.com).
2. Create an event type called **"Free Consultation"** (e.g., 30 minutes).
3. Copy its scheduling link, e.g. `https://calendly.com/brittany-goring/free-consultation`.
4. In the project, copy `.env.example` to a new file named **`.env.local`** and fill in:

   ```bash
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/brittany-goring/free-consultation
   ```

5. Restart `npm run dev`. The calendar now appears in the Book section.

Until you add the link, the Book section shows a friendly "call or email" fallback —
so it's never empty.

---

## Turn on the contact form (Formspree)

The contact form works two ways:

- **With Formspree (recommended):** submissions are emailed to Brittany.
  1. Sign up at [formspree.io](https://formspree.io) (free plan works).
  2. Create a form and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
  3. Add it to your **`.env.local`**:

     ```bash
     NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
     ```

- **Without Formspree:** the form falls back to opening the visitor's email app
  with the message pre-filled to Brittany's address. No setup needed.

---

## Push to GitHub

> These steps assume you have a [GitHub account](https://github.com) and
> [Git installed](https://git-scm.com/downloads). Run them from inside the
> `brittany-goring-coaching` folder.

### Option A — using the GitHub website + terminal

1. On GitHub, click **New repository**. Name it e.g. `brittany-goring-coaching`.
   **Do not** check "Add a README" (this project already has one). Click
   **Create repository**.

2. Back in your terminal, run these commands one at a time. Replace
   `YOUR-USERNAME` with your GitHub username:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Brittany Goring coaching website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/brittany-goring-coaching.git
   git push -u origin main
   ```

3. Refresh the GitHub page — your code is now there.

### Option B — using the GitHub CLI (fastest)

If you have the [GitHub CLI](https://cli.github.com) installed:

```bash
git init
git add .
git commit -m "Initial commit: Brittany Goring coaching website"
gh repo create brittany-goring-coaching --private --source=. --remote=origin --push
```

### Saving changes later

After the first push, saving new changes is always these three lines:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

> **Note:** `.env.local` is intentionally **not** pushed to GitHub (it's in
> `.gitignore`) because it can hold private links. You'll add those values again
> in your host's settings — see below.

---

## Deploy it live (Vercel)

Vercel is the company behind Next.js and hosts it for free. Easiest path:

1. Push to GitHub first (above).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New… → Project**, then **Import** the
   `brittany-goring-coaching` repository.
4. Vercel auto-detects Next.js — just click **Deploy**.
5. **Add your environment variables:** in the project's
   **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

   Then **redeploy** (Deployments → ⋯ → Redeploy) so they take effect.
6. To use a custom domain like `brittanygoring.com`, open
   **Settings → Domains** and follow the steps.

Every time you `git push`, Vercel rebuilds and updates the live site automatically.

---

## Project structure

```
brittany-goring-coaching/
├── public/
│   ├── favicon.svg
│   └── images/            ← drop real photos here (see images/README.md)
├── src/
│   ├── app/
│   │   ├── globals.css     ← colors, fonts, base styles
│   │   ├── layout.tsx      ← page shell, SEO metadata, fonts
│   │   └── page.tsx        ← assembles all the sections
│   ├── components/         ← one file per section (Hero, About, …)
│   └── config/
│       └── site.ts         ← ★ all editable content lives here ★
├── .env.example            ← template for Calendly / Formspree links
├── CLAUDE.md               ← context for Claude Code
├── README.md               ← this file
└── package.json
```

---

## Working in Claude Code

This project is set up to be edited comfortably with
[Claude Code](https://claude.com/claude-code). A `CLAUDE.md` file at the root
gives Claude the full picture — the design system, where content lives, and the
project conventions — so you can ask for changes in plain English, like:

> "Change the middle package to $150 per session and rename it to 'Momentum'."
>
> "Add a testimonials section under Packages."
>
> "Make the hero background a little warmer."

Claude Code will know exactly which files to touch.

---

Built with care. Questions about a specific change usually come down to one file:
`src/config/site.ts`.
