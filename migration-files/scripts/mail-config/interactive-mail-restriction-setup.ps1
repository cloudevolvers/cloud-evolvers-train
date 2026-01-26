# PowerShell script to create mail flow rule restricting email domains
# This needs to be run in Exchange Online PowerShell
# Interactive version - allows user to input app ID and domains

# Display prominent warning about mail send permissions
Write-Host "`n======================= IMPORTANT PREREQUISITE =======================`n" -ForegroundColor Red -BackgroundColor Black
Write-Host "Before running this script, ensure that your Azure App Registration:" -ForegroundColor Yellow
Write-Host "1. Has been granted Mail.Send permissions on Microsoft Graph" -ForegroundColor Yellow
Write-Host "2. These permissions have been admin-consented in your tenant" -ForegroundColor Yellow
Write-Host "3. The app has a configured client secret or certificate" -ForegroundColor Yellow
Write-Host "`nWithout these prerequisites, mail sending will not work regardless of transport rules.`n" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Red -BackgroundColor Black
Write-Host "`nDo you confirm these permissions are already set up? (Y/N)" -ForegroundColor Cyan
$permissionConfirm = Read-Host

if ($permissionConfirm -ne "Y" -and $permissionConfirm -ne "y") {
    Write-Host "Please set up the required permissions before running this script." -ForegroundColor Red
    Write-Host "Exiting script." -ForegroundColor Red
    exit 1
}

# First, check if the required modules are installed
Write-Host "Checking for required Exchange Online Management module..." -ForegroundColor Yellow

$moduleInstalled = Get-Module -ListAvailable -Name ExchangeOnlineManagement
if (-not $moduleInstalled) {
    Write-Host "Exchange Online Management module is not installed." -ForegroundColor Red
    Write-Host "Would you like to install it now? (Y/N)" -ForegroundColor Yellow
    $installChoice = Read-Host

    if ($installChoice -eq "Y" -or $installChoice -eq "y") {
        Write-Host "Installing Exchange Online Management module..." -ForegroundColor Green
        try {
            Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber -Scope CurrentUser
            Write-Host "Module installed successfully." -ForegroundColor Green
        }
        catch {
            Write-Host "Failed to install module: $($_.Exception.Message)" -ForegroundColor Red
            Write-Host "Please ask your administrator to run the following commands:" -ForegroundColor Yellow
            Write-Host "Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber" -ForegroundColor Cyan
            exit 1
        }
    }
    else {
        Write-Host "You need the ExchangeOnlineManagement module to continue." -ForegroundColor Red
        Write-Host "Please ask your administrator to run the following commands:" -ForegroundColor Yellow
        Write-Host "Install-Module -Name ExchangeOnlineManagement -Force -AllowClobber" -ForegroundColor Cyan
        exit 1
    }
}

# Get user input for app registration ID
Write-Host "`nEnter the Azure App Registration ID (GUID):" -ForegroundColor Yellow
$appId = Read-Host

# Validate app ID format (simple GUID check)
if ($appId -notmatch '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') {
    Write-Host "The App ID entered does not appear to be a valid GUID format." -ForegroundColor Red
    Write-Host "Expected format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" -ForegroundColor Yellow
    Write-Host "Do you want to continue anyway? (Y/N)" -ForegroundColor Yellow
    $continueChoice = Read-Host
    
    if ($continueChoice -ne "Y" -and $continueChoice -ne "y") {
        Write-Host "Exiting script." -ForegroundColor Red
        exit 1
    }
}

# Get email sender address
Write-Host "`nEnter the email sender address (e.g., noreply@company.com):" -ForegroundColor Yellow
$emailSender = Read-Host

# Collect allowed domains
$allowedDomains = @()
$addingDomains = $true

Write-Host "`nNow let's add the allowed domains for this application." -ForegroundColor Yellow
Write-Host "You'll be asked to enter domains one by one." -ForegroundColor Yellow

