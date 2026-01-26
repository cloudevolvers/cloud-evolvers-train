#!/bin/bash

# This script runs during deployment to Azure Web Apps for Linux
echo "Starting Azure Web App deployment setup..."

# Function to create directory and set permissions
create_directory() {
  local dir=$1
  local description=$2
  
  if [ ! -d "$dir" ]; then
    echo "Creating $description directory: $dir"
    mkdir -p "$dir"
    result=$?
    
    if [ $result -eq 0 ]; then
      echo "✅ Successfully created $dir"
      chmod -R 777 "$dir"
      echo "✅ Set permissions (777) for $dir"
    else
      echo "❌ Failed to create $dir (error code: $result)"
    fi
  else
    echo "✓ Directory already exists: $dir"
    chmod -R 777 "$dir"
    echo "✅ Updated permissions (777) for $dir"
  fi
}

echo "------------------ CONTENT DIRECTORIES -----------------"
# Create blog directories
create_directory "/home/data/blog" "blog content"
create_directory "/home/data/blog/posts" "blog posts"
create_directory "/home/data/blog/drafts" "blog drafts"
create_directory "/home/data/blog/metadata" "blog metadata"

# Create services directories
create_directory "/home/data/services" "services content" 
create_directory "/home/data/services/metadata" "services metadata"

echo "------------------ IMAGE DIRECTORIES ------------------"
# Create image directories
create_directory "/home/data/images" "main images"
create_directory "/home/data/images/blog" "blog images"
create_directory "/home/data/images/services" "services images"
create_directory "/home/data/images/showcase" "showcase images"

echo "------------------ SYSTEM DIRECTORIES -----------------"
# Create system directories
create_directory "/home/data/temp" "temporary files"
create_directory "/home/data/backup" "backup files"
create_directory "/home/data/logs" "log files"

echo "---------------- VERIFY PERMISSIONS ------------------"
# Verify permissions on the main directories
chmod -R 777 /home/data
echo "✅ Set permissions (777) for all /home/data directories"

# Create a storage info file for debugging
cat > /home/data/storage-info.txt << EOL
Directories created on: $(date)
Azure Web App: $WEBSITE_SITE_NAME
Directory structure:
- /home/data/blog - Blog content and posts
- /home/data/blog/posts - Individual blog post markdown files
- /home/data/blog/drafts - Draft blog posts
- /home/data/services - Services content and metadata
- /home/data/images/* - All image storage categories
- /home/data/temp - Temporary files
- /home/data/backup - Backup files
- /home/data/logs - Log files
EOL

echo "✅ Created storage information file"

# Report success
echo ""
echo "==================================================="
echo "✅ Azure Web App initialization complete"
echo "==================================================="
echo "Storage is configured at: /home/data"
echo "All directories have 777 permissions for web app access"
echo "==================================================="
