import React from 'react';
import { CheckCircle, Zap, BarChart3, Bot, Workflow, Target, BookOpen, Award, Building, Lightbulb } from 'lucide-react';

export const trainingMetadata = {
  id: 'power-platform-fundamentals',
  slug: 'power-platform-fundamentals',
  title: 'Power Platform Fundamentals (PL-900)',
  description: 'Discover Microsoft Power Platform fundamentals and low-code solutions',
  content: 'Comprehensive fundamentals training covering Power BI, Power Apps, Power Automate, and Power Virtual Agents.',
  category: 'Power Platform',
  subcategory: 'Fundamentals',
  difficulty: 'Beginner' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic understanding of business processes and data'],
  learningObjectives: [
    'Describe the business value of Power Platform',
    'Identify core components of Power Platform',
    'Demonstrate capabilities of Power Platform solutions'
  ],
  instructor: {
    id: 'power-platform-expert',
    name: 'Power Platform Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Power Platform', 'Low-Code', 'Power BI', 'PL-900'],
  featured: true,
  certification: { available: true, name: 'PL-900' },
  maxParticipants: 15
};

export default function PowerPlatformFundamentalsContent() {
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
          Unlock the power of low-code solutions with Microsoft Power Platform! This foundational course introduces 
          Power BI, Power Apps, Power Automate, and Power Virtual Agents to transform business processes.
        </p>
      </section>

      {/* Power Platform Components */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Power Platform Components
        </h3>
        
        <div className="space-y-4">
          {/* Power BI */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-yellow-600" />
              Power BI - Business Analytics
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Visualization:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Create interactive dashboards and reports</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Connectivity:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Connect to multiple data sources</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Real-time Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Monitor data and trends in real-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Power Apps */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              Power Apps - Low-Code Development
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Canvas Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Design-first approach for custom layouts</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Model-Driven Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Data-first approach with rich functionality</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Portals:</span>
                  <span className="text-slate-700 dark:text-slate-300"> External-facing websites and applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Power Automate */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Workflow className="h-4 w-4 text-green-600" />
              Power Automate - Process Automation
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Cloud Flows:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automate workflows between apps and services</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Desktop Flows:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automate legacy applications and processes</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Business Process Flows:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Guide users through standardized processes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Power Virtual Agents */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-600" />
              Power Virtual Agents - Chatbots
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">No-Code Bot Building:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Create chatbots without coding</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">AI-Powered Conversations:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Natural language understanding</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Multi-Channel Support:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Deploy across websites, Teams, and more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft Dataverse */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4 text-indigo-600" />
              Microsoft Dataverse - Data Platform
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Secure Data Storage:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Scalable, secure cloud data platform</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Business Logic:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Rules, workflows, and business processes</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Integration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Seamless connection across Power Platform</span>
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
              Complete preparation for the PL-900 Power Platform Fundamentals certification exam.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Business Transformation</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Learn to transform business processes with low-code solutions.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industry Recognition</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Globally recognized Microsoft certification credential.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Career Foundation</h4>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              Foundation for Power Platform developer and consultant roles.
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
              <span className="text-slate-700 dark:text-slate-300">Basic understanding of business processes and data</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">General IT knowledge recommended</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Interest in business process automation</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
