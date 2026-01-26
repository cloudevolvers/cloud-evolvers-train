'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { SupportedLang } from '@/utils/i18n'
import { isCloudEvolvers } from '@/lib/brand-config'

interface LanguageContextType {
  language: SupportedLang
  setLanguage: (lang: SupportedLang) => void
  isClient: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with English as default for better compatibility
  const [language, setLanguageState] = useState<SupportedLang>('en')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Only run on client side to avoid hydration mismatches
    setIsClient(true)
    
    // Check if Dutch is enabled for current brand
    const isDutchEnabled = isCloudEvolvers()
    
    // First priority: Check URL parameters
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang') as SupportedLang;
      if (urlLang && ['nl', 'en'].includes(urlLang)) {
        // If trying to set Dutch but it's disabled for xEvolve, force English
        const finalLang = (urlLang === 'nl' && !isDutchEnabled) ? 'en' : urlLang;
        setLanguageState(finalLang);
        localStorage.setItem('lang', finalLang);
        document.cookie = `NEXT_LOCALE=${finalLang}; path=/; max-age=31536000; SameSite=Lax`;
        
        // If we forced a change from nl to en, update the URL to reflect this
        if (urlLang === 'nl' && finalLang === 'en') {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set('lang', 'en');
          window.history.replaceState({}, '', newUrl.toString());
        }
        return;
      }
    }
    
    // Second priority: Check for stored language preference
    const storedLang = localStorage.getItem('lang') as SupportedLang
    if (storedLang && ['nl', 'en'].includes(storedLang)) {
      // If stored lang is Dutch but Dutch is disabled, use English
      const finalLang = (storedLang === 'nl' && !isDutchEnabled) ? 'en' : storedLang;
      setLanguageState(finalLang)
      // Update stored preference if we had to change it
      if (finalLang !== storedLang) {
        localStorage.setItem('lang', finalLang);
      }
      return
    }

    // Third priority: Check cookie preference
    const cookieLang = document.cookie.match(/NEXT_LOCALE=(nl|en)/)?.[1] as SupportedLang
    if (cookieLang) {
      // If cookie lang is Dutch but Dutch is disabled, use English
      const finalLang = (cookieLang === 'nl' && !isDutchEnabled) ? 'en' : cookieLang;
      setLanguageState(finalLang)
      localStorage.setItem('lang', finalLang)
      // Update cookie if we had to change it
      if (finalLang !== cookieLang) {
        document.cookie = `NEXT_LOCALE=${finalLang}; path=/; max-age=31536000; SameSite=Lax`;
      }
      return
    }

    // Last priority: Auto-detect from browser language
    const browserLang = navigator.language.toLowerCase()
    let detectedLang: SupportedLang = 'en' // default to English
    
    if (browserLang.startsWith('nl') || browserLang.includes('netherlands')) {
      // Only set Dutch if it's enabled for current brand
      detectedLang = isDutchEnabled ? 'nl' : 'en'
    }
    
    setLanguageState(detectedLang)
    localStorage.setItem('lang', detectedLang)
    document.cookie = `NEXT_LOCALE=${detectedLang}; path=/; max-age=31536000; SameSite=Lax`
  }, [])

  const setLanguage = (lang: SupportedLang) => {
    // Check if Dutch is enabled for current brand
    const isDutchEnabled = typeof window !== 'undefined' ? isCloudEvolvers() : false
    
    // Prevent setting Dutch if it's disabled for xEvolve
    if (lang === 'nl' && !isDutchEnabled) {
      return // Don't change language to Dutch on xEvolve
    }
    
    setLanguageState(lang)
    localStorage.setItem('lang', lang)
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isClient }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
