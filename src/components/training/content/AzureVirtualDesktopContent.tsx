import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Monitor, Shield, Desktop } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-virtual-desktop',
  slug: 'azure-virtual-desktop',
  title: 'Azure Virtual Desktop Specialty (AZ-140)',
  description: 'Master Azure Virtual Desktop for modern remote work solutions',
  category: 'Infrastructure',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1595, currency: 'EUR' },
  featured: false,
  icon: 'Desktop',
  
  learningObjectives: [
    'Plan and deploy Azure Virtual Desktop infrastructure',
    'Manage host pools and session hosts',
    'Configure and manage user profiles and data',
    'Secure Azure Virtual Desktop deployments',
    'Monitor and maintain Azure Virtual Desktop',
    'Optimize user experience and performance'
  ],
  
  prerequisites: [
    'AZ-104 or equivalent Azure experience',
    'Windows Server knowledge',
    'Understanding of virtualization concepts',
    'Basic networking and security concepts'
  ],
  
  targetAudience: [
    'Azure administrators',
    'Desktop administrators',
    'Infrastructure architects',
    'IT professionals managing remote work solutions'
  ],
  
  certification: { available: true, name: 'AZ-140' },
  tags: ['Azure', 'Virtual Desktop', 'AZ-140', 'Remote Work'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Virtual Desktop Expert',
    title: 'Microsoft Certified Trainer',
    experience: '8+ years',
    certifications: ['AZ-140', 'AZ-104', 'AZ-305']
  }
};

export default function AzureVirtualDesktopContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-purple-950/20 via-blue-950/20 to-indigo-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200/20 to-purple-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg">
              <Desktop className="h-8 w-8" />
            </div>
            <div>
              <div className="text-purple-400 font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-140 preparation</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Virtual Desktop
            <span className="text-purple-400 block">Specialty Training</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master Azure Virtual Desktop (AVD) for enterprise remote work solutions. Learn to plan, deploy, manage, and optimize virtual desktop infrastructure for modern hybrid work environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Intensive Training</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-purple-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">AZ-140</div>
                <div className="text-sm text-muted-foreground font-medium">Specialty Certification</div>
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
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Desktop className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">AVD Architecture & Planning</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Virtual Desktop architecture and components</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Capacity planning and sizing considerations</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network requirements and connectivity</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Identity and authentication strategies</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <Monitor className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Host Pools & Session Hosts</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Create and configure host pools</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Deploy and manage session hosts</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure personal and pooled desktops</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement custom images and golden images</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Users className="text-indigo-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">User Profiles & Application Management</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure FSLogix for profile management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement application groups and RemoteApps</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Manage user assignments and access</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure workspace and user experience</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-950/20 p-2 rounded-lg">
                <Shield className="text-green-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Security & Monitoring</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement security best practices</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure conditional access policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Monitor performance and usage</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Troubleshooting and optimization techniques</li>
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
              <div key={index} className="bg-amber-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-amber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-purple-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-purple-400 h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
