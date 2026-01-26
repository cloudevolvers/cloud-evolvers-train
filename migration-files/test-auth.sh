#!/bin/bash

# Test authentication with the admin password
echo "Testing authentication..."

# Test the auth endpoint
echo "Attempting login with admin123..."
response=$(curl -s -X POST http://localhost:4001/api/auth \
  -H "Content-Type: application/json" \
  -d '{"password":"admin123"}' \
  -c cookies.txt)

echo "Response: $response"

# Check if authentication was successful
if echo "$response" | grep -q '"success":true'; then
    echo "✅ Authentication successful!"
    
    # Try to access admin endpoint with cookie
    echo "Testing admin access..."
    admin_response=$(curl -s http://localhost:4001/admin -b cookies.txt)
    
    if echo "$admin_response" | grep -q "admin"; then
        echo "✅ Admin access successful!"
    else
        echo "❌ Admin access failed"
    fi
else
    echo "❌ Authentication failed"
    echo "Full response: $response"
fi

# Clean up
rm -f cookies.txt

echo "Done testing authentication"
