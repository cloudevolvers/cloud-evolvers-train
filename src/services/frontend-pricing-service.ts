/**
 * Pure Frontend Pricing Service 🚀
 * No Azure Functions needed - all client-side magic!
 */

// Current pricing data - can be updated dynamically
const CURRENT_PRICES: Record<string, number> = {
  // Azure Fundamentals
  'az-900-azure-fundamentals': 550,
  'azure-fundamentals': 550,

  // Azure Administrator
  'az-104-azure-administrator': 1795,
  'azure-administrator': 1795,

  // Azure Developer
  'az-204-azure-developer': 2195,
  'azure-developer': 2195,

  // Azure Solutions Architect
  'az-305-azure-architect': 1795,
  'azure-solutions-architect': 1795,

  // Azure DevOps Engineer
  'az-400-devops-engineer': 1795,
  'azure-devops-engineer': 1795,

  // Azure Security Engineer
  'az-500-security-engineer': 1795,
  'azure-security-engineer': 1795,

  // Azure AI Fundamentals
  'ai-900-ai-fundamentals': 550,
  'azure-ai-fundamentals': 550,

  // Azure Security Fundamentals
  'azure-security-fundamentals': 550,

  // Azure Network Engineer
  'az-700-network-engineer': 1295,
  'azure-network-engineer': 1295,

  // Azure Virtual Desktop
  'az-140-virtual-desktop': 1595,
  'azure-virtual-desktop': 1595,

  // Azure IoT Developer
  'az-220-iot-developer': 1895,
  'azure-iot-developer': 1895,

  // Azure Stack Hub
  'azure-stack-hub': 1295,

  // Azure Support Engineer
  'azure-support-engineer': 895,

  // Azure AI Developer Bootcamp
  'azure-ai-developer-bootcamp': 1395,

  // Azure Administrator Mastery
  'azure-administrator-mastery': 1495,

  // AI Engineer
  'ai-102-ai-engineer': 1950,

  // Cybersecurity Architect
  'sc-100-cybersecurity-architect': 2195,
  'cybersecurity-architect': 2195,

  // Microsoft 365
  'ms-900-microsoft-365-fundamentals': 550,
  'microsoft-365-fundamentals': 550,
  'ms-102-microsoft-365-administrator': 1795,
  'microsoft-365-administrator': 1795,
  'microsoft-365-identity-access-administrator': 1195,
  'microsoft-365-security-administrator': 1195,
  'microsoft-365-copilot-mastery': 595,
  'copilot-agent-administration-fundamentals': 550,

  // Teams
  'ms-700-teams-administrator': 895,
  'teams-advanced-administration': 895,

  // Security & Compliance
  'sc-900-security-compliance-identity-fundamentals': 550,
  'security-compliance-identity-fundamentals': 550,
  'sc-200-security-operations-analyst': 1895,
  'security-operations-analyst': 1895,

  // Power Platform
  'pl-900-power-platform-fundamentals': 550,
  'power-platform-fundamentals': 550,
  'power-platform-automation': 895,

  // Windows Server
  'windows-server-hybrid-administrator': 1095,
  'windows-server-hybrid-infrastructure': 1595,

  // Data Platform
  'dp-300-database-administrator': 1795,
  'dp-203-data-engineer': 1795,
  'dp-100-data-scientist': 1795,
  'dp-900-data-fundamentals': 550,
  'dp-420-cosmos-db-developer': 1795,
  'dp-600-fabric-analytics-engineer': 1795,

  // Power Platform advanced
  'pl-100-app-maker': 1795,
  'pl-200-functional-consultant': 1795,
  'pl-400-developer': 1795,

  // Security advanced
  'sc-300-security-administrator': 1795,
  'sc-400-information-protection-administrator': 1795
};

// Current promotion - can be updated dynamically
interface Promotion {
  percentage: number;
  active: boolean;
  reason: string;
  validUntil: string;
  courses?: string[]; // If specified, only applies to these courses
}

