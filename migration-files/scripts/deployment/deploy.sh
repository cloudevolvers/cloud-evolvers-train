#!/bin/bash
# This script runs after your app is deployed to Azure

# Create data directories
echo "Creating data directories in Azure..."
mkdir -p /home/site/wwwroot/data/services
mkdir -p /home/site/wwwroot/data/blog
mkdir -p /home/site/wwwroot/data/images
mkdir -p /home/site/wwwroot/data/showcase

# Create local storage directories
LOCAL_STORAGE_DIR=/home/site/wwwroot/.local
mkdir -p $LOCAL_STORAGE_DIR/services
mkdir -p $LOCAL_STORAGE_DIR/blog
mkdir -p $LOCAL_STORAGE_DIR/images
mkdir -p $LOCAL_STORAGE_DIR/showcase

# Set permissions
chmod -R 755 /home/site/wwwroot/data
chmod -R 755 $LOCAL_STORAGE_DIR

echo "Directory setup completed"
