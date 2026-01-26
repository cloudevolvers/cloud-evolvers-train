import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Shield, Database, Network, Gear } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-administrator-mastery',
  slug: 'azure-administrator-mastery',
  title: 'Azure Administrator Mastery (AZ-104)',
  description: 'Master advanced Azure administration with comprehensive resource management skills',
  category: 'Azure',
  level: 'Intermediate',
  duration: { days: 4, hours: 32 },
  price: { amount: 1495, currency: 'EUR' },
  featured: true,
  icon: 'Shield',
  
  learningObjectives: [
    'Master Azure identities and governance frameworks',
    'Implement advanced storage and backup solutions',
    'Deploy and manage complex compute resources',
    'Configure networking and connectivity solutions',
    'Monitor and maintain Azure environments',
    'Implement security and compliance best practices'
  ],
  
  prerequisites: [
    'AZ-900 certification or equivalent Azure experience',
    'PowerShell and Azure CLI proficiency',
    'Networking fundamentals knowledge',
    'Minimum 6 months Azure hands-on experience'
  ],
  
  targetAudience: [
    'System administrators',
    'Infrastructure engineers',
    'Cloud administrators',
    'AZ-104 certification candidates'
  ],
  
  certification: { 
    available: true,
    examCode: 'AZ-104',
    examName: 'Microsoft Azure Administrator'
  },
  tags: ['AZ-104', 'Azure', 'Administrator', 'Infrastructure', 'Governance'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Azure Infrastructure Expert',
    title: 'Microsoft Certified Trainer',
    experience: '10+ years',
    certifications: ['AZ-104', 'AZ-305', 'AZ-500', 'AZ-700']
  }
};

export default function AzureAdministratorMasteryContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-blue-950/20 via-indigo-950/20 to-blue-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl text-white shadow-lg">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <div className="text-blue-400 font-medium">Intermediate Level</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-104 Mastery</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Administrator
            <span className="text-blue-400 block">Mastery</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master advanced Azure administration with comprehensive resource management skills. This intensive course prepares you for the AZ-104 certification and advanced Azure infrastructure management.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">4 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Intensive Training</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-blue-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-blue-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">AZ-104</div>
                <div className="text-sm text-muted-foreground font-medium">Certification</div>
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
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <Shield className="text-blue-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Identity & Governance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Active Directory management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Role-based access control (RBAC)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Policy management and compliance</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Resource groups and subscriptions</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Database className="text-indigo-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Storage Solutions</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Storage accounts and blob services</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> File shares and sync services</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Backup and disaster recovery</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Storage security and encryption</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Gear className="text-purple-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Compute Resources</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Virtual machines and scale sets</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> App Service and containers</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Load balancing and traffic management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Automation and configuration management</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <Network className="text-teal-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Networking & Monitoring</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Virtual networks and subnets</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network security groups and firewalls</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Monitor and Log Analytics</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Alerting and automated responses</li>
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
              <div key={index} className="bg-indigo-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-indigo-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-blue-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-blue-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
