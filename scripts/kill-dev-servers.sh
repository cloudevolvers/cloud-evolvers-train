#!/bin/bash
# Kill existing dev servers without killing the current process

echo "🧹 Cleaning up existing dev servers..."

# Kill vite processes (but not the one we're about to start)
ps aux | grep -E "node.*vite.*5000" | grep -v "grep" | awk '{print $2}' | xargs -r kill -9 2>/dev/null
ps aux | grep -E "bin/vite.*5000" | grep -v "grep" | awk '{print $2}' | xargs -r kill -9 2>/dev/null

# Kill SWA processes
ps aux | grep -E "swa start" | grep -v "grep" | awk '{print $2}' | xargs -r kill -9 2>/dev/null

# Kill Azure Functions processes
ps aux | grep -E "func start" | grep -v "grep" | awk '{print $2}' | xargs -r kill -9 2>/dev/null

# Wait a moment for cleanup
sleep 1

echo "✓ Cleanup complete"
