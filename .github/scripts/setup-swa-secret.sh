#!/bin/bash
# Script to set up Azure Static Web App deployment token in GitHub Secrets

set -e

echo "🔐 Setting up Azure Static Web App GitHub Secret"
echo "=================================================="

# Static Web App details
SWA_NAME="cloudevolvers-dta-website-swa"
RESOURCE_GROUP="xevolve-dta-rg"
REPO_OWNER="falkoro"
REPO_NAME="cloud-evolvers-train"

# Get the API token
echo "📋 Getting Static Web App deployment token..."
API_TOKEN=$(az staticwebapp secrets list \
  --name "$SWA_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --query "properties.apiKey" \
  --output tsv)

if [[ -z "$API_TOKEN" ]]; then
  echo "❌ Failed to get API token"
  exit 1
fi

echo "✅ API token retrieved successfully"

# Check if GitHub CLI is available
if command -v gh >/dev/null 2>&1; then
  echo "📝 Setting GitHub secret using GitHub CLI..."
  
  # Set the secret
  echo "$API_TOKEN" | gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_DTA \
    --repo "$REPO_OWNER/$REPO_NAME" \
    --body-file -
  
  echo "✅ GitHub secret 'AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_DTA' set successfully!"
  
else
  echo "⚠️ GitHub CLI not found. Please set the secret manually:"
  echo ""
  echo "1. Go to: https://github.com/$REPO_OWNER/$REPO_NAME/settings/secrets/actions"
  echo "2. Click 'New repository secret'"
  echo "3. Name: AZURE_STATIC_WEB_APPS_API_TOKEN_CLOUDEVOLVERS_DTA"
  echo "4. Value: [Copy the token below]"
  echo ""
  echo "🔑 API Token:"
  echo "$API_TOKEN"
  echo ""
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Commit and push your workflow changes"
echo "2. The Static Web App will be available at: https://yellow-sand-086679203.2.azurestaticapps.net"
echo "3. Future deployments will be automatic on push to main/develop"
echo ""
echo "✨ Your Cloud Evolvers app will have:"
echo "   • Global CDN distribution"
echo "   • Automatic HTTPS"
echo "   • SPA routing support"
echo "   • Pull request previews"
echo "   • Free tier hosting!"
