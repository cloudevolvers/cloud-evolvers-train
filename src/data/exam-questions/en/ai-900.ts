import type { ExamSet } from '../types'

export const ai900: ExamSet = {
  examCode: 'AI-900',
  examName: 'Azure AI Fundamentals',
  description:
    'One hundred practice questions at AI-900 level. AI and machine learning concepts, Azure AI Services, computer vision, NLP, conversational AI, and generative AI.',
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
        'Question Answering (the successor to QnA Maker, which retired March 31, 2025) connects a knowledge base to a conversational interface. Note that Custom Question Answering is itself scheduled for retirement on March 31, 2029; Microsoft recommends migrating to Azure AI Foundry models for new projects. Translator translates between languages and does no Q&A.',
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
    {
      id: 'ai900-11',
      topic: 'AI Workloads',
      question:
        'A logistics company wants to predict next month\'s package volumes per region from three years of daily history. Which AI workload type best matches this need?',
      options: [
        { id: 'a', text: 'Anomaly detection.' },
        { id: 'b', text: 'Computer vision.' },
        { id: 'c', text: 'Knowledge mining.' },
        { id: 'd', text: 'Forecasting (a regression-style prediction over time).' },
      ],
      correctId: 'd',
      explanation:
        'Predicting future numeric values from past time-series data is forecasting, a regression workload. Anomaly detection flags outliers, not future totals.',
    },
    {
      id: 'ai900-12',
      topic: 'Responsible AI',
      question:
        'A bank publishes a plain-language summary describing how its loan model uses applicant data and what factors drive a decision. Which Responsible AI principle does this practice support?',
      options: [
        { id: 'a', text: 'Privacy and security.' },
        { id: 'b', text: 'Inclusiveness.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Reliability and safety.' },
      ],
      correctId: 'c',
      explanation:
        'Transparency requires that people understand how an AI system works and what influences its outputs. Privacy and security covers data protection, which is a different concern.',
    },
    {
      id: 'ai900-13',
      topic: 'Machine Learning',
      question:
        'In a labeled dataset for predicting house prices, the columns square_meters, bedrooms, and zip_code are inputs and the column sale_price is the output. What are these inputs called?',
      options: [
        { id: 'a', text: 'Hyperparameters.' },
        { id: 'b', text: 'Labels.' },
        { id: 'c', text: 'Endpoints.' },
        { id: 'd', text: 'Features.' },
      ],
      correctId: 'd',
      explanation:
        'Inputs to a model are called features. The target column the model learns to predict, sale_price here, is the label.',
    },
    {
      id: 'ai900-14',
      topic: 'Computer Vision',
      question:
        'Which computer vision task identifies multiple objects in an image and returns a bounding box and label for each?',
      options: [
        { id: 'a', text: 'Image classification.' },
        { id: 'b', text: 'Image generation.' },
        { id: 'c', text: 'Optical character recognition.' },
        { id: 'd', text: 'Object detection.' },
      ],
      correctId: 'd',
      explanation:
        'Object detection returns a bounding box and class for each detected object. Image classification assigns a single label to the whole image and does not localize objects.',
    },
    {
      id: 'ai900-15',
      topic: 'NLP',
      question:
        'A support team wants to extract people, organizations, and locations from incoming emails. Which Azure AI Language feature fits?',
      options: [
        { id: 'a', text: 'Sentiment analysis.' },
        { id: 'b', text: 'Language detection.' },
        { id: 'c', text: 'Named entity recognition (NER).' },
        { id: 'd', text: 'Summarization.' },
      ],
      correctId: 'c',
      explanation:
        'NER tags entities such as people, organizations, and locations. Sentiment analysis only scores tone, and language detection identifies the language code.',
    },
    {
      id: 'ai900-16',
      topic: 'Generative AI',
      question:
        'In an Azure OpenAI chat completion request, raising the temperature from 0.2 to 1.0 generally has what effect?',
      options: [
        { id: 'a', text: 'Outputs become more deterministic and repetitive.' },
        { id: 'b', text: 'The model switches to a larger model variant automatically.' },
        { id: 'c', text: 'The model uses a longer context window.' },
        { id: 'd', text: 'Outputs become more diverse and creative, with more randomness.' },
      ],
      correctId: 'd',
      explanation:
        'Temperature controls sampling randomness. Higher values broaden the next-token distribution and produce more varied outputs. Context length is a separate setting and does not change with temperature.',
    },
    {
      id: 'ai900-17',
      topic: 'Machine Learning',
      question:
        'A model achieves 99% accuracy on training data but only 60% on new data. What problem is this?',
      options: [
        { id: 'a', text: 'Underfitting.' },
        { id: 'b', text: 'Class imbalance.' },
        { id: 'c', text: 'Data leakage from the test set.' },
        { id: 'd', text: 'Overfitting.' },
      ],
      correctId: 'd',
      explanation:
        'Overfitting means the model memorized training data and fails to generalize. Underfitting would show low accuracy on both training and new data.',
    },
    {
      id: 'ai900-18',
      topic: 'Azure ML',
      question:
        'In Azure Machine Learning, which compute target is best suited for interactive experimentation in a notebook by a single data scientist?',
      options: [
        { id: 'a', text: 'Compute cluster.' },
        { id: 'b', text: 'Inference cluster (AKS).' },
        { id: 'c', text: 'Compute instance.' },
        { id: 'd', text: 'Attached Synapse Spark pool.' },
      ],
      correctId: 'c',
      explanation:
        'A compute instance is a dedicated managed VM for one user, designed for notebook work. A compute cluster is shared, autoscaling compute meant for training jobs.',
    },
    {
      id: 'ai900-19',
      topic: 'Computer Vision',
      question:
        'A retail chain wants to read printed receipts and pull totals, dates, and line items into a database without training a custom model. Which option fits?',
      options: [
        { id: 'a', text: 'Azure AI Face detection.' },
        { id: 'b', text: 'Azure AI Custom Vision object detection.' },
        { id: 'c', text: 'Azure AI Vision tagging.' },
        { id: 'd', text: 'Azure AI Document Intelligence prebuilt receipt model.' },
      ],
      correctId: 'd',
      explanation:
        'Document Intelligence ships prebuilt models for receipts, invoices, and IDs that work without training. Custom Vision would require gathering and labeling sample images first.',
    },
    {
      id: 'ai900-20',
      topic: 'NLP',
      question:
        'Which Azure AI Language feature would you use to redact phone numbers and email addresses from chat transcripts before storage?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'Sentiment analysis.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'PII detection.' },
      ],
      correctId: 'd',
      explanation:
        'PII detection identifies and can mask personally identifiable information such as phone numbers and emails. Key phrase extraction returns important terms but does not redact data.',
    },
    {
      id: 'ai900-21',
      topic: 'Generative AI',
      question:
        'A team wants the model to follow a specific persona and output rules across every chat in their app. Where should they place these instructions?',
      options: [
        { id: 'a', text: 'In the user message of every turn.' },
        { id: 'b', text: 'In the assistant message of the last turn.' },
        { id: 'c', text: 'In the system message at the start of the conversation.' },
        { id: 'd', text: 'In the embeddings model configuration.' },
      ],
      correctId: 'c',
      explanation:
        'The system message defines the assistant\'s role, tone, and rules for the conversation. Putting it on every user turn wastes tokens and is harder to maintain.',
    },
    {
      id: 'ai900-22',
      topic: 'AI Workloads',
      question:
        'A bank wants software that flags credit card transactions that look unlike a customer\'s normal pattern. Which AI workload type fits?',
      options: [
        { id: 'a', text: 'Knowledge mining.' },
        { id: 'b', text: 'Object detection.' },
        { id: 'c', text: 'Generative AI.' },
        { id: 'd', text: 'Anomaly detection.' },
      ],
      correctId: 'd',
      explanation:
        'Anomaly detection flags data points that deviate from normal behavior, the standard pattern for fraud spotting. Generative AI produces content rather than scoring transactions.',
    },
    {
      id: 'ai900-23',
      topic: 'Responsible AI',
      question:
        'A speech recognition model performs well in English but poorly for users with regional accents and speech impairments. Which Responsible AI principle is most directly affected?',
      options: [
        { id: 'a', text: 'Transparency.' },
        { id: 'b', text: 'Accountability.' },
        { id: 'c', text: 'Privacy and security.' },
        { id: 'd', text: 'Inclusiveness.' },
      ],
      correctId: 'd',
      explanation:
        'Inclusiveness asks that AI work for people across abilities and backgrounds. Accountability is about who is responsible for the system, a separate concern.',
    },
    {
      id: 'ai900-24',
      topic: 'Machine Learning',
      question:
        'You split a dataset into training, validation, and test sets. What is the test set for?',
      options: [
        { id: 'a', text: 'Tuning hyperparameters during training.' },
        { id: 'b', text: 'Storing the model weights.' },
        { id: 'c', text: 'Generating new training samples.' },
        { id: 'd', text: 'Final unbiased estimate of model performance after training is complete.' },
      ],
      correctId: 'd',
      explanation:
        'The test set is held out and only used at the end to estimate performance on unseen data. Hyperparameter tuning is what the validation set is for.',
    },
    {
      id: 'ai900-25',
      topic: 'Computer Vision',
      question:
        'Which task best describes assigning a class label to every pixel of an image, for example separating road, sky, and pedestrians in a driving scene?',
      options: [
        { id: 'a', text: 'Object detection.' },
        { id: 'b', text: 'Image classification.' },
        { id: 'c', text: 'Semantic segmentation.' },
        { id: 'd', text: 'Optical character recognition.' },
      ],
      correctId: 'c',
      explanation:
        'Semantic segmentation labels every pixel with a class. Object detection draws bounding boxes around whole objects rather than labeling pixels.',
    },
    {
      id: 'ai900-26',
      topic: 'NLP',
      question:
        'A news site receives articles in many languages. Which Azure AI Language feature determines which language a given article is written in?',
      options: [
        { id: 'a', text: 'Translation.' },
        { id: 'b', text: 'Question answering.' },
        { id: 'c', text: 'Summarization.' },
        { id: 'd', text: 'Language detection.' },
      ],
      correctId: 'd',
      explanation:
        'Language detection returns the language code and a confidence score for input text. Translation converts text between languages, which is a different operation.',
    },
    {
      id: 'ai900-27',
      topic: 'Generative AI',
      question:
        'A developer wants the model to ground answers in their internal product manuals so it stops making up product names. Which pattern should they use?',
      options: [
        { id: 'a', text: 'Increase temperature to encourage creativity.' },
        { id: 'b', text: 'Switch to a smaller model.' },
        { id: 'c', text: 'Retrieval-augmented generation (RAG) with a vector store of the manuals.' },
        { id: 'd', text: 'Use few-shot prompting only, with no document retrieval.' },
      ],
      correctId: 'c',
      explanation:
        'RAG retrieves relevant chunks from a vector store and passes them as context, so the model answers from real source data. Higher temperature would actually increase hallucinations.',
    },
    {
      id: 'ai900-28',
      topic: 'Azure ML',
      question:
        'Which Azure Machine Learning feature lets a beginner train a regression model with no code by uploading a CSV and selecting the target column?',
      options: [
        { id: 'a', text: 'Compute instance terminal.' },
        { id: 'b', text: 'MLflow projects.' },
        { id: 'c', text: 'Online endpoints.' },
        { id: 'd', text: 'Automated ML.' },
      ],
      correctId: 'd',
      explanation:
        'Automated ML iterates through algorithms and hyperparameters to pick the best model from labeled data without code. Online endpoints deploy a trained model rather than train one.',
    },
    {
      id: 'ai900-29',
      topic: 'Computer Vision',
      question:
        'Your app must verify that the live person in front of a camera matches a stored employee photo. Which Azure AI Face capability fits?',
      options: [
        { id: 'a', text: 'Face detection only.' },
        { id: 'b', text: 'Face grouping.' },
        { id: 'c', text: 'Face verification (one-to-one matching).' },
        { id: 'd', text: 'Image tagging.' },
      ],
      correctId: 'c',
      explanation:
        'Face verification compares two faces and returns whether they belong to the same person, the standard pattern for badge-photo confirmation. Like Face Identify, Face Verify requires Limited Access registration under Microsoft\'s Responsible AI policy before it can be used in production. Detection only finds that a face exists, with no identity check.',
    },
    {
      id: 'ai900-30',
      topic: 'NLP',
      question:
        'A team wants to build an intent recognition model so the phrases "book a flight" and "I want to fly to Paris" both map to the same intent. Which service fits?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech.' },
        { id: 'c', text: 'Azure AI Language Conversational Language Understanding (CLU).' },
        { id: 'd', text: 'Azure AI Document Intelligence.' },
      ],
      correctId: 'c',
      explanation:
        'CLU classifies user utterances into intents and extracts entities, exactly what intent recognition needs. Translator converts text between languages without classifying intent.',
    },
    {
      id: 'ai900-31',
      topic: 'Generative AI',
      question:
        'Which Azure OpenAI model family is designed to turn text into numerical vectors that represent meaning, for use in vector search?',
      options: [
        { id: 'a', text: 'GPT-4o.' },
        { id: 'b', text: 'DALL-E 3.' },
        { id: 'c', text: 'Whisper.' },
        { id: 'd', text: 'text-embedding-3-large.' },
      ],
      correctId: 'd',
      explanation:
        'text-embedding-3-large produces embeddings that capture semantic meaning for similarity search. GPT-4o generates text and DALL-E 3 generates images, so neither returns embeddings.',
    },
    {
      id: 'ai900-32',
      topic: 'Responsible AI',
      question:
        'A self-driving feature must shut down safely when a sensor fails rather than continue with bad data. Which Responsible AI principle is this?',
      options: [
        { id: 'a', text: 'Inclusiveness.' },
        { id: 'b', text: 'Transparency.' },
        { id: 'c', text: 'Privacy and security.' },
        { id: 'd', text: 'Reliability and safety.' },
      ],
      correctId: 'd',
      explanation:
        'Reliability and safety covers behaving predictably and handling unexpected conditions without harm. Transparency is about explaining how a system works, not how it fails safely.',
    },
    {
      id: 'ai900-33',
      topic: 'Machine Learning',
      question:
        'A bank trains a binary classifier to predict loan default. Which metric describes the share of predicted defaulters who actually defaulted?',
      options: [
        { id: 'a', text: 'Recall.' },
        { id: 'b', text: 'R-squared.' },
        { id: 'c', text: 'Precision.' },
        { id: 'd', text: 'Mean absolute error.' },
      ],
      correctId: 'c',
      explanation:
        'Precision is true positives divided by predicted positives. Recall is true positives divided by actual positives, which answers a different question.',
    },
    {
      id: 'ai900-34',
      topic: 'Computer Vision',
      question:
        'Your application must read printed and handwritten text from photos of whiteboards. Which Azure AI Vision capability fits?',
      options: [
        { id: 'a', text: 'Image tagging.' },
        { id: 'b', text: 'Brand detection.' },
        { id: 'c', text: 'OCR via the Read API.' },
        { id: 'd', text: 'Object detection.' },
      ],
      correctId: 'c',
      explanation:
        'The Read API performs OCR on printed and handwritten text in images and PDFs. Image tagging returns concept labels for the whole picture, not the text itself.',
    },
    {
      id: 'ai900-35',
      topic: 'AI Workloads',
      question:
        'A pharmaceutical firm wants to index millions of research PDFs so scientists can query them in natural language and find relevant passages. Which workload type best describes this?',
      options: [
        { id: 'a', text: 'Reinforcement learning.' },
        { id: 'b', text: 'Forecasting.' },
        { id: 'c', text: 'Anomaly detection.' },
        { id: 'd', text: 'Knowledge mining.' },
      ],
      correctId: 'd',
      explanation:
        'Knowledge mining extracts information from large unstructured stores so it can be searched. Forecasting predicts future values, which does not fit document discovery.',
    },
    {
      id: 'ai900-36',
      topic: 'NLP',
      question:
        'Which Azure AI Language feature condenses a long support ticket into two or three sentences without losing the main points?',
      options: [
        { id: 'a', text: 'Sentiment analysis.' },
        { id: 'b', text: 'Translation.' },
        { id: 'c', text: 'Text summarization.' },
        { id: 'd', text: 'Language detection.' },
      ],
      correctId: 'c',
      explanation:
        'Text summarization produces a shorter version that preserves key information. Sentiment analysis only assigns a tone score and would not shorten text.',
    },
    {
      id: 'ai900-37',
      topic: 'Generative AI',
      question:
        'In Azure OpenAI, what does a "context length" of 128k tokens mean for a model?',
      options: [
        { id: 'a', text: 'The model can be retrained on at most 128k tokens.' },
        { id: 'b', text: 'The combined input and output for a single request can use up to 128k tokens.' },
        { id: 'c', text: 'The model returns at most 128 outputs per second.' },
        { id: 'd', text: 'The embedding dimension is 128k.' },
      ],
      correctId: 'b',
      explanation:
        'Context length is the maximum tokens a model can handle in one request, counting both prompt and completion. It is unrelated to retraining or throughput limits.',
    },
    {
      id: 'ai900-38',
      topic: 'Azure ML',
      question:
        'You need to score 50 million records overnight as part of a nightly job. Which Azure ML endpoint type fits?',
      options: [
        { id: 'a', text: 'Online endpoint with autoscaling.' },
        { id: 'b', text: 'Batch endpoint.' },
        { id: 'c', text: 'Compute instance.' },
        { id: 'd', text: 'Datastore.' },
      ],
      correctId: 'b',
      explanation:
        'Batch endpoints score large datasets asynchronously and write results to storage, which suits overnight runs. Online endpoints are tuned for low-latency, single-record requests.',
    },
    {
      id: 'ai900-39',
      topic: 'Computer Vision',
      question:
        'You need to assign one of three quality grades to product photos using a custom-trained model. Which Azure service is the simplest fit?',
      options: [
        { id: 'a', text: 'Azure AI Vision spatial analysis.' },
        { id: 'b', text: 'Azure AI Document Intelligence custom model.' },
        { id: 'c', text: 'Azure AI Face detection.' },
        { id: 'd', text: 'Azure AI Custom Vision image classification.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision image classification trains on labeled photos and predicts a single class per image. Document Intelligence custom models are for structured documents, not product photos.',
    },
    {
      id: 'ai900-40',
      topic: 'NLP',
      question:
        'Which Azure service is best for translating product descriptions from English to fifteen other languages programmatically?',
      options: [
        { id: 'a', text: 'Azure AI Speech.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Search.' },
        { id: 'd', text: 'Azure AI Document Intelligence.' },
      ],
      correctId: 'b',
      explanation:
        'Azure AI Translator handles text and document translation at scale across many languages. Azure AI Speech includes speech translation, but that is for spoken audio, not bulk text.',
    },
    {
      id: 'ai900-41',
      topic: 'Generative AI',
      question:
        'A developer adds three example input-output pairs to the prompt before the actual question. What prompt-engineering technique is this?',
      options: [
        { id: 'a', text: 'Zero-shot prompting.' },
        { id: 'b', text: 'Few-shot prompting.' },
        { id: 'c', text: 'Fine-tuning.' },
        { id: 'd', text: 'Reinforcement learning from human feedback.' },
      ],
      correctId: 'b',
      explanation:
        'Few-shot prompting includes a small number of examples in the prompt to guide the model. Zero-shot has no examples, and fine-tuning changes model weights with a separate training step.',
    },
    {
      id: 'ai900-42',
      topic: 'Responsible AI',
      question:
        'When a hospital adopts an AI triage tool, leadership signs off on its use, monitors outcomes, and assigns a human reviewer for edge cases. Which Responsible AI principle does this most directly support?',
      options: [
        { id: 'a', text: 'Fairness.' },
        { id: 'b', text: 'Inclusiveness.' },
        { id: 'c', text: 'Privacy and security.' },
        { id: 'd', text: 'Accountability.' },
      ],
      correctId: 'd',
      explanation:
        'Accountability requires people to be responsible for AI behavior, with oversight and escalation paths. Inclusiveness covers reaching diverse users, a different concern.',
    },
    {
      id: 'ai900-43',
      topic: 'Machine Learning',
      question:
        'A model groups customers into segments without using any labels, based on shared purchase patterns. Which type of machine learning is this?',
      options: [
        { id: 'a', text: 'Classification.' },
        { id: 'b', text: 'Regression.' },
        { id: 'c', text: 'Clustering.' },
        { id: 'd', text: 'Reinforcement learning.' },
      ],
      correctId: 'c',
      explanation:
        'Clustering is unsupervised and groups similar samples without labels. Classification needs labeled categories, which the scenario does not provide.',
    },
    {
      id: 'ai900-44',
      topic: 'Computer Vision',
      question:
        'A ticket counter wants to recognize five repeat VIP customers from camera feeds and greet them by name. Which Azure capability is the right fit, and which compliance step is required?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence ID model.' },
        { id: 'b', text: 'Azure AI Custom Vision classification, with no approval needed.' },
        { id: 'c', text: 'Azure AI Vision tagging, no enrollment needed.' },
        { id: 'd', text: 'Azure AI Face identification, with Limited Access approval from Microsoft.' },
      ],
      correctId: 'd',
      explanation:
        'Face identification matches a face to a person in an enrolled group and is gated by Microsoft\'s Limited Access policy. Custom Vision classification cannot perform identity recognition across enrolled people.',
    },
    {
      id: 'ai900-45',
      topic: 'NLP',
      question:
        'A user asks an internal helpdesk bot, "How do I reset the VPN?" The bot must search a knowledge base of articles for the best answer. Which combination fits?',
      options: [
        { id: 'a', text: 'Azure AI Translator with custom dictionaries.' },
        { id: 'b', text: 'Azure AI Speech with custom keyword.' },
        { id: 'c', text: 'Azure AI Language Question Answering with a project built on the articles.' },
        { id: 'd', text: 'Azure Machine Learning regression model.' },
      ],
      correctId: 'c',
      explanation:
        'Question Answering builds a project from FAQ pages and articles, then returns the best answer to a query. Translator is for moving text between languages and does not pick answers.',
    },
    {
      id: 'ai900-46',
      topic: 'Generative AI',
      question:
        'Which Azure OpenAI deployment type guarantees dedicated capacity and predictable latency for a high-volume production app?',
      options: [
        { id: 'a', text: 'Standard pay-as-you-go.' },
        { id: 'b', text: 'Provisioned throughput units (PTUs).' },
        { id: 'c', text: 'Batch deployment.' },
        { id: 'd', text: 'Free tier.' },
      ],
      correctId: 'b',
      explanation:
        'Provisioned throughput units reserve capacity for steady, predictable performance. Standard deployment is shared and can experience throttling under load.',
    },
    {
      id: 'ai900-47',
      topic: 'Azure ML',
      question:
        'Within an Azure Machine Learning workspace, what does a "data asset" represent?',
      options: [
        { id: 'a', text: 'A scoring endpoint.' },
        { id: 'b', text: 'A trained model artifact ready for deployment.' },
        { id: 'c', text: 'A managed compute target.' },
        { id: 'd', text: 'A versioned reference to data, such as a file or folder, used in jobs and pipelines.' },
      ],
      correctId: 'd',
      explanation:
        'Data assets are versioned, named pointers to data so jobs can reproducibly consume them. Model artifacts and compute targets are separate resource types.',
    },
    {
      id: 'ai900-48',
      topic: 'Computer Vision',
      question:
        'What is the simplest way to read information from passports and driver licenses in an onboarding flow?',
      options: [
        { id: 'a', text: 'Train a Custom Vision detector on sample IDs.' },
        { id: 'b', text: 'Use Azure AI Document Intelligence prebuilt ID document model.' },
        { id: 'c', text: 'Use Azure AI Vision tagging.' },
        { id: 'd', text: 'Use Azure AI Face verification.' },
      ],
      correctId: 'b',
      explanation:
        'Document Intelligence has a prebuilt ID document model that returns fields like name, date of birth, and document number with no training required. Custom Vision would need labeled examples and would still not understand structured fields.',
    },
    {
      id: 'ai900-49',
      topic: 'NLP',
      question:
        'A radio station wants live captions of its broadcast in real time. Which Azure AI Speech feature fits?',
      options: [
        { id: 'a', text: 'Text to speech with neural voices.' },
        { id: 'b', text: 'Real-time speech to text.' },
        { id: 'c', text: 'Custom speech translation.' },
        { id: 'd', text: 'Speaker recognition.' },
      ],
      correctId: 'b',
      explanation:
        'Real-time speech to text streams audio in and emits transcripts as the audio arrives, suitable for live captions. Text to speech does the reverse and produces audio from text.',
    },
    {
      id: 'ai900-50',
      topic: 'Generative AI',
      question:
        'A team builds a chatbot that answers questions about their company policies stored in SharePoint. Which Azure OpenAI feature lets them attach those documents directly without writing custom retrieval code?',
      options: [
        { id: 'a', text: 'Fine-tuning a base model.' },
        { id: 'b', text: 'The "On Your Data" feature in Azure OpenAI.' },
        { id: 'c', text: 'The DALL-E 3 endpoint.' },
        { id: 'd', text: 'Whisper transcription.' },
      ],
      correctId: 'b',
      explanation:
        'The "On Your Data" feature wires up Azure AI Search and Azure OpenAI so the model answers from your documents with citations. Fine-tuning changes weights but is heavier and not typically used to add factual knowledge.',
    },
    {
      id: 'ai900-51',
      topic: 'AI Workloads',
      question:
        'A car insurance app wants to estimate vehicle damage from photos uploaded after an accident. Which AI workload type fits best?',
      options: [
        { id: 'a', text: 'Knowledge mining.' },
        { id: 'b', text: 'NLP.' },
        { id: 'c', text: 'Document intelligence.' },
        { id: 'd', text: 'Computer vision.' },
      ],
      correctId: 'd',
      explanation:
        'Estimating damage from photos is a computer vision task because the input is image data. Document intelligence handles structured documents like forms and is not suitable for damage scoring.',
    },
    {
      id: 'ai900-52',
      topic: 'Responsible AI',
      question:
        'A company stores chat logs that include customer health information for use in training a generative model. Which Responsible AI principle is the primary concern?',
      options: [
        { id: 'a', text: 'Transparency.' },
        { id: 'b', text: 'Fairness.' },
        { id: 'c', text: 'Reliability and safety.' },
        { id: 'd', text: 'Privacy and security.' },
      ],
      correctId: 'd',
      explanation:
        'Privacy and security covers protection of personal data including health information. Fairness deals with biased outcomes, which is a separate issue from data handling.',
    },
    {
      id: 'ai900-53',
      topic: 'Machine Learning',
      question:
        'In a confusion matrix for a binary classifier, what does the false negative cell count?',
      options: [
        { id: 'a', text: 'Cases predicted positive that were actually negative.' },
        { id: 'b', text: 'Cases predicted negative that were actually positive.' },
        { id: 'c', text: 'Cases predicted positive that were actually positive.' },
        { id: 'd', text: 'Cases predicted negative that were actually negative.' },
      ],
      correctId: 'b',
      explanation:
        'A false negative is a positive case the model missed and labeled negative. A false positive is the opposite, predicted positive but actually negative.',
    },
    {
      id: 'ai900-54',
      topic: 'Computer Vision',
      question:
        'You want to count cars passing a checkpoint on a CCTV feed and ignore other objects. Which approach fits?',
      options: [
        { id: 'a', text: 'Image classification with two classes.' },
        { id: 'b', text: 'Object detection trained or configured to detect cars.' },
        { id: 'c', text: 'OCR with the Read API.' },
        { id: 'd', text: 'Face detection.' },
      ],
      correctId: 'b',
      explanation:
        'Object detection finds and locates specific objects in each frame so they can be counted. Image classification only assigns one class per frame and cannot count individual cars.',
    },
    {
      id: 'ai900-55',
      topic: 'NLP',
      question:
        'A retail bank wants to pull product names and amounts out of customer emails about transfers. Which Azure AI Language feature should they use?',
      options: [
        { id: 'a', text: 'Language detection.' },
        { id: 'b', text: 'Sentiment analysis.' },
        { id: 'c', text: 'Translation.' },
        { id: 'd', text: 'Custom named entity recognition (custom NER).' },
      ],
      correctId: 'd',
      explanation:
        'Custom NER lets you train an entity model on domain-specific labels such as product name and amount. Sentiment analysis only scores tone and would not extract those fields.',
    },
    {
      id: 'ai900-56',
      topic: 'Generative AI',
      question:
        'Which Azure OpenAI model is designed to transcribe and translate spoken audio?',
      options: [
        { id: 'a', text: 'GPT-4o.' },
        { id: 'b', text: 'DALL-E 3.' },
        { id: 'c', text: 'Whisper.' },
        { id: 'd', text: 'text-embedding-3-small.' },
      ],
      correctId: 'c',
      explanation:
        'Whisper handles speech to text and speech translation. DALL-E 3 generates images and embeddings models return vectors, so neither fits audio input.',
    },
    {
      id: 'ai900-57',
      topic: 'Azure ML',
      question:
        'Which Azure Machine Learning feature provides experiment tracking, model versioning, and lineage in a way that is compatible with the open-source ecosystem?',
      options: [
        { id: 'a', text: 'Data labeling projects.' },
        { id: 'b', text: 'Compute clusters.' },
        { id: 'c', text: 'Online endpoints.' },
        { id: 'd', text: 'MLflow integration.' },
      ],
      correctId: 'd',
      explanation:
        'Azure ML uses MLflow for experiments, runs, and the model registry, so teams can track parameters, metrics, and artifacts. Compute clusters are about where jobs run, not how runs are tracked.',
    },
    {
      id: 'ai900-58',
      topic: 'Computer Vision',
      question:
        'You want detailed regions for each instance of a defect on a manufactured part, including overlapping defects. Which task fits?',
      options: [
        { id: 'a', text: 'Image classification.' },
        { id: 'b', text: 'Instance segmentation.' },
        { id: 'c', text: 'OCR.' },
        { id: 'd', text: 'Face detection.' },
      ],
      correctId: 'b',
      explanation:
        'Instance segmentation outlines each individual object, even when objects overlap. Image classification provides only one label per image and gives no spatial information.',
    },
    {
      id: 'ai900-59',
      topic: 'NLP',
      question:
        'Which Azure service indexes large document collections and adds AI-enrichment skills, like extracting key phrases and entities, during ingestion?',
      options: [
        { id: 'a', text: 'Azure AI Speech.' },
        { id: 'b', text: 'Azure AI Translator.' },
        { id: 'c', text: 'Azure AI Search with skillsets.' },
        { id: 'd', text: 'Azure AI Custom Vision.' },
      ],
      correctId: 'c',
      explanation:
        'Azure AI Search indexers run skillsets that enrich documents with AI extracted fields during ingestion. Translator only converts language and has no indexing capability.',
    },
    {
      id: 'ai900-60',
      topic: 'Generative AI',
      question:
        'A developer asks the model to "think step by step" before answering a math word problem. Which prompting technique is this?',
      options: [
        { id: 'a', text: 'Chain-of-thought prompting.' },
        { id: 'b', text: 'Zero-shot prompting with no instructions.' },
        { id: 'c', text: 'Fine-tuning.' },
        { id: 'd', text: 'Embedding lookup.' },
      ],
      correctId: 'a',
      explanation:
        'Chain-of-thought prompting asks the model to reason in steps before producing the final answer, which improves accuracy on multi-step problems. Zero-shot has no extra reasoning instruction.',
    },
    {
      id: 'ai900-61',
      topic: 'AI Workloads',
      question:
        'A radiology group wants software that drafts a report from a chest X-ray image for a doctor to review. Which workload combination is this?',
      options: [
        { id: 'a', text: 'Translation only.' },
        { id: 'b', text: 'Forecasting only.' },
        { id: 'c', text: 'Computer vision and generative AI.' },
        { id: 'd', text: 'Anomaly detection only.' },
      ],
      correctId: 'c',
      explanation:
        'Reading the image is computer vision and drafting the textual report is generative AI. Forecasting predicts future numeric values, which is not what report drafting does.',
    },
    {
      id: 'ai900-62',
      topic: 'Responsible AI',
      question:
        'Microsoft\'s Responsible AI Standard requires that an AI system include a means for users to understand its capabilities and limitations. Which principle does this serve?',
      options: [
        { id: 'a', text: 'Inclusiveness.' },
        { id: 'b', text: 'Privacy and security.' },
        { id: 'c', text: 'Transparency.' },
        { id: 'd', text: 'Reliability and safety.' },
      ],
      correctId: 'c',
      explanation:
        'Transparency is about communicating how a system behaves and where it is limited. Reliability and safety is about predictable behavior, a separate property.',
    },
    {
      id: 'ai900-63',
      topic: 'Machine Learning',
      question:
        'In binary classification, the area under the ROC curve (AUC) measures what?',
      options: [
        { id: 'a', text: 'Average error in predicted numeric values.' },
        { id: 'b', text: 'Ability of the model to rank positive cases above negative cases across thresholds.' },
        { id: 'c', text: 'The number of clusters identified.' },
        { id: 'd', text: 'Memory usage of the model.' },
      ],
      correctId: 'b',
      explanation:
        'AUC summarizes how well a classifier separates classes across all decision thresholds. Average error of numeric predictions is an MAE or RMSE concept for regression.',
    },
    {
      id: 'ai900-64',
      topic: 'Computer Vision',
      question:
        'You want to add captions describing image contents for screen-reader users on a public website. Which Azure AI Vision capability fits?',
      options: [
        { id: 'a', text: 'Spatial analysis.' },
        { id: 'b', text: 'OCR with the Read API.' },
        { id: 'c', text: 'Image captioning (describe image).' },
        { id: 'd', text: 'Face detection.' },
      ],
      correctId: 'c',
      explanation:
        'Azure AI Vision generates a natural-language caption that describes an image. OCR returns text written in the image, which is a different output.',
    },
    {
      id: 'ai900-65',
      topic: 'NLP',
      question:
        'A team uses Azure AI Language to build a multi-turn intent classifier for a banking bot. Which feature should they use?',
      options: [
        { id: 'a', text: 'PII detection.' },
        { id: 'b', text: 'Question answering.' },
        { id: 'c', text: 'Conversational Language Understanding (CLU).' },
        { id: 'd', text: 'Sentiment analysis.' },
      ],
      correctId: 'c',
      explanation:
        'CLU classifies utterances into intents and extracts entities, which is the standard intent recognition pattern for bots. Question answering returns a stored answer rather than a structured intent.',
    },
    {
      id: 'ai900-66',
      topic: 'Generative AI',
      question:
        'A user manages to get a chat assistant to ignore its safety instructions by smuggling commands inside a webpage it summarizes. What kind of attack is this?',
      options: [
        { id: 'a', text: 'Data poisoning.' },
        { id: 'b', text: 'Cross-site scripting.' },
        { id: 'c', text: 'Indirect prompt injection.' },
        { id: 'd', text: 'Model inversion.' },
      ],
      correctId: 'c',
      explanation:
        'Indirect prompt injection hides instructions in third-party content the model later processes. Cross-site scripting targets browsers and is unrelated to AI prompts.',
    },
    {
      id: 'ai900-67',
      topic: 'Azure ML',
      question:
        'In Azure Machine Learning, what is the role of a workspace?',
      options: [
        { id: 'a', text: 'A single trained model artifact.' },
        { id: 'b', text: 'A top-level container for ML resources, including datasets, models, compute, and experiments.' },
        { id: 'c', text: 'A managed inference cluster for online deployment.' },
        { id: 'd', text: 'A storage account dedicated to training images.' },
      ],
      correctId: 'b',
      explanation:
        'A workspace is the central organizing resource that owns datasets, models, environments, compute, and runs. An inference cluster is just one resource that lives inside a workspace.',
    },
    {
      id: 'ai900-68',
      topic: 'Computer Vision',
      question:
        'A retailer wants to analyze shopper movement and flag overcrowding in real time using fixed cameras. Which Azure AI Vision feature fits?',
      options: [
        { id: 'a', text: 'Spatial analysis.' },
        { id: 'b', text: 'Custom Vision classification.' },
        { id: 'c', text: 'Document Intelligence.' },
        { id: 'd', text: 'Face verification.' },
      ],
      correctId: 'a',
      explanation:
        'Spatial analysis processes video and tracks people movement in defined zones. Custom Vision classifies still images, which would not handle counts in zones.',
    },
    {
      id: 'ai900-69',
      topic: 'NLP',
      question:
        'You need spoken responses with a chosen voice persona for a kiosk in a museum. Which Azure AI Speech feature fits?',
      options: [
        { id: 'a', text: 'Speech to text.' },
        { id: 'b', text: 'Text to speech with neural voices.' },
        { id: 'c', text: 'Speaker verification.' },
        { id: 'd', text: 'Keyword spotting.' },
      ],
      correctId: 'b',
      explanation:
        'Text to speech with neural voices produces natural-sounding spoken output and offers voice personas. Speech to text is the reverse, audio in, text out.',
    },
    {
      id: 'ai900-70',
      topic: 'Generative AI',
      question:
        'Which Microsoft tool is designed for building production-grade custom copilots, including knowledge sources, topics, and actions, with low or no code?',
      options: [
        { id: 'a', text: 'Microsoft Copilot Studio.' },
        { id: 'b', text: 'Azure ML designer.' },
        { id: 'c', text: 'Power BI.' },
        { id: 'd', text: 'GitHub Copilot.' },
      ],
      correctId: 'a',
      explanation:
        'Copilot Studio is the low-code authoring environment for custom copilots that connect to data sources and external APIs. GitHub Copilot is an in-IDE coding assistant, not a copilot builder.',
    },
    {
      id: 'ai900-71',
      topic: 'AI Workloads',
      question:
        'A logistics firm wants software that reads handwritten waybills and pulls out the shipper, recipient, and tracking number. Which workload type fits best?',
      options: [
        { id: 'a', text: 'Document intelligence.' },
        { id: 'b', text: 'Forecasting.' },
        { id: 'c', text: 'Reinforcement learning.' },
        { id: 'd', text: 'Knowledge mining.' },
      ],
      correctId: 'a',
      explanation:
        'Document intelligence handles structured field extraction from forms and documents, including handwritten content. Knowledge mining is broader and focuses on search across large stores rather than per-document field extraction.',
    },
    {
      id: 'ai900-72',
      topic: 'Responsible AI',
      question:
        'A team wants user interfaces that work with screen readers, voice control, and high-contrast modes for users with disabilities. Which Responsible AI principle does this serve?',
      options: [
        { id: 'a', text: 'Inclusiveness.' },
        { id: 'b', text: 'Reliability and safety.' },
        { id: 'c', text: 'Privacy and security.' },
        { id: 'd', text: 'Transparency.' },
      ],
      correctId: 'a',
      explanation:
        'Inclusiveness covers designing for users with diverse abilities and contexts. Reliability and safety is about predictable correct behavior, a different angle.',
    },
    {
      id: 'ai900-73',
      topic: 'Machine Learning',
      question:
        'For a deep learning image model, increasing the number of layers and parameters typically does what?',
      options: [
        { id: 'a', text: 'Reduces compute and memory needs.' },
        { id: 'b', text: 'Increases the model\'s capacity to learn complex patterns, at the cost of more compute.' },
        { id: 'c', text: 'Removes the need for labeled data.' },
        { id: 'd', text: 'Guarantees better generalization to new images.' },
      ],
      correctId: 'b',
      explanation:
        'Deeper networks can represent more complex patterns but use more compute and memory and risk overfitting if data is limited. They still need labels for supervised tasks.',
    },
    {
      id: 'ai900-74',
      topic: 'Computer Vision',
      question:
        'Which Azure service is the right fit when you must extract structured data from a domain-specific form layout that has no prebuilt model?',
      options: [
        { id: 'a', text: 'Azure AI Document Intelligence custom model.' },
        { id: 'b', text: 'Azure AI Vision Image Analysis.' },
        { id: 'c', text: 'Azure AI Custom Vision object detection.' },
        { id: 'd', text: 'Azure AI Face.' },
      ],
      correctId: 'a',
      explanation:
        'Document Intelligence custom models train on a few sample forms with the same layout and extract the fields you label. Custom Vision detects generic objects, not labeled form fields.',
    },
    {
      id: 'ai900-75',
      topic: 'NLP',
      question:
        'A regulatory team needs entire contracts translated, with formatting and tables preserved. Which capability fits?',
      options: [
        { id: 'a', text: 'Azure AI Translator document translation.' },
        { id: 'b', text: 'Azure AI Speech translation.' },
        { id: 'c', text: 'Azure AI Language summarization.' },
        { id: 'd', text: 'Azure AI Vision OCR.' },
      ],
      correctId: 'a',
      explanation:
        'Document translation processes whole documents, including layout, in supported formats. Speech translation is for audio and would not preserve a Word or PDF layout.',
    },
    {
      id: 'ai900-76',
      topic: 'Generative AI',
      question:
        'In Azure OpenAI on your data, what is the role of an embedding model like text-embedding-3-large?',
      options: [
        { id: 'a', text: 'Generate the final natural-language answer to the user.' },
        { id: 'b', text: 'Convert your documents and the user\'s query into vectors so similar passages can be retrieved.' },
        { id: 'c', text: 'Translate the response into other languages.' },
        { id: 'd', text: 'Filter unsafe content from prompts.' },
      ],
      correctId: 'b',
      explanation:
        'Embedding models map text to vectors so semantic similarity search can find relevant chunks. The chat model, not the embedding model, writes the answer.',
    },
    {
      id: 'ai900-77',
      topic: 'Azure ML',
      question:
        'Which Azure Machine Learning artifact captures the Python packages and runtime needed to run a training script reproducibly?',
      options: [
        { id: 'a', text: 'Environment.' },
        { id: 'b', text: 'Compute instance.' },
        { id: 'c', text: 'Online endpoint.' },
        { id: 'd', text: 'Data asset.' },
      ],
      correctId: 'a',
      explanation:
        'An environment is a versioned bundle of OS, runtime, and Python packages used by jobs and deployments. A compute instance is hardware; the environment is what is installed on it.',
    },
    {
      id: 'ai900-78',
      topic: 'Computer Vision',
      question:
        'Your phone unlocks when it sees your face. Which task is the underlying system performing at unlock time?',
      options: [
        { id: 'a', text: 'Face detection only.' },
        { id: 'b', text: 'Face verification against the enrolled owner.' },
        { id: 'c', text: 'OCR.' },
        { id: 'd', text: 'Image classification of faces vs non-faces.' },
      ],
      correctId: 'b',
      explanation:
        'Face verification is one-to-one matching, comparing the live face to the enrolled owner. Detection alone would not confirm identity.',
    },
    {
      id: 'ai900-79',
      topic: 'NLP',
      question:
        'Which scenario is the strongest fit for Azure AI Search with vector search enabled?',
      options: [
        { id: 'a', text: 'Translating product descriptions to other languages.' },
        { id: 'b', text: 'Letting users ask questions in natural language and getting back relevant chunks of internal documentation.' },
        { id: 'c', text: 'Generating images from a text prompt.' },
        { id: 'd', text: 'Forecasting next quarter revenue.' },
      ],
      correctId: 'b',
      explanation:
        'Vector search retrieves passages whose embeddings are close to the query embedding, ideal for semantic Q&A over internal docs. Translation and image generation are unrelated capabilities.',
    },
    {
      id: 'ai900-80',
      topic: 'Generative AI',
      question:
        'Azure AI Content Safety provides a "prompt shields" capability. What does it do?',
      options: [
        { id: 'a', text: 'Encrypts prompts in transit.' },
        { id: 'b', text: 'Detects user prompt injection and indirect prompt attacks against your generative app.' },
        { id: 'c', text: 'Caches prompts to reduce token usage.' },
        { id: 'd', text: 'Translates prompts into the model\'s preferred language.' },
      ],
      correctId: 'b',
      explanation:
        'Prompt shields scan inputs to detect jailbreaks and indirect prompt injection from documents or other sources. Encryption in transit is provided by TLS at the platform level, not by prompt shields.',
    },
    {
      id: 'ai900-81',
      topic: 'AI Workloads',
      question:
        'A bookstore wants to suggest books a user might like based on what similar users bought. Which AI workload best matches?',
      options: [
        { id: 'a', text: 'Recommendation, a form of prediction over user-item interactions.' },
        { id: 'b', text: 'Anomaly detection.' },
        { id: 'c', text: 'OCR.' },
        { id: 'd', text: 'Speech recognition.' },
      ],
      correctId: 'a',
      explanation:
        'Recommendations are a prediction workload over user-item history. Anomaly detection flags outliers in data, which is not what suggesting items is.',
    },
    {
      id: 'ai900-82',
      topic: 'Responsible AI',
      question:
        'A customer service chatbot must clearly tell users they are talking to an AI before the conversation begins. Which Responsible AI principle does this support most directly?',
      options: [
        { id: 'a', text: 'Transparency.' },
        { id: 'b', text: 'Reliability and safety.' },
        { id: 'c', text: 'Privacy and security.' },
        { id: 'd', text: 'Inclusiveness.' },
      ],
      correctId: 'a',
      explanation:
        'Disclosing that a system is AI is part of transparency, so users can adjust their expectations. Reliability and safety is about correct behavior, a different axis.',
    },
    {
      id: 'ai900-83',
      topic: 'Machine Learning',
      question:
        'A model predicts a continuous numeric value, the daily power load in megawatts. Which model type is appropriate?',
      options: [
        { id: 'a', text: 'Multiclass classification.' },
        { id: 'b', text: 'Regression.' },
        { id: 'c', text: 'Clustering.' },
        { id: 'd', text: 'Binary classification.' },
      ],
      correctId: 'b',
      explanation:
        'Regression predicts a continuous numeric output. Multiclass classification chooses one label out of several discrete categories.',
    },
    {
      id: 'ai900-84',
      topic: 'Computer Vision',
      question:
        'Which Azure AI Custom Vision project type is most appropriate when you need to find and locate multiple known products on a store shelf?',
      options: [
        { id: 'a', text: 'Image classification (multiclass).' },
        { id: 'b', text: 'Image classification (multilabel).' },
        { id: 'c', text: 'Object detection.' },
        { id: 'd', text: 'Anomaly detection.' },
      ],
      correctId: 'c',
      explanation:
        'Object detection returns bounding boxes for each instance, which is what shelf inventory needs. Classification gives only image-level tags and would not localize each product.',
    },
    {
      id: 'ai900-85',
      topic: 'NLP',
      question:
        'A company has a CLU model that already handles English well. They want it to recognize the same intents in Dutch and German with little new data. Which feature helps most?',
      options: [
        { id: 'a', text: 'Custom neural voice.' },
        { id: 'b', text: 'CLU multilingual support.' },
        { id: 'c', text: 'OCR Read API.' },
        { id: 'd', text: 'Speaker recognition.' },
      ],
      correctId: 'b',
      explanation:
        'CLU supports multilingual training so a model can serve more languages with limited additional data. Custom neural voice creates a synthetic voice and is unrelated to intent classification.',
    },
    {
      id: 'ai900-86',
      topic: 'Generative AI',
      question:
        'Which option best describes how a token relates to text in an LLM?',
      options: [
        { id: 'a', text: 'A token is always one word.' },
        { id: 'b', text: 'A token is always one character.' },
        { id: 'c', text: 'A token is a sub-word unit produced by the tokenizer; common words are usually one token, rare words are split into several.' },
        { id: 'd', text: 'A token is a complete sentence.' },
      ],
      correctId: 'c',
      explanation:
        'LLM tokenizers produce sub-word units, so "running" might be one token while a rare word splits into several. Tokens are not strict words, characters, or sentences.',
    },
    {
      id: 'ai900-87',
      topic: 'Azure ML',
      question:
        'A team wants to train models from a Jupyter notebook on a fresh CSV every day, without managing VMs. Which combination is the simplest fit?',
      options: [
        { id: 'a', text: 'Azure ML compute instance with the dataset registered as a data asset.' },
        { id: 'b', text: 'A self-hosted Spark cluster.' },
        { id: 'c', text: 'Azure Functions.' },
        { id: 'd', text: 'Azure Container Apps.' },
      ],
      correctId: 'a',
      explanation:
        'A compute instance is a managed VM intended for notebook work, and a registered data asset gives a versioned reference to the daily file. Functions and Container Apps are general compute, not designed for ML notebooks.',
    },
    {
      id: 'ai900-88',
      topic: 'Computer Vision',
      question:
        'Which Azure AI Face capability returns groups of similar-looking faces from a large collection of unlabeled photos?',
      options: [
        { id: 'a', text: 'Face grouping / find similar.' },
        { id: 'b', text: 'OCR.' },
        { id: 'c', text: 'Brand detection.' },
        { id: 'd', text: 'Spatial analysis.' },
      ],
      correctId: 'a',
      explanation:
        'Face grouping clusters similar faces, and find similar returns close matches from a list. OCR reads text and is unrelated to faces.',
    },
    {
      id: 'ai900-89',
      topic: 'NLP',
      question:
        'You need a custom synthetic voice that sounds like a specific brand spokesperson, with their consent. Which feature fits?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Speech speech-to-text only.' },
        { id: 'c', text: 'Azure AI Speech custom neural voice.' },
        { id: 'd', text: 'Azure AI Language summarization.' },
      ],
      correctId: 'c',
      explanation:
        'Custom neural voice produces a brand-specific synthesized voice from training audio with consent. Speech-to-text transcribes audio and does not generate voices.',
    },
    {
      id: 'ai900-90',
      topic: 'Generative AI',
      question:
        'In Azure AI Foundry, what is the main purpose of content filters?',
      options: [
        { id: 'a', text: 'Detect and block harmful content categories such as hate, sexual, violence, and self-harm in prompts and completions.' },
        { id: 'b', text: 'Speed up model responses by caching.' },
        { id: 'c', text: 'Convert text to speech.' },
        { id: 'd', text: 'Track training cost across teams.' },
      ],
      correctId: 'a',
      explanation:
        'Content filters score prompts and completions across harm categories and can block or annotate them. Caching and speech synthesis are unrelated to safety filtering.',
    },
    {
      id: 'ai900-91',
      topic: 'AI Workloads',
      question:
        'Which scenario is the strongest fit for a generative AI workload?',
      options: [
        { id: 'a', text: 'Predict next month\'s sales totals from historical revenue.' },
        { id: 'b', text: 'Draft personalized marketing emails from a product brief and a customer profile.' },
        { id: 'c', text: 'Detect fraudulent transactions in real time.' },
        { id: 'd', text: 'Identify defective parts on an assembly line from photos.' },
      ],
      correctId: 'b',
      explanation:
        'Drafting new content like emails is generative AI. Forecasting, fraud detection, and defect spotting are prediction, anomaly detection, and computer vision workloads.',
    },
    {
      id: 'ai900-92',
      topic: 'Responsible AI',
      question:
        'A health insurance model is found to deny claims at a higher rate for one ethnic group despite similar inputs. Which Microsoft Responsible AI tool category helps measure this gap?',
      options: [
        { id: 'a', text: 'Fairness assessment via Fairlearn / Responsible AI dashboard.' },
        { id: 'b', text: 'MLflow tracking server.' },
        { id: 'c', text: 'Azure Key Vault.' },
        { id: 'd', text: 'Azure AI Search.' },
      ],
      correctId: 'a',
      explanation:
        'Fairlearn and the Responsible AI dashboard provide group-level metrics that surface disparate outcomes across sensitive features. MLflow tracks runs but does not measure fairness gaps.',
    },
    {
      id: 'ai900-93',
      topic: 'Machine Learning',
      question:
        'You have only 50 examples for one of three classes and 5,000 for each of the other two. Which problem are you most at risk of?',
      options: [
        { id: 'a', text: 'Class imbalance, leading to poor performance on the rare class.' },
        { id: 'b', text: 'Overfitting on the test set.' },
        { id: 'c', text: 'Data drift over time.' },
        { id: 'd', text: 'High training cost from data volume.' },
      ],
      correctId: 'a',
      explanation:
        'Imbalanced classes cause models to favor the majority and miss the rare class. Data drift is about distribution change between training and serving, a separate issue.',
    },
    {
      id: 'ai900-94',
      topic: 'Computer Vision',
      question:
        'Which Azure capability would you choose first when you need to read text from PDFs that include both printed and handwritten content?',
      options: [
        { id: 'a', text: 'Azure AI Translator.' },
        { id: 'b', text: 'Azure AI Custom Vision classification.' },
        { id: 'c', text: 'Azure AI Face detection.' },
        { id: 'd', text: 'Azure AI Vision Read OCR.' },
      ],
      correctId: 'd',
      explanation:
        'The Read OCR API supports printed and handwritten text in images and PDFs. Custom Vision classifies images into categories and does not return text content.',
    },
    {
      id: 'ai900-95',
      topic: 'NLP',
      question:
        'Which Azure AI Language feature returns the main topics of a long article as a short bulleted list?',
      options: [
        { id: 'a', text: 'Key phrase extraction.' },
        { id: 'b', text: 'PII detection.' },
        { id: 'c', text: 'Translation.' },
        { id: 'd', text: 'Speech-to-text.' },
      ],
      correctId: 'a',
      explanation:
        'Key phrase extraction returns the most important terms in a piece of text, useful as a topic summary. PII detection finds private data and would not list topics.',
    },
    {
      id: 'ai900-96',
      topic: 'Generative AI',
      question:
        'Which Azure OpenAI deployment type is most cost-effective for processing millions of completions overnight where latency is not critical?',
      options: [
        { id: 'a', text: 'Standard pay-as-you-go online deployment.' },
        { id: 'b', text: 'Provisioned throughput units.' },
        { id: 'c', text: 'Batch deployment.' },
        { id: 'd', text: 'Free tier.' },
      ],
      correctId: 'c',
      explanation:
        'Batch deployment is priced for asynchronous bulk jobs and trades real-time latency for lower cost. Standard online and provisioned throughput are tuned for interactive workloads.',
    },
    {
      id: 'ai900-97',
      topic: 'Generative AI',
      question:
        'Which assistant fits the description: an in-IDE assistant that suggests code completions and explains code based on the file you are editing?',
      options: [
        { id: 'a', text: 'Microsoft Copilot Studio.' },
        { id: 'b', text: 'GitHub Copilot.' },
        { id: 'c', text: 'Microsoft 365 Copilot.' },
        { id: 'd', text: 'Power BI Copilot.' },
      ],
      correctId: 'b',
      explanation:
        'GitHub Copilot lives in the IDE and assists with code. Microsoft 365 Copilot helps with Office documents, and Copilot Studio is for building custom copilots.',
    },
    {
      id: 'ai900-98',
      topic: 'Generative AI',
      question:
        'Which feature in Azure AI Content Safety helps detect when a generative model produces an answer that is not supported by the source documents?',
      options: [
        { id: 'a', text: 'Groundedness detection.' },
        { id: 'b', text: 'Whisper transcription.' },
        { id: 'c', text: 'Speech translation.' },
        { id: 'd', text: 'Image moderation.' },
      ],
      correctId: 'a',
      explanation:
        'Groundedness detection scores whether a response is supported by provided source material, useful for catching hallucinations in RAG. Whisper handles audio and is not a hallucination check.',
    },
    {
      id: 'ai900-99',
      topic: 'Azure ML',
      question:
        'A real-time fraud-scoring API must return decisions in tens of milliseconds. Which Azure ML deployment fits?',
      options: [
        { id: 'a', text: 'Online managed endpoint.' },
        { id: 'b', text: 'Batch endpoint.' },
        { id: 'c', text: 'Compute instance left running.' },
        { id: 'd', text: 'Data labeling project.' },
      ],
      correctId: 'a',
      explanation:
        'Online managed endpoints serve low-latency requests with autoscaling, suited for transactional scoring. Batch endpoints process large datasets asynchronously and are not for per-request latency.',
    },
    {
      id: 'ai900-100',
      topic: 'AI Workloads',
      question:
        'A startup wants software that automatically tags brand logos appearing in user-uploaded videos. Which combination of Azure capabilities fits best?',
      options: [
        { id: 'a', text: 'Azure AI Vision (brand detection) plus video frame extraction.' },
        { id: 'b', text: 'Azure AI Translator on the video file.' },
        { id: 'c', text: 'Azure AI Document Intelligence prebuilt receipt model.' },
        { id: 'd', text: 'Azure AI Speech speaker recognition.' },
      ],
      correctId: 'a',
      explanation:
        'Brand detection in Azure AI Vision identifies known logos in images, and frames pulled from the video provide the input. Translator and Document Intelligence do not analyze visual brand presence.',
    },
  ],
}
