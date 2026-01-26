import en from '../locales/en.json';
import nl from '../locales/nl.json';

export type SupportedLang = 'en' | 'nl';

export const translations = { en, nl };

/**
 * Returns the translation object for the given language.
 * Defaults to English if unsupported.
 */
export function getTranslations(lang: SupportedLang) {
  // Always return the full translation object for the selected language
  return translations[lang as SupportedLang] as typeof en;
}
