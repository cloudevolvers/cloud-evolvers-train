import { Link, useLocation } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {
  EXAM_LANGUAGES,
  LANGUAGE_DISPLAY,
  getLanguagesWithSlug,
  isExamSlug,
  type ExamLanguage,
} from '@/data/exam-questions'
import { cn } from '@/lib/utils'

interface Props {
  current: ExamLanguage
  examSlug?: string
  label: string
  className?: string
}

export function PracticeLanguageSwitcher({ current, examSlug, label, className }: Props) {
  const location = useLocation()
  const languages =
    examSlug && isExamSlug(examSlug) ? getLanguagesWithSlug(examSlug) : EXAM_LANGUAGES

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-ink-3)]">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-1 rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-1">
        {languages.map((lang) => {
          const display = LANGUAGE_DISPLAY[lang]
          const target = examSlug ? `/practice/${lang}/${examSlug}` : `/practice/${lang}`
          const isActive = lang === current
          return (
            <Link
              key={lang}
              to={target}
              state={{ from: location.pathname }}
              className={cn(
                'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium transition-colors',
                isActive
                  ? 'bg-[color:var(--ed-ink)] text-white'
                  : 'text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)]',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <ReactCountryFlag
                countryCode={display.countryCode}
                svg
                style={{ width: '12px', height: '12px' }}
              />
              {display.nativeName}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
