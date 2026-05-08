import type { ExamSet } from '../types'

export const ai102: ExamSet = {
  examCode: 'AI-102',
  examName: 'Azure AI Engineer Associate',
  description:
    'One hundred practice questions at the level of the official AI-102 exam. Plan and manage Azure AI solutions, implement generative AI, computer vision, natural language processing, knowledge mining, and document intelligence.',
  ceCourseSlug: 'azure-ai-engineer',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-ai-engineer',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'ai102-1',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'Your team plans to call several Azure AI services from a single SDK using one endpoint and one key, and bill the usage to a single resource. Which resource should you provision?',
      options: [
        { id: 'a', text: 'A separate single-service resource for each AI service.' },
        { id: 'b', text: 'An Azure Machine Learning workspace only.' },
        { id: 'c', text: 'An Azure AI Foundry hub with no project.' },
        { id: 'd', text: 'An Azure AI services multi-service resource.' },
      ],
      correctId: 'd',
      explanation:
        'A multi-service Azure AI services resource exposes one endpoint and one key for several services and consolidates billing. Single-service resources each have their own endpoint and key, which is the opposite of what is needed.',
    },
    {
      id: 'ai102-2',
      topic: 'Generative AI Solutions',
      question:
        'You deploy a GPT-4o model in Azure OpenAI Service with 30K tokens per minute. The application logs frequent 429 responses during peak hours. What is the most direct fix that keeps the same model?',
      options: [
        { id: 'a', text: 'Switch the deployment to a Standard pay-as-you-go tier in another region.' },
        { id: 'b', text: 'Replace the deployment with a fine-tuned smaller model.' },
        { id: 'c', text: 'Lower the model temperature to reduce token usage.' },
        { id: 'd', text: 'Increase the Tokens Per Minute (TPM) quota on the deployment.' },
      ],
      correctId: 'd',
      explanation:
        'A 429 from Azure OpenAI signals that the deployment hit its TPM or RPM limit. Increasing TPM on the deployment raises the throttling ceiling. Temperature does not change token consumption.',
    },
    {
      id: 'ai102-3',
      topic: 'Computer Vision',
      question:
        'You need to extract printed and handwritten text from scanned legacy invoices that mix English and German. Which Azure AI service and operation fit best?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis with the tags feature.' },
        { id: 'b', text: 'Azure AI Translator document translation.' },
        { id: 'c', text: 'Azure AI Document Intelligence layout model only.' },
        { id: 'd', text: 'Azure AI Vision Read API (OCR).' },
      ],
      correctId: 'd',
      explanation:
        'The Read API in Azure AI Vision performs OCR on printed and handwritten text in many languages, including English and German. Image Analysis tags describe the picture but do not return full text content.',
    },
    {
      id: 'ai102-4',
      topic: 'Natural Language Processing',
      question:
        'A support team wants to automatically detect the language of inbound chat messages before routing them. Which Azure AI Language feature do you call?',
      options: [
        { id: 'a', text: 'Sentiment analysis.' },
        { id: 'b', text: 'Key phrase extraction.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Named entity recognition.' },
      ],
      correctId: 'c',
      explanation:
        'Language detection in Azure AI Language returns an ISO language code and a confidence score. Sentiment analysis tells you the tone, not the language.',
    },
    {
      id: 'ai102-5',
      topic: 'Knowledge Mining',
      question:
        'You build a Retrieval Augmented Generation chatbot over 500 PDF policy documents. You want results that combine keyword matching, vector similarity, and re-ranking by relevance. Which Azure AI Search query mode do you choose?',
      options: [
        { id: 'a', text: 'Simple keyword search.' },
        { id: 'b', text: 'Pure vector search.' },
        { id: 'c', text: 'Hybrid search with semantic ranker enabled.' },
        { id: 'd', text: 'Filter-only query with no search text.' },
      ],
      correctId: 'c',
      explanation:
        'Hybrid search runs keyword and vector queries together, then the semantic ranker reorders the top results using a deeper language model. Pure vector or pure keyword loses one of those signals.',
    },
    {
      id: 'ai102-6',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A workload running on Azure App Service must call an Azure AI services resource without storing keys. Which approach do you choose?',
      options: [
        { id: 'a', text: 'Hardcode the key in an environment variable.' },
        { id: 'b', text: 'Store the key in a public GitHub secret.' },
        { id: 'c', text: 'Assign a system-assigned managed identity to the App Service and grant it the appropriate role on the AI resource.' },
        { id: 'd', text: 'Use the AI service portal to disable authentication entirely.' },
      ],
      correctId: 'c',
      explanation:
        'A managed identity authenticates the App Service to Microsoft Entra ID and avoids any stored secret. Disabling authentication is not supported for Azure AI services.',
    },
    {
      id: 'ai102-7',
      topic: 'Computer Vision',
      question:
        'Your retail customer wants to count people entering a store by reading frames from CCTV every second and detecting persons. Which Azure AI Vision capability do you use?',
      options: [
        { id: 'a', text: 'Background removal.' },
        { id: 'b', text: 'Image captioning.' },
        { id: 'c', text: 'Face attribute detection.' },
        { id: 'd', text: 'Spatial Analysis on Azure AI Vision.' },
      ],
      correctId: 'd',
      explanation:
        'Spatial Analysis (now part of Azure AI Vision) detects and counts people in video frames over time. Face attribute detection focuses on facial features, not crowd flow.',
    },
    {
      id: 'ai102-8',
      topic: 'Generative AI Solutions',
      question:
        'You want Azure OpenAI to ground answers strictly on a corpus of internal HR documents, returning citations and refusing to answer when context is missing. Which configuration do you choose?',
      options: [
        { id: 'a', text: 'Fine-tune a base model on the HR documents.' },
        { id: 'b', text: 'Increase temperature to 1.2 to encourage diverse answers.' },
        { id: 'c', text: 'Use Azure OpenAI On Your Data with an Azure AI Search index as the data source.' },
        { id: 'd', text: 'Use the chat completions API with a long system prompt that pastes all documents inline.' },
      ],
      correctId: 'c',
      explanation:
        'On Your Data uses an Azure AI Search index for retrieval and returns citations, with an option to restrict responses to the data. Fine-tuning teaches style but does not provide citations or guarantee groundedness.',
    },
    {
      id: 'ai102-9',
      topic: 'Knowledge Mining',
      question:
        'You ingest a stream of research PDFs into Azure AI Search. You want each document chunk converted to an embedding using Azure OpenAI before indexing. Which feature do you configure?',
      options: [
        { id: 'a', text: 'A SQL trigger on the source database.' },
        { id: 'b', text: 'A scheduled Azure Function that calls the indexer REST API.' },
        { id: 'c', text: 'A skillset with the AzureOpenAIEmbedding skill in the indexer pipeline.' },
        { id: 'd', text: 'An Azure Stream Analytics job.' },
      ],
      correctId: 'c',
      explanation:
        'The integrated vectorization pipeline uses a skillset with the AzureOpenAIEmbedding skill to generate embeddings during indexing. A Function would work but is more code than needed when the built-in skill exists.',
    },
    {
      id: 'ai102-10',
      topic: 'Natural Language Processing',
      question:
        'A medical app must extract drug names, dosages, and conditions from clinical notes. Which Azure AI Language feature is built for this?',
      options: [
        { id: 'a', text: 'Custom Named Entity Recognition.' },
        { id: 'b', text: 'Question Answering.' },
        { id: 'c', text: 'Conversational Language Understanding.' },
        { id: 'd', text: 'Text Analytics for Health.' },
      ],
      correctId: 'd',
      explanation:
        'Text Analytics for Health is a prebuilt feature in Azure AI Language with medical entity types and relations. Custom NER would require training and lacks the medical ontology out of the box.',
    },
    {
      id: 'ai102-11',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'Your security team requires that traffic from a virtual network to an Azure AI services resource never traverse the public internet. Which feature do you configure?',
      options: [
        { id: 'a', text: 'Azure DDoS Protection Standard.' },
        { id: 'b', text: 'A private endpoint for the Azure AI services resource.' },
        { id: 'c', text: 'A service tag rule in the network security group.' },
        { id: 'd', text: 'Public network access with IP firewall rules.' },
      ],
      correctId: 'b',
      explanation:
        'A private endpoint gives the resource a private IP inside your VNet so traffic stays on the Microsoft backbone. IP firewall rules still allow traffic over the public endpoint.',
    },
    {
      id: 'ai102-12',
      topic: 'Computer Vision',
      question:
        'You train a Custom Vision classification project to identify three product variants from photos. Accuracy is 95% on training data but drops to 60% on photos taken on a phone. What is the most likely first fix?',
      options: [
        { id: 'a', text: 'Switch to an object detection project.' },
        { id: 'b', text: 'Add training images that match the lighting and angles of phone photos.' },
        { id: 'c', text: 'Reduce the probability threshold to 1%.' },
        { id: 'd', text: 'Export the model to ONNX.' },
      ],
      correctId: 'b',
      explanation:
        'A large train versus production accuracy gap signals a domain mismatch. Adding diverse training images that mirror real shooting conditions is the standard remedy. Lowering the threshold inflates false positives.',
    },
    {
      id: 'ai102-13',
      topic: 'Document Intelligence',
      question:
        'Your team must extract the vendor, invoice ID, total, and line items from a wide variety of invoice layouts in many languages. Which Azure AI Document Intelligence model do you call?',
      options: [
        { id: 'a', text: 'Layout model only.' },
        { id: 'b', text: 'Custom template model trained on three samples.' },
        { id: 'c', text: 'Prebuilt invoice model.' },
        { id: 'd', text: 'Read OCR model only.' },
      ],
      correctId: 'c',
      explanation:
        'The prebuilt invoice model already understands invoice fields across many layouts and languages. The layout model only returns structure (tables and lines), without vendor or total semantics.',
    },
    {
      id: 'ai102-14',
      topic: 'Generative AI Solutions',
      question:
        'A prompt instructs the model to "answer only from the provided context, otherwise say you do not know". The team wants a quantitative measure of how well the model follows that instruction. Which Azure AI Foundry evaluator should they pick?',
      options: [
        { id: 'a', text: 'Coherence evaluator.' },
        { id: 'b', text: 'Fluency evaluator.' },
        { id: 'c', text: 'Groundedness evaluator.' },
        { id: 'd', text: 'BLEU score evaluator.' },
      ],
      correctId: 'c',
      explanation:
        'Groundedness measures whether the answer is supported by the supplied context, which is exactly the policy being checked. Coherence and fluency evaluate writing quality, not faithfulness to context.',
    },
    {
      id: 'ai102-15',
      topic: 'Agentic Solutions',
      question:
        'You build an agent in Azure AI Agent Service that must look up customer orders from an internal REST API and respond conversationally. How do you let the agent call that API safely?',
      options: [
        { id: 'a', text: 'Hardcode the API key in the system prompt.' },
        { id: 'b', text: 'Define the API as a custom tool (function) the agent can invoke, and authenticate with managed identity.' },
        { id: 'c', text: 'Tell the user to paste API responses into the chat.' },
        { id: 'd', text: 'Use a higher temperature so the agent guesses correct values.' },
      ],
      correctId: 'b',
      explanation:
        'Agents call external systems through tools with structured schemas, and managed identity removes the need to store keys. Putting keys in the prompt leaks secrets to the model and to logs.',
    },
    {
      id: 'ai102-16',
      topic: 'Natural Language Processing',
      question:
        'You build a Conversational Language Understanding (CLU) model with two intents: BookFlight and CancelFlight. Real users ask questions like "What is my flight status?". How do you handle that gracefully?',
      options: [
        { id: 'a', text: 'Disable the Language resource.' },
        { id: 'b', text: 'Lower the confidence threshold to 0.0.' },
        { id: 'c', text: 'Always route to BookFlight as a fallback.' },
        { id: 'd', text: 'Add a None intent and train it with out-of-scope examples.' },
      ],
      correctId: 'd',
      explanation:
        'A None intent trained on representative out-of-scope examples lets CLU recognise inputs that match neither business intent. A 0.0 threshold accepts any prediction, even random ones.',
    },
    {
      id: 'ai102-17',
      topic: 'Knowledge Mining',
      question:
        'A search application must return only documents the calling user is allowed to read. Which Azure AI Search capability do you use to enforce that at query time?',
      options: [
        { id: 'a', text: 'Scoring profiles.' },
        { id: 'b', text: 'Security trimming using a filter on a permissions field.' },
        { id: 'c', text: 'Synonym maps.' },
        { id: 'd', text: 'Custom analyzers.' },
      ],
      correctId: 'b',
      explanation:
        'Indexing user or group identifiers as a field and applying a filter at query time is the documented pattern for security trimming. Scoring profiles change ranking, not visibility.',
    },
    {
      id: 'ai102-18',
      topic: 'Computer Vision',
      question:
        'A regulated client wants to verify that a person presenting an ID card matches the live selfie they just took, while preserving privacy. Which service is permitted and fits the use case in 2026?',
      options: [
        { id: 'a', text: 'Azure AI Content Safety.' },
        { id: 'b', text: 'Azure AI Vision tags.' },
        { id: 'c', text: 'Custom Vision classification.' },
        { id: 'd', text: 'Azure AI Face Verify, available to approved customers under Limited Access.' },
      ],
      correctId: 'd',
      explanation:
        'Face Verify, part of Azure AI Face under Limited Access, compares two faces and returns a similarity score. Image Analysis tags describe scene content but cannot match identities.',
    },
    {
      id: 'ai102-19',
      topic: 'Generative AI Solutions',
      question:
        'You want to add a strict block on prompts and responses containing self-harm content for a public chatbot built on Azure OpenAI. Which option requires the least custom code?',
      options: [
        { id: 'a', text: 'Write your own classifier on every request.' },
        { id: 'b', text: 'Tell the model in the prompt not to answer such questions.' },
        { id: 'c', text: 'Configure Azure AI Content Safety filters or the built-in content filter levels on the Azure OpenAI deployment.' },
        { id: 'd', text: 'Run the chatbot only during business hours.' },
      ],
      correctId: 'c',
      explanation:
        'Azure OpenAI deployments include configurable content filters, and Azure AI Content Safety adds a programmatic API for the same categories. Prompt instructions are easily bypassed and not auditable.',
    },
    {
      id: 'ai102-20',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A regulated customer must store all data processed by Azure AI services within the EU. Which planning step matters most?',
      options: [
        { id: 'a', text: 'Choose any region; data residency is not configurable.' },
        { id: 'b', text: 'Pick an EU region for the Azure AI services resource and confirm the service supports EU data residency.' },
        { id: 'c', text: 'Use only the global endpoint and rely on the SDK to choose a region.' },
        { id: 'd', text: 'Disable diagnostic logging to keep data local.' },
      ],
      correctId: 'b',
      explanation:
        'Data residency depends on the region you select for the resource. Some Azure AI services route inference globally unless you pick an EU-only deployment, so verify the specific service.',
    },
    {
      id: 'ai102-21',
      topic: 'Document Intelligence',
      question:
        'You have 200 pages of contracts that follow your company template. Field positions vary slightly between revisions. Which Azure AI Document Intelligence approach gives the highest accuracy with the least training data?',
      options: [
        { id: 'a', text: 'Custom template model with five labelled samples.' },
        { id: 'b', text: 'Read API only.' },
        { id: 'c', text: 'Prebuilt invoice model.' },
        { id: 'd', text: 'Custom neural model with five labelled samples.' },
      ],
      correctId: 'd',
      explanation:
        'Custom neural handles layout drift in semi-structured documents and works with as few as five labelled samples. Custom template assumes near-identical fixed positions and breaks when fields move.',
    },
    {
      id: 'ai102-22',
      topic: 'Natural Language Processing',
      question:
        'A multilingual call center wants real-time transcription of phone calls and automatic translation of the transcript into English. Which Azure AI Speech capability is the simplest fit?',
      options: [
        { id: 'a', text: 'Custom Speech with a base model.' },
        { id: 'b', text: 'Batch transcription followed by a separate Translator job.' },
        { id: 'c', text: 'Speech translation with a real-time SDK call.' },
        { id: 'd', text: 'Text to speech with neural voices.' },
      ],
      correctId: 'c',
      explanation:
        'The Speech translation API streams audio and returns translated text in one call, designed for real-time scenarios. Batch transcription waits for the full file, which is not real-time.',
    },
    {
      id: 'ai102-23',
      topic: 'Computer Vision',
      question:
        'You need to read text from images stored in Azure Blob Storage and you expect millions of documents. Which Azure AI Vision Read API mode keeps cost lowest?',
      options: [
        { id: 'a', text: 'Synchronous Read for each blob.' },
        { id: 'b', text: 'Asynchronous Read with batching, polling for results.' },
        { id: 'c', text: 'Calling the prebuilt receipt model on every blob.' },
        { id: 'd', text: 'Embedding each image and calling Azure OpenAI.' },
      ],
      correctId: 'b',
      explanation:
        'The asynchronous Read operation supports multi-page documents and batching, which scales better than per-image synchronous calls. Calling Document Intelligence receipt model adds cost beyond plain OCR.',
    },
    {
      id: 'ai102-24',
      topic: 'Generative AI Solutions',
      question:
        'Your application needs predictable latency for a fixed throughput of 100K tokens per minute, including off-peak hours. Which Azure OpenAI deployment type fits?',
      options: [
        { id: 'a', text: 'Standard pay-as-you-go shared deployment.' },
        { id: 'b', text: 'Provisioned Throughput Units (PTU) deployment.' },
        { id: 'c', text: 'Free tier deployment.' },
        { id: 'd', text: 'Local deployment on a VM.' },
      ],
      correctId: 'b',
      explanation:
        'PTU reserves capacity, giving stable latency and a known throughput ceiling. Standard shares capacity across customers, so latency varies under load.',
    },
    {
      id: 'ai102-25',
      topic: 'Knowledge Mining',
      question:
        'A custom skill in an Azure AI Search skillset must call your own Python service. Which interface does Azure AI Search expect?',
      options: [
        { id: 'a', text: 'A SOAP service over port 80.' },
        { id: 'b', text: 'A Web API custom skill returning JSON in the documented record format.' },
        { id: 'c', text: 'A SQL stored procedure.' },
        { id: 'd', text: 'A gRPC service with a custom proto.' },
      ],
      correctId: 'b',
      explanation:
        'Custom skills are HTTP endpoints that accept a values array and return a values array of records. SQL or gRPC contracts are not supported by the skillset framework.',
    },
    {
      id: 'ai102-26',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You must restrict an Azure OpenAI Service resource so that only specific subnets in your VNet can access it, and you cannot use a private endpoint due to a partner constraint. What is the next best option?',
      options: [
        { id: 'a', text: 'Disable network access entirely.' },
        { id: 'b', text: 'Use the resource firewall to allow specific virtual networks via service endpoints.' },
        { id: 'c', text: 'Allow all networks and rely on the API key.' },
        { id: 'd', text: 'Move the resource to a public IP outside Azure.' },
      ],
      correctId: 'b',
      explanation:
        'When private endpoint is unavailable, the resource firewall combined with VNet service endpoints limits which subnets can reach the resource. Allowing all networks contradicts the requirement.',
    },
    {
      id: 'ai102-27',
      topic: 'Natural Language Processing',
      question:
        'You build a custom voice for a brand using Azure AI Speech. Which control gate is required before the custom voice can be deployed publicly?',
      options: [
        { id: 'a', text: 'A separate Azure subscription per voice.' },
        { id: 'b', text: 'Application and approval under the responsible AI Limited Access program for Custom Neural Voice.' },
        { id: 'c', text: 'Manual review of every synthesized request.' },
        { id: 'd', text: 'A public GitHub repository with the training audio.' },
      ],
      correctId: 'b',
      explanation:
        'Custom Neural Voice is a Limited Access feature; Microsoft requires use case review and consent attestations before deployment. The other options are not service requirements.',
    },
    {
      id: 'ai102-28',
      topic: 'Computer Vision',
      question:
        'A drone surveys solar farms. You need to detect cracked panels in aerial photos and you have 800 labelled examples per class. Which approach gives the best accuracy?',
      options: [
        { id: 'a', text: 'OCR on the panel labels.' },
        { id: 'b', text: 'The Image Analysis tagging endpoint as-is.' },
        { id: 'c', text: 'Azure OpenAI vision chat without training.' },
        { id: 'd', text: 'A Custom Vision object detection project trained on the labelled images.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision object detection trains a model on your labelled bounding boxes for a domain-specific task. The generic Image Analysis tagger has no concept of solar panel defects.',
    },
    {
      id: 'ai102-29',
      topic: 'Document Intelligence',
      question:
        'A financial firm needs to extract tables and key-value pairs from PDFs that have varied structure and no Microsoft prebuilt model fits. The team already labels samples in Document Intelligence Studio. Which model type should they pick?',
      options: [
        { id: 'a', text: 'Custom template.' },
        { id: 'b', text: 'Prebuilt receipt.' },
        { id: 'c', text: 'Custom neural.' },
        { id: 'd', text: 'Read.' },
      ],
      correctId: 'c',
      explanation:
        'Custom neural is the recommended model for semi-structured documents with varying layouts. Prebuilt receipt does not match the use case, and template fails with layout variation.',
    },
    {
      id: 'ai102-30',
      topic: 'Generative AI Solutions',
      question:
        'You want a chatbot to generate responses in a specific corporate tone consistently, regardless of the question. The base model is fine, only the style needs to change. What is the most cost-effective option?',
      options: [
        { id: 'a', text: 'Fine-tune the base model on tone-shaped examples.' },
        { id: 'b', text: 'Use a detailed system prompt with style guidelines and a few-shot examples.' },
        { id: 'c', text: 'Pre-train a new model from scratch.' },
        { id: 'd', text: 'Switch to a smaller model and lower temperature.' },
      ],
      correctId: 'b',
      explanation:
        'Style adjustments are usually best handled with a clear system prompt and few-shot examples. Fine-tuning costs more and is overkill for tone alone.',
    },
    {
      id: 'ai102-31',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A developer accidentally pushes an Azure AI services key to a public repository. What is the correct response?',
      options: [
        { id: 'a', text: 'Force-push to remove history and keep using the key.' },
        { id: 'b', text: 'Regenerate both keys on the resource and update applications using the new key.' },
        { id: 'c', text: 'Lower the resource pricing tier.' },
        { id: 'd', text: 'Open a support case before doing anything else.' },
      ],
      correctId: 'b',
      explanation:
        'Each Azure AI services resource has two keys; regenerating the leaked key invalidates it immediately. Force-push does not stop attackers who already cloned the secret.',
    },
    {
      id: 'ai102-32',
      topic: 'Knowledge Mining',
      question:
        'You want Azure AI Search to enrich documents during indexing by extracting key phrases, entities, and detecting language, then store the results in the index. Which feature do you configure?',
      options: [
        { id: 'a', text: 'A semantic configuration.' },
        { id: 'b', text: 'A scoring profile.' },
        { id: 'c', text: 'A skillset that calls built-in cognitive skills.' },
        { id: 'd', text: 'A synonym map.' },
      ],
      correctId: 'c',
      explanation:
        'Skillsets chain cognitive skills (key phrase, entity, language detection) and project the output into index fields. Scoring profiles only adjust ranking, not extraction.',
    },
    {
      id: 'ai102-33',
      topic: 'Natural Language Processing',
      question:
        'A team migrates from QnA Maker. Which Azure AI Language feature replaces it for FAQ-style chat?',
      options: [
        { id: 'a', text: 'Personally Identifiable Information detection.' },
        { id: 'b', text: 'Sentiment analysis.' },
        { id: 'c', text: 'Conversational Language Understanding.' },
        { id: 'd', text: 'Question Answering in Azure AI Language.' },
      ],
      correctId: 'd',
      explanation:
        'Question Answering, the successor to QnA Maker, builds a knowledge base from FAQ pages and chit-chat. CLU is for intent and entity extraction in conversations, not FAQ retrieval.',
    },
    {
      id: 'ai102-34',
      topic: 'Computer Vision',
      question:
        'You need real-time face detection on an edge device with no internet connection. Which approach is supported?',
      options: [
        { id: 'a', text: 'Call the Azure AI Face cloud API.' },
        { id: 'b', text: 'Run the Custom Vision exported model on the edge device.' },
        { id: 'c', text: 'Use Azure OpenAI on the device.' },
        { id: 'd', text: 'Run Document Intelligence on the device.' },
      ],
      correctId: 'b',
      explanation:
        'Custom Vision can export a compact model (TensorFlow, ONNX, CoreML) for offline inference. The cloud APIs require network access.',
    },
    {
      id: 'ai102-35',
      topic: 'Generative AI Solutions',
      question:
        'A team wants to compare three prompts on a 200-row evaluation set and produce metrics for groundedness, relevance, and coherence side by side. Which Azure AI Foundry capability fits?',
      options: [
        { id: 'a', text: 'A Power BI dashboard wired to chat logs.' },
        { id: 'b', text: 'A Logic App that emails results.' },
        { id: 'c', text: 'Azure Pipelines with shell scripts only.' },
        { id: 'd', text: 'Prompt flow evaluation runs.' },
      ],
      correctId: 'd',
      explanation:
        'Prompt flow in Azure AI Foundry runs evaluation flows over a dataset and reports metrics per variant. Logic Apps and Pipelines lack the built-in evaluators.',
    },
    {
      id: 'ai102-36',
      topic: 'Agentic Solutions',
      question:
        'In Azure AI Agent Service, an agent must keep multi-turn context across user sessions tied to a specific customer ID. Which abstraction stores that context?',
      options: [
        { id: 'a', text: 'An Azure Storage queue.' },
        { id: 'b', text: 'A new agent per customer.' },
        { id: 'c', text: 'A thread, scoped per customer.' },
        { id: 'd', text: 'A global system prompt.' },
      ],
      correctId: 'c',
      explanation:
        'Threads in Azure AI Agent Service hold conversation history and are reusable per customer. Creating a new agent per customer is wasteful and not the intended pattern.',
    },
    {
      id: 'ai102-37',
      topic: 'Document Intelligence',
      question:
        'Your healthcare client wants structured extraction of patient demographics, insurer, and procedure codes from a US 1500 claim form. Which Document Intelligence model fits best?',
      options: [
        { id: 'a', text: 'Layout model only.' },
        { id: 'b', text: 'Prebuilt US tax forms model.' },
        { id: 'c', text: 'Prebuilt receipt model.' },
        { id: 'd', text: 'Prebuilt health insurance card model.' },
      ],
      correctId: 'd',
      explanation:
        'Document Intelligence ships a prebuilt model for US health insurance forms with the relevant fields. Tax forms and receipts target different document types.',
    },
    {
      id: 'ai102-38',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You must give a data scientist permission to call Azure OpenAI without giving them rights to manage the resource. Which Microsoft Entra ID role do you assign at the resource scope?',
      options: [
        { id: 'a', text: 'Owner.' },
        { id: 'b', text: 'Reader.' },
        { id: 'c', text: 'Contributor.' },
        { id: 'd', text: 'Cognitive Services OpenAI User.' },
      ],
      correctId: 'd',
      explanation:
        'The Cognitive Services OpenAI User role grants data plane access (calling the API) without management rights. Reader cannot call the API; Contributor and Owner give too much.',
    },
    {
      id: 'ai102-39',
      topic: 'Natural Language Processing',
      question:
        'A retailer wants to translate product descriptions into 30 languages, including industry terminology that differs from generic translation. Which feature should they use?',
      options: [
        { id: 'a', text: 'Question Answering.' },
        { id: 'b', text: 'Conversational Language Understanding.' },
        { id: 'c', text: 'Azure AI Speech translation.' },
        { id: 'd', text: 'Azure AI Translator with a Custom Translator project.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Translator trains a domain-specific translation model from parallel sentences. The generic translator misses industry terminology that the team wants to preserve.',
    },
    {
      id: 'ai102-40',
      topic: 'Knowledge Mining',
      question:
        'A vector index in Azure AI Search returns near-duplicate results. Which technique reduces redundancy in the result set?',
      options: [
        { id: 'a', text: 'Lower the embedding dimension.' },
        { id: 'b', text: 'Increase top K to 1,000.' },
        { id: 'c', text: 'Apply MaximalMarginalRelevance (MMR) re-ranking or deduplication on a chunk hash.' },
        { id: 'd', text: 'Disable HNSW indexing.' },
      ],
      correctId: 'c',
      explanation:
        'MMR balances relevance and diversity, removing near-duplicates from the top results. Increasing K only returns more duplicates.',
    },
    {
      id: 'ai102-41',
      topic: 'Computer Vision',
      question:
        'You want to detect inappropriate content in user-uploaded images for a social app, including violence and adult categories. Which Azure service is the recommended fit in 2026?',
      options: [
        { id: 'a', text: 'Custom Vision binary classifier.' },
        { id: 'b', text: 'Azure AI Vision tags.' },
        { id: 'c', text: 'Azure AI Content Safety image moderation.' },
        { id: 'd', text: 'Document Intelligence read.' },
      ],
      correctId: 'c',
      explanation:
        'Azure AI Content Safety provides image moderation with severity levels for violence, sexual, hate, and self-harm. Vision tags do not return moderation severities.',
    },
    {
      id: 'ai102-42',
      topic: 'Generative AI Solutions',
      question:
        'A team grounds a chatbot on internal docs. Users ask follow-up questions like "what about the second one?". The retriever fails because the question alone has no nouns. What technique fixes this?',
      options: [
        { id: 'a', text: 'Increase the embedding model size.' },
        { id: 'b', text: 'Apply query rewriting using prior chat history before retrieval.' },
        { id: 'c', text: 'Reduce top K to 1.' },
        { id: 'd', text: 'Disable semantic ranking.' },
      ],
      correctId: 'b',
      explanation:
        'Multi-turn RAG benefits from rewriting the user question to a standalone form using the chat history, so retrieval has enough context. Bigger embeddings do not solve the missing-context problem.',
    },
    {
      id: 'ai102-43',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You need to monitor Azure OpenAI usage by deployment, including tokens, errors, and latency. Where do you find these metrics with no extra code?',
      options: [
        { id: 'a', text: 'GitHub Actions logs.' },
        { id: 'b', text: 'The Azure billing portal only.' },
        { id: 'c', text: 'A custom Python script that scrapes the portal.' },
        { id: 'd', text: 'Azure Monitor metrics on the Azure OpenAI resource.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Monitor exposes built-in metrics for Azure OpenAI per deployment. The billing portal shows cost, not request-level metrics.',
    },
    {
      id: 'ai102-44',
      topic: 'Document Intelligence',
      question:
        'You want to combine text from receipts (prebuilt) and from a custom contract model into a single workflow. Which Document Intelligence feature lets you do this with one call?',
      options: [
        { id: 'a', text: 'Layout API.' },
        { id: 'b', text: 'Read API.' },
        { id: 'c', text: 'Composed model.' },
        { id: 'd', text: 'General document model only.' },
      ],
      correctId: 'c',
      explanation:
        'A composed model groups several custom models so a single call routes documents to the right submodel. Read and Layout return only OCR or structure.',
    },
    {
      id: 'ai102-45',
      topic: 'Natural Language Processing',
      question:
        'A privacy team requires that all email bodies have personal information redacted before storage. Which Azure AI Language feature fits?',
      options: [
        { id: 'a', text: 'Question Answering.' },
        { id: 'b', text: 'Sentiment analysis with opinion mining.' },
        { id: 'c', text: 'Language detection.' },
        { id: 'd', text: 'Personally Identifiable Information (PII) detection with redaction.' },
      ],
      correctId: 'd',
      explanation:
        'PII detection identifies names, addresses, IDs, and returns redacted text. Sentiment analysis classifies tone and is unrelated to redaction.',
    },
    {
      id: 'ai102-46',
      topic: 'Computer Vision',
      question:
        'A team builds a Custom Vision project. They notice it requires very few images per tag during training. Which capability is responsible?',
      options: [
        { id: 'a', text: 'Reinforcement learning from human feedback.' },
        { id: 'b', text: 'Transfer learning from a pretrained backbone.' },
        { id: 'c', text: 'Federated learning.' },
        { id: 'd', text: 'Quantization-aware training.' },
      ],
      correctId: 'b',
      explanation:
        'Custom Vision starts from a pretrained model and fine-tunes on your tags, so a small dataset suffices. The other techniques are unrelated to that property.',
    },
    {
      id: 'ai102-47',
      topic: 'Knowledge Mining',
      question:
        'A search index field stores product names. Users misspell them often. Which configuration helps return matches despite typos?',
      options: [
        { id: 'a', text: 'Mark the field as filterable only.' },
        { id: 'b', text: 'Use the fuzzy operator (~) in queries or enable the n-gram analyzer.' },
        { id: 'c', text: 'Disable the index.' },
        { id: 'd', text: 'Lower the index replica count to 1.' },
      ],
      correctId: 'b',
      explanation:
        'Fuzzy search and n-gram analyzers tolerate spelling variations during retrieval. Filterable only matters for exact filters, not typo tolerance.',
    },
    {
      id: 'ai102-48',
      topic: 'Generative AI Solutions',
      question:
        'You want to keep a long technical document in working memory across many turns without exceeding context length. Which retrieval pattern is most appropriate?',
      options: [
        { id: 'a', text: 'Paste the entire document in every system prompt.' },
        { id: 'b', text: 'Chunk the document, embed it, and retrieve only relevant chunks per turn (RAG).' },
        { id: 'c', text: 'Run a recursive summarisation that replaces the original.' },
        { id: 'd', text: 'Lower max_tokens to 50.' },
      ],
      correctId: 'b',
      explanation:
        'Chunking and retrieving only the relevant pieces keeps prompts within the context window and is the standard RAG approach. Pasting the full document wastes tokens and risks limit errors.',
    },
    {
      id: 'ai102-49',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A solution must ingest unpredictable peaks of audio files and transcribe them within 24 hours, not in real time. Which Azure AI Speech mode keeps cost lowest?',
      options: [
        { id: 'a', text: 'Real-time speech to text streaming.' },
        { id: 'b', text: 'Batch transcription with files in Azure Storage.' },
        { id: 'c', text: 'Custom voice synthesis.' },
        { id: 'd', text: 'Speaker recognition enrollment.' },
      ],
      correctId: 'b',
      explanation:
        'Batch transcription processes audio asynchronously at lower cost than streaming. Real-time is needed only when latency is critical.',
    },
    {
      id: 'ai102-50',
      topic: 'Natural Language Processing',
      question:
        'A multilingual app uses Azure AI Translator. The CFO wants per-document translation that preserves Word and PDF formatting. Which capability matches?',
      options: [
        { id: 'a', text: 'Speech translation.' },
        { id: 'b', text: 'Real-time text translation only.' },
        { id: 'c', text: 'Document Translation in Azure AI Translator.' },
        { id: 'd', text: 'Custom Translator training only.' },
      ],
      correctId: 'c',
      explanation:
        'Document Translation translates whole files in Azure Storage and preserves their format. Real-time text translation returns plain strings without document structure.',
    },
    {
      id: 'ai102-51',
      topic: 'Computer Vision',
      question:
        'A retailer wants natural-language image captions for accessibility (alt text) on a product catalog. Which feature provides this in one call?',
      options: [
        { id: 'a', text: 'Face Detect.' },
        { id: 'b', text: 'Custom Vision multi-class classification.' },
        { id: 'c', text: 'OCR Read.' },
        { id: 'd', text: 'Azure AI Vision Image Analysis with the Caption feature.' },
      ],
      correctId: 'd',
      explanation:
        'Image Analysis returns a natural-language caption with a confidence score. Custom Vision returns tag probabilities, not sentences.',
    },
    {
      id: 'ai102-52',
      topic: 'Document Intelligence',
      question:
        'Your team wants to parse layout (paragraphs, tables, sections) from PDFs to feed into a RAG pipeline. Which Document Intelligence model is the cheapest fit?',
      options: [
        { id: 'a', text: 'Composed model.' },
        { id: 'b', text: 'Custom neural model.' },
        { id: 'c', text: 'Layout model.' },
        { id: 'd', text: 'Prebuilt invoice model.' },
      ],
      correctId: 'c',
      explanation:
        'The layout model returns text, paragraphs, tables, and reading order without semantic field extraction. Invoice and neural models cost more for capabilities you do not need.',
    },
    {
      id: 'ai102-53',
      topic: 'Generative AI Solutions',
      question:
        'You use Azure OpenAI Assistants and need the model to read and reason over an uploaded CSV file. Which built-in tool do you enable?',
      options: [
        { id: 'a', text: 'Speech synthesis.' },
        { id: 'b', text: 'Function calling only.' },
        { id: 'c', text: 'Vision encoder.' },
        { id: 'd', text: 'Code Interpreter.' },
      ],
      correctId: 'd',
      explanation:
        'Code Interpreter executes Python in a sandbox and can read uploaded files such as CSV. Function calling lets the assistant call your APIs but does not run code on uploaded files.',
    },
    {
      id: 'ai102-54',
      topic: 'Agentic Solutions',
      question:
        'You want an agent in Azure AI Agent Service to ground answers on company data already indexed in Azure AI Search. Which approach is the most direct?',
      options: [
        { id: 'a', text: 'Add Azure AI Search as a knowledge source on the agent.' },
        { id: 'b', text: 'Email the index to the agent.' },
        { id: 'c', text: 'Re-index everything in Cosmos DB instead.' },
        { id: 'd', text: 'Disable retrieval and rely on the base model.' },
      ],
      correctId: 'a',
      explanation:
        'Azure AI Agent Service supports Azure AI Search as a knowledge source so retrieval is wired in for the agent. Disabling retrieval contradicts the requirement.',
    },
    {
      id: 'ai102-55',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A workload calls Azure OpenAI Service. Microsoft requires registration to access certain models. Which page handles that?',
      options: [
        { id: 'a', text: 'Azure Marketplace listings.' },
        { id: 'b', text: 'The Azure OpenAI Limited Access registration form for the model in question.' },
        { id: 'c', text: 'Microsoft Learn account settings.' },
        { id: 'd', text: 'Azure Resource Manager templates.' },
      ],
      correctId: 'b',
      explanation:
        'Some Azure OpenAI capabilities require Limited Access approval. Marketplace and Learn settings have nothing to do with model gating.',
    },
    {
      id: 'ai102-56',
      topic: 'Natural Language Processing',
      question:
        'A speech-enabled medical app needs higher accuracy on domain vocabulary like rare drug names. Which feature improves recognition?',
      options: [
        { id: 'a', text: 'Use any random base model.' },
        { id: 'b', text: 'Lower the audio sample rate.' },
        { id: 'c', text: 'Custom Speech with phrase lists or a custom acoustic and language model.' },
        { id: 'd', text: 'Disable language detection.' },
      ],
      correctId: 'c',
      explanation:
        'Custom Speech adapts the base model with domain phrases or audio plus transcripts. Lowering the sample rate would degrade recognition.',
    },
    {
      id: 'ai102-57',
      topic: 'Computer Vision',
      question:
        'A team needs to detect specific brand logos in images at scale. They have only a few examples per logo. Which approach gives the best balance of effort and accuracy?',
      options: [
        { id: 'a', text: 'OCR text search for the brand name.' },
        { id: 'b', text: 'Generic Image Analysis tags with prompt filtering.' },
        { id: 'c', text: 'Document Intelligence Layout.' },
        { id: 'd', text: 'Train a Custom Vision object detection project on the labelled examples.' },
      ],
      correctId: 'd',
      explanation:
        'Custom Vision object detection localises specific objects after training on a small set. Generic tags do not contain custom logos by default.',
    },
    {
      id: 'ai102-58',
      topic: 'Knowledge Mining',
      question:
        'You enable semantic ranker on an Azure AI Search index. Which two fields should you mark for it to work well?',
      options: [
        { id: 'a', text: 'A title field and a content field in the semantic configuration.' },
        { id: 'b', text: 'Two ID fields.' },
        { id: 'c', text: 'Only the embedding field.' },
        { id: 'd', text: 'Only filterable fields.' },
      ],
      correctId: 'a',
      explanation:
        'A semantic configuration nominates a title and one or more content fields so the re-ranker has meaningful text. ID fields and embeddings alone do not feed the re-ranker.',
    },
    {
      id: 'ai102-59',
      topic: 'Generative AI Solutions',
      question:
        'Your application sends customer chat to Azure OpenAI. Compliance requires that prompts and completions are not logged for abuse monitoring or human review. Which option supports this?',
      options: [
        { id: 'a', text: 'Disable Azure Monitor on the resource.' },
        { id: 'b', text: 'Apply for the Azure OpenAI modified content management (no human review of customer data) program.' },
        { id: 'c', text: 'Use only the Standard tier.' },
        { id: 'd', text: 'Encrypt prompts in the SDK.' },
      ],
      correctId: 'b',
      explanation:
        'Microsoft offers a registration that opts qualified customers out of human review of prompts/completions. Disabling Azure Monitor or encrypting at the SDK does not change Microsoft-side retention.',
    },
    {
      id: 'ai102-60',
      topic: 'Document Intelligence',
      question:
        'Your custom Document Intelligence model accuracy stalls at 78%. You have 25 labelled samples. What is the most likely fix?',
      options: [
        { id: 'a', text: 'Increase polygon size.' },
        { id: 'b', text: 'Add more labelled samples that cover field variability.' },
        { id: 'c', text: 'Lower the API version.' },
        { id: 'd', text: 'Disable the layout step.' },
      ],
      correctId: 'b',
      explanation:
        'Custom models gain accuracy mainly from more diverse labelled samples that cover the variations in production. The other options do not increase generalisation.',
    },
    {
      id: 'ai102-61',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'Which Azure feature lets you give an AI service the ability to read secrets from Azure Key Vault without storing credentials in code?',
      options: [
        { id: 'a', text: 'Exporting the Key Vault as a CSV.' },
        { id: 'b', text: 'Storing the Key Vault URL in source code.' },
        { id: 'c', text: 'A connection string in a public blob.' },
        { id: 'd', text: 'Managed identity assigned to the AI service or its host, with a Key Vault role assignment.' },
      ],
      correctId: 'd',
      explanation:
        'Managed identity plus a Key Vault role grants secret access without secrets in code. The other options either expose secrets or do nothing.',
    },
    {
      id: 'ai102-62',
      topic: 'Natural Language Processing',
      question:
        'A pharmacist asks you to extract relationships such as "drug X reduces dosage of drug Y" from clinical notes. Which Azure AI Language feature outputs both entities and relations?',
      options: [
        { id: 'a', text: 'Question Answering only.' },
        { id: 'b', text: 'Sentiment analysis only.' },
        { id: 'c', text: 'Text Analytics for Health.' },
        { id: 'd', text: 'Language detection only.' },
      ],
      correctId: 'c',
      explanation:
        'Text Analytics for Health returns entities and relations such as DosageOfMedication. The other features do not return relations.',
    },
    {
      id: 'ai102-63',
      topic: 'Computer Vision',
      question:
        'A team needs a single image embedding to compare images by visual similarity in a vector database. Which Azure service produces such an embedding?',
      options: [
        { id: 'a', text: 'Speaker Recognition.' },
        { id: 'b', text: 'Document Intelligence Read.' },
        { id: 'c', text: 'Azure AI Translator.' },
        { id: 'd', text: 'Azure AI Vision Image Retrieval (vectorize image).' },
      ],
      correctId: 'd',
      explanation:
        'Image Retrieval in Azure AI Vision returns a vector embedding for an image and a matching one for a text query. The other services do not produce image embeddings.',
    },
    {
      id: 'ai102-64',
      topic: 'Generative AI Solutions',
      question:
        'You want strict JSON output from a chat completion so a downstream parser does not break. Which feature is the most reliable?',
      options: [
        { id: 'a', text: 'Tell the model "please return JSON" in plain text.' },
        { id: 'b', text: 'Lower max_tokens to 10.' },
        { id: 'c', text: 'Increase temperature to 1.5.' },
        { id: 'd', text: 'Set response_format to a JSON schema (structured outputs).' },
      ],
      correctId: 'd',
      explanation:
        'Structured outputs constrain the model to a schema and remove parsing ambiguity. A plain instruction often produces near-JSON that breaks parsers.',
    },
    {
      id: 'ai102-65',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You want to roll out Azure AI infrastructure consistently across environments using code reviewed in pull requests. Which approach do you choose?',
      options: [
        { id: 'a', text: 'Click-ops in the portal for each environment.' },
        { id: 'b', text: 'Bicep or Terraform templates checked into the repo.' },
        { id: 'c', text: 'Email instructions to a colleague.' },
        { id: 'd', text: 'Random PowerShell commands without source control.' },
      ],
      correctId: 'b',
      explanation:
        'Infrastructure as code (Bicep or Terraform) is reproducible and reviewable. Portal clicks drift across environments and are hard to audit.',
    },
    {
      id: 'ai102-66',
      topic: 'Document Intelligence',
      question:
        'A team must process expense reports in many languages. They need vendor name, total, line items, and currency normalised. Which approach is the simplest?',
      options: [
        { id: 'a', text: 'Layout model and parse fields with regex.' },
        { id: 'b', text: 'Prebuilt receipt model.' },
        { id: 'c', text: 'OCR Read only.' },
        { id: 'd', text: 'Fine-tune a GPT model on receipts.' },
      ],
      correctId: 'b',
      explanation:
        'The prebuilt receipt model returns vendor, total, line items, and currency for many locales. Regex on layout output is brittle and reinvents the model.',
    },
    {
      id: 'ai102-67',
      topic: 'Knowledge Mining',
      question:
        'A search index has a vector field with 1,536 dimensions and an algorithm parameter of efSearch=100. The team complains queries are too slow. What is a reasonable first action?',
      options: [
        { id: 'a', text: 'Increase the embedding dimension to 4,096.' },
        { id: 'b', text: 'Delete the index.' },
        { id: 'c', text: 'Lower efSearch and observe latency vs recall.' },
        { id: 'd', text: 'Disable HNSW entirely.' },
      ],
      correctId: 'c',
      explanation:
        'efSearch trades recall for latency in HNSW. Lowering it speeds up queries; if recall drops too much, raise it again. Increasing dimensions only makes it slower.',
    },
    {
      id: 'ai102-68',
      topic: 'Generative AI Solutions',
      question:
        'You want a model to call a private inventory API to answer stock questions. Which Azure OpenAI feature lets the model emit a structured call to the API?',
      options: [
        { id: 'a', text: 'Frequency penalty.' },
        { id: 'b', text: 'Logprobs.' },
        { id: 'c', text: 'Stop sequences.' },
        { id: 'd', text: 'Function calling (tools).' },
      ],
      correctId: 'd',
      explanation:
        'Function calling lets the model emit a structured tool call with arguments your code then executes. Logprobs and penalties do not invoke external APIs.',
    },
    {
      id: 'ai102-69',
      topic: 'Natural Language Processing',
      question:
        'A bank needs to identify intents like Transfer, Balance, Open Account from user messages and extract amounts and account types as entities. Which Azure AI Language feature fits?',
      options: [
        { id: 'a', text: 'Conversational Language Understanding.' },
        { id: 'b', text: 'Question Answering.' },
        { id: 'c', text: 'Sentiment analysis.' },
        { id: 'd', text: 'Custom NER only.' },
      ],
      correctId: 'a',
      explanation:
        'CLU classifies intents and extracts entities in the same model. Question Answering returns FAQ answers, not labelled intents and entities.',
    },
    {
      id: 'ai102-70',
      topic: 'Computer Vision',
      question:
        'A photographer wants to crop an image to the most relevant subject, suitable for thumbnails. Which Azure AI Vision capability does this?',
      options: [
        { id: 'a', text: 'Smart Crop in Image Analysis.' },
        { id: 'b', text: 'Spatial Analysis.' },
        { id: 'c', text: 'Face Find Similar.' },
        { id: 'd', text: 'OCR Read.' },
      ],
      correctId: 'a',
      explanation:
        'Smart Crop returns crop regions that focus on the salient subject. Spatial Analysis is for people-counting in video.',
    },
    {
      id: 'ai102-71',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You need to choose between deploying Azure AI services as a regional resource or behind a central gateway shared by many teams. The teams must each track their own consumption. What is the recommended approach?',
      options: [
        { id: 'a', text: 'A central API Management instance with policy-based routing and per-team subscriptions.' },
        { id: 'b', text: 'A single shared key emailed to teams.' },
        { id: 'c', text: 'Deploy a separate Azure account per request.' },
        { id: 'd', text: 'Place the resource on a public IP without tracking.' },
      ],
      correctId: 'a',
      explanation:
        'Azure API Management routes calls and tracks per-subscription usage, providing the metering teams need. Shared keys give no per-team visibility.',
    },
    {
      id: 'ai102-72',
      topic: 'Generative AI Solutions',
      question:
        'A team measures jailbreak attempts on a chatbot. Which Azure AI Content Safety capability targets prompt-based attacks specifically?',
      options: [
        { id: 'a', text: 'Text moderation only.' },
        { id: 'b', text: 'Image moderation.' },
        { id: 'c', text: 'Prompt Shields (formerly Jailbreak Risk Detection).' },
        { id: 'd', text: 'Content Safety Studio dataset upload only.' },
      ],
      correctId: 'c',
      explanation:
        'Prompt Shields detects direct and indirect prompt injection. Generic text moderation alone does not flag jailbreak phrasing reliably.',
    },
    {
      id: 'ai102-73',
      topic: 'Knowledge Mining',
      question:
        'You want low-latency search across 100 million documents with high availability for paying customers. Which Azure AI Search tier and configuration fits?',
      options: [
        { id: 'a', text: 'Free tier with one replica.' },
        { id: 'b', text: 'Standard or Storage Optimized tier with multiple replicas and partitions sized to the corpus.' },
        { id: 'c', text: 'Basic tier with one partition.' },
        { id: 'd', text: 'Free tier with extra synonym maps.' },
      ],
      correctId: 'b',
      explanation:
        'Production search at scale needs paid tiers with partitions for storage and replicas for availability and QPS. Free and Basic tiers cap at small datasets.',
    },
    {
      id: 'ai102-74',
      topic: 'Document Intelligence',
      question:
        'A solution processes IDs from 30 countries. You want a managed model that already understands passports and driver licences. Which option fits?',
      options: [
        { id: 'a', text: 'Generic Image Analysis.' },
        { id: 'b', text: 'Custom template model.' },
        { id: 'c', text: 'Read API only.' },
        { id: 'd', text: 'Prebuilt ID document model in Document Intelligence.' },
      ],
      correctId: 'd',
      explanation:
        'The prebuilt ID document model recognises passports and driver licences across many countries. A custom template would need many samples per country.',
    },
    {
      id: 'ai102-75',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A team needs to expose multiple Azure OpenAI models and other AI services to apps in different subscriptions while staying inside a perimeter. Which architecture suits this?',
      options: [
        { id: 'a', text: 'API Management in front of private endpoints to each AI service.' },
        { id: 'b', text: 'Public endpoints with no authentication.' },
        { id: 'c', text: 'A single Azure Function that holds keys per app.' },
        { id: 'd', text: 'A direct internet route to each service from the app.' },
      ],
      correctId: 'a',
      explanation:
        'API Management plus private endpoints provides a controlled and observable boundary. Public unauthenticated endpoints break compliance.',
    },
    {
      id: 'ai102-76',
      topic: 'Computer Vision',
      question:
        'You build a Custom Vision project and need higher accuracy than a single round of training delivers. The portal exposes an iteration that supports advanced training time. Which trade-off does that change?',
      options: [
        { id: 'a', text: 'Longer training but typically higher accuracy.' },
        { id: 'b', text: 'Shorter training with no impact on accuracy.' },
        { id: 'c', text: 'Disables transfer learning.' },
        { id: 'd', text: 'Switches to OCR.' },
      ],
      correctId: 'a',
      explanation:
        'Advanced training spends more compute time searching for a better fit and usually improves accuracy. The other choices misrepresent how Custom Vision works.',
    },
    {
      id: 'ai102-77',
      topic: 'Natural Language Processing',
      question:
        'A neural voice product must be cloned for a presenter who consents in writing. Which Azure AI Speech capability supports this scenario, and under what condition?',
      options: [
        { id: 'a', text: 'Real-time speech to text.' },
        { id: 'b', text: 'Generic text to speech only.' },
        { id: 'c', text: 'Custom Neural Voice with consent attestation under Limited Access.' },
        { id: 'd', text: 'Speaker Recognition enrollment only.' },
      ],
      correctId: 'c',
      explanation:
        'Custom Neural Voice requires application and consent under Limited Access. Generic TTS cannot impersonate a specific speaker.',
    },
    {
      id: 'ai102-78',
      topic: 'Knowledge Mining',
      question:
        'A team wants Azure AI Search to ingest data from Azure Cosmos DB on a schedule with no custom code. Which feature do they configure?',
      options: [
        { id: 'a', text: 'A built-in indexer with a Cosmos DB data source.' },
        { id: 'b', text: 'A custom Web App that polls Cosmos DB.' },
        { id: 'c', text: 'A Storage queue trigger.' },
        { id: 'd', text: 'Power Automate.' },
      ],
      correctId: 'a',
      explanation:
        'Indexers natively support Cosmos DB and run on a schedule with change tracking. The other options add code or moving parts.',
    },
    {
      id: 'ai102-79',
      topic: 'Generative AI Solutions',
      question:
        'A team fine-tunes a model with 200 labelled prompts. Validation loss plateaus quickly and accuracy on test data is poor. What is the most likely cause?',
      options: [
        { id: 'a', text: 'Streaming responses enabled.' },
        { id: 'b', text: 'Temperature set to 0.' },
        { id: 'c', text: 'Model size too small at GPT-4o.' },
        { id: 'd', text: 'Too few or non-representative examples.' },
      ],
      correctId: 'd',
      explanation:
        'Fine-tuning generally needs hundreds to thousands of representative examples to outperform prompting. Temperature and streaming have no effect on training quality.',
    },
    {
      id: 'ai102-80',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        "A team must purge a customer's data from Azure OpenAI logs after a deletion request. Which mechanism applies to abuse-monitoring data retained by Microsoft?",
      options: [
        { id: 'a', text: 'Submit a customer data deletion request through the standard Microsoft privacy process.' },
        { id: 'b', text: 'Delete the GitHub repository.' },
        { id: 'c', text: 'Run TRUNCATE TABLE on Microsoft databases.' },
        { id: 'd', text: 'Re-create the resource.' },
      ],
      correctId: 'a',
      explanation:
        'Customer data subject requests are handled through the published Microsoft privacy process. The other options either do not apply or are impossible.',
    },
    {
      id: 'ai102-81',
      topic: 'Document Intelligence',
      question:
        'You need to run Document Intelligence in a disconnected datacenter because a customer cannot send documents to the cloud. Which option fits?',
      options: [
        { id: 'a', text: 'Run Document Intelligence in a Docker container in disconnected mode under a commitment plan.' },
        { id: 'b', text: 'Use the public REST API only.' },
        { id: 'c', text: 'Use Azure OpenAI on the customer laptop.' },
        { id: 'd', text: 'Use Azure AI Search local edition.' },
      ],
      correctId: 'a',
      explanation:
        'Document Intelligence containers run on-premises, including a disconnected mode for air-gapped environments under a commitment plan. The other choices do not exist or do not apply.',
    },
    {
      id: 'ai102-82',
      topic: 'Computer Vision',
      question:
        'You need a single API call that both reads text from an image and returns a caption. Which Azure AI Vision endpoint fits?',
      options: [
        { id: 'a', text: 'Custom Vision classification.' },
        { id: 'b', text: 'Document Intelligence layout only.' },
        { id: 'c', text: 'Image Analysis with multiple visual features (Read, Caption) in one request.' },
        { id: 'd', text: 'Face detection.' },
      ],
      correctId: 'c',
      explanation:
        'Image Analysis accepts a list of visual features and returns them in one response, including Read and Caption. The other services either lack OCR or lack captions.',
    },
    {
      id: 'ai102-83',
      topic: 'Generative AI Solutions',
      question:
        'A team wants to ground Azure OpenAI on dynamic content from a public website that changes daily. Which pattern handles freshness with the least operational toil?',
      options: [
        { id: 'a', text: 'Indexer in Azure AI Search that crawls or ingests the source on a schedule, with chunking and embeddings updated automatically.' },
        { id: 'b', text: 'Re-train the base model nightly.' },
        { id: 'c', text: 'Paste new content into the system prompt manually.' },
        { id: 'd', text: 'Use a static dataset and never update.' },
      ],
      correctId: 'a',
      explanation:
        'A scheduled indexer keeps content fresh and automatically reapplies chunking and embeddings. Manual prompt paste does not scale and re-training is unnecessary.',
    },
    {
      id: 'ai102-84',
      topic: 'Knowledge Mining',
      question:
        'An indexer fails on documents larger than the per-document limit. Which option resolves this with no code change?',
      options: [
        { id: 'a', text: 'Configure the indexer to skip oversized documents and adjust chunking via a built-in skill.' },
        { id: 'b', text: 'Move the source data to local disk.' },
        { id: 'c', text: 'Disable indexing entirely.' },
        { id: 'd', text: 'Use Free tier to lift the limit.' },
      ],
      correctId: 'a',
      explanation:
        'Indexers expose options to skip too-large documents and to chunk content with built-in skills. Free tier has lower, not higher, limits.',
    },
    {
      id: 'ai102-85',
      topic: 'Natural Language Processing',
      question:
        'A telephony app needs to detect when a customer says certain wake words to trigger handover to an agent. Which Azure AI Speech feature is built for this?',
      options: [
        { id: 'a', text: 'Keyword recognition (custom keyword) in the Speech SDK.' },
        { id: 'b', text: 'Speaker recognition only.' },
        { id: 'c', text: 'Text to speech only.' },
        { id: 'd', text: 'Translation.' },
      ],
      correctId: 'a',
      explanation:
        'Custom keyword detection triggers when a configured wake word is heard in audio. Speaker recognition tells you who is talking, not what they said.',
    },
    {
      id: 'ai102-86',
      topic: 'Computer Vision',
      question:
        'A privacy-sensitive app must blur faces in user-uploaded images before storage. Which Azure AI service operation does this?',
      options: [
        { id: 'a', text: 'Detect faces with Azure AI Face and apply blurring on the bounding boxes server-side.' },
        { id: 'b', text: 'Use Document Intelligence Read.' },
        { id: 'c', text: 'Use Azure AI Translator document translation.' },
        { id: 'd', text: 'Use Question Answering.' },
      ],
      correctId: 'a',
      explanation:
        'Face detect returns bounding boxes; the application blurs those regions before storage. The other services do not detect faces.',
    },
    {
      id: 'ai102-87',
      topic: 'Generative AI Solutions',
      question:
        'A retail RAG system needs to answer with the product names spelled exactly as in the catalog, even when users misspell them. Which technique helps most?',
      options: [
        { id: 'a', text: 'Add a normalisation step that maps retrieved canonical product names into the prompt context.' },
        { id: 'b', text: 'Increase top P to 1.' },
        { id: 'c', text: 'Lower max_tokens.' },
        { id: 'd', text: 'Disable streaming.' },
      ],
      correctId: 'a',
      explanation:
        'Including the canonical product names in retrieved context anchors the model to correct spellings. Sampling parameters do not enforce naming.',
    },
    {
      id: 'ai102-88',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'You must monitor Azure OpenAI calls for safety policy violations centrally across many subscriptions. Which Azure feature aggregates logs?',
      options: [
        { id: 'a', text: 'GitHub issues.' },
        { id: 'b', text: 'A shared Excel file.' },
        { id: 'c', text: 'Azure Monitor Logs (Log Analytics) with diagnostic settings sent to a central workspace.' },
        { id: 'd', text: 'Local syslog only.' },
      ],
      correctId: 'c',
      explanation:
        'Diagnostic settings can route Azure OpenAI logs to a central Log Analytics workspace for cross-subscription queries. The other options are not valid Azure logging endpoints.',
    },
    {
      id: 'ai102-89',
      topic: 'Document Intelligence',
      question:
        'A team needs to extract printed and handwritten signatures from contracts and indicate signature presence per region. Which Document Intelligence capability fits best?',
      options: [
        { id: 'a', text: 'Custom model with a signature field type.' },
        { id: 'b', text: 'Read API only.' },
        { id: 'c', text: 'Prebuilt receipt model.' },
        { id: 'd', text: 'OCR with a regex for "Signed".' },
      ],
      correctId: 'a',
      explanation:
        'Custom models support a signature field type that reports presence in defined regions. Read returns text but not signature presence semantics.',
    },
    {
      id: 'ai102-90',
      topic: 'Knowledge Mining',
      question:
        'You want answers in a chatbot to include passages with character offsets back to source documents. Which Azure AI Search response feature do you enable?',
      options: [
        { id: 'a', text: 'Semantic captions and answers.' },
        { id: 'b', text: 'Geospatial filters.' },
        { id: 'c', text: 'Suggesters.' },
        { id: 'd', text: 'Synonym maps.' },
      ],
      correctId: 'a',
      explanation:
        'Semantic captions return highlighted passages and offsets, and semantic answers extract a likely answer span. Suggesters power autocomplete, not citations.',
    },
    {
      id: 'ai102-91',
      topic: 'Natural Language Processing',
      question:
        'A team wants offline batch transcription with speaker diarization for hour-long meetings. Which Azure AI Speech option fits?',
      options: [
        { id: 'a', text: 'Batch transcription with diarization enabled.' },
        { id: 'b', text: 'Real-time streaming with no diarization.' },
        { id: 'c', text: 'Custom voice synthesis.' },
        { id: 'd', text: 'Speaker recognition only.' },
      ],
      correctId: 'a',
      explanation:
        'Batch transcription supports diarization and processes long files cost-effectively. Real-time streaming costs more and is not needed for offline analysis.',
    },
    {
      id: 'ai102-92',
      topic: 'Generative AI Solutions',
      question:
        'You configure Azure OpenAI On Your Data with strict mode enabled. A user asks something not in the corpus. What is the expected behaviour?',
      options: [
        { id: 'a', text: 'The model answers from general world knowledge anyway.' },
        { id: 'b', text: 'The model returns a refusal or "no information" response and does not hallucinate.' },
        { id: 'c', text: 'The model returns a random URL.' },
        { id: 'd', text: 'The request errors with HTTP 500.' },
      ],
      correctId: 'b',
      explanation:
        'Strict mode constrains answers to retrieved context and refuses when nothing is found. The other behaviours contradict the feature.',
    },
    {
      id: 'ai102-93',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A solution needs end-to-end encryption with customer-managed keys for an Azure AI services resource. What must you configure?',
      options: [
        { id: 'a', text: 'Disable encryption to control it externally.' },
        { id: 'b', text: 'A shared password.' },
        { id: 'c', text: 'Customer-managed keys (CMK) in Azure Key Vault, linked to the AI resource.' },
        { id: 'd', text: 'Move data to local disk.' },
      ],
      correctId: 'c',
      explanation:
        'CMK with Key Vault gives you control over the encryption key for stored data. Disabling encryption is not an option.',
    },
    {
      id: 'ai102-94',
      topic: 'Computer Vision',
      question:
        'Your project lead asks for a single endpoint to extract product attributes (color, type, brand text) from photos. Which composition fits?',
      options: [
        { id: 'a', text: 'Azure AI Vision Image Analysis (tags, color) plus the Read API in one request.' },
        { id: 'b', text: 'OCR only.' },
        { id: 'c', text: 'Speech to text on the image filename.' },
        { id: 'd', text: 'Translator on the image binary.' },
      ],
      correctId: 'a',
      explanation:
        'Image Analysis can return tags, color analysis, and Read text in a single call. OCR alone misses tags; the other services do not apply.',
    },
    {
      id: 'ai102-95',
      topic: 'Generative AI Solutions',
      question:
        'A team wants to compare two prompt versions in production with a small percentage of traffic going to the new version. Which pattern fits?',
      options: [
        { id: 'a', text: 'A/B testing or canary deployment via API Management or a feature flag with metrics in Azure Monitor.' },
        { id: 'b', text: 'A single deployment with no traffic split.' },
        { id: 'c', text: 'Manual review of every output by an engineer.' },
        { id: 'd', text: 'Disable the old prompt and roll out 100% immediately.' },
      ],
      correctId: 'a',
      explanation:
        'Canary or A/B testing routes a small share of traffic to the new variant and compares metrics. Big-bang switches risk regressions for all users.',
    },
    {
      id: 'ai102-96',
      topic: 'Knowledge Mining',
      question:
        'You want to expose Azure AI Search to a public app that should only run pre-defined queries. Which authentication is the safest?',
      options: [
        { id: 'a', text: 'A query API key restricted to read access, called from a backend, never from the browser.' },
        { id: 'b', text: 'The admin key embedded in the React bundle.' },
        { id: 'c', text: 'No authentication.' },
        { id: 'd', text: 'A shared password in URL parameters.' },
      ],
      correctId: 'a',
      explanation:
        'Query keys are read-only and should still be held by a backend so they are not visible in browser sources. Admin keys would expose the index to writes.',
    },
    {
      id: 'ai102-97',
      topic: 'Natural Language Processing',
      question:
        'A team needs to summarise long meeting transcripts. Which Azure AI Language feature fits without writing a custom model?',
      options: [
        { id: 'a', text: 'Conversation summarization in Azure AI Language.' },
        { id: 'b', text: 'Sentiment analysis only.' },
        { id: 'c', text: 'Language detection only.' },
        { id: 'd', text: 'Question Answering only.' },
      ],
      correctId: 'a',
      explanation:
        'Conversation summarization produces narrative, issue, and resolution summaries from dialogue. The other features cover different tasks.',
    },
    {
      id: 'ai102-98',
      topic: 'Document Intelligence',
      question:
        'A team uses the prebuilt invoice model and wants to fine-tune it for two custom fields specific to their company. What is the supported approach?',
      options: [
        { id: 'a', text: 'Build a custom extraction model for the two fields and combine via composed model or chained call.' },
        { id: 'b', text: 'Edit the source code of the prebuilt model.' },
        { id: 'c', text: 'Wait for Microsoft to add the fields.' },
        { id: 'd', text: 'Use OCR Read and write a regex.' },
      ],
      correctId: 'a',
      explanation:
        'Prebuilt models are not editable; build a custom model for company-specific fields and compose results. Regex on raw OCR is brittle and avoidable.',
    },
    {
      id: 'ai102-99',
      topic: 'Agentic Solutions',
      question:
        'In Azure AI Agent Service, an agent needs to write files to a sandbox during a session, run code on them, then return results. Which built-in tool covers this?',
      options: [
        { id: 'a', text: 'Code Interpreter tool.' },
        { id: 'b', text: 'File Compress tool.' },
        { id: 'c', text: 'Speech Synthesis tool.' },
        { id: 'd', text: 'OCR Read tool.' },
      ],
      correctId: 'a',
      explanation:
        'Code Interpreter provides a sandbox where the agent can read uploaded files, execute Python, and return outputs. The other tools target different tasks.',
    },
    {
      id: 'ai102-100',
      topic: 'Plan and Manage Azure AI Solutions',
      question:
        'A platform team must let several application teams self-serve Azure OpenAI deployments while enforcing capacity caps and approved models. Which Azure capability fits best?',
      options: [
        { id: 'a', text: 'Azure Policy plus Azure landing zones, with deployments fronted by API Management for quotas.' },
        { id: 'b', text: 'Manual emails for every request.' },
        { id: 'c', text: 'Hard-coded keys distributed in chat.' },
        { id: 'd', text: 'A shared admin account for all teams.' },
      ],
      correctId: 'a',
      explanation:
        'Azure Policy enforces approved models and SKUs; landing zones provide consistent guardrails; APIM handles per-team quotas. The other options break governance.',
    },
  ],
}
