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
 * Monochrome design: subtle icon-only toggle for desktop,
 * larger button for mobile.
 */
export function ThemeToggle({ theme, toggleTheme, variant = 'desktop' }: ThemeToggleProps) {
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
        className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Sun size={20} weight="duotone" className="text-neutral-300" />
          ) : (
            <Moon size={20} weight="duotone" className="text-neutral-700" />
          )}
        </motion.div>
      </Button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={18} weight="duotone" className="text-neutral-300" />
        ) : (
          <Moon size={18} weight="duotone" className="text-neutral-700" />
        )}
      </motion.div>
    </button>
  );
}
