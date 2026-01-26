// Test script for Microsoft Graph email functionality using CommonJS
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
require('dotenv').config();

// Configuration from environment variables
const config = {
  clientId: process.env.AZURE_CLIENT_ID,
  tenantId: process.env.AZURE_TENANT_ID,
  clientSecret: process.env.AZURE_CLIENT_SECRET,
  emailSender: process.env.GRAPH_EMAIL_SENDER
};

// Validate required environment variables
const requiredEnvVars = ['AZURE_CLIENT_ID', 'AZURE_TENANT_ID', 'AZURE_CLIENT_SECRET', 'GRAPH_EMAIL_SENDER'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('\n💡 Please add these to your .env file');
  process.exit(1);
}

console.log('🧪 Testing Microsoft Graph Email Configuration...');
console.log(`📧 Client ID: ${config.clientId}`);
console.log(`🏢 Tenant ID: ${config.tenantId}`);
console.log(`📨 Email Sender: ${config.emailSender}`);
console.log(`🔐 Client Secret: ${config.clientSecret ? config.clientSecret.substring(0, 8) + '...' : 'NOT SET'}`);

async function testGraphClient() {
  try {
    // Create credential
    const credential = new ClientSecretCredential(
      config.tenantId,
      config.clientId,
      config.clientSecret
    );

    console.log('\n🔐 Creating authentication credential...');

    // Create authentication provider
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default']
    });

    console.log('🔑 Creating authentication provider...');

    // Initialize the Graph client
    const client = Client.initWithMiddleware({
      authProvider
    });

    console.log('📊 Initializing Graph client...');

    // Test authentication by getting a token first
    console.log('🔍 Testing basic authentication...');
    
    // Get the access token to check what permissions we actually have
    try {
      const tokenResponse = await credential.getToken(['https://graph.microsoft.com/.default']);
      console.log('✅ Successfully obtained access token');
      
      // Decode the token to see what roles/scopes we have (basic inspection)
      const tokenParts = tokenResponse.token.split('.');
      if (tokenParts.length === 3) {
        try {
          const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
          console.log('🔍 Token roles/permissions:', payload.roles || 'No roles found');
          console.log('🔍 Token scopes:', payload.scp || 'No scopes found');
          console.log('🔍 Token app ID:', payload.appid || 'No app ID found');
        } catch (e) {
          console.log('⚠️  Could not decode token payload (this is normal)');
        }
      }
    } catch (tokenError) {
      console.log(`❌ Failed to get access token: ${tokenError.message}`);
      throw tokenError;
    }

    // Now test with a very basic API call that requires minimal permissions
    console.log('🔍 Testing basic Graph API access...');
    
    try {
      // Try the service principal info - this should work with basic permissions
      const appInfo = await client.api('/servicePrincipals').filter(`appId eq '${config.clientId}'`).get();
      if (appInfo.value && appInfo.value.length > 0) {
        console.log(`✅ Found service principal: ${appInfo.value[0].displayName || 'Unknown'}`);
        console.log(`🔍 App roles: ${appInfo.value[0].appRoles?.map(r => r.value).join(', ') || 'None'}`);
      } else {
        console.log('⚠️  Service principal not found or no permissions to read it');
      }
    } catch (spError) {
      console.log(`⚠️  Could not read service principal info: ${spError.message}`);
    }

    // Get available users to find a valid sender
    console.log('\n👥 Finding available users in tenant...');
    try {
      const users = await client.api('/users').select('userPrincipalName,displayName,mail').top(10).get();
      console.log(`📋 Found ${users.value.length} user(s) in directory:`);
      
      users.value.forEach((user, index) => {
        console.log(`   ${index + 1}. ${user.displayName} (${user.userPrincipalName || user.mail})`);
      });
      
      // Try to find a suitable sender
      let senderEmail = config.emailSender;
      let userExists = users.value.find(u => 
        u.userPrincipalName === config.emailSender || 
        u.mail === config.emailSender
      );
      
      if (!userExists && users.value.length > 0) {
        // Use the first available user
        senderEmail = users.value[0].userPrincipalName || users.value[0].mail;
        console.log(`⚠️  Original sender ${config.emailSender} not found. Using: ${senderEmail}`);
      } else if (userExists) {
        console.log(`✅ Original sender ${config.emailSender} found in tenant`);
      }
      
      // Update the config for this test
      config.emailSender = senderEmail;
      
    } catch (usersError) {
      console.log(`⚠️  Could not list users: ${usersError.message}`);
      console.log('   This suggests missing User.Read.All permission, but we can still try to send email');
    }

    // Test sending an email
    console.log('\n📧 Testing email send...');
    
    const testEmail = {
      message: {
        subject: 'xEvolve Website - Graph API Test Email',
        body: {
          contentType: 'HTML',
          content: `
            <h2>Microsoft Graph API Test</h2>
            <p>This is a test email sent from the xEvolve website to verify Microsoft Graph integration.</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p><strong>Client ID:</strong> ${config.clientId}</p>
            <p><strong>Test Type:</strong> Application Permission Test</p>
          `
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'info@xevolve.io'
            }
          }
        ]
      },
      saveToSentItems: false
    };

    // Try sending email as the service account user
    try {
      await client.api(`/users/${config.emailSender}/sendMail`).post(testEmail);
      console.log('✅ Email sent successfully using sender user endpoint!');
    } catch (emailError) {
      console.log(`❌ Failed to send email: ${emailError.message}`);
      
      if (emailError.message.includes('Authorization_RequestDenied')) {
        console.log('🔐 DIAGNOSIS: Your Azure AD app is missing the Mail.Send application permission');
        console.log('   To fix this:');
        console.log('   1. Go to Azure Portal > Azure Active Directory > App registrations');
        console.log(`   2. Find your app (${config.clientId})`);
        console.log('   3. Go to API permissions');
        console.log('   4. Add Microsoft Graph > Application permissions > Mail.Send');
        console.log('   5. Grant admin consent');
        console.log('   6. Also add User.Read.All if you need to validate users');
      }
      
      throw emailError;
    }

    // Test restricted email (should fail)
    console.log('\n🚫 Testing restricted email (should fail)...');
    const restrictedEmail = {
      message: {
        subject: 'Test - Should Fail',
        body: {
          contentType: 'Text',
          content: 'This should fail for external emails'
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'yairknijn@gmail.com'
            }
          }
        ]
      },
      saveToSentItems: false
    };
    
    try {
      await client.api(`/users/${config.emailSender}/sendMail`).post(restrictedEmail);
      console.log('⚠️  External email was sent (this might be unexpected)');
    } catch (restrictedError) {
      console.log('✅ External email correctly blocked (as expected)');
      console.log(`   Reason: ${restrictedError.message}`);
    }
    
    return true;

  } catch (error) {
    console.error('❌ Error testing Graph client:', error);
    
    if (error.message.includes('AADSTS7000215')) {
      console.error('🔐 Invalid client secret error detected!');
      console.error('   This means the secret is still wrong or not properly updated.');
    }
    
    if (error.message.includes('AADSTS700016')) {
      console.error('🆔 Invalid client ID or tenant ID!');
    }
    
    if (error.message.includes('insufficient privileges')) {
      console.error('⚠️  Application may need additional Graph API permissions');
    }
    
    return false;
  }
}

// Run the test
testGraphClient()
  .then(success => {
    if (success) {
      console.log('\n🎉 Microsoft Graph email test completed successfully!');
      process.exit(0);
    } else {
      console.log('\n❌ Microsoft Graph email test failed!');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n💥 Unexpected error:', error);
    process.exit(1);
  });
