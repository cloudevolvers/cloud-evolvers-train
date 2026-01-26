#!/usr/bin/env node

// Graph API Email Service for Cloud Evolvers Train Deployment Notifications
// Based on xEvolve app email delivery patterns with organizational secrets

const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

// Configuration from GitHub organization secrets
const config = {
  clientId: process.env.GRAPH_CLIENT_ID,
  clientSecret: process.env.GRAPH_CLIENT_SECRET, 
  tenantId: process.env.GRAPH_TENANT_ID,
  senderEmail: process.env.EMAIL_AUTOMATION_SENDER || 'internalautomation@xevolve.io'
};

// Validate configuration
function validateConfig() {
  const requiredVars = ['GRAPH_CLIENT_ID', 'GRAPH_CLIENT_SECRET', 'GRAPH_TENANT_ID'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\n💡 These should be available as GitHub organization secrets');
    process.exit(1);
  }
  
  console.log('✅ Graph API configuration validated');
  console.log(`📧 Sender: ${config.senderEmail}`);
  console.log(`🏢 Tenant: ${config.tenantId}`);
}

// Initialize Graph Client (following xEvolve app pattern)
function getGraphClient() {
  const credential = new ClientSecretCredential(
    config.tenantId,
    config.clientId,
    config.clientSecret
  );

  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ['https://graph.microsoft.com/.default']
  });

  return Client.initWithMiddleware({
    authProvider
  });
}

