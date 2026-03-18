#!/bin/bash

# Quick test script to download some professional images
# This script will use the bulk download functionality to get images for the website

echo "🚀 Starting bulk image download for Cloud Evolvers..."

# Test queries focused on our needs
QUERIES='[
    "cloud computing",
    "professional training", 
    "business meeting",
    "azure cloud",
    "digital transformation",
    "modern office",
    "technology innovation",
    "team collaboration",
    "business success",
    "professional development"
]'

# Make the bulk search request
echo "🔍 Searching for images across multiple categories..."

curl -X POST http://localhost:3001/bulk-search \
    -H "Content-Type: application/json" \
    -d "{
        \"queries\": $QUERIES,
        \"provider\": \"all\",
        \"perPage\": 10
    }" | python3 -m json.tool

echo ""
echo "✅ Bulk search completed! Check the image server logs for details:"
echo "   bun run images:logs"
echo ""
echo "📊 To see downloaded images:"
echo "   curl http://localhost:3001/downloaded | python3 -m json.tool"
