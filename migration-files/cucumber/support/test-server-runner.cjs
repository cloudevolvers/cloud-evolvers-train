const { spawn } = require('child_process');
const axios = require('axios');

let serverProcess = null;
const PORT = 4111;
const SERVER_URL = `http://localhost:${PORT}`;

// Function to start server
function startServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting test server...');
    
    // Set environment variables for the server
    const env = {
      ...process.env,
      FORCE_PORT: PORT.toString(),
      NODE_ENV: 'development',
      LOCAL_DEV: 'true'
    };

    // Start the server process
    serverProcess = spawn('node', ['app.js'], {
      env,
      stdio: 'pipe'
    });

    let serverReady = false;
    let actualPort = PORT;
    const timeout = setTimeout(() => {
      if (!serverReady) {
        console.log('❌ Server startup timed out after 90 seconds');
        reject(new Error('Server startup timeout'));
      }
    }, 90000); // 90 seconds

    // Monitor server output
    serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      process.stdout.write(`[SERVER] ${output}`);
      
      // Check for actual port used
      const portMatch = output.match(/Port (\d+) selected and available/);
      if (portMatch) {
        actualPort = parseInt(portMatch[1]);
        console.log(`📍 Server will use port: ${actualPort}`);
      }
      
      // Check if server is ready
      if (output.includes('WEBSITE READY') || output.includes('Ready') || output.includes('started') || output.includes('listening')) {
        if (!serverReady) {
          serverReady = true;
          clearTimeout(timeout);
          
          // Update the global SERVER_URL with actual port
          module.exports.SERVER_URL = `http://localhost:${actualPort}`;
          module.exports.PORT = actualPort;
          
          // Wait a bit more to ensure server is fully ready
          setTimeout(() => {
            console.log(`✅ Server started successfully on http://localhost:${actualPort}`);
            resolve();
          }, 2000);
        }
      }
    });

    serverProcess.stderr.on('data', (data) => {
      process.stderr.write(`[SERVER ERROR] ${data}`);
    });

    serverProcess.on('error', (error) => {
      clearTimeout(timeout);
      console.log('❌ Failed to start server:', error.message);
      reject(error);
    });

    serverProcess.on('exit', (code) => {
      clearTimeout(timeout);
      if (!serverReady) {
        console.log(`❌ Server exited with code ${code} before becoming ready`);
        reject(new Error(`Server exited with code ${code}`));
      }
    });
  });
}

// Function to stop server
function stopServer() {
  return new Promise((resolve) => {
    if (serverProcess) {
      console.log('🛑 Stopping test server...');
      
      // Try graceful shutdown first
      serverProcess.kill('SIGTERM');
      
      // Force kill after 5 seconds if still running
      setTimeout(() => {
        if (serverProcess) {
          console.log('🔥 Force killing server process...');
          serverProcess.kill('SIGKILL');
        }
      }, 5000);
      
      serverProcess.on('exit', () => {
        console.log('✅ Server stopped');
        serverProcess = null;
        resolve();
      });
      
      // Fallback resolution
      setTimeout(resolve, 6000);
    } else {
      resolve();
    }
  });
}

// Function to check if server is healthy
async function checkServerHealth() {
  try {
    const currentServerURL = module.exports.SERVER_URL;
    const response = await axios.get(`${currentServerURL}/api/test/health`, { timeout: 5000 });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

module.exports = {
  startServer,
  stopServer,
  checkServerHealth,
  SERVER_URL,
  PORT
};
