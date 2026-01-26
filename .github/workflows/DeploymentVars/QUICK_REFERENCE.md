# 🔐 Secrets Management Quick Reference

## 🎯 Single Source of Truth Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SINGLE SOURCE OF TRUTH                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  production.env (base configuration)                             │
│  ├── All environment variables                                   │
│  ├── Non-sensitive values (emails, URLs, IDs)                   │
│  └── Placeholders for sensitive values                          │
│                                                                  │
│  secrets-mapping.yml (secret definitions)                        │
│  ├── Which variables are secrets                                │
│  ├── Where they come from (org/repo)                            │
│  └── Which environments need them                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     GITHUB ACTIONS WORKFLOW                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Step 1: Load production.env                                     │
│  └── All variables with placeholder values                      │
│                                                                  │
│  Step 2: Read secrets-mapping.yml                               │
│  └── Identify which variables are secrets                       │
│                                                                  │
│  Step 3: Override with GitHub Secrets                           │
│  └── Replace placeholders with real values                      │
│                                                                  │
│  Step 4: Deploy to Azure Static Web Apps                        │
│  └── All variables with correct values                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   AZURE STATIC WEB APP                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Environment Variables (runtime)                                 │
│  ├── All non-sensitive vars from production.env                 │
│  └── All sensitive vars from GitHub Secrets                     │
│                                                                  │
│  ✅ Works for ALL environments (prod/staging/dev)               │
│  ✅ No Key Vault complexity                                     │
│  ✅ Easy to update and maintain                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 🌍 Three Environment Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│  PRODUCTION (main branch)                                        │
│  └─ production.env                                               │
│  └─ URL: https://witty-desert-0f02b4903.2.azurestaticapps.net  │
│  └─ Stable production environment                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  STAGING (pull requests)                                         │
│  └─ staging.env                                                  │
│  └─ URL: https://...−<pr−number>.westeurope.2.azurestaticapps.net│
│  └─ Unique per PR, auto-deleted on merge/close                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  DEV (feature branches)                                          │
│  └─ dev.env                                                      │
│  └─ URL: https://...−dev.westeurope.2.azurestaticapps.net       │
│  └─ Single environment, overwrites previous deployment          │
└─────────────────────────────────────────────────────────────────┘
```

## 📝 Quick Add Secret Guide

### 1️⃣ Add Secret to GitHub

**Option A: Organization Secret** (shared across repos)
```bash
# Navigate to: https://github.com/organizations/YOUR_ORG/settings/secrets/actions
# Click: "New organization secret"
# Name: MY_NEW_SECRET
# Value: actual-secret-value
```

**Option B: Repository Secret** (repo-specific)
```bash
# Navigate to: https://github.com/YOUR_ORG/YOUR_REPO/settings/secrets/actions
# Click: "New repository secret"
# Name: MY_NEW_SECRET
# Value: actual-secret-value
```

### 2️⃣ Add to production.env

```bash
# .github/workflows/DeploymentVars/production.env

# My New Secret
MY_NEW_SECRET=placeholder-will-be-replaced-by-github-secret
MY_NEW_SECRET_COMMENT="This is used for XYZ functionality"
```

### 3️⃣ Add to secrets-mapping.yml

```yaml
# .github/workflows/DeploymentVars/secrets-mapping.yml

secrets:
  organization:  # or 'repository'
    - name: MY_NEW_SECRET
      env_vars:
        - MY_NEW_SECRET
      description: "Description of what this does"
      required: true
      environments: ["production", "staging", "dev"]
```

### 4️⃣ Update Workflow (Optional - Only if needed)

If your secret needs special handling, update the workflow:

```yaml
# .github/workflows/deploy-staticwebapp.yml

- name: Override Secrets from GitHub Secrets (Dynamic)
  run: |
    # Add your new secret override
    if [[ -n "${{ secrets.MY_NEW_SECRET }}" ]]; then
      echo "MY_NEW_SECRET=${{ secrets.MY_NEW_SECRET }}" >> $GITHUB_ENV
      echo "  ✅ MY_NEW_SECRET → MY_NEW_SECRET"
    fi
```

### 5️⃣ Commit and Deploy

```bash
git add .github/workflows/DeploymentVars/
git commit -m "Add MY_NEW_SECRET configuration"
git push
```

## 🔍 Current Secrets

### Organization Secrets
| Secret Name | Env Variables | Used For |
|-------------|---------------|----------|
| `API_KEY` | `API_KEY`, `VITE_API_KEY` | API authentication |

### Repository Secrets
| Secret Name | Env Variables | Used For |
|-------------|---------------|----------|
| `EMAIL_AZURE_CLIENT_SECRET` | `EMAIL_AZURE_CLIENT_SECRET` | Email via Microsoft Graph API |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | - | Deployment token (GitHub Actions only) |
| `XEVOLVE_DEPLOY_CI_CD_SPN_APP_ID` | - | Service Principal (GitHub Actions only) |
| `XEVOLVE_DEPLOY_CI_CD_SPN_SECRET` | - | Service Principal Secret (GitHub Actions only) |

## ❓ Troubleshooting

### Secret Not Working?

```bash
# 1. Check if secret exists in GitHub
# Go to Settings → Secrets → Actions

# 2. Check spelling in secrets-mapping.yml
# Names must match exactly (case-sensitive)

# 3. Check if workflow is using latest secrets-mapping.yml
# Ensure you committed and pushed the file

# 4. Re-run deployment
# Sometimes caches need to be cleared
```

### How to Test Locally?

```bash
# 1. Copy production.env to .env.local
cp .github/workflows/DeploymentVars/production.env .env.local

# 2. Replace placeholders with real values in .env.local
# DO NOT commit .env.local - it's in .gitignore!

# 3. Run your app
npm run dev
```

## 🎨 Why This Approach?

### ✅ Advantages

1. **Single Source of Truth**: All config in one place
2. **Works Everywhere**: Dev, staging, production
3. **Easy to Add**: Just 3 steps to add new secrets
4. **Well Documented**: Self-documenting with comments
5. **Team Friendly**: Clear where to add/change things
6. **Version Controlled**: Config is in git (values are not)

### ❌ Why Not Key Vault?

According to Microsoft's docs, Key Vault integration:
- Only works for production environments
- Doesn't work for staging/preview
- Doesn't work for managed functions
- Requires Standard plan + managed identity
- More complex to set up and maintain

## 📚 Files Overview

```
.github/workflows/
├── deploy-staticwebapp.yml     # Main workflow file
├── DeploymentVars/
│   ├── README.md                    # Full documentation
│   ├── QUICK_REFERENCE.md          # This file
│   ├── production.env              # Single source of truth
│   ├── staging.env                 # Staging config
│   └── secrets-mapping.yml         # Secret definitions
└── scripts/
    ├── deployment-utils.sh         # Utility functions
    └── load-secrets.sh             # Dynamic secret loader
```

---

**Need Help?** Check the full README: `DeploymentVars/README.md`
