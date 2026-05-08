import type { ExamSet } from '../types'

export const sc900: ExamSet = {
  examCode: 'SC-900',
  examName: 'Security, Compliance, and Identity Fundamentals',
  description:
    'One hundred practice questions at the level of the official SC-900 exam. Concepts of security, compliance, and identity, capabilities of Microsoft Entra, Microsoft security solutions, and Microsoft compliance solutions.',
  ceCourseSlug: 'security-compliance-identity-fundamentals',
  ceCourseUrl: 'https://cloudevolvers.com/training/security-compliance-identity-fundamentals',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'sc900-1',
      topic: 'Zero Trust',
      question:
        "A security architect describes a model where every request is authenticated, authorised, and encrypted as if it came from an untrusted network. Which security model does this describe?",
      options: [
        { id: 'a', text: "Perimeter security." },
        { id: 'b', text: "Shared responsibility." },
        { id: 'c', text: "Defence in depth." },
        { id: 'd', text: "Zero Trust." },
      ],
      correctId: 'd',
      explanation:
        "Zero Trust assumes breach and verifies every request explicitly, regardless of network origin. Perimeter security trusts traffic once it is inside the corporate network, which is the opposite assumption.",
    },
    {
      id: 'sc900-2',
      topic: 'Zero Trust',
      question:
        "Which three guiding principles define the Zero Trust model in Microsoft documentation?",
      options: [
        { id: 'a', text: "Patch quickly, segment networks, monitor endpoints." },
        { id: 'b', text: "Trust but verify, encrypt everything, log everything." },
        { id: 'c', text: "Verify explicitly, use least privileged access, assume breach." },
        { id: 'd', text: "Authenticate once, authorise centrally, audit yearly." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft defines Zero Trust through three principles: verify explicitly, use least privileged access, and assume breach. The other lists describe good practices but are not the official Zero Trust pillars.",
    },
    {
      id: 'sc900-3',
      topic: 'Shared Responsibility',
      question:
        "Under the shared responsibility model for SaaS, who is responsible for protecting the user accounts and the data inside the SaaS application?",
      options: [
        { id: 'a', text: "The cloud provider only." },
        { id: 'b', text: "Neither party; SaaS providers absorb all risk." },
        { id: 'c', text: "The cloud provider and the customer share it equally." },
        { id: 'd', text: "The customer only." },
      ],
      correctId: 'd',
      explanation:
        "Information, data, devices, accounts, and identities always remain the customer's responsibility, even in SaaS. The provider runs the platform, network, and physical layers.",
    },
    {
      id: 'sc900-4',
      topic: 'Defence in Depth',
      question:
        "A company layers controls so that an attacker who bypasses one control still meets another. Which security strategy is this?",
      options: [
        { id: 'a', text: "Just-in-time access." },
        { id: 'b', text: "Single sign-on." },
        { id: 'c', text: "Defence in depth." },
        { id: 'd', text: "Federation." },
      ],
      correctId: 'c',
      explanation:
        "Defence in depth uses multiple overlapping controls so that no single failure exposes the environment. Single sign-on is an authentication convenience, not a layered defence.",
    },
    {
      id: 'sc900-5',
      topic: 'Encryption',
      question:
        "Which statement about symmetric and asymmetric encryption is correct?",
      options: [
        { id: 'a', text: "Symmetric encryption uses two different keys; asymmetric uses one shared key." },
        { id: 'b', text: "Hashing is a form of symmetric encryption." },
        { id: 'c', text: "Asymmetric encryption is always faster than symmetric encryption." },
        { id: 'd', text: "Symmetric encryption uses the same key for encryption and decryption." },
      ],
      correctId: 'd',
      explanation:
        "Symmetric encryption uses a single shared key for both operations. Asymmetric uses a key pair (public and private), and hashing is a one-way function that is not encryption at all.",
    },
    {
      id: 'sc900-6',
      topic: 'Hashing',
      question:
        "Why does a password manager store hashes of passwords rather than the passwords themselves?",
      options: [
        { id: 'a', text: "Hashes can be reversed only by the original user." },
        { id: 'b', text: "Hashes encrypt the password with the user's public key." },
        { id: 'c', text: "Hashes are smaller and use less disk space." },
        { id: 'd', text: "Hashing is a one-way function, so the original password cannot be recovered from the stored value." },
      ],
      correctId: 'd',
      explanation:
        "A hash is a one-way mathematical function. Even if the database leaks, attackers cannot directly recover the password, although weak hashes can still be cracked by brute force.",
    },
    {
      id: 'sc900-7',
      topic: 'GRC',
      question:
        "Which acronym groups the practices of governance, risk, and compliance into a single discipline?",
      options: [
        { id: 'a', text: "DLP." },
        { id: 'b', text: "XDR." },
        { id: 'c', text: "SIEM." },
        { id: 'd', text: "GRC." },
      ],
      correctId: 'd',
      explanation:
        "GRC stands for governance, risk, and compliance. SIEM and XDR are detection and response categories, and DLP is data loss prevention.",
    },
    {
      id: 'sc900-8',
      topic: 'Identity as Perimeter',
      question:
        "Why do modern security strategies describe identity as the new security perimeter?",
      options: [
        { id: 'a', text: "Firewalls have been replaced by identity providers in every datacentre." },
        { id: 'b', text: "Compliance regulations forbid network-level controls." },
        { id: 'c', text: "On-premises networks no longer exist." },
        { id: 'd', text: "Users sign in from anywhere on any device, so identity is the consistent control plane that follows them." },
      ],
      correctId: 'd',
      explanation:
        "With cloud and mobile work, the network boundary is no longer a reliable trust line. Identity becomes the consistent control plane across applications and devices.",
    },
    {
      id: 'sc900-9',
      topic: 'Authentication vs Authorisation',
      question:
        "A user proves who they are by entering a password and an authenticator code. They are then granted access to a SharePoint site based on their group membership. Which two concepts are illustrated in order?",
      options: [
        { id: 'a', text: "Authorisation, then authentication." },
        { id: 'b', text: "Authentication, then authorisation." },
        { id: 'c', text: "Federation, then provisioning." },
        { id: 'd', text: "Auditing, then authentication." },
      ],
      correctId: 'b',
      explanation:
        "Authentication proves identity; authorisation decides what that identity may do. The user authenticated with password and MFA, then the system authorised access based on group membership.",
    },
    {
      id: 'sc900-10',
      topic: 'Encryption at Rest and in Transit',
      question:
        "A team enables HTTPS on a web app and turns on storage encryption for the database. Which two encryption states are now covered?",
      options: [
        { id: 'a', text: "In transit and in use." },
        { id: 'b', text: "At rest and in use." },
        { id: 'c', text: "In transit and at rest." },
        { id: 'd', text: "Only at rest." },
      ],
      correctId: 'c',
      explanation:
        "HTTPS protects data in transit. Storage encryption protects data at rest. Encryption in use, such as confidential computing, would require a different mechanism.",
    },
    {
      id: 'sc900-11',
      topic: 'Compliance Concepts',
      question:
        "What is the difference between a regulation such as GDPR and a standard such as ISO 27001?",
      options: [
        { id: 'a', text: "Regulations are voluntary; standards are legally binding." },
        { id: 'b', text: "Regulations are laws enforced by governments; standards are frameworks an organisation can adopt and certify against." },
        { id: 'c', text: "Standards apply only to government agencies." },
        { id: 'd', text: "Regulations cover only physical security." },
      ],
      correctId: 'b',
      explanation:
        "Regulations such as GDPR are laws with legal penalties. Standards such as ISO 27001 are frameworks that organisations adopt voluntarily, often for certification.",
    },
    {
      id: 'sc900-12',
      topic: 'Privacy',
      question:
        "Which privacy principle states that an organisation should collect only the personal data needed for a stated purpose and nothing more?",
      options: [
        { id: 'a', text: "Storage flexibility." },
        { id: 'b', text: "Purpose limitation." },
        { id: 'c', text: "Data minimisation." },
        { id: 'd', text: "Universal collection." },
      ],
      correctId: 'c',
      explanation:
        "Data minimisation means collecting the smallest amount of personal data needed. Purpose limitation, a separate principle, restricts how that data can be used after collection.",
    },
    {
      id: 'sc900-13',
      topic: 'Microsoft Entra ID',
      question:
        "Which Microsoft service is the cloud-based identity and access management directory used to sign in to Microsoft 365?",
      options: [
        { id: 'a', text: "Microsoft Defender for Identity." },
        { id: 'b', text: "Active Directory Domain Services." },
        { id: 'c', text: "Microsoft Entra ID." },
        { id: 'd', text: "Microsoft Intune." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID, formerly Azure AD, is the cloud identity directory behind Microsoft 365 and Azure. AD Domain Services is the on-premises directory.",
    },
    {
      id: 'sc900-14',
      topic: 'Entra Tenants',
      question:
        "What does a Microsoft Entra ID tenant represent?",
      options: [
        { id: 'a', text: "A single virtual network in Azure." },
        { id: 'b', text: "A dedicated, isolated instance of Microsoft Entra ID for an organisation." },
        { id: 'c', text: "A subscription used for billing." },
        { id: 'd', text: "A management group for resource governance." },
      ],
      correctId: 'b',
      explanation:
        "A tenant is the dedicated Entra ID directory created when an organisation signs up for a Microsoft cloud service. Subscriptions and management groups are Azure resource concepts.",
    },
    {
      id: 'sc900-15',
      topic: 'Identity Types',
      question:
        "Which Microsoft Entra ID identity type is meant for an Azure VM that needs to access Key Vault without storing credentials in code?",
      options: [
        { id: 'a', text: "Member user account." },
        { id: 'b', text: "Guest user account." },
        { id: 'c', text: "Managed identity." },
        { id: 'd', text: "Service principal created manually." },
      ],
      correctId: 'c',
      explanation:
        "A managed identity is a service principal automatically managed by Azure for a workload, with no credentials to store. A manual service principal works but requires secret management.",
    },
    {
      id: 'sc900-16',
      topic: 'Identity Types',
      question:
        "An external partner needs limited access to a SharePoint site in your tenant. Which Entra ID identity is the most appropriate?",
      options: [
        { id: 'a', text: "Member user account." },
        { id: 'b', text: "Guest user account through B2B collaboration." },
        { id: 'c', text: "Service principal." },
        { id: 'd', text: "Managed identity." },
      ],
      correctId: 'b',
      explanation:
        "B2B guest accounts let external partners sign in with their own credentials while you control access to your resources. Member accounts are for employees of your own organisation.",
    },
    {
      id: 'sc900-17',
      topic: 'Hybrid Identity',
      question:
        "An organisation runs Active Directory on-premises and wants users to sign in to Microsoft 365 with the same password. Which tool synchronises the on-premises directory to Microsoft Entra ID?",
      options: [
        { id: 'a', text: "Microsoft Entra Permissions Management." },
        { id: 'b', text: "Microsoft Entra Verified ID." },
        { id: 'c', text: "Microsoft Entra Connect." },
        { id: 'd', text: "Microsoft Intune." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra Connect synchronises on-premises Active Directory objects to Microsoft Entra ID and supports password hash sync or pass-through authentication. Verified ID and Permissions Management cover different scenarios.",
    },
    {
      id: 'sc900-18',
      topic: 'Hybrid Identity',
      question:
        "Which hybrid authentication method sends only a hash of the password hash to the cloud, where the cloud then validates sign-ins independently of the on-premises directory?",
      options: [
        { id: 'a', text: "Pass-through authentication." },
        { id: 'b', text: "Federation with AD FS." },
        { id: 'c', text: "Password hash synchronisation." },
        { id: 'd', text: "Certificate-based authentication." },
      ],
      correctId: 'c',
      explanation:
        "Password hash sync stores a hash of the on-premises hash in the cloud so Entra ID can validate sign-ins on its own. Pass-through authentication forwards each request back to a connector on-premises.",
    },
    {
      id: 'sc900-19',
      topic: 'Authentication Methods',
      question:
        "Which authentication method is generally considered the strongest and most user-friendly modern option supported by Microsoft Entra ID?",
      options: [
        { id: 'a', text: "SMS one-time code." },
        { id: 'b', text: "Passwordless sign-in with FIDO2 security keys or Windows Hello for Business." },
        { id: 'c', text: "Security questions." },
        { id: 'd', text: "Email link." },
      ],
      correctId: 'b',
      explanation:
        "FIDO2 keys and Windows Hello are phishing-resistant passwordless methods. SMS is convenient but vulnerable to SIM swapping, and security questions are weak.",
    },
    {
      id: 'sc900-20',
      topic: 'MFA',
      question:
        "What does multifactor authentication require?",
      options: [
        { id: 'a', text: "Two passwords from the same category." },
        { id: 'b', text: "Two or more verification factors from different categories such as something you know, something you have, or something you are." },
        { id: 'c', text: "A username, a password, and a security question." },
        { id: 'd', text: "Sign-in from two different devices simultaneously." },
      ],
      correctId: 'b',
      explanation:
        "MFA requires factors from at least two distinct categories. A password plus a security question are both 'something you know' and would not count as MFA.",
    },
    {
      id: 'sc900-21',
      topic: 'Self-Service Password Reset',
      question:
        "Which Microsoft Entra ID feature lets users reset their own password without calling the help desk, after registering verification methods?",
      options: [
        { id: 'a', text: "Conditional Access." },
        { id: 'b', text: "Self-service password reset." },
        { id: 'c', text: "Privileged Identity Management." },
        { id: 'd', text: "Identity Protection." },
      ],
      correctId: 'b',
      explanation:
        "Self-service password reset (SSPR) lets users reset or unlock their own accounts. The other features address policy enforcement, privileged access, and risk detection.",
    },
    {
      id: 'sc900-22',
      topic: 'Password Protection',
      question:
        "Microsoft Entra Password Protection blocks weak passwords by checking against which two lists?",
      options: [
        { id: 'a', text: "Only a regulator-published banned list." },
        { id: 'b', text: "Only the customer's own banned list." },
        { id: 'c', text: "A global banned password list maintained by Microsoft and an optional custom banned list maintained by the customer." },
        { id: 'd', text: "A list of breached passwords from the dark web only." },
      ],
      correctId: 'c',
      explanation:
        "Entra Password Protection combines Microsoft's global banned list with an optional tenant-specific custom list. It can also be extended to on-premises Active Directory.",
    },
    {
      id: 'sc900-23',
      topic: 'Conditional Access',
      question:
        "An administrator wants to require MFA when users sign in from outside the corporate network. Which Microsoft Entra ID feature delivers this?",
      options: [
        { id: 'a', text: "Privileged Identity Management." },
        { id: 'b', text: "Conditional Access." },
        { id: 'c', text: "Microsoft Defender for Cloud." },
        { id: 'd', text: "Microsoft Sentinel." },
      ],
      correctId: 'b',
      explanation:
        "Conditional Access evaluates signals such as user, location, device, and risk and then enforces controls such as MFA or block. PIM is for time-bound admin role activation.",
    },
    {
      id: 'sc900-24',
      topic: 'Conditional Access',
      question:
        "Which two elements does a Conditional Access policy combine?",
      options: [
        { id: 'a', text: "Sensitivity labels and retention labels." },
        { id: 'b', text: "Compliance assessments and improvement actions." },
        { id: 'c', text: "Assignments (signals such as user, app, location, device, risk) and access controls (grant or block, with conditions like MFA)." },
        { id: 'd', text: "Workbooks and analytics rules." },
      ],
      correctId: 'c',
      explanation:
        "Conditional Access policies pair assignments (the conditions) with access controls (the decision and any required action). Compliance Manager actions, Purview labels, and Sentinel rules are different products.",
    },
    {
      id: 'sc900-25',
      topic: 'Identity Protection',
      question:
        "Which Microsoft Entra ID capability detects risky sign-ins (such as impossible travel) and risky users and feeds those risk levels into Conditional Access?",
      options: [
        { id: 'a', text: "Microsoft Purview Insider Risk Management." },
        { id: 'b', text: "Microsoft Defender for Office 365." },
        { id: 'c', text: "Microsoft Entra ID Protection." },
        { id: 'd', text: "Microsoft Intune." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID Protection scores sign-in and user risk and exposes those risk levels as signals to Conditional Access. Insider Risk Management focuses on internal data risk, not authentication anomalies.",
    },
    {
      id: 'sc900-26',
      topic: 'PIM',
      question:
        "Which Microsoft Entra ID Governance feature lets an administrator activate a privileged role only for the time they need, with approval and MFA, instead of holding the role permanently?",
      options: [
        { id: 'a', text: "Access reviews." },
        { id: 'b', text: "Privileged Identity Management (PIM)." },
        { id: 'c', text: "Entitlement management." },
        { id: 'd', text: "Conditional Access." },
      ],
      correctId: 'b',
      explanation:
        "PIM provides just-in-time, time-bound, approval-based activation of Entra ID and Azure roles. Access reviews and entitlement management cover periodic recertification and access packages.",
    },
    {
      id: 'sc900-27',
      topic: 'Entra ID Governance',
      question:
        "Which Microsoft Entra ID Governance feature lets an organisation periodically confirm whether users still need their assigned access?",
      options: [
        { id: 'a', text: "Identity Protection." },
        { id: 'b', text: "Conditional Access." },
        { id: 'c', text: "Access reviews." },
        { id: 'd', text: "Defender for Cloud Apps." },
      ],
      correctId: 'c',
      explanation:
        "Access reviews schedule recurring recertification of group memberships, application assignments, and role assignments. Conditional Access decides on access at sign-in, not retrospectively.",
    },
    {
      id: 'sc900-28',
      topic: 'Entitlement Management',
      question:
        "A company wants new contractors to request bundles of access (apps, groups, SharePoint sites) and have those requests approved automatically based on policy. Which feature delivers this?",
      options: [
        { id: 'a', text: "Microsoft Intune compliance policies." },
        { id: 'b', text: "Privileged Identity Management." },
        { id: 'c', text: "Entitlement management with access packages." },
        { id: 'd', text: "Microsoft Defender for Identity." },
      ],
      correctId: 'c',
      explanation:
        "Entitlement management bundles resources into access packages with policies that govern who can request, approve, and review them. PIM is specifically for privileged role activation.",
    },
    {
      id: 'sc900-29',
      topic: 'External Identities',
      question:
        "Which Microsoft Entra ID feature lets a customer-facing application sign in consumers with their Google, Facebook, or local accounts and brand the sign-in pages?",
      options: [
        { id: 'a', text: "Microsoft Entra B2B collaboration." },
        { id: 'b', text: "Microsoft Entra External ID for customers." },
        { id: 'c', text: "Microsoft Entra Domain Services." },
        { id: 'd', text: "Microsoft Entra Permissions Management." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra External ID for customers (the successor to Azure AD B2C) is built for customer-facing identity with branded sign-in and social identity providers. B2B is for partner collaboration.",
    },
    {
      id: 'sc900-30',
      topic: 'Verified ID',
      question:
        "Which Microsoft Entra capability issues and verifies decentralised digital credentials based on open standards, so a user can prove an attribute (for example, employment) without sharing more data than needed?",
      options: [
        { id: 'a', text: "Microsoft Entra Connect." },
        { id: 'b', text: "Microsoft Entra Permissions Management." },
        { id: 'c', text: "Microsoft Entra Verified ID." },
        { id: 'd', text: "Microsoft Defender for Identity." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra Verified ID issues and verifies W3C-standard verifiable credentials. Permissions Management addresses cloud entitlements, and Defender for Identity protects on-premises AD.",
    },
    {
      id: 'sc900-31',
      topic: 'Permissions Management',
      question:
        "Which Microsoft Entra product gives a unified view of identity permissions across Azure, AWS, and Google Cloud and helps right-size them?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Protection." },
        { id: 'b', text: "Microsoft Entra Permissions Management." },
        { id: 'c', text: "Microsoft Entra Verified ID." },
        { id: 'd', text: "Microsoft Defender for Cloud Apps." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra Permissions Management is the cloud infrastructure entitlement management (CIEM) product that spans the three major clouds. ID Protection covers user and sign-in risk only.",
    },
    {
      id: 'sc900-32',
      topic: 'Single Sign-On',
      question:
        "What is the main user-facing benefit of single sign-on (SSO) through Microsoft Entra ID?",
      options: [
        { id: 'a', text: "Applications share their database with Microsoft Entra ID." },
        { id: 'b', text: "Users get a different password for every application." },
        { id: 'c', text: "Users authenticate once and access multiple applications without entering credentials again." },
        { id: 'd', text: "Passwords are no longer stored anywhere." },
      ],
      correctId: 'c',
      explanation:
        "SSO lets a user authenticate once and reuse that session across federated applications. It is unrelated to whether the application stores its own data.",
    },
    {
      id: 'sc900-33',
      topic: 'Federation',
      question:
        "Which statement best describes federation in identity management?",
      options: [
        { id: 'a', text: "A way to copy users between two tenants nightly." },
        { id: 'b', text: "A method of storing passwords in plain text for compatibility." },
        { id: 'c', text: "A trust relationship between identity providers, so users authenticated in one domain can access resources in another." },
        { id: 'd', text: "A type of network firewall." },
      ],
      correctId: 'c',
      explanation:
        "Federation is a trust between identity providers, often using SAML or OIDC, that lets a user authenticated in one domain access resources in another. Synchronisation is a separate, copy-based mechanism.",
    },
    {
      id: 'sc900-34',
      topic: 'Service Principals',
      question:
        "What is a service principal in Microsoft Entra ID?",
      options: [
        { id: 'a', text: "A user account used by a person." },
        { id: 'b', text: "A security identity that an application or service uses to access Entra ID protected resources." },
        { id: 'c', text: "A group of administrators." },
        { id: 'd', text: "A type of MFA token." },
      ],
      correctId: 'b',
      explanation:
        "A service principal is the identity an application uses to authenticate to Entra-protected resources. User accounts represent people; groups are collections of identities.",
    },
    {
      id: 'sc900-35',
      topic: 'Roles',
      question:
        "Which Microsoft Entra ID role is built specifically to manage user accounts and password resets without granting full Global Administrator rights?",
      options: [
        { id: 'a', text: "Global Administrator." },
        { id: 'b', text: "User Administrator." },
        { id: 'c', text: "Billing Administrator." },
        { id: 'd', text: "Reports Reader." },
      ],
      correctId: 'b',
      explanation:
        "User Administrator manages users, groups, and certain password resets. Global Administrator has full directory rights and should be granted sparingly.",
    },
    {
      id: 'sc900-36',
      topic: 'Conditional Access',
      question:
        "Which signal can a Conditional Access policy use to require a compliant device for a specific Microsoft 365 app?",
      options: [
        { id: 'a', text: "Compliance Manager improvement actions." },
        { id: 'b', text: "Microsoft Sentinel analytics rules." },
        { id: 'c', text: "Device state from Microsoft Intune." },
        { id: 'd', text: "Microsoft Purview retention labels." },
      ],
      correctId: 'c',
      explanation:
        "Conditional Access can require a device marked compliant by Microsoft Intune. Sentinel, Compliance Manager, and Purview labels are not Conditional Access signals.",
    },
    {
      id: 'sc900-37',
      topic: 'Authentication',
      question:
        "Which open standard does Microsoft Entra ID use as the primary protocol for modern token-based authentication of web and mobile applications?",
      options: [
        { id: 'a', text: "Kerberos." },
        { id: 'b', text: "NTLM." },
        { id: 'c', text: "OpenID Connect on top of OAuth 2.0." },
        { id: 'd', text: "RADIUS." },
      ],
      correctId: 'c',
      explanation:
        "Modern Entra ID applications use OpenID Connect for authentication and OAuth 2.0 for authorisation. Kerberos and NTLM are legacy on-premises protocols.",
    },
    {
      id: 'sc900-38',
      topic: 'Entra Licensing',
      question:
        "Which Microsoft Entra ID licence tier is required for Conditional Access and self-service password reset with writeback to on-premises AD?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Free." },
        { id: 'b', text: "Microsoft Entra ID P1." },
        { id: 'c', text: "Microsoft 365 Apps for Business." },
        { id: 'd', text: "Microsoft Defender for Cloud." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra ID P1 is the minimum tier for Conditional Access and SSPR with on-premises writeback. P2 adds Identity Protection and PIM.",
    },
    {
      id: 'sc900-39',
      topic: 'Entra Licensing',
      question:
        "Which Microsoft Entra ID tier includes Privileged Identity Management and Identity Protection?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Free." },
        { id: 'b', text: "Microsoft Entra ID P1." },
        { id: 'c', text: "Microsoft Entra ID P2." },
        { id: 'd', text: "Microsoft Entra External ID." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID P2 includes PIM and Identity Protection. P1 covers Conditional Access but not those advanced governance and risk features.",
    },
    {
      id: 'sc900-40',
      topic: 'Entra ID Governance',
      question:
        "Which Microsoft offering bundles Conditional Access, PIM, access reviews, entitlement management, and lifecycle workflows under a single identity governance umbrella?",
      options: [
        { id: 'a', text: "Microsoft Purview." },
        { id: 'b', text: "Microsoft Defender XDR." },
        { id: 'c', text: "Microsoft Entra ID Governance." },
        { id: 'd', text: "Microsoft Intune Suite." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID Governance bundles the identity lifecycle and governance capabilities. Defender XDR is the security operations suite; Purview is for compliance.",
    },
    {
      id: 'sc900-41',
      topic: 'Defender for Cloud',
      question:
        "Which Microsoft service provides cloud security posture management (CSPM) and cloud workload protection (CWPP) for Azure, AWS, and Google Cloud workloads?",
      options: [
        { id: 'a', text: "Microsoft Sentinel." },
        { id: 'b', text: "Microsoft Defender for Endpoint." },
        { id: 'c', text: "Microsoft Defender for Cloud." },
        { id: 'd', text: "Microsoft Purview." },
      ],
      correctId: 'c',
      explanation:
        "Defender for Cloud is the multicloud CSPM and CWPP service. Defender for Endpoint focuses on devices, Sentinel is the SIEM, and Purview is the compliance suite.",
    },
    {
      id: 'sc900-42',
      topic: 'Defender for Cloud',
      question:
        "Inside Microsoft Defender for Cloud, which score measures the security posture of the connected subscriptions and improves as recommendations are addressed?",
      options: [
        { id: 'a', text: "Microsoft Secure Score for the tenant." },
        { id: 'b', text: "Defender for Cloud secure score." },
        { id: 'c', text: "Compliance Manager score." },
        { id: 'd', text: "Adoption score." },
      ],
      correctId: 'b',
      explanation:
        "Defender for Cloud has its own secure score that reflects Azure and multicloud posture. Microsoft Secure Score sits in the Microsoft 365 Defender portal and covers identity and Microsoft 365 workloads.",
    },
    {
      id: 'sc900-43',
      topic: 'Sentinel',
      question:
        "Which Microsoft service is a cloud-native SIEM and SOAR that ingests logs from Microsoft and third-party sources, runs analytics, and orchestrates response?",
      options: [
        { id: 'a', text: "Microsoft Purview Audit." },
        { id: 'b', text: "Microsoft Defender for Cloud Apps." },
        { id: 'c', text: "Microsoft Sentinel." },
        { id: 'd', text: "Microsoft Intune." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Sentinel is the cloud-native SIEM and SOAR built on Azure. Defender for Cloud Apps is a cloud access security broker, and Purview Audit captures Microsoft 365 audit logs.",
    },
    {
      id: 'sc900-44',
      topic: 'Sentinel',
      question:
        "Which Microsoft Sentinel feature lets analysts run a query, see the results, and group them with notes and bookmarks during an investigation?",
      options: [
        { id: 'a', text: "Microsoft Secure Score recommendations." },
        { id: 'b', text: "Compliance Manager assessments." },
        { id: 'c', text: "Hunting." },
        { id: 'd', text: "Azure Policy initiatives." },
      ],
      correctId: 'c',
      explanation:
        "Hunting in Sentinel lets analysts run KQL queries, bookmark findings, and pivot during an investigation. The other options belong to compliance and governance products.",
    },
    {
      id: 'sc900-45',
      topic: 'Defender XDR',
      question:
        "Which Microsoft offering correlates signals from email, endpoints, identities, and SaaS apps into a single incident in the Microsoft Defender portal?",
      options: [
        { id: 'a', text: "Microsoft Purview eDiscovery." },
        { id: 'b', text: "Microsoft Sentinel only." },
        { id: 'c', text: "Microsoft Defender XDR." },
        { id: 'd', text: "Microsoft Compliance Manager." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Defender XDR (formerly Microsoft 365 Defender) correlates signals across email, endpoints, identities, and apps into unified incidents. Sentinel is a broader SIEM that can ingest those incidents.",
    },
    {
      id: 'sc900-46',
      topic: 'Defender for Endpoint',
      question:
        "Which Microsoft Defender pillar provides endpoint detection and response, vulnerability management, and attack surface reduction for laptops and servers?",
      options: [
        { id: 'a', text: "Microsoft Defender for Office 365." },
        { id: 'b', text: "Microsoft Defender for Endpoint." },
        { id: 'c', text: "Microsoft Defender for Identity." },
        { id: 'd', text: "Microsoft Defender for Cloud Apps." },
      ],
      correctId: 'b',
      explanation:
        "Defender for Endpoint covers EDR, vulnerability management, and attack surface reduction on devices. The other Defender pillars cover email, on-premises identities, and SaaS apps.",
    },
    {
      id: 'sc900-47',
      topic: 'Defender for Office 365',
      question:
        "Which Microsoft Defender pillar protects against phishing, malicious attachments, and unsafe links in Exchange Online, Teams, and SharePoint?",
      options: [
        { id: 'a', text: "Microsoft Defender for Cloud." },
        { id: 'b', text: "Microsoft Defender for Endpoint." },
        { id: 'c', text: "Microsoft Defender for Office 365." },
        { id: 'd', text: "Microsoft Defender for Identity." },
      ],
      correctId: 'c',
      explanation:
        "Defender for Office 365 provides Safe Links, Safe Attachments, anti-phishing, and attack simulation for Microsoft 365 collaboration apps. Defender for Endpoint protects devices, not mailboxes.",
    },
    {
      id: 'sc900-48',
      topic: 'Defender for Identity',
      question:
        "Which Microsoft Defender pillar uses signals from on-premises Active Directory domain controllers to detect identity-based attacks such as Pass-the-Hash and Golden Ticket?",
      options: [
        { id: 'a', text: "Microsoft Defender for Office 365." },
        { id: 'b', text: "Microsoft Defender for Endpoint." },
        { id: 'c', text: "Microsoft Defender for Cloud Apps." },
        { id: 'd', text: "Microsoft Defender for Identity." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Identity (formerly Azure ATP) uses sensors on domain controllers to detect identity attacks against on-premises AD. Defender for Cloud Apps inspects SaaS, not on-premises AD.",
    },
    {
      id: 'sc900-49',
      topic: 'Defender for Cloud Apps',
      question:
        "Which Microsoft service is a cloud access security broker (CASB) that discovers shadow IT and applies policies to SaaS applications such as Salesforce or Dropbox?",
      options: [
        { id: 'a', text: "Microsoft Intune." },
        { id: 'b', text: "Microsoft Defender for Endpoint." },
        { id: 'c', text: "Microsoft Sentinel." },
        { id: 'd', text: "Microsoft Defender for Cloud Apps." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Cloud Apps is the Microsoft CASB. It discovers shadow IT and applies session and access policies to SaaS apps. Intune manages devices and apps, not SaaS broker controls.",
    },
    {
      id: 'sc900-50',
      topic: 'Microsoft Secure Score',
      question:
        "Where does Microsoft Secure Score live and what does it measure?",
      options: [
        { id: 'a', text: "In Microsoft Sentinel; it measures alert volume." },
        { id: 'b', text: "In the Azure portal; it measures only Azure resource posture." },
        { id: 'c', text: "In Compliance Manager; it measures regulatory compliance." },
        { id: 'd', text: "In the Microsoft Defender portal; it measures the security posture of identity, Microsoft 365 workloads, and devices through recommended actions." },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Secure Score lives in the Microsoft Defender portal and measures posture across identity, Microsoft 365, and devices. The Defender for Cloud secure score is a separate score that focuses on Azure and multicloud resources.",
    },
    {
      id: 'sc900-51',
      topic: 'Defender for Cloud',
      question:
        "A platform team wants security recommendations and threat detection for Azure SQL Database, Storage accounts, and Kubernetes clusters. Which capability inside Microsoft Defender for Cloud delivers this?",
      options: [
        { id: 'a', text: "Microsoft Intune compliance policies." },
        { id: 'b', text: "Microsoft Sentinel data connectors only." },
        { id: 'c', text: "Microsoft Purview audit logs." },
        { id: 'd', text: "Microsoft Defender plans (workload protections) for those resource types." },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Defender for Cloud sells per-resource Defender plans (for example, Defender for SQL, for Storage, for Containers) that provide threat detection on top of CSPM. The other tools are for SIEM, audit, and device compliance.",
    },
    {
      id: 'sc900-52',
      topic: 'Sentinel',
      question:
        "Which Microsoft Sentinel artifact codifies a logical query against ingested data and triggers an alert or incident when conditions match?",
      options: [
        { id: 'a', text: "A playbook." },
        { id: 'b', text: "A workbook." },
        { id: 'c', text: "A data connector." },
        { id: 'd', text: "An analytics rule." },
      ],
      correctId: 'd',
      explanation:
        "Analytics rules generate alerts and incidents from ingested data. Workbooks are dashboards, data connectors ingest sources, and playbooks automate response (typically built on Azure Logic Apps).",
    },
    {
      id: 'sc900-53',
      topic: 'Sentinel Playbooks',
      question:
        "What is a Microsoft Sentinel playbook?",
      options: [
        { id: 'a', text: "A static document describing incident-response procedures." },
        { id: 'b', text: "An automated workflow, built on Azure Logic Apps, that runs in response to an alert or incident." },
        { id: 'c', text: "A Conditional Access policy." },
        { id: 'd', text: "A Microsoft Entra access package." },
      ],
      correctId: 'b',
      explanation:
        "Sentinel playbooks are Azure Logic Apps workflows that automate response actions like disabling a user or posting to Teams. They are not static documents.",
    },
    {
      id: 'sc900-54',
      topic: 'Defender XDR',
      question:
        "An analyst sees a single incident in the Microsoft Defender portal that ties together a phishing email, a suspicious sign-in, and a malicious file on a laptop. Which feature creates that combined view?",
      options: [
        { id: 'a', text: "Microsoft Intune compliance policies." },
        { id: 'b', text: "Insider Risk Management policies." },
        { id: 'c', text: "Microsoft Compliance Manager assessments." },
        { id: 'd', text: "Incident correlation in Microsoft Defender XDR." },
      ],
      correctId: 'd',
      explanation:
        "Defender XDR correlates alerts from Defender for Office 365, Defender for Identity / Entra, and Defender for Endpoint into a single incident. Insider Risk and Compliance Manager are not detection products.",
    },
    {
      id: 'sc900-55',
      topic: 'Intune',
      question:
        "Which Microsoft service manages device enrolment, configuration, and compliance for Windows, macOS, iOS, and Android?",
      options: [
        { id: 'a', text: "Microsoft Sentinel." },
        { id: 'b', text: "Microsoft Intune." },
        { id: 'c', text: "Microsoft Purview." },
        { id: 'd', text: "Microsoft Entra Verified ID." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Intune is the unified endpoint management service for desktops and mobile devices. The other services are for SIEM, compliance, and decentralised credentials.",
    },
    {
      id: 'sc900-56',
      topic: 'Intune',
      question:
        "Which Intune capability lets administrators apply policies to corporate data inside an app (for example, Outlook) on a personal device, without managing the whole device?",
      options: [
        { id: 'a', text: "Privileged Identity Management." },
        { id: 'b', text: "Device compliance policies." },
        { id: 'c', text: "Conditional Access policies." },
        { id: 'd', text: "App protection policies (MAM without enrolment)." },
      ],
      correctId: 'd',
      explanation:
        "Intune app protection policies (MAM) protect data inside managed apps on unenrolled BYOD devices. Compliance policies require full device enrolment.",
    },
    {
      id: 'sc900-57',
      topic: 'Defender for Cloud',
      question:
        "Which dashboard in Microsoft Defender for Cloud maps the environment to standards such as NIST SP 800-53, ISO 27001, and CIS Azure Benchmark?",
      options: [
        { id: 'a', text: "Microsoft Purview Compliance Manager." },
        { id: 'b', text: "Identity Secure Score." },
        { id: 'c', text: "Microsoft Sentinel workbooks." },
        { id: 'd', text: "Regulatory compliance dashboard." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Cloud's regulatory compliance dashboard tracks adherence to standards like NIST and ISO across Azure resources. Compliance Manager covers Microsoft 365 and broader compliance, but is not in Defender for Cloud.",
    },
    {
      id: 'sc900-58',
      topic: 'Sentinel Cost Model',
      question:
        "How is Microsoft Sentinel typically billed?",
      options: [
        { id: 'a', text: "Per user per month, like Microsoft 365." },
        { id: 'b', text: "Per gigabyte of data ingested and retained, often through a Log Analytics workspace." },
        { id: 'c', text: "Per analytics rule." },
        { id: 'd', text: "Free of charge." },
      ],
      correctId: 'b',
      explanation:
        "Sentinel is priced primarily on the volume of data ingested (and on retention beyond the included period). Per-user pricing belongs to Microsoft 365.",
    },
    {
      id: 'sc900-59',
      topic: 'Defender for Cloud Apps',
      question:
        "Which Defender for Cloud Apps capability rates the security and compliance of more than 30,000 SaaS applications and helps assess the risk of shadow IT?",
      options: [
        { id: 'a', text: "Microsoft Intune device inventory." },
        { id: 'b', text: "Microsoft Secure Score." },
        { id: 'c', text: "Compliance Manager assessments." },
        { id: 'd', text: "Cloud app catalog and risk scoring." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Cloud Apps maintains a cloud app catalog with risk scores. Compliance Manager rates the customer's posture, not third-party SaaS.",
    },
    {
      id: 'sc900-60',
      topic: 'Defender for Endpoint',
      question:
        "Which Defender for Endpoint feature reduces the attack surface by blocking common malicious behaviours, such as Office macros launching child processes?",
      options: [
        { id: 'a', text: "Conditional Access named locations." },
        { id: 'b', text: "Sensitivity labels." },
        { id: 'c', text: "Insider Risk policies." },
        { id: 'd', text: "Attack surface reduction (ASR) rules." },
      ],
      correctId: 'd',
      explanation:
        "ASR rules block specific behaviours commonly used by attackers. Sensitivity labels and Insider Risk policies belong to Microsoft Purview.",
    },
    {
      id: 'sc900-61',
      topic: 'Defender for Office 365',
      question:
        "Which Defender for Office 365 feature detonates email attachments in a sandbox to detect zero-day malware before delivery?",
      options: [
        { id: 'a', text: "Microsoft Secure Score." },
        { id: 'b', text: "Safe Links." },
        { id: 'c', text: "Anti-spam policies." },
        { id: 'd', text: "Safe Attachments." },
      ],
      correctId: 'd',
      explanation:
        "Safe Attachments detonates files in a sandbox before delivery. Safe Links rewrites URLs and checks them at click time, which is a different protection.",
    },
    {
      id: 'sc900-62',
      topic: 'Defender for Office 365',
      question:
        "Which Defender for Office 365 feature rewrites URLs in messages and Teams chats so they are checked for phishing or malware at the moment a user clicks?",
      options: [
        { id: 'a', text: "Safe Attachments." },
        { id: 'b', text: "Safe Links." },
        { id: 'c', text: "Attack simulation training." },
        { id: 'd', text: "DKIM signing." },
      ],
      correctId: 'b',
      explanation:
        "Safe Links rewrites URLs and validates them at click-time. Safe Attachments inspects files; attack simulation trains users; DKIM is an email authentication standard.",
    },
    {
      id: 'sc900-63',
      topic: 'Defender for Identity',
      question:
        "Which signal does Microsoft Defender for Identity primarily analyse?",
      options: [
        { id: 'a', text: "SaaS application API logs." },
        { id: 'b', text: "Email message tracking logs." },
        { id: 'c', text: "Endpoint EDR telemetry from laptops." },
        { id: 'd', text: "Network and authentication traffic from on-premises Active Directory domain controllers." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Identity ingests signals from on-premises domain controllers and AD FS to detect identity-based attacks. Email, endpoint, and SaaS signals are covered by other Defender pillars.",
    },
    {
      id: 'sc900-64',
      topic: 'Defender XDR',
      question:
        "Which capability allows analysts to run advanced KQL queries across Defender XDR data, such as Defender for Endpoint and Defender for Office 365 tables, to look for indicators of compromise?",
      options: [
        { id: 'a', text: "Microsoft Intune compliance reports." },
        { id: 'b', text: "Compliance Manager improvement actions." },
        { id: 'c', text: "Microsoft Entra access reviews." },
        { id: 'd', text: "Advanced hunting." },
      ],
      correctId: 'd',
      explanation:
        "Advanced hunting in the Microsoft Defender portal lets analysts query raw Defender XDR data with KQL. The other features address compliance, identity governance, and device compliance.",
    },
    {
      id: 'sc900-65',
      topic: 'Defender for Cloud',
      question:
        "Which Defender for Cloud capability gives a step-by-step remediation guide for a security finding, such as enabling MFA for a specific subscription?",
      options: [
        { id: 'a', text: "Microsoft Purview retention labels." },
        { id: 'b', text: "Microsoft Sentinel hunting queries." },
        { id: 'c', text: "Compliance Manager improvement actions." },
        { id: 'd', text: "Security recommendations and remediation steps." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Cloud surfaces security recommendations with remediation steps and a 'Quick fix' option. Compliance Manager has improvement actions for compliance, not raw cloud security findings.",
    },
    {
      id: 'sc900-66',
      topic: 'Intune',
      question:
        "Which Intune feature lets administrators wipe corporate data from a lost or stolen device while leaving personal data intact on a BYOD phone?",
      options: [
        { id: 'a', text: "Microsoft Defender SmartScreen." },
        { id: 'b', text: "Full factory reset only." },
        { id: 'c', text: "BitLocker recovery." },
        { id: 'd', text: "Selective wipe (app data wipe) through app protection policies." },
      ],
      correctId: 'd',
      explanation:
        "Intune can perform a selective wipe that removes only the corporate data inside managed apps. A full factory reset would also delete personal data, which is not appropriate for BYOD.",
    },
    {
      id: 'sc900-67',
      topic: 'Sentinel Connectors',
      question:
        "Which Microsoft Sentinel feature ingests logs from Microsoft and third-party sources without writing custom collectors?",
      options: [
        { id: 'a', text: "Hunting queries." },
        { id: 'b', text: "Workbooks." },
        { id: 'c', text: "Watchlists." },
        { id: 'd', text: "Data connectors." },
      ],
      correctId: 'd',
      explanation:
        "Data connectors are pre-built integrations for sources like Microsoft 365, AWS CloudTrail, and various firewalls. The other features rely on data once it has been ingested.",
    },
    {
      id: 'sc900-68',
      topic: 'Defender XDR vs Sentinel',
      question:
        "An organisation already uses Microsoft Defender XDR and wants to combine those incidents with logs from a third-party firewall and a Linux server fleet. Which Microsoft service correlates everything in one workspace?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Governance." },
        { id: 'b', text: "Microsoft Intune." },
        { id: 'c', text: "Microsoft Purview." },
        { id: 'd', text: "Microsoft Sentinel." },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Sentinel ingests Defender XDR incidents alongside non-Microsoft logs and provides cross-source correlation. Defender XDR by itself is limited to Microsoft-first signals.",
    },
    {
      id: 'sc900-69',
      topic: 'Defender for Cloud Apps',
      question:
        "Which Defender for Cloud Apps control inserts itself between the user and a SaaS application to enforce policies in real time, for example blocking a download from an unmanaged device?",
      options: [
        { id: 'a', text: "Microsoft Entra Verified ID." },
        { id: 'b', text: "App protection policies." },
        { id: 'c', text: "Azure Firewall application rules." },
        { id: 'd', text: "Conditional Access app control (reverse proxy)." },
      ],
      correctId: 'd',
      explanation:
        "Conditional Access app control routes session traffic through Defender for Cloud Apps to enforce real-time controls. Azure Firewall and Verified ID address different problems.",
    },
    {
      id: 'sc900-70',
      topic: 'Defender Plans',
      question:
        "A team turned on a free tier of Microsoft Defender for Cloud and now sees only configuration recommendations. To get threat detection for the resources, what must they do?",
      options: [
        { id: 'a', text: "Move workloads out of Azure." },
        { id: 'b', text: "Buy a Microsoft 365 E5 licence for every user." },
        { id: 'c', text: "Switch the subscription to Pay-As-You-Go." },
        { id: 'd', text: "Enable Microsoft Defender plans (paid workload protections) for the relevant resource types." },
      ],
      correctId: 'd',
      explanation:
        "The free tier is CSPM only. Threat detection requires enabling specific Microsoft Defender plans (for example, Defender for Servers or Defender for SQL).",
    },
    {
      id: 'sc900-71',
      topic: 'Defender for Endpoint',
      question:
        "Which feature in Microsoft Defender for Endpoint inventories software on managed devices and rates known vulnerabilities by severity and exposure?",
      options: [
        { id: 'a', text: "Microsoft Defender Vulnerability Management." },
        { id: 'b', text: "Conditional Access named locations." },
        { id: 'c', text: "Compliance Manager improvement actions." },
        { id: 'd', text: "Microsoft Purview eDiscovery." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Defender Vulnerability Management is integrated with Defender for Endpoint and surfaces vulnerable software, weak configurations, and exposure scores. The other tools serve identity and compliance.",
    },
    {
      id: 'sc900-72',
      topic: 'Microsoft Secure Score',
      question:
        "How is Microsoft Secure Score calculated?",
      options: [
        { id: 'a', text: "By taking points awarded for completed security recommendations against a maximum total, expressed as a percentage." },
        { id: 'b', text: "By counting the number of users with MFA enabled only." },
        { id: 'c', text: "By averaging Compliance Manager scores across assessments." },
        { id: 'd', text: "By summing the number of incidents in Microsoft Sentinel." },
      ],
      correctId: 'a',
      explanation:
        "Secure Score totals the points earned for implemented recommendations against the maximum and expresses it as a percentage. Compliance Manager is a separate scoring system focused on regulations.",
    },
    {
      id: 'sc900-73',
      topic: 'Microsoft Purview',
      question:
        "Which Microsoft offering is the unified data governance, risk, and compliance suite that includes information protection, DLP, eDiscovery, and audit?",
      options: [
        { id: 'a', text: "Microsoft Defender XDR." },
        { id: 'b', text: "Microsoft Purview." },
        { id: 'c', text: "Microsoft Sentinel." },
        { id: 'd', text: "Microsoft Entra ID Governance." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Purview is the GRC and data governance umbrella. Defender XDR and Sentinel are security operations products; Entra ID Governance focuses on identity governance.",
    },
    {
      id: 'sc900-74',
      topic: 'Compliance Manager',
      question:
        "Which Microsoft Purview feature provides assessment templates for regulations such as GDPR or ISO 27001, with improvement actions to raise the compliance score?",
      options: [
        { id: 'a', text: "Microsoft Purview Compliance Manager." },
        { id: 'b', text: "Microsoft Purview eDiscovery." },
        { id: 'c', text: "Microsoft Defender for Cloud." },
        { id: 'd', text: "Microsoft Entra Permissions Management." },
      ],
      correctId: 'a',
      explanation:
        "Compliance Manager ships templates for many regulations and standards and tracks improvement actions to raise compliance score. eDiscovery is for legal investigations.",
    },
    {
      id: 'sc900-75',
      topic: 'Compliance Manager',
      question:
        "Inside Microsoft Purview Compliance Manager, what is an improvement action?",
      options: [
        { id: 'a', text: "A recommended task that, when completed, increases compliance score for an assessment." },
        { id: 'b', text: "A Conditional Access policy enforced on users." },
        { id: 'c', text: "A Microsoft Sentinel analytics rule." },
        { id: 'd', text: "An Intune compliance policy." },
      ],
      correctId: 'a',
      explanation:
        "Improvement actions are concrete tasks (for example, enable audit log search) that raise compliance score when completed. They are not Conditional Access, Sentinel, or Intune artifacts.",
    },
    {
      id: 'sc900-76',
      topic: 'Service Trust Portal',
      question:
        "Where can customers download Microsoft's audit reports (for example, ISO 27001, SOC 2) and other compliance documentation?",
      options: [
        { id: 'a', text: "Microsoft Service Trust Portal." },
        { id: 'b', text: "Microsoft Defender portal." },
        { id: 'c', text: "Microsoft Sentinel workbooks." },
        { id: 'd', text: "Microsoft Entra admin centre." },
      ],
      correctId: 'a',
      explanation:
        "The Service Trust Portal hosts Microsoft's third-party audit reports and trust documentation. The other locations cover security operations, SIEM, and identity admin.",
    },
    {
      id: 'sc900-77',
      topic: 'Information Protection',
      question:
        "Which Microsoft Purview Information Protection feature classifies and protects documents and emails so a 'Confidential' label applies encryption and a watermark?",
      options: [
        { id: 'a', text: "Sensitivity labels." },
        { id: 'b', text: "Retention labels." },
        { id: 'c', text: "Insider Risk policies." },
        { id: 'd', text: "Compliance Manager assessments." },
      ],
      correctId: 'a',
      explanation:
        "Sensitivity labels classify content and can apply encryption and visual markings. Retention labels manage how long content is kept and when it is deleted.",
    },
    {
      id: 'sc900-78',
      topic: 'Data Lifecycle Management',
      question:
        "Which Microsoft Purview capability keeps a document for seven years and then deletes it automatically?",
      options: [
        { id: 'a', text: "Sensitivity labels." },
        { id: 'b', text: "Retention labels and policies in Microsoft Purview Data Lifecycle Management." },
        { id: 'c', text: "Conditional Access policies." },
        { id: 'd', text: "Microsoft Defender for Cloud Apps file policies." },
      ],
      correctId: 'b',
      explanation:
        "Retention labels and policies in Microsoft Purview Data Lifecycle Management control how long content lives and what happens at the end. Sensitivity labels classify content; they do not manage retention.",
    },
    {
      id: 'sc900-79',
      topic: 'DLP',
      question:
        "Which Microsoft Purview capability stops a user from emailing a customer credit card number outside the organisation by inspecting the message and blocking the send?",
      options: [
        { id: 'a', text: "Microsoft Purview Data Loss Prevention (DLP)." },
        { id: 'b', text: "Microsoft Purview eDiscovery." },
        { id: 'c', text: "Microsoft Defender for Identity." },
        { id: 'd', text: "Microsoft Sentinel hunting queries." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Purview DLP inspects content against policies (built-in templates exist for credit cards, national IDs, and more) and can block, warn, or audit. eDiscovery is for legal discovery.",
    },
    {
      id: 'sc900-80',
      topic: 'Insider Risk Management',
      question:
        "An employee under notice starts downloading large volumes of files from SharePoint. Which Microsoft Purview capability detects this risky pattern and triggers an alert?",
      options: [
        { id: 'a', text: "Microsoft Purview Insider Risk Management." },
        { id: 'b', text: "Microsoft Purview Communication Compliance." },
        { id: 'c', text: "Microsoft Defender for Cloud." },
        { id: 'd', text: "Microsoft Entra Identity Protection." },
      ],
      correctId: 'a',
      explanation:
        "Insider Risk Management correlates HR signals (such as resignation) with activity signals to detect risky internal behaviour. Communication Compliance reviews messages for policy violations like harassment.",
    },
    {
      id: 'sc900-81',
      topic: 'Communication Compliance',
      question:
        "Which Microsoft Purview capability scans Teams chats and emails for policy violations such as harassment or sharing of confidential information?",
      options: [
        { id: 'a', text: "Microsoft Purview Communication Compliance." },
        { id: 'b', text: "Microsoft Purview Insider Risk Management." },
        { id: 'c', text: "Microsoft Defender for Office 365." },
        { id: 'd', text: "Microsoft Sentinel." },
      ],
      correctId: 'a',
      explanation:
        "Communication Compliance evaluates user communications against policies such as offensive language or confidential data sharing. Insider Risk focuses on broader user activity, including device and file events.",
    },
    {
      id: 'sc900-82',
      topic: 'eDiscovery',
      question:
        "Which Microsoft Purview eDiscovery tier supports holds, advanced review, and machine learning analytics for large legal cases across Microsoft 365 content?",
      options: [
        { id: 'a', text: "Microsoft Purview eDiscovery (Standard)." },
        { id: 'b', text: "Microsoft Purview eDiscovery (Premium)." },
        { id: 'c', text: "Content Search only." },
        { id: 'd', text: "Microsoft Defender for Office 365." },
      ],
      correctId: 'b',
      explanation:
        "eDiscovery (Premium) supports advanced review, custodian management, and ML-based analytics. Standard supports holds and exports but lacks the advanced workflow.",
    },
    {
      id: 'sc900-83',
      topic: 'Audit',
      question:
        "Which Microsoft Purview capability records administrator and user activities across Microsoft 365 services so that investigators can reconstruct who did what and when?",
      options: [
        { id: 'a', text: "Microsoft Purview Audit." },
        { id: 'b', text: "Microsoft Purview eDiscovery." },
        { id: 'c', text: "Microsoft Sentinel." },
        { id: 'd', text: "Microsoft Defender for Cloud." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Purview Audit captures and retains audit logs across Microsoft 365 services. eDiscovery uses those logs but its purpose is legal discovery.",
    },
    {
      id: 'sc900-84',
      topic: 'Audit Tiers',
      question:
        "Which Purview Audit tier provides longer default retention and richer audit events such as MailItemsAccessed?",
      options: [
        { id: 'a', text: "Microsoft Purview Audit (Standard)." },
        { id: 'b', text: "Microsoft Purview Audit (Premium)." },
        { id: 'c', text: "Microsoft Sentinel basic logs." },
        { id: 'd', text: "Microsoft Defender Vulnerability Management." },
      ],
      correctId: 'b',
      explanation:
        "Audit (Premium) provides one-year default retention, customisable retention policies, and high-value events like MailItemsAccessed. Standard offers shorter retention and a smaller event set.",
    },
    {
      id: 'sc900-85',
      topic: 'Sensitivity Labels',
      question:
        "Where can a Microsoft Purview sensitivity label be applied?",
      options: [
        { id: 'a', text: "To documents and emails, Teams, SharePoint sites, Microsoft 365 groups, and Power BI assets." },
        { id: 'b', text: "Only to Outlook emails." },
        { id: 'c', text: "Only to on-premises file shares." },
        { id: 'd', text: "Only to SharePoint Online." },
      ],
      correctId: 'a',
      explanation:
        "Sensitivity labels apply across Office documents, emails, Teams, SharePoint sites, Microsoft 365 groups, and Power BI. Restricting them to a single workload would defeat their purpose.",
    },
    {
      id: 'sc900-86',
      topic: 'Trainable Classifiers',
      question:
        "Which Microsoft Purview feature lets administrators train the system to recognise organisation-specific content categories (for example, source code or contracts) for use in DLP and labels?",
      options: [
        { id: 'a', text: "Trainable classifiers." },
        { id: 'b', text: "Compliance Manager assessments." },
        { id: 'c', text: "Microsoft Sentinel watchlists." },
        { id: 'd', text: "Microsoft Defender for Endpoint custom indicators." },
      ],
      correctId: 'a',
      explanation:
        "Trainable classifiers learn from labelled samples and identify content patterns specific to the organisation. Compliance Manager and the other tools are not classification engines.",
    },
    {
      id: 'sc900-87',
      topic: 'Records Management',
      question:
        "Which Microsoft Purview capability lets a regulated organisation declare specific documents as records, immutable for a defined period, with formal disposition review?",
      options: [
        { id: 'a', text: "Microsoft Purview Records Management." },
        { id: 'b', text: "Microsoft Defender for Office 365." },
        { id: 'c', text: "Microsoft Entra ID Protection." },
        { id: 'd', text: "Microsoft Sentinel." },
      ],
      correctId: 'a',
      explanation:
        "Records Management, part of Data Lifecycle Management, supports record declaration, immutability, and disposition review. The other services do not manage records.",
    },
    {
      id: 'sc900-88',
      topic: 'Microsoft Priva',
      question:
        "Which Microsoft offering helps an organisation discover personal data, automate subject rights requests, and run privacy risk assessments on its Microsoft 365 estate?",
      options: [
        { id: 'a', text: "Microsoft Priva." },
        { id: 'b', text: "Microsoft Defender for Identity." },
        { id: 'c', text: "Microsoft Sentinel." },
        { id: 'd', text: "Microsoft Intune." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Priva is the privacy management product that handles subject rights requests and privacy risk. Defender for Identity, Sentinel, and Intune address different problems.",
    },
    {
      id: 'sc900-89',
      topic: 'Compliance Score',
      question:
        "Compliance Manager assigns each improvement action a number of points and a category. Which characteristic typically gives an action a higher number of points?",
      options: [
        { id: 'a', text: "Whether it is technical or documentary in nature only." },
        { id: 'b', text: "Whether the action is preventative or detective and how broadly it reduces risk." },
        { id: 'c', text: "How often Microsoft updates its marketing pages." },
        { id: 'd', text: "Whether it is owned by Microsoft rather than the customer." },
      ],
      correctId: 'b',
      explanation:
        "Compliance Manager weights actions by how they reduce risk: preventative, detective, or corrective, and the breadth of impact. Microsoft-owned actions count separately and do not increase customer score.",
    },
    {
      id: 'sc900-90',
      topic: 'DLP',
      question:
        "Which surfaces can a single Microsoft Purview DLP policy cover today?",
      options: [
        { id: 'a', text: "Exchange, SharePoint, OneDrive, Teams, Microsoft 365 endpoints (Endpoint DLP), and supported third-party apps." },
        { id: 'b', text: "Only Exchange Online." },
        { id: 'c', text: "Only Windows endpoints." },
        { id: 'd', text: "Only on-premises file shares." },
      ],
      correctId: 'a',
      explanation:
        "Purview DLP applies across Exchange, SharePoint, OneDrive, Teams, Endpoint DLP on Windows and macOS, and supported third-party apps. It is not limited to a single workload.",
    },
    {
      id: 'sc900-91',
      topic: 'eDiscovery',
      question:
        "Which Microsoft Purview eDiscovery feature preserves content in place so it cannot be permanently deleted while a case is active?",
      options: [
        { id: 'a', text: "Hold." },
        { id: 'b', text: "Search." },
        { id: 'c', text: "Export." },
        { id: 'd', text: "Improvement action." },
      ],
      correctId: 'a',
      explanation:
        "An eDiscovery hold preserves content in place during a legal matter. Search and export are later steps in the workflow; improvement actions belong to Compliance Manager.",
    },
    {
      id: 'sc900-92',
      topic: 'Sensitivity Labels',
      question:
        "What happens when a sensitivity label that applies encryption is attached to a Word document that is then emailed externally?",
      options: [
        { id: 'a', text: "Encryption travels with the file, so only authorised recipients can open it even outside the organisation." },
        { id: 'b', text: "The encryption is stripped automatically when the file leaves the tenant." },
        { id: 'c', text: "The label is replaced with a Public label." },
        { id: 'd', text: "The file becomes a plain text file." },
      ],
      correctId: 'a',
      explanation:
        "Sensitivity labels embed encryption and usage rights in the file itself, so protection persists outside the tenant. The label is not stripped on egress.",
    },
    {
      id: 'sc900-93',
      topic: 'Insider Risk Management',
      question:
        "Which design principle does Microsoft Purview Insider Risk Management apply when surfacing risky activity?",
      options: [
        { id: 'a', text: "Pseudonymisation of user identities by default, with role-based access for investigators to reveal identity when justified." },
        { id: 'b', text: "Always show full user details to every administrator." },
        { id: 'c', text: "Send all alerts to the user's manager automatically." },
        { id: 'd', text: "Disable the feature whenever an alert fires." },
      ],
      correctId: 'a',
      explanation:
        "Insider Risk Management pseudonymises user names by default and uses role-based access to control when full identity is revealed. Broadcasting full details to every admin would not match the privacy-by-design approach.",
    },
    {
      id: 'sc900-94',
      topic: 'Compliance Manager',
      question:
        "Which scoring concept appears in Microsoft Purview Compliance Manager to indicate how much of the controls an organisation has implemented for a given assessment?",
      options: [
        { id: 'a', text: "Compliance score." },
        { id: 'b', text: "Microsoft Secure Score." },
        { id: 'c', text: "Defender for Cloud secure score." },
        { id: 'd', text: "Adoption score." },
      ],
      correctId: 'a',
      explanation:
        "Compliance Manager exposes a compliance score per assessment. Microsoft Secure Score and Defender for Cloud secure score measure security posture, not compliance.",
    },
    {
      id: 'sc900-95',
      topic: 'Microsoft Purview Portal',
      question:
        "Where do administrators today configure sensitivity labels, retention policies, DLP, eDiscovery, audit, and Insider Risk policies?",
      options: [
        { id: 'a', text: "Microsoft Purview portal." },
        { id: 'b', text: "Microsoft Defender portal." },
        { id: 'c', text: "Microsoft Entra admin centre." },
        { id: 'd', text: "Microsoft Sentinel workspace." },
      ],
      correctId: 'a',
      explanation:
        "The Microsoft Purview portal is the unified location for compliance and data governance configuration. The Defender and Entra portals cover security operations and identity, respectively.",
    },
    {
      id: 'sc900-96',
      topic: 'eDiscovery vs Audit',
      question:
        "What is the main difference between Microsoft Purview Audit and Microsoft Purview eDiscovery?",
      options: [
        { id: 'a', text: "Audit captures activity logs of who did what; eDiscovery searches and preserves content for legal cases." },
        { id: 'b', text: "Audit is for finance only; eDiscovery is for marketing." },
        { id: 'c', text: "They are identical and one is being deprecated." },
        { id: 'd', text: "Audit applies only to identity, and eDiscovery only to network traffic." },
      ],
      correctId: 'a',
      explanation:
        "Audit captures actions taken in Microsoft 365 services; eDiscovery searches and preserves content (mailboxes, sites) for legal or regulatory cases. They serve different but complementary purposes.",
    },
    {
      id: 'sc900-97',
      topic: 'Sensitivity vs Retention',
      question:
        "How do sensitivity labels and retention labels differ?",
      options: [
        { id: 'a', text: "Sensitivity labels classify content and can encrypt or mark it; retention labels manage how long content is kept and when it is deleted." },
        { id: 'b', text: "Sensitivity labels apply only to email; retention labels apply only to files." },
        { id: 'c', text: "Sensitivity labels are deprecated; retention labels replace them." },
        { id: 'd', text: "They are the same control with different names." },
      ],
      correctId: 'a',
      explanation:
        "Sensitivity labels classify and protect; retention labels govern lifecycle (how long to keep, when to delete). They are complementary, not interchangeable.",
    },
    {
      id: 'sc900-98',
      topic: 'Insider Risk Templates',
      question:
        "Which scenario fits a built-in Microsoft Purview Insider Risk Management policy template?",
      options: [
        { id: 'a', text: "Detecting potential data theft by departing employees based on resignation HR signals plus file activity." },
        { id: 'b', text: "Filtering inbound phishing emails." },
        { id: 'c', text: "Vulnerability scanning of laptops." },
        { id: 'd', text: "Managing Conditional Access policies." },
      ],
      correctId: 'a',
      explanation:
        "Insider Risk Management ships templates such as 'Data theft by departing users' that combine HR signals with file and device activity. Phishing, vulnerability scanning, and Conditional Access are handled by other products.",
    },
    {
      id: 'sc900-99',
      topic: 'Compliance Score',
      question:
        "What is the difference between Microsoft Secure Score and Compliance Manager compliance score?",
      options: [
        { id: 'a', text: "Microsoft Secure Score measures security posture across identity, devices, and Microsoft 365 workloads; Compliance Manager compliance score measures progress against regulatory and standards-based controls." },
        { id: 'b', text: "They are the same number expressed in two portals." },
        { id: 'c', text: "Microsoft Secure Score covers compliance; Compliance Manager covers identity only." },
        { id: 'd', text: "Compliance Manager only scores Azure resources." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Secure Score is about security posture; Compliance Manager compliance score is about regulatory and standards alignment. They use different inputs and are presented in different portals.",
    },
    {
      id: 'sc900-100',
      topic: 'Purview Discovery',
      question:
        "Which Microsoft Purview capability inventories and classifies data assets across cloud and on-premises sources (such as Azure SQL, Amazon S3, and on-prem SQL Server) in a single data map?",
      options: [
        { id: 'a', text: "Microsoft Purview Data Map and Data Catalog." },
        { id: 'b', text: "Microsoft Defender for Cloud." },
        { id: 'c', text: "Microsoft Sentinel watchlists." },
        { id: 'd', text: "Microsoft Entra Verified ID." },
      ],
      correctId: 'a',
      explanation:
        "The Microsoft Purview Data Map and Data Catalog scan and classify data across multicloud and on-premises sources for governance. Defender for Cloud and Sentinel are security products, not data catalogs.",
    },
  ],
}
