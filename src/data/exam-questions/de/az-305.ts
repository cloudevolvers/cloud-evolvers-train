import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'Zehn Architekturfragen auf AZ-305-Niveau. Identity- und Governance-Design, Datenspeicherwahl, Business Continuity, Infrastruktur und Migration.',
  ceCourseSlug: 'azure-solutions-architect',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-solutions-architect',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az305-1',
      topic: 'Identity Design',
      question:
        'Nach einer Fusion verfügt eine Organisation über zwei Microsoft Entra Tenants. Endbenutzer in Tenant A benötigen gelegentlich Zugriff auf Ressourcen in Tenant B, ohne dass die IT in Tenant B Konten verwaltet. Welche Designentscheidung passt?',
      options: [
        { id: 'a', text: 'Tenant A und Tenant B zu einem einzigen Tenant zusammenführen.' },
        { id: 'b', text: 'Cross-Tenant Access Settings mit Entra B2B und Guest-Einladungen aus Tenant B.' },
        { id: 'c', text: 'Einen Active Directory Trust zwischen den beiden Tenants einrichten.' },
        { id: 'd', text: 'Service Principals zwischen den Tenants teilen.' },
      ],
      correctId: 'b',
      explanation:
        'Entra B2B mit Cross-Tenant Access Settings lädt Benutzer als Guests ein, das Lifecycle Management bleibt im Home Tenant. Tenants zusammenzuführen ist keine unterstützte Operation und würde eine vollständige Migration erfordern.',
    },
    {
      id: 'az305-2',
      topic: 'Data Storage',
      question:
        'Eine globale Anwendung benötigt Reads unter 10 ms in fünf Regionen und muss Single-Region Writes mit automatischem Failover unterstützen. Welcher Dienst passt am besten?',
      options: [
        { id: 'a', text: 'Azure SQL Database Single Instance mit Geo-Replication.' },
        { id: 'b', text: 'Azure Database for PostgreSQL Flexible Server.' },
        { id: 'c', text: 'Azure Table Storage mit RA-GRS.' },
        { id: 'd', text: 'Azure Cosmos DB mit Multi-Region Reads und Single-Region Writes.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB liefert globale Verteilung, Multi-Region Reads unter 10 ms und automatischen regionalen Failover. SQL Database Geo-Replication bietet nur Read-Only Secondaries und höhere Latenz als Cosmos.',
    },
    {
      id: 'az305-3',
      topic: 'Business Continuity',
      question:
        'Eine Line-of-Business-Anwendung auf einer Azure VM muss eine RTO von 1 Stunde und eine RPO von 5 Minuten erreichen, mit Failover in eine andere Region. Welcher Dienst passt?',
      options: [
        { id: 'a', text: 'Azure Site Recovery mit Cross-Region Replication.' },
        { id: 'b', text: 'Azure Backup mit täglichen Snapshots.' },
        { id: 'c', text: 'Availability Sets in derselben Region.' },
        { id: 'd', text: 'Storage Account Replication auf GRS.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Site Recovery repliziert kontinuierlich und erreicht RPOs im Minutenbereich und RTOs innerhalb einer Stunde. Azure Backup schafft keine 5-Minuten-RPO; Availability Sets schützen nicht vor einem Regionsausfall.',
    },
    {
      id: 'az305-4',
      topic: 'Networking',
      question:
        'Eine Webanwendung auf mehreren App Services in zwei Regionen benötigt Global Load Balancing, WAF und SSL Offloading am Edge. Was wählen Sie?',
      options: [
        { id: 'a', text: 'Ein Application Gateway mit WAF in jeder Region.' },
        { id: 'b', text: 'Azure Load Balancer Standard.' },
        { id: 'c', text: 'Azure Front Door Premium.' },
        { id: 'd', text: 'Traffic Manager mit Endpoint Monitoring.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door Premium kombiniert globales Anycast Load Balancing, WAF und SSL Offloading am Edge. Traffic Manager erledigt nur DNS-Routing, ohne WAF oder SSL Offloading.',
    },
    {
      id: 'az305-5',
      topic: 'Compute',
      question:
        'Ein Team betreibt eine Microservices-Plattform mit über 40 Services und braucht Auto-Scaling, mTLS zwischen den Services und Blue-Green-Deployments. Welche Plattform passt am besten?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service mit einer Service Mesh wie Istio oder Open Service Mesh.' },
        { id: 'b', text: 'Azure App Service mit Deployment Slots.' },
        { id: 'c', text: 'Azure Container Instances hinter einem Application Gateway.' },
        { id: 'd', text: 'Azure Virtual Machines mit IIS und Application Request Routing.' },
      ],
      correctId: 'a',
      explanation:
        'AKS mit Service Mesh deckt Skalierung, mTLS und fortgeschrittene Deployment-Patterns für viele Services ab. App Service eignet sich für wenige Services, hat aber keine Mesh-Funktionalität.',
    },
    {
      id: 'az305-6',
      topic: 'Integration',
      question:
        'Eine Auftragsverarbeitungs-Pipeline muss Spitzen von 100.000 Nachrichten pro Stunde verkraften, Ordering innerhalb von Kunden-Partitionen sicherstellen und Consumer im Apache-Kafka-Protokoll bedienen. Welchen Dienst wählen Sie?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Service Bus Queues auf Standard Tier.' },
        { id: 'c', text: 'Azure Event Hubs mit Kafka Endpoint.' },
        { id: 'd', text: 'Azure Logic Apps mit einem Built-in Connector.' },
      ],
      correctId: 'c',
      explanation:
        'Event Hubs verarbeitet Millionen Events, unterstützt Partitionen für Ordering und stellt einen Kafka Endpoint bereit, sodass Kafka-Consumer unverändert weiterarbeiten. Service Bus hat geringeren Durchsatz und kein Kafka-Protokoll.',
    },
    {
      id: 'az305-7',
      topic: 'Migration',
      question:
        'Ein Kunde betreibt mehrere Hundert VMware-VMs On-Premises und will sie mit minimaler Downtime und nach Möglichkeit unter Beibehaltung der IP-Adressen nach Azure migrieren. Welcher Ansatz passt?',
      options: [
        { id: 'a', text: 'Manuell neue VMs in Azure anlegen und Daten per robocopy kopieren.' },
        { id: 'b', text: 'Azure Migrate mit dem Server Migration Tool und agentless Replication von VMware.' },
        { id: 'c', text: 'Database Migration Service für die gesamte Estate.' },
        { id: 'd', text: 'Storage Sync aller Disks zu Azure Files.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Migrate Server Migration repliziert VMware-VMs agentless und minimiert Downtime über den Cutover. Database Migration Service ist nur für Datenbanken gedacht, nicht für komplette Betriebssysteme.',
    },
    {
      id: 'az305-8',
      topic: 'Security Design',
      question:
        'Eine PaaS-Anwendung muss Secrets abrufen, ohne Credentials in Code oder Konfiguration abzulegen. Welche Kombination wenden Sie an?',
      options: [
        {
          id: 'a',
          text: 'Eine system-assigned Managed Identity am App Service mit RBAC auf einem Azure Key Vault.',
        },
        { id: 'b', text: 'Connection Strings in den Application Settings, manuell rotiert.' },
        { id: 'c', text: 'Ein Service Principal mit Client Secret in einer Environment Variable.' },
        { id: 'd', text: 'Eine lokale .env-Datei, die mit der Anwendung deployed wird.' },
      ],
      correctId: 'a',
      explanation:
        'Eine Managed Identity authentifiziert sich gegen den Key Vault ohne Secrets in Code oder Konfiguration. Service Principals mit Client Secret verlagern das Credential-Management nur, sie lösen es nicht.',
    },
    {
      id: 'az305-9',
      topic: 'Cost Optimization',
      question:
        'Ein Production Workload läuft 24/7 mit vorhersagbarer Kapazität. Welches Pricing-Modell spart im Vergleich zu Pay-as-you-go am meisten?',
      options: [
        { id: 'a', text: 'Spot Virtual Machines.' },
        { id: 'b', text: 'Azure Hybrid Benefit allein.' },
        { id: 'c', text: 'Dev/Test Pricing.' },
        { id: 'd', text: '3-Jahres-Reserved Instances, optional kombiniert mit Azure Hybrid Benefit.' },
      ],
      correctId: 'd',
      explanation:
        '3-Jahres-Reserved Instances bringen bis zu 72% Rabatt für vorhersagbare Workloads und lassen sich mit Hybrid Benefit kombinieren. Spot VMs sind für Production ungeeignet, da sie jederzeit evakuiert werden können.',
    },
    {
      id: 'az305-10',
      topic: 'Governance',
      question:
        'Sie entwerfen eine Landing Zone für ein Unternehmen mit mehreren Business Units und strikten Vorgaben für Naming, Tags und Regionen. Welche Kombination liefert diese Struktur?',
      options: [
        { id: 'a', text: 'Eine einzige Subscription mit manuell gesetzten Tags.' },
        { id: 'b', text: 'Resource Locks auf jeder Resource Group.' },
        {
          id: 'c',
          text: 'Management Groups je Business Unit, Azure Policy für die Regeln und Deployment über ein zentrales IaC-Pattern.',
        },
        { id: 'd', text: 'Pro Business Unit ein eigener Entra Tenant.' },
      ],
      correctId: 'c',
      explanation:
        'Management Groups gruppieren Subscriptions und lassen Azure Policy hierarchisch wirken, ergänzt durch ein IaC-Pattern für reproduzierbare Deployments. Ein eigener Tenant je BU bricht SSO und ist unüblich.',
    },
  ],
}
