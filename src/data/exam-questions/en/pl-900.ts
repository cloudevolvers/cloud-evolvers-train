import type { ExamSet } from '../types'

export const pl900: ExamSet = {
  examCode: 'PL-900',
  examName: 'Microsoft Power Platform Fundamentals',
  description:
    'One hundred practice questions at the level of the official PL-900 exam. Power Platform business value, Power Apps, Power Automate, Power BI, Copilot Studio, and Microsoft Dataverse fundamentals.',
  ceCourseSlug: 'power-platform-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/power-platform-fundamentals',
  ceCoursePriceCents: null,
  questions: [
    // ── Business Value & Core Components (20 questions) ──────────────────────
    {
      id: 'pl900-1',
      topic: 'Business Value',
      question:
        'A regional logistics company needs frontline supervisors to submit daily vehicle inspection reports from a mobile device. No one on the team has coding experience. Which Power Platform service is the best fit?',
      options: [
        { id: 'a', text: 'Power Apps canvas app, to build a mobile-friendly form connected to a data source.' },
        { id: 'b', text: 'Power Automate desktop flows, to script the inspection form on a PC.' },
        { id: 'c', text: 'Power Pages, to publish the form as a public-facing website.' },
        { id: 'd', text: 'Power BI, to collect inspection data through an interactive report.' },
      ],
      correctId: 'a',
      explanation:
        'Power Apps canvas apps let makers build mobile-friendly forms without code. Power Automate desktop flows automate PC tasks rather than capture field data. Power Pages is for external-audience websites, and Power BI is for analytics visualization, not data capture.',
    },
    {
      id: 'pl900-2',
      topic: 'Business Value',
      question:
        'A finance team wants to see a live, filterable view of invoice data pulled from multiple systems every morning. Which Power Platform service delivers this best?',
      options: [
        { id: 'a', text: 'Power BI, to build an interactive report from connected data sources.' },
        { id: 'b', text: 'Power Apps model-driven app, to display invoice records in a form.' },
        { id: 'c', text: 'Microsoft Copilot Studio, to let users query invoices with natural language.' },
        { id: 'd', text: 'Power Pages, to expose the invoice list on an intranet portal.' },
      ],
      correctId: 'a',
      explanation:
        'Power BI is designed for interactive analytics and live dashboard views across multiple data sources. Model-driven apps focus on record management, Copilot Studio builds conversational agents, and Power Pages creates data-driven websites rather than analytics dashboards.',
    },
    {
      id: 'pl900-3',
      topic: 'Business Value',
      question:
        'A healthcare company wants to let patients book appointments on a public website that writes directly into Microsoft Dataverse. Which Power Platform service is purpose-built for this?',
      options: [
        { id: 'a', text: 'Power Automate, to send appointment confirmations by email.' },
        { id: 'b', text: 'Power Apps canvas app, shared via a public link.' },
        { id: 'c', text: 'Power Pages, to build an external-facing website backed by Dataverse.' },
        { id: 'd', text: 'AI Builder, to process appointment request documents automatically.' },
      ],
      correctId: 'c',
      explanation:
        'Power Pages (formerly Power Apps Portals) is designed to create external-facing websites where unauthenticated and authenticated users interact with Dataverse data. Canvas apps are not optimized for public web delivery, and Power Automate handles automation rather than UI.',
    },
    {
      id: 'pl900-4',
      topic: 'Business Value',
      question:
        'An IT help desk receives the same 50 questions repeatedly via Teams chat. A manager wants to deflect those questions without hiring more staff. Which Power Platform capability fits best?',
      options: [
        { id: 'a', text: 'Microsoft Copilot Studio, to build a conversational agent that answers common questions.' },
        { id: 'b', text: 'AI Builder sentiment analysis, to classify incoming tickets by tone.' },
        { id: 'c', text: 'Power Automate scheduled flow, to email FAQ answers every morning.' },
        { id: 'd', text: 'Power Pages, to publish a FAQ site that users visit manually.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Copilot Studio lets makers build agents that handle repetitive questions over channels such as Teams. Sentiment analysis classifies text tone rather than answering questions. A scheduled email is not interactive, and a FAQ site requires users to navigate to it rather than getting answers inline.',
    },
    {
      id: 'pl900-5',
      topic: 'Business Value',
      question:
        'A manufacturing plant uses a legacy Windows desktop application that has no API. Operators still need that app, but management wants to automate the data entry steps that happen inside it. Which Power Platform component addresses this?',
      options: [
        { id: 'a', text: 'Power Apps canvas app, connected to a custom connector.' },
        { id: 'b', text: 'Power Automate cloud flow, using the HTTP action.' },
        { id: 'c', text: 'Power Automate desktop flows, to record and replay UI interactions on the desktop.' },
        { id: 'd', text: 'Power BI paginated reports, to extract data from the desktop app.' },
      ],
      correctId: 'c',
      explanation:
        'Power Automate desktop flows (RPA) can automate Windows applications by recording and replaying UI interactions, with no API required. Cloud flows work with cloud-based connectors, not local desktop UIs. Canvas apps and Power BI do not interact with legacy desktop application UIs.',
    },
    {
      id: 'pl900-6',
      topic: 'Business Value',
      question:
        'A project manager wants approval requests to be sent automatically whenever a new row is added to a Dataverse table. Which Power Automate flow type should be used?',
      options: [
        { id: 'a', text: 'Scheduled cloud flow, set to run every hour.' },
        { id: 'b', text: 'Instant cloud flow, triggered manually by the maker.' },
        { id: 'c', text: 'Automated cloud flow, triggered when a row is created in Dataverse.' },
        { id: 'd', text: 'Desktop flow, to monitor the Dataverse table on a local machine.' },
      ],
      correctId: 'c',
      explanation:
        'Automated cloud flows start when an event occurs, such as a new Dataverse row. Scheduled flows run on a timer, instant flows require a manual trigger, and desktop flows automate local UI tasks rather than reacting to cloud data events.',
    },
    {
      id: 'pl900-7',
      topic: 'Business Value',
      question:
        'Which description best captures the business value of Power Fx in Microsoft Power Platform?',
      options: [
        { id: 'a', text: 'A low-code formula language similar to Excel that powers logic in canvas apps and other Power Platform tools.' },
        { id: 'b', text: 'A Python-based scripting language for building Power Automate flows.' },
        { id: 'c', text: 'A data modeling language used exclusively inside Microsoft Dataverse tables.' },
        { id: 'd', text: 'A DAX-compatible language for writing Power BI measures.' },
      ],
      correctId: 'a',
      explanation:
        'Power Fx is the low-code formula language across Power Platform, inspired by Excel. It is not Python, is not limited to Dataverse modeling, and is distinct from DAX, which is the expression language specific to Power BI semantic models.',
    },
    {
      id: 'pl900-8',
      topic: 'Business Value',
      question:
        'A customer service team uses Microsoft Teams daily. They want to receive Power Automate approval requests directly inside Teams without opening a browser. What does this scenario illustrate about Power Platform?',
      options: [
        { id: 'a', text: 'Power Platform services work together with Microsoft 365 apps and services.' },
        { id: 'b', text: 'Power Platform can replace Microsoft Teams entirely.' },
        { id: 'c', text: 'Power Automate requires a premium connector to integrate with Teams.' },
        { id: 'd', text: 'Approvals in Teams are only available with a Copilot Studio license.' },
      ],
      correctId: 'a',
      explanation:
        'Power Platform integrates with Microsoft 365 services including Teams, Outlook, and SharePoint using standard connectors. Teams integration for approvals uses the standard Microsoft Teams connector and does not require a premium license or Copilot Studio.',
    },
    {
      id: 'pl900-9',
      topic: 'Business Value',
      question:
        'A small business owner wants to predict which sales leads are most likely to convert, based on historical win/loss data stored in Dataverse. Which AI Builder model type should they use?',
      options: [
        { id: 'a', text: 'Sentiment analysis, to rate the tone of lead communications.' },
        { id: 'b', text: 'Text recognition, to extract text from lead qualification documents.' },
        { id: 'c', text: 'Prediction, to score leads based on historical outcome data.' },
        { id: 'd', text: 'Document processing, to capture fields from incoming lead forms.' },
      ],
      correctId: 'c',
      explanation:
        'The AI Builder prediction model uses historical data to predict the probability of a future outcome, such as lead conversion. Sentiment analysis rates tone, text recognition reads text from images, and document processing extracts form fields from structured documents.',
    },
    {
      id: 'pl900-10',
      topic: 'Business Value',
      question:
        'Which statement accurately describes a standard connector in Power Platform, compared to a premium connector?',
      options: [
        { id: 'a', text: 'Standard connectors connect to Microsoft 365 services and require no additional per-user license beyond Power Apps or Power Automate base licensing; premium connectors require a higher-tier plan.' },
        { id: 'b', text: 'Standard connectors are only available in Power Automate; premium connectors are only available in Power Apps.' },
        { id: 'c', text: 'Premium connectors are always free, while standard connectors require add-on licensing.' },
        { id: 'd', text: 'Standard and premium connectors are identical in capability but differ only by geographic region.' },
      ],
      correctId: 'a',
      explanation:
        'Standard connectors such as SharePoint and Outlook are included with base Power Platform licensing. Premium connectors such as SQL Server and Dataverse require a Power Apps per-user or per-app plan or Power Automate premium plan. They are available in both products and the distinction is purely licensing-based.',
    },
    {
      id: 'pl900-11',
      topic: 'Business Value',
      question:
        'A maker embedded a Microsoft Copilot control inside a canvas app so that users can ask questions about the records displayed on the screen. Which Power Platform capability does this describe?',
      options: [
        { id: 'a', text: 'Microsoft Copilot integrated into Power Apps, providing in-app AI assistance.' },
        { id: 'b', text: 'AI Builder document processing, reading data from uploaded files.' },
        { id: 'c', text: 'Power BI Q&A visual, embedded in a canvas app through a connector.' },
        { id: 'd', text: 'Copilot Studio deployed as a standalone Teams bot.' },
      ],
      correctId: 'a',
      explanation:
        'Power Apps includes Copilot controls that makers can add to canvas apps, giving end users an in-app AI assistant. This is distinct from AI Builder (which processes documents or predictions), Power BI Q&A (a Power BI feature), and Copilot Studio (which builds standalone agents).',
    },
    {
      id: 'pl900-12',
      topic: 'Business Value',
      question:
        'An organization wants to build an application that automates a multi-step onboarding process across HR, IT, and Finance. Each step depends on the previous one completing. Which Power Platform description fits this need?',
      options: [
        { id: 'a', text: 'Power Automate cloud flow, to chain actions across connected services with conditional logic.' },
        { id: 'b', text: 'Power Pages, to show onboarding checklists on an external website.' },
        { id: 'c', text: 'Power BI dashboard, to display onboarding progress to leadership.' },
        { id: 'd', text: 'AI Builder prediction model, to forecast onboarding completion time.' },
      ],
      correctId: 'a',
      explanation:
        'Power Automate cloud flows chain triggers and actions across multiple services, supporting conditions and approval steps to automate multi-department processes. Power Pages, Power BI, and AI Builder serve different purposes and do not orchestrate cross-department workflows.',
    },
    {
      id: 'pl900-13',
      topic: 'Business Value',
      question:
        'A company wants makers to build apps that share a single, consistent database with built-in role-based security, without managing their own SQL infrastructure. Which Power Platform component provides this?',
      options: [
        { id: 'a', text: 'Microsoft Dataverse, as a cloud-managed relational data platform with built-in security.' },
        { id: 'b', text: 'OneDrive for Business, as a shared file store.' },
        { id: 'c', text: 'Azure SQL Database, deployed and managed by the development team.' },
        { id: 'd', text: 'SharePoint lists, as a structured data store for Power Apps.' },
      ],
      correctId: 'a',
      explanation:
        'Microsoft Dataverse is a cloud-based, managed data platform with tables, relationships, business rules, and role-based security built in. SharePoint lists and OneDrive lack Dataverse\'s rich security model, and Azure SQL requires infrastructure management not handled by Power Platform.',
    },
    {
      id: 'pl900-14',
      topic: 'Business Value',
      question:
        'Which Power Platform service was previously called Power Virtual Agents before being renamed?',
      options: [
        { id: 'a', text: 'Power Pages.' },
        { id: 'b', text: 'AI Builder.' },
        { id: 'c', text: 'Microsoft Copilot Studio.' },
        { id: 'd', text: 'Power Automate Process Mining.' },
      ],
      correctId: 'c',
      explanation:
        'Microsoft Copilot Studio is the new name for Power Virtual Agents, renamed in late 2023. Power Pages was formerly Power Apps Portals, AI Builder has always been AI Builder, and Process Mining is a distinct capability within Power Automate.',
    },
    {
      id: 'pl900-15',
      topic: 'Business Value',
      question:
        'A nonprofit organization wants external volunteers to register for events on a public site, with the data stored in Dataverse so staff can manage it in a model-driven app. Which Power Platform combination fits?',
      options: [
        { id: 'a', text: 'Power Pages for the external site and a model-driven app for internal management.' },
        { id: 'b', text: 'A canvas app shared publicly and a Power Automate flow for management.' },
        { id: 'c', text: 'Power BI for the public registration page and a canvas app for staff.' },
        { id: 'd', text: 'Copilot Studio for registration chat and AI Builder for record management.' },
      ],
      correctId: 'a',
      explanation:
        'Power Pages is designed for external audiences and writes directly to Dataverse, while model-driven apps let internal staff manage those Dataverse records. Canvas apps are not optimized for anonymous public access, and Power BI does not support form-based data entry.',
    },
    {
      id: 'pl900-16',
      topic: 'Business Value',
      question:
        'An operations team wants to scan paper invoices and automatically extract the vendor name, invoice number, and total amount into Dataverse without manual typing. Which AI Builder model type does this?',
      options: [
        { id: 'a', text: 'Prediction model, using historical invoice data.' },
        { id: 'b', text: 'Sentiment analysis model, to determine invoice urgency.' },
        { id: 'c', text: 'Document processing model, to extract structured fields from scanned documents.' },
        { id: 'd', text: 'Object detection model, to identify the invoice in a photograph.' },
      ],
      correctId: 'c',
      explanation:
        'AI Builder document processing models extract specific fields from structured documents such as invoices and receipts. Prediction models forecast outcomes, sentiment analysis evaluates text tone, and object detection identifies objects in images rather than extracting text fields.',
    },
    {
      id: 'pl900-17',
      topic: 'Business Value',
      question:
        'A business analyst says she already uses Excel formulas every day. How does that skill relate to building canvas apps in Power Apps?',
      options: [
        { id: 'a', text: 'Power Fx, used in canvas apps, is inspired by Excel formulas, so Excel users can apply similar logic.' },
        { id: 'b', text: 'Excel skills do not transfer; canvas apps use a completely different Python-based language.' },
        { id: 'c', text: 'Canvas apps use DAX, the same language as Excel PivotTables.' },
        { id: 'd', text: 'Excel formulas are only relevant for Power BI, not canvas apps.' },
      ],
      correctId: 'a',
      explanation:
        'Power Fx is intentionally modeled after Excel, making it accessible to Excel users. It uses familiar function patterns such as If, Filter, and LookUp. DAX is Power BI\'s expression language, not Power Fx, and Power Fx is not Python.',
    },
    {
      id: 'pl900-18',
      topic: 'Business Value',
      question:
        'A company\'s IT department wants to understand how their employees move through a procurement process, identify where delays occur, and measure cycle times. Which Power Automate capability helps with this?',
      options: [
        { id: 'a', text: 'Power Automate approvals, to automate the procurement decision.' },
        { id: 'b', text: 'Power Automate desktop flows, to record clicks in the procurement app.' },
        { id: 'c', text: 'Power Automate Process Mining, to discover and analyze process inefficiencies.' },
        { id: 'd', text: 'Power Automate scheduled flows, to report on procurement status daily.' },
      ],
      correctId: 'c',
      explanation:
        'Process Mining in Power Automate ingests event logs to visualize process flows, find bottlenecks, and measure cycle times. Approvals automate decisions but do not analyze process patterns. Desktop flows automate UI steps, and scheduled flows run tasks on a timer.',
    },
    {
      id: 'pl900-19',
      topic: 'Business Value',
      question:
        'A Power Platform solution must be moved from a development environment to a production environment. What is the recommended container for bundling and transporting Power Platform components between environments?',
      options: [
        { id: 'a', text: 'A ZIP file exported from OneDrive.' },
        { id: 'b', text: 'A Power BI workspace export.' },
        { id: 'c', text: 'A Power Platform solution, exported and imported as a managed solution.' },
        { id: 'd', text: 'A SharePoint site backup.' },
      ],
      correctId: 'c',
      explanation:
        'Power Platform solutions are the standard mechanism for packaging and moving apps, flows, and other components between environments. A managed solution, exported from a dev environment, is imported into test or production. ZIP files from OneDrive and SharePoint backups do not serve this purpose.',
    },
    {
      id: 'pl900-20',
      topic: 'Business Value',
      question:
        'A company is evaluating Power Platform licensing. They need employees to run a specific custom app but do not want to pay for a full per-user plan for each person. Which licensing option should they consider?',
      options: [
        { id: 'a', text: 'Power Apps per-app plan, which licenses a user for one or two specific apps.' },
        { id: 'b', text: 'Power Apps per-user plan, required for every employee regardless of app count.' },
        { id: 'c', text: 'Power BI Premium Per User, which covers Power Apps as well.' },
        { id: 'd', text: 'Microsoft 365 E3, which includes full Power Apps premium connector access.' },
      ],
      correctId: 'a',
      explanation:
        'The Power Apps per-app plan licenses a user for a defined number of specific apps at a lower cost than per-user. The per-user plan is broader but more expensive. Power BI Premium Per User is specific to Power BI, and Microsoft 365 E3 does not include premium Power Apps connector access.',
    },

    // ── Dataverse & Administration (15 questions) ─────────────────────────────
    {
      id: 'pl900-21',
      topic: 'Microsoft Dataverse',
      question:
        'A maker is designing a Dataverse table for customer orders. Each order must belong to exactly one customer, and one customer can have many orders. Which relationship type should the maker create?',
      options: [
        { id: 'a', text: 'One-to-many relationship from Customer to Order.' },
        { id: 'b', text: 'Many-to-many relationship between the Order table and the Customer table.' },
        { id: 'c', text: 'One-to-one relationship between Order and Customer.' },
        { id: 'd', text: 'No relationship is needed; store the customer name as a text column on the Order table.' },
      ],
      correctId: 'a',
      explanation:
        'A one-to-many (1:N) relationship from Customer to Order means each customer can have many orders, and each order belongs to one customer. A many-to-many would allow orders to belong to multiple customers, which is incorrect here. Storing only the name as text loses referential integrity.',
    },
    {
      id: 'pl900-22',
      topic: 'Microsoft Dataverse',
      question:
        'A Dataverse business rule is configured to make the "Discount Reason" column required whenever the "Discount Percentage" column is greater than 10. Which scenario correctly describes how business rules work?',
      options: [
        { id: 'a', text: 'The business rule runs server-side whenever data is saved, regardless of the app used to save it.' },
        { id: 'b', text: 'The business rule runs only when data is entered through a specific canvas app.' },
        { id: 'c', text: 'Business rules only apply to data imported via Excel, not to data entered in apps.' },
        { id: 'd', text: 'The business rule sends an email notification to the manager when triggered.' },
      ],
      correctId: 'a',
      explanation:
        'Dataverse business rules are server-side logic that apply whenever data is created or modified, regardless of the app used. They enforce consistent logic across all apps connected to Dataverse. They do not send email notifications—that is the role of Power Automate flows.',
    },
    {
      id: 'pl900-23',
      topic: 'Microsoft Dataverse',
      question:
        'A company\'s existing relational database requires the DBA to write stored procedures and manage indexes. A maker claims Dataverse removes most of that overhead. Which Dataverse characteristic supports this claim?',
      options: [
        { id: 'a', text: 'Dataverse is cloud-managed, so Microsoft handles storage, metadata, and infrastructure; makers define tables and columns without DBA tasks.' },
        { id: 'b', text: 'Dataverse stores all data as flat CSV files, eliminating the need for indexes.' },
        { id: 'c', text: 'Dataverse requires makers to write T-SQL queries to retrieve data.' },
        { id: 'd', text: 'Dataverse only supports a maximum of 10 tables per environment.' },
      ],
      correctId: 'a',
      explanation:
        'Dataverse is a fully managed cloud platform. Microsoft manages the underlying storage, infrastructure, and optimization. Makers define tables and columns through a point-and-click interface without writing SQL or managing indexes.',
    },
    {
      id: 'pl900-24',
      topic: 'Microsoft Dataverse',
      question:
        'A maker needs to import a spreadsheet of 5,000 product records into a Dataverse table. Which Dataverse feature allows this without code?',
      options: [
        { id: 'a', text: 'Importing data via Power Query from the Dataverse maker portal.' },
        { id: 'b', text: 'Writing a Power Fx formula using the Collect function in a canvas app.' },
        { id: 'c', text: 'Publishing a Power BI report to the Dataverse environment.' },
        { id: 'd', text: 'Deploying a managed solution from a development environment.' },
      ],
      correctId: 'a',
      explanation:
        'Dataverse supports data import through Power Query in the maker portal, which can read Excel or CSV files without code. Collect in a canvas app is not efficient for bulk imports, publishing a Power BI report does not write data to Dataverse, and solutions transport components, not raw data.',
    },
    {
      id: 'pl900-25',
      topic: 'Microsoft Dataverse',
      question:
        'An admin wants to restrict sales reps so they can only read their own Opportunity records, while managers can read all records in their business unit. Which Dataverse feature enforces this?',
      options: [
        { id: 'a', text: 'Dataverse security roles with row-level access scopes (user, business unit, organization).' },
        { id: 'b', text: 'Data loss prevention (DLP) policies, which block connector usage.' },
        { id: 'c', text: 'Managed solutions, which lock table access by environment.' },
        { id: 'd', text: 'Environment types, where production environments limit all users to read-only.' },
      ],
      correctId: 'a',
      explanation:
        'Dataverse security roles define which tables a user can access and at what scope: user-owned rows only, business-unit rows, or all rows. DLP policies govern connector usage in flows and apps, not row-level data access. Solutions package components, and environment types define environment purpose, not row-level access.',
    },
    {
      id: 'pl900-26',
      topic: 'Administration & Governance',
      question:
        'Which type of Power Platform environment is created automatically for every tenant and shared by all licensed users by default?',
      options: [
        { id: 'a', text: 'Production environment.' },
        { id: 'b', text: 'Sandbox environment.' },
        { id: 'c', text: 'Default environment.' },
        { id: 'd', text: 'Developer environment.' },
      ],
      correctId: 'c',
      explanation:
        'Every tenant gets exactly one default environment, created automatically and shared by all licensed users. Production environments are created intentionally for permanent workloads. Sandbox environments support development and testing. Developer environments are personal, single-user environments.',
    },
    {
      id: 'pl900-27',
      topic: 'Administration & Governance',
      question:
        'A Power Platform admin wants to prevent makers from connecting a SharePoint flow to Twitter in the same flow, to avoid accidental data leakage. Which tool enforces this?',
      options: [
        { id: 'a', text: 'Data loss prevention (DLP) policies, which classify connectors into groups so they cannot be used together.' },
        { id: 'b', text: 'Dataverse security roles, to restrict table access.' },
        { id: 'c', text: 'Managed solutions, to lock the flow from being edited.' },
        { id: 'd', text: 'Trial environment restrictions, limiting connector combinations.' },
      ],
      correctId: 'a',
      explanation:
        'DLP policies classify connectors into Business and Non-Business groups. Connectors in different groups cannot be used together in the same flow or app, preventing data from being shared between incompatible services. Security roles control data access, not connector combinations.',
    },
    {
      id: 'pl900-28',
      topic: 'Administration & Governance',
      question:
        'A developer wants a personal environment to build and test Power Apps and Power Automate flows without affecting production data. Which environment type is designed for this single-user scenario?',
      options: [
        { id: 'a', text: 'Production environment with restricted access.' },
        { id: 'b', text: 'Trial environment, which lasts 30 days.' },
        { id: 'c', text: 'Developer environment, intended for individual makers to build and test.' },
        { id: 'd', text: 'Default environment, since all users share it.' },
      ],
      correctId: 'c',
      explanation:
        'Developer environments are personal, single-user environments designed for building and testing. They include Dataverse and premium capabilities. Trial environments expire after 30 days and are not intended for ongoing development. Production environments should not be used for personal testing.',
    },
    {
      id: 'pl900-29',
      topic: 'Administration & Governance',
      question:
        'A solution is exported from a development environment and imported into a test environment. Components in the test environment cannot be edited directly. What type of solution was imported?',
      options: [
        { id: 'a', text: 'Managed solution.' },
        { id: 'b', text: 'Unmanaged solution.' },
        { id: 'c', text: 'Default solution.' },
        { id: 'd', text: 'Patch solution.' },
      ],
      correctId: 'a',
      explanation:
        'Managed solutions lock their components in non-development environments, preventing direct edits. This is the intended deployment artifact for test and production. Unmanaged solutions are used during development and allow direct editing. The default solution is the implicit container in every environment.',
    },
    {
      id: 'pl900-30',
      topic: 'Administration & Governance',
      question:
        'An administrator needs to configure which connectors are allowed across the entire tenant and also configure a more permissive policy for a specific innovation lab environment. How does Power Platform DLP policy scoping work?',
      options: [
        { id: 'a', text: 'DLP policies apply only at the tenant level; environment-level overrides are not possible.' },
        { id: 'b', text: 'Environment-level DLP policies can override tenant-level policies to be more restrictive but not more permissive.' },
        { id: 'c', text: 'DLP policies can be scoped to the tenant or to specific environments, and environment policies cannot override tenant-wide policies.' },
        { id: 'd', text: 'DLP policies only apply to cloud flows, not canvas apps.' },
      ],
      correctId: 'c',
      explanation:
        'DLP policies can be scoped at tenant level or at environment level. Environment-level policies cannot override tenant-level policies; the most restrictive combination always applies. DLP policies govern both flows and canvas apps when connectors are involved.',
    },
    {
      id: 'pl900-31',
      topic: 'Administration & Governance',
      question:
        'Which environment type is most appropriate for running production workloads that the organization depends on, with full backup support?',
      options: [
        { id: 'a', text: 'Sandbox environment.' },
        { id: 'b', text: 'Trial environment.' },
        { id: 'c', text: 'Developer environment.' },
        { id: 'd', text: 'Production environment.' },
      ],
      correctId: 'd',
      explanation:
        'Production environments are intended for permanent workloads with full control and backup support. Sandbox environments are for development and testing with copy/reset features. Trial environments expire after 30 days and are not backed up. Developer environments are personal and single-user.',
    },
    {
      id: 'pl900-32',
      topic: 'Administration & Governance',
      question:
        'A Power Platform admin wants to understand which apps and flows are consuming the most resources and identify unused apps in the tenant. Which tool provides this visibility?',
      options: [
        { id: 'a', text: 'The Power Platform admin center, which provides tenant-wide analytics and governance.' },
        { id: 'b', text: 'The Power Apps maker portal for each individual maker.' },
        { id: 'c', text: 'Microsoft Dataverse security roles, to audit table access.' },
        { id: 'd', text: 'Power BI Desktop, to manually query usage data.' },
      ],
      correctId: 'a',
      explanation:
        'The Power Platform admin center provides tenant-wide visibility into environments, apps, flows, and usage analytics. Individual maker portals show only their own resources. Security roles control access rather than reporting usage, and Power BI Desktop is a separate analytics tool.',
    },
    {
      id: 'pl900-33',
      topic: 'Microsoft Dataverse',
      question:
        'A maker creates a custom Dataverse table for tracking equipment service records. When the maker builds a model-driven app, the table\'s forms and views automatically appear. Why?',
      options: [
        { id: 'a', text: 'Model-driven apps are data-model-driven: the app generates UI components from the Dataverse table structure and metadata.' },
        { id: 'b', text: 'Model-driven apps are configured in Power Automate, which auto-generates the UI.' },
        { id: 'c', text: 'The maker must manually code each form and view using HTML.' },
        { id: 'd', text: 'Canvas apps generate the forms; model-driven apps only display charts.' },
      ],
      correctId: 'a',
      explanation:
        'Model-driven apps derive their UI from the underlying Dataverse data model. Forms, views, and charts are generated from table metadata, reducing the amount of design work. Canvas apps require the maker to manually design every screen and control.',
    },
    {
      id: 'pl900-34',
      topic: 'Microsoft Dataverse',
      question:
        'A maker uses Copilot in the Power Apps maker portal to describe a table in natural language and have it created automatically. Which Dataverse capability does this illustrate?',
      options: [
        { id: 'a', text: 'Creating and modifying tables and columns through conversations with Copilot.' },
        { id: 'b', text: 'Importing data from Excel using Power Query.' },
        { id: 'c', text: 'Exporting a managed solution to production.' },
        { id: 'd', text: 'Applying a business rule to validate incoming data.' },
      ],
      correctId: 'a',
      explanation:
        'Dataverse supports Copilot-assisted table creation, where makers describe the table they need in natural language and Copilot generates the table with appropriate columns. This is distinct from importing data, exporting solutions, or defining business rules.',
    },
    {
      id: 'pl900-35',
      topic: 'Microsoft Dataverse',
      question:
        'An administrator needs to ensure that only users with the "Sales Manager" security role can delete Opportunity records, while sales reps can only create and read them. Where in Power Platform is this configured?',
      options: [
        { id: 'a', text: 'In DLP policies, under connector restrictions.' },
        { id: 'b', text: 'In the environment settings, under data storage limits.' },
        { id: 'c', text: 'In Dataverse security roles, by setting table-level privileges per role.' },
        { id: 'd', text: 'In the managed solution, by locking individual records.' },
      ],
      correctId: 'c',
      explanation:
        'Dataverse security roles define privileges such as Create, Read, Write, Delete, and Append at the table level for each role. Assigning these roles to users or teams controls what operations each person can perform. DLP policies govern connector combinations, not row privileges.',
    },

    // ── Power Apps (20 questions) ─────────────────────────────────────────────
    {
      id: 'pl900-36',
      topic: 'Power Apps',
      question:
        'A maker wants to build an app that connects to both a SharePoint list and a SQL database on the same screen. Which Power Apps type supports this and why?',
      options: [
        { id: 'a', text: 'Model-driven app, because it connects to multiple data sources through its data model.' },
        { id: 'b', text: 'Model-driven app, because only it supports premium connectors.' },
        { id: 'c', text: 'Power Pages, because it integrates multiple external databases through the Data workspace.' },
        { id: 'd', text: 'Canvas app, because it can connect to multiple data sources using connectors and gives full control over layout.' },
      ],
      correctId: 'd',
      explanation:
        'Canvas apps connect to hundreds of data sources via connectors, and makers have full control over layout. Model-driven apps use only Dataverse as their data source. Power Pages is for external websites, not general-purpose multi-source apps.',
    },
    {
      id: 'pl900-37',
      topic: 'Power Apps',
      question:
        'A model-driven app is shared with a user who has no Dataverse security role assigned. What happens when the user tries to open the app?',
      options: [
        { id: 'a', text: 'The user sees all records because model-driven apps have no security model.' },
        { id: 'b', text: 'The app gives the user the Environment Maker role automatically.' },
        { id: 'c', text: 'The user can read records but cannot create new ones by default.' },
        { id: 'd', text: 'The user cannot access data because model-driven app sharing depends on Dataverse security role privileges.' },
      ],
      correctId: 'd',
      explanation:
        'Sharing a model-driven app grants access to the app itself, but data access is controlled by Dataverse security roles. A user with no security role assigned will not be able to read or modify any data within the app.',
    },
    {
      id: 'pl900-38',
      topic: 'Power Apps',
      question:
        'In a canvas app, a maker writes `Filter(Products, Category = "Electronics")`. What does this Power Fx formula return?',
      options: [
        { id: 'a', text: 'The first Product record where Category equals "Electronics".' },
        { id: 'b', text: 'A true/false value indicating whether any Electronics products exist.' },
        { id: 'c', text: 'A count of how many Products are in the "Electronics" category.' },
        { id: 'd', text: 'A table of all Product records where Category equals "Electronics".' },
      ],
      correctId: 'd',
      explanation:
        'Filter returns a table of all records matching the condition. LookUp returns a single record. CountIf counts matching records. IsEmpty returns a Boolean. Filter is used when the maker needs all matching records, often to display in a gallery.',
    },
    {
      id: 'pl900-39',
      topic: 'Power Apps',
      question:
        'A canvas app maker uses `Patch(Orders, LookUp(Orders, OrderID = 1001), {Status: "Shipped"})`. What does this accomplish?',
      options: [
        { id: 'a', text: 'Creates a new Order record with Status "Shipped".' },
        { id: 'b', text: 'Deletes the Order record where OrderID equals 1001.' },
        { id: 'c', text: 'Updates the Status column on the Order record where OrderID equals 1001 to "Shipped".' },
        { id: 'd', text: 'Navigates to a screen showing the Order with OrderID 1001.' },
      ],
      correctId: 'c',
      explanation:
        'Patch updates an existing record when a matching record is provided as the second argument. LookUp finds the existing Order record. The third argument specifies the columns to change. To create a new record, the second argument would be Defaults(Orders).',
    },
    {
      id: 'pl900-40',
      topic: 'Power Apps',
      question:
        'A maker adds a Gallery control to a canvas app screen and sets its Items property to a Dataverse table. What is the primary purpose of a Gallery control?',
      options: [
        { id: 'a', text: 'To edit a single record using a form layout.' },
        { id: 'b', text: 'To submit data to the data source when the user taps a button.' },
        { id: 'c', text: 'To navigate between screens in the app.' },
        { id: 'd', text: 'To display a scrollable list of records from a data source.' },
      ],
      correctId: 'd',
      explanation:
        'A Gallery control displays a repeating list of records from a data source, allowing users to scroll and select. Form controls are used for editing a single record. Navigate handles screen transitions, and Submit or Patch handle data writes.',
    },
    {
      id: 'pl900-41',
      topic: 'Power Apps',
      question:
        'A maker wants to navigate from the Home screen to the Detail screen when a user selects a button, passing the selected gallery item as context. Which Power Fx function handles the navigation?',
      options: [
        { id: 'a', text: 'Collect(DetailScreen, Gallery1.Selected)' },
        { id: 'b', text: 'Filter(Screens, Name = "DetailScreen")' },
        { id: 'c', text: 'Patch(Screens, {Name: "DetailScreen"})' },
        { id: 'd', text: 'Navigate(DetailScreen, ScreenTransition.Fade, {selectedItem: Gallery1.Selected})' },
      ],
      correctId: 'd',
      explanation:
        'The Navigate function moves the user to another screen, optionally with a transition effect and a context record passed as the third argument. Collect adds records to a collection, Patch writes data, and Filter queries tables.',
    },
    {
      id: 'pl900-42',
      topic: 'Power Apps',
      question:
        'Which key difference determines whether to use a canvas app or a model-driven app for a new Power Apps project?',
      options: [
        { id: 'a', text: 'Canvas apps can only be used on mobile; model-driven apps work only on desktop browsers.' },
        { id: 'b', text: 'Canvas apps are only for internal users; model-driven apps support external users.' },
        { id: 'c', text: 'Model-driven apps require coding in C#; canvas apps require no logic at all.' },
        { id: 'd', text: 'Canvas apps give makers full control over layout and can use many data sources; model-driven apps generate their UI from the Dataverse data model and are automatically responsive.' },
      ],
      correctId: 'd',
      explanation:
        'Canvas apps offer pixel-level layout control and support many connectors. Model-driven apps are data-model driven, automatically responsive, and use only Dataverse. Both can run on mobile and desktop. Neither requires C# coding at the fundamentals level.',
    },
    {
      id: 'pl900-43',
      topic: 'Power Apps',
      question:
        'A maker uses `Set(varUserName, User().FullName)` in a canvas app. What does this formula do?',
      options: [
        { id: 'a', text: 'Filters a table to records where the UserName column matches the current user.' },
        { id: 'b', text: 'Stores the current user\'s full name in a global variable called varUserName.' },
        { id: 'c', text: 'Creates a new Dataverse record with the user\'s name.' },
        { id: 'd', text: 'None' },
      ],
      correctId: 'd',
      explanation:
        'Set stores a value in a global variable, accessible across all screens. User().FullName retrieves the signed-in user\'s display name. Global variables in canvas apps are created with Set and read by referencing the variable name.',
    },
    {
      id: 'pl900-44',
      topic: 'Power Apps',
      question:
        'A maker built a canvas app for a sales team and wants to share it. Another team member should be able to run the app but not edit it. What should the maker do?',
      options: [
        { id: 'a', text: 'Export the app as a managed solution and import it into the recipient\'s environment.' },
        { id: 'b', text: 'Publish the app to Power Pages so others can access it publicly.' },
        { id: 'c', text: 'Add the user to the Environment Maker security role so they can access all apps.' },
        { id: 'd', text: 'Share the app from the Power Apps maker portal, granting the user the "User" permission (can use).' },
      ],
      correctId: 'd',
      explanation:
        'Canvas apps are shared from the Power Apps maker portal by adding users or groups. The "User" (Can use) permission allows running the app without editing it. The "Co-owner" permission allows editing. Granting Environment Maker gives broader rights than needed.',
    },
    {
      id: 'pl900-45',
      topic: 'Power Apps',
      question:
        'A maker is troubleshooting a canvas app where a formula is returning unexpected results. Which tool in Power Apps helps diagnose formula errors and network calls at runtime?',
      options: [
        { id: 'a', text: 'Power BI Desktop, to visualize app data.' },
        { id: 'b', text: 'Dataverse business rules, to log formula errors.' },
        { id: 'c', text: 'The Power Platform admin center, to check environment health.' },
        { id: 'd', text: 'The App Monitor (Monitor tool) in Power Apps Studio, to trace events and formula evaluations at runtime.' },
      ],
      correctId: 'd',
      explanation:
        'The Monitor tool (App Monitor) in Power Apps Studio provides real-time visibility into formula evaluations, connector calls, and events during a canvas app session. This is the dedicated debugging tool for canvas apps.',
    },
    {
      id: 'pl900-46',
      topic: 'Power Apps',
      question:
        'In a model-driven app, a maker needs to control which columns display when a user opens an Account record. Which component does the maker customize?',
      options: [
        { id: 'a', text: 'A gallery control on a canvas screen.' },
        { id: 'b', text: 'A view, which defines the list of columns shown in the grid.' },
        { id: 'c', text: 'A form, which defines the columns shown when editing or viewing a record.' },
        { id: 'd', text: 'A dashboard, which shows aggregated chart data.' },
      ],
      correctId: 'c',
      explanation:
        'Forms in model-driven apps define the columns (fields) that appear when a user opens a single record for viewing or editing. Views define the columns shown in a list of records. Dashboards show charts and lists. Gallery controls belong to canvas apps, not model-driven apps.',
    },
    {
      id: 'pl900-47',
      topic: 'Power Apps',
      question:
        'A maker uses `If(Dropdown1.Selected.Value = "Priority", "red", "green")` as a color property on a label. What does the If function do in this context?',
      options: [
        { id: 'a', text: 'Navigates to a screen named "Priority" if the dropdown is selected.' },
        { id: 'b', text: 'Creates a new record in Dataverse with a Status of "Priority".' },
        { id: 'c', text: 'Filters a data source where the Value column equals "Priority".' },
        { id: 'd', text: 'Returns "red" if the dropdown selection is "Priority", otherwise returns "green".' },
      ],
      correctId: 'd',
      explanation:
        'If evaluates a condition and returns the first result when true, or the second result when false. Here it sets the label color dynamically based on the dropdown selection. Filter is for querying tables, Navigate for screen transitions, and Patch for writing records.',
    },
    {
      id: 'pl900-48',
      topic: 'Power Apps',
      question:
        'A maker wants to create a view in a model-driven app that shows only open service cases assigned to the current user, sorted by creation date. Which model-driven app component is used to configure this?',
      options: [
        { id: 'a', text: 'A form, where column display order is configured.' },
        { id: 'b', text: 'A business process flow, which guides users through stages.' },
        { id: 'c', text: 'A dashboard, where chart filters are applied.' },
        { id: 'd', text: 'A view, where filter conditions and column order are defined.' },
      ],
      correctId: 'd',
      explanation:
        'Views in model-driven apps define which records appear in a list, which columns are shown, how records are filtered, and how they are sorted. Forms handle individual record display. Dashboards aggregate multiple views and charts, and business process flows guide data entry stages.',
    },
    {
      id: 'pl900-49',
      topic: 'Power Apps',
      question:
        'A canvas app maker uses `ForAll(OrderItems, Patch(Inventory, LookUp(Inventory, ProductID = ProductID), {Stock: Stock - Quantity}))`. What is the purpose of ForAll in this formula?',
      options: [
        { id: 'a', text: 'Filters the Inventory table to records matching OrderItems.' },
        { id: 'b', text: 'Stores the OrderItems table in a global variable.' },
        { id: 'c', text: 'Returns the first matching record from OrderItems.' },
        { id: 'd', text: 'Iterates over every record in the OrderItems table and executes the Patch operation for each one.' },
      ],
      correctId: 'd',
      explanation:
        'ForAll iterates over every record in a table and evaluates the formula for each record, enabling bulk operations such as patching multiple inventory rows in one expression. Filter returns a filtered table, LookUp returns a single record, and Set/Collect handle variable and collection operations.',
    },
    {
      id: 'pl900-50',
      topic: 'Power Apps',
      question:
        'A maker sets a container control to layout mode "Horizontal" in a canvas app. What behavior does this provide?',
      options: [
        { id: 'a', text: 'Controls inside the container are arranged side by side and the container resizes responsively.' },
        { id: 'b', text: 'Controls inside the container are stacked vertically one below the other.' },
        { id: 'c', text: 'The container hides its children when the screen width is below 768 pixels.' },
        { id: 'd', text: 'The container submits a form when the user taps any control inside it.' },
      ],
      correctId: 'a',
      explanation:
        'Horizontal containers arrange child controls side by side and help makers build responsive layouts that adapt to different screen sizes. Vertical containers stack controls top to bottom. Containers do not automatically hide children or submit forms.',
    },
    {
      id: 'pl900-51',
      topic: 'Power Apps',
      question:
        'A maker wants to add a Copilot control to a canvas app so users can ask questions about the data on the current screen. Where is this capability configured?',
      options: [
        { id: 'a', text: 'In Power Automate, by building a cloud flow that answers user questions.' },
        { id: 'b', text: 'In the canvas app using the Copilot control, which provides an AI-powered chat interface connected to the app\'s data context.' },
        { id: 'c', text: 'In Microsoft Copilot Studio, by deploying an agent to the canvas app environment.' },
        { id: 'd', text: 'None' },
      ],
      correctId: 'd',
      explanation:
        'Power Apps includes a built-in Copilot control that makers can add to canvas app screens, enabling end users to interact with data using natural language. This is a first-party control within Power Apps Studio and does not require a separate Copilot Studio deployment.',
    },
    {
      id: 'pl900-52',
      topic: 'Power Apps',
      question:
        'A team of five makers is building a large model-driven app. They want to move completed components from their shared development environment to a test environment managed by the QA team. What is the recommended approach?',
      options: [
        { id: 'a', text: 'Share the development environment access with the QA team so they can copy components manually.' },
        { id: 'b', text: 'Publish the app to Power Pages so the QA team can access it.' },
        { id: 'c', text: 'Duplicate the development environment using the Reset feature.' },
        { id: 'd', text: 'Export the solution as a managed solution from development and import it into the test environment.' },
      ],
      correctId: 'd',
      explanation:
        'The recommended ALM pattern is to export components as a managed solution from the development environment and import into test or production. This keeps environments isolated. The Reset feature wipes an environment clean, which is destructive. Publishing to Power Pages is for external web sites.',
    },
    {
      id: 'pl900-53',
      topic: 'Power Apps',
      question:
        'A maker uses `Switch(Status, "Open", "blue", "Closed", "gray", "Escalated", "red")` as a fill color formula. What happens when Status equals "Closed"?',
      options: [
        { id: 'a', text: 'The formula returns "blue", the first value listed.' },
        { id: 'b', text: 'The formula navigates to a screen named "Closed".' },
        { id: 'c', text: 'The formula returns blank because Switch requires the condition at the end.' },
        { id: 'd', text: 'The formula returns "gray", the value paired with "Closed".' },
      ],
      correctId: 'd',
      explanation:
        'Switch evaluates the first argument against each value in sequence and returns the paired result when a match is found. When Status is "Closed", the formula matches the second pair and returns "gray". This is equivalent to chained If conditions but more readable for multiple options.',
    },
    {
      id: 'pl900-54',
      topic: 'Power Apps',
      question:
        'A canvas app maker uses a Display form control to show record details and an Edit form control on another screen to allow changes. What distinguishes a Display form from an Edit form?',
      options: [
        { id: 'a', text: 'A Display form shows read-only data; an Edit form allows users to modify data and submit changes.' },
        { id: 'b', text: 'A Display form connects to SharePoint; an Edit form connects only to Dataverse.' },
        { id: 'c', text: 'A Display form requires a premium connector; an Edit form uses standard connectors.' },
        { id: 'd', text: 'A Display form shows charts; an Edit form shows tables.' },
      ],
      correctId: 'a',
      explanation:
        'Display forms present record fields as read-only for viewing. Edit forms allow users to change field values and submit the record back to the data source. Both can connect to any supported data source regardless of connector tier.',
    },
    {
      id: 'pl900-55',
      topic: 'Power Apps',
      question:
        'A Contoso model-driven app includes the Account and Contact tables with a one-to-many relationship. When a user opens an Account record, they see a related Contact subgrid without any additional configuration. Why?',
      options: [
        { id: 'a', text: 'Model-driven apps require a canvas custom page to display related records.' },
        { id: 'b', text: 'This behavior requires a premium Dataverse connector.' },
        { id: 'c', text: 'The maker manually coded the subgrid using Power Fx.' },
        { id: 'd', text: 'Model-driven apps automatically navigate table relationships and display related records in subgrids based on the data model.' },
      ],
      correctId: 'd',
      explanation:
        'A key advantage of model-driven apps is that navigation through relationships is automatic. When a relationship exists between tables, related records appear in subgrids without additional design work. Canvas apps require the maker to explicitly design and wire up relationship navigation.',
    },

    // ── Power Automate (15 questions) ─────────────────────────────────────────
    {
      id: 'pl900-56',
      topic: 'Power Automate',
      question:
        'A manager wants to send a reminder email to employees every Monday at 8 AM. Which Power Automate flow type and trigger combination should the maker use?',
      options: [
        { id: 'a', text: 'Automated cloud flow triggered by a new Outlook email arriving on Monday.' },
        { id: 'b', text: 'Instant cloud flow triggered manually by the manager each Monday.' },
        { id: 'c', text: 'Scheduled cloud flow with a weekly recurrence trigger set for Monday at 8 AM.' },
        { id: 'd', text: 'Desktop flow that opens Outlook on the manager\'s PC every Monday.' },
      ],
      correctId: 'c',
      explanation:
        'Scheduled cloud flows use the Recurrence trigger to run at defined intervals, such as every Monday at 8 AM. Automated flows react to events, instant flows require manual trigger, and desktop flows automate local desktop tasks.',
    },
    {
      id: 'pl900-57',
      topic: 'Power Automate',
      question:
        'A cloud flow must send an approval to a manager whenever a new expense report is submitted. If the manager approves, it routes to finance; if rejected, it notifies the submitter. What type of logic does this flow use?',
      options: [
        { id: 'a', text: 'Parallel branching only, running both paths simultaneously.' },
        { id: 'b', text: 'Loops that iterate over expense lines until all are approved.' },
        { id: 'c', text: 'Conditional branching (If yes / If no), routing the flow based on the approval outcome.' },
        { id: 'd', text: 'Scheduled triggers that check approval status hourly.' },
      ],
      correctId: 'c',
      explanation:
        'Conditional branching in cloud flows evaluates an outcome and routes execution down one of two or more paths. An approval action returns an outcome such as Approve or Reject, which a condition then evaluates to determine the next action.',
    },
    {
      id: 'pl900-58',
      topic: 'Power Automate',
      question:
        'A maker is building a cloud flow and adds an Apply to each loop after retrieving a list of SharePoint items. What does Apply to each do?',
      options: [
        { id: 'a', text: 'Runs the enclosed actions once for the entire list.' },
        { id: 'b', text: 'Sends the entire list to an approval action simultaneously.' },
        { id: 'c', text: 'Filters the list to only the first item.' },
        { id: 'd', text: 'Runs the enclosed actions once for each item in the list.' },
      ],
      correctId: 'd',
      explanation:
        'Apply to each (a loop in cloud flows) iterates over every item in a collection and runs the contained actions for each item. This is the cloud flow equivalent of a foreach loop. The Do until loop repeats until a condition is met, not for each item.',
    },
    {
      id: 'pl900-59',
      topic: 'Power Automate',
      question:
        'A sales rep triggers a flow by tapping a button in the Power Automate mobile app to log a customer call note. Which flow type does this describe?',
      options: [
        { id: 'a', text: 'Automated cloud flow, triggered by a customer email arriving.' },
        { id: 'b', text: 'Scheduled cloud flow, set to run when the rep is likely on a call.' },
        { id: 'c', text: 'Instant cloud flow, triggered by the rep manually pressing the button.' },
        { id: 'd', text: 'Desktop flow, running on the rep\'s laptop to log the note.' },
      ],
      correctId: 'c',
      explanation:
        'Instant cloud flows are started manually, for example by pressing a button in the Power Automate mobile app, a canvas app, or the Power Automate portal. Automated flows react to events, scheduled flows run on a timer, and desktop flows automate local PC tasks.',
    },
    {
      id: 'pl900-60',
      topic: 'Power Automate',
      question:
        'A maker needs to monitor whether a cloud flow runs successfully each time a SharePoint item is created. After testing, the maker needs to view the run history. Where is this done?',
      options: [
        { id: 'a', text: 'In Power Apps Studio, using the App Monitor tool.' },
        { id: 'b', text: 'In Microsoft Dataverse, by querying the system audit log.' },
        { id: 'c', text: 'In the Power Platform admin center, under DLP policies.' },
        { id: 'd', text: 'In the Power Automate maker portal, on the flow detail page showing run history.' },
      ],
      correctId: 'd',
      explanation:
        'The Power Automate maker portal shows the run history for each flow, including start time, duration, and success or failure status for each step. The App Monitor is a Power Apps tool. The admin center provides governance, not per-flow run detail for individual makers.',
    },
    {
      id: 'pl900-61',
      topic: 'Power Automate',
      question:
        'An HR team uses a cloud flow that sends Teams messages to employees. A new DLP policy now classifies the Teams connector as Non-Business while SharePoint (also used in the same flow) is classified as Business. What happens to the flow?',
      options: [
        { id: 'a', text: 'The flow continues to run but Teams messages are skipped automatically.' },
        { id: 'b', text: 'The flow prompts the user to reclassify the Teams connector before each run.' },
        { id: 'c', text: 'The DLP policy only applies to new flows; existing flows are not affected.' },
        { id: 'd', text: 'The flow is suspended because it violates the DLP policy by mixing Business and Non-Business connectors.' },
      ],
      correctId: 'd',
      explanation:
        'When a flow uses connectors from both the Business and Non-Business DLP groups, it violates the policy and is suspended. DLP policies apply to existing flows as well as new ones. Users cannot reclassify connectors; only admins manage DLP policy.',
    },
    {
      id: 'pl900-62',
      topic: 'Power Automate',
      question:
        'A company wants to automate the transfer of data between a legacy on-premises application and Microsoft Dataverse every night, using a desktop flow controlled by a cloud flow. Which Power Automate scenario is this?',
      options: [
        { id: 'a', text: 'A standalone scheduled cloud flow connecting Dataverse to OneDrive.' },
        { id: 'b', text: 'A Power Pages site collecting data from the legacy application through a form.' },
        { id: 'c', text: 'An AI Builder document processing scenario extracting data from PDF exports.' },
        { id: 'd', text: 'An RPA scenario: a scheduled cloud flow triggers a desktop flow to interact with the on-premises application UI.' },
      ],
      correctId: 'd',
      explanation:
        'This is a classic RPA (Robotic Process Automation) scenario. The scheduled cloud flow orchestrates the work and triggers the Power Automate desktop flow, which interacts with the on-premises application UI. Cloud flows alone cannot interact with local desktop application UIs.',
    },
    {
      id: 'pl900-63',
      topic: 'Power Automate',
      question:
        'A cloud flow retrieves a list of order records from Dataverse, filters those with Status equal to "Overdue", and sends each sales manager a Teams message. The maker wants to reuse this logic in other flows. What should the maker create?',
      options: [
        { id: 'a', text: 'A scheduled cloud flow that runs daily.' },
        { id: 'b', text: 'A Copilot Studio topic that runs the flow as an action.' },
        { id: 'c', text: 'A canvas app with a button to trigger the logic.' },
        { id: 'd', text: 'A child flow that can be called from other flows.' },
      ],
      correctId: 'd',
      explanation:
        'Child flows (flows called by other flows using the Run a Child Flow action) allow logic to be encapsulated and reused across multiple parent flows. This promotes maintainability. A scheduled flow runs on a timer, not on demand from another flow.',
    },
    {
      id: 'pl900-64',
      topic: 'Power Automate',
      question:
        'Copilot in Power Automate allows a maker to describe a flow in plain language. The maker types: "Send me an email when a file is added to my OneDrive." What does Copilot do next?',
      options: [
        { id: 'a', text: 'Opens the Power Automate desktop recorder to capture OneDrive interactions.' },
        { id: 'b', text: 'Publishes a Power Pages webhook connected to OneDrive.' },
        { id: 'c', text: 'Creates a Dataverse business rule to monitor OneDrive for file changes.' },
        { id: 'd', text: 'Generates a cloud flow with an automated trigger from OneDrive and a Send an email action, which the maker can review and modify.' },
      ],
      correctId: 'd',
      explanation:
        'Copilot in Power Automate generates cloud flows from natural language descriptions. It selects the appropriate trigger (OneDrive file created) and actions (Send email) and presents the flow for maker review. The maker can refine the flow before saving.',
    },
    {
      id: 'pl900-65',
      topic: 'Power Automate',
      question:
        'A team shares a cloud flow so that others can also run and edit it. What must the owner do to share a cloud flow with a colleague?',
      options: [
        { id: 'a', text: 'Export the flow as a ZIP file and email it to the colleague.' },
        { id: 'b', text: 'Publish the flow to a Power Pages site.' },
        { id: 'c', text: 'Grant the colleague the Power Platform Global Administrator role.' },
        { id: 'd', text: 'Share the flow from the Power Automate maker portal, granting the co-owner or run-only role.' },
      ],
      correctId: 'd',
      explanation:
        'Flows are shared from the Power Automate maker portal by adding users as co-owners (can edit and run) or run-only users (can trigger only). Global Administrator grants full tenant admin rights, which is excessive for a single flow.',
    },
    {
      id: 'pl900-66',
      topic: 'Power Automate',
      question:
        'A cloud flow uses the SharePoint connector to read items from a list every hour. The SharePoint connector is classified as which tier in Power Platform?',
      options: [
        { id: 'a', text: 'Premium connector, requiring a Power Automate premium plan.' },
        { id: 'b', text: 'Custom connector, requiring the maker to build and register it.' },
        { id: 'c', text: 'Standard connector, included with base Power Automate licensing.' },
        { id: 'd', text: 'Certified connector, only available in government environments.' },
      ],
      correctId: 'c',
      explanation:
        'SharePoint is a standard connector included with base Power Automate and Power Apps licensing. Premium connectors such as SQL Server and Dataverse (outside of included use) require higher-tier plans. Custom connectors are built by makers for APIs not natively available.',
    },
    {
      id: 'pl900-67',
      topic: 'Power Automate',
      question:
        'An organization wants to discover that its supplier onboarding process has an average cycle time of 14 days, with most delays occurring in the legal review step. Which Power Automate feature surfaces this insight?',
      options: [
        { id: 'a', text: 'Power Automate desktop flows, to record the onboarding steps on a PC.' },
        { id: 'b', text: 'Power Automate approvals, to route legal review tasks.' },
        { id: 'c', text: 'Power Automate Process Mining, to analyze event logs and identify bottlenecks.' },
        { id: 'd', text: 'Power Automate instant flows, to capture onboarding data on demand.' },
      ],
      correctId: 'c',
      explanation:
        'Process Mining analyzes event logs from existing systems to visualize process flows, measure cycle times, and pinpoint bottlenecks. It is discovery-oriented, not execution-oriented. Approvals route tasks, desktop flows automate UI, and instant flows capture data on demand.',
    },
    {
      id: 'pl900-68',
      topic: 'Power Automate',
      question:
        'A cloud flow has an action configured to get items from SharePoint, but the SharePoint site URL is incorrect and the action fails every run. The maker wants to catch this error and send a notification instead of letting the flow fail silently. What should the maker configure?',
      options: [
        { id: 'a', text: 'A parallel branch, to run both the main path and a notification simultaneously.' },
        { id: 'b', text: 'A DLP policy that blocks the incorrect SharePoint URL.' },
        { id: 'c', text: 'A scheduled flow that checks for failed flows every hour.' },
        { id: 'd', text: 'A Scope action with error handling, using "Configure run after" to run a notification action when the SharePoint action fails.' },
      ],
      correctId: 'd',
      explanation:
        'Power Automate supports error handling through the "Configure run after" setting on actions. Setting a notification action to run after the previous action "has failed" creates an error-handling path. Scope actions can group steps and apply unified error handling.',
    },
    {
      id: 'pl900-69',
      topic: 'Power Automate',
      question:
        'A maker uses a template from the Power Automate template gallery to create a flow that saves email attachments to OneDrive. What is the primary benefit of using a flow template?',
      options: [
        { id: 'a', text: 'Templates are pre-approved by IT so they bypass DLP policies.' },
        { id: 'b', text: 'Templates provide a pre-built starting point with connectors and actions already configured for common scenarios.' },
        { id: 'c', text: 'Templates eliminate the need for a Power Automate license.' },
        { id: 'd', text: 'Templates automatically train AI Builder models for the selected use case.' },
      ],
      correctId: 'b',
      explanation:
        'Flow templates are pre-built flows for common scenarios, giving makers a head start with connectors and logic already in place. Makers customize the template to their environment. Templates do not bypass DLP policies, remove licensing requirements, or affect AI Builder.',
    },
    {
      id: 'pl900-70',
      topic: 'Power Automate',
      question:
        'A Power Automate desktop flow records a maker\'s clicks and keystrokes in a Windows desktop application to automate a data entry task. Which technology does this represent?',
      options: [
        { id: 'a', text: 'Business process automation (BPA) using a cloud connector.' },
        { id: 'b', text: 'Robotic Process Automation (RPA), automating user interface interactions without an API.' },
        { id: 'c', text: 'Artificial intelligence (AI) using an AI Builder model to interpret screen content.' },
        { id: 'd', text: 'Process Mining, discovering the data entry workflow pattern.' },
      ],
      correctId: 'b',
      explanation:
        'Desktop flows implement RPA by recording and replaying UI interactions (clicks, keystrokes, screen scraping) on Windows applications that lack APIs. AI Builder processes documents and images using machine learning models. Process Mining analyzes event data rather than automating UI steps.',
    },

    // ── Power BI (10 questions) ───────────────────────────────────────────────
    {
      id: 'pl900-71',
      topic: 'Power BI',
      question:
        'A data analyst builds a sales report in Power BI Desktop and publishes it to the Power BI service. Colleagues then create their own reports from the same underlying data without copying it. What did the analyst publish that enables this?',
      options: [
        { id: 'a', text: 'A dashboard with pinned visuals from the original report.' },
        { id: 'b', text: 'A semantic model that colleagues can connect to and build new reports on top of.' },
        { id: 'c', text: 'A paginated report exported to PDF.' },
        { id: 'd', text: 'A Power BI app distributed to all users in the workspace.' },
      ],
      correctId: 'b',
      explanation:
        'When a .pbix file is published from Power BI Desktop, it creates a semantic model (not a "dataset" in current terminology) in the workspace. Colleagues can connect to this shared semantic model and build their own reports without duplicating data. Dashboards and apps are separate constructs for consumption.',
    },
    {
      id: 'pl900-72',
      topic: 'Power BI',
      question:
        'A manager wants a single screen with KPI tiles showing total revenue, open orders, and customer count, each pulling from different reports. Which Power BI feature provides this view?',
      options: [
        { id: 'a', text: 'A Power BI report with three separate pages.' },
        { id: 'b', text: 'A Power BI dashboard with pinned visuals from multiple reports.' },
        { id: 'c', text: 'A Power BI paginated report with a multi-section layout.' },
        { id: 'd', text: 'A Power BI semantic model with multiple tables.' },
      ],
      correctId: 'b',
      explanation:
        'Power BI dashboards are a single canvas of pinned tiles that can come from multiple reports and semantic models, giving a consolidated view of KPIs. Reports are multi-page interactive documents tied to one semantic model. Paginated reports are for pixel-perfect printable output. Semantic models store data.',
    },
    {
      id: 'pl900-73',
      topic: 'Power BI',
      question:
        'A Power BI report was built in Power BI Desktop. The data analyst wants colleagues in the Power BI service to interact with slicers and filters without being in Power BI Desktop. What should the analyst do?',
      options: [
        { id: 'a', text: 'Email the .pbix file to colleagues.' },
        { id: 'b', text: 'Publish the report to the Power BI service so colleagues can interact with it in a browser.' },
        { id: 'c', text: 'Export the report to a PDF so filters are preserved.' },
        { id: 'd', text: 'Pin all visuals to a dashboard so slicers are available there.' },
      ],
      correctId: 'b',
      explanation:
        'Publishing to the Power BI service makes the report available for interactive use in a browser. Slicers and filters remain interactive. Emailing a .pbix requires colleagues to have Power BI Desktop installed. PDFs are static. Pinned dashboard tiles lose slicer interactivity.',
    },
    {
      id: 'pl900-74',
      topic: 'Power BI',
      question:
        'A finance team needs a precisely formatted monthly invoice summary report that is printed and mailed, with exact column widths and page breaks matching their template. Which Power BI report type fits this requirement?',
      options: [
        { id: 'a', text: 'A standard Power BI report page with custom visuals.' },
        { id: 'b', text: 'A Power BI dashboard shared with all finance users.' },
        { id: 'c', text: 'A Power BI paginated report, designed for pixel-perfect, print-ready output.' },
        { id: 'd', text: 'A Power BI workspace app published to finance users.' },
      ],
      correctId: 'c',
      explanation:
        'Paginated reports are designed for scenarios requiring precise layouts, defined page breaks, and print-ready output, like invoices, financial statements, and operational reports. Standard Power BI reports are optimized for interactive exploration, not fixed print layouts.',
    },
    {
      id: 'pl900-75',
      topic: 'Power BI',
      question:
        'A maker uses Power Query in Power BI Desktop to combine data from a SharePoint list and an Excel file, remove blank rows, and rename columns before loading into the semantic model. At what stage does this transformation occur?',
      options: [
        { id: 'a', text: 'After the report is published, in the Power BI service refresh settings.' },
        { id: 'b', text: 'In the Power Query Editor, during the data transformation stage before loading to the model.' },
        { id: 'c', text: 'In a DAX measure, at query time when a visual is rendered.' },
        { id: 'd', text: 'In the On-premises data gateway, during data transfer.' },
      ],
      correctId: 'b',
      explanation:
        'Power Query Editor is the data transformation layer in Power BI Desktop where makers combine, clean, and shape data before it is loaded into the semantic model. DAX handles calculation logic after the model is built. The gateway transfers data but does not transform it.',
    },
    {
      id: 'pl900-76',
      topic: 'Power BI',
      question:
        'A business analyst adds a calculated measure `Total Revenue = SUM(Sales[Amount])` to a Power BI semantic model. Which language is used to write this expression?',
      options: [
        { id: 'a', text: 'Power Fx, the low-code formula language of Power Platform.' },
        { id: 'b', text: 'M language, used in Power Query transformations.' },
        { id: 'c', text: 'DAX (Data Analysis Expressions), used for calculated columns and measures in Power BI semantic models.' },
        { id: 'd', text: 'T-SQL, executed against the underlying database.' },
      ],
      correctId: 'c',
      explanation:
        'DAX is the expression language for measures, calculated columns, and calculated tables in Power BI semantic models. Power Fx is used in Power Apps. M language is used in Power Query for data transformations. T-SQL runs against relational databases.',
    },
    {
      id: 'pl900-77',
      topic: 'Power BI',
      question:
        'A team collaborates on reports and semantic models in the Power BI service. Where are these shared artifacts stored and managed?',
      options: [
        { id: 'a', text: 'In Power BI Desktop, saved locally as .pbix files.' },
        { id: 'b', text: 'In a Power BI workspace in the Power BI service, which is the collaboration container for reports, semantic models, and dashboards.' },
        { id: 'c', text: 'In a Microsoft Dataverse environment, as Power BI entities.' },
        { id: 'd', text: 'In a SharePoint document library, where Power BI files are versioned.' },
      ],
      correctId: 'b',
      explanation:
        'Power BI workspaces in the Power BI service are the collaboration containers where teams store, share, and manage reports, semantic models, dashboards, and dataflows. Power BI Desktop is a local authoring tool. Dataverse stores structured business data, not Power BI artifacts.',
    },
    {
      id: 'pl900-78',
      topic: 'Power BI',
      question:
        'A Power BI report author publishes to a workspace. The admin then packages the workspace content into a distributable format that gives read-only consumers a curated experience with their own navigation. What is this format called?',
      options: [
        { id: 'a', text: 'A Power BI dashboard.' },
        { id: 'b', text: 'A Power BI app.' },
        { id: 'c', text: 'A paginated report subscription.' },
        { id: 'd', text: 'A Power BI semantic model published link.' },
      ],
      correctId: 'b',
      explanation:
        'A Power BI app bundles workspace content (reports, dashboards) into a curated, read-only package for distribution to a wider audience. The app provides its own navigation and can be published to specific users or groups. Dashboards are single-canvas KPI views rather than packaged distributions.',
    },
    {
      id: 'pl900-79',
      topic: 'Power BI',
      question:
        'Microsoft Fabric integrates Power BI with other analytics services. Which statement best describes the relationship between Power BI and Microsoft Fabric?',
      options: [
        { id: 'a', text: 'Microsoft Fabric replaces Power BI entirely; all Power BI licenses are being retired.' },
        { id: 'b', text: 'Power BI is a component of Microsoft Fabric, which provides a unified analytics platform including data engineering, warehousing, and data science alongside Power BI.' },
        { id: 'c', text: 'Microsoft Fabric is an on-premises version of Power BI designed for regulated industries.' },
        { id: 'd', text: 'Power BI can only access data from Microsoft Fabric; other connectors are deprecated.' },
      ],
      correctId: 'b',
      explanation:
        'Microsoft Fabric is an end-to-end analytics platform, and Power BI is one of its experiences alongside data engineering, data warehousing, real-time intelligence, and AI. Power BI is not retired; it remains central to Fabric for reporting and visualization.',
    },
    {
      id: 'pl900-80',
      topic: 'Power BI',
      question:
        'A Power BI Desktop report connects to an on-premises SQL Server database. The company publishes the report to the Power BI service and wants automatic daily data refresh. What is required to enable this?',
      options: [
        { id: 'a', text: 'An on-premises data gateway, installed on a machine with access to the SQL Server, to relay data to the Power BI service.' },
        { id: 'b', text: 'A Power BI Premium per-user license for each report consumer.' },
        { id: 'c', text: 'A Microsoft Dataverse connector configured to mirror the SQL Server data.' },
        { id: 'd', text: 'A Power Automate cloud flow that exports SQL data to SharePoint for Power BI to read.' },
      ],
      correctId: 'a',
      explanation:
        'An on-premises data gateway is required for the Power BI service to reach on-premises data sources such as SQL Server during scheduled refresh. The gateway acts as a secure bridge. Premium licenses affect capacity features, not gateway requirements.',
    },

    // ── Copilot Studio (10 questions) ─────────────────────────────────────────
    {
      id: 'pl900-81',
      topic: 'Copilot Studio',
      question:
        'A maker in Microsoft Copilot Studio creates a topic that recognizes when a user asks about order status and triggers a Power Automate flow to retrieve real-time data. What is a "topic" in this context?',
      options: [
        { id: 'a', text: 'A Dataverse table that stores conversation history.' },
        { id: 'b', text: 'A conversational path that handles a specific intent or subject, including trigger phrases, actions, and responses.' },
        { id: 'c', text: 'A Power BI report embedded in a Teams channel.' },
        { id: 'd', text: 'A DLP policy that controls which connectors the agent can use.' },
      ],
      correctId: 'b',
      explanation:
        'Topics in Copilot Studio define how the agent responds to specific user intents. Each topic has trigger phrases, a conversational flow with messages and questions, and can call actions such as Power Automate flows or connector actions.',
    },
    {
      id: 'pl900-82',
      topic: 'Copilot Studio',
      question:
        'A maker configures an agent in Microsoft Copilot Studio to answer customer questions about product warranties using a company SharePoint site as the knowledge source. What feature does the agent use when the user\'s question is not matched by an authored topic?',
      options: [
        { id: 'a', text: 'An AI Builder prediction model to estimate the best answer.' },
        { id: 'b', text: 'Generative answers, which search the configured knowledge sources and produce AI-generated responses.' },
        { id: 'c', text: 'A Power Pages form submitted to a Dataverse table.' },
        { id: 'd', text: 'A scheduled Power Automate flow that emails the answer.' },
      ],
      correctId: 'b',
      explanation:
        'Generative answers allow Copilot Studio agents to search configured knowledge sources such as SharePoint, websites, and Dataverse and generate conversational responses for questions that no authored topic covers. This reduces the need to manually author every possible FAQ.',
    },
    {
      id: 'pl900-83',
      topic: 'Copilot Studio',
      question:
        'A company deploys a Copilot Studio agent to their Microsoft Teams channel and also embeds it on their customer-facing website. What are these deployment targets called in Copilot Studio?',
      options: [
        { id: 'a', text: 'Connectors, which route the agent to different services.' },
        { id: 'b', text: 'Channels, which are the platforms where the agent is published and reached by users.' },
        { id: 'c', text: 'Topics, which define where the agent is available.' },
        { id: 'd', text: 'Environments, which control where the agent is hosted.' },
      ],
      correctId: 'b',
      explanation:
        'Channels in Copilot Studio are the platforms to which an agent is published, such as Microsoft Teams, a web chat widget, Microsoft 365 Chat, and more. Connectors are for data and service integration. Topics define conversational flows, not deployment targets.',
    },
    {
      id: 'pl900-84',
      topic: 'Copilot Studio',
      question:
        'An agent in Microsoft Copilot Studio needs to look up a customer\'s account balance from a backend ERP system during a conversation. Which approach best enables this in Copilot Studio?',
      options: [
        { id: 'a', text: 'Add the ERP system as a knowledge source so generative answers can read from it.' },
        { id: 'b', text: 'Call a Power Automate cloud flow from within a topic to query the ERP and return the balance.' },
        { id: 'c', text: 'Create a Dataverse business rule that pushes ERP data to the agent.' },
        { id: 'd', text: 'Use AI Builder text recognition to read the balance from an ERP screenshot.' },
      ],
      correctId: 'b',
      explanation:
        'Topics in Copilot Studio can call Power Automate flows as actions, enabling the agent to query external systems such as an ERP and return results within the conversation. Knowledge sources support generative answers from static content, not transactional real-time data retrieval.',
    },
    {
      id: 'pl900-85',
      topic: 'Copilot Studio',
      question:
        'A maker has finished building and testing an agent in Microsoft Copilot Studio. What must the maker do before users can interact with the agent in Teams?',
      options: [
        { id: 'a', text: 'Export the agent as a managed solution to the production environment.' },
        { id: 'b', text: 'Publish the agent in Copilot Studio, then configure and enable the Teams channel.' },
        { id: 'c', text: 'Deploy a Power Pages site with the agent embedded as a widget.' },
        { id: 'd', text: 'Grant all users the Environment Maker security role.' },
      ],
      correctId: 'b',
      explanation:
        'Copilot Studio agents must be published before they are available to end users. The Teams channel must then be configured and enabled. Publishing is separate from channel configuration. Solutions transport apps and flows, not Copilot Studio agents, in the same way.',
    },
    {
      id: 'pl900-86',
      topic: 'Copilot Studio',
      question:
        'A Copilot Studio agent is asked a general question like "What is the capital of France?" and the maker has not authored a topic for this. The maker enabled "Allow AI to use its own general knowledge" in the agent settings. What response does the user get?',
      options: [
        { id: 'a', text: 'The agent routes the question to a Power Automate flow that searches Bing.' },
        { id: 'b', text: 'The agent escalates to a human agent because no topic matches.' },
        { id: 'c', text: 'The agent uses AI general knowledge to answer the question without a specific knowledge source.' },
        { id: 'd', text: 'The agent replies with a fallback message saying it cannot answer.' },
      ],
      correctId: 'c',
      explanation:
        'When the "Allow ungrounded responses" (AI general knowledge) setting is enabled, the agent can answer questions beyond the configured knowledge sources using the underlying language model\'s general knowledge. Without this, the agent falls back to the Escalate or Fallback topic.',
    },
    {
      id: 'pl900-87',
      topic: 'Copilot Studio',
      question:
        'A maker adds a Dataverse table as a knowledge source in Microsoft Copilot Studio. How does the agent authenticate to access rows in that Dataverse table on behalf of the user?',
      options: [
        { id: 'a', text: 'The agent uses a shared service account with admin rights to Dataverse.' },
        { id: 'b', text: 'The agent uses the agent user\'s Microsoft Entra ID authentication, so users only see records they are permitted to see.' },
        { id: 'c', text: 'All Dataverse records are anonymously accessible when used as a knowledge source.' },
        { id: 'd', text: 'The agent uses an API key stored in Azure Key Vault.' },
      ],
      correctId: 'b',
      explanation:
        'Dataverse knowledge sources authenticate using the Microsoft Entra ID of the user who is talking to the agent. This means that row-level security in Dataverse is respected: the agent only returns records the user is authorized to see.',
    },
    {
      id: 'pl900-88',
      topic: 'Copilot Studio',
      question:
        'A maker wants to author a new topic in Copilot Studio by describing in natural language what the topic should do, rather than building each node manually. Which feature supports this?',
      options: [
        { id: 'a', text: 'The Power Fx formula bar in a canvas app embedded in the agent.' },
        { id: 'b', text: 'Copilot-assisted topic authoring, where the maker describes the topic and Copilot generates the conversational flow.' },
        { id: 'c', text: 'The AI Builder generative builder, which creates topics from uploaded documents.' },
        { id: 'd', text: 'A Power Automate flow that generates topic XML and imports it.' },
      ],
      correctId: 'b',
      explanation:
        'Copilot Studio supports authoring topics using natural language: makers describe what the topic should do and Copilot generates the node structure, messages, and branching. This reduces manual authoring time significantly.',
    },
    {
      id: 'pl900-89',
      topic: 'Copilot Studio',
      question:
        'Which of the following is a valid knowledge source that a Microsoft Copilot Studio agent can use for generative answers?',
      options: [
        { id: 'a', text: 'A Power BI workspace containing sales reports.' },
        { id: 'b', text: 'A public website URL that the agent searches using Bing.' },
        { id: 'c', text: 'A Power Apps canvas app screen.' },
        { id: 'd', text: 'A Power Automate run history log.' },
      ],
      correctId: 'b',
      explanation:
        'Copilot Studio supports public websites as knowledge sources. The agent searches the specified website URLs using Bing and generates answers from the content. Power BI workspaces, canvas app screens, and flow run histories are not supported knowledge source types for generative answers.',
    },
    {
      id: 'pl900-90',
      topic: 'Copilot Studio',
      question:
        'A Copilot Studio agent is embedded on a customer service portal (Power Pages). A user on the portal asks a question. The agent searches the configured SharePoint knowledge source and returns an answer with a citation. Who can access the SharePoint content that the agent retrieves?',
      options: [
        { id: 'a', text: 'Any anonymous visitor to the portal, because SharePoint knowledge sources are public.' },
        { id: 'b', text: 'Only the maker who configured the agent, for security reasons.' },
        { id: 'c', text: 'The authenticated portal user, because SharePoint knowledge access respects the user\'s Microsoft Entra ID permissions.' },
        { id: 'd', text: 'All portal users, because the agent stores a cached copy of SharePoint content.' },
      ],
      correctId: 'c',
      explanation:
        'SharePoint knowledge sources authenticate using the user\'s Microsoft Entra ID. The agent only surfaces SharePoint content the signed-in user is permitted to access. Anonymous users cannot reach SharePoint knowledge sources because authentication is required.',
    },

    // ── AI Builder & Copilot (10 questions) ───────────────────────────────────
    {
      id: 'pl900-91',
      topic: 'AI Builder',
      question:
        'A maker wants to use an AI Builder model in a canvas app to read text from photographs of handwritten notes. Which prebuilt AI Builder model should they use?',
      options: [
        { id: 'a', text: 'Prediction model, to forecast likely note content.' },
        { id: 'b', text: 'Sentiment analysis model, to determine note tone.' },
        { id: 'c', text: 'Text recognition model, to extract printed or handwritten text from images.' },
        { id: 'd', text: 'Document processing model, to extract specific form fields from structured documents.' },
      ],
      correctId: 'c',
      explanation:
        'The AI Builder text recognition (OCR) prebuilt model reads printed and handwritten text from images and PDFs. Document processing extracts predefined fields from structured forms such as invoices. Sentiment analysis evaluates text sentiment, and prediction forecasts outcomes.',
    },
    {
      id: 'pl900-92',
      topic: 'AI Builder',
      question:
        'A Power Automate cloud flow adds an AI Builder action to analyze customer feedback emails and determine whether each email is positive, negative, or neutral. Which AI Builder capability is being used?',
      options: [
        { id: 'a', text: 'Text recognition, to read the email body text.' },
        { id: 'b', text: 'Sentiment analysis, to classify the emotional tone of each email.' },
        { id: 'c', text: 'Entity extraction, to identify key phrases in the email.' },
        { id: 'd', text: 'Prediction, to forecast which customers will churn based on feedback.' },
      ],
      correctId: 'b',
      explanation:
        'The AI Builder sentiment analysis model evaluates text and classifies it as positive, negative, or neutral, at both the document and sentence level. Text recognition reads text from images, entity extraction identifies named entities such as people and places, and prediction uses historical data for forecasting.',
    },
    {
      id: 'pl900-93',
      topic: 'AI Builder',
      question:
        'A company builds a custom AI Builder document processing model trained on their specific invoice format. After training, they use it in Power Automate to process incoming invoices. What distinguishes a custom model from a prebuilt model?',
      options: [
        { id: 'a', text: 'Custom models are free; prebuilt models require AI Builder credits.' },
        { id: 'b', text: 'Custom models are trained on the maker\'s own data to recognize domain-specific patterns; prebuilt models are ready to use without training.' },
        { id: 'c', text: 'Prebuilt models work in Power Automate; custom models only work in Power Apps.' },
        { id: 'd', text: 'Custom models require C# code to deploy; prebuilt models are no-code.' },
      ],
      correctId: 'b',
      explanation:
        'Custom AI Builder models are trained on the maker\'s own labeled data to recognize organization-specific patterns, such as a unique invoice layout. Prebuilt models are general-purpose and ready to use immediately. Both can be used in Power Apps and Power Automate, and both use AI Builder credits.',
    },
    {
      id: 'pl900-94',
      topic: 'AI Builder',
      question:
        'A Contoso maker adds AI Builder capability to a Power Automate flow so that supplier invoices received as email attachments are automatically read, key fields extracted, and a Dataverse record created. Which two Power Platform services are working together here?',
      options: [
        { id: 'a', text: 'Power BI and Microsoft Copilot Studio.' },
        { id: 'b', text: 'Power Automate and AI Builder.' },
        { id: 'c', text: 'Power Apps and Power Pages.' },
        { id: 'd', text: 'Microsoft Dataverse and Power BI.' },
      ],
      correctId: 'b',
      explanation:
        'This scenario uses Power Automate to orchestrate the flow (triggered by email) and AI Builder to extract invoice data. AI Builder is integrated directly into Power Automate as an action. The extracted data is then written to Dataverse by a subsequent Dataverse action in the flow.',
    },
    {
      id: 'pl900-95',
      topic: 'AI Builder',
      question:
        'A sales manager wants to use AI Builder to predict whether a deal will be won or lost based on past opportunity data in Dataverse, such as deal size, industry, and sales stage. Which AI Builder model type does this require?',
      options: [
        { id: 'a', text: 'A prebuilt sentiment analysis model.' },
        { id: 'b', text: 'A custom prediction model trained on historical win/loss outcomes.' },
        { id: 'c', text: 'A prebuilt text recognition model.' },
        { id: 'd', text: 'A prebuilt document processing model.' },
      ],
      correctId: 'b',
      explanation:
        'Prediction is a custom AI Builder model type. The maker trains it using historical Dataverse data with known outcomes (won/lost) and feature columns (deal size, industry, stage). The trained model then scores new records with a probability prediction.',
    },
    {
      id: 'pl900-96',
      topic: 'AI Builder',
      question:
        'A maker uses Copilot in Power Apps Studio to describe an app in natural language: "Create an app to track equipment maintenance with fields for equipment name, last service date, and technician." What does Copilot do in response?',
      options: [
        { id: 'a', text: 'Opens a blank canvas app with no controls.' },
        { id: 'b', text: 'Generates a Dataverse table with the described columns and builds a starter canvas app connected to it.' },
        { id: 'c', text: 'Creates a Copilot Studio agent that answers maintenance questions.' },
        { id: 'd', text: 'Builds a Power BI report with a maintenance tracking visual.' },
      ],
      correctId: 'b',
      explanation:
        'Copilot in Power Apps Studio can generate a Dataverse table from a natural language description and scaffold a starter canvas app with screens and forms connected to that table. This dramatically reduces initial setup time for app makers.',
    },
    {
      id: 'pl900-97',
      topic: 'AI Builder',
      question:
        'Which AI Builder prebuilt model can extract the total amount, vendor name, and line items from a scanned purchase order that the organization has never used to train a model?',
      options: [
        { id: 'a', text: 'Custom prediction model, trained on historical purchase orders.' },
        { id: 'b', text: 'Prebuilt invoice processing model, which extracts common invoice and purchase order fields without custom training.' },
        { id: 'c', text: 'Text recognition model, which reads all raw text from the document.' },
        { id: 'd', text: 'Sentiment analysis model, which evaluates purchase order language tone.' },
      ],
      correctId: 'b',
      explanation:
        'AI Builder includes a prebuilt invoice processing model that can extract standard fields such as vendor name, invoice number, total amount, and line items from invoices and purchase orders without custom training. Text recognition reads raw text but does not identify specific semantic fields.',
    },
    {
      id: 'pl900-98',
      topic: 'AI Builder',
      question:
        'Copilot is embedded in Power Automate and a maker describes a new flow in natural language. Copilot generates the flow. Where in the Power Automate workflow does this Copilot capability appear?',
      options: [
        { id: 'a', text: 'In the Power Platform admin center, under environment settings.' },
        { id: 'b', text: 'On the Power Automate home page and in the flow designer, where the maker types a description and Copilot builds or modifies the flow.' },
        { id: 'c', text: 'In Microsoft Copilot Studio, which pushes completed flows to Power Automate.' },
        { id: 'd', text: 'In Power BI Desktop, where DAX measures are auto-generated for the flow.' },
      ],
      correctId: 'b',
      explanation:
        'Copilot in Power Automate is available on the home page for generating new flows and within the flow designer for creating and modifying flows using natural language. It is a native capability of Power Automate, not a Copilot Studio feature.',
    },
    {
      id: 'pl900-99',
      topic: 'AI Builder',
      question:
        'A maker uses the AI Builder entity extraction prebuilt model in a cloud flow to process customer support emails. The model identifies product names and issue types mentioned in the email body. What does entity extraction do?',
      options: [
        { id: 'a', text: 'Determines whether the email is positive or negative in sentiment.' },
        { id: 'b', text: 'Extracts specific named categories of information, such as product names and issue types, from unstructured text.' },
        { id: 'c', text: 'Reads text from a scanned image of the email.' },
        { id: 'd', text: 'Predicts which support agent should handle the email based on history.' },
      ],
      correctId: 'b',
      explanation:
        'Entity extraction identifies and extracts named entities from unstructured text, such as product names, organizations, dates, or custom-defined categories. Sentiment analysis evaluates tone, text recognition reads image text, and prediction forecasts outcomes from historical data.',
    },
    {
      id: 'pl900-100',
      topic: 'AI Builder',
      question:
        'A maker builds a Power Apps canvas app for a field technician. When the technician photographs a nameplate on a machine, the app must instantly display the serial number read from the photo. Which AI Builder capability enables this in the canvas app?',
      options: [
        { id: 'a', text: 'Sentiment analysis, to evaluate the condition of the machine from the image.' },
        { id: 'b', text: 'Prediction, to forecast the machine\'s failure date based on the photo.' },
        { id: 'c', text: 'Text recognition, to extract printed text including the serial number from the photograph.' },
        { id: 'd', text: 'Document processing, to extract form fields from a structured service record.' },
      ],
      correctId: 'c',
      explanation:
        'The AI Builder text recognition prebuilt model uses OCR to extract printed and handwritten text from images. It is available as a control in canvas apps, allowing real-time text extraction from camera captures. Document processing works on structured forms with predefined fields, not arbitrary photos of physical nameplates.',
    },
  ],
}
