import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Warning, CheckCircle, Users, BookOpen } from '@phosphor-icons/react';
import { loadTrainingBySlug } from '@/content/loader';
import TrainingDetailContent from '@/components/training/TrainingDetailContent';
import TrainingBookingForm from '@/components/training/TrainingBookingForm';
import { useTrainingSessions } from '@/hooks/use-training-sessions';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/use-translations';
import type { TrainingJSON } from '@/content/types';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { examColor, badgeSrc, isStackit } from '@/lib/cert-badge';

function formatPrice(cents: number | null | undefined, language: 'en' | 'nl' = 'en'): string | null {
  if (!cents || cents <= 0) return null;
  const locale = language === 'nl' ? 'nl-NL' : 'en-IE';
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(cents / 100);
}

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguageContext();
  const { t, isDutch } = useTranslations();
  const [training, setTraining] = useState<TrainingJSON | null>(null);
  const [loading, setLoading] = useState(true);
  const { sessions, loading: sessionsLoading } = useTrainingSessions(slug);

  useEffect(() => {
    if (slug) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      try {
        setLoading(true);
        const data = await loadTrainingBySlug(slug, language);
        setTraining(data);
      } catch {
        setTraining(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug, language]);

  if (!slug) return <Navigate to="/training" replace />;

  if (loading) {
    return (
      <div className="bg-[color:var(--ed-bg)] min-h-screen flex items-center justify-center">
        <p className="text-[14px] font-mono text-[color:var(--ed-ink-3)]">
          {isDutch ? 'Training laden' : 'Loading training'}
        </p>
      </div>
    );
  }

  if (!training) {
    return (
      <div className="bg-[color:var(--ed-bg)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Display as="h1" size="sm" className="mb-4">
            {isDutch ? 'Training niet gevonden' : 'Training not found'}
          </Display>
          <EdButton to="/training" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4" />
            {isDutch ? 'Terug naar trainingen' : 'Back to training'}
          </EdButton>
        </div>
      </div>
    );
  }

  const sessionPriceCents = sessions.length > 0 ? sessions[0].price : null;
  const priceFormatted = formatPrice(sessionPriceCents, language as 'en' | 'nl');
  const priceDisplay = priceFormatted || (isDutch ? 'Op aanvraag' : 'Contact us');

  const retireDate = training.retired ? new Date(training.retired.date) : null;
  const isRetired = retireDate ? retireDate <= new Date() : false;
  const retireLabel = retireDate
    ? retireDate.toLocaleDateString(isDutch ? 'nl-NL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  const badge = badgeSrc(training.certification?.examCode, training.certification?.name);
  const badgeIsStackit = isStackit(training.certification?.examCode);
  const examPillColor = examColor(training.certification?.examCode);

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <section className="relative pt-20 sm:pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <Link
            to="/training"
            className="inline-flex items-center gap-1.5 text-[13px] text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)] mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {isDutch ? 'Terug naar trainingen' : 'Back to training'}
          </Link>

          {training.retired && retireLabel && (
            <div className={`mb-8 rounded-[6px] border p-4 flex items-start gap-3 ${isRetired ? 'border-red-300 bg-red-50 text-red-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
              <Warning className="h-5 w-5 mt-0.5 flex-shrink-0" weight="regular" />
              <div className="text-[14px] leading-relaxed">
                <p className="font-medium">
                  {isRetired
                    ? (isDutch
                        ? `Deze certificering is uitgefaseerd op ${retireLabel}.`
                        : `This certification retired on ${retireLabel}.`)
                    : (isDutch
                        ? `Deze certificering wordt uitgefaseerd op ${retireLabel}.`
                        : `This certification retires on ${retireLabel}.`)}
                </p>
                {training.retired.successor && (
                  <p className="mt-1">
                    {isDutch ? 'Microsoft raadt ' : 'Microsoft recommends '}
                    <Link to={`/training/${training.retired.successor}`} className="font-semibold underline hover:no-underline">
                      {isDutch ? 'de vervangende training' : 'the replacement course'}
                    </Link>
                    {isDutch ? ' aan.' : ' instead.'}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3">
                {badge && (
                  <span
                    className={`inline-flex items-center justify-center rounded-md ${badgeIsStackit ? 'h-12 px-3 bg-[#0c2c2e]' : 'h-12 w-12'}`}
                  >
                    <img
                      src={badge}
                      alt=""
                      aria-hidden="true"
                      className={badgeIsStackit ? 'h-4 w-auto' : 'h-12 w-12'}
                    />
                  </span>
                )}
                {training.certification?.examCode ? (
                  <span
                    className="inline-flex items-center justify-center rounded-md text-white font-700 px-2.5 py-1 text-[11px] tracking-[0.04em]"
                    style={{ backgroundColor: examPillColor }}
                  >
                    {training.certification.examCode}
                  </span>
                ) : (
                  <Eyebrow accent>{training.category}</Eyebrow>
                )}
                {training.certification?.name && (
                  <span className="ed-eyebrow text-[color:var(--ed-ink-3)] truncate">
                    {training.certification.name.replace(/^Microsoft (Certified|365 Certified|Security, Compliance, and Identity): ?/, '')}
                  </span>
                )}
              </div>
              <Display as="h1" size="lg" className="mt-5 leading-[1.05]">
                {training.title}
              </Display>
              {training.description && (
                <Lede className="mt-7">{training.description}</Lede>
              )}
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--ed-rule)] pt-8 max-w-xl">
                <div>
                  <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                    {isDutch ? 'Duur' : 'Duration'}
                  </dt>
                  <dd className="mt-2 ed-display text-[22px] text-[color:var(--ed-ink)]">
                    {training.duration?.days || 0}
                    <span className="text-[14px] font-normal text-[color:var(--ed-ink-2)] ml-1">
                      {(training.duration?.days || 0) === 1
                        ? (isDutch ? 'dag' : 'day')
                        : (isDutch ? 'dagen' : 'days')}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                    {isDutch ? 'Niveau' : 'Level'}
                  </dt>
                  <dd className="mt-2 ed-display text-[22px] text-[color:var(--ed-ink)]">
                    {training.difficulty}
                  </dd>
                </div>
                <div>
                  <dt className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                    {isDutch ? 'Prijs' : 'Price'}
                  </dt>
                  <dd className="mt-2 ed-display text-[22px] text-[color:var(--ed-accent)]">
                    {priceDisplay}
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-[color:var(--ed-card)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                <Eyebrow>{isDutch ? 'Boek deze training' : 'Book this training'}</Eyebrow>
                <p className="mt-3 text-[14px] text-[color:var(--ed-ink-2)] leading-relaxed">
                  {isDutch
                    ? 'Vraag een plek aan of bespreek een in-company cohort. Yaïr reageert binnen 24 uur.'
                    : 'Request a seat or discuss an in-company cohort. Yaïr replies within 24 hours.'}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="#booking-form"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] bg-[color:var(--ed-ink)] text-white hover:bg-[color:var(--ed-ink-2)] transition"
                  >
                    {isDutch ? 'Vraag details aan' : 'Request details'}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] text-[color:var(--ed-ink)] border border-[color:var(--ed-rule)] hover:border-[color:var(--ed-ink)] transition"
                  >
                    {isDutch ? 'Algemene intake' : 'General intake'}
                  </Link>
                </div>
              </div>

              {training.prerequisites && training.prerequisites.length > 0 && (
                <div className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                  <Eyebrow>
                    {t.training?.detail?.prerequisites || (isDutch ? 'Voorkennis' : 'Prerequisites')}
                  </Eyebrow>
                  <ul className="mt-4 space-y-3">
                    {training.prerequisites.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[color:var(--ed-ink-2)]">
                        <CheckCircle size={16} weight="regular" className="mt-[2px] shrink-0 text-[color:var(--ed-accent)]" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {training.targetAudience && training.targetAudience.length > 0 && (
                <div className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                  <Eyebrow>
                    {t.training?.detail?.targetAudience || (isDutch ? 'Doelgroep' : 'Target audience')}
                  </Eyebrow>
                  <ul className="mt-4 space-y-3">
                    {training.targetAudience.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[color:var(--ed-ink-2)]">
                        <Users size={16} weight="regular" className="mt-[2px] shrink-0 text-[color:var(--ed-ink-3)]" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {training.tags && training.tags.length > 0 && (
                <div className="bg-[color:var(--ed-bg-2)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                  <Eyebrow>
                    {t.training?.detail?.topicsCovered || (isDutch ? 'Onderwerpen' : 'Topics')}
                  </Eyebrow>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {training.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="ed-eyebrow px-2.5 py-1 rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] text-[color:var(--ed-ink-2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {training.instructor?.name && (
                <div className="bg-[color:var(--ed-card)] border border-[color:var(--ed-rule)] rounded-[6px] p-6">
                  <Eyebrow>
                    {t.training?.detail?.instructor || (isDutch ? 'Trainer' : 'Instructor')}
                  </Eyebrow>
                  <div className="mt-4 flex items-start gap-4">
                    <img
                      src="/1625557501943.jpg"
                      alt={training.instructor.name}
                      className="w-14 h-14 rounded-[4px] object-cover object-[center_18%] border border-[color:var(--ed-rule)]"
                    />
                    <div>
                      <p className="text-[15px] font-medium text-[color:var(--ed-ink)]">
                        {training.instructor.name}
                      </p>
                      <p className="mt-1 ed-eyebrow text-[color:var(--ed-ink-3)]">
                        {training.instructor.title || 'MCT'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Wrap>
      </section>

      <section className="pb-16 sm:pb-24">
        <Wrap>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 pb-6 border-b border-[color:var(--ed-rule)]">
              <BookOpen size={18} weight="regular" className="text-[color:var(--ed-ink-3)]" />
              <Eyebrow>{isDutch ? 'Programma' : 'Curriculum'}</Eyebrow>
            </div>
            <div className="mt-8">
              <TrainingDetailContent training={training} />
            </div>
          </div>
        </Wrap>
      </section>

      <section id="booking-form" className="py-16 sm:py-20 bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)] scroll-mt-20">
        <Wrap>
          <div className="max-w-3xl">
            <Eyebrow accent>{isDutch ? 'Volgende stap' : 'Next step'}</Eyebrow>
            <Display as="h2" size="md" className="mt-3">
              {isDutch ? 'Vraag deze training aan.' : 'Request this training.'}
            </Display>
            <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--ed-ink-2)] max-w-xl">
              {isDutch
                ? 'Vertel ons over je team en de tijdlijn. We reageren binnen 24 uur met beschikbare data en een vaste prijs.'
                : 'Tell us about your team and the timeline. We reply within 24 hours with available dates and a fixed price.'}
            </p>
            <div className="mt-10 bg-[color:var(--ed-card)] border border-[color:var(--ed-rule)] rounded-[6px] p-6 sm:p-8">
              <TrainingBookingForm
                training={training}
                language={language}
                sessions={sessions}
                sessionsLoading={sessionsLoading}
              />
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
