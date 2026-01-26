# PowerShell script to restrict an application to only send emails to specific domains

# Define parameters
param(
    [Parameter(Mandatory=$true)]
    [string]$AppId,
    
    [Parameter(Mandatory=$false)]
    [string]$GroupName = "AllowedEmailDomains",
    
    [Parameter(Mandatory=$false)]
    [string]$GroupDescription = "Security group for domains that can receive emails from app",
    
    [Parameter(Mandatory=$false)]
    [string[]]$AllowedDomains = @("xevolve.io", "spotcloud.nl")
)

# Connect to Exchange Online
Write-Host "Connecting to Exchange Online PowerShell..."
try {
    # Check if already connected
    $null = Get-OrganizationConfig -ErrorAction Stop
    Write-Host "Already connected to Exchange Online PowerShell." -ForegroundColor Green
}
catch {
    try {
        # Try to connect using modern authentication
        Connect-ExchangeOnline -ErrorAction Stop
        Write-Host "Successfully connected to Exchange Online PowerShell." -ForegroundColor Green
    }
    catch {
        Write-Host "Error connecting to Exchange Online: $_" -ForegroundColor Red
        Write-Host "Please make sure you have the Exchange Online PowerShell module installed." -ForegroundColor Yellow
        Write-Host "You can install it using: Install-Module -Name ExchangeOnlineManagement" -ForegroundColor Yellow
        exit 1
    }
}

# Check if the app exists
try {
    $app = Get-MgApplication -ApplicationId $AppId -ErrorAction Stop
    Write-Host "Found application with ID: $AppId" -ForegroundColor Green
}
catch {
    Write-Host "Error: Application with ID $AppId not found." -ForegroundColor Red
    Write-Host "Please verify the application ID is correct." -ForegroundColor Yellow
    exit 1
}

# Check if the group already exists
$groupEmail = "$GroupName@$(Get-AcceptedDomain | Where-Object {$_.Default -eq $true} | Select-Object -ExpandProperty DomainName)"
$groupExists = $false

try {
    $group = Get-Group -Identity $groupEmail -ErrorAction SilentlyContinue
    if ($group) {
        Write-Host "Group $groupEmail already exists." -ForegroundColor Yellow
        $groupExists = $true
    }
}
catch {
    # Group doesn't exist, will create it
}

# Create the mail-enabled security group if it doesn't exist
if (-not $groupExists) {
    try {
        Write-Host "Creating new mail-enabled security group: $GroupName..."
        New-DistributionGroup -Name $GroupName -Type "Security" -DisplayName $GroupName -Description $GroupDescription
        Write-Host "Successfully created mail-enabled security group with email: $groupEmail" -ForegroundColor Green
    }
    catch {
        Write-Host "Error creating mail-enabled security group: $_" -ForegroundColor Red
        exit 1
    }
}

# Create or update application access policy
try {
    # Check if policy already exists for this app
    $existingPolicy = Get-ApplicationAccessPolicy -AppId $AppId -ErrorAction SilentlyContinue

    if ($existingPolicy) {
        Write-Host "Existing policy found for AppId $AppId. Removing..." -ForegroundColor Yellow
        Remove-ApplicationAccessPolicy -Identity $existingPolicy.Identity -Confirm:$false
    }

    # Create new policy
    Write-Host "Creating application access policy to restrict app to domains: $($AllowedDomains -join ', ')"
    New-ApplicationAccessPolicy -AppId $AppId `
                               -PolicyScopeGroupId $groupEmail `
                               -AccessRight RestrictAccess `
                               -Description "Restrict email sending to domains: $($AllowedDomains -join ', ')"
    
    Write-Host "Successfully created application access policy." -ForegroundColor Green
}
catch {
    Write-Host "Error creating application access policy: $_" -ForegroundColor Red
    exit 1
}

# Test the policy
Write-Host "`nTesting application access policy..." -ForegroundColor Cyan
Write-Host "Note: Policy changes may take up to an hour to take effect in Microsoft Graph API calls."

# Example test for a user in the allowed domain
$testUser = "user@$($AllowedDomains[0])"
Write-Host "`nTesting access for user in allowed domain: $testUser"
Test-ApplicationAccessPolicy -Identity $testUser -AppId $AppId

# Example test for a user in a different domain
$testUser = "user@example.com"
Write-Host "`nTesting access for user in restricted domain: $testUser"
Test-ApplicationAccessPolicy -Identity $testUser -AppId $AppId

Write-Host "`nIMPORTANT: You need to add actual users from $($AllowedDomains -join ' and ') domains to the security group!" -ForegroundColor Yellow
Write-Host "Use the following command to add users:" -ForegroundColor Yellow
Write-Host "Add-DistributionGroupMember -Identity `"$groupEmail`" -Member user@domain.com" -ForegroundColor Yellow
