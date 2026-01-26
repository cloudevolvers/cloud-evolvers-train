import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Clock, Award, Target, BookOpen, Settings, Shield, Database, Network, Monitor } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-administrator',
  slug: 'azure-administrator',
  title: 'Azure Administrator Associate (AZ-104)',
  description: 'Master Azure administration skills for managing cloud infrastructure and resources',
  content: 'Comprehensive training covering Azure administration, virtual machines, storage, networking, and governance.',
  category: 'Azure',
  subcategory: 'Administration',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: [
    'Azure Fundamentals knowledge',
    'Basic networking and security concepts',
    'Experience with PowerShell or Azure CLI'
  ],
  learningObjectives: [
    'Manage Azure identities and governance',
    'Implement and manage storage solutions',
    'Deploy and manage Azure compute resources',
    'Configure and manage virtual networking',
    'Monitor and back up Azure resources'
  ],
  instructor: {
    id: 'azure-admin-expert',
    name: 'Microsoft Certified Trainer',
    title: 'Azure Infrastructure Expert'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Administrator', 'AZ-104', 'Infrastructure'],
  featured: true,
  certification: { available: true, name: 'AZ-104' },
  maxParticipants: 12,
  icon: 'Settings'
};

export default function AzureAdministratorContent() {
  return (
    <div className="space-y-12">
      {/* Course Overview with gradient background */}
      <motion.section 
        className="from-blue-950/20 via-indigo-950/20 to-blue-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <h2 className="text-white font-bold mb-6 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl text-white shadow-lg">
              <BookOpen className="h-8 w-8" />
            </div>
            Course Overview
          </h2>
          <p className="text-gray-100 leading-relaxed max-w-4xl">
            This intensive Azure Administrator Associate training prepares you for the AZ-104 certification exam. 
            Learn to manage Azure subscriptions, secure identities, administer infrastructure, configure virtual networking, 
            and ensure business continuity through comprehensive hands-on labs.
          </p>
        </div>
      </motion.section>

      {/* Learning Objectives with enhanced styling */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-white font-bold">Learning Objectives</h3>
        </div>
        <p className="text-gray-300 mb-6">
          Master the core skills needed to be an effective Azure Administrator:
        </p>
        <div className="grid gap-4">
          <motion.div 
            className="bg-slate-800/50 border-emerald-800/30 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-emerald-950/30 group-hover:bg-emerald-900/40 p-2 rounded-lg transition-colors">
              <Shield className="text-emerald-400 h-5 w-5" />
            </div>
            <div>
              <span className="text-white font-semibold">Identity and Governance:</span>
              <p className="text-gray-300 mt-1">Manage Azure AD, RBAC, policies, and resource organization</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-blue-800/30 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-blue-950/30 group-hover:bg-blue-900/40 p-2 rounded-lg transition-colors">
              <Database className="text-blue-400 h-5 w-5" />
            </div>
            <div>
              <span className="text-white font-semibold">Storage Solutions:</span>
              <p className="text-gray-300 mt-1">Configure storage accounts, implement data protection and disaster recovery</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-purple-800/30 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-purple-950/30 group-hover:bg-purple-900/40 p-2 rounded-lg transition-colors">
              <Settings className="text-purple-400 h-5 w-5" />
            </div>
            <div>
              <span className="text-white font-semibold">Compute Resources:</span>
              <p className="text-gray-300 mt-1">Deploy and manage VMs, containers, and App Services</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-indigo-800/30 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-indigo-950/30 group-hover:bg-indigo-900/40 p-2 rounded-lg transition-colors">
              <Network className="text-indigo-400 h-5 w-5" />
            </div>
            <div>
              <span className="text-white font-semibold">Virtual Networking:</span>
              <p className="text-gray-300 mt-1">Implement VNets, load balancers, and hybrid connectivity</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-orange-800/30 flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-orange-950/30 group-hover:bg-orange-900/40 p-2 rounded-lg transition-colors">
              <Monitor className="text-orange-400 h-5 w-5" />
            </div>
            <div>
              <span className="text-white font-semibold">Monitoring and Backup:</span>
              <p className="text-gray-300 mt-1">Configure monitoring, alerting, and backup solutions</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Training Format with enhanced cards */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-white font-bold mb-6">Training Format</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div 
            className="from-blue-950/30 to-indigo-950/30 border-blue-800/30 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-blue-500 rounded-xl text-white shadow-md">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <div className="text-white font-bold">Duration</div>
              <div className="text-blue-400 font-medium">4 days intensive</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="from-emerald-950/30 to-teal-950/30 border-emerald-800/30 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-emerald-500 rounded-xl text-white shadow-md">
              <Users className="h-7 w-7" />
            </div>
            <div>
              <div className="text-white font-bold">Group Size</div>
              <div className="text-emerald-400 font-medium">Max 12 participants</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="from-amber-950/30 to-orange-950/30 border-amber-800/30 flex items-center gap-4 p-6 bg-gradient-to-br rounded-xl shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-3 bg-amber-500 rounded-xl text-white shadow-md">
              <Award className="h-7 w-7" />
            </div>
            <div>
              <div className="text-white font-bold">Certification</div>
              <div className="text-amber-400 font-medium">AZ-104 preparation</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Course Modules with enhanced styling */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-white font-bold mb-6">Course Modules</h3>
        <div className="grid gap-6">
          <motion.div 
            className="bg-slate-800/50 border-emerald-800/30 p-6 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-emerald-900/30 p-2 rounded-lg">
                <Shield className="text-emerald-400 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Module 1: Manage Azure Identities and Governance</h4>
                <p className="text-gray-300">Azure Active Directory, users, groups, RBAC, and Azure Policy implementation</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-blue-800/30 p-6 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-900/30 p-2 rounded-lg">
                <Database className="text-blue-400 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Module 2: Implement and Manage Storage</h4>
                <p className="text-gray-300">Storage accounts, blob storage, file shares, and data protection strategies</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-purple-800/30 p-6 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <Settings className="text-purple-400 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Module 3: Deploy and Manage Azure Compute Resources</h4>
                <p className="text-gray-300">Virtual machines, containers, App Services, and scaling strategies</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-indigo-800/30 p-6 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-indigo-900/30 p-2 rounded-lg">
                <Network className="text-indigo-400 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Module 4: Configure and Manage Virtual Networking</h4>
                <p className="text-gray-300">VNets, subnets, routing, load balancing, and hybrid connectivity</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-slate-800/50 border-orange-800/30 p-6 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-900/30 p-2 rounded-lg">
                <Monitor className="text-orange-400 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Module 5: Monitor and Back Up Azure Resources</h4>
                <p className="text-gray-300">Azure Monitor, Log Analytics, backup solutions, and disaster recovery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hands-on Labs with enhanced styling */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-white font-bold mb-6">Hands-on Labs</h3>
        <div className="from-slate-900/50 to-slate-800/50 border-slate-700/50 p-8 bg-gradient-to-br rounded-2xl shadow-sm">
          <p className="text-white mb-6 font-semibold">
            Extensive practical exercises including:
          </p>
          <ul className="text-gray-300 space-y-4">
            <motion.li 
              className="flex items-start gap-3 p-3 rounded-lg transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2.5 flex-shrink-0" />
              <span>Setting up Azure AD and implementing RBAC</span>
            </motion.li>
            <motion.li 
              className="flex items-start gap-3 p-3 rounded-lg transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2.5 flex-shrink-0" />
              <span>Deploying and configuring virtual machines</span>
            </motion.li>
            <motion.li 
              className="flex items-start gap-3 p-3 rounded-lg transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2.5 flex-shrink-0" />
              <span>Creating and managing storage solutions</span>
            </motion.li>
            <motion.li 
              className="flex items-start gap-3 p-3 rounded-lg transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mt-2.5 flex-shrink-0" />
              <span>Implementing virtual networking and hybrid connectivity</span>
            </motion.li>
            <motion.li 
              className="flex items-start gap-3 p-3 rounded-lg transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-2.5 flex-shrink-0" />
              <span>Configuring monitoring and backup strategies</span>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Prerequisites & Instructor */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-white font-bold mb-6">Prerequisites</h3>
          <div className="space-y-4">
            {trainingMetadata.prerequisites.map((prerequisite, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border-slate-700/50 flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-900/30 p-1 rounded-lg">
                  <CheckCircle className="text-blue-400 h-4 w-4" />
                </div>
                <span className="text-gray-300 leading-relaxed">{prerequisite}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-white font-bold mb-6">Instructor</h3>
          <div className="from-indigo-950/30 to-blue-950/30 border-indigo-800/30 p-6 bg-gradient-to-br rounded-xl">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold">{trainingMetadata.instructor.name}</h4>
                <p className="text-indigo-400 font-medium">{trainingMetadata.instructor.title}</p>
              </div>
              <p className="text-gray-300">
                Microsoft Certified Trainer with extensive industry experience in Azure infrastructure, 
                administration, and cloud architecture. Specialized in hands-on training delivery 
                and certification preparation.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Topics Covered */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h3 className="text-white font-bold mb-6">Topics Covered</h3>
        <div className="flex flex-wrap gap-3">
          {trainingMetadata.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
