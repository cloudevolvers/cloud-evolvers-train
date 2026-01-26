#!/bin/bash
# Deploy infrastructure for Cloud Evolvers Training Platform

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Default values
ENVIRONMENT="dta"
RESOURCE_GROUP="xevolve-dta-rg"
LOCATION="northeurope"
SUBSCRIPTION_ID="4a55c776-9f6b-4966-921e-c9f60e50652f"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -e|--environment)
            ENVIRONMENT="$2"
            shift 2
            ;;
        -g|--resource-group)
            RESOURCE_GROUP="$2"
            shift 2
            ;;
        -l|--location)
            LOCATION="$2"
            shift 2
            ;;
        -s|--subscription)
            SUBSCRIPTION_ID="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo "Options:"
            echo "  -e, --environment    Target environment (dta or prod) [default: dta]"
            echo "  -g, --resource-group Resource group name [default: xevolve-dta-rg]"
            echo "  -l, --location       Azure location [default: northeurope]"
            echo "  -s, --subscription   Azure subscription ID"
            echo "  -h, --help           Show this help message"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
done

# Validate environment
if [[ "$ENVIRONMENT" != "dta" && "$ENVIRONMENT" != "prod" ]]; then
    print_error "Environment must be 'dta' or 'prod'"
    exit 1
fi

# Update resource group for prod environment
if [[ "$ENVIRONMENT" == "prod" ]]; then
    RESOURCE_GROUP="sc-northeu-sc-apim"
fi

print_status "Starting infrastructure deployment for Cloud Evolvers Training Platform"
print_status "Environment: $ENVIRONMENT"
print_status "Resource Group: $RESOURCE_GROUP"
print_status "Location: $LOCATION"
print_status "Subscription: $SUBSCRIPTION_ID"

# Check if logged in to Azure CLI
if ! az account show &>/dev/null; then
    print_error "You are not logged in to Azure CLI. Please run 'az login' first."
    exit 1
fi

# Set the subscription
print_status "Setting Azure subscription..."
az account set --subscription "$SUBSCRIPTION_ID"

# Check if resource group exists, create if it doesn't
print_status "Checking resource group..."
if ! az group show --name "$RESOURCE_GROUP" &>/dev/null; then
    print_warning "Resource group '$RESOURCE_GROUP' does not exist. Creating..."
    az group create --name "$RESOURCE_GROUP" --location "$LOCATION"
    print_success "Resource group created successfully"
else
    print_success "Resource group exists"
fi

# Determine parameters file
PARAMS_FILE="main.parameters.json"
if [[ "$ENVIRONMENT" == "prod" ]]; then
    PARAMS_FILE="main.parameters.prod.json"
fi

# Deploy the infrastructure
print_status "Deploying infrastructure using Bicep..."
DEPLOYMENT_NAME="cloudevolvers-$ENVIRONMENT-$(date +%Y%m%d-%H%M%S)"

az deployment group create \
    --resource-group "$RESOURCE_GROUP" \
    --template-file "infra/main.bicep" \
    --parameters "@infra/$PARAMS_FILE" \
    --parameters location="$LOCATION" \
    --name "$DEPLOYMENT_NAME" \
    --verbose

if [[ $? -eq 0 ]]; then
    print_success "Infrastructure deployment completed successfully!"
    
    # Get deployment outputs
    print_status "Retrieving deployment outputs..."
    STATIC_WEB_APP_NAME=$(az deployment group show --resource-group "$RESOURCE_GROUP" --name "$DEPLOYMENT_NAME" --query "properties.outputs.staticWebAppName.value" -o tsv)
    STATIC_WEB_APP_HOSTNAME=$(az deployment group show --resource-group "$RESOURCE_GROUP" --name "$DEPLOYMENT_NAME" --query "properties.outputs.staticWebAppDefaultHostname.value" -o tsv)
    KEY_VAULT_URI=$(az deployment group show --resource-group "$RESOURCE_GROUP" --name "$DEPLOYMENT_NAME" --query "properties.outputs.keyVaultUri.value" -o tsv)
    
    print_success "Deployment Summary:"
    echo "  Static Web App Name: $STATIC_WEB_APP_NAME"
    echo "  Default Hostname: https://$STATIC_WEB_APP_HOSTNAME"
    echo "  Key Vault URI: $KEY_VAULT_URI"
    
    print_status "Next steps:"
    echo "1. Configure GitHub Actions secrets for the Static Web App API token"
    echo "2. Update your deployment configuration with the new hostname"
    echo "3. Deploy your application using 'npm run deploy' or GitHub Actions"
    
else
    print_error "Infrastructure deployment failed!"
    exit 1
fi
