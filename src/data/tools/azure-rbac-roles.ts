/**
 * Azure RBAC built-in roles and common task scenarios.
 *
 * Mental model: a user picks a scope and a set of tasks. The matcher returns
 * the smallest built-in role whose grants cover every selected task at that
 * scope, ranked by tier.
 *
 * Sources: Microsoft Learn "Azure built-in roles" reference. Permissions are
 * the canonical resource provider operation strings used in role definitions.
 */

export type RbacScope =
  | 'subscription'
  | 'resource-group'
  | 'storage-account'
  | 'key-vault'
  | 'vm'
  | 'sql'
  | 'app-service';

export type RbacTier = 'minimal' | 'narrow' | 'broad' | 'admin';

export interface RbacTask {
  id: string;
  label: string;
  scope: RbacScope;
  permissions: string[];
}

export interface RbacRole {
  id: string;
  name: string;
  scope: RbacScope[];
  tier: RbacTier;
  grants: string[];
  description: string;
  warning?: string;
}

export const SCOPE_LABELS: Record<RbacScope, string> = {
  subscription: 'Subscription',
  'resource-group': 'Resource group',
  'storage-account': 'Storage account',
  'key-vault': 'Key vault',
  vm: 'Virtual machine',
  sql: 'SQL database',
  'app-service': 'App Service',
};

export const TIER_LABELS: Record<RbacTier, string> = {
  minimal: 'Minimal',
  narrow: 'Narrow',
  broad: 'Broad',
  admin: 'Admin',
};

export const TIER_RANK: Record<RbacTier, number> = {
  minimal: 0,
  narrow: 1,
  broad: 2,
  admin: 3,
};

