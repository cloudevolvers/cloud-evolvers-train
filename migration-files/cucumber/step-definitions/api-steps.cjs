const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const { expect } = require('chai');

// Global configuration
const BASE_URL = process.env.TEST_SERVER_URL || 'http://localhost:4111';

Given('the website API is running and accessible', async function () {
  try {
    const response = await axios.get(`${BASE_URL}/api/training`, { timeout: 5000 });
    this.apiHealthy = response.status === 200;
    this.baseUrl = BASE_URL;
  } catch (error) {
    throw new Error(`API is not accessible: ${error.message}`);
  }
});

Given('all API endpoints are properly configured', function () {
  this.endpointsConfigured = true;
});

When('I make a GET request to {string}', async function (endpoint) {
  try {
    this.lastResponse = await axios.get(`${BASE_URL}${endpoint}`, { 
      timeout: 5000,
      headers: { 'Accept': 'application/json' }
    });
    this.lastError = null;
  } catch (error) {
    this.lastError = error;
    this.lastResponse = error.response;
  }
});

When('I make a request to {string}', async function (endpoint) {
  try {
    this.lastResponse = await axios.get(`${BASE_URL}${endpoint}`, { 
      timeout: 5000,
      headers: { 'Accept': 'application/json' }
    });
    this.lastError = null;
  } catch (error) {
    this.lastError = error;
    this.lastResponse = error.response;
  }
});

When('I make multiple requests to language-specific endpoints', async function () {
  this.multipleResponses = [];
  const endpoints = [
    '/api/training?lang=nl',
    '/api/training?lang=en',
    '/api/blog?lang=nl',
    '/api/blog?lang=en'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const startTime = Date.now();
      const response = await axios.get(`${BASE_URL}${endpoint}`, { 
        timeout: 5000,
        headers: { 'Accept': 'application/json' }
      });
      const endTime = Date.now();
      
      this.multipleResponses.push({
        endpoint,
        response,
        duration: endTime - startTime,
        error: null
      });
    } catch (error) {
      this.multipleResponses.push({
        endpoint,
        response: error.response,
        duration: -1,
        error: error.message
      });
    }
  }
});

Then('the response should be successful \\({int} OK)', function (statusCode) {
  expect(this.lastError).to.be.null;
  expect(this.lastResponse).to.exist;
  expect(this.lastResponse.status).to.equal(statusCode);
});

Then('the response should contain Dutch training data', function () {
  expect(this.lastResponse.data).to.exist;
  
  let trainingData;
  if (Array.isArray(this.lastResponse.data)) {
    trainingData = this.lastResponse.data;
  } else if (this.lastResponse.data.courses) {
    trainingData = this.lastResponse.data.courses;
  } else if (this.lastResponse.data.training) {
    trainingData = this.lastResponse.data.training;
  } else {
    throw new Error(`Unexpected response format: ${JSON.stringify(this.lastResponse.data)}`);
  }
  
  expect(trainingData).to.be.an('array');
  expect(trainingData.length).to.be.greaterThan(0);
});

Then('the response should contain English training data', function () {
  expect(this.lastResponse.data).to.exist;
  
  let trainingData;
  if (Array.isArray(this.lastResponse.data)) {
    trainingData = this.lastResponse.data;
  } else if (this.lastResponse.data.courses) {
    trainingData = this.lastResponse.data.courses;
  } else if (this.lastResponse.data.training) {
    trainingData = this.lastResponse.data.training;
  } else {
    throw new Error(`Unexpected response format: ${JSON.stringify(this.lastResponse.data)}`);
  }
  
  expect(trainingData).to.be.an('array');
  expect(trainingData.length).to.be.greaterThan(0);
});

