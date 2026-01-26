import React from 'react';
import { CheckCircle, Cpu, Wifi, Database, Cloud, Target, BookOpen, Award, Users, Zap } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-iot-developer',
  slug: 'azure-iot-developer',
  title: 'Azure IoT Developer Specialty (AZ-220)',
  description: 'Master Azure IoT solutions and edge computing development',
  content: 'Specialized training covering IoT device management, data processing, security, and edge computing solutions.',
  category: 'Azure',
  subcategory: 'IoT & Edge',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-204 or equivalent development experience', 'Basic IoT knowledge'],
  learningObjectives: [
    'Implement IoT device communication and management',
    'Process and analyze IoT data',
    'Implement IoT security and edge computing'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'IoT', 'Edge Computing', 'AZ-220'],
  featured: false,
  certification: { available: true, name: 'AZ-220' },
  maxParticipants: 8
};

export default function AzureIoTDeveloperContent() {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Course Overview
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Master Azure IoT development! This specialized course covers IoT Hub, device management, data processing, 
          edge computing, and security for comprehensive IoT solutions in Azure.
        </p>
      </section>

      {/* IoT Development Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          IoT Development Skills
        </h3>
        
        <div className="space-y-4">
          {/* Device Communication */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Wifi className="h-4 w-4 text-blue-600" />
              Device Communication & Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure IoT Hub:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Bidirectional communication with IoT devices</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Device Provisioning Service:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Zero-touch device provisioning at scale</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Device Twins:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Device state management and metadata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Processing */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-600" />
              Data Processing & Analytics
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Stream Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Real-time data stream processing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Event Grid & Event Hubs:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Event-driven architecture and ingestion</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Time Series Insights:</span>
                  <span className="text-slate-700 dark:text-slate-300"> IoT data visualization and analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Edge Computing */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-purple-600" />
              Edge Computing Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure IoT Edge:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Deploy cloud intelligence to edge devices</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Edge Modules:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Containerized applications for edge devices</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Offline Capabilities:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Extended offline operations and sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Monitoring */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-orange-600" />
              Security & Monitoring
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Defender for IoT:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Comprehensive IoT security monitoring</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Device Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> X.509 certificates and symmetric keys</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Monitoring & Diagnostics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Monitor for IoT solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Training Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Certification Preparation</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Complete preparation for the AZ-220 Azure IoT Developer Specialty certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Hands-on Experience</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Practical labs with real IoT devices and Azure IoT services.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Specialized Microsoft certification for IoT development.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Specialization</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Specialize in the growing IoT and edge computing market.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Prerequisites</h3>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">AZ-204 certification or equivalent Azure development experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Programming experience (C#, Python, or JavaScript)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of IoT concepts and protocols</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