export const RBAC_TASKS: RbacTask[] = [
  // Subscription / resource group level
  {
    id: 'view-resource',
    label: 'View any resource (read-only)',
    scope: 'subscription',
    permissions: ['*/read'],
  },
  {
    id: 'assign-rbac-role',
    label: 'Assign RBAC roles to users',
    scope: 'subscription',
    permissions: [
      'Microsoft.Authorization/roleAssignments/write',
      'Microsoft.Authorization/roleAssignments/delete',
    ],
  },
  {
    id: 'view-cost',
    label: 'View cost and billing data',
    scope: 'subscription',
    permissions: ['Microsoft.CostManagement/query/action', 'Microsoft.Consumption/usageDetails/read'],
  },
  {
    id: 'set-budget-alert',
    label: 'Create or update budgets and cost alerts',
    scope: 'subscription',
    permissions: ['Microsoft.Consumption/budgets/write'],
  },
  {
    id: 'view-metrics',
    label: 'Read Azure Monitor metrics and logs',
    scope: 'resource-group',
    permissions: ['Microsoft.Insights/metrics/read', 'Microsoft.Insights/logs/read'],
  },
  {
    id: 'create-alert-rule',
    label: 'Create alert rules and diagnostic settings',
    scope: 'resource-group',
    permissions: [
      'Microsoft.Insights/alertRules/write',
      'Microsoft.Insights/diagnosticSettings/write',
    ],
  },

  // Storage account
  {
    id: 'list-blob-containers',
    label: 'List blob containers (control plane)',
    scope: 'storage-account',
    permissions: ['Microsoft.Storage/storageAccounts/blobServices/containers/read'],
  },
  {
    id: 'read-blob-data',
    label: 'Read blob data',
    scope: 'storage-account',
    permissions: ['Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read'],
  },
  {
    id: 'write-blob-data',
    label: 'Write or delete blob data',
    scope: 'storage-account',
    permissions: [
      'Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write',
      'Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete',
    ],
  },
  {
    id: 'manage-storage-account',
    label: 'Manage the storage account itself (keys, networking)',
    scope: 'storage-account',
    permissions: [
      'Microsoft.Storage/storageAccounts/write',
      'Microsoft.Storage/storageAccounts/listkeys/action',
    ],
  },

  // Key vault (RBAC permissions model)
  {
    id: 'read-key-vault-properties',
    label: 'Read vault properties (control plane)',
    scope: 'key-vault',
    permissions: ['Microsoft.KeyVault/vaults/read'],
  },
  {
    id: 'read-secret',
    label: 'Read secret values',
    scope: 'key-vault',
    permissions: ['Microsoft.KeyVault/vaults/secrets/getSecret/action'],
  },
  {
    id: 'set-secret',
    label: 'Create or update secrets',
    scope: 'key-vault',
    permissions: ['Microsoft.KeyVault/vaults/secrets/setSecret/action'],
  },
  {
    id: 'delete-secret',
    label: 'Delete secrets',
    scope: 'key-vault',
    permissions: ['Microsoft.KeyVault/vaults/secrets/delete'],
  },
  {
    id: 'manage-key-vault-policies',
    label: 'Manage vault access and recovery (purge, restore)',
    scope: 'key-vault',
    permissions: [
      'Microsoft.KeyVault/vaults/write',
      'Microsoft.KeyVault/vaults/purge/action',
    ],
  },

  // Virtual machine
  {
    id: 'start-stop-vm',
    label: 'Start, stop, restart the VM',
    scope: 'vm',
    permissions: [
      'Microsoft.Compute/virtualMachines/start/action',
      'Microsoft.Compute/virtualMachines/powerOff/action',
      'Microsoft.Compute/virtualMachines/restart/action',
    ],
  },
  {
    id: 'resize-vm',
    label: 'Resize the VM or change its config',
    scope: 'vm',
    permissions: ['Microsoft.Compute/virtualMachines/write'],
  },
  {
    id: 'deploy-vm-extension',
    label: 'Deploy or remove VM extensions',
    scope: 'vm',
    permissions: ['Microsoft.Compute/virtualMachines/extensions/write'],
  },
  {
    id: 'ssh-into-vm',
    label: 'SSH or RDP into the VM as a standard user',
    scope: 'vm',
    permissions: ['Microsoft.Compute/virtualMachines/login/action'],
  },
  {
    id: 'admin-login-vm',
    label: 'SSH or RDP into the VM with admin rights',
    scope: 'vm',
    permissions: ['Microsoft.Compute/virtualMachines/loginAsAdmin/action'],
  },

  // SQL database
  {
    id: 'run-sql-query',
    label: 'Run queries via the Azure portal query editor',
    scope: 'sql',
    permissions: ['Microsoft.Sql/servers/databases/read'],
  },
  {
    id: 'manage-sql-firewall',
    label: 'Manage SQL server firewall rules',
    scope: 'sql',
    permissions: ['Microsoft.Sql/servers/firewallRules/write'],
  },
  {
    id: 'restore-sql-backup',
    label: 'Restore a SQL database from backup',
    scope: 'sql',
    permissions: ['Microsoft.Sql/servers/databases/write'],
  },

  // App Service
  {
    id: 'deploy-web-app',
    label: 'Deploy code or config to the web app',
    scope: 'app-service',
    permissions: ['Microsoft.Web/sites/write', 'Microsoft.Web/sites/publish/action'],
  },
  {
    id: 'restart-app',
    label: 'Restart or stop the web app',
    scope: 'app-service',
    permissions: ['Microsoft.Web/sites/restart/action', 'Microsoft.Web/sites/stop/action'],
  },
  {
    id: 'view-app-logs',
    label: 'View web app logs and diagnostics',
    scope: 'app-service',
    permissions: ['Microsoft.Web/sites/config/list/action'],
  },
];

