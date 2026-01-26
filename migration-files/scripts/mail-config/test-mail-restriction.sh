#!/bin/bash

# Define color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory of the script and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"

# Load environment variables
ENV_FILE="$PROJECT_ROOT/.env.local"

if [ ! -f "$ENV_FILE" ]; then
  echo -e "${RED}Error: .env.local file not found at $ENV_FILE${NC}"
  exit 1
fi

# Source the environment file - improved method to avoid issues
echo -e "${BLUE}Loading environment variables...${NC}"
while IFS='=' read -r key value || [ -n "$key" ]; do
  # Skip comments and empty lines
  [[ $key =~ ^[[:space:]]*# ]] && continue
  [[ -z "${key// }" ]] && continue
  
  # Clean up key and value
  key=$(echo "$key" | xargs)
  value=$(echo "$value" | xargs)
  
  # Remove quotes if present
  value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//")
  
  # Export the variable
  export "$key=$value"
done < "$ENV_FILE"

# Get access token
echo -e "${BLUE}Getting access token...${NC}"
TOKEN_RESPONSE=$(curl -s -X POST \
  "https://login.microsoftonline.com/$AZURE_AD_TENANT_ID/oauth2/v2.0/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=$AZURE_AD_CLIENT_ID&scope=https://graph.microsoft.com/.default&client_secret=$AZURE_AD_CLIENT_SECRET&grant_type=client_credentials")

ACCESS_TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$ACCESS_TOKEN" ]; then
  echo -e "${RED}Error: Failed to get access token.${NC}"
  echo -e "${RED}Response: $TOKEN_RESPONSE${NC}"
  exit 1
else
  echo -e "${GREEN}Successfully obtained access token.${NC}"
fi

# Function to send test email and display status
send_test_email() {
  local recipient=$1
  local domain=$2
  local domain_type=$3
  
  echo -e "\n${YELLOW}Testing email to ${domain_type} domain (${recipient})...${NC}"
  
  # Print headers being sent to Graph API
  echo -e "${BLUE}Headers being sent to Graph API:${NC}"
  echo -e "${BLUE}  Authorization: Bearer ${ACCESS_TOKEN:0:15}...${NC}"
  echo -e "${BLUE}  Content-Type: application/json${NC}"
  
  # Use temporary file for response body
  local temp_file=$(mktemp)
  
  # Send request and capture HTTP status code
  local status_code=$(curl -s -X POST \
    "https://graph.microsoft.com/v1.0/users/$EMAIL_SENDER/sendMail" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
      \"message\": {
        \"subject\": \"Test Email to ${domain_type} Domain (${domain})\",
        \"body\": {
          \"contentType\": \"HTML\",
          \"content\": \"This is a test email to verify domain restrictions are working.\"
        },
        \"toRecipients\": [
          {
            \"emailAddress\": {
              \"address\": \"${recipient}\"
            }
          }
        ]
      },
      \"saveToSentItems\": true
    }" \
    -o "$temp_file" \
    -w "%{http_code}")
  
  # Display result based on status code
  if [[ $status_code -ge 200 && $status_code -lt 300 ]]; then
    echo -e "${GREEN}SUCCESS (Status code: $status_code) - Email to ${recipient} accepted${NC}"
  else
    echo -e "${RED}FAILED (Status code: $status_code) - Email to ${recipient} rejected${NC}"
    echo -e "${RED}Response: $(cat "$temp_file")${NC}"
  fi
  
  # Clean up
  rm -f "$temp_file"
}

# Test emails to different domains
send_test_email "yair@xevolve.io" "xevolve.io" "allowed"
send_test_email "yairknijn@gmail.com" "gmail.com" "external"
send_test_email "yair@spotcloud.nl" "spotcloud.nl" "allowed" # Changed to "allowed" since spotcloud.nl is in allowedDomains

echo -e "\n${BLUE}Test Summary:${NC}"
echo -e "${YELLOW}If mail flow restrictions are working:${NC}"
echo -e "  - ${GREEN}Email to yair@xevolve.io should be ACCEPTED (status code 2xx)${NC}"
echo -e "  - ${GREEN}Email to yair@spotcloud.nl should be ACCEPTED (status code 2xx)${NC}" 
echo -e "  - ${RED}Email to yairknijn@gmail.com should be REJECTED (non-2xx status code)${NC}"
