import React from 'react';
import { CheckCircle, Brain, Zap, Eye, MessageSquare, Target, BookOpen, Award, Users, Bot } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-ai-fundamentals',
  slug: 'azure-ai-fundamentals',
  title: 'Azure AI Fundamentals (AI-900)',
  description: 'Ontdek concepten van kunstmatige intelligentie en Azure AI-services',
  content: 'Fundamentele AI-training over machine learning, computer vision, natuurlijke taalverwerking en conversationele AI.',
  category: 'Azure',
  subcategory: 'Artificial Intelligence',
  difficulty: 'Beginner' as const,
  duration: { days: 1, format: 'dag' },
  prerequisites: ['Basiskennis van computerconcepten'],
  learningObjectives: [
    'Kunstmatige intelligentie workloads beschrijven',
    'Fundamentele principes van machine learning beschrijven',
    'Kenmerken van computer vision en NLP workloads beschrijven'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 495, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'AI', 'Fundamentals', 'AI-900'],
  featured: false,
  certification: { available: true, name: 'AI-900' },
  maxParticipants: 20
};

export default function AzureAIFundamentalsContent() {
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
          Ontdek de wereld van kunstmatige intelligentie met Azure! Deze fundamentele cursus introduceert AI-concepten, 
          machine learning-principes en Azure AI-services. Perfect voor beginners die AI-mogelijkheden willen begrijpen.
        </p>
      </section>

      {/* AI Fundamentals */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          AI-Fundamentals die je beheerst
        </h3>
        
        <div className="space-y-4">
          {/* AI Workloads */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-600" />
              AI-Workloads & Concepten
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Machine Learning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Supervised, unsupervised en reinforcement learning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Anomalie Detectie:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Ongebruikelijke patronen in data identificeren</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Predictieve Analytics:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Voorspellingen en trendanalyse</span>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Vision */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-600" />
              Computer Vision Oplossingen
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Afbeeldingsclassificatie:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Objecten en scènes in afbeeldingen identificeren</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Optische Tekenherkenning:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Tekst uit afbeeldingen extraheren</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Gezichtsdetectie:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Gezichten en gezichtskenmerken identificeren</span>
                </div>
              </div>
            </div>
          </div>

          {/* Natural Language Processing */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              Natuurlijke Taalverwerking
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Tekstanalyse:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Sentimentanalyse en sleutelwoordextractie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Taalbegrip:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Intentieherkenning en entiteitsextractie</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Vertaling:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Meertalige tekst- en spraakvertaling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conversational AI */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-600" />
              Conversationele AI
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">Bot Framework:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Conversationele interfaces bouwen</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-900 dark:text-slate-100">QnA Maker:</span>
                  <span className="text-slate-700 dark:text-slate-300"> Vraag- en antwoordbots creëren</span>
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
          Trainingsvoordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Certificeringsvoorbereiding</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Volledige voorbereiding op het AI-900 Azure AI Fundamentals certificeringsexamen.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Praktijkervaring</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Praktische labs met Azure Cognitive Services en AI-tools.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Industriële Erkenning</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              Wereldwijd erkende Microsoft certificeringscredential.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Carrièrebasis</h4>
            <p className="text-orange-800 dark:text-orange-200 text-sm">
              Bouw een solide basis voor AI- en machine learning-carrières.
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
              <span className="text-slate-700 dark:text-slate-300">Basiskennis van computerconcepten</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Interesse in kunstmatige intelligentie en machine learning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Geen voorafgaande AI-ervaring vereist</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}