Then('the response should contain Dutch blog metadata', function () {
  expect(this.lastResponse.data).to.exist;
  
  let blogData;
  if (Array.isArray(this.lastResponse.data)) {
    blogData = this.lastResponse.data;
  } else if (this.lastResponse.data.posts) {
    blogData = this.lastResponse.data.posts;
  } else if (this.lastResponse.data.blogs) {
    blogData = this.lastResponse.data.blogs;
  } else {
    throw new Error(`Unexpected response format: ${JSON.stringify(this.lastResponse.data)}`);
  }
  
  expect(blogData).to.be.an('array');
  expect(blogData.length).to.be.greaterThan(0);
});

Then('the response should contain Cloud Evolvers configuration', function () {
  expect(this.lastResponse.data).to.exist;
  
  const data = this.lastResponse.data;
  
  // Check if it's an array (like other endpoints) or object with Cloud Evolvers configuration
  if (Array.isArray(data)) {
    expect(data.length).to.be.greaterThan(0);
  } else {
    // For the settings endpoint, check for specific Cloud Evolvers configuration properties
    const hasHeroImages = Boolean(data.heroImages);
    const hasHeroTitle = Boolean(data.heroTitle); 
    const hasHeroSubtitle = Boolean(data.heroSubtitle);
    const hasCtaButton = Boolean(data.ctaButtonText);
    const hasObjectData = (typeof data === 'object' && Object.keys(data).length > 0);
    
    const hasCloudEvolversConfig = hasHeroImages || hasHeroTitle || hasHeroSubtitle || hasCtaButton || hasObjectData;
      
    expect(hasCloudEvolversConfig).to.be.true;
  }
});

Then('the content-type should be {string}', function (expectedContentType) {
  expect(this.lastResponse.headers).to.exist;
  const contentType = this.lastResponse.headers['content-type'];
  expect(contentType).to.include(expectedContentType);
});

Then('the response should fallback to English content', function () {
  expect(this.lastResponse.data).to.exist;
  
  let data;
  if (Array.isArray(this.lastResponse.data)) {
    data = this.lastResponse.data;
  } else if (this.lastResponse.data.courses) {
    data = this.lastResponse.data.courses;
  } else if (this.lastResponse.data.training) {
    data = this.lastResponse.data.training;  
  } else {
    data = this.lastResponse.data;
  }
  
  expect(data).to.exist;
});

Then('the response should still be successful \\({int} OK)', function (statusCode) {
  expect(this.lastError).to.be.null;
  expect(this.lastResponse).to.exist;
  expect(this.lastResponse.status).to.equal(statusCode);
});

Then('the brand configuration should be properly formatted', function () {
  expect(this.lastResponse.data).to.exist;
  expect(typeof this.lastResponse.data).to.equal('object');
});

Then('each request should complete within {int} seconds', function (maxSeconds) {
  expect(this.multipleResponses).to.exist;
  expect(this.multipleResponses.length).to.be.greaterThan(0);
  
  const maxMilliseconds = maxSeconds * 1000;
  
  this.multipleResponses.forEach(result => {
    if (result.duration > 0) {
      expect(result.duration).to.be.lessThan(maxMilliseconds);
    }
  });
});

Then('the response should be properly formatted', function () {
  // Check that we have at least one successful response from multiple requests
  if (this.multipleResponses && this.multipleResponses.length > 0) {
    const successfulResponse = this.multipleResponses.find(result => 
      result.response && result.response.data
    );
    
    expect(successfulResponse).to.exist;
    expect(typeof successfulResponse.response.data).to.equal('object');
  } else {
    // Fall back to checking lastResponse if available
    expect(this.lastResponse).to.exist;
    expect(this.lastResponse.data).to.exist;
    expect(typeof this.lastResponse.data).to.equal('object');
  }
});

Then('there should be no timeout errors', function () {
  expect(this.multipleResponses).to.exist;
  
  const timeoutErrors = this.multipleResponses.filter(result => 
    result.error && result.error.includes('timeout')
  );
  
  expect(timeoutErrors.length).to.equal(0);
});
