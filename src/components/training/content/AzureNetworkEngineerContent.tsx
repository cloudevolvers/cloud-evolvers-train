import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Globe, Shield, Network } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-network-engineer',
  slug: 'azure-network-engineer',
  title: 'Azure Network Engineer Associate (AZ-700)',
  description: 'Design, implement, and maintain Azure networking solutions',
  category: 'Infrastructure',
  level: 'Intermediate',
  duration: { days: 3, hours: 24 },
  price: { amount: 1295, currency: 'EUR' },
  featured: false,
  icon: 'Network',
  
  learningObjectives: [
    'Design, implement, and manage hybrid networking',
    'Design and implement core networking infrastructure',
    'Design and implement routing',
    'Secure and monitor networks',
    'Design and implement private access to Azure Services'
  ],
  
  prerequisites: [
    'Understanding of networking fundamentals',
    'Experience with Azure fundamentals',
    'Knowledge of hybrid cloud concepts',
    'Basic understanding of security principles'
  ],
  
  targetAudience: [
    'Network engineers',
    'Azure infrastructure specialists',
    'Cloud architects focusing on networking',
    'System administrators managing network infrastructure'
  ],
  
  certification: { available: true, name: 'AZ-700' },
  tags: ['Azure', 'Networking', 'AZ-700', 'Infrastructure'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Network Expert',
    title: 'Microsoft Certified Trainer',
    experience: '10+ years',
    certifications: ['AZ-700', 'AZ-104', 'AZ-305']
  }
};

export default function AzureNetworkEngineerContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-blue-950/20 via-indigo-950/20 to-purple-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl text-white shadow-lg">
              <Network className="h-8 w-8" />
            </div>
            <div>
              <div className="text-blue-400 font-medium">Associate Level</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-700 preparation</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure Network Engineer
            <span className="text-blue-400 block">Associate Training</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Comprehensive Azure networking training covering virtual networks, hybrid connectivity, traffic management, network security, and monitoring. Essential for network engineers working with Azure infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">3 Days</div>
                <div className="text-sm text-muted-foreground font-medium">Intensive Training</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Users className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">Max 12</div>
                <div className="text-sm text-muted-foreground font-medium">Participants</div>
              </div>
            </div>
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Certificate className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">AZ-700</div>
                <div className="text-sm text-muted-foreground font-medium">Associate Certification</div>
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
                <Network className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Virtual Networks & Core Infrastructure</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement Virtual Networks (VNets)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure IP addressing and DNS</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement network segmentation and peering</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement subnets and network policies</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-950/20 p-2 rounded-lg">
                <Globe className="text-indigo-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Hybrid Networking & Connectivity</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement VPN connections</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure ExpressRoute connectivity</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement Virtual WAN</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement network connectivity services</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Network className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Routing & Traffic Management</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure user-defined routes (UDR)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement Azure Load Balancer</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Design and implement Application Gateway</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure Traffic Manager and Front Door</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-950/20 p-2 rounded-lg">
                <Shield className="text-green-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Network Security & Monitoring</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement Network Security Groups (NSGs)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure Azure Firewall and WAF</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement private endpoints and service endpoints</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Monitor and troubleshoot network connectivity</li>
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
