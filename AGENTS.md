# Turkey Ball Classic — AI handoff

Paste this file into any coding agent as project context. It is the source of truth for intent, stack, content, and constraints. Prefer reading the live code over this doc if they disagree.

**Repo:** `/Users/nic_vandermeer/Library/CloudStorage/Dropbox/Turkey Classic/Turkey Ball Classic Site`  
**GitHub:** `https://github.com/digitalbandit/turkey-ball-classic` (`origin/main`, commit `3cfd808`)  
**Git author:** Thrashers Baseball `<coach@thrashersbaseball.com>`  
**Local date this was written:** 24 Oct 2026

---

## What this is

Annual family rec event website for the **Turkey Ball Classic**: mixed-age Wiffle ball with a signature **Kick-Strike** (kickball after a strikeout). Hosted by people around **Thrashers Baseball** in **Burbank, CA**.

The site must look like a **vintage rec-league baseball poster**, not a generic sports/SaaS landing page. HTML/CSS/layout — not one giant poster image.

Voice: dry, local, slightly sarcastic, handwritten-sign energy. Short sentences. No corporate sports copy. No extra hero taglines beyond **Last Night’s Turkey. Today’s Glory.**

---

## Event facts (edit in `src/data/event.ts`)

| Field | Current value | Notes |
|---|---|---|
| Annual | 2nd Annual | First event was 2025 |
| Established | 2025 | Footer: Est. 2025 |
| Name | Turkey Ball Classic / The Turkey Ball Classic | |
| Date | Friday, November 27 (`Fri` / `11/27`) | Day after Thanksgiving 2026 (Thanksgiving is Thu 11/26). Confirmed by owner 24 Oct 2026; also set in `index.html` meta descriptions. |
| Time | 11:00 AM | First pitch. People roll in ~10:30 |
| Place | George Izay Park, Olive Field 3, Burbank, CA | Maps: `https://maps.google.com/?q=George+Izay+Park+Burbank+CA` |
| Teams | Green vs. Black | Drafted Thanksgiving night (day before). Custom jerseys. Mixed adults + kids. |
| Kids nickname | Thrashers | Local youth ball kids; treat as a proper noun |
| Tagline | Last Night’s Turkey. Today’s Glory. | Do not add extra hero slogans |

**RSVP goes to a Google Sheet.** `/im-in` POSTs JSON (`Content-Type: text/plain` to avoid a CORS preflight) to a Google Apps Script web app whose URL is `rsvp.endpoint` in `src/data/event.ts`. The script lives in `rsvp/apps-script.gs` (setup steps at the top) and is pasted into the owner's Google Sheet via Extensions → Apps Script. One row per email; re-submitting the same email updates that row. Hidden `website` honeypot field drops bots. Optional `NOTIFY_EMAIL` in the script emails the owner on each RSVP. If `rsvp.endpoint` is empty the form shows "The clipboard isn’t out yet." On success the RSVP is also saved to `localStorage` key `tbc-rsvp-2026` so the device shows "You’re on the list". `/rsvp` redirects to `/im-in`.

---

## Stack (do not replace unless asked)

- Vite 5 + React 18 + TypeScript (strict) + React Router 6
- Single CSS file: `src/index.css` (design tokens, no Tailwind, no CSS modules)
- No UI kit, no icon package — custom SVGs in `src/components/Icons.tsx`
- Google Fonts loaded in `index.html`
- SPA fallback: `vercel.json` rewrite `/(.*) → /index.html`
- Node scripts: `npm run dev` · `npm run build` · `npm run preview` · `npm run lint`
- Dev server used in original work: `http://127.0.0.1:5173/`

**Dependencies (runtime):** `react`, `react-dom`, `react-router-dom` only. Do not add packages unless the user asks.

---

## Commands

```bash
cd "/Users/nic_vandermeer/Library/CloudStorage/Dropbox/Turkey Classic/Turkey Ball Classic Site"
npm install
npm run dev          # Vite
npm run build        # tsc --noEmit && vite build
npm run lint
```

Do not commit unless the user asks. Do not force-push. Do not amend unless they ask and the commit is unpushed and authored by you.

---

## Routes

| Path | Page | Purpose |
|---|---|---|
| `/` | `HomePage` | Poster hero, info strip, features, rules, last-year video + gallery |
| `/details` | `DetailsPage` | When/where, day schedule, we-bring / you-bring |
| `/rules` | `RulesPage` | Full rules + kick-strike chalkboard |
| `/teams` | `TeamsPage` | Green vs Black, draft explanation (rosters not published) |
| `/faq` | `FaqPage` | Numbered FAQ from `faqs` |
| `/im-in` | `ImInPage` | Clipboard RSVP form |
| `/rsvp` | redirect | → `/im-in` |
| `*` | `NotFoundPage` | “Foul ball” |

Shared chrome: `Layout` → `Header` + `<main id="main">` + `Footer`. Header CTA is always **I’m In**.

