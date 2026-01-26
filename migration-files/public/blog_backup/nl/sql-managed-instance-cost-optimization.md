---
title: "Azure SQL Managed Instance Kostenoptimalisatie: Wanneer Uitschakelen en Flink Besparen"
excerpt: "Leer wanneer en hoe je Azure SQL Managed Instance correct kunt stoppen om kosten tot 80% te reduceren, plus automatiseringsstrategieën met Bicep en Azure Resource Manager."
author:
  name: "Azure Database Specialist"
  title: "Microsoft Certified Azure Database Administrator"
publishedAt: "2025-07-19T11:45:00Z"
image: "/images/blog/sql-mi-cost-optimization-hero.svg"
tags: ["azure", "sql-managed-instance", "kostenoptimalisatie", "automatisering", "bicep", "powershell"]
category: "Kostenbeheer"
readTime: "8 min lezen"
---

# Azure SQL Managed Instance Kostenoptimalisatie: Slim Uitschakelstrategieën

## De Kostuitdaging

Azure SQL Managed Instance is een krachtig PaaS aanbod, maar komt met **continue facturering** zelfs wanneer inactief. In tegenstelling tot virtuele machines die je kunt dealloceren, draait SQL MI traditioneel 24/7, met kosten die kunnen oplopen tot **€1.000-€4.000+ per maand** voor productie instances.

Met recente Azure updates kun je nu echter **SQL Managed Instance stoppen** voor ontwikkel- en testomgevingen, met potentiële besparingen van **60-80% op compute kosten**.

## SQL MI Facturering Begrijpen

### Traditionele Always-On Model
```yaml
General Purpose GP_Gen5_4:
  Maandelijkse Kosten: ~€1.248
  Dagelijkse Kosten: ~€41.60
  Uurlijkse Kosten: ~€1.73
  Facturering: Continue (8.760 uur/maand)
```

### Met Stop/Start Mogelijkheid
```yaml
General Purpose GP_Gen5_4 (Gestopt 16u/dag):
  Draaiende Uren: 8u × 30 dagen = 240 uur
  Gestopte Uren: 16u × 30 dagen = 480 uur
  Compute Kosten: 240u × €1.73 = €415.20
  Storage Kosten: €0.115/GB (continue)
  Totale Besparing: ~67% op compute
```

## Wanneer SQL Managed Instance Stoppen

### ✅ Ideale Scenario's voor Stoppen

#### 1. Ontwikkel- en Testomgevingen
```bicep
// Ontwikkelomgeving - veilig om te stoppen
resource sqlMIDev 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-dev-${uniqueString(resourceGroup().id)}'
  location: location
  properties: {
    administratorLogin: 'sqladmin'
    administratorLoginPassword: adminPassword
    subnetId: devSubnet.id
    vCores: 4
    storageSizeInGB: 256
    licenseType: 'BasePrice'  // Cost optimization
    
    // Development-specific settings
    instancePoolId: devInstancePool.id  // Shared resources
    timezoneId: 'UTC'
    
    // Backup retention voor dev (minimaal)
    backupStorageRedundancy: 'Local'  // Cheapest option
  }
  
  tags: {
    Environment: 'Development'
    StopStartEnabled: 'true'
    CostCenter: 'IT-Development'
    AutoShutdown: 'evenings-weekends'
  }
}
```

#### 2. Training en Demo Omgevingen
```bicep
// Training environment configuratie
resource sqlMITraining 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-training-${region}'
  location: location
  properties: {
    subnetId: trainingSubnet.id
    vCores: 2  // Minimale configuratie
    storageSizeInGB: 128
    licenseType: 'BasePrice'
    
    // Training-optimized settings
    backupStorageRedundancy: 'Local'
    timezoneId: 'W. Europe Standard Time'
  }
  
  tags: {
    Purpose: 'Training'
    Schedule: 'business-hours-only'
    MaxRuntime: '8hours'
  }
}
```

