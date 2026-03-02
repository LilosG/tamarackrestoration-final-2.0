# Launch Runbook

## Pre-launch
1. Run redirect CI workflow against production and preview.
2. Confirm `THRESHOLDS_OK=yes` and inspect uploaded CSV artifacts.
3. Confirm sitemap/robots/canonical spot checks pass.

## Deploy
1. Deploy release branch to preview.
2. Run manual `workflow_dispatch` with preview `BASE_URL`.
3. Promote to production only if redirect audit passes.

## Post-launch checks
```bash
curl -I https://www.tamarackrestoration.com/
curl -I https://www.tamarackrestoration.com/robots.txt
curl -I https://www.tamarackrestoration.com/sitemap.xml
BASE_URL=https://www.tamarackrestoration.com scripts/verify-redirects.sh audits/old_urls.txt
```

## 48-hour monitoring
- Re-run redirect audit at +1h, +24h, +48h.
- Watch GSC Coverage for redirect errors / not found.
- Confirm sitemap processed and indexed canonical URLs only.
