#!/bin/bash

# Deploy to Staging Environment
echo "🧪 Deploying to Staging Environment..."

# Set environment
export NODE_ENV=staging

# Build the application for staging
echo "📦 Building application for staging..."
npm run build:staging

# Deploy using SWA CLI
echo "🌐 Deploying to Static Web App (Staging)..."
npx swa deploy \
  --config cloud-evolvers-train-staging \
  --env staging \
  --no-use-keychain \
  --verbose

echo "✅ Staging deployment complete!"
echo "📋 Staging environment is ready for testing!"
