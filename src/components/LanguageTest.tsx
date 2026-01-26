import { useTranslations } from '@/hooks/use-translations';
import { useLanguageContext } from '@/contexts/LanguageContext';

export function LanguageTest() {
  const { t, language } = useTranslations();
  const { setLanguage } = useLanguageContext();
  
  const handleLanguageChange = (newLang: 'en' | 'nl') => {
    setLanguage(newLang);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      border: '2px solid red', 
      padding: '10px', 
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <div>Current Language: <strong>{language}</strong></div>
      <div>Title: <strong>{t.hero.title}</strong></div>
      <button 
        onClick={() => handleLanguageChange('en')}
        style={{ margin: '5px', padding: '5px', background: language === 'en' ? 'blue' : 'gray', color: 'white' }}
      >
        EN
      </button>
      <button 
        onClick={() => handleLanguageChange('nl')}
        style={{ margin: '5px', padding: '5px', background: language === 'nl' ? 'orange' : 'gray', color: 'white' }}
      >
        NL
      </button>
    </div>
  );
}
