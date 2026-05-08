import type { ExamSet } from '../types'

export const az900: ExamSet = {
  examCode: 'AZ-900',
  examName: 'Azure Fundamentals',
  description:
    'Dix questions d\'entraînement au niveau de l\'examen officiel AZ-900. Concepts cloud, architecture Azure, services principaux, sécurité, gouvernance et tarification.',
  ceCourseSlug: 'azure-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'az900-1',
      topic: 'Cloud Concepts',
      question:
        'Une organisation souhaite ne payer que le compute réellement consommé et pouvoir augmenter ou réduire la capacité à la minute. Quelle caractéristique cloud correspond le mieux ?',
      options: [
        { id: 'a', text: 'Consumption-based pricing.' },
        { id: 'b', text: 'High availability.' },
        { id: 'c', text: 'Disaster recovery.' },
        { id: 'd', text: 'Fault tolerance.' },
      ],
      correctId: 'a',
      explanation:
        'Le consumption-based pricing (pay-as-you-go) facture l\'usage réel, souvent à la minute ou à la seconde. La high availability concerne la disponibilité, pas le modèle de coût.',
    },
    {
      id: 'az900-2',
      topic: 'Cloud Models',
      question:
        'Une équipe de développement veut exécuter une application web sans gérer les VMs sous-jacentes, les patches d\'OS ou la configuration du serveur web. Quel modèle de service convient ?',
      options: [
        { id: 'a', text: 'Infrastructure as a Service (IaaS).' },
        { id: 'b', text: 'Datacenter on-premises.' },
        { id: 'c', text: 'Platform as a Service (PaaS).' },
        { id: 'd', text: 'Hébergement en colocation.' },
      ],
      correctId: 'c',
      explanation:
        'Le PaaS fournit une plateforme runtime où Microsoft gère l\'OS, les patches et le serveur web. En IaaS, vous gérez encore l\'OS et le serveur web vous-même.',
    },
    {
      id: 'az900-3',
      topic: 'Azure Architecture',
      question:
        'Quelle affirmation sur les régions Azure et les availability zones est exacte ?',
      options: [
        { id: 'a', text: 'Une availability zone contient toujours au moins trois régions.' },
        {
          id: 'b',
          text: 'Une availability zone est un datacenter physiquement séparé au sein d\'une région, avec son propre courant, sa propre climatisation et son propre réseau.',
        },
        { id: 'c', text: 'Les availability zones existent uniquement dans Azure Government, pas dans les régions publiques.' },
        { id: 'd', text: 'Chaque région possède exactement deux availability zones.' },
      ],
      correctId: 'b',
      explanation:
        'Une availability zone est un datacenter physiquement distinct dans une région, avec sa propre alimentation, sa propre climatisation et son propre réseau. Toutes les régions n\'ont pas de zones et leur nombre varie (souvent trois).',
    },
    {
      id: 'az900-4',
      topic: 'Azure Services',
      question:
        'Vous devez stocker plusieurs centaines de millions de fichiers vidéo et image non structurés au plus bas coût de stockage. Quel service choisissez-vous ?',
      options: [
        { id: 'a', text: 'Azure SQL Database.' },
        { id: 'b', text: 'Azure Files.' },
        { id: 'c', text: 'Azure Cosmos DB.' },
        { id: 'd', text: 'Azure Blob Storage.' },
      ],
      correctId: 'd',
      explanation:
        'Blob Storage est conçu pour des volumes importants de données non structurées comme les médias et offre le prix le plus bas par Go. Azure Files fournit des shares SMB et NFS plus chers au Go.',
    },
    {
      id: 'az900-5',
      topic: 'Identity',
      question:
        'Quel service Azure utilisez-vous pour gérer les comptes utilisateurs et le single sign-on des applications cloud ?',
      options: [
        { id: 'a', text: 'Microsoft Entra ID.' },
        { id: 'b', text: 'Azure Key Vault.' },
        { id: 'c', text: 'Azure Monitor.' },
        { id: 'd', text: 'Azure Policy.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Entra ID (anciennement Azure Active Directory) est le service d\'identité pour l\'authentification et le SSO. Key Vault gère les secrets et certificats, pas les comptes utilisateurs.',
    },
    {
      id: 'az900-6',
      topic: 'Governance',
      question:
        'Une équipe compliance veut imposer que tous les nouveaux storage accounts d\'une subscription soient créés uniquement en West Europe. Quel service convient ?',
      options: [
        { id: 'a', text: 'Azure Blueprints.' },
        { id: 'b', text: 'Microsoft Defender for Cloud.' },
        { id: 'c', text: 'Azure Policy.' },
        { id: 'd', text: 'Azure Advisor.' },
      ],
      correctId: 'c',
      explanation:
        'Azure Policy évalue et bloque les ressources qui sortent d\'une règle, par exemple une région autorisée. Defender for Cloud cible la security posture, pas les règles de déploiement.',
    },
    {
      id: 'az900-7',
      topic: 'Pricing',
      question:
        'Quel outil donne une estimation mensuelle pour une combinaison de ressources Azure avant leur création ?',
      options: [
        { id: 'a', text: 'Azure Pricing Calculator.' },
        { id: 'b', text: 'Azure Cost Management.' },
        { id: 'c', text: 'Azure Advisor.' },
        { id: 'd', text: 'Total Cost of Ownership Calculator.' },
      ],
      correctId: 'a',
      explanation:
        'La Pricing Calculator estime le coût de ressources non encore déployées. Cost Management montre la consommation réelle des ressources existantes. Le TCO Calculator compare cloud et on-premises.',
    },
    {
      id: 'az900-8',
      topic: 'Networking',
      question:
        'Quel service relie un réseau on-premises à Azure via une liaison privée et dédiée, sans passer par l\'internet public ?',
      options: [
        { id: 'a', text: 'VPN Gateway en point-to-site.' },
        { id: 'b', text: 'Azure ExpressRoute.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure Bastion.' },
      ],
      correctId: 'b',
      explanation:
        'ExpressRoute fournit une liaison privée via un opérateur télécom, le trafic ne touche pas l\'internet public. Un VPN Gateway chiffre du trafic qui transite par l\'internet public.',
    },
    {
      id: 'az900-9',
      topic: 'Security',
      question:
        'Quelle responsabilité reste toujours côté client dans le shared responsibility model, quel que soit le modèle (IaaS, PaaS ou SaaS) ?',
      options: [
        { id: 'a', text: 'Le patching de l\'OS hôte.' },
        { id: 'b', text: 'L\'exploitation des datacenters physiques.' },
        { id: 'c', text: 'La protection des données, des comptes et des endpoints.' },
        { id: 'd', text: 'La maintenance de la plateforme de virtualisation.' },
      ],
      correctId: 'c',
      explanation:
        'Les données, les identités et les endpoints restent à la charge du client dans tous les modèles. Microsoft gère toujours la couche physique et la virtualisation.',
    },
    {
      id: 'az900-10',
      topic: 'SLAs and Lifecycle',
      question:
        'Une ressource est marquée « Preview » dans Azure. Que cela implique-t-il pour le service level agreement ?',
      options: [
        { id: 'a', text: 'La preview bénéficie du même SLA de 99,9% que la general availability.' },
        { id: 'b', text: 'Les fonctions en preview reçoivent un SLA renforcé parce qu\'elles peuvent encore être instables.' },
        { id: 'c', text: 'Le SLA ne s\'applique qu\'avec un plan de support Premium.' },
        { id: 'd', text: 'Les previews ne sont pas couvertes par un SLA financier et ne sont pas destinées à la production.' },
      ],
      correctId: 'd',
      explanation:
        'Les services en preview n\'ont pas de SLA financier et Microsoft déconseille leur usage en production. Le SLA standard s\'applique uniquement à partir de la general availability.',
    },
  ],
}