Home composition (`HomePage.tsx`): `Hero` → `InfoStrip` → `Features` → `RulesSection` → `PhotoGallery` (`#last-year`).

---

## File map

```
src/
  App.tsx                 routes
  main.tsx                StrictMode + index.css
  index.css               ALL styling (~1500 lines)
  data/event.ts           event, rules, features, faqs, gallery, video
  components/
    Header.tsx Footer.tsx Layout.tsx
    Hero.tsx ParkBackdrop.tsx     SVG park scene behind mascot
    InfoStrip.tsx Features.tsx
    RulesSection.tsx              KickDiagram + Polaroid + rules card
    PhotoGallery.tsx              last-year video + mosaic + lightbox
    InkButton.tsx Reveal.tsx Icons.tsx
  pages/
    HomePage DetailsPage RulesPage TeamsPage FaqPage ImInPage NotFoundPage
public/
  favicon.svg
  assets/
    turkey-mascot.png + .webp     illustrated mascot (white knocked out)
    crew-photo.jpg                Polaroid: three kids on the infield
    kick-strike-diagram.png       chalk illustration, green knockout
    last-year/
      first-annual.mp4            H.264 1280×720 ~32s, ~9.1MB
      first-annual-poster.jpg     1600×1200 poster frame
      *.jpg                       13 gallery photos (see captions below)
```

