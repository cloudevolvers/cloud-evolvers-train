import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'Ten practice questions at the level of the official AZ-900 exam. Cloud concepts, Azure architecture, core services, security, governance, and pricing.',
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
  ],
}
