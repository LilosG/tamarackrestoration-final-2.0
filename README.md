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

Create a `.env` file:

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
PUBLIC_SITE_URL=https://www.tamarackrestoration.com
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

## 📄 License

Private - All rights reserved
# Force deploy
