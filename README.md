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


### Redirect QA report

After generating `legacy-urls.txt`, run:

```bash
npm run check:legacy-redirects
```

Optional flags:

```bash
npm run check:legacy-redirects -- --in=legacy-urls.txt --out=migration-redirect-report.csv --expected-host=www.tamarackrestoration.com --mode=migration
```


Modes:
- `--mode=migration` (default): for post-cutover validation (`301 -> 200`).
- `--mode=baseline`: for pre-cutover legacy baseline (`200 -> 200` expected on old live site).

Example baseline run:
```bash
npm run check:legacy-redirects -- --mode=baseline
```

Troubleshooting:
- If `npm run check:legacy-redirects` says `Missing script`, run `git pull --ff-only origin main` and `npm install`, then retry.
- If input file errors appear, run `npm run extract:legacy-urls` first (or pass `--in=<path>`).

Pass criteria used by the report:
- First response should be `301`
- Final response should be `200`
- Chain should stay short (2 hops max)
- Final host should match the canonical host

## 📄 License

Private - All rights reserved
# Force deploy
