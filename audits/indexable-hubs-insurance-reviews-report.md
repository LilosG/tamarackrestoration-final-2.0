# Indexable Hubs, Insurance Architecture, and Reviews Implementation Report

Date: 2026-05-06

## Files changed

### Implementation files

- `src/data/blogCategoryHubs.ts` — created centralized blog category hub metadata.
- `src/lib/blogTaxonomy.ts` — expanded taxonomy helpers to sort and label published categories from centralized metadata.
- `src/pages/blog/category/index.astro` — moved category index onto `BaseLayout` and upgraded it into a shared-layout category hub directory.
- `src/pages/blog/category/[slug]/index.astro` — moved category detail pages onto `BaseLayout` and added topical hub content, related posts, related services, and local links.
- `src/pages/blog/index.astro` — made category navigation data-driven from published categories and hub metadata.
- `src/pages/insurance/index.astro` — softened insurance language, preserved indexability, and added policy/cause/carrier-review caveats.
- `src/layouts/InsuranceCarrierLayout.astro` — softened carrier claims language and kept carrier pages indexable/self-canonical.
- `src/layouts/InsuranceServiceLayout.astro` — added carrier-service support content, core service links, city-service links, and careful insurance caveats.
- `src/components/sections/InsurancePartners.astro` — removed unsupported preferred-vendor/direct-billing wording and replaced it with careful documentation/billing coordination language.
- `src/components/sections/CTABanner.astro` — removed a hardcoded review count and used centralized `business.rating` / `business.reviewCount`.
- `src/data/site.ts` — centralized visible trust metrics through `business.reviewCount`, `business.rating`, and `reviewTrust`.
- `src/utils/googleReviews.ts` — kept the existing GBP cache/fallback scaffold and added safe fallback values from `business` for rating/count.
- `src/data/content.ts`, `src/data/faqs.ts`, `src/data/about.ts` — softened insurance support language where it overpromised claim outcomes, direct payment, or coverage.
- `vercel.json` — added only the approved safe legacy redirects.

### Audit/report files

- `audits/indexable-hubs-insurance-reviews-report.md`
- `audits/redirect-reconciliation-report.md`

## Architecture changes

### Blog category hubs

Before this change, `/blog/category/` and `/blog/category/[slug]/` rendered raw full HTML documents and bypassed the shared site shell. They did not use `BaseLayout`, `SEOHead`, global header/footer, shared schema conventions, or shared CTA/trust components.

After this change, both route types use:

- `BaseLayout`
- centralized canonical URLs via `getCanonicalUrl()`
- centralized robots output via `SEOHead` inside `BaseLayout`
- visible `Breadcrumbs`
- BreadcrumbList and WebPage schema passed through `BaseLayout`
- global Header/Footer/FloatingCTA from the shared shell

The category pages remain `index, follow`.

### Category hub metadata model

The new category hub model lives in `src/data/blogCategoryHubs.ts` and includes:

- `slug`
- `label`
- `icon`
- `title`
- `metaDescription`
- `h1`
- `intro`
- `relatedServiceSlugs`
- `relatedCityServiceLinks`
- `priority`

Published categories are discovered from the blog content collection, then enriched with this metadata through `src/lib/blogTaxonomy.ts`. This makes `/blog/category/leak-detection/` discoverable from `/blog/` because it exists in published blog frontmatter.

## Blog category before/after validation

| URL | Robots | Canonical | Header | Footer | H1 |
| --- | --- | --- | --- | --- | --- |
| `/blog/category/` | `index, follow` | `https://www.tamarackrestoration.com/blog/category/` | yes | yes | `Restoration Blog Categories` |
| `/blog/category/water-damage/` | `index, follow` | `https://www.tamarackrestoration.com/blog/category/water-damage/` | yes | yes | `Water Damage Restoration Articles` |
| `/blog/category/leak-detection/` | `index, follow` | `https://www.tamarackrestoration.com/blog/category/leak-detection/` | yes | yes | `Leak Detection & Slab Leak Articles` |
| `/blog/` | `index, follow` | `https://www.tamarackrestoration.com/blog/` | yes | yes | `Restoration Tips & Guides` |

Generated category routes confirmed:

- `/blog/category/`
- `/blog/category/fire-damage/`
- `/blog/category/flood/`
- `/blog/category/insurance/`
- `/blog/category/leak-detection/`
- `/blog/category/mold/`
- `/blog/category/prevention/`
- `/blog/category/tips/`
- `/blog/category/water-damage/`

## Insurance page/template improvements

Insurance pages remain indexable and self-canonical:

| URL | Robots | Canonical | Header | Footer | Caveat language present |
| --- | --- | --- | --- | --- | --- |
| `/insurance/` | `index, follow` | `https://www.tamarackrestoration.com/insurance/` | yes | yes | yes |
| `/insurance/state-farm/` | `index, follow` | `https://www.tamarackrestoration.com/insurance/state-farm/` | yes | yes | yes |
| `/insurance/state-farm/water-damage-restoration/` | `index, follow` | `https://www.tamarackrestoration.com/insurance/state-farm/water-damage-restoration/` | yes | yes | yes |

Implemented improvements:

