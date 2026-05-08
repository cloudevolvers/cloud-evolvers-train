import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'Zehn Übungsfragen auf AI-900-Niveau. KI- und Machine-Learning-Konzepte, Azure AI Services, Computer Vision, NLP, Conversational AI und Generative AI.',
  ceCourseSlug: 'azure-ai-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'ai900-1',
      topic: 'AI Concepts',
      question:
        'Ein Modell sagt anhand tausender gelabelter Beispiele voraus, ob eine E-Mail Spam ist. Welche Form von Machine Learning ist das?',
      options: [
        { id: 'a', text: 'Supervised Learning mit Klassifikation.' },
        { id: 'b', text: 'Unsupervised Learning mit Clustering.' },
        { id: 'c', text: 'Reinforcement Learning.' },
        { id: 'd', text: 'Anomaly Detection ohne Labels.' },
      ],
      correctId: 'a',
      explanation:
        'Beim Supervised Learning lernt das Modell aus gelabelten Beispielen. Da das Ergebnis eine von zwei Kategorien ist (Spam oder nicht), handelt es sich speziell um Klassifikation.',
    },
    {
      id: 'ai900-2',
      topic: 'Responsible AI',
      question:
        'Welches Microsoft-Responsible-AI-Prinzip ist betroffen, wenn ein Recruiting-Tool Bewerber einer bestimmten Gruppe systematisch niedriger ranked?',
      options: [
        { id: 'a', text: 'Reliability and Safety.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Privacy and Security.' },
      ],
      correctId: 'b',
      explanation:
        'Fairness adressiert die Gleichbehandlung von Gruppen durch ein KI-System. Bias gegenüber einer demografischen Gruppe ist in erster Linie ein Fairness-Problem.',
    },
    {
      id: 'ai900-3',
      topic: 'Computer Vision',
      question:
        'Sie müssen aus gescannten Rechnungen Text inklusive Tabellen und Key-Value Pairs auslesen. Welcher Azure-Dienst passt am besten?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis.' },
        { id: 'b', text: 'Azure AI Custom Vision.' },
        { id: 'c', text: 'Azure AI Document Intelligence.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'c',
      explanation:
        'Document Intelligence (zuvor Form Recognizer) extrahiert strukturierte Daten aus Formularen und Rechnungen, inklusive Tabellen und Key-Value Pairs. Image Analysis ist für generische Bilderkennung gedacht, nicht für Form Extraction.',
    },
    {
      id: 'ai900-4',
      topic: 'NLP',
      question:
        'Ein Team will Reviews automatisch in positiv, neutral oder negativ einsortieren. Welche NLP-Funktion setzen Sie ein?',
      options: [
        { id: 'a', text: 'Key Phrase Extraction.' },
        { id: 'b', text: 'Named Entity Recognition.' },
        { id: 'c', text: 'Language Detection.' },
        { id: 'd', text: 'Sentiment Analysis.' },
      ],
      correctId: 'd',
      explanation:
        'Sentiment Analysis klassifiziert Texte nach Tonalität. Key Phrase Extraction zieht relevante Begriffe heraus und NER markiert Entitäten wie Personen oder Orte.',
    },
    {
      id: 'ai900-5',
      topic: 'Conversational AI',
      question:
        'Sie bauen einen Customer-Support-Chatbot, der FAQ-Antworten aus einer bestehenden Knowledge Base liefert. Welcher Dienst passt?',
      options: [
        { id: 'a', text: 'Azure Machine Learning Designer.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Language Question Answering.' },
        { id: 'd', text: 'Azure AI Speech.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering (Nachfolger von QnA Maker) verbindet eine Knowledge Base mit einer Konversationsschnittstelle. Translator übersetzt zwischen Sprachen, leistet aber kein Q&A.',
    },
    {
      id: 'ai900-6',
      topic: 'Machine Learning',
      question:
        'Welche Metrik eignet sich für die Evaluierung eines Regressionsmodells?',
      options: [
        { id: 'a', text: 'Root Mean Squared Error (RMSE).' },
        { id: 'b', text: 'Precision und Recall.' },
        { id: 'c', text: 'Confusion Matrix.' },
        { id: 'd', text: 'F1-Score.' },
      ],
      correctId: 'a',
      explanation:
        'RMSE misst den durchschnittlichen Fehler zwischen Vorhersage und tatsächlichem Wert und passt zu Regressionsproblemen. Precision, Recall, F1 und Confusion Matrix gehören zur Klassifikation.',
    },
    {
      id: 'ai900-7',
      topic: 'Custom Vision',
      question:
        'Sie wollen ein Modell trainieren, das Pizza-Fotos von Burger-Fotos unterscheidet, mit einem eigenen Datensatz von 200 Bildern pro Klasse. Welcher Dienst passt?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure Bot Service.' },
        { id: 'd', text: 'Azure AI Custom Vision mit Image Classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision trainiert einen eigenen Classifier oder Detector auf einem kleinen Datensatz. Document Intelligence ist für Formulare und Rechnungen gedacht, nicht für Objekterkennung.',
    },
    {
      id: 'ai900-8',
      topic: 'Speech',
      question:
        'Welcher Azure-Dienst wandelt gesprochene Audio in vielen Sprachen in Echtzeit in Text um und umgekehrt?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech (Speech to Text und Text to Speech).' },
        { id: 'c', text: 'Azure AI Vision.' },
        { id: 'd', text: 'Azure AI Anomaly Detector.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Speech liefert Speech to Text und Text to Speech in vielen Sprachen. Translator übersetzt zwischen Sprachen, erzeugt aber selbst kein Audio und keine Transkripte.',
    },
    {
      id: 'ai900-9',
      topic: 'Generative AI',
      question:
        'Was ist der wesentliche Unterschied zwischen einem Large Language Model und einem klassischen regelbasierten Chatbot?',
      options: [
        {
          id: 'a',
          text: 'Ein LLM erzeugt neue Sprache anhand von Mustern in Trainingsdaten, ein regelbasierter Bot reagiert nach vordefinierten Regeln.',
        },
        { id: 'b', text: 'Ein LLM läuft nur On-Premises, ein regelbasierter Bot nur in der Cloud.' },
        { id: 'c', text: 'Ein LLM hat keine API, ein regelbasierter Bot schon.' },
        { id: 'd', text: 'Ein LLM versteht nur Englisch, ein regelbasierter Bot ist mehrsprachig.' },
      ],
      correctId: 'a',
      explanation:
        'LLMs erzeugen Text auf Basis gelernter Muster und reagieren auch auf neue Eingaben. Regelbasierte Bots sind auf explizit ausformulierte Flows und Trigger beschränkt.',
    },
    {
      id: 'ai900-10',
      topic: 'Azure OpenAI',
      question:
        'Eine Organisation will GPT-4 innerhalb von Azure mit Enterprise-Kontrollen über Datenresidenz und Compliance einsetzen. Welcher Dienst bietet das?',
      options: [
        { id: 'a', text: 'OpenAI API direkt über openai.com.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure OpenAI Service.' },
        { id: 'd', text: 'Bing Search.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI Service stellt OpenAI-Modelle innerhalb von Azure mit Regionswahl, Private Networking und Compliance-Zertifizierungen bereit. Die öffentliche OpenAI API liefert diese Enterprise-Kontrollen nicht.',
    },
  ],
}
