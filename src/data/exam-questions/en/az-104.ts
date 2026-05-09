import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'One hundred scenario questions at AZ-104 level. Identity, governance, storage, compute, virtual networking, monitoring, and backup.',
  ceCourseSlug: 'azure-administrator',
  ceCourseUrl: 'https://cloudevolvers.com/training/azure-administrator',
  ceCoursePriceCents: 179500,
  questions: [
    {
      id: 'az104-1',
      topic: 'Identity',
      question:
        'You have a Microsoft Entra tenant with 800 users. Group membership has to be managed automatically based on the "department" attribute. What do you configure?',
      options: [
        { id: 'a', text: 'A dynamic distribution list in Exchange Online.' },
        { id: 'b', text: 'An administrative unit with manual assignments.' },
        { id: 'c', text: 'A dynamic group with a membership rule on the department attribute.' },
        { id: 'd', text: 'Conditional Access with group filtering.' },
      ],
      correctId: 'c',
      explanation:
        'Dynamic groups in Entra ID use a rule expression to determine membership based on user attributes. Distribution lists are a mailing construct, not an authorization mechanism.',
    },
    {
      id: 'az104-2',
      topic: 'Governance',
      question:
        'You want to prevent a resource group from being deleted by accident, while still allowing the resources inside to be modified. Which lock do you apply?',
      options: [
        { id: 'a', text: 'CanNotDelete on the resource group.' },
        { id: 'b', text: 'ReadOnly on the resource group.' },
        { id: 'c', text: 'CanNotDelete at the subscription level.' },
        { id: 'd', text: 'Azure Policy with a deny effect on delete actions.' },
      ],
      correctId: 'a',
      explanation:
        'A CanNotDelete lock on the resource group blocks deletion but allows updates. ReadOnly would also block changes, which is not the goal here.',
    },
    {
      id: 'az104-3',
      topic: 'Storage',
      question:
        'You use a general-purpose v2 storage account. A log file is no longer read after 30 days and must be kept for another three years for audit. How do you reduce cost without losing data?',
      options: [
        { id: 'a', text: 'Manually move it to another storage account in a cheaper region.' },
        { id: 'b', text: 'Disable soft delete on the container.' },
        { id: 'c', text: 'Switch the account from GRS to LRS.' },
        {
          id: 'd',
          text: 'Configure a Lifecycle Management policy that moves blobs to Cool after 30 days and Archive after 90 days.',
        },
      ],
      correctId: 'd',
      explanation:
        'Lifecycle Management automates tier transitions based on last-modified or last-access. Disabling soft delete does not lower storage cost and adds risk.',
    },
    {
      id: 'az104-4',
      topic: 'Compute',
      question:
        'You have a Windows VM with a data disk that you want to replace with a larger managed disk while keeping the data. What is the correct approach?',
      options: [
        { id: 'a', text: 'Resize the VM to a SKU with more storage and reboot.' },
        {
          id: 'b',
          text: 'Stop and deallocate the VM, expand the existing managed disk, and extend the volume in the OS.',
        },
        { id: 'c', text: 'Delete the disk and recreate it from a snapshot.' },
        { id: 'd', text: 'Mount an Azure Files share as a new drive letter.' },
      ],
      correctId: 'b',
      explanation:
        'Expanding a managed disk preserves data; afterwards you extend the volume in Disk Management or with diskpart. Resizing the VM does not change the data disk size.',
    },
    {
      id: 'az104-5',
      topic: 'Networking',
      question:
        'Two VNets in the same region need to talk to each other privately with low latency. Which option do you choose?',
      options: [
        { id: 'a', text: 'A site-to-site VPN between both VNets.' },
        { id: 'b', text: 'An Application Gateway in each VNet.' },
        { id: 'c', text: 'VNet peering between the two VNets.' },
        { id: 'd', text: 'An Azure Front Door with an origin in each VNet.' },
      ],
      correctId: 'c',
      explanation:
        'VNet peering routes traffic privately over the Microsoft backbone with low latency. A VPN between VNets in the same region adds unnecessary overhead.',
    },
    {
      id: 'az104-6',
      topic: 'Networking',
      question:
        'A VM may only receive port 443 from the internet, but is allowed to reach any outbound port. Which NSG configuration is correct?',
      options: [
        {
          id: 'a',
          text: 'An inbound rule allowing TCP 443 with a higher priority than the DenyAllInbound default; outbound is left at defaults.',
        },
        { id: 'b', text: 'An outbound rule that blocks every port except 443.' },
        { id: 'c', text: 'An inbound rule that allows every port and outbound rules that block everything.' },
        { id: 'd', text: 'An Azure Firewall is required for this configuration.' },
      ],
      correctId: 'a',
      explanation:
        'NSG defaults block all inbound except VNet and load balancer; you add an allow rule for 443 with a priority lower than 65500. Outbound, the default AllowInternetOutbound already permits everything.',
    },
    {
      id: 'az104-7',
      topic: 'Backup',
      question:
        'You have to configure daily backups for 50 production VMs with 30-day retention. What is the most appropriate solution?',
      options: [
        { id: 'a', text: 'Script snapshots with the Azure CLI in a runbook.' },
        { id: 'b', text: 'Azure Backup with a Recovery Services Vault and a 30-day backup policy.' },
        { id: 'c', text: 'Azure Site Recovery with continuous replication.' },
        { id: 'd', text: 'Storage account snapshots from the portal.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Backup with a Recovery Services Vault is the native, managed option for VM backup with flexible retention. Site Recovery is for disaster recovery, not point-in-time backup.',
    },
    {
      id: 'az104-8',
      topic: 'Monitoring',
      question:
        'You want an alert when CPU usage on a VM averages above 85% for five minutes. Which combination do you configure?',
      options: [
        { id: 'a', text: 'A diagnostic setting to a storage account with 7-day retention.' },
        { id: 'b', text: 'A Service Health alert.' },
        {
          id: 'c',
          text: 'A metric alert on Percentage CPU with threshold 85, aggregation Average, period 5 minutes, linked to an action group.',
        },
        { id: 'd', text: 'An Activity Log alert for the operation "VirtualMachines/start".' },
      ],
      correctId: 'c',
      explanation:
        'Metric alerts evaluate numeric telemetry such as Percentage CPU. Activity Log alerts watch control-plane events, not performance metrics.',
    },
    {
      id: 'az104-9',
      topic: 'RBAC',
      question:
        'A developer must be able to restart VMs in a resource group, but not create, delete, or redeploy them. Which approach follows least privilege?',
      options: [
        { id: 'a', text: 'Assign Owner on the resource group.' },
        { id: 'b', text: 'Assign Contributor on the subscription.' },
        { id: 'c', text: 'Assign Reader on the subscription.' },
        {
          id: 'd',
          text: 'Create a custom role with only Microsoft.Compute/virtualMachines/restart/action and assign it on the resource group.',
        },
      ],
      correctId: 'd',
      explanation:
        'A custom role with only the restart action grants exactly the rights needed and nothing more. Owner and Contributor grant far too much; Reader allows no actions at all.',
    },
    {
      id: 'az104-10',
      topic: 'Storage',
      question:
        'You have to give an external party temporary read-only access to a specific blob, for 24 hours, without sharing an account key. What is the right approach?',
      options: [
        { id: 'a', text: 'A service SAS with read permission and a 24-hour expiry.' },
        { id: 'b', text: 'Make the account anonymously readable with "Allow Blob anonymous access".' },
        { id: 'c', text: 'Hand over the storage account key temporarily and rotate it afterwards.' },
        { id: 'd', text: 'Add the external party to an Entra group and assign the Storage Blob Data Reader role.' },
      ],
      correctId: 'a',
      explanation:
        'A service SAS provides scoped, time-bound access with explicit permissions and expiry, without exposing the account key. Anonymous access is too broad; RBAC requires an Entra identity.',
    },
    {
      id: 'az104-11',
      topic: 'Identity',
      question:
        'You need to onboard 250 contractors at once into Microsoft Entra ID with the same job title and department. Which method is most efficient?',
      options: [
        { id: 'a', text: 'Run New-AzureADUser in a loop with hardcoded values.' },
        { id: 'b', text: 'Invite each contractor as a guest using B2B collaboration emails.' },
        { id: 'c', text: 'Create one user manually and clone it 250 times.' },
        { id: 'd', text: 'Use the bulk create CSV upload from the Users blade in the Entra admin center.' },
      ],
      correctId: 'd',
      explanation:
        'Bulk create accepts a CSV with required attributes and creates users in one operation. New-AzureADUser is the deprecated AzureAD module; the current cmdlet is New-MgUser.',
    },
    {
      id: 'az104-12',
      topic: 'Governance',
      question:
        'You want every resource in a subscription to inherit a "CostCenter" tag from the resource group. What do you assign?',
      options: [
        { id: 'a', text: 'A resource lock with a tag policy attached.' },
        { id: 'b', text: 'An Azure Blueprint at the management group level.' },
        {
          id: 'c',
          text: 'A built-in Azure Policy that inherits a tag from the resource group, with a remediation task.',
        },
        { id: 'd', text: 'A Defender for Cloud recommendation set to enforce tags.' },
      ],
      correctId: 'c',
      explanation:
        'The built-in policy "Inherit a tag from the resource group" uses the Modify effect to copy the tag onto child resources. A remediation task (backed by a managed identity) applies it to existing resources. Locks and Defender recommendations cannot apply tags.',
    },
    {
      id: 'az104-13',
      topic: 'Storage',
      question:
        'You need geo-redundant storage with read access from the secondary region. Which redundancy option do you choose when creating the storage account?',
      options: [
        { id: 'a', text: 'LRS.' },
        { id: 'b', text: 'ZRS.' },
        { id: 'c', text: 'RA-GRS.' },
        { id: 'd', text: 'GZRS without read access.' },
      ],
      correctId: 'c',
      explanation:
        'RA-GRS keeps three copies in the primary region, three in the paired region, and exposes a read-only secondary endpoint. GRS without "RA" does not allow read access to the secondary.',
    },
    {
      id: 'az104-14',
      topic: 'Compute',
      question:
        'You want to deploy 30 identical web servers that scale based on CPU load and survive a datacenter outage. Which compute option fits best?',
      options: [
        { id: 'a', text: 'A single VM with a larger SKU and a load balancer in front.' },
        { id: 'b', text: 'An availability set with 30 manually created VMs.' },
        { id: 'c', text: 'A VM scale set in Flexible orchestration mode spread across availability zones.' },
        { id: 'd', text: 'Azure Container Instances with autoscale.' },
      ],
      correctId: 'c',
      explanation:
        'Flexible VMSS spreads instances across zones for datacenter-level resilience and supports autoscale rules on CPU. Availability sets only protect against rack-level failure inside one datacenter.',
    },
    {
      id: 'az104-15',
      topic: 'Networking',
      question:
        'You add a subnet 10.10.5.0/24 to a VNet with address space 10.10.0.0/16. The portal returns "address prefix overlaps". What is the most likely cause?',
      options: [
        { id: 'a', text: 'A subnet 10.10.0.0/20 already exists in the VNet and includes 10.10.5.0/24.' },
        { id: 'b', text: 'A peered VNet uses 192.168.0.0/16.' },
        { id: 'c', text: 'The VNet has BGP route propagation disabled.' },
        { id: 'd', text: 'The subnet must end in /27 or smaller.' },
      ],
      correctId: 'a',
      explanation:
        'Subnets in the same VNet cannot overlap. 10.10.0.0/20 covers 10.10.0.0 through 10.10.15.255, which includes 10.10.5.0/24, so the new prefix collides with the existing one. A peered VNet using a different range is unrelated to this validation error.',
    },
    {
      id: 'az104-16',
      topic: 'Monitoring',
      question:
        'You want to send platform metrics from 200 VMs to a single Log Analytics workspace for KQL queries. What do you configure on each VM?',
      options: [
        { id: 'a', text: 'A diagnostic setting that ships metrics and logs to the workspace.' },
        { id: 'b', text: 'A boot diagnostics storage account with retention.' },
        { id: 'c', text: 'The legacy Microsoft Monitoring Agent (MMA) only.' },
        { id: 'd', text: 'A Service Health alert for each VM.' },
      ],
      correctId: 'a',
      explanation:
        'Diagnostic settings forward platform metrics and logs to a Log Analytics workspace, where KQL can query them. Boot diagnostics only captures console output; MMA is being retired in favor of the Azure Monitor Agent.',
    },
    {
      id: 'az104-17',
      topic: 'RBAC',
      question:
        'A user has Reader on the subscription and Contributor on a single resource group. What can the user do inside that resource group?',
      options: [
        { id: 'a', text: 'Read only, because subscription-level Reader takes precedence.' },
        { id: 'b', text: 'Only modify tags, because Contributor inherits Reader limitations.' },
        { id: 'c', text: 'Nothing, because the two roles conflict and cancel out.' },
        { id: 'd', text: 'Create and modify resources, because RBAC permissions are additive.' },
      ],
      correctId: 'd',
      explanation:
        'Azure RBAC role assignments are additive; the union of permissions applies. Deny assignments are the only way to subtract rights, and those are not in play here.',
    },
    {
      id: 'az104-18',
      topic: 'Identity',
      question:
        'You want users to reset their own passwords without calling the helpdesk. Which feature do you enable?',
      options: [
        { id: 'a', text: 'Conditional Access with the "require password change" control.' },
        { id: 'b', text: 'Identity Protection sign-in risk policy.' },
        { id: 'c', text: 'Privileged Identity Management for end users.' },
        { id: 'd', text: 'Self-service password reset (SSPR) with two authentication methods.' },
      ],
      correctId: 'd',
      explanation:
        'SSPR lets users change passwords after verifying with registered methods such as phone or Authenticator. Conditional Access can require a password change but does not provide the reset workflow itself.',
    },
    {
      id: 'az104-19',
      topic: 'Storage',
      question:
        'You want to mount an Azure file share to domain-joined Windows clients with on-premises AD credentials. Which authentication option do you configure on the storage account?',
      options: [
        { id: 'a', text: 'Account key only.' },
        { id: 'b', text: 'AD DS Kerberos authentication for Azure Files.' },
        { id: 'c', text: 'Anonymous SMB.' },
        { id: 'd', text: 'A SAS token per client.' },
      ],
      correctId: 'b',
      explanation:
        'Identity-based Kerberos auth against on-premises AD DS lets users mount file shares with their domain credentials. SAS and account keys do not provide per-user identity.',
    },
    {
      id: 'az104-20',
      topic: 'Compute',
      question:
        'You deploy a VM and want a 99.99% SLA without redeploying it later. Which choice meets that bar from the start?',
      options: [
        { id: 'a', text: 'Place a single VM with Premium SSD disks in one availability set.' },
        { id: 'b', text: 'Place a single VM in a proximity placement group.' },
        { id: 'c', text: 'Use Standard HDD disks on a single VM.' },
        { id: 'd', text: 'Place two or more VMs across two or more availability zones in the same region.' },
      ],
      correctId: 'd',
      explanation:
        'Two or more VMs spread across availability zones get the 99.99% SLA. A single VM with Premium SSD only reaches 99.9%, and proximity placement groups have no SLA effect.',
    },
    {
      id: 'az104-21',
      topic: 'Networking',
      question:
        'You want to filter outbound traffic from a subnet by FQDN, with TLS inspection. Which service do you deploy?',
      options: [
        { id: 'a', text: 'A Network Security Group with service tags.' },
        { id: 'b', text: 'An Application Gateway with WAF.' },
        { id: 'c', text: 'A user-defined route to 0.0.0.0/0 pointing to the internet.' },
        { id: 'd', text: 'Azure Firewall Premium with application rules and TLS inspection.' },
      ],
      correctId: 'd',
      explanation:
        'Azure Firewall Premium supports FQDN filtering and TLS inspection on outbound traffic. NSGs filter on IP, port, and protocol only; Application Gateway is for inbound HTTP(S).',
    },
    {
      id: 'az104-22',
      topic: 'Governance',
      question:
        'You want every new storage account in a subscription to require HTTPS only. What do you configure?',
      options: [
        { id: 'a', text: 'A custom RBAC role that hides the HTTP option.' },
        { id: 'b', text: 'An Azure Policy assignment with the built-in "Secure transfer to storage accounts should be enabled" definition set to deny.' },
        { id: 'c', text: 'A management group lock.' },
        { id: 'd', text: 'A Defender for Cloud workflow automation.' },
      ],
      correctId: 'b',
      explanation:
        'Policies with a deny effect block creation of resources that violate the rule. RBAC controls who can act; it cannot enforce property values.',
    },
    {
      id: 'az104-23',
      topic: 'Monitoring',
      question:
        'You want Azure Monitor to call a webhook and send an SMS when an alert fires. Where do you configure those targets?',
      options: [
        { id: 'a', text: 'Inside the metric alert rule itself.' },
        { id: 'b', text: 'In a diagnostic setting on the resource.' },
        { id: 'c', text: 'In a Logic App connected to a runbook.' },
        { id: 'd', text: 'In an action group attached to the alert rule.' },
      ],
      correctId: 'd',
      explanation:
        'Action groups define notification and automation targets such as SMS, email, webhooks, and runbooks. The alert rule references the action group rather than holding the targets itself.',
    },
    {
      id: 'az104-24',
      topic: 'Compute',
      question:
        'You have an Azure Container Registry and want AKS to pull images without storing credentials. Which option is correct?',
      options: [
        { id: 'a', text: 'Make the ACR anonymous pull enabled for the public.' },
        { id: 'b', text: 'Store the ACR admin password in a Kubernetes secret.' },
        { id: 'c', text: 'Attach the ACR to the AKS cluster so the kubelet identity has AcrPull.' },
        { id: 'd', text: 'Mount the ACR as a CSI volume into the pod.' },
      ],
      correctId: 'c',
      explanation:
        'Attaching ACR to AKS grants the kubelet managed identity the AcrPull role, eliminating stored credentials. Anonymous pull exposes images publicly and ACR admin should stay disabled.',
    },
    {
      id: 'az104-25',
      topic: 'Identity',
      question:
        'You need a security group whose membership can include both users and devices. Which group type do you create?',
      options: [
        { id: 'a', text: 'A Microsoft 365 group.' },
        { id: 'b', text: 'A mail-enabled security group.' },
        { id: 'c', text: 'A security group with assigned membership.' },
        { id: 'd', text: 'A distribution list.' },
      ],
      correctId: 'c',
      explanation:
        'Security groups support users, devices, service principals, and other groups as members. Microsoft 365 groups and distribution lists do not allow devices as members.',
    },
    {
      id: 'az104-26',
      topic: 'Networking',
      question:
        'You want internet clients to reach a web app over HTTPS with Web Application Firewall protection at the regional edge. Which service fits?',
      options: [
        { id: 'a', text: 'A Standard Load Balancer.' },
        { id: 'b', text: 'Azure Front Door Standard without WAF.' },
        { id: 'c', text: 'Azure Bastion.' },
        { id: 'd', text: 'Application Gateway v2 with WAF_v2 SKU.' },
      ],
      correctId: 'd',
      explanation:
        'Application Gateway v2 with WAF_v2 is the regional Layer 7 entry point with managed WAF rules. Standard Load Balancer is Layer 4 and offers no WAF.',
    },
    {
      id: 'az104-27',
      topic: 'Storage',
      question:
        'You have to deny inbound traffic to a storage account from the public internet, while allowing access from one specific VNet. What do you configure?',
      options: [
        { id: 'a', text: 'A custom role with read access scoped to the storage account.' },
        { id: 'b', text: 'A NSG rule on the VNet allowing port 443.' },
        { id: 'c', text: 'A SAS token restricted to the VNet.' },
        { id: 'd', text: 'A storage firewall rule allowing the VNet subnet via a service endpoint, with public network access set to "Selected networks".' },
      ],
      correctId: 'd',
      explanation:
        'Storage firewall combined with a service endpoint or private endpoint restricts access to known VNets while denying everything else. NSGs and SAS do not control storage account public access.',
    },
    {
      id: 'az104-28',
      topic: 'Compute',
      question:
        'You want to deploy a Bicep template that previews changes before applying them. Which command do you run?',
      options: [
        { id: 'a', text: 'az deployment group create --confirm-with-what-if.' },
        { id: 'b', text: 'az bicep build --validate.' },
        { id: 'c', text: 'New-AzResourceGroupDeployment -DryRun.' },
        { id: 'd', text: 'az deployment group what-if --resource-group rg1 --template-file main.bicep.' },
      ],
      correctId: 'd',
      explanation:
        'The what-if command shows the differences between the template and current state without applying. The PowerShell equivalent is Get-AzResourceGroupDeploymentWhatIfResult, not -DryRun.',
    },
    {
      id: 'az104-29',
      topic: 'RBAC',
      question:
        'You want to grant a team permission to manage RBAC assignments inside a resource group, but not modify resources. Which role do you assign?',
      options: [
        { id: 'a', text: 'Owner.' },
        { id: 'b', text: 'Contributor.' },
        { id: 'c', text: 'User Access Administrator.' },
        { id: 'd', text: 'Access Review Administrator.' },
      ],
      correctId: 'c',
      explanation:
        'User Access Administrator grants permission to manage role assignments without resource management rights. Owner can manage both, which exceeds the requirement.',
    },
    {
      id: 'az104-30',
      topic: 'Networking',
      question:
        'A spoke VNet in West Europe is peered with a hub VNet that contains a VPN gateway. Spoke traffic to on-premises is not flowing. Which peering setting on the spoke is missing?',
      options: [
        { id: 'a', text: 'Allow forwarded traffic enabled on the spoke peering.' },
        { id: 'b', text: 'A NAT gateway on the spoke subnet.' },
        { id: 'c', text: 'BGP enabled on the local network gateway.' },
        { id: 'd', text: 'Use remote gateways enabled on the spoke peering, with allow gateway transit on the hub side.' },
      ],
      correctId: 'd',
      explanation:
        '"Use remote gateways" on the spoke combined with "allow gateway transit" on the hub lets the spoke reach on-premises through the hub VPN gateway. Allow forwarded traffic alone does not propagate gateway routes.',
    },
    {
      id: 'az104-31',
      topic: 'Identity',
      question:
        'Conditional Access must require multifactor authentication for the Azure portal except when users sign in from a trusted corporate IP range. How do you build this?',
      options: [
        { id: 'a', text: 'Two CA policies: one requiring MFA for the Microsoft Azure Management cloud app, and a second that excludes the trusted named location.' },
        { id: 'b', text: 'A sign-in risk policy in Identity Protection.' },
        { id: 'c', text: 'A per-user MFA flag on every user.' },
        {
          id: 'd',
          text: 'A single CA policy targeting the Microsoft Azure Management app, granting MFA, with the trusted IP range excluded as a named location.',
        },
      ],
      correctId: 'd',
      explanation:
        'A single CA policy can include "All users" and exclude a trusted named location, granting access only with MFA elsewhere. Per-user MFA is the legacy method and lacks location awareness.',
    },
    {
      id: 'az104-32',
      topic: 'Storage',
      question:
        'You want to restrict an Azure file share so only requests through a specific VNet are allowed, with a private IP on the storage account. What do you deploy?',
      options: [
        { id: 'a', text: 'A service endpoint for Microsoft.Storage on the subnet.' },
        { id: 'b', text: 'A private endpoint for the file sub-resource of the storage account.' },
        { id: 'c', text: 'A user-defined route blocking the storage public IP.' },
        { id: 'd', text: 'A SAS policy with an IP filter.' },
      ],
      correctId: 'b',
      explanation:
        'Private endpoints place the storage service on a private IP inside the VNet, with public access disabled. Service endpoints still route over the public IP, just with VNet-aware firewalling.',
    },
    {
      id: 'az104-33',
      topic: 'Compute',
      question:
        'You build an App Service plan that has to scale to zero when idle to save cost. Which tier supports this?',
      options: [
        { id: 'a', text: 'Standard S1.' },
        { id: 'b', text: 'Premium v3 P1v3.' },
        { id: 'c', text: 'Consumption tier of Azure Functions, not App Service plans.' },
        { id: 'd', text: 'Isolated v2 I1v2.' },
      ],
      correctId: 'c',
      explanation:
        'App Service plans (Standard, Premium, Isolated) keep at least one instance running. Functions on the Consumption plan can scale to zero when idle.',
    },
    {
      id: 'az104-34',
      topic: 'Monitoring',
      question:
        'You want to query the last 24 hours of sign-in logs across the tenant. Where do those logs land for KQL queries?',
      options: [
        { id: 'a', text: 'Activity Log table in the subscription resource graph.' },
        { id: 'b', text: 'Microsoft Purview audit explorer.' },
        { id: 'c', text: 'Storage account blob container "insights-operational".' },
        { id: 'd', text: 'A Log Analytics workspace, after diagnostic settings on Microsoft Entra ID send sign-in logs to it.' },
      ],
      correctId: 'd',
      explanation:
        'Sign-in logs flow to a Log Analytics workspace through Entra diagnostic settings, where KQL is available. Activity Log only contains Azure subscription control-plane events.',
    },
    {
      id: 'az104-35',
      topic: 'Networking',
      question:
        'You want one public IP that load-balances HTTPS traffic across regions and provides a global anycast entry. Which service?',
      options: [
        { id: 'a', text: 'A regional Standard Load Balancer.' },
        { id: 'b', text: 'Azure Traffic Manager with a performance routing method.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure DNS with a CNAME.' },
      ],
      correctId: 'c',
      explanation:
        'Front Door is a global, anycast Layer 7 entry point with TLS termination and built-in WAF options. Traffic Manager is DNS-based and does not give you a single anycast IP.',
    },
    {
      id: 'az104-36',
      topic: 'Backup',
      question:
        'You need to restore a single file from a Windows VM backup taken yesterday, without restoring the whole VM. What do you use?',
      options: [
        { id: 'a', text: 'File recovery from the Recovery Services Vault, which mounts the recovery point as a drive.' },
        { id: 'b', text: 'Replace the OS disk from the snapshot.' },
        { id: 'c', text: 'Restore the entire VM to an alternate name and copy the file off.' },
        { id: 'd', text: 'Detach the data disk and attach it to a new VM.' },
      ],
      correctId: 'a',
      explanation:
        'Item-level recovery mounts the recovery point as a drive on a chosen machine for granular file restore. Restoring the whole VM works but is slower and more disruptive.',
    },
    {
      id: 'az104-37',
      topic: 'Identity',
      question:
        'You want to delegate user management to a regional admin who should only manage users in a specific country. What do you configure?',
      options: [
        { id: 'a', text: 'Privileged Identity Management with a permanent role.' },
        { id: 'b', text: 'A Microsoft 365 group with the User Administrator role assigned.' },
        { id: 'c', text: 'An administrative unit containing the regional users with the User Administrator role scoped to that unit.' },
        { id: 'd', text: 'Conditional Access with country-based location.' },
      ],
      correctId: 'c',
      explanation:
        'Administrative units scope directory roles to a subset of users or devices. Assigning User Administrator to an entire group at the tenant level grants too much.',
    },
    {
      id: 'az104-38',
      topic: 'Storage',
      question:
        'A developer must upload millions of small files from on-premises to a blob container with high throughput. Which tool do you recommend?',
      options: [
        { id: 'a', text: 'Robocopy over SMB.' },
        { id: 'b', text: 'The portal upload page.' },
        { id: 'c', text: 'Azure File Sync.' },
        { id: 'd', text: 'AzCopy with the sync command and parallel transfers.' },
      ],
      correctId: 'd',
      explanation:
        'AzCopy is built for high-throughput parallel transfers to blob and file storage. The portal is for small ad-hoc uploads; File Sync targets file shares, not blob containers.',
    },
    {
      id: 'az104-39',
      topic: 'Networking',
      question:
        'You added a UDR sending 0.0.0.0/0 to a virtual appliance, but the VM still uses the default internet route. What did you forget?',
      options: [
        { id: 'a', text: 'Enable IP forwarding on the appliance NIC.' },
        { id: 'b', text: 'Disable BGP on the gateway.' },
        { id: 'c', text: 'Add a service endpoint to the subnet.' },
        { id: 'd', text: 'Associate the route table with the VM subnet.' },
      ],
      correctId: 'd',
      explanation:
        'A route table only takes effect once associated with a subnet. IP forwarding on the appliance is also required, but the route does not apply at all without the subnet association.',
    },
    {
      id: 'az104-40',
      topic: 'Compute',
      question:
        'You need to deploy an ARM template to two subscriptions in one operation. Which deployment scope do you use?',
      options: [
        { id: 'a', text: 'Resource group.' },
        { id: 'b', text: 'Subscription.' },
        { id: 'c', text: 'Management group.' },
        { id: 'd', text: 'Tenant.' },
      ],
      correctId: 'c',
      explanation:
        'Deploying at management group scope lets a single template push resources into multiple subscriptions under that group. Subscription scope only targets one subscription at a time.',
    },
    {
      id: 'az104-41',
      topic: 'RBAC',
      question:
        'You want to give a security team permission to read all resource configurations and Defender for Cloud findings, but not modify anything. Which built-in role fits?',
      options: [
        { id: 'a', text: 'Reader, plus a custom role for Defender data.' },
        { id: 'b', text: 'Security Admin.' },
        { id: 'c', text: 'Security Reader.' },
        { id: 'd', text: 'Owner with PIM activation.' },
      ],
      correctId: 'c',
      explanation:
        'Security Reader provides read-only access to resources and Defender for Cloud data. Security Admin can change policies, which exceeds the read-only requirement.',
    },
    {
      id: 'az104-42',
      topic: 'Networking',
      question:
        'You want a point-to-site VPN that authenticates remote users with their Microsoft Entra accounts. Which gateway SKU and protocol do you choose?',
      options: [
        { id: 'a', text: 'Basic SKU with SSTP.' },
        { id: 'b', text: 'VpnGw1 or higher SKU with OpenVPN protocol and Entra ID authentication.' },
        { id: 'c', text: 'ExpressRoute gateway with IKEv2.' },
        { id: 'd', text: 'Local network gateway with certificate auth.' },
      ],
      correctId: 'b',
      explanation:
        'Entra ID authentication for P2S requires the OpenVPN protocol on a non-Basic VPN gateway SKU. Basic and SSTP do not support Entra-based auth.',
    },
    {
      id: 'az104-43',
      topic: 'Identity',
      question:
        'You want to require users to register for MFA the next time they sign in. Which feature is the supported way?',
      options: [
        { id: 'a', text: 'A Conditional Access policy with the "register security information" user action and required MFA registration.' },
        { id: 'b', text: 'A Group Policy Object pushed to all clients.' },
        { id: 'c', text: 'Edit each user manually and tick "MFA required".' },
        { id: 'd', text: 'A logon banner asking users to register.' },
      ],
      correctId: 'a',
      explanation:
        'CA combined with the registration campaign or the user action "Register security information" is the modern way to drive MFA enrollment. Per-user manual edits do not scale.',
    },
    {
      id: 'az104-44',
      topic: 'Storage',
      question:
        'You want to keep blob versions for 90 days and prevent overwrites from destroying earlier copies. What do you enable on the storage account?',
      options: [
        { id: 'a', text: 'Soft delete for blobs only.' },
        { id: 'b', text: 'Blob versioning, plus a lifecycle rule to delete versions older than 90 days.' },
        { id: 'c', text: 'A legal hold on the container.' },
        { id: 'd', text: 'Object replication to another account.' },
      ],
      correctId: 'b',
      explanation:
        'Blob versioning preserves prior versions on each write, and lifecycle rules can delete older versions automatically. Soft delete only protects against deletion, not overwrites without versioning.',
    },
    {
      id: 'az104-45',
      topic: 'Compute',
      question:
        'You want to deploy two web apps that share resources and scale together but bind to different domain names. What do you create?',
      options: [
        { id: 'a', text: 'Two separate App Service plans, one per app.' },
        { id: 'b', text: 'A Function App with two endpoints.' },
        { id: 'c', text: 'A VM scale set with two web servers.' },
        { id: 'd', text: 'A single App Service plan with two App Service apps and two custom domains.' },
      ],
      correctId: 'd',
      explanation:
        'Multiple App Service apps in one plan share compute and scale together; each app has its own hostname and custom domain. Two plans would not share resources.',
    },
    {
      id: 'az104-46',
      topic: 'Networking',
      question:
        'A subnet has two NSGs in scope: one on the NIC and one on the subnet. The subnet NSG denies port 22 inbound; the NIC NSG allows it. What is the result?',
      options: [
        { id: 'a', text: 'Port 22 is allowed because NIC rules override subnet rules.' },
        { id: 'b', text: 'The deployment fails validation because two NSGs cannot apply.' },
        { id: 'c', text: 'Port 22 is allowed only from VirtualNetwork.' },
        { id: 'd', text: 'Port 22 is denied because both NSGs are evaluated and any deny wins for the same flow.' },
      ],
      correctId: 'd',
      explanation:
        'For inbound, the subnet NSG is evaluated first and then the NIC NSG. If either denies the flow, the packet is dropped.',
    },
    {
      id: 'az104-47',
      topic: 'Monitoring',
      question:
        'A KQL query in Log Analytics needs to count the number of failed sign-ins per user in the last hour. Which operator combination fits?',
      options: [
        { id: 'a', text: 'SigninLogs | where TimeGenerated > ago(1h) and ResultType != 0 | summarize count() by UserPrincipalName.' },
        { id: 'b', text: 'SigninLogs | project UserPrincipalName | take 1h.' },
        { id: 'c', text: 'AuditLogs | filter result == "fail" group_by user.' },
        { id: 'd', text: 'Search * | where Failed = true.' },
      ],
      correctId: 'a',
      explanation:
        '"summarize count() by" aggregates per user, and "where" filters on time and result. AuditLogs covers directory changes, not sign-ins.',
    },
    {
      id: 'az104-48',
      topic: 'Governance',
      question:
        'You assign a policy initiative to a management group. One subscription needs an exception for 60 days. What do you create?',
      options: [
        { id: 'a', text: 'A new policy assignment with not-allowed effect on that subscription.' },
        { id: 'b', text: 'A policy exemption on the subscription scope with category "Waiver" and an expiration date.' },
        { id: 'c', text: 'A resource lock on the subscription.' },
        { id: 'd', text: 'Move the subscription to another management group.' },
      ],
      correctId: 'b',
      explanation:
        'Policy exemptions skip evaluation at a chosen scope for a specified duration, with categories Waiver or Mitigated. Moving the subscription would skip every other policy too.',
    },
    {
      id: 'az104-49',
      topic: 'Compute',
      question:
        'You need a managed disk with sub-millisecond latency and configurable IOPS independent of size. Which disk type do you select?',
      options: [
        { id: 'a', text: 'Standard HDD.' },
        { id: 'b', text: 'Standard SSD.' },
        { id: 'c', text: 'Premium SSD.' },
        { id: 'd', text: 'Ultra Disk.' },
      ],
      correctId: 'd',
      explanation:
        'Ultra Disks let you tune IOPS and throughput independently of capacity, with sub-millisecond latency. Premium SSD has fixed IOPS per size.',
    },
    {
      id: 'az104-50',
      topic: 'Networking',
      question:
        'You have an internal Load Balancer in front of three VMs. One VM is unhealthy. Which probe behavior describes a Standard Load Balancer?',
      options: [
        { id: 'a', text: 'Standard Load Balancer is closed by default and drops new flows to unhealthy backends.' },
        { id: 'b', text: 'Standard Load Balancer keeps existing TCP flows on the unhealthy VM.' },
        { id: 'c', text: 'Standard Load Balancer requires a UDP probe to function.' },
        { id: 'd', text: 'Standard Load Balancer auto-scales the unhealthy VM.' },
      ],
      correctId: 'a',
      explanation:
        'Standard Load Balancer is secure-by-default; without an explicit allow rule, traffic is blocked, and unhealthy backends are removed from the pool for new flows. It does not auto-scale; that is a VMSS feature.',
    },
    {
      id: 'az104-51',
      topic: 'Identity',
      question:
        'You want to license users for Microsoft 365 by group rather than per user. Which feature do you use?',
      options: [
        { id: 'a', text: 'PowerShell loops calling Set-AzureADUserLicense.' },
        { id: 'b', text: 'Conditional Access with license enforcement.' },
        { id: 'c', text: 'Group-based licensing in Microsoft Entra ID.' },
        { id: 'd', text: 'Administrative units with a license role.' },
      ],
      correctId: 'c',
      explanation:
        'Group-based licensing assigns license SKUs to a group; members inherit and lose licenses when added or removed. Set-AzureADUserLicense is from the deprecated AzureAD module.',
    },
    {
      id: 'az104-52',
      topic: 'Storage',
      question:
        'A SAS token leaked. You want to invalidate every SAS that was generated with key1 right now. What do you do?',
      options: [
        { id: 'a', text: 'Rotate (regenerate) the storage account key1.' },
        { id: 'b', text: 'Delete each SAS individually from the portal.' },
        { id: 'c', text: 'Disable public network access on the storage account.' },
        { id: 'd', text: 'Switch the account to "Microsoft managed keys".' },
      ],
      correctId: 'a',
      explanation:
        'SAS tokens are signed by an account key (or user delegation key); rotating key1 invalidates every SAS signed by it. SAS tokens cannot be listed and individually deleted.',
    },
    {
      id: 'az104-53',
      topic: 'Compute',
      question:
        'You need an AKS node pool that runs a workload requiring GPU. What do you do?',
      options: [
        { id: 'a', text: 'Add a system node pool with a Standard_NC SKU.' },
        { id: 'b', text: 'Switch the cluster to ACI.' },
        { id: 'c', text: 'Use the default node pool and install GPU drivers via DaemonSet.' },
        { id: 'd', text: 'Add a user node pool with a GPU-enabled VM size and matching node taints.' },
      ],
      correctId: 'd',
      explanation:
        'User node pools with GPU SKUs and taints isolate GPU workloads. System pools are reserved for system pods; mixing GPU into the default pool wastes capacity.',
    },
    {
      id: 'az104-54',
      topic: 'Networking',
      question:
        'You want to connect two on-premises sites to Azure with private, low-latency connectivity that bypasses the public internet. Which service?',
      options: [
        { id: 'a', text: 'Site-to-site VPN over the internet.' },
        { id: 'b', text: 'A Front Door custom rule.' },
        { id: 'c', text: 'Point-to-site VPN.' },
        { id: 'd', text: 'ExpressRoute with private peering.' },
      ],
      correctId: 'd',
      explanation:
        'ExpressRoute provides private circuits through a partner or Direct, never over the public internet. VPN goes over the internet by definition.',
    },
    {
      id: 'az104-55',
      topic: 'Monitoring',
      question:
        'A web app intermittently returns HTTP 500. You want to capture live request telemetry and dependency calls. What do you enable?',
      options: [
        { id: 'a', text: 'Application Insights with the SDK or auto-instrumentation enabled.' },
        { id: 'b', text: 'Boot diagnostics on the App Service.' },
        { id: 'c', text: 'Network Watcher Connection Monitor.' },
        { id: 'd', text: 'Activity Log alerts for write operations.' },
      ],
      correctId: 'a',
      explanation:
        'Application Insights captures request, dependency, and exception telemetry, including a live metrics stream. Network Watcher is for IP-level diagnostics.',
    },
    {
      id: 'az104-56',
      topic: 'RBAC',
      question:
        'You assign a role at the resource group scope and another at the resource scope. The user reports they cannot read at the subscription level. What is the explanation?',
      options: [
        { id: 'a', text: 'The subscription is in a separate tenant.' },
        { id: 'b', text: 'A deny assignment is blocking the user.' },
        { id: 'c', text: 'RBAC permissions inherit only from parent scope down to child scope, so subscription read is not granted.' },
        { id: 'd', text: 'Only Global Administrators can read at subscription scope.' },
      ],
      correctId: 'c',
      explanation:
        'RBAC inherits from parent scope down to child scope. To read at subscription scope, the user needs an assignment at that level.',
    },
    {
      id: 'az104-57',
      topic: 'Storage',
      question:
        'You want to share a blob URL signed by the creator\'s Entra ID credential rather than the storage account key, so the token can be revoked by revoking the creator\'s Entra access. Which SAS variant do you generate?',
      options: [
        { id: 'a', text: 'Account SAS.' },
        { id: 'b', text: 'Service SAS.' },
        { id: 'c', text: 'User delegation SAS.' },
        { id: 'd', text: 'A shared access policy with no SAS.' },
      ],
      correctId: 'c',
      explanation:
        'User delegation SAS is signed by the creator\'s Entra ID credential (a user delegation key), not the storage account key. This means the token can be revoked by revoking the creator\'s Entra access, and the creator\'s identity is tracked in audit logs. The recipient still uses the SAS token directly — no Entra sign-in is required on the recipient side. Account and service SAS are both signed by the storage account key.',
    },
    {
      id: 'az104-58',
      topic: 'Identity',
      question:
        'You want a group whose membership is automatically updated when a user is hired into the "Sales" department, including new hires. Which group setting fits?',
      options: [
        { id: 'a', text: 'Assigned membership with a scheduled CSV import.' },
        { id: 'b', text: 'Dynamic User membership with rule (user.department -eq "Sales").' },
        { id: 'c', text: 'Dynamic Device membership.' },
        { id: 'd', text: 'A Microsoft 365 group with manual owners.' },
      ],
      correctId: 'b',
      explanation:
        'Dynamic User groups evaluate user attributes such as department on every change. Dynamic Device groups apply to devices, not users.',
    },
    {
      id: 'az104-59',
      topic: 'Compute',
      question:
        'You want a Windows VM to run a configuration script the first time it boots, defined in the ARM template. Which extension do you add?',
      options: [
        { id: 'a', text: 'Azure Monitor Agent.' },
        { id: 'b', text: 'Custom Script Extension with the script URI and command.' },
        { id: 'c', text: 'Network Watcher Agent.' },
        { id: 'd', text: 'VM Access Extension.' },
      ],
      correctId: 'b',
      explanation:
        'Custom Script Extension downloads and runs a script on first boot or on demand. VM Access Extension is for resetting credentials, not configuration.',
    },
    {
      id: 'az104-60',
      topic: 'Networking',
      question:
        'You want to route traffic to four Azure regions based on lowest latency from the client. Which Traffic Manager routing method do you choose?',
      options: [
        { id: 'a', text: 'Priority.' },
        { id: 'b', text: 'Weighted.' },
        { id: 'c', text: 'Performance.' },
        { id: 'd', text: 'Geographic.' },
      ],
      correctId: 'c',
      explanation:
        'Performance routing sends users to the endpoint with the lowest network latency from the resolver. Geographic routes by client country, not latency.',
    },
    {
      id: 'az104-61',
      topic: 'Governance',
      question:
        'You need to move a subscription from one Microsoft Entra tenant to another. Which step is required first?',
      options: [
        { id: 'a', text: 'Cancel the subscription and re-create it in the new tenant.' },
        { id: 'b', text: 'Use the "Change directory" option on the subscription, then reassign RBAC roles in the new tenant.' },
        { id: 'c', text: 'Create a new management group and move the subscription into it.' },
        { id: 'd', text: 'Convert the subscription to pay-as-you-go.' },
      ],
      correctId: 'b',
      explanation:
        'Change directory transfers the subscription to a different tenant; RBAC role assignments and managed identities must then be reassigned. You do not cancel and recreate.',
    },
    {
      id: 'az104-62',
      topic: 'Storage',
      question:
        'You want immutable storage that satisfies WORM regulatory requirements for seven years. Which feature do you use?',
      options: [
        { id: 'a', text: 'Soft delete with a 7-year retention.' },
        { id: 'b', text: 'A time-based retention policy in immutability settings on the container, locked.' },
        { id: 'c', text: 'A storage account read-only lock.' },
        { id: 'd', text: 'Archive tier with a lifecycle rule.' },
      ],
      correctId: 'b',
      explanation:
        'Locked time-based retention policies make blobs WORM-compliant for the configured duration. Soft delete is reversible and not WORM.',
    },
    {
      id: 'az104-63',
      topic: 'Compute',
      question:
        'You want a deployment slot for a web app that you can swap into production after testing. Which App Service tier supports slots?',
      options: [
        { id: 'a', text: 'Free F1.' },
        { id: 'b', text: 'Shared D1.' },
        { id: 'c', text: 'Standard or higher.' },
        { id: 'd', text: 'Consumption plan.' },
      ],
      correctId: 'c',
      explanation:
        'Deployment slots are available on Standard, Premium, and Isolated plans. Free and Shared do not include slots.',
    },
    {
      id: 'az104-64',
      topic: 'Networking',
      question:
        'You want a load balancer that publishes a private VIP inside a VNet for internal apps. Which service do you deploy?',
      options: [
        { id: 'a', text: 'A public Standard Load Balancer.' },
        { id: 'b', text: 'An internal (private) Standard Load Balancer.' },
        { id: 'c', text: 'Azure Front Door.' },
        { id: 'd', text: 'Azure NAT Gateway.' },
      ],
      correctId: 'b',
      explanation:
        'Internal Load Balancers expose a private IP from the VNet, suitable for internal traffic. Front Door is a global Layer 7 service for public traffic.',
    },
    {
      id: 'az104-65',
      topic: 'Identity',
      question:
        'You want to require trusted device sign-ins for the finance group. Which Conditional Access grant control do you use?',
      options: [
        { id: 'a', text: '"Require multi-factor authentication" only.' },
        { id: 'b', text: '"Require app protection policy".' },
        { id: 'c', text: '"Require approved client app".' },
        { id: 'd', text: '"Require device to be marked as compliant" or "require Entra hybrid joined device".' },
      ],
      correctId: 'd',
      explanation:
        'Compliant or hybrid-joined device grant controls verify trust. Require approved client app limits which apps can access, not device trust.',
    },
    {
      id: 'az104-66',
      topic: 'Storage',
      question:
        'You want to scope an Azure file share so that only one specific subnet can mount it, with all other VNets blocked. Which storage account setting?',
      options: [
        { id: 'a', text: 'Public network access set to "Enabled from selected virtual networks and IP addresses", with a service endpoint or private endpoint for that subnet.' },
        { id: 'b', text: 'Disable secure transfer.' },
        { id: 'c', text: 'Disable account key authentication.' },
        { id: 'd', text: 'Set the account replication to ZRS.' },
      ],
      correctId: 'a',
      explanation:
        'Selecting specific networks plus a service or private endpoint limits access to chosen subnets. Replication and secure transfer settings have no effect on network scoping.',
    },
    {
      id: 'az104-67',
      topic: 'Compute',
      question:
        'You want to package an app into a container and run it without managing servers, only paying when it runs, with HTTP ingress. Which service fits?',
      options: [
        { id: 'a', text: 'AKS with a system node pool.' },
        { id: 'b', text: 'Azure Container Instances behind Application Gateway.' },
        { id: 'c', text: 'Azure Container Apps with a Consumption profile and ingress enabled.' },
        { id: 'd', text: 'Azure Service Fabric.' },
      ],
      correctId: 'c',
      explanation:
        'Container Apps offers serverless container hosting with built-in HTTPS ingress and consumption pricing. ACI runs containers but lacks ingress without putting a separate gateway in front.',
    },
    {
      id: 'az104-68',
      topic: 'Networking',
      question:
        'You suspect packets are being dropped between two VMs. Which Network Watcher tool tells you the next hop and any blocking rule?',
      options: [
        { id: 'a', text: 'NSG flow logs in raw form.' },
        { id: 'b', text: 'IP flow verify and Next hop tools.' },
        { id: 'c', text: 'Connection Troubleshoot only.' },
        { id: 'd', text: 'Packet capture from the portal.' },
      ],
      correctId: 'b',
      explanation:
        'IP flow verify checks whether a flow is allowed by NSG rules; Next hop shows what route applies. NSG flow logs are useful but slower to inspect for a quick diagnosis.',
    },
    {
      id: 'az104-69',
      topic: 'Monitoring',
      question:
        'You want to track web app availability from five global locations and alert when two of them fail. Which feature do you use?',
      options: [
        { id: 'a', text: 'Application Insights availability tests with multi-location alert criteria.' },
        { id: 'b', text: 'Azure Monitor metric alert on HTTP 4xx counts.' },
        { id: 'c', text: 'Network Watcher Connection Monitor.' },
        { id: 'd', text: 'Service Health alert.' },
      ],
      correctId: 'a',
      explanation:
        'Availability tests in Application Insights probe an URL from chosen locations and alert on a configured failure threshold. Connection Monitor is for general network paths, not application URL probing.',
    },
    {
      id: 'az104-70',
      topic: 'Governance',
      question:
        'You want to organize subscriptions in a hierarchy that enforces policy and RBAC across business units. What do you create?',
      options: [
        { id: 'a', text: 'Resource groups.' },
        { id: 'b', text: 'Tag scopes.' },
        { id: 'c', text: 'Tenants per business unit.' },
        { id: 'd', text: 'Management groups.' },
      ],
      correctId: 'd',
      explanation:
        'Management groups form a hierarchy above subscriptions for inherited policy and RBAC. Resource groups live inside subscriptions and cannot span them.',
    },
    {
      id: 'az104-71',
      topic: 'Identity',
      question:
        'A user reports they cannot register an MFA method. You verify their license and group membership are correct. Which setting often blocks registration?',
      options: [
        { id: 'a', text: 'The combined registration experience is disabled at the tenant level.' },
        { id: 'b', text: 'The user has more than three group memberships.' },
        { id: 'c', text: 'A resource lock on the subscription.' },
        { id: 'd', text: 'A storage firewall rule on Microsoft Entra ID.' },
      ],
      correctId: 'a',
      explanation:
        'When combined security info registration is disabled, users can hit gaps for some methods. Tenant-level Authentication Methods policies and SSPR registration scope are the common blockers.',
    },
    {
      id: 'az104-72',
      topic: 'Storage',
      question:
        'You want to keep an Azure file share synchronized with several on-premises Windows file servers, with cloud tiering. Which feature do you deploy?',
      options: [
        { id: 'a', text: 'AzCopy on a schedule.' },
        { id: 'b', text: 'Azure File Sync with a sync group and the agent on each server.' },
        { id: 'c', text: 'Robocopy via a scheduled task.' },
        { id: 'd', text: 'Storage Mover migration project.' },
      ],
      correctId: 'b',
      explanation:
        'Azure File Sync ties multiple Windows servers to one Azure file share with cloud tiering of cold data. Storage Mover handles one-time migrations rather than ongoing sync.',
    },
    {
      id: 'az104-73',
      topic: 'Compute',
      question:
        'You need to deploy a VM with a customized OS image used in dozens of deployments. Where do you store the image?',
      options: [
        { id: 'a', text: 'A managed disk in a resource group.' },
        { id: 'b', text: 'An Azure Compute Gallery (formerly Shared Image Gallery) with an image definition and version.' },
        { id: 'c', text: 'A blob container with a VHD.' },
        { id: 'd', text: 'An ACR repository.' },
      ],
      correctId: 'b',
      explanation:
        'Azure Compute Gallery stores image versions across regions for high-scale VM deployments. Loose VHDs in blob storage work but lack versioning and replication features.',
    },
    {
      id: 'az104-74',
      topic: 'Networking',
      question:
        'You want a global load balancer that does TLS at the edge with a single anycast IP and supports custom WAF rules. Which service do you choose?',
      options: [
        { id: 'a', text: 'Azure Front Door Premium with WAF.' },
        { id: 'b', text: 'Application Gateway in one region.' },
        { id: 'c', text: 'Traffic Manager with TLS bridging.' },
        { id: 'd', text: 'Standard Load Balancer.' },
      ],
      correctId: 'a',
      explanation:
        'Front Door Premium combines global anycast, TLS termination, and WAF. Application Gateway is regional, and Traffic Manager works at DNS level only.',
    },
    {
      id: 'az104-75',
      topic: 'Monitoring',
      question:
        'You want to capture VNet flow logs and analyze them for top talkers and anomalies. Which configuration do you set up?',
      options: [
        { id: 'a', text: 'Activity Log alerts for NSG rule changes.' },
        { id: 'b', text: 'Enable diagnostic settings on the VNet to send logs to event hub only.' },
        { id: 'c', text: 'Enable VNet flow logs to a storage account, with Traffic Analytics and a Log Analytics workspace.' },
        { id: 'd', text: 'Connection Monitor only.' },
      ],
      correctId: 'c',
      explanation:
        'VNet flow logs (the successor to NSG flow logs, which were retired on June 30, 2025) capture network flows at the virtual network level. Sending them to storage with Traffic Analytics enriches the data and surfaces top talkers and anomalies in Log Analytics. Activity Log alerts only watch rule edits, not actual flows.',
    },
    {
      id: 'az104-76',
      topic: 'RBAC',
      question:
        'You need to grant a backup administrator the ability to start and configure VM backups in a resource group, but not to delete VMs. Which built-in role best fits?',
      options: [
        { id: 'a', text: 'Backup Contributor.' },
        { id: 'b', text: 'Backup Operator.' },
        { id: 'c', text: 'Owner.' },
        { id: 'd', text: 'Virtual Machine Contributor.' },
      ],
      correctId: 'a',
      explanation:
        'Backup Contributor can create and manage backups but does not have rights to delete VMs themselves. Backup Operator can manage backups but not create them.',
    },
    {
      id: 'az104-77',
      topic: 'Storage',
      question:
        'You want to tier rarely accessed blobs to a cheaper storage class and accept higher access latency. Which tier do you use for blobs accessed once a quarter?',
      options: [
        { id: 'a', text: 'Hot.' },
        { id: 'b', text: 'Cool.' },
        { id: 'c', text: 'Cold.' },
        { id: 'd', text: 'Archive.' },
      ],
      correctId: 'c',
      explanation:
        'Cold tier is optimized for blobs accessed about once every 90 days, with lower storage and higher transaction cost than Cool. Archive is offline and requires a rehydrate that can take hours.',
    },
    {
      id: 'az104-78',
      topic: 'Compute',
      question:
        'You want a VM scale set whose instances live across three availability zones, with each instance independently visible in Azure Resource Manager. Which orchestration mode?',
      options: [
        { id: 'a', text: 'Uniform.' },
        { id: 'b', text: 'Reserved.' },
        { id: 'c', text: 'Classic.' },
        { id: 'd', text: 'Flexible.' },
      ],
      correctId: 'd',
      explanation:
        'Flexible orchestration manages standard VMs as scale set members, exposed as individual VM resources, and supports zonal deployment. Uniform manages identical VMs as a single fabric instance.',
    },
    {
      id: 'az104-79',
      topic: 'Networking',
      question:
        'You want to control which VMs can talk to each other based on tags, without listing IPs. Which feature do you use in NSGs?',
      options: [
        { id: 'a', text: 'Service tags only.' },
        { id: 'b', text: 'Application Security Groups (ASGs) attached to NICs and referenced in NSG rules.' },
        { id: 'c', text: 'User-defined routes referencing VM names.' },
        { id: 'd', text: 'Resource tags on the VMs.' },
      ],
      correctId: 'b',
      explanation:
        'ASGs are logical groupings of NICs that you can use as source or destination in NSG rules. Service tags refer to Azure platform endpoints, not your own VMs.',
    },
    {
      id: 'az104-80',
      topic: 'Identity',
      question:
        'You want to require step-up MFA when a user accesses a high-impact app from outside the corporate network. Which condition combination do you set in Conditional Access?',
      options: [
        { id: 'a', text: 'Cloud apps = the high-impact app, locations = exclude corporate trusted locations, grant = require MFA.' },
        { id: 'b', text: 'Sign-in risk = high, grant = block.' },
        { id: 'c', text: 'Device platform = Windows only, grant = require compliant device.' },
        { id: 'd', text: 'User risk = medium, grant = require password change.' },
      ],
      correctId: 'a',
      explanation:
        'Targeting the app and excluding trusted locations, with MFA grant, achieves location-aware step-up MFA. Sign-in risk addresses anomalous sign-ins, not location-based step-up.',
    },
    {
      id: 'az104-81',
      topic: 'Compute',
      question:
        'You want to run a lift-and-shift VM with the highest single-instance SLA available. Which configuration meets it?',
      options: [
        { id: 'a', text: 'A single VM in a proximity placement group.' },
        { id: 'b', text: 'A single VM in an availability set.' },
        { id: 'c', text: 'A single VM with all OS and data disks on Premium SSD or Ultra Disk.' },
        { id: 'd', text: 'A single VM with Standard HDD disks.' },
      ],
      correctId: 'c',
      explanation:
        'A single VM using Premium SSD or Ultra Disk for all disks reaches a 99.9% SLA. Availability sets and proximity placement groups apply to multiple VMs.',
    },
    {
      id: 'az104-82',
      topic: 'Networking',
      question:
        'A resource in a peered VNet cannot reach a resource in your VNet, even though peering shows Connected. What do you check first?',
      options: [
        { id: 'a', text: 'Peering "allow virtual network access" toggle on both sides, plus NSG rules.' },
        { id: 'b', text: 'Public IP allocation method.' },
        { id: 'c', text: 'The address space of an unrelated subscription.' },
        { id: 'd', text: 'Resource group locks.' },
      ],
      correctId: 'a',
      explanation:
        'Peering requires "Allow virtual network access" to actually pass traffic, and NSGs must permit the flow. Public IP allocation is unrelated to private peered traffic.',
    },
    {
      id: 'az104-83',
      topic: 'Storage',
      question:
        'You enable soft delete on a storage account with a 14-day retention. A blob is overwritten by mistake. Can soft delete restore the previous content?',
      options: [
        { id: 'a', text: 'Yes, soft delete restores deleted blobs and overwritten versions, regardless of versioning.' },
        { id: 'b', text: 'No. Soft delete protects against deletion only; to recover overwrites you also need blob versioning.' },
        { id: 'c', text: 'Only if a legal hold is configured.' },
        { id: 'd', text: 'Only if the storage account is GRS.' },
      ],
      correctId: 'b',
      explanation:
        'Soft delete handles deletion. Blob versioning is what protects against overwrites by keeping previous versions.',
    },
    {
      id: 'az104-84',
      topic: 'Compute',
      question:
        'You want to deploy three identical VMs that absolutely must reside in the same datacenter for low latency. What do you use?',
      options: [
        { id: 'a', text: 'Availability zones.' },
        { id: 'b', text: 'A proximity placement group.' },
        { id: 'c', text: 'Three regions.' },
        { id: 'd', text: 'A scale set in Flexible mode.' },
      ],
      correctId: 'b',
      explanation:
        'Proximity placement groups colocate resources to minimize latency between them. Availability zones intentionally separate VMs across datacenters.',
    },
    {
      id: 'az104-85',
      topic: 'Monitoring',
      question:
        'You want to be notified when Azure announces planned maintenance on your subscription. Which alert type do you create?',
      options: [
        { id: 'a', text: 'A metric alert.' },
        { id: 'b', text: 'A Service Health alert with the planned maintenance event type.' },
        { id: 'c', text: 'A Resource Health alert.' },
        { id: 'd', text: 'An Activity Log alert on resource updates.' },
      ],
      correctId: 'b',
      explanation:
        'Service Health alerts cover service issues, planned maintenance, health advisories, and security advisories. Resource Health is per-resource and not the channel for planned maintenance.',
    },
    {
      id: 'az104-86',
      topic: 'Identity',
      question:
        'You want to restrict guest invitations so only specific admins can invite external users. Where do you change this?',
      options: [
        { id: 'a', text: 'Resource group RBAC on the tenant.' },
        { id: 'b', text: 'A Conditional Access policy on guests.' },
        { id: 'c', text: 'External Identities, External collaboration settings, set guest invite restrictions to "Only users assigned to specific admin roles".' },
        { id: 'd', text: 'A custom RBAC role with Microsoft.Graph permissions.' },
      ],
      correctId: 'c',
      explanation:
        'External collaboration settings hold the guest invite restriction toggle. CA controls sign-in conditions, not who can issue invitations.',
    },
    {
      id: 'az104-87',
      topic: 'Compute',
      question:
        'You want a deployment slot to share configuration with production but use a different connection string. Which slot setting do you mark for the connection string?',
      options: [
        { id: 'a', text: 'Slot setting (deployment slot setting checkbox enabled).' },
        { id: 'b', text: 'A regular app setting.' },
        { id: 'c', text: 'An environment variable in the host JSON.' },
        { id: 'd', text: 'A Key Vault reference only, no slot setting needed.' },
      ],
      correctId: 'a',
      explanation:
        'Marking an app setting or connection string as "deployment slot setting" pins it to the slot during a swap. Regular settings travel with the swap.',
    },
    {
      id: 'az104-88',
      topic: 'Networking',
      question:
        'You want a VPN site-to-site tunnel to use BGP so on-premises routes propagate dynamically. Which gateway SKU is required at minimum?',
      options: [
        { id: 'a', text: 'Basic.' },
        { id: 'b', text: 'Standard Load Balancer.' },
        { id: 'c', text: 'ErGw1AZ.' },
        { id: 'd', text: 'VpnGw1 (or VpnGw1AZ for zonal).' },
      ],
      correctId: 'd',
      explanation:
        'BGP for VPN requires VpnGw1 or higher; Basic does not support BGP. ErGw SKUs are for ExpressRoute gateways, not VPN.',
    },
    {
      id: 'az104-89',
      topic: 'Governance',
      question:
        'You want a resource tag to be required at creation time, with creation blocked when the tag is missing. Which Azure Policy effect do you use?',
      options: [
        { id: 'a', text: 'Audit.' },
        { id: 'b', text: 'Deny.' },
        { id: 'c', text: 'Modify.' },
        { id: 'd', text: 'Append.' },
      ],
      correctId: 'b',
      explanation:
        'Deny blocks resource creation when the policy condition is met. Append silently adds defaults; Modify changes existing resources, not create-time blocking.',
    },
    {
      id: 'az104-90',
      topic: 'Storage',
      question:
        'You want to copy a blob from one storage account to another inside Azure with minimal data egress. Which approach is best?',
      options: [
        { id: 'a', text: 'Use AzCopy with the source and destination URLs and SAS tokens.' },
        { id: 'b', text: 'Download to a local PC and re-upload.' },
        { id: 'c', text: 'Email the file as an attachment.' },
        { id: 'd', text: 'Mount both as drive letters and use File Explorer.' },
      ],
      correctId: 'a',
      explanation:
        'AzCopy performs server-to-server copy when both endpoints are blob URLs, keeping data in Azure. Downloading and re-uploading wastes egress and time.',
    },
    {
      id: 'az104-91',
      topic: 'Compute',
      question:
        'You want to roll out an OS image update to a VM scale set in batches without downtime. Which feature do you configure?',
      options: [
        { id: 'a', text: 'Manual upgrade policy with PowerShell scripts.' },
        { id: 'b', text: 'Rolling upgrade policy on the scale set.' },
        { id: 'c', text: 'A new scale set per batch.' },
        { id: 'd', text: 'A reboot schedule via Update Manager only.' },
      ],
      correctId: 'b',
      explanation:
        'Rolling upgrade policy applies updates to instances in batches with health checks between them. Manual mode requires you to upgrade each instance yourself.',
    },
    {
      id: 'az104-92',
      topic: 'Networking',
      question:
        'You add a private endpoint for a key vault. Clients in the VNet still connect to the public IP. Which DNS step did you skip?',
      options: [
        { id: 'a', text: 'Link the privatelink.vaultcore.azure.net Private DNS zone to the VNet.' },
        { id: 'b', text: 'Disable Azure DNS.' },
        { id: 'c', text: 'Add a NAT gateway.' },
        { id: 'd', text: 'Add a CNAME at the apex of contoso.com.' },
      ],
      correctId: 'a',
      explanation:
        'Private endpoints rely on the matching privatelink Private DNS zone linked to the VNet for name resolution to the private IP. Without that, clients get the public IP via the public CNAME.',
    },
    {
      id: 'az104-93',
      topic: 'Identity',
      question:
        'You want a Microsoft 365 group with a guest member. Which group setting must be enabled at the tenant level?',
      options: [
        { id: 'a', text: 'B2B collaboration with guest invites and guest access to Microsoft 365 groups.' },
        { id: 'b', text: 'Just-in-time access via PIM.' },
        { id: 'c', text: 'Conditional Access "guest only" policy.' },
        { id: 'd', text: 'Administrative units.' },
      ],
      correctId: 'a',
      explanation:
        'Guest access to Microsoft 365 groups requires B2B collaboration and the related "Allow guest access to groups" setting. PIM and CA do not gate group membership.',
    },
    {
      id: 'az104-94',
      topic: 'Backup',
      question:
        'You want to replicate Azure VMs from one region to another for disaster recovery, with orchestrated failover. Which service do you use?',
      options: [
        { id: 'a', text: 'Azure Backup.' },
        { id: 'b', text: 'Azure Site Recovery with a Recovery Services Vault in the target region.' },
        { id: 'c', text: 'A scheduled snapshot copy with PowerShell.' },
        { id: 'd', text: 'Storage account GRS replication.' },
      ],
      correctId: 'b',
      explanation:
        'ASR replicates VMs to a paired region with recovery plans and orchestrated failover. Azure Backup retains point-in-time copies but does not orchestrate cross-region failover.',
    },
    {
      id: 'az104-95',
      topic: 'Compute',
      question:
        'You want a Bicep file to take an environment name and a region as inputs and produce different SKUs accordingly. Which feature do you use?',
      options: [
        { id: 'a', text: 'Outputs.' },
        { id: 'b', text: 'Parameters with allowed values, plus a conditional ternary or variables.' },
        { id: 'c', text: 'Modules without parameters.' },
        { id: 'd', text: 'Hardcoded values in the resource block.' },
      ],
      correctId: 'b',
      explanation:
        'Parameters accept inputs and can be combined with variables or ternary expressions to vary configuration. Outputs return values from a deployment, not accept inputs.',
    },
    {
      id: 'az104-96',
      topic: 'Networking',
      question:
        'You want internet egress from a private subnet without giving each VM its own public IP, with predictable source IPs for whitelisting. Which service?',
      options: [
        { id: 'a', text: 'A Standard Load Balancer with outbound rules.' },
        { id: 'b', text: 'Azure Bastion.' },
        { id: 'c', text: 'Azure NAT Gateway attached to the subnet with public IPs assigned to the gateway.' },
        { id: 'd', text: 'A VPN gateway.' },
      ],
      correctId: 'c',
      explanation:
        'NAT Gateway provides scalable outbound SNAT with a small set of dedicated public IPs. Standard LB outbound rules can work but are less scalable than NAT Gateway for SNAT.',
    },
    {
      id: 'az104-97',
      topic: 'Identity',
      question:
        'You want to invite a partner with their existing Microsoft Entra account to access a SharePoint site in your tenant. Which feature?',
      options: [
        { id: 'a', text: 'B2B collaboration guest invitation.' },
        { id: 'b', text: 'B2C tenant.' },
        { id: 'c', text: 'Cross-tenant synchronization with provisioning.' },
        { id: 'd', text: 'Custom domain federation.' },
      ],
      correctId: 'a',
      explanation:
        'B2B collaboration invites external users as guests using their home tenant identity. Cross-tenant sync provisions members across two related tenants, which is a different scenario.',
    },
    {
      id: 'az104-98',
      topic: 'Storage',
      question:
        'You enable account-level firewall on a storage account and forget to allow your trusted service. Calls fail. Which trusted access option avoids hardcoding IPs?',
      options: [
        { id: 'a', text: 'Tick "Allow Azure services on the trusted services list" and configure resource-instance rules where needed.' },
        { id: 'b', text: 'Disable the firewall entirely.' },
        { id: 'c', text: 'Add a SAS token to the trusted service.' },
        { id: 'd', text: 'Switch to GRS replication.' },
      ],
      correctId: 'a',
      explanation:
        'Trusted Microsoft services bypass plus resource-instance rules let specific Azure services and resources connect without IP allowlists. Disabling the firewall would break the security goal.',
    },
    {
      id: 'az104-99',
      topic: 'Monitoring',
      question:
        'You want to forward Microsoft Entra ID audit logs to a SIEM. Which destination type do you set in the diagnostic setting?',
      options: [
        { id: 'a', text: 'Storage account only.' },
        { id: 'b', text: 'Event hub, which the SIEM consumes.' },
        { id: 'c', text: 'Service Bus queue.' },
        { id: 'd', text: 'A managed disk.' },
      ],
      correctId: 'b',
      explanation:
        'Event hub is the standard streaming destination for SIEMs such as Microsoft Sentinel or Splunk. Storage accounts work for archive but not real-time SIEM ingestion.',
    },
    {
      id: 'az104-100',
      topic: 'RBAC',
      question:
        'A user with Contributor on a subscription cannot create role assignments. Why?',
      options: [
        { id: 'a', text: 'Contributor manages resources but does not include Microsoft.Authorization/roleAssignments/write.' },
        { id: 'b', text: 'Contributor only works at resource group scope.' },
        { id: 'c', text: 'A deny assignment is hiding the permission.' },
        { id: 'd', text: 'The subscription is marked read-only by Microsoft.' },
      ],
      correctId: 'a',
      explanation:
        'Contributor explicitly excludes role assignment writes; that needs Owner, User Access Administrator, or a custom role with the right permission. Contributor works at any scope it is assigned.',
    },
  ],
}
