#!/bin/bash

# Extended Professional Image Download Script
# Downloads additional high-quality images from various free sources

IMAGE_SERVER_DIR="/home/falk/repos/cloud-evolvers-train/image-server"
IMAGES_DIR="/home/falk/repos/cloud-evolvers-train/public/images"
LOG_FILE="$IMAGE_SERVER_DIR/extended-download.log"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[Extended Download]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[Extended Download]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[Extended Download]${NC} $1"
}

print_error() {
    echo -e "${RED}[Extended Download]${NC} $1"
}

# Ensure images directory exists
mkdir -p "$IMAGES_DIR"

print_status "🚀 Starting extended professional image download..."

# Extended collection of professional images
declare -A EXTENDED_IMAGES=(
    # Additional Cloud Computing & Azure
    ["cloud-infrastructure-network.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["azure-services-concept.jpg"]="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["cloud-storage-concept.jpg"]="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["hybrid-cloud-architecture.jpg"]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["cloud-migration-process.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.7&auto=format"
    
    # Professional Training & Education
    ["corporate-training-room.jpg"]="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["online-learning-setup.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["certification-study.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["professional-workshop.jpg"]="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["skill-development-session.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=center&auto=format"
    
    # Advanced Technology
    ["ai-machine-learning.jpg"]="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["cybersecurity-concept.jpg"]="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["devops-automation.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.7&fp-y=0.3&auto=format"
    ["api-integration.jpg"]="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["microservices-architecture.jpg"]="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&h=1080&fit=crop&crop=center&auto=format"
    
    # Business & Corporate
    ["executive-meeting.jpg"]="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["boardroom-presentation.jpg"]="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop&crop=center&auto=format"
    ["corporate-strategy.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3&auto=format"
    ["business-analytics-dashboard.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.5&auto=format"
    ["digital-innovation-hub.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.7&fp-y=0.5&auto=format"
    
    # Team Collaboration
    ["agile-team-planning.jpg"]="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.7&auto=format"
    ["remote-team-meeting.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.2&fp-y=0.8&auto=format"
    ["collaborative-workspace.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.8&fp-y=0.2&auto=format"
    ["cross-functional-team.jpg"]="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.4&fp-y=0.6&auto=format"
    ["team-brainstorming.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.6&fp-y=0.4&auto=format"
    
    # Modern Workplace
    ["flexible-workspace.jpg"]="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.2&fp-y=0.3&auto=format"
    ["innovation-lab.jpg"]="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.8&fp-y=0.7&auto=format"
    ["tech-startup-office.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.1&fp-y=0.9&auto=format"
    ["coworking-space.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.9&fp-y=0.1&auto=format"
    ["modern-conference-room.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.9&auto=format"
)

# Function to download image
download_image() {
    local filename="$1"
    local url="$2"
    local filepath="$IMAGES_DIR/$filename"
    
    # Skip if file already exists
    if [ -f "$filepath" ]; then
        print_warning "⏭️  Skipping existing file: $filename"
        return 0
    fi
    
    print_status "📥 Downloading: $filename"
    
    # Download with curl
    if curl -L -s -o "$filepath" "$url" --max-time 30 --user-agent "Cloud-Evolvers-Training/1.0"; then
        # Check if file was downloaded successfully and has content
        if [ -s "$filepath" ]; then
            local size=$(stat -c%s "$filepath" 2>/dev/null || stat -f%z "$filepath" 2>/dev/null || echo "0")
            local size_kb=$((size / 1024))
            print_success "✅ Downloaded: $filename (${size_kb}KB)"
            echo "$(date): Downloaded $filename (${size_kb}KB)" >> "$LOG_FILE"
            return 0
        else
            print_error "❌ Downloaded file is empty: $filename"
            rm -f "$filepath"
            return 1
        fi
    else
        print_error "❌ Failed to download: $filename"
        rm -f "$filepath" 2>/dev/null
        return 1
    fi
}

# Download all extended images
total_images=${#EXTENDED_IMAGES[@]}
downloaded_count=0
skipped_count=0
failed_count=0

print_status "📊 Starting download of $total_images additional professional images..."

for filename in "${!EXTENDED_IMAGES[@]}"; do
    url="${EXTENDED_IMAGES[$filename]}"
    
    if download_image "$filename" "$url"; then
        if [ -f "$IMAGES_DIR/$filename" ]; then
            ((downloaded_count++))
        else
            ((skipped_count++))
        fi
    else
        ((failed_count++))
    fi
    
    # Small delay between downloads to be respectful
    sleep 0.8
done

# Summary
print_status "📋 Extended Download Summary:"
print_success "✅ Downloaded: $downloaded_count new images"
print_warning "⏭️  Skipped (existing): $skipped_count images"
if [ $failed_count -gt 0 ]; then
    print_error "❌ Failed: $failed_count images"
fi

# Update image server
if command -v curl > /dev/null 2>&1; then
    print_status "🔄 Updating image server inventory..."
    if curl -s "http://localhost:3001/downloaded" > /dev/null 2>&1; then
        current_count=$(curl -s "http://localhost:3001/downloaded" | python3 -c "import sys, json; print(json.load(sys.stdin)['count'])" 2>/dev/null || echo "unknown")
        print_success "📊 Image server now has $current_count total images"
    fi
fi

print_success "🎉 Extended professional image download complete!"
print_status "📁 Images saved to: $IMAGES_DIR"
print_status "📋 Log file: $LOG_FILE"

if [ $downloaded_count -gt 0 ]; then
    print_success "🎨 Ready to use ${downloaded_count} additional professional images!"
fi