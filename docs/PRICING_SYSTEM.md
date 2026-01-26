# 💰 Cloud Evolvers Training Pricing System

## Overview

This centralized pricing system manages all training course prices and promotional discounts for the Cloud Evolvers Training Platform. It provides a single source of truth for pricing information and enables easy management of site-wide promotions.

## 🎯 Current Promotion: 30% OFF Launch Special

**All training courses are currently 30% off** to celebrate our new company launch!

- **Discount**: 30% off all courses
- **Valid Until**: December 31, 2025
- **Reason**: New Company Launch Special

## 📁 Files Structure

```
src/lib/pricing.ts              # Main pricing configuration
src/components/ui/promotional-banner.tsx   # Promotional banner component
src/test-pricing.ts            # Testing utilities
```

## 🚀 Usage

### Basic Price Display
```tsx
import { getTrainingPriceDisplay } from '@/lib/pricing';

const priceInfo = getTrainingPriceDisplay('azure-fundamentals');
// Returns: { formattedFinalPrice: "€557", formattedOriginalPrice: "€795", ... }
```

### Check if Promotion is Active
```tsx
import { isPromotionalPricingActive } from '@/lib/pricing';

const showDiscount = isPromotionalPricingActive();
```

### Calculate Raw Pricing
```tsx
import { calculateTrainingPrice } from '@/lib/pricing';

const pricing = calculateTrainingPrice('azure-fundamentals');
// Returns: { originalPrice: 795, finalPrice: 557, discount: {...}, ... }
```

## 🛠 Configuration

### Base Prices (`BASE_TRAINING_PRICES`)
All course base prices are defined in `src/lib/pricing.ts`:

```typescript
export const BASE_TRAINING_PRICES: Record<string, number> = {
  // Fundamentals courses
  'azure-fundamentals': 795,
  'microsoft-365-fundamentals': 495,
  'power-platform-fundamentals': 795,
  
  // Intermediate courses
  'azure-administrator': 1495,
  'microsoft-365-administrator': 1295,
  // ... more courses
  
  // Default price for unlisted courses
  'default': 1295
};
```

### Promotional Discount (`PROMOTIONAL_DISCOUNT`)
Current site-wide discount configuration:

```typescript
export const PROMOTIONAL_DISCOUNT = {
  percentage: 30,
  reason: 'New Company Launch Special',
  validUntil: '2025-12-31'
};
```

## 🎨 UI Components

### Promotional Banner
Displays the current promotion prominently:

```tsx
import { PromotionalBanner } from '@/components/ui/promotional-banner';

// Full banner
<PromotionalBanner />

// Compact version
<PromotionalBanner compact className="rounded-lg" />
```

### Price Display Examples

**Before Discount:**
```
€795 per person
```

**With 30% Discount:**
```
€557  [30% OFF]
€795  Save €238
per person
```

## 📍 Integration Points

The pricing system is integrated into:

1. **Training Detail Pages** (`TrainingDetailPage.tsx`)
   - Hero section pricing
   - Booking form pricing
   - Promotional messaging

2. **Homepage Training Section** (`TrainingSection.tsx`)
   - Course card pricing
   - Promotional banner
   - Discount badges

3. **Training Overview Pages** (future)
   - Course listing prices
   - Filter by price range

## 🔄 Making Changes

### To Update Prices
1. Edit `BASE_TRAINING_PRICES` in `src/lib/pricing.ts`
2. Add new courses or modify existing ones
3. Changes automatically apply site-wide

### To Change the Promotional Discount
1. Update `PROMOTIONAL_DISCOUNT` in `src/lib/pricing.ts`:
   ```typescript
   export const PROMOTIONAL_DISCOUNT = {
     percentage: 25,  // New discount percentage
     reason: 'Holiday Special',
     validUntil: '2025-01-31'
   };
   ```

### To Disable Promotions
1. Set `validUntil` to a past date, or
2. Set `percentage: 0`

## 🧪 Testing

Run the pricing test to verify calculations:

```bash
# Test current pricing setup
npm run test:pricing
```

Or manually test specific courses:
```typescript
import { getTrainingPriceDisplay } from '@/lib/pricing';

// Test Azure Fundamentals pricing
console.log(getTrainingPriceDisplay('azure-fundamentals'));
// Expected: 30% off €795 = €557
```

## 💡 Benefits

### ✅ Centralized Management
- Single source of truth for all pricing
- Easy to update prices site-wide
- Consistent pricing across all components

### ✅ Promotional Flexibility
- Easy to enable/disable promotions
- Automatic calculation and display
- Professional promotional messaging

### ✅ Developer Experience
- Type-safe pricing functions
- Reusable components
- Clear API for price display

### ✅ User Experience
- Clear original vs. discounted pricing
- Consistent promotional messaging
- Professional discount displays

## 🎯 Future Enhancements

- **Course-specific discounts**: Different discounts per course
- **Time-limited flash sales**: Countdown timers
- **Group pricing tiers**: Discounts for multiple participants
- **Currency support**: Multi-currency pricing
- **A/B testing**: Different promotional messaging

---

**Last Updated**: August 22, 2025  
**Current Discount**: 30% OFF all courses (New Company Launch Special)
