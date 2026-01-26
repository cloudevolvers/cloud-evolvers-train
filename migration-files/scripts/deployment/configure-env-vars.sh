#!/bin/bash
# Remove set -e to prevent script from exiting on error
# set -e

# Script to configure environment variables for Azure Web App
# Usage: ./configure-env-vars.sh <app-name> <env-file> <resource-group> <subscription-id>

APP_NAME="$1"
ENV_FILE="$2"
RESOURCE_GROUP="$3"
SUBSCRIPTION_ID="$4"

# List of protected system variables that should not be removed or modified
PROTECTED_VARS=(
  "APPLICATIONINSIGHTS_CONNECTION_STRING"
  "ApplicationInsightsAgent_EXTENSION_VERSION"
  "XDT_MicrosoftApplicationInsights_Mode"
  "WEBSITE_NODE_DEFAULT_VERSION"
)

echo "📝 Configuring environment variables for $APP_NAME"
echo "Environment file: $ENV_FILE"
echo "Resource group: $RESOURCE_GROUP"
echo "Subscription: $SUBSCRIPTION_ID"

# Check if environment file exists with better debugging
echo "Checking for environment file at: $ENV_FILE"
echo "Working directory: $(pwd)"
echo "Listing files in .github/workflows/DeploymentVars/:"
ls -la .github/workflows/DeploymentVars/ 2>/dev/null || echo "Directory not found"

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Environment file not found: $ENV_FILE"
    
    # Try different path variations
    ENV_FILE_NAME=$(basename "$ENV_FILE")
    SEARCH_PATHS=(
        "$ENV_FILE"
        "./$ENV_FILE"
        ".github/workflows/DeploymentVars/$ENV_FILE_NAME"
        "./.github/workflows/DeploymentVars/$ENV_FILE_NAME"
    )
    
    FOUND=false
    for path in "${SEARCH_PATHS[@]}"; do
        echo "Trying path: $path"
        if [ -f "$path" ]; then
            echo "✅ Environment file found at: $path"
            ENV_FILE="$path"
            FOUND=true
            break
        fi
    done
    
    if [ "$FOUND" = false ]; then
        # Search recursively for the file
        echo "Searching recursively for $ENV_FILE_NAME..."
        FOUND_FILES=$(find "$(pwd)" -name "$ENV_FILE_NAME" -type f 2>/dev/null | head -1)
        
        if [ -n "$FOUND_FILES" ]; then
            echo "✅ Found environment file at: $FOUND_FILES"
            ENV_FILE="$FOUND_FILES"
            FOUND=true
        else
            echo "❌ Could not find environment file anywhere in repository."
            echo "⚠️ Creating empty environment file to continue..."
            # Create directory structure if it doesn't exist
            mkdir -p "$(dirname "$ENV_FILE")"
            # Create empty file
            touch "$ENV_FILE" 2>/dev/null || {
                # If touch fails, create in current directory
                ENV_FILE="./temp_env_file.env"
                touch "$ENV_FILE"
            }
        fi
    fi
fi

echo "✅ Environment file found"
echo "Fetching current environment variables..."

# Get current app settings
if ! az webapp config appsettings list \
  --name "$APP_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --subscription "$SUBSCRIPTION_ID" \
  --output json > current_settings.json; then
    echo "⚠️ Warning: Could not fetch current app settings. Will proceed with updates only."
    echo "[]" > current_settings.json
fi

echo "Processing environment variables..."

