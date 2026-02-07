# Developer Handoff Notes

## Expanding the Site

### Add a City
Edit `src/data/cities.ts` → add City object with `publish: true`. Add `localizedIntroSeedByCity` entries in `src/data/services.ts`. Run `npm run build`.

### Add a Service
Edit `src/data/services.ts` → add ServicePillar with `publish: true`. Run `npm run build`.

### Publish Wave 2
Set `publish_wave2: true` in `src/data/site.ts`. Run `npm run build`.

### Enable Reviews
Set `show_review_excerpts: true` in `src/data/site.ts`.
Set `reviews_verified: true` only when connected to verified data source.

## Architecture
- Static Astro site, 88 pages pre-rendered at build time
- All content from `/src/data/` TypeScript files
- Tailwind v3 via `@astrojs/tailwind` integration
- Minimal client JS: mobile nav, FAQ accordion, form validation
- Forms: Formspree (configurable via env var)
- Fonts: Google Fonts (Inter + Plus Jakarta Sans)
- Schema: JSON-LD generators in `/src/lib/schema/`
- SEO: Meta utility in `/src/lib/seo.ts`
