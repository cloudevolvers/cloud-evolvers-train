import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Shield, Lock, Eye, ShieldCheck } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-security-fundamentals',
  slug: 'azure-security-fundamentals',
  title: 'Azure Security Fundamentals',
  description: 'Master the fundamental security concepts and services in Microsoft Azure',
  category: 'Security',
  level: 'Beginner',
  duration: { days: 2, hours: 16 },
  price: { amount: 795, currency: 'EUR' },
  featured: false,
  icon: 'Shield',
  
  learningObjectives: [
    'Understand Azure security architecture',
    'Implement identity and access management',
    'Configure network security controls',
    'Apply data protection mechanisms',
    'Monitor and audit security events',
    'Respond to security incidents effectively'
  ],
  
  prerequisites: [
    'Basic Azure fundamentals knowledge',
    'Understanding of networking concepts',
    'Familiarity with cloud computing principles',
    'Basic knowledge of security concepts'
  ],
  
  targetAudience: [
    'Security professionals new to Azure',
    'IT administrators and engineers',
    'Cloud architects and consultants',
    'Compliance and audit professionals'
  ],
  
  certification: { 
    available: true,
    name: 'AZ-500 Preparation',
    description: 'Prepares for Azure Security Engineer Associate certification'
  },
  tags: ['Azure', 'Security', 'Identity', 'Network Security', 'Compliance'],
  maxParticipants: 16,
  
  instructor: {
    name: 'Azure Security Specialist',
    title: 'Microsoft Certified Security Expert',
    experience: '10+ years',
    certifications: ['AZ-500', 'AZ-900', 'SC-900', 'SC-300']
  }
};

export default function AzureSecurityFundamentalsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-red-950/20 via-orange-950/20 to-red-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-200/20 to-red-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl text-white shadow-lg">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <div className="text-red-400 font-medium">Beginner Level</div>
              <div className="text-sm text-muted-foreground font-medium">Security Foundation</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Security
            <span className="text-red-400 block">Fundamentals</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master the fundamental security concepts and services in Microsoft Azure. Build a solid foundation in cloud security principles and Azure security tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">2 Days</div>
                <div className="text-sm text-muted-foreground font-medium">16 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 16</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">AZ-500</div>
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
              <div className="bg-red-900/30 p-2 rounded-lg">
                <Shield className="text-red-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Azure Security Architecture</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security principles and frameworks</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Shared responsibility model</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Defense in depth strategy</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Zero trust architecture principles</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-950/20 p-2 rounded-lg">
                <Lock className="text-orange-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Identity & Access Management</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Active Directory fundamentals</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-factor authentication setup</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Conditional access policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Role-based access control (RBAC)</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-900/30 p-2 rounded-lg">
                <Eye className="text-amber-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Network Security Controls</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Network security groups and rules</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Firewall configuration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Virtual network security</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> VPN and ExpressRoute security</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-rose-900/30 p-2 rounded-lg">
                <ShieldCheck className="text-rose-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Security Monitoring & Compliance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Security Center overview</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Sentinel fundamentals</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Compliance frameworks and assessments</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Incident response procedures</li>
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
              <div key={index} className="bg-orange-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-orange-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-red-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-red-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
