#!/bin/bash

# Utility script to extract environment variables from .env.local

# Get the directory of the script and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Default to .env.local but allow specifying a different file
ENV_FILE="${1:-$PROJECT_ROOT/.env.local}"

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: Environment file not found at $ENV_FILE"
  exit 1
fi

echo "Loading environment variables from $ENV_FILE..."

# Source the environment file
while IFS='=' read -r key value || [ -n "$key" ]; do
  # Skip comments and empty lines
  [[ $key =~ ^#.*$ ]] && continue
  [[ -z $key ]] && continue
  
  # Remove quotes if present
  value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//")
  
  # Export the variable
  export "$key=$value"
  echo "Loaded: $key"
done < "$ENV_FILE"

echo "Environment variables loaded successfully."
