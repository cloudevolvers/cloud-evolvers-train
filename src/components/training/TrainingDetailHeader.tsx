import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, Star, Calendar, CurrencyEur, ArrowRight } from '@phosphor-icons/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/hooks/use-translations';

interface TrainingDetailHeaderProps {
  training: any;
  priceInfo: any;
  isPromotionActive: boolean;
}

export default function TrainingDetailHeader({ training, priceInfo, isPromotionActive }: TrainingDetailHeaderProps) {
  const { t } = useTranslations();
  const getDifficultyColor = (level: string | undefined) => {
    if (!level) return 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-100 border-2 border-green-300 dark:border-green-700 font-medium';

    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-100 border-2 border-green-300 dark:border-green-700 font-medium';
      case 'intermediate': return 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800/50 dark:text-neutral-100 border-2 border-neutral-300 dark:border-neutral-600 font-medium';
      case 'advanced': return 'bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-100 border-2 border-orange-300 dark:border-orange-700 font-medium';
      case 'expert': return 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-100 border-2 border-red-300 dark:border-red-700 font-medium';
      default: return 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-100 border-2 border-green-300 dark:border-green-700 font-medium';
    }
  };

  const priceDisplay = isPromotionActive && priceInfo?.hasDiscount
    ? priceInfo.formattedFinalPrice
    : `€${training.price?.amount || 'TBD'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2">
        <div className="bg-gradient-to-br from-slate-50 via-white to-neutral-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-neutral-950/30 p-6 sm:p-8 lg:p-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <Badge className="bg-foreground text-background border-0 px-4 py-1.5 text-sm font-bold shadow-md">
                {training.category}
              </Badge>
              {training.featured && (
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1.5 text-sm font-bold shadow-md">
                  <Star className="h-3 w-3 mr-1" weight="fill" />
                  {t.training?.detail?.featured || 'Featured'}
                </Badge>
              )}
              <Badge className={`${getDifficultyColor(training.level)} px-4 py-1.5 text-sm shadow-md`}>
                {training.level || t.training?.detail?.allLevels || 'All Levels'}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-foreground"
            >
              {training.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl"
            >
              {training.description}
            </motion.p>
          </div>
        </div>

        <CardContent className="p-6 sm:p-8 bg-gradient-to-b from-card/95 to-card/90 backdrop-blur-sm">
          {/* Price + CTA row - the conversion strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/15 dark:via-emerald-500/5 dark:to-transparent border-2 border-emerald-500/20 dark:border-emerald-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-xl">
                <CurrencyEur className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{t.training?.detail?.investment || 'Investment'}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {priceDisplay}
                  </span>
                  {isPromotionActive && priceInfo?.hasDiscount && (
                    <span className="text-sm line-through text-muted-foreground">
                      {priceInfo.formattedOriginalPrice}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    / {t.training?.detail?.perPerson || 'per person'}
                  </span>
                </div>
              </div>
            </div>
            <motion.a
              href="#booking-form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-base whitespace-nowrap"
            >
              <Calendar className="h-5 w-5" />
              {t.training?.detail?.inquireAboutTraining || 'Inquire About Training'}
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Info Grid - compact key details */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-3.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-primary/20 rounded-lg flex-shrink-0">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.duration || 'Duration'}</p>
                <p className="font-bold text-foreground text-sm">
                  {training.duration?.days || 0} {(training.duration?.days || 0) === 1 ? (t.training?.detail?.daysSingle || 'day') : (t.training?.detail?.daysPlural || 'days')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 p-3.5 bg-gradient-to-br from-neutral-500/10 to-neutral-500/5 rounded-xl border border-border"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-neutral-100 dark:bg-white/10 rounded-lg flex-shrink-0">
                <Users className="h-4 w-4 text-foreground/70" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.groupSize || 'Group Size'}</p>
                <p className="font-bold text-foreground text-sm">Min 6 – Max {training.maxParticipants || 12}</p>
              </div>
            </motion.div>

            {training.certification?.available && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 p-3.5 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-xl border border-amber-500/20 col-span-2 lg:col-span-2"
              >
                <div className="flex items-center justify-center w-9 h-9 bg-amber-500/20 rounded-lg flex-shrink-0">
                  <Certificate className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.certification || 'Certification'}</p>
                  <p className="font-bold text-foreground text-sm">{training.certification.name}</p>
                </div>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
