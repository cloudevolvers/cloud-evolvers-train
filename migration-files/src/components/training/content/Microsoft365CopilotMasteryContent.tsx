import React from 'react';
import { CheckCircle, Zap, Users, Target, BookOpen, Award, Clock, Sparkles, Brain, Workflow } from 'lucide-react';

export const trainingMetadata = {
  id: 'microsoft-365-copilot-mastery',
  slug: 'microsoft-365-copilot-mastery',
  title: 'Microsoft 365 Copilot Mastery',
  description: 'Unleash the power of AI in your daily work with Microsoft 365 Copilot',
  content: 'Comprehensive workshop on leveraging Microsoft 365 Copilot for enhanced productivity across all Microsoft 365 applications.',
  category: 'Microsoft 365',
  subcategory: 'Copilot',
  difficulty: 'Intermediate' as const,
  duration: { days: 1, format: 'days' },
  prerequisites: ['Microsoft 365 experience', 'Basic understanding of AI concepts'],
  learningObjectives: [
    'Master Copilot across all M365 applications',
    'Create effective prompts for maximum productivity',
    'Implement AI-driven workflow automation',
    'Optimize content creation and analysis'
  ],
  instructor: {
    id: 'copilot-expert',
    name: 'Copilot Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Microsoft 365', 'Copilot', 'AI', 'Productivity', 'Automation'],
  featured: true,
  certification: { available: false },
  maxParticipants: 15
};

export default function Microsoft365CopilotMasteryContent() {
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
          Unleash the power of AI in your daily work with Microsoft 365 Copilot. This intensive workshop is designed to enhance productivity across all Microsoft 365 applications, transforming how you work, think, and create with cutting-edge AI tools.
        </p>
      </section>

      {/* AI-Powered Productivity */}
      <section>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Productivity Revolution
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Master Copilot across all M365 applications</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Create effective prompts for maximum productivity</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Implement AI-driven workflow automation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-purple-700 dark:text-purple-300">Optimize content creation and analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Copilot Applications */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Copilot Across Microsoft 365
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Word & PowerPoint Mastery</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Document Creation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Generate compelling content from simple prompts</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Presentation Design:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Create stunning slides with AI-powered design</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Content Refinement:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Polish and enhance existing documents</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Excel & Teams Intelligence</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Data Analysis:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Transform data into insights with natural language</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Meeting Intelligence:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Enhance collaboration with AI-powered insights</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Formula Creation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Build complex calculations through conversation</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Outlook & Communication</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Email Efficiency:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Draft, summarize, and respond intelligently</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Calendar Management:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Optimize scheduling with AI assistance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Communication Style:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Adapt tone and style for different audiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Workshop Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Zap className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Instant Productivity:</span>
                <span className="text-slate-700 dark:text-slate-300"> Immediate impact on daily work efficiency</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Collaborative AI:</span>
                <span className="text-slate-700 dark:text-slate-300"> Enhance team collaboration with intelligent tools</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Time Savings:</span>
                <span className="text-slate-700 dark:text-slate-300"> Reduce manual work with intelligent automation</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Creative Enhancement:</span>
                <span className="text-slate-700 dark:text-slate-300"> Unlock new levels of creativity and innovation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">AI Literacy:</span>
                <span className="text-slate-700 dark:text-slate-300"> Develop essential AI interaction skills</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Workflow className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">Process Optimization:</span>
                <span className="text-slate-700 dark:text-slate-300"> Streamline workflows with intelligent assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
