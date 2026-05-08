import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'Ten architecture-level questions at AZ-305 level. Identity and governance design, data store selection, business continuity, infrastructure, and migration.',
  ceCourseSlug: 'azure-solutions-architect',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-solutions-architect',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az305-1',
      topic: 'Identity Design',
      question:
        'After a merger, an organization has two Microsoft Entra tenants. End users in tenant A need occasional access to resources in tenant B without IT in tenant B managing accounts. Which design choice fits?',
      options: [
        { id: 'a', text: 'Merge tenant A and tenant B into a single tenant.' },
        { id: 'b', text: 'Cross-tenant access settings with Entra B2B and guest invitations from tenant B.' },
        { id: 'c', text: 'Set up an Active Directory trust between the two tenants.' },
        { id: 'd', text: 'Share service principals between the tenants.' },
      ],
      correctId: 'b',
      explanation:
        'Entra B2B with cross-tenant access settings invites users as guests; the home tenant keeps lifecycle management. Merging tenants is not a supported operation and would require a full migration.',
    },
    {
      id: 'az305-2',
      topic: 'Data Storage',
      question:
        'A global application needs sub-10ms reads in five regions and must support single-region writes with automatic failover. Which service fits best?',
      options: [
        { id: 'a', text: 'Azure SQL Database single instance with geo-replication.' },
        { id: 'b', text: 'Azure Database for PostgreSQL Flexible Server.' },
        { id: 'c', text: 'Azure Table Storage with RA-GRS.' },
        { id: 'd', text: 'Azure Cosmos DB with multi-region reads and single-region writes.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB delivers global distribution, sub-10ms multi-region reads, and automatic regional failover. SQL Database geo-replication offers read-only secondaries with higher latency than Cosmos.',
    },
    {
      id: 'az305-3',
      topic: 'Business Continuity',
      question:
        'A line-of-business application on an Azure VM must meet an RTO of 1 hour and an RPO of 5 minutes, with failover to another region. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Site Recovery with cross-region replication.' },
        { id: 'b', text: 'Azure Backup with daily snapshots.' },
        { id: 'c', text: 'Availability Sets within the same region.' },
        { id: 'd', text: 'Storage account replication on GRS.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Site Recovery replicates continuously and meets RPOs in minutes and RTOs within an hour. Azure Backup cannot achieve a 5-minute RPO; Availability Sets do not protect against a regional outage.',
    },
    {
      id: 'az305-4',
      topic: 'Networking',
      question:
        'A web application running on multiple App Services in two regions needs global load balancing, WAF, and SSL offloading at the edge. What do you choose?',
      options: [
        { id: 'a', text: 'An Application Gateway with WAF in each region.' },
        { id: 'b', text: 'Azure Load Balancer Standard.' },
        { id: 'c', text: 'Azure Front Door Premium.' },
        { id: 'd', text: 'Traffic Manager with endpoint monitoring.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door Premium combines global anycast load balancing, WAF, and SSL offloading at the edge. Traffic Manager only does DNS routing, without WAF or SSL offloading.',
    },
    {
      id: 'az305-5',
      topic: 'Compute',
      question:
        'A team runs a microservices platform with 40+ services and needs auto-scaling, mTLS between services, and blue-green deployments. Which platform fits best?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service with a service mesh such as Istio or Open Service Mesh.' },
        { id: 'b', text: 'Azure App Service with deployment slots.' },
        { id: 'c', text: 'Azure Container Instances behind an Application Gateway.' },
        { id: 'd', text: 'Azure Virtual Machines with IIS and Application Request Routing.' },
      ],
      correctId: 'a',
      explanation:
        'AKS with a service mesh covers scale, mTLS, and advanced deployment patterns for many services. App Service handles a small number of services well but has no mesh capability.',
    },
    {
      id: 'az305-6',
      topic: 'Integration',
      question:
        'An order processing pipeline must absorb peaks of 100,000 messages per hour, preserve ordering within customer partitions, and support consumers using the Apache Kafka protocol. Which service do you choose?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Service Bus Queues on Standard tier.' },
        { id: 'c', text: 'Azure Event Hubs with the Kafka endpoint.' },
        { id: 'd', text: 'Azure Logic Apps with a built-in connector.' },
      ],
      correctId: 'c',
      explanation:
        'Event Hubs handles millions of events, supports partitions for ordering, and exposes a Kafka endpoint so Kafka consumers work unchanged. Service Bus has lower throughput and no Kafka protocol.',
    },
    {
      id: 'az305-7',
      topic: 'Migration',
      question:
        'A customer runs hundreds of VMware VMs on-premises and wants to migrate them to Azure with minimal downtime and IP retention where possible. Which approach fits?',
      options: [
        { id: 'a', text: 'Manually create new VMs in Azure and copy data with robocopy.' },
        { id: 'b', text: 'Azure Migrate with the Server Migration tool and agentless replication of VMware.' },
        { id: 'c', text: 'Database Migration Service for the entire estate.' },
        { id: 'd', text: 'Storage Sync of all disks to Azure Files.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Migrate Server Migration replicates VMware VMs agentless and minimizes downtime via cutover. Database Migration Service is for databases only, not full operating systems.',
    },
    {
      id: 'az305-8',
      topic: 'Security Design',
      question:
        'A PaaS application must retrieve secrets without storing credentials in code or configuration. Which combination do you apply?',
      options: [
        {
          id: 'a',
          text: 'A system-assigned managed identity attached to the App Service, with RBAC on an Azure Key Vault.',
        },
        { id: 'b', text: 'Connection strings in Application Settings, rotated by hand.' },
        { id: 'c', text: 'A service principal with a client secret in an environment variable.' },
        { id: 'd', text: 'A local .env file deployed alongside the application.' },
      ],
      correctId: 'a',
      explanation:
        'A managed identity authenticates against Key Vault without secrets in code or configuration. Service principals with client secrets simply move the credential management problem somewhere else.',
    },
    {
      id: 'az305-9',
      topic: 'Cost Optimization',
      question:
        'A production workload runs 24/7 with predictable capacity. Which pricing model saves the most compared with pay-as-you-go?',
      options: [
        { id: 'a', text: 'Spot Virtual Machines.' },
        { id: 'b', text: 'Azure Hybrid Benefit alone.' },
        { id: 'c', text: 'Dev/Test pricing.' },
        { id: 'd', text: '3-year Reserved Instances, optionally combined with Azure Hybrid Benefit.' },
      ],
      correctId: 'd',
      explanation:
        '3-year Reserved Instances save up to 72% for predictable workloads and stack with Hybrid Benefit. Spot VMs are unsuitable for production because they can be evicted at any time.',
    },
    {
      id: 'az305-10',
      topic: 'Governance',
      question:
        'You design a landing zone for an enterprise with multiple business units and strict naming, tagging, and region requirements. Which combination delivers this structure?',
      options: [
        { id: 'a', text: 'A single subscription with manual tags.' },
        { id: 'b', text: 'Resource locks on every resource group.' },
        {
          id: 'c',
          text: 'Management Groups per business unit, Azure Policy for the rules, and deployment via a central IaC pattern.',
        },
        { id: 'd', text: 'A separate Entra tenant per business unit.' },
      ],
      correctId: 'c',
      explanation:
        'Management Groups group subscriptions and let Azure Policy apply hierarchically, alongside an IaC pattern for repeatable deploys. A separate tenant per BU breaks SSO and is unusual.',
    },
  ],
}
