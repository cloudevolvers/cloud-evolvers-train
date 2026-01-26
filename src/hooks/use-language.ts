import { useState, useEffect } from 'react';

export type Language = 'en' | 'nl';
export type Theme = 'light' | 'dark';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return [language, setLanguage] as const;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // First check localStorage
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved as Theme;
      }
      
      // Then check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme to document on mount and when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const setTheme = (newTheme: Theme | ((current: Theme) => Theme)) => {
    const nextTheme = typeof newTheme === 'function' ? newTheme(theme) : newTheme;
    setThemeState(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
    }
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('🎨 Theme Toggle:', { from: theme, to: newTheme });
    setTheme(newTheme);
    
    // Force immediate DOM update
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        console.log('✅ Added .dark class to <html>');
      } else {
        document.documentElement.classList.remove('dark');
        console.log('✅ Removed .dark class from <html>');
      }
    }
  };

  return [theme, setTheme, toggleTheme] as const;
}