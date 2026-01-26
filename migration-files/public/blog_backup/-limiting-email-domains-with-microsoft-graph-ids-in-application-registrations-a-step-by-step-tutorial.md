---
id: blog-1743712006903
title: >-
  Limiting Email Domains with Microsoft Graph IDs in Application Registrations:
  A Step-by-Step Tutorial
description: ''
date: '2025-04-03T20:26:46.903Z'
author: Yaïr Knijn
tags: []
image: /blog/images/email-domains-tutorial-hero.jpeg
excerpt: ''
category: Azure Security
---
# Limiting Email Domains with Microsoft Graph IDs in Application Registrations: A Step-by-Step Tutorial

At xEvolve, we’re dedicated to helping organizations secure and optimize their workflows. A frequent requirement is restricting email interactions—such as those from shared mailboxes—to only approved domains, especially when using Microsoft Graph APIs with application registrations (App Regs). In this tutorial, we’ll walk through a PowerShell script that leverages Microsoft Graph and Exchange Online to enforce these restrictions. You’ll learn how to authenticate, set up policies, create rules, manage mailboxes, and test the setup—all in one cohesive guide. Let’s dive in!

## What You’ll Learn
- How to authenticate with Microsoft Graph and Exchange Online.
- How to create shared mailboxes with restricted email domains.
- How to enforce domain limits using application access policies and mail transport rules.
- How to test and validate your configuration.

This tutorial uses a generic example that restricts email to a set of approved domains (e.g., your organization’s domains).

## Prerequisites
Before starting, ensure you have:
- **Global Administrator** access to Entra ID (Azure AD) for Exchange Online commands.
- PowerShell with these modules installed:
  - `ExchangeOnlineManagement`
  - `Microsoft.Graph`
- An Azure AD application registration with API permissions (e.g., `Mail.Send` for Graph).
- A CSV file (`mailboxes.csv`) listing mailbox names (e.g., `sales`, `support`).

## The Complete Script Explained

Here’s the full process, step-by-step, with the script and explanations woven together.

### Step 1: Setting Up the Environment
The script starts by prompting you to select an environment (`dev`, `test`, or `prod`), making it adaptable to different contexts:

