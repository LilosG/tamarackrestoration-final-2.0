# Deployment required checks

Before go-live, configure branch protection / deployment gating to require the **CI / Lint** status check from `.github/workflows/ci.yml`.

This guarantees the exact same local lint command is enforced in CI:

```bash
npm run lint
```
