import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Wrap, Eyebrow, Display, Lede } from '@/components/editorial'
import {
  EXAM_SLUGS,
  getLanguagePack,
  isExamLanguage,
} from '@/data/exam-questions'
import { PracticeLanguageSwitcher } from '@/components/practice/PracticeLanguageSwitcher'
import { ArrowRight } from '@phosphor-icons/react'

export default function PracticeIndexPage() {
  const { lang } = useParams()

  if (!isExamLanguage(lang)) {
    return <Navigate to="/practice/en" replace />
  }

  const pack = getLanguagePack(lang)
  const ui = pack.ui

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <Helmet>
        <html lang={pack.htmlLang} />
        <title>{`${ui.indexMetaTitle} | Cloud Evolvers`}</title>
        <meta name="description" content={ui.indexMetaDescription} />
        <link rel="canonical" href={`https://cloudevolvers.com/practice/${lang}`} />
        <meta property="og:title" content={ui.indexMetaTitle} />
        <meta property="og:description" content={ui.indexMetaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://cloudevolvers.com/practice/${lang}`} />
      </Helmet>

      <section className="pt-20 pb-10 sm:pt-28 sm:pb-12">
        <Wrap>
          <Eyebrow accent>{ui.practiceLabel}</Eyebrow>
          <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
            {ui.indexTitle}
          </Display>
          <Lede className="mt-6 max-w-3xl">{ui.indexLede}</Lede>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
            <p className="text-[13px] text-[color:var(--ed-ink-3)] max-w-2xl">
              {ui.trainerNote}
            </p>
            <PracticeLanguageSwitcher
              current={lang}
              label={ui.languageSwitcherLabel}
            />
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <h2 className="ed-display text-[1.5rem] text-[color:var(--ed-ink)] md:text-[2rem]">
            {ui.pickExamHeading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {EXAM_SLUGS.map((slug) => {
              const exam = pack.exams[slug]
              return (
                <li key={slug}>
                  <Link
                    to={`/practice/${lang}/${slug}`}
                    className="group block h-full rounded-2xl border-2 border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-6 transition-colors hover:border-[color:var(--ed-accent)]"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-accent)]">
                        {ui.indexExamLabel} {exam.examCode}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--ed-ink-3)]">
                        {ui.indexQuestionsLabel(exam.questions.length)}
                      </span>
                    </div>
                    <h3 className="ed-display mt-3 text-[1.5rem] leading-tight text-[color:var(--ed-ink)] md:text-[1.75rem]">
                      {exam.examName}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ed-ink-2)]">
                      {exam.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--ed-ink)] group-hover:text-[color:var(--ed-accent)]">
                      {ui.startExam}
                      <ArrowRight size={14} weight="bold" />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Wrap>
      </section>

      <section className="pb-20">
        <Wrap>
          <div className="rounded-2xl border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ed-ink-3)]">
              {ui.disclaimerLabel}
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--ed-ink-2)]">
              {ui.disclaimer}
            </p>
          </div>
        </Wrap>
      </section>
    </div>
  )
}
