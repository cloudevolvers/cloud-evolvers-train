import React from 'react';
import { CheckCircle, Monitor, Users, Network, Shield, Target, BookOpen, Award, Settings, MonitorSpeaker } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-virtual-desktop',
  slug: 'azure-virtual-desktop',
  title: 'Azure Virtual Desktop Specialty (AZ-140)',
  description: 'Master Azure Virtual Desktop for modern remote work solutions',
  content: 'Specialized training covering AVD deployment, management, security, and optimization for enterprise remote work.',
  category: 'Azure',
  subcategory: 'Virtual Desktop',
  difficulty: 'Advanced' as const,
  duration: { days: 3, format: 'days' },
  prerequisites: ['AZ-104 or equivalent Azure experience', 'Windows Server knowledge'],
  learningObjectives: [
    'Plan and deploy Azure Virtual Desktop infrastructure',
    'Manage host pools and session hosts',
    'Configure security and user experience optimization'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Virtual Desktop', 'Remote Work', 'AZ-140'],
  featured: false,
  certification: { available: true, name: 'AZ-140' },
  maxParticipants: 10
};

export default function AzureVirtualDesktopContent() {
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
          Master Azure Virtual Desktop (AVD) for enterprise remote work solutions! This specialized course covers 
          planning, deploying, and managing virtual desktop infrastructure in Azure for optimal user experience.
        </p>
      </section>

      {/* AVD Implementation Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Azure Virtual Desktop Skills
        </h3>
        
        <div className="space-y-4">
          {/* Planning & Architecture */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <MonitorSpeaker className="h-4 w-4 text-blue-600" />
              Planning & Architecture
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">AVD Architecture Design:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Host pools, workspaces, and application groups</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Capacity Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> User profiles, performance requirements, and scaling</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Requirements:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Bandwidth, latency, and connectivity planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deployment & Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-green-600" />
              Deployment & Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Host Pool Configuration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Personal and pooled desktop deployment</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Session Host Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> VM configuration, updates, and maintenance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Publishing:</span>
                  <span className="text-slate-700 dark:text-slate-300"> RemoteApp and MSIX app attach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Security & Compliance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Conditional Access:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-factor authentication and device compliance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Encryption, backup, and disaster recovery</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Security:</span>
                  <span className="text-slate-700 dark:text-slate-300"> NSGs, firewalls, and secure connectivity</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Experience Optimization */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-purple-600" />
              User Experience & Performance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">FSLogix Profiles:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Profile management and optimization</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Performance Monitoring:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Monitor and Log Analytics integration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Autoscaling:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Dynamic host pool scaling based on demand</span>
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
              Complete preparation for the AZ-140 Azure Virtual Desktop Specialty certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Remote Work Expertise</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master modern remote work infrastructure and virtual desktop solutions.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Specialized Microsoft certification for virtual desktop expertise.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibent text-orange-900 dark:text-orange-100 mb-2">Career Specialization</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Specialize in the growing virtual desktop and remote work market.
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
              <span className="text-slate-700 dark:text-slate-300">AZ-104 certification or equivalent Azure administration experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Windows Server and Active Directory knowledge</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Understanding of virtualization concepts</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
