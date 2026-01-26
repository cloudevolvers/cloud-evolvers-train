import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderControls } from "./HeaderControls";
import { MobileMenu } from "./MobileMenu";

/**
 * Main Header Component - Fixed navigation bar with scroll effects
 * 
 * Features:
 * - Fixed positioning with backdrop blur
 * - Scroll-based size transitions
 * - Theme support (light/dark mode)
 * - Responsive design for all screen sizes
 * - Mobile menu integration
 * - Smooth animations
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Theme management moved to CSS
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Scroll detection and mobile menu handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-[9999] 
        transition-all duration-300 ease-in-out
        border-b border-transparent
        ${isScrolled
          ? 'py-3 bg-background/95 backdrop-blur-xl border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'py-5 bg-transparent'
        }
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Clean border for separation only when scrolled */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />

      {/* Main header content */}
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <HeaderBrand isScrolled={isScrolled} />
          <HeaderNavigation isScrolled={isScrolled} />
          <HeaderControls
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </motion.header>
  );
}
