import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Certificate, Trophy } from '@phosphor-icons/react';
import type { CombinedTraining } from './types';

interface TrainingStatsProps {
  allTrainings: CombinedTraining[];
  categoryStats: Record<string, number>;
  t: any;
}

export function TrainingStats({ allTrainings, categoryStats, t }: TrainingStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-neutral-100 dark:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-foreground/70" />
          </div>
          <div>
            <div className="font-bold text-lg text-foreground">{allTrainings.length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.totalCourses || 'Total Courses'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-neutral-100 dark:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
            <Star size={20} className="text-foreground/70" />
          </div>
          <div>
            <div className="font-bold text-lg text-foreground">{allTrainings.filter(t => t.featured).length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.featuredCourses || 'Featured Courses'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-neutral-100 dark:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
            <Certificate size={20} className="text-foreground/70" />
          </div>
          <div>
            <div className="font-bold text-lg text-foreground">{allTrainings.filter(t => t.certification?.available).length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.withCertification || 'With Certification'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-neutral-100 dark:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
            <Trophy size={20} className="text-foreground/70" />
          </div>
          <div>
            <div className="font-bold text-lg text-foreground">{Object.keys(categoryStats).length}</div>
            <div className="text-foreground/70 dark:text-foreground/60">{t?.training?.overview?.stats?.categories || 'Categories'}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