const CURRENT_PROMOTION: Promotion | null = null;

// Pricing history for tracking (optional, for future analytics)
interface PriceHistory {
  courseSlug: string;
  price: number;
  timestamp: string;
  reason?: string;
}

const PRICE_HISTORY: PriceHistory[] = [];

export class FrontendPricingService {
  
  /**
   * Get all current pricing data
   */
  static getAllPricing() {
    return {
      basePrices: CURRENT_PRICES,
      promotion: CURRENT_PROMOTION
    };
  }
  
  /**
   * Get price for a specific course
   */
  static getCoursePrice(courseSlug: string): number {
    return CURRENT_PRICES[courseSlug] || 690; // Default fallback
  }
  
  /**
   * Get promotional price for a course
   */
  static getPromotionalPrice(courseSlug: string): {
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    hasDiscount: boolean;
  } {
    const originalPrice = this.getCoursePrice(courseSlug);
    
    if (!CURRENT_PROMOTION?.active) {
      return {
        originalPrice,
        discountedPrice: originalPrice,
        discount: 0,
        hasDiscount: false
      };
    }
    
    // Check if promotion applies to this specific course
    if (CURRENT_PROMOTION.courses && !CURRENT_PROMOTION.courses.includes(courseSlug)) {
      return {
        originalPrice,
        discountedPrice: originalPrice,
        discount: 0,
        hasDiscount: false
      };
    }
    
    // Check if promotion is still valid
    const now = new Date();
    const validUntil = new Date(CURRENT_PROMOTION.validUntil);
    
    if (now > validUntil) {
      return {
        originalPrice,
        discountedPrice: originalPrice,
        discount: 0,
        hasDiscount: false
      };
    }
    
    const discount = CURRENT_PROMOTION.percentage;
    const discountedPrice = Math.round(originalPrice * (100 - discount) / 100);
    
    return {
      originalPrice,
      discountedPrice,
      discount,
      hasDiscount: true
    };
  }
  
  /**
   * Update course price (admin function)
   */
  static updateCoursePrice(courseSlug: string, newPrice: number, reason?: string): boolean {
    try {
      const oldPrice = CURRENT_PRICES[courseSlug];
      CURRENT_PRICES[courseSlug] = newPrice;
      
      // Track price change
      PRICE_HISTORY.push({
        courseSlug,
        price: newPrice,
        timestamp: new Date().toISOString(),
        reason: reason || `Price updated from ${oldPrice} to ${newPrice}`
      });
      
      // Save to localStorage for persistence
      this.savePricingData();
      
      console.log(`💰 Price updated: ${courseSlug} = €${newPrice}`);
      return true;
    } catch (error) {
      console.error('Failed to update course price:', error);
      return false;
    }
  }
  
  /**
   * Update promotion (admin function)
   */
  static updatePromotion(promotion: Promotion | null): boolean {
    try {
      if (promotion) {
        Object.assign(CURRENT_PROMOTION || {}, promotion);
      } else {
        // Deactivate promotion
        if (CURRENT_PROMOTION) {
          CURRENT_PROMOTION.active = false;
        }
      }
      
      // Save to localStorage for persistence
      this.savePricingData();
      
      console.log('🎉 Promotion updated:', promotion);
      return true;
    } catch (error) {
      console.error('Failed to update promotion:', error);
      return false;
    }
  }
  
  /**
   * Get current promotion info
   */
  static getCurrentPromotion(): Promotion | null {
    if (!CURRENT_PROMOTION?.active) return null;
    
    // Check if still valid
    const now = new Date();
    const validUntil = new Date(CURRENT_PROMOTION.validUntil);
    
    if (now > validUntil) {
      // Auto-deactivate expired promotion
      CURRENT_PROMOTION.active = false;
      this.savePricingData();
      return null;
    }
    
    return CURRENT_PROMOTION;
  }
  
