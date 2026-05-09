import type { ExamSet } from '../types'

export const az500: ExamSet = {
  examCode: 'AZ-500',
  examName: 'Azure Security Engineer Associate',
  description:
    'One hundred practice questions at the level of the official AZ-500 exam. Manage identity and access, secure networking, secure compute, storage, and databases, and manage security operations.',
  ceCourseSlug: 'azure-security-engineer',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-security-engineer',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'az500-1',
      topic: 'Identity and Access',
      question:
        "An attacker keeps brute-forcing RDP on a production VM. You need to allow on-demand admin access only when it is needed and block port 3389 the rest of the time. What do you configure?",
      options: [
        { id: 'a', text: "An NSG rule that always allows TCP 3389 from a known IP." },
        { id: 'b', text: "A Conditional Access policy for the VM." },
        { id: 'c', text: "Just-in-Time VM access in Microsoft Defender for Cloud." },
        { id: 'd', text: "Azure Front Door with WAF in front of the VM." },
      ],
      correctId: 'c',
      explanation:
        "Just-in-Time VM access in Defender for Cloud opens management ports only when an authorised user requests access, then closes them again. A static NSG allow rule leaves the port open all the time, which is what you want to avoid.",
    },
    {
      id: 'az500-2',
      topic: 'Identity and Access',
      question:
        "Finance staff use a SaaS payroll app outside the corporate network. You must require MFA when sign-in risk is medium or high, but allow normal sign-in from a compliant device. Which control do you use?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Identity Protection sign-in risk policy combined with a Conditional Access policy." },
        { id: 'b', text: "Per-user MFA enabled for every finance user." },
        { id: 'c', text: "A Microsoft Entra ID Privileged Identity Management role assignment." },
        { id: 'd', text: "Microsoft Entra ID security defaults." },
      ],
      correctId: 'a',
      explanation:
        "Identity Protection produces a sign-in risk signal that a Conditional Access policy can use to require MFA only when risk is medium or high. Per-user MFA prompts every sign-in regardless of risk, and security defaults cannot be tuned per signal.",
    },
    {
      id: 'az500-3',
      topic: 'Identity and Access',
      question:
        "Your tenant has 30 admins. Most of them only need elevated rights a few hours per month. You want to keep them as standing eligible for the role and require approval and MFA when they activate. Which feature fits?",
      options: [
        { id: 'a', text: "Microsoft Entra ID B2B collaboration." },
        { id: 'b', text: "Microsoft Entra ID access reviews." },
        { id: 'c', text: "Microsoft Entra ID Privileged Identity Management with eligible assignments." },
        { id: 'd', text: "Azure RBAC with permanent role assignments." },
      ],
      correctId: 'c',
      explanation:
        "PIM eligible assignments require admins to activate the role on demand and can enforce approval, MFA, and a time limit. Permanent RBAC assignments leave rights standing all the time, which is the risk you want to remove.",
    },
    {
      id: 'az500-4',
      topic: 'Secure Networking',
      question:
        "A web app in an App Service plan is exposed to the public internet. You need a Layer 7 firewall that filters by URL, blocks SQL injection, and uses the OWASP managed rule set. Which service do you put in front of it?",
      options: [
        { id: 'a', text: "Azure Firewall Standard." },
        { id: 'b', text: "An NSG attached to the App Service subnet." },
        { id: 'c', text: "Azure Application Gateway with WAF." },
        { id: 'd', text: "Azure DDoS Protection Standard." },
      ],
      correctId: 'c',
      explanation:
        "Application Gateway WAF inspects HTTP and HTTPS traffic at Layer 7 and ships with the OWASP managed rule sets. Azure Firewall Standard is a network firewall and does not run the OWASP rules.",
    },
    {
      id: 'az500-5',
      topic: 'Secure Networking',
      question:
        "You want internal apps to reach an Azure Storage account without traffic ever leaving the Microsoft backbone, and the storage account must reject all public traffic. Which combination meets the requirement?",
      options: [
        { id: 'a', text: "A service endpoint on the subnet, with the storage firewall set to allow all networks." },
        { id: 'b', text: "Azure Bastion in the same VNet as the storage account." },
        { id: 'c', text: "A user-defined route forcing storage traffic through Azure Firewall." },
        { id: 'd', text: "A Private Endpoint on the storage account, with public network access disabled." },
      ],
      correctId: 'd',
      explanation:
        "A Private Endpoint gives the storage account a private IP in your VNet, and disabling public access blocks the public endpoint completely. A service endpoint still uses the public endpoint with VNet identity attached.",
    },
    {
      id: 'az500-6',
      topic: 'Secure Compute',
      question:
        "Your security team must guarantee that the keys protecting an Azure SQL Database transparent data encryption (TDE) cannot be exported and are protected by FIPS 140-2 Level 3 hardware. Where do you store the key?",
      options: [
        { id: 'a', text: "Azure Key Vault Standard." },
        { id: 'b', text: "Azure Key Vault Premium with HSM-backed keys." },
        { id: 'c', text: "A managed identity assigned to the SQL server." },
        { id: 'd', text: "An Azure Storage account with customer-managed keys." },
      ],
      correctId: 'b',
      explanation:
        "Key Vault Premium uses HSMs validated at FIPS 140-2 Level 3 and keys generated there cannot be exported. The Standard tier uses software-protected keys that do not meet that hardware bar.",
    },
    {
      id: 'az500-7',
      topic: 'Security Operations',
      question:
        "You want a single dashboard that shows your environment's compliance against ISO 27001, PCI DSS, and the Microsoft cloud security benchmark, with a percentage score per control. Which feature do you open?",
      options: [
        { id: 'a', text: "Azure Policy compliance blade only." },
        { id: 'b', text: "Microsoft Sentinel workbook gallery." },
        { id: 'c', text: "Microsoft Entra ID access reviews." },
        { id: 'd', text: "Microsoft Defender for Cloud regulatory compliance dashboard." },
      ],
      correctId: 'd',
      explanation:
        "The regulatory compliance dashboard in Defender for Cloud maps your resources against built-in standards like ISO 27001 and PCI DSS and gives a per-control score. Azure Policy alone reports policy compliance without the standard mapping.",
    },
    {
      id: 'az500-8',
      topic: 'Security Operations',
      question:
        "A SOC analyst wants to write a hunting query that lists every sign-in to Microsoft Entra ID from a country where the company has no offices. Which language do they use in Microsoft Sentinel?",
      options: [
        { id: 'a', text: "T-SQL." },
        { id: 'b', text: "PowerShell DSC." },
        { id: 'c', text: "Kusto Query Language (KQL)." },
        { id: 'd', text: "JMESPath." },
      ],
      correctId: 'c',
      explanation:
        "Sentinel and Log Analytics queries use KQL. T-SQL is for relational databases and JMESPath is a JSON path syntax used by the Azure CLI.",
    },
    {
      id: 'az500-9',
      topic: 'Identity and Access',
      question:
        "Customers sign in to your retail app with Google or a local email and password. You need a separate identity directory for these external customers, kept apart from your employees. Which service do you use?",
      options: [
        { id: 'a', text: "Microsoft Entra ID B2B collaboration." },
        { id: 'b', text: "Microsoft Entra External ID for customers (the next-generation CIAM solution)." },
        { id: 'c', text: "Active Directory Domain Services on a VM." },
        { id: 'd', text: "Microsoft Entra Domain Services." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra External ID for customers is the next-generation CIAM solution with social sign-in and a separate directory from your employees. It is not a rename of Azure AD B2C — Azure AD B2C is a distinct legacy product that remains available to existing customers. B2B collaboration is for partner/guest scenarios with other businesses, not retail consumer identity.",
    },
    {
      id: 'az500-10',
      topic: 'Secure Networking',
      question:
        "Admins connect to Windows VMs over RDP. You want to remove every public IP from the VMs and still let admins connect from the Azure portal without a VPN. Which service do you deploy?",
      options: [
        { id: 'a', text: "Azure Bastion." },
        { id: 'b', text: "Azure Firewall Premium." },
        { id: 'c', text: "Point-to-site VPN." },
        { id: 'd', text: "Azure Front Door Premium." },
      ],
      correctId: 'a',
      explanation:
        "Azure Bastion is a managed jump host inside the VNet that lets admins reach VMs over RDP or SSH from the portal, with no public IP on the target VM. A point-to-site VPN works but still requires a client and does not remove the need to publish a connection to each VM.",
    },
    {
      id: 'az500-11',
      topic: 'Secure Compute',
      question:
        "You must encrypt OS and data disks of Windows VMs with keys you control, and you want OS-level encryption (BitLocker) rather than only platform-level encryption. Which option do you choose?",
      options: [
        { id: 'a', text: "Server-side encryption with platform-managed keys." },
        { id: 'b', text: "Storage Service Encryption with customer-managed keys." },
        { id: 'c', text: "Azure Disk Encryption (ADE) with keys in Key Vault." },
        { id: 'd', text: "Azure Information Protection." },
      ],
      correctId: 'c',
      explanation:
        "Azure Disk Encryption uses BitLocker on Windows or DM-Crypt on Linux and stores the key encryption key in Key Vault. Server-side encryption with platform keys does not give you BitLocker inside the guest OS.",
    },
    {
      id: 'az500-12',
      topic: 'Security Operations',
      question:
        "Defender for Cloud shows a 62 percent secure score for your subscription and lists 14 recommendations. Which action will raise the score the most?",
      options: [
        { id: 'a', text: "Dismissing the recommendations marked low severity." },
        { id: 'b', text: "Enabling Microsoft Sentinel on the workspace." },
        { id: 'c', text: "Implementing the recommendations with the highest potential score increase." },
        { id: 'd', text: "Buying Defender for Servers Plan 2 for the subscription." },
      ],
      correctId: 'c',
      explanation:
        "Each recommendation in Defender for Cloud lists the secure score points it adds when remediated. Buying a Defender plan does not in itself raise the score, and dismissing items does not change the underlying posture.",
    },
    {
      id: 'az500-13',
      topic: 'Identity and Access',
      question:
        "An external auditor needs read-only access to Microsoft Entra ID for two weeks. You must grant the access without creating a member account in your tenant. Which option fits?",
      options: [
        { id: 'a', text: "Share your own admin password through Azure Key Vault." },
        { id: 'b', text: "Create a member user with Global Administrator." },
        { id: 'c', text: "Create a B2B guest user invitation and assign the Global Reader role." },
        { id: 'd', text: "Add the auditor's email to the security defaults exclusion list." },
      ],
      correctId: 'c',
      explanation:
        "B2B collaboration invites an external identity as a guest while authentication stays in the auditor's home tenant. Assigning Global Reader gives read-only Entra ID access without creating a member or sharing a password.",
    },
    {
      id: 'az500-14',
      topic: 'Secure Networking',
      question:
        "An Azure Firewall Standard policy already filters traffic between spokes. The security team now needs TLS inspection and an IDPS. Which upgrade is required?",
      options: [
        { id: 'a', text: "Azure Firewall Basic." },
        { id: 'b', text: "Azure DDoS Protection Standard." },
        { id: 'c', text: "Application Gateway WAF v2." },
        { id: 'd', text: "Azure Firewall Premium." },
      ],
      correctId: 'd',
      explanation:
        "TLS inspection and the signature-based intrusion detection and prevention system are Premium-only features of Azure Firewall. Application Gateway WAF inspects HTTP only and is not a network firewall.",
    },
    {
      id: 'az500-15',
      topic: 'Secure Compute',
      question:
        "A storage account holds healthcare records. You must detect anomalous access, malware uploaded to a container, and suspicious sign-in patterns to the account. Which plan do you enable?",
      options: [
        { id: 'a', text: "Microsoft Defender for Storage." },
        { id: 'b', text: "Microsoft Defender for SQL." },
        { id: 'c', text: "Microsoft Defender for Key Vault." },
        { id: 'd', text: "Microsoft Defender for Resource Manager." },
      ],
      correctId: 'a',
      explanation:
        "Defender for Storage runs on storage accounts and detects anomalous data access plus malware scanning on uploads. Defender for SQL covers Azure SQL, not blob storage.",
    },
    {
      id: 'az500-16',
      topic: 'Security Operations',
      question:
        "You ingest sign-in logs from Microsoft Entra ID into Microsoft Sentinel. You need automatic alerts when a single user fails sign-in 100 times within 10 minutes from different IPs. Which Sentinel feature do you create?",
      options: [
        { id: 'a', text: "A scheduled analytics rule with a KQL query." },
        { id: 'b', text: "A workbook tile." },
        { id: 'c', text: "A data connector." },
        { id: 'd', text: "A watchlist." },
      ],
      correctId: 'a',
      explanation:
        "Scheduled analytics rules run a KQL query on a timer and create incidents when results match the threshold. Workbooks visualise data and watchlists are reference lists, neither produces alerts on their own.",
    },
    {
      id: 'az500-17',
      topic: 'Identity and Access',
      question:
        "A finance director must keep her standing access to read invoices but should be required to perform MFA every time she signs in from outside the corporate network. Which design fits?",
      options: [
        { id: 'a', text: "Move the user to security defaults." },
        { id: 'b', text: "A PIM eligible role assignment for the user." },
        { id: 'c', text: "Per-user MFA enabled in Microsoft Entra ID." },
        { id: 'd', text: "A Conditional Access policy that requires MFA when the location is not the trusted office IP range." },
      ],
      correctId: 'd',
      explanation:
        "Conditional Access lets you trigger MFA based on a named location. PIM is for elevation, not for continuous read access, and per-user MFA prompts on every sign-in regardless of location.",
    },
    {
      id: 'az500-18',
      topic: 'Secure Networking',
      question:
        "A subnet hosts a 3-tier application. You must allow only the App Gateway subnet to reach port 443 of the web tier. Which control gives the most direct match?",
      options: [
        { id: 'a', text: "An NSG on the web tier subnet that allows TCP 443 from the App Gateway subnet." },
        { id: 'b', text: "A user-defined route on the web tier." },
        { id: 'c', text: "An Azure Firewall application rule." },
        { id: 'd', text: "A service endpoint on the web tier subnet." },
      ],
      correctId: 'a',
      explanation:
        "An NSG rule scoped to the source subnet is the most direct way to allow only that traffic. UDRs control routing, not allow or deny decisions.",
    },
    {
      id: 'az500-19',
      topic: 'Secure Compute',
      question:
        "Your Azure SQL database stores credit card numbers. The DBA team should be able to query the table for backup work without ever seeing the plaintext card numbers. Which feature fits?",
      options: [
        { id: 'a', text: "Transparent Data Encryption (TDE)." },
        { id: 'b', text: "Always Encrypted with deterministic encryption." },
        { id: 'c', text: "Dynamic Data Masking." },
        { id: 'd', text: "Row-Level Security." },
      ],
      correctId: 'b',
      explanation:
        "Always Encrypted encrypts data on the client and the SQL engine never sees plaintext, so a DBA running queries cannot read the values. TDE protects the storage at rest but the engine still returns plaintext to the caller.",
    },
    {
      id: 'az500-20',
      topic: 'Security Operations',
      question:
        "You enable Microsoft Defender for Servers Plan 2 on a subscription. Which capability does Plan 2 add that Plan 1 does not?",
      options: [
        { id: 'a', text: "Microsoft Defender for Endpoint integration only." },
        { id: 'b', text: "Defender for Cloud regulatory compliance dashboard." },
        { id: 'c', text: "Microsoft Sentinel data ingestion." },
        { id: 'd', text: "File integrity monitoring, just-in-time VM access, and a log ingestion allowance." },
      ],
      correctId: 'd',
      explanation:
        "Plan 2 adds features such as file integrity monitoring, just-in-time VM access, vulnerability assessment, and a daily log ingestion allowance. Defender for Endpoint integration ships in both Plan 1 and Plan 2.",
    },
    {
      id: 'az500-21',
      topic: 'Identity and Access',
      question:
        "A developer registers an application in Microsoft Entra ID. You want to grant the app permission to read users from Microsoft Graph without a signed-in user present. Which permission type do you use?",
      options: [
        { id: 'a', text: "Delegated permission with admin consent." },
        { id: 'b', text: "Application permission with admin consent." },
        { id: 'c', text: "A user assignment to the app." },
        { id: 'd', text: "A Microsoft Entra role for the developer." },
      ],
      correctId: 'b',
      explanation:
        "Application permissions are used by daemon-style apps that act without a signed-in user and require admin consent. Delegated permissions always run on behalf of a signed-in user.",
    },
    {
      id: 'az500-22',
      topic: 'Secure Networking',
      question:
        "Your perimeter Azure Firewall has rule collections of types Application, Network, and DNAT. You need to allow outbound HTTPS to *.contoso.com. Which rule collection type fits?",
      options: [
        { id: 'a', text: "DNAT rule collection." },
        { id: 'b', text: "Network rule collection." },
        { id: 'c', text: "Application rule collection." },
        { id: 'd', text: "NSG outbound rule." },
      ],
      correctId: 'c',
      explanation:
        "Application rules in Azure Firewall use FQDNs and wildcard FQDNs over HTTP and HTTPS. Network rules use IP addresses and ports, not FQDNs.",
    },
    {
      id: 'az500-23',
      topic: 'Secure Compute',
      question:
        "A storage account uses Azure Files for line-of-business shares. Auditors require that an independent customer key, rotatable on demand, encrypts the data. Which option do you choose?",
      options: [
        { id: 'a', text: "Microsoft-managed keys (default)." },
        { id: 'b', text: "Server-side encryption with infrastructure encryption only." },
        { id: 'c', text: "Customer-managed keys (CMK) stored in Azure Key Vault." },
        { id: 'd', text: "Client-side encryption only." },
      ],
      correctId: 'c',
      explanation:
        "Customer-managed keys give you control over rotation and revocation while Azure performs the encryption. Microsoft-managed keys are not under your control and infrastructure encryption alone uses platform keys.",
    },
    {
      id: 'az500-24',
      topic: 'Security Operations',
      question:
        "An analyst writes the KQL line SecurityEvent | where EventID == 4625 | summarize count() by Account, IpAddress. What is this query designed to find?",
      options: [
        { id: 'a', text: "Successful sign-ins by account and IP." },
        { id: 'b', text: "Failed sign-ins grouped by account and IP." },
        { id: 'c', text: "Privilege escalation events." },
        { id: 'd', text: "Process creation events." },
      ],
      correctId: 'b',
      explanation:
        "Windows event ID 4625 is a failed logon. The query counts those failures grouped by account and source IP, which is a classic brute-force hunt.",
    },
    {
      id: 'az500-25',
      topic: 'Identity and Access',
      question:
        "Your tenant uses hybrid identity with password hash sync. The security team wants users to sign in to Microsoft Entra ID using Windows Hello for Business and reach on-premises file shares via SSO. Which authentication method gives the smoothest path?",
      options: [
        { id: 'a', text: "Pass-through authentication with seamless SSO." },
        { id: 'b', text: "Federation with AD FS." },
        { id: 'c', text: "Microsoft Entra ID Application Proxy only." },
        { id: 'd', text: "Cloud-only accounts with security defaults." },
      ],
      correctId: 'a',
      explanation:
        "Pass-through authentication with seamless single sign-on validates passwords against on-premises AD and gives Kerberos-based SSO to file shares. AD FS works but adds an extra federation server to operate.",
    },
    {
      id: 'az500-26',
      topic: 'Secure Networking',
      question:
        "An Azure Front Door Premium with WAF protects a global web app. You need to block traffic from a specific country and to rate-limit any IP that exceeds 100 requests per minute. Which feature do you use?",
      options: [
        { id: 'a', text: "Managed rule sets only." },
        { id: 'b', text: "An NSG on the origin." },
        { id: 'c', text: "Azure Firewall application rules." },
        { id: 'd', text: "Custom WAF rules with geo-match and rate-limit conditions." },
      ],
      correctId: 'd',
      explanation:
        "Custom WAF rules support geo-filtering and per-IP rate limits in Front Door and Application Gateway. Managed rule sets cover OWASP-style attacks but do not implement custom geo or rate logic.",
    },
    {
      id: 'az500-27',
      topic: 'Secure Compute',
      question:
        "A Windows VM must remain in the production subscription but you want to prevent anyone, including the owner, from deleting it accidentally. Which control fits?",
      options: [
        { id: 'a', text: "Azure Policy with the deny effect on Microsoft.Compute/virtualMachines/delete." },
        { id: 'b', text: "An Azure Resource Manager CanNotDelete lock on the VM." },
        { id: 'c', text: "A read-only role assignment for everyone." },
        { id: 'd', text: "Defender for Cloud workflow automation." },
      ],
      correctId: 'b',
      explanation:
        "A CanNotDelete lock on the resource blocks delete operations regardless of the caller's RBAC role. A custom Azure Policy could work but the built-in lock is the standard, simpler answer.",
    },
    {
      id: 'az500-28',
      topic: 'Security Operations',
      question:
        "You want Microsoft Sentinel to ingest Microsoft Entra ID sign-in logs and Office 365 audit logs. Which Sentinel feature do you configure first?",
      options: [
        { id: 'a', text: "Analytics rules." },
        { id: 'b', text: "Workbooks." },
        { id: 'c', text: "Data connectors." },
        { id: 'd', text: "Hunting queries." },
      ],
      correctId: 'c',
      explanation:
        "Data connectors are the entry point that pulls logs from a source into the Log Analytics workspace. Analytics rules and workbooks operate on the data after it has been ingested.",
    },
    {
      id: 'az500-29',
      topic: 'Identity and Access',
      question:
        "A break-glass account must keep working when MFA fails or Conditional Access blocks everyone else. How do you set it up?",
      options: [
        { id: 'a', text: "Add the account to security defaults." },
        { id: 'b', text: "Exclude the account from all Conditional Access policies and use a long randomly generated password stored in Key Vault." },
        { id: 'c', text: "Disable MFA for all global admins." },
        { id: 'd', text: "Use a guest B2B account." },
      ],
      correctId: 'b',
      explanation:
        "Best practice is two emergency Global Admin accounts excluded from Conditional Access, with strong unique passwords kept under tight control and monitored. Disabling MFA tenant-wide weakens every other admin.",
    },
    {
      id: 'az500-30',
      topic: 'Secure Networking',
      question:
        "Your VNet hub has Azure Firewall. The on-premises firewall already inspects traffic. You want spokes to send all internet-bound traffic via the on-premises firewall. Which Azure feature do you configure?",
      options: [
        { id: 'a', text: "Service endpoints on every spoke subnet." },
        { id: 'b', text: "Private DNS zones in every spoke." },
        { id: 'c', text: "A Conditional Access policy on the VPN gateway." },
        { id: 'd', text: "Forced tunnelling with a UDR sending 0.0.0.0/0 to the VPN gateway." },
      ],
      correctId: 'd',
      explanation:
        "Forced tunnelling uses a user-defined route with a 0.0.0.0/0 next hop pointing at the VPN or ExpressRoute gateway, sending all egress traffic on-premises. Service endpoints affect specific PaaS traffic, not the default route.",
    },
    {
      id: 'az500-31',
      topic: 'Secure Compute',
      question:
        "A development team needs to read a connection string from Azure Key Vault inside a Function App without managing secrets in code. Which approach fits?",
      options: [
        { id: 'a', text: "Store the secret in a configuration file inside the function code." },
        { id: 'b', text: "Use the storage account access key." },
        { id: 'c', text: "Use a shared access signature with full permissions." },
        { id: 'd', text: "Use a system-assigned managed identity on the Function App with Key Vault role assignments." },
      ],
      correctId: 'd',
      explanation:
        "A managed identity gives the Function App an Entra ID identity that you can grant Key Vault data plane access without storing credentials. A SAS or storage key would not solve the secret retrieval problem.",
    },
    {
      id: 'az500-32',
      topic: 'Security Operations',
      question:
        "A new alert in Defender for Cloud reports a suspicious PowerShell script on a Windows VM. You want the response to automatically isolate the VM and notify the SOC. Which feature creates that workflow?",
      options: [
        { id: 'a', text: "Workflow automation in Defender for Cloud using a Logic App." },
        { id: 'b', text: "An Azure Policy assignment." },
        { id: 'c', text: "A Sentinel watchlist." },
        { id: 'd', text: "An NSG flow log." },
      ],
      correctId: 'a',
      explanation:
        "Workflow automation in Defender for Cloud triggers a Logic App when an alert or recommendation fires, which can call APIs to isolate a VM and notify the SOC. Watchlists and flow logs do not run actions on their own.",
    },
    {
      id: 'az500-33',
      topic: 'Identity and Access',
      question:
        "An internal app expects roles passed as claims in a SAML token. Which Microsoft Entra ID concept do you use to assign users to those roles?",
      options: [
        { id: 'a', text: "Microsoft Entra ID built-in directory roles." },
        { id: 'b', text: "Enterprise application user assignment with app roles." },
        { id: 'c', text: "Azure RBAC role assignments on the subscription." },
        { id: 'd', text: "Microsoft Entra Domain Services group policies." },
      ],
      correctId: 'b',
      explanation:
        "App roles defined on the application registration appear as roles claims in the issued token, and you assign users or groups to those app roles in the Enterprise application. Azure RBAC controls Azure resources, not application-level roles.",
    },
    {
      id: 'az500-34',
      topic: 'Secure Networking',
      question:
        "You enable DDoS Protection Standard on a VNet. Which class of attack does the service add coverage against compared to the always-on basic protection?",
      options: [
        { id: 'a', text: "Application layer SQL injection." },
        { id: 'b', text: "Volumetric and protocol DDoS attacks with adaptive tuning, telemetry, and SLA credits." },
        { id: 'c', text: "Brute-force RDP attacks." },
        { id: 'd', text: "Phishing of users." },
      ],
      correctId: 'b',
      explanation:
        "DDoS Protection Standard adds adaptive tuning per resource, telemetry, attack mitigation reports, and SLA-backed cost protection on top of the basic platform protection. SQL injection and phishing are not network DDoS concerns.",
    },
    {
      id: 'az500-35',
      topic: 'Secure Compute',
      question:
        "An Azure SQL Managed Instance must use a customer-managed key for TDE. Which prerequisite must be configured on the SQL instance?",
      options: [
        { id: 'a', text: "A storage account with hierarchical namespace." },
        { id: 'b', text: "An Application Gateway in the same VNet." },
        { id: 'c', text: "A user-assigned managed identity granted access to Key Vault." },
        { id: 'd', text: "A Microsoft Entra ID Premium P2 license for every user." },
      ],
      correctId: 'c',
      explanation:
        "TDE with customer-managed keys requires the SQL instance to have a managed identity with key permissions in the Key Vault. The other items are unrelated to encryption configuration.",
    },
    {
      id: 'az500-36',
      topic: 'Security Operations',
      question:
        "Defender for Cloud lists a recommendation: Web application should only be accessible over HTTPS. The team wants this to be automatically enforced for new App Services. Which control adds the enforcement?",
      options: [
        { id: 'a', text: "Defender for Cloud secure score history." },
        { id: 'b', text: "An Azure Policy assignment with the matching built-in policy and the Deny or DeployIfNotExists effect." },
        { id: 'c', text: "A Microsoft Entra ID role." },
        { id: 'd', text: "A Sentinel automation rule." },
      ],
      correctId: 'b',
      explanation:
        "Recommendations in Defender for Cloud map to built-in Azure Policy definitions. Assigning the policy with a Deny or DeployIfNotExists effect enforces the rule at deployment time. Sentinel automation acts on incidents, not on resource configuration.",
    },
    {
      id: 'az500-37',
      topic: 'Identity and Access',
      question:
        "A Conditional Access policy uses the require compliant device control. Where does compliance status come from?",
      options: [
        { id: 'a', text: "Microsoft Intune device compliance state." },
        { id: 'b', text: "The Conditional Access policy itself." },
        { id: 'c', text: "Azure Policy for management groups." },
        { id: 'd', text: "Microsoft Defender for Cloud secure score." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Intune evaluates device compliance against MDM policies and writes the state back to Microsoft Entra ID, which Conditional Access reads. Defender for Cloud secure score is for Azure resource posture.",
    },
    {
      id: 'az500-38',
      topic: 'Secure Networking',
      question:
        "Two VNets in different regions must be reachable to each other privately and you want least operational overhead. Which option fits?",
      options: [
        { id: 'a', text: "Global VNet peering." },
        { id: 'b', text: "Site-to-site VPN between the VNets via the public internet." },
        { id: 'c', text: "Service endpoints on every subnet." },
        { id: 'd', text: "Azure Front Door." },
      ],
      correctId: 'a',
      explanation:
        "Global VNet peering connects VNets in different regions over the Microsoft backbone with low latency and no gateways to operate. A VPN adds gateway management and uses public internet paths.",
    },
    {
      id: 'az500-39',
      topic: 'Secure Compute',
      question:
        "Your team deploys containers to Azure Kubernetes Service. You want vulnerability scanning of the container images in your Azure Container Registry. Which Defender plan enables it?",
      options: [
        { id: 'a', text: "Microsoft Defender for App Service." },
        { id: 'b', text: "Microsoft Defender for Servers." },
        { id: 'c', text: "Microsoft Defender for Containers." },
        { id: 'd', text: "Microsoft Defender for SQL." },
      ],
      correctId: 'c',
      explanation:
        "Defender for Containers covers AKS hardening and ACR image vulnerability scanning. Defender for Servers covers VMs, not container registries.",
    },
    {
      id: 'az500-40',
      topic: 'Security Operations',
      question:
        "An alert from Microsoft Sentinel shows that an account performed impossible travel: sign-ins from Amsterdam and Sydney within an hour. Which Microsoft Entra ID feature normally raises this signal?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Domain Services." },
        { id: 'b', text: "Microsoft Entra ID Connect Health." },
        { id: 'c', text: "Microsoft Defender for Cloud Apps only." },
        { id: 'd', text: "Microsoft Entra ID Identity Protection." },
      ],
      correctId: 'd',
      explanation:
        "Identity Protection produces user and sign-in risk detections that include atypical travel and impossible travel. Sentinel can ingest these signals and raise incidents on top.",
    },
    {
      id: 'az500-41',
      topic: 'Identity and Access',
      question:
        "A team wants users to register MFA methods on first sign-in but does not want MFA challenged on every sign-in. Which configuration fits?",
      options: [
        { id: 'a', text: "Per-user MFA enabled for all users." },
        { id: 'b', text: "Combined registration in Microsoft Entra ID and a Conditional Access policy that triggers MFA only on risky sign-ins." },
        { id: 'c', text: "Security defaults turned on." },
        { id: 'd', text: "Microsoft Entra ID B2B settings." },
      ],
      correctId: 'b',
      explanation:
        "Combined security information registration lets users register MFA and self-service password reset in one flow, while Conditional Access decides when MFA is actually required. Security defaults force MFA on all admin actions and many user sign-ins.",
    },
    {
      id: 'az500-42',
      topic: 'Secure Networking',
      question:
        "You need to expose an internal HTTP API to a partner with a public hostname, TLS termination, header rewrites, and WAF, all in one service. Which option fits best?",
      options: [
        { id: 'a', text: "Azure Front Door Premium with WAF." },
        { id: 'b', text: "Azure Application Gateway WAF v2." },
        { id: 'c', text: "Azure Bastion." },
        { id: 'd', text: "Azure Firewall Standard." },
      ],
      correctId: 'b',
      explanation:
        "Application Gateway WAF v2 is the regional Layer 7 reverse proxy with TLS termination, header rewrite, and managed WAF. Front Door Premium is global; for a single regional partner endpoint App Gateway is the closer match.",
    },
    {
      id: 'az500-43',
      topic: 'Secure Compute',
      question:
        "You want an Azure VM disk to remain encrypted even if the storage account it lives on were ever compromised at the storage layer, by adding a second encryption layer with a customer key. Which feature fits?",
      options: [
        { id: 'a', text: "Encryption at host." },
        { id: 'b', text: "Storage Service Encryption with platform keys only." },
        { id: 'c', text: "Confidential VM with vTPM." },
        { id: 'd', text: "Double encryption with a disk encryption set using a customer-managed key, on top of platform encryption." },
      ],
      correctId: 'd',
      explanation:
        "A disk encryption set with a customer-managed key plus the default platform encryption gives a second, customer-controlled encryption layer. Encryption at host extends encryption to the host but does not by itself add a second key.",
    },
    {
      id: 'az500-44',
      topic: 'Security Operations',
      question:
        "An auditor asks for evidence of who has Owner role on a production subscription over the past 90 days. Which Microsoft Entra ID feature do you use?",
      options: [
        { id: 'a', text: "Microsoft Entra ID access reviews." },
        { id: 'b', text: "Microsoft Entra ID audit logs and PIM role activation history." },
        { id: 'c', text: "Microsoft Sentinel watchlists." },
        { id: 'd', text: "Azure Cost Management." },
      ],
      correctId: 'b',
      explanation:
        "Microsoft Entra ID audit logs and PIM history record role assignments and activations. Access reviews drive a recurring approval cycle but do not deliver historical access reports.",
    },
    {
      id: 'az500-45',
      topic: 'Identity and Access',
      question:
        "A Microsoft Entra ID application has client secret expiry coming up. The security team wants to use certificates instead. What replaces the client secret?",
      options: [
        { id: 'a', text: "A federated credential trust to GitHub." },
        { id: 'b', text: "A managed identity assigned to the application registration itself." },
        { id: 'c', text: "A certificate uploaded to the app registration's certificates and secrets blade." },
        { id: 'd', text: "An access package." },
      ],
      correctId: 'c',
      explanation:
        "App registrations support certificate credentials uploaded under certificates and secrets, and the application authenticates using a signed assertion. Managed identities are not assigned to app registrations, only to Azure resources.",
    },
    {
      id: 'az500-46',
      topic: 'Secure Networking',
      question:
        "A storage account uses a Private Endpoint. What does Azure require for clients to resolve the storage FQDN to the private IP?",
      options: [
        { id: 'a', text: "An NSG rule on the subnet." },
        { id: 'b', text: "Service endpoints on the storage subnet." },
        { id: 'c', text: "A user-defined route." },
        { id: 'd', text: "Integration with Azure Private DNS zones such as privatelink.blob.core.windows.net." },
      ],
      correctId: 'd',
      explanation:
        "Without DNS the FQDN still resolves to the public IP. The standard pattern is to link the privatelink.blob.core.windows.net Private DNS zone to the VNet so resolution returns the private IP.",
    },
    {
      id: 'az500-47',
      topic: 'Secure Compute',
      question:
        "You inherit an Azure SQL server with default settings. You must ensure that all connections use the server's identity-based authentication and disable the SQL admin login. Which step do you take?",
      options: [
        { id: 'a', text: "Enable Always Encrypted with deterministic encryption." },
        { id: 'b', text: "Configure Defender for SQL." },
        { id: 'c', text: "Set Microsoft Entra ID authentication only on the SQL server." },
        { id: 'd', text: "Enable Transparent Data Encryption." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID authentication only blocks SQL authentication completely on the logical server. Defender for SQL adds threat protection but does not change authentication.",
    },
    {
      id: 'az500-48',
      topic: 'Security Operations',
      question:
        "Your team wants to combine signals from Defender for Cloud, Microsoft Entra ID Identity Protection, Defender for Endpoint, and on-premises firewalls in a single SIEM with KQL hunting. Which service do you choose?",
      options: [
        { id: 'a', text: "Microsoft Sentinel." },
        { id: 'b', text: "Microsoft Defender XDR only." },
        { id: 'c', text: "Microsoft Purview." },
        { id: 'd', text: "Azure Monitor metrics." },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Sentinel is the cloud-native SIEM that ingests Microsoft and third-party data and supports KQL. Defender XDR correlates Microsoft signals only and is not a general-purpose SIEM.",
    },
    {
      id: 'az500-49',
      topic: 'Identity and Access',
      question:
        "You want to give a contractor temporary access to a single resource group as Contributor for 30 days, and have the access removed automatically. Which option fits without writing scripts?",
      options: [
        { id: 'a', text: "A standing RBAC assignment with a calendar reminder." },
        { id: 'b', text: "A PIM for Azure resources eligible role assignment with an expiry date and approval." },
        { id: 'c', text: "A Microsoft Entra ID directory role assignment." },
        { id: 'd', text: "A guest invitation only." },
      ],
      correctId: 'b',
      explanation:
        "PIM for Azure resources lets you assign a role with a fixed end date and require approval and MFA on activation. A standing RBAC assignment does not expire by itself.",
    },
    {
      id: 'az500-50',
      topic: 'Secure Networking',
      question:
        "An NSG sits on a subnet and another NSG sits on the NIC of a VM in that subnet. A packet must pass which checks for inbound traffic to be allowed?",
      options: [
        { id: 'a', text: "Only the subnet NSG." },
        { id: 'b', text: "Only the NIC NSG." },
        { id: 'c', text: "Both NSGs in turn; both must permit the packet." },
        { id: 'd', text: "Neither, NSGs only apply outbound." },
      ],
      correctId: 'c',
      explanation:
        "When NSGs sit on both subnet and NIC, the inbound traffic is evaluated by the subnet NSG first and the NIC NSG second; both must allow the traffic. NSGs evaluate both directions, not only outbound.",
    },
    {
      id: 'az500-51',
      topic: 'Secure Compute',
      question:
        "A storage account holds confidential reports. You must give a third-party tool read-only access to a single container for 24 hours, scoped to a specific IP range. Which option fits?",
      options: [
        { id: 'a', text: "Account-level shared access signature with all permissions." },
        { id: 'b', text: "User delegation SAS or service SAS scoped to the container with read permission, expiry, and IP range." },
        { id: 'c', text: "Anonymous public access on the container." },
        { id: 'd', text: "A storage account access key handed over." },
      ],
      correctId: 'b',
      explanation:
        "A user delegation SAS or service SAS lets you grant least privilege at the container or blob level with read permission, an expiry, and an allowed IP range. Account-level SAS or full account keys grant far broader access than required.",
    },
    {
      id: 'az500-52',
      topic: 'Security Operations',
      question:
        "Defender CSPM is enabled on a subscription. Which capability does it add over the foundational Defender for Cloud free tier?",
      options: [
        { id: 'a', text: "Free secure score across Azure subscriptions." },
        { id: 'b', text: "Microsoft Sentinel data ingestion." },
        { id: 'c', text: "Just-in-Time VM access only." },
        { id: 'd', text: "Attack path analysis, agentless scanning, governance rules, and external attack surface management." },
      ],
      correctId: 'd',
      explanation:
        "Defender Cloud Security Posture Management plan adds attack path analysis, agentless workload scanning, governance rules, and EASM. Just-in-Time and JIT-style protections are part of Defender for Servers Plan 2.",
    },
    {
      id: 'az500-53',
      topic: 'Identity and Access',
      question:
        "An external developer needs access to one Azure subscription only, identified via their own organisation's Microsoft Entra ID account. Which feature do you use?",
      options: [
        { id: 'a', text: "Federate your tenant with theirs." },
        { id: 'b', text: "Create a member account in your tenant with the developer's email." },
        { id: 'c', text: "Add them to security defaults." },
        { id: 'd', text: "Microsoft Entra ID B2B guest invitation, then RBAC assignment to the subscription." },
      ],
      correctId: 'd',
      explanation:
        "B2B guest invitation lets the developer authenticate with their home tenant credentials, while you control access in your tenant via RBAC. A federation trust is heavier and not needed for a single guest.",
    },
    {
      id: 'az500-54',
      topic: 'Secure Networking',
      question:
        "You want to inspect Layer 7 traffic between VNets in a hub-and-spoke architecture and route all spoke-to-spoke traffic through a single inspection point. Which design fits?",
      options: [
        { id: 'a', text: "Hub VNet with Azure Firewall Premium and UDRs in each spoke pointing at the firewall private IP." },
        { id: 'b', text: "Direct spoke-to-spoke peering with no firewall." },
        { id: 'c', text: "NSGs only on every NIC." },
        { id: 'd', text: "Service endpoints in every spoke." },
      ],
      correctId: 'a',
      explanation:
        "The standard hub-and-spoke pattern places Azure Firewall in the hub and uses UDRs in each spoke to send east-west traffic through the firewall. NSGs are not Layer 7 inspection.",
    },
    {
      id: 'az500-55',
      topic: 'Secure Compute',
      question:
        "An Azure Key Vault holds API keys for a payment provider. You want only the production app's managed identity to read the secrets, plus full audit of every secret read. Which combination fits?",
      options: [
        { id: 'a', text: "Vault access policies for the developer team and diagnostics turned off." },
        { id: 'b', text: "Azure RBAC on Key Vault scoped to the production managed identity, with diagnostic settings sending logs to a Log Analytics workspace." },
        { id: 'c', text: "Disable soft delete and purge protection." },
        { id: 'd', text: "Public network access only and an NSG." },
      ],
      correctId: 'b',
      explanation:
        "Azure RBAC for Key Vault is the recommended permission model and lets you grant only the production identity Get permission. Diagnostic settings to Log Analytics record every secret read. Soft delete should be enabled, not disabled.",
    },
    {
      id: 'az500-56',
      topic: 'Security Operations',
      question:
        "A Microsoft Sentinel incident has fired and an analyst wants to bundle related alerts for the same user from the past day. Which Sentinel feature groups them?",
      options: [
        { id: 'a', text: "Hunting queries." },
        { id: 'b', text: "Incidents with grouping settings on the analytics rule." },
        { id: 'c', text: "Workbooks." },
        { id: 'd', text: "Watchlists." },
      ],
      correctId: 'b',
      explanation:
        "Analytics rules support alert grouping that joins related alerts into a single incident, for example by user account and a time window. Workbooks visualise data; they do not group alerts into incidents.",
    },
    {
      id: 'az500-57',
      topic: 'Identity and Access',
      question:
        "A Conditional Access policy uses report-only mode. What is the effect on users?",
      options: [
        { id: 'a', text: "The policy is enforced as configured." },
        { id: 'b', text: "The policy applies only to guest users." },
        { id: 'c', text: "The policy is evaluated and logged but not enforced." },
        { id: 'd', text: "The policy disables MFA." },
      ],
      correctId: 'c',
      explanation:
        "Report-only mode evaluates the policy on every sign-in and writes the would-be result to the logs without enforcing the controls. It is the standard way to test a new policy before turning it on.",
    },
    {
      id: 'az500-58',
      topic: 'Secure Networking',
      question:
        "You attach a Network Watcher NSG flow log v2 with traffic analytics to a subnet. What can you primarily detect with the resulting data?",
      options: [
        { id: 'a', text: "Application Layer SQL injection attempts." },
        { id: 'b', text: "Microsoft Entra ID risky sign-ins." },
        { id: 'c', text: "Disk encryption status." },
        { id: 'd', text: "Top talkers, blocked flows, and suspicious source IPs at the IP and port level." },
      ],
      correctId: 'd',
      explanation:
        "NSG flow logs with traffic analytics aggregate flows and surface top talkers, blocked traffic, and known malicious IPs. Layer 7 attacks like SQL injection require a WAF to detect.",
    },
    {
      id: 'az500-59',
      topic: 'Secure Compute',
      question:
        "A virtual machine scale set must boot with secure boot, virtual TPM, and integrity monitoring. Which option fits?",
      options: [
        { id: 'a', text: "Generation 1 standard VMs." },
        { id: 'b', text: "Trusted launch for Azure VMs with secure boot and vTPM enabled." },
        { id: 'c', text: "Confidential VMs only." },
        { id: 'd', text: "Azure Bastion." },
      ],
      correctId: 'b',
      explanation:
        "Trusted launch for Azure VMs adds secure boot, vTPM, and boot integrity monitoring on supported Generation 2 sizes. Confidential VMs add hardware-based memory encryption on top of trusted launch and are not strictly required for the requested controls.",
    },
    {
      id: 'az500-60',
      topic: 'Security Operations',
      question:
        "An incident response runbook should call out to ServiceNow when Sentinel raises a high-severity incident. Which Sentinel feature triggers the runbook?",
      options: [
        { id: 'a', text: "Hunting bookmarks." },
        { id: 'b', text: "Automation rules and playbooks (Logic Apps)." },
        { id: 'c', text: "Analytics rule queries." },
        { id: 'd', text: "Watchlists." },
      ],
      correctId: 'b',
      explanation:
        "Automation rules in Sentinel react to incidents and run playbooks built on Logic Apps that can call out to ServiceNow, Teams, or any other connector. Hunting bookmarks store query results, they do not run automation.",
    },
    {
      id: 'az500-61',
      topic: 'Identity and Access',
      question:
        "An access package in Microsoft Entra ID Entitlement Management is created so that staff can request access to a SharePoint site that requires a manager's approval. Which licence does the user requesting the access need?",
      options: [
        { id: 'a', text: "Microsoft Entra ID Free." },
        { id: 'b', text: "Microsoft Entra ID Governance or Microsoft Entra Suite." },
        { id: 'c', text: "Microsoft Defender for Cloud." },
        { id: 'd', text: "Azure RBAC built-in role." },
      ],
      correctId: 'b',
      explanation:
        "Entitlement Management requires Microsoft Entra ID Governance (or Microsoft Entra Suite) for the users involved. Some limited capabilities work with a Microsoft Entra ID P2 subscription, but P1 alone does not cover Entitlement Management. The Free tier does not include Entitlement Management.",
    },
    {
      id: 'az500-62',
      topic: 'Secure Networking',
      question:
        "A Front Door endpoint serves traffic for several backends. You need a custom WAF rule that blocks any request whose URL contains the substring '/admin' from outside the corporate IP range. Which match type do you choose?",
      options: [
        { id: 'a', text: "Geo match only." },
        { id: 'b', text: "Managed rule set DRS only." },
        { id: 'c', text: "A custom rule combining a URL path string match and a remote address IP match with a not-in operator." },
        { id: 'd', text: "An NSG on the origin." },
      ],
      correctId: 'c',
      explanation:
        "Custom WAF rules let you combine match conditions across URL path and remote address. Managed rule sets cover known-bad patterns but cannot enforce a custom IP allowlist on a path.",
    },
    {
      id: 'az500-63',
      topic: 'Secure Compute',
      question:
        "An Azure Storage account holds production data. You want to make sure that even if a storage account key leaks, the leaked key cannot be used to write to certain containers because writes are blocked entirely. Which feature helps?",
      options: [
        { id: 'a', text: "Immutable blob storage with a time-based retention policy." },
        { id: 'b', text: "Azure Defender for Storage only." },
        { id: 'c', text: "Customer-managed keys." },
        { id: 'd', text: "Soft delete on file shares." },
      ],
      correctId: 'a',
      explanation:
        "Immutable storage with time-based retention prevents writes and deletes for the retention window, regardless of the credentials used. Defender for Storage detects abuse but does not prevent valid writes.",
    },
    {
      id: 'az500-64',
      topic: 'Security Operations',
      question:
        "Secure score in Defender for Cloud is calculated per which scope by default?",
      options: [
        { id: 'a', text: "Per user." },
        { id: 'b', text: "Per subscription, with a tenant-level rollup." },
        { id: 'c', text: "Per region only." },
        { id: 'd', text: "Per resource group only." },
      ],
      correctId: 'b',
      explanation:
        "Secure score is calculated per subscription and rolled up to the management group or tenant level. Resource groups and regions are not the primary scope.",
    },
    {
      id: 'az500-65',
      topic: 'Identity and Access',
      question:
        "Conditional Access has an Authentication strengths control. What does it let you require beyond plain MFA?",
      options: [
        { id: 'a', text: "A ticket from ServiceNow." },
        { id: 'b', text: "An Azure RBAC role." },
        { id: 'c', text: "A specific MFA method, for example phishing-resistant FIDO2 or Windows Hello." },
        { id: 'd', text: "A specific user agent string." },
      ],
      correctId: 'c',
      explanation:
        "Authentication strengths let policies require specific authentication methods such as phishing-resistant FIDO2 keys or certificate-based authentication. RBAC and tickets are not Conditional Access controls.",
    },
    {
      id: 'az500-66',
      topic: 'Secure Networking',
      question:
        "Your team wants Azure Firewall Premium to inspect TLS traffic to *.contoso.com. Which prerequisite must you put in place?",
      options: [
        { id: 'a', text: "Disable forced tunnelling." },
        { id: 'b', text: "An NSG on the firewall subnet." },
        { id: 'c', text: "A Conditional Access policy." },
        { id: 'd', text: "An intermediate CA certificate stored in Azure Key Vault and configured in the firewall policy." },
      ],
      correctId: 'd',
      explanation:
        "TLS inspection in Azure Firewall Premium requires an intermediate CA certificate stored in Key Vault and referenced by the firewall policy so the firewall can re-sign the inspected sessions. NSGs and Conditional Access are unrelated to this prerequisite.",
    },
    {
      id: 'az500-67',
      topic: 'Secure Compute',
      question:
        "A Linux VM in Azure must use customer-managed keys for OS disk encryption with the encryption performed by the platform on the host, transparent to the OS. Which feature fits?",
      options: [
        { id: 'a', text: "Azure Disk Encryption with DM-Crypt and a Key Vault key." },
        { id: 'b', text: "BitLocker on a Linux VM." },
        { id: 'c', text: "Storage Service Encryption with platform keys only." },
        { id: 'd', text: "Server-side encryption of managed disks with a customer-managed key (disk encryption set)." },
      ],
      correctId: 'd',
      explanation:
        "Server-side encryption of managed disks with a disk encryption set encrypts at the platform level using a customer key and is transparent to the OS. ADE encrypts inside the guest with DM-Crypt or BitLocker, which is not transparent and requires guest agents.",
    },
    {
      id: 'az500-68',
      topic: 'Security Operations',
      question:
        "An auditor asks for evidence that your subscriptions match the Microsoft cloud security benchmark MCSB. Where do you export it?",
      options: [
        { id: 'a', text: "Microsoft Defender for Cloud regulatory compliance dashboard, with a CSV or PDF export." },
        { id: 'b', text: "Azure Monitor metrics explorer." },
        { id: 'c', text: "Microsoft Entra ID audit logs." },
        { id: 'd', text: "Azure Cost Management invoices." },
      ],
      correctId: 'a',
      explanation:
        "The regulatory compliance dashboard tracks status against the MCSB and other standards and supports CSV or PDF export. Monitor metrics and audit logs are unrelated to compliance reporting.",
    },
    {
      id: 'az500-69',
      topic: 'Identity and Access',
      question:
        "A SaaS application supports SAML 2.0 SSO. Which part of Microsoft Entra ID configures the federation between the tenant and the SaaS app?",
      options: [
        { id: 'a', text: "App registration only." },
        { id: 'b', text: "Enterprise application with SAML-based single sign-on configuration." },
        { id: 'c', text: "Microsoft Entra Domain Services." },
        { id: 'd', text: "Microsoft Entra ID Application Proxy connector." },
      ],
      correctId: 'b',
      explanation:
        "Enterprise applications hold the runtime configuration including SAML SSO, claim mapping, and user assignment. App registrations describe the application identity but the SAML configuration sits on the Enterprise application.",
    },
    {
      id: 'az500-70',
      topic: 'Secure Networking',
      question:
        "You have an Azure Firewall and an NSG on the same subnet. A network rule on the firewall allows port 443 to a destination, but the NSG denies the same port. What happens to the traffic?",
      options: [
        { id: 'a', text: "The traffic is allowed because the firewall takes precedence." },
        { id: 'b', text: "The traffic is allowed only if Conditional Access permits it." },
        { id: 'c', text: "The traffic is denied because both NSG and firewall must allow it." },
        { id: 'd', text: "The traffic is logged but not blocked." },
      ],
      correctId: 'c',
      explanation:
        "Both controls evaluate the packet. If either NSG or firewall denies the packet, the traffic is dropped. There is no precedence override.",
    },
    {
      id: 'az500-71',
      topic: 'Secure Compute',
      question:
        "Defender for Servers Plan 2 includes integrated vulnerability scanning. What is scanned and where does the data appear?",
      options: [
        { id: 'a', text: "Storage account data, in Microsoft Purview." },
        { id: 'b', text: "Microsoft Entra ID risky sign-ins, in Identity Protection." },
        { id: 'c', text: "Application code repositories, in GitHub Advanced Security." },
        { id: 'd', text: "Operating system and software vulnerabilities on Windows and Linux VMs, with results in Defender for Cloud recommendations." },
      ],
      correctId: 'd',
      explanation:
        "Plan 2 ships an agentless or Defender for Endpoint-based vulnerability scanner that surfaces OS and software CVEs as recommendations in Defender for Cloud. Purview and Identity Protection cover different domains.",
    },
    {
      id: 'az500-72',
      topic: 'Security Operations',
      question:
        "A Sentinel analytics rule fires every minute on a high-traffic data source and floods the SOC with low-fidelity alerts. Which adjustment lowers the noise without losing the signal?",
      options: [
        { id: 'a', text: "Disable the data connector." },
        { id: 'b', text: "Tune the KQL query and use alert grouping plus suppression on the analytics rule." },
        { id: 'c', text: "Lower the severity to informational only." },
        { id: 'd', text: "Move the workspace to another region." },
      ],
      correctId: 'b',
      explanation:
        "The standard playbook is to refine the KQL filter, group related alerts into one incident, and apply suppression so an active incident swallows duplicates. Disabling the connector removes the signal entirely.",
    },
    {
      id: 'az500-73',
      topic: 'Identity and Access',
      question:
        "Workload identity federation lets a GitHub Actions workflow get a Microsoft Entra ID token without storing a secret. Which Microsoft Entra ID object holds the federated credential?",
      options: [
        { id: 'a', text: "An app registration with a federated credential pointing to the GitHub OIDC issuer." },
        { id: 'b', text: "A user assigned to the workflow." },
        { id: 'c', text: "A Microsoft Entra ID directory role." },
        { id: 'd', text: "A managed identity in another tenant." },
      ],
      correctId: 'a',
      explanation:
        "Federated credentials live on an app registration or user-assigned managed identity and trust an external OIDC provider such as GitHub. The workflow exchanges its OIDC token for an Entra ID token without storing a secret.",
    },
    {
      id: 'az500-74',
      topic: 'Secure Networking',
      question:
        "You want every outbound HTTPS request from a subnet to be source-NATed to a single public IP for whitelisting on a partner system. Which option fits?",
      options: [
        { id: 'a', text: "Use individual VM public IPs." },
        { id: 'b', text: "Route the traffic through Azure Firewall, which SNATs to its public IP." },
        { id: 'c', text: "Use Azure Front Door." },
        { id: 'd', text: "Enable a service endpoint." },
      ],
      correctId: 'b',
      explanation:
        "Azure Firewall SNATs outbound traffic to its public IP by default, giving a stable egress IP that the partner can whitelist. Individual VM public IPs would multiply the IPs to whitelist.",
    },
    {
      id: 'az500-75',
      topic: 'Secure Compute',
      question:
        "An Azure Cosmos DB account must reject all keys-based authentication and require Microsoft Entra ID identities for data plane access. Which setting fits?",
      options: [
        { id: 'a', text: "Use the primary master key for every client." },
        { id: 'b', text: "Use Always Encrypted with deterministic encryption." },
        { id: 'c', text: "Disable TLS on the account." },
        { id: 'd', text: "Disable local authentication on the Cosmos DB account and assign data plane RBAC roles to identities." },
      ],
      correctId: 'd',
      explanation:
        "Disabling local authentication on Cosmos DB removes key-based access and forces Entra ID authentication with the data plane RBAC roles. The primary master key is exactly the credential the requirement removes.",
    },
    {
      id: 'az500-76',
      topic: 'Security Operations',
      question:
        "Defender for Cloud auto-provisioning installs which agent on Windows VMs to collect security events?",
      options: [
        { id: 'a', text: "The Azure Backup agent." },
        { id: 'b', text: "Azure Bastion." },
        { id: 'c', text: "The Azure Monitor Agent (AMA), with a data collection rule for security events." },
        { id: 'd', text: "Network Watcher." },
      ],
      correctId: 'c',
      explanation:
        "The Azure Monitor Agent has replaced the legacy Log Analytics agent and is the agent that ships security event data to a Log Analytics workspace via data collection rules. Backup and Bastion serve unrelated purposes.",
    },
    {
      id: 'az500-77',
      topic: 'Identity and Access',
      question:
        "A user reports they were blocked by Microsoft Entra ID Identity Protection. As an admin you must investigate and, if false positive, dismiss the risk. Which blade do you use?",
      options: [
        { id: 'a', text: "Defender for Cloud secure score." },
        { id: 'b', text: "Microsoft Entra ID PIM." },
        { id: 'c', text: "Microsoft Entra ID Risky users and Risky sign-ins reports." },
        { id: 'd', text: "Azure Policy compliance." },
      ],
      correctId: 'c',
      explanation:
        "Risky users and risky sign-ins in Identity Protection let an admin confirm or dismiss the risk on a user. PIM is for elevation, not for risk dismissal.",
    },
    {
      id: 'az500-78',
      topic: 'Secure Networking',
      question:
        "A storage account allows access from selected VNets via service endpoints. A new partner needs to read blobs from their on-premises network. Which addition meets the requirement most simply?",
      options: [
        { id: 'a', text: "Add the partner's public IP range to the storage account firewall under selected networks." },
        { id: 'b', text: "Disable network rules and allow all networks." },
        { id: 'c', text: "Convert all VMs to Trusted launch." },
        { id: 'd', text: "Replace the storage account." },
      ],
      correctId: 'a',
      explanation:
        "The storage firewall accepts named IP ranges in addition to selected VNets. Adding the partner's public range keeps the rest of the rules in place and avoids opening to all networks.",
    },
    {
      id: 'az500-79',
      topic: 'Secure Compute',
      question:
        "You want detailed control over which actions an account can perform, with conditions on tags such as Environment=Production. Which Azure access model do you use?",
      options: [
        { id: 'a', text: "Role-based access control with attribute-based access control conditions on assignments." },
        { id: 'b', text: "Microsoft Entra ID directory roles only." },
        { id: 'c', text: "Conditional Access policies on Azure resources." },
        { id: 'd', text: "Defender for Cloud workflow automation." },
      ],
      correctId: 'a',
      explanation:
        "Azure RBAC role assignments support ABAC conditions that evaluate request and resource attributes such as tags. Directory roles control Entra ID, and Conditional Access does not gate ARM data plane actions.",
    },
    {
      id: 'az500-80',
      topic: 'Security Operations',
      question:
        "You want to check whether a Defender for Cloud recommendation is implemented by code in your Bicep templates rather than by clicking in the portal. Which feature helps?",
      options: [
        { id: 'a', text: "Azure Cost Management." },
        { id: 'b', text: "Microsoft Sentinel watchlists." },
        { id: 'c', text: "Azure Bastion." },
        { id: 'd', text: "DevOps security and Microsoft Defender for DevOps connectors." },
      ],
      correctId: 'd',
      explanation:
        "Defender for DevOps surfaces IaC scanning across GitHub and Azure DevOps inside Defender for Cloud, including Bicep and Terraform findings. Watchlists and cost data are unrelated.",
    },
    {
      id: 'az500-81',
      topic: 'Identity and Access',
      question:
        "Conditional Access has session controls including app-enforced restrictions and Microsoft Defender for Cloud Apps. What is a typical use of Defender for Cloud Apps as a session control?",
      options: [
        { id: 'a', text: "Block file downloads from a SaaS app on unmanaged devices." },
        { id: 'b', text: "Issue Microsoft Entra ID licences." },
        { id: 'c', text: "Encrypt VM disks." },
        { id: 'd', text: "Configure NSGs." },
      ],
      correctId: 'a',
      explanation:
        "Defender for Cloud Apps as a Conditional Access session control inspects the SaaS session and can block actions like downloads when the device is unmanaged. The other items are unrelated to session controls.",
    },
    {
      id: 'az500-82',
      topic: 'Secure Networking',
      question:
        "An Application Gateway WAF is in detection mode. Which behaviour does this give you?",
      options: [
        { id: 'a', text: "All matching requests are blocked." },
        { id: 'b', text: "WAF is bypassed entirely." },
        { id: 'c', text: "Only HTTPS traffic is inspected." },
        { id: 'd', text: "Matching requests are logged but allowed through, useful for tuning." },
      ],
      correctId: 'd',
      explanation:
        "Detection mode logs matches without blocking, which is the standard tuning step before flipping the WAF to prevention. It does not bypass inspection.",
    },
    {
      id: 'az500-83',
      topic: 'Secure Compute',
      question:
        "An Azure SQL Database needs to keep all database backups encrypted with your own key, and that key must be in a Key Vault that the SQL server cannot access without a managed identity. Which combination is correct?",
      options: [
        { id: 'a', text: "Customer-managed TDE plus a system-assigned managed identity granted Key Vault Crypto Service Encryption User role." },
        { id: 'b', text: "Service-managed TDE only." },
        { id: 'c', text: "Always Encrypted only." },
        { id: 'd', text: "Dynamic Data Masking only." },
      ],
      correctId: 'a',
      explanation:
        "Customer-managed TDE in Azure SQL needs a managed identity on the SQL server with Key Vault permissions to wrap and unwrap the database encryption key. Service-managed TDE uses a Microsoft key, not a customer key.",
    },
    {
      id: 'az500-84',
      topic: 'Security Operations',
      question:
        "An Azure Policy assignment with effect AuditIfNotExists is applied to all subscriptions. What does it do?",
      options: [
        { id: 'a', text: "It blocks deployments that do not match." },
        { id: 'b', text: "It audits resources where a related resource is missing, without blocking." },
        { id: 'c', text: "It deploys the missing related resource automatically." },
        { id: 'd', text: "It modifies tags on existing resources." },
      ],
      correctId: 'b',
      explanation:
        "AuditIfNotExists records non-compliance when a related resource is missing, without preventing deployment. DeployIfNotExists would deploy the missing resource and Deny would block deployment.",
    },
    {
      id: 'az500-85',
      topic: 'Identity and Access',
      question:
        "Microsoft Entra ID password protection is enabled in your tenant and synced to on-premises AD. What does it do?",
      options: [
        { id: 'a', text: "It enforces MFA only." },
        { id: 'b', text: "It encrypts disks." },
        { id: 'c', text: "It blocks weak and banned passwords on cloud and on-premises password changes." },
        { id: 'd', text: "It replaces RBAC." },
      ],
      correctId: 'c',
      explanation:
        "Microsoft Entra ID password protection ships a banned-password list and applies it to both cloud and on-premises AD password changes via a proxy and DC agent. It does not handle MFA or encryption.",
    },
    {
      id: 'az500-86',
      topic: 'Secure Networking',
      question:
        "A VM in subnet A reaches a PaaS storage account. You enable a Private Endpoint and disable public access on the storage account. Connections from VMs in another peered VNet B start failing. What is the most likely cause?",
      options: [
        { id: 'a', text: "VNet B is not linked to the privatelink Private DNS zone, so storage FQDN resolves to a public IP that is now blocked." },
        { id: 'b', text: "The storage account ran out of capacity." },
        { id: 'c', text: "Microsoft Entra ID licensing expired." },
        { id: 'd', text: "Defender for Storage blocks the traffic." },
      ],
      correctId: 'a',
      explanation:
        "Private Endpoints rely on Private DNS zones for FQDN resolution. If the second VNet does not have the privatelink DNS zone linked, clients still resolve the public IP and now hit a closed door. Defender plans do not block legitimate traffic.",
    },
    {
      id: 'az500-87',
      topic: 'Secure Compute',
      question:
        "Defender for Key Vault generates an alert that a service principal accessed many secrets in a short period. Which type of detection is this?",
      options: [
        { id: 'a', text: "Network DDoS detection." },
        { id: 'b', text: "Antivirus signature." },
        { id: 'c', text: "DNS exfiltration." },
        { id: 'd', text: "Anomaly-based detection on Key Vault data plane access patterns." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Key Vault watches data plane operations and flags anomalous access patterns such as a sudden spike in secret reads from an identity. The other options are unrelated to Key Vault telemetry.",
    },
    {
      id: 'az500-88',
      topic: 'Security Operations',
      question:
        "You ingest custom application logs into Microsoft Sentinel via the Logs ingestion API. Which Azure resource models the destination schema?",
      options: [
        { id: 'a', text: "A Data Collection Rule (DCR) and a Data Collection Endpoint pointing at a custom table in Log Analytics." },
        { id: 'b', text: "An Azure Storage account container only." },
        { id: 'c', text: "A Microsoft Entra ID app registration only." },
        { id: 'd', text: "A Defender plan only." },
      ],
      correctId: 'a',
      explanation:
        "The Logs ingestion API uses a Data Collection Endpoint and a Data Collection Rule that maps incoming JSON to a custom table in the Log Analytics workspace. App registrations only authenticate the caller.",
    },
    {
      id: 'az500-89',
      topic: 'Identity and Access',
      question:
        "Microsoft Entra ID Conditional Access supports filters for devices. Which property could you use to apply a policy only to devices marked as kiosks?",
      options: [
        { id: 'a', text: "Subscription owner role." },
        { id: 'b', text: "Resource group tag." },
        { id: 'c', text: "Device extension attribute, for example extensionAttribute1 set to 'kiosk'." },
        { id: 'd', text: "Azure Policy effect." },
      ],
      correctId: 'c',
      explanation:
        "Conditional Access device filters can match on device extension attributes set on the Microsoft Entra ID device object. Subscription roles and resource group tags are unrelated to the device object.",
    },
    {
      id: 'az500-90',
      topic: 'Secure Networking',
      question:
        "Your environment uses Azure Front Door Premium with Private Link to a backend App Service that is private only. Which capability does this combination give you?",
      options: [
        { id: 'a', text: "A globally distributed Layer 7 entry point that reaches a backend with no public exposure." },
        { id: 'b', text: "A Layer 4 NAT only." },
        { id: 'c', text: "Replacement for Microsoft Entra ID Conditional Access." },
        { id: 'd', text: "An identity provider for users." },
      ],
      correctId: 'a',
      explanation:
        "Front Door Premium can reach an App Service or other PaaS backend via Private Link, so the backend has no public endpoint and Front Door is the only public entry. Front Door does not perform identity provisioning or Conditional Access.",
    },
    {
      id: 'az500-91',
      topic: 'Secure Compute',
      question:
        "A team uses Azure DevOps with self-hosted agents inside a private VNet. The agents must read secrets from Key Vault without storing credentials. Which approach fits?",
      options: [
        { id: 'a', text: "Hard-code the secret in the pipeline YAML." },
        { id: 'b', text: "Store the storage account key in Git." },
        { id: 'c', text: "Use a shared service account password in Microsoft Entra ID." },
        { id: 'd', text: "Use a user-assigned managed identity on the agent VM and grant it Key Vault Secrets User on the vault." },
      ],
      correctId: 'd',
      explanation:
        "A user-assigned managed identity on the agent VM gives the pipeline a credential-free identity to call Key Vault. Hard-coding secrets in YAML or storing keys in Git is the exact pattern this design avoids.",
    },
    {
      id: 'az500-92',
      topic: 'Security Operations',
      question:
        "An incident is closed by an analyst. They realise an hour later that the incident was actually a real attack. Which Sentinel capability lets them reopen the incident and continue investigation?",
      options: [
        { id: 'a', text: "Re-open the incident from the Incidents page; Sentinel keeps the audit trail." },
        { id: 'b', text: "Delete and recreate the analytics rule." },
        { id: 'c', text: "Convert the incident to a watchlist." },
        { id: 'd', text: "Disable the workspace." },
      ],
      correctId: 'a',
      explanation:
        "Closed incidents in Sentinel can be reopened and the action is logged. Watchlists are reference lists, not incident states.",
    },
    {
      id: 'az500-93',
      topic: 'Identity and Access',
      question:
        "Microsoft Entra ID Authentication Methods policy lets an admin enable or disable methods such as SMS, Authenticator app, and FIDO2. Why is FIDO2 the recommended primary method?",
      options: [
        { id: 'a', text: "FIDO2 is the cheapest license." },
        { id: 'b', text: "FIDO2 disables Conditional Access." },
        { id: 'c', text: "FIDO2 is phishing-resistant and uses public-key cryptography bound to the device." },
        { id: 'd', text: "FIDO2 only works for guests." },
      ],
      correctId: 'c',
      explanation:
        "FIDO2 keys use device-bound public-key credentials, so a phished password alone is not enough. SMS in particular is vulnerable to SIM-swap attacks.",
    },
    {
      id: 'az500-94',
      topic: 'Secure Networking',
      question:
        "Azure Bastion offers a Standard SKU and a Premium SKU. Which capability does Premium add over Standard?",
      options: [
        { id: 'a', text: "Native client support, host scaling, and session recording for forensic review." },
        { id: 'b', text: "It removes the need for Microsoft Entra ID." },
        { id: 'c', text: "It encrypts disks." },
        { id: 'd', text: "It replaces NSGs." },
      ],
      correctId: 'a',
      explanation:
        "Premium adds features such as session recording, private-only deployments, and additional scaling options. It does not replace identity, encryption, or NSGs.",
    },
    {
      id: 'az500-95',
      topic: 'Secure Compute',
      question:
        "You enable Microsoft Defender for Resource Manager on a subscription. Which type of activity does it primarily detect?",
      options: [
        { id: 'a', text: "TLS handshake failures on App Service." },
        { id: 'b', text: "Disk fragmentation in a VM." },
        { id: 'c', text: "DNS records for a zone." },
        { id: 'd', text: "Suspicious control plane operations such as anonymous calls or rare role assignments." },
      ],
      correctId: 'd',
      explanation:
        "Defender for Resource Manager watches Azure Resource Manager activity for suspicious patterns such as resource access from anonymous IPs or rare permission grants. It does not look at TLS handshakes.",
    },
    {
      id: 'az500-96',
      topic: 'Security Operations',
      question:
        "An organisation moves to a Microsoft 365 E5 plan that includes Microsoft Sentinel for Microsoft 365 connectors at no extra ingestion cost. Which connector is typically free under that benefit?",
      options: [
        { id: 'a', text: "Microsoft Entra ID sign-in logs." },
        { id: 'b', text: "On-premises Syslog from non-Microsoft sources." },
        { id: 'c', text: "AWS CloudTrail." },
        { id: 'd', text: "Microsoft 365 audit logs (Office 365)." },
      ],
      correctId: 'd',
      explanation:
        "Microsoft 365 audit (Office 365) logs are typically included free with the Microsoft 365 E5 benefit when ingested into Sentinel. Entra ID sign-in logs are billed and third-party logs always cost ingestion.",
    },
    {
      id: 'az500-97',
      topic: 'Identity and Access',
      question:
        "An application uses Microsoft Entra ID single sign-on. You want to require that every sign-in by the user comes from a device that is either hybrid Entra joined or Entra joined and managed by Intune. Which Conditional Access grant configuration fits?",
      options: [
        { id: 'a', text: "Require a Microsoft Entra ID Premium P2 license." },
        { id: 'b', text: "Block access entirely." },
        { id: 'c', text: "Enable both 'Require Hybrid Microsoft Entra joined device' and 'Require device to be marked as compliant' grant controls, set to require one of the selected controls." },
        { id: 'd', text: "Disable MFA." },
      ],
      correctId: 'c',
      explanation:
        "These are two separate Conditional Access grant controls: 'Require Hybrid Microsoft Entra joined device' covers on-premises domain-joined devices synced to Entra ID, while 'Require device to be marked as compliant' covers Entra-joined devices managed by Intune. Combining them with 'require one of the selected controls' satisfies both join types. Licensing and MFA are separate controls.",
    },
    {
      id: 'az500-98',
      topic: 'Secure Networking',
      question:
        "You run multiple VNets across regions and want a managed control plane that enforces routing, security, and monitoring across them. Which service fits?",
      options: [
        { id: 'a', text: "Azure Virtual WAN with secured virtual hubs." },
        { id: 'b', text: "Local network gateway." },
        { id: 'c', text: "Microsoft Entra ID Domain Services." },
        { id: 'd', text: "Microsoft Defender for Cloud Apps." },
      ],
      correctId: 'a',
      explanation:
        "Azure Virtual WAN with secured virtual hubs offers Microsoft-managed routing and integrated Azure Firewall across regions. Local network gateways describe on-premises endpoints, not a control plane.",
    },
    {
      id: 'az500-99',
      topic: 'Secure Compute',
      question:
        "Your team must classify and label sensitive data across SQL, SharePoint, and Fabric, with a single tagging taxonomy and policy across them. Which service fits?",
      options: [
        { id: 'a', text: "Microsoft Defender for Endpoint." },
        { id: 'b', text: "Azure Bastion." },
        { id: 'c', text: "Azure Application Gateway WAF." },
        { id: 'd', text: "Microsoft Purview information protection and data map." },
      ],
      correctId: 'd',
      explanation:
        "Microsoft Purview provides a single classification and labelling taxonomy across SQL, SharePoint, OneDrive, and other sources. Defender for Endpoint and the network controls listed do not implement data classification.",
    },
    {
      id: 'az500-100',
      topic: 'Security Operations',
      question:
        "You finish your AZ-500 lab. You want a single starting point each morning that shows new alerts, top recommendations, and secure score trend across all subscriptions. Where do you go?",
      options: [
        { id: 'a', text: "Microsoft Defender for Cloud overview page." },
        { id: 'b', text: "Microsoft Cost Management overview." },
        { id: 'c', text: "Azure Monitor metrics explorer." },
        { id: 'd', text: "Microsoft Entra ID Domain Services." },
      ],
      correctId: 'a',
      explanation:
        "The Defender for Cloud overview is the unified dashboard for alerts, recommendations, secure score, and inventory across subscriptions. Cost Management and Monitor metrics cover different domains.",
    },
  ],
}
