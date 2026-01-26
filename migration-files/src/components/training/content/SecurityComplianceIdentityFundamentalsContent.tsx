import React from 'react';
import { CheckCircle, Shield, Lock, Eye, Users, Target, BookOpen, Award, AlertTriangle, Key } from 'lucide-react';

export const trainingMetadata = {
  id: 'security-compliance-identity-fundamentals',
  slug: 'security-compliance-identity-fundamentals',
  title: 'Security, Compliance, and Identity Fundamentals (SC-900)',
  description: 'Master Microsoft security, compliance, and identity fundamentals',
  content: 'Comprehensive fundamentals training covering Microsoft security solutions, compliance capabilities, and identity concepts.',
  category: 'Security',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic understanding of IT and Microsoft cloud concepts'],
  learningObjectives: [
    'Describe security and compliance concepts',
    'Describe identity concepts and solutions',
    'Describe Microsoft security and compliance solutions'
  ],
  instructor: {
    id: 'security-expert',
    name: 'Security Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 895, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Security', 'Compliance', 'Identity', 'SC-900'],
  featured: true,
  certification: { available: true, name: 'SC-900' },
  maxParticipants: 15
};

export default function SecurityComplianceIdentityFundamentalsContent() {
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
          Build a strong foundation in Microsoft security, compliance, and identity solutions! This course covers 
          fundamental concepts and Microsoft's comprehensive security ecosystem to protect modern organizations.
        </p>
      </section>

      {/* Security Fundamentals */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Security & Compliance Fundamentals
        </h3>
        
        <div className="space-y-4">
          {/* Security Concepts */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Core Security Concepts
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">CIA Triad:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Confidentiality, Integrity, and Availability</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Zero Trust:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Never trust, always verify security model</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Defense in Depth:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multiple layers of security protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Concepts */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Key className="h-4 w-4 text-blue-600" />
              Identity & Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Authentication vs Authorization:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Identity verification and access control</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Active Directory:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cloud identity and access management service</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Factor Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Enhanced security with multiple factors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft Security Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              Microsoft Security Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Defender:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Comprehensive threat protection platform</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Sentinel:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cloud-native SIEM and SOAR solution</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Security Center:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Unified security management platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-600" />
              Compliance & Governance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Purview:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data governance and risk management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Compliance Manager:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Risk assessment and compliance tracking</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Information Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data classification and protection policies</span>
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
              Complete preparation for the SC-900 Security, Compliance, and Identity Fundamentals exam.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Security Foundation</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Build strong understanding of modern security concepts and practices.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Industry Recognition</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Career Foundation</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Foundation for advanced security and compliance roles.
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
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of IT and Microsoft cloud concepts</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">General familiarity with Microsoft 365 and Azure</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Interest in security and compliance topics</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
