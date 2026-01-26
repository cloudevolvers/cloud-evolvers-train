/**
 * Blog posts - Main export file
 * 
 * This file re-exports all blog posts and helper functions from the modular
 * blog structure in /src/data/blog/. Each post is defined in its own file
 * for better maintainability.
 * 
 * To add a new blog post:
 * 1. Create a new file in /src/data/blog/posts/
 * 2. Export the post from that file
 * 3. Import and re-export it in /src/data/blog/index.ts
 */

// Re-export everything from the modular blog structure
export {
  // All individual posts
  claudeSonnetPost,
  grokCopilotPost,
  managedIdentitiesPost,
  bicepBestPracticesPost,
  azureIamGuidePost,
  appRegistrationsVsEnterpriseAppsPost,
  apiManagementHealthChecksPost,
  azureDevOpsAuditPost,
  azureProvisionedFileSharesPost,
  appRegistrationsSecurityPost,
  tokenConfigurationPost,
  azureUpdateManagerPost,
  azureMcpServerPost,
  passwordlessAuthenticationPost,
  mandatoryMfaEnforcementPost,
  
  // Combined posts array
  blogPosts,
  
  // Helper functions
  getLocalizedBlogPost,
  getBlogPost,
  getAllBlogPosts,
  getBlogPostsByTag,
  getBlogPostsByCategory,
} from './blog';

// Re-export types
export type { BlogPost, LocalizedBlogPost, LocalizedText } from './blog';