#### 3. Sandbox Omgevingen
```bicep
// Sandbox voor experimenteren
resource sqlMISandbox 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-sandbox-${department}'
  location: location
  properties: {
    subnetId: sandboxSubnet.id
    vCores: 2
    storageSizeInGB: 64  // Minimale storage
    licenseType: 'BasePrice'
    
    // Experimental settings
    collation: 'SQL_Latin1_General_CP1_CI_AS'
  }
  
  tags: {
    Environment: 'Sandbox'
    DataClassification: 'Non-Production'
    AutoDelete: '30days'  // Automatic cleanup
  }
}
```

### ❌ Wanneer NIET Stoppen

#### 1. Productie Omgevingen
```bicep
// Productie - NOOIT stoppen
resource sqlMIProd 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-prod-${workload}'
  location: location
  properties: {
    subnetId: prodSubnet.id
    vCores: 16  // Performance requirement  
    storageSizeInGB: 2048
    licenseType: 'LicenseIncluded'  // Hybrid benefit
    
    // Production settings
    backupStorageRedundancy: 'Geo'  // Disaster recovery
    zoneRedundant: true  // High availability
    
    // Always-on features
    proxyOverride: 'Proxy'
    timezoneId: 'W. Europe Standard Time'
  }
  
  tags: {
    Environment: 'Production'
    CriticalityLevel: 'High'
    StopStartEnabled: 'false'  // Expliciet disabled
    SLA: '99.99%'
  }
}
```

#### 2. Staging met Continue Integratie
```bicep
// Staging met CI/CD pipelines
resource sqlMIStaging 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-staging-${application}'
  location: location
  properties: {
    subnetId: stagingSubnet.id
    vCores: 8
    storageSizeInGB: 512
    licenseType: 'BasePrice'
    
    // Staging-specific
    backupStorageRedundancy: 'Zone'
  }
  
  tags: {
    Environment: 'Staging'
    Purpose: 'CI-CD'
    RequiredUptime: '18x5'  // Business hours + CI/CD
  }
}
```

#### 3. Data Warehouse Workloads
```bicep
// DWH - Continue data processing
resource sqlMIDWH 'Microsoft.Sql/managedInstances@2022-05-01-preview' = {
  name: 'sqlmi-dwh-${region}'
  location: location
  properties: {
    subnetId: dwhSubnet.id
    vCores: 32  // High compute
    storageSizeInGB: 4096
    licenseType: 'LicenseIncluded'
    
    // DWH optimizations
    instancePoolId: dwhInstancePool.id
    minimalTlsVersion: '1.2'
  }
  
  tags: {
    Workload: 'DataWarehouse'
    Schedule: '24x7'
    StopStartEnabled: 'false'
  }
}
```

## Automatisering Strategieën

### 1. Azure Automation Runbooks

```powershell
# Stop SQL MI Runbook
param(
    [Parameter(Mandatory=$true)]
    [string]$ResourceGroupName,
    
    [Parameter(Mandatory=$true)]
    [string]$ManagedInstanceName,
    
    [Parameter(Mandatory=$false)]
    [string]$Schedule = "evenings"
)

# Connect met Managed Identity
Connect-AzAccount -Identity

# Get SQL Managed Instance
$sqlMI = Get-AzSqlInstance -ResourceGroupName $ResourceGroupName -Name $ManagedInstanceName

if ($sqlMI.State -eq "Ready") {
    Write-Output "Stopping SQL Managed Instance: $ManagedInstanceName"
    
    # Stop de instance
    Stop-AzSqlInstance -ResourceGroupName $ResourceGroupName -Name $ManagedInstanceName
    
    # Log actie
    $logEntry = @{
        Timestamp = Get-Date
        Action = "Stop"
        Instance = $ManagedInstanceName
        Reason = "Scheduled shutdown - $Schedule"
        User = "System"
    }
    
    # Send naar Log Analytics
    Send-AzLogAnalyticsData -WorkspaceId $env:LOG_ANALYTICS_WORKSPACE_ID -SharedKey $env:LOG_ANALYTICS_KEY -LogType "SQLMIAutomation" -JsonPayload ($logEntry | ConvertTo-Json)
    
    Write-Output "SQL Managed Instance stopped successfully"
} else {
    Write-Output "SQL Managed Instance is not in Ready state. Current state: $($sqlMI.State)"
}
```

