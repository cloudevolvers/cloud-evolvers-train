import React from 'react';
import { CheckCircle, Headphones, Network, Shield, Target, BookOpen, Award, Settings, Wrench } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-support-engineer',
  slug: 'azure-support-engineer',
  title: 'Azure Support Engineer for Connectivity Specialty (AZ-720)',
  description: 'Master Azure connectivity troubleshooting and support',
  content: 'Specialized training covering Azure networking, connectivity troubleshooting, and advanced support scenarios.',
  category: 'Azure',
  subcategory: 'Support Engineering',
  difficulty: 'Advanced' as const,
  duration: { days: 3, format: 'days' },
  prerequisites: ['AZ-104 or equivalent experience', 'Networking fundamentals', 'Troubleshooting experience'],
  learningObjectives: [
    'Troubleshoot Azure networking and connectivity issues',
    'Implement advanced diagnostic and monitoring techniques',
    'Resolve complex Azure infrastructure problems'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Support', 'Connectivity', 'Troubleshooting', 'AZ-720'],
  featured: false,
  certification: { available: true, name: 'AZ-720' },
  maxParticipants: 10
};

export default function AzureSupportEngineerContent() {
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
          Master Azure connectivity troubleshooting and support engineering! This advanced course covers 
          systematic approaches to diagnosing and resolving complex Azure networking and connectivity issues.
        </p>
      </section>

      {/* Support Engineering Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Azure Support Engineering Skills
        </h3>
        
        <div className="space-y-4">
          {/* Connectivity Troubleshooting */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Network className="h-4 w-4 text-blue-600" />
              Connectivity Troubleshooting
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VNet Connectivity:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Peering, gateways, and routing issues</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Hybrid Connections:</span>
                  <span className="text-slate-700 dark:text-slate-300"> VPN and ExpressRoute troubleshooting</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">DNS Resolution:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Private DNS zones and name resolution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Tools */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-green-600" />
              Diagnostic Tools & Techniques
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Watcher:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Connection monitor, packet capture, flow logs</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Monitor:</span>
                  <span className="text-slate-700 dark:text-slate-300"> KQL queries, alerts, and dashboards</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Performance Diagnostics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Latency analysis and bandwidth testing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Troubleshooting */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Security & Access Issues
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">NSG Analysis:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Security rule evaluation and flow analysis</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Firewall Troubleshooting:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Firewall and third-party solutions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Identity Issues:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Authentication and authorization problems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Methodologies */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Headphones className="h-4 w-4 text-purple-600" />
              Support Methodologies
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Systematic Troubleshooting:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Root cause analysis and escalation procedures</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Documentation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Case management and knowledge base creation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Customer Communication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Technical explanation and status updates</span>
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
              Complete preparation for the AZ-720 Azure Support Engineer for Connectivity Specialty exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Troubleshooting Mastery</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master systematic approaches to complex Azure connectivity issues.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Support Expertise</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Develop specialized support engineering skills for Azure environments.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Advancement</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Advance into specialized Azure support and engineering roles.
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
              <span className="text-slate-700 dark:text-slate-300">Strong networking fundamentals and TCP/IP knowledge</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Experience with troubleshooting and diagnostic tools</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
