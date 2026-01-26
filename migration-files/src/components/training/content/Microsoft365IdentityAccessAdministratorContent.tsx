import React from 'react';
import { CheckCircle, Key, Shield, Users, Lock, Target, BookOpen, Award, Eye, Settings } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-identity-access-administrator',
  slug: 'microsoft-365-identity-access-administrator',
  title: 'Microsoft 365 Identity and Access Administrator Associate (SC-300)',
  description: 'Master Microsoft 365 identity and access management solutions',
  content: 'Advanced training covering Azure AD, identity governance, access management, and identity protection.',
  category: 'Microsoft 365',
  subcategory: 'Identity & Security',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['SC-900 or equivalent security experience', 'Azure AD knowledge'],
  learningObjectives: [
    'Implement identity management solutions',
    'Implement authentication and access management',
    'Implement access management for applications'
  ],
  instructor: {
    id: 'security-expert',
    name: 'Security Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1695, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Identity', 'Security', 'SC-300'],
  featured: false,
  certification: { available: true, name: 'SC-300' },
  maxParticipants: 10
};

export default function Microsoft365IdentityAccessAdministratorContent() {
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
          Become a Microsoft 365 Identity and Access expert! This advanced course covers comprehensive identity 
          management, access controls, and security solutions for enterprise Microsoft 365 environments.
        </p>
      </section>

      {/* Identity Management Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Identity & Access Management Skills
        </h3>
        
        <div className="space-y-4">
          {/* Identity Implementation */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Key className="h-4 w-4 text-blue-600" />
              Identity Implementation & Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Active Directory:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Tenant configuration and management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Hybrid Identity:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure AD Connect and synchronization</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">External Identities:</span>
                  <span className="text-slate-700 dark:text-slate-300"> B2B and B2C collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Authentication & Access */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              Authentication & Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Factor Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced MFA policies and methods</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Conditional Access:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk-based access control policies</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Passwordless Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Windows Hello, FIDO2, and phone sign-in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Access */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-purple-600" />
              Application Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Enterprise Applications:</span>
                  <span className="text-slate-700 dark:text-slate-300"> SSO configuration and management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Proxy:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Secure remote access to on-premises apps</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">App Registrations:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Custom application integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Governance */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-orange-600" />
              Identity Governance & Protection
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Privileged Identity Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Just-in-time privileged access</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Access Reviews:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automated access certification</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Identity Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk detection and remediation</span>
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
              Complete preparation for the SC-300 Identity and Access Administrator certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Advanced Identity Skills</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Master enterprise-level identity and access management solutions.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Advancement</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Advanced skills for senior identity and security roles.
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
              <span className="text-slate-700 dark:text-slate-300">SC-900 certification or equivalent security knowledge</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Experience with Azure Active Directory</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Understanding of identity and access management concepts</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
