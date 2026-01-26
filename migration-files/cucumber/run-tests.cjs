#!/usr/bin/env node

const { spawn } = require('child_process');
const { startServer, stopServer } = require('./support/test-server-runner.cjs');

async function runTests() {
  let serverStarted = false;
  
  try {
    console.log('🧪 Starting Dutch Localization Test Suite\n');
    
    // Start the server
    await startServer();
    serverStarted = true;
    
    console.log('\n🥒 Running Cucumber tests...\n');
    
    // Run Cucumber tests with dynamic server URL
    return new Promise((resolve) => {
      const { SERVER_URL } = require('./support/test-server-runner.cjs');
      
      const cucumber = spawn('npx', ['cucumber-js', '--config', 'cucumber/cucumber.config.cjs'], {
        stdio: 'inherit',
        cwd: process.cwd().replace('/cucumber', ''), // Ensure we're in the root directory
        env: {
          ...process.env,
          TEST_SERVER_URL: SERVER_URL
        }
      });
      
      cucumber.on('exit', async (code) => {
        console.log(`\n🧪 Tests completed with exit code: ${code}`);
        
        if (serverStarted) {
          console.log('\n🛑 Stopping test server...');
          await stopServer();
        }
        
        resolve(code);
      });
      
      cucumber.on('error', async (error) => {
        console.error('❌ Error running tests:', error);
        
        if (serverStarted) {
          await stopServer();
        }
        
        resolve(1);
      });
    });
    
  } catch (error) {
    console.error('❌ Failed to start test server:', error);
    
    if (serverStarted) {
      await stopServer();
    }
    
    return 1;
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  await stopServer();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  await stopServer();
  process.exit(0);
});

// Run tests
runTests().then((exitCode) => {
  process.exit(exitCode);
}).catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