### 2. Logic Apps Integration

```json
{
  "definition": {
    "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {},
    "triggers": {
      "Recurrence": {
        "recurrence": {
          "frequency": "Day",
          "interval": 1,
          "timeZone": "W. Europe Standard Time",
          "startTime": "2024-01-01T18:00:00Z"
        },
        "type": "Recurrence"
      }
    },
    "actions": {
      "Stop_SQL_MI_Dev": {
        "type": "Http",
        "inputs": {
          "method": "POST",
          "uri": "https://management.azure.com/subscriptions/@{variables('subscriptionId')}/resourceGroups/@{variables('resourceGroup')}/providers/Microsoft.Sql/managedInstances/@{variables('instanceName')}/stop",
          "headers": {
            "Authorization": "Bearer @{body('Get_Access_Token')?['access_token']}"
          }
        }
      },
      "Send_Teams_Notification": {
        "type": "Http",
        "inputs": {
          "method": "POST",
          "uri": "@parameters('teamsWebhookUrl')",
          "body": {
            "text": "SQL MI @{variables('instanceName')} has been stopped for cost optimization. Estimated daily savings: €41.60"
          }
        },
        "runAfter": {
          "Stop_SQL_MI_Dev": ["Succeeded"]
        }
      }
    }
  }
}
```

### 3. Azure Functions Timer Triggers

```csharp
[FunctionName("SQLMIScheduler")]
public static async Task Run(
    [TimerTrigger("0 0 18 * * 1-5")] TimerInfo timer,  // 18:00 weekdays
    ILogger log)
{
    log.LogInformation($"SQL MI Scheduler executed at: {DateTime.Now}");
    
    var credentials = new DefaultAzureCredential();
    var sqlClient = new SqlManagementClient(credentials, subscriptionId);
    
    // Get all dev/test SQL MIs with stop tag
    var managedInstances = await sqlClient.ManagedInstances.ListAsync();
    
    foreach (var instance in managedInstances.Where(mi => 
        mi.Tags.ContainsKey("StopStartEnabled") && 
        mi.Tags["StopStartEnabled"] == "true"))
    {
        try
        {
            log.LogInformation($"Stopping SQL MI: {instance.Name}");
            
            await sqlClient.ManagedInstances.BeginStopAsync(
                instance.ResourceGroup, 
                instance.Name);
            
            // Calculate cost savings
            var dailySavings = CalculateDailySavings(instance.VCores, instance.StorageSizeInGB);
            
            // Send cost report
            await SendCostReport(instance.Name, dailySavings);
            
        }
        catch (Exception ex)
        {
            log.LogError($"Failed to stop {instance.Name}: {ex.Message}");
        }
    }
}

private static decimal CalculateDailySavings(int vCores, int storageSizeGB)
{
    // GP_Gen5 pricing per vCore per hour
    decimal pricePerVCorePerHour = 0.432m; // EUR
    decimal hoursStoppedPerDay = 16; // Example: 16 hours stopped
    
    return vCores * pricePerVCorePerHour * hoursStoppedPerDay;
}
```

## Cost Monitoring en Alerting

### 1. Budget Alerts

