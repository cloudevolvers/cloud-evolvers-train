import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cost Optimization - xEvolve Services',
    description: 'Identify savings opportunities and optimize your Azure spending. Spending analysis, resource right-sizing, and budget forecasting.',
  };
}

interface CostOptimizationPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CostOptimizationPage({ searchParams }: CostOptimizationPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'cost-optimization',
    title: t.header.serviceNames.costOptimization,
    description: t.services.descriptions.costOptimization,
    icon: 'PiggyBank',
    features: t.services.features.costOptimization,
    order: 3
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Kostenoptimalisatie</h1>
            <p>
              Onze Kostenoptimalisatie services helpen u besparingsmogelijkheden te identificeren 
              en uw Azure-uitgaven te optimaliseren. We bieden gedetailleerde analyses en praktische 
              aanbevelingen om uw cloud kosten onder controle te houden zonder prestaties op te offeren.
            </p>

            <h2>Onze Kostenoptimalisatie Services</h2>

            <h3>Uitgaven Analyse</h3>
            <p>
              We voeren uitgebreide analyses uit van uw huidige Azure-uitgaven om kostendrijvers 
              te identificeren en gebieden te vinden waar optimalisatie mogelijk is. Onze gedetailleerde 
              rapporten geven inzicht in waar uw geld naar toe gaat en hoe u kunt besparen.
            </p>

            <h3>Resource Right-sizing</h3>
            <p>
              Veel organisaties betalen voor meer resources dan ze daadwerkelijk nodig hebben. 
              We analyseren uw resource-gebruik en bevelen de juiste groottes aan om kosten te 
              verlagen terwijl prestaties behouden blijven.
            </p>

            <h3>Reservering Aanbevelingen</h3>
            <p>
              Azure Reserved Instances kunnen aanzienlijke besparingen opleveren voor voorspelbare 
              workloads. We analyseren uw gebruikspatronen en bevelen de optimale reserveringsstrategie 
              aan om uw kosten te minimaliseren.
            </p>

            <h3>Budget Voorspellingen</h3>
            <p>
              Onze voorspellingsmodellen helpen u toekomstige cloud kosten te begrijpen en budgetten 
              accuraat in te stellen. We bieden tools en processen om kostenoverschrijdingen te 
              voorkomen en financiële controle te behouden.
            </p>

            <h2>Voordelen van Onze Kostenoptimalisatie Services</h2>
            <ul>
              <li><strong>Directe Kostenbesparingen</strong>: Identificeer en realiseer onmiddellijke besparingen door het elimineren van verspilling</li>
              <li><strong>Verbeterde Budgetcontrole</strong>: Krijg beter inzicht en controle over uw cloud uitgaven</li>
              <li><strong>Prestatie Behoud</strong>: Optimaliseer kosten zonder prestaties of functionaliteit op te offeren</li>
              <li><strong>Continue Monitoring</strong>: Doorlopende bewaking zorgt ervoor dat optimalisaties effectief blijven</li>
              <li><strong>Strategische Planning</strong>: Beter begrip van kosten helpt bij toekomstige cloud strategieën</li>
            </ul>

            <h2>Onze Aanpak</h2>
            <p>
              We beginnen met een uitgebreide assessment van uw huidige Azure-omgeving, analyseren 
              gebruikspatronen en identificeren optimalisatiemogelijkheden. Vervolgens implementeren 
              we aanbevelingen in fasen, monitoren de resultaten en blijven optimaliseren voor 
              maximale kostenefficiëntie.
            </p>

            <p>
              Neem contact met ons op om te ontdekken hoeveel u kunt besparen met onze 
              Kostenoptimalisatie services.
            </p>
          </>
        ) : (
          <>
            <h1>Cost Optimization</h1>
            <p>
              Our Cost Optimization services help you identify savings opportunities and optimize 
              your Azure spending. We provide detailed analysis and actionable recommendations to 
              keep your cloud costs under control without sacrificing performance.
            </p>

            <h2>Our Cost Optimization Services</h2>

            <h3>Spending Analysis</h3>
            <p>
              We conduct comprehensive analysis of your current Azure spending to identify cost drivers 
              and areas for optimization. Our detailed reports provide visibility into where your money 
              is going and how you can save.
            </p>

            <h3>Resource Right-sizing</h3>
            <p>
              Many organizations pay for more resources than they actually need. We analyze your resource 
              utilization and recommend appropriate sizing to reduce costs while maintaining performance.
            </p>

            <h3>Reservation Recommendations</h3>
            <p>
              Azure Reserved Instances can provide significant savings for predictable workloads. We analyze 
              your usage patterns and recommend optimal reservation strategies to minimize your costs.
            </p>

            <h3>Budget Forecasting</h3>
            <p>
              Our forecasting models help you understand future cloud costs and set accurate budgets. 
              We provide tools and processes to prevent cost overruns and maintain financial control.
            </p>

            <h2>Benefits of Our Cost Optimization Services</h2>
            <ul>
              <li><strong>Immediate Cost Savings</strong>: Identify and realize immediate savings by eliminating waste</li>
              <li><strong>Improved Budget Control</strong>: Gain better visibility and control over your cloud spending</li>
              <li><strong>Performance Preservation</strong>: Optimize costs without sacrificing performance or functionality</li>
              <li><strong>Continuous Monitoring</strong>: Ongoing monitoring ensures optimizations remain effective</li>
              <li><strong>Strategic Planning</strong>: Better cost understanding helps with future cloud strategies</li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              We start with a comprehensive assessment of your current Azure environment, analyzing 
              usage patterns and identifying optimization opportunities. We then implement recommendations 
              in phases, monitor results, and continue optimizing for maximum cost efficiency.
            </p>

            <p>
              Contact us today to discover how much you can save with our Cost Optimization services.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
