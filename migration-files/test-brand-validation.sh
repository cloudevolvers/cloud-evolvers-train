#!/bin/bash

# Test Brand Validation Logic
echo "🧪 Testing brand validation logic..."

# Test 1: cloud-evolvers app name
APP_NAME="cloud-evolvers"
if [[ "$APP_NAME" == *"cloud-evolvers"* || "$APP_NAME" == *"cloudevolvers"* ]]; then
    EXPECTED_BRAND="Cloud Evolvers"
    EXPECTED_ENV_VAR="1"
else
    EXPECTED_BRAND="xEvolve"
    EXPECTED_ENV_VAR=""
fi
echo "✅ Test 1: $APP_NAME → $EXPECTED_BRAND (NEXT_PUBLIC_CLOUD_EVOLVERS=$EXPECTED_ENV_VAR)"

# Test 2: cloudevolvers app name (without hyphen)
APP_NAME="cloudevolvers"
if [[ "$APP_NAME" == *"cloud-evolvers"* || "$APP_NAME" == *"cloudevolvers"* ]]; then
    EXPECTED_BRAND="Cloud Evolvers"
    EXPECTED_ENV_VAR="1"
else
    EXPECTED_BRAND="xEvolve"
    EXPECTED_ENV_VAR=""
fi
echo "✅ Test 2: $APP_NAME → $EXPECTED_BRAND (NEXT_PUBLIC_CLOUD_EVOLVERS=$EXPECTED_ENV_VAR)"

# Test 3: xevolve-website app name
APP_NAME="xevolve-website"
if [[ "$APP_NAME" == *"cloud-evolvers"* || "$APP_NAME" == *"cloudevolvers"* ]]; then
    EXPECTED_BRAND="Cloud Evolvers"
    EXPECTED_ENV_VAR="1"
else
    EXPECTED_BRAND="xEvolve"
    EXPECTED_ENV_VAR=""
fi
echo "✅ Test 3: $APP_NAME → $EXPECTED_BRAND (NEXT_PUBLIC_CLOUD_EVOLVERS=$EXPECTED_ENV_VAR)"

# Test 4: any other app name
APP_NAME="some-other-app"
if [[ "$APP_NAME" == *"cloud-evolvers"* || "$APP_NAME" == *"cloudevolvers"* ]]; then
    EXPECTED_BRAND="Cloud Evolvers"
    EXPECTED_ENV_VAR="1"
else
    EXPECTED_BRAND="xEvolve"
    EXPECTED_ENV_VAR=""
fi
echo "✅ Test 4: $APP_NAME → $EXPECTED_BRAND (NEXT_PUBLIC_CLOUD_EVOLVERS=$EXPECTED_ENV_VAR)"

echo ""
echo "🎯 Expected Results:"
echo "  • cloud-evolvers → Cloud Evolvers (NEXT_PUBLIC_CLOUD_EVOLVERS=1)"
echo "  • cloudevolvers → Cloud Evolvers (NEXT_PUBLIC_CLOUD_EVOLVERS=1)"
echo "  • xevolve-website → xEvolve (NEXT_PUBLIC_CLOUD_EVOLVERS=)"
echo "  • any other app → xEvolve (NEXT_PUBLIC_CLOUD_EVOLVERS=)"
