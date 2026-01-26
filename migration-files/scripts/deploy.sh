#!/bin/bash

# xEvolve Website - Unified Deployment Script
# Usage: ./scripts/deploy.sh [dta|prod] [--rebuild] [--redeploy]

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration - Both environments use the same subscription and resource group
SUBSCRIPTION="4a55c776-9f6b-4966-921e-c9f60e50652f"
RESOURCE_GROUP="xevolve-dta-rg"
ZIP_DIR="scripts/zip"

# Environment-specific configurations
declare -A APP_NAMES=(
    ["dta"]="xevolve-dta-website"
    ["prod"]="xevolve-website"
)

declare -A ENV_COLORS=(
    ["dta"]="${CYAN}"
    ["prod"]="${RED}"
)

declare -A ENV_WARNINGS=(
    ["dta"]="Development/Test deployment"
    ["prod"]="⚠️  PRODUCTION DEPLOYMENT - LIVE ENVIRONMENT ⚠️"
)

# Parse command line arguments (for backwards compatibility)
ENVIRONMENT=""
FORCE_REBUILD=false
REDEPLOY_ONLY=false
INTERACTIVE_MODE=true

# Function to show usage
show_usage() {
    echo -e "${BLUE}Usage: $0 [dta|prod|both] [--rebuild] [--redeploy]${NC}"
    echo -e "${YELLOW}Environment options:${NC}"
    echo -e "  ${CYAN}dta${NC}   - Deploy to Development/Test environment"
    echo -e "  ${RED}prod${NC}  - Deploy to Production environment"
    echo -e "  ${PURPLE}both${NC} - Deploy to both environments"
    echo -e "${YELLOW}Options:${NC}"
    echo -e "  --rebuild  - Force rebuild even if build exists"
    echo -e "  --redeploy - Redeploy latest zip without rebuilding"
    echo -e "${YELLOW}Note: ${NC}Without arguments, interactive menu will be shown"
}

# Parse arguments for backwards compatibility
for arg in "$@"; do
    case $arg in
        dta|prod|both)
            ENVIRONMENT="$arg"
            INTERACTIVE_MODE=false
            ;;
        --rebuild)
            FORCE_REBUILD=true
            INTERACTIVE_MODE=false
            ;;
        --redeploy)
            REDEPLOY_ONLY=true
            INTERACTIVE_MODE=false
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Unknown argument: $arg${NC}"
            show_usage
            exit 1
            ;;
    esac
done

# Interactive menu system
if [ "$INTERACTIVE_MODE" = true ]; then
    # Build options menu
    echo -e "${BLUE}╔══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║               🚀 xEvolve Deployment Menu                    ║${NC}"
    echo -e "${BLUE}╚══════════════════════════════════════════════════════════════╝${NC}"
    echo
    echo -e "${YELLOW}📦 Choose build option:${NC}"
    echo -e "  ${GREEN}1)${NC} 🔨 New build (clean + rebuild)"
    echo -e "  ${GREEN}2)${NC} ♻️  Use existing build"
    echo -e "  ${GREEN}3)${NC} 📤 Redeploy latest package (no build)"
    echo -e "  ${GREEN}4)${NC} ❌ Exit"
    echo
    while true; do
        read -p "Select build option (1-4): " build_choice
        case $build_choice in
            1)
                FORCE_REBUILD=true
                REDEPLOY_ONLY=false
                echo -e "${GREEN}✅ Selected: New build${NC}"
                break
                ;;
            2)
                FORCE_REBUILD=false
                REDEPLOY_ONLY=false
                echo -e "${GREEN}✅ Selected: Use existing build${NC}"
                break
                ;;
            3)
                FORCE_REBUILD=false
                REDEPLOY_ONLY=true
                echo -e "${GREEN}✅ Selected: Redeploy latest package${NC}"
                break
                ;;
            4)
                echo -e "${YELLOW}Deployment cancelled.${NC}"
                exit 0
                ;;
            *)
                echo -e "${RED}❌ Invalid choice. Please select 1-4.${NC}"
                ;;
        esac
    done
    
    echo
    echo -e "${YELLOW}🎯 Choose deployment target:${NC}"
    echo -e "  ${CYAN}1)${NC} 🧪 DTA (Development/Test)"
    echo -e "  ${RED}2)${NC} 🔥 PROD (Production)"
    echo -e "  ${PURPLE}3)${NC} 🌍 BOTH (DTA first, then PROD)"
    echo
    while true; do
        read -p "Select environment (1-3): " env_choice
        case $env_choice in
            1)
                ENVIRONMENT="dta"
                echo -e "${CYAN}✅ Selected: DTA Environment${NC}"
                break
                ;;
            2)
                ENVIRONMENT="prod"
                echo -e "${RED}✅ Selected: PROD Environment${NC}"
                break
                ;;
            3)
                ENVIRONMENT="both"
                echo -e "${PURPLE}✅ Selected: BOTH Environments${NC}"
                break
                ;;
            *)
                echo -e "${RED}❌ Invalid choice. Please select 1-3.${NC}"
                ;;
        esac
    done
    echo
