import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Warning, SquaresFour, ListBullets } from '@phosphor-icons/react';
import { getAllTrainings as getAllJSONTrainings } from '@/data/training-json';
import type { TrainingJSON } from '@/data/training-json/types';
import { useTranslations } from '@/hooks/use-translations';
import { SEO, PAGE_SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { examColor, badgeSrc, categoryCode, isStackit, isWorkshopBadge } from '@/lib/cert-badge';

interface TrainingItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  subcategory?: string;
  level: string;
  days: number;
  hours: number;
  featured?: boolean;
  examCode?: string;
  certName?: string;
  tags: string[];
  moduleCount: number;
  retired?: { date: string; successor?: string };
}

function toItem(t: TrainingJSON): TrainingItem {
  return {
    slug: t.slug,
    title: t.title,
    subtitle: t.subtitle,
    description: t.description,
    category: t.category,
    subcategory: t.subcategory,
    level: t.difficulty,
    days: t.duration.days,
    hours: t.duration.hours ?? 0,
    featured: t.featured,
    examCode: t.certification?.examCode,
    certName: t.certification?.name,
    tags: Array.isArray(t.tags) ? t.tags : [],
    moduleCount: Array.isArray(t.modules) ? t.modules.length : 0,
    retired: t.retired,
  };
}

function retirementStatus(retired?: { date: string; successor?: string }) {
  if (!retired) return null;
  const date = new Date(retired.date);
  const isRetired = date <= new Date();
  const label = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return { isRetired, label };
}

type ViewMode = 'cards' | 'list';

const VIEW_STORAGE_KEY = 'training-view-mode';

