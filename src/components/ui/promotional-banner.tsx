import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Tag, Sparkle, Rocket, Gift, ArrowRight } from '@phosphor-icons/react';
import { isPromotionalPricingActive } from '@/lib/pricing';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface PromotionalBannerProps {
  className?: string;
  compact?: boolean;
}

export function PromotionalBanner({ className = '', compact = false }: PromotionalBannerProps) {
  const isActive = isPromotionalPricingActive();
  const { language } = useLanguageContext();

  if (!isActive) return null;

  // Translation content
  const content = {
    en: {
      title: 'NEW COMPANY LAUNCH',
      allCourses: 'ALL TRAINING COURSES',
      limitedTime: 'Limited time offer',
      cta: 'View Courses'
    },
    nl: {
      title: 'NIEUWE BEDRIJFSLANCERING',
      allCourses: 'ALLE TRAININGEN',
      limitedTime: 'Beperkte tijd',
      cta: 'Bekijk Cursussen'
    }
  };

  const t = content[language || 'en'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Solid professional background */}
      <div className="absolute inset-0 bg-blue-700 hover:bg-blue-800 transition-colors" />

      <div className={`relative z-10 flex items-center justify-center gap-4 md:gap-6 ${compact ? 'py-2 px-4' : 'py-2.5 px-6'}`}>
        {/* Left section - Launch announcement */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block"
          >
            <Rocket className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} text-white`} weight="fill" />
          </motion.div>
          <span className={`font-bold ${compact ? 'text-xs' : 'text-sm'} text-white tracking-wide uppercase`}>
            {t.title}
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-5 w-px bg-white/30" />

        {/* Center section - Discount badge */}
        <div className="flex items-center gap-2">
          <Badge className="bg-white text-blue-600 font-extrabold px-3 py-1 border-0 shadow-lg hover:shadow-xl transition-shadow text-sm">
            <Gift className="h-3.5 w-3.5 mr-1.5" weight="fill" />
            30% OFF
          </Badge>
          <span className={`font-semibold ${compact ? 'text-xs' : 'text-sm'} text-white hidden sm:inline`}>
            {t.allCourses}
          </span>
        </div>

        {/* Right section - CTA */}
        {!compact && (
          <Link
            to="/training"
            className="hidden lg:flex items-center gap-1.5 text-white hover:text-white/90 transition-colors group"
          >
            <span className="text-sm font-medium">{t.cta}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" weight="bold" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
