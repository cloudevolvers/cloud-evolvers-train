# Connect to Exchange Online
Connect-ExchangeOnline

# Variables for the mailbox
$mailboxName = "No Reply"  # Display name
$mailboxAlias = "noreply"  # Alias
$mailboxEmail = "noreply@xevolve.io"  # Primary SMTP address
$sharedMailboxGroupName = "NoReplyAccessGroup"  # Optional: Group for app access policy (adjust as needed)

# Function to replace special characters (if needed, though not required for this case)
function Replace-SpecialChars {
    param (
        [string]$InputString,
        [string]$SpecialChars,
        [string]$Replacement
    )
    $InputString -replace [regex]::Escape($SpecialChars), $Replacement
}

Write-Host "##[section]Creating Mailbox for '$mailboxEmail'"

# Check if mailbox exists
try {
    $mailboxExists = Get-Recipient -Identity $mailboxName -RecipientType "UserMailbox" -RecipientTypeDetails "SharedMailbox" -ErrorAction "Stop"
    Write-Host "##[debug]Mailbox: '$mailboxName' already exists"
} 
catch {
    Write-Host "##[debug]Mailbox: '$mailboxName' does not exist, Creating ..."

    # Create a shared mailbox
    New-Mailbox -Shared -Name $mailboxName -Alias $mailboxAlias -PrimarySmtpAddress $mailboxEmail
    Write-Host "##[debug]Mailbox: '$mailboxName' created successfully"

    # Set mailbox properties
    Set-Mailbox -Identity $mailboxName -HiddenFromAddressListsEnabled $true
    Set-User -Identity $mailboxName -Department "Service Account" -Confirm:$false
}

# Optional: Check and add to a distribution group (e.g., for app access policy)
$existingMember = Get-DistributionGroupMember -Identity $sharedMailboxGroupName -ErrorAction SilentlyContinue | Where-Object { $_.Name -eq $mailboxName }
if ($existingMember) {
    Write-Host "##[debug]Mailbox: '$mailboxName' is already a member of '$sharedMailboxGroupName'"
}
elseif (!$existingMember) {
    Write-Host "##[debug]Mailbox: '$mailboxName' is not a member of '$sharedMailboxGroupName'. Assigning..."
    try {
        Add-DistributionGroupMember -Identity $sharedMailboxGroupName -Member $mailboxName -ErrorAction Stop
        Write-Host "##[debug]Mailbox: '$mailboxName' added to '$sharedMailboxGroupName'"
    }
    catch {
        Write-Host "##[warning]Failed to add '$mailboxName' to '$sharedMailboxGroupName'. Group may not exist or permissions are insufficient."
    }
}

Write-Host "##[section]Mailbox setup for '$mailboxEmail' completed."