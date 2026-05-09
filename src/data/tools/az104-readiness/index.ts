import type { QuizLang, QuizLangPack } from './types';
import { QUIZ_LANGS } from './types';
import { en } from './en';
import { nl } from './nl';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';

export { QUIZ_LANGS };
export type { QuizLang, QuizLangPack, QuizQuestion, QuizDomain, QuizUi } from './types';

const packs: Record<QuizLang, QuizLangPack> = { en, nl, de, fr, es };

export const LANG_DISPLAY: Record<QuizLang, { label: string; nativeName: string }> = {
  en: { label: 'English', nativeName: 'English' },
  nl: { label: 'Dutch', nativeName: 'Nederlands' },
  de: { label: 'German', nativeName: 'Deutsch' },
  fr: { label: 'French', nativeName: 'Français' },
  es: { label: 'Spanish', nativeName: 'Español' },
};

export function isQuizLang(value: string | undefined): value is QuizLang {
  return !!value && (QUIZ_LANGS as string[]).includes(value);
}

export function getQuizPack(lang: QuizLang): QuizLangPack {
  return packs[lang];
}

export { en as enPack };
