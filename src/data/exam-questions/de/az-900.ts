import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'Zehn Übungsfragen auf dem Niveau der offiziellen AZ-900-Prüfung. Cloud-Konzepte, Azure-Architektur, Kerndienste, Sicherheit, Governance und Pricing.',
  ceCourseSlug: 'azure-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'az900-1',
      topic: 'Cloud Concepts',
      question:
        'Ein Unternehmen möchte nur die Compute-Leistung bezahlen, die tatsächlich genutzt wird, und Kapazität minutengenau hoch- und runterskalieren. Welches Cloud-Merkmal beschreibt das am besten?',
      options: [
        { id: 'a', text: 'Consumption-based Pricing.' },
        { id: 'b', text: 'High Availability.' },
        { id: 'c', text: 'Disaster Recovery.' },
        { id: 'd', text: 'Fault Tolerance.' },
      ],
      correctId: 'a',
      explanation:
        'Consumption-based oder Pay-as-you-go Pricing rechnet nur den realen Verbrauch ab, oft pro Minute oder Sekunde. High Availability betrifft die Uptime, nicht das Kostenmodell.',
    },
    {
      id: 'az900-2',
      topic: 'Cloud Models',
      question:
        'Ein Entwicklerteam will eine Webanwendung betreiben, ohne sich um die zugrunde liegenden VMs, OS-Patches oder die Webserver-Konfiguration zu kümmern. Welches Servicemodell passt?',
      options: [
        { id: 'a', text: 'Infrastructure as a Service (IaaS).' },
        { id: 'b', text: 'On-Premises-Rechenzentrum.' },
        { id: 'c', text: 'Platform as a Service (PaaS).' },
        { id: 'd', text: 'Co-Location-Hosting.' },
      ],
      correctId: 'c',
      explanation:
        'PaaS liefert eine Runtime-Plattform, in der Microsoft das OS, das Patching und den Webserver übernimmt. Bei IaaS verwalten Sie OS und Webserver weiterhin selbst.',
    },
    {
      id: 'az900-3',
      topic: 'Azure Architecture',
      question:
        'Welche Aussage zu Azure-Regionen und Availability Zones ist korrekt?',
      options: [
        { id: 'a', text: 'Eine Availability Zone enthält immer mindestens drei Regionen.' },
        {
          id: 'b',
          text: 'Eine Availability Zone ist ein physisch getrenntes Rechenzentrum innerhalb einer Region mit eigener Stromversorgung, Kühlung und Netzwerkanbindung.',
        },
        { id: 'c', text: 'Availability Zones gibt es nur in Azure Government, nicht in öffentlichen Regionen.' },
        { id: 'd', text: 'Jede Region hat genau zwei Availability Zones.' },
      ],
      correctId: 'b',
      explanation:
        'Eine Availability Zone ist ein physisch eigenständiges Rechenzentrum innerhalb einer Region mit eigener Stromversorgung, Kühlung und Netzwerkanbindung. Nicht jede Region hat Zonen, und ihre Anzahl variiert (meist drei).',
    },
    {
      id: 'az900-4',
      topic: 'Azure Services',
      question:
        'Sie müssen mehrere Hundert Millionen unstrukturierte Video- und Bilddateien zu möglichst niedrigen Speicherkosten ablegen. Welchen Dienst wählen Sie?',
      options: [
        { id: 'a', text: 'Azure SQL Database.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Cosmos DB.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'd',
      explanation:
        'Blob Storage ist für große Mengen unstrukturierter Daten wie Medien gemacht und bietet den niedrigsten Preis pro GB. Azure Files liefert SMB- und NFS-Shares zu höheren GB-Preisen.',
    },
    {
      id: 'az900-5',
      topic: 'Identity',
      question:
        'Welchen Azure-Dienst nutzen Sie, um Benutzerkonten und Single Sign-on für Cloud-Anwendungen zu verwalten?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID.' },
        { id: 'b', text: 'Azure Key Vault.' },
        { id: 'c', text: 'Azure Monitor.' },
        { id: 'd', text: 'Azure Policy.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (zuvor Azure Active Directory) ist der Identity-Dienst für Authentifizierung und SSO. Key Vault verwaltet Secrets und Zertifikate, keine Benutzerkonten.',
    },
    {
      id: 'az900-6',
      topic: 'Governance',
      question:
        'Ein Compliance-Team will erzwingen, dass neue Storage Accounts in einer Subscription ausschließlich in der Region West Europe angelegt werden. Welcher Dienst passt?',
      options: [
        { id: 'a', text: 'Azure Blueprints.' },
        { id: 'b', text: 'Microsoft Defender for Cloud.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy bewertet und blockiert Ressourcen, die einer Regel widersprechen, etwa der Vorgabe einer erlaubten Region. Defender for Cloud zielt auf die Security Posture, nicht auf Deployment-Regeln.',
    },
    {
      id: 'az900-7',
      topic: 'Pricing',
      question:
        'Welches Werkzeug schätzt den monatlichen Preis einer Kombination von Azure-Ressourcen, bevor diese erstellt werden?',
      options: [
        { id: 'a', text: 'Azure Pricing Calculator.' },
        { id: 'b', text: 'Azure Cost Management.' },
        { id: 'c', text: 'Azure Advisor.' },
        { id: 'd', text: 'Total Cost of Ownership Calculator.' },
      ],
      correctId: 'a',
      explanation:
        'Der Pricing Calculator schätzt die Kosten noch nicht ausgerollter Ressourcen. Cost Management zeigt den tatsächlichen Verbrauch existierender Ressourcen. Der TCO Calculator vergleicht Cloud mit On-Premises.',
    },
    {
      id: 'az900-8',
      topic: 'Networking',
      question:
        'Welcher Dienst verbindet ein On-Premises-Netzwerk über eine dedizierte, private Leitung mit Azure, ohne das öffentliche Internet zu nutzen?',
      options: [
        { id: 'a', text: 'VPN Gateway mit Point-to-Site.' },
        { id: 'b', text: 'Azure ExpressRoute.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure Bastion.' },
      ],
      correctId: 'b',
      explanation:
        'ExpressRoute liefert eine private Verbindung über einen Telekommunikationspartner, der Verkehr berührt das öffentliche Internet nicht. Ein VPN Gateway verschlüsselt Verkehr, der über das öffentliche Internet läuft.',
    },
    {
      id: 'az900-9',
      topic: 'Security',
      question:
        'Welche Verantwortung im Shared Responsibility Model bleibt unabhängig vom Servicemodell (IaaS, PaaS oder SaaS) immer beim Kunden?',
      options: [
        { id: 'a', text: 'Patching des Host-OS.' },
        { id: 'b', text: 'Betrieb der physischen Rechenzentren.' },
        { id: 'c', text: 'Schutz von Daten, Konten und Endpoints.' },
        { id: 'd', text: 'Wartung der Virtualisierungsplattform.' },
      ],
      correctId: 'c',
      explanation:
        'Daten, Identitäten und Endpoints bleiben in jedem Modell beim Kunden. Microsoft verantwortet immer die physische Schicht und die Virtualisierungsplattform.',
    },
    {
      id: 'az900-10',
      topic: 'SLAs and Lifecycle',
      question:
        'Eine Ressource ist in Azure als „Preview“ markiert. Was bedeutet das für das Service Level Agreement?',
      options: [
        { id: 'a', text: 'Die Preview erhält dieselbe SLA von 99,9% wie die General Availability.' },
        { id: 'b', text: 'Preview-Funktionen erhalten eine erhöhte SLA, weil sie noch instabil sein können.' },
        { id: 'c', text: 'Die SLA gilt nur mit einem Premium-Supportplan.' },
        { id: 'd', text: 'Previews fallen nicht unter eine finanzielle SLA und sind nicht für den produktiven Einsatz gedacht.' },
      ],
      correctId: 'd',
      explanation:
        'Preview-Dienste haben keine finanzielle SLA, und Microsoft rät vom produktiven Einsatz ab. Erst mit der General Availability gilt die Standard-SLA.',
    },
  ],
}
