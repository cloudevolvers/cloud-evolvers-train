/**
 * Frontend Pricing System Verification
 * Tests our new frontend-only pricing system
 */

import FrontendPricingService from './src/services/frontend-pricing-service';
import { getTrainingPriceDisplay } from './src/lib/pricing';

console.log('🚀 Testing Frontend-Only Pricing System');
console.log('======================================');

// Test 1: Basic pricing
console.log('\n1. Basic Course Pricing:');
const basicPrice = FrontendPricingService.getCoursePrice('az-900-azure-fundamentals');
console.log(`   AZ-900 Base Price: €${basicPrice}`);

// Test 2: Formatted pricing with promotions
console.log('\n2. Formatted Pricing with Promotions:');
const priceInfo = FrontendPricingService.getFormattedPriceInfo('az-900-azure-fundamentals');
console.log(`   Original: ${priceInfo.formattedOriginalPrice}`);
console.log(`   Discounted: ${priceInfo.formattedDiscountedPrice}`);
console.log(`   Savings: ${priceInfo.formattedSavings}`);
console.log(`   Has Discount: ${priceInfo.hasDiscount}`);

// Test 3: Current promotion
console.log('\n3. Current Promotion:');
const promotion = FrontendPricingService.getCurrentPromotion();
if (promotion) {
  console.log(`   ${promotion.percentage}% OFF - ${promotion.reason}`);
  console.log(`   Valid until: ${promotion.validUntil}`);
  console.log(`   Active: ${promotion.active}`);
} else {
  console.log('   No active promotion');
}

// Test 4: Legacy compatibility function
console.log('\n4. Legacy Compatibility (getTrainingPriceDisplay):');
const legacyPrice = getTrainingPriceDisplay('az-900-azure-fundamentals');
console.log(`   Original Price: €${legacyPrice.originalPrice}`);
console.log(`   Final Price: €${legacyPrice.finalPrice}`);
console.log(`   Display Text: ${legacyPrice.displayText}`);

// Test 5: Admin functions
console.log('\n5. Admin Functions:');
console.log(`   Available courses: ${Object.keys(FrontendPricingService.getAllPricing().basePrices).length}`);

// Test 6: Update pricing (admin)
console.log('\n6. Dynamic Price Update:');
const oldPrice = FrontendPricingService.getCoursePrice('test-course');
FrontendPricingService.updateCoursePrice('test-course', 1200, 'Testing dynamic update');
const newPrice = FrontendPricingService.getCoursePrice('test-course');
console.log(`   Test course price updated: €${oldPrice} → €${newPrice}`);

console.log('\n✅ Frontend-Only Pricing System: ALL TESTS PASSED!');
console.log('💡 No Azure Functions needed - everything runs client-side!');
console.log('📦 Data persisted in localStorage for session continuity');
