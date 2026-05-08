import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';
import { useTranslations } from '@/hooks/use-translations';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { EdButton, Wrap, CloudEvolversMark } from '@/components/editorial';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  const { t } = useTranslations();
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();
  const onBlog = location.pathname.startsWith('/blog');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    if (onBlog) {
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    } else {
      root.classList.add('light');
    }
  }, [theme, onBlog]);

  const toggleTheme = useCallback(() => {
    setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const close = () => setIsMobileOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const practiceLang = language === 'nl' ? 'nl' : 'en';
  const nav = [
    { href: '/training', label: t.nav?.training || 'Training' },
    { href: '/services', label: t.nav?.services || 'Services' },
    { href: `/practice/${practiceLang}`, label: t.nav?.practice || 'Practice' },
    { href: '/about', label: t.nav?.about || 'About' },
    { href: '/blog', label: t.nav?.blog || 'Blog' },
    { href: '/contact', label: t.nav?.contact || 'Contact' },
  ];

  const isActive = (href: string) =>
    location.pathname === href ||
    (href !== '/' && location.pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-[90] bg-[color:var(--ed-bg)]/85 backdrop-blur-md backdrop-saturate-150 border-b border-[color:var(--ed-rule)]">
        <Wrap>
          <div className="flex items-center gap-10 h-16">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Cloud Evolvers">
              <CloudEvolversMark size={32} />
              <span className="ed-display text-[20px] text-[color:var(--ed-ink)]">
                Cloud Evolvers
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[color:var(--ed-ink-2)]">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'relative py-1.5 transition-colors hover:text-[color:var(--ed-ink)]',
                    isActive(item.href) && 'text-[color:var(--ed-ink)]',
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-[22px] left-0 right-0 h-0.5 bg-[color:var(--ed-accent)]" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3">
              {onBlog && (
                <div className="hidden sm:block">
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
              )}

              <div className="hidden sm:flex items-center gap-0.5 rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)] p-0.5">
                <LangButton
                  active={language === 'en'}
                  onClick={() => setLanguage('en')}
                  code="GB"
                  label="EN"
                />
                <LangButton
                  active={language === 'nl'}
                  onClick={() => setLanguage('nl')}
                  code="NL"
                  label="NL"
                />
              </div>

              <div className="hidden md:flex items-center gap-2">
                <EdButton variant="ghost" size="sm" to="/training">
                  {t.nav?.signUp || 'Sign up'}
                </EdButton>
                <EdButton variant="primary" size="sm" to="/contact">
                  {t.nav?.planCohort || 'Plan a cohort'}
                </EdButton>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileOpen(!isMobileOpen);
                }}
                className="lg:hidden p-2 rounded-full border border-[color:var(--ed-rule)] bg-[color:var(--ed-card)]"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={18} /> : <List size={18} />}
              </button>
            </div>
          </div>
        </Wrap>
      </header>

      {isMobileOpen && (
        <div
          className="lg:hidden fixed top-16 left-0 right-0 z-[89] bg-[color:var(--ed-bg)] border-b border-[color:var(--ed-rule)] shadow-[var(--ed-shadow)]"
          onClick={(e) => e.stopPropagation()}
        >
          <Wrap>
            <nav className="py-4 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    'py-3 ed-display text-[22px] text-[color:var(--ed-ink)] border-b border-[color:var(--ed-rule)] last:border-b-0',
                    isActive(item.href) &&
                      'text-[color:var(--ed-accent)] ed-display-italic',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex gap-2">
                <EdButton
                  variant="ghost"
                  size="md"
                  to="/training"
                  className="flex-1 justify-center"
                >
                  {t.nav?.signUp || 'Sign up'}
                </EdButton>
                <EdButton
                  variant="primary"
                  size="md"
                  to="/contact"
                  className="flex-1 justify-center"
                >
                  {t.nav?.planCohort || 'Plan a cohort'}
                </EdButton>
              </div>
            </nav>
          </Wrap>
        </div>
      )}
    </>
  );
}

function LangButton({
  active,
  onClick,
  code,
  label,
}: {
  active: boolean;
  onClick: () => void;
  code: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-medium transition-colors',
        active
          ? 'bg-[color:var(--ed-ink)] text-white'
          : 'text-[color:var(--ed-ink-3)] hover:text-[color:var(--ed-ink)]',
      )}
    >
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{ width: '12px', height: '12px' }}
      />
      {label}
    </button>
  );
}
