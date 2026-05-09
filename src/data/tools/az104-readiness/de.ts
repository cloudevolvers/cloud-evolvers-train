import type { QuizLangPack } from './types';

export const de: QuizLangPack = {
  lang: 'de',
  htmlLang: 'de',
  ui: {
    seoTitle: 'AZ-104 Bereitschaftstest - Kostenlose Azure Administrator Selbsteinschätzung',
    seoDescription:
      'Kostenloser 12-Fragen AZ-104 Bereitschaftstest zu allen fünf Domänen des Microsoft Azure Administrator-Examens. Erhalte Feedback pro Domäne, ob du bereit bist zu buchen.',
    breadcrumbTools: 'Tools',
    breadcrumbQuiz: 'AZ-104 Bereitschaftstest',
    eyebrow: 'Kostenlos · 12 Fragen · ~6 Minuten',
    title: 'AZ-104 Bereitschaftstest',
    lede: 'Zwölf szenariobasierte Fragen aus den fünf Domänen des Azure Administrator-Examens. Die Auswertung erfolgt pro Domäne, damit du genau siehst, wo du vor der Buchung noch Lernzeit investieren musst.',
    bullet1: 'Drei Fragen pro Hauptdomäne, gewichtet nach dem echten Prüfungs-Blueprint.',
    bullet2: 'Erklärungen zu jeder Antwort am Ende, nicht nur ein Gesamtergebnis.',
    bullet3: 'Keine Anmeldung, keine E-Mail-Erfassung. Läuft vollständig im Browser.',
    startButton: 'Test starten',
    questionOf: 'Frage {current} von {total}',
    backButton: 'Zurück',
    nextButton: 'Weiter',
    seeResults: 'Ergebnisse ansehen',
    resultsEyebrow: 'Ergebnisse',
    scoreHeading: 'Du hast {correct} von {total} richtig',
    byDomain: 'Nach Domäne',
    examPortion: 'des Examens',
    answerReview: 'Antworten überprüfen',
    correctLabel: 'Richtig:',
    verdictLikelyReady: 'Wahrscheinlich bereit',
    verdictClose: 'Knapp, aber lückenhaft',
    verdictNotYet: 'Noch nicht bereit',
    adviceLikelyReady:
      'Kandidaten mit diesem Ergebnis in unserem Vortest bestehen das echte Examen in der Regel. Buche einen Termin und schließe schwache Domänen im Lab ab.',
    adviceClose:
      'Das Wissen ist solide, aber einige Domänen werden dich Punkte kosten. Investiere eine Woche pro schwacher Domäne in praktische Labs, bevor du buchst.',
    adviceNotYet:
      'Eine Buchung jetzt riskiert einen fehlgeschlagenen ersten Versuch. Ein strukturierter AZ-104-Kurs mit Labs bringt dich in 2 bis 4 Wochen ans Ziel.',
    seeCourseCta: 'AZ-104 Kurs ansehen',
    retakeButton: 'Wiederholen',
    showInEnglish: 'Auf Englisch anzeigen',
    showInLang: 'Auf {lang} anzeigen',
    languageSwitcherLabel: 'Sprache',
    domainLabels: {
      'identity-governance': 'Identity & Governance',
      storage: 'Speicher',
      compute: 'Compute',
      networking: 'Netzwerk',
      'monitoring-backup': 'Monitoring & Backup',
    },
  },
  questions: [
    {
      id: 'q1',
      domain: 'identity-governance',
      question:
        'Welche Azure RBAC-Rolle gewährt die Berechtigung, alle Ressourcen in einem Abonnement zu verwalten, einschließlich der Zuweisung von Rollen an andere, kann jedoch Azure AD nicht verwalten?',
      options: [
        { id: 'a', text: 'Contributor' },
        { id: 'b', text: 'Owner' },
        { id: 'c', text: 'User Access Administrator' },
        { id: 'd', text: 'Global Administrator' },
      ],
      correctId: 'b',
      explanation:
        'Owner hat vollständige Verwaltungsrechte einschließlich Rollenzuweisung im jeweiligen Geltungsbereich. Contributor kann keine Rollen zuweisen. Global Administrator ist eine Entra ID-Rolle, keine Azure RBAC-Rolle.',
    },
    {
      id: 'q2',
      domain: 'identity-governance',
      question:
        'Du musst automatisch ein Tag auf alle neuen Ressourcen in einer Ressourcengruppe anwenden. Welches Feature verwendest du?',
      options: [
        { id: 'a', text: 'Resource Lock' },
        { id: 'b', text: 'Azure Policy mit modify- oder append-Effekt' },
        { id: 'c', text: 'Vererbung von Verwaltungsgruppen' },
        { id: 'd', text: 'Manuelles Tagging während der Bereitstellung' },
      ],
      correctId: 'b',
      explanation:
        'Azure Policy mit dem modify- oder append-Effekt kann Tags bei der Ressourcenerstellung erzwingen oder automatisch hinzufügen. Sperren verhindern Änderungen, fügen aber keine Metadaten hinzu.',
    },
    {
      id: 'q3',
      domain: 'identity-governance',
      question:
        'Eine Kostenwarnung soll ausgelöst werden, wenn die prognostizierten Ausgaben das Budget überschreiten werden. Was konfigurierst du?',
      options: [
        { id: 'a', text: 'Ein Cost Management-Budget mit einer Prognose-Warnbedingung' },
        { id: 'b', text: 'Eine Azure Monitor-Metrikwarnung auf TotalCost' },
        { id: 'c', text: 'Eine Service Health-Warnung' },
        { id: 'd', text: 'Eine geplante Abfrage in Log Analytics' },
      ],
      correctId: 'a',
      explanation:
        'Cost Management-Budgets unterstützen sowohl tatsächliche als auch prognostizierte Warnungstypen. Die Prognosevariante projiziert die Ausgaben am Monatsende auf Basis des aktuellen Verbrauchstempos.',
    },
    {
      id: 'q4',
      domain: 'storage',
      question:
        'Ein Speicherkonto enthält einen Blob-Container, der ohne SAS-Token nur aus einem bestimmten Unternehmens-IP-Bereich zugänglich sein soll. Welche Konfiguration erreicht dies?',
      options: [
        { id: 'a', text: 'Anonymen Blob-Zugriff auf dem Container aktivieren' },
        {
          id: 'b',
          text: 'Storage-Firewall konfigurieren, um den Unternehmens-IP-Bereich zuzulassen, und Zugriff über Entra-Identität oder Shared Key gewähren',
        },
        { id: 'c', text: 'Ein langlebiges SAS-Token ausstellen' },
        { id: 'd', text: 'Das Speicherkonto auf ausschließlich Private Endpoint setzen' },
      ],
      correctId: 'b',
      explanation:
        'Storage-Firewall plus authentifizierter Zugriff (Entra oder Schlüssel) beschränkt den Zugriff auf den IP-Bereich und hält die Authentifizierung aufrecht. Anonymer Zugriff umgeht in manchen Szenarien die Firewall und legt Daten offen.',
    },
    {
      id: 'q5',
      domain: 'storage',
      question:
        'Du benötigst Lebenszyklusverwaltung, um Blobs nach 30 Tagen in den Cool-Tier zu verschieben und nach 90 Tagen zu archivieren. Wo konfigurierst du dies?',
      options: [
        { id: 'a', text: 'Einzeln für jeden Blob über Metadaten' },
        { id: 'b', text: 'Im Speicherkonto über eine Lebenszyklusverwaltungsrichtlinie in JSON' },
        { id: 'c', text: 'Über Azure Policy auf Abonnementebene' },
        { id: 'd', text: 'Über Defender for Storage' },
      ],
      correctId: 'b',
      explanation:
        'Lebenszyklusrichtlinien werden als JSON-Regeln auf Speicherkontoebene definiert und gelten für bestimmte Container und Präfixe.',
    },
    {
      id: 'q6',
      domain: 'storage',
      question:
        'Welche Redundanzoption hält drei Datenkopien in einer Region und drei weitere Kopien in einer gekoppelten Region vor, mit Lesezugriff auf die sekundäre Region?',
      options: [
        { id: 'a', text: 'LRS' },
        { id: 'b', text: 'ZRS' },
        { id: 'c', text: 'GRS' },
        { id: 'd', text: 'RA-GRS' },
      ],
      correctId: 'd',
      explanation:
        'RA-GRS fügt Lesezugriff auf die sekundäre Region zusätzlich zur GRS-Replikation hinzu. GRS repliziert, aber die sekundäre Region ist nicht direkt lesbar.',
    },
    {
      id: 'q7',
      domain: 'compute',
      question:
        'Eine VM-Skalierungsgruppe soll skalieren, wenn die durchschnittliche CPU 10 Minuten lang über 70 % liegt. Welches Feature konfigurierst du?',
      options: [
        { id: 'a', text: 'Manuelles Skalieren' },
        { id: 'b', text: 'Benutzerdefinierte Autoscale-Regel mit Metrik-Trigger und Zeitfenster' },
        { id: 'c', text: 'Availability Set' },
        { id: 'd', text: 'Azure Automation-Runbook' },
      ],
      correctId: 'b',
      explanation:
        'Autoscale-Regeln verwenden metrikbasierte Trigger mit Aggregationstyp, Schwellenwert und Zeitfenster, um Instanzen hinzuzufügen oder zu entfernen.',
    },
    {
      id: 'q8',
      domain: 'compute',
      question:
        'Du musst sicherstellen, dass VMs innerhalb eines einzelnen Rechenzentrums über Update-Domänen und Fehlerdomänen verteilt sind. Was verwendest du?',
      options: [
        { id: 'a', text: 'Availability Zones' },
        { id: 'b', text: 'Availability Set' },
        { id: 'c', text: 'Proximity Placement Group' },
        { id: 'd', text: 'Regionspaar' },
      ],
      correctId: 'b',
      explanation:
        'Availability Sets verteilen VMs über Update-Domänen und Fehlerdomänen innerhalb eines einzelnen Rechenzentrums. Availability Zones umspannen Rechenzentren innerhalb einer Region.',
    },
    {
      id: 'q9',
      domain: 'compute',
      question:
        'Eine ARM-Vorlagenbereitstellung schlägt fehl, weil eine Ressource von einer anderen abhängt, die noch nicht bereitgestellt wurde. Welche Eigenschaft fügst du hinzu?',
      options: [
        { id: 'a', text: 'condition' },
        { id: 'b', text: 'dependsOn' },
        { id: 'c', text: 'mode: Incremental' },
        { id: 'd', text: 'copy' },
      ],
      correctId: 'b',
      explanation:
        'dependsOn deklariert eine explizite Reihenfolge zwischen Ressourcen während der Bereitstellung.',
    },
    {
      id: 'q10',
      domain: 'networking',
      question:
        'Zwei virtuelle Netzwerke in derselben Region müssen kommunizieren, ohne das öffentliche Internet zu passieren, und der Datenverkehr soll im Microsoft-Backbone bleiben. Was konfigurierst du?',
      options: [
        { id: 'a', text: 'VPN-Gateway-Verbindung' },
        { id: 'b', text: 'VNet-Peering' },
        { id: 'c', text: 'ExpressRoute' },
        { id: 'd', text: 'Dienstendpunkt' },
      ],
      correctId: 'b',
      explanation:
        'VNet-Peering verbindet zwei VNets direkt über den Microsoft-Backbone. Peering innerhalb derselben Region ist die einfachste Lösung.',
    },
    {
      id: 'q11',
      domain: 'networking',
      question:
        'Du musst ausgehenden Datenverkehr eines Subnetzes nur zu bestimmten FQDNs erlauben und alles andere blockieren. Welcher Dienst übernimmt dies?',
      options: [
        { id: 'a', text: 'Network Security Group mit FQDN-Regeln' },
        { id: 'b', text: 'Azure Firewall mit Anwendungsregeln' },
        { id: 'c', text: 'User Defined Route' },
        { id: 'd', text: 'Diensttag' },
      ],
      correctId: 'b',
      explanation:
        'NSGs filtern nach IP/Port, nicht nach FQDN. Azure Firewall-Anwendungsregeln unterstützen FQDN-Filterung für ausgehenden HTTP/S-Verkehr.',
    },
    {
      id: 'q12',
      domain: 'monitoring-backup',
      question:
        'Ein verwalteter Datenträger benötigt tägliche Sicherungen, die 30 Tage aufbewahrt werden. Welchen Azure-Dienst verwendest du?',
      options: [
        { id: 'a', text: 'Azure Site Recovery' },
        { id: 'b', text: 'Recovery Services Vault mit Azure Backup-Richtlinie' },
        { id: 'c', text: 'Manuelle Momentaufnahme über ein Runbook' },
        { id: 'd', text: 'Vorläufiges Löschen im Speicherkonto' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup mit einem Recovery Services Vault bietet geplante Datenträger- und VM-Sicherungen mit Aufbewahrungsrichtlinie. Site Recovery dient der Replikation und Notfallwiederherstellung, nicht der punktgenauen Sicherung.',
    },
  ],
};
