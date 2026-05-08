import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'One hundred practice questions at the level of the official AZ-900 exam. Cloud concepts, Azure architecture, core services, security, governance, and pricing.',
  ceCourseSlug: 'azure-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'az900-1',
      topic: 'Cloud Concepts',
      question:
        'A company wants to pay only for the compute it actually uses and wants to scale capacity up or down by the minute. Which cloud characteristic best describes this requirement?',
      options: [
        { id: 'a', text: 'Consumption-based pricing.' },
        { id: 'b', text: 'High availability.' },
        { id: 'c', text: 'Disaster recovery.' },
        { id: 'd', text: 'Fault tolerance.' },
      ],
      correctId: 'a',
      explanation:
        'Consumption-based, or pay-as-you-go, pricing charges only for actual usage, often by the minute or second. High availability is about uptime, not the cost model.',
    },
    {
      id: 'az900-2',
      topic: 'Cloud Models',
      question:
        'A development team wants to run a web application without managing the underlying VMs, OS patches, or web server configuration. Which service model fits?',
      options: [
        { id: 'a', text: 'Infrastructure as a Service (IaaS).' },
        { id: 'b', text: 'On-premises datacenter.' },
        { id: 'c', text: 'Platform as a Service (PaaS).' },
        { id: 'd', text: 'Co-location hosting.' },
      ],
      correctId: 'c',
      explanation:
        'PaaS provides a runtime platform where Microsoft handles the OS, patching, and the web server. With IaaS you still manage the OS and the web server yourself.',
    },
    {
      id: 'az900-3',
      topic: 'Azure Architecture',
      question:
        'Which statement about Azure regions and availability zones is correct?',
      options: [
        { id: 'a', text: 'An availability zone always contains at least three regions.' },
        {
          id: 'b',
          text: 'An availability zone is a physically separate datacenter inside a region with independent power, cooling, and networking.',
        },
        { id: 'c', text: 'Availability zones exist only in Azure Government, not in public regions.' },
        { id: 'd', text: 'Every region has exactly two availability zones.' },
      ],
      correctId: 'b',
      explanation:
        'An availability zone is a physically separate datacenter inside a region with its own power, cooling, and networking. Not every region has zones, and the count varies (typically three).',
    },
    {
      id: 'az900-4',
      topic: 'Azure Services',
      question:
        'You need to store an unstructured set of several hundred million video and image files at the lowest possible storage cost. Which service do you choose?',
      options: [
        { id: 'a', text: 'Azure SQL Database.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Cosmos DB.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'd',
      explanation:
        'Blob Storage is built for large volumes of unstructured data such as media and offers the lowest price per GB. Azure Files provides SMB and NFS shares at a higher per-GB price.',
    },
    {
      id: 'az900-5',
      topic: 'Identity',
      question:
        'Which Azure service do you use to manage user accounts and single sign-on for cloud applications?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID.' },
        { id: 'b', text: 'Azure Key Vault.' },
        { id: 'c', text: 'Azure Monitor.' },
        { id: 'd', text: 'Azure Policy.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (formerly Azure Active Directory) is the identity service for authentication and SSO. Key Vault stores secrets and certificates, not user accounts.',
    },
    {
      id: 'az900-6',
      topic: 'Governance',
      question:
        'A compliance team needs to enforce that all new storage accounts in a subscription are created only in West Europe. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Blueprints.' },
        { id: 'b', text: 'Microsoft Defender for Cloud.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy evaluates and blocks resources that fall outside a rule, for example an allowed-region rule. Defender for Cloud focuses on security posture, not on deployment rules.',
    },
    {
      id: 'az900-7',
      topic: 'Pricing',
      question:
        'Which tool gives an estimated monthly price for a combination of Azure resources before you create them?',
      options: [
        { id: 'a', text: 'Azure Pricing Calculator.' },
        { id: 'b', text: 'Azure Cost Management.' },
        { id: 'c', text: 'Azure Advisor.' },
        { id: 'd', text: 'Total Cost of Ownership Calculator.' },
      ],
      correctId: 'a',
      explanation:
        'The Pricing Calculator estimates cost for resources you have not yet deployed. Cost Management reports actual usage of existing resources. The TCO Calculator compares cloud and on-premises.',
    },
    {
      id: 'az900-8',
      topic: 'Networking',
      question:
        'Which service connects an on-premises network to Azure over a dedicated, private link without using the public internet?',
      options: [
        { id: 'a', text: 'VPN Gateway with point-to-site.' },
        { id: 'b', text: 'Azure ExpressRoute.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure Bastion.' },
      ],
      correctId: 'b',
      explanation:
        'ExpressRoute provides a private connection through a telecom partner; the traffic never touches the public internet. A VPN Gateway encrypts traffic that still travels over the public internet.',
    },
    {
      id: 'az900-9',
      topic: 'Security',
      question:
        'Which responsibility under the shared responsibility model always stays with the customer, regardless of the service model (IaaS, PaaS, or SaaS)?',
      options: [
        { id: 'a', text: 'Patching the host OS.' },
        { id: 'b', text: 'Operating the physical datacenters.' },
        { id: 'c', text: 'Protecting data, accounts, and endpoints.' },
        { id: 'd', text: 'Maintaining the virtualization platform.' },
      ],
      correctId: 'c',
      explanation:
        'Data, identities, and endpoints remain the customer\'s responsibility in every model. Microsoft always operates the physical layer and the virtualization platform.',
    },
    {
      id: 'az900-10',
      topic: 'SLAs and Lifecycle',
      question:
        'A resource is listed in Azure as "Preview". What does that mean for the service level agreement?',
      options: [
        { id: 'a', text: 'The preview gets the same 99.9% SLA as general availability.' },
        { id: 'b', text: 'Preview features get a higher SLA because they may still be unstable.' },
        { id: 'c', text: 'The SLA only applies if you have a Premium support plan.' },
        { id: 'd', text: 'Previews are not covered by a financial SLA and are not intended for production.' },
      ],
      correctId: 'd',
      explanation:
        'Preview services do not have a financial SLA and Microsoft advises against running them in production. The standard SLA applies once a service reaches general availability.',
    },
    {
      id: 'az900-11',
      topic: 'Cloud Concepts',
      question:
        'A retailer expects traffic to triple during a holiday weekend and drop back afterward. Which cloud benefit lets them add capacity for the spike and remove it once demand returns to normal?',
      options: [
        { id: 'a', text: 'Disaster recovery.' },
        { id: 'b', text: 'Elasticity.' },
        { id: 'c', text: 'Fault tolerance.' },
        { id: 'd', text: 'Geo-redundancy.' },
      ],
      correctId: 'b',
      explanation:
        'Elasticity is the ability to add and remove capacity in response to demand. Fault tolerance is about surviving component failures, which is a separate concern.',
    },
    {
      id: 'az900-12',
      topic: 'Cloud Concepts',
      question:
        'A team adds more CPU and RAM to a single VM to handle a heavier workload. Which scaling approach is this?',
      options: [
        { id: 'a', text: 'Horizontal scaling.' },
        { id: 'b', text: 'Auto-failover.' },
        { id: 'c', text: 'Vertical scaling.' },
        { id: 'd', text: 'Sharding.' },
      ],
      correctId: 'c',
      explanation:
        'Vertical scaling, or scaling up, increases the size of an existing instance. Horizontal scaling adds more instances of the same size.',
    },
    {
      id: 'az900-13',
      topic: 'Cost Models',
      question:
        'A finance director wants to move from large upfront server purchases to a monthly bill that varies with usage. Which shift does this describe?',
      options: [
        { id: 'a', text: 'From operational expense to capital expense.' },
        { id: 'b', text: 'From capital expense to operational expense.' },
        { id: 'c', text: 'From depreciation to amortization.' },
        { id: 'd', text: 'From fixed cost to sunk cost.' },
      ],
      correctId: 'b',
      explanation:
        'Buying servers is a capital expense (CapEx). Paying monthly for cloud usage is an operational expense (OpEx). The shift goes from CapEx to OpEx.',
    },
    {
      id: 'az900-14',
      topic: 'Service Models',
      question:
        'In which service model does the customer manage the operating system but not the physical hardware?',
      options: [
        { id: 'a', text: 'FaaS.' },
        { id: 'b', text: 'PaaS.' },
        { id: 'c', text: 'SaaS.' },
        { id: 'd', text: 'IaaS.' },
      ],
      correctId: 'd',
      explanation:
        'In IaaS, the provider runs the hardware and hypervisor while the customer patches and configures the guest OS. In PaaS the provider also manages the OS.',
    },
    {
      id: 'az900-15',
      topic: 'Azure Architecture',
      question:
        'Which Azure construct is a logical grouping that holds resources for a single application or environment and allows lifecycle management as a unit?',
      options: [
        { id: 'a', text: 'Subscription.' },
        { id: 'b', text: 'Region pair.' },
        { id: 'c', text: 'Resource group.' },
        { id: 'd', text: 'Management group.' },
      ],
      correctId: 'c',
      explanation:
        'A resource group is a logical container for resources that share a lifecycle. A subscription is a billing and security boundary that contains many resource groups.',
    },
    {
      id: 'az900-16',
      topic: 'Compute',
      question:
        'A team wants to run a small batch job that responds to a queue message and only pay for the milliseconds the code runs. Which compute service fits?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service.' },
        { id: 'b', text: 'Azure Virtual Machines.' },
        { id: 'c', text: 'Azure Functions.' },
        { id: 'd', text: 'Azure Batch.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Functions is a serverless platform billed per execution and execution time. A VM bills by the second it runs, even when idle.',
    },
    {
      id: 'az900-17',
      topic: 'Networking',
      question:
        'A company wants two virtual networks in the same region to communicate with each other privately and at low latency. Which feature do they configure?',
      options: [
        { id: 'a', text: 'Public Load Balancer.' },
        { id: 'b', text: 'Azure Front Door.' },
        { id: 'c', text: 'Azure Bastion.' },
        { id: 'd', text: 'VNet peering.' },
      ],
      correctId: 'd',
      explanation:
        'VNet peering connects two virtual networks so traffic flows over the Microsoft backbone privately. Front Door is a global HTTP entry point and is not a VNet-to-VNet link.',
    },
    {
      id: 'az900-18',
      topic: 'Storage',
      question:
        'Which Blob Storage access tier offers the lowest storage cost in exchange for the highest retrieval latency, often hours?',
      options: [
        { id: 'a', text: 'Hot.' },
        { id: 'b', text: 'Cool.' },
        { id: 'c', text: 'Cold.' },
        { id: 'd', text: 'Archive.' },
      ],
      correctId: 'd',
      explanation:
        'Archive has the lowest storage price and a rehydration time measured in hours. Cold is cheaper than Cool but still online with millisecond access.',
    },
    {
      id: 'az900-19',
      topic: 'Identity',
      question:
        'Which Microsoft Entra ID feature requires a second proof of identity, such as a phone prompt, in addition to a password?',
      options: [
        { id: 'a', text: 'Conditional Access.' },
        { id: 'b', text: 'Multi-factor authentication.' },
        { id: 'c', text: 'Self-service password reset.' },
        { id: 'd', text: 'Privileged Identity Management.' },
      ],
      correctId: 'b',
      explanation:
        'MFA requires more than one factor at sign-in. Conditional Access is the policy engine that decides when to require MFA, but the second factor itself is MFA.',
    },
    {
      id: 'az900-20',
      topic: 'Governance',
      question:
        'You want to prevent any user from accidentally deleting a critical production storage account, even an Owner. Which feature applies?',
      options: [
        { id: 'a', text: 'Azure Policy with deny effect.' },
        { id: 'b', text: 'A CanNotDelete resource lock.' },
        { id: 'c', text: 'A ReadOnly resource lock.' },
        { id: 'd', text: 'Tags marked "production".' },
      ],
      correctId: 'b',
      explanation:
        'A CanNotDelete lock blocks deletion for everyone, including Owners, until the lock is removed. A ReadOnly lock would also block updates, which is stricter than needed.',
    },
    {
      id: 'az900-21',
      topic: 'Cost Management',
      question:
        'Which feature lets a team set a monthly spending threshold on a subscription and trigger an email alert when forecasted spend approaches it?',
      options: [
        { id: 'a', text: 'Pricing Calculator.' },
        { id: 'b', text: 'Azure Advisor.' },
        { id: 'c', text: 'Azure budgets in Cost Management.' },
        { id: 'd', text: 'Reserved Instances.' },
      ],
      correctId: 'c',
      explanation:
        'Azure budgets in Cost Management raise alerts based on actual or forecasted spend. Advisor offers cost recommendations but does not enforce thresholds.',
    },
    {
      id: 'az900-22',
      topic: 'Tools',
      question:
        'Which command-line option lets you run Azure CLI commands from a browser without installing anything locally?',
      options: [
        { id: 'a', text: 'Azure Mobile App.' },
        { id: 'b', text: 'Azure PowerShell module on the desktop.' },
        { id: 'c', text: 'Windows Admin Center.' },
        { id: 'd', text: 'Azure Cloud Shell.' },
      ],
      correctId: 'd',
      explanation:
        'Cloud Shell runs in the portal and ships with the Azure CLI and Az PowerShell preinstalled. Installing the modules locally is the alternative, not the browser option.',
    },
    {
      id: 'az900-23',
      topic: 'Cloud Concepts',
      question:
        'A startup wants to launch a new product idea in two weeks instead of waiting six months for hardware procurement. Which cloud benefit best matches?',
      options: [
        { id: 'a', text: 'Predictability.' },
        { id: 'b', text: 'Reliability.' },
        { id: 'c', text: 'Agility.' },
        { id: 'd', text: 'Governance.' },
      ],
      correctId: 'c',
      explanation:
        'Agility is the speed at which new resources can be provisioned. Reliability covers how well the system survives failure, which is a different benefit.',
    },
    {
      id: 'az900-24',
      topic: 'Compute',
      question:
        'Which service automatically increases or decreases the number of identical VM instances behind a load balancer based on demand?',
      options: [
        { id: 'a', text: 'Azure Container Instances.' },
        { id: 'b', text: 'Virtual Machine Scale Sets.' },
        { id: 'c', text: 'Azure Functions.' },
        { id: 'd', text: 'Azure App Service.' },
      ],
      correctId: 'b',
      explanation:
        'VM Scale Sets manage a group of identical VMs that scale horizontally based on rules. Container Instances run single containers without that orchestration.',
    },
    {
      id: 'az900-25',
      topic: 'Networking',
      question:
        'Which service provides RDP and SSH access to VMs through the Azure portal without exposing public IP addresses on the VMs?',
      options: [
        { id: 'a', text: 'Network Security Group.' },
        { id: 'b', text: 'VPN Gateway.' },
        { id: 'c', text: 'Azure Firewall.' },
        { id: 'd', text: 'Azure Bastion.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Bastion brokers RDP and SSH from the portal over TLS, so VMs do not need public IPs. A VPN Gateway connects networks rather than offering portal-based shell access.',
    },
    {
      id: 'az900-26',
      topic: 'Storage',
      question:
        'A workload writes data to a storage account and needs three synchronous copies in one region plus three asynchronous copies in a paired region. Which redundancy option fits?',
      options: [
        { id: 'a', text: 'LRS.' },
        { id: 'b', text: 'ZRS.' },
        { id: 'c', text: 'GRS.' },
        { id: 'd', text: 'Premium SSD v2.' },
      ],
      correctId: 'c',
      explanation:
        'GRS keeps three local copies and asynchronously replicates to the paired region. LRS only keeps three local copies and would not survive a regional outage.',
    },
    {
      id: 'az900-27',
      topic: 'Identity',
      question:
        'Which Microsoft Entra ID capability lets a partner organization sign in to your Azure resources using their own corporate credentials?',
      options: [
        { id: 'a', text: 'Microsoft Entra Domain Services.' },
        { id: 'b', text: 'Microsoft Entra B2C.' },
        { id: 'c', text: 'Microsoft Entra B2B.' },
        { id: 'd', text: 'Self-service password reset.' },
      ],
      correctId: 'c',
      explanation:
        'Entra B2B invites guest users from a partner directory and lets them keep their existing credentials. B2C is for customer-facing apps with consumer identities.',
    },
    {
      id: 'az900-28',
      topic: 'Governance',
      question:
        'You want to apply a single policy assignment to many subscriptions at once for a whole business unit. Which scope should you use?',
      options: [
        { id: 'a', text: 'Resource group.' },
        { id: 'b', text: 'Resource.' },
        { id: 'c', text: 'Subscription.' },
        { id: 'd', text: 'Management group.' },
      ],
      correctId: 'd',
      explanation:
        'Management groups hold subscriptions and let policy and RBAC assignments inherit downward. Assigning at a single subscription would only cover that one subscription.',
    },
    {
      id: 'az900-29',
      topic: 'Pricing',
      question:
        'Which option offers a discount of up to 90% on VM compute for workloads that can be interrupted at any time?',
      options: [
        { id: 'a', text: 'Reserved Instances.' },
        { id: 'b', text: 'Azure Hybrid Benefit.' },
        { id: 'c', text: 'Spot Virtual Machines.' },
        { id: 'd', text: 'Pay-as-you-go.' },
      ],
      correctId: 'c',
      explanation:
        'Spot VMs use spare capacity at large discounts but can be evicted with little notice. Reserved Instances commit to one or three years for steady savings without eviction.',
    },
    {
      id: 'az900-30',
      topic: 'Cloud Models',
      question:
        'A government agency requires that workloads run only on infrastructure dedicated to a single tenant for legal reasons. Which deployment model fits?',
      options: [
        { id: 'a', text: 'Public cloud.' },
        { id: 'b', text: 'Private cloud.' },
        { id: 'c', text: 'Hybrid cloud.' },
        { id: 'd', text: 'Community cloud across competitors.' },
      ],
      correctId: 'b',
      explanation:
        'A private cloud dedicates the underlying hardware to one tenant. A public cloud is shared multi-tenant infrastructure, which the agency rules out.',
    },
    {
      id: 'az900-31',
      topic: 'Cloud Concepts',
      question:
        'Which characteristic of cloud computing means a service stays available even when one underlying server fails?',
      options: [
        { id: 'a', text: 'Elasticity.' },
        { id: 'b', text: 'High availability.' },
        { id: 'c', text: 'Agility.' },
        { id: 'd', text: 'Manageability.' },
      ],
      correctId: 'b',
      explanation:
        'High availability is the ability to keep operating despite component failures, usually through redundancy. Elasticity is about scaling to demand, not surviving failure.',
    },
    {
      id: 'az900-32',
      topic: 'Compute',
      question:
        'A team wants to run a managed Kubernetes control plane and only pay for the agent nodes. Which Azure service fits?',
      options: [
        { id: 'a', text: 'Azure Container Instances.' },
        { id: 'b', text: 'Azure Kubernetes Service.' },
        { id: 'c', text: 'Azure App Service.' },
        { id: 'd', text: 'Azure Service Fabric.' },
      ],
      correctId: 'b',
      explanation:
        'AKS provides a free managed control plane and bills for agent nodes. Container Instances run individual containers without Kubernetes orchestration.',
    },
    {
      id: 'az900-33',
      topic: 'Networking',
      question:
        'Which service provides a global, layer-7 entry point with WAF, caching, and routing in front of multiple regional backends?',
      options: [
        { id: 'a', text: 'Azure Front Door.' },
        { id: 'b', text: 'Azure Application Gateway.' },
        { id: 'c', text: 'Azure Load Balancer.' },
        { id: 'd', text: 'Azure Traffic Manager.' },
      ],
      correctId: 'a',
      explanation:
        'Front Door is a global HTTP front end with WAF, caching, and path-based routing across regions. Application Gateway is a regional layer-7 load balancer, not global.',
    },
    {
      id: 'az900-34',
      topic: 'Storage',
      question:
        'A workload needs file shares accessible over SMB by Windows servers in two regions. Which Azure service fits best?',
      options: [
        { id: 'a', text: 'Azure Files.' },
        { id: 'b', text: 'Azure Blob Storage.' },
        { id: 'c', text: 'Azure Queue Storage.' },
        { id: 'd', text: 'Azure Table Storage.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Files exposes SMB and NFS shares that map directly to drives. Blob Storage uses an HTTP API, not SMB.',
    },
    {
      id: 'az900-35',
      topic: 'Identity',
      question:
        'Which feature evaluates sign-in signals such as location, device, and risk level, and then enforces conditions like requiring MFA?',
      options: [
        { id: 'a', text: 'Azure Key Vault.' },
        { id: 'b', text: 'Microsoft Entra B2C.' },
        { id: 'c', text: 'Group-based licensing.' },
        { id: 'd', text: 'Conditional Access.' },
      ],
      correctId: 'd',
      explanation:
        'Conditional Access is the policy engine that combines signals into allow, deny, or require-MFA decisions. MFA itself is what Conditional Access often demands as the result.',
    },
    {
      id: 'az900-36',
      topic: 'RBAC',
      question:
        'Which built-in RBAC role lets a user create and manage all resources in a scope but does not let them grant access to other users?',
      options: [
        { id: 'a', text: 'Owner.' },
        { id: 'b', text: 'Contributor.' },
        { id: 'c', text: 'Reader.' },
        { id: 'd', text: 'User Access Administrator.' },
      ],
      correctId: 'b',
      explanation:
        'Contributor can create and modify resources but cannot manage role assignments. Owner has full access including granting roles to others.',
    },
    {
      id: 'az900-37',
      topic: 'Monitoring',
      question:
        'Which service collects platform logs and metrics, runs alert rules, and powers Log Analytics queries?',
      options: [
        { id: 'a', text: 'Service Health.' },
        { id: 'b', text: 'Azure Advisor.' },
        { id: 'c', text: 'Azure Monitor.' },
        { id: 'd', text: 'Microsoft Purview.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Monitor is the umbrella platform for metrics, logs, and alerts. Service Health reports Microsoft-side outages, not your application telemetry.',
    },
    {
      id: 'az900-38',
      topic: 'IaC',
      question:
        'Which Azure-native language compiles to ARM templates and offers a cleaner syntax for declarative deployments?',
      options: [
        { id: 'a', text: 'Pulumi.' },
        { id: 'b', text: 'YAML pipelines.' },
        { id: 'c', text: 'Terraform.' },
        { id: 'd', text: 'Bicep.' },
      ],
      correctId: 'd',
      explanation:
        'Bicep is the Azure-authored DSL that transpiles to ARM JSON. Terraform is third-party and uses its own state file outside Azure Resource Manager.',
    },
    {
      id: 'az900-39',
      topic: 'Cloud Concepts',
      question:
        'A company is told its workload had 99.95% availability last month. Which cloud characteristic is being measured?',
      options: [
        { id: 'a', text: 'Agility.' },
        { id: 'b', text: 'Reliability.' },
        { id: 'c', text: 'Manageability.' },
        { id: 'd', text: 'Predictability.' },
      ],
      correctId: 'b',
      explanation:
        'Reliability is measured as uptime over a period. Agility is the speed of provisioning, not a percentage of uptime.',
    },
    {
      id: 'az900-40',
      topic: 'Service Models',
      question:
        'A finance team uses a fully hosted accounting application by signing in to a website. They do not manage any servers, runtimes, or app updates. Which model is this?',
      options: [
        { id: 'a', text: 'IaaS.' },
        { id: 'b', text: 'PaaS.' },
        { id: 'c', text: 'SaaS.' },
        { id: 'd', text: 'Self-hosted.' },
      ],
      correctId: 'c',
      explanation:
        'SaaS delivers a complete application that the customer only consumes. PaaS would still require deploying and configuring application code.',
    },
    {
      id: 'az900-41',
      topic: 'Azure Architecture',
      question:
        'What is the purpose of an Azure region pair?',
      options: [
        { id: 'a', text: 'To halve the cost of egress traffic between two regions.' },
        { id: 'b', text: 'To replicate data and stagger Azure platform updates between two regions for resilience.' },
        { id: 'c', text: 'To merge two regions into a single billing scope.' },
        { id: 'd', text: 'To force all traffic between regions over ExpressRoute.' },
      ],
      correctId: 'b',
      explanation:
        'Region pairs are linked regions where Microsoft staggers updates and prioritizes recovery, and where some services replicate by default. They do not merge billing or change egress pricing.',
    },
    {
      id: 'az900-42',
      topic: 'Compute',
      question:
        'Which service is the simplest way to run a single Linux container that processes a short task and exits?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service.' },
        { id: 'b', text: 'Azure Container Instances.' },
        { id: 'c', text: 'Azure App Service.' },
        { id: 'd', text: 'Azure Virtual Machines.' },
      ],
      correctId: 'b',
      explanation:
        'Container Instances run a single container without managing a cluster. AKS adds Kubernetes overhead that is unnecessary for one short task.',
    },
    {
      id: 'az900-43',
      topic: 'Networking',
      question:
        'Which Azure service translates DNS names like contoso.com into IP addresses and is hosted on the Azure backbone?',
      options: [
        { id: 'a', text: 'Azure Bastion.' },
        { id: 'b', text: 'Azure Private Link.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure DNS.' },
      ],
      correctId: 'd',
      explanation:
        'Azure DNS hosts public DNS zones on Microsoft name servers. Private Link exposes Azure PaaS services privately and is unrelated to public DNS resolution.',
    },
    {
      id: 'az900-44',
      topic: 'Storage',
      question:
        'A team needs a managed message queue to decouple a web tier from a worker tier with simple FIFO-like delivery. Which storage service fits?',
      options: [
        { id: 'a', text: 'Azure Disk Storage.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Queue Storage.' },
        { id: 'd', text: 'Azure Table Storage.' },
      ],
      correctId: 'c',
      explanation:
        'Queue Storage holds messages for asynchronous processing between application tiers. Table Storage is a NoSQL key-value store, not a queue.',
    },
    {
      id: 'az900-45',
      topic: 'Identity',
      question:
        'Which feature lets administrators sign in with standard accounts and only request elevated roles when needed, with approval and time limits?',
      options: [
        { id: 'a', text: 'Privileged Identity Management.' },
        { id: 'b', text: 'Self-service password reset.' },
        { id: 'c', text: 'Microsoft Entra Connect.' },
        { id: 'd', text: 'Conditional Access.' },
      ],
      correctId: 'a',
      explanation:
        'PIM provides just-in-time, time-bound, approval-gated activation of privileged roles. Conditional Access governs sign-ins, not role activation.',
    },
    {
      id: 'az900-46',
      topic: 'Governance',
      question:
        'Microsoft has announced that Azure Blueprints will be deprecated. Which combination does Microsoft recommend instead?',
      options: [
        { id: 'a', text: 'Azure Lighthouse and Microsoft Sentinel.' },
        { id: 'b', text: 'Template Specs and deployment stacks.' },
        { id: 'c', text: 'Azure Resource Mover and Migrate.' },
        { id: 'd', text: 'Service Health and Azure Advisor.' },
      ],
      correctId: 'b',
      explanation:
        'Microsoft recommends Template Specs to share templates and deployment stacks to manage related resources as a unit. Lighthouse and Sentinel address delegation and SIEM, not blueprint replacement.',
    },
    {
      id: 'az900-47',
      topic: 'Cost Management',
      question:
        'Which factor will most directly increase the monthly cost of an Azure VM, holding other variables equal?',
      options: [
        { id: 'a', text: 'Adding tags to the resource.' },
        { id: 'b', text: 'Selecting a larger size with more vCPU and memory.' },
        { id: 'c', text: 'Placing the VM in a resource group with many other VMs.' },
        { id: 'd', text: 'Assigning a Reader role to a user.' },
      ],
      correctId: 'b',
      explanation:
        'VM compute price scales with size. Tags, resource group membership, and RBAC assignments do not affect the bill.',
    },
    {
      id: 'az900-48',
      topic: 'Compliance',
      question:
        'Which portal lets you download Microsoft audit reports such as ISO 27001 and SOC 2 for your own compliance reviews?',
      options: [
        { id: 'a', text: 'Microsoft Purview.' },
        { id: 'b', text: 'Service Trust Portal.' },
        { id: 'c', text: 'Azure Advisor.' },
        { id: 'd', text: 'Microsoft Defender for Cloud.' },
      ],
      correctId: 'b',
      explanation:
        'The Service Trust Portal hosts Microsoft audit reports and compliance documentation. Purview governs your own data, not Microsoft attestations.',
    },
    {
      id: 'az900-49',
      topic: 'Tools',
      question:
        'Which option is a graphical, browser-based way to view and manage all Azure resources?',
      options: [
        { id: 'a', text: 'ARM REST API.' },
        { id: 'b', text: 'Azure CLI.' },
        { id: 'c', text: 'Az PowerShell module.' },
        { id: 'd', text: 'Azure portal.' },
      ],
      correctId: 'd',
      explanation:
        'The Azure portal is the web UI for Azure. CLI and PowerShell are command-line interfaces, and the REST API is a programmatic surface.',
    },
    {
      id: 'az900-50',
      topic: 'Cloud Concepts',
      question:
        'Which characteristic refers to the cloud provider applying patches, monitoring health, and replacing failed hardware so customers do not have to?',
      options: [
        { id: 'a', text: 'Security in transit.' },
        { id: 'b', text: 'Manageability in the cloud.' },
        { id: 'c', text: 'Manageability of the cloud.' },
        { id: 'd', text: 'Predictability of cost.' },
      ],
      correctId: 'c',
      explanation:
        'Manageability of the cloud is what the provider does for you, like patching the platform. Manageability in the cloud is the customer-side tooling, like the portal and templates.',
    },
    {
      id: 'az900-51',
      topic: 'Cost Models',
      question:
        'Which statement best describes consumption-based pricing?',
      options: [
        { id: 'a', text: 'You pay a fixed annual fee that does not depend on usage.' },
        { id: 'b', text: 'You pay only for the resources consumed during a billing period.' },
        { id: 'c', text: 'You pay upfront for hardware that you own outright.' },
        { id: 'd', text: 'You pay a flat monthly fee per user regardless of the service.' },
      ],
      correctId: 'b',
      explanation:
        'Consumption-based pricing meters actual use, such as VM seconds or GB stored. A fixed annual fee independent of use is closer to a license, not consumption pricing.',
    },
    {
      id: 'az900-52',
      topic: 'Service Models',
      question:
        'In which model is the customer responsible for installing and patching the database engine on top of a VM?',
      options: [
        { id: 'a', text: 'Serverless functions.' },
        { id: 'b', text: 'PaaS managed database.' },
        { id: 'c', text: 'SaaS office suite.' },
        { id: 'd', text: 'IaaS.' },
      ],
      correctId: 'd',
      explanation:
        'In IaaS the customer manages the OS and any software installed on it, including a database engine. A PaaS managed database leaves engine patching to Microsoft.',
    },
    {
      id: 'az900-53',
      topic: 'Cloud Models',
      question:
        'A company keeps regulated patient records in its own datacenter and runs analytics on aggregated, de-identified data in Azure. Which deployment model is in use?',
      options: [
        { id: 'a', text: 'Public cloud only.' },
        { id: 'b', text: 'Private cloud only.' },
        { id: 'c', text: 'Hybrid cloud.' },
        { id: 'd', text: 'Multi-region public cloud.' },
      ],
      correctId: 'c',
      explanation:
        'Hybrid cloud combines on-premises and public cloud for one solution. A purely public model would not match the on-premises portion.',
    },
    {
      id: 'az900-54',
      topic: 'Cloud Concepts',
      question:
        'Which property of serverless platforms means you do not provision or manage the underlying servers and you pay per execution?',
      options: [
        { id: 'a', text: 'No server management with consumption billing.' },
        { id: 'b', text: 'Always-on dedicated VMs.' },
        { id: 'c', text: 'Customer-managed Kubernetes nodes.' },
        { id: 'd', text: 'Per-VM monthly licensing.' },
      ],
      correctId: 'a',
      explanation:
        'Serverless hides the host servers and bills for actual executions. Customer-managed Kubernetes nodes are the opposite, requiring you to size and pay for nodes.',
    },
    {
      id: 'az900-55',
      topic: 'Azure Architecture',
      question:
        'Which container in the Azure resource hierarchy is the boundary for billing and access control, sitting directly under a management group?',
      options: [
        { id: 'a', text: 'Resource group.' },
        { id: 'b', text: 'Subscription.' },
        { id: 'c', text: 'Tenant.' },
        { id: 'd', text: 'Region.' },
      ],
      correctId: 'b',
      explanation:
        'A subscription is the billing and access boundary that sits inside a management group and contains resource groups. A resource group is one level lower in the hierarchy.',
    },
    {
      id: 'az900-56',
      topic: 'Compute',
      question:
        'Which service is best for hosting a web app where you want autoscaling, deployment slots, and integrated TLS without managing VMs?',
      options: [
        { id: 'a', text: 'Azure Batch.' },
        { id: 'b', text: 'Azure Virtual Machines.' },
        { id: 'c', text: 'Azure Container Instances.' },
        { id: 'd', text: 'Azure App Service.' },
      ],
      correctId: 'd',
      explanation:
        'App Service is a PaaS web host with built-in scaling, slots, and TLS. VMs would require you to set all of that up by hand.',
    },
    {
      id: 'az900-57',
      topic: 'Networking',
      question:
        'Which device controls inbound and outbound traffic at the subnet or NIC level using simple allow and deny rules?',
      options: [
        { id: 'a', text: 'Network Security Group.' },
        { id: 'b', text: 'Application Gateway.' },
        { id: 'c', text: 'Front Door.' },
        { id: 'd', text: 'ExpressRoute Gateway.' },
      ],
      correctId: 'a',
      explanation:
        'An NSG filters traffic at the subnet or NIC with five-tuple rules. Application Gateway is a layer-7 load balancer, not a basic packet filter.',
    },
    {
      id: 'az900-58',
      topic: 'Storage',
      question:
        'Which redundancy option keeps three synchronous copies across three availability zones in one region?',
      options: [
        { id: 'a', text: 'LRS.' },
        { id: 'b', text: 'ZRS.' },
        { id: 'c', text: 'GRS.' },
        { id: 'd', text: 'RA-GRS.' },
      ],
      correctId: 'b',
      explanation:
        'ZRS replicates synchronously across three availability zones in one region. LRS keeps all three copies in one datacenter and would not survive a zone failure.',
    },
    {
      id: 'az900-59',
      topic: 'Identity',
      question:
        'A retailer wants its consumer-facing app to let shoppers sign in with Google or Facebook accounts. Which service fits?',
      options: [
        { id: 'a', text: 'Microsoft Entra Connect.' },
        { id: 'b', text: 'Microsoft Entra B2B.' },
        { id: 'c', text: 'Microsoft Entra Domain Services.' },
        { id: 'd', text: 'Microsoft Entra B2C.' },
      ],
      correctId: 'd',
      explanation:
        'Entra B2C is for customer-facing apps with social and local accounts. B2B is for inviting business partners using their own corporate identities.',
    },
    {
      id: 'az900-60',
      topic: 'Security',
      question:
        'Which service provides cloud security posture management, secure score, and threat protection across Azure, AWS, and GCP workloads?',
      options: [
        { id: 'a', text: 'Azure Bastion.' },
        { id: 'b', text: 'Microsoft Sentinel.' },
        { id: 'c', text: 'Microsoft Defender for Cloud.' },
        { id: 'd', text: 'Azure Policy.' },
      ],
      correctId: 'c',
      explanation:
        'Defender for Cloud (formerly Security Center) gives a multi-cloud secure score and threat protection. Sentinel is a SIEM and SOAR product, a different role.',
    },
    {
      id: 'az900-61',
      topic: 'Monitoring',
      question:
        'Which service is a SIEM and SOAR built on Log Analytics that ingests signals from multiple sources for security investigations?',
      options: [
        { id: 'a', text: 'Microsoft Sentinel.' },
        { id: 'b', text: 'Application Insights.' },
        { id: 'c', text: 'Service Health.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Sentinel (formerly Azure Sentinel) is the cloud-native SIEM and SOAR. Application Insights focuses on application performance, not security analytics.',
    },
    {
      id: 'az900-62',
      topic: 'Pricing',
      question:
        'Which option provides up to 72% discount on VMs in exchange for a one-year or three-year commitment to a specific size and region?',
      options: [
        { id: 'a', text: 'Pay-as-you-go.' },
        { id: 'b', text: 'Azure Spot Virtual Machines.' },
        { id: 'c', text: 'Azure Hybrid Benefit.' },
        { id: 'd', text: 'Azure Reserved Virtual Machine Instances.' },
      ],
      correctId: 'd',
      explanation:
        'Reserved Instances trade a one or three-year commitment for a steady discount. Spot trades discount for eviction risk, which is a different mechanism.',
    },
    {
      id: 'az900-63',
      topic: 'Pricing',
      question:
        'Which benefit lets a customer apply existing Windows Server or SQL Server licenses with Software Assurance to lower the cost of Azure compute?',
      options: [
        { id: 'a', text: 'Dev/Test pricing.' },
        { id: 'b', text: 'Reserved Instances.' },
        { id: 'c', text: 'Azure Hybrid Benefit.' },
        { id: 'd', text: 'Spot Virtual Machines.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Hybrid Benefit reuses existing Windows or SQL licenses to remove that cost from the Azure bill. Reserved Instances discount the underlying VM, not the license.',
    },
    {
      id: 'az900-64',
      topic: 'Governance',
      question:
        'Which feature applies a key-value label to a resource so that Cost Management can group spend by department or project?',
      options: [
        { id: 'a', text: 'Tags.' },
        { id: 'b', text: 'Resource locks.' },
        { id: 'c', text: 'Management groups.' },
        { id: 'd', text: 'Diagnostic settings.' },
      ],
      correctId: 'a',
      explanation:
        'Tags attach metadata for billing reports, automation, and search. Resource locks prevent deletion or change, which is a separate concern.',
    },
    {
      id: 'az900-65',
      topic: 'Governance',
      question:
        'Which service inventories and classifies sensitive data such as credit-card numbers across Azure, on-premises, and other clouds?',
      options: [
        { id: 'a', text: 'Microsoft Entra Domain Services.' },
        { id: 'b', text: 'Microsoft Sentinel.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Microsoft Purview.' },
      ],
      correctId: 'd',
      explanation:
        'Microsoft Purview catalogs data and runs data-discovery scans for sensitive types. Sentinel is for security event analytics, not data classification.',
    },
    {
      id: 'az900-66',
      topic: 'RBAC',
      question:
        'Which role lets a user only view resources and their configurations, but make no changes?',
      options: [
        { id: 'a', text: 'Owner.' },
        { id: 'b', text: 'Contributor.' },
        { id: 'c', text: 'Reader.' },
        { id: 'd', text: 'User Access Administrator.' },
      ],
      correctId: 'c',
      explanation:
        'Reader gives view-only rights at the assigned scope. Contributor allows changes, which is more access than the question asks for.',
    },
    {
      id: 'az900-67',
      topic: 'RBAC',
      question:
        'A role is assigned at the subscription level. Which scopes inherit that role assignment by default?',
      options: [
        { id: 'a', text: 'Only resources tagged with the same name as the subscription.' },
        { id: 'b', text: 'All resource groups and resources within that subscription.' },
        { id: 'c', text: 'All other subscriptions in the same tenant.' },
        { id: 'd', text: 'Nothing; assignments do not inherit.' },
      ],
      correctId: 'b',
      explanation:
        'RBAC assignments inherit downward from the assigned scope to all child resource groups and resources. They do not flow sideways to other subscriptions.',
    },
    {
      id: 'az900-68',
      topic: 'Monitoring',
      question:
        'A team wants automatic detection of slow web requests, dependency failures, and unhandled exceptions in a .NET app. Which service do they use?',
      options: [
        { id: 'a', text: 'Azure Advisor.' },
        { id: 'b', text: 'Service Health.' },
        { id: 'c', text: 'Azure Status page.' },
        { id: 'd', text: 'Application Insights.' },
      ],
      correctId: 'd',
      explanation:
        'Application Insights is the application performance monitoring feature of Azure Monitor for live apps. Service Health and the Status page report on Azure platform incidents, not your code.',
    },
    {
      id: 'az900-69',
      topic: 'Monitoring',
      question:
        'Where would an admin find personalized notifications about Azure incidents, planned maintenance, and health advisories that affect their resources?',
      options: [
        { id: 'a', text: 'Azure Service Health.' },
        { id: 'b', text: 'Azure Status (the public page).' },
        { id: 'c', text: 'Azure Pricing Calculator.' },
        { id: 'd', text: 'Microsoft Sentinel.' },
      ],
      correctId: 'a',
      explanation:
        'Service Health is filtered to the resources and regions you actually use. The public Azure Status page lists global incidents without that personalization.',
    },
    {
      id: 'az900-70',
      topic: 'IaC',
      question:
        'Which tool deploys ARM JSON or Bicep templates and tracks the state of a deployment in the Resource Manager API?',
      options: [
        { id: 'a', text: 'Azure Policy.' },
        { id: 'b', text: 'Azure Advisor.' },
        { id: 'c', text: 'Microsoft Entra Connect.' },
        { id: 'd', text: 'Azure Resource Manager.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Resource Manager is the deployment and management plane that processes ARM and Bicep templates. Policy validates configuration but does not deploy resources.',
    },
    {
      id: 'az900-71',
      topic: 'Tools',
      question:
        'Which interface lets you script Azure operations on Windows, macOS, and Linux using cmdlets that begin with verbs like Get and New?',
      options: [
        { id: 'a', text: 'Azure DevOps.' },
        { id: 'b', text: 'Azure portal.' },
        { id: 'c', text: 'Azure PowerShell (Az module).' },
        { id: 'd', text: 'Azure Mobile App.' },
      ],
      correctId: 'c',
      explanation:
        'The Az PowerShell module uses verb-noun cmdlets and runs cross-platform. The portal is graphical and not script-driven.',
    },
    {
      id: 'az900-72',
      topic: 'Cloud Concepts',
      question:
        'Which benefit refers to the predictable cost and performance you get when capacity is sized with reservations and SLAs?',
      options: [
        { id: 'a', text: 'Predictability.' },
        { id: 'b', text: 'Elasticity.' },
        { id: 'c', text: 'Agility.' },
        { id: 'd', text: 'Manageability.' },
      ],
      correctId: 'a',
      explanation:
        'Predictability covers planning ahead for cost and performance with tools like Reservations. Elasticity is the opposite, optimizing for demand swings.',
    },
    {
      id: 'az900-73',
      topic: 'Service Models',
      question:
        'Under shared responsibility for SaaS, which item is the customer responsible for?',
      options: [
        { id: 'a', text: 'Patching the application code.' },
        { id: 'b', text: 'Managing the host operating system.' },
        { id: 'c', text: 'Managing user accounts and access in the application.' },
        { id: 'd', text: 'Operating the physical datacenter.' },
      ],
      correctId: 'c',
      explanation:
        'In SaaS, the customer still owns user accounts, data, and access policy in the app. The provider patches the app code, OS, and runs the datacenter.',
    },
    {
      id: 'az900-74',
      topic: 'Cloud Models',
      question:
        'Which deployment model is the typical fit when several similar organizations, like research universities, share infrastructure built for their common needs?',
      options: [
        { id: 'a', text: 'Public cloud.' },
        { id: 'b', text: 'Private cloud.' },
        { id: 'c', text: 'Community cloud.' },
        { id: 'd', text: 'Hybrid cloud.' },
      ],
      correctId: 'c',
      explanation:
        'Community cloud is shared between organizations with common requirements such as compliance. Public cloud is open to anyone, not a defined community.',
    },
    {
      id: 'az900-75',
      topic: 'Azure Architecture',
      question:
        'Which type of region runs in a country with strict data sovereignty rules and is operated by a local partner under a separate cloud instance?',
      options: [
        { id: 'a', text: 'Availability zone.' },
        { id: 'b', text: 'Edge zone.' },
        { id: 'c', text: 'Region pair.' },
        { id: 'd', text: 'Sovereign region.' },
      ],
      correctId: 'd',
      explanation:
        'Sovereign regions, like Azure Government and Azure China, run as separate clouds for legal and sovereignty reasons. An availability zone is a physical datacenter inside one region.',
    },
    {
      id: 'az900-76',
      topic: 'Azure Architecture',
      question:
        'A datacenter inside a region experiences a power failure. Which design keeps a workload running with no customer action?',
      options: [
        { id: 'a', text: 'Single VM with managed disks.' },
        { id: 'b', text: 'VMs spread across multiple availability zones in the region.' },
        { id: 'c', text: 'Tags labeled "production".' },
        { id: 'd', text: 'A larger VM size.' },
      ],
      correctId: 'b',
      explanation:
        'Spreading instances across availability zones tolerates a single zone going down. A larger VM size still resides in one zone.',
    },
    {
      id: 'az900-77',
      topic: 'Compute',
      question:
        'Which compute platform is a long-running, event-driven workflow engine for orchestrating multiple tasks with state, often used for SaaS integrations?',
      options: [
        { id: 'a', text: 'Azure Logic Apps.' },
        { id: 'b', text: 'Azure Container Instances.' },
        { id: 'c', text: 'Azure Kubernetes Service.' },
        { id: 'd', text: 'Azure Batch.' },
      ],
      correctId: 'a',
      explanation:
        'Logic Apps orchestrate stateful workflows with hundreds of connectors. Batch runs large parallel compute jobs without that workflow model.',
    },
    {
      id: 'az900-78',
      topic: 'Networking',
      question:
        'A team needs a regional layer-7 load balancer that performs SSL termination, URL-based routing, and includes a Web Application Firewall. Which service fits?',
      options: [
        { id: 'a', text: 'Azure Bastion.' },
        { id: 'b', text: 'Azure Load Balancer (Standard).' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure Application Gateway.' },
      ],
      correctId: 'd',
      explanation:
        'Application Gateway is a regional layer-7 load balancer with optional WAF. Front Door is global, which is broader than the question asks for.',
    },
    {
      id: 'az900-79',
      topic: 'Networking',
      question:
        'Which Azure service connects an on-premises site to a virtual network using IPsec over the internet?',
      options: [
        { id: 'a', text: 'Public IP address.' },
        { id: 'b', text: 'ExpressRoute.' },
        { id: 'c', text: 'VPN Gateway with site-to-site.' },
        { id: 'd', text: 'Azure Front Door.' },
      ],
      correctId: 'c',
      explanation:
        'A site-to-site VPN Gateway tunnel uses IPsec over the public internet. ExpressRoute is private and does not traverse the public internet.',
    },
    {
      id: 'az900-80',
      topic: 'Storage',
      question:
        'Which storage option backs the operating system disk of an Azure VM and supports premium SSD performance tiers?',
      options: [
        { id: 'a', text: 'Azure NetApp Files.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Blob Storage.' },
        { id: 'd', text: 'Azure Managed Disks.' },
      ],
      correctId: 'd',
      explanation:
        'Managed Disks back VM OS and data disks at Standard, Premium, and Ultra tiers. Files is for shared SMB and NFS access, not OS disks.',
    },
    {
      id: 'az900-81',
      topic: 'Storage',
      question:
        'Which redundancy option provides read access from a secondary region as well as asynchronous replication to it?',
      options: [
        { id: 'a', text: 'LRS.' },
        { id: 'b', text: 'ZRS.' },
        { id: 'c', text: 'RA-GRS.' },
        { id: 'd', text: 'GRS.' },
      ],
      correctId: 'c',
      explanation:
        'RA-GRS adds a read endpoint at the secondary region on top of GRS replication. Plain GRS replicates but does not allow normal reads from the secondary.',
    },
    {
      id: 'az900-82',
      topic: 'Identity',
      question:
        'Which capability replaces passwords with phishing-resistant methods like FIDO2 keys, Windows Hello, or the Authenticator app?',
      options: [
        { id: 'a', text: 'Passwordless authentication.' },
        { id: 'b', text: 'Self-service password reset.' },
        { id: 'c', text: 'Microsoft Entra B2B.' },
        { id: 'd', text: 'Conditional Access.' },
      ],
      correctId: 'a',
      explanation:
        'Passwordless authentication uses keys or device-bound credentials instead of a password. Self-service password reset still relies on passwords.',
    },
    {
      id: 'az900-83',
      topic: 'Identity',
      question:
        'A team needs to join Azure VMs to a managed Active Directory domain without deploying domain controllers. Which service fits?',
      options: [
        { id: 'a', text: 'Microsoft Sentinel.' },
        { id: 'b', text: 'Microsoft Entra B2C.' },
        { id: 'c', text: 'Microsoft Entra Connect.' },
        { id: 'd', text: 'Microsoft Entra Domain Services.' },
      ],
      correctId: 'd',
      explanation:
        'Entra Domain Services offers a managed AD DS-compatible domain for legacy workloads. Entra Connect synchronizes on-premises AD to Entra ID, which is a different scenario.',
    },
    {
      id: 'az900-84',
      topic: 'Security',
      question:
        'Which service centrally stores secrets, certificates, and encryption keys and integrates with managed identities for retrieval?',
      options: [
        { id: 'a', text: 'Azure App Configuration.' },
        { id: 'b', text: 'Azure Storage Account.' },
        { id: 'c', text: 'Azure Key Vault.' },
        { id: 'd', text: 'Microsoft Defender for Cloud.' },
      ],
      correctId: 'c',
      explanation:
        'Key Vault is purpose-built for secrets, keys, and certificates with HSM-backed options. App Configuration stores feature flags and non-secret settings.',
    },
    {
      id: 'az900-85',
      topic: 'Compliance',
      question:
        'Which feature in Microsoft Defender for Cloud rates the security configuration of a subscription and recommends actions to improve it?',
      options: [
        { id: 'a', text: 'Secure Score.' },
        { id: 'b', text: 'Service Trust Score.' },
        { id: 'c', text: 'Cost Score.' },
        { id: 'd', text: 'Reliability Score.' },
      ],
      correctId: 'a',
      explanation:
        'Secure Score in Defender for Cloud measures security posture and lists improvement actions. The other names do not exist as Azure features.',
    },
    {
      id: 'az900-86',
      topic: 'Cost Management',
      question:
        'A startup wants to compare the cost of running its workload on-premises against running the same workload on Azure. Which tool fits?',
      options: [
        { id: 'a', text: 'TCO Calculator.' },
        { id: 'b', text: 'Pricing Calculator.' },
        { id: 'c', text: 'Cost Management exports.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'a',
      explanation:
        'The TCO Calculator compares on-premises cost against Azure for the same workload. The Pricing Calculator estimates Azure cost on its own without an on-premises comparison.',
    },
    {
      id: 'az900-87',
      topic: 'Cost Management',
      question:
        'Which factor will most likely change the monthly cost of an outbound traffic-heavy workload, even if VM size stays the same?',
      options: [
        { id: 'a', text: 'The number of resource groups.' },
        { id: 'b', text: 'The tag color in the portal.' },
        { id: 'c', text: 'The order of resource creation.' },
        { id: 'd', text: 'The region the VM is deployed to.' },
      ],
      correctId: 'd',
      explanation:
        'Egress prices and base VM rates differ by region, which affects total cost. Tag colors and resource group count have no billing effect.',
    },
    {
      id: 'az900-88',
      topic: 'Governance',
      question:
        'Which service provides recommendations to improve security, reliability, performance, cost, and operational excellence based on resource configuration?',
      options: [
        { id: 'a', text: 'Azure Advisor.' },
        { id: 'b', text: 'Azure Monitor.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Azure Resource Manager.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Advisor analyzes telemetry and configuration and gives recommendations across five categories. Policy enforces rules but does not give cost-saving advice.',
    },
    {
      id: 'az900-89',
      topic: 'Governance',
      question:
        'Which Azure feature applies a set of policies and role assignments consistently to many resources while keeping the package versioned and trackable?',
      options: [
        { id: 'a', text: 'Azure Resource Manager templates.' },
        { id: 'b', text: 'Resource locks.' },
        { id: 'c', text: 'Tags.' },
        { id: 'd', text: 'Azure Service Health.' },
      ],
      correctId: 'a',
      explanation:
        'ARM templates (and Bicep on top of them) version a deployable package of resources, policies, and role assignments. Tags are metadata only and cannot deploy policy.',
    },
    {
      id: 'az900-90',
      topic: 'RBAC',
      question:
        'Which role can grant or revoke RBAC role assignments to other users at a given scope?',
      options: [
        { id: 'a', text: 'User Access Administrator.' },
        { id: 'b', text: 'Reader.' },
        { id: 'c', text: 'Contributor.' },
        { id: 'd', text: 'Backup Operator.' },
      ],
      correctId: 'a',
      explanation:
        'User Access Administrator (and Owner) can manage role assignments. Contributor can manage resources but cannot delegate access.',
    },
    {
      id: 'az900-91',
      topic: 'Compute',
      question:
        'Which service runs many parallel high-performance compute jobs across pools of VMs for tasks like rendering or genomics?',
      options: [
        { id: 'a', text: 'Azure Container Instances.' },
        { id: 'b', text: 'Azure App Service.' },
        { id: 'c', text: 'Azure Functions.' },
        { id: 'd', text: 'Azure Batch.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Batch schedules large parallel compute jobs across managed pools. Functions handles short, event-driven code but not large HPC jobs.',
    },
    {
      id: 'az900-92',
      topic: 'Networking',
      question:
        'Which service distributes user requests to the closest healthy region using DNS-level routing without proxying the traffic?',
      options: [
        { id: 'a', text: 'Azure Front Door.' },
        { id: 'b', text: 'Azure Traffic Manager.' },
        { id: 'c', text: 'Azure Load Balancer.' },
        { id: 'd', text: 'Azure Application Gateway.' },
      ],
      correctId: 'b',
      explanation:
        'Traffic Manager makes routing decisions in DNS and clients connect directly to the chosen endpoint. Front Door proxies HTTP traffic and adds caching and WAF.',
    },
    {
      id: 'az900-93',
      topic: 'Cloud Concepts',
      question:
        'Which characteristic refers to the cloud provider building defense in depth across physical security, network controls, and identity to reduce risk?',
      options: [
        { id: 'a', text: 'Security.' },
        { id: 'b', text: 'Elasticity.' },
        { id: 'c', text: 'Manageability.' },
        { id: 'd', text: 'Predictability.' },
      ],
      correctId: 'a',
      explanation:
        'Security as a cloud benefit covers layered controls operated by the provider on your behalf. Elasticity is unrelated to defense in depth.',
    },
    {
      id: 'az900-94',
      topic: 'Cloud Concepts',
      question:
        'A company runs the same regulated workload across many subsidiaries and needs uniform configuration and audit. Which cloud benefit best matches?',
      options: [
        { id: 'a', text: 'Governance.' },
        { id: 'b', text: 'Agility.' },
        { id: 'c', text: 'Elasticity.' },
        { id: 'd', text: 'Reliability.' },
      ],
      correctId: 'a',
      explanation:
        'Governance covers consistent rules, tagging, and audit across many environments. Agility is about speed of provisioning, which is a different benefit.',
    },
    {
      id: 'az900-95',
      topic: 'Cost Management',
      question:
        'Which Cost Management feature breaks down spend by tag, resource group, and service for a chosen time window?',
      options: [
        { id: 'a', text: 'Reservations.' },
        { id: 'b', text: 'Cost analysis.' },
        { id: 'c', text: 'Pricing Calculator.' },
        { id: 'd', text: 'Azure Hybrid Benefit.' },
      ],
      correctId: 'b',
      explanation:
        'Cost analysis is the reporting view that slices spend by tag, group, or service. The Pricing Calculator estimates future spend rather than reporting actual spend.',
    },
    {
      id: 'az900-96',
      topic: 'Compliance',
      question:
        'Which item is an example of an industry-specific compliance offering Azure supports?',
      options: [
        { id: 'a', text: 'HIPAA for U.S. healthcare workloads.' },
        { id: 'b', text: 'ISO 4217 currency codes.' },
        { id: 'c', text: 'TCP/IP protocol suite.' },
        { id: 'd', text: 'Unicode character standard.' },
      ],
      correctId: 'a',
      explanation:
        'HIPAA applies to U.S. healthcare data and Azure provides BAA support for it. ISO 4217 is a currency-code standard, not a compliance regime.',
    },
    {
      id: 'az900-97',
      topic: 'Service Models',
      question:
        'A team picks between IaaS and PaaS for hosting a managed SQL workload. Which factor most clearly favors PaaS?',
      options: [
        { id: 'a', text: 'They want Microsoft to handle patching, backups, and high-availability of the engine.' },
        { id: 'b', text: 'They need full control of the underlying OS for kernel modules.' },
        { id: 'c', text: 'They want to rebuild the database engine from source.' },
        { id: 'd', text: 'They need to run unsupported third-party agents on the host.' },
      ],
      correctId: 'a',
      explanation:
        'PaaS shifts engine patching, backups, and HA to Microsoft, which is the headline reason to pick it. Wanting kernel-level control points to IaaS instead.',
    },
    {
      id: 'az900-98',
      topic: 'IaC',
      question:
        'Which statement about ARM templates is correct?',
      options: [
        { id: 'a', text: 'They are imperative scripts that run line by line.' },
        { id: 'b', text: 'They are declarative JSON files that describe a desired state.' },
        { id: 'c', text: 'They run only inside Azure DevOps pipelines.' },
        { id: 'd', text: 'They cannot create role assignments.' },
      ],
      correctId: 'b',
      explanation:
        'ARM templates declare the desired state of resources and Resource Manager makes it so. Imperative line-by-line execution describes scripts, not ARM templates.',
    },
    {
      id: 'az900-99',
      topic: 'IaC',
      question:
        'Which command-line tool is cross-platform, uses a syntax like `az resource list`, and is preinstalled in Cloud Shell?',
      options: [
        { id: 'a', text: 'Azure CLI.' },
        { id: 'b', text: 'AzCopy.' },
        { id: 'c', text: 'Azure Storage Explorer.' },
        { id: 'd', text: 'Wrangler.' },
      ],
      correctId: 'a',
      explanation:
        'The Azure CLI uses the `az` command and runs on Windows, macOS, and Linux. AzCopy is for moving data into and out of storage, not general resource management.',
    },
    {
      id: 'az900-100',
      topic: 'Tools',
      question:
        'Which option is the right place to look first when an Azure platform incident is suspected to be affecting your specific subscription right now?',
      options: [
        { id: 'a', text: 'Azure Service Health in the portal.' },
        { id: 'b', text: 'Azure Pricing Calculator.' },
        { id: 'c', text: 'Microsoft Learn.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'a',
      explanation:
        'Service Health filters Azure incidents, planned maintenance, and advisories down to your subscription. Advisor gives configuration recommendations, not live incident status.',
    },
  ],
}
