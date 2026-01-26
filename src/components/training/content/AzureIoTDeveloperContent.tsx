import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Certificate, CheckCircle, ArrowRight, Cpu, Lightning, Shield } from '@phosphor-icons/react';

export const trainingMetadata = {
  id: 'azure-iot-developer',
  slug: 'azure-iot-developer',
  title: 'Azure IoT Developer Specialty (AZ-220)',
  description: 'Develop solutions for Azure IoT services and edge devices',
  category: 'AI & Machine Learning',
  level: 'Advanced',
  duration: { days: 4, hours: 32 },
  price: { amount: 1895, currency: 'EUR' },
  featured: false,
  icon: 'Cpu',
  
  learningObjectives: [
    'Set up the IoT solution infrastructure',
    'Provision and manage devices',
    'Implement IoT Edge',
    'Process and manage data',
    'Monitor, troubleshoot, and optimize IoT solutions',
    'Implement security for IoT solutions'
  ],
  
  prerequisites: [
    'Software development experience',
    'Understanding of Azure services',
    'Knowledge of networking and security concepts',
    'Experience with programming languages (C#, JavaScript, Python, etc.)'
  ],
  
  targetAudience: [
    'IoT developers',
    'Solution architects focusing on IoT',
    'Embedded systems developers',
    'Cloud developers working with IoT'
  ],
  
  certification: { available: true, name: 'AZ-220' },
  tags: ['Azure', 'IoT', 'AZ-220', 'Edge Computing'],
  maxParticipants: 12,
  
  instructor: {
    name: 'Expert IoT Developer',
    title: 'Microsoft Certified Trainer',
    experience: '10+ years',
    certifications: ['AZ-220', 'AZ-104', 'AZ-900']
  }
};

export default function AzureIoTDeveloperContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section 
        className="from-blue-950/20 via-cyan-950/20 to-teal-950/20 relative bg-gradient-to-br rounded-2xl p-8 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg">
              <Cpu className="h-8 w-8" />
            </div>
            <div>
              <div className="text-blue-400 font-medium">Advanced Specialty</div>
              <div className="text-sm text-muted-foreground font-medium">AZ-220 preparation</div>
            </div>
          </div>
          
          <h1 className="text-white font-bold mb-4">
            Azure IoT Developer
            <span className="text-blue-400 block">Specialty Training</span>
          </h1>
          
          <p className="text-gray-100 mb-8 max-w-3xl leading-relaxed">
            Master Azure IoT solutions development with comprehensive training on IoT Hub, Edge computing, device management, and data processing. Build enterprise-ready IoT solutions with security and optimization best practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 flex items-center gap-3 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 h-6 w-6" />
              <div>
                <div className="text-white font-semibold">4 Days</div>
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
                <div className="text-white font-semibold">AZ-220</div>
                <div className="text-sm text-muted-foreground font-medium">Certification</div>
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
                <Lightning className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">IoT Solution Infrastructure</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Create and configure an IoT hub</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Register devices</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure devices and IoT Edge</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure file upload</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-900/30 p-2 rounded-lg">
                <Cpu className="text-cyan-400 h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">Device Management</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Set up device provisioning service</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Manage device lifecycle</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Manage IoT devices by using IoT Hub</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Build IoT device communication</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-900/30 p-2 rounded-lg">
                <Lightning className="text-teal-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">IoT Edge Implementation</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Set up and deploy an IoT Edge device</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Develop IoT Edge modules</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure offline support</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Implement security for IoT Edge devices</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-950/20 p-2 rounded-lg">
                <Shield className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold">Data Processing & Security</h3>
            </div>
            <ul className="grid gap-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure message routing in Azure IoT Hub</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure stream processing</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configure data storage and Time Series Insights</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Monitor and optimize IoT solutions</li>
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
