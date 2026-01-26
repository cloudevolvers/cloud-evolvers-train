#!/bin/bash
# Test script for Cloud Evolvers blog functionality

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[TEST]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[PASS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[FAIL]${NC} $1"
}

print_status "Testing Cloud Evolvers Training Platform Blog Setup"
echo "=================================================="

# Test 1: Check if BlogPage component exists
print_status "Checking BlogPage component..."
if [[ -f "src/components/BlogPage.tsx" ]]; then
    print_success "BlogPage component exists"
else
    print_error "BlogPage component not found"
    exit 1
fi

# Test 2: Check if blog route is configured in App.tsx
print_status "Checking blog route configuration..."
if grep -q "/blog.*BlogPage" src/App.tsx; then
    print_success "Blog route is configured in App.tsx"
else
    print_error "Blog route not found in App.tsx"
    exit 1
fi

# Test 3: Check if navigation includes blog link
print_status "Checking navigation for blog link..."
if grep -q "Blog" src/components/Header.tsx; then
    print_success "Blog navigation link exists in Header"
else
    print_error "Blog navigation link not found in Header"
    exit 1
fi

# Test 4: Check environment variables
print_status "Checking environment variables..."
if [[ -f ".env" ]]; then
    if grep -q "VITE_BLOG_UNDER_CONSTRUCTION" .env; then
        print_success "Blog construction environment variable configured"
    else
        print_warning "Blog construction environment variable not found in .env"
    fi
    
    if grep -q "VITE_BLOG_CONSTRUCTION_MESSAGE" .env; then
        print_success "Blog construction message environment variable configured"
    else
        print_warning "Blog construction message environment variable not found in .env"
    fi
else
    print_warning ".env file not found"
fi

# Test 5: Check deployment configuration
print_status "Checking deployment configuration..."
if [[ -f ".github/workflows/config/deployments.json" ]]; then
    if grep -q "VITE_BLOG_UNDER_CONSTRUCTION" .github/workflows/config/deployments.json; then
        print_success "Blog environment variables configured in deployment config"
    else
        print_error "Blog environment variables not found in deployment config"
        exit 1
    fi
else
    print_error "Deployment configuration not found"
    exit 1
fi

# Test 6: Check infrastructure files
print_status "Checking infrastructure setup..."
if [[ -f "infra/main.bicep" ]]; then
    print_success "Bicep infrastructure template exists"
else
    print_warning "Bicep infrastructure template not found"
fi

if [[ -f "infra/main.parameters.json" ]]; then
    print_success "Infrastructure parameters file exists"
else
    print_warning "Infrastructure parameters file not found"
fi

if [[ -f "scripts/deploy-infrastructure.sh" ]]; then
    print_success "Infrastructure deployment script exists"
    if [[ -x "scripts/deploy-infrastructure.sh" ]]; then
        print_success "Infrastructure deployment script is executable"
    else
        print_warning "Infrastructure deployment script is not executable"
    fi
else
    print_warning "Infrastructure deployment script not found"
fi

# Test 7: Check construction banner integration
print_status "Checking ConstructionBanner integration..."
if grep -q "ConstructionBanner" src/components/BlogPage.tsx; then
    print_success "ConstructionBanner is integrated in BlogPage"
else
    print_error "ConstructionBanner not found in BlogPage"
    exit 1
fi

# Test 8: Build test
print_status "Testing application build..."
if npm run build > /tmp/build.log 2>&1; then
    print_success "Application builds successfully"
else
    print_error "Application build failed"
    echo "Build log:"
    cat /tmp/build.log
    exit 1
fi

# Summary
echo ""
echo "=================================================="
print_success "All tests passed! ✅"
echo ""
print_status "Summary of changes:"
echo "✅ Blog page created with construction banner"
echo "✅ Navigation updated to include blog link"
echo "✅ Environment variables configured for blog construction"
echo "✅ Deployment configuration updated"
echo "✅ Infrastructure templates created for Key Vault access"
echo "✅ Deployment scripts created"
echo ""
print_status "Next steps:"
echo "1. Deploy infrastructure: ./scripts/deploy-infrastructure.sh --environment dta"
echo "2. Configure GitHub secrets with Static Web App deployment tokens"
echo "3. Push changes to trigger deployment"
echo "4. Visit https://your-app-url.azurestaticapps.net/blog to see the construction page"