const TrainingOverviewPage: React.FC = () => {
  const [all, setAll] = useState<TrainingItem[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<ViewMode>(() => {
    if (typeof window === 'undefined') return 'cards';
    const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
    return stored === 'list' ? 'list' : 'cards';
  });
  const { isDutch } = useTranslations();

  useEffect(() => {
    try {
      setAll(getAllJSONTrainings().map(toItem));
    } catch {
      setAll([]);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(VIEW_STORAGE_KEY, view);
    }
  }, [view]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    all.forEach((t) => set.add(t.category));
    return Array.from(set).sort();
  }, [all]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const now = Date.now();
    return all
      .filter((t) => (category === 'all' ? true : t.category === category))
      .filter((t) =>
        q
          ? t.title.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            (t.examCode?.toLowerCase().includes(q) ?? false)
          : true
      )
      .sort((a, b) => {
        const aRet = a.retired && new Date(a.retired.date).getTime() <= now ? 1 : 0;
        const bRet = b.retired && new Date(b.retired.date).getTime() <= now ? 1 : 0;
        if (aRet !== bRet) return aRet - bRet;
        return a.title.localeCompare(b.title);
      });
  }, [all, category, query]);

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO {...PAGE_SEO.training} />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <div className="relative">
            <Eyebrow accent>{isDutch ? 'Trainingen' : 'Training'}</Eyebrow>
            <Display as="h1" size="lg" className="mt-5 leading-[1.02] max-w-3xl">
              {isDutch ? (
                <>
                  Azure, Microsoft 365 en STACKIT,{' '}
                  <span className="ed-display-italic">gegeven door iemand die ze draait.</span>
                </>
              ) : (
                <>
                  Azure, Microsoft 365, and STACKIT,{' '}
                  <span className="ed-display-italic">taught by someone who runs them.</span>
                </>
              )}
            </Display>
            <Lede className="mt-7">
              {isDutch
                ? 'Elke cursus wordt persoonlijk door Yaïr gegeven, in kleine groepen, met live cloud-labs. Geen content-bibliotheek, geen onderaannemers. STACKIT-training op aanvraag voor teams met een soevereiniteitsvraag.'
                : 'Every course is delivered personally by Yaïr, in small groups, in live cloud labs. No content library, no subcontractors. STACKIT training on request for teams with a sovereignty requirement.'}
            </Lede>
          </div>
        </Wrap>
      </section>

      <section className="pb-6">
        <Wrap>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 py-5 border-y border-[color:var(--ed-rule)]">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isDutch ? 'Zoek op titel, onderwerp of examencode' : 'Search by title, topic, or exam code'}
                className="w-full bg-transparent text-[15px] text-[color:var(--ed-ink)] placeholder:text-[color:var(--ed-ink-3)] border-0 focus:outline-none focus:ring-0 py-2"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setCategory('all')}
                className={`ed-eyebrow px-3 py-1.5 rounded-full border transition ${
                  category === 'all'
                    ? 'bg-[color:var(--ed-ink)] text-white border-[color:var(--ed-ink)]'
                    : 'border-[color:var(--ed-rule)] text-[color:var(--ed-ink-2)] hover:border-[color:var(--ed-ink)]'
                }`}
              >
                {isDutch ? 'Alles' : 'All'}
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`ed-eyebrow px-3 py-1.5 rounded-full border transition ${
                    category === c
                      ? 'bg-[color:var(--ed-ink)] text-white border-[color:var(--ed-ink)]'
                      : 'border-[color:var(--ed-rule)] text-[color:var(--ed-ink-2)] hover:border-[color:var(--ed-ink)]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-baseline gap-2 text-[13px] text-[color:var(--ed-ink-3)]">
            <span className="ed-display text-[18px] text-[color:var(--ed-ink)]">
              {filtered.length}
            </span>
            <span>
              {isDutch ? 'van' : 'of'} {all.length}{' '}
              {isDutch ? 'trainingen' : 'courses'}
            </span>
            {query || category !== 'all' ? (
              <button
                onClick={() => {
                  setCategory('all');
                  setQuery('');
                }}
                className="ed-eyebrow text-[color:var(--ed-accent)] hover:underline"
              >
                {isDutch ? 'Wis filters' : 'Clear filters'}
              </button>
            ) : null}
            <div className="ml-auto inline-flex rounded-md border border-[color:var(--ed-rule)] p-0.5">
              <button
                type="button"
                onClick={() => setView('cards')}
                aria-pressed={view === 'cards'}
                title={isDutch ? 'Kaartweergave' : 'Card view'}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-[12px] font-600 transition ${
                  view === 'cards'
                    ? 'bg-[color:var(--ed-ink)] text-white'
                    : 'text-[color:var(--ed-ink-2)] hover:text-[color:var(--ed-ink)]'
                }`}
              >
                <SquaresFour size={14} weight="bold" />
                {isDutch ? 'Kaarten' : 'Cards'}
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                aria-pressed={view === 'list'}
                title={isDutch ? 'Lijstweergave' : 'List view'}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-[12px] font-600 transition ${
                  view === 'list'
                    ? 'bg-[color:var(--ed-ink)] text-white'
                    : 'text-[color:var(--ed-ink-2)] hover:text-[color:var(--ed-ink)]'
                }`}
              >
                <ListBullets size={14} weight="bold" />
                {isDutch ? 'Lijst' : 'List'}
              </button>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="pb-20 sm:pb-28">
        <Wrap>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[15px] text-[color:var(--ed-ink-2)]">
                {isDutch ? 'Geen trainingen gevonden.' : 'No courses match your search.'}
              </p>
              <button
                onClick={() => {
                  setCategory('all');
                  setQuery('');
                }}
                className="mt-4 ed-eyebrow text-[color:var(--ed-accent)] hover:underline"
              >
                {isDutch ? 'Wis filters' : 'Clear filters'}
              </button>
            </div>
          ) : view === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--ed-rule)] border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden">
              {filtered.map((t) => {
                const retirement = retirementStatus(t.retired);
                const color = examColor(t.examCode, t.category);
                const badge = badgeSrc(t.examCode, t.certName, t.title);
                const stackit = isStackit(t.examCode);
                const workshop = isWorkshopBadge(badge);
                const code = t.examCode || categoryCode(t.category);
                const visibleTags = t.tags.slice(0, 3);
                return (
                  <Link
                    key={t.slug}
                    to={`/training/${t.slug}`}
                    className={`group bg-[color:var(--ed-card)] p-7 flex flex-col min-h-[320px] transition-colors hover:bg-[color:var(--ed-bg-2)] ${retirement?.isRetired ? 'opacity-70' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
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
                        <span
                          className="inline-flex items-center justify-center rounded-md text-white font-700 px-2 py-0.5 text-[10px] tracking-[0.04em]"
                          style={{ backgroundColor: color }}
                        >
                          {code}
                        </span>
                        {workshop && (
                          <span className="ed-eyebrow text-[color:var(--ed-ink-3)]">
                            {isDutch ? 'Workshop' : 'Workshop'}
                          </span>
                        )}
                      </div>
                      {retirement && (
                        <span className="ed-eyebrow inline-flex items-center gap-1 text-[color:var(--ed-ink-3)]">
                          <Warning size={10} weight="regular" />
                          {retirement.isRetired
                            ? (isDutch ? 'Uitgefaseerd' : 'Retired')
                            : `${isDutch ? 'Stopt' : 'Retires'} ${retirement.label}`}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-5 ed-display text-[22px] text-[color:var(--ed-ink)] leading-[1.15] group-hover:text-[color:var(--ed-accent)] transition-colors">
                      {t.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-[1.55] text-[color:var(--ed-ink-2)] line-clamp-3">
                      {t.description}
                    </p>
                    {visibleTags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {visibleTags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-bg-2)] px-2 py-0.5 text-[10.5px] tracking-[0.02em] text-[color:var(--ed-ink-2)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--ed-rule)]">
                      <span className="text-[13px] text-[color:var(--ed-ink-2)]">
                        {t.days > 0
                          ? `${t.days} ${t.days === 1 ? (isDutch ? 'dag' : 'day') : (isDutch ? 'dagen' : 'days')}`
                          : `${t.hours}h`}
                        <span className="mx-1.5 text-[color:var(--ed-ink-3)]">·</span>
                        <span className="text-[color:var(--ed-ink-3)]">{t.level}</span>
                        {t.moduleCount > 0 && (
                          <>
                            <span className="mx-1.5 text-[color:var(--ed-ink-3)]">·</span>
                            <span className="text-[color:var(--ed-ink-3)]">
                              {t.moduleCount}{' '}
                              {t.moduleCount === 1
                                ? (isDutch ? 'module' : 'module')
                                : (isDutch ? 'modules' : 'modules')}
                            </span>
                          </>
                        )}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[color:var(--ed-accent)] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="border border-[color:var(--ed-rule)] rounded-[6px] overflow-hidden divide-y divide-[color:var(--ed-rule)]">
              {filtered.map((t) => {
                const retirement = retirementStatus(t.retired);
                const color = examColor(t.examCode, t.category);
                const badge = badgeSrc(t.examCode, t.certName, t.title);
                const stackit = isStackit(t.examCode);
                const code = t.examCode || categoryCode(t.category);
                return (
                  <Link
                    key={t.slug}
                    to={`/training/${t.slug}`}
                    className={`group flex items-center gap-4 px-5 py-4 bg-[color:var(--ed-card)] transition-colors hover:bg-[color:var(--ed-bg-2)] ${retirement?.isRetired ? 'opacity-70' : ''}`}
                  >
                    <span
                      className={`flex-shrink-0 inline-flex items-center justify-center rounded-md ${stackit ? 'h-7 px-2 bg-[#0c2c2e]' : 'h-7 w-7'}`}
                    >
                      <img
                        src={badge}
                        alt=""
                        aria-hidden="true"
                        className={stackit ? 'h-3 w-auto' : 'h-7 w-7'}
                      />
                    </span>
                    <span
                      className="flex-shrink-0 inline-flex items-center justify-center rounded-md text-white font-700 px-2 py-1 text-[10px] tracking-[0.04em] min-w-[56px] h-6"
                      style={{ backgroundColor: color }}
                    >
                      {code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-600 text-[color:var(--ed-ink)] truncate group-hover:text-[color:var(--ed-accent)] transition-colors">
                          {t.title}
                        </h3>
                        {retirement && (
                          <span className="ed-eyebrow inline-flex items-center gap-1 text-[color:var(--ed-ink-3)] flex-shrink-0">
                            <Warning size={10} weight="regular" />
                            {retirement.isRetired
                              ? (isDutch ? 'Uitgefaseerd' : 'Retired')
                              : retirement.label}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[13px] text-[color:var(--ed-ink-2)] truncate">
                        {t.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 items-center gap-4 text-[13px] text-[color:var(--ed-ink-3)]">
                      <span>{t.category}</span>
                      <span className="w-px h-4 bg-[color:var(--ed-rule)]" aria-hidden="true" />
                      <span>{t.level}</span>
                      <span className="w-px h-4 bg-[color:var(--ed-rule)]" aria-hidden="true" />
                      <span className="min-w-[60px] text-right">
                        {t.days > 0
                          ? `${t.days} ${t.days === 1 ? (isDutch ? 'dag' : 'day') : (isDutch ? 'dagen' : 'days')}`
                          : `${t.hours}h`}
                      </span>
                    </div>
                    <ArrowRight className="flex-shrink-0 w-4 h-4 text-[color:var(--ed-accent)] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>
          )}
        </Wrap>
      </section>

      <section className="py-16 bg-[color:var(--ed-bg-2)] border-y border-[color:var(--ed-rule)]">
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>{isDutch ? 'Niet zeker welke cursus' : 'Not sure which course'}</Eyebrow>
              <Display as="h2" size="sm" className="mt-3">
                {isDutch ? 'We helpen je kiezen.' : 'We will help you pick.'}
              </Display>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ed-ink-2)] max-w-md">
                {isDutch
                  ? 'Vertel ons over de rollen en het ervaringsniveau van je team. Wij stellen een traject voor.'
                  : 'Tell us the roles and experience level on your team. We propose a track.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <EdButton to="/services" variant="ghost" size="lg">
                {isDutch ? 'Bekijk diensten' : 'Browse services'}
              </EdButton>
              <EdButton to="/contact" variant="primary" size="lg">
                {isDutch ? 'Neem contact op' : 'Get in touch'}
                <ArrowRight className="w-4 h-4" />
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default TrainingOverviewPage;
