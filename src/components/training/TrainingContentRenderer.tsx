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
        className="from-slate-900/30 via-blue-900/30 to-slate-900/30 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="from-blue-500/10 to-sky-500/10 absolute top-0 right-0 w-64 h-64 bg-gradient-to-br rounded-full -translate-y-32 translate-x-32" />
        <div className="from-sky-500/10 to-blue-500/10 absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <h2 className="text-slate-100 font-bold mb-6 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl text-white shadow-lg">
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
          <div className="p-2 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl text-white">
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
                className="bg-gradient-to-r from-slate-800/40 to-blue-800/40 border-blue-700/50 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-700/60 group-hover:bg-blue-600/70 p-2 rounded-lg transition-colors">
                  <IconComponent className="text-blue-200 h-5 w-5" />
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
            className="from-slate-800/40 to-blue-800/40 border-blue-700/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-blue-500 rounded-xl text-white shadow-md">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <div className="text-slate-100 font-bold">Duration</div>
              <div className="text-blue-400 font-medium">
                {training.duration?.days || 0} {(training.duration?.days || 0) === 1 ? 'day' : 'days'} intensive
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="from-blue-800/40 to-sky-800/40 border-sky-700/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-sky-500 rounded-xl text-white shadow-md">
              <Users className="h-7 w-7" />
            </div>
            <div>
              <div className="text-slate-100 font-bold">Group Size</div>
              <div className="text-sky-400 font-medium">Max {training.maxParticipants} participants</div>
            </div>
          </motion.div>
          
          {training.certification?.available && (
            <motion.div 
              className="from-cyan-800/40 to-blue-800/40 border-cyan-700/50 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-cyan-500 rounded-xl text-white shadow-md">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-slate-100 font-bold">Certification</div>
                <div className="text-cyan-400 font-medium">{training.certification.examCode} preparation</div>
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
              'from-blue-100 to-sky-100 dark:from-blue-800/40 dark:to-sky-800/40 border-blue-200 dark:border-blue-700/50',
              'from-sky-100 to-cyan-100 dark:from-sky-800/40 dark:to-cyan-800/40 border-sky-200 dark:border-sky-700/50',
              'from-cyan-100 to-blue-100 dark:from-cyan-800/40 dark:to-blue-800/40 border-cyan-200 dark:border-cyan-700/50'
            ];
            const iconBgClasses = ['bg-blue-200 dark:bg-blue-700/60', 'bg-sky-200 dark:bg-sky-700/60', 'bg-cyan-200 dark:bg-cyan-700/60'];
            const textClasses = [
              'text-blue-900 dark:text-blue-100',
              'text-sky-900 dark:text-sky-100', 
              'text-cyan-900 dark:text-cyan-100'
            ];
            const descTextClasses = [
              'text-blue-800 dark:text-blue-200',
              'text-sky-800 dark:text-sky-200',
              'text-cyan-800 dark:text-cyan-200'
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
          <h3 className="text-blue-100 dark:text-blue-200 font-bold mb-6">Hands-on Labs</h3>
          <div className="bg-gradient-to-r from-blue-800/40 to-sky-800/40 dark:from-blue-900/40 dark:to-sky-900/40 border-blue-700/50 dark:border-blue-600/30 p-6 rounded-xl">
            <p className="text-blue-200 dark:text-blue-300 font-medium mb-6">
              Extensive practical exercises including:
            </p>
            <ul className="space-y-4">
              {training.handsOnLabs.map((lab, index) => {
                const IconComponent = getIcon(lab.icon);
                const colors = [
                  'text-blue-600 dark:text-blue-400',
                  'text-sky-600 dark:text-sky-400',
                  'text-cyan-600 dark:text-cyan-400',
                  'text-indigo-600 dark:text-indigo-400',
                  'text-blue-600 dark:text-blue-400'
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
                        <p className="text-blue-300 dark:text-blue-400 mt-1">{lab.description}</p>
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
