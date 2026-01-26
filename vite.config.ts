import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";

import sparkPlugin from "@github/spark/spark-vite-plugin";

import { ViteMcp } from "vite-plugin-mcp";
import { resolve } from 'path'

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // DO NOT REMOVE - temporarily disabled for faster dev startup
    // createIconImportProxy() as PluginOption,
    sparkPlugin() as PluginOption,
    ViteMcp(),
  ],
  server: {
    port: 4000,
    host: true,
    open: true, // Auto-open browser
    strictPort: false, // Allow fallback to other ports
    watch: {
      ignored: ['**/migration-files/**', '**/node_modules/**']
    },
    hmr: {
      overlay: true // Show errors in overlay
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@phosphor-icons/react'],
    exclude: ['@github/spark']
  },
  logLevel: 'info', // Show startup info
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
  build: {
    // Optimize for Azure Static Web Apps
    target: 'es2015',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Create smaller, more manageable chunks
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['@phosphor-icons/react']
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash:8].js',
        entryFileNames: 'assets/[name]-[hash:8].js',
        assetFileNames: 'assets/[name]-[hash:8].[ext]'
      }
    },
    // Reduce bundle size
    minify: 'esbuild',
    sourcemap: false, // Disable sourcemaps to reduce size
    assetsInlineLimit: 2048 // Inline smaller assets
  }
});
