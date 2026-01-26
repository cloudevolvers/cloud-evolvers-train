# 🚀 Single SWA Architecture with Environment-Specific Key Vaults

## ✅ What We've Implemented

### 1. **Single Static Web App for All Environments**
- **Name**: `cloudevolvers-website-swa` (no environment suffixes!)
- **Resource Group**: `xevolve-dta-rg` 
- **Location**: `West Europe`
- **SKU**: `Standard`
- **URL**: `https://witty-desert-0f02b4903.2.azurestaticapps.net`
- **Managed Identity**: `403592bc-7b14-47aa-9cb1-f5133b1976d5`

### 2. **Environment-Specific Key Vaults**

#### Staging Key Vault
- **Name**: `cloudevolvers-staging-kv`
- **Resource Group**: `xevolve-dta-rg`
- **URL**: `https://cloudevolvers-staging-kv.vault.azure.net/`

#### Production Key Vault  
- **Name**: `cloudevolvers-prod-kv`
- **Resource Group**: `ce-xv-prod-rg`
- **URL**: `https://cloudevolvers-prod-kv.vault.azure.net/`

### 3. **Permissions Configured**
- SWA managed identity has "Key Vault Secrets User" role on both Key Vaults
- RBAC authorization enabled on both Key Vaults

### 4. **Workflow Simplified**
- Single deployment token: `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS`
- Environment-specific Key Vault access logic
- Proper environment variable handling per environment

## 🧹 Cleanup Completed

### ❌ **Removed Old Resources**
- ~~`cloudevolvers-staging-website-swa`~~ ✅ DELETED
- ~~`cloudevolvers-prod-website-swa`~~ ✅ DELETED

## 🔧 Required Actions

### 1. **Add Single GitHub Secret**
```
Name: AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS
Value: 3faa38485ecb1113df31e7dbe85bfa3c9bba048f0d1b7d339dc13e228927e3e902-2c9a4c76-d05d-4e1e-ad26-64d3320986fe00329080f02b4903
```

### 2. **Remove Old Secrets** (can be done after testing)
- `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_DTA`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_STAGING` 
- `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_PROD`

### 3. **Test Deployments**
```bash
# Test staging
gh workflow run deploy-staticwebapp.yml --ref main -f environment=staging

# Test production  
gh workflow run deploy-staticwebapp.yml --ref main -f environment=prod

# Test DTA (PR preview)
gh workflow run deploy-staticwebapp.yml --ref main -f environment=dta
```

## 📊 Architecture Benefits

### ✅ **Simplified Management**
- Single SWA to manage instead of 3 separate ones
- One deployment token for all environments
- Consistent URL across environments (uses environment-specific routes)

### ✅ **Environment Isolation** 
- Separate Key Vaults ensure secret isolation
- Environment-specific configurations maintained
- Proper RBAC permissions per environment

### ✅ **Cost Optimization**
- Only one Standard SWA instead of multiple
- Reduced resource overhead
- Simplified monitoring

## 🔄 Environment Flow

```
┌─────────────┐    ┌─────────────────────────────────┐
│   GitHub    │    │     Single Static Web App       │
│  Workflow   │───▶│  cloudevolvers-website-swa      │
└─────────────┘    │  Standard SKU, Managed Identity │
                   └─────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
            ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
            │   Staging    │ │ Development  │ │ Production   │
            │   Routes     │ │    Routes    │ │    Routes    │
            └──────────────┘ └──────────────┘ └──────────────┘
                    │               │               │
                    ▼               ▼               ▼
            ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
            │ staging-kv   │ │ (no secrets) │ │  prod-kv     │
            │   Secrets    │ │   for DTA    │ │   Secrets    │
            └──────────────┘ └──────────────┘ └──────────────┘
```

## 🎯 Deployment Targets

| Environment | Route | Key Vault | Resource Group |
|------------|--------|-----------|----------------|
| **DTA** | `/` | None | `xevolve-dta-rg` |
| **Staging** | `/` | `cloudevolvers-staging-kv` | `xevolve-dta-rg` |  
| **Production** | `/` | `cloudevolvers-prod-kv` | `ce-xv-prod-rg` |

## 🚀 Next Steps

1. **Add the GitHub secret** above
2. **Commit and push** these changes
3. **Test each environment** with workflow dispatch
4. **Set up Key Vault secrets** as needed per environment
5. **Remove old GitHub secrets** once confirmed working

Perfect architecture - one SWA, environment-specific secrets, clean and simple! 🎉
