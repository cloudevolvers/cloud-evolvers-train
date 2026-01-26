import React from 'react';
import { CheckCircle, Code, Database, Cloud, Zap, Target, BookOpen, Award, Users } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-developer',
  slug: 'azure-developer',
  title: 'Azure Developer Associate (AZ-204)',
  description: 'Beheers Azure-ontwikkeling met cloud-native applicaties en services',
  content: 'Uitgebreide ontwikkelaarstraining over Azure-services, API\'s, authenticatie en deployment.',
  category: 'Azure',
  subcategory: 'Development',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Programmeerervaring', 'Basis Azure-kennis'],
  learningObjectives: [
    'Azure compute-oplossingen ontwikkelen',
    'Azure-beveiliging en -authenticatie implementeren',
    'Azure-oplossingen monitoren en optimaliseren'
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
            Cursus Overzicht
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Beheers Azure-ontwikkeling met deze uitgebreide training ontworpen voor ontwikkelaars die cloud-native applicaties bouwen. 
          Leer Azure compute-oplossingen implementeren, voor Azure storage ontwikkelen en Azure-services integreren.
        </p>
      </section>

      {/* Core Development Skills */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          Kernontwikkelingsvaardigheden
        </h3>
        
        <div className="space-y-4">
          {/* Azure Compute Solutions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-blue-600" />
              Azure Compute-oplossingen
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure App Service:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Web apps, API apps en mobiele backends</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure Functions:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Serverless computing en event-driven architectuur</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Container Instances:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Docker containers en Kubernetes-integratie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Logic Apps:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Workflow-automatisering en -integratie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Storage Development */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-600" />
              Azure Storage-ontwikkeling
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Blob Storage:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Bestands-uploads, CDN-integratie en lifecycle-beheer</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Cosmos DB:</span>
                  <span className="text-slate-700 dark:text-slate-300"> NoSQL-database-ontwikkeling en -optimalisatie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Azure SQL Database:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Relationele database-integratie en prestatie-tuning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Redis Cache:</span>
                  <span className="text-slate-700 dark:text-slate-300"> In-memory caching-strategieën</span>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Services Integration */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-600" />
              Azure Services-integratie
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">API Management en service-integratie</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Event Grid en Service Bus-berichten</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Azure Active Directory-authenticatie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Trainingsvoordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AZ-204 Certificering</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Volledige voorbereiding op het Azure Developer Associate certificeringsexamen.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Praktische Projecten</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Hands-on labs met echte Azure-ontwikkelingsscenario's.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Expert Begeleiding</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Training door Microsoft Certified Azure-experts.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Carrière Boost</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Verbeter je carrièremogelijkheden als Azure-ontwikkelaar.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Vereisten</h3>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">1-2 jaar programmeerervaring (C#, Java, Python of JavaScript)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Basiskennis van cloud concepten en Azure portal</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Ervaring met REST API's en web services</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}