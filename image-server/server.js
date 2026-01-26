import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeApiKeys } from './src/services/keyVaultService.js';
import { setupRoutes } from './src/routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize and start server
const startServer = async () => {
    try {
        // Initialize API keys from Key Vault
        await initializeApiKeys();
        
        // Setup all routes
        setupRoutes(app);
        
        // Start listening
        app.listen(PORT, () => {
            console.log(`🚀 Cloud Evolvers Image Server running on port ${PORT}`);
            console.log(`📍 Health check: http://localhost:${PORT}/health`);
            console.log(`🔍 Search API: http://localhost:${PORT}/search?query=cloud%20computing`);
            console.log(`📥 Download API: http://localhost:${PORT}/download`);
            console.log(`📊 Downloaded images: http://localhost:${PORT}/downloaded`);
            console.log(`🔍 Service images API: http://localhost:${PORT}/api/images/service/unsplash`);
            console.log(`📊 All images API: http://localhost:${PORT}/api/images/all`);
            console.log(`🔍 Bulk search API: http://localhost:${PORT}/bulk-search`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer().catch(console.error);