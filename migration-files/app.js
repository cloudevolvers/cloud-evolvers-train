import next from 'next';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env files
dotenv.config({ path: path.join(__dirname, '.env.local') });
dotenv.config({ path: path.join(__dirname, '.env') });

// Boot start time
const bootStartTime = Date.now();

// Beautiful ASCII Art Header for xEvolve Website
console.log('\n' + chalk.magenta('╔══════════════════════════════════════════════════════════════════════════════╗'));
console.log(chalk.magenta('║                                                                              ║'));
console.log(chalk.magenta('║   ██╗  ██╗███████╗██╗   ██╗ ██████╗ ██╗    ██╗   ██╗███████╗                ║'));
console.log(chalk.magenta('║   ╚██╗██╔╝██╔════╝██║   ██║██╔═══██╗██║    ██║   ██║██╔════╝                ║'));
console.log(chalk.magenta('║    ╚███╔╝ █████╗  ██║   ██║██║   ██║██║    ██║   ██║█████╗                  ║'));
console.log(chalk.magenta('║    ██╔██╗ ██╔══╝  ╚██╗ ██╔╝██║   ██║██║    ╚██╗ ██╔╝██╔══╝                  ║'));
console.log(chalk.magenta('║   ██╔╝ ██╗███████╗ ╚████╔╝ ╚██████╔╝███████╗╚████╔╝ ███████╗                ║'));
console.log(chalk.magenta('║   ╚═╝  ╚═╝╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═══╝  ╚══════╝                ║'));
console.log(chalk.magenta('║                                                                              ║'));
console.log(chalk.magenta('║') + chalk.white.bold('                        Corporate Website & Showcase                          ') + chalk.magenta('║'));
console.log(chalk.magenta('║') + chalk.gray('                           Next.js Marketing Platform                         ') + chalk.magenta('║'));
console.log(chalk.magenta('║                                                                              ║'));
console.log(chalk.magenta('╚══════════════════════════════════════════════════════════════════════════════╝'));
console.log(chalk.yellow('🌐 Starting xEvolve Website Platform...') + '\n');

// Enhanced logging function with colors
const appLog = (message, type = 'info') => {
  const timestamp = new Date().toISOString();
  let coloredMessage;
  
  switch(type) {
    case 'success':
      coloredMessage = chalk.green(`✅ [WEBSITE] ${message}`);
      break;
    case 'error':
      coloredMessage = chalk.red(`❌ [WEBSITE] ${message}`);
      break;
    case 'warn':
      coloredMessage = chalk.yellow(`⚠️ [WEBSITE] ${message}`);
      break;
    case 'heading':
      console.log('\n' + chalk.magenta('═'.repeat(80)));
      coloredMessage = chalk.magenta.bold(`▶▶ [WEBSITE] ${message}`);
      break;
    case 'step':
      coloredMessage = chalk.cyan(`   📋 [WEBSITE] ${message}`);
      break;
    default:
      coloredMessage = chalk.blue(`ℹ️ [WEBSITE] ${message}`);
  }
  
  console.log(`${chalk.gray(timestamp)} ${coloredMessage}`);
};

// Boot step logging with timing
const logBootStep = (step, description, startStepTime) => {
  const elapsed = Date.now() - bootStartTime;
  const stepTime = startStepTime ? Date.now() - startStepTime : null;
  const stepTimeStr = stepTime ? chalk.gray(` (${stepTime}ms)`) : '';
  console.log(chalk.cyan(`   ${step}: ${description}${stepTimeStr} ${chalk.gray(`[total: ${elapsed}ms]`)}`));
};

// Port detection utility for Azure Web Apps
const detectAvailablePort = async (startPort) => {
  const net = await import('net');
  
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => {
        appLog(`Port ${chalk.yellow(port)} is available (first choice)`, 'success');
        resolve(port);
      });
    });
    
    server.on('error', () => {
      appLog(`Port ${chalk.yellow(startPort)} is busy, trying ${chalk.yellow(startPort + 1)}`, 'warn');
      detectAvailablePort(startPort + 1).then(resolve);
    });
  });
};

