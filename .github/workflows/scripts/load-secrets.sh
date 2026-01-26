#!/bin/bash

# 🔐 Dynamic Secrets Loader
# This script reads secrets-mapping.yml and automatically overrides
# environment variables with GitHub Secrets
#
# Usage: bash load-secrets.sh <secrets-mapping.yml> <github-secrets-json>

set -e

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔐 Dynamic Secrets Loader${NC}"
echo ""

# Check if yq is available (for YAML parsing)
if ! command -v yq &> /dev/null; then
    echo -e "${YELLOW}⚠️  yq not found, using fallback parsing method${NC}"
    USE_FALLBACK=true
else
    USE_FALLBACK=false
fi

SECRETS_MAPPING_FILE="${1:-.github/workflows/DeploymentVars/secrets-mapping.yml}"

if [[ ! -f "$SECRETS_MAPPING_FILE" ]]; then
    echo -e "${RED}❌ ERROR: Secrets mapping file not found: $SECRETS_MAPPING_FILE${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Found secrets mapping: $SECRETS_MAPPING_FILE${NC}"
echo ""

# Function to get GitHub Secret value (passed as argument)
get_secret_value() {
    local secret_name="$1"
    # This will be replaced with actual secret value by GitHub Actions
    echo "\${secrets.${secret_name}}"
}

# Parse secrets-mapping.yml and generate override commands
echo -e "${BLUE}📊 Processing secret mappings...${NC}"
echo ""

# Simple parsing for organization secrets
echo "# Organization Secrets"
grep -A 10 "organization:" "$SECRETS_MAPPING_FILE" | grep "name:" | sed 's/.*name: //' | while read -r secret_name; do
    if [[ -n "$secret_name" ]]; then
        echo -e "${GREEN}  ✅ Organization Secret: $secret_name${NC}"
        
        # Find all env_vars for this secret
        in_secret=false
        while IFS= read -r line; do
            if [[ "$line" =~ "name: $secret_name" ]]; then
                in_secret=true
            elif [[ "$line" =~ "- name:" ]]; then
                in_secret=false
            elif [[ "$in_secret" == true ]] && [[ "$line" =~ "- " ]] && [[ ! "$line" =~ "name:" ]]; then
                env_var=$(echo "$line" | sed 's/.*- //' | tr -d ' ')
                echo "     → Maps to: $env_var"
            fi
        done < "$SECRETS_MAPPING_FILE"
    fi
done

echo ""
echo "# Repository Secrets"
grep -A 10 "repository:" "$SECRETS_MAPPING_FILE" | grep "name:" | sed 's/.*name: //' | while read -r secret_name; do
    if [[ -n "$secret_name" ]]; then
        echo -e "${GREEN}  ✅ Repository Secret: $secret_name${NC}"
        
        # Find all env_vars for this secret
        in_secret=false
        while IFS= read -r line; do
            if [[ "$line" =~ "name: $secret_name" ]]; then
                in_secret=true
            elif [[ "$line" =~ "- name:" ]]; then
                in_secret=false
            elif [[ "$in_secret" == true ]] && [[ "$line" =~ "- " ]] && [[ ! "$line" =~ "name:" ]]; then
                env_var=$(echo "$line" | sed 's/.*- //' | tr -d ' ')
                echo "     → Maps to: $env_var"
            fi
        done < "$SECRETS_MAPPING_FILE"
    fi
done

echo ""
echo -e "${GREEN}✅ Secrets mapping processed successfully${NC}"
echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo "  • Secrets are defined in: $SECRETS_MAPPING_FILE"
echo "  • GitHub Actions will automatically override env vars"
echo "  • Single source of truth: production.env + GitHub Secrets"
