#!/bin/bash

# xEvolve Website - DTA Environment Deployment Script
# Usage: ./scripts/deploy-dta.sh [--rebuild] [--redeploy]

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="xevolve-dta-website"
RESOURCE_GROUP="xevolve-dta-rg"
SUBSCRIPTION="4a55c776-9f6b-4966-921e-c9f60e50652f"  # Replace with actual subscription ID
ZIP_DIR="zip"
LATEST_ZIP_FILE="$ZIP_DIR/xevolve-dta-latest.zip"

# Parse command line arguments
FORCE_REBUILD=false
REDEPLOY_ONLY=false

for arg in "$@"; do
    case $arg in
        --rebuild)
            FORCE_REBUILD=true
            echo -e "${YELLOW}🔄 Force rebuild requested${NC}"
            ;;
        --redeploy)
            REDEPLOY_ONLY=true
            echo -e "${YELLOW}🔄 Redeploy latest zip requested${NC}"
            ;;
        *)
            echo -e "${RED}❌ Unknown argument: $arg${NC}"
            echo "Usage: $0 [--rebuild] [--redeploy]"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}🚀 Starting DTA Deployment for xEvolve Website${NC}"
echo "=================================================="

# Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}❌ Azure CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Update Azure CLI to latest version to ensure API compatibility
echo -e "${YELLOW}🔄 Ensuring Azure CLI is up to date...${NC}"
az upgrade --yes || echo -e "${YELLOW}⚠️ Azure CLI upgrade failed or not needed${NC}"

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo -e "${YELLOW}🔐 Not logged in to Azure. Please login...${NC}"
    az login
fi

# Set subscription
echo -e "${YELLOW}🎯 Setting subscription to DTA...${NC}"
az account set --subscription "$SUBSCRIPTION"

# Configure Azure CLI to use the latest API version
echo -e "${YELLOW}🔧 Configuring Azure CLI to use latest API versions...${NC}"
export AZURE_EXTENSION_USE_DYNAMIC_INSTALL=yes_without_prompt
az config set extension.use_dynamic_install=yes_without_prompt
# Force Azure CLI to use the latest available API version for webapp operations
az config set core.output=json

# Create zip directory if it doesn't exist
mkdir -p "$ZIP_DIR"

# Handle redeploy option
if [ "$REDEPLOY_ONLY" = true ]; then
    if [ ! -f "$LATEST_ZIP_FILE" ]; then
        echo -e "${RED}❌ No latest zip file found at $LATEST_ZIP_FILE${NC}"
        echo -e "${YELLOW}💡 Run without --redeploy to build and package first${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Using existing zip file: $LATEST_ZIP_FILE${NC}"
    DEPLOY_ZIP="$LATEST_ZIP_FILE"
else
    # Check if build exists and handle rebuild
    if [ "$FORCE_REBUILD" = true ] || [ ! -d ".next" ]; then
    if [ "$FORCE_REBUILD" = true ]; then
        echo -e "${YELLOW}🧹 Force rebuilding - cleaning previous builds...${NC}"
    else
        echo -e "${YELLOW}🔍 No existing build found - building...${NC}"
    fi
    
    # Clean previous builds if rebuilding
    if [ "$FORCE_REBUILD" = true ]; then
        rm -rf .next
        rm -rf out
        rm -rf dist
    fi

    # Install dependencies
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm ci

    # Build the application
    echo -e "${YELLOW}🔨 Building application for production (standalone)...${NC}"
    npm run build:standalone

    # Check if build was successful
    if [ ! -d ".next" ] || [ ! -d ".next/standalone" ]; then
        echo -e "${RED}❌ Build failed - .next or .next/standalone directory not found${NC}"
        exit 1
    fi

    echo -e "${GREEN}✅ Build completed successfully${NC}"
else
    echo -e "${GREEN}✅ Using existing build (use --rebuild to force rebuild)${NC}"
fi

# Create deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$DEPLOY_DIR"

# Copy necessary files for standalone deployment
echo -e "${YELLOW}📋 Copying Next.js standalone build...${NC}"
cp -r .next/standalone/. "$DEPLOY_DIR/"

echo -e "${YELLOW}📋 Copying static assets to correct location...${NC}"
# The standalone build includes .next structure, now add the static files
if [ -d ".next/static" ]; then
    cp -r .next/static "$DEPLOY_DIR/.next/"
fi

