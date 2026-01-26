#!/bin/bash

# Version Bump Script for GitHub Actions
# Automatically bumps patch version and updates build info

set -e

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Parse version parts
IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR=${VERSION_PARTS[0]}
MINOR=${VERSION_PARTS[1]}
PATCH=${VERSION_PARTS[2]}

# Bump patch version
NEW_PATCH=$((PATCH + 1))
NEW_VERSION="$MAJOR.$MINOR.$NEW_PATCH"

echo "New version: $NEW_VERSION"

# Update package.json
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
else
  # Linux
  sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
fi

# Update version.ts with build information
cat > src/lib/version.ts << EOF
/**
 * Version Management System
 * 
 * This file manages the application version and build information.
 * Version is auto-updated by GitHub Actions on every commit to main.
 * 
 * Last updated: $(date -u +"%Y-%m-%d %H:%M:%S UTC")
 */

export const VERSION_INFO = {
  version: '$NEW_VERSION',
  buildDate: '$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")',
  commitSha: '${GITHUB_SHA:-dev-local}',
  environment: import.meta.env.MODE || 'development'
} as const;

export const getBuildInfo = () => {
  const buildDate = new Date(VERSION_INFO.buildDate);
  const shortSha = VERSION_INFO.commitSha.substring(0, 7);
  
  return {
    version: VERSION_INFO.version,
    buildDate: buildDate.toLocaleDateString(),
    buildTime: buildDate.toLocaleTimeString(),
    commitSha: shortSha,
    environment: VERSION_INFO.environment,
    fullVersion: \`v\${VERSION_INFO.version} (\${shortSha})\`
  };
};

export const getVersionString = () => {
  const info = getBuildInfo();
  return \`\${info.fullVersion} - \${info.environment}\`;
};

/**
 * Development helper to check if this is a production build
 */
export const isProduction = () => VERSION_INFO.environment === 'production';
EOF

echo "✅ Version bumped to $NEW_VERSION"
echo "✅ Version info updated with commit: ${GITHUB_SHA:-dev-local}"

# Only output to GITHUB_OUTPUT if running in GitHub Actions
if [ -n "${GITHUB_OUTPUT:-}" ]; then
  echo "NEW_VERSION=$NEW_VERSION" >> "$GITHUB_OUTPUT"
fi
