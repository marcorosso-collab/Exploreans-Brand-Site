# Exploreans — Umbrella Brand Site

Astro + Sveltia CMS + Netlify + GitHub. Homepage for the Exploreans brand, above the property subdomains (mara.exploreans.com, malaika.exploreans.com).

Built to match the **Exploreans Brand Guidelines 2026** — Forest Green / Sage / Ochre palette, Playfair Display + EB Garamond + Archivo, topographic pattern texture, editorial journal tone of voice.

---

## Deploy in 7 steps

### 1. Push to GitHub

```bash
cd exploreans-site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USER/exploreans-site.git
git branch -M main
git push -u origin main
```

### 2. Update `public/admin/config.yml`

Open the file and edit the top of it:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USER/exploreans-site   # ← put your actual repo here
  branch: main
  base_url: https://openclaw.onrender.com  # ← your OpenClaw instance URL
  auth_endpoint: auth
```

Commit and push that change.

### 3. Connect to Netlify

- New site → Import from GitHub → pick `exploreans-site`
- Netlify auto-detects Astro from `netlify.toml` — no manual config needed
- Deploy

### 4. Point the domain

- Netlify → Domain Management → Add custom domain → `exploreans.com`
- Add the DNS records Netlify gives you at your registrar
- Keep `mara.exploreans.com` and `malaika.exploreans.com` pointed at their own separate Netlify sites (Option B from our earlier chat)

### 5. Set up OpenClaw auth

If you already run OpenClaw for Mara, reuse it. If not, spin up a new one:

- Repo: https://github.com/i40west/netlify-cms-oauth
- Deploy to Render (free tier is fine)
- Set environment variables:
  - `OAUTH_CLIENT_ID` — from GitHub OAuth app
  - `OAUTH_CLIENT_SECRET` — from GitHub OAuth app
  - `REDIRECT_URL` — `https://YOUR-OPENCLAW-URL.onrender.com/callback`

In your GitHub OAuth app (Settings → Developer settings → OAuth Apps):
- Authorization callback URL → `https://YOUR-OPENCLAW-URL.onrender.com/callback`

### 6. Log into the CMS

Visit `https://exploreans.com/admin` → Login with GitHub → pick edits → publish.

First edits to make:
- Upload real hero image (Homepage — Hero)
- Upload property images (Homepage — Properties)
- Upload postcard images (Homepage — Field Notes Postcards)
- Upload OG image (Site Settings — General & SEO)

### 7. Replace placeholder images

Six `.jpg.txt` placeholder notes exist in `public/images/`. Each tells you what the image slot expects. Replace each by uploading via CMS — Sveltia will save the real JPG in the same location, and you can delete the `.txt` placeholder afterwards.

---

## What each CMS section controls

| Sveltia section | What it edits on the homepage |
|---|---|
| **Site Settings → General & SEO** | Browser title, meta description, OG tags |
| **Site Settings → Navigation** | Top nav links, Properties dropdown overrides, CTA button |
| **Site Settings → Footer** | Footer description, tagline, column links, Planhotel endorser |
| **Homepage — Hero** | The full-screen opening section (title, body, background image) |
| **Homepage — Philosophy Letter** | Chapter I letter — headline, lead, paragraphs, signature |
| **Homepage — Pillars Intro** | The "Three ideas we hold to" headline |
| **Homepage — Brand Pillars** | The 3 pillar cards. Add/remove/reorder. |
| **Homepage — Destinations Intro** | The "Two nature-led addresses" section intro |
| **Homepage — Properties** | Property cards + auto-populates nav dropdown. Add a 3rd/4th property here — it appears on the homepage AND in the nav dropdown automatically. |
| **Homepage — Experiences Intro** | "Nature rewards the unhurried" headline |
| **Homepage — Experiences** | The 6 experience cards. Add/remove/reorder. |
| **Homepage — Field Notes Intro** | The "Dispatches from the camps" headline |
| **Homepage — Field Notes Postcards** | The postcard wall. Add/remove/reorder. |
| **Homepage — Planhotel Family** | Group headline, description, values |
| **Homepage — Sister Brands** | Diamonds / Sandies / Exploreans cards |
| **Homepage — Journal / Newsletter** | Newsletter section copy |

---

## The Properties dropdown

The Properties dropdown in the top nav is **auto-populated** from the properties collection. Add a new property via the CMS, set `show_in_nav: true`, and it appears in the dropdown automatically — no separate edit needed.

If you ever want manual control (e.g. custom order, items that aren't properties), fill in `properties_dropdown` in Site Settings → Navigation. When that list is non-empty, it takes precedence over the auto-populated one.

---

## Adding a new property (e.g. your 3rd destination)

1. CMS → Homepage — Properties → New Property
2. Fill in:
   - Order: 3
   - Name (use `<em>...</em>` for italic parts)
   - Short name (shown in nav dropdown)
   - Location, tagline, description
   - Upload hero image
   - Specs (up to 6)
   - CTA URL → your subdomain
   - Show in nav: on
3. Save & publish
4. Appears on homepage AND in nav dropdown automatically

---

## Editing formatting (italics)

Text fields marked `(HTML — use <em>...</em>)` accept basic HTML. To italicize part of a headline, wrap it: `Two <em>nature-led</em> addresses.`

For new lines in headlines use `<br/>`.

---

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

To test a full build locally:

```bash
npm run build
npm run preview
```

---

## File structure reference

```
exploreans-site/
├── public/
│   ├── admin/              # Sveltia CMS entry point
│   │   ├── index.html
│   │   └── config.yml      # ← Edit backend.repo and base_url before deploy
│   ├── images/             # All site images
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/         # Section components (Nav, Hero, Letter, etc.)
│   ├── content/            # All CMS-editable content (Markdown)
│   │   └── config.ts       # Zod schemas
│   ├── layouts/
│   │   └── Layout.astro    # Global head, fonts, meta
│   ├── pages/
│   │   └── index.astro     # Homepage (composes all sections)
│   └── styles/
│       └── global.css      # Brand tokens + all section styles
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

---

## Known notes

- **Images are placeholders** (`.jpg.txt` notes). Replace before launching.
- **`config.yml` repo + base_url must be updated** before admin will work.
- **Newsletter form** currently only shows a success message — wire to ConvertKit / Buttondown / HubSpot for real subscriptions (edit `src/components/Journal.astro`).
- **Anchor links in nav** (`#letter`, `#beyond` etc.) assume single-page layout. If you add other pages later, adjust the nav settings.

---

## Brand compliance

Built to Exploreans Brand Guidelines 2026:
- Palette: Forest Green, Sage, Deep Moss, Pale Leaf, Warm Ochre
- Typography: Playfair Display (display), EB Garamond (body), Archivo (functional)
- No script/handwritten typefaces
- Topographic contour pattern as texture element
- Editorial/journal tone of voice
- SEO anchor phrase: "nature-led camps, lodges and retreats"
- JSON-LD structured data: Organization + parent (Planhotel) + sub-brands

---

Questions? Hit the thumbs-down on any weirdness — this is a production-ready starting point, but your team will naturally refine copy and photography once the real thing is in front of guests.
