import { Metadata } from 'next';
import ServiceLayout from '../components/ServiceLayout';
import { getTranslations, SupportedLang } from '@/utils/i18n';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Azure Network Engineering - xEvolve Services',
    description: 'Design and implement robust networking solutions in Azure. Network design, implementation, security management, and performance optimization.',
  };
}

interface NetworkEngineeringPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NetworkEngineeringPage({ searchParams }: NetworkEngineeringPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as SupportedLang) || 'en';
  const t = getTranslations(lang);

  const serviceData = {
    id: 'network-engineering',
    title: t.header.serviceNames.networkEngineering,
    description: t.services.descriptions.networkEngineering,
    icon: 'Globe',
    features: t.services.features.networkEngineering,
    order: 10
  };

  return (
    <ServiceLayout service={serviceData} lang={lang}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {lang === 'nl' ? (
          <>
            <h1>Azure Network Engineering</h1>
            <p>
              Onze Azure Network Engineering services helpen organisaties bij het ontwerpen, 
              implementeren en optimaliseren van veilige, betrouwbare en hoogperformante 
              netwerkarchitecturen in Azure.
            </p>

            <h2>Onze Azure Network Engineering Services</h2>

            <h3>Netwerkarchitectuur Ontwerp</h3>
            <p>
              We ontwerpen op maat gemaakte netwerkarchitecturen die voldoen aan uw specifieke 
              bedrijfsvereisten. Onze experts analyseren uw connectivity behoeften en creëren 
              schaalbare, veilige netwerkoplossingen die optimale prestaties garanderen.
            </p>

            <h3>Connectivity Oplossingen</h3>
            <p>
              Implementeer robuuste connectiviteitsoplossingen tussen on-premises infrastructuur 
              en Azure. We specialiseren ons in ExpressRoute, site-to-site VPN, point-to-site 
              VPN en hybride netwerkarchitecturen.
            </p>

            <h3>Netwerkbeveiliging</h3>
            <p>
              Beveilig uw Azure netwerken met geavanceerde security features zoals Network Security 
              Groups (NSGs), Azure Firewall, Application Gateway, en DDoS protection. We implementeren 
              defense-in-depth strategieën voor maximale bescherming.
            </p>

            <h3>Prestatie Optimalisatie</h3>
            <p>
              Optimaliseer netwerkprestaties met load balancing, traffic management, en bandwidth 
              optimalisatie. Onze monitoring en tuning zorgen voor optimale netwerkperformance 
              en gebruikerservaring.
            </p>

            <h2>Kerncomponenten</h2>

            <h3>Virtual Networks (VNets)</h3>
            <p>
              Ontwerp en implementatie van Azure Virtual Networks met optimale subnetting, 
              routering en peering configuraties voor veilige resource isolatie en communicatie.
            </p>

            <h3>Azure Load Balancer & Application Gateway</h3>
            <p>
              Implementeer geavanceerde load balancing oplossingen voor high availability 
              en optimale traffic distributie over uw Azure resources.
            </p>

            <h3>Azure Traffic Manager & Front Door</h3>
            <p>
              Globale traffic management en content delivery optimalisatie voor wereldwijde 
              applicatie toegankelijkheid en prestaties.
            </p>

            <h3>Network Monitoring & Analytics</h3>
            <p>
              Uitgebreide monitoring met Azure Network Watcher, flow logs, en performance 
              analytics voor proactief netwerkbeheer en troubleshooting.
            </p>

            <h2>Voordelen van Onze Azure Network Engineering Services</h2>
            <ul>
              <li><strong>High Availability</strong>: Ontwerp voor 99.9%+ uptime met redundante verbindingen</li>
              <li><strong>Schaalbaarheid</strong>: Netwerkarchitecturen die meegroeien met uw organisatie</li>
              <li><strong>Beveiliging</strong>: Multi-layered security met Azure native security tools</li>
              <li><strong>Prestaties</strong>: Optimale netwerkprestaties voor alle applicaties</li>
              <li><strong>Compliance</strong>: Netwerken die voldoen aan industrie en regulatory vereisten</li>
              <li><strong>Kostenefficiëntie</strong>: Right-sizing en optimalisatie voor kostenbeheer</li>
            </ul>

            <p>
              Neem contact met ons op om te ontdekken hoe onze Azure Network Engineering services 
              uw netwerkinfrastructuur kunnen transformeren voor optimale performance en beveiliging.
            </p>
          </>
        ) : (
          <>
            <h1>Azure Network Engineering</h1>
            <p>
              Our Azure Network Engineering services help organizations design, implement, and optimize 
              secure, reliable, and high-performance network architectures in Azure.
            </p>

            <h2>Our Azure Network Engineering Services</h2>

            <h3>Network Architecture Design</h3>
            <p>
              We design custom network architectures that meet your specific business requirements. 
              Our experts analyze your connectivity needs and create scalable, secure network solutions 
              that ensure optimal performance.
            </p>

            <h3>Connectivity Solutions</h3>
            <p>
              Implement robust connectivity solutions between on-premises infrastructure and Azure. 
              We specialize in ExpressRoute, site-to-site VPN, point-to-site VPN, and hybrid network 
              architectures.
            </p>

            <h3>Network Security</h3>
            <p>
              Secure your Azure networks with advanced security features like Network Security Groups 
              (NSGs), Azure Firewall, Application Gateway, and DDoS protection. We implement defense-in-depth 
              strategies for maximum protection.
            </p>

            <h3>Performance Optimization</h3>
            <p>
              Optimize network performance with load balancing, traffic management, and bandwidth optimization. 
              Our monitoring and tuning ensure optimal network performance and user experience.
            </p>

            <h2>Core Components</h2>

            <h3>Virtual Networks (VNets)</h3>
            <p>
              Design and implementation of Azure Virtual Networks with optimal subnetting, routing, 
              and peering configurations for secure resource isolation and communication.
            </p>

            <h3>Azure Load Balancer & Application Gateway</h3>
            <p>
              Implement advanced load balancing solutions for high availability and optimal traffic 
              distribution across your Azure resources.
            </p>

            <h3>Azure Traffic Manager & Front Door</h3>
            <p>
              Global traffic management and content delivery optimization for worldwide application 
              accessibility and performance.
            </p>

            <h3>Network Monitoring & Analytics</h3>
            <p>
              Comprehensive monitoring with Azure Network Watcher, flow logs, and performance analytics 
              for proactive network management and troubleshooting.
            </p>

            <h2>Benefits of Our Azure Network Engineering Services</h2>
            <ul>
              <li><strong>High Availability</strong>: Design for 99.9%+ uptime with redundant connections</li>
              <li><strong>Scalability</strong>: Network architectures that grow with your organization</li>
              <li><strong>Security</strong>: Multi-layered security with Azure native security tools</li>
              <li><strong>Performance</strong>: Optimal network performance for all applications</li>
              <li><strong>Compliance</strong>: Networks that meet industry and regulatory requirements</li>
              <li><strong>Cost Efficiency</strong>: Right-sizing and optimization for cost management</li>
            </ul>

            <p>
              Contact us today to discover how our Azure Network Engineering services can transform 
              your network infrastructure for optimal performance and security.
            </p>
          </>
        )}
      </div>
    </ServiceLayout>
  );
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
