#!/bin/bash

cd /home/falk/repos/cloud-evolvers-train

# Start the dev server in the background
npm run dev &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
sleep 10

# Test the Azure Administrator pricing
echo "Testing Azure Administrator pricing..."
curl -s "http://localhost:4286/training/azure-administrator" | grep -o "€[0-9,.]* *[-–] *[0-9]*% *= *€[0-9,.]* *(was *€[0-9,.]*)*\|€[0-9,.]* *(was *€[0-9,.]*)*\|€[0-9,.]* *- *[0-9]*% *= *€[0-9,.]*" | head -5

echo -e "\n\nChecking if FrontendPricingService is loaded correctly..."
echo "The current prices should show Azure Administrator at €1595"

# Kill the server
kill $SERVER_PID 2>/dev/null || true
wait $SERVER_PID 2>/dev/null || true

echo "Test completed."
