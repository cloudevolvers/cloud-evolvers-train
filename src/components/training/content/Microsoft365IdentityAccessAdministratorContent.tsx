import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, IdentificationCard, Key, ShieldCheck, UserCircle } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'microsoft-365-identity-access-administrator',
  slug: 'microsoft-365-identity-access-administrator',
  title: 'Microsoft 365 Identity & Access Administrator',
  description: 'Master identity and access management in Microsoft 365 and Azure AD environments',
  category: 'Microsoft 365',
  level: 'Advanced',
  duration: { days: 3, hours: 24 },
  price: { amount: 1195, currency: 'EUR' },
  featured: false,
  icon: 'IdentificationCard',
  
  learningObjectives: [
    'Design comprehensive identity architecture',
    'Implement advanced authentication solutions',
    'Configure identity governance frameworks',
    'Manage hybrid identity scenarios',
    'Secure privileged access management',
    'Monitor and audit identity activities'
  ],
  
  prerequisites: [
    'Microsoft 365 fundamentals knowledge',
    'Azure Active Directory experience',
    'Understanding of identity concepts',
    'Basic PowerShell knowledge'
  ],
  
  targetAudience: [
    'Identity and access administrators',
    'Security architects and engineers',
    'Microsoft 365 administrators',
    'IT infrastructure professionals'
  ],
  
  certification: { 
    available: true,
    name: 'SC-300 Preparation',
    description: 'Microsoft Identity and Access Administrator Associate'
  },
  tags: ['Microsoft 365', 'Identity', 'Azure AD', 'Security', 'Access Management'],
  maxParticipants: 14,
  
  instructor: {
    name: 'Identity Management Expert',
    title: 'Microsoft Certified Identity Specialist',
    experience: '10+ years',
    certifications: ['SC-300', 'SC-900', 'MS-500', 'AZ-104']
  }
};

export default function Microsoft365IdentityAccessAdministratorContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-emerald-950/20 via-green-950/20 to-emerald-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/20 to-emerald-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white shadow-lg">
              <IdentificationCard className="h-8 w-8" />
            </div>
            <div>
              <div className="text-emerald-400 font-medium">Advanced Level</div>
              <div className="text-sm text-muted-foreground font-medium">Identity & Access</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Microsoft 365 Identity &
            <span className="text-emerald-400 block">Access Administrator</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master identity and access management in Microsoft 365 and Azure AD environments. Design secure, scalable identity solutions for enterprise organizations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">24 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 14</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-emerald-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">SC-300</div>
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
                <IdentificationCard className="text-emerald-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Identity Architecture Design</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure AD architecture planning</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-tenant identity strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Identity governance frameworks</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Directory synchronization planning</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-950/20 p-2 rounded-lg">
                <Key className="text-green-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Authentication & Authorization</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Advanced MFA configurations</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Conditional Access policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Passwordless authentication</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Identity protection features</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <ShieldCheck className="text-teal-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Privileged Access Management</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure AD Privileged Identity Management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Just-in-time access controls</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Access reviews and certifications</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Emergency access procedures</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-900/30 p-2 rounded-lg">
                <UserCircle className="text-lime-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Identity Lifecycle Management</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Automated user provisioning</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Entitlement management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Guest user management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Identity monitoring and reporting</li>
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
              <div key={index} className="bg-green-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-green-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
