import { useEffect, useState } from "react";
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

  const { t } = useTranslations();
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();

  // Force dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
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
    { href: "/azure-excellence", icon: Shield, label: t.nav?.azureExcellence || "Azure Excellence" },
    { href: "/services", icon: Cloud, label: t.nav?.services || "Services" },
    { href: "/about", icon: Globe, label: t.nav?.about || "About" },
    { href: "/blog", icon: Article, label: t.nav?.blog || "Blog" },
    { href: "/contact", icon: Phone, label: t.nav?.contact || "Contact" },
  ];

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-[9999]
          transition-all duration-500 ease-out
          ${isScrolled
            ? 'py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-black/30 border-b border-slate-200/50 dark:border-slate-700/50'
            : 'py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200/30 dark:border-slate-700/30'
          }
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand */}
            <Link to="/" className="group flex items-center gap-3">
              <motion.div
                className="flex flex-col"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Cloud Evolvers
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                  Azure & Microsoft Training
                </span>
              </motion.div>

              {/* MCT Badge - Desktop only */}
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20">
                <Certificate size={12} weight="fill" className="text-emerald-600 dark:text-emerald-400" />
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">
                  MCT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm">
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
                          ? 'text-white'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full"
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
            <div className="flex items-center gap-2">
              {/* Language Switcher - Desktop */}
              <div className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                <button
                  onClick={() => setLanguage('en')}
                  className={`
                    flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold
                    transition-all duration-200
                    ${language === 'en'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
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
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
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
                className="lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
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
                      <X size={20} weight="bold" className="text-slate-700 dark:text-slate-300" />
                    ) : (
                      <List size={20} weight="bold" className="text-slate-700 dark:text-slate-300" />
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
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
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
                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
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

              {/* Mobile Language Switcher */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm
                      transition-all duration-200
                      ${language === 'en'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
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
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
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
