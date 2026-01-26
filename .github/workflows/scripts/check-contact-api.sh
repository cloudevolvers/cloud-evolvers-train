#!/bin/bash

# 🔍 Contact API Health Check
# This script tests the contact form API endpoint after deployment

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔍 Cloud Evolvers Contact API Health Check${NC}"
echo "=================================================="
echo ""

# Wait 5 minutes for deployment
WAIT_TIME=300  # 5 minutes
echo -e "${YELLOW}⏳ Waiting ${WAIT_TIME} seconds (5 minutes) for deployment to complete...${NC}"
echo "   Started at: $(date)"
sleep $WAIT_TIME
echo "   Finished at: $(date)"
echo ""

# Staging API endpoint
STAGING_API="https://witty-desert-0f02b4903-staging.westeurope.2.azurestaticapps.net/api/submit-consultation"
PRODUCTION_API="https://witty-desert-0f02b4903.2.azurestaticapps.net/api/submit-consultation"

echo -e "${BLUE}📡 Testing Contact API Endpoints...${NC}"
echo ""

# Test Staging API
echo "🧪 Testing STAGING environment..."
echo "   URL: $STAGING_API"
echo ""

STAGING_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$STAGING_API" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-key-will-be-validated" \
  -d '{
    "name": "API Health Check",
    "email": "healthcheck@test.com",
    "company": "Automated Test",
    "message": "Testing API after secrets deployment",
    "phone": "0612345678"
  }' 2>&1 || echo "000")

STAGING_STATUS=$(echo "$STAGING_RESPONSE" | tail -n1)
STAGING_BODY=$(echo "$STAGING_RESPONSE" | head -n-1)

echo "   Status Code: $STAGING_STATUS"
echo "   Response: $STAGING_BODY"

if [[ "$STAGING_STATUS" == "200" ]] || [[ "$STAGING_STATUS" == "201" ]]; then
  echo -e "   ${GREEN}✅ STAGING API is working!${NC}"
  STAGING_OK=true
else
  echo -e "   ${RED}❌ STAGING API returned error${NC}"
  STAGING_OK=false
fi

echo ""
echo "---"
echo ""

# Test Production API
echo "🌍 Testing PRODUCTION environment..."
echo "   URL: $PRODUCTION_API"
echo ""

PROD_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$PRODUCTION_API" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-key-will-be-validated" \
  -d '{
    "name": "API Health Check",
    "email": "healthcheck@test.com",
    "company": "Automated Test",
    "message": "Testing API after secrets deployment",
    "phone": "0612345678"
  }' 2>&1 || echo "000")

PROD_STATUS=$(echo "$PROD_RESPONSE" | tail -n1)
PROD_BODY=$(echo "$PROD_RESPONSE" | head -n-1)

echo "   Status Code: $PROD_STATUS"
echo "   Response: $PROD_BODY"

if [[ "$PROD_STATUS" == "200" ]] || [[ "$PROD_STATUS" == "201" ]]; then
  echo -e "   ${GREEN}✅ PRODUCTION API is working!${NC}"
  PROD_OK=true
else
  echo -e "   ${RED}❌ PRODUCTION API returned error${NC}"
  PROD_OK=false
fi

echo ""
echo "=================================================="
echo -e "${BLUE}📊 Summary${NC}"
echo "=================================================="
echo ""

if [[ "$STAGING_OK" == true ]]; then
  echo -e "✅ Staging API:    ${GREEN}WORKING${NC}"
else
  echo -e "❌ Staging API:    ${RED}FAILED${NC}"
fi

if [[ "$PROD_OK" == true ]]; then
  echo -e "✅ Production API: ${GREEN}WORKING${NC}"
else
  echo -e "❌ Production API: ${RED}FAILED${NC}"
fi

echo ""

if [[ "$STAGING_OK" == true ]] && [[ "$PROD_OK" == true ]]; then
  echo -e "${GREEN}🎉 All systems operational!${NC}"
  exit 0
elif [[ "$STAGING_OK" == true ]] || [[ "$PROD_OK" == true ]]; then
  echo -e "${YELLOW}⚠️  Partial success - some APIs working${NC}"
  exit 1
else
  echo -e "${RED}❌ All APIs failed - check secrets configuration${NC}"
  exit 1
fi
