import React from 'react';
import { CheckCircle, Zap, Users, Target, BookOpen, Award, Clock, Sparkles, Workflow, BarChart } from 'lucide-react';

export const trainingMetadata = {
  id: 'power-platform-automation',
  slug: 'power-platform-automation',
  title: 'Power Platform Automation Bootcamp',
  description: 'Unlock the power of low-code automation with Microsoft Power Platform',
  content: 'Intensive 2-day bootcamp on Microsoft Power Platform covering Power Apps, Power Automate, and Power BI.',
  category: 'Microsoft 365',
  subcategory: 'Power Platform',
  difficulty: 'Intermediate' as const,
  duration: { days: 2, format: 'days' },
  prerequisites: ['Basic Microsoft 365 knowledge', 'Understanding of business processes'],
  learningObjectives: [
    'Build powerful apps without traditional coding',
    'Automate complex business processes',
    'Create stunning data visualizations',
    'Integrate seamlessly with Microsoft 365'
  ],
  instructor: {
    id: 'power-platform-expert',
    name: 'Power Platform Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 895, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Power Platform', 'Power Apps', 'Power Automate', 'Power BI', 'Low-Code'],
  featured: true,
  certification: { available: false },
  maxParticipants: 12
};

export default function PowerPlatformAutomationContent() {
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
          Unlock the power of low-code automation! This intensive 2-day bootcamp transforms you from beginner to Power Platform developer. Learn to build sophisticated business solutions without traditional programming and revolutionize your organization's workflow automation.
        </p>
      </section>

      {/* Low-Code Revolution */}
      <section>
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Low-Code Revolution
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-700 dark:text-orange-300">Build powerful apps without traditional coding</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-700 dark:text-orange-300">Automate complex business processes</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-700 dark:text-orange-300">Create stunning data visualizations</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-orange-700 dark:text-orange-300">Integrate seamlessly with Microsoft 365</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Days */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Two-Day Intensive Program
        </h3>
        
        <div className="space-y-6">
          {/* Day 1 */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Day 1: Foundation & Power Apps
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Morning Session: Power Platform Fundamentals</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Platform Overview:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Understanding the Microsoft Power Platform ecosystem</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Environment Setup:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Configuring development and production environments</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Data Sources:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Connecting to SharePoint, Excel, SQL, and cloud services</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Security & Governance:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Best practices for enterprise deployment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Afternoon Session: Power Apps Mastery</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Canvas Apps:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Building responsive mobile and desktop applications</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Model-Driven Apps:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Enterprise-grade applications with Dataverse</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">UI/UX Design:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Creating intuitive user experiences</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Workflow className="h-4 w-4 text-green-600" />
              Day 2: Power Automate & Power BI
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Morning Session: Process Automation</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Flow Creation:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Building automated workflows and business processes</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Triggers & Actions:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Advanced flow logic and conditional operations</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Integration:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Connecting to hundreds of services and APIs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Afternoon Session: Data Analytics</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Power BI Fundamentals:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Creating compelling data visualizations</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Dashboard Creation:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Interactive reports and real-time analytics</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">Integration:</span>
                      <span className="text-slate-700 dark:text-slate-300"> Embedding Power BI into Power Apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Bootcamp Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Zap className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Low-Code Mastery:</span>
                <span className="text-slate-700 dark:text-slate-300"> Build powerful solutions without traditional coding</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Expert Guidance:</span>
                <span className="text-slate-700 dark:text-slate-300"> Learn from certified Power Platform specialists</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Intensive Learning:</span>
                <span className="text-slate-700 dark:text-slate-300"> 2 days of hands-on development experience</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Workflow className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Process Automation:</span>
                <span className="text-slate-700 dark:text-slate-300"> Transform manual workflows with intelligent automation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BarChart className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Data Insights:</span>
                <span className="text-slate-700 dark:text-slate-300"> Create compelling visualizations and dashboards</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Immediate Impact:</span>
                <span className="text-slate-700 dark:text-slate-300"> Deploy solutions that transform your business</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
