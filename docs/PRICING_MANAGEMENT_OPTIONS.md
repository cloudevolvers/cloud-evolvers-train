# 🎛️ Pricing Management Dashboard Options for Azure Static Web Apps

## 🏆 **Option 1: Azure App Configuration (Recommended)**

### **Why This is Best:**
- ✅ **Made for this**: Azure App Configuration is designed for dynamic configuration
- ✅ **Real-time updates**: Changes apply instantly without rebuilding
- ✅ **Feature flags**: Can enable/disable promotions dynamically
- ✅ **Cost-effective**: Pay only for what you use
- ✅ **Built-in security**: Azure AD integration

### **Architecture:**
```
Admin Dashboard (React SPA) 
    ↓ 
Azure Functions API 
    ↓ 
Azure App Configuration 
    ↓ 
Static Web App (reads config)
```

### **Implementation:**

#### 1. Azure App Configuration Setup
```bash
# Create App Configuration resource
az appconfig create --name cloud-evolvers-config --resource-group your-rg --location eastus
```

#### 2. Store Pricing Configuration
```json
{
  "pricing:baseprices:azure-fundamentals": 795,
  "pricing:baseprices:power-platform-fundamentals": 795,
  "pricing:discount:percentage": 30,
  "pricing:discount:active": true,
  "pricing:discount:reason": "New Company Launch Special",
  "pricing:discount:validuntil": "2025-12-31"
}
```

#### 3. Updated Pricing Library
```typescript
// src/lib/pricing-dynamic.ts
import { AppConfigurationClient } from '@azure/app-configuration';

const client = new AppConfigurationClient(
  process.env.AZURE_APP_CONFIGURATION_CONNECTION_STRING!
);

export async function fetchDynamicPricing() {
  const settings = await client.listConfigurationSettings({
    keyFilter: "pricing:*"
  });
  
  const pricing = {};
  for await (const setting of settings) {
    pricing[setting.key] = setting.value;
  }
  
  return pricing;
}
```

#### 4. Admin Dashboard Component
```tsx
// Admin dashboard to update prices
function PricingDashboard() {
  const [prices, setPrices] = useState({});
  const [discount, setDiscount] = useState({});
  
  const updatePrice = async (courseSlug: string, newPrice: number) => {
    await fetch('/api/update-price', {
      method: 'POST',
      body: JSON.stringify({ courseSlug, newPrice })
    });
  };
  
  return (
    <div className="pricing-dashboard">
      <h1>Pricing Management</h1>
      {/* Price editing UI */}
    </div>
  );
}
```

---

## 🚀 **Option 2: Azure Functions + Cosmos DB**

### **Best For:** Complex pricing logic, audit trails, multiple admins

### **Architecture:**
```
Admin Dashboard → Azure Functions API → Cosmos DB → Static Web App
```

### **Features:**
- **Full CRUD operations** on pricing
- **Audit trail** of all price changes
- **User management** and permissions
- **Advanced discounting** rules
- **Historical pricing** data

### **Implementation:**
```typescript
// Azure Function for price management
export async function updatePricing(request: HttpRequest, context: Context) {
  const { courseSlug, newPrice, updatedBy } = await request.json();
  
  // Update in Cosmos DB
  const container = cosmosClient.database("pricing").container("courses");
  await container.items.create({
    id: courseSlug,
    basePrice: newPrice,
    updatedBy,
    updatedAt: new Date(),
    version: 1
  });
  
  return { status: 200 };
}
```

---

## 💡 **Option 3: Azure Storage + JSON Files**

### **Best For:** Simple, cost-effective solution

### **How it Works:**
- Store pricing in JSON files in Azure Storage
- Admin dashboard updates the JSON files
- Static app fetches from storage endpoint

### **Implementation:**
```typescript
// pricing.json in Azure Storage
{
  "basePrices": {
    "azure-fundamentals": 795,
    "power-platform-fundamentals": 795
  },
  "discount": {
    "percentage": 30,
    "active": true,
    "reason": "New Company Launch Special"
  }
}

// Fetch from storage
export async function fetchPricingFromStorage() {
  const response = await fetch('https://yourstorage.blob.core.windows.net/pricing/pricing.json');
  return response.json();
}
```

---

## ⚡ **Option 4: GitHub Actions + Automated Rebuilds**

### **Best For:** Infrequent price changes, simple workflow

### **How it Works:**
- Admin dashboard commits changes to GitHub
- GitHub Actions rebuilds and deploys automatically
- Fast, simple, no additional Azure resources needed

---

## 🏗️ **Complete Solution: App Configuration Implementation**

Let me create a complete implementation for you:

