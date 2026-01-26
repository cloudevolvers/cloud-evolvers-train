import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

/**
 * Translation hook that provides the current translation object based on the selected language
 * @returns The translation object for the current language
 */
export function useTranslation() {
  const [language] = useLanguage();
  // Ensure language is valid, default to 'en'
  const lang = language || 'en';
  let t = translations[lang];

  // Fallback to 'en' if translation for current language is missing
  if (!t) {
    console.warn(`Missing translation for language: ${lang}. Falling back to 'en'.`);
    t = translations['en'];
  }

  // Final safety check - if even 'en' is missing (e.g. circular dependency)
  if (!t) {
    console.error('Critical: English translations are missing!');
    // Return an empty object cast as any to prevent immediate crashes, 
    // though the app will likely look broken
    return {} as typeof translations['en'];
  }

  return t;
}

/**
 * Simplified translation hook that returns both language and translations
 * @returns [language, translations] tuple
 */
export function useTranslationData() {
  const [language] = useLanguage();
  const t = translations[language || 'en'];

  return [language, t] as const;
}