// Main application startup
async function startApp() {
  try {
    // Environment setup
    const envStartTime = Date.now();
    logBootStep("Step 1", "Configuring website environment...", envStartTime);
    
    const dev = process.env.NODE_ENV !== 'production';
    const requestedPort = parseInt(process.env.FORCE_PORT || process.env.PORT || '8080', 10);
    const hostname = process.env.HOSTNAME || 'localhost';
    
    appLog(`Environment: ${chalk.cyan(dev ? 'development' : 'production')}`);
    appLog(`Requested Port: ${chalk.yellow(requestedPort)}`);
    appLog(`Hostname: ${chalk.cyan(hostname)}`);
    
    // Port detection for Azure compatibility
    const portStartTime = Date.now();
    logBootStep("Step 2", "Starting port detection...", portStartTime);
    const port = await detectAvailablePort(requestedPort);
    appLog(`Port ${chalk.green(port)} selected and available`);

    // Auto-detect localhost and set appropriate settings
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0';

    // Store the port in environment variables for consistency
    process.env.DETECTED_PORT = port.toString();
    appLog(`Setting DETECTED_PORT environment variable to: ${chalk.yellow(port)}`, 'step');

    // Auto-disable secure cookies for localhost
    if (isLocalhost) {
      process.env.DISABLE_SECURE_COOKIES = 'true';
      appLog(`Auto-detected localhost - ${chalk.yellow('disabling secure cookies')} for compatibility`, 'step');
    }

    // Initialize Next.js
    const nextStartTime = Date.now();
    logBootStep("Step 3", "Initializing Next.js website engine...", nextStartTime);
    const app = next({ dev });
    const handle = app.getRequestHandler();

    await app.prepare();
    appLog('Next.js preparation complete', 'success');

    // Create HTTP server
    const serverStartTime = Date.now();
    logBootStep("Step 4", "Creating HTTP server...", serverStartTime);
    const { createServer } = await import('http');
    
    const server = createServer(async (req, res) => {
      try {
        // Log requests (skip static assets) with colors
        if (!req.url.startsWith('/_next/') && 
            !req.url.includes('.ico') && 
            !req.url.includes('.png') && 
            !req.url.includes('.jpg') && 
            !req.url.includes('.svg')) {
          const method = req.method === 'GET' ? chalk.blue(req.method.padEnd(6)) : 
                        req.method === 'POST' ? chalk.green(req.method.padEnd(6)) :
                        req.method === 'PUT' ? chalk.yellow(req.method.padEnd(6)) :
                        req.method === 'DELETE' ? chalk.red(req.method.padEnd(6)) : 
                        req.method === 'PATCH' ? chalk.magenta(req.method.padEnd(6)) :
                        req.method === 'OPTIONS' ? chalk.cyan(req.method.padEnd(6)) :
                        req.method === 'HEAD' ? chalk.gray(req.method.padEnd(6)) :
                        chalk.gray(req.method.padEnd(6));
          appLog(`${method} ${chalk.cyan(req.url)} [${chalk.gray(req.headers.host)}]`, 'step');
        }
        
        // Handle all requests with Next.js
        await handle(req, res);
      } catch (err) {
        appLog(`Request error: ${err.message}`, 'error');
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    // Start server
    const startupStartTime = Date.now();
    logBootStep("Step 5", "Starting website server...", startupStartTime);
    
    // For Azure Web Apps, we need to bind to 0.0.0.0, not localhost
    const bindHostname = process.env.NODE_ENV === 'production' ? '0.0.0.0' : hostname;
    appLog(`Binding to: ${chalk.cyan(bindHostname)}:${chalk.yellow(port)}`, 'step');
    
    server.listen(port, bindHostname, (err) => {
      if (err) {
        appLog(`Server startup failed: ${err.message}`, 'error');
        throw err;
      }

      // Calculate total boot time
      const totalBootTime = Date.now() - bootStartTime;
      
      console.log('\n' + chalk.magenta('╔══════════════════════════════════════════════════════════════════════════════╗'));
      console.log(chalk.magenta('║') + chalk.green.bold('                            🚀 WEBSITE READY 🚀                              ') + chalk.magenta('║'));
      console.log(chalk.magenta('║                                                                              ║'));
      console.log(chalk.magenta('║') + chalk.white('  Server URL: ') + chalk.cyan.underline(`http://localhost:${port}`) + chalk.white(' '.repeat(43 - port.toString().length)) + chalk.magenta('║'));
      console.log(chalk.magenta('║') + chalk.white('  Environment: ') + chalk.cyan(dev ? 'Development' : 'Production') + chalk.white(' '.repeat(40 - (dev ? 'Development' : 'Production').length)) + chalk.magenta('║'));
      console.log(chalk.magenta('║') + chalk.white('  Boot Time: ') + chalk.yellow(`${totalBootTime}ms`) + chalk.white(' '.repeat(46 - `${totalBootTime}ms`.length)) + chalk.magenta('║'));
      console.log(chalk.magenta('║') + chalk.white('  Started: ') + chalk.gray(new Date().toLocaleString()) + chalk.white(' '.repeat(47 - new Date().toLocaleString().length)) + chalk.magenta('║'));
      console.log(chalk.magenta('║                                                                              ║'));
      console.log(chalk.magenta('╚══════════════════════════════════════════════════════════════════════════════╝'));
      
      // Share environment info with the frontend
      process.env.NEXT_PUBLIC_NODE_ENV = process.env.NODE_ENV;
      process.env.NEXT_PUBLIC_IS_DEV = dev ? 'true' : 'false';
      
      appLog(`Environment variables configured:`, 'step');
      appLog(`  • NEXT_PUBLIC_NODE_ENV: ${chalk.cyan(process.env.NEXT_PUBLIC_NODE_ENV)}`, 'step');
      appLog(`  • NEXT_PUBLIC_IS_DEV: ${chalk.cyan(process.env.NEXT_PUBLIC_IS_DEV)}`, 'step');
      
      appLog('All API routes handled by Next.js API endpoints in src/app/api/', 'step');
      console.log(chalk.magenta('═'.repeat(80)) + '\n');
    });

    // Graceful shutdown handling
    const gracefulShutdown = async (signal) => {
      console.log('\n' + chalk.yellow('⚠️  Received shutdown signal: ') + chalk.red(signal));
      appLog('Initiating graceful shutdown...', 'warn');
      
      server.close(() => {
        appLog('HTTP server closed', 'success');
      });

      try {
        await app.close();
        appLog('Next.js closed', 'success');
        console.log(chalk.green('✅ Website shutdown complete'));
        process.exit(0);
      } catch (error) {
        appLog(`Error during shutdown: ${error.message}`, 'error');
        process.exit(1);
      }
    };

    // Register shutdown handlers
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    
    // Handle uncaught exceptions with colors
    process.on('uncaughtException', (err) => {
      console.log('\n' + chalk.red.bold('💥 UNCAUGHT EXCEPTION:'));
      appLog(`${err.message}`, 'error');
      console.error(chalk.red(err.stack));
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.log('\n' + chalk.red.bold('💥 UNHANDLED REJECTION:'));
      appLog(`At: ${promise}, reason: ${reason}`, 'error');
      process.exit(1);
    });

  } catch (error) {
    appLog(`Next.js preparation failed: ${error.message}`, 'error');
    console.error(chalk.red(error.stack));
    process.exit(1);
  }
}

// Start the application
startApp().catch((error) => {
  console.log('\n' + chalk.red.bold('💥 FATAL ERROR DURING STARTUP:'));
  appLog(`Application startup failed: ${error.message}`, 'error');
  console.error(chalk.red(error.stack));
  process.exit(1);
});

