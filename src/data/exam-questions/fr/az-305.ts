import type { ExamSet } from '../types'

export const az305: ExamSet = {
  examCode: 'AZ-305',
  examName: 'Azure Solutions Architect Expert',
  description:
    'Dix questions d\'architecture au niveau AZ-305. Conception identity et governance, choix du data store, business continuity, infrastructure et migration.',
  ceCourseSlug: 'azure-solutions-architect',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-solutions-architect',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az305-1',
      topic: 'Identity Design',
      question:
        'Après une fusion, une organisation se retrouve avec deux Microsoft Entra tenants. Les utilisateurs du tenant A ont besoin d\'un accès ponctuel aux ressources du tenant B sans que l\'IT du tenant B gère leurs comptes. Quel choix de conception convient ?',
      options: [
        { id: 'a', text: 'Fusionner le tenant A et le tenant B en un seul tenant.' },
        { id: 'b', text: 'Cross-tenant access settings avec Entra B2B et invitations guests depuis le tenant B.' },
        { id: 'c', text: 'Mettre en place un Active Directory trust entre les deux tenants.' },
        { id: 'd', text: 'Partager des service principals entre les tenants.' },
      ],
      correctId: 'b',
      explanation:
        'Entra B2B avec cross-tenant access settings invite les utilisateurs en tant que guests, le lifecycle reste dans le home tenant. Fusionner deux tenants n\'est pas une opération supportée et imposerait une migration complète.',
    },
    {
      id: 'az305-2',
      topic: 'Data Storage',
      question:
        'Une application globale a besoin de reads sous 10 ms dans cinq régions et doit gérer des writes en single-region avec failover automatique. Quel service convient le mieux ?',
      options: [
        { id: 'a', text: 'Azure SQL Database single instance avec geo-replication.' },
        { id: 'b', text: 'Azure Database for PostgreSQL Flexible Server.' },
        { id: 'c', text: 'Azure Table Storage en RA-GRS.' },
        { id: 'd', text: 'Azure Cosmos DB en multi-region reads et single-region writes.' },
      ],
      correctId: 'd',
      explanation:
        'Cosmos DB offre une distribution globale, des reads multi-régions sous 10 ms et un failover régional automatique. La geo-replication SQL Database fournit des secondaries en read-only avec une latence supérieure.',
    },
    {
      id: 'az305-3',
      topic: 'Business Continuity',
      question:
        'Une application line-of-business sur une VM Azure doit tenir un RTO d\'1 heure et un RPO de 5 minutes, avec failover vers une autre région. Quel service convient ?',
      options: [
        { id: 'a', text: 'Azure Site Recovery avec cross-region replication.' },
        { id: 'b', text: 'Azure Backup avec snapshots quotidiens.' },
        { id: 'c', text: 'Des Availability Sets dans la même région.' },
        { id: 'd', text: 'Storage account replication en GRS.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Site Recovery réplique en continu et tient des RPO en minutes et des RTO en moins d\'une heure. Azure Backup ne tient pas un RPO de 5 minutes ; les Availability Sets ne protègent pas contre une panne régionale.',
    },
    {
      id: 'az305-4',
      topic: 'Networking',
      question:
        'Une application web sur plusieurs App Services dans deux régions a besoin de global load balancing, WAF et SSL offloading à l\'edge. Que choisissez-vous ?',
      options: [
        { id: 'a', text: 'Un Application Gateway avec WAF dans chaque région.' },
        { id: 'b', text: 'Azure Load Balancer Standard.' },
        { id: 'c', text: 'Azure Front Door Premium.' },
        { id: 'd', text: 'Traffic Manager avec endpoint monitoring.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door Premium combine global anycast load balancing, WAF et SSL offloading à l\'edge. Traffic Manager se limite au routage DNS, sans WAF ni SSL offloading.',
    },
    {
      id: 'az305-5',
      topic: 'Compute',
      question:
        'Une équipe exploite une plateforme microservices de plus de 40 services et a besoin d\'auto-scaling, de mTLS entre services et de déploiements blue-green. Quelle plateforme convient ?',
      options: [
        { id: 'a', text: 'Azure Kubernetes Service avec un service mesh tel qu\'Istio ou Open Service Mesh.' },
        { id: 'b', text: 'Azure App Service avec deployment slots.' },
        { id: 'c', text: 'Azure Container Instances derrière un Application Gateway.' },
        { id: 'd', text: 'Des Azure Virtual Machines avec IIS et Application Request Routing.' },
      ],
      correctId: 'a',
      explanation:
        'AKS avec un service mesh couvre la mise à l\'échelle, le mTLS et les patterns avancés de déploiement pour beaucoup de services. App Service convient pour quelques services mais n\'a pas de mesh.',
    },
    {
      id: 'az305-6',
      topic: 'Integration',
      question:
        'Un pipeline de traitement de commandes doit absorber des pics de 100 000 messages par heure, préserver l\'ordering au sein de partitions clients et accepter des consumers en protocole Apache Kafka. Quel service choisissez-vous ?',
      options: [
        { id: 'a', text: 'Azure Storage Queues.' },
        { id: 'b', text: 'Azure Service Bus Queues en Standard tier.' },
        { id: 'c', text: 'Azure Event Hubs avec endpoint Kafka.' },
        { id: 'd', text: 'Azure Logic Apps avec un built-in connector.' },
      ],
      correctId: 'c',
      explanation:
        'Event Hubs traite des millions d\'events, gère les partitions pour l\'ordering et expose un endpoint Kafka, ce qui permet aux consumers Kafka de fonctionner sans modification. Service Bus a un débit plus faible et pas de protocole Kafka.',
    },
    {
      id: 'az305-7',
      topic: 'Migration',
      question:
        'Un client exploite plusieurs centaines de VMs VMware on-premises et veut les migrer vers Azure avec un downtime minimal et conservation des IP quand c\'est possible. Quelle approche convient ?',
      options: [
        { id: 'a', text: 'Créer manuellement de nouvelles VMs dans Azure et copier les données avec robocopy.' },
        { id: 'b', text: 'Azure Migrate avec le Server Migration tool et une réplication agentless de VMware.' },
        { id: 'c', text: 'Database Migration Service pour l\'ensemble du parc.' },
        { id: 'd', text: 'Storage Sync de tous les disques vers Azure Files.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Migrate Server Migration réplique les VMs VMware en agentless et minimise le downtime au cutover. Database Migration Service ne gère que les bases de données, pas les OS complets.',
    },
    {
      id: 'az305-8',
      topic: 'Security Design',
      question:
        'Une application PaaS doit récupérer des secrets sans stocker de credentials dans le code ou la configuration. Quelle combinaison appliquez-vous ?',
      options: [
        {
          id: 'a',
          text: 'Une managed identity system-assigned attachée à l\'App Service, avec RBAC sur un Azure Key Vault.',
        },
        { id: 'b', text: 'Des connection strings dans Application Settings, rotatées à la main.' },
        { id: 'c', text: 'Un service principal avec client secret dans une environment variable.' },
        { id: 'd', text: 'Un fichier .env local déployé avec l\'application.' },
      ],
      correctId: 'a',
      explanation:
        'Une managed identity s\'authentifie auprès du Key Vault sans secret en code ni en configuration. Un service principal avec client secret ne fait que déplacer le problème de gestion des credentials.',
    },
    {
      id: 'az305-9',
      topic: 'Cost Optimization',
      question:
        'Un workload de production tourne 24/7 avec une capacité prévisible. Quel modèle tarifaire fait économiser le plus par rapport au pay-as-you-go ?',
      options: [
        { id: 'a', text: 'Spot Virtual Machines.' },
        { id: 'b', text: 'Azure Hybrid Benefit seul.' },
        { id: 'c', text: 'Dev/Test pricing.' },
        { id: 'd', text: 'Reserved Instances 3 ans, éventuellement combinées avec Azure Hybrid Benefit.' },
      ],
      correctId: 'd',
      explanation:
        'Les Reserved Instances 3 ans offrent jusqu\'à 72% de remise pour des workloads prévisibles et se cumulent avec Hybrid Benefit. Les Spot VMs ne conviennent pas à la production car elles peuvent être préemptées.',
    },
    {
      id: 'az305-10',
      topic: 'Governance',
      question:
        'Vous concevez une landing zone pour une entreprise multi-business units avec des exigences strictes de naming, de tags et de régions. Quelle combinaison délivre cette structure ?',
      options: [
        { id: 'a', text: 'Une subscription unique avec des tags posés à la main.' },
        { id: 'b', text: 'Des resource locks sur chaque resource group.' },
        {
          id: 'c',
          text: 'Des Management Groups par business unit, Azure Policy pour les règles et un déploiement via un pattern IaC central.',
        },
        { id: 'd', text: 'Un Entra tenant distinct par business unit.' },
      ],
      correctId: 'c',
      explanation:
        'Les Management Groups regroupent les subscriptions et permettent à Azure Policy de s\'appliquer hiérarchiquement, complétés par un pattern IaC pour des déploiements reproductibles. Un tenant par BU casse le SSO et reste inhabituel.',
    },
  ],
}