export const RBAC_ROLES: RbacRole[] = [
  // Generic
  {
    id: 'reader',
    name: 'Reader',
    scope: ['subscription', 'resource-group', 'storage-account', 'key-vault', 'vm', 'sql', 'app-service'],
    tier: 'broad',
    grants: ['view-resource', 'list-blob-containers', 'read-key-vault-properties', 'view-metrics', 'run-sql-query'],
    description: 'Read-only access to view all resources but cannot make changes.',
    warning: 'Reader sees control-plane metadata only. It does not grant access to data inside storage, key vault, or SQL.',
  },
  {
    id: 'contributor',
    name: 'Contributor',
    scope: ['subscription', 'resource-group', 'storage-account', 'key-vault', 'vm', 'sql', 'app-service'],
    tier: 'broad',
    grants: [
      'view-resource', 'view-metrics', 'create-alert-rule',
      'list-blob-containers', 'manage-storage-account',
      'read-key-vault-properties', 'manage-key-vault-policies',
      'start-stop-vm', 'resize-vm', 'deploy-vm-extension',
      'run-sql-query', 'manage-sql-firewall', 'restore-sql-backup',
      'deploy-web-app', 'restart-app', 'view-app-logs',
      'view-cost', 'set-budget-alert',
    ],
    description: 'Manages all resources but cannot grant access to others.',
    warning: 'Contributor still cannot read data plane operations like blob contents or key vault secrets under the RBAC model.',
  },
  {
    id: 'owner',
    name: 'Owner',
    scope: ['subscription', 'resource-group', 'storage-account', 'key-vault', 'vm', 'sql', 'app-service'],
    tier: 'admin',
    grants: [
      'view-resource', 'assign-rbac-role', 'view-metrics', 'create-alert-rule',
      'list-blob-containers', 'manage-storage-account',
      'read-key-vault-properties', 'manage-key-vault-policies',
      'start-stop-vm', 'resize-vm', 'deploy-vm-extension',
      'run-sql-query', 'manage-sql-firewall', 'restore-sql-backup',
      'deploy-web-app', 'restart-app', 'view-app-logs',
      'view-cost', 'set-budget-alert',
    ],
    description: 'Full management plus the right to assign roles to others.',
    warning: 'Owner is admin tier. Almost no day-to-day workflow needs Owner. Use Contributor plus User Access Administrator instead when you can.',
  },
  {
    id: 'user-access-administrator',
    name: 'User Access Administrator',
    scope: ['subscription', 'resource-group'],
    tier: 'admin',
    grants: ['view-resource', 'assign-rbac-role'],
    description: 'Manages role assignments but cannot manage resources.',
  },

  // Storage data plane
  {
    id: 'storage-blob-data-reader',
    name: 'Storage Blob Data Reader',
    scope: ['subscription', 'resource-group', 'storage-account'],
    tier: 'minimal',
    grants: ['list-blob-containers', 'read-blob-data'],
    description: 'Read access to blob data and container listings.',
  },
  {
    id: 'storage-blob-data-contributor',
    name: 'Storage Blob Data Contributor',
    scope: ['subscription', 'resource-group', 'storage-account'],
    tier: 'narrow',
    grants: ['list-blob-containers', 'read-blob-data', 'write-blob-data'],
    description: 'Read, write, and delete blob data.',
  },
  {
    id: 'storage-account-contributor',
    name: 'Storage Account Contributor',
    scope: ['subscription', 'resource-group', 'storage-account'],
    tier: 'narrow',
    grants: ['list-blob-containers', 'manage-storage-account'],
    description: 'Manages the storage account resource and its keys, but does not grant access to blob data.',
    warning: 'Owns the account keys. Anyone with this role can mint full data plane access via account keys.',
  },

  // Key vault data plane (RBAC permissions model)
  {
    id: 'key-vault-reader',
    name: 'Key Vault Reader',
    scope: ['subscription', 'resource-group', 'key-vault'],
    tier: 'minimal',
    grants: ['read-key-vault-properties'],
    description: 'Reads vault metadata but cannot read secrets, keys, or certificates.',
  },
  {
    id: 'key-vault-secrets-user',
    name: 'Key Vault Secrets User',
    scope: ['subscription', 'resource-group', 'key-vault'],
    tier: 'minimal',
    grants: ['read-key-vault-properties', 'read-secret'],
    description: 'Reads secret values from a vault using the RBAC permissions model.',
  },
  {
    id: 'key-vault-secrets-officer',
    name: 'Key Vault Secrets Officer',
    scope: ['subscription', 'resource-group', 'key-vault'],
    tier: 'narrow',
    grants: ['read-key-vault-properties', 'read-secret', 'set-secret', 'delete-secret'],
    description: 'Performs any action on secrets except managing vault permissions.',
  },
  {
    id: 'key-vault-administrator',
    name: 'Key Vault Administrator',
    scope: ['subscription', 'resource-group', 'key-vault'],
    tier: 'admin',
    grants: ['read-key-vault-properties', 'read-secret', 'set-secret', 'delete-secret', 'manage-key-vault-policies'],
    description: 'Full data plane and management on a vault under the RBAC permissions model.',
    warning: 'Includes purge rights, which break soft-delete recovery. Reserve for break-glass identities.',
  },

  // Compute
  {
    id: 'virtual-machine-contributor',
    name: 'Virtual Machine Contributor',
    scope: ['subscription', 'resource-group', 'vm'],
    tier: 'narrow',
    grants: ['start-stop-vm', 'resize-vm', 'deploy-vm-extension'],
    description: 'Manages virtual machines but does not grant access to the OS or to the virtual network they connect to.',
  },
  {
    id: 'virtual-machine-user-login',
    name: 'Virtual Machine User Login',
    scope: ['subscription', 'resource-group', 'vm'],
    tier: 'minimal',
    grants: ['ssh-into-vm'],
    description: 'Logs into a VM with regular user privileges via Microsoft Entra ID.',
  },
  {
    id: 'virtual-machine-administrator-login',
    name: 'Virtual Machine Administrator Login',
    scope: ['subscription', 'resource-group', 'vm'],
    tier: 'narrow',
    grants: ['ssh-into-vm', 'admin-login-vm'],
    description: 'Logs into a VM with administrator privileges via Microsoft Entra ID.',
  },

  // SQL
  {
    id: 'sql-db-contributor',
    name: 'SQL DB Contributor',
    scope: ['subscription', 'resource-group', 'sql'],
    tier: 'narrow',
    grants: ['run-sql-query', 'manage-sql-firewall', 'restore-sql-backup'],
    description: 'Manages SQL databases but does not grant data plane access.',
    warning: 'Cannot read or write rows inside the database. That is governed by SQL logins, not RBAC.',
  },

  // App Service
  {
    id: 'website-contributor',
    name: 'Website Contributor',
    scope: ['subscription', 'resource-group', 'app-service'],
    tier: 'narrow',
    grants: ['deploy-web-app', 'restart-app', 'view-app-logs'],
    description: 'Manages App Service web apps without granting access to the underlying plan.',
  },

  // Monitor
  {
    id: 'monitoring-reader',
    name: 'Monitoring Reader',
    scope: ['subscription', 'resource-group'],
    tier: 'minimal',
    grants: ['view-metrics'],
    description: 'Reads all monitoring data across the assigned scope.',
  },
  {
    id: 'monitoring-contributor',
    name: 'Monitoring Contributor',
    scope: ['subscription', 'resource-group'],
    tier: 'narrow',
    grants: ['view-metrics', 'create-alert-rule'],
    description: 'Reads monitoring data and manages alerts and diagnostic settings.',
  },

  // Cost
  {
    id: 'cost-management-reader',
    name: 'Cost Management Reader',
    scope: ['subscription'],
    tier: 'minimal',
    grants: ['view-cost'],
    description: 'Reads cost data and budgets but cannot change them.',
  },
  {
    id: 'cost-management-contributor',
    name: 'Cost Management Contributor',
    scope: ['subscription'],
    tier: 'narrow',
    grants: ['view-cost', 'set-budget-alert'],
    description: 'Reads cost data and manages budgets and exports.',
  },
];

