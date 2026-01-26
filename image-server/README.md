# Cloud Evolvers Image Server

A dedicated, modular image search and download server for the Cloud Evolvers training platform. This server provides API endpoints to search and download professional images from multiple providers (Unsplash, Pexels, Pixabay) with Azure Key Vault integration for secure API key management.

## 🏗️ Architecture

The server is built with a modular architecture, keeping files under 250 lines each:

```
image-server/
├── server.js                          # Main server entry point (~40 lines)
├── src/
│   ├── services/
│   │   ├── keyVaultService.js         # Azure Key Vault integration
│   │   ├── imageSearchService.js      # Image search providers
│   │   └── imageDownloadService.js    # Image downloading utilities
│   ├── routes/
│   │   ├── index.js                   # Route setup
│   │   ├── healthRoute.js             # Health check endpoint
│   │   ├── searchRoute.js             # Image search endpoint
│   │   ├── downloadRoute.js           # Image download endpoint
│   │   ├── listRoute.js               # List downloaded images
│   │   └── bulkSearchRoute.js         # Bulk search endpoint
│   └── utils/
│       └── searchQueries.js           # Professional search queries
├── scripts/
│   └── bulk-download.js               # Bulk download automation
├── start-image-server.sh              # Server management script
└── test-bulk-download.sh              # Quick test script
```

## 🚀 Quick Start

### Using npm scripts (from main project):
```bash
# Start the image server
npm run images

# Check server status  
npm run images:status

# View server logs
npm run images:logs

# Stop the server
npm run images:stop

# Restart the server
npm run images:restart
```

### Using the startup script directly:
```bash
cd image-server

# Start server
./start-image-server.sh start

# Check status
./start-image-server.sh status

# View logs
./start-image-server.sh logs

# Stop server
./start-image-server.sh stop
```

## 🔑 API Keys & Configuration

The server uses Azure Key Vault (`xevolve-shared-kv`) for secure API key management:

- `xevolve-p-website-unsplash-access-key`
- `xevolve-p-website-pexels-api-key` 
- `xevolve-p-website-pixabay-api-key`

### Environment Variables:
```bash
# Azure Key Vault
KEY_VAULT_URL=https://xevolve-shared-kv.vault.azure.net/
USE_KEY_VAULT=true

# Fallback API Keys (if Key Vault unavailable)
UNSPLASH_API_KEY=your_key_here
PEXELS_API_KEY=your_key_here
PIXABAY_API_KEY=your_key_here

# Server Configuration
PORT=3001
NODE_ENV=development
```

## 📡 API Endpoints

### Health Check
```bash
GET /health
# Returns server status and available providers
```

### Search Images
```bash
GET /search?query=cloud%20computing&provider=all&page=1&per_page=30
# Search for images across providers
```

### Download Image
```bash
POST /download
Content-Type: application/json

{
  "imageUrl": "https://example.com/image.jpg",
  "filename": "cloud-computing-1.jpg",
  "metadata": {
    "query": "cloud computing",
    "provider": "unsplash",
    "author": "John Doe"
  }
}
```

### Bulk Search
```bash
POST /bulk-search
Content-Type: application/json

{
  "queries": ["cloud computing", "professional training", "azure"],
  "provider": "all",
  "perPage": 20
}
```

### List Downloaded Images
```bash
GET /downloaded
# Returns list of all downloaded images with metadata
```

## 🔍 Testing & Usage

### Quick Test:
```bash
# Test bulk search functionality
./test-bulk-download.sh

# Check health
curl http://localhost:3001/health | python3 -m json.tool

# List downloaded images
curl http://localhost:3001/downloaded | python3 -m json.tool
```

### Bulk Download Professional Images:
```bash
# Use the bulk download script for automated downloading
node scripts/bulk-download.js
```

## 📊 Features

- **Multi-Provider Search**: Unsplash, Pexels, Pixabay integration
- **Azure Key Vault**: Secure API key management
- **Bulk Operations**: Search and download multiple images efficiently  
- **Professional Queries**: Pre-configured search terms for business/tech content
- **Modular Architecture**: Clean, maintainable code structure
- **Background Processing**: Non-blocking server operations
- **Comprehensive Logging**: Detailed operation logs
- **Health Monitoring**: Built-in health checks and status reporting

## 🛠️ Development

The server runs independently from the main React app for optimal performance and build optimization. It automatically handles:

- API rate limiting and respectful usage
- File system operations and directory management
- Error handling and graceful failures
- Image metadata preservation
- Duplicate detection and prevention

## 📋 Image Categories

The server includes professionally curated search queries for:

- **Cloud Computing**: Azure, cloud infrastructure, data centers
- **Professional Training**: Business training, skill development, certifications  
- **Business & Technology**: Digital transformation, enterprise solutions
- **Team Collaboration**: Meetings, presentations, professional development

Perfect for creating a comprehensive image library for the Cloud Evolvers training platform! 🎉