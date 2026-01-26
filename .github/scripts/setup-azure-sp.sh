#!/bin/bash
# Azure Service Principal Setup for GitHub Actions
# Run this script to create a new service principal for GitHub Actions deployment

set -e

SUBSCRIPTION_ID="4a55c776-9f6b-4966-921e-c9f60e50652f"
SP_NAME="cloud-evolvers-github-actions"
RESOURCE_GROUP="xevolve-dta-rg"

echo "🔐 Setting up Azure Service Principal for GitHub Actions..."
echo "📋 Subscription: $SUBSCRIPTION_ID"
echo "🏷️  Name: $SP_NAME"
echo "📦 Resource Group: $RESOURCE_GROUP"

# Check if logged in to Azure
if ! az account show &>/dev/null; then
    echo "❌ Please login to Azure first:"
    echo "az login"
    exit 1
fi

# Set the subscription
echo "🔧 Setting subscription..."
az account set --subscription "$SUBSCRIPTION_ID"

# Create service principal with contributor role for the resource group
echo "🚀 Creating service principal..."
SP_OUTPUT=$(az ad sp create-for-rbac \
    --name "$SP_NAME" \
    --role "Contributor" \
    --scopes "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP" \
    --output json)

if [[ $? -eq 0 ]]; then
    echo "✅ Service Principal created successfully!"
    echo ""
    echo "📋 GitHub Secret Configuration:"
    echo "================================"
    echo "Secret Name: AZURE_CLIENT_SECRET"
    echo "Secret Value: $(echo "$SP_OUTPUT" | jq -r '.clientSecret')"
    echo ""
    echo "📊 Service Principal Details:"
    echo "• Client ID: $(echo "$SP_OUTPUT" | jq -r '.clientId')"
    echo "• Tenant ID: $(echo "$SP_OUTPUT" | jq -r '.tenantId')"
    echo "• Subscription ID: $(echo "$SP_OUTPUT" | jq -r '.subscriptionId')"
    echo ""
    echo "🔗 Add this secret to your GitHub repository:"
    echo "https://github.com/falkoro/cloud-evolvers-train/settings/secrets/actions"
    echo ""
    echo "🎯 After adding the secret, re-run your deployment workflow!"
else
    echo "❌ Failed to create service principal"
    exit 1
fi
