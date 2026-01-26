import path from 'path';
import { fileURLToPath } from 'url';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🎯 CRITICAL: Enable standalone output for Azure App Service deployment
  output: 'standalone',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Disable ESLint during builds to avoid configuration issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimized image configuration for Azure deployment
  images: {
    // Set unoptimized to true to bypass Next.js image optimization which can cause 502 errors
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: ['localhost', '127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  // Exclude unnecessary files from output tracing to reduce bundle size
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
      '.git/**/*',
      'cypress/**/*',
      'test/**/*',
      '**/*.test.{js,ts,tsx}',
      '**/*.spec.{js,ts,tsx}',
    ],
  },
  
  // Add specific configuration for build process
  webpack: (config, { dev }) => {
    // Ensure proper path resolution for @/ alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    
    // Only apply optimizations for production builds
    if (!dev) {
      // Ignore dynamic imports that cause issues during build
      config.ignoreWarnings = [
        { module: /node_modules/ },
      ];
    }
    
    return config;
  },
  
  // Enhanced cache prevention settings
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/backend/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        // Add cache prevention for the root page too
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
}

// Use ES module export
export default nextConfig;