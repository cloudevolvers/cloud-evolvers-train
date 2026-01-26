import React from 'react';
import { CheckCircle, Shield, Lock, AlertTriangle, Eye, Target, BookOpen, Award, Users, KeyRound } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-security-administrator',
  slug: 'microsoft-365-security-administrator',
  title: 'Microsoft 365 Security Administrator Associate (MS-500)',
  description: 'Master Microsoft 365 security administration and threat protection',
  content: 'Advanced security training covering identity protection, threat management, information protection, and governance.',
  category: 'Microsoft 365',
  subcategory: 'Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['MS-900 or equivalent M365 experience', 'Basic security knowledge'],
  learningObjectives: [
    'Implement and manage identity and access',
    'Implement and manage threat protection',
    'Implement and manage information protection'
  ],
  instructor: {
    id: 'security-expert',
    name: 'Security Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Security', 'MS-500', 'Advanced'],
  featured: true,
  certification: { available: true, name: 'MS-500' },
  maxParticipants: 10
};

export default function Microsoft365SecurityAdministratorContent() {
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
          Become a Microsoft 365 Security expert! This advanced course covers comprehensive security administration,
          threat protection, identity management, and compliance for enterprise Microsoft 365 environments.
        </p>
      </section>

      {/* Security Administration Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Security Administration Skills
        </h3>
        
        <div className="space-y-4">
          {/* Identity & Access Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-blue-600" />
              Identity & Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure AD Identity Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk-based conditional access policies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Privileged Identity Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Just-in-time administrative access</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Factor Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced MFA policies and deployment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Protection */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Advanced Threat Protection
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Defender for Office 365:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Email and collaboration protection</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Defender for Endpoint:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Endpoint protection and response</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Defender for Cloud Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cloud application security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Protection */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600" />
              Information Protection & Governance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Purview Information Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data classification and labeling</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Loss Prevention:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Prevent sensitive data leaks</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Retention Policies:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automated data lifecycle management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Management */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-purple-600" />
              Security Management & Monitoring
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Sentinel:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SIEM and security analytics</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security Score:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Security posture assessment and improvement</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Incident Response:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Security incident investigation and response</span>
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
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Certification Preparation</h4>
            <p className="text-red-800 dark:text-red-200 text-sm">
              Complete preparation for the MS-500 Microsoft 365 Security Administrator certification exam.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Advanced Security Skills</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Master enterprise-level security administration and threat protection.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Industry Recognition</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Career Advancement</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Advanced skills for senior security administrator roles.
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
              <span className="text-slate-700 dark:text-slate-300">MS-900 certification or equivalent Microsoft 365 experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basic security concepts and principles</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Experience with Microsoft 365 administration</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
