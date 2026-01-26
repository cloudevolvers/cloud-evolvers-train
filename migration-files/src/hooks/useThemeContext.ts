"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { getBrandConfig, getBrandColors, isHDRDisplay, isCloudEvolversBrand } from '@/lib/brand-config';

/**
 * Comprehensive theme context hook that combines:
 * - Brand configuration and colors
 * - Theme state (light/dark/system)
 * - HDR display detection
 * - Theme persistence and transitions
 */
export function useThemeContext() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [isHDR, setIsHDR] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setIsHDR(isHDRDisplay());
    
    // Listen for display changes (HDR/color gamut changes)
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
  
  // Get brand configuration
  const brandConfig = getBrandConfig();
  const brandColors = getBrandColors(brandConfig);
  const isCloudEvolvers = isCloudEvolversBrand();
  
  // Determine current theme state
  const currentTheme = resolvedTheme || (theme === 'system' ? systemTheme : theme);
  const isDark = currentTheme === 'dark';
  const isLight = currentTheme === 'light';
  const isSystem = theme === 'system';
  
  // Theme toggle functions
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  
  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  const setSystemTheme = () => setTheme('system');
  
  // Feature flags
  const showThemeToggle = isCloudEvolvers; // Only show for Cloud Evolvers for now
  
  return {
    // Theme state
    theme,
    currentTheme: currentTheme as 'light' | 'dark' | undefined,
    isDark,
    isLight,
    isSystem,
    
    // Theme actions
    setTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
    
    // Brand information
    brandConfig,
    brandColors,
    isCloudEvolvers,
    
    // Display capabilities
    isClient,
    isHDR,
    
    // Feature flags
    showThemeToggle,
    
    // Computed values for styling
    themeClasses: {
      // Background gradients that work in both themes
      headerBg: isDark 
        ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-r from-white via-gray-50 to-white',
      
      // Text colors that adapt to theme
      primaryText: isDark ? 'text-white' : 'text-gray-900',
      secondaryText: isDark ? 'text-gray-300' : 'text-gray-600',
      mutedText: isDark ? 'text-gray-400' : 'text-gray-500',
      
      // Border colors
      border: isDark ? 'border-gray-700' : 'border-gray-200',
      
      // Card backgrounds
      card: isDark ? 'bg-gray-800/50' : 'bg-white/50',
      
      // Button variants for current brand and theme
      brandButton: isCloudEvolvers
        ? isDark
          ? `bg-gradient-to-r ${brandColors.primary} text-white hover:opacity-90`
          : `bg-gradient-to-r ${brandColors.primary} text-white hover:opacity-90`
        : isDark
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90'
          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90',
    }
  };
}
