import React from 'react';
import { CheckCircle, Shield, Database, Network, Users, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-administrator-mastery',
  slug: 'azure-administrator-mastery',
  title: 'Azure Administrator Associate (AZ-104)',
  description: 'Master Azure administration with comprehensive resource management skills',
  content: 'Complete Azure administrator training covering identity, governance, storage, compute, and networking.',
  category: 'Azure',
  subcategory: 'Administration',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-900 or equivalent Azure experience'],
  learningObjectives: [
    'Manage Azure identities and governance',
    'Implement and manage storage solutions',
    'Deploy and manage Azure compute resources'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Administrator', 'AZ-104', 'Infrastructure'],
  featured: true,
  certification: { available: true, name: 'AZ-104' },
  maxParticipants: 12
};

export default function AzureAdministratorMasteryContent() {
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
          Become an Azure Administrator expert! This comprehensive training covers all aspects of Azure resource management, 
          from virtual machines and storage to networking and identity governance.
        </p>
      </section>

      {/* Core Administration Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core Administration Skills
        </h3>
        
        <div className="space-y-4">
          {/* Identity and Governance */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Identity and Governance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Active Directory:</span>
                  <span className="text-slate-700 dark:text-slate-300"> User and group management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Role-Based Access Control:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Fine-grained permission management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Policy:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Governance and compliance automation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Subscriptions and Resource Groups:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Organizational structure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Cost Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Budget control and optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Storage Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-600" />
              Storage Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Storage Accounts:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Blob, file, queue, and table storage</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Disk Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Premium and standard disk configurations</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Backup Solutions:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Backup and site recovery</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Migration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure File Sync and storage migration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Encryption, access keys, and shared access signatures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Machine Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Network className="h-4 w-4 text-purple-600" />
              Virtual Machine Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">VM deployment and configuration strategies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Scale sets and availability sets management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">VM extensions and custom script deployment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Performance monitoring and optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Labs */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Hands-on Lab Exercises</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Practical exercises that reinforce theoretical knowledge:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Configure Azure AD tenant and user management</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Deploy and manage virtual machines at scale</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Implement comprehensive backup strategies</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Configure network security and access policies</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Optimize costs using Azure Cost Management tools</span>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          Who Should Attend
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">System administrators transitioning to cloud</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">IT professionals with basic Azure knowledge</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Infrastructure engineers seeking Azure expertise</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Candidates preparing for AZ-104 certification</span>
          </div>
        </div>
      </section>

      {/* Certification Path */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-600" />
          Certification Path
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          This training prepares you for the <span className="font-semibold text-slate-900 dark:text-slate-100">AZ-104 Microsoft Azure Administrator</span> certification exam.
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Comprehensive exam preparation materials</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Practice labs and real-world scenarios</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Expert tips for exam success</span>
          </div>
        </div>
      </section>
    </div>
  );
}
