# Sitemap / Robots / Canonicals Audit

## Configuration findings
- Canonical host is configured as `https://www.tamarackrestoration.com` in Astro config (`site`) and SEO utility canonical builder.
- Trailing slash policy is `always` in Astro config.
- Sitemap is generated via `@astrojs/sitemap` integration.
- `robots.txt` includes `Sitemap: https://www.tamarackrestoration.com/sitemap.xml`.
- Non-production hosts are noindex via `SEOHead.astro` host check.
- Preview/staging edge safeguard: `vercel.json` adds `X-Robots-Tag: noindex, nofollow` for `*-git-*-*.vercel.app` hosts.

## Live verification status
- Live HTTP checks from this container are blocked by proxy/WAF (`CONNECT tunnel failed, response 403`).
- Use CI workflow `.github/workflows/seo-redirect-audit.yml` and/or a networked runner for runtime confirmation.

## Post-deploy commands
```bash
curl -I https://www.tamarackrestoration.com/robots.txt
curl -s https://www.tamarackrestoration.com/sitemap.xml | head -n 40
curl -s https://www.tamarackrestoration.com/services/water-damage-restoration/ | rg -n 'rel="canonical"|name="robots"'
curl -I https://<preview-host>/
```
