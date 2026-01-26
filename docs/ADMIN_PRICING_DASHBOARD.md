# 💰 Admin Pricing Dashboard Guide

## Overview

The Admin Pricing Dashboard provides a comprehensive interface for managing training course prices and promotional discounts. It integrates with Azure Static Web Apps and can sync data to Azure Table Storage.

## Features

### 🔐 Authentication
- Simple password-based authentication (client-side)
- Admin key validation for API operations
- Session-based access control

### 📊 Dashboard Features
1. **Statistics Overview**
   - Total courses count
   - Average course price
   - Promotion status
   - Preview courses count

2. **Pricing Management**
   - Individual course price editing
   - Bulk price updates
   - Category-based organization
   - Search and filter functionality

3. **Promotional Discounts**
   - Enable/disable promotions
   - Set discount percentage (0-100%)
   - Customize promotion reason
   - Set validity period

4. **Live Preview**
   - Preview how prices appear to customers
   - Select specific courses to preview
   - See promotional discounts applied
   - View savings calculations

5. **Azure Integration**
   - Sync to Azure Table Storage
   - Real-time sync status indicators
   - Fallback to localStorage if sync fails
   - Automatic retry mechanisms

## Access

### URL
- Local: `http://localhost:5173/admin`
- Production: `https://your-site.azurestaticapps.net/admin`

### Default Credentials
- **Password**: `loganislove`

> ⚠️ **Security Note**: Change the password in production! Update both:
> - Frontend: `src/components/admin/PricingDashboard.tsx` (handleLogin function)
> - Backend: `api/src/functions/pricing.js` (ADMIN_KEY variable)

## Usage Guide

### 1. Login
1. Navigate to `/admin`
2. Enter admin password
3. Click "Login"

### 2. View Statistics
- The dashboard shows 4 key metrics at the top:
  - Total courses
  - Average price
  - Promotion status
  - Preview courses

### 3. Update Course Prices

#### Individual Price Update
1. Find the course in the grid
2. Edit the price in the input field
3. Click the save button (💾)
4. Changes are saved to localStorage immediately

#### Bulk Updates
1. Edit multiple course prices
2. Click "Sync to Azure" to save all changes
3. Wait for success confirmation

### 4. Manage Promotions

1. **Enable/Disable**
   - Toggle the switch to activate/deactivate promotions

2. **Set Discount**
   - Enter percentage (0-100%)
   - Discount applies to all courses

3. **Customize Message**
   - Enter a promotional reason (e.g., "Black Friday Sale")
   - Message appears on customer-facing pages

4. **Set Validity Period**
   - Choose an end date
   - Promotion auto-deactivates after this date

5. **Save Changes**
   - Click "Update Promotion" to save
   - Changes apply immediately

### 5. Preview Pricing

1. **Show Preview**
   - Click "Show Preview" button in the header
   - Preview panel appears below admin controls

2. **Select Courses**
   - Click the eye icon (👁️) on any course card
   - Selected courses are added to preview
   - Default: Shows first 5 courses

3. **View Customer Perspective**
   - See original prices
   - See discounted prices (if promotion active)
   - View savings calculations
   - Check promotional message display

### 6. Sync to Azure

#### When to Sync
- After making multiple price changes
- After updating promotions
- Before deploying to production
- For backup purposes

#### How to Sync
1. Click "Sync to Azure" in Admin Controls
2. Wait for sync confirmation
3. Check sync status indicator:
   - 🔄 Syncing... (in progress)
   - ✅ Synced (success)
   - ⚠️ Failed (error)

#### Troubleshooting Sync
If sync fails:
1. **Check API Connection**
   - Ensure Azure Functions are running
   - Verify API endpoints in staticwebapp.config.json

2. **Verify Admin Key**
   - Check x-functions-key header matches ADMIN_KEY
   - Update in environment variables if needed

3. **Check Azure Storage**
   - Verify storage account connection
   - Check Table Storage permissions
   - Ensure 'pricing' and 'promotions' tables exist

### 7. Reset to Defaults

1. Click "Seed Default Data"
2. Confirm the action
3. All prices reset to default values
4. Default promotion is restored

## Data Storage

### LocalStorage (Primary)
- **Key**: `cloud-evolvers-pricing`
- **Contains**: 
  - Base prices for all courses
  - Current promotion data
  - Price change history
  - Last update timestamp

### Azure Table Storage (Backend)
- **Tables**:
  - `pricing`: Course prices (PartitionKey: 'course')
  - `promotions`: Promotion data (PartitionKey: 'global')

### Data Flow
```
User Changes → localStorage (immediate) → Sync Button → Azure Storage
```

## API Endpoints

### GET /api/pricing
Fetch all pricing data
- **Auth**: Function key (optional)
- **Returns**: { basePrices, promotion }

### POST /api/pricing/course
Update individual course price
- **Auth**: Admin key required (x-functions-key header)
- **Body**: { courseSlug, price }

### POST /api/pricing/promotion
Update promotion
- **Auth**: Admin key required
- **Body**: { percentage, active, reason, validUntil }

### POST /api/pricing/sync
Bulk sync all pricing data
- **Auth**: Admin key required
- **Body**: { basePrices, promotion }

