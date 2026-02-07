# Migration Plan — Wheyland Electric

## Legacy URL Redirects

| Old URL | New URL | Status |
|---------|---------|--------|
| `/about-us-san-diego-county-electrician/` | `/about/` | Configured in vercel.json |

Additional legacy routes should be added to `vercel.json` as they are discovered during migration.

## Migration Checklist

### Pre-Launch
- [ ] Configure DNS to point to Vercel
- [ ] Set `PUBLIC_SITE_URL` environment variable in Vercel
- [ ] Set `PUBLIC_FORMSPREE_ENDPOINT` environment variable in Vercel
- [ ] Upload logo files to `/public/images/`
- [ ] Upload any available project photos
- [ ] Test all forms with Formspree endpoint
- [ ] Verify GBP embed loads correctly
- [ ] Test mobile nav and sticky CTA bar
- [ ] Review all page content for accuracy
- [ ] Verify phone number links work (click-to-call)

### Launch Day
- [ ] Deploy to Vercel production
- [ ] Verify redirects working
- [ ] Submit sitemap to Google Search Console
- [ ] Verify all pages indexed via `site:wheylandelectric.com`
- [ ] Test form submissions end-to-end
- [ ] Check GBP website URL points to new site

### Post-Launch (Week 1)
- [ ] Monitor Google Search Console for crawl errors
- [ ] Monitor form submissions
- [ ] Check for 404 errors in analytics/server logs
- [ ] Add any additional legacy URL redirects as needed

### Post-Launch (Month 1)
- [ ] Review GSC indexing coverage
- [ ] Check page speed (Lighthouse)
- [ ] Monitor keyword rankings for primary queries
- [ ] Begin GBP post cadence