export interface RbacMatch {
  role: RbacRole;
  coversAll: boolean;
  covered: string[];
  missing: string[];
}

/**
 * Match selected tasks against built-in roles at the given scope.
 *
 * Returns roles that are valid at the scope, ordered first by full coverage
 * then by tier rank (least privilege first), then alphabetically.
 */
export function matchRoles(scope: RbacScope, taskIds: string[]): RbacMatch[] {
  if (taskIds.length === 0) return [];
  const eligible = RBAC_ROLES.filter((r) => r.scope.includes(scope));
  const matches: RbacMatch[] = eligible.map((role) => {
    const covered = taskIds.filter((t) => role.grants.includes(t));
    const missing = taskIds.filter((t) => !role.grants.includes(t));
    return {
      role,
      coversAll: missing.length === 0,
      covered,
      missing,
    };
  });
  matches.sort((a, b) => {
    if (a.coversAll !== b.coversAll) return a.coversAll ? -1 : 1;
    if (TIER_RANK[a.role.tier] !== TIER_RANK[b.role.tier]) {
      return TIER_RANK[a.role.tier] - TIER_RANK[b.role.tier];
    }
    if (b.covered.length !== a.covered.length) return b.covered.length - a.covered.length;
    return a.role.name.localeCompare(b.role.name);
  });
  return matches;
}

export const TIER_TONE: Record<RbacTier, { badge: string; text: string }> = {
  minimal: { badge: 'bg-emerald-100 text-emerald-800', text: 'Smallest blast radius. Grants only what is needed for the listed tasks.' },
  narrow: { badge: 'bg-blue-100 text-blue-800', text: 'Resource-type contributor. Manages one service without spilling into others.' },
  broad: { badge: 'bg-amber-100 text-amber-800', text: 'Cross-service. Useful but covers far more than most workflows need.' },
  admin: { badge: 'bg-red-100 text-red-800', text: 'Includes role assignment or vault purge. Reserve for break-glass identities.' },
};
