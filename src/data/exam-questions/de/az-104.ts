import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'Zehn Szenariofragen auf AZ-104-Niveau. Identity, Governance, Storage, Compute, Virtual Networking, Monitoring und Backup.',
  ceCourseSlug: 'azure-administrator',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-administrator',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az104-1',
      topic: 'Identity',
      question:
        'Sie haben einen Microsoft Entra Tenant mit 800 Benutzern. Gruppenmitgliedschaften sollen automatisch auf Basis des Attributs „department“ gepflegt werden. Was konfigurieren Sie?',
      options: [
        { id: 'a', text: 'Eine dynamische Distribution List in Exchange Online.' },
        { id: 'b', text: 'Eine Administrative Unit mit manuellen Zuweisungen.' },
        { id: 'c', text: 'Eine Dynamic Group mit einer Membership Rule auf das department-Attribut.' },
        { id: 'd', text: 'Conditional Access mit Group Filtering.' },
      ],
      correctId: 'c',
      explanation:
        'Dynamic Groups in Entra ID nutzen einen Rule Expression, um die Mitgliedschaft anhand von User-Attributen zu bestimmen. Distribution Lists sind ein Mailing-Konstrukt, kein Autorisierungsmechanismus.',
    },
    {
      id: 'az104-2',
      topic: 'Governance',
      question:
        'Sie wollen verhindern, dass eine Resource Group versehentlich gelöscht wird, Ressourcen darin aber weiterhin geändert werden dürfen. Welchen Lock setzen Sie?',
      options: [
        { id: 'a', text: 'CanNotDelete auf die Resource Group.' },
        { id: 'b', text: 'ReadOnly auf die Resource Group.' },
        { id: 'c', text: 'CanNotDelete auf die Subscription.' },
        { id: 'd', text: 'Azure Policy mit einem Deny-Effekt auf Delete-Aktionen.' },
      ],
      correctId: 'a',
      explanation:
        'Ein CanNotDelete Lock auf die Resource Group blockiert das Löschen, lässt Updates aber zu. ReadOnly würde auch Änderungen blockieren, was hier nicht das Ziel ist.',
    },
    {
      id: 'az104-3',
      topic: 'Storage',
      question:
        'Sie betreiben einen General-Purpose-v2-Storage Account. Eine Logdatei wird nach 30 Tagen nicht mehr gelesen, muss aber drei weitere Jahre für Audits aufbewahrt werden. Wie senken Sie die Kosten ohne Datenverlust?',
      options: [
        { id: 'a', text: 'Manuell in einen Storage Account in einer günstigeren Region verschieben.' },
        { id: 'b', text: 'Soft Delete auf dem Container deaktivieren.' },
        { id: 'c', text: 'Den Account von GRS auf LRS umstellen.' },
        {
          id: 'd',
          text: 'Eine Lifecycle Management Policy konfigurieren, die Blobs nach 30 Tagen in Cool und nach 90 Tagen in Archive verschiebt.',
        },
      ],
      correctId: 'd',
      explanation:
        'Lifecycle Management automatisiert Tier-Übergänge anhand von Last-Modified oder Last-Access. Soft Delete zu deaktivieren senkt keine Kosten und erhöht das Risiko.',
    },
    {
      id: 'az104-4',
      topic: 'Compute',
      question:
        'Eine Windows-VM hat eine Datendisk, die durch eine größere Managed Disk ersetzt werden soll, ohne Datenverlust. Was ist der richtige Weg?',
      options: [
        { id: 'a', text: 'Die VM auf eine SKU mit mehr Storage skalieren und neu starten.' },
        {
          id: 'b',
          text: 'VM stoppen und deallokieren, bestehende Managed Disk vergrößern und das Volume im OS erweitern.',
        },
        { id: 'c', text: 'Die Disk löschen und aus einem Snapshot neu erstellen.' },
        { id: 'd', text: 'Einen Azure-Files-Share als neuen Laufwerksbuchstaben einbinden.' },
      ],
      correctId: 'b',
      explanation:
        'Eine Managed Disk lässt sich ohne Datenverlust vergrößern, anschließend erweitern Sie das Volume in Disk Management oder mit diskpart. Ein VM-Resize verändert die Größe der Datendisk nicht.',
    },
    {
      id: 'az104-5',
      topic: 'Networking',
      question:
        'Zwei VNets in derselben Region sollen privat und mit niedriger Latenz miteinander kommunizieren. Welche Option wählen Sie?',
      options: [
        { id: 'a', text: 'Ein Site-to-Site VPN zwischen den beiden VNets.' },
        { id: 'b', text: 'Ein Application Gateway in jedem VNet.' },
        { id: 'c', text: 'VNet Peering zwischen den beiden VNets.' },
        { id: 'd', text: 'Ein Azure Front Door mit Origin in jedem VNet.' },
      ],
      correctId: 'c',
      explanation:
        'VNet Peering routet den Verkehr privat über das Microsoft Backbone mit niedriger Latenz. Ein VPN zwischen VNets in derselben Region erzeugt unnötigen Overhead.',
    },
    {
      id: 'az104-6',
      topic: 'Networking',
      question:
        'Eine VM darf aus dem Internet nur Port 443 empfangen, ausgehend aber jeden Port erreichen. Welche NSG-Konfiguration ist korrekt?',
      options: [
        {
          id: 'a',
          text: 'Eine Inbound Rule, die TCP 443 mit höherer Priorität als die DenyAllInbound Default zulässt; die Outbound Defaults bleiben unverändert.',
        },
        { id: 'b', text: 'Eine Outbound Rule, die alle Ports außer 443 blockiert.' },
        { id: 'c', text: 'Eine Inbound Rule, die alle Ports zulässt, und Outbound Rules, die alles blockieren.' },
        { id: 'd', text: 'Eine Azure Firewall ist für diese Konfiguration zwingend.' },
      ],
      correctId: 'a',
      explanation:
        'Die NSG-Defaults blockieren bereits sämtlichen eingehenden Verkehr außer aus VNet und Load Balancer; Sie ergänzen eine Allow Rule für 443 mit einer Priorität unter 65500. Ausgehend lässt AllowInternetOutbound bereits alles zu.',
    },
    {
      id: 'az104-7',
      topic: 'Backup',
      question:
        'Sie sollen tägliche Backups für 50 Produktions-VMs mit 30 Tagen Retention konfigurieren. Welche Lösung passt am besten?',
      options: [
        { id: 'a', text: 'Snapshots in einem Runbook per Azure CLI scripten.' },
        { id: 'b', text: 'Azure Backup mit einem Recovery Services Vault und einer 30-Tage-Backup-Policy.' },
        { id: 'c', text: 'Azure Site Recovery mit Continuous Replication.' },
        { id: 'd', text: 'Storage Account Snapshots aus dem Portal.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup mit einem Recovery Services Vault ist die native, verwaltete Option für VM-Backups mit flexibler Retention. Site Recovery ist für Disaster Recovery gedacht, nicht für Point-in-Time-Backups.',
    },
    {
      id: 'az104-8',
      topic: 'Monitoring',
      question:
        'Sie wollen einen Alarm erhalten, wenn die CPU einer VM über fünf Minuten im Mittel über 85% liegt. Welche Kombination konfigurieren Sie?',
      options: [
        { id: 'a', text: 'Eine Diagnostic Setting an einen Storage Account mit 7 Tagen Retention.' },
        { id: 'b', text: 'Einen Service Health Alert.' },
        {
          id: 'c',
          text: 'Einen Metric Alert auf Percentage CPU mit Threshold 85, Aggregation Average, Periode 5 Minuten, gekoppelt an eine Action Group.',
        },
        { id: 'd', text: 'Einen Activity Log Alert für die Operation „VirtualMachines/start“.' },
      ],
      correctId: 'c',
      explanation:
        'Metric Alerts werten numerische Telemetrie wie Percentage CPU aus. Activity Log Alerts beobachten Control-Plane-Events, keine Performance-Metriken.',
    },
    {
      id: 'az104-9',
      topic: 'RBAC',
      question:
        'Ein Entwickler soll VMs in einer Resource Group neu starten dürfen, sie aber nicht erstellen, löschen oder neu deployen. Welcher Ansatz folgt dem Least-Privilege-Prinzip?',
      options: [
        { id: 'a', text: 'Owner auf die Resource Group zuweisen.' },
        { id: 'b', text: 'Contributor auf die Subscription zuweisen.' },
        { id: 'c', text: 'Reader auf die Subscription zuweisen.' },
        {
          id: 'd',
          text: 'Eine Custom Role nur mit Microsoft.Compute/virtualMachines/restart/action erstellen und auf die Resource Group zuweisen.',
        },
      ],
      correctId: 'd',
      explanation:
        'Eine Custom Role nur mit der Restart-Action gibt exakt die nötigen Rechte und nicht mehr. Owner und Contributor sind viel zu weit gefasst, Reader erlaubt keinerlei Aktionen.',
    },
    {
      id: 'az104-10',
      topic: 'Storage',
      question:
        'Sie sollen einem externen Partner für 24 Stunden temporär Lesezugriff auf einen einzelnen Blob geben, ohne einen Account Key herauszugeben. Was ist der richtige Weg?',
      options: [
        { id: 'a', text: 'Ein Service SAS mit Read-Permission und 24 Stunden Expiry.' },
        { id: 'b', text: 'Den Account anonym lesbar machen über „Allow Blob anonymous access“.' },
        { id: 'c', text: 'Den Storage Account Key kurzzeitig weitergeben und danach rotieren.' },
        { id: 'd', text: 'Den externen Partner einer Entra-Gruppe hinzufügen und die Rolle Storage Blob Data Reader zuweisen.' },
      ],
      correctId: 'a',
      explanation:
        'Ein Service SAS gewährt eingegrenzten, befristeten Zugriff mit expliziten Permissions und Expiry, ohne den Account Key freizugeben. Anonymer Zugriff ist zu weit, RBAC erfordert eine Entra-Identität.',
    },
  ],
}
