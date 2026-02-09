import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Certificate, Cloud, Article, Globe, Shield, Phone, House } from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";
import { useLanguageContext } from "@/contexts/LanguageContext";
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

/**
 * MobileMenu Component - Mobile navigation overlay
 * 
 * Displays full navigation menu and language switcher for mobile devices.
 * Includes smooth animations and backdrop for better UX.
 */
export function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) {
  const { t } = useTranslations();
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();

  const navigationItems = [
    { href: "/", icon: House, label: t.nav?.home || "Home" },
    { href: "/training", icon: Certificate, label: t.nav?.training || "Training" },
    { href: "/azure-excellence", icon: Shield, label: t.nav?.azureExcellence || "Azure Excellence" },
    { href: "/services", icon: Cloud, label: t.nav?.services || "Services" },
    { href: "/about", icon: Globe, label: t.nav?.about || "About" },
    { href: "/blog", icon: Article, label: t.nav?.blog || "Blog" },
    { href: "/contact", icon: Phone, label: t.nav?.contact || "Contact" }
  ];

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[70px] left-4 right-4 z-50 md:hidden bg-card rounded-xl border border-border shadow-2xl overflow-hidden"
          >
            {/* Navigation Links */}
            <div className="p-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg
                      transition-all duration-200
                      ${isActive
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                      }
                    `}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${isActive
                        ? 'bg-blue-200 dark:bg-blue-800/70'
                        : 'bg-gray-200 dark:bg-slate-700'
                      }
                    `}>
                      <item.icon
                        size={20}
                        weight={isActive ? "fill" : "regular"}
                        className={isActive
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400'
                        }
                      />
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex items-center gap-2 p-1 rounded-lg bg-card">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage('nl')}
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-2 rounded-md
                    font-semibold transition-all duration-200
                    ${language === 'nl'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }
                  `}
                >
                  <ReactCountryFlag
                    countryCode="NL"
                    svg
                    style={{ width: '1.2em', height: '1.2em' }}
                    aria-label="Nederlands"
                  />
                  Nederlands
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-2 rounded-md
                    font-semibold transition-all duration-200
                    ${language === 'en'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }
                  `}
                >
                  <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{ width: '1.2em', height: '1.2em' }}
                    aria-label="English"
                  />
                  English
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
