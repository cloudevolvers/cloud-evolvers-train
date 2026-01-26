import React from 'react';
import { CheckCircle, Server, Cloud, Shield, Target, BookOpen, Award, Settings, Database } from 'lucide-react';

export const trainingMetadata = {
  id: 'windows-server-hybrid-infrastructure',
  slug: 'windows-server-hybrid-infrastructure',
  title: 'Windows Server Hybrid Infrastructure (AZ-801)',
  description: 'Advanced Windows Server hybrid infrastructure and Azure integration',
  content: 'Advanced training covering Windows Server infrastructure, disaster recovery, migration, and monitoring.',
  category: 'Azure',
  subcategory: 'Windows Server',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-800 or equivalent experience', 'Windows Server infrastructure knowledge', 'Azure fundamentals'],
  learningObjectives: [
    'Implement advanced Windows Server infrastructure',
    'Configure disaster recovery and migration strategies',
    'Monitor and troubleshoot hybrid environments'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Windows Server', 'Infrastructure', 'AZ-801'],
  featured: false,
  certification: { available: true, name: 'AZ-801' },
  maxParticipants: 12
};

export default function WindowsServerHybridInfrastructureContent() {
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
          Master advanced Windows Server hybrid infrastructure! This course covers complex infrastructure 
          scenarios, disaster recovery, migration strategies, and advanced monitoring in hybrid environments.
        </p>
      </section>

      {/* Infrastructure Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Advanced Infrastructure Skills
        </h3>
        
        <div className="space-y-4">
          {/* Advanced Storage */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-600" />
              Advanced Storage Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Storage Migration Service:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Migrate file servers to modern platforms</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure File Sync:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid file synchronization</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Storage Replica:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Block-level storage replication</span>
                </div>
              </div>
            </div>
          </div>

          {/* Disaster Recovery */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              Disaster Recovery & Business Continuity
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Site Recovery:</span>
                  <span className="text-slate-700 dark:text-slate-300"> VM replication and failover</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Hyper-V Replica:</span>
                  <span className="text-slate-700 dark:text-slate-300"> VM replication for disaster recovery</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Backup Strategies:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid backup and recovery planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Migration & Modernization */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-red-600" />
              Migration & Modernization
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Migrate:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Assessment and migration to Azure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Active Directory Migration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Domain consolidation and migration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">ADFS to Azure AD:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Federation services migration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Troubleshooting */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-purple-600" />
              Monitoring & Troubleshooting
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Monitor:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Hybrid environment monitoring</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Update Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automated update deployment</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Performance Analysis:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced performance troubleshooting</span>
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
              Complete preparation for the AZ-801 Windows Server Hybrid Infrastructure exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Advanced Skills</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master complex hybrid infrastructure scenarios and solutions.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Migration Expertise</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Become an expert in Windows Server to Azure migration.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Senior-Level Role</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Qualify for senior Windows Server and hybrid infrastructure roles.
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
              <span className="text-slate-700 dark:text-slate-300">AZ-800 certification or equivalent Windows Server hybrid experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Strong understanding of Windows Server infrastructure</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Azure fundamentals and basic hybrid cloud concepts</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
