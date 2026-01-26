#!/bin/bash

# Working Graph API Email Test Script
# Based on xEvolve app's successful implementation

set -e  # Exit on any error

# Load environment variables manually
source .env 2>/dev/null || true

# Configuration
CLIENT_ID="${VITE_AZURE_AD_CLIENT_ID:-e66fa949-5dad-4067-b01b-587088d16796}"
TENANT_ID="${VITE_AZURE_AD_TENANT_ID:-34dd9821-1508-4858-974c-e5fd1493a58f}"
CLIENT_SECRET="${VITE_AZURE_AD_CLIENT_SECRET:-Vyi8Q~P7zchW4g3UZZzVHB5ZmI3giOQw0OvbpanL}"
SENDER_EMAIL="${VITE_EMAIL_SENDER:-internalautomation@xevolve.io}"
RECIPIENT_EMAIL="${VITE_EMAIL_RECIPIENT:-yair@cloudevolvers.com}"

echo "🧪 Testing Microsoft Graph API Email (xEvolve App Pattern)"
echo "============================================================"
echo "📧 Client ID: $CLIENT_ID"
echo "🏢 Tenant ID: $TENANT_ID"
echo "📨 From: $SENDER_EMAIL"
echo "📬 To: $RECIPIENT_EMAIL"
echo "🔐 Secret: ${CLIENT_SECRET:0:8}..."
echo ""

# Step 1: Get Access Token
echo "🔐 Getting access token..."
TOKEN_RESPONSE=$(curl -s -X POST "https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "scope=https://graph.microsoft.com/.default" \
  -d "grant_type=client_credentials")

# Check if we got an access token
ACCESS_TOKEN=$(echo "$TOKEN_RESPONSE" | jq -r '.access_token // empty')

if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then
    echo "❌ Failed to get access token!"
    echo "Response: $TOKEN_RESPONSE"
    exit 1
fi

echo "✅ Access token obtained (${#ACCESS_TOKEN} chars)"

# Step 2: Send Email using xEvolve App Pattern
echo ""
echo "📧 Sending test email..."

EMAIL_PAYLOAD=$(cat << EOF
{
  "message": {
    "subject": "✅ Cloud Evolvers Test - Working xEvolve Pattern",
    "body": {
      "contentType": "HTML",
      "content": "<h2>Microsoft Graph API Test - Success!</h2><p>This email was sent using the <strong>xEvolve app pattern</strong> that works perfectly.</p><p><strong>Timestamp:</strong> $(date -Iseconds)</p><p><strong>Pattern:</strong> @azure/identity + TokenCredentialAuthenticationProvider</p><p><strong>Endpoint:</strong> /users/$SENDER_EMAIL/sendMail</p><p>If you receive this, the Cloud Evolvers implementation should work too! 🎉</p>"
    },
    "toRecipients": [
      {
        "emailAddress": {
          "address": "$RECIPIENT_EMAIL"
        }
      }
    ]
  },
  "saveToSentItems": true
}
EOF
)

SEND_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" \
  -X POST "https://graph.microsoft.com/v1.0/users/$SENDER_EMAIL/sendMail" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$EMAIL_PAYLOAD")

# Extract HTTP status
HTTP_STATUS=$(echo "$SEND_RESPONSE" | grep -o "HTTP_STATUS:[0-9]*" | cut -d: -f2)
RESPONSE_BODY=$(echo "$SEND_RESPONSE" | sed 's/HTTP_STATUS:[0-9]*$//')

echo "📡 HTTP Status: $HTTP_STATUS"

if [ "$HTTP_STATUS" -eq 202 ]; then
    echo "✅ Email sent successfully!"
    echo "📬 Email should arrive at $RECIPIENT_EMAIL shortly"
    echo ""
    echo "🎉 Success! The xEvolve pattern works perfectly."
    echo "Now we can fix the Cloud Evolvers frontend implementation."
elif [ "$HTTP_STATUS" -eq 400 ]; then
    echo "❌ Bad Request (400)"
    echo "Response: $RESPONSE_BODY"
    exit 1
elif [ "$HTTP_STATUS" -eq 401 ]; then
    echo "❌ Unauthorized (401) - Token or permissions issue"
    echo "Response: $RESPONSE_BODY"
    exit 1
elif [ "$HTTP_STATUS" -eq 403 ]; then
    echo "❌ Forbidden (403) - Missing Mail.Send permission"
    echo "Response: $RESPONSE_BODY"
    exit 1
else
    echo "❌ Unexpected status code: $HTTP_STATUS"
    echo "Response: $RESPONSE_BODY"
    exit 1
fi
