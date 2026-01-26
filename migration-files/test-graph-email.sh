#!/bin/bash

# Test script for Microsoft Graph email functionality
# This script sources the .env file and runs the Node.js test

set -e  # Exit on any error

echo "🔧 Loading environment variables from .env file..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found!"
    echo "💡 Please create a .env file with the required Microsoft Graph variables:"
    echo "   - AZURE_CLIENT_ID"
    echo "   - AZURE_TENANT_ID" 
    echo "   - AZURE_CLIENT_SECRET"
    echo "   - GRAPH_EMAIL_SENDER"
    exit 1
fi

# Source the .env file
set -a  # Automatically export all variables
source .env
set +a  # Stop auto-exporting

# Validate required environment variables
required_vars=("AZURE_CLIENT_ID" "AZURE_TENANT_ID" "AZURE_CLIENT_SECRET" "GRAPH_EMAIL_SENDER")
missing_vars=()

for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        missing_vars+=("$var")
    fi
done

if [ ${#missing_vars[@]} -gt 0 ]; then
    echo "❌ Missing required environment variables in .env file:"
    for var in "${missing_vars[@]}"; do
        echo "   - $var"
    done
    echo ""
    echo "💡 Please add these to your .env file"
    exit 1
fi

echo "✅ Environment variables loaded successfully"
echo "📧 Client ID: $AZURE_CLIENT_ID"
echo "🏢 Tenant ID: $AZURE_TENANT_ID"
echo "📨 Email Sender: $GRAPH_EMAIL_SENDER"
echo "🔐 Client Secret: ${AZURE_CLIENT_SECRET:0:8}..."

echo ""
echo "🚀 Running Microsoft Graph email test..."
echo ""

# Run the Node.js test
node test-graph-email.cjs

echo ""
echo "🎉 Test completed!"
