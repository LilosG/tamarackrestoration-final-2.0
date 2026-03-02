# Tamarack Restoration Website

Professional emergency restoration services website built with Astro + Tailwind CSS.

## 🚀 Project Structure

```
tamarack-restoration/
├── public/
│   ├── fonts/
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── global/      # Header, Footer, Navigation
│   │   ├── sections/    # Page sections (Hero, TrustBar, etc.)
│   │   ├── forms/       # Lead forms, contact forms
│   │   ├── ui/          # Reusable UI components
│   │   └── seo/         # SEO components (meta, schema)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── content/         # Content collections (blog, etc.)
│   ├── data/            # Static data (services, cities, etc.)
│   ├── styles/          # Global CSS
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── vercel.json
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v4
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Deployment:** [Vercel](https://vercel.com/)
- **Forms:** Formspree
- **TypeScript:** Strict mode

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start local dev server at `localhost:4321`       |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview build locally                            |
| `npm run astro ...`    | Run Astro CLI commands                           |

## 📋 Configuration

### Environment Variables

Create a `.env` file (production builds require a real Formspree endpoint):

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mnjbbqea
PUBLIC_SITE_URL=https://www.tamarackrestoration.com
PUBLIC_GA4_MEASUREMENT_ID=G-XZ2JSQZ99Y
```

### Brand Colors

- **Orange (Primary):** `#dc6830`
- **Black:** `#000103`
- **Cream:** `#eeede9`

### Business Info

Located in `src/data/site.ts`:
- Phone: (760) 500-2211
- Address: 5674 El Camino Real Suite M, Carlsbad, CA 92008

## 📦 Deployment

The site is configured for Vercel deployment:

1. Connect repo to Vercel
2. Configure environment variables
3. Deploy

Redirects are configured in `vercel.json`.

## 📝 Content Updates

### Services
Edit `src/data/site.ts` → `services` array

### Cities
Edit `src/data/site.ts` → `cities` array

### FAQs
Edit `src/data/site.ts` → `globalFaqs` array

### Blog Posts
Add markdown files to `src/content/blog/`

## 🔍 SEO

- Automatic sitemap generation
- JSON-LD schema on all pages
- Meta tags via SEOHead component
- 301 redirects for old URLs

## 🔁 Legacy URL Inventory (Redirect Migration)

If the live site blocks `sitemap.xml` requests and returns HTML instead, run the fallback extractor:

```bash
npm run extract:legacy-urls
```

Optional flags:

```bash
npm run extract:legacy-urls -- --base=https://www.tamarackrestoration.com --out=legacy-urls.txt --max-pages=600
```

What it does:
- Tries sitemap endpoints first (`/sitemap.xml`, `/sitemap_index.xml`, `/wp-sitemap.xml`).
- If sitemap endpoints return HTML/non-XML, it automatically falls back to an internal-link crawl.
- Outputs a deduplicated canonical URL list in `legacy-urls.txt`.

## ✅ Redirect Validation

Use a single validator flow with two modes:

- **Default migration mode** (`--mode=migration`): validates migrated legacy URLs against expected redirects.
- **Baseline mode** (`--mode=baseline`): validates the same ruleset using baseline inputs to catch regressions.

### Quick runs

```bash
node scripts/validate-redirects.mjs --mode=migration
node scripts/validate-redirects.mjs --mode=baseline
```

### Full runs with explicit flags

```bash
node scripts/validate-redirects.mjs --mode=migration --in=docs/migration-input-cleaned.txt --out=docs/redirect-validation-migration.txt --expected-host=www.tamarackrestoration.com
node scripts/validate-redirects.mjs --mode=baseline --in=docs/migration-input-cleaned.txt --out=docs/redirect-validation-baseline.txt --expected-host=www.tamarackrestoration.com
```

### Pass criteria

- The run completes without parser or host-validation errors.
- All checked URLs are accounted for by redirect rules or an approved allowlist.
- No unexpected host drift appears in output when `--expected-host` is set.

### Troubleshooting

- If you see host mismatch errors, confirm the source list only contains canonical production URLs and set `--expected-host` explicitly.
- If coverage drops unexpectedly in baseline mode, compare the latest redirect map against `vercel.json` and re-run migration mode for confirmation.
- If input parsing fails, re-generate/clean the input list and re-run with an explicit `--in` path.

## 📄 License

Private - All rights reserved
# Force deploy
