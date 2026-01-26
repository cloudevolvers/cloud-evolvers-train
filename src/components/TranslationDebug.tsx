import { useTranslations } from '@/hooks/use-translations';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function TranslationDebug() {
  const { language } = useLanguageContext();
  const { t } = useTranslations();

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md">
      <div className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-mono border-2 border-red-700 max-h-80 overflow-y-auto">
        <div className="mb-2">🐛 TRANSLATION DEBUG</div>
        <div className="text-xs mb-2">Language: <strong>{language}</strong></div>
        <div className="text-xs mb-2">Raw translations available:</div>
        <div className="text-xs mb-1">✓ en: {translations.en ? 'YES' : 'NO'}</div>
        <div className="text-xs mb-1">✓ nl: {translations.nl ? 'YES' : 'NO'}</div>
        
        <div className="text-xs mb-2 mt-2">Current translation object:</div>
        <div className="text-xs mb-1">✓ t.hero: {t.hero ? 'YES' : 'NO'}</div>
        <div className="text-xs mb-1">✓ t.training: {t.training ? 'YES' : 'NO'}</div>
        <div className="text-xs mb-1">✓ t.training.excellence: {t.training?.excellence ? 'YES' : 'NO'}</div>
        
        <div className="text-xs mb-2 mt-2">Values:</div>
        <div className="text-xs mb-1">Hero title: {t.hero?.title || 'MISSING'}</div>
        <div className="text-xs mb-1">Training title: {t.training?.title || 'MISSING'}</div>
        <div className="text-xs mb-1">Excellence title: {t.training?.excellence?.title || 'MISSING'}</div>
      </div>
    </div>
  );
}
