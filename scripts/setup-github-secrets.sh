#!/bin/bash
# automated-secrets-setup.sh
# Quickly set GitHub Secrets for Cloud Evolvers training platform

REPO="cloudevolvers/cloud-evolvers-train"
KV_NAME="ce-xv-p-mail-kv" # Updated keyvault name

echo "🚀 Setting up GitHub Secrets for $REPO..."
echo "🔐 Fetching secrets from Key Vault: $KV_NAME..."

# Helper function to set a secret
set_secret() {
    local name="$1"
    local value="$2"
    
    if [ -z "$value" ]; then
        echo "⚠️  Value for $name is empty, skipping..."
        return
    fi
    
    echo "  → Setting $name..."
    echo "$value" | gh secret set "$name" --repo "$REPO"
}

# 1. Fetch secrets from Key Vault (try auto-fetch)
echo "📥 Reading from Azure Key Vault..."

# Try to fetch secrets - handle errors gracefully
try_fetch() {
    az keyvault secret show --vault-name "$KV_NAME" --name "$1" --query value -o tsv 2>/dev/null
}

# Fetch known secrets
AAD_CLIENT_ID=$(try_fetch "client-id") # Example name, adjust as needed or "email-azure-client-id"
AAD_CLIENT_SECRET=$(try_fetch "email-azure-client-secret-t") 
AAD_TENANT_ID=$(try_fetch "tenant-id")

# If fetching failed, prompt user or use placeholders
if [ -z "$AAD_CLIENT_SECRET" ]; then
    echo "⚠️  Could not fetch secrets automatically. Please provide them manually."
    echo ""
    read -sp "Enter Azure AD Client Secret: " AAD_CLIENT_SECRET
    echo ""
    read -p "Enter Azure AD Client ID: " AAD_CLIENT_ID
    read -p "Enter Azure AD Tenant ID: " AAD_TENANT_ID
    read -sp "Enter API Key: " API_KEY
    echo ""
    read -sp "Enter Cloudflare API Token: " CF_API_TOKEN
    echo ""
    read -p "Enter Cloudflare Account ID: " CF_ACCOUNT_ID
fi

# 2. Set GitHub Secrets
echo ""
echo "📤 Pushing secrets to GitHub..."

set_secret "AZURE_AD_CLIENT_ID" "$AAD_CLIENT_ID"
set_secret "AZURE_AD_CLIENT_SECRET" "$AAD_CLIENT_SECRET"
set_secret "AZURE_AD_TENANT_ID" "$AAD_TENANT_ID"
set_secret "EMAIL_AZURE_CLIENT_SECRET" "$AAD_CLIENT_SECRET" # Map to email secret too
set_secret "API_KEY" "$API_KEY"
set_secret "CLOUDFLARE_API_TOKEN" "$CF_API_TOKEN"
set_secret "CLOUDFLARE_ACCOUNT_ID" "$CF_ACCOUNT_ID"

echo "✅ Done! Secrets configured for $REPO"
