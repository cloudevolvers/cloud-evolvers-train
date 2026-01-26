/**
 * Port Detection Utility
 * Automatically finds the next available port starting from a given port number
 */

import net from 'net';
import os from 'os';
import chalk from 'chalk';

/**
 * Check if a port is available
 * @param {number} port - Port number to check
 * @returns {Promise<boolean>} - True if port is available, false otherwise
 */
const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(false);
    });
  });
};

/**
 * Find the next available port starting from the given port
 * @param {number} startPort - Starting port number
 * @param {number} maxAttempts - Maximum number of ports to try (default: 100)
 * @returns {Promise<number>} - Available port number
 */
export const findAvailablePort = async (startPort, maxAttempts = 100) => {
  const appLog = (message, type = 'info') => {
    let formattedMessage;
    
    switch(type) {
      case 'success':
        formattedMessage = `${chalk.green('✅')} ${chalk.bold.green('[PORT]')} ${message}`;
        break;
      case 'error':
        formattedMessage = `${chalk.red('❌')} ${chalk.bold.red('[PORT]')} ${message}`;
        break;
      case 'warn':
        formattedMessage = `${chalk.yellow('⚠️')} ${chalk.bold.yellow('[PORT]')} ${message}`;
        break;
      case 'searching':
        formattedMessage = `${chalk.blue('🔍')} ${chalk.bold.blue('[PORT]')} ${message}`;
        break;
      default:
        formattedMessage = `${chalk.blue('ℹ️')} ${chalk.bold.blue('[PORT]')} ${message}`;
    }
    
    console.log(formattedMessage);
  };

  appLog(`Starting port detection from ${startPort}`, 'searching');
  
  for (let port = startPort; port < startPort + maxAttempts; port++) {
    const available = await isPortAvailable(port);
    
    if (available) {
      if (port === startPort) {
        appLog(`Port ${port} is available (first choice)`, 'success');
      } else {
        appLog(`Port ${startPort} was in use, found available port: ${port}`, 'warn');
      }
      return port;
    } else {
      appLog(`Port ${port} is in use, trying next...`);
    }
  }
  
  // If no port is found in the range, throw an error
  const errorMessage = `No available ports found in range ${startPort}-${startPort + maxAttempts - 1}`;
  appLog(errorMessage, 'error');
  throw new Error(errorMessage);
};

/**
 * Enhanced server startup with automatic port detection
 * @param {Object} server - Express server instance
 * @param {number} preferredPort - Preferred port number
 * @param {string} hostname - Hostname to bind to
 * @param {Function} callback - Callback function to execute after successful startup
 * @returns {Promise<Object>} - Object containing server instance and actual port used
 */
export const startServerWithPortDetection = async (server, preferredPort, hostname = 'localhost', callback) => {
  const appLog = (message, type = 'info') => {
    let formattedMessage;
    
    switch(type) {
      case 'success':
        formattedMessage = `${chalk.green('✅')} ${chalk.bold.green('[SERVER]')} ${message}`;
        break;
      case 'error':
        formattedMessage = `${chalk.red('❌')} ${chalk.bold.red('[SERVER]')} ${message}`;
        break;
      case 'warn':
        formattedMessage = `${chalk.yellow('⚠️')} ${chalk.bold.yellow('[SERVER]')} ${message}`;
        break;
      case 'heading':
        console.log(`\n${chalk.bgBlack.white.bold('═══════════════════════════════════════════════════════════════')}`);
        formattedMessage = `${chalk.bgBlack.white.bold('▶▶ [SERVER]')} ${chalk.bold.cyan(message)}`;
        break;
      default:
        formattedMessage = `${chalk.blue('ℹ️')} ${chalk.bold.blue('[SERVER]')} ${message}`;
    }
    
    console.log(formattedMessage);
  };

  try {
    // Find available port
    const actualPort = await findAvailablePort(preferredPort);
    
    // Start server on the available port
    return new Promise((resolve, reject) => {
      const httpServer = server.listen(actualPort, hostname, (err) => {
        if (err) {
          appLog(`Failed to start server on port ${actualPort}: ${err.message}`, 'error');
          reject(err);
          return;
        }
        
        appLog('SERVER STARTUP COMPLETE', 'heading');
        appLog(`Server running at ${chalk.underline.green(`http://${hostname}:${actualPort}`)}`, 'success');
        
        if (actualPort !== preferredPort) {
          appLog(`Note: Started on port ${actualPort} instead of preferred port ${preferredPort}`, 'warn');
        }
        
        // Execute callback if provided
        if (callback && typeof callback === 'function') {
          callback(actualPort, httpServer);
        }
        
        resolve({ server: httpServer, port: actualPort });
      });
      
      httpServer.on('error', (err) => {
        appLog(`Server error: ${err.message}`, 'error');
        reject(err);
      });
    });
    
  } catch (error) {
    throw new Error(`Port detection failed: ${error.message}`);
  }
};

/**
 * Get system information about port usage
 * @returns {Object} - System port information
 */
export const getPortInfo = () => {
  const networkInterfaces = os.networkInterfaces();
  
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    networkInterfaces: Object.keys(networkInterfaces),
    commonPorts: {
      development: [3000, 3001, 3002, 3003, 8000, 8080, 8081],
      production: [80, 443, 8080],
      database: [3306, 5432, 27017, 6379],
      other: [22, 21, 25, 53, 110, 143, 993, 995]
    }
  };
};
