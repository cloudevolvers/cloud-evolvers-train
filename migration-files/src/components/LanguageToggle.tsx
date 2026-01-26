"use client";

import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/i18n';
import { isCloudEvolvers } from '@/lib/brand-config';

/**
 * Language toggle with proper country flags using react-country-flag
 * SSR-safe and hydration error free - now supports both languages
 * Dutch is disabled for xEvolve brand (shows "Coming Soon"), enabled for Cloud Evolvers
 */
export const LanguageToggle: React.FC = () => {
  const { language: currentLang, setLanguage, isClient } = useLanguage();
  
  // Use current language or fallback to English during SSR
  const displayLang = isClient ? currentLang : 'en';
  const t = getTranslations(displayLang);
  
  // Check if we're in Cloud Evolvers mode (Dutch enabled) or xEvolve mode (Dutch disabled)
  const isCloudEvolversBrand = isClient ? isCloudEvolvers() : false;
  const isDutchEnabled = isCloudEvolversBrand;
  
  const switchLanguage = (newLang: 'en' | 'nl') => {
    if (newLang === currentLang) return;
    if (newLang === 'nl' && !isDutchEnabled) return; // Prevent switching to Dutch on xEvolve
    setLanguage(newLang);
    // Optional: Remove reload for better UX, let React handle the language change
    // window.location.reload();
  };

  if (!isClient) {
    // Return loading state during SSR to prevent hydration mismatch
    return (
      <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
        <div className="h-7 px-2 text-xs font-medium rounded-md flex items-center">
          <span className="text-white/50">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
      {/* Dutch Button - Disabled for xEvolve, Enabled for Cloud Evolvers */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage('nl')}
        disabled={!isDutchEnabled}
        className={`h-7 px-2 text-xs font-medium transition-all duration-200 rounded-md ${
          displayLang === 'nl' && isDutchEnabled
            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm' 
            : isDutchEnabled
            ? 'text-white/70 hover:text-white hover:bg-white/10'
            : 'text-white/30 cursor-not-allowed opacity-50'
        }`}
      >
        <ReactCountryFlag
          countryCode="NL"
          svg
          style={{
            width: '1em',
            height: '1em',
            marginRight: '0.375rem',
            opacity: isDutchEnabled ? 1 : 0.3
          }}
          title={isDutchEnabled ? (t.languageToggle?.dutch || 'Nederlands') : (t.languageToggle?.dutchWebsiteComingSoon || 'Dutch Website Coming Soon')}
        />
        <span className="text-xs">
          {isDutchEnabled ? 'NL' : (t.languageToggle?.comingSoon || 'Coming Soon')}
        </span>
      </Button>
      
      {/* English Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage('en')}
        className={`h-7 px-2 text-xs font-medium transition-all duration-200 rounded-md ${
          displayLang === 'en' 
            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm' 
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: '1em',
            height: '1em',
            marginRight: '0.375rem'
          }}
          title={t.languageToggle?.english || 'English'}
        />
        <span className="text-xs">EN</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
