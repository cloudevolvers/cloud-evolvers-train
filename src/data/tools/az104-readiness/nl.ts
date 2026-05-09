import type { QuizLangPack } from './types';

export const nl: QuizLangPack = {
  lang: 'nl',
  htmlLang: 'nl',
  ui: {
    seoTitle: 'AZ-104 Gereedheidtest - Gratis Azure Administrator Zelfbeoordeling',
    seoDescription:
      'Gratis 12-vragen AZ-104 gereedheidtest over alle vijf domeinen van het Microsoft Azure Administrator-examen. Krijg per domein feedback of je klaar bent om te boeken.',
    breadcrumbTools: 'Tools',
    breadcrumbQuiz: 'AZ-104 gereedheidtest',
    eyebrow: 'Gratis quiz · 12 vragen · ~6 minuten',
    title: 'AZ-104 gereedheidtest',
    lede: 'Twaalf scenario-vragen verdeeld over de vijf domeinen van het Azure Administrator-examen. Per domein gescoord zodat je precies ziet waar je nog studietijd in moet steken voor je het echte examen boekt.',
    bullet1: 'Drie vragen per hoofddomein, gewogen op basis van de echte examen-blueprint.',
    bullet2: 'Uitleg bij elk antwoord aan het einde, niet alleen een score.',
    bullet3: 'Geen aanmelding, geen e-mailregistratie. Draait volledig in je browser.',
    startButton: 'Quiz starten',
    questionOf: 'Vraag {current} van {total}',
    backButton: 'Terug',
    nextButton: 'Volgende',
    seeResults: 'Resultaten bekijken',
    resultsEyebrow: 'Resultaten',
    scoreHeading: 'Je scoorde {correct} van {total}',
    byDomain: 'Per domein',
    examPortion: 'van examen',
    answerReview: 'Antwoorden bekijken',
    correctLabel: 'Correct:',
    verdictLikelyReady: 'Waarschijnlijk klaar',
    verdictClose: 'Bijna, maar nog kwetsbaar',
    verdictNotYet: 'Nog niet',
    adviceLikelyReady:
      'Kandidaten die hier scoren op onze voortest slagen doorgaans voor het echte examen. Boek een datum en haal de zwakke domeinen bij via een lab.',
    adviceClose:
      'De kennis is solide, maar sommige domeinen zullen je punten kosten. Spend een week per zwak domein in hands-on labs voor je boekt.',
    adviceNotYet:
      'Nu boeken riskeert een mislukte eerste poging. Een gestructureerde AZ-104-cursus met labs brengt je er in 2 tot 4 weken.',
    seeCourseCta: 'Bekijk AZ-104-cursus',
    retakeButton: 'Opnieuw doen',
    showInEnglish: 'Toon in het Engels',
    showInLang: 'Toon in het {lang}',
    languageSwitcherLabel: 'Taal',
    domainLabels: {
      'identity-governance': 'Identity & governance',
      storage: 'Opslag',
      compute: 'Compute',
      networking: 'Netwerken',
      'monitoring-backup': 'Monitoring & backup',
    },
  },
  questions: [
    {
      id: 'q1',
      domain: 'identity-governance',
      question:
        'Welke Azure RBAC-rol geeft toestemming om alle resources in een abonnement te beheren, inclusief het toewijzen van rollen aan anderen, maar kan Azure AD niet beheren?',
      options: [
        { id: 'a', text: 'Contributor' },
        { id: 'b', text: 'Owner' },
        { id: 'c', text: 'User Access Administrator' },
        { id: 'd', text: 'Global Administrator' },
      ],
      correctId: 'b',
      explanation:
        'Owner heeft volledig beheer plus roltoewijzing binnen de scope. Contributor kan geen rollen toewijzen. Global Administrator is een Entra ID-rol, geen Azure RBAC-rol.',
    },
    {
      id: 'q2',
      domain: 'identity-governance',
      question:
        'Je moet automatisch een tag toepassen op alle nieuwe resources in een resourcegroep. Welke functie gebruik je?',
      options: [
        { id: 'a', text: 'Resource Lock' },
        { id: 'b', text: 'Azure Policy met een modify- of append-effect' },
        { id: 'c', text: 'Management Group-overerving' },
        { id: 'd', text: 'Handmatig taggen tijdens de implementatie' },
      ],
      correctId: 'b',
      explanation:
        'Azure Policy met het modify- of append-effect kan tags afdwingen of automatisch toevoegen bij het aanmaken van resources. Vergrendelingen voorkomen wijzigingen, maar voegen geen metadata toe.',
    },
    {
      id: 'q3',
      domain: 'identity-governance',
      question:
        'Een kostenwaarschuwing moet afgaan wanneer de verwachte uitgaven het budget overschrijden. Wat configureer je?',
      options: [
        { id: 'a', text: 'Een Cost Management-budget met een voorspelde waarschuwingsdrempel' },
        { id: 'b', text: 'Een Azure Monitor-metrische waarschuwing op TotalCost' },
        { id: 'c', text: 'Een Service Health-waarschuwing' },
        { id: 'd', text: 'Een geplande query in Log Analytics' },
      ],
      correctId: 'a',
      explanation:
        'Cost Management-budgetten ondersteunen zowel actuele als voorspelde waarschuwingstypen. De voorspellingsvariant projecteert de uitgaven aan het einde van de maand op basis van het huidige verbruikstempo.',
    },
    {
      id: 'q4',
      domain: 'storage',
      question:
        'Een opslagaccount bevat een blobcontainer die toegankelijk moet zijn zonder SAS-token, maar alleen vanuit een specifiek bedrijfs-IP-bereik. Welke configuratie bereikt dit?',
      options: [
        { id: 'a', text: 'Anonieme blob-toegang inschakelen op de container' },
        {
          id: 'b',
          text: 'Opslag-firewall configureren om het bedrijfs-IP-bereik toe te staan en toegang verlenen via Entra-identiteit of gedeelde sleutel',
        },
        { id: 'c', text: 'Een langlopend SAS-token uitgeven' },
        { id: 'd', text: 'Het opslagaccount instellen op alleen private endpoint' },
      ],
      correctId: 'b',
      explanation:
        'Opslag-firewall plus geverifieerde toegang (Entra of sleutel) beperkt het verkeer tot het IP-bereik en houdt authenticatie in stand. Anonieme toegang negeert in sommige scenario\'s de firewall en stelt data bloot.',
    },
    {
      id: 'q5',
      domain: 'storage',
      question:
        'Je hebt levenscyclusbeheer nodig om blobs na 30 dagen naar de cool-laag te verplaatsen en na 90 dagen te archiveren. Waar configureer je dit?',
      options: [
        { id: 'a', text: 'Per blob afzonderlijk via metadata' },
        { id: 'b', text: 'Op het opslagaccount via een levenscyclusbeleid in JSON' },
        { id: 'c', text: 'Via Azure Policy op abonnementsniveau' },
        { id: 'd', text: 'Via Defender for Storage' },
      ],
      correctId: 'b',
      explanation:
        'Levenscyclusbeleid wordt gedefinieerd als JSON-regels op het niveau van het opslagaccount en geldt voor opgegeven containers en prefixen.',
    },
    {
      id: 'q6',
      domain: 'storage',
      question:
        'Welke redundantieoptie bewaart drie kopieën van data in één regio en drie extra kopieën in een gekoppelde regio, met leestoegang in de secundaire regio?',
      options: [
        { id: 'a', text: 'LRS' },
        { id: 'b', text: 'ZRS' },
        { id: 'c', text: 'GRS' },
        { id: 'd', text: 'RA-GRS' },
      ],
      correctId: 'd',
      explanation:
        'RA-GRS voegt leestoegang toe aan de secundaire regio bovenop GRS-replicatie. GRS repliceert, maar de secundaire is niet direct leesbaar.',
    },
    {
      id: 'q7',
      domain: 'compute',
      question:
        'Een virtuele-machineschaalset moet schalen op basis van een gemiddeld CPU-gebruik boven 70% gedurende 10 minuten. Welke functie configureer je?',
      options: [
        { id: 'a', text: 'Handmatig schalen' },
        { id: 'b', text: 'Aangepaste autoscale-regel met een metrische trigger en tijdvenster' },
        { id: 'c', text: 'Availability Set' },
        { id: 'd', text: 'Azure Automation-runbook' },
      ],
      correctId: 'b',
      explanation:
        'Autoscale-regels gebruiken metrische triggers met aggregatietype, drempelwaarde en tijdvenster om instanties toe te voegen of te verwijderen.',
    },
    {
      id: 'q8',
      domain: 'compute',
      question:
        'Je moet ervoor zorgen dat VM\'s verspreid zijn over update- en foutdomeinen binnen één datacenter. Wat gebruik je?',
      options: [
        { id: 'a', text: 'Availability Zones' },
        { id: 'b', text: 'Availability Set' },
        { id: 'c', text: 'Proximity Placement Group' },
        { id: 'd', text: 'Regiopaar' },
      ],
      correctId: 'b',
      explanation:
        'Availability Sets verspreiden VM\'s over update- en foutdomeinen binnen één datacenter. Availability Zones omspannen datacenters binnen een regio.',
    },
    {
      id: 'q9',
      domain: 'compute',
      question:
        'Een ARM-sjabloonimplementatie mislukt omdat een resource afhankelijk is van een andere die nog niet is ingericht. Welke eigenschap voeg je toe?',
      options: [
        { id: 'a', text: 'condition' },
        { id: 'b', text: 'dependsOn' },
        { id: 'c', text: 'mode: Incremental' },
        { id: 'd', text: 'copy' },
      ],
      correctId: 'b',
      explanation:
        'dependsOn declareert een expliciete volgorde tussen resources tijdens de implementatie.',
    },
    {
      id: 'q10',
      domain: 'networking',
      question:
        'Twee virtuele netwerken in dezelfde regio moeten communiceren zonder het publieke internet te passeren, met verkeer op de Microsoft-backbone. Wat configureer je?',
      options: [
        { id: 'a', text: 'VPN-gatewayverbinding' },
        { id: 'b', text: 'VNet-peering' },
        { id: 'c', text: 'ExpressRoute' },
        { id: 'd', text: 'Service-eindpunt' },
      ],
      correctId: 'b',
      explanation:
        'VNet-peering verbindt twee VNets direct via de Microsoft-backbone. Peering binnen dezelfde regio is de eenvoudigste oplossing.',
    },
    {
      id: 'q11',
      domain: 'networking',
      question:
        'Je moet uitgaand verkeer van een subnet alleen toestaan naar specifieke FQDN\'s en al het andere blokkeren. Welke service regelt dit?',
      options: [
        { id: 'a', text: 'Network Security Group met FQDN-regels' },
        { id: 'b', text: 'Azure Firewall met toepassingsregels' },
        { id: 'c', text: 'User Defined Route' },
        { id: 'd', text: 'Servicetag' },
      ],
      correctId: 'b',
      explanation:
        'NSG\'s filteren op IP/poort, niet op FQDN. Azure Firewall-toepassingsregels ondersteunen FQDN-filtering voor uitgaand HTTP/S-verkeer.',
    },
    {
      id: 'q12',
      domain: 'monitoring-backup',
      question:
        'Een beheerde schijf heeft dagelijkse back-ups nodig die 30 dagen worden bewaard. Welke Azure-service gebruik je?',
      options: [
        { id: 'a', text: 'Azure Site Recovery' },
        { id: 'b', text: 'Recovery Services Vault met Azure Backup-beleid' },
        { id: 'c', text: 'Handmatige snapshot via een runbook' },
        { id: 'd', text: 'Soft delete van een opslagaccount' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup met een Recovery Services Vault biedt geplande schijf- en VM-back-ups met bewaarbeleid. Site Recovery is voor replicatie en noodherstel, niet voor back-ups op een bepaald tijdstip.',
    },
  ],
};