```powershell
Write-Host "Choose an Environment:"
Write-Host "1. dev"
Write-Host "2. test"
Write-Host "3. prod"
$choice = Read-Host "Enter the number of your choice"
switch ($choice) {
    1 { $environment = "dev" }
    2 { $environment = "test" }
    3 { $environment = "prod" }
    default { Write-Host "Invalid choice. Please try again." }
}
Write-Host "Environment selected: $environment"
This sets the $environment variable, which will be used later to customize mailbox names (e.g., sales.dev). The flexibility here ensures the script works across development, testing, and production setups.

Step 2: Authentication with Microsoft Graph and Exchange Online
Next, the script authenticates with both Microsoft Graph and Exchange Online to enable API calls and mailbox management:

powershell

Collapse

Wrap

Copy
$clientId = "your-client-id"
$clientSecret = "your-client-secret"
$tenantId = "your-tenant-id"
$scopeGraph = "https://graph.microsoft.com/.default"
$scopeExchange = "https://outlook.office.com/.default"
$tokenUrl = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token"

# Graph token
$bodyGraph = @{
    client_id     = $clientId
    scope         = $scopeGraph
    client_secret = $clientSecret
    grant_type    = "client_credentials"
}
$tokenResponseGraph = Invoke-RestMethod -Uri $tokenUrl -Method Post -Body $bodyGraph
$accessTokenGraph = $tokenResponseGraph.access_token

# Exchange token
$bodyExchange = @{
    client_id     = $clientId
    scope         = $scopeExchange
    client_secret = $clientSecret
    grant_type    = "client_credentials"
}
$tokenResponseExchange = Invoke-RestMethod -Uri $tokenUrl -Method Post -Body $bodyExchange
$accessTokenExchange = $tokenResponseExchange.access_token

# Headers for Graph API
$headersGraph = @{
    Authorization  = "Bearer $accessTokenGraph"
    "Content-Type" = "application/json"
}
Replace your-client-id, your-client-secret, and your-tenant-id with your Azure AD app details. This section:

Requests an access token for Microsoft Graph ($accessTokenGraph) to interact with users and send emails.
Requests an access token for Exchange Online ($accessTokenExchange) to manage mailboxes and rules.
Sets up $headersGraph for Graph API requests.
Step 3: Installing and Connecting Modules
The script ensures the required PowerShell modules are available and connects to Exchange Online:

powershell

Collapse

Wrap

Copy
Install-Module -Name ExchangeOnlineManagement -Force
Install-Module -Name Microsoft.Graph -Force
Import-Module ExchangeOnlineManagement
Import-Module Microsoft.Graph

# Connect to Exchange Online
Connect-ExchangeOnline -Organization "your-org-domain.com" -AccessToken $accessTokenExchange
Modules: Install these once (-Force ensures the latest version). ExchangeOnlineManagement handles Exchange tasks, and Microsoft.Graph supports Graph API calls.
Connection: Replace your-org-domain.com with your organization’s domain (e.g., contoso.com). This uses the Exchange token to connect.
Step 4: Creating an Application Access Policy
To restrict which apps can access mailboxes, the script sets up an application access policy:

powershell

Collapse

Wrap

Copy
$applicationId = "your-app-id" # Your App Registration ID
$groupName = "shared-mailbox-group"
$existingPolicy = Get-ApplicationAccessPolicy | Where-Object { $_.AppId -eq $applicationId -and $_.ScopeName -eq $groupName }

if ($existingPolicy) {
    Write-Host "Application Access Policy already exists"
} else {
    New-ApplicationAccessPolicy `
        -AppId $applicationId `
        -PolicyScopeGroupId $groupName `
        -AccessRight RestrictAccess `
        -Description "Restrict app access to mailboxes in the specified group"
}
Purpose: Limits mailbox access to the app with $applicationId for mailboxes in $groupName.
Check: Skips creation if the policy exists; otherwise, it sets it up.
Step 5: Setting Up a Mail Transport Rule
To enforce domain restrictions, the script creates a mail transport rule:

powershell

Collapse

Wrap

Copy
$ruleName = "Restricted Mailbox Domains"
$groupEmail = "$groupName@your-org-domain.com"
$approvedDomains = @("your-org-domain.com", "partner-domain.com")

$existingRule = Get-TransportRule -Identity $ruleName -ErrorAction SilentlyContinue
if ($existingRule) {
    Write-Host "Mail transport rule already exists"
} else {
    New-TransportRule `
        -Name $ruleName `
        -RejectMessageReasonText "Email to unauthorized domain" `
        -FromMemberOf $groupEmail `
        -ExceptIfRecipientDomainIs $approvedDomains `
        -Mode "Enforce" `
        -Comments "Restricts email from $groupEmail to approved domains"
}
Logic: Rejects emails from $groupEmail unless the recipient’s domain is in $approvedDomains.
Customization: Update $approvedDomains with your allowed domains (e.g., contoso.com, partner.com).
Step 6: Managing the Shared Mailbox Group
The script ensures a security group exists to hold the restricted mailboxes:

powershell

Collapse

Wrap

Copy
$group = Get-DistributionGroup -Identity $groupName -ErrorAction SilentlyContinue
if ($group) {
    Write-Host "Group '$groupName' already exists"
} else {
    New-DistributionGroup `
        -Name $groupName `
        -Type "Security" `
        -PrimarySmtpAddress "$groupName@your-org-domain.com"
}
This group links the mailboxes to the access policy and transport rule.

Step 7: Processing Mailboxes
The script reads mailbox names from mailboxes.csv and configures them:

powershell

Collapse

Wrap

Copy
$mailboxNames = Import-Csv -Path "./mailboxes.csv" -Header 'Name' | Select-Object -ExpandProperty 'Name'

