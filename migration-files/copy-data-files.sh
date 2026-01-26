#!/bin/bash

# Script to copy content from src/data to /home/data on production
# Use in Azure Web App after deployment

echo "======================================================="
echo "  Content Copy Script - Copy src/data to /home/data"
echo "======================================================="

# Function to check if we're in production environment
is_production() {
  if [ -d "/home/data" ] && [ "$NODE_ENV" = "production" ]; then
    return 0  # true
  else
    return 1  # false
  fi
}

# Function to create directory if it doesn't exist
ensure_directory() {
  local dir=$1
  
  if [ ! -d "$dir" ]; then
    echo "Creating directory: $dir"
    mkdir -p "$dir"
    chmod -R 777 "$dir"
    echo "✅ Created directory with permissions: $dir"
  else
    echo "✅ Directory exists: $dir"
    chmod -R 777 "$dir"
  fi
}

# Function to copy files with proper error handling
copy_files() {
  local src=$1
  local dest=$2
  local type=$3
  
  if [ ! -d "$src" ]; then
    echo "❌ Source $type directory not found: $src"
    return 1
  fi
  
  ensure_directory "$dest"
  
  echo "Copying $type files from $src to $dest"
  cp -rv "$src"/* "$dest"/ 2>/dev/null
  
  if [ $? -eq 0 ]; then
    echo "✅ Successfully copied $type files"
    chmod -R 777 "$dest"
    echo "✅ Set permissions for $dest"
  else
    echo "⚠️ No $type files found or error during copy"
  fi
}

# Main script execution
main() {
  # Source and destination paths
  local SRC_DIR="$(pwd)/src/data"
  local DEST_DIR="/home/data"
  
  echo "Source directory: $SRC_DIR"
  echo "Destination directory: $DEST_DIR"
  
  # Check if we're in production
  if ! is_production; then
    echo "❌ Not in production environment or /home/data not found."
    echo "This script is intended to be run in Azure Web App environment."
    exit 1
  fi
  
  echo "================ COPYING BLOG CONTENT ================="
  copy_files "$SRC_DIR/blog" "$DEST_DIR/blog" "blog"
  
  echo "================ COPYING SERVICES CONTENT ============="
  copy_files "$SRC_DIR/services" "$DEST_DIR/services" "services"
  
  echo "================ COPYING IMAGES ======================="
  # Main images directory
  ensure_directory "$DEST_DIR/images"
  
  # Copy blog images
  copy_files "$SRC_DIR/images/blog" "$DEST_DIR/images/blog" "blog images"
  
  # Copy services images
  copy_files "$SRC_DIR/images/services" "$DEST_DIR/images/services" "services images"
  
  # Copy showcase images
  copy_files "$SRC_DIR/images/showcase" "$DEST_DIR/images/showcase" "showcase images"
  
  echo "================ CONTENT COPY COMPLETE ================"
  echo "✅ All content files have been copied to $DEST_DIR"
  echo "✅ Permissions set to 777 for all directories"
}

# Execute the main function
main

exit 0
