---
id: understanding-managed-identities
title: Understanding Service vs. User-Assigned Managed Identities in Azure
description: ''
date: '2024-04-15T00:00:00.000Z'
author: Yaïr Knijn
tags:
  - Azure
  - Security
  - Managed Identities
  - Authentication
image: /blog/images/managed-identities-hero.jpg
excerpt: >-
  Learn the key differences between service and user-assigned managed identities
  in Azure and when to use each one.
category: Azure Security
---

# Understanding Service vs. User-Assigned Managed Identities in Azure

Azure Managed Identities provide an elegant solution to the challenge of securing credentials in the cloud. By automatically managing credentials for Azure resources, they eliminate the need for developers to handle sensitive authentication information directly. However, choosing between service-assigned and user-assigned managed identities can be confusing for many developers and architects.

## What are Managed Identities?

Managed identities provide Azure resources with an automatically managed identity in Azure Active Directory (Azure AD). This identity can be used to authenticate to any service that supports Azure AD authentication, eliminating the need for credentials in your code.

There are two types of managed identities:

1. **System-assigned managed identity**: Tied directly to a specific Azure resource and shares its lifecycle.
2. **User-assigned managed identity**: Created as a standalone Azure resource and can be assigned to one or more Azure resources.

## System-assigned Managed Identity

A system-assigned managed identity is tied directly to a specific Azure resource, such as a virtual machine, App Service, or Azure Function. It has these key characteristics:

- **Automatically created and deleted**: When you enable a system-assigned identity for a resource, Azure automatically creates an identity for that resource in Azure AD. When the resource is deleted, the identity is automatically cleaned up.
- **One-to-one relationship**: A system-assigned identity can only be associated with a single resource.
- **Independent permissions**: Each system-assigned identity can be granted its own set of permissions.

### When to use system-assigned managed identities:

- When your resource needs to authenticate to services supporting Azure AD authentication
- When you want the identity lifecycle to be directly tied to the resource lifecycle
- When you want to simplify identity management without needing to create identities separately
- For simpler scenarios where a resource only needs to authenticate to a limited number of other services

## User-assigned Managed Identity

A user-assigned managed identity is created as a standalone Azure resource. It can be assigned to one or more Azure resources and has these key characteristics:

- **Independently managed**: Created and managed separately from the resources that use it
- **Reusable**: Can be assigned to multiple Azure resources
- **Persistent lifecycle**: Exists independently of resources, so deleting a resource doesn't delete the identity

### When to use user-assigned managed identities:

- When multiple resources need to share the same identity
- When you want pre-authorized access before deploying the resources that will use the identity
- For resources that are frequently recreated but should maintain the same identity
- When you need to prepare permissions before deploying the resource
- For complex scenarios requiring centralized identity management

## Comparing the Two Identity Types

| Feature | System-assigned | User-assigned |
|---------|----------------|--------------|
| Creation | Created automatically with resource | Created separately as standalone resource |
| Lifecycle | Tied to resource lifecycle | Independent lifecycle |
| Sharing across resources | Cannot be shared | Can be assigned to multiple resources |
| Azure Resource Manager (ARM) operations | Not available until resource exists | Can be referenced in ARM template |
| Deletion | Automatically deleted when resource is deleted | Must be deleted separately |
| Limit per resource | One per resource | Multiple per resource |

## Best Practices for Managed Identities

Regardless of which type you choose, follow these best practices:

1. **Least privilege principle**: Grant only the permissions necessary for the resource to perform its function
2. **Regular access review**: Periodically review the permissions assigned to managed identities
3. **Monitor usage**: Set up monitoring to track when and how managed identities are used
4. **Documentation**: Document which identities are assigned to which resources and what permissions they have

## Conclusion

Both system-assigned and user-assigned managed identities offer secure, certificate-based authentication for Azure resources without storing credentials in code. System-assigned identities are simpler to manage for individual resources, while user-assigned identities provide more flexibility for complex scenarios requiring identity sharing across multiple resources.

When designing your Azure architecture, consider the specific requirements of your application, the lifecycle of your resources, and your organizational security policies to determine which type of managed identity best suits your needs.
