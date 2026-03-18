#!/bin/bash

# Deploy to Development Environment
echo "🚀 Deploying to Development Environment..."

# Set environment
export NODE_ENV=development

# Build the application for development
echo "📦 Building application for development..."
bun run build:dev

# Deploy using SWA CLI
echo "🌐 Deploying to Static Web App (Development)..."
bunx swa deploy \
  --config cloud-evolvers-train-dev \
  --env development \
  --no-use-keychain \
  --verbose

echo "✅ Development deployment complete!"
