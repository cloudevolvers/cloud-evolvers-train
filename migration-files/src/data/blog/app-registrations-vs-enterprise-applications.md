---
id: '2'
slug: 'app-registrations-vs-enterprise-applications'
title: 'App Registrations vs. Enterprise Applications'
excerpt: 'Understanding the difference between App Registrations and Enterprise Applications in Azure AD.'
author: 'Sarah Johnson'
date: '2023-03-02'
category: 'Azure Identity'
tags:
  - Azure AD
  - App Registration
  - Enterprise Application
  - Service Principal
image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
imageAlt: 'Abstract representation of app identity management'
featured: false
---

## Azure AD Application Model

Azure AD uses a specific application model to enable identity and access management for modern applications. Two key components of this model are App Registrations and Enterprise Applications.

## App Registrations

An App Registration represents the **definition** of an application to Azure AD:

- Contains authentication settings, permissions, reply URLs, etc.
- Used by developers to integrate their application with Azure AD
- Generates application IDs and secrets/certificates for auth
- Defines the permissions that the app will need

## Enterprise Applications

Enterprise Applications represent **instances** of applications in your specific tenant:

- Created automatically when an App Registration is used to sign in
- Contains tenant-specific configurations like user assignments
- Stores service principal information
- Manages consent granted by users or admins
- Tracks user sign-in activity for the application

## The Relationship

Every App Registration has at least one corresponding Enterprise Application. Think of App Registration as the "global definition" and Enterprise Applications as "tenant-specific instances" of that definition.

## When to Use Which

- Use **App Registrations** when:
  - Developing a new application
  - Configuring auth settings and API permissions
  - Managing secrets and certificates

- Use **Enterprise Applications** when:
  - Managing user assignments and permissions
  - Configuring SSO settings
  - Reviewing sign-in activity
  - Managing consent
