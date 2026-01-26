import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function useTranslations() {
  const { language } = useLanguageContext();
  
  // Get translations with fallback
  const t = translations[language] || translations.en;
  
  return {
    t,
    language,
    isEnglish: language === 'en',
    isDutch: language === 'nl'
  };
}
