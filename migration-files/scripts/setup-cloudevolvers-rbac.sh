#!/bin/bash

# Script to configure RBAC permissions for Cloud Evolvers Web App
# This script assigns the necessary permissions for SAMI authentication to Azure Storage and Key Vault

set -e

# Configuration
SUBSCRIPTION_ID="4a55c776-9f6b-4966-921e-c9f60e50652f"
RESOURCE_GROUP="xevolve-dta-rg"
WEB_APP_NAME="cloud-evolvers"
STORAGE_ACCOUNT_NAME="webxevolvestorage"
KEY_VAULT_NAME="xevolve-shared-kv"

echo "🔐 Configuring RBAC permissions for Cloud Evolvers Web App..."
echo "Subscription: $SUBSCRIPTION_ID"
echo "Resource Group: $RESOURCE_GROUP"
echo "Web App: $WEB_APP_NAME"
echo "Storage Account: $STORAGE_ACCOUNT_NAME"
echo "Key Vault: $KEY_VAULT_NAME"
echo ""

# Set the Azure subscription
echo "📋 Setting Azure subscription..."
az account set --subscription "$SUBSCRIPTION_ID"

# Enable system-assigned managed identity for the web app
echo "🔑 Enabling system-assigned managed identity for web app..."
az webapp identity assign \
  --name "$WEB_APP_NAME" \
  --resource-group "$RESOURCE_GROUP"

# Get the managed identity principal ID
echo "🔍 Getting managed identity principal ID..."
PRINCIPAL_ID=$(az webapp identity show \
  --name "$WEB_APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --query principalId \
  --output tsv)

if [ -z "$PRINCIPAL_ID" ]; then
    echo "❌ Failed to get principal ID for managed identity"
    exit 1
fi

echo "✅ Managed Identity Principal ID: $PRINCIPAL_ID"

# Assign Storage Blob Data Contributor role to the managed identity
echo "📦 Assigning Storage Blob Data Contributor role..."
az role assignment create \
  --assignee "$PRINCIPAL_ID" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/sc-northeu-sc-apim/providers/Microsoft.Storage/storageAccounts/$STORAGE_ACCOUNT_NAME"

# Assign Key Vault Secrets User role to the managed identity
echo "🔐 Assigning Key Vault Secrets User role..."
az role assignment create \
  --assignee "$PRINCIPAL_ID" \
  --role "Key Vault Secrets User" \
  --scope "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/xevolve-dta-rg/providers/Microsoft.KeyVault/vaults/$KEY_VAULT_NAME"

echo ""
echo "✅ RBAC configuration completed successfully!"
echo ""
echo "📋 Summary of permissions assigned:"
echo "   • $WEB_APP_NAME managed identity can access storage account $STORAGE_ACCOUNT_NAME"
echo "   • $WEB_APP_NAME managed identity can read secrets from Key Vault $KEY_VAULT_NAME"
echo ""
echo "🔄 Next steps:"
echo "   1. Ensure all required secrets are stored in Key Vault $KEY_VAULT_NAME:"
echo "      - xevolve-website-graph-api-client-secret (shared with xEvolve)"
echo "      - cloudevolvers-website-admin-password"
echo "      - cloudevolvers-website-jwt-secret"
echo "   2. Deploy the application using GitHub Actions"
echo "   3. Test the application functionality"
echo ""
echo "🔗 You can now deploy using: Push to main branch or manually trigger 'Deploy Cloud Evolvers Production' workflow"