```bicep
// Budget monitoring voor SQL MI kosten
resource sqlMIBudget 'Microsoft.Consumption/budgets@2021-10-01' = {
  name: 'budget-sqlmi-dev'
  properties: {
    category: 'Cost'
    amount: 500  // EUR per maand
    timeGrain: 'Monthly'
    timePeriod: {
      startDate: '2024-01-01'
      endDate: '2024-12-31'
    }
    filters: {
      resourceGroups: [
        'rg-sqlmi-development'
      ]
      resources: [
        sqlMIDev.id
      ]
    }
    notifications: {
      'notification-80-percent': {
        enabled: true
        operator: 'GreaterThan'
        threshold: 80
        contactEmails: [
          'admin@xevolve.io'
          'finance@xevolve.io'
        ]
        contactGroups: [
          'sql-administrators'
        ]
      }
      'notification-100-percent': {
        enabled: true
        operator: 'GreaterThan'
        threshold: 100
        contactEmails: [
          'admin@xevolve.io'
        ]
      }
    }
  }
}
```

### 2. Cost Analysis Queries

```kql
// SQL MI kostenoverzicht
Usage
| where TimeGenerated > ago(30d)
| where ResourceType == "Microsoft.Sql/managedInstances"
| summarize TotalCost = sum(Cost) by 
    bin(TimeGenerated, 1d), 
    ResourceName, 
    ResourceGroup
| render timechart 

// Stop/Start effectiviteit
CustomMetrics
| where TimeGenerated > ago(7d)
| where Name == "SQLMIState"
| extend State = tostring(CustomDimensions.State)
| summarize 
    RunningHours = countif(State == "Ready"),
    StoppedHours = countif(State == "Stopped")
  by ResourceName
| extend 
    TotalHours = RunningHours + StoppedHours,
    StoppedPercentage = round((StoppedHours * 100.0 / TotalHours), 2),
    EstimatedSavings = round((StoppedHours * 1.73), 2)  // EUR per uur
| project ResourceName, StoppedPercentage, EstimatedSavings

// Onverwachte runtime detectie
Event
| where TimeGenerated > ago(24h)
| where Source == "SQLMIAutomation"
| where EventLevelName == "Warning"
| where RenderedDescription contains "unexpected runtime"
| project TimeGenerated, Computer, RenderedDescription
```

### 3. Dashboard en Rapportage

```bicep
// Azure Dashboard voor SQL MI kosten
resource sqlMIDashboard 'Microsoft.Portal/dashboards@2020-09-01-preview' = {
  name: 'dashboard-sqlmi-cost-optimization'
  location: location
  tags: {
    'hidden-title': 'SQL MI Cost Optimization Dashboard'
  }
  properties: {
    lenses: [
      {
        order: 0
        parts: [
          {
            position: { x: 0, y: 0, rowSpan: 4, colSpan: 6 }
            metadata: {
              inputs: [
                {
                  name: 'query'
                  value: 'Usage | where ResourceType == "Microsoft.Sql/managedInstances" | summarize TotalCost = sum(Cost) by bin(TimeGenerated, 1d) | render timechart'
                }
              ]
              type: 'Extension/Microsoft_OperationsManagementSuite_Workspace/PartType/LogsDashboardPart'
            }
          }
          {
            position: { x: 6, y: 0, rowSpan: 4, colSpan: 6 }
            metadata: {
              inputs: [
                {
                  name: 'budgetScope'
                  value: subscription().id
                }
              ]
              type: 'Extension/Microsoft_Azure_CostManagement/PartType/BudgetsPart'
            }
          }
        ]
      }
    ]
  }
}
```

## Best Practices voor Stop/Start

### 1. Pre-Stop Checklist

