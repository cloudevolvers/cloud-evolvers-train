"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { getBrandConfig, getBrandColors, isHDRDisplay } from '@/lib/brand-config';

/**
 * Hook that combines brand configuration with theme detection and HDR optimization
 */
export function useBrandTheme() {
  const { theme, systemTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [isHDR, setIsHDR] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setIsHDR(isHDRDisplay());
    
    // Listen for media query changes (HDR/color gamut changes) with proper error handling
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const hdrQuery = window.matchMedia('(dynamic-range: high)');
      const p3Query = window.matchMedia('(color-gamut: p3)');
      
      const handleDisplayChange = () => {
        setIsHDR(isHDRDisplay());
      };
      
      hdrQuery.addEventListener('change', handleDisplayChange);
      p3Query.addEventListener('change', handleDisplayChange);
      
      return () => {
        hdrQuery.removeEventListener('change', handleDisplayChange);
        p3Query.removeEventListener('change', handleDisplayChange);
      };
    }
    return () => {};
  }, []);
  
  const brandConfig = getBrandConfig();
  const brandColors = getBrandColors(brandConfig);
  
  // Determine current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';
  
  return {
    brandConfig,
    brandColors,
    isClient,
    isHDR,
    isDark,
    currentTheme: currentTheme as 'light' | 'dark'
  };
}
