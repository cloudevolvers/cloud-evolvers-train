#!/bin/bash
# Quick status check for Cloud Evolvers Static Web Apps

echo "🌟 Cloud Evolvers - Static Web Apps Status Check"
echo "==============================================="

# Environment URLs
DTA_URL="https://yellow-sand-086679203.2.azurestaticapps.net"
PROD_URL="https://yellow-plant-021712d03.2.azurestaticapps.net"

echo ""
echo "🔍 Checking DTA Environment..."
echo "URL: $DTA_URL"
if curl -sL --max-time 10 "$DTA_URL" | grep -q "Cloud Evolvers" > /dev/null 2>&1; then
    echo "✅ DTA is LIVE and responding!"
else
    echo "⏳ DTA is still deploying or not responding..."
fi

echo ""
echo "🔍 Checking Production Environment..."  
echo "URL: $PROD_URL"
if curl -sL --max-time 10 "$PROD_URL" | grep -q "Cloud Evolvers" > /dev/null 2>&1; then
    echo "✅ Production is LIVE and responding!"
else
    echo "⏳ Production is still deploying or not responding..."
fi

echo ""
echo "📋 Azure Resource Status:"
az staticwebapp list \
  --query "[?contains(name, 'cloudevolvers')].{Environment:name, ResourceGroup:resourceGroup, Status:sku.name, URL:defaultHostname}" \
  --output table 2>/dev/null || echo "⚠️ Azure CLI not available or not logged in"

echo ""
echo "🚀 GitHub Actions Status:"
if command -v gh >/dev/null 2>&1; then
    echo "Recent workflow runs:"
    gh run list --workflow="deploy-swa.yml" --limit 5 2>/dev/null || echo "⚠️ GitHub CLI not available or not logged in"
else
    echo "⚠️ GitHub CLI not available"
fi

echo ""
echo "🎯 Quick Links:"
echo "• DTA Environment: $DTA_URL"
echo "• Production Environment: $PROD_URL" 
echo "• GitHub Actions: https://github.com/falkoro/cloud-evolvers-train/actions"
echo "• Azure Portal: https://portal.azure.com"

echo ""
echo "✨ Environment Summary:"
echo "• DTA: Auto-deploys from main/develop branches"
echo "• PROD: Manual deployment only for safety"
echo "• Both use Azure Static Web Apps with global CDN"
echo "• Both have HTTPS enabled by default"
