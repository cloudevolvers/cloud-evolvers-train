import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Stack, CloudArrowUp, HardDrives, Gear } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-stack-hub',
  slug: 'azure-stack-hub',
  title: 'Azure Stack Hub Administration',
  description: 'Master hybrid cloud infrastructure with Azure Stack Hub deployment and management',
  category: 'Azure Infrastructure',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1295, currency: 'EUR' },
  featured: false,
  icon: 'Stack',
  
  learningObjectives: [
    'Deploy and configure Azure Stack Hub',
    'Manage identity and access in hybrid environments',
    'Implement network connectivity and security',
    'Configure storage and backup solutions',
    'Monitor and maintain Azure Stack Hub systems',
    'Troubleshoot common operational issues'
  ],
  
  prerequisites: [
    'Azure Administrator certification (AZ-104)',
    'Windows Server administration experience',
    'Hyper-V and virtualization knowledge',
    'PowerShell scripting experience'
  ],
  
  targetAudience: [
    'Infrastructure administrators',
    'Hybrid cloud architects',
    'System administrators',
    'DevOps engineers with infrastructure focus'
  ],
  
  certification: { 
    available: true,
    name: 'AZ-600 Preparation',
    description: 'Prepares for Azure Stack Hub Operator certification'
  },
  tags: ['Azure', 'Stack Hub', 'Hybrid Cloud', 'Infrastructure', 'Enterprise'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Azure Stack Hub Expert',
    title: 'Microsoft Certified Trainer',
    experience: '12+ years',
    certifications: ['AZ-600', 'AZ-104', 'AZ-900', 'MCSE']
  }
};

export default function AzureStackHubContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-slate-950/20 via-blue-950/20 to-slate-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-200/20 to-blue-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-slate-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-blue-500 rounded-2xl text-white shadow-lg">
              <Stack className="h-8 w-8" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-medium font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">Hybrid Infrastructure</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Stack Hub
            <span className="block text-muted-foreground font-medium">Administration</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master hybrid cloud infrastructure with Azure Stack Hub deployment and management. Learn to operate Azure services on-premises with enterprise-grade capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-5 w-5 text-muted-foreground font-medium" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">24 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-5 w-5 text-muted-foreground font-medium" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="h-5 w-5 text-muted-foreground font-medium" />
              <div>
                <div className="text-white font-semibold">AZ-600</div>
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
              <div className="bg-primary/10 p-2 rounded-lg">
                <Stack className="h-5 w-5 text-muted-foreground font-medium" />
              </div>
              <h3 className="text-white font-semibold">Azure Stack Hub Overview</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Architecture and components</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Deployment models and scenarios</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Hardware and capacity planning</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Licensing and cost considerations</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <CloudArrowUp className="text-blue-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Installation & Configuration</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Pre-deployment validation</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Stack Hub deployment</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Post-deployment configuration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure registration and marketplace</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <HardDrives className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-white font-semibold">Infrastructure Management</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Region and quota management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Plan, offer, and subscription setup</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Resource provider management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network infrastructure configuration</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-stone-900/30 p-2 rounded-lg">
                <Gear className="text-stone-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Operations & Maintenance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> System monitoring and alerting</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Update and patch management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Backup and disaster recovery</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance tuning and optimization</li>
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
              <div key={index} className="bg-blue-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-blue-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-card flex items-start gap-3 p-3 rounded-lg">
                <Users className="h-5 w-5 text-muted-foreground font-medium flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
