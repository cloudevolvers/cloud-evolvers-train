import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Certificate,
  Cloud,
  Article,
  Globe,
  Shield,
  Phone,
  List,
  X,
} from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';

/**
 * Premium Header Component - Modern, Clean Design
 *
 * Features:
 * - Refined glass morphism with subtle backdrop blur
 * - Clean typography with professional spacing
 * - Smooth scroll-based transitions
 * - Premium hover states and animations
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return 'light';
    }
    return 'light';
  });

  const { t } = useTranslations();
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = () => setIsMobileMenuOpen(false);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { href: "/training", icon: Certificate, label: t.nav?.training || "Training" },
    { href: "/blog", icon: Article, label: t.nav?.blog || "Blog" },
    { href: "/azure-excellence", icon: Shield, label: t.nav?.azureExcellence || "Azure Excellence" },
    { href: "/services", icon: Cloud, label: t.nav?.services || "Services" },
    { href: "/about", icon: Globe, label: t.nav?.about || "About" },
    { href: "/contact", icon: Phone, label: t.nav?.contact || "Contact" },
  ];

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-[9999]
          transition-all duration-500 ease-out
          ${isScrolled
            ? 'py-2 bg-brand-900/95 backdrop-blur-xl shadow-lg shadow-brand-950/20'
            : 'py-4 bg-brand-900 backdrop-blur-md'
          }
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand */}
            <Link
              to="/"
              className="group flex items-center gap-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/cloudevolvers-logo-mountain.png"
                alt="Cloud Evolvers"
                className="h-9 sm:h-10 w-auto rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-100 transition-colors duration-200">
                  Cloud Evolvers
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-brand-300 tracking-wide hidden sm:block">
                  Azure & Microsoft Training
                </span>
              </div>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-sm">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.href ||
                    (item.href !== '/' && location.pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`
                        relative px-4 py-2 rounded-full text-sm font-medium
                        transition-all duration-200
                        ${isActive
                          ? 'text-brand-900'
                          : 'text-white/70 hover:text-white'
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-white rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <item.icon size={16} weight={isActive ? "fill" : "regular"} />
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle - Desktop (blog pages only) */}
              {location.pathname.startsWith('/blog') && (
                <div className="hidden sm:block">
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
              )}

              {/* Separator */}
              {location.pathname.startsWith('/blog') && (
                <div className="hidden sm:block w-px h-6 bg-white/20" />
              )}

              {/* Language Switcher - Desktop */}
              <div className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full bg-white/10">
                <button
                  onClick={() => setLanguage('en')}
                  className={`
                    flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold
                    transition-all duration-200
                    ${language === 'en'
                      ? 'bg-white text-brand-900 shadow-sm'
                      : 'text-white/70 hover:text-white'
                    }
                  `}
                >
                  <ReactCountryFlag countryCode="GB" svg style={{ width: '14px', height: '14px' }} />
                  EN
                </button>
                <button
                  onClick={() => setLanguage('nl')}
                  className={`
                    flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold
                    transition-all duration-200
                    ${language === 'nl'
                      ? 'bg-white text-brand-900 shadow-sm'
                      : 'text-white/70 hover:text-white'
                    }
                  `}
                >
                  <ReactCountryFlag countryCode="NL" svg style={{ width: '14px', height: '14px' }} />
                  NL
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X size={20} weight="bold" className="text-white" />
                    ) : (
                      <List size={20} weight="bold" className="text-white" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[9998] p-4 lg:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-brand-900 rounded-2xl shadow-xl border border-brand-700/30 overflow-hidden">
              <nav className="p-2">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-xl
                          transition-colors duration-200
                          ${isActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }
                        `}
                      >
                        <item.icon size={20} weight={isActive ? "fill" : "regular"} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Theme Toggle (blog pages only) */}
              {location.pathname.startsWith('/blog') && (
                <div className="p-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white/70">Theme</span>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} variant="mobile" />
                  </div>
                </div>
              )}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm
                      transition-all duration-200
                      ${language === 'en'
                        ? 'bg-white text-brand-900'
                        : 'bg-white/10 text-white/70'
                      }
                    `}
                  >
                    <ReactCountryFlag countryCode="GB" svg style={{ width: '16px', height: '16px' }} />
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('nl')}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm
                      transition-all duration-200
                      ${language === 'nl'
                        ? 'bg-white text-brand-900'
                        : 'bg-white/10 text-white/70'
                      }
                    `}
                  >
                    <ReactCountryFlag countryCode="NL" svg style={{ width: '16px', height: '16px' }} />
                    Nederlands
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