### **1. Azure Function for Price Management**
```typescript
// api/pricing/index.ts
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { AppConfigurationClient } from "@azure/app-configuration";

const client = new AppConfigurationClient(
  process.env.AZURE_APP_CONFIGURATION_CONNECTION_STRING!
);

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest) => {
  if (req.method === 'GET') {
    // Get all pricing configuration
    const settings = await client.listConfigurationSettings({
      keyFilter: "pricing:*"
    });
    
    const pricing = {};
    for await (const setting of settings) {
      pricing[setting.key] = JSON.parse(setting.value || '{}');
    }
    
    context.res = { status: 200, body: pricing };
  }
  
  if (req.method === 'POST') {
    // Update pricing
    const { key, value } = req.body;
    await client.setConfigurationSetting({
      key: `pricing:${key}`,
      value: JSON.stringify(value)
    });
    
    context.res = { status: 200, body: { success: true } };
  }
};

export default httpTrigger;
```

### **2. Updated Frontend Pricing Library**
```typescript
// src/lib/pricing-dynamic.ts
let cachedPricing: any = null;
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getDynamicPricing() {
  const now = Date.now();
  
  if (cachedPricing && (now - lastFetch) < CACHE_DURATION) {
    return cachedPricing;
  }
  
  try {
    const response = await fetch('/api/pricing');
    const pricing = await response.json();
    cachedPricing = pricing;
    lastFetch = now;
    return pricing;
  } catch (error) {
    console.warn('Failed to fetch dynamic pricing, using fallback');
    return getFallbackPricing();
  }
}

export async function getTrainingPriceDynamic(courseSlug: string) {
  const pricing = await getDynamicPricing();
  const basePrice = pricing[`pricing:baseprices:${courseSlug}`] || 1295;
  const discount = pricing['pricing:discount:percentage'] || 0;
  const isActive = pricing['pricing:discount:active'] || false;
  
  return calculatePrice(basePrice, discount, isActive);
}
```

### **3. Admin Dashboard Component**
```tsx
// src/components/admin/PricingDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export function PricingDashboard() {
  const [pricing, setPricing] = useState<any>({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchPricing();
  }, []);
  
  const fetchPricing = async () => {
    const response = await fetch('/api/pricing');
    const data = await response.json();
    setPricing(data);
    setLoading(false);
  };
  
  const updatePrice = async (key: string, value: any) => {
    await fetch('/api/pricing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value })
    });
    await fetchPricing();
  };
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Pricing Management Dashboard</h1>
      
      {/* Discount Settings */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Promotional Discount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Switch 
              checked={pricing['pricing:discount:active']}
              onCheckedChange={(checked) => updatePrice('discount:active', checked)}
            />
            <span>Enable Discount</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <label>Discount Percentage:</label>
            <Input 
              type="number"
              value={pricing['pricing:discount:percentage'] || 0}
              onChange={(e) => updatePrice('discount:percentage', parseInt(e.target.value))}
              className="w-24"
            />
            <span>%</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <label>Reason:</label>
            <Input 
              value={pricing['pricing:discount:reason'] || ''}
              onChange={(e) => updatePrice('discount:reason', e.target.value)}
              className="flex-1"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Course Prices */}
      <Card>
        <CardHeader>
          <CardTitle>Course Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(pricing)
              .filter(([key]) => key.startsWith('pricing:baseprices:'))
              .map(([key, value]) => {
                const courseSlug = key.replace('pricing:baseprices:', '');
                return (
                  <div key={courseSlug} className="border rounded p-4">
                    <h3 className="font-semibold mb-2">{courseSlug}</h3>
                    <div className="flex items-center space-x-2">
                      <span>€</span>
                      <Input 
                        type="number"
                        value={value as number}
                        onChange={(e) => updatePrice(`baseprices:${courseSlug}`, parseInt(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🎯 **Recommendation**

For your use case, I recommend **Option 1: Azure App Configuration** because:

1. **Perfect fit**: Made specifically for this scenario
2. **Real-time**: Changes apply instantly
3. **Cost-effective**: ~$1-5/month for small apps
4. **Scalable**: Can handle feature flags, A/B testing, etc.
5. **Secure**: Built-in Azure AD integration

## 📋 **Next Steps**

Would you like me to implement the complete Azure App Configuration solution? I can:

1. Create the Azure Function API endpoints
2. Build the admin dashboard component
3. Update your pricing library to use dynamic configuration
4. Set up the Azure resources via ARM/Bicep templates

This would give you a professional pricing management system where you can:
- ✅ Update prices instantly without rebuilding
- ✅ Enable/disable promotions with a toggle
- ✅ Schedule promotions for specific dates
- ✅ Track who made changes and when
- ✅ A/B test different pricing strategies

Let me know if you'd like me to implement this solution!
