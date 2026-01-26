/**
 * Table Storage-based pricing system for Cloud Evolvers Training Platform
 * Provides dynamic pricing management with caching and fallback support
 */

// Fallback pricing (used when Table Storage is unavailable)
export const FALLBACK_PRICING = {
  // Fundamentals courses
  'azure-fundamentals': 795,
  'microsoft-365-fundamentals': 495,
  'power-platform-fundamentals': 795,
  
  // Intermediate courses
  'azure-administrator': 1495,
  'microsoft-365-administrator': 1295,
  'power-bi-data-analyst': 1595,
  'power-platform-automation': 1395,
  'windows-server-hybrid-administrator': 1295,
  
  // Advanced courses
  'azure-solutions-architect': 1795,
  'azure-security-engineer': 1595,
  'azure-developer-associate': 1595,
  'microsoft-365-security-administrator': 1695,
  'windows-server-hybrid-infrastructure': 1595,
  
  // Specialized courses
  'azure-ai-engineer': 1695,
  'azure-data-engineer': 1695,
  'azure-devops-engineer': 1695,
  'azure-ai-fundamentals': 1395,
  'azure-data-fundamentals': 1395,
  'power-platform-solution-architect': 1895,
  'azure-support-engineer': 1495,
  
  // Default price
  'default': 1295
};

export const FALLBACK_PROMOTION = {
  percentage: 30,
  active: true,
  reason: 'New Company Launch Special',
  validUntil: '2025-12-31'
};

// Cache management
let pricingCache: any = null;
let promotionsCache: any = null;
let lastPricingFetch = 0;
let lastPromotionsFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes for pricing
const PROMOTIONS_CACHE_DURATION = 1 * 60 * 1000; // 1 minute for promotions

/**
 * Fetch current pricing from Table Storage with caching
 * Falls back to static pricing if unavailable
 */