fi

# Validate environment parameter
if [ -z "$ENVIRONMENT" ]; then
    echo -e "${RED}❌ Environment parameter is required!${NC}"
    show_usage
    exit 1
fi

# Function to deploy to a single environment
deploy_single_environment() {
    local env="$1"
    local ENV_APP_NAME="${APP_NAMES[$env]}"
    local ENV_COLOR="${ENV_COLORS[$env]}"
    local ENV_WARNING="${ENV_WARNINGS[$env]}"
    local ENV_LATEST_ZIP_FILE="$ZIP_DIR/xevolve-${env}-latest.zip"
    
    echo -e "${ENV_COLOR}=================================================="
    echo -e "🚀 Deploying to ${env^^} Environment"
    echo -e "=================================================="
    echo -e "App Name: $ENV_APP_NAME"
    echo -e "Resource Group: $RESOURCE_GROUP"
    echo -e "$ENV_WARNING"
    echo -e "==================================================${NC}"

    # Confirmation for production
    if [ "$env" = "prod" ] && [ "$REDEPLOY_ONLY" = false ]; then
        echo -e "${RED}⚠️  PRODUCTION DEPLOYMENT WARNING ⚠️${NC}"
        echo -e "${RED}This will deploy to the LIVE production environment!${NC}"
        read -p "Are you sure you want to deploy to PRODUCTION? (yes/no): " -r
        if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
            echo -e "${YELLOW}Production deployment cancelled.${NC}"
            return 1
        fi
    fi

    # Branch check for production
    if [ "$env" = "prod" ]; then
        CURRENT_BRANCH=$(git branch --show-current)
        if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
            echo -e "${RED}❌ Not on main/master branch. Current branch: $CURRENT_BRANCH${NC}"
            echo -e "${YELLOW}Please switch to main/master branch for production deployment.${NC}"
            return 1
        fi

        # Check for uncommitted changes
        if ! git diff-index --quiet HEAD --; then
            echo -e "${RED}❌ You have uncommitted changes. Please commit or stash them first.${NC}"
            return 1
        fi
    fi

    # Handle redeploy option
    local DEPLOY_ZIP
    if [ "$REDEPLOY_ONLY" = true ]; then
        if [ ! -f "$ENV_LATEST_ZIP_FILE" ]; then
            echo -e "${RED}❌ No latest zip file found at $ENV_LATEST_ZIP_FILE${NC}"
            echo -e "${YELLOW}💡 Run with build option to create package first${NC}"
            return 1
        fi
        echo -e "${GREEN}✅ Using existing zip file: $ENV_LATEST_ZIP_FILE${NC}"
        DEPLOY_ZIP="$ENV_LATEST_ZIP_FILE"
    else
        # Use the global package created earlier
        DEPLOY_ZIP="$GLOBAL_DEPLOY_ZIP"
        
        # Update this environment's latest zip symlink
        rm -f "$ENV_LATEST_ZIP_FILE"
        ln -s "$(basename "$DEPLOY_ZIP")" "$ENV_LATEST_ZIP_FILE"
        
        echo -e "${GREEN}✅ Using package: $DEPLOY_ZIP${NC}"
        echo -e "${GREEN}   Size: $(du -h "$DEPLOY_ZIP" | cut -f1)${NC}"
    fi

    # Final confirmation for production
    if [ "$env" = "prod" ] && [ "$REDEPLOY_ONLY" = false ]; then
        echo -e "${RED}⚠️  FINAL CONFIRMATION FOR PRODUCTION DEPLOYMENT ⚠️${NC}"
        read -p "Deploy to PRODUCTION environment now? (yes/no): " -r
        if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
            echo -e "${YELLOW}Production deployment cancelled.${NC}"
            return 1
        fi
    fi

    # Deploy to Azure using REST API
    echo -e "${YELLOW}🚀 Deploying to Azure App Service ($env)...${NC}"

    # Configure app settings using newer API version
    echo -e "${YELLOW}⚙️ Configuring app settings...${NC}"
    az rest --method PUT \
        --url "https://management.azure.com/subscriptions/$SUBSCRIPTION/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/sites/$ENV_APP_NAME/config/appsettings?api-version=2023-07-01" \
        --body '{
            "properties": {
                "WEBSITE_RUN_FROM_PACKAGE": "1",
                "ENABLE_ORYX_BUILD": "false",
                "SCM_DO_BUILD_DURING_DEPLOYMENT": "false",
                "DISABLE_COLLECTSTATIC": "1",
                "WEBSITE_ENABLE_SYNC_UPDATE_SITE": "true",
                "WEBSITE_NODE_DEFAULT_VERSION": "22-lts"
            }
        }' --output none

    # Deploy using REST API
    echo -e "${YELLOW}📤 Uploading deployment package using REST API...${NC}"

    # Get publishing credentials
    PUBLISH_CREDS=$(az webapp deployment list-publishing-profiles \
        --resource-group "$RESOURCE_GROUP" \
        --name "$ENV_APP_NAME" \
        --query "[?contains(publishMethod, 'MSDeploy')].{username:userName,password:userPWD}[0]" \
        --output json)

    USERNAME=$(echo "$PUBLISH_CREDS" | jq -r '.username')
    PASSWORD=$(echo "$PUBLISH_CREDS" | jq -r '.password')

    # Upload via REST API
    echo -e "${YELLOW}🔄 Uploading via Kudu REST API...${NC}"
    curl -X POST \
        -u "$USERNAME:$PASSWORD" \
        --data-binary @"$DEPLOY_ZIP" \
        "https://$ENV_APP_NAME.scm.azurewebsites.net/api/zipdeploy" \
        -H "Content-Type: application/octet-stream" \
        --silent --show-error

    # Configure startup command using REST API
    echo -e "${YELLOW}⚙️ Configuring startup command...${NC}"
    az rest --method PUT \
        --url "https://management.azure.com/subscriptions/$SUBSCRIPTION/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/sites/$ENV_APP_NAME/config/web?api-version=2023-07-01" \
        --body '{
            "properties": {
                "appCommandLine": "node server.js",
                "linuxFxVersion": "NODE|22-lts"
            }
        }' --output none

    # Wait for deployment
    echo -e "${YELLOW}⏳ Waiting for deployment to complete...${NC}"
    sleep 20

    # Get app URL and test
    local APP_URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "$ENV_APP_NAME" --query "defaultHostName" --output tsv)

    echo -e "${YELLOW}🧪 Testing deployment...${NC}"
    local HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_URL" --max-time 30 || echo "000")

    if [ "$HTTP_STATUS" = "200" ]; then
        echo -e "${GREEN}✅ $env deployment successful!${NC}"
        echo -e "${GREEN}🌐 Application is live at: https://$APP_URL${NC}"
        
        # Tag release for production
        if [ "$env" = "prod" ]; then
            local RELEASE_TAG="prod-$(date +%Y%m%d-%H%M%S)"
            git tag "$RELEASE_TAG"
            echo -e "${GREEN}🏷️  Tagged release as: $RELEASE_TAG${NC}"
        fi
        
        return 0
    else
        echo -e "${RED}❌ $env deployment may have issues (HTTP Status: $HTTP_STATUS)${NC}"
        echo -e "${YELLOW}🔍 Check Azure portal for logs: https://$APP_URL${NC}"
        echo -e "${YELLOW}📊 Kudu console: https://$ENV_APP_NAME.scm.azurewebsites.net${NC}"
        return 1
    fi
}

