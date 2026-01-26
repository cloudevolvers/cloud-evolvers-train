import React from 'react';
import { CheckCircle, Server, Cloud, Shield, Target, BookOpen, Award, Settings, Layers } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-stack-hub',
  slug: 'azure-stack-hub',
  title: 'Azure Stack Hub Operator (AZ-600)',
  description: 'Master hybrid cloud operations with Azure Stack Hub',
  content: 'Specialized training covering Azure Stack Hub deployment, management, and hybrid cloud integration.',
  category: 'Azure',
  subcategory: 'Hybrid Cloud',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-104 or equivalent Azure experience', 'Windows Server administration', 'Hyper-V knowledge'],
  learningObjectives: [
    'Deploy and manage Azure Stack Hub infrastructure',
    'Implement hybrid cloud connectivity and services',
    'Monitor and maintain Azure Stack Hub operations'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1995, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Stack Hub', 'Hybrid Cloud', 'AZ-600'],
  featured: false,
  certification: { available: true, name: 'AZ-600' },
  maxParticipants: 8
};

export default function AzureStackHubContent() {
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
          Master Azure Stack Hub for hybrid cloud operations! This expert-level course covers deployment, 
          management, and operations of Azure Stack Hub integrated systems for on-premises Azure services.
        </p>
      </section>

      {/* Stack Hub Operations Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Azure Stack Hub Operations
        </h3>
        
        <div className="space-y-4">
          {/* Infrastructure Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-600" />
              Infrastructure Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Hardware Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Scale units, nodes, and hardware lifecycle</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">System Updates:</span>
                  <span className="text-slate-700 dark:text-slate-300"> OEM updates, Microsoft updates, and patching</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Capacity Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Resource monitoring and scaling decisions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4 text-green-600" />
              Service Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Resource Providers:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Compute, storage, and network services</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Plans and Offers:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Service provisioning and quotas</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Marketplace Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Publishing and managing marketplace items</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity & Access */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Identity & Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Identity Providers:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure AD and AD FS integration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-tenancy:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Tenant management and isolation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Certificate Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> PKI and certificate rotation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid Connectivity */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-purple-600" />
              Hybrid Cloud Operations
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Bridge:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Registration and syndication with Azure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Usage Reporting:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Billing and usage data collection</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Backup and Recovery:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Infrastructure protection service</span>
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
              Complete preparation for the AZ-600 Azure Stack Hub Operator certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Hybrid Cloud Mastery</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master on-premises Azure services and hybrid cloud operations.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Expert-Level Skills</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Develop expert-level skills in Azure Stack Hub operations.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Enterprise Focus</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Specialize in enterprise hybrid cloud infrastructure.
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
              <span className="text-slate-700 dark:text-slate-300">Windows Server administration and Hyper-V experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Understanding of networking and storage concepts</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
