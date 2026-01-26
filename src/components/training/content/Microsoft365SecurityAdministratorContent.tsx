import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Shield, Lock, Eye, Warning } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'microsoft-365-security-administrator',
  slug: 'microsoft-365-security-administrator',
  title: 'Microsoft 365 Security Administrator',
  description: 'Secure Microsoft 365 environments with advanced security controls and compliance',
  category: 'Security',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1195, currency: 'EUR' },
  featured: false,
  icon: 'Shield',
  
  learningObjectives: [
    'Design comprehensive security architectures',
    'Implement advanced threat protection',
    'Configure security and compliance centers',
    'Manage information protection policies',
    'Deploy insider risk management',
    'Monitor and respond to security incidents'
  ],
  
  prerequisites: [
    'Microsoft 365 fundamentals knowledge',
    'Security concepts understanding',
    'Azure Active Directory experience',
    'Compliance framework awareness'
  ],
  
  targetAudience: [
    'Security administrators and engineers',
    'Compliance and risk professionals',
    'Microsoft 365 administrators',
    'Information security specialists'
  ],
  
  certification: { 
    available: true,
    name: 'MS-500 Preparation',
    description: 'Microsoft 365 Security Administrator Associate'
  },
  tags: ['Microsoft 365', 'Security', 'Compliance', 'Threat Protection', 'Risk Management'],
  maxParticipants: 14,
  
  instructor: {
    name: 'M365 Security Expert',
    title: 'Microsoft Certified Security Administrator',
    experience: '12+ years',
    certifications: ['MS-500', 'SC-300', 'SC-900', 'AZ-500']
  }
};

export default function Microsoft365SecurityAdministratorContent() {
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
              <div className="text-red-400 font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">Security & Compliance</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Microsoft 365 Security
            <span className="text-red-400 block">Administrator</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Secure Microsoft 365 environments with advanced security controls and compliance. Protect organizational data and manage security risks across the Microsoft 365 ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">24 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 14</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-red-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">MS-500</div>
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
              <h3 className="text-white font-semibold">Security Architecture & Strategy</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> M365 security posture assessment</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Zero trust security model</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security baseline configuration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Risk management frameworks</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-950/20 p-2 rounded-lg">
                <Warning className="text-orange-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Advanced Threat Protection</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Microsoft Defender for Office 365</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Safe Attachments and Safe Links</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Anti-phishing and anti-spam policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Threat hunting and investigation</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-900/30 p-2 rounded-lg">
                <Lock className="text-amber-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Information Protection & Governance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Data Loss Prevention (DLP) policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Sensitivity labels and protection</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Retention policies and labels</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Records management lifecycle</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-rose-900/30 p-2 rounded-lg">
                <Eye className="text-rose-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Security Monitoring & Compliance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Microsoft 365 Defender portal</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Insider risk management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Communication compliance</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Audit log analysis and reporting</li>
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
