import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'Tien scenario-vragen op AZ-104 niveau. Identity, governance, storage, compute, virtuele netwerken, monitoring en backup.',
  ceCourseSlug: 'azure-administrator',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-administrator',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az104-1',
      topic: 'Identity',
      question:
        'Je hebt een Microsoft Entra-tenant met 800 gebruikers. Je moet groep-lidmaatschappen automatisch laten beheren op basis van het attribuut "department". Wat configureer je?',
      options: [
        { id: 'a', text: 'Een dynamische distribution list in Exchange Online.' },
        { id: 'b', text: 'Een administratieve unit met handmatige assignments.' },
        { id: 'c', text: 'Een dynamic group met een membership rule op het department-attribuut.' },
        { id: 'd', text: 'Conditional Access met group filtering.' },
      ],
      correctId: 'c',
      explanation:
        'Dynamische groepen in Entra ID gebruiken een rule expression om lidmaatschap te bepalen op basis van user-attributen. Distribution lists zijn een mailing-construct, geen authorization-mechanisme.',
    },
    {
      id: 'az104-2',
      topic: 'Governance',
      question:
        'Je wilt voorkomen dat een resource group per ongeluk wordt verwijderd, terwijl resources binnenin nog wel mogen worden gewijzigd. Welke lock pas je toe?',
      options: [
        { id: 'a', text: 'CanNotDelete op de resource group.' },
        { id: 'b', text: 'ReadOnly op de resource group.' },
        { id: 'c', text: 'CanNotDelete op het subscription-niveau.' },
        { id: 'd', text: 'Azure Policy met een deny-effect op delete-acties.' },
      ],
      correctId: 'a',
      explanation:
        'Een CanNotDelete-lock op de resource group blokkeert verwijderen maar staat updates toe. ReadOnly zou ook wijzigingen blokkeren, wat hier niet de bedoeling is.',
    },
    {
      id: 'az104-3',
      topic: 'Storage',
      question:
        'Je gebruikt een general-purpose v2 storage account. Een log-bestand wordt 30 dagen niet meer gelezen en daarna nog drie jaar bewaard voor audit. Hoe verlaag je de kosten zonder data te verliezen?',
      options: [
        { id: 'a', text: 'Verplaats handmatig naar een ander storage account in een goedkopere regio.' },
        { id: 'b', text: 'Schakel soft delete uit op de container.' },
        { id: 'c', text: 'Zet het account op LRS in plaats van GRS.' },
        {
          id: 'd',
          text: 'Configureer een lifecycle management policy die blobs na 30 dagen naar Cool en na 90 dagen naar Archive verplaatst.',
        },
      ],
      correctId: 'd',
      explanation:
        'Lifecycle management automatiseert tier-overgangen op basis van last-modified of last-access. Soft delete uitzetten verlaagt geen kosten en brengt risico met zich mee.',
    },
    {
      id: 'az104-4',
      topic: 'Compute',
      question:
        'Je hebt een Windows VM met een dataschijf die je wilt vervangen door een grotere managed disk, met behoud van data. Wat is de juiste aanpak?',
      options: [
        { id: 'a', text: 'Resize de VM-grootte naar een SKU met meer storage en herstart.' },
        {
          id: 'b',
          text: 'Stop en deallocate de VM, vergroot de bestaande managed disk en breid het volume in het OS uit.',
        },
        { id: 'c', text: 'Verwijder de schijf en maak een nieuwe aan vanuit een snapshot.' },
        { id: 'd', text: 'Mount een Azure Files share als nieuwe drive-letter.' },
      ],
      correctId: 'b',
      explanation:
        'Een managed disk vergroten kan zonder dataverlies, daarna breid je het volume in Disk Management of met diskpart uit. Een VM-resize verandert niet de grootte van de dataschijf.',
    },
    {
      id: 'az104-5',
      topic: 'Networking',
      question:
        'Twee VNets in dezelfde regio moeten privaat met elkaar communiceren met lage latency. Welke optie kies je?',
      options: [
        { id: 'a', text: 'Een site-to-site VPN tussen beide VNets.' },
        { id: 'b', text: 'Een Application Gateway in beide VNets.' },
        { id: 'c', text: 'VNet peering tussen de twee VNets.' },
        { id: 'd', text: 'Een Azure Front Door met origin in elk VNet.' },
      ],
      correctId: 'c',
      explanation:
        'VNet peering geeft directe, privaat gerouteerd verkeer via de Microsoft backbone met lage latency. Een VPN tussen VNets in dezelfde regio voegt onnodige overhead toe.',
    },
    {
      id: 'az104-6',
      topic: 'Networking',
      question:
        'Een VM mag alleen poort 443 vanaf het internet ontvangen, maar mag uitgaand naar elke poort. Welke NSG-configuratie is correct?',
      options: [
        {
          id: 'a',
          text: 'Een inbound rule die TCP 443 toestaat met een hogere prioriteit dan de DenyAllInbound default; uitgaand laat je de defaults staan.',
        },
        { id: 'b', text: 'Een outbound rule die alle poorten blokkeert behalve 443.' },
        { id: 'c', text: 'Een inbound rule die alle poorten toestaat en outbound rules die alles dichttrekken.' },
        { id: 'd', text: 'Een Azure Firewall is verplicht voor deze configuratie.' },
      ],
      correctId: 'a',
      explanation:
        'NSG-defaults blokkeren al het inbound verkeer behalve VNet en LB; je voegt een allow rule toe voor 443 met lagere prioriteit dan 65500. Uitgaand laat de default AllowInternetOutbound al alles toe.',
    },
    {
      id: 'az104-7',
      topic: 'Backup',
      question:
        'Je moet dagelijkse backups configureren voor 50 production VM\'s en 30 dagen retentie aanhouden. Wat is de meest geschikte oplossing?',
      options: [
        { id: 'a', text: 'Snapshots scripten met Azure CLI in een runbook.' },
        { id: 'b', text: 'Azure Backup met een Recovery Services Vault en een backup policy van 30 dagen.' },
        { id: 'c', text: 'Azure Site Recovery met continuous replication.' },
        { id: 'd', text: 'Storage account snapshots vanuit het portaal.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup met een Recovery Services Vault is de native, beheerde optie voor VM-backups met flexibele retentie. Site Recovery is bedoeld voor disaster recovery, niet voor point-in-time backups.',
    },
    {
      id: 'az104-8',
      topic: 'Monitoring',
      question:
        'Je wilt waarschuwingen krijgen wanneer CPU-gebruik op een VM gemiddeld meer dan 85% is gedurende vijf minuten. Welke combinatie configureer je?',
      options: [
        { id: 'a', text: 'Een diagnostic setting naar een storage account met een retention van 7 dagen.' },
        { id: 'b', text: 'Een Service Health alert.' },
        {
          id: 'c',
          text: 'Een metric alert op Percentage CPU met threshold 85, aggregation Average, periode 5 minuten, gekoppeld aan een action group.',
        },
        { id: 'd', text: 'Een Activity Log alert voor de operatie "VirtualMachines/start".' },
      ],
      correctId: 'c',
      explanation:
        'Metric alerts evalueren numerieke telemetrie zoals Percentage CPU. Activity Log alerts kijken naar control-plane gebeurtenissen, niet naar prestatie-metrics.',
    },
    {
      id: 'az104-9',
      topic: 'RBAC',
      question:
        'Een ontwikkelaar moet VM\'s in een resource group kunnen herstarten, maar ze niet aanmaken, verwijderen of opnieuw deployen. Welke aanpak volgt het principe of least privilege?',
      options: [
        { id: 'a', text: 'Owner toekennen op de resource group.' },
        { id: 'b', text: 'Contributor toekennen op de subscription.' },
        { id: 'c', text: 'Reader toekennen op de subscription.' },
        {
          id: 'd',
          text: 'Een custom role maken met alleen Microsoft.Compute/virtualMachines/restart/action en die op de resource group toewijzen.',
        },
      ],
      correctId: 'd',
      explanation:
        'Een custom role met alleen de restart-action geeft precies de benodigde rechten en niets meer. Owner en Contributor geven veel te veel rechten, Reader staat geen acties toe.',
    },
    {
      id: 'az104-10',
      topic: 'Storage',
      question:
        'Je geeft een externe partij tijdelijk read-only toegang tot een specifieke blob, voor 24 uur, zonder een account-key te delen. Wat is de juiste aanpak?',
      options: [
        { id: 'a', text: 'Een service SAS met read-permissie en een expiry van 24 uur.' },
        { id: 'b', text: 'Het account anoniem readable maken met "Allow Blob anonymous access".' },
        { id: 'c', text: 'De storage account-key tijdelijk doorgeven en daarna roteren.' },
        { id: 'd', text: 'De externe partij toevoegen aan een Entra-groep en de Storage Blob Data Reader rol toekennen.' },
      ],
      correctId: 'a',
      explanation:
        'Een service SAS geeft beperkte, tijdelijke toegang met expliciete permissies en expiry, zonder de account-key vrij te geven. Anonieme toegang is te ruim, RBAC vereist een Entra-identiteit.',
    },
  ],
}
