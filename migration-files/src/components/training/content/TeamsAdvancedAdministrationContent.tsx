import React from 'react';
import { CheckCircle, Shield, Users, Target, BookOpen, Award, Clock, Settings, Network, Phone } from 'lucide-react';

export const trainingMetadata = {
  id: 'teams-advanced-administration',
  slug: 'teams-advanced-administration',
  title: 'Microsoft Teams Advanced Administration',
  description: 'Take your Microsoft Teams administration skills to the enterprise level',
  content: 'Advanced course covering complex deployment scenarios, governance automation, and large-scale management strategies used by Fortune 500 companies.',
  category: 'Microsoft 365',
  subcategory: 'Microsoft Teams',
  difficulty: 'Advanced' as const,
  duration: { days: 3, format: 'days' },
  prerequisites: ['Teams Administrator experience', 'Microsoft 365 certification', 'PowerShell knowledge'],
  learningObjectives: [
    'Large-scale deployment and governance automation',
    'Advanced security and compliance configuration',
    'Voice infrastructure and calling solutions',
    'Performance optimization and troubleshooting'
  ],
  instructor: {
    id: 'teams-expert',
    name: 'Teams Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1195, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft Teams', 'Administration', 'Enterprise', 'Governance', 'Voice'],
  featured: false,
  certification: { available: false },
  maxParticipants: 10
};

export default function TeamsAdvancedAdministrationContent() {
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
          Take your Microsoft Teams administration skills to the enterprise level. This advanced course covers 
          complex deployment scenarios, governance automation, and large-scale management strategies used by 
          Fortune 500 companies.
        </p>
      </section>

      {/* Enterprise Administration Excellence */}
      <section>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Enterprise Administration Excellence
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-indigo-700 dark:text-indigo-300">Large-scale deployment and governance automation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-indigo-700 dark:text-indigo-300">Advanced security and compliance configuration</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-indigo-700 dark:text-indigo-300">Voice infrastructure and calling solutions</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-indigo-700 dark:text-indigo-300">Performance optimization and troubleshooting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Architecture Design */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Network className="h-4 w-4 text-green-600" />
          Enterprise Architecture Design
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Tenant Strategy & Planning</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-tenant Architecture:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Design patterns for global organizations</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Bandwidth optimization and quality of service</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Identity Integration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced Azure AD and federated scenarios</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Capacity Planning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Scaling for thousands of users</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Regional Considerations:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data residency and compliance requirements</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Advanced Governance</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Policy Automation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> PowerShell-driven governance workflows for team lifecycle management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Compliance Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data loss prevention and retention policies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Access Controls:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Conditional access and external user management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Infrastructure */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Phone className="h-4 w-4 text-purple-600" />
          Voice Infrastructure & Calling Solutions
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Enterprise Voice Setup</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Direct Routing:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SIP trunk configuration and media bypass</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Phone System:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Auto attendants and call queues at scale</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Voice Routing:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Global voice policies and least cost routing</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Performance & Monitoring</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Call Quality:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced call analytics and quality monitoring</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Usage Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> PowerBI reporting for Teams adoption</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Troubleshooting:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced diagnostic tools and log analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Advanced Administration Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Settings className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Automation Scripts:</span>
                <span className="text-slate-700 dark:text-slate-300"> PowerShell for bulk operations and maintenance</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Security Hardening:</span>
                <span className="text-slate-700 dark:text-slate-300"> Advanced threat protection and information barriers</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">User Lifecycle:</span>
                <span className="text-slate-700 dark:text-slate-300"> Automated provisioning and de-provisioning</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Network className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Network Optimization:</span>
                <span className="text-slate-700 dark:text-slate-300"> QoS configuration and bandwidth management</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Voice Analytics:</span>
                <span className="text-slate-700 dark:text-slate-300"> Call quality insights and optimization strategies</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Migration Planning:</span>
                <span className="text-slate-700 dark:text-slate-300"> Large-scale Skype for Business to Teams migration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Duration */}
      <section>
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            3-Day Intensive Program
          </h3>
          <p className="text-slate-700 dark:text-slate-300">
            This comprehensive 3-day course combines theoretical knowledge with hands-on lab exercises. 
            Each day focuses on different aspects of enterprise Teams administration, from planning and 
            deployment to optimization and troubleshooting.
          </p>
        </div>
      </section>
    </div>
  );
}
