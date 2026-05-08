import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'Tien oefenvragen op het niveau van het officiele AZ-900 examen. Cloud-concepten, Azure-architectuur, kerndiensten, security, governance en pricing.',
  ceCourseSlug: 'azure-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'az900-1',
      topic: 'Cloud Concepts',
      question:
        'Een organisatie wil alleen betalen voor de rekenkracht die daadwerkelijk wordt gebruikt en wil capaciteit per minuut kunnen op- en afschalen. Welk cloud-kenmerk beschrijft dit het beste?',
      options: [
        { id: 'a', text: 'Consumption-based pricing' },
        { id: 'b', text: 'High availability' },
        { id: 'c', text: 'Disaster recovery' },
        { id: 'd', text: 'Fault tolerance' },
      ],
      correctId: 'a',
      explanation:
        'Consumption-based (of pay-as-you-go) pricing rekent alleen werkelijk verbruik af, vaak per minuut of per seconde. High availability gaat over uptime, niet over het kostenmodel.',
    },
    {
      id: 'az900-2',
      topic: 'Cloud Models',
      question:
        'Een ontwikkelteam wil een webapplicatie draaien zonder de onderliggende VM\'s, OS-patches of webserver-configuratie te beheren. Welk servicemodel past hierbij?',
      options: [
        { id: 'a', text: 'Infrastructure as a Service (IaaS)' },
        { id: 'b', text: 'On-premises datacenter' },
        { id: 'c', text: 'Platform as a Service (PaaS)' },
        { id: 'd', text: 'Co-location hosting' },
      ],
      correctId: 'c',
      explanation:
        'PaaS levert een runtime-platform waarin Microsoft het OS, patching en de webserver beheert. Bij IaaS beheer je nog steeds zelf het OS en de webserver.',
    },
    {
      id: 'az900-3',
      topic: 'Azure Architecture',
      question:
        'Welke uitspraak over Azure-regio\'s en availability zones is correct?',
      options: [
        { id: 'a', text: 'Een availability zone bevat altijd minstens drie regio\'s.' },
        {
          id: 'b',
          text: 'Een availability zone is een fysiek gescheiden datacenter binnen een regio met onafhankelijke stroom, koeling en netwerk.',
        },
        { id: 'c', text: 'Availability zones bestaan alleen in Azure Government en niet in publieke regio\'s.' },
        { id: 'd', text: 'Elke regio heeft precies twee availability zones.' },
      ],
      correctId: 'b',
      explanation:
        'Een availability zone is een fysiek apart datacenter binnen een regio met eigen stroom, koeling en netwerk. Niet elke regio heeft zones, en het aantal varieert (meestal drie).',
    },
    {
      id: 'az900-4',
      topic: 'Azure Services',
      question:
        'Je moet een ongestructureerde verzameling van enkele honderden miljoenen video- en afbeeldingsbestanden opslaan met de laagste opslagkosten. Welke dienst kies je?',
      options: [
        { id: 'a', text: 'Azure SQL Database' },
        { id: 'b', text: 'Azure Files' },
        { id: 'c', text: 'Azure Cosmos DB' },
        { id: 'd', text: 'Azure Blob Storage' },
      ],
      correctId: 'd',
      explanation:
        'Blob Storage is gemaakt voor grote hoeveelheden ongestructureerde data zoals media en heeft de laagste prijs per GB. Azure Files levert SMB/NFS shares en is duurder per GB.',
    },
    {
      id: 'az900-5',
      topic: 'Identity',
      question:
        'Welke Azure-dienst gebruik je om gebruikersaccounts en single sign-on voor cloudapplicaties te beheren?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID' },
        { id: 'b', text: 'Azure Key Vault' },
        { id: 'c', text: 'Azure Monitor' },
        { id: 'd', text: 'Azure Policy' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (voorheen Azure Active Directory) is de identity-dienst voor authenticatie en SSO. Key Vault beheert secrets en certificates, geen gebruikersaccounts.',
    },
    {
      id: 'az900-6',
      topic: 'Governance',
      question:
        'Een compliance-team wil afdwingen dat alle nieuwe storage accounts in een subscription alleen in West-Europa worden aangemaakt. Welke service past hierbij?',
      options: [
        { id: 'a', text: 'Azure Blueprints' },
        { id: 'b', text: 'Microsoft Defender for Cloud' },
        { id: 'c', text: 'Azure Policy' },
        { id: 'd', text: 'Azure Advisor' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy evalueert en blokkeert resources die niet voldoen aan een regel, bijvoorbeeld een toegestane regio. Defender for Cloud richt zich op security posture, niet op deployment-regels.',
    },
    {
      id: 'az900-7',
      topic: 'Pricing',
      question:
        'Welk hulpmiddel geeft een geschatte maandprijs voor een combinatie van Azure-resources voordat je ze aanmaakt?',
      options: [
        { id: 'a', text: 'Azure Pricing Calculator' },
        { id: 'b', text: 'Azure Cost Management' },
        { id: 'c', text: 'Azure Advisor' },
        { id: 'd', text: 'Total Cost of Ownership Calculator' },
      ],
      correctId: 'a',
      explanation:
        'De Pricing Calculator geeft een schatting voor nog niet uitgerolde resources. Cost Management toont werkelijk verbruik van bestaande resources. De TCO Calculator vergelijkt cloud met on-prem.',
    },
    {
      id: 'az900-8',
      topic: 'Networking',
      question:
        'Welke dienst koppelt een on-premises netwerk via een dedicated, private verbinding aan Azure, zonder gebruik van het publieke internet?',
      options: [
        { id: 'a', text: 'VPN Gateway met point-to-site' },
        { id: 'b', text: 'Azure ExpressRoute' },
        { id: 'c', text: 'Azure Front Door' },
        { id: 'd', text: 'Azure Bastion' },
      ],
      correctId: 'b',
      explanation:
        'ExpressRoute biedt een private verbinding via een telecom-partner, het verkeer raakt het publieke internet niet. Een VPN Gateway versleutelt verkeer dat wel over het publieke internet loopt.',
    },
    {
      id: 'az900-9',
      topic: 'Security',
      question:
        'Welk principe van het shared responsibility model geldt altijd voor de klant, ongeacht het servicemodel (IaaS, PaaS of SaaS)?',
      options: [
        { id: 'a', text: 'Patching van het host-OS' },
        { id: 'b', text: 'Beheer van fysieke datacenters' },
        { id: 'c', text: 'Bescherming van data, accounts en endpoints' },
        { id: 'd', text: 'Onderhoud van het virtualisatieplatform' },
      ],
      correctId: 'c',
      explanation:
        'Data, identiteiten en endpoints blijven in elk model verantwoordelijkheid van de klant. Microsoft beheert altijd de fysieke laag en virtualisatie.',
    },
    {
      id: 'az900-10',
      topic: 'SLAs and Lifecycle',
      question:
        'Een resource staat in Azure als "Preview". Wat betekent dat voor de service level agreement?',
      options: [
        { id: 'a', text: 'De preview krijgt dezelfde 99,9% SLA als general availability.' },
        { id: 'b', text: 'Preview-functionaliteit krijgt een verhoogde SLA omdat ze nog instabiel kan zijn.' },
        { id: 'c', text: 'De SLA geldt alleen als je een Premium-supportplan hebt.' },
        { id: 'd', text: 'Previews vallen niet onder een financiele SLA en zijn niet bedoeld voor productie.' },
      ],
      correctId: 'd',
      explanation:
        'Preview-services hebben geen financiele SLA en Microsoft raadt productiegebruik af. Pas bij general availability gaat de standaard SLA gelden.',
    },
  ],
}
