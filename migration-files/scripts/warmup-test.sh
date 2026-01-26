#!/bin/bash

# Local Warmup Test Script for xEvolve Website
# This is a simplified version for local testing. The main warmup script is in .github/scripts/

set -e

# Default values
DEFAULT_URL="http://localhost:3000"
DEFAULT_TIMEOUT=60
DEFAULT_RETRIES=3

# Parse command line arguments
URL="${1:-$DEFAULT_URL}"
TIMEOUT="${2:-$DEFAULT_TIMEOUT}"
MAX_RETRIES="${3:-$DEFAULT_RETRIES}"

echo "🔥 xEvolve Website Local Warmup Test"
echo "====================================="
echo "🌐 Target URL: $URL"
echo "⏱️  Timeout: ${TIMEOUT}s"
echo "🔄 Max Retries: $MAX_RETRIES"
echo ""
echo "💡 Note: For full deployment warmup functionality, see .github/scripts/warmup-application.sh"
echo ""

# Remove trailing slash if present
URL="${URL%/}"

# Define endpoints to test
WARMUP_URL="$URL/api/warmup"
HEALTH_URL="$URL/api/health"
HOME_URL="$URL"

# Function to test an endpoint
test_endpoint() {
    local endpoint="$1"
    local description="$2"
    local accept_header="${3:-application/json}"
    
    echo "🧪 Testing $description: $endpoint"
    
    if curl -f -s -m "$TIMEOUT" \
        -H "User-Agent: warmup-test-script/1.0" \
        -H "Accept: $accept_header" \
        "$endpoint" > /tmp/response.json 2>/dev/null; then
        echo "✅ $description: SUCCESS"
        
        # Try to parse and display response details if it's JSON
        if [[ "$accept_header" == *"json"* ]]; then
            if command -v jq >/dev/null 2>&1; then
                echo "📊 Response details:"
                cat /tmp/response.json | jq -C '.' 2>/dev/null || cat /tmp/response.json
            else
                echo "📄 Raw response:"
                head -c 500 /tmp/response.json
            fi
        fi
        echo ""
        return 0
    else
        echo "❌ $description: FAILED"
        echo ""
        return 1
    fi
}

# Main warmup test loop
RETRY_COUNT=0
SUCCESS=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ] && [ "$SUCCESS" = false ]; do
    echo "🔥 Warmup attempt $((RETRY_COUNT + 1))/$MAX_RETRIES"
    echo "----------------------------------------"
    
    # Test warmup endpoint first
    if test_endpoint "$WARMUP_URL" "Warmup Endpoint" "application/json"; then
        SUCCESS=true
        echo "✅ Warmup endpoint successful!"
    elif test_endpoint "$HEALTH_URL" "Health Endpoint" "application/json"; then
        SUCCESS=true
        echo "✅ Health endpoint successful!"
    elif test_endpoint "$HOME_URL" "Home Page" "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"; then
        SUCCESS=true
        echo "✅ Home page successful!"
    else
        RETRY_COUNT=$((RETRY_COUNT + 1))
        if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
            echo "⚠️ All endpoints failed, waiting 10 seconds before retry..."
            sleep 10
        fi
    fi
done

echo "====================================="
if [ "$SUCCESS" = true ]; then
    echo "🚀 Local warmup test completed successfully!"
    echo "💡 The application should now be ready to serve requests quickly."
    exit 0
else
    echo "❌ Local warmup test failed after $MAX_RETRIES attempts"
    echo "⚠️ Check if the application is running and accessible"
    echo ""
    echo "💡 For deployment warmup, use: .github/scripts/warmup-application.sh"
    exit 1
fi
