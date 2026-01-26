import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, ChatCircle, Gear, Phone, VideoCamera } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'teams-advanced-administration',
  slug: 'teams-advanced-administration',
  title: 'Teams Advanced Administration',
  description: 'Master advanced Microsoft Teams administration and enterprise deployment',
  category: 'Microsoft 365',
  level: 'Advanced',
  duration: { days: 2, hours: 16 },
  price: { amount: 895, currency: 'EUR' },
  featured: false,
  icon: 'ChatCircle',
  
  learningObjectives: [
    'Design enterprise Teams architectures',
    'Implement advanced calling solutions',
    'Configure Teams governance policies',
    'Manage Teams integration scenarios',
    'Deploy Teams Phone and meeting solutions',
    'Monitor and optimize Teams performance'
  ],
  
  prerequisites: [
    'Microsoft 365 administration experience',
    'Teams basic administration knowledge',
    'Understanding of networking concepts',
    'PowerShell experience preferred'
  ],
  
  targetAudience: [
    'Teams administrators and specialists',
    'Microsoft 365 administrators',
    'Collaboration platform engineers',
    'IT infrastructure professionals'
  ],
  
  certification: { 
    available: true,
    name: 'MS-700 Preparation',
    description: 'Managing Microsoft Teams certification'
  },
  tags: ['Microsoft Teams', 'Collaboration', 'Communication', 'Enterprise', 'Phone System'],
  maxParticipants: 16,
  
  instructor: {
    name: 'Teams Collaboration Expert',
    title: 'Microsoft Certified Teams Administrator',
    experience: '8+ years',
    certifications: ['MS-700', 'MS-900', 'MS-500', 'AZ-900']
  }
};

export default function TeamsAdvancedAdministrationContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-emerald-950/20 via-teal-950/20 to-emerald-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-200/20 to-emerald-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl text-white shadow-lg">
              <ChatCircle className="h-8 w-8" />
            </div>
            <div>
              <div className="text-emerald-400 font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">Teams Administration</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Teams Advanced
            <span className="text-emerald-400 block">Administration</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master advanced Microsoft Teams administration and enterprise deployment. Learn to design, implement, and manage complex Teams environments at scale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">2 Days</div>
                <div className="text-sm text-muted-foreground font-medium">16 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 16</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">MS-700</div>
                <div className="text-sm text-muted-foreground font-medium">Preparation</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning Objectives */}
      <motion.section 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white font-bold">Learning Objectives</h2>
        <div className="grid gap-4">
          {trainingMetadata.learningObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 border-slate-700 flex items-start gap-3 p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium leading-relaxed">{objective}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-white font-bold">Course Modules</h2>
        <div className="space-y-6">
          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-900/30 p-2 rounded-lg">
                <ChatCircle className="text-emerald-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Enterprise Teams Architecture</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Teams service architecture overview</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network planning and optimization</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security and compliance frameworks</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-geo and data residency</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <Phone className="text-teal-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Teams Phone System</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Phone system deployment strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Direct Routing and Calling Plans</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Auto attendants and call queues</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Voice routing and policies</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-900/30 p-2 rounded-lg">
                <VideoCamera className="text-cyan-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Advanced Meeting Solutions</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Teams Rooms and devices management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Live events and webinars</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Meeting policies and configurations</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Cloud Video Interop integration</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-950/20 p-2 rounded-lg">
                <Gear className="text-green-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Governance & Management</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Teams and channels governance</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> App and custom solution management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> User adoption and change management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance monitoring and analytics</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Prerequisites & Target Audience */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-white font-bold">Prerequisites</h2>
          <div className="space-y-3">
            {trainingMetadata.prerequisites.map((prereq, index) => (
              <div key={index} className="bg-teal-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-teal-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{prereq}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-white font-bold">Target Audience</h2>
          <div className="space-y-3">
            {trainingMetadata.targetAudience.map((audience, index) => (
              <div key={index} className="bg-emerald-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-emerald-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
