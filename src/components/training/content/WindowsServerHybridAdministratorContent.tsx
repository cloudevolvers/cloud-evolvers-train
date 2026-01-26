import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Desktop, CloudArrowUp, HardDrives, Gear } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-administrator',
  slug: 'windows-server-hybrid-administrator',
  title: 'Windows Server Hybrid Administrator',
  description: 'Master hybrid Windows Server environments with Azure integration',
  category: 'Windows Server',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1095, currency: 'EUR' },
  featured: false,
  icon: 'Desktop',
  
  learningObjectives: [
    'Design hybrid Windows Server architectures',
    'Implement Azure Arc for server management',
    'Configure hybrid identity solutions',
    'Manage hybrid storage and backup',
    'Deploy Azure services on-premises',
    'Monitor hybrid server environments'
  ],
  
  prerequisites: [
    'Windows Server administration experience',
    'Active Directory knowledge',
    'Basic Azure understanding',
    'PowerShell scripting skills'
  ],
  
  targetAudience: [
    'Windows Server administrators',
    'Hybrid cloud engineers',
    'System administrators',
    'Infrastructure architects'
  ],
  
  certification: { 
    available: true,
    name: 'AZ-800 Preparation',
    description: 'Administering Windows Server Hybrid Core Infrastructure'
  },
  tags: ['Windows Server', 'Hybrid Cloud', 'Azure Arc', 'Infrastructure', 'Administration'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Windows Server Expert',
    title: 'Microsoft Certified Trainer',
    experience: '15+ years',
    certifications: ['AZ-800', 'AZ-801', 'AZ-104', 'MCSE']
  }
};

export default function WindowsServerHybridAdministratorContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-slate-950/20 via-gray-950/20 to-slate-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-200/20 to-gray-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gray-200/20 to-slate-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl text-white shadow-lg">
              <Desktop className="h-8 w-8" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-medium font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">Hybrid Administration</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Windows Server Hybrid
            <span className="block text-muted-foreground font-medium">Administrator</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master hybrid Windows Server environments with Azure integration. Learn to manage on-premises and cloud infrastructure with modern hybrid technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-6 w-6 text-primary font-medium" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">24 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-6 w-6 text-primary font-medium" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="h-6 w-6 text-primary font-medium" />
              <div>
                <div className="text-white font-semibold">AZ-800</div>
                <div className="text-sm text-muted-foreground font-medium">Preparation</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning Objectives */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-white font-bold">Learning Objectives</h2>
        <div className="grid gap-4">
          {trainingMetadata.learningObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{objective}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Modules */}
      <motion.section 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-white font-bold">Course Modules</h2>
        <div className="space-y-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Desktop className="h-6 w-6 text-primary font-medium" />
              </div>
              <h3 className="text-white font-semibold">Hybrid Architecture Design</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Hybrid cloud architecture patterns</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> On-premises and cloud integration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network connectivity planning</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security boundary design</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CloudArrowUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold">Azure Arc Integration</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Arc-enabled servers setup</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Policy and configuration management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Monitoring and insights</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security and compliance</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-stone-900/30 p-2 rounded-lg">
                <HardDrives className="text-stone-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Hybrid Storage Solutions</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure File Sync deployment</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Storage Spaces Direct with Azure</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Hybrid backup strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Disaster recovery planning</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-zinc-900/30 p-2 rounded-lg">
                <Gear className="text-zinc-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Management & Operations</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Windows Admin Center deployment</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> PowerShell DSC and automation</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Update management strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance monitoring and optimization</li>
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
          <div className="grid gap-4">
            {trainingMetadata.prerequisites.map((prereq, index) => (
              <div key={index} className="bg-card flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{prereq}</span>
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
          <div className="grid gap-4">
            {trainingMetadata.targetAudience.map((audience, index) => (
              <div key={index} className="bg-card flex items-start gap-3 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary font-medium flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
