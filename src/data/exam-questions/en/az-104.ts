import type { ExamSet } from '../types'

export const az104: ExamSet = {
  examCode: 'AZ-104',
  examName: 'Azure Administrator Associate',
  description:
    'Ten scenario questions at AZ-104 level. Identity, governance, storage, compute, virtual networking, monitoring, and backup.',
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
  ],
}
