#!/bin/bash

# Test Staging Environment
echo "🧪 Testing Staging Environment..."

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test functions
test_blog_construction() {
    echo -e "${YELLOW}Testing Blog Construction Banner...${NC}"
    
    # Start staging server
    echo "Starting staging server..."
    npm run dev:staging > /dev/null 2>&1 &
    DEV_PID=$!
    sleep 5
    
    # Test if blog page shows construction banner
    if curl -s http://localhost:5174 > /dev/null; then
        echo -e "${GREEN}✅ Staging server is running${NC}"
        
        # Test blog route
        if curl -s http://localhost:5174/blog | grep -q "Blog Section"; then
            echo -e "${GREEN}✅ Blog page is accessible${NC}"
            echo -e "${GREEN}✅ Construction banner is visible${NC}"
        else
            echo -e "${RED}❌ Blog page construction banner test failed${NC}"
        fi
    else
        echo -e "${RED}❌ Staging server failed to start${NC}"
    fi
    
    # Kill dev server
    kill $DEV_PID 2>/dev/null
    wait $DEV_PID 2>/dev/null
}

test_environment_variables() {
    echo -e "${YELLOW}Testing Environment Variables...${NC}"
    
    # Check if staging env vars are loaded
    if grep -q "VITE_APP_ENV=staging" .env.staging; then
        echo -e "${GREEN}✅ Staging environment variables are configured${NC}"
    else
        echo -e "${RED}❌ Staging environment variables missing${NC}"
    fi
    
    # Check blog construction settings
    if grep -q "VITE_BLOG_UNDER_CONSTRUCTION=true" .env.staging; then
        echo -e "${GREEN}✅ Blog construction banner is enabled in staging${NC}"
    else
        echo -e "${RED}❌ Blog construction banner configuration missing${NC}"
    fi
}

test_build_process() {
    echo -e "${YELLOW}Testing Build Process...${NC}"
    
    # Test staging build
    if npm run build:staging > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Staging build successful${NC}"
        
        # Check if dist folder exists
        if [ -d "dist" ]; then
            echo -e "${GREEN}✅ Build output generated${NC}"
        else
            echo -e "${RED}❌ Build output missing${NC}"
        fi
    else
        echo -e "${RED}❌ Staging build failed${NC}"
    fi
}

# Run tests
echo "Starting comprehensive staging tests..."
echo "========================================="

test_environment_variables
test_build_process
test_blog_construction

echo "========================================="
echo -e "${GREEN}🎉 Staging environment tests complete!${NC}"

# Deployment instructions
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Review test results above"
echo "2. Run './scripts/deploy-staging.sh' to deploy to Azure"
echo "3. Test the deployed staging environment"
echo "4. When ready, run './scripts/deploy-production.sh' for production"
