#!/bin/bash
# Backup deployment script for Vite apps
# Usage: ./backup-deploy.sh <app-name> <deployment-zip> <resource-group>

set -e

APP_NAME="$1"
DEPLOYMENT_ZIP="$2"
RESOURCE_GROUP="$3"

if [[ -z "$APP_NAME" || -z "$DEPLOYMENT_ZIP" || -z "$RESOURCE_GROUP" ]]; then
    echo "❌ Usage: $0 <app-name> <deployment-zip> <resource-group>"
    exit 1
fi

echo "🔄 Starting backup deployment via REST API..."
echo "  • App: $APP_NAME"
echo "  • Package: $DEPLOYMENT_ZIP"
echo "  • Resource Group: $RESOURCE_GROUP"

# Verify deployment package exists
if [[ ! -f "$DEPLOYMENT_ZIP" ]]; then
    echo "❌ Deployment package not found: $DEPLOYMENT_ZIP"
    exit 1
fi

echo "📦 Package size: $(du -sh "$DEPLOYMENT_ZIP" | cut -f1)"

# Get publishing profile
echo "🔐 Retrieving publishing credentials..."
PUBLISH_PROFILE=$(az webapp deployment list-publishing-profiles \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --xml)

# Extract credentials
USERNAME=$(echo "$PUBLISH_PROFILE" | grep -oP '(?<=userName=")[^"]*' | head -1)
PASSWORD=$(echo "$PUBLISH_PROFILE" | grep -oP '(?<=userPWD=")[^"]*' | head -1)

if [[ -z "$USERNAME" || -z "$PASSWORD" ]]; then
    echo "❌ Failed to extract publishing credentials"
    echo "💡 Make sure the App Service exists and you have deployment permissions"
    exit 1
fi

echo "✅ Publishing credentials retrieved successfully"

# Deploy via Kudu REST API
echo "🚀 Deploying via Kudu REST API..."
KUDU_URL="https://${APP_NAME}.scm.azurewebsites.net/api/zipdeploy?isAsync=false"

HTTP_CODE=$(curl -X POST "$KUDU_URL" \
    -u "$USERNAME:$PASSWORD" \
    -H "Content-Type: application/zip" \
    --data-binary "@$DEPLOYMENT_ZIP" \
    -w "%{http_code}" \
    --output deployment-response.txt \
    --max-time 1800 \
    --show-error)

echo "📊 HTTP Response Code: $HTTP_CODE"

# Check response
if [[ "$HTTP_CODE" -eq 200 ]]; then
    echo "✅ Backup deployment completed successfully!"
    
    # Show response if not too long
    if [[ -f "deployment-response.txt" ]]; then
        RESPONSE_SIZE=$(wc -c < deployment-response.txt)
        if [[ $RESPONSE_SIZE -lt 1000 ]]; then
            echo "📋 Deployment response:"
            cat deployment-response.txt
        else
            echo "📋 Deployment response too large (${RESPONSE_SIZE} bytes), skipping display"
        fi
    fi
    
    rm -f deployment-response.txt
else
    echo "❌ Backup deployment failed with HTTP code: $HTTP_CODE"
    
    if [[ -f "deployment-response.txt" ]]; then
        echo "📋 Error response:"
        cat deployment-response.txt
    fi
    
    rm -f deployment-response.txt
    exit 1
fi

echo "🎉 Backup deployment process completed successfully!"
