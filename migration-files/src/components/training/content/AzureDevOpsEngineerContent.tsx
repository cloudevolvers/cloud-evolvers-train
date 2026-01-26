import React from 'react';
import { CheckCircle, GitBranch, Shield, Monitor, Zap, Target, BookOpen, Award, Users, Clock, Building } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-devops-engineer',
  slug: 'azure-devops-engineer',
  title: 'Azure DevOps Engineer Associate (AZ-400)',
  description: 'Master DevOps practices and Azure DevOps services to optimize software delivery',
  content: 'Comprehensive DevOps training covering CI/CD, infrastructure as code, and Azure DevOps.',
  category: 'Azure',
  subcategory: 'DevOps',
  difficulty: 'Advanced' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['AZ-104 or equivalent experience', 'Development or operations experience'],
  learningObjectives: [
    'Implement DevOps development processes',
    'Implement continuous integration and delivery',
    'Implement dependency management and infrastructure as code'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'DevOps', 'CI/CD', 'AZ-400'],
  featured: true,
  certification: { available: true, name: 'AZ-400' },
  maxParticipants: 10
};

export default function AzureDevOpsEngineerContent() {
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
          Master enterprise DevOps practices with Azure! This intensive 4-day program combines Microsoft Azure DevOps Services 
          with industry best practices to deliver enterprise-grade CI/CD solutions and prepare for AZ-400 certification.
        </p>
      </section>

      {/* Training Structure */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          4-Day Training Structure
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Day 1 */}
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Day 1: DevOps Foundations & Source Control
            </h4>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>• DevOps principles and culture</li>
              <li>• Azure DevOps Services overview</li>
              <li>• Advanced Git workflows</li>
              <li>• Branch policies and pull requests</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Day 2: Continuous Integration & Build Automation
            </h4>
            <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
              <li>• YAML pipeline design</li>
              <li>• Automated testing integration</li>
              <li>• Quality gates and security scanning</li>
              <li>• Package management with Azure Artifacts</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4" />
              Day 3: Continuous Delivery & Infrastructure as Code
            </h4>
            <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
              <li>• Multi-environment deployment</li>
              <li>• Blue-green & canary deployments</li>
              <li>• ARM templates and Bicep</li>
              <li>• Configuration management</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Day 4: DevSecOps & Monitoring
            </h4>
            <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-200">
              <li>• Security integration (DevSecOps)</li>
              <li>• Application Insights & Azure Monitor</li>
              <li>• Enterprise DevOps patterns</li>
              <li>• AZ-400 exam preparation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core DevOps Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core DevOps Skills You'll Master
        </h3>
        
        <div className="space-y-4">
          {/* CI/CD Pipelines */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-blue-600" />
              CI/CD Pipeline Mastery
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">YAML Pipelines:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-stage pipeline design and configuration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Build Automation:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Self-hosted and Microsoft-hosted agents</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Testing Integration:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Automated testing and code coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600" />
              Infrastructure as Code
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">ARM Templates:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Resource Manager fundamentals</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Bicep:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Modern declarative syntax for Azure resources</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Terraform:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Multi-cloud infrastructure provisioning</span>
                </div>
              </div>
            </div>
          </div>

          {/* DevSecOps */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-600" />
              DevSecOps Integration
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Security by Design:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Shift-left security practices</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Vulnerability Scanning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Container and dependency scanning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Policy as Code:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Azure Policy automation and compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-green-600" />
              Monitoring & Observability
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Application Insights:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Performance monitoring and diagnostics</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Monitor:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Infrastructure and application monitoring</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Log Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Query optimization and custom dashboards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Hands-On Projects
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Enterprise E-Commerce Platform</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Multi-region deployment setup</li>
              <li>• Microservices CI/CD pipelines</li>
              <li>• Automated security scanning</li>
              <li>• Comprehensive monitoring stack</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Regulated Financial Application</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• SOX compliance automation</li>
              <li>• Immutable infrastructure</li>
              <li>• Advanced threat protection</li>
              <li>• Audit trail implementation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certification Preparation */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          AZ-400 Certification Preparation
        </h3>
        
        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Complete Exam Coverage:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> All AZ-400 objectives mapped to training</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Practice Scenarios:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> Hands-on exercises matching exam format</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-yellow-900 dark:text-yellow-100">Exam Voucher Included:</span>
                <span className="text-yellow-800 dark:text-yellow-200"> Free certification exam attempt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets This Training Apart */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          What Sets This Training Apart
        </h3>
        
        <div className="grid gap-3 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Users className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Expert Instruction:</span>
              <span className="text-slate-700 dark:text-slate-300"> Led by Microsoft Certified DevOps Engineer Associate</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BookOpen className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Hands-On Focus:</span>
              <span className="text-slate-700 dark:text-slate-300"> Extensive practical labs with real scenarios</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Certification Support:</span>
              <span className="text-slate-700 dark:text-slate-300"> Exam voucher and 90-day mentoring</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">Small Groups:</span>
              <span className="text-slate-700 dark:text-slate-300"> Maximum 12 participants for personalized attention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-purple-600" />
          Post-Training Success Package
        </h3>
        
        <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">AZ-400 Exam Voucher:</span>
                <span className="text-purple-800 dark:text-purple-200"> Free certification exam attempt</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Implementation Consulting:</span>
                <span className="text-purple-800 dark:text-purple-200"> 2 hours of project-specific guidance</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Resource Library:</span>
                <span className="text-purple-800 dark:text-purple-200"> Templates, checklists, and reference materials</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-900 dark:text-purple-100">Expert Community:</span>
                <span className="text-purple-800 dark:text-purple-200"> Access to DevOps professionals network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Ready to transform your organization's software delivery?
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Join our Azure DevOps Engineer Associate training and become the catalyst for enterprise DevOps success!
          </p>
        </div>
      </section>
    </div>
  );
}
