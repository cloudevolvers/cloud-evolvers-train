import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Engineering & Consultancy - xEvolve Services',
    description: 'Transform your business with AI-powered solutions and consultancy. Machine learning implementation, AI strategy, and intelligent automation services.',
  };
}

interface AIEngineeringPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AIEngineeringPage({ searchParams }: AIEngineeringPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'ai-engineering',
    title: t.header.serviceNames.aiEngineering,
    description: t.services.descriptions.aiEngineering,
    icon: 'Cpu',
    features: t.services.features.aiEngineering,
    order: 11
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>AI Engineering & Consultancy</h1>
            <p>
              Onze AI Engineering & Consultancy services helpen organisaties de kracht van 
              Artificial Intelligence en Machine Learning te benutten om bedrijfsprocessen 
              te transformeren, efficiëntie te verhogen en innovatieve oplossingen te creëren.
            </p>

            <h2>Onze AI Engineering & Consultancy Services</h2>

            <h3>AI Strategie & Roadmap</h3>
            <p>
              We ontwikkelen uitgebreide AI strategieën die aansluiten bij uw bedrijfsdoelstellingen. 
              Onze experts analyseren uw organisatie, identificeren AI kansen en creëren een 
              stapsgewijze roadmap voor succesvolle AI adoptie.
            </p>

            <h3>Machine Learning Implementatie</h3>
            <p>
              Implementeer geavanceerde machine learning modellen die real-world bedrijfsproblemen 
              oplossen. Van predictive analytics tot computer vision - we bouwen en implementeren 
              ML-oplossingen die meetbare waarde leveren.
            </p>

            <h3>Intelligente Automatisering</h3>
            <p>
              Automatiseer complexe bedrijfsprocessen met AI-gestuurde oplossingen. Onze intelligent 
              automation services combineren robotic process automation (RPA) met machine learning 
              voor smart workflows die zich aanpassen en verbeteren.
            </p>

            <h3>Data Science Consulting</h3>
            <p>
              Ontgrendel de waarde van uw data met onze data science expertise. We helpen bij 
              data exploration, model development, statistical analysis en het implementeren 
              van data-driven decision making processen.
            </p>

            <h2>AI Technologieën & Platforms</h2>

            <h3>Azure AI Services</h3>
            <p>
              Benut de kracht van Azure Cognitive Services, Azure Machine Learning, en Azure 
              OpenAI Service voor snelle AI implementaties met enterprise-grade beveiliging 
              en schaalbaarheid.
            </p>

            <h3>Custom Machine Learning Models</h3>
            <p>
              Ontwikkel op maat gemaakte ML-modellen met TensorFlow, PyTorch, en scikit-learn 
              voor specifieke business use cases die niet voldaan worden door out-of-the-box 
              oplossingen.
            </p>

            <h3>Large Language Models (LLMs)</h3>
            <p>
              Implementeer en fine-tune large language models voor natural language processing, 
              content generation, conversational AI en intelligent document processing.
            </p>

            <h3>Computer Vision & OCR</h3>
            <p>
              Ontwikkel computer vision oplossingen voor image recognition, object detection, 
              document processing en quality inspection met Azure Computer Vision en custom 
              deep learning modellen.
            </p>

            <h2>Toepassingsgebieden</h2>
            <ul>
              <li><strong>Predictive Maintenance</strong>: Voorspel equipment failures voordat ze optreden</li>
              <li><strong>Customer Analytics</strong>: Begrijp klantgedrag en voorspel churn</li>
              <li><strong>Fraud Detection</strong>: Detecteer verdachte transacties in real-time</li>
              <li><strong>Supply Chain Optimization</strong>: Optimaliseer voorraad en logistiek</li>
              <li><strong>Content Personalization</strong>: Lever gepersonaliseerde content en aanbevelingen</li>
              <li><strong>Process Automation</strong>: Automatiseer document processing en data entry</li>
              <li><strong>Quality Control</strong>: Automatiseer kwaliteitscontrole met computer vision</li>
            </ul>

            <h2>Voordelen van Onze AI Engineering Services</h2>
            <ul>
              <li><strong>Bewezen Expertise</strong>: Ervaren AI engineers met praktijkervaring</li>
              <li><strong>Business Focus</strong>: AI oplossingen die echte business waarde leveren</li>
              <li><strong>End-to-End Support</strong>: Van concept tot productie deployment</li>
              <li><strong>Ethical AI</strong>: Verantwoorde AI implementatie met bias detection</li>
              <li><strong>Schaalbaarheid</strong>: Cloud-native oplossingen die meegroeien</li>
              <li><strong>Knowledge Transfer</strong>: Training en documentatie voor uw team</li>
            </ul>

            <p>
              Neem contact met ons op om te ontdekken hoe AI Engineering uw organisatie kan 
              transformeren en nieuwe mogelijkheden kan creëren.
            </p>
          </>
        ) : (
          <>
            <h1>AI Engineering & Consultancy</h1>
            <p>
              Our AI Engineering & Consultancy services help organizations harness the power of 
              Artificial Intelligence and Machine Learning to transform business processes, increase 
              efficiency, and create innovative solutions.
            </p>

            <h2>Our AI Engineering & Consultancy Services</h2>

            <h3>AI Strategy & Roadmap</h3>
            <p>
              We develop comprehensive AI strategies that align with your business objectives. Our 
              experts analyze your organization, identify AI opportunities, and create a step-by-step 
              roadmap for successful AI adoption.
            </p>

            <h3>Machine Learning Implementation</h3>
            <p>
              Implement advanced machine learning models that solve real-world business problems. 
              From predictive analytics to computer vision - we build and deploy ML solutions that 
              deliver measurable value.
            </p>

            <h3>Intelligent Automation</h3>
            <p>
              Automate complex business processes with AI-powered solutions. Our intelligent automation 
              services combine robotic process automation (RPA) with machine learning for smart workflows 
              that adapt and improve.
            </p>

            <h3>Data Science Consulting</h3>
            <p>
              Unlock the value of your data with our data science expertise. We help with data exploration, 
              model development, statistical analysis, and implementing data-driven decision-making processes.
            </p>

            <h2>AI Technologies & Platforms</h2>

            <h3>Azure AI Services</h3>
            <p>
              Leverage the power of Azure Cognitive Services, Azure Machine Learning, and Azure OpenAI 
              Service for rapid AI implementations with enterprise-grade security and scalability.
            </p>

            <h3>Custom Machine Learning Models</h3>
            <p>
              Develop custom ML models with TensorFlow, PyTorch, and scikit-learn for specific business 
              use cases that aren't served by out-of-the-box solutions.
            </p>

            <h3>Large Language Models (LLMs)</h3>
            <p>
              Implement and fine-tune large language models for natural language processing, content 
              generation, conversational AI, and intelligent document processing.
            </p>

            <h3>Computer Vision & OCR</h3>
            <p>
              Develop computer vision solutions for image recognition, object detection, document processing, 
              and quality inspection with Azure Computer Vision and custom deep learning models.
            </p>

            <h2>Application Areas</h2>
            <ul>
              <li><strong>Predictive Maintenance</strong>: Predict equipment failures before they occur</li>
              <li><strong>Customer Analytics</strong>: Understand customer behavior and predict churn</li>
              <li><strong>Fraud Detection</strong>: Detect suspicious transactions in real-time</li>
              <li><strong>Supply Chain Optimization</strong>: Optimize inventory and logistics</li>
              <li><strong>Content Personalization</strong>: Deliver personalized content and recommendations</li>
              <li><strong>Process Automation</strong>: Automate document processing and data entry</li>
              <li><strong>Quality Control</strong>: Automate quality control with computer vision</li>
            </ul>

            <h2>Benefits of Our AI Engineering Services</h2>
            <ul>
              <li><strong>Proven Expertise</strong>: Experienced AI engineers with practical experience</li>
              <li><strong>Business Focus</strong>: AI solutions that deliver real business value</li>
              <li><strong>End-to-End Support</strong>: From concept to production deployment</li>
              <li><strong>Ethical AI</strong>: Responsible AI implementation with bias detection</li>
              <li><strong>Scalability</strong>: Cloud-native solutions that grow with you</li>
              <li><strong>Knowledge Transfer</strong>: Training and documentation for your team</li>
            </ul>

            <p>
              Contact us today to discover how AI Engineering can transform your organization and 
              create new possibilities.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
