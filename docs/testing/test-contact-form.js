#!/usr/bin/env node

// Test script for the contact form API endpoint

const testCases = [
  {
    name: 'Valid submission',
    data: {
      name: 'Test User',
      email: 'test@example.com',
      training: 'Azure Fundamentals',
      preferredDates: ['2025-09-15', '2025-09-20'],
      message: 'This is a test message',
      language: 'en'
    },
    expectedStatus: 200
  },
  {
    name: 'Missing name',
    data: {
      email: 'test@example.com',
      training: 'Azure Fundamentals',
      language: 'en'
    },
    expectedStatus: 400
  },
  {
    name: 'Missing email',
    data: {
      name: 'Test User',
      training: 'Azure Fundamentals',
      language: 'en'
    },
    expectedStatus: 400
  },
  {
    name: 'Missing training',
    data: {
      name: 'Test User',
      email: 'test@example.com',
      language: 'en'
    },
    expectedStatus: 400
  }
];

async function testEndpoint(testCase) {
  console.log(`\n🧪 Testing: ${testCase.name}`);
  console.log(`📤 Data:`, JSON.stringify(testCase.data, null, 2));
  
  try {
    const response = await fetch('http://localhost:7071/api/submit-consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testCase.data)
    });

    const responseData = await response.json();
    
    console.log(`📊 Status: ${response.status} (expected: ${testCase.expectedStatus})`);
    console.log(`📋 Response:`, JSON.stringify(responseData, null, 2));
    
    if (response.status === testCase.expectedStatus) {
      console.log('✅ Test passed');
    } else {
      console.log('❌ Test failed - unexpected status code');
    }
    
  } catch (error) {
    console.log('❌ Test failed with error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting Contact Form API Tests...');
  console.log('🔗 Testing endpoint: http://localhost:7071/api/submit-consultation');
  
  for (const testCase of testCases) {
    await testEndpoint(testCase);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between tests
  }
  
  console.log('\n🏁 Tests completed');
}

// Check if we're running this script directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTests().catch(console.error);
}
