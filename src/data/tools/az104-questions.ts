export type Az104Domain =
  | 'identity-governance'
  | 'storage'
  | 'compute'
  | 'networking'
  | 'monitoring-backup';

export interface Az104Question {
  id: string;
  domain: Az104Domain;
  question: string;
  options: { id: string; text: string }[];
  correctId: string;
  explanation: string;
}

export const DOMAIN_LABELS: Record<Az104Domain, string> = {
  'identity-governance': 'Identity & governance',
  storage: 'Storage',
  compute: 'Compute',
  networking: 'Networking',
  'monitoring-backup': 'Monitoring & backup',
};

export const DOMAIN_WEIGHTS: Record<Az104Domain, string> = {
  'identity-governance': '15-20%',
  storage: '15-20%',
  compute: '20-25%',
  networking: '20-25%',
  'monitoring-backup': '10-15%',
};

export const AZ_104_QUESTIONS: Az104Question[] = [
  {
    id: 'q1',
    domain: 'identity-governance',
    question:
      'Which Azure RBAC role grants permission to manage all resources in a subscription, including assigning roles to others, but cannot manage Azure AD?',
    options: [
      { id: 'a', text: 'Contributor' },
      { id: 'b', text: 'Owner' },
      { id: 'c', text: 'User Access Administrator' },
      { id: 'd', text: 'Global Administrator' },
    ],
    correctId: 'b',
    explanation:
      'Owner has full management plus role assignment within the scope. Contributor cannot assign roles. Global Administrator is an Entra ID role, not Azure RBAC.',
  },
  {
    id: 'q2',
    domain: 'identity-governance',
    question:
      'You need to apply a tag to all new resources in a resource group automatically. Which feature do you use?',
    options: [
      { id: 'a', text: 'Resource Lock' },
      { id: 'b', text: 'Azure Policy with a modify or append effect' },
      { id: 'c', text: 'Management Group inheritance' },
      { id: 'd', text: 'Manual tagging during deployment' },
    ],
    correctId: 'b',
    explanation:
      'Azure Policy with the modify or append effect can enforce or auto-add tags on resource creation. Locks prevent changes, they do not add metadata.',
  },
  {
    id: 'q3',
    domain: 'identity-governance',
    question:
      'A cost alert needs to fire when forecasted spend will exceed budget. What do you configure?',
    options: [
      { id: 'a', text: 'A Cost Management budget with a forecasted alert condition' },
      { id: 'b', text: 'An Azure Monitor metric alert on TotalCost' },
      { id: 'c', text: 'A Service Health alert' },
      { id: 'd', text: 'A Log Analytics scheduled query' },
    ],
    correctId: 'a',
    explanation:
      'Cost Management budgets support both actual and forecasted alert types. The forecast variant projects month-end spend based on current run rate.',
  },
  {
    id: 'q4',
    domain: 'storage',
    question:
      'A storage account contains a blob container that needs to be accessible without a SAS token from a specific corporate IP range only. What configuration achieves this?',
    options: [
      { id: 'a', text: 'Enable anonymous blob access on the container' },
      { id: 'b', text: 'Configure storage firewall to allow the corporate IP range and grant access via Entra identity or shared key' },
      { id: 'c', text: 'Issue a long-lived SAS token' },
      { id: 'd', text: 'Set the storage account to private endpoint only' },
    ],
    correctId: 'b',
    explanation:
      'Storage firewall plus authenticated access (Entra or key) restricts to the IP range while keeping auth in place. Anonymous access ignores firewall in some scenarios and exposes data.',
  },
  {
    id: 'q5',
    domain: 'storage',
    question:
      'You need lifecycle management to move blobs to cool tier after 30 days and archive after 90 days. Where do you configure this?',
    options: [
      { id: 'a', text: 'On each blob individually using metadata' },
      { id: 'b', text: 'On the storage account via a lifecycle management policy in JSON' },
      { id: 'c', text: 'Using Azure Policy at the subscription scope' },
      { id: 'd', text: 'Through Defender for Storage' },
    ],
    correctId: 'b',
    explanation:
      'Lifecycle policies are defined as JSON rules at the storage account level and apply to specified containers and prefixes.',
  },
  {
    id: 'q6',
    domain: 'storage',
    question:
      'Which redundancy option keeps three copies of data in a single region and three additional copies in a paired region, with read access in the secondary?',
    options: [
      { id: 'a', text: 'LRS' },
      { id: 'b', text: 'ZRS' },
      { id: 'c', text: 'GRS' },
      { id: 'd', text: 'RA-GRS' },
    ],
    correctId: 'd',
    explanation:
      'RA-GRS adds read access to the secondary region on top of GRS replication. GRS replicates but the secondary is not directly readable.',
  },
  {
    id: 'q7',
    domain: 'compute',
    question:
      'A virtual machine scale set must scale based on average CPU above 70% for 10 minutes. Which feature do you configure?',
    options: [
      { id: 'a', text: 'Manual scaling' },
      { id: 'b', text: 'Custom autoscale rule with a metric trigger and time window' },
      { id: 'c', text: 'Availability Set' },
      { id: 'd', text: 'Azure Automation runbook' },
    ],
    correctId: 'b',
    explanation:
      'Autoscale rules use metric-based triggers with aggregation type, threshold, and time window to add or remove instances.',
  },
  {
    id: 'q8',
    domain: 'compute',
    question:
      'You need to ensure VMs are spread across update domains and fault domains within a single datacentre. What do you use?',
    options: [
      { id: 'a', text: 'Availability Zones' },
      { id: 'b', text: 'Availability Set' },
      { id: 'c', text: 'Proximity Placement Group' },
      { id: 'd', text: 'Region pair' },
    ],
    correctId: 'b',
    explanation:
      'Availability Sets distribute VMs across update and fault domains in a single datacentre. Availability Zones span datacentres within a region.',
  },
  {
    id: 'q9',
    domain: 'compute',
    question:
      'An ARM template deployment fails because a resource depends on another that is not yet provisioned. Which property do you add?',
    options: [
      { id: 'a', text: 'condition' },
      { id: 'b', text: 'dependsOn' },
      { id: 'c', text: 'mode: Incremental' },
      { id: 'd', text: 'copy' },
    ],
    correctId: 'b',
    explanation:
      'dependsOn declares an explicit ordering between resources during deployment.',
  },
  {
    id: 'q10',
    domain: 'networking',
    question:
      'Two virtual networks in the same region must communicate without traversing the public internet, with traffic kept on the Microsoft backbone. What do you configure?',
    options: [
      { id: 'a', text: 'VPN gateway connection' },
      { id: 'b', text: 'VNet peering' },
      { id: 'c', text: 'ExpressRoute' },
      { id: 'd', text: 'Service endpoint' },
    ],
    correctId: 'b',
    explanation:
      'VNet peering connects two VNets directly over the Microsoft backbone. Same-region peering is the simplest fit.',
  },
  {
    id: 'q11',
    domain: 'networking',
    question:
      'You must allow outbound traffic from a subnet only to specific FQDNs and block everything else. Which service handles this?',
    options: [
      { id: 'a', text: 'Network Security Group with FQDN rules' },
      { id: 'b', text: 'Azure Firewall with application rules' },
      { id: 'c', text: 'User Defined Route' },
      { id: 'd', text: 'Service Tag' },
    ],
    correctId: 'b',
    explanation:
      'NSGs filter on IP/port, not FQDN. Azure Firewall application rules support FQDN filtering for outbound HTTP/S.',
  },
  {
    id: 'q12',
    domain: 'monitoring-backup',
    question:
      'A managed disk needs daily backups retained for 30 days. Which Azure service do you use?',
    options: [
      { id: 'a', text: 'Azure Site Recovery' },
      { id: 'b', text: 'Recovery Services Vault with Azure Backup policy' },
      { id: 'c', text: 'Snapshot manually with a runbook' },
      { id: 'd', text: 'Storage account soft delete' },
    ],
    correctId: 'b',
    explanation:
      'Azure Backup with a Recovery Services Vault provides scheduled disk and VM backups with retention policy. Site Recovery is for replication and DR, not point-in-time backup.',
  },
];
