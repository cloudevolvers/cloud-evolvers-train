import React from 'react';
import { CheckCircle, Server, Cloud, Shield, Target, BookOpen, Award, Settings, HardDrive } from 'lucide-react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-administrator',
  slug: 'windows-server-hybrid-administrator',
  title: 'Windows Server Hybrid Administrator Associate (AZ-800)',
  description: 'Master Windows Server hybrid administration with Azure integration',
  content: 'Comprehensive training covering Windows Server deployment, management, and Azure hybrid technologies.',
  category: 'Azure',
  subcategory: 'Windows Server',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['Windows Server experience', 'Basic Azure knowledge', 'Active Directory familiarity'],
  learningObjectives: [
    'Deploy and manage Windows Server in hybrid environments',
    'Implement Azure Arc and hybrid identity solutions',
    'Configure storage and virtualization with Azure integration'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Windows Server', 'Hybrid', 'AZ-800'],
  featured: false,
  certification: { available: true, name: 'AZ-800' },
  maxParticipants: 12
};

export default function WindowsServerHybridAdministratorContent() {
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
          Master Windows Server hybrid administration with Azure integration! This comprehensive course covers 
          modern Windows Server deployment, management, and hybrid cloud technologies.
        </p>
      </section>

      {/* Hybrid Administration Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Windows Server Hybrid Skills
        </h3>
        
        <div className="space-y-4">
          {/* Server Deployment */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-600" />
              Server Deployment & Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Server Core:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Installation, configuration, and remote management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Windows Admin Center:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Modern web-based management interface</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Performance Monitoring:</span>
                  <span className="text-slate-700 dark:text-slate-300"> System monitoring and performance optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Integration */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-green-600" />
              Azure Hybrid Services
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Arc:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Server registration and hybrid management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure AD Connect:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid identity synchronization</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Backup:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid backup and recovery solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity & Security */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Identity & Security
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Active Directory DS:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Domain services and group policy management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Certificate Services:</span>
                  <span className="text-slate-700 dark:text-slate-300"> PKI implementation and management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security Baselines:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Implementing security best practices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Storage & Virtualization */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-purple-600" />
              Storage & Virtualization
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Storage Spaces Direct:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hyper-converged infrastructure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Hyper-V:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Virtualization and VM management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">File Services:</span>
                  <span className="text-slate-700 dark:text-slate-300"> DFS, file sharing, and deduplication</span>
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
              Complete preparation for the AZ-800 Windows Server Hybrid Administrator Associate exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Hybrid Expertise</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master modern hybrid Windows Server and Azure integration.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Modern Management</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Learn cutting-edge Windows Server management techniques.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Growth</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Advance your Windows Server and hybrid cloud career.
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
              <span className="text-slate-700 dark:text-slate-300">Experience with Windows Server administration</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of Azure services</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Familiarity with Active Directory concepts</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
