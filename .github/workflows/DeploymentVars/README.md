# 🎯 Environment Configuration - Single Source of Truth

## Overview

This directory contains the **single source of truth** for all environment variables used in Cloud Evolvers deployments. The configuration system is designed to be simple, maintainable, and secure.

## 📁 File Structure

```
DeploymentVars/
├── README.md           # This file - documentation
├── production.env      # Production environment (main branch)
├── staging.env         # Staging environment (pull requests - auto-cleanup on merge/close)
├── dev.env             # Dev environment (feature branches - overwrites previous)
└── secrets-mapping.yml # Maps which variables should come from GitHub Secrets
```

## 🌍 Environment Strategy

**Three separate environments with different behaviors:**

1. **Production** (`production.env`)
   - Trigger: Push to `main` branch
   - URL: `https://witty-desert-0f02b4903.2.azurestaticapps.net`
   - Behavior: Stable production environment

2. **Staging** (`staging.env`)
   - Trigger: Pull Requests
   - URL: `https://witty-desert-0f02b4903-<pr-number>.westeurope.2.azurestaticapps.net`
   - Behavior: Unique environment per PR, **auto-deleted when PR is merged or closed**

3. **Dev** (`dev.env`)
   - Trigger: Push to any non-main branch
   - URL: `https://witty-desert-0f02b4903-dev.westeurope.2.azurestaticapps.net`
   - Behavior: Single dev environment, **overwrites previous deployment**

## 🔐 Security Architecture

### Why Not Key Vault?

According to [Microsoft's documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/key-vault-secrets):
- ❌ Key Vault integration **ONLY** works for **production** Static Web Apps
- ❌ **NOT supported** for staging/preview environments
- ❌ **NOT supported** for managed functions (we use "bring your own functions")
- ⚠️ Requires Standard plan + System-assigned Managed Identity

### Our Solution: GitHub Secrets

✅ Works for **ALL** environments (dev, staging, production)  
✅ Simple to manage and update  
✅ Secure by default  
✅ Version controlled configuration (without sensitive values)  
✅ Easy team collaboration  

## 📝 How It Works

### 1. Define Variables in `production.env` (Single Source of Truth)

```bash
# production.env
EMAIL_SENDER=internalautomation@xevolve.io
API_KEY=placeholder-will-be-replaced-by-github-secret
EMAIL_AZURE_CLIENT_SECRET=placeholder-will-be-replaced-by-github-secret
```

### 2. Mark Secrets in `secrets-mapping.yml`

```yaml
# secrets-mapping.yml
secrets:
  # GitHub Organization Secrets (shared across repos)
  organization:
    - name: API_KEY
      env_var: API_KEY
      description: "API authentication key for Cloud Evolvers"
    
    - name: API_KEY
      env_var: VITE_API_KEY
      description: "Frontend API key (same as API_KEY)"
  
  # GitHub Repository Secrets (repo-specific)
  repository:
    - name: EMAIL_AZURE_CLIENT_SECRET
      env_var: EMAIL_AZURE_CLIENT_SECRET
      description: "Azure AD Client Secret for email functionality"
    
    - name: AZURE_STATIC_WEB_APPS_API_TOKEN
      env_var: AZURE_STATIC_WEB_APPS_API_TOKEN
      description: "Deployment token for Static Web App"
```

### 3. GitHub Actions Automatically Maps Secrets

The workflow automatically:
1. Loads all variables from `production.env`
2. Reads `secrets-mapping.yml`
3. Overrides placeholder values with GitHub Secrets
4. Sets them as environment variables in Static Web App

## 🚀 Adding New Secrets

### Step 1: Add to GitHub Secrets

**Organization Secret** (shared across repos):
1. Go to GitHub Organization Settings
2. Navigate to Secrets and variables → Actions
3. Click "New organization secret"
4. Add your secret

**Repository Secret** (repo-specific):
1. Go to Repository Settings
2. Navigate to Secrets and variables → Actions
3. Click "New repository secret"
4. Add your secret

### Step 2: Add to `production.env`

```bash
# Add the variable with a placeholder value
MY_NEW_SECRET=placeholder-will-be-replaced-by-github-secret
```

### Step 3: Add to `secrets-mapping.yml`

```yaml
secrets:
  organization:  # or 'repository' depending on scope
    - name: MY_NEW_SECRET
      env_var: MY_NEW_SECRET
      description: "What this secret is used for"
```

### Step 4: Commit and Push

The GitHub Actions workflow will automatically pick it up on the next deployment!

## 📊 Current Secret Configuration

### GitHub Organization Secrets
| Secret Name | Environment Variable | Purpose |
|-------------|---------------------|---------|
| `API_KEY` | `API_KEY`, `VITE_API_KEY` | API authentication for Cloud Evolvers |

### GitHub Repository Secrets
| Secret Name | Environment Variable | Purpose |
|-------------|---------------------|---------|
| `EMAIL_AZURE_CLIENT_SECRET` | `EMAIL_AZURE_CLIENT_SECRET` | Azure AD authentication for email |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | - | Deployment token for Static Web App |
| `XEVOLVE_DEPLOY_CI_CD_SPN_APP_ID` | - | Service Principal for CI/CD |
| `XEVOLVE_DEPLOY_CI_CD_SPN_SECRET` | - | Service Principal secret |

## 🔍 Troubleshooting

### Secret Not Working?

1. **Check spelling**: Environment variable names are case-sensitive
2. **Verify mapping**: Ensure it's listed in `secrets-mapping.yml`
3. **Check scope**: Org secrets vs repo secrets
4. **Re-run workflow**: Changes to secrets require a new deployment

### How to Test Locally?

```bash
# Copy production.env to .env.local
cp .github/workflows/DeploymentVars/production.env .env.local

# Add real secret values (DO NOT commit .env.local)
# Edit .env.local and replace placeholders with real values

# Run your app
npm run dev
```

**⚠️ NEVER commit `.env.local` to git!** (It's in `.gitignore`)

## 🎨 Environment-Specific Configuration

### Production (`production.env`)
- Used for main branch deployments
- Full feature set enabled
- Production endpoints

### Staging (`staging.env`)
- Used for PR preview deployments
- May have feature flags enabled
- Staging endpoints

### Development (Local)
- Use `.env.local` (not tracked in git)
- Override any values for local testing

## 📖 Best Practices

### ✅ DO:
- Keep `production.env` as single source of truth
- Document all variables with comments
- Use descriptive secret names
- Update `secrets-mapping.yml` when adding secrets
- Test in staging before production

### ❌ DON'T:
- Hardcode secrets in `production.env`
- Commit `.env.local` files
- Store secrets in code
- Use Key Vault references (they don't work for staging)
- Duplicate configuration across files

## 🔄 Migration from Key Vault

If you're migrating from Key Vault references:

**Old (doesn't work for staging):**
```bash
EMAIL_AZURE_CLIENT_SECRET=@Microsoft.KeyVault(VaultName=my-vault;SecretName=my-secret)
```

**New (works everywhere):**
```bash
EMAIL_AZURE_CLIENT_SECRET=placeholder-will-be-replaced-by-github-secret
```

Then add to `secrets-mapping.yml` and GitHub Secrets.

## 📚 Additional Resources

- [Azure Static Web Apps Key Vault Secrets](https://learn.microsoft.com/en-us/azure/static-web-apps/key-vault-secrets)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Environment Variables Best Practices](https://12factor.net/config)

---

**Questions?** Check the workflow file: `.github/workflows/deploy-staticwebapp.yml`
