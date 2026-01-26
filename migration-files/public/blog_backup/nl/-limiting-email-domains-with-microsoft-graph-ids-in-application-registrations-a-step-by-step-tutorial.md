---
id: blog-1743712006903-nl
title: >-
  E-maildomeinen beperken met Microsoft Graph IDs in Application Registrations:
  Een stap-voor-stap handleiding
description: 'Leer hoe je e-mailinteracties kunt beperken tot goedgekeurde domeinen met Microsoft Graph APIs en application registrations.'
date: '2025-04-03T20:26:46.903Z'
author: Yaïr Knijn
tags: []
image: /blog/images/email-domains-tutorial-hero.jpeg
excerpt: 'Een complete handleiding voor het beperken van e-mailinteracties tot goedgekeurde domeinen met Microsoft Graph en Exchange Online.'
category: Azure Security
---
# E-maildomeinen beperken met Microsoft Graph IDs in Application Registrations: Een stap-voor-stap handleiding

Bij xEvolve helpen we organisaties bij het beveiligen en optimaliseren van hun workflows. Een veelvoorkomende vereiste is het beperken van e-mailinteracties—zoals die van gedeelde mailboxen—tot alleen goedgekeurde domeinen, vooral bij het gebruik van Microsoft Graph APIs met application registrations (App Regs). In deze handleiding lopen we door een PowerShell script dat Microsoft Graph en Exchange Online gebruikt om deze beperkingen af te dwingen. Je leert hoe je authenticeert, beleid instelt, regels maakt, mailboxen beheert en de setup test—alles in één samenhangende gids. Laten we beginnen!

## Wat je leert
- Hoe te authenticeren met Microsoft Graph en Exchange Online
- Hoe gedeelde mailboxen te maken met beperkte e-maildomeinen
- Hoe domeinbeperkingen af te dwingen met application access policies en mail transport rules
- Hoe je configuratie te testen en valideren

Deze handleiding gebruikt een generiek voorbeeld dat e-mail beperkt tot een set goedgekeurde domeinen (bijv. de domeinen van je organisatie).

## Vereisten
Voordat je begint, zorg ervoor dat je hebt:
- **Global Administrator** toegang tot Entra ID (Azure AD) voor Exchange Online commando's
- PowerShell met deze modules geïnstalleerd:
  - `ExchangeOnlineManagement`
  - `Microsoft.Graph`
- Een Azure AD application registration met API machtigingen (bijv. `Mail.Send` voor Graph)
- Een CSV bestand (`mailboxes.csv`) met mailbox namen (bijv. `sales`, `support`)

## Het Complete Script Uitgelegd

Hier is het volledige proces, stap-voor-stap, met het script en uitleg verweven.

### Stap 1: De Omgeving Instellen
Het script begint door je te vragen een omgeving te selecteren (`dev`, `test`, of `prod`), waardoor het aanpasbaar is voor verschillende contexten:

```powershell
Write-Host "Kies een Omgeving:"
Write-Host "1. dev"
Write-Host "2. test"
Write-Host "3. prod"
$choice = Read-Host "Voer het nummer van je keuze in"
switch ($choice) {
    1 { $environment = "dev" }
    2 { $environment = "test" }
    3 { $environment = "prod" }
    default { Write-Host "Ongeldige keuze. Probeer opnieuw." }
}
Write-Host "Omgeving geselecteerd: $environment"
```

Dit stelt de `$environment` variabele in, die later wordt gebruikt om mailbox namen aan te passen (bijv. sales.dev). De flexibiliteit hier zorgt ervoor dat het script werkt voor ontwikkel-, test- en productie-setups.

### Stap 2: Authenticatie met Microsoft Graph en Exchange Online
Vervolgens authenticeert het script met zowel Microsoft Graph als Exchange Online om API calls en mailbox beheer mogelijk te maken:

```powershell
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

# Headers voor Graph API
$headersGraph = @{
    Authorization  = "Bearer $accessTokenGraph"
    "Content-Type" = "application/json"
}
```

Vervang `your-client-id`, `your-client-secret`, en `your-tenant-id` met je Azure AD app details. Deze sectie:

- Verkrijgt access tokens voor zowel Graph als Exchange scopes
- Maakt headers voor Graph API calls
- Gebruikt client credentials flow voor app-only authenticatie

