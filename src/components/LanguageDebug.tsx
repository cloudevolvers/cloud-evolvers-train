import { useLanguageContext } from "@/contexts/LanguageContext";

export function LanguageDebug() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-mono border-2 border-blue-700">
        <div className="mb-2">🌍 DEBUG: <strong>{language.toUpperCase()}</strong></div>
        <div className="text-xs mb-2">Context Key: {language}-debug</div>
        <div className="flex gap-2">
          <button 
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 rounded text-xs ${language === 'en' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('nl')}
            className={`px-2 py-1 rounded text-xs ${language === 'nl' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            NL
          </button>
        </div>
      </div>
    </div>
  );
}
