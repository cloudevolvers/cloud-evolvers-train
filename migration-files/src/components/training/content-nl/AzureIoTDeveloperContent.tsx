import React from 'react';
import { CheckCircle, Smartphone, Cpu, Target, BookOpen, Award } from 'lucide-react';

export const trainingMetadata = {
  id: 'azure-iot-developer',
  slug: 'azure-iot-developer',
  title: 'Azure IoT Developer Specialist (AZ-220)',
  description: 'Ontwikkel IoT-oplossingen met Azure IoT-services',
  content: 'Gespecialiseerde training voor het ontwikkelen van Internet of Things-oplossingen met Azure IoT.',
  category: 'Azure',
  subcategory: 'IoT',
  difficulty: 'Intermediate' as const,
  duration: { days: 4, format: 'dagen' },
  prerequisites: ['Azure-basiskennis', 'Programmeerervaring', 'IoT-concepten'],
  learningObjectives: [
    'Azure IoT Hub implementeren',
    'IoT-apparaten beheren en monitoren',
    'IoT-gegevens verwerken en analyseren'
  ],
  instructor: {
    id: 'azure-expert',
    name: 'Azure Expert',
    title: 'Microsoft Certified Trainer'
  },
  price: { amount: 1795, currency: 'EUR' },
  schedule: { available: true },
  tags: ['Azure', 'IoT', 'AZ-220', 'Development'],
  featured: false,
  certification: { available: true, name: 'AZ-220' },
  maxParticipants: 12
};

export default function AzureIoTDeveloperContent() {
  return (
    <div className="space-y-6">
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Cursus Overzicht
          </h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Beheers Azure IoT-ontwikkeling met deze gespecialiseerde training. Leer hoe je schaalbare 
          IoT-oplossingen bouwt met Azure IoT Hub, Device Provisioning en Stream Analytics.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-green-600" />
          IoT-ontwikkelingsvaardigheden
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-blue-600" />
              IoT Device Management
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Device provisioning en lifecycle-beheer</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Device-to-cloud en cloud-to-device messaging</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-green-600" />
              Data Processing
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Stream Analytics en Time Series Insights</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">IoT Edge en edge computing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-600" />
          Trainingsvoordelen
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AZ-220 Certificering</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Voorbereiding op Azure IoT Developer Specialty certificering.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Praktische Labs</h4>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Hands-on ervaring met IoT-apparaten en Azure-services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}