# Main deployment logic
case "$ENVIRONMENT" in
    "both")
        echo -e "${PURPLE}🌍 Deploying to BOTH environments${NC}"
        echo -e "${YELLOW}Strategy: DTA first, then PROD${NC}"
        
        deploy_single_environment "dta"
        dta_result=$?
        
        if [ $dta_result -eq 0 ]; then
            echo -e "${GREEN}✅ DTA deployment completed successfully${NC}"
            echo -e "${YELLOW}⏳ Proceeding to PROD deployment...${NC}"
            sleep 3
            
            deploy_single_environment "prod"
            prod_result=$?
            
            if [ $prod_result -eq 0 ]; then
                echo -e "${GREEN}🎉 BOTH deployments completed successfully!${NC}"
            else
                echo -e "${RED}❌ PROD deployment failed, but DTA is deployed${NC}"
                exit 1
            fi
        else
            echo -e "${RED}❌ DTA deployment failed, skipping PROD${NC}"
            exit 1
        fi
        ;;
    *)
        deploy_single_environment "$ENVIRONMENT"
        ;;
esac

# Check prerequisites
echo -e "${YELLOW}� Checking prerequisites...${NC}"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}❌ Azure CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo -e "${YELLOW}🔐 Not logged in to Azure. Please login...${NC}"
    az login
