import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, GitBranch, Rocket, Gauge } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-devops-engineer',
  slug: 'azure-devops-engineer',
  title: 'Azure DevOps Engineer Expert (AZ-400)',
  description: 'Design and implement DevOps practices for continuous integration and delivery',
  category: 'Developer Tools',
  level: 'Advanced',
  duration: { days: 4, hours: 32 },
  price: { amount: 1795, currency: 'EUR' },
  featured: false,
  icon: 'GitBranch',
  
  learningObjectives: [
    'Configure processes and communications',
    'Design and implement source control',
    'Design and implement build and release pipelines',
    'Develop a security and compliance plan',
    'Implement continuous feedback',
    'Manage application infrastructure'
  ],
  
  prerequisites: [
    'Azure Administrator or Developer Associate certification',
    'Experience with Azure DevOps or similar tools',
    'Understanding of development and deployment processes',
    'Knowledge of infrastructure as code concepts'
  ],
  
  targetAudience: [
    'DevOps engineers',
    'Release engineers',
    'Site reliability engineers',
    'Azure developers and administrators'
  ],
  
  certification: { available: true, name: 'AZ-400' },
  tags: ['Azure', 'DevOps', 'AZ-400', 'CI/CD'],
  maxParticipants: 12,
  
  instructor: {
    name: 'DevOps Expert',
    title: 'Microsoft Certified Trainer',
    experience: '12+ years',
    certifications: ['AZ-400', 'AZ-204', 'AZ-104']
  }
};

export default function AzureDevOpsEngineerContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-orange-950/20 via-red-950/20 to-pink-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200/20 to-orange-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl text-white shadow-lg">
              <GitBranch className="h-8 w-8" />
            </div>
            <div>
              <div className="text-orange-400 font-medium">Expert Level</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-400 preparation</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure DevOps Engineer
            <span className="text-orange-400 block">Expert Training</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Advanced DevOps training covering CI/CD pipeline design, source control strategies, dependency management, application infrastructure, and continuous feedback. Master enterprise DevOps practices with Azure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-orange-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">4 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Expert Training</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-orange-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-orange-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">AZ-400</div>
                <div className="text-sm text-muted-foreground font-medium">Expert Certification</div>
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
              <div className="bg-orange-950/20 p-2 rounded-lg">
                <GitBranch className="text-orange-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Source Control & Strategy</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement branching strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure repositories and branch policies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Integrate source control with work items</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement git workflows</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-900/30 p-2 rounded-lg">
                <Rocket className="text-red-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">CI/CD Pipelines</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement build automation</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement release pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure deployment groups and agents</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement deployment patterns and testing</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-950/20 p-2 rounded-lg">
                <Gauge className="text-pink-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Infrastructure as Code</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement Azure Resource Manager templates</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Manage Azure Kubernetes Service infrastructure</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement configuration management</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement infrastructure compliance</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Gauge className="text-indigo-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Security & Monitoring</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement security and compliance scanning</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement continuous feedback</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure monitoring and logging</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement dependency management</li>
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
              <div key={index} className="bg-orange-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-orange-400 h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
