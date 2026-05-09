import type { ExamSet } from '../types'

export const ms900: ExamSet = {
  examCode: 'MS-900',
  examName: 'Microsoft 365 Fundamentals',
  description:
    'One hundred practice questions at the level of the official MS-900 exam. Cloud concepts, Microsoft 365 apps and services, security, compliance, privacy, and trust in Microsoft 365, and Microsoft 365 pricing, licensing, and support.',
  ceCourseSlug: 'microsoft-365-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/microsoft-365-fundamentals',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'ms900-1',
      topic: 'Licensing',
      question:
        "A retail chain has 800 frontline workers who only need email, Teams chat, and a web version of Word and Excel on shared devices. Which Microsoft 365 plan fits at the lowest per-user cost?",
      options: [
        { id: 'a', text: 'Microsoft 365 Business Standard.' },
        { id: 'b', text: 'Microsoft 365 E3.' },
        { id: 'c', text: 'Microsoft 365 F3.' },
        { id: 'd', text: 'Microsoft 365 Apps for Business.' },
      ],
      correctId: 'c',
      explanation:
        "Microsoft 365 F3 is the frontline plan with web and mobile Office apps, Teams, and a 2 GB mailbox at the lowest per-user price. Business Standard caps at 300 seats and includes the desktop apps, which the workers do not need.",
    },
    {
      id: 'ms900-2',
      topic: 'Cloud Concepts',
      question:
        "A finance director wants to move from large upfront server purchases to a subscription where the bill scales with the number of users. Which cloud benefit does this describe?",
      options: [
        { id: 'a', text: 'High availability.' },
        { id: 'b', text: 'Capital expenditure model.' },
        { id: 'c', text: 'Operating expenditure model.' },
        { id: 'd', text: 'Disaster recovery.' },
      ],
      correctId: 'c',
      explanation:
        "A subscription that varies with usage is an operating expenditure (OpEx) model. Capital expenditure (CapEx) means paying upfront for assets the company owns.",
    },
    {
      id: 'ms900-3',
      topic: 'Cloud Models',
      question:
        "Microsoft 365 is delivered as a finished application that the customer signs into through a browser or app. Which cloud service model does this match?",
      options: [
        { id: 'a', text: 'Infrastructure as a Service.' },
        { id: 'b', text: 'Platform as a Service.' },
        { id: 'c', text: 'Software as a Service.' },
        { id: 'd', text: 'Function as a Service.' },
      ],
      correctId: 'c',
      explanation:
        "Microsoft 365 is SaaS: the customer consumes a finished app and Microsoft runs the OS, runtime, and code. PaaS exposes a development platform, which Microsoft 365 does not.",
    },
    {
      id: 'ms900-4',
      topic: 'Microsoft Teams',
      question:
        "A company wants every meeting to record automatically, generate transcripts, and produce a recap with action items. Which add-on or plan provides AI-generated meeting recaps inside Teams?",
      options: [
        { id: 'a', text: 'Microsoft Teams Phone Standard.' },
        { id: 'b', text: 'Microsoft Teams Rooms Basic.' },
        { id: 'c', text: 'Microsoft Copilot for Microsoft 365.' },
        { id: 'd', text: 'Microsoft Stream classic.' },
      ],
      correctId: 'c',
      explanation:
        "Copilot for Microsoft 365 powers AI recap and action items in Teams meetings. Teams Phone is for PSTN calling and does not generate AI summaries.",
    },
    {
      id: 'ms900-5',
      topic: 'Identity',
      question:
        "Which service is the identity provider for Microsoft 365 user accounts and single sign-on?",
      options: [
        { id: 'a', text: 'Microsoft Purview.' },
        { id: 'b', text: 'Microsoft Intune.' },
        { id: 'c', text: 'Microsoft Defender for Identity.' },
        { id: 'd', text: 'Microsoft Entra ID.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Entra ID is the cloud identity service behind Microsoft 365 sign-in and SSO. Intune manages devices, not identities.",
    },
    {
      id: 'ms900-6',
      topic: 'Licensing',
      question:
        "A company has 450 knowledge workers and wants the desktop Office apps installed on up to five devices per user, plus Exchange, OneDrive, and SharePoint. Business Standard has been suggested. What is the issue?",
      options: [
        { id: 'a', text: 'Business Standard does not include the desktop apps.' },
        { id: 'b', text: 'Business Standard is a perpetual licence and not sold by subscription.' },
        { id: 'c', text: 'Business Standard does not include Exchange Online.' },
        { id: 'd', text: 'Business plans cap at 300 users, so 450 users need an Enterprise plan such as E3.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft 365 Business plans are limited to 300 seats per tenant. With 450 users the company needs an Enterprise plan such as Microsoft 365 E3.",
    },
    {
      id: 'ms900-7',
      topic: 'OneDrive vs SharePoint',
      question:
        "Which statement best describes the difference between OneDrive and SharePoint document libraries in Microsoft 365?",
      options: [
        { id: 'a', text: 'OneDrive supports versioning; SharePoint does not.' },
        { id: 'b', text: 'OneDrive stores files only in the browser cache; SharePoint stores them in the cloud.' },
        { id: 'c', text: 'SharePoint is only available in E5; OneDrive is in every plan.' },
        { id: 'd', text: 'OneDrive is for personal files tied to one user; SharePoint libraries belong to a site shared by a team.' },
      ],
      correctId: 'd',
      explanation:
        "OneDrive is a personal storage location tied to a single account; SharePoint libraries live inside team sites that multiple people share. Both store in the cloud and both keep version history.",
    },
    {
      id: 'ms900-8',
      topic: 'Security',
      question:
        "Which Microsoft Defender product scans email attachments and links for malware and phishing before they reach the mailbox?",
      options: [
        { id: 'a', text: 'Microsoft Defender for Endpoint.' },
        { id: 'b', text: 'Microsoft Defender for Identity.' },
        { id: 'c', text: 'Microsoft Defender for Office 365.' },
        { id: 'd', text: 'Microsoft Defender for Cloud Apps.' },
      ],
      correctId: 'c',
      explanation:
        "Defender for Office 365 inspects mail flow, attachments, and URLs through Safe Attachments and Safe Links. Defender for Endpoint protects devices, not the mail flow.",
    },
    {
      id: 'ms900-9',
      topic: 'Pricing',
      question:
        "A company wants to estimate the monthly Microsoft 365 cost for 250 users on a mix of E3 and E5 before they sign up. Where does an admin do this?",
      options: [
        { id: 'a', text: 'In the Microsoft 365 admin center under Service health.' },
        { id: 'b', text: 'In the Microsoft Purview compliance portal.' },
        { id: 'c', text: 'On the Microsoft 365 plan and pricing pages, or using a partner quote in the Cloud Solution Provider channel.' },
        { id: 'd', text: 'In the Microsoft Defender portal.' },
      ],
      correctId: 'c',
      explanation:
        "Public list prices are on the Microsoft 365 plan pages, and a partner can give a tailored quote through CSP. Service health and the Purview portal are operational tools, not pricing tools.",
    },
    {
      id: 'ms900-10',
      topic: 'Compliance',
      question:
        "A legal team needs to apply a label that encrypts a document and restricts who can open it, no matter where the file is stored. Which feature applies?",
      options: [
        { id: 'a', text: 'Retention policies.' },
        { id: 'b', text: 'eDiscovery holds.' },
        { id: 'c', text: 'Conditional Access.' },
        { id: 'd', text: 'Sensitivity labels in Microsoft Purview Information Protection.' },
      ],
      correctId: 'd',
      explanation:
        "Sensitivity labels can encrypt a file and enforce usage rights that travel with the document. Retention policies control how long content is kept, not who can read it.",
    },
    {
      id: 'ms900-11',
      topic: 'Microsoft Viva',
      question:
        "A people team wants to run pulse surveys and analyse employee sentiment over time. Which Microsoft Viva module fits?",
      options: [
        { id: 'a', text: 'Microsoft Viva Connections.' },
        { id: 'b', text: 'Microsoft Viva Topics.' },
        { id: 'c', text: 'Microsoft Viva Learning.' },
        { id: 'd', text: 'Microsoft Viva Glint.' },
      ],
      correctId: 'd',
      explanation:
        "Viva Glint is built for engagement surveys and sentiment analytics. Viva Connections is the company intranet experience; Learning curates training content.",
    },
    {
      id: 'ms900-12',
      topic: 'Support',
      question:
        "A new tenant has 200 seats and wants help moving mailboxes from on-premises Exchange to Exchange Online at no extra cost. Which Microsoft service covers this?",
      options: [
        { id: 'a', text: 'Microsoft Premier Support.' },
        { id: 'b', text: 'Microsoft Unified Support.' },
        { id: 'c', text: 'FastTrack for Microsoft 365.' },
        { id: 'd', text: 'Microsoft 365 Lighthouse.' },
      ],
      correctId: 'c',
      explanation:
        "FastTrack is included with eligible Microsoft 365 subscriptions of 150 or more seats and helps customers deploy and migrate. Unified Support is paid and covers ongoing reactive support.",
    },
    {
      id: 'ms900-13',
      topic: 'Cloud Concepts',
      question:
        "A company keeps a private datacenter for sensitive data and uses Microsoft 365 for productivity. Which cloud deployment model does this combination represent?",
      options: [
        { id: 'a', text: 'Public cloud only.' },
        { id: 'b', text: 'Private cloud only.' },
        { id: 'c', text: 'Hybrid cloud.' },
        { id: 'd', text: 'Community cloud.' },
      ],
      correctId: 'c',
      explanation:
        "Combining on-premises (private) infrastructure with public cloud services is a hybrid cloud model. A pure public model would have no on-premises systems.",
    },
    {
      id: 'ms900-14',
      topic: 'Exchange Online',
      question:
        "A user on Microsoft 365 E3 asks how big their mailbox can be. What is the standard mailbox size for E3?",
      options: [
        { id: 'a', text: '2 GB.' },
        { id: 'b', text: '50 GB.' },
        { id: 'c', text: '100 GB.' },
        { id: 'd', text: 'Unlimited.' },
      ],
      correctId: 'c',
      explanation:
        "Microsoft 365 E3 includes a 100 GB primary mailbox in Exchange Online. Frontline plans like F3 cap mailboxes at 2 GB.",
    },
    {
      id: 'ms900-15',
      topic: 'Microsoft Loop',
      question:
        "A team wants live components such as a checklist or table that stay in sync across Teams chats, Outlook emails, and Word documents. Which Microsoft 365 product provides those portable, real-time components?",
      options: [
        { id: 'a', text: 'Microsoft Loop.' },
        { id: 'b', text: 'Microsoft Whiteboard.' },
        { id: 'c', text: 'Microsoft Forms.' },
        { id: 'd', text: 'Microsoft Lists.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Loop provides components that stay in sync across Teams, Outlook, and Word. Whiteboard is a free-form drawing canvas, not a sync layer for tables and lists.",
    },
    {
      id: 'ms900-16',
      topic: 'Zero Trust',
      question:
        "Which statement matches the Zero Trust principle of verifying every request explicitly?",
      options: [
        { id: 'a', text: 'Trust devices on the corporate LAN by default.' },
        { id: 'b', text: 'Rely on perimeter firewalls as the main control.' },
        { id: 'c', text: 'Allow unrestricted access once a user has signed in.' },
        { id: 'd', text: 'Always authenticate and authorise based on all available signals such as identity, device health, and location.' },
      ],
      correctId: 'd',
      explanation:
        "Verify explicitly means evaluating every request against multiple signals before granting access. Trusting the network perimeter is the opposite of Zero Trust.",
    },
    {
      id: 'ms900-17',
      topic: 'Conditional Access',
      question:
        "An admin wants to require multifactor authentication only when users sign in from outside the corporate network. Which feature in Microsoft Entra ID applies the rule?",
      options: [
        { id: 'a', text: 'Identity Protection risk policy.' },
        { id: 'b', text: 'Privileged Identity Management.' },
        { id: 'c', text: 'Self-service password reset.' },
        { id: 'd', text: 'Conditional Access policy.' },
      ],
      correctId: 'd',
      explanation:
        "A Conditional Access policy can require MFA based on signals like network location. Privileged Identity Management is for time-bound role assignments, not sign-in rules.",
    },
    {
      id: 'ms900-18',
      topic: 'Licensing',
      question:
        "Which feature is included in Microsoft 365 E5 but not in E3?",
      options: [
        { id: 'a', text: 'Exchange Online with a 100 GB mailbox.' },
        { id: 'b', text: 'Microsoft 365 Apps for Enterprise.' },
        { id: 'c', text: 'Microsoft Defender for Office 365 Plan 2 and Microsoft Purview eDiscovery Premium.' },
        { id: 'd', text: 'OneDrive with 1 TB of storage.' },
      ],
      correctId: 'c',
      explanation:
        "E5 adds Defender for Office 365 P2, Defender for Endpoint P2, Defender for Identity, Defender for Cloud Apps, eDiscovery Premium, Power BI Pro, and Audio Conferencing on top of E3. The other items are in E3 already.",
    },
    {
      id: 'ms900-19',
      topic: 'Service Health',
      question:
        "Where does an admin go to see if Microsoft is currently investigating an issue affecting Exchange Online for their tenant?",
      options: [
        { id: 'a', text: 'Service Trust Portal.' },
        { id: 'b', text: 'Microsoft Purview compliance portal.' },
        { id: 'c', text: 'Microsoft 365 admin center, Message center.' },
        { id: 'd', text: 'Microsoft 365 admin center, Service health.' },
      ],
      correctId: 'd',
      explanation:
        "Service health shows live incidents and advisories that affect the tenant. The Message center publishes upcoming changes, not live incidents.",
    },
    {
      id: 'ms900-20',
      topic: 'Microsoft Purview',
      question:
        "A compliance officer wants a single dashboard with a score that reflects the tenant compliance posture and recommended improvement actions. Which tool fits?",
      options: [
        { id: 'a', text: 'Microsoft Secure Score.' },
        { id: 'b', text: 'Service Trust Portal.' },
        { id: 'c', text: 'Compliance Manager in Microsoft Purview.' },
        { id: 'd', text: 'Microsoft 365 admin center, Reports.' },
      ],
      correctId: 'c',
      explanation:
        "Compliance Manager scores compliance posture against frameworks like ISO 27001 and proposes improvement actions. Secure Score covers security configuration, not compliance frameworks.",
    },
    {
      id: 'ms900-21',
      topic: 'Cloud Concepts',
      question:
        "A startup chooses a public cloud SaaS suite for collaboration to avoid running its own datacenter. Which benefit best describes this decision?",
      options: [
        { id: 'a', text: 'A capital expenditure model.' },
        { id: 'b', text: 'Full control over the physical hardware.' },
        { id: 'c', text: 'No shared responsibility for data.' },
        { id: 'd', text: 'Reduced focus on undifferentiated infrastructure work.' },
      ],
      correctId: 'd',
      explanation:
        "Choosing SaaS frees the team from running infrastructure that does not differentiate the business. The customer still owns data responsibility under the shared responsibility model.",
    },
    {
      id: 'ms900-22',
      topic: 'Teams',
      question:
        "A small office wants Microsoft Teams to make and receive calls to standard phone numbers. Which add-on is required on top of a Teams licence?",
      options: [
        { id: 'a', text: 'Microsoft Teams Rooms.' },
        { id: 'b', text: 'Microsoft 365 Audio Conferencing.' },
        { id: 'c', text: 'Microsoft Teams Phone with a Calling Plan or Direct Routing.' },
        { id: 'd', text: 'Microsoft Teams Premium.' },
      ],
      correctId: 'c',
      explanation:
        "Teams Phone gives users a phone number and PSTN calling, paired with a Microsoft Calling Plan or a Direct Routing setup. Audio Conferencing is for dial-in to meetings, not for direct calls.",
    },
    {
      id: 'ms900-23',
      topic: 'Microsoft 365 Apps',
      question:
        "What is the difference between Microsoft 365 Apps for Business and Microsoft 365 Apps for Enterprise?",
      options: [
        { id: 'a', text: 'Apps for Business is a perpetual licence; Apps for Enterprise is a subscription.' },
        { id: 'b', text: 'Apps for Business does not include Excel.' },
        { id: 'c', text: 'Apps for Business runs only on Windows; Apps for Enterprise runs on Windows and Mac.' },
        { id: 'd', text: 'Apps for Business is for tenants up to 300 users and lacks some enterprise tools like Group Policy templates and shared computer activation; Apps for Enterprise has no seat cap.' },
      ],
      correctId: 'd',
      explanation:
        "Apps for Business is capped at 300 users and lacks the enterprise deployment and management features. Apps for Enterprise has no seat cap and supports shared computer activation.",
    },
    {
      id: 'ms900-24',
      topic: 'Compliance',
      question:
        "A bank must keep email records for seven years and prevent users from deleting them. Which Microsoft Purview feature applies?",
      options: [
        { id: 'a', text: 'Sensitivity labels.' },
        { id: 'b', text: 'Conditional Access.' },
        { id: 'c', text: 'Insider Risk Management.' },
        { id: 'd', text: 'Retention policy or retention label.' },
      ],
      correctId: 'd',
      explanation:
        "Retention policies and labels keep content for a defined period and block deletion until the period expires. Sensitivity labels handle classification and protection, not retention duration.",
    },
    {
      id: 'ms900-25',
      topic: 'Service Trust Portal',
      question:
        "An auditor asks for the SOC 2 Type 2 report covering Microsoft 365. Where can a customer download it?",
      options: [
        { id: 'a', text: 'Microsoft 365 admin center, Reports.' },
        { id: 'b', text: 'Microsoft Defender portal.' },
        { id: 'c', text: 'Microsoft 365 Roadmap.' },
        { id: 'd', text: 'Microsoft Service Trust Portal.' },
      ],
      correctId: 'd',
      explanation:
        "The Service Trust Portal hosts Microsoft audit reports such as SOC 1, SOC 2, and ISO certifications. The Roadmap describes upcoming features, not audit deliverables.",
    },
    {
      id: 'ms900-26',
      topic: 'Power Platform',
      question:
        "A finance team wants to build a low-code app that lets staff submit and approve expense claims using Microsoft 365 data. Which Power Platform service fits?",
      options: [
        { id: 'a', text: 'Power BI.' },
        { id: 'b', text: 'Power Automate.' },
        { id: 'c', text: 'Power Pages.' },
        { id: 'd', text: 'Power Apps.' },
      ],
      correctId: 'd',
      explanation:
        "Power Apps is the low-code platform for building business apps. Power Automate is for workflows; Power BI is for analytics; Power Pages is for external-facing websites.",
    },
    {
      id: 'ms900-27',
      topic: 'Pricing',
      question:
        "A company signs a one-year Microsoft 365 E3 commitment with monthly billing. Halfway through the year they cut twenty seats. What happens?",
      options: [
        { id: 'a', text: 'They can drop seats freely at any time on a one-year commitment.' },
        { id: 'b', text: 'They have to upgrade to E5 first.' },
        { id: 'c', text: 'The cancellation is automatic and the customer gets a full refund.' },
        { id: 'd', text: 'Seats committed for the full year still bill until the term ends; they can remove seats at renewal.' },
      ],
      correctId: 'd',
      explanation:
        "An annual subscription commits to the agreed seat count for the term, even when paid monthly. Reductions take effect at renewal.",
    },
    {
      id: 'ms900-28',
      topic: 'Microsoft Entra ID',
      question:
        "Which Microsoft Entra ID feature lets an admin require approval and time-bound access for granting the Global Administrator role?",
      options: [
        { id: 'a', text: 'Microsoft Entra Connect.' },
        { id: 'b', text: 'Self-service password reset.' },
        { id: 'c', text: 'Conditional Access.' },
        { id: 'd', text: 'Privileged Identity Management.' },
      ],
      correctId: 'd',
      explanation:
        "Privileged Identity Management enforces just-in-time, approval-gated, and time-bound role activation. Microsoft Entra Connect synchronises on-premises identities, which is unrelated.",
    },
    {
      id: 'ms900-29',
      topic: 'Copilot',
      question:
        "Which prerequisite must a tenant meet before assigning Microsoft Copilot for Microsoft 365 licences to its users?",
      options: [
        { id: 'a', text: 'Users must have a qualifying Microsoft 365 base licence (includes Business Basic, Standard, Premium, E3, E5, F1, F3, A3, A5, Office 365 E1/E3/E5, and Teams Enterprise, among others).' },
        { id: 'b', text: 'Users must already use Microsoft Defender for Endpoint.' },
        { id: 'c', text: 'The tenant must be on the Government Community Cloud High plan.' },
        { id: 'd', text: 'Each user needs Power BI Pro before Copilot can be enabled.' },
      ],
      correctId: 'a',
      explanation:
        "Copilot for Microsoft 365 requires a qualifying base licence. The list includes Microsoft 365 Business Basic, Business Standard, Business Premium, E3, E5, F1, F3, A3, A5; Office 365 E1, E3, E5, F3, A1, A3, A5; and Teams Enterprise — not just Business Standard/Premium and E3/E5. Defender for Endpoint and Power BI Pro are not gating requirements.",
    },
    {
      id: 'ms900-30',
      topic: 'Office for the web',
      question:
        "A consultant who only has a Microsoft 365 F1 licence opens a Word document from a SharePoint site. Where does the document open?",
      options: [
        { id: 'a', text: 'In the desktop version of Word.' },
        { id: 'b', text: 'In Notepad on the local device.' },
        { id: 'c', text: 'In Office for the web (Word in the browser).' },
        { id: 'd', text: 'In a sandboxed Microsoft Loop component.' },
      ],
      correctId: 'c',
      explanation:
        "F1 includes the web versions of Office apps, not the desktop apps. The user opens Word in the browser through Office for the web.",
    },
    {
      id: 'ms900-31',
      topic: 'Cloud Concepts',
      question:
        "Which characteristic of cloud services means resources can be allocated automatically when load increases and removed when load drops?",
      options: [
        { id: 'a', text: 'Reliability.' },
        { id: 'b', text: 'Multi-tenancy.' },
        { id: 'c', text: 'Manageability.' },
        { id: 'd', text: 'Elasticity.' },
      ],
      correctId: 'd',
      explanation:
        "Elasticity is the ability to add and release capacity in response to demand. Reliability is about staying up despite failures.",
    },
    {
      id: 'ms900-32',
      topic: 'SharePoint',
      question:
        "Which Microsoft 365 service is the platform for team intranet sites, document libraries, and pages?",
      options: [
        { id: 'a', text: 'OneDrive for Business.' },
        { id: 'b', text: 'Microsoft Stream.' },
        { id: 'c', text: 'Microsoft Lists.' },
        { id: 'd', text: 'SharePoint Online.' },
      ],
      correctId: 'd',
      explanation:
        "SharePoint Online hosts team sites, libraries, and pages. OneDrive is personal storage that uses SharePoint under the hood but is scoped to one user.",
    },
    {
      id: 'ms900-33',
      topic: 'Defender for Office 365',
      question:
        "Which Defender for Office 365 feature rewrites URLs in incoming email so they can be checked against a threat list at the time of click?",
      options: [
        { id: 'a', text: 'Safe Attachments.' },
        { id: 'b', text: 'Anti-spam policy.' },
        { id: 'c', text: 'Safe Links.' },
        { id: 'd', text: 'Mail flow rules.' },
      ],
      correctId: 'c',
      explanation:
        "Safe Links wraps URLs and re-checks them at click time. Safe Attachments detonates attachments in a sandbox before delivery.",
    },
    {
      id: 'ms900-34',
      topic: 'Licensing',
      question:
        "Which Microsoft 365 plan includes Microsoft Intune, Microsoft Defender for Business, and Conditional Access for a small business of 100 users at one bundled price?",
      options: [
        { id: 'a', text: 'Microsoft 365 Business Basic.' },
        { id: 'b', text: 'Microsoft 365 Business Standard.' },
        { id: 'c', text: 'Microsoft 365 Business Premium.' },
        { id: 'd', text: 'Microsoft 365 Apps for Business.' },
      ],
      correctId: 'c',
      explanation:
        "Business Premium adds Intune, Defender for Business, and Conditional Access on top of the apps and services in Business Standard. Business Basic does not include the desktop apps or device management.",
    },
    {
      id: 'ms900-35',
      topic: 'Microsoft Priva',
      question:
        "Which Microsoft 365 service helps an organisation discover personal data, automate subject rights requests, and manage privacy risks?",
      options: [
        { id: 'a', text: 'Microsoft Entra ID Governance.' },
        { id: 'b', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'c', text: 'Microsoft Purview Data Lifecycle Management.' },
        { id: 'd', text: 'Microsoft Priva.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Priva focuses on privacy: discovering personal data, handling subject rights requests, and reducing privacy risks. Purview Data Lifecycle Management focuses on retention.",
    },
    {
      id: 'ms900-36',
      topic: 'Service Health',
      question:
        "An admin wants advance notice of a planned change such as a new Outlook feature being rolled out next month. Which Microsoft 365 admin center area should they read?",
      options: [
        { id: 'a', text: 'Service health.' },
        { id: 'b', text: 'Reports.' },
        { id: 'c', text: 'Message center.' },
        { id: 'd', text: 'Support requests.' },
      ],
      correctId: 'c',
      explanation:
        "The Message center publishes upcoming changes, including roll-out timelines. Service health shows live incidents that have already started.",
    },
    {
      id: 'ms900-37',
      topic: 'Cloud Concepts',
      question:
        "Which statement about a public cloud is correct?",
      options: [
        { id: 'a', text: 'Resources are owned and operated by the customer in their own datacenter.' },
        { id: 'b', text: 'A public cloud always costs more than running on-premises.' },
        { id: 'c', text: 'A public cloud cannot be used to host workloads with personal data.' },
        { id: 'd', text: 'Multiple customers share the same underlying infrastructure operated by the provider.' },
      ],
      correctId: 'd',
      explanation:
        "A public cloud is multi-tenant infrastructure operated by the provider. Customers retain logical isolation but share physical resources.",
    },
    {
      id: 'ms900-38',
      topic: 'Microsoft Entra ID',
      question:
        "Which Microsoft Entra ID licence tier adds Conditional Access and self-service password reset for cloud and on-premises accounts?",
      options: [
        { id: 'a', text: 'Microsoft Entra ID Free.' },
        { id: 'b', text: 'Microsoft Entra External ID.' },
        { id: 'c', text: 'Microsoft Entra ID P2 only.' },
        { id: 'd', text: 'Microsoft Entra ID P1.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Entra ID P1 includes Conditional Access and SSPR with writeback to on-premises Active Directory. P2 builds on P1 and adds risk-based protection and PIM.",
    },
    {
      id: 'ms900-39',
      topic: 'OneDrive',
      question:
        "How much OneDrive storage does Microsoft 365 Business Standard provide per user by default?",
      options: [
        { id: 'a', text: '5 GB.' },
        { id: 'b', text: '50 GB.' },
        { id: 'c', text: '1 TB.' },
        { id: 'd', text: '10 TB.' },
      ],
      correctId: 'c',
      explanation:
        "Business Standard ships with 1 TB of OneDrive per user. Larger allocations are available on E3 and E5 with admin requests.",
    },
    {
      id: 'ms900-40',
      topic: 'Compliance',
      question:
        "Which Microsoft Purview tool lets a legal team search across mailboxes, SharePoint, OneDrive, and Teams for content related to a case and place it on hold?",
      options: [
        { id: 'a', text: 'Microsoft Purview eDiscovery (Standard or Premium).' },
        { id: 'b', text: 'Microsoft Purview Insider Risk Management.' },
        { id: 'c', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'd', text: 'Microsoft 365 admin center, Reports.' },
      ],
      correctId: 'a',
      explanation:
        "eDiscovery searches across Microsoft 365 workloads and applies legal hold. Insider Risk Management focuses on risky user behaviour, not legal cases.",
    },
    {
      id: 'ms900-41',
      topic: 'Teams Meetings',
      question:
        "Which feature lets external attendees dial into a Teams meeting from a regular phone number?",
      options: [
        { id: 'a', text: 'Microsoft Teams Phone.' },
        { id: 'b', text: 'Microsoft Teams Premium.' },
        { id: 'c', text: 'Microsoft Teams Rooms.' },
        { id: 'd', text: 'Microsoft 365 Audio Conferencing.' },
      ],
      correctId: 'd',
      explanation:
        "Audio Conferencing provides dial-in numbers for Teams meetings. Teams Phone gives users their own phone numbers for one-to-one calling.",
    },
    {
      id: 'ms900-42',
      topic: 'Licensing',
      question:
        "A logistics company wants to give 50 warehouse workers a Microsoft 365 frontline licence with the desktop versions of Word and Excel. Which plan fits?",
      options: [
        { id: 'a', text: 'Microsoft 365 F1.' },
        { id: 'b', text: 'Microsoft 365 F3.' },
        { id: 'c', text: 'Microsoft 365 E3.' },
        { id: 'd', text: 'Office 365 F3.' },
      ],
      correctId: 'c',
      explanation:
        "Microsoft 365 frontline plans (F1, F3) include only the web and mobile Office apps. Desktop apps require a Business or Enterprise plan such as E3.",
    },
    {
      id: 'ms900-43',
      topic: 'Cloud Models',
      question:
        "A startup runs a Linux VM in Azure to host a custom website. Which cloud service model does that VM represent?",
      options: [
        { id: 'a', text: 'Software as a Service.' },
        { id: 'b', text: 'Platform as a Service.' },
        { id: 'c', text: 'Infrastructure as a Service.' },
        { id: 'd', text: 'Function as a Service.' },
      ],
      correctId: 'c',
      explanation:
        "Renting a VM is IaaS: the customer manages the OS and the application stack while Azure runs the hardware. PaaS would hide the OS and runtime from the customer.",
    },
    {
      id: 'ms900-44',
      topic: 'Microsoft 365 Roadmap',
      question:
        "Where does Microsoft publish the public timeline of upcoming Microsoft 365 features and their rollout status?",
      options: [
        { id: 'a', text: 'Service Trust Portal.' },
        { id: 'b', text: 'Microsoft 365 admin center, Service health.' },
        { id: 'c', text: 'Compliance Manager.' },
        { id: 'd', text: 'Microsoft 365 Roadmap.' },
      ],
      correctId: 'd',
      explanation:
        "The Microsoft 365 Roadmap lists features that are in development, rolling out, or launched. The Service Trust Portal hosts compliance reports, not feature timelines.",
    },
    {
      id: 'ms900-45',
      topic: 'Defender for Endpoint',
      question:
        "Which product provides endpoint detection and response on Windows, macOS, iOS, Android, and Linux devices and is included in Microsoft 365 E5?",
      options: [
        { id: 'a', text: 'Microsoft Defender for Identity.' },
        { id: 'b', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'c', text: 'Microsoft Defender for Office 365.' },
        { id: 'd', text: 'Microsoft Defender for Endpoint Plan 2.' },
      ],
      correctId: 'd',
      explanation:
        "Defender for Endpoint Plan 2 provides EDR across Windows, macOS, mobile, and Linux and is included in Microsoft 365 E5. Defender for Identity focuses on on-premises Active Directory signals.",
    },
    {
      id: 'ms900-46',
      topic: 'Pricing',
      question:
        "What is the difference between an annual and a monthly Microsoft 365 commitment when billed monthly?",
      options: [
        { id: 'a', text: 'There is no price difference between the two.' },
        { id: 'b', text: 'Annual is always paid upfront; monthly is always paid quarterly.' },
        { id: 'c', text: 'Monthly always includes Copilot for Microsoft 365.' },
        { id: 'd', text: 'Annual locks in the seat count for the year and is usually cheaper per seat; monthly is more flexible but costs more per seat.' },
      ],
      correctId: 'd',
      explanation:
        "Annual commitments lock the seat count for twelve months and offer a lower per-seat price. Monthly is flexible but priced higher.",
    },
    {
      id: 'ms900-47',
      topic: 'Sensitivity Labels',
      question:
        "An organisation classifies documents as Public, General, Confidential, and Highly Confidential. They want users to apply the right label from a dropdown in Word, Excel, and Outlook. Which feature delivers that experience?",
      options: [
        { id: 'a', text: 'Sensitivity labels in Microsoft Purview Information Protection.' },
        { id: 'b', text: 'Retention labels.' },
        { id: 'c', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'd', text: 'Conditional Access app control.' },
      ],
      correctId: 'a',
      explanation:
        "Sensitivity labels appear as a dropdown in Office apps and can apply encryption and visual markings. Retention labels handle keep-or-delete logic, not classification.",
    },
    {
      id: 'ms900-48',
      topic: 'Microsoft Viva',
      question:
        "A learning lead wants employees to find training content from LinkedIn Learning, Coursera, and an internal LMS inside Teams. Which Viva module fits?",
      options: [
        { id: 'a', text: 'Microsoft Viva Connections.' },
        { id: 'b', text: 'Microsoft Viva Learning.' },
        { id: 'c', text: 'Microsoft Viva Insights.' },
        { id: 'd', text: 'Microsoft Viva Goals.' },
      ],
      correctId: 'b',
      explanation:
        "Viva Learning aggregates training from internal and external sources inside Teams. Viva Insights focuses on personal productivity and wellbeing.",
    },
    {
      id: 'ms900-49',
      topic: 'Cloud Concepts',
      question:
        "Which statement about the shared responsibility model in SaaS is correct?",
      options: [
        { id: 'a', text: 'Microsoft is responsible for both the application and the customer data.' },
        { id: 'b', text: 'The customer manages the OS, runtime, and physical security.' },
        { id: 'c', text: 'Microsoft runs the platform and the application; the customer keeps responsibility for accounts, data, and endpoints.' },
        { id: 'd', text: 'There is no shared responsibility in SaaS.' },
      ],
      correctId: 'c',
      explanation:
        "In SaaS Microsoft runs the stack while the customer keeps responsibility for identities, data, and endpoints. The customer never controls the physical hardware in any model.",
    },
    {
      id: 'ms900-50',
      topic: 'Microsoft Intune',
      question:
        "Which Microsoft service applies device compliance and configuration policies to corporate Windows, macOS, iOS, and Android devices?",
      options: [
        { id: 'a', text: 'Microsoft Purview.' },
        { id: 'b', text: 'Microsoft Defender for Endpoint.' },
        { id: 'c', text: 'Microsoft Entra ID Governance.' },
        { id: 'd', text: 'Microsoft Intune.' },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Intune handles cross-platform mobile device and application management. Defender for Endpoint handles threat detection on devices that Intune may also manage.",
    },
    {
      id: 'ms900-51',
      topic: 'Licensing',
      question:
        "A company on Microsoft 365 Business Standard wants to add ten more seats. Where does an admin do this?",
      options: [
        { id: 'a', text: 'In the Microsoft Defender portal.' },
        { id: 'b', text: 'In the Microsoft 365 admin center, Billing > Your products.' },
        { id: 'c', text: 'In the Service Trust Portal.' },
        { id: 'd', text: 'In Microsoft Purview Compliance Manager.' },
      ],
      correctId: 'b',
      explanation:
        "Seat counts are managed under Billing > Your products in the Microsoft 365 admin center. The other portals are not for licence management.",
    },
    {
      id: 'ms900-52',
      topic: 'Teams Rooms',
      question:
        "A company is fitting out twenty meeting rooms with Teams-certified video bars. Which licence is intended for those shared room devices?",
      options: [
        { id: 'a', text: 'Microsoft Teams Premium per user.' },
        { id: 'b', text: 'Microsoft Teams Rooms Basic or Pro.' },
        { id: 'c', text: 'Microsoft 365 F3.' },
        { id: 'd', text: 'Microsoft 365 Apps for Business.' },
      ],
      correctId: 'b',
      explanation:
        "Teams Rooms Basic and Pro are licences for shared room hardware, with Pro adding management and AI-driven meeting features. Per-user licences do not cover shared room devices.",
    },
    {
      id: 'ms900-53',
      topic: 'Compliance',
      question:
        "A company wants to detect when a user emails a credit card number externally and either warn the sender or block the email. Which Microsoft Purview feature does this?",
      options: [
        { id: 'a', text: 'Data Loss Prevention.' },
        { id: 'b', text: 'Insider Risk Management.' },
        { id: 'c', text: 'eDiscovery Standard.' },
        { id: 'd', text: 'Communication Compliance.' },
      ],
      correctId: 'a',
      explanation:
        "Data Loss Prevention detects sensitive content like credit card numbers and applies actions such as warn or block. Insider Risk Management profiles user behaviour patterns over time.",
    },
    {
      id: 'ms900-54',
      topic: 'Microsoft Entra ID',
      question:
        "Which Microsoft Entra ID feature lets external partners sign in to a SharePoint site with their own work account, without a separate password?",
      options: [
        { id: 'a', text: 'Microsoft Entra B2B collaboration.' },
        { id: 'b', text: 'Microsoft Entra ID Protection.' },
        { id: 'c', text: 'Self-service password reset.' },
        { id: 'd', text: 'Microsoft Entra Connect.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Entra B2B invites guests who sign in with their own home tenant credentials. Entra Connect synchronises on-premises identities into the cloud.",
    },
    {
      id: 'ms900-55',
      topic: 'Cloud Models',
      question:
        "A government agency needs a cloud where only public-sector tenants share the infrastructure. Which deployment model is that?",
      options: [
        { id: 'a', text: 'Public cloud.' },
        { id: 'b', text: 'Hybrid cloud.' },
        { id: 'c', text: 'Community cloud.' },
        { id: 'd', text: 'Private cloud.' },
      ],
      correctId: 'c',
      explanation:
        "A community cloud is shared by organisations with common requirements such as a regulated sector. A pure public cloud has no such tenant restriction.",
    },
    {
      id: 'ms900-56',
      topic: 'Licensing',
      question:
        "Which subscription model best describes Microsoft 365: a customer pays per user per month for ongoing access to the service, with updates included?",
      options: [
        { id: 'a', text: 'Perpetual licence.' },
        { id: 'b', text: 'One-off enterprise agreement only.' },
        { id: 'c', text: 'Subscription licence.' },
        { id: 'd', text: 'Open source licence.' },
      ],
      correctId: 'c',
      explanation:
        "Microsoft 365 is a subscription where customers pay per user per month and receive updates. Office LTSC is the perpetual offering; it is sold differently.",
    },
    {
      id: 'ms900-57',
      topic: 'Copilot',
      question:
        "Which statement about Microsoft Copilot for Microsoft 365 is correct?",
      options: [
        { id: 'a', text: "Copilot uses customer data from Microsoft 365 only when the user explicitly asks, and tenant data does not train the foundation model." },
        { id: 'b', text: "Copilot trains the underlying foundation model on every customer mailbox by default." },
        { id: 'c', text: 'Copilot stores all responses on the device with no service-side processing.' },
        { id: 'd', text: 'Copilot is an on-premises product that does not connect to the cloud.' },
      ],
      correctId: 'a',
      explanation:
        "Copilot uses tenant data through Microsoft Graph at request time and Microsoft does not use that tenant data to train the foundation models. The other statements misrepresent the product.",
    },
    {
      id: 'ms900-58',
      topic: 'Microsoft Defender',
      question:
        "Which Defender product detects suspicious sign-in patterns originating from on-premises Active Directory, such as pass-the-hash or pass-the-ticket?",
      options: [
        { id: 'a', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'b', text: 'Microsoft Defender for Identity.' },
        { id: 'c', text: 'Microsoft Defender for Endpoint.' },
        { id: 'd', text: 'Microsoft Defender for Office 365.' },
      ],
      correctId: 'b',
      explanation:
        "Defender for Identity reads on-premises Active Directory signals to detect lateral-movement attacks. Defender for Cloud Apps focuses on SaaS application traffic.",
    },
    {
      id: 'ms900-59',
      topic: 'OneDrive',
      question:
        "Which OneDrive feature lets a user keep files only in the cloud while still seeing them in File Explorer, downloading them on demand?",
      options: [
        { id: 'a', text: 'OneDrive Files On-Demand.' },
        { id: 'b', text: 'OneDrive Personal Vault.' },
        { id: 'c', text: 'OneDrive Known Folder Move.' },
        { id: 'd', text: 'OneDrive Differential Sync.' },
      ],
      correctId: 'a',
      explanation:
        "Files On-Demand shows cloud files in File Explorer and downloads them when opened. Personal Vault is an extra-protected folder, not a sync mode.",
    },
    {
      id: 'ms900-60',
      topic: 'Service Level Agreement',
      question:
        "What does a Microsoft 365 financially backed SLA provide if uptime drops below the target during a month?",
      options: [
        { id: 'a', text: 'Cash refund of the full annual subscription.' },
        { id: 'b', text: 'A service credit on the affected subscription based on the downtime measured.' },
        { id: 'c', text: 'Automatic upgrade to E5.' },
        { id: 'd', text: 'No remedy at all.' },
      ],
      correctId: 'b',
      explanation:
        "Below-target months trigger service credits proportional to the impact. Microsoft does not refund full annual subscriptions for an SLA miss.",
    },
    {
      id: 'ms900-61',
      topic: 'Microsoft 365 Apps',
      question:
        "An IT team is comparing Microsoft 365 Apps for Enterprise to perpetual Office LTSC. Which statement is correct?",
      options: [
        { id: 'a', text: 'Both products receive new features at the same time.' },
        { id: 'b', text: 'Office LTSC is a one-time purchase that gets only security updates; Apps for Enterprise is a subscription that receives feature updates as long as it is paid.' },
        { id: 'c', text: 'Office LTSC includes Microsoft Teams.' },
        { id: 'd', text: 'Apps for Enterprise has no support past three years.' },
      ],
      correctId: 'b',
      explanation:
        "Office LTSC is a perpetual licence that does not get new features. Apps for Enterprise gets continuous feature updates as part of the subscription.",
    },
    {
      id: 'ms900-62',
      topic: 'Microsoft Entra ID',
      question:
        "An admin enables passwordless sign-in with Microsoft Authenticator and FIDO2 keys for staff. Which Microsoft Entra ID capability does this rely on?",
      options: [
        { id: 'a', text: 'Authentication methods policy.' },
        { id: 'b', text: 'Application proxy.' },
        { id: 'c', text: 'Microsoft Entra Domain Services.' },
        { id: 'd', text: 'Self-service group management.' },
      ],
      correctId: 'a',
      explanation:
        "The authentication methods policy in Microsoft Entra ID enables and scopes passwordless options like Authenticator and FIDO2. Application proxy publishes on-premises web apps and is unrelated.",
    },
    {
      id: 'ms900-63',
      topic: 'Power Platform',
      question:
        "Which Power Platform service automates repetitive tasks such as moving Outlook attachments to SharePoint when an email arrives?",
      options: [
        { id: 'a', text: 'Power BI.' },
        { id: 'b', text: 'Power Automate.' },
        { id: 'c', text: 'Power Apps.' },
        { id: 'd', text: 'Microsoft Dataverse.' },
      ],
      correctId: 'b',
      explanation:
        "Power Automate runs trigger-based workflows like moving attachments. Power Apps builds interactive apps; Dataverse is the underlying data platform.",
    },
    {
      id: 'ms900-64',
      topic: 'Cloud Concepts',
      question:
        "Which statement best matches the cloud principle of disaster recovery?",
      options: [
        { id: 'a', text: 'Spreading the load across many servers in the same building.' },
        { id: 'b', text: 'Replicating data and services to a different region so workloads can resume after a major outage.' },
        { id: 'c', text: 'Adding RAM to a single VM under heavy load.' },
        { id: 'd', text: 'Encrypting backups on a tape drive.' },
      ],
      correctId: 'b',
      explanation:
        "Disaster recovery is about resuming service in another location after a major incident. Adding RAM is vertical scaling and unrelated.",
    },
    {
      id: 'ms900-65',
      topic: 'Compliance',
      question:
        "Which Microsoft Purview capability looks for risky behaviour like a leaver downloading large amounts of confidential data before their last day?",
      options: [
        { id: 'a', text: 'Insider Risk Management.' },
        { id: 'b', text: 'Sensitivity labels.' },
        { id: 'c', text: 'Microsoft Entra ID Governance.' },
        { id: 'd', text: 'Compliance Manager.' },
      ],
      correctId: 'a',
      explanation:
        "Insider Risk Management profiles user signals to detect risky behaviour like data exfiltration before resignation. Compliance Manager handles compliance posture scoring.",
    },
    {
      id: 'ms900-66',
      topic: 'Licensing',
      question:
        "A non-profit that already has Microsoft 365 E3 wants to add Defender for Office 365 Plan 2 and eDiscovery Premium without moving the entire tenant to E5. What is the most cost-effective path?",
      options: [
        { id: 'a', text: 'Buy Microsoft 365 E5 Compliance and E5 Security add-ons for the affected users.' },
        { id: 'b', text: 'Move every user to Microsoft 365 E5.' },
        { id: 'c', text: 'Buy Office 365 F3 add-ons.' },
        { id: 'd', text: 'Switch to Microsoft 365 Business Premium.' },
      ],
      correctId: 'a',
      explanation:
        "The Microsoft 365 E5 Security and E5 Compliance add-ons sit on top of E3 and bring most of the E5 security and compliance value at lower cost. Business Premium has a 300-seat cap.",
    },
    {
      id: 'ms900-67',
      topic: 'Cloud Concepts',
      question:
        "Which statement about high availability is correct?",
      options: [
        { id: 'a', text: 'High availability guarantees zero downtime.' },
        { id: 'b', text: 'High availability is the ability of a service to keep running through failures of individual components, usually expressed as a percentage of uptime.' },
        { id: 'c', text: 'High availability is the same thing as disaster recovery.' },
        { id: 'd', text: 'High availability only applies to networking, not compute.' },
      ],
      correctId: 'b',
      explanation:
        "High availability keeps a service running through component failures and is expressed as an uptime percentage. Disaster recovery covers larger regional events.",
    },
    {
      id: 'ms900-68',
      topic: 'Microsoft Loop',
      question:
        "An employee shares a Loop component with a project plan inside a Teams chat. A colleague edits it. Where do those changes appear?",
      options: [
        { id: 'a', text: 'Only in the original Teams chat.' },
        { id: 'b', text: 'In every place the component is embedded, in real time.' },
        { id: 'c', text: 'Only after the original author manually publishes the change.' },
        { id: 'd', text: "In a separate static copy on the colleague OneDrive." },
      ],
      correctId: 'b',
      explanation:
        "A Loop component is a single live object referenced from each location, so edits propagate everywhere it is embedded. The other choices describe static or one-way behaviour.",
    },
    {
      id: 'ms900-69',
      topic: 'Microsoft 365 admin center',
      question:
        "Which Microsoft 365 admin center role can manage users and groups but cannot change billing details or assign Global Admin?",
      options: [
        { id: 'a', text: 'Global Administrator.' },
        { id: 'b', text: 'User Administrator.' },
        { id: 'c', text: 'Billing Administrator.' },
        { id: 'd', text: 'Service Support Administrator.' },
      ],
      correctId: 'b',
      explanation:
        "User Administrator manages user and group accounts but cannot edit billing or grant Global Admin. Billing Administrator handles billing only.",
    },
    {
      id: 'ms900-70',
      topic: 'Service Health',
      question:
        "What is the difference between Service health and the Microsoft 365 Roadmap?",
      options: [
        { id: 'a', text: 'Service health shows current incidents and advisories for the tenant; the Roadmap lists upcoming features and rollout status across Microsoft 365.' },
        { id: 'b', text: 'They show the same information in different layouts.' },
        { id: 'c', text: 'Service health lists upcoming features and the Roadmap shows live incidents.' },
        { id: 'd', text: 'Both are available only to Microsoft partners.' },
      ],
      correctId: 'a',
      explanation:
        "Service health is for live incidents; the Roadmap is for upcoming features. The other answers swap or merge the two.",
    },
    {
      id: 'ms900-71',
      topic: 'Pricing',
      question:
        "What does the Microsoft Cost Management feature provide for Microsoft 365 customers?",
      options: [
        { id: 'a', text: 'Detailed cost reporting and budgeting that is mainly an Azure tool; Microsoft 365 cost analysis is in the Microsoft 365 admin center under Billing.' },
        { id: 'b', text: 'A way to reset user passwords for free.' },
        { id: 'c', text: 'A way to assign Conditional Access policies to mailboxes.' },
        { id: 'd', text: 'A way to publish public roadmaps for partners.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Cost Management is mainly an Azure tool. For Microsoft 365 itself, billing analysis lives in the Microsoft 365 admin center under Billing.",
    },
    {
      id: 'ms900-72',
      topic: 'Microsoft Entra ID',
      question:
        "Which statement is correct about Microsoft Entra ID and Active Directory Domain Services?",
      options: [
        { id: 'a', text: 'They are the same product with different names.' },
        { id: 'b', text: 'Active Directory Domain Services is on-premises and uses LDAP and Kerberos; Microsoft Entra ID is a cloud identity service that uses modern protocols like OAuth, OIDC, and SAML.' },
        { id: 'c', text: 'Microsoft Entra ID supports only on-premises authentication.' },
        { id: 'd', text: 'Active Directory Domain Services is the rebrand of Microsoft Entra ID.' },
      ],
      correctId: 'b',
      explanation:
        "AD DS runs on Windows Server and uses LDAP and Kerberos. Microsoft Entra ID is a cloud service that uses modern web protocols.",
    },
    {
      id: 'ms900-73',
      topic: 'Compliance',
      question:
        "A school wants Teams chats between students and teachers to be retained for three years and then deleted. Which feature configures that?",
      options: [
        { id: 'a', text: 'Microsoft Purview retention policy or label scoped to Teams chats.' },
        { id: 'b', text: 'Conditional Access.' },
        { id: 'c', text: 'Microsoft Defender for Office 365.' },
        { id: 'd', text: 'Microsoft Intune compliance policy.' },
      ],
      correctId: 'a',
      explanation:
        "A retention policy or label scoped to Teams chats keeps content for the defined period and deletes it afterwards. Conditional Access is for sign-in, not retention.",
    },
    {
      id: 'ms900-74',
      topic: 'Cloud Concepts',
      question:
        "Which is the most accurate definition of a private cloud?",
      options: [
        { id: 'a', text: 'A cloud service offered free of charge to small businesses.' },
        { id: 'b', text: 'Computing resources operated for a single organisation, often on-premises or by a dedicated provider.' },
        { id: 'c', text: 'A cloud service that mixes on-premises and public cloud workloads.' },
        { id: 'd', text: 'A cloud where every datacenter is in the same country.' },
      ],
      correctId: 'b',
      explanation:
        "A private cloud serves one organisation with dedicated infrastructure. The hybrid model is the one that mixes on-premises and public.",
    },
    {
      id: 'ms900-75',
      topic: 'Defender for Office 365',
      question:
        "Which feature in Defender for Office 365 detonates incoming attachments in a sandbox before delivering them to the recipient?",
      options: [
        { id: 'a', text: 'Safe Links.' },
        { id: 'b', text: 'Anti-phishing policy.' },
        { id: 'c', text: 'Safe Attachments.' },
        { id: 'd', text: 'Mailbox auditing.' },
      ],
      correctId: 'c',
      explanation:
        "Safe Attachments opens attachments in a sandbox and blocks malicious ones before delivery. Safe Links rewrites and re-checks URLs at click time.",
    },
    {
      id: 'ms900-76',
      topic: 'Microsoft 365 admin center',
      question:
        "An admin needs to delegate the ability to file support requests with Microsoft and view service health, but nothing else. Which role fits best?",
      options: [
        { id: 'a', text: 'Billing Administrator.' },
        { id: 'b', text: 'Service Support Administrator.' },
        { id: 'c', text: 'Global Administrator.' },
        { id: 'd', text: 'Compliance Administrator.' },
      ],
      correctId: 'b',
      explanation:
        "Service Support Administrator can file and read support tickets and view service health, with no permission to manage users or billing. Global Admin has all permissions, which is too broad.",
    },
    {
      id: 'ms900-77',
      topic: 'Teams',
      question:
        "Which Teams licence adds AI-driven meeting features such as intelligent recap, advanced webinar tools, and watermarking?",
      options: [
        { id: 'a', text: 'Microsoft Teams Essentials.' },
        { id: 'b', text: 'Microsoft Teams Phone.' },
        { id: 'c', text: 'Microsoft Teams Premium.' },
        { id: 'd', text: 'Microsoft Teams Rooms Basic.' },
      ],
      correctId: 'c',
      explanation:
        "Teams Premium adds intelligent recap, advanced webinar tools, and meeting watermarking. Teams Phone adds PSTN calling, not AI meeting features.",
    },
    {
      id: 'ms900-78',
      topic: 'Cloud Concepts',
      question:
        "Which benefit do customers get from running Microsoft 365 in regional Microsoft datacenters around the world?",
      options: [
        { id: 'a', text: 'Lower latency for users near the region and the ability to keep certain data within a geography for compliance.' },
        { id: 'b', text: 'Microsoft 365 always replicates to every region for free.' },
        { id: 'c', text: 'Customers can pick the exact server inside the region.' },
        { id: 'd', text: 'There is no benefit; all regions perform the same.' },
      ],
      correctId: 'a',
      explanation:
        "Regional datacenters bring the service closer to users and let customers meet data-residency rules. Microsoft does not let customers pick a specific server.",
    },
    {
      id: 'ms900-79',
      topic: 'Licensing',
      question:
        "Which add-on is required to license Copilot for Microsoft 365 for a user who already has Microsoft 365 E3?",
      options: [
        { id: 'a', text: 'Microsoft Copilot for Microsoft 365 add-on, sold per user per month.' },
        { id: 'b', text: 'Microsoft 365 F3 add-on.' },
        { id: 'c', text: 'Microsoft Defender for Endpoint Plan 2.' },
        { id: 'd', text: 'Microsoft Entra ID P2.' },
      ],
      correctId: 'a',
      explanation:
        "Copilot for Microsoft 365 is sold as a per-user-per-month add-on on top of a qualifying base plan such as E3. The other items do not unlock Copilot.",
    },
    {
      id: 'ms900-80',
      topic: 'Microsoft Purview',
      question:
        "Which statement best describes Compliance Manager?",
      options: [
        { id: 'a', text: "It assigns Conditional Access policies." },
        { id: 'b', text: 'It scores the tenant against compliance frameworks and recommends improvement actions, with shared responsibility between Microsoft-managed and customer-managed controls.' },
        { id: 'c', text: 'It blocks risky email attachments.' },
        { id: 'd', text: 'It is the place to download Microsoft audit reports.' },
      ],
      correctId: 'b',
      explanation:
        "Compliance Manager scores tenant compliance and tracks improvement actions across Microsoft-managed and customer-managed controls. Audit reports live in the Service Trust Portal.",
    },
    {
      id: 'ms900-81',
      topic: 'Cloud Concepts',
      question:
        "Which scenario benefits most from cloud agility?",
      options: [
        { id: 'a', text: "An organisation that buys hardware once and runs it for ten years without changes." },
        { id: 'b', text: 'A startup that wants to launch a new pilot service in days and shut it down quickly if it fails.' },
        { id: 'c', text: 'A company that wants to keep its existing on-premises servers without change.' },
        { id: 'd', text: 'A company that prefers paper-based processes.' },
      ],
      correctId: 'b',
      explanation:
        "Agility is the ability to deploy and retire services quickly, which benefits a startup running pilots. Long static hardware cycles are the opposite of agility.",
    },
    {
      id: 'ms900-82',
      topic: 'Support',
      question:
        "Which Microsoft support offering is included by default with every paid Microsoft 365 subscription, with 24x7 access for critical issues?",
      options: [
        { id: 'a', text: 'Standard support included with the subscription.' },
        { id: 'b', text: 'Microsoft Premier Support.' },
        { id: 'c', text: 'Microsoft Unified Support.' },
        { id: 'd', text: 'FastTrack only.' },
      ],
      correctId: 'a',
      explanation:
        "Every paid Microsoft 365 subscription includes standard support with 24x7 access for severity-A issues. Unified and Premier are paid uplifts.",
    },
    {
      id: 'ms900-83',
      topic: 'Microsoft Viva',
      question:
        "Which Viva module gives leaders an OKR platform to set and track organisational objectives, integrated with Teams?",
      options: [
        { id: 'a', text: 'Microsoft Viva Insights.' },
        { id: 'b', text: 'Microsoft Viva Goals.' },
        { id: 'c', text: 'Microsoft Viva Engage.' },
        { id: 'd', text: 'Microsoft Viva Topics.' },
      ],
      correctId: 'b',
      explanation:
        "Viva Goals is the OKR module integrated with Teams. Viva Engage is the community and conversations module formerly known as Yammer.",
    },
    {
      id: 'ms900-84',
      topic: 'Cloud Concepts',
      question:
        "Which advantage of cloud services lets a company pay only for resources actually used, rather than provisioning for peak load year-round?",
      options: [
        { id: 'a', text: 'Geo-redundancy.' },
        { id: 'b', text: 'Consumption-based pricing.' },
        { id: 'c', text: 'High availability.' },
        { id: 'd', text: 'Manageability.' },
      ],
      correctId: 'b',
      explanation:
        "Consumption-based pricing charges only for what is used and avoids paying for idle peak capacity. Geo-redundancy is about data placement, not the cost model.",
    },
    {
      id: 'ms900-85',
      topic: 'Microsoft Entra ID',
      question:
        "An admin wants to block sign-ins from unfamiliar locations and require MFA when a user shows risky behaviour. Which Microsoft Entra ID capability provides this?",
      options: [
        { id: 'a', text: 'Microsoft Entra ID Protection (with risk-based Conditional Access).' },
        { id: 'b', text: 'Microsoft Entra Connect Health.' },
        { id: 'c', text: 'Microsoft Entra Application Proxy.' },
        { id: 'd', text: 'Microsoft Entra Domain Services.' },
      ],
      correctId: 'a',
      explanation:
        "ID Protection scores user and sign-in risk and feeds risk-based Conditional Access policies that can block access or require MFA. This capability requires Microsoft Entra ID P2 (included in Microsoft 365 E5 or available as an add-on) — standard Conditional Access with Entra ID P1 does not include automatic risk detection. Application Proxy publishes on-premises web apps and is unrelated.",
    },
    {
      id: 'ms900-86',
      topic: 'SharePoint',
      question:
        "Which SharePoint feature lets a department publish a portal page with news, links, and embedded documents that everyone in the company can read?",
      options: [
        { id: 'a', text: 'OneDrive for Business.' },
        { id: 'b', text: 'A SharePoint communication site.' },
        { id: 'c', text: 'A private channel in Teams.' },
        { id: 'd', text: 'A Microsoft Loop workspace.' },
      ],
      correctId: 'b',
      explanation:
        "Communication sites are the SharePoint template designed for broadcast-style intranet pages. OneDrive is for personal files.",
    },
    {
      id: 'ms900-87',
      topic: 'Teams Phone',
      question:
        "Which calling option pairs Teams Phone with an existing telecom carrier through a session border controller?",
      options: [
        { id: 'a', text: 'Microsoft Calling Plan.' },
        { id: 'b', text: 'Operator Connect.' },
        { id: 'c', text: 'Direct Routing.' },
        { id: 'd', text: 'Audio Conferencing.' },
      ],
      correctId: 'c',
      explanation:
        "Direct Routing connects Teams Phone to an existing carrier via an SBC. Microsoft Calling Plan uses Microsoft as the telephony provider.",
    },
    {
      id: 'ms900-88',
      topic: 'Compliance',
      question:
        "Which feature lets a customer review and approve Microsoft engineer access to its Microsoft 365 data for support purposes?",
      options: [
        { id: 'a', text: 'Customer Lockbox.' },
        { id: 'b', text: 'Conditional Access.' },
        { id: 'c', text: 'Microsoft Entra B2B.' },
        { id: 'd', text: 'Compliance Manager.' },
      ],
      correctId: 'a',
      explanation:
        "Customer Lockbox makes a Microsoft engineer request for tenant access subject to customer approval. The other features do not gate Microsoft access requests.",
    },
    {
      id: 'ms900-89',
      topic: 'Microsoft 365 Apps',
      question:
        "An IT admin wants to deploy Microsoft 365 Apps for Enterprise from a network location with full control over the Office update channel. Which deployment tool fits?",
      options: [
        { id: 'a', text: 'Office Deployment Tool with a configuration XML file.' },
        { id: 'b', text: 'Microsoft Edge installer.' },
        { id: 'c', text: 'Microsoft Teams Admin Center.' },
        { id: 'd', text: 'Microsoft 365 Lighthouse.' },
      ],
      correctId: 'a',
      explanation:
        "The Office Deployment Tool with a configuration XML controls channel, language, and bitness for Apps for Enterprise. Microsoft 365 Lighthouse is for partners managing customer tenants.",
    },
    {
      id: 'ms900-90',
      topic: 'Cloud Concepts',
      question:
        "Which is the most accurate description of multi-tenancy in Microsoft 365?",
      options: [
        { id: 'a', text: 'Each customer has dedicated physical hardware in a private datacenter.' },
        { id: 'b', text: "Multiple customers share the same Microsoft infrastructure with logical isolation that keeps each tenant data separate." },
        { id: 'c', text: 'Customers can run Microsoft 365 only on their own servers.' },
        { id: 'd', text: 'Tenants always share the same global administrator.' },
      ],
      correctId: 'b',
      explanation:
        "Multi-tenancy means many customers share the same physical infrastructure with logical isolation. Each tenant has its own data boundary and admin team.",
    },
    {
      id: 'ms900-91',
      topic: 'Licensing',
      question:
        "A retail group has 1,000 store associates and 200 head-office staff. Which mix of plans best matches frontline and information workers?",
      options: [
        { id: 'a', text: 'Microsoft 365 F3 for the 1,000 store staff and Microsoft 365 E3 for the 200 head-office staff.' },
        { id: 'b', text: 'Microsoft 365 E5 for everyone.' },
        { id: 'c', text: 'Microsoft 365 Apps for Business for everyone.' },
        { id: 'd', text: 'Microsoft 365 Business Basic for everyone.' },
      ],
      correctId: 'a',
      explanation:
        "F3 is designed for frontline workers, with web apps and a 2 GB mailbox; E3 covers head-office knowledge workers with desktop apps and a 100 GB mailbox. Business plans cap at 300 seats.",
    },
    {
      id: 'ms900-92',
      topic: 'Microsoft 365 Lighthouse',
      question:
        "Which Microsoft service helps managed service providers (MSPs) administer multiple small-business customers from one console?",
      options: [
        { id: 'a', text: 'Microsoft 365 Lighthouse.' },
        { id: 'b', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'c', text: 'Microsoft Intune.' },
        { id: 'd', text: 'Microsoft Purview.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft 365 Lighthouse is the partner console for MSPs managing multiple small-business tenants. Intune is general-purpose device management, not a partner console.",
    },
    {
      id: 'ms900-93',
      topic: 'Cloud Concepts',
      question:
        "Which is the best example of fault tolerance?",
      options: [
        { id: 'a', text: 'Disabling MFA to keep sign-ins simple.' },
        { id: 'b', text: 'Designing a service with redundant components so it keeps running when a single component fails.' },
        { id: 'c', text: 'Storing only one copy of every file to save money.' },
        { id: 'd', text: 'Encrypting backups with a customer key.' },
      ],
      correctId: 'b',
      explanation:
        "Fault tolerance is about surviving component failures through redundancy. Encryption is a security control, unrelated to fault tolerance.",
    },
    {
      id: 'ms900-94',
      topic: 'Microsoft Purview',
      question:
        "Which Microsoft Purview tool would a security team use to detect risky use of unsanctioned SaaS apps in the organisation?",
      options: [
        { id: 'a', text: 'Microsoft Defender for Cloud Apps.' },
        { id: 'b', text: 'Microsoft Defender for Office 365.' },
        { id: 'c', text: 'Microsoft Intune.' },
        { id: 'd', text: 'Microsoft Entra Connect.' },
      ],
      correctId: 'a',
      explanation:
        "Defender for Cloud Apps discovers and governs SaaS apps, including shadow IT. Defender for Office 365 focuses on email and collaboration threats.",
    },
    {
      id: 'ms900-95',
      topic: 'Pricing',
      question:
        "A customer wants to buy Microsoft 365 through a partner who can also handle billing in local currency and provide tier-1 support. Which channel suits this?",
      options: [
        { id: 'a', text: 'Direct purchase from microsoft.com only.' },
        { id: 'b', text: 'Cloud Solution Provider (CSP) channel.' },
        { id: 'c', text: 'Microsoft Volume Licensing Open licence (retired).' },
        { id: 'd', text: 'Buying through the Microsoft Defender portal.' },
      ],
      correctId: 'b',
      explanation:
        "The CSP channel lets partners resell Microsoft 365, bill in local currency, and provide tier-1 support. Direct.com purchases skip the partner relationship.",
    },
    {
      id: 'ms900-96',
      topic: 'Cloud Concepts',
      question:
        "Which statement best describes economies of scale in cloud computing?",
      options: [
        { id: 'a', text: 'Customers can pay more if they want bigger servers.' },
        { id: 'b', text: 'Providers operate at huge scale and pass on lower per-unit costs to customers compared to running smaller datacenters in-house.' },
        { id: 'c', text: 'Customers pay only when they buy hardware.' },
        { id: 'd', text: 'Cloud always costs less than on-premises in every scenario.' },
      ],
      correctId: 'b',
      explanation:
        "Hyperscale providers spread fixed costs across many customers and offer lower per-unit prices. The cloud is not always cheaper than on-premises in every scenario.",
    },
    {
      id: 'ms900-97',
      topic: 'Compliance',
      question:
        "What is the purpose of a Data Subject Request (DSR) in Microsoft Priva?",
      options: [
        { id: 'a', text: 'To export the contents of a SharePoint site to OneDrive.' },
        { id: 'b', text: 'To find, review, and act on personal data about an individual in response to a privacy request such as access or erasure.' },
        { id: 'c', text: 'To transfer ownership of a Teams team.' },
        { id: 'd', text: 'To purchase additional licences in bulk.' },
      ],
      correctId: 'b',
      explanation:
        "A DSR finds and acts on personal data for an identified individual to fulfil privacy obligations like access or erasure. The other options describe unrelated operations.",
    },
    {
      id: 'ms900-98',
      topic: 'Licensing',
      question:
        "A team claims that Microsoft 365 Apps for Business installed on five devices is enough for a 400-person company. Is that correct?",
      options: [
        { id: 'a', text: 'Correct, the install limit is the only relevant constraint.' },
        { id: 'b', text: 'Incorrect, Microsoft 365 Apps for Business has a 300-seat tenant cap.' },
        { id: 'c', text: 'Correct, but only if every user has a phone number.' },
        { id: 'd', text: 'Incorrect, because Microsoft 365 Apps for Business does not include Word.' },
      ],
      correctId: 'b',
      explanation:
        "Microsoft 365 Apps for Business is sold to tenants with up to 300 seats. A 400-person company needs Microsoft 365 Apps for Enterprise instead.",
    },
    {
      id: 'ms900-99',
      topic: 'Service Level Agreement',
      question:
        "Microsoft publishes service level agreements that promise a target uptime for Microsoft 365 services. What is the typical uptime target?",
      options: [
        { id: 'a', text: '99.9 percent.' },
        { id: 'b', text: '95 percent.' },
        { id: 'c', text: '90 percent.' },
        { id: 'd', text: '50 percent.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft 365 services target 99.9 percent uptime, which equals about 8 hours 45 minutes of downtime per year. Lower targets like 95 percent would be unacceptable for productivity services.",
    },
    {
      id: 'ms900-100',
      topic: 'Microsoft 365 admin center',
      question:
        "An admin needs to add 25 new users from a CSV file in one operation. Which area of the Microsoft 365 admin center handles this?",
      options: [
        { id: 'a', text: 'Users > Active users > Add multiple users.' },
        { id: 'b', text: 'Billing > Your products.' },
        { id: 'c', text: 'Reports > Usage.' },
        { id: 'd', text: 'Health > Service health.' },
      ],
      correctId: 'a',
      explanation:
        "The Active users page has a bulk-add option that imports users from a CSV. Billing manages products, not user creation.",
    },
  ],
}
