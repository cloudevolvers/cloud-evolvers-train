---
id: understanding-managed-identities-nl
title: Service vs. User-Assigned Managed Identities in Azure begrijpen
description: 'Leer de belangrijkste verschillen tussen service en user-assigned managed identities in Azure en wanneer je elk moet gebruiken.'
date: '2024-04-15T00:00:00.000Z'
author: Yaïr Knijn
tags:
  - Azure
  - Security
  - Managed Identities
  - Authenticatie
image: /blog/images/managed-identities-hero.jpg
excerpt: >-
  Leer de belangrijkste verschillen tussen service en user-assigned managed identities
  in Azure en wanneer je elk moet gebruiken.
category: Azure Security
---

# Service vs. User-Assigned Managed Identities in Azure begrijpen

Azure Managed Identities bieden een elegante oplossing voor de uitdaging van het beveiligen van credentials in de cloud. Door automatisch credentials te beheren voor Azure resources, elimineren ze de noodzaak voor ontwikkelaars om gevoelige authenticatie-informatie direct te hanteren. Het kiezen tussen service-assigned en user-assigned managed identities kan echter verwarrend zijn voor veel ontwikkelaars en architecten.

## Wat zijn Managed Identities?

Managed identities bieden Azure resources een automatisch beheerde identiteit in Azure Active Directory (Azure AD). Deze identiteit kan worden gebruikt om te authenticeren bij elke service die Azure AD authenticatie ondersteunt, waardoor de noodzaak voor credentials in je code wordt weggenomen.

Er zijn twee soorten managed identities:

1. **System-assigned managed identity**: Direct gekoppeld aan een specifieke Azure resource en deelt de levenscyclus ervan.
2. **User-assigned managed identity**: Gecreëerd als een standalone Azure resource en kan worden toegewezen aan een of meer Azure resources.

## System-assigned Managed Identities

### Kenmerken
- **Levenscyclus**: Automatisch gecreëerd en verwijderd met de Azure resource
- **Reikwijdte**: Gebonden aan één specifieke resource
- **Beheer**: Volledig geautomatiseerd door Azure
- **Kosten**: Geen extra kosten

### Wanneer te gebruiken
System-assigned identities zijn ideaal wanneer:
- Je één resource hebt die toegang nodig heeft tot andere Azure services
- Je de eenvoudigste setup wilt zonder extra beheer
- De resource een korte levensduur heeft
- Je geen identiteit hoeft te delen tussen resources

### Voorbeeld scenario
Een Azure Function die bestanden naar Azure Storage moet schrijven. De function heeft een eigen system-assigned identity die specifieke rechten krijgt voor de storage account.

```bicep
resource functionApp 'Microsoft.Web/sites@2021-02-01' = {
  name: 'myFunctionApp'
  location: resourceGroup().location
  kind: 'functionapp'
  identity: {
    type: 'SystemAssigned'
  }
  // ... andere eigenschappen
}
```

## User-assigned Managed Identities

### Kenmerken
- **Levenscyclus**: Onafhankelijk beheerd als standalone resource
- **Reikwijdte**: Kan aan meerdere resources worden toegewezen
- **Beheer**: Handmatige creatie en verwijdering
- **Kosten**: Geen extra kosten, maar vereist meer beheer

### Wanneer te gebruiken
User-assigned identities zijn beter wanneer:
- Meerdere resources dezelfde identiteit moeten delen
- Je granulaire controle wilt over de identiteit levenscyclus
- Je consistent identity management nodig hebt over verschillende resources
- Je complexe RBAC scenarios hebt

### Voorbeeld scenario
Meerdere Virtual Machines in een scale set die toegang nodig hebben tot dezelfde Key Vault en Storage Account. Eén user-assigned identity kan aan alle VMs worden toegewezen.

```bicep
resource userAssignedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2021-09-30-preview' = {
  name: 'myUserAssignedIdentity'
  location: resourceGroup().location
}

resource vmss 'Microsoft.Compute/virtualMachineScaleSets@2021-07-01' = {
  name: 'myVMSS'
  location: resourceGroup().location
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentity.id}': {}
    }
  }
  // ... andere eigenschappen
}
```

## Beste praktijken

### Security overwegingen
1. **Minimale privileges**: Ken alleen de benodigde permissions toe
2. **Regular audits**: Controleer regelmatig welke identities welke toegang hebben
3. **Monitoring**: Log en monitor het gebruik van managed identities

### Beheer strategieën
1. **Naming conventions**: Gebruik consistente naamgeving voor identities
2. **Documentatie**: Houd bij welke identiteit waar voor gebruikt wordt
3. **Lifecycle management**: Plan wanneer identities gecreëerd en verwijderd worden

## Conclusie

De keuze tussen system-assigned en user-assigned managed identities hangt af van je specifieke scenario. Voor eenvoudige, single-resource scenario's zijn system-assigned identities meestal de beste keuze. Voor complexere architecturen met meerdere resources die toegang delen, bieden user-assigned identities meer flexibiliteit.

Bij xEvolve helpen we organisaties dagelijks bij het implementeren van veilige identity management strategieën in Azure. Wil je meer weten over hoe we je kunnen helpen? Neem contact met ons op!

## Volgende stappen

1. Evalueer je huidige identity setup
2. Identificeer mogelijkheden voor managed identities
3. Plan je migratie strategie
4. Implementeer monitoring en auditing

Voor meer informatie over Azure security best practices, bekijk onze andere blog posts of neem contact op voor een persoonlijke consultatie.
