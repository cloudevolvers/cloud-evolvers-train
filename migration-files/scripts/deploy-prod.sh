#!/bin/bash

# 🚀 xEvolve Production Deployment Script
# Simple, clean deployment to Azure Web App

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="xevolve-website"
RESOURCE_GROUP="xevolve-dta-rg"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
DEPLOY_DIR="deploy-prod-${TIMESTAMP}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo -e "${BLUE}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║               🚀 xEvolve Production Deployment               ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Warning for production
echo -e "${RED}⚠️  PRODUCTION DEPLOYMENT WARNING ⚠️${NC}"
echo -e "${YELLOW}This will deploy to the LIVE production environment!${NC}"
echo -e "${YELLOW}App: ${APP_NAME}${NC}"
echo -e "${YELLOW}Resource Group: ${RESOURCE_GROUP}${NC}"
echo ""
read -p "Are you sure you want to deploy to PRODUCTION? (yes/no): " -r
if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Starting production deployment...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run from project root.${NC}"
    exit 1
fi

# Check Azure CLI
if ! command -v az &> /dev/null; then
    echo -e "${RED}❌ Error: Azure CLI not found. Please install Azure CLI.${NC}"
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo -e "${RED}❌ Error: Not logged in to Azure. Please run 'az login'.${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Creating deployment package...${NC}"

# Create temporary deployment directory
mkdir -p "${DEPLOY_DIR}"

# Copy all necessary files and directories
echo -e "${YELLOW}📁 Copying project files...${NC}"

# Copy main files
cp package.json "${DEPLOY_DIR}/"
cp package-lock.json "${DEPLOY_DIR}/" 2>/dev/null || echo "package-lock.json not found, skipping..."
cp next.config.js "${DEPLOY_DIR}/"
cp tailwind.config.js "${DEPLOY_DIR}/"
cp postcss.config.cjs "${DEPLOY_DIR}/"
cp tsconfig.json "${DEPLOY_DIR}/"
cp tsconfig.app.json "${DEPLOY_DIR}/" 2>/dev/null || echo "tsconfig.app.json not found, skipping..."
cp tsconfig.node.json "${DEPLOY_DIR}/" 2>/dev/null || echo "tsconfig.node.json not found, skipping..."
cp next-env.d.ts "${DEPLOY_DIR}/" 2>/dev/null || echo "next-env.d.ts not found, skipping..."
cp components.json "${DEPLOY_DIR}/" 2>/dev/null || echo "components.json not found, skipping..."
cp eslint.config.cjs "${DEPLOY_DIR}/" 2>/dev/null || echo "eslint.config.cjs not found, skipping..."

# Copy directories
echo -e "${YELLOW}� Copying directories...${NC}"
cp -r src/ "${DEPLOY_DIR}/" 2>/dev/null || echo "src/ not found, skipping..."
cp -r public/ "${DEPLOY_DIR}/" 2>/dev/null || echo "public/ not found, skipping..."
cp -r backend/ "${DEPLOY_DIR}/" 2>/dev/null || echo "backend/ not found, skipping..."
cp -r docs/ "${DEPLOY_DIR}/" 2>/dev/null || echo "docs/ not found, skipping..."
cp -r utils/ "${DEPLOY_DIR}/" 2>/dev/null || echo "utils/ not found, skipping..."

# Copy scripts but exclude deployment scripts to avoid recursion
if [ -d "scripts" ]; then
    mkdir -p "${DEPLOY_DIR}/scripts"
    find scripts/ -type f -name "*.sh" ! -name "deploy*.sh" -exec cp {} "${DEPLOY_DIR}/scripts/" \; 2>/dev/null || true
    find scripts/ -type d ! -name "scripts" -exec cp -r {} "${DEPLOY_DIR}/scripts/" \; 2>/dev/null || true
fi

echo -e "${BLUE}🔨 Building the application...${NC}"
cd "${DEPLOY_DIR}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install --production=false

# Build the application
echo -e "${YELLOW}🏗️  Building Next.js application...${NC}"
npm run build

# Remove dev dependencies and install only production dependencies
echo -e "${YELLOW}🧹 Cleaning up dev dependencies...${NC}"
rm -rf node_modules
npm install --production=true

cd "${REPO_ROOT}"

# Create deployment zip
ZIP_FILE="xevolve-prod-${TIMESTAMP}.zip"
echo -e "${BLUE}📦 Creating deployment package: ${ZIP_FILE}${NC}"

cd "${DEPLOY_DIR}"
zip -r "../${ZIP_FILE}" . -x "*.git*" "*.DS_Store*" "*node_modules/.cache*"
cd "${REPO_ROOT}"

# Deploy to Azure
echo -e "${BLUE}🚀 Deploying to Azure Web App...${NC}"
echo -e "${YELLOW}App: ${APP_NAME}${NC}"
echo -e "${YELLOW}Resource Group: ${RESOURCE_GROUP}${NC}"

az webapp deploy \
    --resource-group "${RESOURCE_GROUP}" \
    --name "${APP_NAME}" \
    --src-path "${ZIP_FILE}" \
    --type zip

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your application should be available at: https://${APP_NAME}.azurewebsites.net${NC}"
    echo ""
    echo -e "${BLUE}📊 Deployment Summary:${NC}"
    echo -e "${YELLOW}  • Timestamp: ${TIMESTAMP}${NC}"
    echo -e "${YELLOW}  • Package: ${ZIP_FILE}${NC}"
    echo -e "${YELLOW}  • App Name: ${APP_NAME}${NC}"
    echo -e "${YELLOW}  • Resource Group: ${RESOURCE_GROUP}${NC}"
else
    echo -e "${RED}❌ Deployment failed!${NC}"
    exit 1
fi

# Cleanup
echo -e "${BLUE}🧹 Cleaning up temporary files...${NC}"
rm -rf "${DEPLOY_DIR}"

echo ""
echo -e "${GREEN}🎉 Production deployment completed successfully!${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