fi

# Set subscription
echo -e "${YELLOW}🎯 Setting subscription...${NC}"
az account set --subscription "$SUBSCRIPTION"

# Verify subscription
CURRENT_SUB=$(az account show --query "id" --output tsv)
if [ "$CURRENT_SUB" != "$SUBSCRIPTION" ]; then
    echo -e "${RED}❌ Failed to set subscription. Current: $CURRENT_SUB, Expected: $SUBSCRIPTION${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Using subscription: $SUBSCRIPTION${NC}"

# Create zip directory if it doesn't exist
mkdir -p "$ZIP_DIR"

# Branch check for production
if [ "$ENVIRONMENT" = "prod" ]; then
    CURRENT_BRANCH=$(git branch --show-current)
    if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
        echo -e "${RED}❌ Not on main/master branch. Current branch: $CURRENT_BRANCH${NC}"
        echo -e "${YELLOW}Please switch to main/master branch for production deployment.${NC}"
        exit 1
    fi

    # Check for uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        echo -e "${RED}❌ You have uncommitted changes. Please commit or stash them first.${NC}"
        exit 1
    fi
fi

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
    # Build and package
    if [ "$FORCE_REBUILD" = true ] || [ ! -d ".next" ]; then
        if [ "$FORCE_REBUILD" = true ]; then
            echo -e "${YELLOW}🧹 Force rebuilding - cleaning previous builds...${NC}"
            rm -rf .next out dist
        else
            echo -e "${YELLOW}🔍 No existing build found - building...${NC}"
        fi

        # Install dependencies
        echo -e "${YELLOW}📦 Installing dependencies...${NC}"
        npm ci

        # Run build
        echo -e "${YELLOW}🔨 Building application for production (standalone)...${NC}"
        NODE_ENV=production npm run build

        # Verify build
        if [ ! -d ".next" ] || [ ! -d ".next/standalone" ]; then
            echo -e "${RED}❌ Build failed - .next or .next/standalone directory not found${NC}"
            exit 1
        fi

        echo -e "${GREEN}✅ Build completed successfully${NC}"
    else
        echo -e "${GREEN}✅ Using existing build (use --rebuild to force rebuild)${NC}"
    fi

    # Create deployment package
    echo -e "${YELLOW}� Creating deployment package...${NC}"
    TIMESTAMP=$(date +%Y%m%d-%H%M%S)
    DEPLOY_DIR="deploy-${ENVIRONMENT}-${TIMESTAMP}"
    mkdir -p "$DEPLOY_DIR"

    # Copy standalone build
    echo -e "${YELLOW}📋 Copying Next.js standalone build...${NC}"
    cp -r .next/standalone/. "$DEPLOY_DIR/"

    # Copy static assets
    if [ -d ".next/static" ]; then
        echo -e "${YELLOW}📋 Copying static assets...${NC}"
        cp -r .next/static "$DEPLOY_DIR/.next/"
    fi

    # Copy public assets
    if [ -d "public" ]; then
        echo -e "${YELLOW}📋 Copying public assets...${NC}"
        cp -r public/* "$DEPLOY_DIR/public/" 2>/dev/null || true
    fi

    # Update package.json for Azure deployment
    echo -e "${YELLOW}📋 Updating package.json for Azure deployment...${NC}"
    sed -i 's/"start": "NODE_ENV=production node app.js"/"start": "NODE_ENV=production node server.js"/' "$DEPLOY_DIR/package.json"
    sed -i 's/"main": "app.js"/"main": "server.js"/' "$DEPLOY_DIR/package.json"

    # Create deployment zip
    echo -e "${YELLOW}📄 Creating deployment archive...${NC}"
    DEPLOY_ZIP="$ZIP_DIR/xevolve-${ENVIRONMENT}-${TIMESTAMP}.zip"

    cd "$DEPLOY_DIR"
    zip -r "../$DEPLOY_ZIP" . > /dev/null
    cd ..

    # Update latest zip symlink
    rm -f "$LATEST_ZIP_FILE"
    ln -s "$(basename "$DEPLOY_ZIP")" "$LATEST_ZIP_FILE"

    echo -e "${GREEN}✅ Deployment package created: $DEPLOY_ZIP${NC}"
    echo -e "${GREEN}   Size: $(du -h "$DEPLOY_ZIP" | cut -f1)${NC}"
fi

# Final confirmation for production
if [ "$ENVIRONMENT" = "prod" ] && [ "$REDEPLOY_ONLY" = false ]; then
    echo -e "${RED}⚠️  FINAL CONFIRMATION FOR PRODUCTION DEPLOYMENT ⚠️${NC}"
    read -p "Deploy to PRODUCTION environment now? (yes/no): " -r
    if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
        echo -e "${YELLOW}Deployment cancelled.${NC}"
        rm -rf "$DEPLOY_DIR" 2>/dev/null || true
        exit 0
    fi
fi

# Deploy to Azure using REST API (proven working method)
echo -e "${YELLOW}🚀 Deploying to Azure App Service ($ENVIRONMENT)...${NC}"

# Configure app settings using newer API version
echo -e "${YELLOW}⚙️ Configuring app settings...${NC}"
az rest --method PUT \
    --url "https://management.azure.com/subscriptions/$SUBSCRIPTION/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/sites/$APP_NAME/config/appsettings?api-version=2023-07-01" \
    --body '{
        "properties": {
            "WEBSITE_RUN_FROM_PACKAGE": "1",
            "ENABLE_ORYX_BUILD": "false",
            "SCM_DO_BUILD_DURING_DEPLOYMENT": "false",
            "DISABLE_COLLECTSTATIC": "1",
            "WEBSITE_ENABLE_SYNC_UPDATE_SITE": "true",
            "WEBSITE_NODE_DEFAULT_VERSION": "22-lts"
        }
    }' --output none

# Deploy using REST API
echo -e "${YELLOW}📤 Uploading deployment package using REST API...${NC}"

# Get publishing credentials
PUBLISH_CREDS=$(az webapp deployment list-publishing-profiles \
    --resource-group "$RESOURCE_GROUP" \
    --name "$APP_NAME" \
    --query "[?contains(publishMethod, 'MSDeploy')].{username:userName,password:userPWD}[0]" \
    --output json)

USERNAME=$(echo "$PUBLISH_CREDS" | jq -r '.username')
PASSWORD=$(echo "$PUBLISH_CREDS" | jq -r '.password')

# Upload via REST API
echo -e "${YELLOW}🔄 Uploading via Kudu REST API...${NC}"
curl -X POST \
    -u "$USERNAME:$PASSWORD" \
    --data-binary @"$DEPLOY_ZIP" \
    "https://$APP_NAME.scm.azurewebsites.net/api/zipdeploy" \
    -H "Content-Type: application/octet-stream" \
    --silent --show-error

# Configure startup command using REST API
echo -e "${YELLOW}⚙️ Configuring startup command...${NC}"
az rest --method PUT \
    --url "https://management.azure.com/subscriptions/$SUBSCRIPTION/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/sites/$APP_NAME/config/web?api-version=2023-07-01" \
    --body '{
        "properties": {
            "appCommandLine": "node server.js",
            "linuxFxVersion": "NODE|22-lts"
        }
    }' --output none

# Wait for deployment
echo -e "${YELLOW}⏳ Waiting for deployment to complete...${NC}"
sleep 20

# Get app URL and test
APP_URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "$APP_NAME" --query "defaultHostName" --output tsv)

echo -e "${YELLOW}🧪 Testing deployment...${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_URL" --max-time 30 || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Application is live at: https://$APP_URL${NC}"
    
    # Tag release for production
    if [ "$ENVIRONMENT" = "prod" ]; then
        RELEASE_TAG="prod-$(date +%Y%m%d-%H%M%S)"
        git tag "$RELEASE_TAG"
        echo -e "${GREEN}🏷️  Tagged release as: $RELEASE_TAG${NC}"
    fi
else
    echo -e "${RED}❌ Deployment may have issues (HTTP Status: $HTTP_STATUS)${NC}"
    echo -e "${YELLOW}🔍 Check Azure portal for logs: https://$APP_URL${NC}"
    echo -e "${YELLOW}📊 Kudu console: https://$APP_NAME.scm.azurewebsites.net${NC}"
fi

# Cleanup
echo -e "${YELLOW}🧹 Cleaning up temporary files...${NC}"
if [ "$REDEPLOY_ONLY" = false ] && [ -n "$DEPLOY_DIR" ]; then
    rm -rf "$DEPLOY_DIR"
fi

# Summary
echo -e "${ENV_COLOR}=================================================="
echo -e "🎉 Deployment completed!"
echo -e "Environment: ${ENVIRONMENT^^}"
echo -e "Package: $(basename "$DEPLOY_ZIP")"
echo -e "URL: https://$APP_URL"
echo -e "Status: $([ "$HTTP_STATUS" = "200" ] && echo "✅ Success" || echo "⚠️  Check logs")"
echo -e "==================================================${NC}"

echo -e "${GREEN}💡 Quick commands:${NC}"
echo -e "  Redeploy: $0 $ENVIRONMENT --redeploy"
echo -e "  Rebuild:  $0 $ENVIRONMENT --rebuild"
echo -e "  Logs:     az webapp log tail --resource-group $RESOURCE_GROUP --name $APP_NAME"
