import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, BookOpen } from '@phosphor-icons/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/hooks/use-translations';

interface TrainingDetailSidebarProps {
  training: any;
}

export default function TrainingDetailSidebar({ training }: TrainingDetailSidebarProps) {
  const { t } = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6 sticky top-32"
    >
      {/* Prerequisites */}
      {training.prerequisites && training.prerequisites.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg text-foreground font-bold">
                  {t.training?.detail?.prerequisites || 'Prerequisites'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                {training.prerequisites.map((prerequisite: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{prerequisite}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Target Audience */}
      {training.targetAudience && training.targetAudience.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg text-foreground font-bold">
                  {t.training?.detail?.targetAudience || 'Target Audience'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                {training.targetAudience.map((audience: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <Users className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{audience}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Instructor */}
      {training.instructor && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-500/10 rounded-xl">
                  <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-lg text-foreground font-bold">
                  {t.training?.detail?.instructor || 'Instructor'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="w-24 h-24 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-4 ring-amber-500/20 shadow-lg"
                >
                  <Users className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <h4 className="font-bold text-foreground text-lg mb-1">{training.instructor?.name || t.training?.detail?.expertInstructor || 'Expert Instructor'}</h4>
                <p className="text-sm text-primary mb-3 font-semibold">{training.instructor?.title || t.training?.detail?.mctTrainer || 'Microsoft Certified Trainer'}</p>
                {training.instructor?.bio && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{training.instructor.bio}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Tags */}
      {training.tags && training.tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border border-white/10 dark:border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground font-bold">
                  {t.training?.detail?.topicsCovered || 'Topics Covered'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {training.tags.map((tag: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.03 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 px-3 py-1.5 border border-border"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
