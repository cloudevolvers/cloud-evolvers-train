import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'Diez preguntas de práctica al nivel del AI-900. Conceptos de IA y machine learning, Azure AI Services, computer vision, NLP, conversational AI y generative AI.',
  ceCourseSlug: 'azure-ai-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'ai900-1',
      topic: 'AI Concepts',
      question:
        'Un modelo predice si un correo es spam a partir de miles de ejemplos etiquetados. ¿Qué tipo de machine learning es?',
      options: [
        { id: 'a', text: 'Supervised learning con classification.' },
        { id: 'b', text: 'Unsupervised learning con clustering.' },
        { id: 'c', text: 'Reinforcement learning.' },
        { id: 'd', text: 'Anomaly detection sin labels.' },
      ],
      correctId: 'a',
      explanation:
        'En supervised learning el modelo aprende a partir de ejemplos etiquetados. Como la salida cae en una de dos categorías (spam o no), corresponde específicamente a classification.',
    },
    {
      id: 'ai900-2',
      topic: 'Responsible AI',
      question:
        '¿Qué principio de Microsoft Responsible AI se ve afectado cuando una herramienta de selección clasifica de forma sistemática más bajo a candidatos de un grupo determinado?',
      options: [
        { id: 'a', text: 'Reliability and safety.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Privacy and security.' },
      ],
      correctId: 'b',
      explanation:
        'Fairness aborda el trato equitativo a distintos grupos por parte de un sistema de IA. Un sesgo contra un grupo demográfico es ante todo un problema de fairness.',
    },
    {
      id: 'ai900-3',
      topic: 'Computer Vision',
      question:
        'Necesitas extraer texto de facturas escaneadas, incluidas tablas y key-value pairs. ¿Qué servicio de Azure encaja mejor?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis.' },
        { id: 'b', text: 'Azure AI Custom Vision.' },
        { id: 'c', text: 'Azure AI Document Intelligence.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'c',
      explanation:
        'Document Intelligence (antes Form Recognizer) extrae datos estructurados de formularios y facturas, incluidas tablas y key-value pairs. Image Analysis hace reconocimiento de imagen genérico, no extracción de formularios.',
    },
    {
      id: 'ai900-4',
      topic: 'NLP',
      question:
        'Un equipo quiere clasificar reviews automáticamente como positivo, neutro o negativo. ¿Qué función de NLP usas?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'Named entity recognition.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Sentiment analysis.' },
      ],
      correctId: 'd',
      explanation:
        'Sentiment analysis clasifica el texto por tonalidad. Key phrase extraction saca términos relevantes y NER etiqueta entidades como personas o lugares.',
    },
    {
      id: 'ai900-5',
      topic: 'Conversational AI',
      question:
        'Construyes un chatbot de atención al cliente que responde preguntas frecuentes desde una knowledge base existente. ¿Qué servicio encaja mejor?',
      options: [
        { id: 'a', text: 'Azure Machine Learning designer.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Language Question Answering.' },
        { id: 'd', text: 'Azure AI Speech.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering (sucesor de QnA Maker) conecta una knowledge base con una interfaz conversacional. Translator traduce entre idiomas y no resuelve Q&A.',
    },
    {
      id: 'ai900-6',
      topic: 'Machine Learning',
      question:
        '¿Qué métrica conviene para evaluar un modelo de regresión?',
      options: [
        { id: 'a', text: 'Root Mean Squared Error (RMSE).' },
        { id: 'b', text: 'Precision y recall.' },
        { id: 'c', text: 'Confusion matrix.' },
        { id: 'd', text: 'F1-score.' },
      ],
      correctId: 'a',
      explanation:
        'El RMSE mide el error promedio entre valor predicho y valor real, lo que aplica a regresión. Precision, recall, F1 y confusion matrix corresponden a classification.',
    },
    {
      id: 'ai900-7',
      topic: 'Custom Vision',
      question:
        'Quieres entrenar un modelo que distinga fotos de pizza de fotos de hamburguesa, con un dataset propio de 200 imágenes por clase. ¿Qué servicio encaja?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure Bot Service.' },
        { id: 'd', text: 'Azure AI Custom Vision con image classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision entrena un classifier o detector propio sobre un dataset pequeño. Document Intelligence está pensado para formularios y facturas, no para reconocimiento de objetos.',
    },
    {
      id: 'ai900-8',
      topic: 'Speech',
      question:
        '¿Qué servicio de Azure convierte audio hablado a texto y viceversa, en tiempo real y en muchos idiomas?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech (Speech to Text y Text to Speech).' },
        { id: 'c', text: 'Azure AI Vision.' },
        { id: 'd', text: 'Azure AI Anomaly Detector.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Speech entrega Speech to Text y Text to Speech para muchos idiomas. Translator traduce entre idiomas pero no produce audio ni transcripciones.',
    },
    {
      id: 'ai900-9',
      topic: 'Generative AI',
      question:
        '¿Cuál es la diferencia principal entre un Large Language Model y un chatbot rule-based tradicional?',
      options: [
        {
          id: 'a',
          text: 'Un LLM genera lenguaje a partir de patrones aprendidos en los datos de entrenamiento; un bot rule-based responde según reglas escritas previamente.',
        },
        { id: 'b', text: 'Un LLM solo corre on-premises; un bot rule-based solo en cloud.' },
        { id: 'c', text: 'Un LLM no tiene API; un bot rule-based sí.' },
        { id: 'd', text: 'Un LLM solo entiende inglés; un bot rule-based es multilingüe.' },
      ],
      correctId: 'a',
      explanation:
        'Los LLMs generan texto a partir de los patrones aprendidos y reaccionan ante entradas que no han visto antes. Un bot rule-based se limita a flows y triggers escritos de forma explícita.',
    },
    {
      id: 'ai900-10',
      topic: 'Azure OpenAI',
      question:
        'Una organización quiere usar GPT-4 dentro de Azure con controles enterprise sobre residencia de datos y compliance. ¿Qué servicio aporta esto?',
      options: [
        { id: 'a', text: 'La API de OpenAI directamente vía openai.com.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure OpenAI Service.' },
        { id: 'd', text: 'Bing Search.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI Service ofrece los modelos de OpenAI dentro de Azure con elección de región, private networking y certificaciones de compliance. La API pública de OpenAI no aporta esos controles enterprise.',
    },
  ],
}
