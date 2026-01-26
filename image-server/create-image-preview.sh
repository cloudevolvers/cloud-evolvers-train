#!/bin/bash

# Image Selection Helper Script
# Creates an HTML preview page to help choose the best images for different sections

IMAGES_DIR="/home/falk/repos/cloud-evolvers-train/public/images"
PREVIEW_FILE="/home/falk/repos/cloud-evolvers-train/image-preview.html"

print_status() {
    echo -e "\033[0;34m[Preview]\033[0m $1"
}

print_success() {
    echo -e "\033[0;32m[Preview]\033[0m $1"
}

print_status "🖼️  Creating image preview for Cloud Evolvers..."

# Read the catalog to get organized categories
if [ -f "$IMAGES_DIR/catalog.json" ]; then
    CATALOG_DATA=$(cat "$IMAGES_DIR/catalog.json")
else
    print_status "📋 Catalog not found, scanning directory..."
fi

# Create HTML preview
cat > "$PREVIEW_FILE" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Evolvers - Image Selection Preview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px;
        }
        
        .category {
            margin-bottom: 50px;
        }
        
        .category h2 {
            font-size: 1.8rem;
            color: #1f2937;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #10b981;
            display: inline-block;
        }
        
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .image-card {
            background: #f9fafb;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }
        
        .image-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .image-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        
        .image-info {
            text-align: center;
        }
        
        .image-name {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 5px;
            font-size: 0.9rem;
        }
        
        .image-size {
            color: #6b7280;
            font-size: 0.8rem;
        }
        
        .copy-button {
            background: #10b981;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            margin-top: 8px;
            transition: background 0.3s;
        }
        
        .copy-button:hover {
            background: #059669;
        }
        
        .stats {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .stats h3 {
            color: #1f2937;
            margin-bottom: 10px;
        }
        
        .stat-item {
            display: inline-block;
            margin: 0 20px;
            color: #6b7280;
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal img {
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 Cloud Evolvers Image Library</h1>
            <p>Professional images for your training platform</p>
        </div>
        
        <div class="content">
            <div class="stats">
                <h3>📊 Image Library Statistics</h3>
                <div class="stat-item"><strong id="total-count">0</strong> Total Images</div>
                <div class="stat-item"><strong id="category-count">0</strong> Categories</div>
                <div class="stat-item"><strong>Ready to Use</strong> in Production</div>
            </div>
EOF

# Add category sections dynamically
categories=("cloud_computing:☁️ Cloud Computing" "professional_training:🎓 Professional Training" "technology:💻 Technology" "business:🏢 Business")

for category_info in "${categories[@]}"; do
    IFS=':' read -r category_key category_title <<< "$category_info"
    
    cat >> "$PREVIEW_FILE" << EOF
            <div class="category">
                <h2>$category_title</h2>
                <div class="image-grid" id="$category_key">
                    <!-- Images will be loaded here -->
                </div>
            </div>
EOF
done

# Add JavaScript and closing HTML
cat >> "$PREVIEW_FILE" << 'EOF'
        </div>
    </div>
    
    <div class="modal" id="imageModal">
        <span class="close-modal" onclick="closeModal()">&times;</span>
        <img id="modalImage" src="" alt="">
    </div>
    
    <script>
        // Image data will be populated by the script
        const images = {};
        const categories = {
            cloud_computing: ["cloud-server-modern.jpg", "cloud-computing-abstract.jpg", "data-center-servers.jpg", "azure-cloud-concept.jpg", "azure-cloud-hero.jpg", "azure-cloud-infrastructure-modern.jpg"],
            professional_training: ["business-training-session.jpg", "professional-presentation.jpg", "team-meeting-modern.jpg", "professional-training.jpg", "professional-training-presentation.jpg", "professional-cloud-training-hero.jpg"],
            technology: ["laptop-coding-modern.jpg", "tech-innovation-concept.jpg", "software-development.jpg", "computer-programming.jpg", "laptop-coding.jpg", "developer-coding-workspace.jpg", "tech-innovation.jpg"],
            business: ["modern-office-space.jpg", "business-collaboration.jpg", "professional-workspace.jpg", "business-success-concept.jpg", "business-growth.jpg", "modern-office.jpg", "business-meeting-room.jpg", "business-team-collaboration-modern.jpg", "corporate-meeting-technology.jpg"]
        };
        
        function loadImages() {
            let totalImages = 0;
            
            Object.keys(categories).forEach(categoryKey => {
                const container = document.getElementById(categoryKey);
                const imageList = categories[categoryKey];
                
                imageList.forEach(imageName => {
                    const imageCard = createImageCard(imageName);
                    container.appendChild(imageCard);
                    totalImages++;
                });
            });
            
            document.getElementById('total-count').textContent = totalImages;
            document.getElementById('category-count').textContent = Object.keys(categories).length;
        }
        
        function createImageCard(imageName) {
            const card = document.createElement('div');
            card.className = 'image-card';
            
            const img = document.createElement('img');
            img.src = `/images/${imageName}`;
            img.alt = imageName;
            img.onerror = function() {
                this.style.display = 'none';
                card.style.opacity = '0.5';
            };
            
            const info = document.createElement('div');
            info.className = 'image-info';
            
            const name = document.createElement('div');
            name.className = 'image-name';
            name.textContent = imageName.replace('.jpg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            const size = document.createElement('div');
            size.className = 'image-size';
            size.textContent = 'Professional Quality';
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-button';
            copyBtn.textContent = 'Copy Path';
            copyBtn.onclick = (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(`/images/${imageName}`);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy Path', 2000);
            };
            
            info.appendChild(name);
            info.appendChild(size);
            info.appendChild(copyBtn);
            
            card.appendChild(img);
            card.appendChild(info);
            
            card.onclick = () => openModal(`/images/${imageName}`);
            
            return card;
        }
        
        function openModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('imageModal').classList.add('active');
        }
        
        function closeModal() {
            document.getElementById('imageModal').classList.remove('active');
        }
        
        // Close modal on click outside
        document.getElementById('imageModal').onclick = function(e) {
            if (e.target === this) {
                closeModal();
            }
        };
        
        // Load images on page load
        document.addEventListener('DOMContentLoaded', loadImages);
    </script>
</body>
</html>
EOF

print_success "✅ Image preview created successfully!"
print_status "📁 Preview file: $PREVIEW_FILE"
print_status "🌐 Open in browser: file://$PREVIEW_FILE"

# Try to open in default browser if possible
if command -v xdg-open > /dev/null 2>&1; then
    print_status "🚀 Opening preview in browser..."
    xdg-open "$PREVIEW_FILE" 2>/dev/null &
elif command -v open > /dev/null 2>&1; then
    print_status "🚀 Opening preview in browser..."
    open "$PREVIEW_FILE" 2>/dev/null &
else
    print_status "💡 Manually open: file://$PREVIEW_FILE"
fi

print_success "🎨 Image selection preview is ready!"
echo ""
echo "📋 Quick Actions:"
echo "   • View all images: file://$PREVIEW_FILE"
echo "   • Check server status: npm run images:status"
echo "   • Download more images: npm run images:download"
echo "   • View server logs: npm run images:logs"