```powershell
# Pre-stop validation script
function Test-SQLMIReadyForStop {
    param(
        [string]$ResourceGroupName,
        [string]$InstanceName
    )
    
    $validationResults = @{
        ActiveConnections = $false
        RunningJobs = $false
        BackupInProgress = $false
        MaintenanceWindow = $false
        SafeToStop = $false
    }
    
    # Check active connections
    $connections = Get-AzSqlInstanceActiveConnection -ResourceGroupName $ResourceGroupName -InstanceName $InstanceName
    $validationResults.ActiveConnections = $connections.Count -eq 0
    
    # Check running jobs (via SQL query)
    $runningJobs = Invoke-Sqlcmd -ServerInstance "$InstanceName.database.windows.net" -Query "SELECT COUNT(*) as JobCount FROM msdb.dbo.sysjobs_view WHERE enabled = 1 AND current_execution_status = 1"
    $validationResults.RunningJobs = $runningJobs.JobCount -eq 0
    
    # Check backup status
    $backupStatus = Get-AzSqlInstanceDatabaseBackup -ResourceGroupName $ResourceGroupName -InstanceName $InstanceName -DatabaseName "*" | Where-Object { $_.Status -eq "InProgress" }
    $validationResults.BackupInProgress = $backupStatus.Count -eq 0
    
    # Check maintenance window
    $instance = Get-AzSqlInstance -ResourceGroupName $ResourceGroupName -Name $InstanceName
    $now = Get-Date
    $maintenanceStart = [DateTime]::Parse($instance.MaintenanceConfigurationId.Split('/')[-1])
    $validationResults.MaintenanceWindow = -not ($now -ge $maintenanceStart -and $now -le $maintenanceStart.AddHours(4))
    
    # Overall safety check
    $validationResults.SafeToStop = $validationResults.ActiveConnections -and $validationResults.RunningJobs -and $validationResults.BackupInProgress -and $validationResults.MaintenanceWindow
    
    return $validationResults
}
```

### 2. Graceful Shutdown Process

```powershell
# Graceful shutdown implementation
function Stop-SQLMIGracefully {
    param(
        [string]$ResourceGroupName,
        [string]$InstanceName,
        [int]$GracePeriodMinutes = 15
    )
    
    Write-Output "Starting graceful shutdown process for $InstanceName"
    
    # Step 1: Notify active users
    $notificationQuery = @"
    DECLARE @msg NVARCHAR(255) = 'System will be shut down in $GracePeriodMinutes minutes for maintenance. Please save your work.'
    EXEC sp_send_dbmail 
        @profile_name = 'Default',
        @recipients = 'users@company.com',
        @subject = 'SQL MI Maintenance Notification',
        @body = @msg
"@
    
    try {
        Invoke-Sqlcmd -ServerInstance "$InstanceName.database.windows.net" -Query $notificationQuery
    } catch {
        Write-Warning "Could not send notification: $($_.Exception.Message)"
    }
    
    # Step 2: Wait for grace period
    Write-Output "Waiting $GracePeriodMinutes minutes for graceful shutdown..."
    Start-Sleep -Seconds ($GracePeriodMinutes * 60)
    
    # Step 3: Final validation
    $validation = Test-SQLMIReadyForStop -ResourceGroupName $ResourceGroupName -InstanceName $InstanceName
    
    if ($validation.SafeToStop) {
        Write-Output "Safe to stop. Proceeding with shutdown..."
        Stop-AzSqlInstance -ResourceGroupName $ResourceGroupName -Name $InstanceName
        
        # Log successful stop
        Write-Output "SQL MI $InstanceName stopped successfully at $(Get-Date)"
    } else {
        Write-Warning "Not safe to stop SQL MI. Validation results:"
        $validation | ConvertTo-Json | Write-Output
        
        # Send alert
        Send-AlertNotification -Message "Failed to stop SQL MI $InstanceName - validation failed" -Severity "Warning"
    }
}
```

### 3. Start-up Validation

