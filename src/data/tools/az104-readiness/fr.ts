import type { QuizLangPack } from './types';

export const fr: QuizLangPack = {
  lang: 'fr',
  htmlLang: 'fr',
  ui: {
    seoTitle: 'Test de préparation AZ-104 - Auto-évaluation Azure Administrator gratuite',
    seoDescription:
      'Test de préparation AZ-104 gratuit en 12 questions couvrant les cinq domaines de l\'examen Microsoft Azure Administrator. Obtenez un retour par domaine pour savoir si vous êtes prêt à vous inscrire.',
    breadcrumbTools: 'Outils',
    breadcrumbQuiz: 'Test de préparation AZ-104',
    eyebrow: 'Gratuit · 12 questions · ~6 minutes',
    title: 'Test de préparation AZ-104',
    lede: 'Douze questions de mise en situation couvrant les cinq domaines de l\'examen Azure Administrator. Les résultats sont donnés par domaine pour que vous sachiez exactement où concentrer votre temps d\'étude avant de vous inscrire.',
    bullet1: 'Trois questions par domaine principal, pondérées selon le vrai plan de l\'examen.',
    bullet2: 'Explications pour chaque réponse à la fin, pas seulement un score.',
    bullet3: 'Aucune inscription, aucune collecte d\'e-mail. Fonctionne entièrement dans votre navigateur.',
    startButton: 'Démarrer le test',
    questionOf: 'Question {current} sur {total}',
    backButton: 'Retour',
    nextButton: 'Suivant',
    seeResults: 'Voir les résultats',
    resultsEyebrow: 'Résultats',
    scoreHeading: 'Vous avez obtenu {correct} sur {total}',
    byDomain: 'Par domaine',
    examPortion: 'de l\'examen',
    answerReview: 'Révision des réponses',
    correctLabel: 'Correct :',
    verdictLikelyReady: 'Probablement prêt',
    verdictClose: 'Proche, mais exposé',
    verdictNotYet: 'Pas encore',
    adviceLikelyReady:
      'Les candidats qui obtiennent ce score à notre prétest réussissent généralement le vrai examen. Réservez une date et comblez les lacunes dans les domaines faibles en lab.',
    adviceClose:
      'Les connaissances sont solides mais certains domaines vous coûteront des points. Consacrez une semaine par domaine faible en labs pratiques avant de vous inscrire.',
    adviceNotYet:
      'Vous inscrire maintenant risque d\'entraîner un premier échec. Un cours AZ-104 structuré avec des labs vous y amènera en 2 à 4 semaines.',
    seeCourseCta: 'Voir le cours AZ-104',
    retakeButton: 'Recommencer',
    showInEnglish: 'Afficher en anglais',
    showInLang: 'Afficher en {lang}',
    languageSwitcherLabel: 'Langue',
    domainLabels: {
      'identity-governance': 'Identité & gouvernance',
      storage: 'Stockage',
      compute: 'Calcul',
      networking: 'Réseau',
      'monitoring-backup': 'Surveillance & sauvegarde',
    },
  },
  questions: [
    {
      id: 'q1',
      domain: 'identity-governance',
      question:
        'Quel rôle Azure RBAC accorde l\'autorisation de gérer toutes les ressources d\'un abonnement, y compris l\'attribution de rôles à d\'autres utilisateurs, mais ne peut pas gérer Azure AD ?',
      options: [
        { id: 'a', text: 'Contributor' },
        { id: 'b', text: 'Owner' },
        { id: 'c', text: 'User Access Administrator' },
        { id: 'd', text: 'Global Administrator' },
      ],
      correctId: 'b',
      explanation:
        'Owner dispose d\'une gestion complète et d\'une attribution de rôles dans la portée. Contributor ne peut pas attribuer de rôles. Global Administrator est un rôle Entra ID, pas un rôle Azure RBAC.',
    },
    {
      id: 'q2',
      domain: 'identity-governance',
      question:
        'Vous devez appliquer automatiquement une étiquette à toutes les nouvelles ressources d\'un groupe de ressources. Quelle fonctionnalité utilisez-vous ?',
      options: [
        { id: 'a', text: 'Resource Lock' },
        { id: 'b', text: 'Azure Policy avec un effet modify ou append' },
        { id: 'c', text: 'Héritage du groupe de gestion' },
        { id: 'd', text: 'Étiquetage manuel lors du déploiement' },
      ],
      correctId: 'b',
      explanation:
        'Azure Policy avec l\'effet modify ou append peut appliquer ou ajouter automatiquement des étiquettes lors de la création de ressources. Les verrous empêchent les modifications, ils n\'ajoutent pas de métadonnées.',
    },
    {
      id: 'q3',
      domain: 'identity-governance',
      question:
        'Une alerte de coût doit se déclencher lorsque les dépenses prévisionnelles dépasseront le budget. Que configurez-vous ?',
      options: [
        { id: 'a', text: 'Un budget Cost Management avec une condition d\'alerte prévisionnelle' },
        { id: 'b', text: 'Une alerte de métrique Azure Monitor sur TotalCost' },
        { id: 'c', text: 'Une alerte Service Health' },
        { id: 'd', text: 'Une requête planifiée dans Log Analytics' },
      ],
      correctId: 'a',
      explanation:
        'Les budgets Cost Management prennent en charge les types d\'alertes réelles et prévisionnelles. La variante prévisionnelle projette les dépenses de fin de mois en fonction du rythme de consommation actuel.',
    },
    {
      id: 'q4',
      domain: 'storage',
      question:
        'Un compte de stockage contient un conteneur blob accessible sans jeton SAS uniquement depuis une plage d\'adresses IP d\'entreprise spécifique. Quelle configuration permet d\'y parvenir ?',
      options: [
        { id: 'a', text: 'Activer l\'accès anonyme aux blobs sur le conteneur' },
        {
          id: 'b',
          text: 'Configurer le pare-feu de stockage pour autoriser la plage IP d\'entreprise et accorder l\'accès via une identité Entra ou une clé partagée',
        },
        { id: 'c', text: 'Émettre un jeton SAS de longue durée' },
        { id: 'd', text: 'Configurer le compte de stockage en accès private endpoint uniquement' },
      ],
      correctId: 'b',
      explanation:
        'Le pare-feu de stockage associé à un accès authentifié (Entra ou clé) restreint l\'accès à la plage IP tout en maintenant l\'authentification. L\'accès anonyme contourne le pare-feu dans certains scénarios et expose les données.',
    },
    {
      id: 'q5',
      domain: 'storage',
      question:
        'Vous avez besoin d\'une gestion du cycle de vie pour déplacer les blobs vers le niveau froid après 30 jours et les archiver après 90 jours. Où configurez-vous cela ?',
      options: [
        { id: 'a', text: 'Sur chaque blob individuellement via des métadonnées' },
        { id: 'b', text: 'Sur le compte de stockage via une stratégie de gestion du cycle de vie en JSON' },
        { id: 'c', text: 'Via Azure Policy au niveau de l\'abonnement' },
        { id: 'd', text: 'Via Defender for Storage' },
      ],
      correctId: 'b',
      explanation:
        'Les stratégies de cycle de vie sont définies sous forme de règles JSON au niveau du compte de stockage et s\'appliquent aux conteneurs et préfixes spécifiés.',
    },
    {
      id: 'q6',
      domain: 'storage',
      question:
        'Quelle option de redondance conserve trois copies des données dans une seule région et trois copies supplémentaires dans une région jumelée, avec accès en lecture à la région secondaire ?',
      options: [
        { id: 'a', text: 'LRS' },
        { id: 'b', text: 'ZRS' },
        { id: 'c', text: 'GRS' },
        { id: 'd', text: 'RA-GRS' },
      ],
      correctId: 'd',
      explanation:
        'RA-GRS ajoute un accès en lecture à la région secondaire en plus de la réplication GRS. GRS réplique mais la région secondaire n\'est pas directement lisible.',
    },
    {
      id: 'q7',
      domain: 'compute',
      question:
        'Un groupe de machines virtuelles identiques doit évoluer en fonction d\'une utilisation moyenne du CPU supérieure à 70 % pendant 10 minutes. Quelle fonctionnalité configurez-vous ?',
      options: [
        { id: 'a', text: 'Mise à l\'échelle manuelle' },
        { id: 'b', text: 'Règle de mise à l\'échelle automatique personnalisée avec un déclencheur de métrique et une fenêtre temporelle' },
        { id: 'c', text: 'Availability Set' },
        { id: 'd', text: 'Runbook Azure Automation' },
      ],
      correctId: 'b',
      explanation:
        'Les règles de mise à l\'échelle automatique utilisent des déclencheurs basés sur des métriques avec un type d\'agrégation, un seuil et une fenêtre temporelle pour ajouter ou supprimer des instances.',
    },
    {
      id: 'q8',
      domain: 'compute',
      question:
        'Vous devez vous assurer que les machines virtuelles sont réparties sur des domaines de mise à jour et des domaines d\'erreur au sein d\'un seul centre de données. Que utilisez-vous ?',
      options: [
        { id: 'a', text: 'Zones de disponibilité' },
        { id: 'b', text: 'Availability Set' },
        { id: 'c', text: 'Proximity Placement Group' },
        { id: 'd', text: 'Paire de régions' },
      ],
      correctId: 'b',
      explanation:
        'Les Availability Sets répartissent les machines virtuelles sur les domaines de mise à jour et d\'erreur au sein d\'un seul centre de données. Les zones de disponibilité couvrent plusieurs centres de données dans une région.',
    },
    {
      id: 'q9',
      domain: 'compute',
      question:
        'Un déploiement de modèle ARM échoue car une ressource dépend d\'une autre qui n\'est pas encore provisionnée. Quelle propriété ajoutez-vous ?',
      options: [
        { id: 'a', text: 'condition' },
        { id: 'b', text: 'dependsOn' },
        { id: 'c', text: 'mode: Incremental' },
        { id: 'd', text: 'copy' },
      ],
      correctId: 'b',
      explanation:
        'dependsOn déclare un ordre explicite entre les ressources lors du déploiement.',
    },
    {
      id: 'q10',
      domain: 'networking',
      question:
        'Deux réseaux virtuels dans la même région doivent communiquer sans passer par l\'internet public, le trafic restant sur le backbone Microsoft. Que configurez-vous ?',
      options: [
        { id: 'a', text: 'Connexion de passerelle VPN' },
        { id: 'b', text: 'Peering de réseaux virtuels' },
        { id: 'c', text: 'ExpressRoute' },
        { id: 'd', text: 'Point de terminaison de service' },
      ],
      correctId: 'b',
      explanation:
        'Le peering de réseaux virtuels connecte deux VNets directement via le backbone Microsoft. Le peering dans la même région est la solution la plus simple.',
    },
    {
      id: 'q11',
      domain: 'networking',
      question:
        'Vous devez autoriser le trafic sortant d\'un sous-réseau uniquement vers des noms de domaine complets spécifiques et bloquer tout le reste. Quel service gère cela ?',
      options: [
        { id: 'a', text: 'Network Security Group avec des règles FQDN' },
        { id: 'b', text: 'Azure Firewall avec des règles d\'application' },
        { id: 'c', text: 'Route définie par l\'utilisateur' },
        { id: 'd', text: 'Balise de service' },
      ],
      correctId: 'b',
      explanation:
        'Les NSG filtrent par IP/port, pas par FQDN. Les règles d\'application Azure Firewall prennent en charge le filtrage par FQDN pour le trafic HTTP/S sortant.',
    },
    {
      id: 'q12',
      domain: 'monitoring-backup',
      question:
        'Un disque managé nécessite des sauvegardes quotidiennes conservées pendant 30 jours. Quel service Azure utilisez-vous ?',
      options: [
        { id: 'a', text: 'Azure Site Recovery' },
        { id: 'b', text: 'Recovery Services Vault avec une stratégie Azure Backup' },
        { id: 'c', text: 'Instantané manuel via un runbook' },
        { id: 'd', text: 'Suppression réversible du compte de stockage' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup avec un Recovery Services Vault fournit des sauvegardes planifiées de disques et de machines virtuelles avec une stratégie de rétention. Site Recovery est destiné à la réplication et à la reprise d\'activité, pas aux sauvegardes ponctuelles.',
    },
  ],
};
