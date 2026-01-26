"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { getBrandConfig, isCloudEvolversBrand } from "@/lib/brand-config";
import { Button } from "@/components/ui/button";

/**
 * Brand-aware theme toggle component - Simple button version
 * Cycles through light -> dark -> system themes
 * Shows different styling based on current brand
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // Get brand configuration
  const brandConfig = getBrandConfig();
  const isCloudEvolvers = isCloudEvolversBrand();
  
  // Feature flag - enable for both brands
  const showThemeToggle = true;
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted || !showThemeToggle) {
    return null;
  }

  // Simple cycle through themes: light -> dark -> system
  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  // Get current icon and label based on theme
  const getCurrentIcon = () => {
    if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    } else {
      return <Sun className="h-4 w-4" />;
    }
  };

  const getCurrentLabel = () => {
    if (theme === 'dark') return 'Dark';
    if (theme === 'system') return 'System';
    return 'Light';
  };

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={cycleTheme}
      className={cn(
        "transition-all duration-200 gap-2",
        "text-gray-700 dark:text-gray-200",
        "hover:bg-gray-100 dark:hover:bg-slate-700",
        "border border-gray-300/50 dark:border-slate-600/50",
        "backdrop-blur-sm",
        isCloudEvolvers 
          ? "hover:border-emerald-400/50 hover:text-emerald-600 dark:hover:border-emerald-400/50 dark:hover:text-emerald-400" 
          : "hover:border-blue-400/50 hover:text-blue-600 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
      )}
      aria-label={`Toggle theme (current: ${getCurrentLabel()})`}
      title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      {getCurrentIcon()}
      <span className="text-xs hidden sm:inline">{getCurrentLabel()}</span>
    </Button>
  );
}
