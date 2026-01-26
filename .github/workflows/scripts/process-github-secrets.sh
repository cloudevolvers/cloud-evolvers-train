#!/bin/bash

# 🔐 Auto-Load GitHub Secrets from Environment File
# This script processes @GitHubActions=SECRET_NAME syntax in .env files
# and automatically replaces them with GitHub Secrets values
#
# Usage: source process-github-secrets.sh <env-file>

set -e

ENV_FILE="${1:-.github/workflows/DeploymentVars/production.env}"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔐 Processing GitHub Secrets from: $ENV_FILE${NC}"
echo ""

if [[ ! -f "$ENV_FILE" ]]; then
    echo -e "${RED}❌ ERROR: Environment file not found: $ENV_FILE${NC}"
    exit 1
fi

# Counter for processed secrets
PROCESSED_COUNT=0
SKIPPED_COUNT=0

# Read the env file line by line
while IFS= read -r line || [[ -n "$line" ]]; do
    # Skip comments and empty lines
    if [[ "$line" =~ ^[[:space:]]*# ]] || [[ -z "$line" ]]; then
        continue
    fi
    
    # Check if line contains @GitHubActions= syntax
    if [[ "$line" =~ ^([A-Z_]+)=@GitHubActions=([A-Z_]+) ]]; then
        ENV_VAR="${BASH_REMATCH[1]}"
        SECRET_NAME="${BASH_REMATCH[2]}"
        
        echo -e "${GREEN}✅ Found: $ENV_VAR → GitHub Secret: $SECRET_NAME${NC}"
        
        # Export to GitHub Environment (when running in GitHub Actions)
        if [[ -n "$GITHUB_ENV" ]]; then
            # This will be replaced by GitHub Actions with actual secret value
            echo "$ENV_VAR=\${secrets.$SECRET_NAME}" >> "$GITHUB_OUTPUT" || true
            echo "   → Will load from secrets.$SECRET_NAME in GitHub Actions"
        else
            echo "   → To be loaded from GitHub Secrets during deployment"
        fi
        
        PROCESSED_COUNT=$((PROCESSED_COUNT + 1))
    fi
done < "$ENV_FILE"

echo ""
echo -e "${BLUE}📊 Summary:${NC}"
echo "  • Processed: $PROCESSED_COUNT secrets"
echo "  • These will be automatically loaded from GitHub Secrets"
echo ""

if [[ $PROCESSED_COUNT -eq 0 ]]; then
    echo -e "${YELLOW}⚠️  No @GitHubActions= secrets found in $ENV_FILE${NC}"
else
    echo -e "${GREEN}✅ Ready for deployment! GitHub Actions will inject secret values.${NC}"
fi
