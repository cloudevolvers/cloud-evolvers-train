import React from 'react';
import { CheckCircle, Code, Database, Cloud, Zap, Target, BookOpen, Award, Users } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-developer',
  slug: 'azure-developer',
  title: 'Azure Developer Associate (AZ-204)',
  description: 'Master Azure development with cloud-native applications and services',
  content: 'Comprehensive developer training covering Azure services, APIs, authentication, and deployment.',
  category: 'Azure',
  subcategory: 'Development',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'days' },
  prerequisites: ['Programming experience', 'Basic Azure knowledge'],
  learningObjectives: [
    'Develop Azure compute solutions',
    'Implement Azure security and authentication',
    'Monitor and optimize Azure solutions'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1595, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'Developer', 'AZ-204', 'Programming'],
  featured: true,
  certification: { available: true, name: 'AZ-204' },
  maxParticipants: 10
};

export default function AzureDeveloperContent() {
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
          Master Azure development with this comprehensive training designed for developers building cloud-native applications. 
          Learn to implement Azure compute solutions, develop for Azure storage, and integrate Azure services.
        </p>
      </section>

      {/* Core Development Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Core Development Skills
        </h3>
        
        <div className="space-y-4">
          {/* Azure Compute Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-600" />
              Azure Compute Solutions
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure App Service:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Web apps, API apps, and mobile backends</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Functions:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Serverless computing and event-driven architecture</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Container Instances:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Docker containers and Kubernetes integration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Logic Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Workflow automation and integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Storage Development */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-600" />
              Azure Storage Development
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Blob Storage:</span>
                  <span className="text-slate-700 dark:text-slate-300"> File uploads, CDN integration, and lifecycle management</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Cosmos DB:</span>
                  <span className="text-slate-700 dark:text-slate-300"> NoSQL database development and optimization</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure SQL Database:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Relational database integration and performance tuning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Redis Cache:</span>
                  <span className="text-slate-700 dark:text-slate-300"> In-memory caching strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Services Integration */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-600" />
              Azure Services Integration
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">API Management and service integration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Event Grid and Service Bus messaging</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Key Vault for secrets management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Application Insights monitoring and diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Development Projects */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Code className="h-4 w-4 text-orange-600" />
          Hands-on Development Projects
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Build real-world applications using Azure services:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Create a scalable web application with Azure App Service</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Implement serverless APIs using Azure Functions</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Build a document management system with Blob Storage</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Develop a real-time chat application with SignalR</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Implement CI/CD pipelines for automated deployment</span>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          Who Should Attend
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Software developers with .NET or Node.js experience</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Web developers transitioning to cloud development</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Solution architects designing Azure-based applications</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Developers preparing for AZ-204 certification</span>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Prerequisites</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">2+ years of professional development experience</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Experience with C#, JavaScript, or Python</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Basic understanding of cloud computing concepts</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Azure Fundamentals knowledge (AZ-900) recommended</span>
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
          This training prepares you for the <span className="font-semibold text-slate-900 dark:text-slate-100">AZ-204 Azure Developer Associate</span> certification exam.
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Comprehensive exam objectives coverage</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Hands-on labs matching exam scenarios</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Practice questions and mock examinations</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">Expert guidance for exam preparation strategy</span>
          </div>
        </div>
      </section>
    </div>
  );
}
