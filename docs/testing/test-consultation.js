const fetch = require('isomorphic-fetch');

// Test the submit-consultation API
async function testConsultationAPI() {
    const apiUrl = 'http://localhost:7071/api/submit-consultation';
    const apiKey = 'dev-cloudevolvers-api-key-2024-secure';

    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        training: 'Azure Fundamentals',
        phone: '+1234567890',
        company: 'Test Company',
        message: 'This is a test consultation request'
    };

    try {
        console.log('Testing consultation API...');
        console.log('URL:', apiUrl);
        console.log('API Key:', apiKey.substring(0, 10) + '...');

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(testData)
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        const responseText = await response.text();
        console.log('Response body:', responseText);

        try {
            const responseJson = JSON.parse(responseText);
            console.log('Parsed response:', responseJson);
        } catch (parseError) {
            console.log('Response is not valid JSON');
        }

    } catch (error) {
        console.error('Test failed:', error);
    }
}

testConsultationAPI();
