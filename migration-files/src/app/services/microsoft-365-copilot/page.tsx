import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Microsoft 365 Copilot - xEvolve Services',
    description: 'Transform your productivity with AI-powered Microsoft 365 Copilot implementation and training. Expert guidance for AI-enhanced collaboration and workflow optimization.',
  };
}

interface Microsoft365CopilotPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Microsoft365CopilotPage({ searchParams }: Microsoft365CopilotPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'microsoft-365-copilot',
    title: t.header.serviceNames.microsoft365Copilot,
    description: t.services.descriptions.copilot,
    icon: 'Bot',
    features: t.services.features.copilot,
    order: 6
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Microsoft 365 Copilot</h1>
            <p>
              Onze Microsoft 365 Copilot services helpen organisaties de kracht van AI te benutten 
              om productiviteit te verhogen en werkprocessen te transformeren. Van implementatie 
              tot training, wij zorgen voor een succesvolle Copilot adoptie.
            </p>

            <h2>Onze Microsoft 365 Copilot Services</h2>

            <h3>Copilot Implementatie</h3>
            <p>
              We begeleiden uw organisatie door het volledige implementatieproces van Microsoft 365 Copilot. 
              Van licentie planning en technische setup tot beveiligingsconfiguratie en governance - 
              wij zorgen voor een soepele en veilige uitrol.
            </p>

            <h3>AI Productiviteit Training</h3>
            <p>
              Onze gespecialiseerde trainingen leren uw medewerkers hoe ze optimaal gebruik kunnen maken 
              van Copilot's AI-mogelijkheden. We behandelen praktische use cases voor elke rol en afdeling, 
              zodat iedereen direct productiviteitsvoordelen ervaart.
            </p>

            <h3>Workflow Optimalisatie</h3>
            <p>
              Analyseer en optimaliseer uw bestaande werkprocessen om maximaal te profiteren van Copilot's 
              AI-assistentie. We identificeren kansen voor automatisering en efficiëntieverbeteringen 
              in uw dagelijkse workflows.
            </p>

            <h3>Change Management</h3>
            <p>
              Succesvol verandermanagement is cruciaal voor Copilot adoptie. We ontwikkelen op maat 
              gemaakte adoptiestrategieën, communicatieplannen en trainingsmaterialen om weerstand 
              te minimaliseren en enthousiasme te creëren.
            </p>

            <h2>Copilot Toepassingsgebieden</h2>

            <h3>Microsoft Word</h3>
            <p>
              Versnel documentcreatie, verbeter schrijfkwaliteit en automatiseer formattering met 
              Copilot in Word. Van concept tot eindversie - AI assisteert bij elke stap van het 
              schrijfproces.
            </p>

            <h3>Microsoft Excel</h3>
            <p>
              Transformeer data-analyse met intelligente formules, automatische grafieken en 
              AI-gedreven inzichten. Copilot maakt complexe data toegankelijk voor elke gebruiker.
            </p>

            <h3>Microsoft PowerPoint</h3>
            <p>
              Creëer professionele presentaties in seconden met AI-gegenereerde content, design 
              suggesties en automatische slide opmaak. Van outline tot eindpresentatie.
            </p>

            <h3>Microsoft Teams</h3>
            <p>
              Verbeter samenwerking met intelligente meeting samenvattingen, actie-item tracking 
              en contextuele suggesties tijdens gesprekken.
            </p>

            <h3>Microsoft Outlook</h3>
            <p>
              Optimaliseer e-mail management met AI-gegenereerde antwoorden, meeting planning 
              assistentie en prioriteit sortering van berichten.
            </p>

            <h2>Voordelen van Microsoft 365 Copilot</h2>
            <ul>
              <li><strong>Productiviteitsverhoging</strong>: 30-50% tijdsbesparing bij routinetaken</li>
              <li><strong>Verbeterde Creativiteit</strong>: AI inspiratie voor betere content en ideeën</li>
              <li><strong>Democratisatie van Data</strong>: Complexe analyses toegankelijk voor iedereen</li>
              <li><strong>Consistente Kwaliteit</strong>: Professionele output onafhankelijk van vaardigheidsniveau</li>
              <li><strong>Snellere Besluitvorming</strong>: Real-time inzichten en samenvattingen</li>
            </ul>

            <h2>Onze Implementatie Aanpak</h2>
            <ol>
              <li><strong>Assessment</strong>: Analyse van huidige werkprocessen en use cases</li>
              <li><strong>Planning</strong>: Ontwikkeling van implementatie- en trainingsplan</li>
              <li><strong>Pilot</strong>: Gefaseerde uitrol met selecte gebruikersgroepen</li>
              <li><strong>Training</strong>: Uitgebreide training voor alle gebruikers</li>
              <li><strong>Optimalisatie</strong>: Continue verbetering en ondersteuning</li>
            </ol>

            <p>
              Neem contact met ons op om te ontdekken hoe Microsoft 365 Copilot uw organisatie 
              kan transformeren naar een AI-gestuurde werkplek.
            </p>
          </>
        ) : (
          <>
            <h1>Microsoft 365 Copilot</h1>
            <p>
              Our Microsoft 365 Copilot services help organizations harness the power of AI to increase 
              productivity and transform work processes. From implementation to training, we ensure 
              successful Copilot adoption.
            </p>

            <h2>Our Microsoft 365 Copilot Services</h2>

            <h3>Copilot Implementation</h3>
            <p>
              We guide your organization through the complete Microsoft 365 Copilot implementation process. 
              From license planning and technical setup to security configuration and governance - we 
              ensure a smooth and secure rollout.
            </p>

            <h3>AI Productivity Training</h3>
            <p>
              Our specialized training programs teach your employees how to optimally use Copilot's AI 
              capabilities. We cover practical use cases for every role and department, ensuring everyone 
              experiences immediate productivity benefits.
            </p>

            <h3>Workflow Optimization</h3>
            <p>
              Analyze and optimize your existing work processes to maximize the benefits of Copilot's 
              AI assistance. We identify opportunities for automation and efficiency improvements in 
              your daily workflows.
            </p>

            <h3>Change Management</h3>
            <p>
              Successful change management is crucial for Copilot adoption. We develop customized adoption 
              strategies, communication plans, and training materials to minimize resistance and create 
              enthusiasm.
            </p>

            <h2>Copilot Application Areas</h2>

            <h3>Microsoft Word</h3>
            <p>
              Accelerate document creation, improve writing quality, and automate formatting with Copilot 
              in Word. From concept to final version - AI assists at every step of the writing process.
            </p>

            <h3>Microsoft Excel</h3>
            <p>
              Transform data analysis with intelligent formulas, automatic charts, and AI-driven insights. 
              Copilot makes complex data accessible to every user.
            </p>

            <h3>Microsoft PowerPoint</h3>
            <p>
              Create professional presentations in seconds with AI-generated content, design suggestions, 
              and automatic slide formatting. From outline to final presentation.
            </p>

            <h3>Microsoft Teams</h3>
            <p>
              Enhance collaboration with intelligent meeting summaries, action item tracking, and 
              contextual suggestions during conversations.
            </p>

            <h3>Microsoft Outlook</h3>
            <p>
              Optimize email management with AI-generated responses, meeting planning assistance, 
              and priority sorting of messages.
            </p>

            <h2>Benefits of Microsoft 365 Copilot</h2>
            <ul>
              <li><strong>Increased Productivity</strong>: 30-50% time savings on routine tasks</li>
              <li><strong>Enhanced Creativity</strong>: AI inspiration for better content and ideas</li>
              <li><strong>Data Democratization</strong>: Complex analysis accessible to everyone</li>
              <li><strong>Consistent Quality</strong>: Professional output regardless of skill level</li>
              <li><strong>Faster Decision Making</strong>: Real-time insights and summaries</li>
            </ul>

            <h2>Our Implementation Approach</h2>
            <ol>
              <li><strong>Assessment</strong>: Analysis of current work processes and use cases</li>
              <li><strong>Planning</strong>: Development of implementation and training plan</li>
              <li><strong>Pilot</strong>: Phased rollout with select user groups</li>
              <li><strong>Training</strong>: Comprehensive training for all users</li>
              <li><strong>Optimization</strong>: Continuous improvement and support</li>
            </ol>

            <p>
              Contact us today to discover how Microsoft 365 Copilot can transform your organization 
              into an AI-driven workplace.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
