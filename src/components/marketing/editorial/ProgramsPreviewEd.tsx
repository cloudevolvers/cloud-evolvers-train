import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { useTranslations } from '@/hooks/use-translations';
import { useCatalog, formatPrice, type CatalogItem } from '@/hooks/use-catalog';
import { examColor, badgeSrc, isStackit } from '@/lib/cert-badge';

const HOMEPAGE_SLUGS = [
  'azure-fundamentals',
  'azure-administrator',
  'azure-solutions-architect',
  'security-operations-analyst',
  'microsoft-365-copilot-mastery',
  'ai-business-professional',
];

export function ProgramsPreviewEd() {
  const { isDutch, language } = useTranslations();
  const { items, loading } = useCatalog();

  const featured = HOMEPAGE_SLUGS.map((slug) => items.find((c) => c.slug === slug)).filter(
    Boolean,
  ) as CatalogItem[];

  return (
    <section className="bg-[color:var(--ed-bg)] py-20 sm:py-28">
      <Wrap>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end mb-12">
          <div className="md:col-span-5">
            <Eyebrow>{isDutch ? 'Programma\u2019s' : 'Programs'}</Eyebrow>
            <Display as="h2" size="md" className="mt-4">
              {isDutch ? 'Tracks voor de rollen die je al draait.' : 'Tracks for the roles you already run.'}
            </Display>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Lede>
              {isDutch
                ? 'Fundamentals, administratie, architectuur, security en de nieuwe AI-bootcamps. Elke training heeft duidelijke uitkomsten, echte labs en een Microsoft-examen waar dat bestaat.'
                : 'Fundamentals, administration, architecture, security, and the new AI bootcamps. Every track has clear outcomes, real labs, and a Microsoft exam where one exists.'}
            </Lede>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--ed-rule)] border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden">
          {loading && featured.length === 0
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[color:var(--ed-card)] p-8 min-h-[260px] animate-pulse"
                />
              ))
            : featured.map((c) => (
                <ProgramCard key={c.slug} item={c} lang={language as 'en' | 'nl'} />
              ))}
        </div>

        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[14px] text-[color:var(--ed-ink-2)]">
            {isDutch
              ? `${items.length} trainingen beschikbaar in de catalogus.`
              : `${items.length} training tracks available in the catalog.`}
          </p>
          <EdButton to="/training" variant="primary" size="md">
            {isDutch ? 'Bekijk alle trainingen' : 'View all training'}
            <ArrowRight className="w-4 h-4" />
          </EdButton>
        </div>
      </Wrap>
    </section>
  );
}

function ProgramCard({ item, lang }: { item: CatalogItem; lang: 'en' | 'nl' }) {
  const price = formatPrice(item.price_cents, lang);
  const badge = badgeSrc(item.certification, item.certificationName);
  const stackit = isStackit(item.certification);
  const pillColor = examColor(item.certification);
  return (
    <Link
      to={`/training/${item.slug}`}
      className="group bg-[color:var(--ed-card)] p-8 flex flex-col min-h-[260px] transition-colors hover:bg-[color:var(--ed-bg-2)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {badge && (
            <span
              className={`inline-flex items-center justify-center rounded-md ${stackit ? 'h-9 px-2 bg-[#0c2c2e]' : 'h-9 w-9'}`}
            >
              <img
                src={badge}
                alt=""
                aria-hidden="true"
                className={stackit ? 'h-3.5 w-auto' : 'h-9 w-9'}
              />
            </span>
          )}
          {item.certification ? (
            <span
              className="inline-flex items-center justify-center rounded-md text-white font-700 px-2 py-0.5 text-[10px] tracking-[0.04em]"
              style={{ backgroundColor: pillColor }}
            >
              {item.certification}
            </span>
          ) : (
            <span className="ed-eyebrow text-[color:var(--ed-ink-3)] truncate">
              {item.category}
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] text-[color:var(--ed-ink-3)] flex-shrink-0">
          {item.duration_days}d · {item.difficulty}
        </span>
      </div>
      <h3 className="mt-5 ed-display text-[22px] text-[color:var(--ed-ink)] leading-tight">
        {item.title}
      </h3>
      {item.subtitle ? (
        <p className="mt-2 text-[14px] text-[color:var(--ed-ink-2)] leading-snug">
          {item.subtitle}
        </p>
      ) : null}
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--ed-rule)]">
        <span className="text-[14px] text-[color:var(--ed-ink)]">
          {price ?? (lang === 'nl' ? 'Op aanvraag' : 'On request')}
        </span>
        <span className="text-[color:var(--ed-accent)] group-hover:translate-x-0.5 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </span>
      </div>
    </Link>
  );
}
