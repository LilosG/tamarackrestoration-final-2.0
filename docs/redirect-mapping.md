# Redirect Mapping

Authoritative redirect reconciliation table for the 48 legacy URLs in `audits/old_urls.txt`.

Notes:

- Canonical host normalization is handled separately by the non-www to `www` redirect in `vercel.json`.
- Astro/Vercel trailing slash normalization is enabled with `trailingSlash: true` in `vercel.json` and `trailingSlash: 'always'` in `astro.config.mjs`.
- `/new-folder`, `/new-page`, and `/our-projects/sample` are intentionally not redirected unless future Search Console, backlink, or analytics evidence proves value.
- North County legacy service URLs are intentionally preserved to `/service-area/` per the approved reconciliation plan.
- Duplicate-effective explicit rules for Rancho Santa Fe and Vista water-restoration paths were removed because the `(/)?` pattern rules remain.

| Legacy URL | Status | Destination / Handling | Notes |
| --- | --- | --- | --- |
| `/about/trusted-partners-certifications` | covered | `/about/certifications/` | Legacy trust/certifications page maps to current certifications page. |
| `/blog/category/water-damage` | covered | `/blog/category/water-damage/` | Added explicit slash-normalization redirect. |
| `/blog/top-10-mold-removal-companies-carlsba-ca` | covered | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | Typo correction to current article slug. |
| `/blog/top-10-mold-removal-companies-carlsba-ca/` | covered | `/blog/top-10-mold-removal-companies-carlsbad-ca/` | Typo correction to current article slug. |
| `/contact-us` | covered | `/contact/` | Legacy contact path maps to current contact page. |
| `/fire-and-smoke-restoration` | covered | `/services/fire-damage-restoration/` | Legacy fire/smoke page maps to current fire damage service page. |
| `/flood-cleanup` | covered | `/services/flood-cleanup/` | Legacy flood cleanup page maps to current service page. |
| `/insurance-information` | covered | `/insurance/` | Legacy insurance information page maps to current insurance hub. |
| `/mold-removal` | covered | `/services/mold-removal/` | Legacy mold service page maps to current service page. |
| `/new-folder` | intentionally ignored | 404 | Low-value Squarespace/test path; do not redirect without external evidence of value. |
| `/new-page` | intentionally ignored | 404 | Low-value Squarespace/test path; do not redirect without external evidence of value. |
| `/our-projects/sample` | intentionally ignored | 404 | Low-value Squarespace sample path; do not redirect without external evidence of value. |
| `/service-area/bressi-ranch/mold-remediation` | covered | `/service-area/bressi-ranch/mold-removal/` | Legacy mold-remediation wording maps to current mold-removal local page. |
| `/service-area/bressi-ranch/water-restoration` | covered | `/service-area/bressi-ranch/water-damage-restoration/` | Legacy water-restoration wording maps to current water damage local page. |
| `/service-area/carlsbad/affordable-water-restoration` | covered | `/service-area/carlsbad/water-damage-restoration/` | Legacy Carlsbad water variant maps to priority Carlsbad water page. |
| `/service-area/carlsbad/emergency-water-damage-restoration` | covered | `/service-area/carlsbad/water-damage-restoration/` | Legacy Carlsbad emergency water variant maps to priority Carlsbad water page. |
| `/service-area/carlsbad/mold-remediation` | covered | `/service-area/carlsbad/mold-removal/` | Legacy mold-remediation wording maps to current Carlsbad mold page. |
| `/service-area/carlsbad/slab-leak-repair` | platform slash normalization | `/service-area/carlsbad/slab-leak-repair/` | Current URL exists with trailing slash; handled by platform trailing slash normalization. |
| `/service-area/carlsbad/water-restoration` | covered | `/service-area/carlsbad/water-damage-restoration/` | Legacy water-restoration wording maps to priority Carlsbad water page. |
| `/service-area/encinitas/mold-remediation` | covered | `/service-area/encinitas/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/encinitas/water-restoration` | covered | `/service-area/encinitas/water-damage-restoration/` | Legacy water-restoration wording maps to current local water page. |
| `/service-area/north-county-san-diego/mold-remediation` | covered | `/service-area/` | Intentionally preserved as broad service-area hub. |
| `/service-area/north-county-san-diego/water-restoration` | covered | `/service-area/` | Intentionally preserved as broad service-area hub. |
| `/service-area/oceanside/mold-remediation` | covered | `/service-area/oceanside/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/oceanside/water-restoration` | covered | `/service-area/oceanside/water-damage-restoration/` | Legacy water-restoration wording maps to current local water page. |
| `/service-area/rancho-santa-fe/mold-remediation` | covered | `/service-area/rancho-santa-fe/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/rancho-santa-fe/water-restoration` | covered after dedupe | `/service-area/rancho-santa-fe/water-damage-restoration/` | Covered by retained `(/)?` pattern rule; duplicate explicit rules removed. |
| `/service-area/san-marcos/mold-remediation` | covered | `/service-area/san-marcos/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/san-marcos/water-restoration` | covered | `/service-area/san-marcos/water-damage-restoration/` | Legacy water-restoration wording maps to current local water page. |
| `/service-area/solana-beach/mold-remediation` | covered | `/service-area/solana-beach/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/solana-beach/water-restoration` | covered | `/service-area/solana-beach/water-damage-restoration/` | Legacy water-restoration wording maps to current local water page. |
| `/service-area/vista/mold-remediation` | covered | `/service-area/vista/mold-removal/` | Legacy mold-remediation wording maps to current local mold page. |
| `/service-area/vista/water-restoration` | covered after dedupe | `/service-area/vista/water-damage-restoration/` | Covered by retained `(/)?` pattern rule; duplicate explicit rules removed. |
| `/service-areas` | covered | `/service-area/` | Legacy plural hub maps to current service-area hub. |
| `/services/fire-and-smoke-restoration` | covered | `/services/fire-damage-restoration/` | Legacy service slug maps to current fire damage service page. |
| `/services/mold-inspection-and-testing` | covered | `/services/mold-removal/` | Closest current mold service page. |
| `/services/water-restoration` | covered | `/services/water-damage-restoration/` | Legacy service slug maps to current water damage service page. |
| `/sewage-clean-up` | covered | `/services/sewage-cleanup/` | Legacy hyphenated wording maps to current sewage cleanup service page. |
| `/sewage-clean-up-1` | covered | `/services/sewage-cleanup/` | Squarespace duplicate slug maps to current sewage cleanup service page. |
| `/testamonials` | covered | `/about/testimonials/` | Misspelled legacy testimonials path maps to current testimonials page. |
| `/testamonials/` | covered | `/about/testimonials/` | Misspelled legacy testimonials path maps to current testimonials page. |
| `/testimonials` | covered | `/about/testimonials/` | Legacy testimonials path maps to current testimonials page. |
| `/testimonials/` | covered | `/about/testimonials/` | Legacy testimonials path maps to current testimonials page. |
| `/water-restoration` | covered | `/services/water-damage-restoration/` | Legacy root service path maps to current water damage service page. |
| `/water-restoration-services` | covered | `/services/water-damage-restoration/` | Legacy root service variant maps to current water damage service page. |
| `/water-restoration/` | covered | `/services/water-damage-restoration/` | Legacy root service path maps to current water damage service page. |
| `/welcome` | covered | `/` | Legacy welcome page maps to homepage. |
| `/welcome/` | covered | `/` | Legacy welcome page maps to homepage. |
