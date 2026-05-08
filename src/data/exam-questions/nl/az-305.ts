import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'Tien architectuur-vragen op AZ-305 niveau. Identity en governance ontwerpen, dataopslag kiezen, business continuity, infrastructuur en migratie.',
  ceCourseSlug: 'azure-solutions-architect',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-solutions-architect',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az305-1',
      topic: 'Identity Design',
      question:
        'Een organisatie heeft twee Microsoft Entra-tenants na een fusie. Eindgebruikers van tenant A moeten incidenteel toegang tot resources in tenant B, zonder dat IT in tenant B accounts beheert. Welke ontwerpkeuze past?',
      options: [
        { id: 'a', text: 'Tenant A en B samenvoegen tot een enkele tenant.' },
        { id: 'b', text: 'Cross-tenant access settings met Entra B2B en guest invitations vanuit tenant B.' },
        { id: 'c', text: 'Een Active Directory trust opzetten tussen beide tenants.' },
        { id: 'd', text: 'Service principals delen tussen de tenants.' },
      ],
      correctId: 'b',
      explanation:
        'Entra B2B met cross-tenant access settings nodigt gebruikers uit als guests, beheer blijft in de home-tenant. Tenants samenvoegen is geen ondersteunde operatie en zou een volledige migratie vereisen.',
    },
    {
      id: 'az305-2',
      topic: 'Data Storage',
      question:
        'Een wereldwijde applicatie heeft sub-10ms reads in vijf regio\'s nodig en moet single-region writes ondersteunen met automatische failover. Welke service past het best?',
      options: [
        { id: 'a', text: 'Azure SQL Database single instance met geo-replicatie.' },
        { id: 'b', text: 'Azure Database for PostgreSQL Flexible Server.' },
        { id: 'c', text: 'Azure Table Storage met RA-GRS.' },
        { id: 'd', text: 'Azure Cosmos DB met multi-region reads en single-region writes.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB biedt globale distributie, multi-region reads onder 10ms en automatische regional failover. SQL Database geo-replicatie is read-only secondaries en heeft hogere latency dan Cosmos.',
    },
    {
      id: 'az305-3',
      topic: 'Business Continuity',
      question:
        'Een lijn-of-business applicatie op een Azure VM moet een RTO van 1 uur en RPO van 5 minuten halen, met failover naar een andere regio. Welke service past?',
      options: [
        { id: 'a', text: 'Azure Site Recovery met cross-region replication.' },
        { id: 'b', text: 'Azure Backup met dagelijkse snapshots.' },
        { id: 'c', text: 'Availability Sets binnen dezelfde regio.' },
        { id: 'd', text: 'Storage account replication op GRS.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Site Recovery repliceert continu en haalt RPO\'s in minuten en RTO\'s in een uur. Azure Backup haalt geen 5-minuten RPO; Availability Sets beschermen niet tegen regio-uitval.',
    },
    {
      id: 'az305-4',
      topic: 'Networking',
      question:
        'Een webapplicatie op meerdere App Services in twee regio\'s heeft global load balancing, WAF en SSL offloading nodig op het edge-netwerk. Wat kies je?',
      options: [
        { id: 'a', text: 'Een Application Gateway met WAF in elke regio.' },
        { id: 'b', text: 'Azure Load Balancer Standard.' },
        { id: 'c', text: 'Azure Front Door Premium.' },
        { id: 'd', text: 'Traffic Manager met endpoint monitoring.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door Premium combineert global anycast load balancing, WAF en SSL offloading op het edge-netwerk. Traffic Manager doet alleen DNS-routing, zonder WAF of SSL offloading.',
    },
    {
      id: 'az305-5',
      topic: 'Compute',
      question:
        'Een team draait een microservices-platform met 40+ services en heeft auto-scaling, mTLS tussen services en blue-green deployments nodig. Welk platform past het best?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service met een service mesh zoals Istio of Open Service Mesh.' },
        { id: 'b', text: 'Azure App Service met deployment slots.' },
        { id: 'c', text: 'Azure Container Instances achter een Application Gateway.' },
        { id: 'd', text: 'Azure Virtual Machines met IIS en Application Request Routing.' },
      ],
      correctId: 'a',
      explanation:
        'AKS met een service mesh dekt schaal, mTLS en geavanceerde deployment-patterns voor veel services. App Service is geschikt voor weinig services maar mist mesh-functionaliteit.',
    },
    {
      id: 'az305-6',
      topic: 'Integration',
      question:
        'Een orderverwerkingspijplijn moet pieken van 100.000 berichten per uur ondersteunen, ordering binnen klant-partities behouden en ondersteuning bieden voor consumenten in Apache Kafka-protocol. Welke service kies je?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Service Bus Queues op Standard tier.' },
        { id: 'c', text: 'Azure Event Hubs met de Kafka endpoint.' },
        { id: 'd', text: 'Azure Logic Apps met een built-in connector.' },
      ],
      correctId: 'c',
      explanation:
        'Event Hubs verwerkt miljoenen events, ondersteunt partities voor ordering en biedt een Kafka endpoint waardoor Kafka-consumers ongewijzigd werken. Service Bus heeft lagere doorvoer en geen Kafka-protocol.',
    },
    {
      id: 'az305-7',
      topic: 'Migration',
      question:
        'Een klant draait honderden VM\'s in VMware on-premises en wil ze migreren naar Azure met minimale downtime en behoud van IP-adressen waar mogelijk. Welke aanpak past?',
      options: [
        { id: 'a', text: 'Handmatig nieuwe VM\'s aanmaken in Azure en data overzetten met robocopy.' },
        { id: 'b', text: 'Azure Migrate met de Server Migration tool en een agentless replicatie van VMware.' },
        { id: 'c', text: 'Database Migration Service voor de hele estate.' },
        { id: 'd', text: 'Storage Sync van alle disks naar Azure Files.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Migrate Server Migration repliceert VMware VM\'s agentless en minimaliseert downtime via cutover. Database Migration Service is alleen voor databases, niet voor het hele OS.',
    },
    {
      id: 'az305-8',
      topic: 'Security Design',
      question:
        'Een PaaS-applicatie moet secrets ophalen zonder credentials in code of configuratie. Welke combinatie pas je toe?',
      options: [
        {
          id: 'a',
          text: 'Een system-assigned managed identity gekoppeld aan de App Service, met RBAC op een Azure Key Vault.',
        },
        { id: 'b', text: 'Connection strings in Application Settings en handmatig roteren.' },
        { id: 'c', text: 'Een service principal met client secret in een environment variable.' },
        { id: 'd', text: 'Een lokale .env-file gedeployed met de applicatie.' },
      ],
      correctId: 'a',
      explanation:
        'Een managed identity authenticeert tegen Key Vault zonder secrets in code of config. Service principals met client secrets vereisen weer credentials die zelf beheerd moeten worden.',
    },
    {
      id: 'az305-9',
      topic: 'Cost Optimization',
      question:
        'Een production workload draait 24/7 en is voorspelbaar in capaciteit. Welk pricing-model bespaart het meest, in vergelijking met pay-as-you-go?',
      options: [
        { id: 'a', text: 'Spot Virtual Machines.' },
        { id: 'b', text: 'Azure Hybrid Benefit alleen.' },
        { id: 'c', text: 'Dev/Test pricing.' },
        { id: 'd', text: 'Reserved Instances voor 3 jaar, eventueel gecombineerd met Azure Hybrid Benefit.' },
      ],
      correctId: 'd',
      explanation:
        'Reserved Instances voor 3 jaar geven tot 72% korting voor voorspelbare workloads en zijn stapelbaar met Hybrid Benefit. Spot VM\'s zijn niet geschikt voor productie omdat ze onderbroken kunnen worden.',
    },
    {
      id: 'az305-10',
      topic: 'Governance',
      question:
        'Je ontwerpt een landing zone voor een onderneming met meerdere business units en strikte naming-, tag- en regio-eisen. Welke combinatie levert deze structuur?',
      options: [
        { id: 'a', text: 'Een enkele subscription met handmatige tags.' },
        { id: 'b', text: 'Resource locks op alle resource groups.' },
        {
          id: 'c',
          text: 'Management Groups per business unit, Azure Policy voor regels en deployment via een centraal IaC-pattern.',
        },
        { id: 'd', text: 'Aparte Entra-tenants per business unit.' },
      ],
      correctId: 'c',
      explanation:
        'Management Groups groeperen subscriptions en laten Azure Policy hierarchisch afdwingen, samen met een IaC-pattern voor herhaalbare deploys. Aparte tenants per BU breken Single Sign-On en zijn ongebruikelijk.',
    },
  ],
}