# Parse environment file into a temporary file
rm -f new_settings.txt 2>/dev/null || true
touch new_settings.txt
while IFS= read -r line || [[ -n "$line" ]]; do
    # Skip comments and empty lines
    if [[ "$line" =~ ^[[:space:]]*# ]] || [[ -z "$(echo "$line" | tr -d '[:space:]')" ]]; then
        continue
    fi
    
    # Process key=value pairs
    if [[ "$line" == *"="* ]]; then
        key="${line%%=*}"
        value="${line#*=}"
        key=$(echo "$key" | tr -d '[:space:]')
        
        if [[ -n "$key" ]]; then
            echo "$key=$value" >> new_settings.txt
        fi
    fi
done < "$ENV_FILE"

# Create arrays for settings to add/update and remove
declare -a to_update=()
declare -a to_remove=()

# Extract keys from current settings
current_keys=$(jq -r '.[].name' current_settings.json 2>/dev/null || echo "")

# Build list of settings to remove (exist in Azure but not in ENV file)
for key in $current_keys; do
    # Check if key is in protected list
    is_protected=0
    for protected in "${PROTECTED_VARS[@]}"; do
        if [[ "$key" == "$protected" ]]; then
            is_protected=1
            break
        fi
    done
    
    # Skip protected variables
    if [[ $is_protected -eq 1 ]]; then
        echo "Skipping protected variable: $key"
        continue
    fi
    
    if ! grep -q "^$key=" new_settings.txt; then
        echo "Will remove: $key"
        to_remove+=("$key")
    fi
done

# Build list of settings to add/update
while IFS= read -r line; do
    key="${line%%=*}"
    value="${line#*=}"
    
    # Check if key is in protected list
    is_protected=0
    for protected in "${PROTECTED_VARS[@]}"; do
        if [[ "$key" == "$protected" ]]; then
            is_protected=1
            break
        fi
    done
    
    # Skip protected variables
    if [[ $is_protected -eq 1 ]]; then
        echo "Skipping protected variable: $key"
        continue
    fi
    
    # Check if setting exists with same value
    current_value=$(jq -r ".[] | select(.name == \"$key\") | .value" current_settings.json 2>/dev/null || echo "")
    
    # Only update if value is different or doesn't exist
    if [[ "$current_value" != "$value" ]]; then
        echo "Will update: $key"
        to_update+=("$key=$value")
    fi
done < new_settings.txt

# Update settings that need to be changed
if [ ${#to_update[@]} -gt 0 ]; then
    echo "Updating ${#to_update[@]} environment variables..."
    
    # Process updates in smaller batches to avoid request size limits
    batch_size=5
    for ((i=0; i<${#to_update[@]}; i+=batch_size)); do
        end=$((i+batch_size))
        if [ $end -gt ${#to_update[@]} ]; then
            end=${#to_update[@]}
        fi
        
        echo "Processing batch $((i/batch_size+1))..."
        batch=("${to_update[@]:i:batch_size}")
        
        if ! az webapp config appsettings set \
            --name "$APP_NAME" \
            --resource-group "$RESOURCE_GROUP" \
            --subscription "$SUBSCRIPTION_ID" \
            --settings "${batch[@]}" \
            --output none; then
            echo "⚠️ Warning: Failed to update some settings in batch $((i/batch_size+1)). Continuing..."
        fi
    done
    
    echo "✅ Updated environment variables"
else
    echo "✅ No variables need updating"
fi

# Remove settings that aren't in the ENV file
if [ ${#to_remove[@]} -gt 0 ]; then
    echo "Removing ${#to_remove[@]} environment variables..."
    
    # Process removals in smaller batches
    batch_size=5
    for ((i=0; i<${#to_remove[@]}; i+=batch_size)); do
        end=$((i+batch_size))
        if [ $end -gt ${#to_remove[@]} ]; then
            end=${#to_remove[@]}
        fi
        
        echo "Processing removal batch $((i/batch_size+1))..."
        batch=("${to_remove[@]:i:batch_size}")
        
        if ! az webapp config appsettings delete \
            --name "$APP_NAME" \
            --resource-group "$RESOURCE_GROUP" \
            --subscription "$SUBSCRIPTION_ID" \
            --setting-names "${batch[@]}" \
            --output none; then
            echo "⚠️ Warning: Failed to remove some settings in batch $((i/batch_size+1)). Continuing..."
        fi
    done
    
    echo "✅ Removed obsolete environment variables"
else
    echo "✅ No variables need removing"
fi

# Clean up temp files
rm -f current_settings.json new_settings.txt

echo "✅ Environment variable configuration complete"
