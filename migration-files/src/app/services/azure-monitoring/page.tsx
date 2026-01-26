import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Azure Monitoring - xEvolve Services',
    description: 'Real-time visibility into your Azure resources with custom dashboards and alerts. 24/7 monitoring, performance analytics, and resource usage trends.',
  };
}

interface AzureMonitoringPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AzureMonitoringPage({ searchParams }: AzureMonitoringPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'azure-monitoring',
    title: t.header.serviceNames.azureApiMonitoring,
    description: t.services.descriptions.azureMonitoring,
    icon: 'LineChart',
    features: t.services.features.azureMonitoring,
    order: 2
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Azure Monitoring</h1>
            <p>
              Krijg uitgebreid inzicht in uw Azure-infrastructuur met onze expertmonitoringdiensten. 
              Wij bieden real-time inzichten en analyses om optimale prestaties te garanderen en 
              problemen te voorkomen voordat ze uw bedrijfsvoering beïnvloeden.
            </p>

            <h2>Onze Azure Monitoring Diensten</h2>

            <h3>Uitgebreide Resource Monitoring</h3>
            <p>
              Onze 24/7 monitoringoplossing houdt constant toezicht op uw Azure-resources, 
              volgt prestatiemetrieken, beschikbaarheid en kritieke gebeurtenissen. We identificeren 
              afwijkingen en reageren snel om optimale systeemgezondheid te behouden.
            </p>

            <h3>Aangepaste Alert Configuratie</h3>
            <p>
              We werken met u samen om op maat gemaakte alarmsystemen te ontwerpen en implementeren 
              die de juiste mensen op het juiste moment waarschuwen. Onze alertconfiguraties zijn 
              fijn afgesteld om valse alarmen te minimaliseren terwijl kritieke problemen nooit 
              onopgemerkt blijven.
            </p>

            <h3>Prestatie Analyses</h3>
            <p>
              Onze geavanceerde analysetools transformeren monitoringdata in bruikbare inzichten. 
              We helpen u prestatiepatronen te begrijpen, knelpunten te identificeren en 
              datagestuurde beslissingen te nemen om uw Azure-infrastructuur te verbeteren.
            </p>

            <h3>Resource Gebruik Trends</h3>
            <p>
              Volg resource-utiliteit in de tijd om groeipatronen, seizoensvariaties en 
              optimalisatiemogelijkheden te identificeren. Onze trendanalyse helpt met 
              capaciteitsplanning en kostenbeheer.
            </p>

            <h2>Voordelen van Onze Azure Monitoring Services</h2>
            <ul>
              <li><strong>Proactieve Probleempreventie</strong>: Identificeer en pak potentiële problemen aan voordat ze uw services beïnvloeden</li>
              <li><strong>Verbeterde Systeembetrouwbaarheid</strong>: Zorg voor consistente prestaties en minimaliseer downtime</li>
              <li><strong>Geoptimaliseerde Resource Toewijzing</strong>: Neem weloverwogen beslissingen over resource scaling gebaseerd op werkelijk gebruiksdata</li>
              <li><strong>Kostenbeheersing</strong>: Identificeer onderbenutste resources en mogelijkheden voor consolidatie</li>
              <li><strong>Verbeterde Beveiligingspositie</strong>: Monitor voor ongewone activiteitspatronen die beveiligingsrisico's kunnen aangeven</li>
            </ul>

            <p>
              Neem vandaag contact met ons op om te leren hoe onze Azure Monitoring services de 
              zichtbaarheid, prestaties en betrouwbaarheid van uw cloud-infrastructuur kunnen verbeteren.
            </p>
          </>
        ) : (
          <>
            <h1>Azure Monitoring</h1>
            <p>
              Get comprehensive visibility into your Azure infrastructure with our expert monitoring services. 
              We provide real-time insights and analytics to ensure optimal performance and prevent issues 
              before they impact your operations.
            </p>

            <h2>Our Azure Monitoring Services</h2>

            <h3>Comprehensive Resource Monitoring</h3>
            <p>
              Our 24/7 monitoring solution keeps a constant watch on your Azure resources, tracking 
              performance metrics, availability, and critical events. We identify anomalies and respond 
              quickly to maintain optimal system health.
            </p>

            <h3>Custom Alert Configuration</h3>
            <p>
              We work with you to design and implement tailored alert systems that notify the right people 
              at the right time. Our alert configurations are fine-tuned to minimize false positives while 
              ensuring critical issues never go unnoticed.
            </p>

            <h3>Performance Analytics</h3>
            <p>
              Our advanced analytics tools transform monitoring data into actionable insights. We help you 
              understand performance patterns, identify bottlenecks, and make data-driven decisions to 
              improve your Azure infrastructure.
            </p>

            <h3>Resource Usage Trends</h3>
            <p>
              Track resource utilization over time to identify growth patterns, seasonal variations, and 
              optimization opportunities. Our trend analysis helps with capacity planning and cost management.
            </p>

            <h2>Benefits of Our Azure Monitoring Services</h2>
            <ul>
              <li><strong>Proactive Issue Prevention</strong>: Identify and address potential problems before they affect your services</li>
              <li><strong>Improved System Reliability</strong>: Ensure consistent performance and minimize downtime</li>
              <li><strong>Optimized Resource Allocation</strong>: Make informed decisions about resource scaling based on actual usage data</li>
              <li><strong>Cost Control</strong>: Identify underutilized resources and opportunities for consolidation</li>
              <li><strong>Enhanced Security Posture</strong>: Monitor for unusual activity patterns that may indicate security threats</li>
            </ul>

            <p>
              Contact us today to learn how our Azure Monitoring services can enhance the visibility, 
              performance, and reliability of your cloud infrastructure.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
