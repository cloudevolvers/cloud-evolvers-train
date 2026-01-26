import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Headset, Wrench, Bug, ChartLineUp } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-support-engineer',
  slug: 'azure-support-engineer',
  title: 'Azure Support Engineer Excellence',
  description: 'Master Azure technical support and troubleshooting methodologies',
  category: 'Azure Support',
  level: 'Intermediate',
  duration: { days: 2, hours: 16 },
  price: { amount: 895, currency: 'EUR' },
  featured: false,
  icon: 'Headset',
  
  learningObjectives: [
    'Master Azure troubleshooting methodologies',
    'Implement systematic problem resolution',
    'Use advanced diagnostic tools effectively',
    'Handle complex customer escalations',
    'Apply root cause analysis techniques',
    'Document and share knowledge effectively'
  ],
  
  prerequisites: [
    'Azure fundamentals certification (AZ-900)',
    'Basic Azure administration experience',
    'Customer service or support experience',
    'Understanding of IT service management'
  ],
  
  targetAudience: [
    'Technical support engineers',
    'Azure support specialists',
    'IT help desk professionals',
    'Cloud support consultants'
  ],
  
  certification: { available: false },
  tags: ['Azure', 'Support', 'Troubleshooting', 'Customer Service', 'Problem Resolution'],
  maxParticipants: 16,
  
  instructor: {
    name: 'Azure Support Expert',
    title: 'Senior Support Engineer',
    experience: '8+ years',
    certifications: ['AZ-104', 'AZ-303', 'AZ-304', 'ITIL']
  }
};

export default function AzureSupportEngineerContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-blue-950/20 via-cyan-950/20 to-blue-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg">
              <Headset className="h-8 w-8" />
            </div>
            <div>
              <div className="text-blue-400 font-medium">Intermediate Level</div>
              <div className="text-sm text-muted-foreground font-medium">Support Excellence</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Support Engineer
            <span className="text-blue-400 block">Excellence</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master Azure technical support and troubleshooting methodologies. Become an expert in resolving complex Azure issues and delivering exceptional customer experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">2 Days</div>
                <div className="text-sm text-muted-foreground font-medium">16 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 16</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Professional</div>
                <div className="text-sm text-muted-foreground font-medium">Development</div>
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
              <div className="bg-blue-950/20 p-2 rounded-lg">
                <Headset className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Support Fundamentals</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure support ecosystem overview</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Customer communication best practices</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Incident management procedures</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Escalation pathways and protocols</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-900/30 p-2 rounded-lg">
                <Wrench className="text-cyan-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Diagnostic Tools & Techniques</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Monitor and Log Analytics</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Resource Health and Service Health</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Azure Resource Graph queries</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> PowerShell and CLI diagnostics</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <Bug className="text-teal-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Problem Resolution Methodologies</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Systematic troubleshooting approach</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Root cause analysis techniques</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Service-specific troubleshooting</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance optimization strategies</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-900/30 p-2 rounded-lg">
                <ChartLineUp className="text-sky-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Knowledge Management & Excellence</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Documentation and knowledge capture</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Case study analysis and sharing</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Continuous improvement processes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Team collaboration and mentoring</li>
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
              <div key={index} className="bg-cyan-900/20 flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="text-cyan-400 h-5 w-5 flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-blue-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-blue-400 h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
