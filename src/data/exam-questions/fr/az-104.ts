import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'Dix questions de scénario au niveau AZ-104. Identity, governance, storage, compute, virtual networking, monitoring et backup.',
  ceCourseSlug: 'azure-administrator',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-administrator',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az104-1',
      topic: 'Identity',
      question:
        'Vous gérez un Microsoft Entra tenant de 800 utilisateurs. L\'appartenance aux groupes doit être pilotée automatiquement à partir de l\'attribut « department ». Que configurez-vous ?',
      options: [
        { id: 'a', text: 'Une distribution list dynamique dans Exchange Online.' },
        { id: 'b', text: 'Une administrative unit avec assignations manuelles.' },
        { id: 'c', text: 'Un dynamic group avec une membership rule sur l\'attribut department.' },
        { id: 'd', text: 'Du Conditional Access avec group filtering.' },
      ],
      correctId: 'c',
      explanation:
        'Les dynamic groups dans Entra ID utilisent une rule expression pour calculer l\'appartenance à partir des attributs utilisateurs. Les distribution lists relèvent du courrier, pas de l\'autorisation.',
    },
    {
      id: 'az104-2',
      topic: 'Governance',
      question:
        'Vous voulez empêcher la suppression accidentelle d\'un resource group, tout en autorisant la modification des ressources qu\'il contient. Quel lock appliquez-vous ?',
      options: [
        { id: 'a', text: 'CanNotDelete sur le resource group.' },
        { id: 'b', text: 'ReadOnly sur le resource group.' },
        { id: 'c', text: 'CanNotDelete au niveau de la subscription.' },
        { id: 'd', text: 'Azure Policy avec un effect deny sur les actions delete.' },
      ],
      correctId: 'a',
      explanation:
        'Un lock CanNotDelete sur le resource group bloque la suppression mais autorise les mises à jour. ReadOnly bloquerait aussi les modifications, ce qui n\'est pas l\'objectif.',
    },
    {
      id: 'az104-3',
      topic: 'Storage',
      question:
        'Vous utilisez un storage account general-purpose v2. Un fichier de log n\'est plus lu après 30 jours mais doit rester archivé trois ans pour audit. Comment réduisez-vous le coût sans perte de données ?',
      options: [
        { id: 'a', text: 'Le déplacer manuellement vers un storage account dans une région moins chère.' },
        { id: 'b', text: 'Désactiver le soft delete sur le container.' },
        { id: 'c', text: 'Passer le compte de GRS à LRS.' },
        {
          id: 'd',
          text: 'Configurer une Lifecycle Management policy qui passe les blobs en Cool après 30 jours et en Archive après 90 jours.',
        },
      ],
      correctId: 'd',
      explanation:
        'Lifecycle Management automatise les transitions de tier sur la base de last-modified ou last-access. Désactiver le soft delete ne réduit aucun coût et augmente le risque.',
    },
    {
      id: 'az104-4',
      topic: 'Compute',
      question:
        'Vous voulez remplacer la data disk d\'une VM Windows par une managed disk plus grande, en conservant les données. Quelle est la bonne approche ?',
      options: [
        { id: 'a', text: 'Redimensionner la VM vers une SKU avec plus de stockage et redémarrer.' },
        {
          id: 'b',
          text: 'Stopper et désallouer la VM, agrandir la managed disk existante puis étendre le volume dans l\'OS.',
        },
        { id: 'c', text: 'Supprimer la disk et la recréer à partir d\'un snapshot.' },
        { id: 'd', text: 'Monter un share Azure Files sur une nouvelle lettre de lecteur.' },
      ],
      correctId: 'b',
      explanation:
        'Agrandir une managed disk préserve les données ; il suffit ensuite d\'étendre le volume dans Disk Management ou avec diskpart. Redimensionner la VM ne change pas la taille de la data disk.',
    },
    {
      id: 'az104-5',
      topic: 'Networking',
      question:
        'Deux VNets dans la même région doivent communiquer en privé avec une faible latence. Quelle option choisissez-vous ?',
      options: [
        { id: 'a', text: 'Un VPN site-to-site entre les deux VNets.' },
        { id: 'b', text: 'Un Application Gateway dans chaque VNet.' },
        { id: 'c', text: 'Un VNet peering entre les deux VNets.' },
        { id: 'd', text: 'Un Azure Front Door avec un origin dans chaque VNet.' },
      ],
      correctId: 'c',
      explanation:
        'Le VNet peering route le trafic en privé via le backbone Microsoft avec une faible latence. Un VPN entre deux VNets dans la même région ajoute une charge inutile.',
    },
    {
      id: 'az104-6',
      topic: 'Networking',
      question:
        'Une VM ne doit recevoir que le port 443 depuis internet, mais peut sortir sur n\'importe quel port. Quelle configuration NSG est correcte ?',
      options: [
        {
          id: 'a',
          text: 'Une inbound rule autorisant TCP 443 avec une priorité supérieure à la default DenyAllInbound ; on laisse les règles outbound par défaut.',
        },
        { id: 'b', text: 'Une outbound rule qui bloque tous les ports sauf 443.' },
        { id: 'c', text: 'Une inbound rule qui autorise tous les ports et des outbound rules qui bloquent tout.' },
        { id: 'd', text: 'Une Azure Firewall est obligatoire pour cette configuration.' },
      ],
      correctId: 'a',
      explanation:
        'Les défauts NSG bloquent déjà tout trafic entrant sauf VNet et load balancer ; vous ajoutez une allow rule pour 443 avec une priorité inférieure à 65500. En sortie, AllowInternetOutbound autorise déjà tout.',
    },
    {
      id: 'az104-7',
      topic: 'Backup',
      question:
        'Vous devez configurer des backups quotidiens pour 50 VMs de production avec une rétention de 30 jours. Quelle est la solution la plus appropriée ?',
      options: [
        { id: 'a', text: 'Scripter des snapshots avec Azure CLI dans un runbook.' },
        { id: 'b', text: 'Azure Backup avec un Recovery Services Vault et une backup policy de 30 jours.' },
        { id: 'c', text: 'Azure Site Recovery avec continuous replication.' },
        { id: 'd', text: 'Des snapshots de storage account depuis le portail.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup avec un Recovery Services Vault est la solution native et managée pour le backup de VMs avec rétention flexible. Site Recovery sert à la disaster recovery, pas au backup point-in-time.',
    },
    {
      id: 'az104-8',
      topic: 'Monitoring',
      question:
        'Vous voulez être alerté quand le CPU d\'une VM dépasse 85% en moyenne pendant cinq minutes. Quelle combinaison configurez-vous ?',
      options: [
        { id: 'a', text: 'Une diagnostic setting vers un storage account avec 7 jours de rétention.' },
        { id: 'b', text: 'Un Service Health alert.' },
        {
          id: 'c',
          text: 'Une metric alert sur Percentage CPU avec threshold 85, aggregation Average, période 5 minutes, reliée à une action group.',
        },
        { id: 'd', text: 'Un Activity Log alert sur l\'opération « VirtualMachines/start ».' },
      ],
      correctId: 'c',
      explanation:
        'Les metric alerts évaluent une télémétrie numérique comme Percentage CPU. Les Activity Log alerts surveillent les événements de control-plane, pas les métriques de performance.',
    },
    {
      id: 'az104-9',
      topic: 'RBAC',
      question:
        'Un développeur doit pouvoir redémarrer les VMs d\'un resource group, sans pouvoir les créer, supprimer ni redéployer. Quelle approche respecte le principe de least privilege ?',
      options: [
        { id: 'a', text: 'Lui assigner Owner sur le resource group.' },
        { id: 'b', text: 'Lui assigner Contributor sur la subscription.' },
        { id: 'c', text: 'Lui assigner Reader sur la subscription.' },
        {
          id: 'd',
          text: 'Créer une custom role contenant uniquement Microsoft.Compute/virtualMachines/restart/action et l\'assigner sur le resource group.',
        },
      ],
      correctId: 'd',
      explanation:
        'Une custom role limitée à l\'action restart donne exactement les droits nécessaires et rien de plus. Owner et Contributor sont trop larges, Reader n\'autorise aucune action.',
    },
    {
      id: 'az104-10',
      topic: 'Storage',
      question:
        'Vous devez donner à un partenaire externe un accès read-only à un blob précis, pendant 24 heures, sans partager d\'account key. Quelle est la bonne approche ?',
      options: [
        { id: 'a', text: 'Un service SAS avec permission read et une expiry de 24 heures.' },
        { id: 'b', text: 'Rendre le compte lisible anonymement avec « Allow Blob anonymous access ».' },
        { id: 'c', text: 'Transmettre temporairement la storage account key puis la rotater.' },
        { id: 'd', text: 'Ajouter le partenaire à un Entra group et lui assigner Storage Blob Data Reader.' },
      ],
      correctId: 'a',
      explanation:
        'Un service SAS donne un accès limité et temporaire avec des permissions et une expiry explicites, sans exposer l\'account key. L\'accès anonyme est trop large, RBAC exige une identité Entra.',
    },
  ],
}
