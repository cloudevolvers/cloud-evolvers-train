import { app } from '@azure/functions';
import { TableClient } from '@azure/data-tables';
import { DefaultAzureCredential } from '@azure/identity';

// Storage account configuration - support both local and SWA patterns
const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT || process.env.AZURE_STORAGE_ACCOUNT_NAME || 'cesasaxqhpxutdeftm2';
const tableEndpoint = process.env.AZURE_STORAGE_TABLE_ENDPOINT || `https://${storageAccountName}.table.core.windows.net/`;
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

// Use connection string for local development, managed identity for production (SWA)
let pricingTableClient, promotionsTableClient;

try {
  if (connectionString) {
    // Local development with connection string
    console.log('Using connection string for Table Storage authentication (local)');
    pricingTableClient = TableClient.fromConnectionString(connectionString, 'pricing');
    promotionsTableClient = TableClient.fromConnectionString(connectionString, 'promotions');
  } else {
    // Production with managed identity (SWA uses AZURE_STORAGE_ACCOUNT)
    console.log(`Using managed identity for Table Storage authentication (production): ${storageAccountName}`);
    const credential = new DefaultAzureCredential();
    pricingTableClient = new TableClient(tableEndpoint, 'pricing', credential);
    promotionsTableClient = new TableClient(tableEndpoint, 'promotions', credential);
  }
} catch (error) {
  console.error('Error initializing Table Storage clients:', error);
  console.error('Storage account:', storageAccountName);
  console.error('Table endpoint:', tableEndpoint);
  console.error('Has connection string:', !!connectionString);
  throw error;
}

// Admin key from environment variable
const ADMIN_KEY = process.env.PRICING_ADMIN_KEY || 'loganislove';

// Validate admin key
function validateAdminKey(request) {
  const providedKey = request.headers.get('x-functions-key');
  return providedKey === ADMIN_KEY;
}

// Comprehensive course catalog with default prices
const DEFAULT_PRICES = {
  // Azure Fundamentals
  'az-900-azure-fundamentals': 690,
  
  // Azure Administrator
  'az-104-azure-administrator': 690,
  
  // Azure Developer
  'az-204-azure-developer': 690,
  
  // Azure Solutions Architect
  'az-305-azure-architect': 690,
  
  // Azure DevOps Engineer
  'az-400-devops-engineer': 690,
  
  // Azure Security Engineer
  'az-500-security-engineer': 690,
  
  // Azure Database Administrator
  'dp-300-database-administrator': 690,
  
  // Azure Data Engineer
  'dp-203-data-engineer': 690,
  
  // Azure Data Scientist
  'dp-100-data-scientist': 690,
  
  // Azure Data Fundamentals
  'dp-900-data-fundamentals': 690,
  
  // Azure AI Fundamentals
  'ai-900-ai-fundamentals': 690,
  
  // Azure AI Engineer
  'ai-102-ai-engineer': 690,
  
  // Security Fundamentals
  'sc-900-security-fundamentals': 690,
  
  // Microsoft 365 Fundamentals
  'ms-900-microsoft-365-fundamentals': 690,
  
  // Microsoft 365 Administrator
  'ms-102-microsoft-365-administrator': 690,
  
  // Microsoft Teams Administrator
  'ms-700-teams-administrator': 690,
  
  // Microsoft Identity and Access Administrator
  'sc-300-identity-access-administrator': 690,
  
  // Power BI Data Analyst
  'pl-300-power-bi-analyst': 690,
  
  // Power Platform Fundamentals
  'pl-900-power-platform-fundamentals': 690,
  
  // Power Platform App Maker
  'pl-100-power-platform-app-maker': 690,
  
  // Power Platform Developer
  'pl-400-power-platform-developer': 690,
  
  // Power Platform Solution Architect
  'pl-600-power-platform-solution-architect': 890,
  
  // Windows 365 Enterprise Administrator
  'md-102-windows-365-administrator': 690,
  
  // Endpoint Administrator
  'md-101-endpoint-administrator': 690,
  
  // Azure Stack Hub Operator
  'az-600-azure-stack-hub': 690,
  
  // Azure Network Engineer
  'az-700-network-engineer': 690,
  
  // Azure Virtual Desktop Specialty
  'az-140-virtual-desktop': 690,
  
  // Azure IoT Developer
  'az-220-iot-developer': 690,
  
  // Azure Cosmos DB Developer
  'dp-420-cosmos-db-developer': 690
};

// GET /api/pricing - Get all pricing data
app.http('getPricing', {
  methods: ['GET'],
  authLevel: 'function',
  route: 'pricing',
  handler: async (request, context) => {
    try {
      // Get base prices
      const basePrices = {};
      const pricingEntities = await pricingTableClient.listEntities();
      
      for await (const entity of pricingEntities) {
        if (entity.partitionKey === 'course' && entity.price) {
          basePrices[entity.rowKey] = entity.price;
        }
      }

      // Use default prices if no data in table
      if (Object.keys(basePrices).length === 0) {
        Object.assign(basePrices, DEFAULT_PRICES);
      }

      // Get promotion data
      let promotion = null;
      try {
        const promoEntities = await promotionsTableClient.listEntities();
        for await (const entity of promoEntities) {
          if (entity.partitionKey === 'global' && entity.rowKey === 'current') {
            promotion = {
              percentage: entity.percentage || 30,
              active: entity.active || true,
              reason: entity.reason || 'New Company Launch Special',
              validUntil: entity.validUntil || '2025-12-31'
            };
            break;
          }
        }
      } catch (error) {
        console.log('No promotion data found, using default');
      }

      // Default promotion if none found
      if (!promotion) {
        promotion = {
          percentage: 30,
          active: true,
          reason: 'New Company Launch Special',
          validUntil: '2025-12-31'
        };
      }

      return {
        status: 200,
        jsonBody: {
          basePrices,
          promotion
        }
      };
    } catch (error) {
      console.error('Error fetching pricing:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'Failed to fetch pricing data',
          message: error.message
        }
      };
    }
  }
});

