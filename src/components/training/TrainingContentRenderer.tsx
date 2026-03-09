import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Target, Users, Clock, Award, CheckCircle, 
  Shield, Database, Settings, Network, Monitor, Cpu, 
  Lock, Code, Cloud, Brain, Lightbulb, FileText,
  User, GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrainingJSON } from '@/data/training-json/types';

const iconMap = {
  Shield, Database, Settings, Network, Monitor, Cpu,
  Lock, Code, Cloud, Brain, Lightbulb, FileText,
  Target, BookOpen, Users, Clock, Award, CheckCircle,
  User, GraduationCap
};

interface TrainingContentRendererProps {
  training: TrainingJSON;
}

export default function TrainingContentRenderer({ training }: TrainingContentRendererProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || BookOpen;
    return IconComponent;
  };

  return (
    <div className="space-y-12">
      {/* Course Overview with gradient background */}
      <motion.section 
        className="from-neutral-900/30 via-neutral-800/30 to-neutral-900/30 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="from-neutral-500/10 to-neutral-400/10 absolute top-0 right-0 w-64 h-64 bg-gradient-to-br rounded-full -translate-y-32 translate-x-32" />
        <div className="from-neutral-400/10 to-neutral-500/10 absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <h2 className="text-slate-100 font-bold mb-6 flex items-center gap-3">
            <div className="p-3 bg-foreground rounded-2xl text-background shadow-lg">
              <BookOpen className="h-8 w-8" />
            </div>
            Course Overview
          </h2>
          <p className="text-slate-200 leading-relaxed max-w-4xl">
            {training.overview}
          </p>
        </div>
      </motion.section>

      {/* Learning Objectives */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-foreground rounded-xl text-background">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-slate-100 font-bold">Learning Objectives</h3>
        </div>
        <p className="text-slate-300 mb-6">
          Master the core skills needed to excel in this training:
        </p>
        <div className="grid gap-4">
          {training.learningObjectives.map((objective, index) => {
            const IconComponent = getIcon(objective.icon);
            return (
              <motion.div 
                key={objective.id}
                className="bg-gradient-to-r from-neutral-800/40 to-neutral-700/40 border-neutral-600/50 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-neutral-600/60 group-hover:bg-neutral-500/70 p-2 rounded-lg transition-colors">
                  <IconComponent className="text-foreground/70 h-5 w-5" />
                </div>
                <div>
                  <span className="text-slate-100 font-semibold">{objective.title}:</span>
                  <p className="text-slate-200 mt-1">{objective.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Training Format */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-slate-100 font-bold mb-6">Training Format</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div 
            className="from-neutral-800/40 to-neutral-700/40 border-neutral-600/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-foreground rounded-xl text-background shadow-md">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <div className="text-slate-100 font-bold">Duration</div>
              <div className="text-foreground/70 font-medium">
                {training.duration?.days || 0} {(training.duration?.days || 0) === 1 ? 'day' : 'days'} intensive
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="from-neutral-800/40 to-neutral-700/40 border-neutral-600/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-foreground rounded-xl text-background shadow-md">
              <Users className="h-7 w-7" />
            </div>
            <div>
              <div className="text-slate-100 font-bold">Group Size</div>
              <div className="text-foreground/70 font-medium">Max {training.maxParticipants} participants</div>
            </div>
          </motion.div>
          
          {training.certification?.available && (
            <motion.div 
              className="from-neutral-800/40 to-neutral-700/40 border-neutral-600/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-foreground rounded-xl text-background shadow-md">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-slate-100 font-bold">Certification</div>
                <div className="text-foreground/70 font-medium">{training.certification.examCode} preparation</div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-slate-100 font-bold mb-6">Course Modules</h3>
        <div className="grid gap-6">
          {training.modules.map((module, index) => {
            const IconComponent = getIcon(module.icon);
            const gradientClasses = [
              'from-neutral-100 to-neutral-50 dark:from-neutral-800/40 dark:to-neutral-700/40 border-neutral-200 dark:border-neutral-600/50',
              'from-neutral-50 to-neutral-100 dark:from-neutral-700/40 dark:to-neutral-800/40 border-neutral-200 dark:border-neutral-600/50',
              'from-neutral-100 to-neutral-50 dark:from-neutral-800/40 dark:to-neutral-700/40 border-neutral-200 dark:border-neutral-600/50'
            ];
            const iconBgClasses = ['bg-neutral-200 dark:bg-neutral-600/60', 'bg-neutral-200 dark:bg-neutral-600/60', 'bg-neutral-200 dark:bg-neutral-600/60'];
            const textClasses = [
              'text-neutral-900 dark:text-neutral-100',
              'text-neutral-900 dark:text-neutral-100',
              'text-neutral-900 dark:text-neutral-100'
            ];
            const descTextClasses = [
              'text-neutral-800 dark:text-neutral-200',
              'text-neutral-800 dark:text-neutral-200',
              'text-neutral-800 dark:text-neutral-200'
            ];
            
            const styleIndex = index % 3;
            
            return (
              <motion.div 
                key={module.id}
                className={`p-6 bg-gradient-to-r ${gradientClasses[styleIndex]} border rounded-xl hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 ${iconBgClasses[styleIndex]} rounded-lg`}>
                    <IconComponent className={`h-6 w-6 ${descTextClasses[styleIndex]}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${textClasses[styleIndex]} text-lg mb-2`}>{module.title}</h4>
                    <p className={`${descTextClasses[styleIndex]} mb-3`}>{module.description}</p>
                    {module.duration && (
                      <Badge variant="outline" className="mb-3">
                        {module.duration}
                      </Badge>
                    )}
                    {module.topics && module.topics.length > 0 && (
                      <ul className="space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className={`flex items-start gap-2 ${descTextClasses[styleIndex]} text-sm`}>
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Hands-on Labs */}
      {training.handsOnLabs && training.handsOnLabs.length > 0 && (
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-neutral-100 dark:text-neutral-200 font-bold mb-6">Hands-on Labs</h3>
          <div className="bg-gradient-to-r from-neutral-800/40 to-neutral-700/40 dark:from-neutral-800/40 dark:to-neutral-700/40 border-neutral-600/50 dark:border-neutral-600/30 p-6 rounded-xl">
            <p className="text-neutral-200 dark:text-neutral-300 font-medium mb-6">
              Extensive practical exercises including:
            </p>
            <ul className="space-y-4">
              {training.handsOnLabs.map((lab, index) => {
                const IconComponent = getIcon(lab.icon);
                const colors = [
                  'text-foreground/70',
                  'text-foreground/70',
                  'text-foreground/70',
                  'text-foreground/70',
                  'text-foreground/70'
                ];
                
                return (
                  <li key={lab.id} className={`flex items-start gap-3 ${colors[index % colors.length]}`}>
                    <IconComponent className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{lab.title}</span>
                      {lab.duration && (
                        <span className="text-sm opacity-75 ml-2">({lab.duration})</span>
                      )}
                      {lab.description && (
                        <p className="text-neutral-300 dark:text-neutral-400 mt-1">{lab.description}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.section>
      )}
    </div>
  );
}
