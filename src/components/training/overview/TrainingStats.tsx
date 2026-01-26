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
          <div className="bg-blue-100/80 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-bold text-lg text-blue-600 dark:text-blue-400">{allTrainings.length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.totalCourses || 'Total Courses'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-sky-100/80 dark:bg-sky-900/30 w-10 h-10 rounded-lg flex items-center justify-center">
            <Star size={20} className="text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <div className="font-bold text-lg text-sky-600 dark:text-sky-400">{allTrainings.filter(t => t.featured).length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.featuredCourses || 'Featured Courses'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-cyan-100/80 dark:bg-cyan-900/30 w-10 h-10 rounded-lg flex items-center justify-center">
            <Certificate size={20} className="text-cyan-600 dark:text-cyan-400" />
          </div>
          <div>
            <div className="font-bold text-lg text-cyan-600 dark:text-cyan-400">{allTrainings.filter(t => t.certification?.available).length}</div>
            <div className="text-muted-foreground">{t?.training?.overview?.stats?.withCertification || 'With Certification'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm bg-card/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-sm">
          <div className="bg-indigo-100/80 dark:bg-indigo-900/30 w-10 h-10 rounded-lg flex items-center justify-center">
            <Trophy size={20} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <div className="font-bold text-lg text-indigo-600 dark:text-indigo-400">{Object.keys(categoryStats).length}</div>
            <div className="text-foreground/70 dark:text-foreground/60">{t?.training?.overview?.stats?.categories || 'Categories'}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
