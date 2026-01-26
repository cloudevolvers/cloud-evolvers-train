---
id: '2-nl'
title: App Registrations vs. Enterprise Applications
description: 'Het verschil begrijpen tussen App Registrations en Enterprise Applications in Azure AD.'
date: '2023-03-02T00:00:00.000Z'
author: Yaïr Knijn
tags:
  - Azure AD
  - App Registration
  - Enterprise Application
  - Service Principal
image: /blog/images/app-registrations-vs-enterprise-hero.jpg
excerpt: >-
  Het verschil begrijpen tussen App Registrations en Enterprise Applications in Azure AD.
category: Azure Identity
---

## Azure AD Application Model

Azure AD gebruikt een specifiek applicatiemodel om identiteits- en toegangsbeheer voor moderne applicaties mogelijk te maken. Twee kerncomponenten van dit model zijn App Registrations en Enterprise Applications.

## App Registrations

Een App Registration vertegenwoordigt de **definitie** van een applicatie voor Azure AD:

- Bevat authenticatie-instellingen, machtigingen, reply URLs, etc.
- Gebruikt door ontwikkelaars om hun applicatie te integreren met Azure AD
- Genereert applicatie-IDs en secrets/certificaten voor authenticatie
- Definieert de machtigingen die de app nodig heeft

## Enterprise Applications

Enterprise Applications vertegenwoordigen **instanties** van applicaties in uw specifieke tenant:

- Worden automatisch aangemaakt wanneer een App Registration wordt gebruikt om in te loggen
- Bevat tenant-specifieke configuraties zoals gebruikerstoewijzingen
- Slaat service principal informatie op
- Beheert toestemming verleend door gebruikers of beheerders
- Volgt gebruikers-inlogactiviteit voor de applicatie

## De Relatie

Elke App Registration heeft tenminste één corresponderende Enterprise Application. Denk aan App Registration als de "globale definitie" en Enterprise Applications als "tenant-specifieke instanties" van die definitie.

## Wanneer Wat Te Gebruiken

- Gebruik **App Registrations** wanneer:
  - Je een nieuwe applicatie ontwikkelt
  - Je authenticatie-instellingen en API-machtigingen configureert
  - Je secrets en certificaten beheert

- Gebruik **Enterprise Applications** wanneer:
  - Je gebruikerstoewijzingen en machtigingen beheert
  - Je SSO-instellingen configureert
  - Je inlogactiviteit bekijkt
  - Je toestemming beheert
