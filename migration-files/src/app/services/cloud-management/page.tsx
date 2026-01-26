import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cloud Management - xEvolve Services',
    description: 'Expert management of your Azure infrastructure with 24/7 monitoring and support. Resource optimization, cost monitoring, and performance tuning.',
  };
}

interface CloudManagementPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CloudManagementPage({ searchParams }: CloudManagementPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'cloud-management',
    title: t.header.serviceNames.cloudManagement,
    description: t.services.descriptions.cloudManagement,
    icon: 'Cloud',
    features: t.services.features.cloudManagement,
    order: 1
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Cloud Management</h1>
            <p>
              Onze Cloud Management services bieden uitgebreid toezicht en controle over uw Azure-omgeving, 
              waardoor optimale prestaties, kostenefficiëntie en beveiliging over uw gehele cloud estate 
              worden gegarandeerd.
            </p>

            <h2>Onze Cloud Management Aanpak</h2>

            <h3>Resource Optimalisatie</h3>
            <p>
              We analyseren continu uw cloud resources om optimalisatiemogelijkheden te identificeren. 
              Onze experts fine-tunen uw Azure-omgeving om ervoor te zorgen dat u de meeste waarde 
              uit uw investering haalt terwijl u piekprestaties behoudt.
            </p>

            <h3>Kostenbewaking</h3>
            <p>
              Onze proactieve kostenbeheeraanpak biedt real-time zichtbaarheid in uw cloud uitgaven. 
              We volgen uitgaven tegen budgetten, identificeren kosten anomalieën en bevelen 
              besparingsmogelijkheden aan om uw Azure-kosten onder controle te houden.
            </p>

            <h3>Prestatie Tuning</h3>
            <p>
              We monitoren de prestaties van uw cloud resources en applicaties, identificeren knelpunten 
              en implementeren verbeteringen. Ons tuning proces zorgt ervoor dat uw systemen op 
              piekefficiëntie werken om de best mogelijke gebruikerservaring te leveren.
            </p>

            <h3>Infrastructure as Code</h3>
            <p>
              We implementeren Infrastructure as Code (IaC) praktijken om consistente, reproduceerbare 
              en versiegecontroleerde infrastructuur deployments te garanderen. Deze aanpak vermindert 
              handmatige fouten, verbetert compliance en maakt snelle schaling mogelijk.
            </p>

            <h2>Voordelen van Onze Cloud Management Services</h2>
            <ul>
              <li><strong>Verminderde Operationele Last</strong>: Ons team behandelt de complexiteit van cloud management, waardoor uw personeel zich kan concentreren op kernbedrijfsinitiatieven</li>
              <li><strong>Verbeterde Beveiliging</strong>: Continue monitoring en implementatie van beveiligings best practices beschermen uw Azure-omgeving</li>
              <li><strong>Kostenefficiëntie</strong>: Proactieve optimalisatie en right-sizing helpen uw cloud investering te maximaliseren</li>
              <li><strong>Verbeterde Betrouwbaarheid</strong>: 24/7 monitoring en snelle reactie op problemen zorgen voor maximale uptime</li>
              <li><strong>Schaalbaarheid</strong>: Onze managed services groeien mee met uw bedrijf en bieden het juiste ondersteuningsniveau wanneer u het nodig heeft</li>
            </ul>

            <p>
              Of u nu uw gehele cloud operaties wilt uitbesteden of uw interne team wilt aanvullen, 
              onze Cloud Management services bieden de expertise en tools die u nodig heeft om uit 
              te blinken in de cloud.
            </p>

            <p>
              Neem vandaag contact met ons op om te leren hoe onze Cloud Management services uw 
              Azure-ervaring kunnen transformeren.
            </p>
          </>
        ) : (
          <>
            <h1>Cloud Management</h1>
            <p>
              Our Cloud Management services provide comprehensive oversight and control of your Azure environment, 
              ensuring optimal performance, cost efficiency, and security across your entire cloud estate.
            </p>

            <h2>Our Cloud Management Approach</h2>

            <h3>Resource Optimization</h3>
            <p>
              We continuously analyze your cloud resources to identify optimization opportunities. Our experts 
              fine-tune your Azure environment to ensure you're getting the most value from your investment 
              while maintaining peak performance.
            </p>

            <h3>Cost Monitoring</h3>
            <p>
              Our proactive cost management approach provides real-time visibility into your cloud spending. 
              We track expenditures against budgets, identify cost anomalies, and recommend savings 
              opportunities to keep your Azure costs under control.
            </p>

            <h3>Performance Tuning</h3>
            <p>
              We monitor the performance of your cloud resources and applications, identifying bottlenecks 
              and implementing improvements. Our tuning process ensures your systems operate at peak 
              efficiency to deliver the best possible user experience.
            </p>

            <h3>Infrastructure as Code</h3>
            <p>
              We implement Infrastructure as Code (IaC) practices to ensure consistent, reproducible, 
              and version-controlled infrastructure deployments. This approach reduces manual errors, 
              improves compliance, and enables rapid scaling.
            </p>

            <h2>Benefits of Our Cloud Management Services</h2>
            <ul>
              <li><strong>Reduced Operational Burden</strong>: Our team handles the complexity of cloud management, freeing your staff to focus on core business initiatives</li>
              <li><strong>Enhanced Security</strong>: Continuous monitoring and implementation of security best practices protect your Azure environment</li>
              <li><strong>Cost Efficiency</strong>: Proactive optimization and right-sizing help maximize your cloud investment</li>
              <li><strong>Improved Reliability</strong>: 24/7 monitoring and rapid response to issues ensure maximum uptime</li>
              <li><strong>Scalability</strong>: Our managed services grow with your business, providing the right level of support when you need it</li>
            </ul>

            <p>
              Whether you're looking to outsource your entire cloud operations or supplement your in-house team, 
              our Cloud Management services provide the expertise and tools you need to excel in the cloud.
            </p>

            <p>
              Contact us today to learn how our Cloud Management services can transform your Azure experience.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
