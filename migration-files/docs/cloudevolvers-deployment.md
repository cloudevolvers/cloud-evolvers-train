# Cloud Evolvers Deployment Setup

This document explains the Cloud Evolvers deployment configuration using GitHub Actions and Azure Web Apps with SAMI (System-Assigned Managed Identity) authentication.

## Overview

The Cloud Evolvers deployment uses:
- **Azure Web App**: `cloudevolvers-web-app`
- **Azure Storage Account**: `webxevolvestorage` (existing)
- **Azure Key Vault**: `kv-cloudevolvers-prod`
- **SAMI Authentication**: No connection strings or secrets in environment variables
- **GitHub Actions**: Automated deployment pipeline

## File Structure

```
.env.cloudevolvers                              # Local development environment
.github/workflows/DeploymentVars/cloudevolvers.env  # GitHub Actions environment
.github/workflows/deploy-cloudevolvers.yml      # GitHub Actions workflow
scripts/setup-cloudevolvers-rbac.sh            # RBAC setup script
```

## Azure Resources

### Storage Account
- **Name**: `webxevolvestorage`
- **Resource Group**: `sc-northeu-sc-apim`
- **Subscription**: `4a55c776-9f6b-4966-921e-c9f60e50652f`
- **Container**: `images` (for blob storage)

### Key Vault
- **Name**: `kv-cloudevolvers-prod`
- **Resource Group**: `sc-northeu-sc-apim`

### Web App
- **Name**: `cloudevolvers-web-app`
- **Resource Group**: `sc-northeu-sc-apim`
- **Domain**: `https://cloudevolvers.com` (custom domain)

## SAMI Authentication Setup

### Required RBAC Permissions

The web app's System-Assigned Managed Identity needs these roles:

1. **Storage Blob Data Contributor** on `webxevolvestorage`
   - Allows read/write access to blob storage
   - Used for image uploads and serving

2. **Key Vault Secrets User** on `kv-cloudevolvers-prod`
   - Allows reading secrets from Key Vault
   - Used for API keys, connection strings, etc.

3. **Reader** on resource group `sc-northeu-sc-apim`
   - Allows monitoring and diagnostics

### Setup RBAC Permissions

#### Option 1: Using the Script (Recommended)
```bash
# Run the RBAC setup script
./scripts/setup-cloudevolvers-rbac.sh
```

#### Option 2: Manual Azure CLI Commands
```bash
# Set subscription
az account set --subscription "4a55c776-9f6b-4966-921e-c9f60e50652f"

# Enable system-assigned managed identity
az webapp identity assign \
  --name "cloudevolvers-web-app" \
  --resource-group "sc-northeu-sc-apim"

# Get the principal ID
PRINCIPAL_ID=$(az webapp identity show \
  --name "cloudevolvers-web-app" \
  --resource-group "sc-northeu-sc-apim" \
  --query principalId \
  --output tsv)

# Assign Storage Blob Data Contributor role
az role assignment create \
  --assignee "$PRINCIPAL_ID" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/4a55c776-9f6b-4966-921e-c9f60e50652f/resourceGroups/sc-northeu-sc-apim/providers/Microsoft.Storage/storageAccounts/webxevolvestorage"

# Assign Key Vault Secrets User role
az role assignment create \
  --assignee "$PRINCIPAL_ID" \
  --role "Key Vault Secrets User" \
  --scope "/subscriptions/4a55c776-9f6b-4966-921e-c9f60e50652f/resourceGroups/sc-northeu-sc-apim/providers/Microsoft.KeyVault/vaults/kv-cloudevolvers-prod"
```

## Key Vault Secrets

The following secrets should be stored in `kv-cloudevolvers-prod`:

### Required Secrets
- `cloudevolvers-website-graph-api-client-secret` - Microsoft Graph API client secret
- `cloudevolvers-website-nextauth-secret` - NextAuth secret for session encryption
- `cloudevolvers-website-admin-password` - Admin panel password
- `cloudevolvers-website-jwt-secret` - JWT signing secret

### Optional API Keys
- `cloudevolvers-website-unsplash-access-key` - Unsplash API access key
- `cloudevolvers-website-unsplash-secret-key` - Unsplash API secret key
- `cloudevolvers-website-pexels-api-key` - Pexels API key
- `cloudevolvers-website-pixabay-api-key` - Pixabay API key
- `cloudevolvers-website-azure-storage-connection-string` - Storage connection string (if needed)

## Environment Configuration

### Cloud Evolvers Branding
The environment variable `NEXT_PUBLIC_CLOUD_EVOLVERS=1` enables Cloud Evolvers branding:
- Changes logo and colors to emerald/green theme
- Updates contact information
- Modifies footer and navigation

### Storage Configuration
- **SAMI Authentication**: Uses web app's managed identity
- **Container**: `images` in `webxevolvestorage`
- **No Connection Strings**: Authentication handled via RBAC

## Deployment Process

### Automatic Deployment
- Triggers on push to `main`/`master` branch
- Builds and deploys to Azure Web App
- Configures RBAC permissions automatically

### Manual Deployment
```bash
# Go to GitHub Actions
# Select "Deploy Cloud Evolvers Production"
# Click "Run workflow"
# Choose deployment mode (BuildAndDeploy, UpdateEnvOnly, etc.)
```

## Verification

### Check RBAC Assignments
```bash
# Get web app principal ID
PRINCIPAL_ID=$(az webapp identity show \
  --name "cloudevolvers-web-app" \
  --resource-group "sc-northeu-sc-apim" \
  --query principalId \
  --output tsv)

# List role assignments
az role assignment list --assignee "$PRINCIPAL_ID" --output table
```

### Test Application
```bash
# Health check
curl https://cloudevolvers-web-app.azurewebsites.net/api/health

# Check if site loads with Cloud Evolvers branding
curl https://cloudevolvers.com
```

## Troubleshooting

### Common Issues

1. **Storage Access Denied**
   - Verify SAMI is enabled: Check Web App → Identity → System assigned
   - Verify RBAC: Run `az role assignment list --assignee $PRINCIPAL_ID`
   - Check storage account exists: `az storage account show --name webxevolvestorage`

2. **Key Vault Access Denied**
   - Verify Key Vault permissions
   - Check if secrets exist in Key Vault
   - Verify Key Vault name is correct

3. **Graph API Issues**
   - Verify client ID and tenant ID are correct
   - Check if client secret is stored in Key Vault
   - Verify app registration permissions

### Logs and Monitoring
```bash
# Stream web app logs
az webapp log tail --name "cloudevolvers-web-app" --resource-group "sc-northeu-sc-apim"

# Download logs
az webapp log download --name "cloudevolvers-web-app" --resource-group "sc-northeu-sc-apim"
```

## Security Benefits of SAMI

1. **No Secrets in Code**: No connection strings or API keys in environment variables
2. **Automatic Rotation**: Azure handles credential rotation
3. **Least Privilege**: Granular RBAC permissions
4. **Audit Trail**: All access is logged in Azure Activity Log
5. **No Network Exposure**: Credentials never leave Azure