### Stap 3: Application Access Policy Maken
Om e-mailinteracties te beperken, maken we een application access policy die definieert welke mailboxen de app kan benaderen:

```powershell
# Verbind met Exchange Online
Connect-ExchangeOnline -AppId $clientId -CertificateThumbprint $thumbprint -Organization $tenantId

# Maak application access policy
$policyName = "RestrictedMailboxPolicy-$environment"
New-ApplicationAccessPolicy -AppId $clientId -PolicyScopeGroupId "RestrictedMailboxes-$environment" -AccessRight RestrictAccess -Description "Beperkt toegang voor $environment omgeving"
```

Deze policy zorgt ervoor dat de applicatie alleen toegang heeft tot specifieke mailboxen, niet tot alle mailboxen in de tenant.

### Stap 4: Mail Transport Rules Configureren
We maken transport rules om uitgaande e-mails te beperken tot goedgekeurde domeinen:

```powershell
# Definieer goedgekeurde domeinen
$approvedDomains = @("jouwbedrijf.com", "partner.com", "trusted.org")

# Maak transport rule
$ruleName = "BlockExternalDomains-$environment"
New-TransportRule -Name $ruleName -SentToScope NotInOrganization -ExceptIfRecipientDomainIs $approvedDomains -RejectMessageEnhancedStatusCode "5.7.1" -RejectMessageReasonText "E-mail naar externe domeinen is niet toegestaan"
```

### Stap 5: Gedeelde Mailboxen Maken
Het script leest mailbox namen uit een CSV bestand en maakt deze aan:

```powershell
# Lees mailboxes uit CSV
$mailboxes = Import-Csv -Path "mailboxes.csv"

foreach ($mailbox in $mailboxes) {
    $mailboxName = "$($mailbox.Name).$environment"
    $displayName = "$($mailbox.Name) ($environment)"
    
    # Maak gedeelde mailbox
    New-Mailbox -Shared -Name $mailboxName -DisplayName $displayName -PrimarySmtpAddress "$mailboxName@jouwbedrijf.com"
    
    # Voeg toe aan restricted group
    Add-DistributionGroupMember -Identity "RestrictedMailboxes-$environment" -Member $mailboxName
}
```

### Stap 6: Testen en Validatie
Ten slotte test het script de configuratie door een test e-mail te verzenden:

```powershell
# Test e-mail naar goedgekeurd domein
$testEmail = @{
    message = @{
        subject = "Test e-mail - Goedgekeurd domein"
        body = @{
            contentType = "Text"
            content = "Dit is een test e-mail naar een goedgekeurd domein."
        }
        toRecipients = @(
            @{
                emailAddress = @{
                    address = "test@jouwbedrijf.com"
                }
            }
        )
    }
}

# Verzend via Graph API
$response = Invoke-RestMethod -Uri "https://graph.microsoft.com/v1.0/users/sales.$environment@jouwbedrijf.com/sendMail" -Method Post -Headers $headersGraph -Body ($testEmail | ConvertTo-Json -Depth 10)
```

## Best Practices en Overwegingen

### Beveiliging
- Gebruik altijd certificaat-gebaseerde authenticatie voor productie
- Roteer client secrets regelmatig
- Implementeer principle of least privilege

### Monitoring
- Log alle e-mailactiviteit voor auditdoeleinden
- Monitor voor blocked e-mails en review patterns
- Stel alerts in voor policy violations

### Onderhoud
- Review en update goedgekeurde domeinen regelmatig
- Test policies na elke wijziging
- Documenteer alle configuratie wijzigingen

## Conclusie

Met deze handleiding heb je geleerd hoe je e-maildomeinen effectief kunt beperken met Microsoft Graph en Exchange Online. De combinatie van application access policies en transport rules biedt een robuuste beveiliging tegen ongewenste e-mailinteracties.

Bij xEvolve helpen we organisaties dagelijks met dit soort implementaties. Wil je meer weten over hoe we je kunnen helpen je e-mailbeveiliging te optimaliseren? Neem contact met ons op voor een persoonlijke consultatie!

## Volgende Stappen

1. Implementeer de basis configuratie in een test omgeving
2. Test uitgebreid met verschillende scenario's
3. Documenteer je specifieke requirements
4. Roll out naar productie met monitoring

Voor meer geavanceerde Microsoft 365 en Azure security patterns, bekijk onze andere blog posts of neem contact op voor training en consultancy.
