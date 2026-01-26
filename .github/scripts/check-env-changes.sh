#!/bin/bash

# 🔍 Environment Variable Change Detection Script
# This script compares current environment variables with previous state

echo "🔍 Environment Variable Change Detection"
echo "========================================"

# Define the environment variables we track for the API
API_VARS=(
    "API_KEY"
    "EMAIL_AZURE_TENANT_ID"
    "EMAIL_AZURE_CLIENT_ID"
    "EMAIL_AZURE_CLIENT_SECRET"
    "EMAIL_SENDER"
)

# Get current environment variables from Static Web App
echo "📋 Fetching current environment variables..."
CURRENT_VARS=$(az staticwebapp appsettings list \
    --name "cloudevolvers-website-swa" \
    --resource-group "cloudevolvers-p-websites-rg" \
    --output json)

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Failed to fetch current environment variables"
    exit 1
fi

# Create a comparison file if it doesn't exist
COMPARISON_FILE=".github/env-vars-state.json"
if [ ! -f "$COMPARISON_FILE" ]; then
    echo "📄 Creating initial environment variable state file..."
    echo "$CURRENT_VARS" > "$COMPARISON_FILE"
    echo "✅ Initial state saved. Run this script again after changes to see differences."
    exit 0
fi

# Load previous state
PREVIOUS_VARS=$(cat "$COMPARISON_FILE")

# Compare and show changes
echo ""
echo "🔄 Comparing environment variables..."
echo ""

for var in "${API_VARS[@]}"; do
    # Extract current value (mask secrets)
    CURRENT_VAL=$(echo "$CURRENT_VARS" | jq -r ".[] | select(.name==\"$var\") | .value" 2>/dev/null)
    PREVIOUS_VAL=$(echo "$PREVIOUS_VARS" | jq -r ".[] | select(.name==\"$var\") | .value" 2>/dev/null)
    
    # Handle null values
    if [ "$CURRENT_VAL" = "null" ]; then CURRENT_VAL=""; fi
    if [ "$PREVIOUS_VAL" = "null" ]; then PREVIOUS_VAL=""; fi
    
    # Show status
    if [ -z "$PREVIOUS_VAL" ] && [ -n "$CURRENT_VAL" ]; then
        # New variable
        if [[ "$var" == *"SECRET"* ]] || [[ "$var" == *"KEY"* ]]; then
            echo "🆕 $var: ADDED (value masked for security)"
        else
            echo "🆕 $var: ADDED → '$CURRENT_VAL'"
        fi
    elif [ -n "$PREVIOUS_VAL" ] && [ -z "$CURRENT_VAL" ]; then
        # Removed variable
        echo "❌ $var: REMOVED"
    elif [ "$CURRENT_VAL" != "$PREVIOUS_VAL" ]; then
        # Changed variable
        if [[ "$var" == *"SECRET"* ]] || [[ "$var" == *"KEY"* ]]; then
            echo "🔄 $var: CHANGED (values masked for security)"
        else
            echo "🔄 $var: CHANGED"
            echo "   Previous: '$PREVIOUS_VAL'"
            echo "   Current:  '$CURRENT_VAL'"
        fi
    else
        # Unchanged variable
        echo "✅ $var: No change"
    fi
done

# Update the state file with current values
echo "$CURRENT_VARS" > "$COMPARISON_FILE"

echo ""
echo "📄 Environment variable state updated in: $COMPARISON_FILE"
echo "✅ Environment variable comparison complete!"
