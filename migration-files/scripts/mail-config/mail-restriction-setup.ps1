# PowerShell script to create mail flow rule restricting email domains
# This needs to be run in Exchange Online PowerShell

# Define color codes for better readability
$Green = "\e[32m"
$Red = "\e[31m"
$Yellow = "\e[33m"
$Blue = "\e[36m"
$Reset = "\e[0m"

function Write-ColorMessage {
    param (
        [string]$Message,
        [string]$Color
    )
    Write-Host "$Color$Message$Reset"
}

# First, check if the required modules are installed
Write-ColorMessage "Checking for required Exchange Online Management module..." $Yellow

$moduleInstalled = Get-Module -ListAvailable -Name ExchangeOnlineManagement
if (-not $moduleInstalled) {
    Write-ColorMessage "Exchange Online Management module is not installed." $Red
    Write-ColorMessage "Would you like to install it now? (Y/N)" $Yellow
    $installChoice = Read-Host

    if ($installChoice -eq "Y" -or $installChoice -eq "y") {
        Write-ColorMessage "Installing Exchange Online Management module..." $Green
        try {
            Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber -Scope CurrentUser
            Write-ColorMessage "Module installed successfully." $Green
        }
        catch {
            Write-ColorMessage "Failed to install module: $($_.Exception.Message)" $Red
            Write-ColorMessage "Please ask your administrator to run the following commands:" $Yellow
            Write-ColorMessage "Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber" $Blue
            exit 1
        }
    }
    else {
        Write-ColorMessage "You need the ExchangeOnlineManagement module to continue." $Red
        Write-ColorMessage "Please ask your administrator to run the following commands:" $Yellow
        Write-ColorMessage "Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber" $Blue
        exit 1
    }
}

# Try to connect to Exchange Online
try {
    Write-ColorMessage "Connecting to Exchange Online..." $Yellow
    Connect-ExchangeOnline
    Write-ColorMessage "Connected to Exchange Online." $Green
}
catch {
    Write-ColorMessage "Failed to connect to Exchange Online: $($_.Exception.Message)" $Red
    Write-ColorMessage "Please ensure you have the correct permissions to manage Exchange Online." $Yellow
    exit 1
}

# Set variables for App Registration and Email Restrictions
$appId = "e66fa949-5dad-4067-b01b-587088d16796"
$emailSender = "noreply@xevolve.io"  # Corrected from xevolve.com to xevolve.io
$allowedDomains = @("xevolve.io", "spotcloud.nl")
# Create a shorter app ID for the rule name (first 8 characters)
$shortAppId = $appId.Substring(0, 8)

# Define restricted email addresses
$restrictedEmails = @($emailSender, "admin@xevolve.io")  # Using correct email domain