export async function fetchDynamicPricing(): Promise<Record<string, any>> {
  const now = Date.now();
  
  // Return cached pricing if still valid
  if (pricingCache && (now - lastPricingFetch) < CACHE_DURATION) {
    return pricingCache;
  }
  
  try {
    const response = await fetch('/api/pricing?entity=pricing', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (response.ok) {
      const pricing = await response.json();
      pricingCache = pricing;
      lastPricingFetch = now;
      return pricing;
    } else {
      console.warn('Failed to fetch pricing from Table Storage, using fallback');
      return getFallbackPricing();
    }
  } catch (error) {
    console.warn('Error fetching pricing:', error);
    return getFallbackPricing();
  }
}

/**
 * Fetch current promotions from Table Storage with caching
 */
export async function fetchDynamicPromotions(): Promise<Record<string, any>> {
  const now = Date.now();
  
  // Return cached promotions if still valid
  if (promotionsCache && (now - lastPromotionsFetch) < PROMOTIONS_CACHE_DURATION) {
    return promotionsCache;
  }
  
  try {
    const response = await fetch('/api/pricing?entity=promotions', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (response.ok) {
      const promotions = await response.json();
      promotionsCache = promotions;
      lastPromotionsFetch = now;
      return promotions;
    } else {
      console.warn('Failed to fetch promotions from Table Storage, using fallback');
      return { default: FALLBACK_PROMOTION };
    }
  } catch (error) {
    console.warn('Error fetching promotions:', error);
    return { default: FALLBACK_PROMOTION };
  }
}

/**
 * Get fallback pricing when Table Storage is unavailable
 */
function getFallbackPricing(): Record<string, any> {
  const fallbackData = {};
  Object.entries(FALLBACK_PRICING).forEach(([courseSlug, price]) => {
    fallbackData[courseSlug] = {
      courseSlug,
      basePrice: price,
      lastUpdated: new Date().toISOString(),
      updatedBy: 'fallback'
    };
  });
  return fallbackData;
}

/**
 * Calculate the final price for a training course using dynamic data
 * @param courseSlug - The slug identifier for the training course
 * @param fallbackPrice - Optional fallback price if not found in Table Storage
 */
export async function calculateDynamicTrainingPrice(courseSlug: string, fallbackPrice?: number) {
  const [pricingData, promotionsData] = await Promise.all([
    fetchDynamicPricing(),
    fetchDynamicPromotions()
  ]);
  
  // Get base price from Table Storage or fallback
  let originalPrice = fallbackPrice || 0;
  
  if (pricingData[courseSlug]) {
    originalPrice = pricingData[courseSlug].basePrice;
  } else if (!originalPrice) {
    originalPrice = FALLBACK_PRICING[courseSlug] || FALLBACK_PRICING.default;
  }
  
  // Get active promotion
  const activePromotion = Object.values(promotionsData).find((promo: any) => {
    if (!promo.active) return false;
    
    const now = new Date();
    const validFrom = promo.validFrom ? new Date(promo.validFrom) : new Date('2000-01-01');
    const validUntil = promo.validUntil ? new Date(promo.validUntil) : new Date('2030-12-31');
    
    return now >= validFrom && now <= validUntil;
  }) as any;
  
  // Calculate discount
  let discountAmount = 0;
  let hasDiscount = false;
  
  if (activePromotion && activePromotion.percentage > 0) {
    discountAmount = Math.round((originalPrice * activePromotion.percentage) / 100);
    hasDiscount = true;
  }
  
  const finalPrice = originalPrice - discountAmount;
  
  return {
    originalPrice,
    finalPrice,
    discount: activePromotion ? {
      percentage: activePromotion.percentage,
      amount: discountAmount,
      reason: activePromotion.reason,
      validUntil: activePromotion.validUntil
    } : null,
    currency: 'EUR',
    hasDiscount
  };
}

/**
 * Get formatted price display information using dynamic data
 */
export async function getDynamicTrainingPriceDisplay(courseSlug: string, fallbackPrice?: number) {
  const priceInfo = await calculateDynamicTrainingPrice(courseSlug, fallbackPrice);
  
  return {
    ...priceInfo,
    formattedOriginalPrice: `€${priceInfo.originalPrice.toLocaleString()}`,
    formattedFinalPrice: `€${priceInfo.finalPrice.toLocaleString()}`,
    formattedDiscount: priceInfo.discount ? `${priceInfo.discount.percentage}% OFF` : '',
    formattedSavings: priceInfo.discount ? `Save €${priceInfo.discount.amount.toLocaleString()}` : '',
    displayText: priceInfo.hasDiscount 
      ? `€${priceInfo.finalPrice.toLocaleString()} (was €${priceInfo.originalPrice.toLocaleString()})`
      : `€${priceInfo.finalPrice.toLocaleString()}`
  };
}

/**
 * Check if any promotional pricing is currently active
 */
export async function isDynamicPromotionalPricingActive(): Promise<boolean> {
  try {
    const promotionsData = await fetchDynamicPromotions();
    
    const activePromotion = Object.values(promotionsData).find((promo: any) => {
      if (!promo.active) return false;
      
      const now = new Date();
      const validFrom = promo.validFrom ? new Date(promo.validFrom) : new Date('2000-01-01');
      const validUntil = promo.validUntil ? new Date(promo.validUntil) : new Date('2030-12-31');
      
      return now >= validFrom && now <= validUntil;
    });
    
    return !!activePromotion;
  } catch (error) {
    console.warn('Error checking promotional pricing, using fallback');
    return true; // Default to showing promotion if we can't check
  }
}

/**
 * Admin function to update a course price
 */
export async function updateCoursePrice(courseSlug: string, basePrice: number) {
  const response = await fetch('/api/pricing?entity=pricing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ courseSlug, basePrice })
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update price for ${courseSlug}`);
  }
  
  // Clear cache to force refresh
  pricingCache = null;
  lastPricingFetch = 0;
  
  return response.json();
}

/**
 * Admin function to update promotion settings
 */
export async function updatePromotion(promotionData: {
  id?: string;
  percentage: number;
  active: boolean;
  reason?: string;
  validFrom?: string;
  validUntil?: string;
}) {
  const response = await fetch('/api/pricing?entity=promotions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(promotionData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to update promotion');
  }
  
  // Clear cache to force refresh
  promotionsCache = null;
  lastPromotionsFetch = 0;
  
  return response.json();
}

/**
 * Initialize pricing data in Table Storage (run once)
 */
export async function initializePricingData() {
  const courses = Object.entries(FALLBACK_PRICING).filter(([key]) => key !== 'default');
  
  // Bulk update all course prices
  const response = await fetch('/api/pricing?entity=pricing&operation=bulk', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ courses: courses.map(([courseSlug, basePrice]) => ({ courseSlug, basePrice })) })
  });
  
  if (!response.ok) {
    throw new Error('Failed to initialize pricing data');
  }
  
  // Initialize default promotion
  await updatePromotion({
    id: 'default',
    ...FALLBACK_PROMOTION
  });
  
  return response.json();
}

// Legacy compatibility - these functions now use dynamic data
export const getTrainingPriceDisplay = getDynamicTrainingPriceDisplay;
export const isPromotionalPricingActive = isDynamicPromotionalPricingActive;
