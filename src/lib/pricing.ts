/**
 * Central pricing configuration for Cloud Evolvers Training Platform
 * Now powered by pure frontend magic - no Azure Functions needed! 🚀
 */

import FrontendPricingService from '@/services/frontend-pricing-service';

// Re-export the frontend service for backward compatibility
export { default as FrontendPricingService } from '@/services/frontend-pricing-service';

/**
 * Get training price with current discounts applied
 * @param slug - Course slug
 * @param fallbackPrice - Fallback price if not found (optional)
 */
export function getTrainingPriceDisplay(slug: string, fallbackPrice?: number) {
  const priceInfo = FrontendPricingService.getFormattedPriceInfo(slug);
  const promotion = FrontendPricingService.getCurrentPromotion();

  return {
    originalPrice: priceInfo.originalPrice,
    finalPrice: priceInfo.discountedPrice,
    currentPrice: priceInfo.discountedPrice,
    formattedPrice: priceInfo.formattedDiscountedPrice,
    formattedOriginalPrice: priceInfo.formattedOriginalPrice,
    formattedFinalPrice: priceInfo.formattedDiscountedPrice,
    formattedSavings: priceInfo.formattedSavings,
    formattedDiscount: priceInfo.hasDiscount ? `${priceInfo.discount}% OFF` : '',
    hasDiscount: priceInfo.hasDiscount,
    discountPercentage: priceInfo.discount,
    currency: 'EUR',
    displayText: priceInfo.hasDiscount
      ? `${priceInfo.formattedDiscountedPrice} (was ${priceInfo.formattedOriginalPrice})`
      : priceInfo.formattedDiscountedPrice,
    discount: promotion ? {
      percentage: promotion.percentage,
      reason: promotion.reason,
      validUntil: promotion.validUntil,
      amount: priceInfo.originalPrice - priceInfo.discountedPrice
    } : null
  };
}

/**
 * Async version for backward compatibility (now just returns the sync version)
 */
export async function getTrainingPriceDisplayAsync(slug: string, fallbackPrice?: number) {
  return getTrainingPriceDisplay(slug, fallbackPrice);
}

/**
 * Calculate training price (legacy compatibility)
 */
export async function calculateTrainingPrice(courseSlug: string, basePrice?: number) {
  const display = getTrainingPriceDisplay(courseSlug, basePrice);
  return {
    originalPrice: display.originalPrice,
    finalPrice: display.finalPrice,
    discount: display.discount,
    currency: display.currency,
    hasDiscount: display.hasDiscount
  };
}

/**
 * Check if promotional pricing is currently active
 */
export function isPromotionalPricingActive(): boolean {
  return FrontendPricingService.getCurrentPromotion() !== null;
}

/**
 * Get current promotion details
 */
export function getCurrentPromotion() {
  return FrontendPricingService.getCurrentPromotion();
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return FrontendPricingService.formatPrice(price);
}

/**
 * Get base price for a course (without discounts)
 */
export function getBasePrice(slug: string): number {
  return FrontendPricingService.getCoursePrice(slug);
}

/**
 * Update training price data with current pricing (legacy compatibility)
 * @param trainingData - Training object to update
 * @param courseSlug - The slug identifier for the training course
 * @returns Updated training object with current pricing
 */
export async function applyCurrentPricing(trainingData: any, courseSlug: string) {
  const priceInfo = getTrainingPriceDisplay(courseSlug, trainingData.price?.amount);

  return {
    ...trainingData,
    price: {
      amount: priceInfo.finalPrice,
      currency: priceInfo.currency,
      originalAmount: priceInfo.originalPrice,
      discount: priceInfo.discount
    }
  };
}

/**
 * Initialize pricing data cache (legacy compatibility - now a no-op)
 */
export async function initializePricingCache(): Promise<void> {
  console.log('✅ Pricing system initialized (frontend-only, no cache needed!)');
}

/**
 * Force refresh pricing data (legacy compatibility - now a no-op)
 */
export async function refreshPricingData(): Promise<boolean> {
  console.log('✅ Pricing data refreshed (frontend-only, always current!)');
  return true;
}

// Legacy exports for backward compatibility
export const FALLBACK_BASE_PRICES = FrontendPricingService.getAllPricing().basePrices;
export const FALLBACK_PROMOTIONAL_DISCOUNT = FrontendPricingService.getCurrentPromotion();
export const BASE_TRAINING_PRICES = FALLBACK_BASE_PRICES;
export const PROMOTIONAL_DISCOUNT = FALLBACK_PROMOTIONAL_DISCOUNT;

