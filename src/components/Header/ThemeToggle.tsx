import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  variant?: 'desktop' | 'mobile';
}

/**
 * ThemeToggle Component - Light/Dark mode switcher
 * 
 * Provides visual toggle between light and dark themes.
 * Supports both mobile and desktop variants with smooth animations.
 */
export function ThemeToggle({ theme, toggleTheme, variant = 'desktop' }: ThemeToggleProps) {
  const iconSize = variant === 'mobile' ? 20 : 18;
  const isDark = theme === 'dark';

  if (variant === 'mobile') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Sun size={iconSize} weight="duotone" className="text-amber-500" />
          ) : (
            <Moon size={iconSize} weight="duotone" className="text-blue-600" />
          )}
        </motion.div>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={iconSize} weight="duotone" className="text-amber-500" />
        ) : (
          <Moon size={iconSize} weight="duotone" className="text-blue-600" />
        )}
      </motion.div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </Button>
  );
}
