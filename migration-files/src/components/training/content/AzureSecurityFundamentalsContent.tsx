import React from 'react';
import { CheckCircle, Shield, Users, Target, BookOpen, Award, Clock, Lock, Eye, Key } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-security-fundamentals',
  slug: 'azure-security-fundamentals',
  title: 'Azure Security Engineer Associate (AZ-500)',
  description: 'Implement security controls and threat protection in Azure',
  content: 'Azure security training covering identity management, platform protection, and security operations.',
  category: 'Azure',
  subcategory: 'Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-104 or equivalent', 'Security fundamentals knowledge'],
  learningObjectives: [
    'Manage identity and access',
    'Implement platform protection',
    'Manage security operations',
    'Secure data and applications'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Security', 'AZ-500'],
  featured: true,
  certification: { available: true, name: 'AZ-500' },
  maxParticipants: 10
};

export default function AzureSecurityFundamentalsContent() {
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
          Secure your Azure environment with confidence! This comprehensive 4-day security training covers all essential 
          Azure security services, identity management, and compliance frameworks needed to protect modern cloud infrastructure. 
          Prepare for the AZ-500 certification while mastering advanced security concepts.
        </p>
      </section>

      {/* Security Mastery */}
      <section>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Mastery Areas
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700 dark:text-red-300">Zero Trust security architecture implementation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700 dark:text-red-300">Advanced threat protection and detection</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700 dark:text-red-300">Comprehensive compliance framework coverage</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700 dark:text-red-300">Identity governance and privileged access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Areas */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core Security Areas
        </h3>
        
        <div className="space-y-6">
          {/* Identity & Access Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Key className="h-4 w-4 text-blue-600" />
              Azure Active Directory & Identity Protection
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Factor Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Phased rollout and user adoption strategies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Conditional Access:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk-based access policies and controls</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Privileged Identity Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Just-in-time access and approval workflows</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Identity Governance:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Access reviews and lifecycle management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Network Security */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              Network Security
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Network Security Groups:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced traffic filtering and micro-segmentation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Firewall:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Centralized network security and threat intelligence</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Gateway & WAF:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Web application protection and DDoS defense</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">VPN & ExpressRoute:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Secure hybrid connectivity solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Operations */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-purple-600" />
              Security Operations & Monitoring
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Sentinel:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SIEM/SOAR implementation and threat hunting</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security Center:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Continuous security assessment and recommendations</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Monitor:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Security logging and alerting strategies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Incident Response:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automated response playbooks and forensics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Labs */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Hands-on Security Labs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Identity Lab:</span>
                <span className="text-slate-700 dark:text-slate-300"> Configure advanced authentication methods</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Network Lab:</span>
                <span className="text-slate-700 dark:text-slate-300"> Implement network security controls</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Monitoring Lab:</span>
                <span className="text-slate-700 dark:text-slate-300"> Set up security monitoring and alerting</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">AZ-500 Certification:</span>
                <span className="text-slate-700 dark:text-slate-300"> Complete exam preparation included</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Expert Instruction:</span>
                <span className="text-slate-700 dark:text-slate-300"> Learn from certified security professionals</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Intensive Training:</span>
                <span className="text-slate-700 dark:text-slate-300"> 4 days of comprehensive security coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
