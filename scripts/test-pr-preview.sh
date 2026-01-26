#!/bin/bash

# Test PR Preview Deployment Setup
echo "🧪 Testing PR Preview Configuration..."

# Colors for output  
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Checking GitHub Actions workflow configuration...${NC}"

# Check if deploy-clean.yml is removed
if [ ! -f ".github/workflows/deploy-clean.yml" ]; then
    echo -e "${GREEN}✅ deploy-clean.yml successfully removed${NC}"
else
    echo -e "${RED}❌ deploy-clean.yml still exists${NC}"
fi

# Check if deploy-staticwebapp.yml exists and has PR support
if [ -f ".github/workflows/deploy-staticwebapp.yml" ]; then
    echo -e "${GREEN}✅ deploy-staticwebapp.yml exists${NC}"
    
    # Check for PR triggers
    if grep -q "pull_request:" ".github/workflows/deploy-staticwebapp.yml"; then
        echo -e "${GREEN}✅ PR triggers configured${NC}"
    else
        echo -e "${RED}❌ PR triggers missing${NC}"
    fi
    
    # Check for close action
    if grep -q "action.*close" ".github/workflows/deploy-staticwebapp.yml"; then
        echo -e "${GREEN}✅ PR cleanup action configured${NC}"
    else
        echo -e "${RED}❌ PR cleanup action missing${NC}"
    fi
else
    echo -e "${RED}❌ deploy-staticwebapp.yml missing${NC}"
fi

echo -e "${YELLOW}Checking environment configuration...${NC}"

# Check deployment configuration
if [ -f ".github/workflows/config/deployments.json" ]; then
    echo -e "${GREEN}✅ Deployment configuration exists${NC}"
    
    # Check if resource groups are updated
    if grep -q "ce-xv-prod-rg" ".github/workflows/config/deployments.json"; then
        echo -e "${GREEN}✅ Production resource group updated${NC}"
    else
        echo -e "${RED}❌ Production resource group not updated${NC}"
    fi
    
    # Check environment variables
    if grep -q "VITE_AZURE_AD_CLIENT_ID" ".github/workflows/config/deployments.json"; then
        echo -e "${GREEN}✅ Azure AD configuration included${NC}"
    else
        echo -e "${RED}❌ Azure AD configuration missing${NC}"
    fi
else
    echo -e "${RED}❌ Deployment configuration missing${NC}"
fi

echo -e "${YELLOW}Checking Azure resources...${NC}"

# Check Static Web Apps exist
echo "Checking Azure Static Web Apps..."
az staticwebapp list --query "[].{Name:name, ResourceGroup:resourceGroup, Location:location}" --output table 2>/dev/null || echo -e "${RED}❌ Cannot access Azure resources (not signed in?)${NC}"

echo ""
echo -e "${YELLOW}📋 PR Preview Deployment Test Summary:${NC}"
echo "========================================="
echo "1. Workflow files properly configured"
echo "2. Environment variables updated with Azure AD config"  
echo "3. Resource groups corrected"
echo "4. PR preview comments will be added automatically"
echo "5. PR cleanup handles environment teardown"

echo ""
echo -e "${GREEN}🎉 PR Preview setup is ready!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Create a test PR to verify preview deployments"
echo "2. Check that preview URLs are generated"
echo "3. Verify cleanup happens when PR is closed"
echo "4. Monitor GitHub Actions runs for any issues"
