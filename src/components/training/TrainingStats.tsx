import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  GraduationCap,
  Star,
  Trophy
} from '@phosphor-icons/react';

interface TrainingStatsProps {
  totalCourses: number;
  featuredCourses: number;
  withCertification: number;
  categories: number;
  t?: any; // Translation object
}

/**
 * TrainingStats - Displays training statistics in animated cards
 */
export function TrainingStats({
  totalCourses,
  featuredCourses,
  withCertification,
  categories,
  t
}: TrainingStatsProps) {
  const stats = [
    {
      icon: GraduationCap,
      value: totalCourses,
      label: t?.training?.overview?.stats?.totalCourses || 'Training Courses',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      icon: Star,
      value: featuredCourses,
      label: t?.training?.overview?.stats?.featuredCourses || 'Featured Courses',
      color: 'text-sky-600 dark:text-sky-400',
      bgColor: 'bg-sky-100 dark:bg-sky-900/30'
    },
    {
      icon: Trophy,
      value: withCertification,
      label: t?.training?.overview?.stats?.withCertification || 'With Certification',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30'
    },
    {
      icon: Users,
      value: categories,
      label: t?.training?.overview?.stats?.categories || 'Categories',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-card/60 backdrop-blur-lg border-white/20 hover:border-blue-300/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
