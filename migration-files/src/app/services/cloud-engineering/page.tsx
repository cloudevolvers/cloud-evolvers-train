import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cloud Engineering - xEvolve Services',
    description: 'Expert cloud engineering services to design, build, and optimize your Azure infrastructure. Architecture design, implementation, migration services, and performance optimization.',
  };
}

interface CloudEngineeringPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CloudEngineeringPage({ searchParams }: CloudEngineeringPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'cloud-engineering',
    title: t.header.serviceNames.cloudEngineering,
    description: t.services.descriptions.cloudEngineering,
    icon: 'Network',
    features: t.services.features.cloudEngineering,
    order: 7
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Cloud Engineering</h1>
            <p>
              Onze Cloud Engineering services helpen organisaties bij het ontwerpen, implementeren 
              en optimaliseren van veilige, betrouwbare en hoogperformante cloud architecturen in Azure. 
              Van concept tot realisatie, wij zorgen voor een solide cloudstrategie.
            </p>

            <h2>Onze Cloud Engineering Services</h2>

            <h3>Architectuur Ontwerp</h3>
            <p>
              We ontwerpen op maat gemaakte cloud architecturen die perfect aansluiten bij uw 
              bedrijfsdoelstellingen. Onze architects analyseren uw vereisten en creëren schaalbare, 
              veilige en kostenefficiënte oplossingen die toekomstbestendig zijn.
            </p>

            <h3>Implementatie</h3>
            <p>
              Onze ervaren engineers implementeren uw cloud infrastructuur volgens best practices 
              en industriestandaarden. We zorgen voor een soepele uitrol met minimale impact op 
              uw huidige bedrijfsvoering en maximale betrouwbaarheid.
            </p>

            <h3>Migratieservices</h3>
            <p>
              Migreer uw bestaande systemen naar Azure met onze bewezen migratieaanpak. We hanteren 
              een gefaseerde strategie die risico's minimaliseert en downtime vermijdt, terwijl we 
              de voordelen van cloud computing maximaliseren.
            </p>

            <h3>Prestatie Optimalisatie</h3>
            <p>
              Optimaliseer uw cloud omgeving voor maximale prestaties en efficiëntie. We analyseren 
              uw huidige setup, identificeren knelpunten en implementeren verbeteringen die de 
              gebruikerservaring en systeem responsiviteit verhogen.
            </p>

            <h2>Onze Expertisegebieden</h2>

            <h3>Azure Native Oplossingen</h3>
            <p>
              Benut de volledige kracht van Azure's native services voor optimale integratie en prestaties. 
              We specialiseren ons in Azure App Service, Azure Functions, Azure SQL Database, Azure Storage 
              en andere managed services.
            </p>

            <h3>Containerisatie & Orchestratie</h3>
            <p>
              Implementeer moderne containeroplossingen met Azure Kubernetes Service (AKS), Azure Container 
              Instances en Docker. We helpen bij het containeriseren van applicaties en het opzetten van 
              orchestratiepipelines.
            </p>

            <h3>DevOps & Automation</h3>
            <p>
              Stel CI/CD pipelines op met Azure DevOps, GitHub Actions en andere tools om development 
              workflows te automatiseren en deployments te versnellen met behoud van kwaliteit en stabiliteit.
            </p>

            <h2>Voordelen van Onze Cloud Engineering Services</h2>
            <ul>
              <li><strong>Expertise & Ervaring</strong>: Jarenlange ervaring met complexe Azure implementaties</li>
              <li><strong>Best Practices</strong>: Volgen van Microsoft's aanbevolen architectuurpatronen</li>
              <li><strong>Kostenefficiëntie</strong>: Optimalisatie voor prestaties én kosten</li>
              <li><strong>Toekomstbestendigheid</strong>: Architecturen die meegroeien met uw organisatie</li>
              <li><strong>Minimale Risico's</strong>: Bewezen methodieken en uitgebreide testing</li>
            </ul>

            <p>
              Neem contact met ons op om te ontdekken hoe onze Cloud Engineering services uw 
              Azure-infrastructuur naar het volgende niveau kunnen tillen.
            </p>
          </>
        ) : (
          <>
            <h1>Cloud Engineering</h1>
            <p>
              Our Cloud Engineering services help organizations design, implement, and optimize secure, 
              reliable, and high-performance cloud architectures in Azure. From concept to realization, 
              we ensure a solid cloud strategy.
            </p>

            <h2>Our Cloud Engineering Services</h2>

            <h3>Architecture Design</h3>
            <p>
              We design custom cloud architectures that perfectly align with your business objectives. 
              Our architects analyze your requirements and create scalable, secure, and cost-effective 
              solutions that are future-proof.
            </p>

            <h3>Implementation</h3>
            <p>
              Our experienced engineers implement your cloud infrastructure following best practices 
              and industry standards. We ensure smooth deployment with minimal impact on your current 
              operations and maximum reliability.
            </p>

            <h3>Migration Services</h3>
            <p>
              Migrate your existing systems to Azure with our proven migration approach. We use a 
              phased strategy that minimizes risks and avoids downtime while maximizing the benefits 
              of cloud computing.
            </p>

            <h3>Performance Optimization</h3>
            <p>
              Optimize your cloud environment for maximum performance and efficiency. We analyze your 
              current setup, identify bottlenecks, and implement improvements that enhance user experience 
              and system responsiveness.
            </p>

            <h2>Our Areas of Expertise</h2>

            <h3>Azure Native Solutions</h3>
            <p>
              Leverage the full power of Azure's native services for optimal integration and performance. 
              We specialize in Azure App Service, Azure Functions, Azure SQL Database, Azure Storage, 
              and other managed services.
            </p>

            <h3>Containerization & Orchestration</h3>
            <p>
              Implement modern container solutions with Azure Kubernetes Service (AKS), Azure Container 
              Instances, and Docker. We help containerize applications and set up orchestration pipelines.
            </p>

            <h3>DevOps & Automation</h3>
            <p>
              Set up CI/CD pipelines with Azure DevOps, GitHub Actions, and other tools to automate 
              development workflows and accelerate deployments while maintaining quality and stability.
            </p>

            <h2>Benefits of Our Cloud Engineering Services</h2>
            <ul>
              <li><strong>Expertise & Experience</strong>: Years of experience with complex Azure implementations</li>
              <li><strong>Best Practices</strong>: Following Microsoft's recommended architecture patterns</li>
              <li><strong>Cost Efficiency</strong>: Optimization for both performance and costs</li>
              <li><strong>Future-Proof</strong>: Architectures that grow with your organization</li>
              <li><strong>Minimal Risks</strong>: Proven methodologies and extensive testing</li>
            </ul>

            <p>
              Contact us today to discover how our Cloud Engineering services can take your Azure 
              infrastructure to the next level.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
