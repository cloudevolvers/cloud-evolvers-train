#!/bin/bash

# Professional Image Download Script for Cloud Evolvers
# This script downloads curated professional images suitable for the training platform

IMAGE_SERVER_DIR="/home/falk/repos/cloud-evolvers-train/image-server"
IMAGES_DIR="/home/falk/repos/cloud-evolvers-train/public/images"
LOG_FILE="$IMAGE_SERVER_DIR/download.log"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[Download]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[Download]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[Download]${NC} $1"
}

print_error() {
    echo -e "${RED}[Download]${NC} $1"
}

# Ensure images directory exists
mkdir -p "$IMAGES_DIR"

print_status "🚀 Starting professional image download for Cloud Evolvers..."

# High-quality free professional images from various sources
declare -A PROFESSIONAL_IMAGES=(
    # Cloud Computing & Technology
    ["cloud-server-modern.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center"
    ["cloud-computing-abstract.jpg"]="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop&crop=center"
    ["data-center-servers.jpg"]="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center"
    ["network-cables-technology.jpg"]="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center"
    ["azure-cloud-concept.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center"
    
    # Professional Training & Business
    ["business-training-session.jpg"]="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center"
    ["professional-presentation.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
    ["team-meeting-modern.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center"
    ["business-collaboration.jpg"]="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center"
    ["digital-workspace.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=center"
    
    # Technology & Innovation
    ["laptop-coding-modern.jpg"]="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center"
    ["tech-innovation-concept.jpg"]="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center"
    ["digital-transformation.jpg"]="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center"
    ["software-development.jpg"]="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center"
    ["computer-programming.jpg"]="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&h=1080&fit=crop&crop=center"
    
    # Professional Environment
    ["modern-office-space.jpg"]="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center"
    ["business-meeting-room.jpg"]="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop&crop=center"
    ["professional-workspace.jpg"]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop&crop=center"
    ["team-collaboration-office.jpg"]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center"
    ["business-success-concept.jpg"]="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
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

# Download all professional images
total_images=${#PROFESSIONAL_IMAGES[@]}
downloaded_count=0
skipped_count=0
failed_count=0

print_status "📊 Starting download of $total_images professional images..."

for filename in "${!PROFESSIONAL_IMAGES[@]}"; do
    url="${PROFESSIONAL_IMAGES[$filename]}"
    
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
    sleep 0.5
done

# Summary
print_status "📋 Download Summary:"
print_success "✅ Downloaded: $downloaded_count images"
print_warning "⏭️  Skipped (existing): $skipped_count images"
if [ $failed_count -gt 0 ]; then
    print_error "❌ Failed: $failed_count images"
fi

# Update image server with new files
if command -v curl > /dev/null 2>&1; then
    print_status "🔄 Updating image server inventory..."
    if curl -s "http://localhost:3001/downloaded" > /dev/null 2>&1; then
        current_count=$(curl -s "http://localhost:3001/downloaded" | python3 -c "import sys, json; print(json.load(sys.stdin)['count'])" 2>/dev/null || echo "unknown")
        print_success "📊 Image server now has $current_count total images"
    else
        print_warning "⚠️  Image server not responding (may not be running)"
        print_status "💡 Start with: npm run images"
    fi
fi

# Create image catalog
print_status "📝 Creating image catalog..."
catalog_file="$IMAGES_DIR/catalog.json"
{
    echo "{"
    echo "  \"generated\": \"$(date -Iseconds)\","
    echo "  \"total_images\": $(ls -1 "$IMAGES_DIR"/*.jpg 2>/dev/null | wc -l),"
    echo "  \"categories\": {"
    echo "    \"cloud_computing\": ["
    echo "      \"cloud-server-modern.jpg\","
    echo "      \"cloud-computing-abstract.jpg\","
    echo "      \"data-center-servers.jpg\","
    echo "      \"azure-cloud-concept.jpg\""
    echo "    ],"
    echo "    \"professional_training\": ["
    echo "      \"business-training-session.jpg\","
    echo "      \"professional-presentation.jpg\","
    echo "      \"team-meeting-modern.jpg\""
    echo "    ],"
    echo "    \"technology\": ["
    echo "      \"laptop-coding-modern.jpg\","
    echo "      \"tech-innovation-concept.jpg\","
    echo "      \"software-development.jpg\","
    echo "      \"computer-programming.jpg\""
    echo "    ],"
    echo "    \"business\": ["
    echo "      \"modern-office-space.jpg\","
    echo "      \"business-collaboration.jpg\","
    echo "      \"professional-workspace.jpg\","
    echo "      \"business-success-concept.jpg\""
    echo "    ]"
    echo "  }"
    echo "}"
} > "$catalog_file"

print_success "🎉 Professional image download complete!"
print_status "📁 Images saved to: $IMAGES_DIR"
print_status "📊 Catalog created: $catalog_file"
print_status "📋 Log file: $LOG_FILE"

if [ $downloaded_count -gt 0 ]; then
    print_success "🎨 Ready to use ${downloaded_count} new professional images in your website!"
fi