  /**
   * Save pricing data to localStorage for persistence
   */
  private static savePricingData(): void {
    try {
      const pricingData = {
        prices: CURRENT_PRICES,
        promotion: CURRENT_PROMOTION,
        history: PRICE_HISTORY,
        lastUpdated: new Date().toISOString()
      };
      
      localStorage.setItem('cloud-evolvers-pricing', JSON.stringify(pricingData));
    } catch (error) {
      console.warn('Could not save pricing data to localStorage:', error);
    }
  }
  
  /**
   * Load pricing data from localStorage
   */
  static loadPricingData(): void {
    try {
      const saved = localStorage.getItem('cloud-evolvers-pricing');
      if (!saved) return;
      
      const pricingData = JSON.parse(saved);
      
      // Update current prices with saved data
      Object.assign(CURRENT_PRICES, pricingData.prices || {});
      
      // Update promotion
      if (pricingData.promotion && CURRENT_PROMOTION) {
        Object.assign(CURRENT_PROMOTION, pricingData.promotion);
      }
      
      // Load history
      if (pricingData.history) {
        PRICE_HISTORY.push(...pricingData.history);
      }
      
      console.log('💾 Pricing data loaded from localStorage');
    } catch (error) {
      console.warn('Could not load pricing data from localStorage:', error);
    }
  }
  
  /**
   * Get pricing statistics (for analytics)
   */
  static getStats() {
    const totalCourses = Object.keys(CURRENT_PRICES).length;
    const avgPrice = Object.values(CURRENT_PRICES).reduce((a, b) => a + b, 0) / totalCourses;
    const hasActivePromotion = this.getCurrentPromotion() !== null;
    
    return {
      totalCourses,
      averagePrice: Math.round(avgPrice),
      hasActivePromotion,
      priceChanges: PRICE_HISTORY.length
    };
  }
  
  /**
   * Bulk price update (admin function)
   */
  static bulkUpdatePrices(updates: Record<string, number>, reason?: string): boolean {
    try {
      let updateCount = 0;
      
      Object.entries(updates).forEach(([courseSlug, newPrice]) => {
        if (this.updateCoursePrice(courseSlug, newPrice, reason)) {
          updateCount++;
        }
      });
      
      console.log(`💰 Bulk update completed: ${updateCount} prices updated`);
      return updateCount > 0;
    } catch (error) {
      console.error('Failed to bulk update prices:', error);
      return false;
    }
  }
  
  /**
   * Format price for display
   */
  static formatPrice(price: number): string {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  }
  
  /**
   * Get formatted price info for UI
   */
  static getFormattedPriceInfo(courseSlug: string) {
    const priceInfo = this.getPromotionalPrice(courseSlug);
    const promotion = this.getCurrentPromotion();
    
    return {
      ...priceInfo,
      formattedOriginalPrice: this.formatPrice(priceInfo.originalPrice),
      formattedDiscountedPrice: this.formatPrice(priceInfo.discountedPrice),
      formattedSavings: priceInfo.hasDiscount 
        ? this.formatPrice(priceInfo.originalPrice - priceInfo.discountedPrice)
        : null,
      promotionReason: promotion?.reason || null,
      promotionValidUntil: promotion?.validUntil || null
    };
  }

  /**
   * Reset all pricing data to defaults (admin function)
   */
  static resetToDefaults(): void {
    try {
      localStorage.removeItem('cloud-evolvers-pricing');
      localStorage.removeItem('cloud-evolvers-promotion');
      localStorage.removeItem('cloud-evolvers-price-history');
      
      console.log('🔄 Pricing data reset to defaults');
    } catch (error) {
      console.error('Error resetting pricing data:', error);
    }
  }
}

// Auto-load pricing data when module is imported
if (typeof window !== 'undefined') {
  FrontendPricingService.loadPricingData();
}

// Export the service
export default FrontendPricingService;

// Export types for use in other components
export type { Promotion, PriceHistory };
