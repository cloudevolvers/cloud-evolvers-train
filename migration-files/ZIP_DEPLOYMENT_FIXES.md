# 🚀 Zip Deployment Fixes

## Issue Resolved
The Azure deployment was failing with:
```
Deployment endpoint responded with status code 409
There may be an ongoing deployment or your app setting has WEBSITE_RUN_FROM_PACKAGE
```

## Root Causes
1. Using the wrong deployment command (`az webapp deploy` vs `az webapp deployment source config-zip`)
2. **Oryx build system** was trying to rebuild our already-built application during zip deployment
3. Need to properly configure `WEBSITE_RUN_FROM_PACKAGE` for optimal performance

## Fixes Applied

### 1. Keep WEBSITE_RUN_FROM_PACKAGE for Performance ⭐ KEY CHANGE
```bash
# Enable WEBSITE_RUN_FROM_PACKAGE for faster startup
az webapp config appsettings set \
    --resource-group "$RESOURCE_GROUP" \
    --name "$APP_NAME" \
    --settings "WEBSITE_RUN_FROM_PACKAGE=1" "ENABLE_ORYX_BUILD=false" \
    --output none
```

**Why this is needed:** `WEBSITE_RUN_FROM_PACKAGE=1` allows Azure to run directly from the zip package without extracting, providing faster startup times.

### 2. Disable Oryx Build System ⭐ CRITICAL FIX
```bash
# Disable Oryx build since we already have a built application
ENABLE_ORYX_BUILD=false
```

**Why this is needed:** Oryx tries to build applications during deployment, even for zip deployments with pre-built applications. This causes conflicts and 409 errors.

### 3. Use Correct Deployment Command ⭐ IMPORTANT
```bash
# Correct for zip packages with WEBSITE_RUN_FROM_PACKAGE:
az webapp deployment source config-zip --src myapp.zip

# NOT: az webapp deploy (incompatible with WEBSITE_RUN_FROM_PACKAGE)
```

### 4. Organized Deployment Artifacts
- ✅ Created `/zip` folder for deployment packages
- ✅ Added symlinks for latest deployments
- ✅ Updated `.gitignore` to exclude deployment artifacts
- ✅ Added `--redeploy` option to reuse latest zip without rebuilding

### 5. Updated All Deployment Scripts
- ✅ `scripts/deploy-dta.sh` - Updated for proper zip deployment
- ✅ `scripts/deploy-prod.sh` - Updated for proper zip deployment
- ✅ `.github/scripts/deploy-unified-runner.sh` - Updated GitHub Actions + Oryx fix

## Deployment Commands Now Work

```bash
# DTA Environment
./scripts/deploy-dta.sh              # Build and deploy if needed
./scripts/deploy-dta.sh --rebuild    # Force rebuild and deploy
./scripts/deploy-dta.sh --redeploy   # Redeploy latest zip without rebuilding

# Production Environment  
./scripts/deploy-prod.sh             # Build and deploy if needed
./scripts/deploy-prod.sh --rebuild   # Force rebuild and deploy
./scripts/deploy-prod.sh --redeploy  # Redeploy latest zip without rebuilding

# Or use npm scripts
npm run deploy:dta
npm run deploy:dta:rebuild
npm run deploy:dta:redeploy
npm run deploy:prod
npm run deploy:prod:rebuild  
npm run deploy:prod:redeploy
```

## Key Changes
1. **Keeps WEBSITE_RUN_FROM_PACKAGE=1** for optimal performance ⭐ CHANGED
2. **Disables Oryx build system** to prevent rebuild conflicts ⭐ KEY
3. **Uses correct `az webapp deployment source config-zip`** for zip packages ⭐ FIXED
4. **Organizes deployment artifacts** in `/zip` folder with redeployment support
5. **Works for both local and GitHub Actions** deployments
6. **Added --redeploy option** for fast redeployments without rebuilding

## Deployment Artifacts
- Deployment zips stored in `/zip` folder (excluded from builds)
- Latest deployments available as symlinks (`xevolve-dta-latest.zip`, `xevolve-prod-latest.zip`)
- Can redeploy previous packages without rebuilding for rollbacks

## References
- Azure CLI docs: [az webapp deployment source config-zip](https://docs.microsoft.com/en-us/cli/azure/webapp/deployment/source)
- The key insight: Use `config-zip` with `WEBSITE_RUN_FROM_PACKAGE=1` and `ENABLE_ORYX_BUILD=false`

The zip deployment should now work smoothly without 409 errors! 🎉
