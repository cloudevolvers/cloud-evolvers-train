import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'One hundred architecture-level questions at AZ-305 level. Identity and governance design, data store selection, business continuity, infrastructure, and migration.',
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
    {
      id: 'az305-11',
      topic: 'Identity Design',
      question:
        'A retailer runs a customer-facing shopping site and wants social sign-ins (Google, Facebook), self-service password reset, and custom branding for end customers. Which Microsoft Entra option fits?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID with B2B guest invitations for each customer.' },
        { id: 'b', text: 'Azure AD DS forest trust with a customer directory.' },
        { id: 'c', text: 'Microsoft Entra Domain Services with LDAP.' },
        { id: 'd', text: 'Microsoft Entra External ID for customers (CIAM).' },
      ],
      correctId: 'd',
      explanation:
        'Entra External ID for customers is the customer identity service with social IdPs, branding, and self-service flows. B2B is built for partner collaboration, not consumer scale, and offers no branded sign-up flows.',
    },
    {
      id: 'az305-12',
      topic: 'Hybrid Identity',
      question:
        'A company must enforce on-premises Active Directory password policy at sign-in and keep authentication working when the cloud connector is offline. Which Entra Connect sign-in method fits?',
      options: [
        { id: 'a', text: 'Password hash synchronization only.' },
        { id: 'b', text: 'Pass-through authentication with no fallback.' },
        { id: 'c', text: 'Pass-through authentication with password hash sync as fallback.' },
        { id: 'd', text: 'Federation with AD FS only.' },
      ],
      correctId: 'c',
      explanation:
        'PTA validates against on-premises AD live, and PHS as fallback keeps users signing in if connectors fail. Federation works but adds AD FS infrastructure that the question does not justify.',
    },
    {
      id: 'az305-13',
      topic: 'Authentication',
      question:
        'An IT admin has standing Owner rights on the production subscription. Auditors flag this as excessive privilege. Which design tightens access without blocking emergency work?',
      options: [
        { id: 'a', text: 'Move the admin to Reader and grant Owner per ticket via ARM templates.' },
        { id: 'b', text: 'Custom RBAC role with all Owner actions except delete.' },
        { id: 'c', text: 'Conditional Access requiring MFA on every Owner login.' },
        { id: 'd', text: 'Microsoft Entra Privileged Identity Management with eligible Owner activation and approval.' },
      ],
      correctId: 'd',
      explanation:
        'PIM makes Owner eligible-only with just-in-time activation, approval, and audit. Conditional Access alone still leaves rights standing 24/7, which is what auditors flagged.',
    },
    {
      id: 'az305-14',
      topic: 'Governance',
      question:
        'A platform team must enforce that every resource group carries a CostCenter tag and that any resource without one fails deployment. Which approach fits?',
      options: [
        { id: 'a', text: 'A naming convention published in the wiki.' },
        { id: 'b', text: 'Activity Log alerts on missing tags.' },
        { id: 'c', text: 'Azure Policy with Deny effect on a Required Tag definition assigned at the management group.' },
        { id: 'd', text: 'A Logic App that scans daily and emails violations.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy with the Deny effect blocks creation of non-compliant resources at deployment time. Detective controls like Logic App scanners catch violations after the fact.',
    },
    {
      id: 'az305-15',
      topic: 'Monitoring',
      question:
        'Five business units each own subscriptions and want their own logs, while the SecOps team needs a single pane for security analytics. Which Log Analytics design fits?',
      options: [
        { id: 'a', text: 'One workspace per subscription with no central view.' },
        { id: 'b', text: 'A single workspace shared by everyone with no RBAC.' },
        { id: 'c', text: 'A central security workspace with Microsoft Sentinel and per-BU workspaces for ops, plus cross-workspace queries.' },
        { id: 'd', text: 'One workspace per resource group.' },
      ],
      correctId: 'c',
      explanation:
        'A federated model gives BUs ownership of operational data and SecOps a single Sentinel workspace for security signals. A single shared workspace blocks BU isolation and inflates ingestion costs.',
    },
    {
      id: 'az305-16',
      topic: 'Data Storage',
      question:
        'A vendor application requires SQL Server Agent, cross-database queries, and CLR. The team wants PaaS rather than VM management. Which option fits?',
      options: [
        { id: 'a', text: 'Azure SQL Database single instance.' },
        { id: 'b', text: 'Azure SQL Database elastic pool.' },
        { id: 'c', text: 'Azure SQL Managed Instance.' },
        { id: 'd', text: 'Azure Database for PostgreSQL.' },
      ],
      correctId: 'c',
      explanation:
        'SQL Managed Instance gives near-100% SQL Server feature parity (Agent, cross-database, CLR) with PaaS operations. Azure SQL Database lacks SQL Agent and full cross-database query support.',
    },
    {
      id: 'az305-17',
      topic: 'Cosmos DB',
      question:
        'A read-heavy product catalog with single-document reads uses a single-write, multi-read-region Cosmos DB account. Which consistency level gives read-your-writes guarantees per session while working well across multiple regions?',
      options: [
        { id: 'a', text: 'Strong consistency across all regions.' },
        { id: 'b', text: 'Eventual.' },
        { id: 'c', text: 'Session.' },
        { id: 'd', text: 'Bounded staleness.' },
      ],
      correctId: 'c',
      explanation:
        'Session consistency gives read-your-writes, monotonic reads, and monotonic writes guarantees within a client session. It is the recommended level for most multi-region scenarios. Bounded staleness is the strongest option for single-write/multi-read accounts with predictable cross-region lag, but Microsoft explicitly flags it as an anti-pattern for multi-region write accounts. Strong consistency is incompatible with multi-region writes entirely.',
    },
    {
      id: 'az305-18',
      topic: 'Business Continuity',
      question:
        'A finance app on Azure SQL Database needs automatic failover with a listener endpoint so applications do not change connection strings during a regional failure. Which feature fits?',
      options: [
        { id: 'a', text: 'Active geo-replication only.' },
        { id: 'b', text: 'Long-term retention backups.' },
        { id: 'c', text: 'Auto-failover groups.' },
        { id: 'd', text: 'Point-in-time restore.' },
      ],
      correctId: 'c',
      explanation:
        'Auto-failover groups expose listener endpoints and automate failover for one or more databases. Active geo-replication alone gives readable secondaries but no listener and no group-level automation.',
    },
    {
      id: 'az305-19',
      topic: 'Compute',
      question:
        'A team runs a small HTTP API with bursty traffic and wants per-request billing while autoscaling to zero when idle. Which compute option fits?',
      options: [
        { id: 'a', text: 'Azure Functions on the Consumption plan.' },
        { id: 'b', text: 'Azure App Service on Premium v3.' },
        { id: 'c', text: 'Azure Kubernetes Service Standard tier.' },
        { id: 'd', text: 'Azure Virtual Machine Scale Set with manual scale.' },
      ],
      correctId: 'a',
      explanation:
        'Functions Consumption scales to zero and bills per execution and GB-second. App Service Premium v3 has fixed instance billing even at idle, which fails the cost goal.',
    },
    {
      id: 'az305-20',
      topic: 'Networking',
      question:
        'An enterprise with 15 VNets in three regions needs any-to-any connectivity, branch SD-WAN, and integrated firewall. Which topology fits?',
      options: [
        { id: 'a', text: 'Mesh of VNet peerings between every pair.' },
        { id: 'b', text: 'Single hub VNet in one region.' },
        { id: 'c', text: 'Azure Virtual WAN with secured hubs.' },
        { id: 'd', text: 'VPN gateways in each VNet with site-to-site to each branch.' },
      ],
      correctId: 'c',
      explanation:
        'Virtual WAN gives any-to-any transit, native SD-WAN integrations, and Azure Firewall in secured hubs. A full peering mesh scales poorly and gives no branch or firewall integration.',
    },
    {
      id: 'az305-21',
      topic: 'Identity Design',
      question:
        'A SaaS vendor selling to many tenants must let each customer sign in with their own corporate identities while the application code stays single-codebase. Which application registration model fits?',
      options: [
        { id: 'a', text: 'Single-tenant app registered in the vendor tenant only.' },
        { id: 'b', text: 'Personal Microsoft accounts only.' },
        { id: 'c', text: 'Per-customer service principals shipped with the install.' },
        { id: 'd', text: 'Multi-tenant app registration with consent from each customer tenant.' },
      ],
      correctId: 'd',
      explanation:
        'A multi-tenant Entra app lets customers consent in their own tenant and use their own identities. Single-tenant registration would only authenticate the vendor tenant, not customer users.',
    },
    {
      id: 'az305-22',
      topic: 'Authentication',
      question:
        'An organization wants to remove passwords for the workforce and allow sign-in with FIDO2 keys, Windows Hello, and the Authenticator app. Which Entra capability fits?',
      options: [
        { id: 'a', text: 'Self-service password reset.' },
        { id: 'b', text: 'Security defaults.' },
        { id: 'c', text: 'Authentication strengths in Conditional Access combined with passwordless methods.' },
        { id: 'd', text: 'Smart card certificate trust only.' },
      ],
      correctId: 'c',
      explanation:
        'Authentication strengths bind Conditional Access policies to phishing-resistant or passwordless methods. Security defaults enforce MFA but do not select methods or remove passwords.',
    },
    {
      id: 'az305-23',
      topic: 'Governance',
      question:
        'A compliance team needs every new subscription created under the company to inherit a baseline of policies for tagging, allowed regions, and security defaults. Where do you assign these?',
      options: [
        { id: 'a', text: 'On each subscription individually after creation.' },
        { id: 'b', text: 'In Microsoft Entra ID via Conditional Access.' },
        { id: 'c', text: 'On every resource group as a separate definition.' },
        { id: 'd', text: 'On the root or a Platform management group as an initiative.' },
      ],
      correctId: 'd',
      explanation:
        'Assigning a policy initiative at a high management group makes child subscriptions inherit the controls automatically. Per-subscription assignment scales poorly and forgets new subscriptions.',
    },
    {
      id: 'az305-24',
      topic: 'Cost Management',
      question:
        'A FinOps team wants daily cost data piped into a corporate data lake for custom dashboards alongside other business data. Which approach fits?',
      options: [
        { id: 'a', text: 'Manual CSV downloads from the portal.' },
        { id: 'b', text: 'Power BI screenshots emailed daily.' },
        { id: 'c', text: 'Cost Management exports scheduled to a storage account in Parquet, ingested into the lake.' },
        { id: 'd', text: 'Azure Advisor recommendations only.' },
      ],
      correctId: 'c',
      explanation:
        'Cost Management exports write actual and amortized usage to storage on a schedule for downstream analytics. Manual downloads break automation and are error-prone at enterprise scale.',
    },
    {
      id: 'az305-25',
      topic: 'Data Storage',
      question:
        'A multi-tenant SaaS app stores tenant databases of varying size and load on Azure SQL Database and wants to share unused capacity to lower cost. Which design fits?',
      options: [
        { id: 'a', text: 'A separate vCore single database per tenant on the highest tier.' },
        { id: 'b', text: 'A single database shared across all tenants with row-level security only.' },
        { id: 'c', text: 'SQL Server on a VM with all tenants in one database.' },
        { id: 'd', text: 'An elastic pool sized for aggregate load with per-database min/max DTUs.' },
      ],
      correctId: 'd',
      explanation:
        'Elastic pools share capacity across many databases with bounded per-tenant min and max settings. Per-tenant single databases cost the most because peak capacity is reserved per tenant.',
    },
    {
      id: 'az305-26',
      topic: 'Cosmos DB',
      question:
        'An IoT telemetry workload writes 1 KB documents keyed by deviceId and queries by deviceId 95% of the time. Which partition key fits?',
      options: [
        { id: 'a', text: 'A synthetic key combining tenantId and deviceId hash.' },
        { id: 'b', text: 'A constant value to keep documents together.' },
        { id: 'c', text: 'deviceId as the partition key.' },
        { id: 'd', text: 'eventTimestamp as the partition key.' },
      ],
      correctId: 'c',
      explanation:
        'deviceId distributes load evenly when device counts are high and most queries filter on it, giving single-partition reads. eventTimestamp creates a hot partition for writes on the latest interval.',
    },
    {
      id: 'az305-27',
      topic: 'Storage',
      question:
        'A regulated archive must keep data immutable for 7 years and remain readable on demand within hours. Which design fits?',
      options: [
        { id: 'a', text: 'Hot tier with soft delete only.' },
        { id: 'b', text: 'Cool tier with versioning.' },
        { id: 'c', text: 'Archive tier with a time-based immutability policy.' },
        { id: 'd', text: 'Premium block blob with snapshots.' },
      ],
      correctId: 'c',
      explanation:
        'Archive tier minimizes cost for rare access and pairs with time-based immutability for WORM. Hot tier with soft delete leaves data mutable and is the wrong cost profile for 7-year archives.',
    },
    {
      id: 'az305-28',
      topic: 'Business Continuity',
      question:
        'A storage account must survive a full region loss and let applications read from the secondary region during the outage. Which redundancy fits?',
      options: [
        { id: 'a', text: 'LRS.' },
        { id: 'b', text: 'ZRS.' },
        { id: 'c', text: 'GRS.' },
        { id: 'd', text: 'RA-GZRS.' },
      ],
      correctId: 'd',
      explanation:
        'RA-GZRS adds zone redundancy in the primary region plus read access in the secondary region. GRS replicates cross-region but does not expose a read endpoint on the secondary by default.',
    },
    {
      id: 'az305-29',
      topic: 'Networking',
      question:
        'An on-premises data center needs 10 Gbps low-latency private connectivity to Azure with carrier redundancy and SLA. Which option fits?',
      options: [
        { id: 'a', text: 'Site-to-site VPN over the internet.' },
        { id: 'b', text: 'Point-to-site VPN per branch.' },
        { id: 'c', text: 'ExpressRoute with two carriers and active-active circuits.' },
        { id: 'd', text: 'Azure Bastion connectivity.' },
      ],
      correctId: 'c',
      explanation:
        'ExpressRoute with two carriers gives the bandwidth, latency, and SLA expectations the scenario states. VPN over the internet cannot guarantee 10 Gbps or carrier-redundant SLAs.',
    },
    {
      id: 'az305-30',
      topic: 'Compute',
      question:
        'A team wants to host a microservice with built-in Dapr support, KEDA-based scale-to-zero, and managed ingress, without operating Kubernetes. Which platform fits?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service.' },
        { id: 'b', text: 'Azure App Service for Containers.' },
        { id: 'c', text: 'Azure Container Instances.' },
        { id: 'd', text: 'Azure Container Apps.' },
      ],
      correctId: 'd',
      explanation:
        'Container Apps offers Dapr, KEDA scaling, and managed ingress on a serverless platform. AKS gives the same capabilities but requires you to operate the cluster yourself.',
    },
    {
      id: 'az305-31',
      topic: 'Identity Design',
      question:
        'A factory floor app needs Kerberos and LDAP authentication for legacy services running on Azure VMs without deploying domain controllers. Which option fits?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID only.' },
        { id: 'b', text: 'Microsoft Entra B2B.' },
        { id: 'c', text: 'Microsoft Entra Domain Services.' },
        { id: 'd', text: 'AD FS in Azure.' },
      ],
      correctId: 'c',
      explanation:
        'Entra Domain Services provides managed domain join, Kerberos, and LDAP without DCs to operate. Entra ID alone supports modern protocols only and not Kerberos or LDAP.',
    },
    {
      id: 'az305-32',
      topic: 'Authentication',
      question:
        'A travel app needs to require step-up MFA when users sign in from outside corporate networks and skip MFA on managed devices in the office. Which control fits?',
      options: [
        { id: 'a', text: 'Security defaults.' },
        { id: 'b', text: 'A token lifetime policy alone.' },
        { id: 'c', text: 'Per-user MFA forced for all sessions.' },
        { id: 'd', text: 'A Conditional Access policy with named locations and device filters.' },
      ],
      correctId: 'd',
      explanation:
        'Conditional Access combines location, device state, and MFA requirements per session. Security defaults are blunt and cannot vary by location or device state.',
    },
    {
      id: 'az305-33',
      topic: 'Governance',
      question:
        'An auditor wants every Azure operator action that targets the prod subscription to be reviewed by a second person. Which control fits?',
      options: [
        { id: 'a', text: 'Resource locks.' },
        { id: 'b', text: 'Azure Policy audit effect.' },
        { id: 'c', text: 'Privileged Identity Management with approval workflow on activation.' },
        { id: 'd', text: 'Activity Log alerts after the fact.' },
      ],
      correctId: 'c',
      explanation:
        'PIM activation with approvers enforces second-person review at the moment privileges are granted. Activity Log alerts and audit policy notice the action only after it happened.',
    },
    {
      id: 'az305-34',
      topic: 'Identity Design',
      question:
        'A workload must access another workload across subscriptions without managing client secrets, and each workload runs on its own Azure VM. Which identity design fits?',
      options: [
        { id: 'a', text: 'A single shared service principal with a long-lived secret.' },
        { id: 'b', text: 'Application keys stored in Key Vault and read at startup.' },
        { id: 'c', text: 'Hardcoded SAS tokens in app config.' },
        { id: 'd', text: 'System-assigned managed identities on each VM, with RBAC on target resources.' },
      ],
      correctId: 'd',
      explanation:
        'System-assigned managed identities tie credentials to each VM lifecycle and need no secret rotation. Shared service principals reintroduce secret management and weaken auditability.',
    },
    {
      id: 'az305-35',
      topic: 'Monitoring',
      question:
        'A web app team wants distributed tracing, dependency maps, and live metrics linked to the same Log Analytics workspace as other Azure logs. Which choice fits?',
      options: [
        { id: 'a', text: 'A classic Application Insights resource on a separate backend.' },
        { id: 'b', text: 'Diagnostic settings without Application Insights.' },
        { id: 'c', text: 'A workspace-based Application Insights resource pointed at the shared workspace.' },
        { id: 'd', text: 'Azure Monitor metrics only.' },
      ],
      correctId: 'c',
      explanation:
        'Workspace-based Application Insights stores telemetry in Log Analytics so queries and RBAC are unified. Classic App Insights uses its own backend and breaks single-pane analytics.',
    },
    {
      id: 'az305-36',
      topic: 'Data Storage',
      question:
        'A team needs a relational store on Azure with elastic compute that can independently scale storage to 100 TB and create fast database copies for testing. Which option fits?',
      options: [
        { id: 'a', text: 'Azure SQL Database General Purpose.' },
        { id: 'b', text: 'Azure Database for MySQL Flexible Server.' },
        { id: 'c', text: 'Azure SQL Database Business Critical.' },
        { id: 'd', text: 'Azure SQL Database Hyperscale.' },
      ],
      correctId: 'd',
      explanation:
        'Hyperscale separates compute and storage, supports up to 100 TB, and offers fast database copies via snapshots. General Purpose tops out far below 100 TB and lacks fast copy.',
    },
    {
      id: 'az305-37',
      topic: 'Cosmos DB',
      question:
        'A startup runs unpredictable, low traffic against a Cosmos DB collection at night and high bursts during business hours, and wants to pay only for actual operations. Which throughput model fits?',
      options: [
        { id: 'a', text: 'Manual provisioned throughput sized for peak.' },
        { id: 'b', text: 'Manual provisioned throughput sized for average.' },
        { id: 'c', text: 'Serverless billing per request unit.' },
        { id: 'd', text: 'Autoscale provisioned throughput on the highest setting.' },
      ],
      correctId: 'c',
      explanation:
        'Cosmos serverless bills only for consumed RUs, ideal for spiky low-volume workloads. Autoscale still bills the minimum provisioned floor every hour even at zero traffic.',
    },
    {
      id: 'az305-38',
      topic: 'Open-source DB',
      question:
        'An application uses PostgreSQL with a need for zone-redundant HA, custom maintenance windows, and burstable compute for dev and memory-optimized for prod. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Database for PostgreSQL Single Server.' },
        { id: 'b', text: 'Cosmos DB for PostgreSQL.' },
        { id: 'c', text: 'PostgreSQL on Azure Virtual Machines.' },
        { id: 'd', text: 'Azure Database for PostgreSQL Flexible Server.' },
      ],
      correctId: 'd',
      explanation:
        'Flexible Server adds zone-redundant HA, customizable maintenance, and burstable plus memory-optimized SKUs. Single Server is on the deprecation path and lacks zone-redundant HA.',
    },
    {
      id: 'az305-39',
      topic: 'Analytics',
      question:
        'A data team wants to ingest billions of events per day, run interactive ad-hoc queries on time-series data with sub-second latency, and pay for managed analytics. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Synapse dedicated SQL pool.' },
        { id: 'b', text: 'Azure Data Explorer.' },
        { id: 'c', text: 'Azure Data Lake Storage with serverless SQL.' },
        { id: 'd', text: 'Azure Analysis Services.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Data Explorer is built for time-series and log analytics with sub-second interactive queries. Synapse dedicated pools target relational warehousing, not interactive time-series at scale.',
    },
    {
      id: 'az305-40',
      topic: 'Caching',
      question:
        'A high-traffic e-commerce site needs an active-active Redis cache across two regions with under 50ms replication, used as session store and read cache. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Cache for Redis Basic tier.' },
        { id: 'b', text: 'Azure Cache for Redis Standard with passive replication.' },
        { id: 'c', text: 'Azure Cache for Redis Enterprise tier with active geo-replication.' },
        { id: 'd', text: 'A self-hosted Redis on a single VM.' },
      ],
      correctId: 'c',
      explanation:
        'Enterprise tier with active geo-replication supports active-active multi-region writes. Standard with passive replication only allows failover, not concurrent writes from both regions.',
    },
    {
      id: 'az305-41',
      topic: 'Identity Design',
      question:
        'A government department must keep all user identity data in a national Azure region and prevent cross-border replication. Which design choice fits?',
      options: [
        { id: 'a', text: 'A worldwide Microsoft Entra tenant with default residency.' },
        { id: 'b', text: 'Cosmos DB for identity storage.' },
        { id: 'c', text: 'Microsoft Entra ID with the local data residency option for the country (where available).' },
        { id: 'd', text: 'Active Directory on-premises with no cloud sync.' },
      ],
      correctId: 'c',
      explanation:
        'Entra ID supports local residency in selected regions to keep identity data within national borders. A worldwide tenant defaults to global service replication and may not meet residency law.',
    },
    {
      id: 'az305-42',
      topic: 'Authentication',
      question:
        'A finance app must require Conditional Access only when a user shows risky sign-in behavior detected by Microsoft. Which feature fits?',
      options: [
        { id: 'a', text: 'Identity Protection sign-in risk policy referenced by Conditional Access.' },
        { id: 'b', text: 'Always-on per-user MFA.' },
        { id: 'c', text: 'Smart lockout only.' },
        { id: 'd', text: 'Default block-all policy.' },
      ],
      correctId: 'a',
      explanation:
        'Identity Protection signals (sign-in risk, user risk) drive Conditional Access decisions in real time. Always-on per-user MFA is blunt and ignores risk context.',
    },
    {
      id: 'az305-43',
      topic: 'Governance',
      question:
        'A platform team wants to package an idempotent landing zone deployment with managed lifecycle, drift detection, and resource cleanup on delete, replacing legacy scripts. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Blueprints for new initiatives.' },
        { id: 'b', text: 'A PowerShell DSC pull server.' },
        { id: 'c', text: 'Plain ARM templates with no state.' },
        { id: 'd', text: 'Bicep with deployment stacks for lifecycle and deny-delete settings.' },
      ],
      correctId: 'd',
      explanation:
        'Deployment stacks track managed resources, support deny settings, and clean up on delete. Blueprints is on the deprecation path with retirement scheduled for 2026.',
    },
    {
      id: 'az305-44',
      topic: 'Subscriptions',
      question:
        'A multinational has dev, test, and production workloads in three business units, each needing isolated billing scopes and separate quota. Which scope design fits?',
      options: [
        { id: 'a', text: 'A single subscription with resource groups for each BU and environment.' },
        { id: 'b', text: 'A single subscription per region only.' },
        { id: 'c', text: 'Separate subscriptions per BU and environment, organized under management groups.' },
        { id: 'd', text: 'One subscription per resource.' },
      ],
      correctId: 'c',
      explanation:
        'Per-BU per-environment subscriptions give isolated billing and quota and slot cleanly under management groups. A single shared subscription mixes quota and billing across BUs and environments.',
    },
    {
      id: 'az305-45',
      topic: 'Monitoring',
      question:
        'A SOC team must correlate Azure activity with Microsoft 365 audit logs, threat intel, and on-premises firewall logs. Which platform fits?',
      options: [
        { id: 'a', text: 'Microsoft Sentinel on a Log Analytics workspace.' },
        { id: 'b', text: 'Azure Monitor metrics dashboards only.' },
        { id: 'c', text: 'Application Insights.' },
        { id: 'd', text: 'Azure Service Health alerts.' },
      ],
      correctId: 'a',
      explanation:
        'Sentinel is the cloud-native SIEM with Microsoft 365, threat intel, and syslog connectors. Azure Monitor metrics has no SIEM correlation or threat intel ingestion.',
    },
    {
      id: 'az305-46',
      topic: 'Data Storage',
      question:
        'A workload needs SQL Server 2019 Enterprise with full OS-level access for a third-party agent that writes to the C: drive at runtime. Which option fits?',
      options: [
        { id: 'a', text: 'Azure SQL Database.' },
        { id: 'b', text: 'Azure SQL Managed Instance.' },
        { id: 'c', text: 'SQL Server on an Azure Virtual Machine.' },
        { id: 'd', text: 'Azure Synapse dedicated SQL pool.' },
      ],
      correctId: 'c',
      explanation:
        'SQL Server on a VM is the only option that gives full OS access for agents writing to local disks. Managed Instance is PaaS and does not expose the underlying OS.',
    },
    {
      id: 'az305-47',
      topic: 'Cosmos DB',
      question:
        'A team migrates an existing MongoDB application and wants minimal driver changes, server-side aggregation, and managed scale on Azure. Which API fits?',
      options: [
        { id: 'a', text: 'Cosmos DB for NoSQL.' },
        { id: 'b', text: 'Cosmos DB for Gremlin.' },
        { id: 'c', text: 'Cosmos DB for Cassandra.' },
        { id: 'd', text: 'Cosmos DB for MongoDB.' },
      ],
      correctId: 'd',
      explanation:
        'The MongoDB API supports existing drivers and aggregation operators with minimal changes. The NoSQL API would need a rewrite to its SDK.',
    },
    {
      id: 'az305-48',
      topic: 'Storage',
      question:
        'A client uploads 30 TB of historical data once and rarely accesses it, but needs occasional reads within minutes. Which lifecycle policy fits?',
      options: [
        { id: 'a', text: 'Keep all blobs in Hot tier indefinitely.' },
        { id: 'b', text: 'Move blobs to Archive after upload.' },
        { id: 'c', text: 'Move blobs to Cool after 30 days, keep them readable.' },
        { id: 'd', text: 'Delete blobs after 90 days.' },
      ],
      correctId: 'c',
      explanation:
        'Cool tier balances low storage cost with millisecond access for occasional reads. Archive tier requires hours to rehydrate, missing the minutes-to-read goal.',
    },
    {
      id: 'az305-49',
      topic: 'Business Continuity',
      question:
        'A retailer wants Azure Backup for VMs that survives ransomware attacks even when admin credentials are compromised. Which feature combination fits?',
      options: [
        { id: 'a', text: 'Soft delete on the Recovery Services vault.' },
        { id: 'b', text: 'Storage account snapshots with no vault.' },
        { id: 'c', text: 'Vault with public network access and a single admin.' },
        { id: 'd', text: 'Immutable vault with multi-user authorization (MUA) and soft delete.' },
      ],
      correctId: 'd',
      explanation:
        'Immutable vault prevents recovery point deletion, MUA blocks malicious admin actions, and soft delete adds a recovery window. Soft delete alone can still be bypassed by privileged users.',
    },
    {
      id: 'az305-50',
      topic: 'Networking',
      question:
        'A company has two regions of Azure spokes and wants ExpressRoute circuits in each region to reach all spokes globally during failover, with carrier interconnect. Which feature fits?',
      options: [
        { id: 'a', text: 'ExpressRoute Local SKU.' },
        { id: 'b', text: 'Site-to-site VPN.' },
        { id: 'c', text: 'ExpressRoute Global Reach between circuits.' },
        { id: 'd', text: 'VNet peering only.' },
      ],
      correctId: 'c',
      explanation:
        'Global Reach links ExpressRoute circuits across regions so on-premises traffic flows across the Microsoft backbone. ExpressRoute Local is intentionally limited to the local metro.',
    },
    {
      id: 'az305-51',
      topic: 'Compute',
      question:
        'A data science team runs short, parallel batch jobs that finish in minutes and want low cost with tolerance for eviction. Which compute option fits?',
      options: [
        { id: 'a', text: 'Spot Virtual Machine Scale Sets with eviction policy Deallocate.' },
        { id: 'b', text: 'Reserved Instances on Premium VMs.' },
        { id: 'c', text: 'Azure Functions on the Premium plan.' },
        { id: 'd', text: 'AKS with on-demand node pool only.' },
      ],
      correctId: 'a',
      explanation:
        'Spot VMSS provides large discounts for interruptible parallel batch jobs. Reserved Instances on Premium target steady, predictable workloads, missing the cost goal.',
    },
    {
      id: 'az305-52',
      topic: 'AKS',
      question:
        'An AKS cluster will host platform components and many tenant workloads, and the platform team wants to keep system pods isolated on dedicated nodes. Which design fits?',
      options: [
        { id: 'a', text: 'A single node pool sized for both system and user workloads.' },
        { id: 'b', text: 'Virtual Nodes only.' },
        { id: 'c', text: 'Two separate AKS clusters with mirrored deployments.' },
        { id: 'd', text: 'A system node pool plus separate user node pools with taints and tolerations.' },
      ],
      correctId: 'd',
      explanation:
        'A system pool plus tainted user pools isolates platform pods and lets tenants scale independently. A single mixed pool risks system pods being evicted by greedy user workloads.',
    },
    {
      id: 'az305-53',
      topic: 'AKS',
      question:
        'An AKS cluster needs many pods per node, integration with existing VNet IP plans, and direct routing without per-pod VNet IPs. Which network plugin fits?',
      options: [
        { id: 'a', text: 'Kubenet.' },
        { id: 'b', text: 'Azure CNI Overlay.' },
        { id: 'c', text: 'Azure CNI with full VNet integration for every pod.' },
        { id: 'd', text: 'Host networking only.' },
      ],
      correctId: 'b',
      explanation:
        'Azure CNI Overlay assigns pods IPs from an overlay CIDR while nodes sit in the VNet, conserving IP space. Full Azure CNI consumes a VNet IP per pod, exhausting the existing plan.',
    },
    {
      id: 'az305-54',
      topic: 'Migration',
      question:
        'A team wants a Kubernetes platform that spans Azure, on-premises, and AWS with consistent policy and GitOps deployments managed centrally. Which approach fits?',
      options: [
        { id: 'a', text: 'AKS only, with separate clusters per location.' },
        { id: 'b', text: 'Azure Arc-enabled Kubernetes with Azure Policy and Flux.' },
        { id: 'c', text: 'Azure Stack Hub.' },
        { id: 'd', text: 'Manual kubectl per cluster.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Arc onboards external Kubernetes clusters, lets Azure Policy and Flux manage them centrally. AKS-only does not cover non-Azure clusters at all.',
    },
    {
      id: 'az305-55',
      topic: 'Networking',
      question:
        'An organization has 10 VNets that all need to resolve internal records like db.contoso.local across the network, including from on-premises. Which design fits?',
      options: [
        { id: 'a', text: 'Per-VNet Azure DNS zones with no link.' },
        { id: 'b', text: 'A central Azure Private DNS zone linked to all VNets, with conditional forwarders on-prem.' },
        { id: 'c', text: 'Public DNS records on the corporate domain.' },
        { id: 'd', text: 'Hosts files on each VM.' },
      ],
      correctId: 'b',
      explanation:
        'A linked Azure Private DNS zone gives consistent internal resolution across VNets and works with on-prem forwarders. Per-VNet zones break shared resolution and create drift.',
    },
    {
      id: 'az305-56',
      topic: 'Integration',
      question:
        'A finance app needs message-based decoupling with sessions for order grouping, dead-letter queues, and transaction support. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Event Grid.' },
        { id: 'c', text: 'Azure Event Hubs.' },
        { id: 'd', text: 'Azure Service Bus Premium with topics and sessions.' },
      ],
      correctId: 'd',
      explanation:
        'Service Bus Premium supports sessions, dead-letter, and transactions for enterprise messaging. Event Hubs and Event Grid serve event streaming and routing, not transactional messaging.',
    },
    {
      id: 'az305-57',
      topic: 'Application Security',
      question:
        'A regional internal app on App Services in West Europe needs WAF protection and internal-only access from corporate VNets. Which design fits?',
      options: [
        { id: 'a', text: 'Azure Front Door Premium.' },
        { id: 'b', text: 'Application Gateway with WAF v2 in internal mode in front of App Service with private endpoint.' },
        { id: 'c', text: 'Public App Service with IP allow list only.' },
        { id: 'd', text: 'Azure Firewall in front of App Service.' },
      ],
      correctId: 'b',
      explanation:
        'Internal Application Gateway with WAF plus a private endpoint keeps the app reachable only inside the VNet. Front Door is global edge and aimed at public traffic, not internal-only apps.',
    },
    {
      id: 'az305-58',
      topic: 'Data Storage',
      question:
        'A team needs a managed data lake with hierarchical namespace, ACL-based access, and tight integration with Spark and Synapse. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Files Premium.' },
        { id: 'b', text: 'Azure Blob Storage without HNS.' },
        { id: 'c', text: 'Azure Disk Storage.' },
        { id: 'd', text: 'Azure Data Lake Storage Gen2.' },
      ],
      correctId: 'd',
      explanation:
        'ADLS Gen2 enables HNS, POSIX-style ACLs, and is the recommended store for Synapse and Databricks. Blob without HNS lacks directory-level ACLs and POSIX semantics.',
    },
    {
      id: 'az305-59',
      topic: 'Cosmos DB',
      question:
        'A globally distributed app must accept writes in any region and resolve conflicts deterministically with a custom rule. Which Cosmos DB feature fits?',
      options: [
        { id: 'a', text: 'Single-region writes with manual failover.' },
        { id: 'b', text: 'Multi-region writes with last-writer-wins by default, or a custom conflict resolution policy.' },
        { id: 'c', text: 'Strong consistency across regions.' },
        { id: 'd', text: 'Eventual consistency only.' },
      ],
      correctId: 'b',
      explanation:
        'Multi-region writes with a custom conflict resolution path or stored procedure deliver deterministic outcomes. Single-region writes do not satisfy "writes in any region".',
    },
    {
      id: 'az305-60',
      topic: 'Business Continuity',
      question:
        'A workload must define an RPO of 0 with no data loss, even during a primary failure. Which architectural choice fits?',
      options: [
        { id: 'a', text: 'Asynchronous geo-replication.' },
        { id: 'b', text: 'Synchronous replication across availability zones with quorum.' },
        { id: 'c', text: 'Daily backups.' },
        { id: 'd', text: 'Snapshots every 6 hours.' },
      ],
      correctId: 'b',
      explanation:
        'Synchronous replication across zones writes to all replicas before acknowledging, giving RPO 0 within a region. Asynchronous geo-replication always carries some lag and cannot meet RPO 0.',
    },
    {
      id: 'az305-61',
      topic: 'Identity Design',
      question:
        'A SaaS provider wants to publish an API that customer applications can call using their own Entra identities, with delegated user permissions. Which design fits?',
      options: [
        { id: 'a', text: 'Register the API in Entra and expose scopes consumed by client apps via OAuth 2.0 delegated flows.' },
        { id: 'b', text: 'Distribute API keys to each customer.' },
        { id: 'c', text: 'Allow anonymous calls and verify the JWT signature offline.' },
        { id: 'd', text: 'Issue a service principal per customer with shared secrets.' },
      ],
      correctId: 'a',
      explanation:
        'Registering the API and exposing scopes lets clients use OAuth 2.0 with the user context. API keys lose the user identity and are weaker for audit and revocation.',
    },
    {
      id: 'az305-62',
      topic: 'Governance',
      question:
        'A team needs a custom RBAC role that allows starting and stopping VMs but not modifying disks, scoped to a single resource group. Which approach fits?',
      options: [
        { id: 'a', text: 'Assign the built-in Virtual Machine Contributor role.' },
        { id: 'b', text: 'Use Conditional Access policies.' },
        { id: 'c', text: 'Grant Owner on the subscription.' },
        { id: 'd', text: 'Define a custom role with Microsoft.Compute virtualMachines start and deallocate actions, scoped to the resource group.' },
      ],
      correctId: 'd',
      explanation:
        'A custom RBAC role with only the start and deallocate actions enforces least privilege at the resource group scope. VM Contributor is broader and includes disk and network operations.',
    },
    {
      id: 'az305-63',
      topic: 'Cost Management',
      question:
        'A company tags all resources with Application and Environment but reports show 40% of costs untagged. Which control fits to enforce tagging going forward?',
      options: [
        { id: 'a', text: 'Manual review by the FinOps team.' },
        { id: 'b', text: 'Azure Policy with Modify and Deny effects to inherit and require tags at deployment.' },
        { id: 'c', text: 'Resource locks on every resource group.' },
        { id: 'd', text: 'A naming convention only.' },
      ],
      correctId: 'b',
      explanation:
        'Modify can inherit tags from resource groups, and Deny blocks resources missing required tags. Manual review and naming conventions are detective and easy to bypass.',
    },
    {
      id: 'az305-64',
      topic: 'Monitoring',
      question:
        'A platform team wants alert noise reduced by grouping alerts on the same VM CPU spike into a single notification, with action group routing to PagerDuty. Which capability fits?',
      options: [
        { id: 'a', text: 'Smart groups in Azure Monitor with action groups.' },
        { id: 'b', text: 'Activity Log alerts only.' },
        { id: 'c', text: 'Per-resource diagnostic settings.' },
        { id: 'd', text: 'Service Health alerts.' },
      ],
      correctId: 'a',
      explanation:
        'Smart groups cluster related alerts and action groups handle routing to tools like PagerDuty. Diagnostic settings collect logs but do not group alerts.',
    },
    {
      id: 'az305-65',
      topic: 'Cosmos DB',
      question:
        'A graph workload models relationships between users, products, and orders with traversals like recommendations. Which Cosmos DB API fits?',
      options: [
        { id: 'a', text: 'Cosmos DB for NoSQL.' },
        { id: 'b', text: 'Cosmos DB for Table.' },
        { id: 'c', text: 'Cosmos DB for Gremlin.' },
        { id: 'd', text: 'Cosmos DB for Cassandra.' },
      ],
      correctId: 'c',
      explanation:
        'The Gremlin API is built for graph traversals across vertices and edges. NoSQL stores documents and would force inefficient lookups for graph queries.',
    },
    {
      id: 'az305-66',
      topic: 'Open-source DB',
      question:
        'A MySQL workload needs read scaling for analytics with up to 5 read replicas across regions and a primary in West Europe. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Database for MySQL Single Server with replicas.' },
        { id: 'b', text: 'Azure SQL Database.' },
        { id: 'c', text: 'MySQL on a single VM.' },
        { id: 'd', text: 'Azure Database for MySQL Flexible Server with read replicas, including cross-region.' },
      ],
      correctId: 'd',
      explanation:
        'Flexible Server supports up to 10 read replicas, including cross-region, and is the current investment path. Single Server is on the deprecation path with limited replica options.',
    },
    {
      id: 'az305-67',
      topic: 'Search',
      question:
        'A documentation portal wants vector search and semantic ranking across 10 million pages with filters by language and product. Which service fits?',
      options: [
        { id: 'a', text: 'Azure SQL Full-Text Search.' },
        { id: 'b', text: 'Azure Cognitive Search (Azure AI Search) with vector indexes and semantic ranking.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Storage Blob Index Tags only.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Search supports vector search, semantic ranking, and faceted filters at scale. SQL FTS lacks vector and semantic ranking required for modern search.',
    },
    {
      id: 'az305-68',
      topic: 'Data Factory',
      question:
        'A nightly pipeline copies data from on-premises SQL Server, transforms it with Spark, and loads it into a Synapse dedicated pool. Which orchestration fits?',
      options: [
        { id: 'a', text: 'Azure Functions on a timer.' },
        { id: 'b', text: 'Azure Data Factory pipelines with self-hosted integration runtime and a Spark activity.' },
        { id: 'c', text: 'Logic Apps Consumption.' },
        { id: 'd', text: 'A Windows scheduled task.' },
      ],
      correctId: 'b',
      explanation:
        'ADF pipelines schedule, orchestrate hybrid sources via SHIR, and integrate with Spark and Synapse loads. Functions and Logic Apps are not built for large data movement and complex transforms.',
    },
    {
      id: 'az305-69',
      topic: 'Business Continuity',
      question:
        'A team must protect Azure Files shares with a 1-hour RPO and store backups in a separate fault domain. Which option fits?',
      options: [
        { id: 'a', text: 'Storage account snapshots only.' },
        { id: 'b', text: 'Azure Backup vaulted backup for Azure Files in a Backup vault with hourly schedule.' },
        { id: 'c', text: 'Manual robocopy.' },
        { id: 'd', text: 'GRS replication on the storage account.' },
      ],
      correctId: 'b',
      explanation:
        'Backup vault with vaulted backup keeps copies isolated from the source storage account with hourly schedules. GRS replicates the source but does not isolate backups from the source account.',
    },
    {
      id: 'az305-70',
      topic: 'Networking',
      question:
        'A platform exposes 30 internal APIs to external partners and needs rate limiting, OAuth validation, and a developer portal. Which service fits?',
      options: [
        { id: 'a', text: 'Azure API Management Standard or Premium tier.' },
        { id: 'b', text: 'Azure Application Gateway alone.' },
        { id: 'c', text: 'Azure Front Door without WAF.' },
        { id: 'd', text: 'A custom NGINX gateway on a VM.' },
      ],
      correctId: 'a',
      explanation:
        'API Management gives policies for rate limiting, OAuth, and a built-in developer portal. Application Gateway handles L7 routing but lacks API policies and a portal.',
    },
    {
      id: 'az305-71',
      topic: 'Compute',
      question:
        'A workload runs a workflow that waits hours between steps, must scale to thousands of concurrent runs, and uses many enterprise connectors. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Logic Apps Standard.' },
        { id: 'b', text: 'Azure Functions on Consumption.' },
        { id: 'c', text: 'Azure App Service.' },
        { id: 'd', text: 'AKS with custom code.' },
      ],
      correctId: 'a',
      explanation:
        'Logic Apps Standard supports stateful long-running workflows with hundreds of connectors and predictable scaling. Functions Consumption has execution-time limits unsuitable for hour-long waits.',
    },
    {
      id: 'az305-72',
      topic: 'AKS',
      question:
        'An AKS team wants ingress that supports both HTTP/2 and gRPC with managed certificates from Key Vault and integration with Azure WAF. Which option fits?',
      options: [
        { id: 'a', text: 'NGINX in-cluster only.' },
        { id: 'b', text: 'Azure Front Door routing per pod.' },
        { id: 'c', text: 'Application Gateway Ingress Controller (AGIC) on AKS.' },
        { id: 'd', text: 'Public LoadBalancer service per pod.' },
      ],
      correctId: 'c',
      explanation:
        'AGIC integrates Application Gateway with AKS, includes WAF and Key Vault TLS support. NGINX in-cluster does not give native Azure WAF integration.',
    },
    {
      id: 'az305-73',
      topic: 'Migration',
      question:
        'A team plans to move an on-premises monolith to Azure and split it into services later, accepting some technical debt now. Which strategy fits the first move?',
      options: [
        { id: 'a', text: 'Lift-and-shift to Azure VMs (rehost).' },
        { id: 'b', text: 'Refactor to microservices on AKS first.' },
        { id: 'c', text: 'Rewrite from scratch as serverless.' },
        { id: 'd', text: 'Retire the application.' },
      ],
      correctId: 'a',
      explanation:
        'Rehost moves the workload quickly with little code change and preserves the option to refactor later. Refactoring or rewriting first delays the move and concentrates risk.',
    },
    {
      id: 'az305-74',
      topic: 'Hybrid',
      question:
        'A bank runs Azure services in its own data center for data sovereignty and wants the same Azure portal experience and consistent APIs. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Stack Hub.' },
        { id: 'b', text: 'Azure Stack HCI.' },
        { id: 'c', text: 'Azure Arc only.' },
        { id: 'd', text: 'Azure Local for printers.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Stack Hub runs Azure services on-premises with a consistent portal and APIs. Azure Stack HCI is a hyperconverged platform without the full Azure services portal.',
    },
    {
      id: 'az305-75',
      topic: 'Networking',
      question:
        'A service consumed by VMs in a peered VNet must reach an Azure Storage account privately, blocking all public traffic. Which feature fits?',
      options: [
        { id: 'a', text: 'Service endpoint on the storage account only.' },
        { id: 'b', text: 'Anonymous container access.' },
        { id: 'c', text: 'A storage firewall allow list of public IPs.' },
        { id: 'd', text: 'Private endpoint for the storage account with private DNS zone linked to all VNets, plus public network access disabled.' },
      ],
      correctId: 'd',
      explanation:
        'Private endpoints place the storage account on the VNet with a private IP, and disabling public access closes the public path. Service endpoints still use the public IP and do not block public access by themselves.',
    },
    {
      id: 'az305-76',
      topic: 'Integration',
      question:
        'A retail platform needs to fan out a single OrderPlaced event to dozens of downstream consumers with low cost and pay-per-event billing. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Event Grid with topic and event subscriptions.' },
        { id: 'b', text: 'Azure Service Bus topics.' },
        { id: 'c', text: 'Azure Event Hubs.' },
        { id: 'd', text: 'Azure Storage Queue.' },
      ],
      correctId: 'a',
      explanation:
        'Event Grid is built for fan-out routing and bills per operation with low cost. Service Bus topics also fan out but bill on a tier basis and target transactional messaging.',
    },
    {
      id: 'az305-77',
      topic: 'Identity Design',
      question:
        'A development workload needs to call multiple Azure services using the same identity across many VMs and AKS pods, and that identity must be reusable. Which option fits?',
      options: [
        { id: 'a', text: 'A user-assigned managed identity attached to all VMs and pods.' },
        { id: 'b', text: 'A separate system-assigned identity per VM.' },
        { id: 'c', text: 'A single shared service principal with a client secret.' },
        { id: 'd', text: 'Anonymous calls with Storage SAS tokens.' },
      ],
      correctId: 'a',
      explanation:
        'A user-assigned managed identity exists independently and can be attached to many resources. System-assigned identities are tied to a single resource lifecycle.',
    },
    {
      id: 'az305-78',
      topic: 'Authentication',
      question:
        'An IT team wants to require approval before activating a high-risk Azure role and limit activation to 4 hours. Which Entra feature fits?',
      options: [
        { id: 'a', text: 'Conditional Access only.' },
        { id: 'b', text: 'Privileged Identity Management with maximum activation duration and approval.' },
        { id: 'c', text: 'Standing role assignment with MFA.' },
        { id: 'd', text: 'Custom RBAC role.' },
      ],
      correctId: 'b',
      explanation:
        'PIM enforces approvals, time-bounded activation, and audit on role activation. Conditional Access alone does not control role activation duration or approval.',
    },
    {
      id: 'az305-79',
      topic: 'Governance',
      question:
        'A platform team must publish a versioned, parameterized template that workload teams deploy themselves with built-in approved settings. Which option fits?',
      options: [
        { id: 'a', text: 'Template specs published with versioning, consumed via Bicep or ARM.' },
        { id: 'b', text: 'Plain ARM templates copied into each repo.' },
        { id: 'c', text: 'A wiki page with deployment commands.' },
        { id: 'd', text: 'Resource Manager exports.' },
      ],
      correctId: 'a',
      explanation:
        'Template specs offer versioning, RBAC, and parameter contracts for shared templates. Copying templates into each repo causes drift and breaks central updates.',
    },
    {
      id: 'az305-80',
      topic: 'Monitoring',
      question:
        'A workload runs across 20 subscriptions and monitoring must support cross-subscription Kusto queries and shared workbooks. Which design fits?',
      options: [
        { id: 'a', text: 'A workspace per subscription with no cross-query.' },
        { id: 'b', text: 'A central Log Analytics workspace receiving diagnostic logs from all subscriptions, with cross-subscription RBAC.' },
        { id: 'c', text: 'Separate Application Insights per resource without workspaces.' },
        { id: 'd', text: 'CSV exports merged manually.' },
      ],
      correctId: 'b',
      explanation:
        'A central workspace makes Kusto queries and workbooks span subscriptions natively. Per-subscription workspaces force union queries and break cross-subscription RBAC.',
    },
    {
      id: 'az305-81',
      topic: 'Data Storage',
      question:
        'A reporting workload runs nightly heavy aggregations against a 5 TB dataset that does not change during the day, and queries must complete in minutes. Which service fits?',
      options: [
        { id: 'a', text: 'Azure SQL Database General Purpose.' },
        { id: 'b', text: 'Azure Synapse dedicated SQL pool.' },
        { id: 'c', text: 'Azure Cosmos DB for NoSQL.' },
        { id: 'd', text: 'Azure Database for MySQL.' },
      ],
      correctId: 'b',
      explanation:
        'Synapse dedicated SQL pool is built for MPP analytics on large datasets. SQL Database General Purpose is OLTP and not optimized for multi-TB aggregations.',
    },
    {
      id: 'az305-82',
      topic: 'Cosmos DB',
      question:
        'A team wants to use existing Azure Storage Table SDKs but with global distribution and multi-region writes for higher availability. Which API fits?',
      options: [
        { id: 'a', text: 'Cosmos DB for NoSQL.' },
        { id: 'b', text: 'Azure Storage Tables alone.' },
        { id: 'c', text: 'Cosmos DB for MongoDB.' },
        { id: 'd', text: 'Cosmos DB for Table.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB for Table keeps Table SDK compatibility and adds global distribution and multi-region writes. Storage Tables alone do not give multi-region writes.',
    },
    {
      id: 'az305-83',
      topic: 'Storage',
      question:
        'A company wants object replication of blobs from one region to another with no application changes and per-container rules. Which feature fits?',
      options: [
        { id: 'a', text: 'Azure Storage object replication policies between source and destination accounts.' },
        { id: 'b', text: 'Azure Backup of the storage account.' },
        { id: 'c', text: 'Manual AzCopy on a schedule.' },
        { id: 'd', text: 'AzureRM template redeploy.' },
      ],
      correctId: 'a',
      explanation:
        'Object replication is the built-in feature for asynchronous blob replication with per-container rules. Manual AzCopy works but is not native and lacks rule granularity.',
    },
    {
      id: 'az305-84',
      topic: 'Business Continuity',
      question:
        'A team designs a Cosmos DB DR plan with active-active writes in two regions and an SLA on availability of 99.999%. Which configuration fits?',
      options: [
        { id: 'a', text: 'Single-region writes with manual failover.' },
        { id: 'b', text: 'Eventual consistency in single region.' },
        { id: 'c', text: 'Strong consistency in all regions.' },
        { id: 'd', text: 'Multi-region writes enabled with two write regions and automatic failover.' },
      ],
      correctId: 'd',
      explanation:
        'Multi-region writes hit the 99.999% availability SLA and survive a regional write failure. Strong consistency forces single-region writes and lowers the availability target.',
    },
    {
      id: 'az305-85',
      topic: 'Data Movement',
      question:
        'A team already runs Synapse Analytics for big data and needs ELT pipelines integrated with the same workspace and managed identity. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Synapse Pipelines inside the Synapse workspace.' },
        { id: 'b', text: 'Standalone Azure Data Factory in another resource group.' },
        { id: 'c', text: 'Custom Spark scripts on AKS.' },
        { id: 'd', text: 'SSIS on a VM.' },
      ],
      correctId: 'a',
      explanation:
        'Synapse Pipelines share the workspace, identity, and security model with Synapse engines. A standalone ADF works but duplicates orchestration outside the unified workspace.',
    },
    {
      id: 'az305-86',
      topic: 'Networking',
      question:
        'A hub-and-spoke network must route all spoke-to-spoke and spoke-to-internet traffic through a central firewall. Which design fits?',
      options: [
        { id: 'a', text: 'Spoke VNets peered to each other directly.' },
        { id: 'b', text: 'A hub VNet with Azure Firewall and User Defined Routes on spokes pointing to the firewall.' },
        { id: 'c', text: 'NSG rules at the spoke level only.' },
        { id: 'd', text: 'Public IPs on all spoke VMs.' },
      ],
      correctId: 'b',
      explanation:
        'UDRs on spokes plus a hub firewall force traffic through the inspection point. Direct spoke-to-spoke peering bypasses the firewall entirely.',
    },
    {
      id: 'az305-87',
      topic: 'Compute',
      question:
        'A team must run a backend web API with up to 20 deployment slots, integrated VNet, and managed TLS, without operating containers. Which service fits?',
      options: [
        { id: 'a', text: 'Azure App Service Premium v3.' },
        { id: 'b', text: 'Azure Functions Consumption.' },
        { id: 'c', text: 'Azure Virtual Machines with IIS.' },
        { id: 'd', text: 'AKS with Helm.' },
      ],
      correctId: 'a',
      explanation:
        'App Service Premium v3 supports up to 20 deployment slots per app (the maximum for Premium and Isolated tiers), VNet integration, and managed TLS without containers. Functions Consumption allows only 2 slots total and has cold-start trade-offs.',
    },
    {
      id: 'az305-88',
      topic: 'AKS',
      question:
        'An AKS cluster must scale node count automatically based on pending pod resource requests and remove nodes when underused. Which capability fits?',
      options: [
        { id: 'a', text: 'Horizontal Pod Autoscaler only.' },
        { id: 'b', text: 'Cluster autoscaler at the node pool level.' },
        { id: 'c', text: 'Vertical Pod Autoscaler only.' },
        { id: 'd', text: 'Manual scaling.' },
      ],
      correctId: 'b',
      explanation:
        'Cluster autoscaler adds and removes nodes based on unschedulable pods and underutilization. HPA scales pods, not nodes, so it cannot add capacity when no nodes have room.',
    },
    {
      id: 'az305-89',
      topic: 'Security Design',
      question:
        'A finance app must encrypt at-rest data with keys the customer controls and rotates, while keeping Azure-managed services. Which feature fits?',
      options: [
        { id: 'a', text: 'Microsoft-managed keys only.' },
        { id: 'b', text: 'Customer-managed keys (CMK) in Azure Key Vault with rotation policies.' },
        { id: 'c', text: 'Application-level encryption only.' },
        { id: 'd', text: 'Disk passphrase per VM.' },
      ],
      correctId: 'b',
      explanation:
        'CMK in Key Vault gives the customer control of key lifecycle and rotation while staying on PaaS. Microsoft-managed keys do not satisfy customer key control requirements.',
    },
    {
      id: 'az305-90',
      topic: 'Cost Optimization',
      question:
        'A workload has steady production load plus dev and test environments that run only during business hours. Which combination saves the most without operational risk?',
      options: [
        { id: 'a', text: 'Reserved Instances for production plus auto-shutdown and dev/test pricing for non-prod.' },
        { id: 'b', text: 'Spot VMs for production.' },
        { id: 'c', text: 'Pay-as-you-go for everything.' },
        { id: 'd', text: 'Reserved Instances on every VM, including dev and test.' },
      ],
      correctId: 'a',
      explanation:
        'Reservations target steady prod, while auto-shutdown and dev/test pricing optimize variable non-prod usage. Reservations on every VM lock spend on environments that should run intermittently.',
    },
    {
      id: 'az305-91',
      topic: 'Identity Design',
      question:
        'A B2B partner sends 5,000 collaborators who only need to use one specific app. The partner wants to keep ownership of the user accounts. Which approach fits?',
      options: [
        { id: 'a', text: 'Bulk create local accounts in the host tenant.' },
        { id: 'b', text: 'Cross-tenant access settings combined with B2B inbound trust and access reviews.' },
        { id: 'c', text: 'Federation with the partner ADFS.' },
        { id: 'd', text: 'Disable Conditional Access for the app.' },
      ],
      correctId: 'b',
      explanation:
        'B2B with cross-tenant access settings keeps user lifecycle in the partner tenant and access reviews tighten governance. Local accounts shift lifecycle to the host tenant, which the partner does not want.',
    },
    {
      id: 'az305-92',
      topic: 'Authentication',
      question:
        'A bank requires phishing-resistant authentication for all admins accessing the Azure portal. Which Entra design fits?',
      options: [
        { id: 'a', text: 'SMS-based MFA.' },
        { id: 'b', text: 'Conditional Access requiring authentication strength of FIDO2 or certificate-based authentication.' },
        { id: 'c', text: 'Per-user MFA with email codes.' },
        { id: 'd', text: 'Security questions.' },
      ],
      correctId: 'b',
      explanation:
        'FIDO2 and CBA are phishing-resistant methods that authentication strengths can mandate via Conditional Access. SMS and email codes are not phishing-resistant per Microsoft guidance.',
    },
    {
      id: 'az305-93',
      topic: 'Monitoring',
      question:
        'A SOC team needs to retain Sentinel data for 7 years for audit while controlling costs by archiving older records. Which approach fits?',
      options: [
        { id: 'a', text: 'Keep recent data in Analytics tier and move older records to Log Analytics archive tier with search jobs as needed.' },
        { id: 'b', text: 'Keep all data in Analytics tier for 7 years.' },
        { id: 'c', text: 'Export to a public storage account.' },
        { id: 'd', text: 'Disable retention beyond 90 days.' },
      ],
      correctId: 'a',
      explanation:
        'Archive tier lowers retention cost while search jobs and restore allow audit access. Analytics-tier-only retention for 7 years is the most expensive option.',
    },
    {
      id: 'az305-94',
      topic: 'Governance',
      question:
        'An organization wants every new resource group in the corp management group to receive a baseline of policies and a standard set of resources via a single, lifecycle-managed deployment. Which option fits?',
      options: [
        { id: 'a', text: 'Azure Blueprints (new initiatives).' },
        { id: 'b', text: 'Bicep with deployment stacks plus a policy initiative assigned at the management group.' },
        { id: 'c', text: 'Manual portal deployment.' },
        { id: 'd', text: 'PowerShell DSC pull server.' },
      ],
      correctId: 'b',
      explanation:
        'Deployment stacks manage lifecycle and deny-delete on resources, while policy at the management group enforces baseline rules. Blueprints is on the deprecation path with retirement scheduled for 2026.',
    },
    {
      id: 'az305-95',
      topic: 'Networking',
      question:
        'A SaaS team exposes a global API from origins in three regions and wants regional health probes, automatic failover, and per-path caching at the edge. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Front Door Standard or Premium.' },
        { id: 'b', text: 'Application Gateway in each region only.' },
        { id: 'c', text: 'Azure Load Balancer Standard.' },
        { id: 'd', text: 'Azure DNS with no health probes.' },
      ],
      correctId: 'a',
      explanation:
        'Front Door does global anycast routing, health probes, automatic failover, and edge caching. Application Gateway is regional and does not provide global anycast or edge caching.',
    },
    {
      id: 'az305-96',
      topic: 'Compute',
      question:
        'A workload requires ultra-low latency between AKS pods and a SQL Managed Instance, both placed in the same VNet. Which subnet design fits?',
      options: [
        { id: 'a', text: 'AKS subnet and SQL MI delegated subnet in the same VNet, with NSGs allowing required ports.' },
        { id: 'b', text: 'AKS in one VNet and SQL MI in a peered VNet across regions.' },
        { id: 'c', text: 'SQL MI accessed only via public endpoint.' },
        { id: 'd', text: 'AKS subnet with the SQL MI service endpoint.' },
      ],
      correctId: 'a',
      explanation:
        'Same-region VNet placement with the SQL MI delegated subnet gives the lowest latency. Cross-region peering adds latency, and SQL MI does not use a service endpoint model.',
    },
    {
      id: 'az305-97',
      topic: 'Business Continuity',
      question:
        'A regional outage destroys a primary Azure SQL Database. The team accepts up to 5 minutes data loss and needs simple, automated failover for the application. Which design fits?',
      options: [
        { id: 'a', text: 'Active geo-replication with manual failover.' },
        { id: 'b', text: 'Auto-failover groups across two regions.' },
        { id: 'c', text: 'Backups restored to a secondary region.' },
        { id: 'd', text: 'Long-term retention.' },
      ],
      correctId: 'b',
      explanation:
        'Auto-failover groups automate failover and expose read/write listener endpoints so the application connection string does not change during a regional failure. Active geo-replication needs manual orchestration to fail over and update connection strings. Note that geo-replication is asynchronous, so RPO is not guaranteed to be a fixed number of seconds — it depends on replication lag at the moment of failure. The 5-minute data-loss tolerance in this scenario is a realistic bound for typical geo-replication lag.',
    },
    {
      id: 'az305-98',
      topic: 'Data Storage',
      question:
        'A workload writes 200,000 small log files per minute and reads them back in batches. Which service fits the write rate and batch reads?',
      options: [
        { id: 'a', text: 'Azure Blob Storage with append blobs and lifecycle to Cool.' },
        { id: 'b', text: 'Azure SQL Database for log rows.' },
        { id: 'c', text: 'Azure Files Premium.' },
        { id: 'd', text: 'Azure Table Storage with one row per log line.' },
      ],
      correctId: 'a',
      explanation:
        'Append blobs are designed for high-rate log writes with batch reads and pair well with lifecycle tiers. SQL Database insert rates and per-row cost cannot match this throughput.',
    },
    {
      id: 'az305-99',
      topic: 'Compute',
      question:
        'A team migrates a Windows .NET Framework 4.7 web app and wants minimal code change, autoscaling, and managed TLS. Which platform fits?',
      options: [
        { id: 'a', text: 'AKS with Windows nodes.' },
        { id: 'b', text: 'Azure App Service for Windows.' },
        { id: 'c', text: 'Azure Container Apps.' },
        { id: 'd', text: 'Azure Functions on Linux.' },
      ],
      correctId: 'b',
      explanation:
        'App Service for Windows runs .NET Framework apps with managed TLS and autoscale, no rewrite required. AKS with Windows nodes works but adds container packaging and cluster ops.',
    },
    {
      id: 'az305-100',
      topic: 'Networking',
      question:
        'A retailer wants a defense-in-depth design with global edge WAF on public traffic and an additional regional WAF on internal east-west traffic between zones. Which combination fits?',
      options: [
        { id: 'a', text: 'Front Door Premium with WAF at the edge plus Application Gateway with WAF v2 inside the VNet.' },
        { id: 'b', text: 'Front Door alone for both layers.' },
        { id: 'c', text: 'Application Gateway alone for both layers.' },
        { id: 'd', text: 'Azure Firewall as the only L7 protection.' },
      ],
      correctId: 'a',
      explanation:
        'Front Door Premium covers global ingress and edge WAF, while Application Gateway WAF v2 inspects internal east-west traffic. Front Door alone has no internal WAF for east-west traffic.',
    },
  ],
}
