/**
 * Brand configuration system for Cloud Evolvers / xEvolve switching
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  description: string;
  logo: {
    icon: string; // Lucide icon name
    gradient: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    // HDR-safe alternatives for better display compatibility
    hdrSafe?: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  domain: string;
  contactEmail: string;
  privacyEmail: string;
  trainingEmail: string;
  focus: 'full-service' | 'training-focused';
  footer: {
    companyName: string;
    parentCompany?: string;
  };
}

export const XEVOLVE_BRAND: BrandConfig = {
  name: 'xEvolve',
  tagline: 'Expert Microsoft & Azure Training & Services',
  description: 'Complete Azure & Microsoft Insights',
  logo: {
    icon: 'Globe',
    gradient: 'from-blue-500 to-purple-500'
  },
  colors: {
    // Colors are Tailwind CSS classes that support both simple colors and gradients
    // Format: 'from-color-500 to-color-600' for gradients, 'bg-color-500' for solids
    // All components using these colors should prefix with appropriate CSS classes:
    // - For gradients: 'bg-gradient-to-r ${color}' 
    // - For solid colors: '${color}' (already includes bg- prefix)
    // This design maintains consistency while supporting modern gradient designs
    primary: 'from-blue-500 to-purple-500',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'bg-blue-600'
  },
  domain: 'xevolve.io',
  contactEmail: 'info@xevolve.io',
  privacyEmail: 'privacy@xevolve.io',
  trainingEmail: 'info@xevolve.io',
  focus: 'full-service',
  footer: {
    companyName: 'SpotCloud',
  }
};

export const CLOUD_EVOLVERS_BRAND: BrandConfig = {
  name: 'Cloud Evolvers',
  tagline: 'Expert Microsoft & Azure Training & Services',
  description: 'Expert-Led Cloud Training Solutions',
  logo: {
    icon: 'GraduationCap',
    gradient: 'from-emerald-500 to-teal-500'
  },
  colors: {
    primary: 'from-emerald-500 to-teal-500',
    secondary: 'from-teal-500 to-cyan-500',
    accent: 'bg-emerald-600',
    hdrSafe: {
      primary: 'from-green-500 to-cyan-600',
      secondary: 'from-cyan-500 to-blue-500',
      accent: 'bg-green-600'
    }
  },
  domain: 'cloudevolvers.com',
  contactEmail: 'training@cloudevolvers.com',
  privacyEmail: 'privacy@cloudevolvers.com',
  trainingEmail: 'training@cloudevolvers.com',
  focus: 'training-focused',
  footer: {
    companyName: 'Cloud Evolvers',
    parentCompany: 'A brand by Spot Cloud'
  }
};

/**
 * Get the current brand configuration based on environment variable and dev overrides
 */
export function getBrandConfig(): BrandConfig {
  // Check if we're running in Cloud Evolvers mode
  let isCloudEvolvers = process.env.NEXT_PUBLIC_CLOUD_EVOLVERS === '1' || 
                       process.env.CLOUD_EVOLVERS === '1';
  
  // In development, also check localStorage for brand switching (client-side only)
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    try {
      const storedBrand = localStorage.getItem('dev-brand-override');
      if (storedBrand === 'cloud-evolvers') {
        isCloudEvolvers = true;
      } else if (storedBrand === 'xevolve' || storedBrand === null) {
        // Default to xEvolve in development if no override is set
        isCloudEvolvers = false;
      }
    } catch (error) {
      // localStorage might not be available in some environments
      console.warn('localStorage not available:', error);
    }
  }
  
  return isCloudEvolvers ? CLOUD_EVOLVERS_BRAND : XEVOLVE_BRAND;
}

/**
 * Check if we're currently in Cloud Evolvers brand mode
 */
export function isCloudEvolversBrand(): boolean {
  let isCloudEvolvers = process.env.NEXT_PUBLIC_CLOUD_EVOLVERS === '1' || 
                       process.env.CLOUD_EVOLVERS === '1';
  
  // In development, also check localStorage for brand switching (client-side only)
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    try {
      const storedBrand = localStorage.getItem('dev-brand-override');
      if (storedBrand === 'cloud-evolvers') {
        isCloudEvolvers = true;
      } else if (storedBrand === 'xevolve' || storedBrand === null) {
        // Default to xEvolve in development if no override is set
        isCloudEvolvers = false;
      }
    } catch (error) {
      // localStorage might not be available in some environments
      console.warn('localStorage not available:', error);
    }
  }
  
  return isCloudEvolvers;
}

/**
 * Detect if the display supports high dynamic range or wide color gamut
 */
let cachedIsHDRDisplay: boolean | null = null;

// Validate color values to prevent CSS injection
export function validateColorClass(colorClass: string): string {
  // Only allow Tailwind CSS gradient classes and standard color classes
  const allowedPattern = /^(from-|to-|via-|bg-|text-|border-|hover:|focus:)?(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-[0-9]+)?(\/[0-9]+)?(\s|$)/;
  
  if (!allowedPattern.test(colorClass)) {
    console.warn(`Invalid color class detected: ${colorClass}. Using fallback.`);
    return 'from-blue-500 to-purple-500'; // Safe fallback
  }
  
  return colorClass;
}

export function isHDRDisplay(): boolean {
  if (cachedIsHDRDisplay !== null) {
    return cachedIsHDRDisplay;
  }

  if (typeof window === 'undefined') {
    cachedIsHDRDisplay = false;
    return cachedIsHDRDisplay;
  }

  // Check for HDR support
  const hasHighDynamicRange = window.matchMedia('(dynamic-range: high)').matches;

  // Check for wide color gamut (P3) support
  const hasWideColorGamut = window.matchMedia('(color-gamut: p3)').matches;

  // Also check CSS support for display-p3
  const hasP3Support = CSS?.supports?.('color', 'color(display-p3 1 1 1)') || false;

  cachedIsHDRDisplay = hasHighDynamicRange || hasWideColorGamut || hasP3Support;
  return cachedIsHDRDisplay;
}

/**
 * Get HDR-optimized colors for the current brand with validation
 */
export function getBrandColors(brandConfig: BrandConfig) {
  const useHDRColors = isHDRDisplay();
  
  let colors;
  if (useHDRColors && brandConfig.colors.hdrSafe) {
    colors = brandConfig.colors.hdrSafe;
  } else {
    colors = {
      primary: brandConfig.colors.primary,
      secondary: brandConfig.colors.secondary,
      accent: brandConfig.colors.accent
    };
  }
  
  // Validate all color values for security
  return {
    primary: validateColorClass(colors.primary),
    secondary: validateColorClass(colors.secondary),
    accent: validateColorClass(colors.accent)
  };
}

/**
 * Check if current brand is Cloud Evolvers
 */
export function isCloudEvolvers(): boolean {
  let cloudEvolvers = process.env.NEXT_PUBLIC_CLOUD_EVOLVERS === '1' || 
                      process.env.CLOUD_EVOLVERS === '1';
  
  // In development, also check localStorage for brand switching (client-side only)
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    try {
      const storedBrand = localStorage.getItem('dev-brand-override');
      if (storedBrand === 'cloud-evolvers') {
        cloudEvolvers = true;
      } else if (storedBrand === 'xevolve' || storedBrand === null) {
        // Default to xEvolve in development if no override is set
        cloudEvolvers = false;
      }
    } catch (error) {
      // localStorage might not be available in some environments
      console.warn('localStorage not available:', error);
    }
  }
  
  return cloudEvolvers;
}