foreach ($mailbox in $mailboxNames) {
    $mailboxEmail = "$mailbox.$environment@your-org-domain.com"
    $mailboxName = "$mailbox ($environment)"

    # Create mailbox if it doesn’t exist
    $mailboxExists = Get-Recipient -Identity $mailboxName -ErrorAction SilentlyContinue
    if ($mailboxExists) {
        Write-Host "Mailbox '$mailboxName' already exists"
    } else {
        New-Mailbox -Shared -Name $mailboxName -Alias "$mailbox.$environment"
        Set-Mailbox -Identity $mailboxName -HiddenFromAddressListsEnabled $true
    }

    # Add to group
    $member = Get-DistributionGroupMember -Identity $groupName | Where-Object { $_.Name -eq $mailboxName }
    if ($member) {
        Write-Host "Mailbox '$mailboxName' already in group"
    } else {
        Add-DistributionGroupMember -Identity $groupName -Member $mailboxName
    }
}
CSV: Expects a file with a Name column (e.g., sales, support).
Naming: Combines the mailbox name with $environment (e.g., sales (prod)).
Setup: Creates shared mailboxes and adds them to $groupName.
Step 8: Testing the Restrictions
Finally, the script tests the setup to ensure restrictions work:

powershell

Collapse

Wrap

Copy
Start-Sleep -Seconds 60 # Wait for propagation

# Test application access policy
Test-ApplicationAccessPolicy -Identity "$groupName@your-org-domain.com" -AppId $applicationId

# Test email restrictions with Graph API
$sendMailUri = "https://graph.microsoft.com/v1.0/users/$mailboxEmail/sendMail"
$successBody = @{
    message = @{
        subject = "Test Email - Approved Domain"
        body = @{ contentType = "Text"; content = "This should work" }
        toRecipients = @(@{ emailAddress = @{ address = "user@your-org-domain.com" } })
    }
} | ConvertTo-Json

$failBody = @{
    message = @{
        subject = "Test Email - Unapproved Domain"
        body = @{ contentType = "Text"; content = "This should fail" }
        toRecipients = @(@{ emailAddress = @{ address = "user@external.com" } })
    }
} | ConvertTo-Json

Invoke-RestMethod -Uri $sendMailUri -Method Post -Headers $headersGraph -Body $successBody
Invoke-RestMethod -Uri $sendMailUri -Method Post -Headers $headersGraph -Body $failBody
Delay: Waits 60 seconds for rules to propagate.
Policy Test: Verifies the app access restriction.
Email Test: Sends two emails—one to an approved domain (should succeed) and one to an unapproved domain (should fail).
Putting It All Together
Here’s how the full script looks when combined:

powershell

Collapse

Wrap

Copy
Write-Host "Choose an Environment:"
Write-Host "1. dev"
Write-Host "2. test"
Write-Host "3. prod"
$choice = Read-Host "Enter the number of your choice"
switch ($choice) {
    1 { $environment = "dev" }
    2 { $environment = "test" }
    3 { $environment = "prod" }
    default { Write-Host "Invalid choice. Please try again." }
}
Write-Host "Environment selected: $environment"

$clientId = "your-client-id"
$clientSecret = "your-client-secret"
$tenantId = "your-tenant-id"
$scopeGraph = "https://graph.microsoft.com/.default"
$scopeExchange = "https://outlook.office.com/.default"
$tokenUrl = "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token"

$bodyGraph = @{
    client_id     = $clientId
    scope         = $scopeGraph
    client_secret = $clientSecret
    grant_type    = "client_credentials"
}
$tokenResponseGraph = Invoke-RestMethod -Uri $tokenUrl -Method Post -Body $bodyGraph
$accessTokenGraph = $tokenResponseGraph.access_token

$bodyExchange = @{
    client_id     = $clientId
    scope         = $scopeExchange
    client_secret = $clientSecret
    grant_type    = "client_credentials"
}
$tokenResponseExchange = Invoke-RestMethod -Uri $tokenUrl -Method Post -Body $bodyExchange
$accessTokenExchange = $tokenResponseExchange.access_token

$headersGraph = @{
    Authorization  = "Bearer $accessTokenGraph"
    "Content-Type" = "application/json"
}

Install-Module -Name ExchangeOnlineManagement -Force
Install-Module -Name Microsoft.Graph -Force
Import-Module ExchangeOnlineManagement
Import-Module Microsoft.Graph

Connect-ExchangeOnline -Organization "your-org-domain.com" -AccessToken $accessTokenExchange

