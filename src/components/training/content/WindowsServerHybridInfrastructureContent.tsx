import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, HardDrives, CloudArrowUp, Network, Shield } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-infrastructure',
  slug: 'windows-server-hybrid-infrastructure',
  title: 'Windows Server Hybrid Infrastructure',
  description: 'Design and implement enterprise-scale Windows Server hybrid infrastructure',
  category: 'Windows Server',
  level: 'Expert',
  duration: { days: 4, hours: 32 },
  price: { amount: 1495, currency: 'EUR' },
  featured: false,
  icon: 'HardDrives',
  
  learningObjectives: [
    'Architect enterprise hybrid infrastructures',
    'Implement advanced virtualization solutions',
    'Design high-availability and disaster recovery',
    'Configure hybrid networking topologies',
    'Secure hybrid infrastructure environments',
    'Optimize hybrid infrastructure performance'
  ],
  
  prerequisites: [
    'Advanced Windows Server experience',
    'Hyper-V and virtualization expertise',
    'Azure infrastructure knowledge',
    'Enterprise networking understanding'
  ],
  
  targetAudience: [
    'Infrastructure architects',
    'Senior system administrators',
    'Datacenter engineers',
    'Enterprise infrastructure consultants'
  ],
  
  certification: { 
    available: true,
    name: 'AZ-801 Preparation',
    description: 'Configuring Windows Server Hybrid Advanced Services'
  },
  tags: ['Windows Server', 'Infrastructure', 'Architecture', 'Enterprise', 'Hybrid Cloud'],
  maxParticipants: 10,
  
  instructor: {
    name: 'Infrastructure Architecture Expert',
    title: 'Microsoft Certified Master',
    experience: '20+ years',
    certifications: ['AZ-801', 'AZ-800', 'AZ-305', 'MCM']
  }
};

export default function WindowsServerHybridInfrastructureContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-stone-950/20 via-slate-950/20 to-stone-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-stone-200/20 to-slate-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-200/20 to-stone-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-stone-500 to-slate-500 rounded-2xl text-white shadow-lg">
              <HardDrives className="h-8 w-8" />
            </div>
            <div>
              <div className="text-stone-400 font-medium">Expert Level</div>
              <div className="text-sm text-muted-foreground font-medium">Infrastructure Architecture</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Windows Server Hybrid
            <span className="text-stone-400 block">Infrastructure</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Design and implement enterprise-scale Windows Server hybrid infrastructure. Master advanced infrastructure patterns for mission-critical enterprise environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-stone-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">4 Days</div>
                <div className="text-sm text-muted-foreground font-medium">32 Hours Total</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-stone-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">Max 10</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-stone-400 h-5 w-5" />
              <div>
                <div className="text-white font-semibold">AZ-801</div>
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
              <div className="bg-stone-900/30 p-2 rounded-lg">
                <HardDrives className="text-stone-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Enterprise Infrastructure Architecture</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Enterprise infrastructure design patterns</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Capacity planning and scaling strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Multi-site architecture design</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Performance optimization frameworks</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <CloudArrowUp className="h-5 w-5 text-muted-foreground font-medium" />
              </div>
              <h3 className="text-white font-semibold">Advanced Virtualization & Containers</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Hyper-V advanced features and clustering</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Windows containers and Kubernetes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Virtual machine migration strategies</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Resource allocation and optimization</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Network className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-white font-semibold">High Availability & Disaster Recovery</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Failover clustering advanced scenarios</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Storage Replica and stretch clusters</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Cross-region disaster recovery</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Business continuity planning</li>
            </ul>
          </div>

          <div className="bg-slate-800 border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-zinc-900/30 p-2 rounded-lg">
                <Shield className="text-zinc-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Security & Compliance</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Advanced security hardening</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Credential Guard and Device Guard</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Compliance and auditing frameworks</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Security monitoring and incident response</li>
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
              <div key={index} className="bg-card flex items-start gap-3 p-3 rounded-lg">
                <ArrowRight className="h-5 w-5 text-muted-foreground font-medium flex-shrink-0 mt-0.5" />
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
              <div key={index} className="bg-stone-900/20 flex items-start gap-3 p-3 rounded-lg">
                <Users className="text-stone-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