while ($addingDomains) {
    Write-Host "`nEnter a domain name (e.g., company.com):" -ForegroundColor Yellow
    $domain = Read-Host
    
    if ($domain -ne "") {
        # Simple domain validation
        if ($domain -notmatch '^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$') {
            Write-Host "Warning: The domain '$domain' doesn't appear to be in a valid format." -ForegroundColor Red
            Write-Host "Do you still want to add this domain? (Y/N)" -ForegroundColor Yellow
            $addInvalidDomain = Read-Host
            
            if ($addInvalidDomain -ne "Y" -and $addInvalidDomain -ne "y") {
                continue
            }
        }
        
        $allowedDomains += $domain
        Write-Host "Added domain: $domain" -ForegroundColor Green
    }
    
    Write-Host "`nDo you want to add another domain? (Y/N)" -ForegroundColor Yellow
    $addMore = Read-Host
    
    if ($addMore -ne "Y" -and $addMore -ne "y") {
        $addingDomains = $false
    }
}

# Display the collected information
Write-Host "`nSummary of information:" -ForegroundColor Yellow
Write-Host "App Registration ID: $appId" -ForegroundColor White
Write-Host "Email Sender: $emailSender" -ForegroundColor White
Write-Host "Allowed Domains: $($allowedDomains -join ', ')" -ForegroundColor White

Write-Host "`nDo you want to proceed with this configuration? (Y/N)" -ForegroundColor Yellow
$proceedChoice = Read-Host

if ($proceedChoice -ne "Y" -and $proceedChoice -ne "y") {
    Write-Host "Exiting script." -ForegroundColor Red
    exit 0
}

# Try to connect to Exchange Online
try {
    Write-Host "`nConnecting to Exchange Online..." -ForegroundColor Yellow
    Connect-ExchangeOnline
    Write-Host "Connected to Exchange Online." -ForegroundColor Green
}
catch {
    Write-Host "Failed to connect to Exchange Online: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please ensure you have the correct permissions to manage Exchange Online." -ForegroundColor Yellow
    exit 1
}

# Create a shorter app ID for the rule name (first 8 characters)
$shortAppId = $appId.Substring(0, 8)

