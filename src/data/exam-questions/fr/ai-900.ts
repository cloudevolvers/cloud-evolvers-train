import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'Dix questions d\'entraînement au niveau AI-900. Concepts d\'IA et de machine learning, Azure AI Services, computer vision, NLP, conversational AI et generative AI.',
  ceCourseSlug: 'azure-ai-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'ai900-1',
      topic: 'AI Concepts',
      question:
        'Un modèle prédit si un e-mail est du spam à partir de milliers d\'exemples étiquetés. De quel type de machine learning s\'agit-il ?',
      options: [
        { id: 'a', text: 'Supervised learning avec classification.' },
        { id: 'b', text: 'Unsupervised learning avec clustering.' },
        { id: 'c', text: 'Reinforcement learning.' },
        { id: 'd', text: 'Anomaly detection sans labels.' },
      ],
      correctId: 'a',
      explanation:
        'En supervised learning, le modèle apprend à partir d\'exemples étiquetés. Comme la sortie appartient à l\'une de deux catégories (spam ou non), il s\'agit précisément de classification.',
    },
    {
      id: 'ai900-2',
      topic: 'Responsible AI',
      question:
        'Quel principe Microsoft Responsible AI est en cause quand un outil de recrutement classe systématiquement plus bas les candidats d\'un certain groupe ?',
      options: [
        { id: 'a', text: 'Reliability and safety.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Privacy and security.' },
      ],
      correctId: 'b',
      explanation:
        'Le principe Fairness traite l\'égalité de traitement entre groupes par un système d\'IA. Un biais contre un groupe démographique relève d\'abord de la fairness.',
    },
    {
      id: 'ai900-3',
      topic: 'Computer Vision',
      question:
        'Vous devez extraire le texte de factures scannées, y compris les tableaux et les key-value pairs. Quel service Azure convient le mieux ?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis.' },
        { id: 'b', text: 'Azure AI Custom Vision.' },
        { id: 'c', text: 'Azure AI Document Intelligence.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'c',
      explanation:
        'Document Intelligence (anciennement Form Recognizer) extrait les données structurées des formulaires et factures, y compris tableaux et key-value pairs. Image Analysis fait de la reconnaissance d\'image générique, pas de l\'extraction de formulaire.',
    },
    {
      id: 'ai900-4',
      topic: 'NLP',
      question:
        'Une équipe veut classer automatiquement des reviews en positif, neutre ou négatif. Quelle fonctionnalité NLP utilisez-vous ?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'Named entity recognition.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Sentiment analysis.' },
      ],
      correctId: 'd',
      explanation:
        'Sentiment analysis classe les textes selon leur tonalité. Key phrase extraction extrait les termes importants et NER étiquette des entités comme les personnes ou les lieux.',
    },
    {
      id: 'ai900-5',
      topic: 'Conversational AI',
      question:
        'Vous construisez un chatbot de support client qui répond aux FAQ depuis une knowledge base existante. Quel service convient le mieux ?',
      options: [
        { id: 'a', text: 'Azure Machine Learning designer.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Language Question Answering.' },
        { id: 'd', text: 'Azure AI Speech.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering (le successeur de QnA Maker) connecte une knowledge base à une interface conversationnelle. Translator traduit entre langues mais ne fait pas de Q&A.',
    },
    {
      id: 'ai900-6',
      topic: 'Machine Learning',
      question:
        'Quelle métrique convient pour évaluer un modèle de régression ?',
      options: [
        { id: 'a', text: 'Root Mean Squared Error (RMSE).' },
        { id: 'b', text: 'Precision et recall.' },
        { id: 'c', text: 'Confusion matrix.' },
        { id: 'd', text: 'F1-score.' },
      ],
      correctId: 'a',
      explanation:
        'Le RMSE mesure l\'erreur moyenne entre prédiction et valeur réelle, ce qui correspond à la régression. Precision, recall, F1 et confusion matrix relèvent de la classification.',
    },
    {
      id: 'ai900-7',
      topic: 'Custom Vision',
      question:
        'Vous voulez entraîner un modèle qui distingue des photos de pizzas et de burgers, à partir d\'un dataset de 200 images par classe. Quel service convient ?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure Bot Service.' },
        { id: 'd', text: 'Azure AI Custom Vision avec image classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision entraîne un classifier ou un detector personnalisé sur un petit dataset. Document Intelligence cible les formulaires et factures, pas la reconnaissance d\'objets.',
    },
    {
      id: 'ai900-8',
      topic: 'Speech',
      question:
        'Quel service Azure transforme de l\'audio en texte et inversement, en temps réel et dans plusieurs langues ?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech (Speech to Text et Text to Speech).' },
        { id: 'c', text: 'Azure AI Vision.' },
        { id: 'd', text: 'Azure AI Anomaly Detector.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Speech fournit Speech to Text et Text to Speech pour de nombreuses langues. Translator traduit entre langues mais ne produit ni audio ni transcription.',
    },
    {
      id: 'ai900-9',
      topic: 'Generative AI',
      question:
        'Quelle est la différence principale entre un Large Language Model et un chatbot rule-based traditionnel ?',
      options: [
        {
          id: 'a',
          text: 'Un LLM génère du texte à partir des patterns appris pendant l\'entraînement, un bot rule-based suit des règles écrites à l\'avance.',
        },
        { id: 'b', text: 'Un LLM ne tourne qu\'on-premises, un bot rule-based seulement dans le cloud.' },
        { id: 'c', text: 'Un LLM n\'a pas d\'API, un bot rule-based oui.' },
        { id: 'd', text: 'Un LLM ne comprend que l\'anglais, un bot rule-based est multilingue.' },
      ],
      correctId: 'a',
      explanation:
        'Un LLM produit du texte à partir des patterns appris et répond à des entrées qu\'il n\'a jamais vues. Un bot rule-based se limite aux flows et triggers explicitement écrits.',
    },
    {
      id: 'ai900-10',
      topic: 'Azure OpenAI',
      question:
        'Une organisation veut utiliser GPT-4 dans Azure avec des contrôles enterprise sur la résidence des données et la compliance. Quel service apporte cela ?',
      options: [
        { id: 'a', text: 'L\'API OpenAI directement via openai.com.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure OpenAI Service.' },
        { id: 'd', text: 'Bing Search.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI Service met les modèles OpenAI à disposition dans Azure avec choix de région, private networking et certifications de compliance. L\'API publique d\'OpenAI ne fournit pas ces contrôles enterprise.',
    },
  ],
}