Related source art (not in the repo): the parent folder `/Users/nic_vandermeer/Library/CloudStorage/Dropbox/Turkey Classic/` (`Website/`, `motion/`, `umpires/`, `Turkey Drip/`, `FINAL LOGO*.png`, last year's roster spreadsheets).

---

## Design system

Cream paper, navy, burnt orange, forest/chalkboard green, muted sky, warm tan. Athletic condensed + brush/display + marker. Real Polaroid photo. Illustrated turkey mascot only — **never photorealistic turkey**.

### CSS tokens (`:root` in `src/index.css`)

```
--paper: #f3e6c8
--paper-deep: #e7d6ae
--paper-white: #f7f1e3
--navy: #1b2a44
--navy-deep: #121c30
--ink: #1a2332
--orange: #e04a2c
--orange-dark: #c43b22
--forest: #2a4638
--chalk: #2d4a3c
--sky: #8eb9d4
--tan: #c4a06a
--cream: #f4eed8
--line: rgba(27, 42, 68, 0.16)
--shadow: 0 18px 40px rgba(18, 28, 48, 0.18)
--header-h: 4.35rem
--max: 72rem
```

### Fonts (Google, in `index.html`)

| Token | Family | Use |
|---|---|---|
| `--font-athletic` | Bebas Neue | nav, labels, scoreboard, buttons |
| `--font-display` | Lilita One | big titles (hero, page h1) |
| `--font-marker` | Permanent Marker | tagline, some display |
| `--font-hand` | Caveat | photo captions, kickers |
| `--font-rules` | Kalam | rules body, RSVP paper |
| `--font-body` | Libre Franklin | running text |

### Visual language to keep

- Paper grain overlay on `body::before` (multiply noise SVG)
- Ink stamp buttons (`.ink-btn`) — solid burnt orange or outline
- Masking-tape strips (`.tape`, `.tape-left`, `.tape-right`)
- Polaroid / clipboard / chalkboard / scoreboard motifs
- Slight rotation on cards (`±0.5–3.5deg`), straighten on hover
- Custom crown SVG as a recurring mark
- Hero is CSS + `ParkBackdrop` SVG + mascot PNG, not a flat poster JPEG
- Muted photo treatment: `filter: saturate(0.93) contrast(1.04)`

### Do not

- Tailwind, shadcn, icon fonts, Lottie, extra animation libraries
- Generic “hero + three cards + testimonials” sports template
- Extra hero taglines or marketing subheads
- Replace the illustrated mascot with a photo/AI turkey
- Introduce a fee / ticket / Stripe flow (there is no fee; that FAQ was removed on purpose)
- Put RSVP behind a SaaS form without being asked

### Responsive notes (already implemented; don’t regress)

- Mobile stacks hero: title → mascot → tagline → CTAs
- Info strip and rules stack instead of shrinking the poster
- Gallery: 12-col dense mosaic desktop; 2-col under 820px; wide cards span 2
- Header “I’m In” must stay fully visible (was previously clipped in screenshots)
- `prefers-reduced-motion`: disable parallax / reveal / hover transforms

### Reveal / overlay gotchas (already fixed once)

- `.reveal` is **transform-only** (no opacity). Earlier opacity ~0.01 washed out inner pages.
- Body grain overlay is `z-index: 1` (was 40 and composited over content)
- Hero `overflow` must stay `visible` so the mascot/CTAs are not clipped
- Info strip sits above hero art (`z-index`)

---

## Content that must stay accurate

### Rules (`rules` in `event.ts`)

1. Standard Wiffle Ball with a strike zone; **counts for adults and Thrashers start at 1–1**.
2. Kick-Strike: strike out → 4th “Kick-strike”; pitcher rolls a kickball (same rules as wiffle).
3. You can take the kick-strike early, but only one; miss = out.
4. 5 innings, **8-run cap** per inning.
5. Teams drafted the day before. Green vs. Black.

Kick-strike diagram is the provided chalkboard PNG (`/assets/kick-strike-diagram.png`), **not** the old inline SVG.

Polaroid next to home rules uses `/assets/crew-photo.jpg`, caption **Same Crew. / Bigger Plays.**

### Features

- All the Gear — Wiffle ball bats, balls, bases, etc.
- Custom Jerseys — drafted day before, Green vs. Black
- Setup on Site — tables & coolers provided
- Good Times — post-holiday determination, beverages, and a few surprises

### FAQ (7 items; numbering is 01–07 on the page)

1. Who is this for?
2. Do kids and adults play together? → **Yes. Adults and Thrashers start at 1–1 so the little ones aren’t watching a walk-fest.**
3. What is a Kick-Strike?
4. What should I bring?
5. Are there jerseys?
6. Where do I park?
7. What if it rains?

**Removed on purpose:** “Is there a fee?” Do not add it back.

### Last Year gallery

Video first, then 13 photos. Lightbox on photos only (esc / arrows). **Do not restore** `black-team-2.jpg` / caption **Still Black.**

Video:

- `src`: `/assets/last-year/first-annual.mp4` (avc1/H.264 + mp4a, 1280×720, ~32s)
- `poster`: `/assets/last-year/first-annual-poster.jpg`
- caption: **Last year's tape.**
- native `<video controls playsInline>` in `.gallery-tape` (taped cream frame)

Photo captions in order:

1. The whole circus. (wide)
2. Hardware. (tall)
3. Grass stains included. (tall, crop top)
4. Today’s glory. (tall, crop top)
5. Required energy. (tall)
6. Black. (mid)
7. Protect the plate. (tall, crop top)
8. The whole mechanic. (tall)
9. Adults play too. (tall, crop top)
10. Same crew. (mid)
11. Hats off. (mid)
12. Draft night. (tall)
13. Game faces. (tall)

---

## RSVP form fields

`name`, `email`, `adults`, `kids` (label: Kids / Thrashers), `role` (`playing` | `sideline`), `notes`, plus `at` ISO timestamp on submit.

Success copy: “You’re on the list” / see you Friday at Olive Field 3 / used for Thanksgiving-night draft.

---

## Owner decisions already made

- Built from an empty git repo; this *is* the site (no prior Next/Wordpress to preserve beyond the listed content).
- Preserve existing routes and RSVP behavior unless asked to replace them.
- Real kids photo in the Polaroid (not a stock family).
- Chalk kick-strike illustration replaced a generated SVG.
- Gallery added from last year’s photos; Still Black removed; iPhone `.mov` transcoded with macOS `avconvert --preset Preset1280x720` to web MP4.
- No icon library if SVG/CSS suffice.
- Verify UI in a real browser after visual/layout/routing changes (not a single screenshot).

---

## Likely next work (do not do unless asked)

- Bump copy/storage key if the year rolls.
- Deploy (Vercel config exists; confirm production URL with owner).
- After the draft: publish Green/Black rosters on `/teams`.
- Compress/host the 9.1MB MP4 on a CDN if load time becomes an issue.
- OG image is currently the mascot PNG; could be a dedicated social card.

---

## How to change common things

| Task | Where |
|---|---|
| Date, time, park, tagline | `src/data/event.ts` (`event`) |
| Rules / FAQ / features / gallery | same file |
| Colors, type, layout | `src/index.css` |
| Nav links | `src/components/Header.tsx` |
| Hero art / mascot | `Hero.tsx` + `ParkBackdrop.tsx` + `public/assets/turkey-mascot.*` |
| New last-year photo | add jpg under `public/assets/last-year/`, append `lastYearPhotos` |
| New page | `src/pages/*` + route in `App.tsx` + Header link |
| RSVP storage key | `STORAGE_KEY` in `ImInPage.tsx` |
| RSVP endpoint / sheet logic | `rsvp.endpoint` in `event.ts` · `rsvp/apps-script.gs` (redeploy as a new version after edits) |

After UI work: `npm run lint` and `npm run build`, then click through Home, Details, Rules, Teams, FAQ, I’m In, 404, and mobile nav.

---

## Prompt snippet for a new AI session

> You are continuing the Turkey Ball Classic website. Read `AGENTS.md` and `src/data/event.ts` first. Keep the vintage rec-league poster look (cream paper, navy, burnt orange, forest green, athletic + marker fonts). Do not Tailwind-ize it, do not replace the illustrated turkey mascot, do not add a fee, do not invent a backend unless I ask. Event copy lives in `src/data/event.ts`. All CSS is `src/index.css`. Verify visual changes in the browser.