echo -e "${YELLOW}📋 Copying public assets...${NC}"
# The standalone build already includes the public directory, but ensure it's up-to-date
if [ -d "public" ]; then
    cp -r public/* "$DEPLOY_DIR/public/" 2>/dev/null || true
fi

# Note: We use the standalone server.js instead of custom app.js for Azure deployment
# The standalone server.js is optimized for production deployment

# Update package.json to use server.js for Azure deployment
echo -e "${YELLOW}📋 Updating package.json for Azure deployment...${NC}"
sed -i 's/"start": "NODE_ENV=production node app.js"/"start": "NODE_ENV=production node server.js"/' "$DEPLOY_DIR/package.json"
sed -i 's/"main": "app.js"/"main": "server.js"/' "$DEPLOY_DIR/package.json"

# Create deployment zip in the zip directory
echo -e "${YELLOW}📄 Creating deployment archive...${NC}"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
DEPLOY_ZIP="$ZIP_DIR/xevolve-dta-$TIMESTAMP.zip"

cd "$DEPLOY_DIR"
zip -r "../$DEPLOY_ZIP" .
cd ..

# Create/update the latest zip symlink
ln -sf "xevolve-dta-$TIMESTAMP.zip" "$LATEST_ZIP_FILE"

echo -e "${GREEN}✅ Deployment package created: $DEPLOY_ZIP${NC}"
fi

# Deploy to Azure
echo -e "${YELLOW}🚀 Deploying to Azure App Service (DTA)...${NC}"

# Ensure WEBSITE_RUN_FROM_PACKAGE is set for optimal performance
echo -e "${YELLOW}🔧 Configuring app settings for zip deployment...${NC}"
# Configure Azure app settings to disable build processes
echo -e "${YELLOW}⚙️ Configuring Azure app settings to disable build processes...${NC}"
if ! az webapp config appsettings set \
    --resource-group "$RESOURCE_GROUP" \
    --name "$APP_NAME" \
    --settings \
        "WEBSITE_RUN_FROM_PACKAGE=1" \
        "ENABLE_ORYX_BUILD=false" \
        "SCM_DO_BUILD_DURING_DEPLOYMENT=false" \
        "DISABLE_COLLECTSTATIC=1" \
        "WEBSITE_ENABLE_SYNC_UPDATE_SITE=true" \
        "WEBSITE_NODE_DEFAULT_VERSION=22-lts" \
    --output none \
    --subscription "$SUBSCRIPTION"; then
    echo -e "${RED}❌ Failed to configure app settings. Trying without explicit subscription...${NC}"
    # Retry without explicit subscription parameter
    az webapp config appsettings set \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --settings \
            "WEBSITE_RUN_FROM_PACKAGE=1" \
            "ENABLE_ORYX_BUILD=false" \
            "SCM_DO_BUILD_DURING_DEPLOYMENT=false" \
            "DISABLE_COLLECTSTATIC=1" \
            "WEBSITE_ENABLE_SYNC_UPDATE_SITE=true" \
            "WEBSITE_NODE_DEFAULT_VERSION=22-lts" \
        --output none
fi

# Use the newer az webapp deploy command instead of config-zip
echo -e "${YELLOW}📦 Uploading deployment package...${NC}"
if ! az webapp deploy \
    --resource-group "$RESOURCE_GROUP" \
    --name "$APP_NAME" \
    --src-path "$DEPLOY_ZIP" \
    --type zip \
    --subscription "$SUBSCRIPTION"; then
    echo -e "${RED}❌ Deployment failed. Trying without explicit subscription...${NC}"
    # Retry without explicit subscription parameter
    az webapp deploy \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --src-path "$DEPLOY_ZIP" \
        --type zip
fi

# Configure startup command for standalone deployment
echo -e "${YELLOW}⚙️ Configuring startup command for standalone deployment...${NC}"
if ! az webapp config set \
    --resource-group "$RESOURCE_GROUP" \
    --name "$APP_NAME" \
    --startup-file "node server.js" \
    --linux-fx-version "NODE|22-lts" \
    --subscription "$SUBSCRIPTION"; then
    echo -e "${RED}❌ Failed to configure startup command. Trying without explicit subscription...${NC}"
    # Retry without explicit subscription parameter
    az webapp config set \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --startup-file "node server.js" \
        --linux-fx-version "NODE|22-lts"
fi

# Check deployment status
echo -e "${YELLOW}🔍 Checking deployment status...${NC}"
sleep 15

# Get the app URL
APP_URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "$APP_NAME" --query "defaultHostName" --output tsv --subscription "$SUBSCRIPTION")

# Test the deployment
echo -e "${YELLOW}🧪 Testing deployment...${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_URL" || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Application is available at: https://$APP_URL${NC}"
else
    echo -e "${RED}❌ Deployment may have issues (HTTP Status: $HTTP_STATUS)${NC}"
    echo -e "${YELLOW}🔍 Check the Azure portal for logs: https://$APP_URL${NC}"
fi

# Cleanup
echo -e "${YELLOW}🧹 Cleaning up temporary files...${NC}"
if [ "$REDEPLOY_ONLY" = false ]; then
    rm -rf "$DEPLOY_DIR"
fi

echo -e "${BLUE}🎉 DTA Deployment completed!${NC}"
echo -e "${GREEN}💡 To redeploy the same package: $0 --redeploy${NC}"
echo "=================================================="