// POST /api/pricing/course - Update course price
app.http('updateCoursePrice', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'pricing/course',
  handler: async (request, context) => {
    try {
      // Validate admin key
      if (!validateAdminKey(request)) {
        return {
          status: 401,
          jsonBody: { error: 'Invalid admin key' }
        };
      }

      const { courseSlug, price } = await request.json();

      if (!courseSlug || typeof price !== 'number') {
        return {
          status: 400,
          jsonBody: { error: 'Invalid course slug or price' }
        };
      }

      // Update course price in table
      await pricingTableClient.upsertEntity({
        partitionKey: 'course',
        rowKey: courseSlug,
        price: price,
        updatedAt: new Date().toISOString()
      });

      return {
        status: 200,
        jsonBody: { 
          success: true, 
          message: `Updated ${courseSlug} price to €${price}` 
        }
      };
    } catch (error) {
      console.error('Error updating course price:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'Failed to update course price',
          message: error.message
        }
      };
    }
  }
});

// POST /api/pricing/promotion - Update promotion
app.http('updatePromotion', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'pricing/promotion',
  handler: async (request, context) => {
    try {
      // Validate admin key
      if (!validateAdminKey(request)) {
        return {
          status: 401,
          jsonBody: { error: 'Invalid admin key' }
        };
      }

      const { percentage, active, reason, validUntil } = await request.json();

      if (typeof percentage !== 'number' || typeof active !== 'boolean') {
        return {
          status: 400,
          jsonBody: { error: 'Invalid promotion data' }
        };
      }

      // Update promotion in table
      await promotionsTableClient.upsertEntity({
        partitionKey: 'global',
        rowKey: 'current',
        percentage: percentage,
        active: active,
        reason: reason || 'Promotional offer',
        validUntil: validUntil || '2025-12-31',
        updatedAt: new Date().toISOString()
      });

      return {
        status: 200,
        jsonBody: { 
          success: true, 
          message: 'Promotion updated successfully' 
        }
      };
    } catch (error) {
      console.error('Error updating promotion:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'Failed to update promotion',
          message: error.message
        }
      };
    }
  }
});

// POST /api/pricing/seed - Seed default pricing data
app.http('seedPricing', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'pricing/seed',
  handler: async (request, context) => {
    try {
      // Validate admin key
      if (!validateAdminKey(request)) {
        return {
          status: 401,
          jsonBody: { error: 'Invalid admin key' }
        };
      }

      // Seed course prices
      const seedPromises = Object.entries(DEFAULT_PRICES).map(([courseSlug, price]) =>
        pricingTableClient.upsertEntity({
          partitionKey: 'course',
          rowKey: courseSlug,
          price: price,
          createdAt: new Date().toISOString()
        })
      );

      // Seed default promotion
      seedPromises.push(
        promotionsTableClient.upsertEntity({
          partitionKey: 'global',
          rowKey: 'current',
          percentage: 30,
          active: true,
          reason: 'New Company Launch Special',
          validUntil: '2025-12-31',
          createdAt: new Date().toISOString()
        })
      );

      await Promise.all(seedPromises);

      return {
        status: 200,
        jsonBody: { 
          success: true, 
          message: 'Default pricing data seeded successfully',
          seededCourses: Object.keys(DEFAULT_PRICES).length,
          seededPromotion: true
        }
      };
    } catch (error) {
      console.error('Error seeding pricing data:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'Failed to seed pricing data',
          message: error.message
        }
      };
    }
  }
});

// POST /api/pricing/sync - Bulk sync pricing data from admin panel
app.http('syncPricing', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'pricing/sync',
  handler: async (request, context) => {
    try {
      // Validate admin key
      if (!validateAdminKey(request)) {
        return {
          status: 401,
          jsonBody: { error: 'Invalid admin key' }
        };
      }

      const { basePrices, promotion } = await request.json();

      if (!basePrices || typeof basePrices !== 'object') {
        return {
          status: 400,
          jsonBody: { error: 'Invalid pricing data' }
        };
      }

      // Sync all course prices
      const pricePromises = Object.entries(basePrices).map(([courseSlug, price]) =>
        pricingTableClient.upsertEntity({
          partitionKey: 'course',
          rowKey: courseSlug,
          price: price,
          updatedAt: new Date().toISOString()
        })
      );

      // Sync promotion if provided
      if (promotion) {
        pricePromises.push(
          promotionsTableClient.upsertEntity({
            partitionKey: 'global',
            rowKey: 'current',
            percentage: promotion.percentage || 30,
            active: promotion.active !== undefined ? promotion.active : true,
            reason: promotion.reason || 'Promotional offer',
            validUntil: promotion.validUntil || '2025-12-31',
            updatedAt: new Date().toISOString()
          })
        );
      }

      await Promise.all(pricePromises);

      return {
        status: 200,
        jsonBody: { 
          success: true, 
          message: 'Pricing data synced to Azure Storage successfully',
          syncedCourses: Object.keys(basePrices).length,
          syncedPromotion: !!promotion
        }
      };
    } catch (error) {
      console.error('Error syncing pricing data:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'Failed to sync pricing data',
          message: error.message
        }
      };
    }
  }
});
