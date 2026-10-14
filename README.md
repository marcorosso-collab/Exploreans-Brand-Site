# exploreans.com

The Exploreans brand site, built to the **Exploreans Brand Bible v1.0 (October 2026)**.
Astro 7, Sveltia CMS, GitHub and Netlify. Property sites (mara.exploreans.com, watamu.exploreans.com) live in their own repositories.

## Pages

| Route | What it is |
|---|---|
| `/` | Home: hero film, the conviction, explore beyond and within, A³, places, the five families, the Passport, stories |
| `/places/` | Mara River Camp and Watamu Beach Club & Villas: what you will live, gallery, experiences by family, what to expect |
| `/experiences/` | Every experience, filterable by family and place (`?family=taste&place=mara-river-camp`) |
| `/passport/` | The Exploreans Passport (interactive) and the Travel Journal |
| `/stories/` and `/stories/[slug]/` | Stories from the places (Markdown) |
| `/about/` | Our story: the conviction, A³, the Explorean, the promise, the Exploreans test |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # production build into dist/
```

Node 22.12 or later (set in `netlify.toml`).

## Brand system in code

- **Tokens** (`src/styles/tokens.css`): the core palette (Basalt, Natural White, Linen, Warm Ochre), functional tints, the five type colours, type scale, spacing steps and grid from chapters 03 and 07. Set `data-place="safari|lagoon|vintage|talavera|granite"` on any element and `var(--place)` becomes that type colour.
- **Type**: Georgia and Calibri, falling back to the open-licensed metric matches Gelasio and Carlito (self-hosted).
- **Wordmark** (`src/components/Wordmark.astro`): paths from the master SVG artwork, descriptor removed. Never redrawn or animated.
- **Stamps and place marks** (`public/stamps/`): the master artwork from the bible, used as CSS masks so they ink in Basalt or the type colour (`src/components/Stamp.astro`). Place marks appear only in Passport contexts.
- **Map line** (`src/lib/contours.ts`, served at `/map/a.svg`, `/b.svg`, `/c.svg`): contour lines generated at build time and applied as a mask at the strengths in the bible.
- **Brand icon**: the "e" of the wordmark on Basalt (`public/favicon.svg`, touch icons).

## Motion

`src/scripts/motion.ts` (GSAP, ScrollTrigger and Lenis, no React). Slow fades and reveals, parallax only on hero media, no bounce. Openings animate with CSS alone so nothing on the first screen waits for JavaScript. Everything collapses to a still page under `prefers-reduced-motion`. The hero film has a pause control.

## Content and the CMS

All copy lives in `src/content/` and is editable at `/admin` (Sveltia CMS, GitHub backend via OpenClaw auth):

- `settings/site.json`: navigation, footer, newsletter
- `pages/*.json`: one file per page
- `places/*.json`: a place, its type, gallery and what to expect
- `experiences/*.json`: name, family, stamp, place, led by, when, what you will live, good to know
- `families/*.json`: the five families
- `stories/*.md`: stories

Uploaded images go to `public/images/uploads/` and are converted to WebP at 1920 px by the CMS.

### Photography

Processed photography is in `public/images/places/`, named `place-family-subject-number`, as `name.webp` (1920 px) plus `name-960.webp`. The `Img` component picks up the small variant automatically and reads real dimensions to prevent layout shift. The hero film is in `public/video/`.

Legacy images in the root of `public/images/` are kept because the property sites link to them.

## Booking: direct, on each property's site

The main call to action, **Explore destinations** (`src/components/Destinations.astro`), opens a list of the places and sends the guest straight to that property's own site and booking engine. The list is built from the Places collection, so a new place appears in it automatically. Every click out to a property fires a `destination_click` event into the GTM `dataLayer` (with `destination` and `url`) to measure the direct-booking funnel. The old `/plan-your-journey/` enquiry page redirects to `/places/`.

## Forms

One Netlify Form: `newsletter` (footer, every page). It submits in place with JavaScript and falls back to `/thank-you/`.

## Before publishing anything new

Run the brand checklist in chapter 08 of the bible: experience first, at least one pillar visible, a qualified person named, both directions of the brand idea, master artwork only, core palette plus one type colour, Georgia and Calibri in sentence case, positive description, no star ratings or luxury vocabulary, British English, no dashes as punctuation.
