import React from 'react';
import { CheckCircle, Users, Shield, Cloud, MessageSquare, Target, BookOpen, Award, Building, Zap } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-fundamentals',
  slug: 'microsoft-365-fundamentals',
  title: 'Microsoft 365 Fundamentals (MS-900)',
  description: 'Master Microsoft 365 cloud productivity and collaboration fundamentals',
  content: 'Comprehensive fundamentals training covering Microsoft 365 services, security, compliance, and pricing.',
  category: 'Microsoft 365',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic understanding of cloud computing concepts'],
  learningObjectives: [
    'Describe Microsoft 365 core services and concepts',
    'Describe security, compliance, privacy, and trust',
    'Describe Microsoft 365 pricing and support'
  ],
  instructor: {
    id: 'microsoft-expert',
    name: 'Microsoft 365 Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Fundamentals', 'M365', 'MS-900'],
  featured: true,
  certification: { available: true, name: 'MS-900' },
  maxParticipants: 15
};

export default function Microsoft365FundamentalsContent() {
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
          Discover the power of Microsoft 365! This foundational course covers productivity services, security features, 
          compliance capabilities, and support options. Perfect for IT professionals and business decision makers.
        </p>
      </section>

      {/* Core Services */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Microsoft 365 Core Services
        </h3>
        
        <div className="space-y-4">
          {/* Productivity Services */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              Productivity & Collaboration
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Teams:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Chat, meetings, calling, and collaboration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">SharePoint Online:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Content management and collaboration sites</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">OneDrive for Business:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cloud storage and file sharing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Office Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Word, Excel, PowerPoint, Outlook online and desktop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity & Access */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              Identity & Access Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Active Directory:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Cloud-based identity and access management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Factor Authentication:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Enhanced security with MFA</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Single Sign-On:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Seamless access to applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              Security & Compliance
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Microsoft Defender:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Advanced threat protection</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Information Protection:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data classification and protection</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Compliance Center:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Compliance management and reporting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics & Business Intelligence */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600" />
              Analytics & Insights
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Workplace Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Productivity and collaboration insights</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Power Platform:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Power BI, Power Apps, Power Automate overview</span>
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
              Complete preparation for the MS-900 Microsoft 365 Fundamentals certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Business Value</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Understand how Microsoft 365 drives digital transformation.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Career Foundation</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Build foundation for Microsoft 365 specialist roles.
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
              <span className="text-slate-700 dark:text-slate-300">General IT knowledge and experience</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of cloud computing concepts</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Familiarity with Microsoft Office applications recommended</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
