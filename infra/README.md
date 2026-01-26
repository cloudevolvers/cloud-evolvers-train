# Cloud Evolvers Training Platform - Infrastructure Setup

This document explains how to set up the Azure infrastructure for the Cloud Evolvers Training Platform with Key Vault access.

## Overview

The infrastructure includes:
- **Azure Static Web App (Standard tier)** - Hosts the Vite.js application with managed identity
- **Azure Key Vault access** - Secure storage for secrets and configuration
- **RBAC permissions** - Proper role assignments for Key Vault access

## Prerequisites

1. **Azure CLI** installed and logged in
2. **Bicep CLI** (comes with Azure CLI)
3. **Appropriate Azure permissions** to create resources and assign roles
4. **GitHub repository** set up for deployments

## Quick Start

### 1. Deploy Infrastructure

For DTA (Development/Testing) environment:
```bash
./scripts/deploy-infrastructure.sh --environment dta
```

For Production environment:
```bash
./scripts/deploy-infrastructure.sh --environment prod
```

### 2. Configure GitHub Secrets

After deployment, configure the following GitHub secrets:

For DTA environment:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_DTA` - Static Web App deployment token

For Production environment:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_PROD` - Static Web App deployment token

To get the deployment token:
```bash
# Replace with your actual Static Web App name from deployment output
az staticwebapp secrets list --name "YOUR_SWA_NAME" --query "properties.apiKey" -o tsv
```

### 3. Update Deployment Configuration

Update the hostnames in `.github/workflows/config/deployments.json` with the new Static Web App URLs from the deployment output.

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  GitHub Repo    │    │ Static Web App   │    │   Key Vault     │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │   Source    │─┼────┤ │   Website    │ │    │ │   Secrets   │ │
│ │   Code      │ │    │ │   (Vite.js)  │ │    │ │    &       │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ │    Keys     │ │
│                 │    │        │         │    │ └─────────────┘ │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │        ▲        │
│ │GitHub Actions│ │    │ │   Managed   │ │    │        │        │
│ │  Workflow    │ │    │ │  Identity   │─┼────┼────────┘        │
│ └─────────────┘ │    │ └──────────────┘ │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Key Vault Access Configuration

The infrastructure template automatically configures:

1. **System-assigned managed identity** for the Static Web App
2. **Key Vault Secrets User role** - Allows reading secrets
3. **Reader role** - Allows listing secrets and vault metadata

### Accessing Secrets in Your Application

With the infrastructure deployed, you can access Key Vault secrets in your Static Web App using:

```javascript
// Example: Access a secret from Key Vault
// Note: This would typically be done server-side in Azure Functions
// For Static Web Apps, secrets should be configured as App Settings
```

For Static Web Apps, it's recommended to:
1. Store secrets in Key Vault
2. Reference them in App Settings using Key Vault references
3. Access them as environment variables in your application

### App Settings with Key Vault References

```json
{
  "VITE_API_KEY": "@Microsoft.KeyVault(VaultName=xevolve-shared-kv;SecretName=api-key)",
  "VITE_DATABASE_URL": "@Microsoft.KeyVault(VaultName=xevolve-shared-kv;SecretName=database-url)"
}
```

## Environment Variables

### Development (.env)
```bash
VITE_SHOW_CONSTRUCTION_BANNER=true
VITE_CONSTRUCTION_MESSAGE="🚧 We're building something amazing! Our platform is being enhanced for an even better training experience"
VITE_BLOG_UNDER_CONSTRUCTION=true
VITE_BLOG_CONSTRUCTION_MESSAGE="📝 Blog Section Coming Soon - We're preparing amazing content about Azure training and cloud technologies"
```

### Production
Construction banners are disabled in production, but blog construction remains active until the blog is ready.

## Troubleshooting

### Common Issues

1. **Deployment fails with permissions error**
   - Ensure you have Contributor role on the resource group
   - Ensure you have User Access Administrator role to assign RBAC roles

2. **Key Vault access denied**
   - Check that the managed identity has the correct role assignments
   - Verify the Key Vault has RBAC authorization enabled

3. **Static Web App deployment token not found**
   - Ensure the Static Web App was created successfully
   - Try regenerating the deployment token

### Validation Commands

Check Static Web App status:
```bash
az staticwebapp show --name "YOUR_SWA_NAME" --resource-group "YOUR_RG"
```

Verify Key Vault access:
```bash
az role assignment list --scope "/subscriptions/SUB_ID/resourceGroups/RG/providers/Microsoft.KeyVault/vaults/VAULT_NAME" --assignee "PRINCIPAL_ID"
```

## Cleanup

To remove all resources:
```bash
# Delete the resource group (WARNING: This removes ALL resources in the group)
az group delete --name xevolve-dta-rg --yes --no-wait
```

## Support

For issues or questions:
1. Check the [Azure Static Web Apps documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
2. Review [Azure Key Vault RBAC documentation](https://docs.microsoft.com/en-us/azure/key-vault/general/rbac-guide)
3. Open an issue in this repository
