#!/bin/bash
# Script to create deployment package by zipping the codebase directly

set -e

echo "📦 Creating deployment package..."

# Clean up any existing deployment.zip
rm -f deployment.zip

# Ensure app.js is executable
chmod +x app.js

# For Linux App Service, we don't need web.config
echo "ℹ️ Deploying to Azure Linux App Service - no web.config needed"

# Create deployment zip directly from current directory
# Exclude development and test files/directories but include node_modules, .next and app.js
zip -r deployment.zip . -q \
  -x \
  ".git/*" \
  ".github/*" \
  ".vscode/*" \
  ".idea/*" \
  "coverage/*" \
  "__mocks__/*" \
  "_tests/*" \
  "playwright/*" \
  "playwright-v2/*" \
  "test-results/*" \
  "cucumber/*" \
  "bash-e2e-tests/*" \
  "jest-stare/*" \
  "*.log" \
  "*.tsbuildinfo" \
  ".env*" \
  ".local/*" \
  "auth_cookies.txt" \
  "profile_cookies.txt" \
  ".next/cache/*" \
  "web.config" \
  "server.js" \
  ".deployment"

# Verify deployment package was created
if [ ! -f "deployment.zip" ]; then
    echo "❌ Deployment zip file not created"
    exit 1
fi

echo "✅ Deployment package created successfully"
echo "📏 Package size: $(du -sh deployment.zip | cut -f1)"