$applicationId = "your-app-id"
$groupName = "shared-mailbox-group"
$existingPolicy = Get-ApplicationAccessPolicy | Where-Object { $_.AppId -eq $applicationId -and $_.ScopeName -eq $groupName }
if ($existingPolicy) {
    Write-Host "Application Access Policy already exists"
} else {
    New-ApplicationAccessPolicy `
        -AppId $applicationId `
        -PolicyScopeGroupId $groupName `
        -AccessRight RestrictAccess `
        -Description "Restrict app access to mailboxes in the specified group"
}

$ruleName = "Restricted Mailbox Domains"
$groupEmail = "$groupName@your-org-domain.com"
$approvedDomains = @("your-org-domain.com", "partner-domain.com")
$existingRule = Get-TransportRule -Identity $ruleName -ErrorAction SilentlyContinue
if ($existingRule) {
    Write-Host "Mail transport rule already exists"
} else {
    New-TransportRule `
        -Name $ruleName `
        -RejectMessageReasonText "Email to unauthorized domain" `
        -FromMemberOf $groupEmail `
        -ExceptIfRecipientDomainIs $approvedDomains `
        -Mode "Enforce" `
        -Comments "Restricts email from $groupEmail to approved domains"
}

$group = Get-DistributionGroup -Identity $groupName -ErrorAction SilentlyContinue
if ($group) {
    Write-Host "Group '$groupName' already exists"
} else {
    New-DistributionGroup `
        -Name $groupName `
        -Type "Security" `
        -PrimarySmtpAddress "$groupName@your-org-domain.com"
}

$mailboxNames = Import-Csv -Path "./mailboxes.csv" -Header 'Name' | Select-Object -ExpandProperty 'Name'
foreach ($mailbox in $mailboxNames) {
    $mailboxEmail = "$mailbox.$environment@your-org-domain.com"
    $mailboxName = "$mailbox ($environment)"
    $mailboxExists = Get-Recipient -Identity $mailboxName -ErrorAction SilentlyContinue
    if ($mailboxExists) {
        Write-Host "Mailbox '$mailboxName' already exists"
    } else {
        New-Mailbox -Shared -Name $mailboxName -Alias "$mailbox.$environment"
        Set-Mailbox -Identity $mailboxName -HiddenFromAddressListsEnabled $true
    }
    $member = Get-DistributionGroupMember -Identity $groupName | Where-Object { $_.Name -eq $mailboxName }
    if ($member) {
        Write-Host "Mailbox '$mailboxName' already in group"
    } else {
        Add-DistributionGroupMember -Identity $groupName -Member $mailboxName
    }
}

Start-Sleep -Seconds 60
Test-ApplicationAccessPolicy -Identity "$groupName@your-org-domain.com" -AppId $applicationId
$sendMailUri = "https://graph.microsoft.com/v1.0/users/$mailboxEmail/sendMail"
$successBody = @{
    message = @{
        subject = "Test Email - Approved Domain"
        body = @{ contentType = "Text"; content = "This should work" }
        toRecipients = @(@{ emailAddress = @{ address = "user@your-org-domain.com" } })
    }
} | ConvertTo-Json
$failBody = @{
    message = @{
        subject = "Test Email - Unapproved Domain"
        body = @{ contentType = "Text"; content = "This should fail" }
        toRecipients = @(@{ emailAddress = @{ address = "user@external.com" } })
    }
} | ConvertTo-Json
Invoke-RestMethod -Uri $sendMailUri -Method Post -Headers $headersGraph -Body $successBody
Invoke-RestMethod -Uri $sendMailUri -Method Post -Headers $headersGraph -Body $failBody
How to Use This Script
Prepare: Replace placeholders (your-client-id, your-org-domain.com, etc.) with your values.
CSV: Create mailboxes.csv with a Name column (e.g., sales, support).
Run: Execute the script in PowerShell with the required modules installed.
Verify: Check the output—emails to approved domains should succeed, while others fail.
Conclusion
This script demonstrates how to restrict email domains using Microsoft Graph and Exchange Online. At xEvolve, we value secure, practical solutions—this setup ensures your applications only interact with approved domains, boosting security and compliance. Customize the domains and test it out in your environment!

Happy scripting!
