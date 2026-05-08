import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Wrap, Eyebrow, Display } from '@/components/editorial'
import {
  getExamSet,
  getLanguagePack,
  isExamLanguage,
  isExamSlug,
} from '@/data/exam-questions'
import ExamPractice from '@/components/practice/ExamPractice'
import { PracticeLanguageSwitcher } from '@/components/practice/PracticeLanguageSwitcher'
import { CaretLeft } from '@phosphor-icons/react'

export default function PracticeExamPage() {
  const { lang, exam } = useParams()

  if (!isExamLanguage(lang)) {
    return <Navigate to="/practice/en" replace />
  }
  if (!isExamSlug(exam)) {
    return <Navigate to={`/practice/${lang}`} replace />
  }

  const pack = getLanguagePack(lang)
  const examSet = getExamSet(lang, exam)
  const ui = pack.ui

  const metaTitle = ui.examMetaTitle(examSet.examCode, examSet.examName)
  const metaDescription = ui.examMetaDescription(examSet.examCode, examSet.examName)

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <Helmet>
        <html lang={pack.htmlLang} />
        <title>{`${metaTitle} | Cloud Evolvers`}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://cloudevolvers.com/practice/${lang}/${exam}`}
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://cloudevolvers.com/practice/${lang}/${exam}`}
        />
      </Helmet>

      <section className="pt-20 pb-8 sm:pt-24">
        <Wrap narrow>
          <Link
            to={`/practice/${lang}`}
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--ed-ink-3)] transition-colors hover:text-[color:var(--ed-ink)]"
          >
            <CaretLeft size={14} weight="bold" />
            {ui.practiceLabel}
          </Link>

          <div className="mt-4 flex items-baseline justify-between gap-3">
            <Eyebrow accent>{examSet.examCode}</Eyebrow>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--ed-ink-3)]">
              {ui.practiceTenQuestions}
            </span>
          </div>
          <Display as="h1" size="md" className="mt-4 leading-[1.05]">
            {examSet.examName}
          </Display>
          <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ed-ink-2)]">
            {examSet.description}
          </p>

          <div className="mt-6 rounded-xl border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-ink-3)]">
              {ui.disclaimerLabel}
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--ed-ink-2)]">
              {ui.disclaimer}
            </p>
          </div>

          <div className="mt-6">
            <PracticeLanguageSwitcher
              current={lang}
              examSlug={exam}
              label={ui.languageSwitcherLabel}
            />
          </div>
        </Wrap>
      </section>

      <section className="pb-20">
        <Wrap narrow>
          <ExamPractice exam={examSet} ui={ui} lang={lang} />
        </Wrap>
      </section>
    </div>
  )
}
