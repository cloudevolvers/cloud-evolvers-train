import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Infrastructure as Code - xEvolve Services',
    description: 'Automate infrastructure provisioning and management with code. Automated provisioning, configuration management, version control, and error reduction.',
  };
}

interface InfrastructureAsCodePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InfrastructureAsCodePage({ searchParams }: InfrastructureAsCodePageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'infrastructure-as-code',
    title: t.header.serviceNames.infrastructureAsCode,
    description: t.services.descriptions.infrastructureAsCode,
    icon: 'Code',
    features: t.services.features.infrastructureAsCode,
    order: 9
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Infrastructure as Code</h1>
            <p>
              Onze Infrastructure as Code (IaC) services transformeren hoe u uw Azure-infrastructuur 
              beheert door alles als code te definiëren. Dit zorgt voor consistentie, herhaalbaarheid 
              en volledige controle over uw cloud omgeving.
            </p>

            <h2>Onze Infrastructure as Code Services</h2>

            <h3>Geautomatiseerde Provisioning</h3>
            <p>
              Automatiseer de creatie en configuratie van uw Azure resources met code templates. 
              Onze IaC implementaties zorgen ervoor dat infrastructuur consistent wordt uitgerold 
              over verschillende omgevingen, wat tijd bespaart en menselijke fouten elimineert.
            </p>

            <h3>Configuratiebeheer</h3>
            <p>
              Beheer uw infrastructuurconfiguraties als code met tools zoals ARM Templates, Bicep, 
              Terraform en Azure Resource Manager. Dit biedt volledige traceerbaarheid en maakt 
              het eenvoudig om wijzigingen te implementeren en terug te draaien.
            </p>

            <h3>Versiecontrole</h3>
            <p>
              Alle infrastructuurcode wordt beheerd in Git repositories met volledige versiegeschiedenis. 
              Dit maakt het mogelijk om wijzigingen te tracken, samen te werken aan infrastructuur 
              updates en snel terug te keren naar vorige configuraties indien nodig.
            </p>

            <h3>Compliance & Governance</h3>
            <p>
              Implementeer governance policies en compliance regels direct in uw infrastructuurcode. 
              Dit zorgt ervoor dat alle resources automatisch voldoen aan organisatiestandaarden 
              en regelgevingsvereisten vanaf het moment van creatie.
            </p>

            <h2>Technologieën die We Gebruiken</h2>

            <h3>Azure Resource Manager (ARM) Templates</h3>
            <p>
              Native Azure IaC oplossing voor het definiëren van resources in JSON formaat. Perfect 
              voor Azure-specifieke implementaties met volledige integratie met Azure services.
            </p>

            <h3>Azure Bicep</h3>
            <p>
              Een domein-specifieke taal (DSL) die transpileert naar ARM templates. Bicep biedt 
              een eenvoudigere, meer leesbare syntax voor het definiëren van Azure infrastructuur.
            </p>

            <h3>Terraform</h3>
            <p>
              Multi-cloud IaC tool die uitstekend werkt met Azure. Ideaal voor hybride en multi-cloud 
              omgevingen, met een rijke ecosysteem van providers en modules.
            </p>

            <h3>Azure DevOps & GitHub Actions</h3>
            <p>
              Integratie met CI/CD pipelines voor automatische deployment van infrastructuurwijzigingen. 
              Implementeer GitOps workflows voor volledig geautomatiseerd infrastructuurbeheer.
            </p>

            <h2>Voordelen van Infrastructure as Code</h2>
            <ul>
              <li><strong>Consistentie</strong>: Identieke infrastructuur over alle omgevingen</li>
              <li><strong>Snelheid</strong>: Automatische provisioning vermindert deployment tijd aanzienlijk</li>
              <li><strong>Betrouwbaarheid</strong>: Elimineer configuratie drift en menselijke fouten</li>
              <li><strong>Schaalbaarheid</strong>: Eenvoudig repliceren en schalen van infrastructuur</li>
              <li><strong>Kostencontrole</strong>: Beter resource beheer en optimalisatie mogelijkheden</li>
              <li><strong>Disaster Recovery</strong>: Snelle infrastructuur herstel met code</li>
            </ul>

            <h2>Implementatie Proces</h2>
            <p>
              We beginnen met een analyse van uw huidige infrastructuur en business vereisten. 
              Vervolgens ontwerpen we een IaC strategie, implementeren de code templates en 
              zorgen voor training van uw team. Continue ondersteuning en optimalisatie 
              garanderen langdurig succes.
            </p>

            <p>
              Neem contact met ons op om te ontdekken hoe Infrastructure as Code uw Azure 
              beheer kan revolutioneren.
            </p>
          </>
        ) : (
          <>
            <h1>Infrastructure as Code</h1>
            <p>
              Our Infrastructure as Code (IaC) services transform how you manage your Azure infrastructure 
              by defining everything as code. This ensures consistency, repeatability, and complete control 
              over your cloud environment.
            </p>

            <h2>Our Infrastructure as Code Services</h2>

            <h3>Automated Provisioning</h3>
            <p>
              Automate the creation and configuration of your Azure resources with code templates. Our 
              IaC implementations ensure infrastructure is consistently deployed across different environments, 
              saving time and eliminating human errors.
            </p>

            <h3>Configuration Management</h3>
            <p>
              Manage your infrastructure configurations as code using tools like ARM Templates, Bicep, 
              Terraform, and Azure Resource Manager. This provides complete traceability and makes it 
              easy to implement and roll back changes.
            </p>

            <h3>Version Control</h3>
            <p>
              All infrastructure code is managed in Git repositories with complete version history. This 
              enables tracking changes, collaborating on infrastructure updates, and quickly reverting 
              to previous configurations when needed.
            </p>

            <h3>Compliance & Governance</h3>
            <p>
              Implement governance policies and compliance rules directly in your infrastructure code. 
              This ensures all resources automatically comply with organizational standards and regulatory 
              requirements from the moment of creation.
            </p>

            <h2>Technologies We Use</h2>

            <h3>Azure Resource Manager (ARM) Templates</h3>
            <p>
              Native Azure IaC solution for defining resources in JSON format. Perfect for Azure-specific 
              implementations with complete integration with Azure services.
            </p>

            <h3>Azure Bicep</h3>
            <p>
              A domain-specific language (DSL) that transpiles to ARM templates. Bicep offers a simpler, 
              more readable syntax for defining Azure infrastructure.
            </p>

            <h3>Terraform</h3>
            <p>
              Multi-cloud IaC tool that works excellently with Azure. Ideal for hybrid and multi-cloud 
              environments, with a rich ecosystem of providers and modules.
            </p>

            <h3>Azure DevOps & GitHub Actions</h3>
            <p>
              Integration with CI/CD pipelines for automatic deployment of infrastructure changes. 
              Implement GitOps workflows for fully automated infrastructure management.
            </p>

            <h2>Benefits of Infrastructure as Code</h2>
            <ul>
              <li><strong>Consistency</strong>: Identical infrastructure across all environments</li>
              <li><strong>Speed</strong>: Automated provisioning significantly reduces deployment time</li>
              <li><strong>Reliability</strong>: Eliminate configuration drift and human errors</li>
              <li><strong>Scalability</strong>: Easily replicate and scale infrastructure</li>
              <li><strong>Cost Control</strong>: Better resource management and optimization capabilities</li>
              <li><strong>Disaster Recovery</strong>: Quick infrastructure recovery with code</li>
            </ul>

            <h2>Implementation Process</h2>
            <p>
              We start with an analysis of your current infrastructure and business requirements. 
              Then we design an IaC strategy, implement code templates, and provide training for 
              your team. Continuous support and optimization ensure long-term success.
            </p>

            <p>
              Contact us today to discover how Infrastructure as Code can revolutionize your Azure management.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
