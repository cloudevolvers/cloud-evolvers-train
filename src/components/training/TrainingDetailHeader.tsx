import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, Star, Calendar, CurrencyEur } from '@phosphor-icons/react';
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
      case 'intermediate': return 'bg-blue-100 text-blue-900 dark:bg-blue-900/50 dark:text-blue-100 border-2 border-blue-300 dark:border-blue-700 font-medium';
      case 'advanced': return 'bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-100 border-2 border-orange-300 dark:border-orange-700 font-medium';
      case 'expert': return 'bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-100 border-2 border-red-300 dark:border-red-700 font-medium';
      default: return 'bg-green-100 text-green-900 dark:bg-green-900/50 dark:text-green-100 border-2 border-green-300 dark:border-green-700 font-medium';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2">
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 p-8 lg:p-10 xl:p-12">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Badge className="bg-gradient-to-r from-blue-600 to-sky-600 text-white border-0 px-4 py-1.5 text-sm font-bold shadow-md">
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
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent"
            >
              {training.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl"
            >
              {training.description}
            </motion.p>
          </div>
        </div>
        
        <CardContent className="p-8 bg-gradient-to-b from-card/95 to-card/90 backdrop-blur-sm">
          {/* Info Grid with Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.duration || 'Duration'}</p>
                <p className="font-bold text-foreground">
                  {training.duration?.days || 0} {(training.duration?.days || 0) === 1 ? (t.training?.detail?.daysSingle || 'day') : (t.training?.detail?.daysPlural || 'days')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.groupSize || 'Group Size'}</p>
                <p className="font-bold text-foreground">Min 6 – Max {training.maxParticipants || 12}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg">
                <CurrencyEur className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.investment || 'Investment'}</p>
                <div className="flex items-center gap-2">
                  {isPromotionActive && priceInfo.hasDiscount ? (
                    <>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {priceInfo.formattedFinalPrice}
                      </span>
                      <span className="text-xs line-through text-muted-foreground">
                        {priceInfo.formattedOriginalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-foreground">
                      €{training.price?.amount || 'TBD'}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {training.certification?.available && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-amber-500/20 rounded-lg">
                  <Certificate className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t.training?.detail?.certification || 'Certification'}</p>
                  <p className="font-bold text-foreground text-sm">{training.certification.name}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end">
            <motion.a 
              href="#booking-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <Calendar className="h-6 w-6" />
              {t.training?.detail?.inquireAboutTraining || 'Inquire About Training'}
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
