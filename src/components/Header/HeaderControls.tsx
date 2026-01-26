import { Button } from "@/components/ui/button";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';
import { ThemeToggle } from "./ThemeToggle";

interface HeaderControlsProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

/**
 * HeaderControls Component - Theme toggle, language switcher, and mobile menu button
 * 
 * Displays different controls based on screen size:
 * - Mobile: Theme toggle + Menu button
 * - Desktop: Theme toggle + Language switcher
 */
export function HeaderControls({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  theme,
  toggleTheme
}: HeaderControlsProps) {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {/* Mobile Controls */}
      <div className="flex lg:hidden items-center gap-1.5">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} variant="mobile" />

        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="p-1.5 rounded-lg border border-border bg-card hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
          aria-label="Toggle mobile menu"
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
                <X size={20} weight="bold" className="text-gray-700 dark:text-gray-300" />
              ) : (
                <List size={20} weight="bold" className="text-gray-700 dark:text-gray-300" />
              )}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      {/* Desktop Controls */}
      <div className="hidden lg:flex items-center gap-2">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} variant="desktop" />

        {/* Language Switcher */}
        <motion.div
          className="flex items-center gap-0.5 p-0.5 rounded-lg bg-card border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage('en')}
            className={`
              flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold
              transition-all duration-200
              ${language === 'en'
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }
            `}
          >
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: '1em', height: '1em' }}
              aria-label="English"
            />
            EN
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage('nl')}
            className={`
              flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold
              transition-all duration-200
              ${language === 'nl'
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }
            `}
          >
            <ReactCountryFlag
              countryCode="NL"
              svg
              style={{ width: '1em', height: '1em' }}
              aria-label="Nederlands"
            />
            NL
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
