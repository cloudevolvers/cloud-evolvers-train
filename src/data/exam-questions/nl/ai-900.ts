import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'Tien oefenvragen op AI-900 niveau. AI- en machine learning-concepten, Azure AI Services, computer vision, NLP, conversational AI en generative AI.',
  ceCourseSlug: 'azure-ai-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'ai900-1',
      topic: 'AI Concepts',
      question:
        'Een model voorspelt of een e-mail spam is op basis van duizenden gelabelde voorbeelden. Welke vorm van machine learning is dit?',
      options: [
        { id: 'a', text: 'Supervised learning met classificatie.' },
        { id: 'b', text: 'Unsupervised learning met clustering.' },
        { id: 'c', text: 'Reinforcement learning.' },
        { id: 'd', text: 'Anomaly detection zonder labels.' },
      ],
      correctId: 'a',
      explanation:
        'Bij supervised learning leert het model van gelabelde voorbeelden. Omdat de uitkomst tussen twee categorieen valt (spam of niet), is dit specifiek classificatie.',
    },
    {
      id: 'ai900-2',
      topic: 'Responsible AI',
      question:
        'Welk Microsoft Responsible AI-principe is in het geding wanneer een wervingstool kandidaten van een bepaalde groep systematisch lager rankt?',
      options: [
        { id: 'a', text: 'Reliability and safety.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Privacy and security.' },
      ],
      correctId: 'b',
      explanation:
        'Fairness gaat over gelijke behandeling van groepen door een AI-systeem. Bias tegen demografische groepen is bij uitstek een fairness-probleem.',
    },
    {
      id: 'ai900-3',
      topic: 'Computer Vision',
      question:
        'Je moet automatisch tekst uit gescande facturen halen, inclusief tabellen en key-value pairs. Welke Azure-dienst past het best?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis.' },
        { id: 'b', text: 'Azure AI Custom Vision.' },
        { id: 'c', text: 'Azure AI Document Intelligence.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'c',
      explanation:
        'Document Intelligence (voorheen Form Recognizer) leest gestructureerde data uit formulieren en facturen, inclusief tabellen en key-value pairs. Image Analysis doet generieke beeldherkenning, niet form-extractie.',
    },
    {
      id: 'ai900-4',
      topic: 'NLP',
      question:
        'Een team wil reviews automatisch indelen in positief, neutraal of negatief. Welke NLP-functie pas je toe?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'Named entity recognition.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Sentiment analysis.' },
      ],
      correctId: 'd',
      explanation:
        'Sentiment analysis classificeert tekst op gevoelstoon. Key phrase extraction haalt belangrijke termen eruit en NER markeert entiteiten als personen of plaatsen.',
    },
    {
      id: 'ai900-5',
      topic: 'Conversational AI',
      question:
        'Je bouwt een chatbot voor klantondersteuning die FAQ-antwoorden geeft op basis van een bestaand kennisbestand. Welke dienst is het meest geschikt?',
      options: [
        { id: 'a', text: 'Azure Machine Learning designer.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Language Question Answering.' },
        { id: 'd', text: 'Azure AI Speech.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering (de opvolger van QnA Maker) is gemaakt om een knowledge base te koppelen aan een conversatie-interface. Translator vertaalt tussen talen, geen Q&A.',
    },
    {
      id: 'ai900-6',
      topic: 'Machine Learning',
      question:
        'Welke metric is geschikt om de prestaties van een regressie-model te evalueren?',
      options: [
        { id: 'a', text: 'Root Mean Squared Error (RMSE).' },
        { id: 'b', text: 'Precision en recall.' },
        { id: 'c', text: 'Confusion matrix.' },
        { id: 'd', text: 'F1-score.' },
      ],
      correctId: 'a',
      explanation:
        'RMSE meet de gemiddelde fout tussen voorspelde en werkelijke waarden, geschikt voor regressie. Precision, recall, F1 en confusion matrix horen bij classificatie.',
    },
    {
      id: 'ai900-7',
      topic: 'Custom Vision',
      question:
        'Je wilt een model trainen dat foto\'s van pizza\'s onderscheidt van foto\'s van burgers, met een eigen dataset van 200 afbeeldingen per klasse. Welke dienst past?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure Bot Service.' },
        { id: 'd', text: 'Azure AI Custom Vision met image classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision laat je een eigen classifier of detector trainen met een kleine, eigen dataset. Document Intelligence is voor formulieren en facturen, niet voor objectherkenning.',
    },
    {
      id: 'ai900-8',
      topic: 'Speech',
      question:
        'Welke Azure-dienst zet gesproken Nederlandstalige audio realtime om naar tekst en vice versa?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech (Speech to Text en Text to Speech).' },
        { id: 'c', text: 'Azure AI Vision.' },
        { id: 'd', text: 'Azure AI Anomaly Detector.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Speech levert Speech to Text en Text to Speech voor veel talen. Translator vertaalt tussen talen maar produceert zelf geen audio of transcripties.',
    },
    {
      id: 'ai900-9',
      topic: 'Generative AI',
      question:
        'Wat is het belangrijkste verschil tussen een Large Language Model en een traditioneel rule-based chatbot?',
      options: [
        {
          id: 'a',
          text: 'Een LLM genereert nieuwe taal op basis van patronen in trainingsdata, een rule-based bot reageert volgens vooraf geschreven regels.',
        },
        { id: 'b', text: 'Een LLM draait alleen on-premises, een rule-based bot draait alleen in de cloud.' },
        { id: 'c', text: 'Een LLM heeft geen API, een rule-based bot wel.' },
        { id: 'd', text: 'Een LLM begrijpt alleen Engels, een rule-based bot meertalig.' },
      ],
      correctId: 'a',
      explanation:
        'LLM\'s genereren tekst op basis van geleerde patronen en kunnen op nieuwe input reageren. Rule-based bots beperken zich tot expliciet geschreven flows en triggers.',
    },
    {
      id: 'ai900-10',
      topic: 'Azure OpenAI',
      question:
        'Een organisatie wil GPT-4 gebruiken binnen de Azure-omgeving met enterprise-controles op data-residentie en compliance. Welke service biedt dit?',
      options: [
        { id: 'a', text: 'OpenAI API direct via openai.com.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure OpenAI Service.' },
        { id: 'd', text: 'Bing Search.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI Service biedt OpenAI-modellen binnen Azure met regio-keuze, private networking en compliance-certificeringen. De publieke OpenAI API mist deze enterprise-controles.',
    },
  ],
}
