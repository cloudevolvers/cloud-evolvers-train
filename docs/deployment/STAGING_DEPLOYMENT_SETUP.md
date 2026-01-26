# Static Web App Staging Deployment Setup

## ✅ What We've Accomplished

### 1. Created New Static Web App
- **Name**: `cloudevolvers-staging-website-swa` (removed "-prod-" from naming)
- **Resource Group**: `xevolve-dta-rg`
- **Location**: `westeurope`
- **SKU**: `Standard` (required for Key Vault access)
- **URL**: `https://yellow-dune-05f8e2903.2.azurestaticapps.net`
- **Managed Identity**: System-assigned enabled

### 2. Key Vault Integration
- **Key Vault**: `xevolve-shared-kv`
- **Permissions**: Assigned "Key Vault Secrets User" role to Static Web App's managed identity
- **Principal ID**: `7b42197d-13ed-491b-910a-53456e8df06d`

### 3. Updated Configuration Files
- Updated `deployments.json` with correct staging configuration
- Added Key Vault URL environment variable
- Updated workflow to support staging environment token
- Added Key Vault secret fetching steps for staging

### 4. Deployment Token
- **API Key**: `15e6a162d03662a278a10a015949fe27d116f2f84fe88c0cc2be785f1800e2ce02-dfec4a19-b09f-4cc9-84c8-1238a57dcebc003130705f8e2903`

## 🔧 What Needs to Be Done Next

### 1. Add GitHub Secret
Add the following secret to your GitHub repository:
```
Secret Name: AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_STAGING
Secret Value: 15e6a162d03662a278a10a015949fe27d116f2f84fe88c0cc2be785f1800e2ce02-dfec4a19-b09f-4cc9-84c8-1238a57dcebc003130705f8e2903
```

### 2. Add Azure Credentials (if not already present)
For Key Vault access, add this secret:
```
Secret Name: AZURE_CREDENTIALS
Secret Value: {
  "clientId": "CLIENT_ID",
  "clientSecret": "CLIENT_SECRET", 
  "subscriptionId": "4a55c776-9f6b-4966-921e-c9f60e50652f",
  "tenantId": "34dd9821-1508-4858-974c-e5fd1493a58f"
}
```

### 3. Configure GitHub Integration
Run this command to set up GitHub integration:
```bash
az staticwebapp github-action create \
  --name "cloudevolvers-staging-website-swa" \
  --resource-group "xevolve-dta-rg" \
  --source "https://github.com/xevolve-org/cloud-evolvers-train" \
  --branch "main" \
  --app-location "." \
  --output-location "dist" \
  --token "YOUR_GITHUB_TOKEN"
```

### 4. Test Deployment
Once secrets are added, test by running:
```bash
# Manual workflow dispatch
gh workflow run deploy-staticwebapp.yml --ref main -f environment=staging
```

## 📋 Environment Variables Configuration

### Staging Environment
```json
{
  "VITE_ENVIRONMENT": "staging",
  "VITE_APP_ENV": "staging", 
  "VITE_APP_NAME": "Cloud Evolvers Training - Staging",
  "VITE_SHOW_CONSTRUCTION_BANNER": "false",
  "VITE_CONSTRUCTION_MESSAGE": "🧪 Staging Environment - Testing Phase 🧪",
  "VITE_BLOG_UNDER_CONSTRUCTION": "true",
  "VITE_BLOG_CONSTRUCTION_MESSAGE": "📝 Blog Section - Testing New Features 📝",
  "VITE_AZURE_AD_CLIENT_ID": "e66fa949-5dad-4067-b01b-587088d16796",
  "VITE_AZURE_AD_TENANT_ID": "34dd9821-1508-4858-974c-e5fd1493a58f",
  "VITE_API_URL": "https://cloudevolvers-staging-api.azurestaticapps.net",
  "VITE_KEY_VAULT_URL": "https://xevolve-shared-kv.vault.azure.net/",
  "VITE_DEBUG": "false",
  "NODE_ENV": "production"
}
```

## 🔐 Key Vault Access Pattern

Your Static Web App can now access Key Vault secrets using:

### JavaScript/TypeScript
```javascript
// Using Azure SDK
import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();
const client = new SecretClient(process.env.VITE_KEY_VAULT_URL, credential);

const secret = await client.getSecret("your-secret-name");
```

### REST API
```javascript
// Using managed identity token
const tokenResponse = await fetch('http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https://vault.azure.net', {
  headers: { 'Metadata': 'true' }
});
const token = await tokenResponse.json();

const secretResponse = await fetch(`${process.env.VITE_KEY_VAULT_URL}secrets/your-secret-name?api-version=2016-10-01`, {
  headers: { 'Authorization': `Bearer ${token.access_token}` }
});
```

## 🚀 Deployment Flow

1. **Push to main**: Automatically deploys to staging
2. **Manual dispatch**: Can select staging environment
3. **Environment variables**: Injected during build
4. **Key Vault secrets**: Fetched during deployment (if configured)
5. **Static assets**: Deployed to Azure CDN

## 📊 Resource Summary

| Resource | Name | Type | Location | SKU |
|----------|------|------|----------|-----|
| Static Web App | cloudevolvers-staging-website-swa | Microsoft.Web/staticSites | West Europe | Standard |
| Key Vault | xevolve-shared-kv | Microsoft.KeyVault/vaults | North Europe | Standard |
| Resource Group | xevolve-dta-rg | Microsoft.Resources/resourceGroups | North Europe | N/A |

## 🔄 Next Actions Required

1. **Add GitHub secrets** (AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_STAGING)
2. **Set up GitHub integration** using Azure CLI
3. **Test deployment** with workflow dispatch
4. **Configure any additional Key Vault secrets** needed by the application
5. **Update DNS/custom domain** if needed for staging environment