# 1. APP REGISTRATION RESTRICTION APPROACH
# Create a mail flow rule to restrict the app registration to specific domains
try {
    Write-ColorMessage "Creating transport rule to restrict app registration to specific domains..." $Yellow
    $ruleName = "Restrict App $shortAppId to specific domains"
    
    # Check if rule exists
    $existingRule = Get-TransportRule -Identity $ruleName -ErrorAction SilentlyContinue
    
    if ($existingRule) {
        Write-ColorMessage "Rule already exists. Updating..." $Yellow
        Set-TransportRule -Identity $ruleName `
            -FromScope "InOrganization" `
            -SentToScope "NotInOrganization" `
            -HeaderContainsMessageHeader "X-MS-Exchange-Organization-AuthAs" `
            -HeaderContainsWords "Application" `
            -HeaderMatchesMessageHeader "X-MS-Exchange-Organization-AuthSource" `
            -HeaderMatchesPatterns "$appId" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "This application can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    else {
        New-TransportRule -Name $ruleName `
            -FromScope "InOrganization" `
            -SentToScope "NotInOrganization" `
            -HeaderContainsMessageHeader "X-MS-Exchange-Organization-AuthAs" `
            -HeaderContainsWords "Application" `
            -HeaderMatchesMessageHeader "X-MS-Exchange-Organization-AuthSource" `
            -HeaderMatchesPatterns "$appId" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "This application can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    
    Write-ColorMessage "Transport rule for app registration created/updated successfully." $Green
}
catch {
    Write-ColorMessage "Failed to create app registration transport rule: $($_.Exception.Message)" $Red
    Write-ColorMessage "You may need to ask an Exchange administrator to create this rule manually." $Yellow
}

# 2. EMAIL GROUP RESTRICTION APPROACH
# Create or use an existing mail-enabled security group and restrict its sending domains
try {
    $groupName = "XEvolve-RestrictedSenders"
    $groupDisplayName = "XEvolve Restricted Senders"
    $groupDescription = "Group restricted to sending emails only to xevolve.io and spotcloud.nl domains"
    
    Write-ColorMessage "Checking if mail-enabled security group '$groupName' exists..." $Yellow
    $group = Get-DistributionGroup -Identity $groupName -ErrorAction SilentlyContinue
    
    if (-not $group) {
        Write-ColorMessage "Creating new mail-enabled security group '$groupName'..." $Yellow
        try {
            New-DistributionGroup -Name $groupName -DisplayName $groupDisplayName -Type "Security" -Description $groupDescription
            Write-ColorMessage "Group created successfully." $Green
        }
        catch {
            Write-ColorMessage "Failed to create group: $($_.Exception.Message)" $Red
            Write-ColorMessage "You may need additional permissions to create groups." $Yellow
            
            # Proceed with the script even if group creation fails
            Write-ColorMessage "Proceeding with other restrictions..." $Yellow
        }
    }
    else {
        Write-ColorMessage "Group '$groupName' already exists." $Green
    }
    
    # Try to add members to the group
    Write-ColorMessage "Adding restricted email addresses to the group..." $Yellow
    foreach ($email in $restrictedEmails) {
        try {
            Add-DistributionGroupMember -Identity $groupName -Member $email -ErrorAction SilentlyContinue
            Write-ColorMessage "Added $email to group." $Green
        }
        catch {
            Write-ColorMessage "Could not add $email to group: $($_.Exception.Message)" $Yellow
        }
    }
    
    # Create a mail flow rule to restrict the group to the allowed domains
    $groupRuleName = "Restrict $groupName to allowed domains"
    Write-ColorMessage "Creating/updating mail flow rule for the restricted group..." $Yellow
    
    $existingGroupRule = Get-TransportRule -Identity $groupRuleName -ErrorAction SilentlyContinue
    
    if ($existingGroupRule) {
        Write-ColorMessage "Group restriction rule already exists. Updating..." $Yellow
        Set-TransportRule -Identity $groupRuleName `
            -FromMemberOf $groupName `
            -SentToScope "NotInOrganization" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "You can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    else {
        New-TransportRule -Name $groupRuleName `
            -FromMemberOf $groupName `
            -SentToScope "NotInOrganization" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "You can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    
    Write-ColorMessage "Group restriction rule created/updated successfully." $Green
}
catch {
    Write-ColorMessage "Failed to set up email group restrictions: $($_.Exception.Message)" $Red
    Write-ColorMessage "You may need additional permissions for group management." $Yellow
}

# 3. DIRECT EMAIL ADDRESS RESTRICTION (alternative approach)
try {
    Write-ColorMessage "Creating transport rule to directly restrict specific email addresses..." $Yellow
    $directRuleName = "Direct Email Address Restrictions"
    
    $existingDirectRule = Get-TransportRule -Identity $directRuleName -ErrorAction SilentlyContinue
    
    if ($existingDirectRule) {
        Write-ColorMessage "Direct email restriction rule already exists. Updating..." $Yellow
        Set-TransportRule -Identity $directRuleName `
            -From $restrictedEmails `
            -SentToScope "NotInOrganization" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "You can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    else {
        New-TransportRule -Name $directRuleName `
            -From $restrictedEmails `
            -SentToScope "NotInOrganization" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "You can only send emails to xevolve.io and spotcloud.nl domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    
    Write-ColorMessage "Direct email restriction rule created/updated successfully." $Green
}
catch {
    Write-ColorMessage "Failed to create direct email restriction rule: $($_.Exception.Message)" $Red
}

# Attempt to create Application Access Policy (this may still require elevated privileges)
try {
    Write-ColorMessage "Attempting to create Application Access Policy..." $Yellow
    
    # Check if policy exists
    $existingPolicies = Get-ApplicationAccessPolicy -Identity "$emailSender" -ErrorAction SilentlyContinue
    $policyExists = $false
    
    foreach ($policy in $existingPolicies) {
        if ($policy.AppId -eq $appId -or $policy.ClientAppId -eq $appId) {
            $policyExists = $true
            break
        }
    }
    
    if (-not $policyExists) {
        # Try multiple parameter sets as different Exchange versions may use different parameter names
        try {
            New-ApplicationAccessPolicy -PolicyScopeGroupId "$emailSender" -AccessRight RestrictAccess -AppId "$appId" -Description "Restrict app to sending as specific addresses"
        }
        catch {
            try {
                New-ApplicationAccessPolicy -PolicyScopeGroupId "$emailSender" -AccessRight RestrictAccess -ClientAppId "$appId" -Description "Restrict app to sending as specific addresses"
            }
            catch {
                Write-ColorMessage "Could not create Application Access Policy. This requires elevated Exchange admin privileges." $Yellow
            }
        }
    }
    else {
        Write-ColorMessage "Application Access Policy already exists for this app and email." $Green
    }
    
    # Try to test the policy
    try {
        Write-ColorMessage "Testing Application Access Policy..." $Yellow
        $testResult = Test-ApplicationAccessPolicy -Identity "$emailSender" -AppId "$appId"
        Write-ColorMessage "Test result: $($testResult.AccessCheckResult)" $Green
    }
    catch {
        Write-ColorMessage "Could not test Application Access Policy. This requires elevated Exchange admin privileges." $Yellow
    }
}
catch {
    Write-ColorMessage "Failed to manage Application Access Policy: $($_.Exception.Message)" $Red
    Write-ColorMessage "This operation requires elevated Exchange admin privileges." $Yellow
}

Write-ColorMessage "Configuration complete." $Green
Write-ColorMessage "The following email restrictions have been configured:" $Yellow
Write-ColorMessage "1. App Registration $appId restricted to sending only to: $($allowedDomains -join ', ')" $Green
Write-ColorMessage "2. Email addresses $($restrictedEmails -join ', ') restricted to sending only to: $($allowedDomains -join ', ')" $Green
Write-ColorMessage "Please test by sending emails to both allowed and non-allowed domains to verify the restrictions." $Yellow

# Provide manual steps for users who don't have permissions
Write-ColorMessage "`nPlease provide the following information to your Exchange administrator if any part of the setup failed:" $Yellow
Write-ColorMessage "===== INFORMATION FOR EXCHANGE ADMINISTRATOR =====" $Blue
Write-ColorMessage "App Registration ID: $appId" $Reset
Write-ColorMessage "Email Sender: $emailSender" $Reset
Write-ColorMessage "Restricted Email Addresses: $($restrictedEmails -join ', ')" $Reset
Write-ColorMessage "Allowed Domains: $($allowedDomains -join ', ')" $Reset
Write-ColorMessage "Requested Rules:" $Reset
Write-ColorMessage "1. App Registration Rule:" $Reset
Write-ColorMessage "   - Name: Restrict App $shortAppId to specific domains" $Reset
Write-ColorMessage "   - From scope: InOrganization" $Reset
Write-ColorMessage "   - To scope: NotInOrganization" $Reset
Write-ColorMessage "   - Header contains: X-MS-Exchange-Organization-AuthAs with value Application" $Reset
Write-ColorMessage "   - Header matches pattern: X-MS-Exchange-Organization-AuthSource containing $appId" $Reset
Write-ColorMessage "   - Exception: If recipient domain is any of: $($allowedDomains -join ', ')" $Reset
Write-ColorMessage "   - Action: Reject with message 'This application can only send emails to allowed domains'" $Reset
Write-ColorMessage "2. Email Group Restriction Rule:" $Reset
Write-ColorMessage "   - Create a mail-enabled security group named '$groupName'" $Reset
Write-ColorMessage "   - Add these email addresses: $($restrictedEmails -join ', ')" $Reset
Write-ColorMessage "   - Create a transport rule named '$groupRuleName' that restricts this group" $Reset
Write-ColorMessage "   - Rule should only allow sending to domains: $($allowedDomains -join ', ')" $Reset
Write-ColorMessage "3. Direct Email Address Rule:" $Reset
Write-ColorMessage "   - Create a transport rule named '$directRuleName'" $Reset
Write-ColorMessage "   - Apply to these senders: $($restrictedEmails -join ', ')" $Reset
Write-ColorMessage "   - Only allow sending to domains: $($allowedDomains -join ', ')" $Reset
Write-ColorMessage "4. Application Access Policy (requires Global Admin or Exchange Admin):" $Reset
Write-ColorMessage "   - PowerShell commands:" $Reset
Write-ColorMessage "     New-ApplicationAccessPolicy -PolicyScopeGroupId `"$emailSender`" -AccessRight RestrictAccess -AppId `"$appId`"" $Blue
Write-ColorMessage "     # To verify the policy works:" $Reset
Write-ColorMessage "     Test-ApplicationAccessPolicy -Identity `"$emailSender`" -AppId `"$appId`"" $Blue
Write-ColorMessage "===========================================" $Blue
