#!/bin/bash
# Monitor Cloud Evolvers deployment for 5 minutes

echo "🚀 Monitoring Cloud Evolvers Deployment"
echo "========================================"
echo "⏰ Monitoring for 5 minutes..."
echo ""

# URLs to check
DTA_URL="https://yellow-sand-086679203.2.azurestaticapps.net"
PROD_URL="https://yellow-plant-021712d03.2.azurestaticapps.net"

# Monitor for 5 minutes (300 seconds)
END_TIME=$((SECONDS + 300))

while [ $SECONDS -lt $END_TIME ]; do
    REMAINING=$((END_TIME - SECONDS))
    echo "⏰ Time remaining: ${REMAINING}s"
    
    # Check GitHub Actions status
    echo "📋 GitHub Actions Status:"
    if command -v gh >/dev/null 2>&1; then
        gh run list --workflow="deploy-swa.yml" --limit 1 2>/dev/null || echo "⚠️ GitHub CLI not available"
    fi
    
    echo ""
    echo "🔍 Testing DTA Environment..."
    if curl -sL --max-time 10 "$DTA_URL" | grep -q "Cloud Evolvers" > /dev/null 2>&1; then
        echo "✅ DTA IS LIVE! 🎉"
        echo "🌐 URL: $DTA_URL"
        
        # Check if it's the updated version
        if curl -sL --max-time 10 "$DTA_URL" | grep -q "Training Platform" > /dev/null 2>&1; then
            echo "🚀 Updated version deployed successfully!"
            break
        fi
    else
        echo "⏳ DTA still deploying..."
    fi
    
    echo ""
    echo "🔍 Testing Production Environment..."
    if curl -sL --max-time 10 "$PROD_URL" | grep -q "Cloud Evolvers" > /dev/null 2>&1; then
        echo "✅ Production is also LIVE! 🎉"
        echo "🌐 URL: $PROD_URL"
    else
        echo "⏳ Production still deploying..."
    fi
    
    echo ""
    echo "===========================================" 
    sleep 30  # Check every 30 seconds
done

echo ""
echo "⏰ Monitoring complete!"
echo ""
echo "🎯 Final Status Check:"
echo "• DTA: $DTA_URL"  
echo "• PROD: $PROD_URL"
echo ""
echo "🌟 Your Cloud Evolvers training platform should now be live!"
