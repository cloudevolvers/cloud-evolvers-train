#!/bin/bash

# Deploy to Production Environment
echo "🚀 Deploying to Production Environment..."

# Confirmation prompt for production
read -p "⚠️  You are about to deploy to PRODUCTION. Are you sure? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Production deployment cancelled."
    exit 1
fi

# Set environment
export NODE_ENV=production

# Build the application for production
echo "📦 Building application for production..."
npm run build

# Deploy using SWA CLI
echo "🌐 Deploying to Static Web App (Production)..."
npx swa deploy \
  --config cloud-evolvers-train \
  --env production \
  --no-use-keychain \
  --verbose

echo "✅ Production deployment complete!"
echo "🎉 Your application is now live!"