- Replaced unsupported “preferred vendor” language with “experienced with major carriers” and documentation support language.
- Replaced blanket direct-billing claims with “billing coordination when applicable.”
- Added policy/cause/carrier-review caveats.
- Added core service links from carrier-service pages to `/services/[service]/`.
- Added local city-service links from carrier-service pages to high-priority `/service-area/[city]/[service]/` pages.
- Kept FAQ schema limited to visible FAQs and did not add unsupported insurance schema.

## Review-count centralization and GBP scaffold

The repo already had the correct secure scaffold:

- `scripts/fetch-google-reviews.mjs`
- `src/data/google-reviews.json`
- `src/data/google-reviews-fallback.json`
- `npm run reviews:fetch`

Implemented review/trust centralization:

- `business.reviewCount` remains the source of truth for fallback visible review count.
- `business.rating` remains the source of truth for fallback visible rating.
- `trustMetrics` now derives from `business`/`reviewTrust` instead of a mismatched hardcoded count.
- `getGoogleReviews()` now returns `business.rating` and `business.reviewCount` when the GBP cache/fallback has no live aggregate values.
- `CTABanner` now uses centralized rating/count values instead of a hardcoded `116`.

Live GBP integration status:

- Full live sync cannot run without credentials.
- The build remains safe when credentials are missing.
- Required environment variables for live sync:
  - `GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID`
  - `GOOGLE_BUSINESS_PROFILE_LOCATION_ID`
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `GOOGLE_REFRESH_TOKEN`
  - optional `GOOGLE_REVIEWS_PROFILE_URL`

No browser-side Google review fetching was added. No Google credentials were added or exposed.

## Schema decisions

- No `Review` or `AggregateRating` schema was added.
- Reason: live GBP aggregate values are not available in the repo, and adding rating schema would require strict alignment with visible review content and Google structured data guidance.
- Blog category pages emit LocalBusiness stub, BreadcrumbList, and WebPage schema through the shared layout path.
- FAQ schema remains tied to visible FAQ content on insurance pages.

## Validation command results

### Build

`npm run build` passed.

Important output:

- `Result (77 files): 0 errors, 0 warnings, 3 hints`
- `166 page(s) built`
- `sitemap-index.xml created at dist`

Existing hints were unrelated to this implementation:

- `src/layouts/BaseLayout.astro` unused `ga4MeasurementId`
- `src/layouts/BaseLayout.astro` external script inline hint
- `src/pages/service-area/[city]/[service].astro` unused `index` callback argument

### Generated HTML inspection command

```bash
python - <<'PY'
from pathlib import Path
import re
files=['dist/blog/category/index.html','dist/blog/category/water-damage/index.html','dist/blog/category/leak-detection/index.html','dist/blog/index.html','dist/insurance/index.html','dist/insurance/state-farm/index.html','dist/insurance/state-farm/water-damage-restoration/index.html','dist/service-area/carlsbad/water-damage-restoration/index.html']
def text_between(html, tag):
    m=re.search(fr'<{tag}[^>]*>(.*?)</{tag}>',html,re.S|re.I)
    return re.sub(r'<[^>]+>',' ',m.group(1)).replace('&amp;','&') if m else ''
for f in files:
    html=Path(f).read_text()
    robots=re.search(r'<meta name="robots" content="([^"]+)"',html,re.I)
    canon=re.search(r'<link rel="canonical" href="([^"]+)"',html,re.I)
    title=re.search(r'<title>(.*?)</title>',html,re.I|re.S)
    h1=' '.join(text_between(html,'h1').split())
    print(f"{f}|title={title.group(1) if title else ''}|robots={robots.group(1) if robots else ''}|canonical={canon.group(1) if canon else ''}|header={'yes' if '<header' in html else 'no'}|footer={'yes' if '<footer' in html else 'no'}|h1={h1}|leakLink={'yes' if '/blog/category/leak-detection/' in html else 'no'}|caveat={'yes' if 'Coverage depends on your policy' in html else 'no'}")
PY
```

Result summary:

- Category pages use shared layout header/footer.
- Category pages are `index, follow`.
- Category pages have self-canonical URLs.
- `/blog/` links to `/blog/category/leak-detection/`.
- Insurance pages are `index, follow` and self-canonical.
- Representative city-service page remains `index, follow`.

### Noindex detection

Command:

```bash
rg -l 'noindex|nofollow' dist/blog/category dist/insurance dist/blog/top-10-mold-removal-companies-carlsbad-ca dist/service-area/carlsbad/water-damage-restoration | wc -l
```

Result: `0`.

### Dist edit check

Command:

```bash
git status --short dist
```

Result: no output. No generated `dist` files were edited or staged.

## Recommended next-phase tasks

1. Add automated HTML assertions for critical SEO outputs after build.
2. Wire `npm run reviews:fetch` into a secure scheduled/build-time workflow after GBP credentials are configured in deployment secrets.
3. Review live GSC data for category and insurance pages after deployment.
4. Revisit `/service-area/carlsbad/slab-leak-repair` redirect only after manual approval because the current route exists.
5. Evaluate `/new-folder`, `/new-page`, and `/our-projects/sample` with GSC/backlink data before redirecting or leaving as intentional 404s.
