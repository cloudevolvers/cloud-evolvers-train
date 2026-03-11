/**
 * Frontend Pricing Service
 * Source of truth is D1 database; this provides client-side fallback prices.
 */

const CURRENT_PRICES: Record<string, number> = {
  'az-900-azure-fundamentals': 550,
  'azure-fundamentals': 550,
  'az-104-azure-administrator': 1795,
  'azure-administrator': 1795,
  'az-204-azure-developer': 2195,
  'azure-developer': 2195,
  'az-305-azure-architect': 1795,
  'azure-solutions-architect': 1795,
  'az-400-devops-engineer': 1795,
  'azure-devops-engineer': 1795,
  'az-500-security-engineer': 1795,
  'azure-security-engineer': 1795,
  'ai-900-ai-fundamentals': 550,
  'azure-ai-fundamentals': 550,
  'azure-security-fundamentals': 550,
  'az-700-network-engineer': 1295,
  'azure-network-engineer': 1295,
  'az-140-virtual-desktop': 1595,
  'azure-virtual-desktop': 1595,
  'az-220-iot-developer': 1895,
  'azure-iot-developer': 1895,
  'azure-stack-hub': 1295,
  'azure-support-engineer': 895,
  'azure-ai-developer-bootcamp': 1395,
  'azure-administrator-mastery': 1495,
  'ai-102-ai-engineer': 1950,
  'sc-100-cybersecurity-architect': 2195,
  'cybersecurity-architect': 2195,
  'ms-900-microsoft-365-fundamentals': 550,
  'microsoft-365-fundamentals': 550,
  'ms-102-microsoft-365-administrator': 1795,
  'microsoft-365-administrator': 1795,
  'microsoft-365-identity-access-administrator': 1195,
  'microsoft-365-security-administrator': 1195,
  'microsoft-365-copilot-mastery': 595,
  'copilot-agent-administration-fundamentals': 550,
  'ms-700-teams-administrator': 895,
  'teams-advanced-administration': 895,
  'sc-900-security-compliance-identity-fundamentals': 550,
  'security-compliance-identity-fundamentals': 550,
  'sc-200-security-operations-analyst': 1895,
  'security-operations-analyst': 1895,
  'pl-900-power-platform-fundamentals': 550,
  'power-platform-fundamentals': 550,
  'power-platform-automation': 895,
  'windows-server-hybrid-administrator': 1095,
  'windows-server-hybrid-infrastructure': 1595,
  'dp-300-database-administrator': 1795,
  'dp-203-data-engineer': 1795,
  'dp-100-data-scientist': 1795,
  'dp-900-data-fundamentals': 550,
  'dp-420-cosmos-db-developer': 1795,
  'dp-600-fabric-analytics-engineer': 1795,
  'pl-100-app-maker': 1795,
  'pl-200-functional-consultant': 1795,
  'pl-400-developer': 1795,
  'sc-300-security-administrator': 1795,
  'sc-400-information-protection-administrator': 1795,
};

interface Promotion {
  percentage: number;
  active: boolean;
  reason: string;
  validUntil: string;
  courses?: string[];
}

export class FrontendPricingService {

  static getAllPricing() {
    return { basePrices: CURRENT_PRICES, promotion: null as Promotion | null };
  }

  static getCoursePrice(courseSlug: string): number {
    const price = CURRENT_PRICES[courseSlug];
    if (price !== undefined) return price;
    // Only use fallback in production; in dev, return 0 so missing prices are visible
    const isProd = import.meta.env.VITE_ENVIRONMENT === 'production' || import.meta.env.MODE === 'production';
    return isProd ? 690 : 0;
  }

  static isFallbackPrice(courseSlug: string): boolean {
    return !(courseSlug in CURRENT_PRICES);
  }

  static getPromotionalPrice(courseSlug: string) {
    const originalPrice = this.getCoursePrice(courseSlug);
    return { originalPrice, discountedPrice: originalPrice, discount: 0, hasDiscount: false };
  }

  static getCurrentPromotion(): Promotion | null {
    return null;
  }

  static updateCoursePrice(courseSlug: string, newPrice: number): boolean {
    CURRENT_PRICES[courseSlug] = newPrice;
    return true;
  }

  static updatePromotion(_promotion: Promotion | null): boolean {
    return true;
  }

  static formatPrice(price: number): string {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  }

  static getFormattedPriceInfo(courseSlug: string) {
    const priceInfo = this.getPromotionalPrice(courseSlug);
    return {
      ...priceInfo,
      formattedOriginalPrice: this.formatPrice(priceInfo.originalPrice),
      formattedDiscountedPrice: this.formatPrice(priceInfo.discountedPrice),
      formattedSavings: null as string | null,
      promotionReason: null as string | null,
      promotionValidUntil: null as string | null,
    };
  }

  static resetToDefaults(): void {
    try {
      localStorage.removeItem('cloud-evolvers-pricing');
    } catch { /* noop */ }
  }
}

export default FrontendPricingService;
export type { Promotion };
