import React from 'react';
import { CheckCircle, Users, Clock, Award, Target, BookOpen } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-fundamentals',
  slug: 'azure-fundamentals',
  title: 'Azure Fundamentals (AZ-900)',
  description: 'Build foundational knowledge of Azure cloud services and core concepts',
  content: 'Comprehensive fundamentals training covering Azure core services, security, privacy, compliance, and pricing.',
  category: 'Azure',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic knowledge of computing concepts'],
  learningObjectives: [
    'Describe cloud computing concepts',
    'Describe Azure core services and solutions',
    'Describe Azure security, privacy, compliance, and trust'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Fundamentals', 'Cloud', 'AZ-900'],
  featured: true,
  certification: { available: true, name: 'AZ-900' },
  maxParticipants: 15
};

export default function AzureFundamentalsContent() {
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
          This comprehensive Azure Fundamentals training provides a solid foundation for understanding Microsoft Azure cloud services. 
          Designed for beginners, this course covers all the essential concepts needed to start working with Azure confidently.
        </p>
      </section>

      {/* What You'll Learn */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          What You'll Learn
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          During this full-day training, you'll gain practical knowledge of:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Core Services:</span>
              <span className="text-slate-700 dark:text-slate-300"> Compute, networking, storage, and databases</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Solutions:</span>
              <span className="text-slate-700 dark:text-slate-300"> IoT, AI, machine learning, and serverless computing</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Azure Management Tools:</span>
              <span className="text-slate-700 dark:text-slate-300"> Portal, CLI, PowerShell, and ARM templates</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Security & Compliance:</span>
              <span className="text-slate-700 dark:text-slate-300"> Identity management, security center, and governance</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Pricing & Support:</span>
              <span className="text-slate-700 dark:text-slate-300"> Cost management, service level agreements, and support options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Training Format</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          This course combines theoretical learning with hands-on practice:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Interactive Presentations:</span>
              <span className="text-slate-700 dark:text-slate-300"> Clear explanations of Azure concepts</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Live Demonstrations:</span>
              <span className="text-slate-700 dark:text-slate-300"> Real-time Azure portal navigation</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Hands-on Labs:</span>
              <span className="text-slate-700 dark:text-slate-300"> Practical exercises in Azure environment</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Group Discussions:</span>
              <span className="text-slate-700 dark:text-slate-300"> Share experiences and best practices</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Q&A Sessions:</span>
              <span className="text-slate-700 dark:text-slate-300"> Address specific scenarios and use cases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Users className="h-4 w-4 text-purple-600" />
          Who Should Attend
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">Perfect for:</p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">IT professionals new to cloud computing</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Business decision makers evaluating Azure</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Developers planning to migrate to the cloud</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Students preparing for Azure certification</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Anyone wanting to understand modern cloud services</span>
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
          This training prepares you for the <span className="font-semibold text-slate-900 dark:text-slate-100">AZ-900 Microsoft Azure Fundamentals</span> certification exam. We provide:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Exam preparation materials</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Practice questions and mock tests</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Study guidance and tips</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">30-day access to online practice labs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
