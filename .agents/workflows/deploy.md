---
description: How to deploy the website changes to Vercel production (www.elitefreshmart.com)
---

# Deploy to Vercel Production

The project is connected to GitHub repo `abid2457/elitefeshmart2026` on the `main` branch.
Vercel auto-deploys when changes are pushed to `main`.

## Steps

// turbo-all

1. Stage all changes:
```
git add -A
```

2. Commit with a descriptive message:
```
git commit -m "<describe your changes>"
```

3. Push to GitHub (triggers Vercel auto-deploy):
```
git push origin main
```

4. Verify deployment on Vercel dashboard:
   - Visit: https://vercel.com/elitefreshmartambur
   - Or check the live site: https://www.elitefreshmart.com