```powershell
# Post-start validation
function Test-SQLMIStartupHealth {
    param(
        [string]$ResourceGroupName,
        [string]$InstanceName
    )
    
    $healthCheck = @{
        InstanceState = $false
        DatabasesOnline = $false
        LoginSuccessful = $false
        ServicesRunning = $false
        OverallHealth = $false
    }
    
    # Check instance state
    $instance = Get-AzSqlInstance -ResourceGroupName $ResourceGroupName -Name $InstanceName
    $healthCheck.InstanceState = $instance.State -eq "Ready"
    
    # Check databases
    $databases = Get-AzSqlInstanceDatabase -ResourceGroupName $ResourceGroupName -InstanceName $InstanceName
    $healthCheck.DatabasesOnline = ($databases | Where-Object { $_.Status -ne "Online" }).Count -eq 0
    
    # Test login
    try {
        $testQuery = "SELECT @@VERSION"
        $result = Invoke-Sqlcmd -ServerInstance "$InstanceName.database.windows.net" -Query $testQuery
        $healthCheck.LoginSuccessful = $result -ne $null
    } catch {
        $healthCheck.LoginSuccessful = $false
    }
    
    # Check SQL services (via DMV)
    try {
        $servicesQuery = "SELECT COUNT(*) as ServiceCount FROM sys.dm_server_services WHERE status = 4"  # Running
        $services = Invoke-Sqlcmd -ServerInstance "$InstanceName.database.windows.net" -Query $servicesQuery
        $healthCheck.ServicesRunning = $services.ServiceCount -gt 0
    } catch {
        $healthCheck.ServicesRunning = $false
    }
    
    # Overall health
    $healthCheck.OverallHealth = $healthCheck.InstanceState -and $healthCheck.DatabasesOnline -and $healthCheck.LoginSuccessful -and $healthCheck.ServicesRunning
    
    return $healthCheck
}
```

## ROI Calculator

### Kostenbesparing Berekening

```bicep
// ROI calculator template
param environment string = 'development'
param vCores int = 4
param storageSizeGB int = 256
param hoursRunningPerDay int = 8
param daysPerMonth int = 22  // Working days

var pricePerVCorePerHour = 0.432  // EUR voor GP_Gen5
var storagePrice = 0.115  // EUR per GB per maand

var traditionalMonthlyCost = (vCores * pricePerVCorePerHour * 24 * 30) + (storageSizeGB * storagePrice)
var optimizedMonthlyCost = (vCores * pricePerVCorePerHour * hoursRunningPerDay * daysPerMonth) + (storageSizeGB * storagePrice)
var monthlySavings = traditionalMonthlyCost - optimizedMonthlyCost
var annualSavings = monthlySavings * 12

output costAnalysis object = {
  environment: environment
  configuration: {
    vCores: vCores
    storageGB: storageSizeGB
    hoursPerDay: hoursRunningPerDay
    daysPerMonth: daysPerMonth
  }
  costs: {
    traditional: {
      monthly: round(traditionalMonthlyCost, 2)
      annual: round(traditionalMonthlyCost * 12, 2)
    }
    optimized: {
      monthly: round(optimizedMonthlyCost, 2)
      annual: round(optimizedMonthlyCost * 12, 2)
    }
    savings: {
      monthly: round(monthlySavings, 2)
      annual: round(annualSavings, 2)
      percentageMonthly: round((monthlySavings / traditionalMonthlyCost) * 100, 1)
    }
  }
  recommendations: monthlySavings > 200 ? 'Implement stop/start automation' : 'Consider other optimization strategies'
}
```

## Conclusie

SQL Managed Instance stop/start functionaliteit biedt significante kostbesparingen voor non-productie omgevingen:

### 💰 **Potentiële Besparingen**
- **Development**: 60-80% besparing op compute kosten
- **Training**: Tot €1.200/maand besparing per instance  
- **Testing**: 70% kostenreductie tijdens inactieve periodes

### 🤖 **Automatisering Voordelen**
- Consistent schedule enforcement
- Geen menselijke fouten
- Geïntegreerde cost monitoring
- Automatic health checks

### 📊 **Best Practices**
- Implementeer graceful shutdown procedures
- Gebruik pre-stop validation checks
- Monitor en alert op onverwachte kosten
- Documenteer stop/start schedules

### ⚠️ **Belangrijke Overwegingen**
- Alleen voor non-productie workloads
- Backup schedules moeten aangepast worden
- Applications moeten reconnect logic hebben
- Monitoring tijdens stop/start periodes

Voor meer geavanceerde SQL MI kostenoptimalisatie strategieën en implementatie ondersteuning, neem contact op met onze Azure database specialisten.
