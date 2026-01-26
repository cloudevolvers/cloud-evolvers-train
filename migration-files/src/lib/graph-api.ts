import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

// Cache the client instance
let graphClient: Client | null = null;

// Get Microsoft Graph client with app-only authentication
export function getGraphClient(): Client {
  if (graphClient) {
    return graphClient;
  }

  if (!process.env.AZURE_AD_CLIENT_ID || 
      !process.env.AZURE_AD_TENANT_ID || 
      !process.env.AZURE_AD_CLIENT_SECRET) {
    throw new Error('Missing required environment variables for Microsoft Graph authentication');
  }

  // Create credential using environment variables
  const credential = new ClientSecretCredential(
    process.env.AZURE_AD_TENANT_ID,
    process.env.AZURE_AD_CLIENT_ID,
    process.env.AZURE_AD_CLIENT_SECRET
  );

  // Create authentication provider
  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ['https://graph.microsoft.com/.default']
  });

  // Initialize the Graph client
  graphClient = Client.initWithMiddleware({
    authProvider
  });

  return graphClient;
}

// Helper to send email via Graph API
export async function sendEmail(options: {
  subject: string;
  toRecipients: string[];
  content: string;
  isHtml?: boolean;
}): Promise<void> {
  const { subject, toRecipients, content, isHtml = true } = options;
  
  if (!process.env.EMAIL_SENDER) {
    throw new Error('EMAIL_SENDER environment variable is required');
  }

  try {
    const client = getGraphClient();
    
    await client.api('/users/' + process.env.EMAIL_SENDER + '/sendMail')
      .post({
        message: {
          subject,
          body: {
            contentType: isHtml ? 'HTML' : 'Text',
            content
          },
          toRecipients: toRecipients.map(email => ({
            emailAddress: {
              address: email
            }
          }))
        },
        saveToSentItems: true
      });
      
  } catch (error) {
    console.error('Error sending email via Graph API:', error);
    throw error;
  }
}

// Helper to create a SharePoint list item for storing form submissions
export async function storeFormSubmission(
  siteId: string, 
  listId: string, 
  fields: Record<string, any>
): Promise<any> {
  try {
    const client = getGraphClient();
    const response = await client.api(`/sites/${siteId}/lists/${listId}/items`)
      .post({
        fields
      });
    
    return response;
  } catch (error) {
    console.error('Error storing form submission:', error);
    throw error;
  }
}
