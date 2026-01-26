#!/usr/bin/env node

/**
 * Test script to validate Microsoft Graph API integration for Cloud Evolvers
 * This script helps verify that the implementation is working correctly
 */

console.log('🧪 Cloud Evolvers Microsoft Graph API Test');
console.log('==========================================');

// Check environment variables
const clientId = process.env.VITE_AZURE_AD_CLIENT_ID || 'e66fa949-5dad-4067-b01b-587088d16796';
const tenantId = process.env.VITE_AZURE_AD_TENANT_ID || '34dd9821-1508-4858-974c-e5fd1493a58f';

console.log(`✓ Client ID: ${clientId}`);
console.log(`✓ Tenant ID: ${tenantId}`);
console.log(`✓ Authority URL: https://login.microsoftonline.com/${tenantId}`);

// Check if running on localhost
const isLocalhost = process.env.NODE_ENV !== 'production';
console.log(`✓ Environment: ${isLocalhost ? 'Development (localhost)' : 'Production'}`);

console.log('\n📋 Test Instructions:');
console.log('1. Open http://localhost:5000/contact in your browser');
console.log('2. Fill out the contact form with test data:');
console.log('   - Name: Test User');
console.log('   - Email: test@example.com');
console.log('   - Training: Azure Fundamentals (optional)');
console.log('   - Message: This is a test of the Microsoft Graph API integration');
console.log('3. Click "Send Message" to submit the form');
console.log('4. You should see a Microsoft login popup');
console.log('5. Sign in with a valid Microsoft account that has email sending permissions');
console.log('6. Check if the email is sent successfully');

console.log('\n⚠️  Important Notes:');
console.log('- The email will be sent FROM the signed-in user\'s mailbox');
console.log('- The signed-in user must have permission to send emails');
console.log('- The email will be sent TO training@cloudevolvers.com');
console.log('- A copy will be saved in the sender\'s Sent Items folder');

console.log('\n🔧 Troubleshooting:');
console.log('- If login fails: Check Azure AD app registration permissions');
console.log('- If email fails: Verify the signed-in account has Exchange/mail permissions');
console.log('- If network errors: Check internet connection and firewall settings');
console.log('- Check browser console for detailed error messages');

console.log('\n🎯 Expected Result:');
console.log('✅ Form submission successful');
console.log('✅ Email sent to training@cloudevolvers.com');
console.log('✅ Success message displayed to user');
console.log('✅ Form fields reset after successful submission');