### POST /api/pricing/seed
Reset to default prices
- **Auth**: Admin key required
- **Returns**: { success, seededCourses, seededPromotion }

## Configuration

### Static Web App Config
File: `staticwebapp.config.json`

```json
{
  "routes": [
    {
      "route": "/api/pricing",
      "methods": ["GET", "POST", "PUT"],
      "allowedRoles": ["anonymous"]
    },
    {
      "route": "/admin/*",
      "allowedRoles": ["anonymous"]
    }
  ]
}
```

### Environment Variables

#### Local Development
File: `api/local.settings.json`

```json
{
  "Values": {
    "AZURE_STORAGE_CONNECTION_STRING": "your-connection-string",
    "PRICING_ADMIN_KEY": "loganislove"
  }
}
```

#### Production (Azure SWA)
Set in Azure Portal:
- `AZURE_STORAGE_ACCOUNT`: Storage account name
- `PRICING_ADMIN_KEY`: Admin password

## Course Categories

The dashboard automatically categorizes courses:

- **Azure Certifications**: AZ-*, azure-*
- **Microsoft 365**: MS-*, 365, office
- **Power Platform**: PL-*, power
- **Security**: SC-*, security
- **Data & Analytics**: DP-*, data
- **AI & Machine Learning**: AI-*, ai
- **Dynamics 365**: MD-*, dynamics
- **Business Applications**: MB-*, business
- **Other Certifications**: Everything else

## Best Practices

### 1. Price Management
- ✅ Update prices during off-peak hours
- ✅ Test changes in preview before syncing
- ✅ Keep price history for auditing
- ❌ Don't make frequent large price changes
- ❌ Don't forget to sync to Azure

### 2. Promotions
- ✅ Set clear validity periods
- ✅ Use descriptive promotion reasons
- ✅ Test promotional pricing in preview
- ✅ Schedule promotions in advance
- ❌ Don't exceed 50% discounts without approval
- ❌ Don't overlap multiple promotions

### 3. Data Sync
- ✅ Sync after bulk changes
- ✅ Verify sync success before closing
- ✅ Keep localStorage as source of truth
- ❌ Don't rely solely on Azure Storage
- ❌ Don't sync during active user sessions

### 4. Security
- ✅ Change default admin password
- ✅ Use environment variables for secrets
- ✅ Rotate admin keys regularly
- ✅ Monitor admin access logs
- ❌ Don't commit passwords to git
- ❌ Don't share admin credentials

## Troubleshooting

### Issue: Login Not Working
- Verify password is correct
- Check browser console for errors
- Clear browser cache and cookies
- Try incognito/private mode

### Issue: Prices Not Saving
- Check localStorage availability
- Verify browser allows localStorage
- Check for quota exceeded errors
- Try clearing old data

### Issue: Sync Failing
- Verify API is running
- Check network connectivity
- Verify admin key is correct
- Check Azure Storage permissions
- Review browser network tab

### Issue: Preview Not Showing
- Ensure courses are selected
- Click "Show Preview" button
- Check for JavaScript errors
- Verify FrontendPricingService is loaded

### Issue: Categories Not Loading
- Check course slug format
- Verify course data exists
- Review categorization logic
- Check console for errors

## Development

### Local Setup
```bash
# Install dependencies
npm install

# Start frontend
npm run dev

# Start Azure Functions (separate terminal)
cd api
npm install
npm start
```

### Testing
1. Navigate to http://localhost:5173/admin
2. Login with admin password
3. Test price updates
4. Test promotion management
5. Test preview functionality
6. Test sync to Azure (if Functions running)

### Building for Production
```bash
# Build frontend
npm run build

# Deploy to Azure SWA
# This happens automatically via GitHub Actions
```

## Architecture

### Components
- **PricingDashboard.tsx**: Main admin interface
- **frontend-pricing-service.ts**: Client-side pricing logic
- **pricing.js**: Azure Functions API

### Data Flow
```
┌─────────────────────┐
│  Admin Dashboard    │
│  (React Component)  │
└──────────┬──────────┘
           │
           ├─ localStorage (immediate)
           │
           ├─ FrontendPricingService
           │
           └─ /api/pricing/sync
                    │
                    ↓
           ┌────────────────┐
           │ Azure Functions │
           │   (pricing.js)  │
           └────────┬────────┘
                    │
                    ↓
           ┌────────────────┐
           │ Azure Storage   │
           │  Table Service  │
           └─────────────────┘
```

## Future Enhancements

- [ ] Real-time collaboration (multiple admins)
- [ ] Price change approval workflow
- [ ] Advanced analytics and reporting
- [ ] Scheduled price changes
- [ ] A/B testing for pricing
- [ ] Integration with payment systems
- [ ] Automated promotion scheduling
- [ ] Email notifications for price changes
- [ ] Audit log export
- [ ] Role-based access control

## Support

For issues or questions:
1. Check this documentation
2. Review error messages in browser console
3. Check Azure Functions logs
4. Review staticwebapp.config.json
5. Contact development team

---

**Last Updated**: 2025-10-11
**Version**: 2.0.0
