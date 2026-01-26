import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Certificate, Cloud, Article, Globe, Shield, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";
import { useLanguageContext } from "@/contexts/LanguageContext";

interface HeaderNavigationProps {
  isScrolled: boolean;
}

/**
 * HeaderNavigation Component - Main navigation links
 * 
 * Displays navigation menu with icons and labels.
 * Hidden on mobile (handled by MobileMenu component).
 * Features hover effects and active state highlighting.
 */
export function HeaderNavigation({ isScrolled }: HeaderNavigationProps) {
  const { t } = useTranslations();
  const { language } = useLanguageContext();
  const location = useLocation();

  const navigationItems = [
    {
      href: "/training",
      icon: Certificate,
      label: t.nav?.training || "Training"
    },
    {
      href: "/azure-excellence",
      icon: Shield,
      label: language === 'nl' ? "Azure Excellence" : "Azure Excellence"
    },
    {
      href: "/services",
      icon: Cloud,
      label: t.nav?.services || "Services"
    },
    {
      href: "/about",
      icon: Globe,
      label: t.nav?.about || "About"
    },
    {
      href: "/blog",
      icon: Article,
      label: t.nav?.blog || "Blog"
    },
    {
      href: "/contact",
      icon: Phone,
      label: t.nav?.contact || "Contact"
    }
  ];

  return (
    <motion.nav
      className="hidden lg:flex items-center gap-1 xl:gap-2"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {navigationItems.map((item, index) => {
        const isActive = location.pathname === item.href;

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
          >
            <Link
              to={item.href}
              className={`
                group flex items-center gap-2 px-3 py-2 rounded-lg
                font-medium transition-all duration-300 text-sm tracking-wide
                ${isActive
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }
              `}
            >
              <item.icon
                size={18}
                weight={isActive ? "fill" : "regular"}
                className={`
                  transition-colors
                  ${isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-muted-foreground group-hover:text-blue-500'
                  }
                `}
              />

              <span className="whitespace-nowrap flex items-center gap-2">
                {item.label}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}