# Create a mail flow rule to restrict the app registration to specific domains
try {
    Write-Host "Creating transport rule to restrict domains..." -ForegroundColor Yellow
    $ruleName = "Restrict App $shortAppId to specific domains"
    
    # Check if rule exists
    $existingRule = Get-TransportRule -Identity $ruleName -ErrorAction SilentlyContinue
    
    if ($existingRule) {
        Write-Host "Rule already exists. Updating..." -ForegroundColor Yellow
        Set-TransportRule -Identity $ruleName `
            -FromScope "InOrganization" `
            -SentToScope "NotInOrganization" `
            -HeaderContainsMessageHeader "X-MS-Exchange-Organization-AuthAs" `
            -HeaderContainsWords "Application" `
            -HeaderMatchesMessageHeader "X-MS-Exchange-Organization-AuthSource" `
            -HeaderMatchesPatterns "$appId" `
            -ExceptIfRecipientDomainIs $allowedDomains `
            -RejectMessageReasonText "This application can only send emails to allowed domains" `
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
            -RejectMessageReasonText "This application can only send emails to allowed domains" `
            -RejectMessageEnhancedStatusCode "5.7.1" `
            -Mode "Enforce"
    }
    
    Write-Host "Transport rule created/updated successfully." -ForegroundColor Green
}
catch {
    Write-Host "Failed to create transport rule: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "You may need to ask an Exchange administrator to create this rule manually." -ForegroundColor Yellow
}

# Try to create Application Access Policy
try {
    Write-Host "Attempting to create Application Access Policy..." -ForegroundColor Yellow
    Write-Host "This operation typically requires elevated Exchange admin privileges." -ForegroundColor Yellow
    Write-Host "If this fails, please ask your Exchange administrator to create this policy." -ForegroundColor Yellow
    
    # Skip this part since it likely requires admin privileges
    Write-Host "Skipping automatic Application Access Policy creation - requires admin privileges." -ForegroundColor Yellow
}
catch {
    Write-Host "Failed to manage Application Access Policy: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "Configuration complete." -ForegroundColor Green
Write-Host "App Registration $appId should now only be able to send emails to: $($allowedDomains -join ', ')" -ForegroundColor Green
Write-Host "Please test by sending emails to both allowed and non-allowed domains to verify the restrictions." -ForegroundColor Yellow

# Provide manual steps for users who don't have permissions
Write-Host "`nPlease provide the following information to your Exchange administrator:" -ForegroundColor Yellow
Write-Host "===== INFORMATION FOR EXCHANGE ADMINISTRATOR =====" -ForegroundColor Cyan
Write-Host "App Registration ID: $appId" -ForegroundColor White
Write-Host "Email Sender: $emailSender" -ForegroundColor White
Write-Host "Allowed Domains: $($allowedDomains -join ', ')" -ForegroundColor White
Write-Host "Requested Rules:" -ForegroundColor White
Write-Host "1. Create a mail flow rule with the following settings:" -ForegroundColor White
Write-Host "   - Name: Restrict App $shortAppId to specific domains" -ForegroundColor White
Write-Host "   - From scope: InOrganization" -ForegroundColor White
Write-Host "   - To scope: NotInOrganization" -ForegroundColor White
Write-Host "   - Header contains: X-MS-Exchange-Organization-AuthAs with value Application" -ForegroundColor White
Write-Host "   - Header matches pattern: X-MS-Exchange-Organization-AuthSource containing $appId" -ForegroundColor White
Write-Host "   - Exception: If recipient domain is any of: $($allowedDomains -join ', ')" -ForegroundColor White
Write-Host "   - Action: Reject with message 'This application can only send emails to allowed domains'" -ForegroundColor White
Write-Host "2. Create an Application Access Policy for this app (requires Global Admin or Exchange Admin):" -ForegroundColor White
Write-Host "   - PowerShell commands:" -ForegroundColor White
Write-Host "     New-ApplicationAccessPolicy -PolicyScopeGroupId `"$emailSender`" -AccessRight RestrictAccess -AppId `"$appId`"" -ForegroundColor Cyan
Write-Host "     # If the above fails, try with different parameter names:" -ForegroundColor Cyan
Write-Host "     New-ApplicationAccessPolicy -PolicyScopeGroupId `"$emailSender`" -AccessRight RestrictAccess -ClientAppId `"$appId`"" -ForegroundColor Cyan
Write-Host "     # To verify the policy works:" -ForegroundColor Cyan
Write-Host "     Test-ApplicationAccessPolicy -Identity `"$emailSender`" -AppId `"$appId`"" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan

# Test email functionality
Write-Host "`n==================== TEST EMAIL CONFIGURATION ===================" -ForegroundColor Cyan -BackgroundColor Black
Write-Host "Would you like to test sending an email with this configuration? (Y/N)" -ForegroundColor Yellow
$testEmailChoice = Read-Host

if ($testEmailChoice -eq "Y" -or $testEmailChoice -eq "y") {
    # Check for Microsoft Graph module
    $graphModuleInstalled = Get-Module -ListAvailable -Name Microsoft.Graph.Mail
    if (-not $graphModuleInstalled) {
        Write-Host "Microsoft Graph Mail module is required for testing. Would you like to install it? (Y/N)" -ForegroundColor Yellow
        $installGraphChoice = Read-Host
        
        if ($installGraphChoice -eq "Y" -or $installGraphChoice -eq "y") {
            try {
                Write-Host "Installing Microsoft Graph Mail module..." -ForegroundColor Green
                Install-Module -Name Microsoft.Graph.Mail -Force -Scope CurrentUser
                Write-Host "Module installed successfully." -ForegroundColor Green
                
                # Also install authentication module
                Install-Module -Name Microsoft.Graph.Authentication -Force -Scope CurrentUser
            }
            catch {
                Write-Host "Failed to install Microsoft Graph module: $($_.Exception.Message)" -ForegroundColor Red
                Write-Host "Skipping email test." -ForegroundColor Yellow
                return
            }
        } else {
            Write-Host "Skipping email test." -ForegroundColor Yellow
            return
        }
    }
    
    Write-Host "`nWARNING: The client secret is sensitive information." -ForegroundColor Red
    Write-Host "Would you like to mask the secret while typing? (Y/N)" -ForegroundColor Yellow
    Write-Host "Note: Masking will work only in Windows PowerShell, not in PowerShell Core." -ForegroundColor Yellow
    $maskChoice = Read-Host
    
    $clientSecret = ""
    if ($maskChoice -eq "Y" -or $maskChoice -eq "y") {
        # Try to use secure string input
        try {
            $secureString = Read-Host "Enter the client secret for app ${appId}" -AsSecureString
            $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureString)
            $clientSecret = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
        }
        catch {
            Write-Host "Secure input failed. Please enter the secret directly:" -ForegroundColor Yellow
            $clientSecret = Read-Host
        }
    } else {
        Write-Host "Enter the client secret for app ${appId}:" -ForegroundColor Yellow
        $clientSecret = Read-Host
    }
    
    # Get the tenant ID
    Write-Host "Enter your Azure AD tenant ID or domain name (e.g., contoso.onmicrosoft.com):" -ForegroundColor Yellow
    $tenantId = Read-Host
    
    # Get test recipient (ensure it's in an allowed domain)
    Write-Host "`nEnter a test recipient email address (must be in an allowed domain):" -ForegroundColor Yellow
    $testRecipient = Read-Host
    
    # Validate recipient is in allowed domains
    $recipientDomain = $testRecipient.Split("@")[1]
    $validDomain = $false
    foreach ($domain in $allowedDomains) {
        if ($recipientDomain -eq $domain) {
            $validDomain = $true
            break
        }
    }
    
    if (-not $validDomain) {
        Write-Host "Error: Test recipient must be in one of the allowed domains: $($allowedDomains -join ', ')" -ForegroundColor Red
        Write-Host "Skipping email test." -ForegroundColor Yellow
        return
    }
    
    try {
        # Import the modules
        Import-Module Microsoft.Graph.Authentication
        Import-Module Microsoft.Graph.Mail
        
        # Connect to Microsoft Graph
        Write-Host "`nConnecting to Microsoft Graph..." -ForegroundColor Yellow
        Connect-MgGraph -ClientId $appId -TenantId $tenantId -ClientSecret $clientSecret
        
        # Create a test message
        $subject = "Test Email from Mail Restriction Setup"
        $body = "This is a test email sent as part of configuring mail restrictions for App Registration $appId."
        
        # Send the test email
        Write-Host "Sending test email to $testRecipient..." -ForegroundColor Yellow
        $params = @{
            Message = @{
                Subject = $subject
                Body = @{
                    ContentType = "Text"
                    Content = $body
                }
                ToRecipients = @(
                    @{
                        EmailAddress = @{
                            Address = $testRecipient
                        }
                    }
                )
                From = @{
                    EmailAddress = @{
                        Address = $emailSender
                    }
                }
            }
            SaveToSentItems = $true
        }
        
        Send-MgUserMail -UserId $emailSender -BodyParameter $params
        Write-Host "Test email sent successfully!" -ForegroundColor Green
        
        # Try sending to a non-allowed domain as well to confirm restrictions
        Write-Host "`nWould you like to test the restriction by sending to a non-allowed domain? (Y/N)" -ForegroundColor Yellow
        $testRestrictionChoice = Read-Host
        
        if ($testRestrictionChoice -eq "Y" -or $testRestrictionChoice -eq "y") {
            Write-Host "Enter a test email address in a NON-allowed domain:" -ForegroundColor Yellow
            $nonAllowedRecipient = Read-Host
            
            # Validate recipient is NOT in allowed domains
            $recipientDomain = $nonAllowedRecipient.Split("@")[1]
            $invalidDomain = $true
            foreach ($domain in $allowedDomains) {
                if ($recipientDomain -eq $domain) {
                    $invalidDomain = $false
                    break
                }
            }
            
            if (-not $invalidDomain) {
                Write-Host "Error: Test recipient must NOT be in an allowed domain for this test." -ForegroundColor Red
            } else {
                try {
                    # Send the test email to non-allowed domain
                    $params.Message.ToRecipients[0].EmailAddress.Address = $nonAllowedRecipient
                    Write-Host "Sending test email to non-allowed domain $nonAllowedRecipient..." -ForegroundColor Yellow
                    Write-Host "This should be blocked by the transport rule and fail." -ForegroundColor Yellow
                    Send-MgUserMail -UserId $emailSender -BodyParameter $params
                    Write-Host "WARNING: Email to non-allowed domain was sent! The transport rule may not be working correctly." -ForegroundColor Red
                }
                catch {
                    Write-Host "Email to non-allowed domain was blocked as expected. Transport rule is working!" -ForegroundColor Green
                    Write-Host "Error details: $($_.Exception.Message)" -ForegroundColor Cyan
                }
            }
        }
        
        # Disconnect from Microsoft Graph
        Disconnect-MgGraph
    }
    catch {
        Write-Host "Failed to send test email: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Please check the permissions, client secret, and sender address configuration." -ForegroundColor Yellow
    }
}

Write-Host "`nScript execution complete." -ForegroundColor Green
