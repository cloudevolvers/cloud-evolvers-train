import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'Ten practice questions at AI-900 level. AI and machine learning concepts, Azure AI Services, computer vision, NLP, conversational AI, and generative AI.',
  ceCourseSlug: 'azure-ai-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-fundamentals',
  ceCoursePriceCents: 69500,
  questions: [
    {
      id: 'ai900-1',
      topic: 'AI Concepts',
      question:
        'A model predicts whether an email is spam, based on thousands of labeled examples. Which form of machine learning is this?',
      options: [
        { id: 'a', text: 'Supervised learning with classification.' },
        { id: 'b', text: 'Unsupervised learning with clustering.' },
        { id: 'c', text: 'Reinforcement learning.' },
        { id: 'd', text: 'Anomaly detection without labels.' },
      ],
      correctId: 'a',
      explanation:
        'Supervised learning trains a model on labeled examples. Because the output is one of two categories, spam or not, this is specifically classification.',
    },
    {
      id: 'ai900-2',
      topic: 'Responsible AI',
      question:
        'Which Microsoft Responsible AI principle is at risk when a hiring tool ranks candidates from a particular group consistently lower?',
      options: [
        { id: 'a', text: 'Reliability and safety.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Privacy and security.' },
      ],
      correctId: 'b',
      explanation:
        'Fairness covers equal treatment of groups by an AI system. Bias against a demographic group is a fairness problem first.',
    },
    {
      id: 'ai900-3',
      topic: 'Computer Vision',
      question:
        'You need to extract text, including tables and key-value pairs, from scanned invoices. Which Azure service fits best?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis.' },
        { id: 'b', text: 'Azure AI Custom Vision.' },
        { id: 'c', text: 'Azure AI Document Intelligence.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'c',
      explanation:
        'Document Intelligence (formerly Form Recognizer) extracts structured data from forms and invoices, including tables and key-value pairs. Image Analysis is for generic image recognition, not form extraction.',
    },
    {
      id: 'ai900-4',
      topic: 'NLP',
      question:
        'A team wants to classify reviews as positive, neutral, or negative. Which NLP capability do you use?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'Named entity recognition.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Sentiment analysis.' },
      ],
      correctId: 'd',
      explanation:
        'Sentiment analysis classifies text by tone. Key phrase extraction pulls out important terms, and NER tags entities such as people or places.',
    },
    {
      id: 'ai900-5',
      topic: 'Conversational AI',
      question:
        'You are building a customer support chatbot that answers FAQ questions from an existing knowledge base. Which service fits best?',
      options: [
        { id: 'a', text: 'Azure Machine Learning designer.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Language Question Answering.' },
        { id: 'd', text: 'Azure AI Speech.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering (the successor to QnA Maker) connects a knowledge base to a conversational interface. Translator translates between languages and does no Q&A.',
    },
    {
      id: 'ai900-6',
      topic: 'Machine Learning',
      question:
        'Which metric is appropriate for evaluating the performance of a regression model?',
      options: [
        { id: 'a', text: 'Root Mean Squared Error (RMSE).' },
        { id: 'b', text: 'Precision and recall.' },
        { id: 'c', text: 'Confusion matrix.' },
        { id: 'd', text: 'F1 score.' },
      ],
      correctId: 'a',
      explanation:
        'RMSE measures the average error between predicted and actual values, which suits regression. Precision, recall, F1, and confusion matrix belong to classification.',
    },
    {
      id: 'ai900-7',
      topic: 'Custom Vision',
      question:
        'You want to train a model that distinguishes pizza photos from burger photos, using your own dataset of 200 images per class. Which service fits?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure Bot Service.' },
        { id: 'd', text: 'Azure AI Custom Vision with image classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision trains a classifier or detector on a small custom dataset. Document Intelligence is for forms and invoices, not object recognition.',
    },
    {
      id: 'ai900-8',
      topic: 'Speech',
      question:
        'Which Azure service converts spoken audio to text and back to speech in real time across many languages?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech (Speech to Text and Text to Speech).' },
        { id: 'c', text: 'Azure AI Vision.' },
        { id: 'd', text: 'Azure AI Anomaly Detector.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Speech provides Speech to Text and Text to Speech across many languages. Translator translates between languages but does not produce audio or transcripts itself.',
    },
    {
      id: 'ai900-9',
      topic: 'Generative AI',
      question:
        'What is the main difference between a Large Language Model and a traditional rule-based chatbot?',
      options: [
        {
          id: 'a',
          text: 'An LLM generates new text based on patterns in training data; a rule-based bot responds according to pre-written rules.',
        },
        { id: 'b', text: 'An LLM only runs on-premises; a rule-based bot only runs in the cloud.' },
        { id: 'c', text: 'An LLM has no API; a rule-based bot does.' },
        { id: 'd', text: 'An LLM understands only English; a rule-based bot is multilingual.' },
      ],
      correctId: 'a',
      explanation:
        'LLMs generate text from learned patterns and can respond to inputs they have not seen before. Rule-based bots are limited to explicitly authored flows and triggers.',
    },
    {
      id: 'ai900-10',
      topic: 'Azure OpenAI',
      question:
        'An organization wants to use GPT-4 inside Azure with enterprise controls over data residency and compliance. Which service offers this?',
      options: [
        { id: 'a', text: 'OpenAI API directly via openai.com.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure OpenAI Service.' },
        { id: 'd', text: 'Bing Search.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI Service offers OpenAI models inside Azure with region selection, private networking, and compliance certifications. The public OpenAI API does not have these enterprise controls.',
    },
  ],
}