// Build professional deployment notification email content
function buildDeploymentEmailContent(customerEmail, token, deployUrl) {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Amsterdam',
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cloud Evolvers - Deployment Ready</title>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff;
          }
          .header { 
            background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%); 
            color: white; 
            padding: 2rem; 
            text-align: center; 
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 600;
          }
          .header p {
            margin: 0.5rem 0 0 0;
            opacity: 0.9;
            font-size: 1.1rem;
          }
          .content { 
            padding: 2rem; 
            background: #f8fafc;
          }
          .info-box {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
          }
          .token-display {
            background: #1e293b;
            color: #64748b;
            padding: 1rem;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            word-break: break-all;
            border-left: 4px solid #0078d4;
          }
          .token-value {
            color: #22c55e;
            font-weight: bold;
          }
          .setup-steps {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-left: 4px solid #0078d4;
          }
          .step {
            margin: 1rem 0;
            padding-left: 1.5rem;
            position: relative;
          }
          .step::before {
            content: counter(step);
            counter-increment: step;
            position: absolute;
            left: 0;
            top: 0;
            background: #0078d4;
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
          }
          .setup-steps {
            counter-reset: step;
          }
          .footer {
            background: #0078d4;
            color: white;
            padding: 1.5rem;
            text-align: center;
            border-radius: 0 0 8px 8px;
          }
          .footer p {
            margin: 0;
            opacity: 0.9;
          }
          .highlight {
            background: #dbeafe;
            color: #1e40af;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Your Cloud Training Platform is Ready!</h1>
            <p>Professional deployment completed successfully</p>
          </div>
          
          <div class="content">
            <div class="info-box">
              <h3>🎯 Deployment Details</h3>
              <p><strong>Customer:</strong> ${customerEmail}</p>
              <p><strong>Deployment Time:</strong> ${timestamp}</p>
              <p><strong>Platform URL:</strong> <a href="${deployUrl}" style="color: #0078d4;">${deployUrl}</a></p>
              <p><strong>Region:</strong> <span class="highlight">North Europe (GDPR Compliant)</span></p>
            </div>

            <div class="info-box">
              <h3>🔐 Your Secure Access Token</h3>
              <p>Use this token to complete your platform setup:</p>
              <div class="token-display">
                ACCESS_TOKEN=<span class="token-value">${token}</span>
              </div>
              <p><small>⏰ Token expires in 48 hours for security</small></p>
            </div>

            <div class="setup-steps">
              <h3>📋 Quick Setup Guide</h3>
              <div class="step">
                <strong>Visit Your Platform:</strong> Navigate to <a href="${deployUrl}">${deployUrl}</a>
              </div>
              <div class="step">
                <strong>Administrator Setup:</strong> Use your access token to configure initial settings
              </div>
              <div class="step">
                <strong>User Management:</strong> Set up training participants and access levels
              </div>
              <div class="step">
                <strong>Content Configuration:</strong> Customize training modules and resources
              </div>
              <div class="step">
                <strong>Go Live:</strong> Your platform is ready for professional training delivery
              </div>
            </div>

            <div class="info-box">
              <h3>💡 Key Features Available</h3>
              <ul>
                <li>🎓 Interactive Training Modules</li>
                <li>📊 Progress Analytics</li>
                <li>👥 Multi-user Management</li>
                <li>🔒 Enterprise Security</li>
                <li>📱 Mobile Responsive Design</li>
                <li>🌍 GDPR Compliant Hosting</li>
              </ul>
            </div>
          </div>

          <div class="footer">
            <p><strong>Cloud Evolvers Training Platform</strong></p>
            <p>Enterprise Learning Solutions | Amsterdam, Netherlands</p>
            <p>Need help? Contact: <a href="mailto:support@cloudevolvers.com" style="color: #bfdbfe;">support@cloudevolvers.com</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Send email via Microsoft Graph API (following xEvolve app pattern)
async function sendDeploymentNotification(customerEmail, token, deployUrl) {
  try {
    validateConfig();
    
    console.log('🔐 Initializing Graph client...');
    const client = getGraphClient();
    
    console.log('📧 Preparing email content...');
    const emailContent = {
      message: {
        subject: '🚀 Cloud Evolvers Training Platform - Deployment Complete',
        body: {
          contentType: 'HTML',
          content: buildDeploymentEmailContent(customerEmail, token, deployUrl)
        },
        toRecipients: [
          {
            emailAddress: {
              address: customerEmail,
              name: 'Cloud Evolvers Customer'
            }
          }
        ],
        importance: 'high',
        categories: ['Deployment', 'Customer Notification']
      },
      saveToSentItems: true
    };

    console.log(`📤 Sending email to ${customerEmail}...`);
    
    // Send via Graph API using xEvolve app pattern
    await client.api(`/users/${config.senderEmail}/sendMail`).post(emailContent);
    
    console.log('✅ Deployment notification sent successfully!');
    console.log(`   📧 To: ${customerEmail}`);
    console.log(`   🔑 Token: ${token}`);
    console.log(`   🌐 URL: ${deployUrl}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Failed to send deployment notification:', error.message);
    
    if (error.message.includes('Authorization_RequestDenied')) {
      console.error('🔐 DIAGNOSIS: Missing Mail.Send application permission');
      console.error('   Required Graph API permissions:');
      console.error('   - Mail.Send (Application)');
      console.error('   - User.Read.All (Application) - optional');
    }
    
    throw error;
  }
}

// Main execution
async function main() {
  // Get parameters from command line or environment
  const customerEmail = process.argv[2] || process.env.CUSTOMER_EMAIL || 'yair@xevolve.io';
  const token = process.argv[3] || process.env.ACCESS_TOKEN;
  const deployUrl = process.argv[4] || process.env.DEPLOY_URL || 'https://cloud-evolvers-train.azurestaticapps.net';

  if (!token) {
    console.error('❌ Missing access token parameter');
    console.error('Usage: node graph-email-notification.js <email> <token> [deployUrl]');
    process.exit(1);
  }

  console.log('🚀 Cloud Evolvers - Graph API Email Service');
  console.log('==========================================');
  
  try {
    await sendDeploymentNotification(customerEmail, token, deployUrl);
    console.log('\n🎉 Email notification completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n💥 Email notification failed:', error.message);
    process.exit(1);
  }
}

// Export for use as module
module.exports = {
  sendDeploymentNotification,
  getGraphClient,
  buildDeploymentEmailContent
};

// Run if called directly
if (require.main === module) {
  main();
}
