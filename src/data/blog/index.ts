// Blog posts modular exports
// Each post is defined in its own file for maintainability

// Re-export types
export * from './types';

// Import all posts
import { claudeSonnetPost } from './posts/claude-sonnet';
import { grokCopilotPost } from './posts/grok-copilot';
import { managedIdentitiesPost } from './posts/managed-identities';
import { bicepBestPracticesPost } from './posts/bicep-best-practices';
import { azureIamGuidePost } from './posts/azure-iam-guide';
import { appRegistrationsVsEnterpriseAppsPost } from './posts/app-registrations-vs-enterprise-apps';
import { apiManagementHealthChecksPost } from './posts/api-management-health-checks';
import { azureDevOpsAuditPost } from './posts/azure-devops-audit';
import { azureProvisionedFileSharesPost } from './posts/azure-provisioned-file-shares';
import { appRegistrationsSecurityPost } from './posts/app-registrations-security';
import { tokenConfigurationPost } from './posts/token-configuration';
import { azureUpdateManagerPost } from './posts/azure-update-manager';
import { azureMcpServerPost } from './posts/azure-mcp-server';
import { passwordlessAuthenticationPost } from './posts/passwordless-authentication';
import { mandatoryMfaEnforcementPost } from './posts/mandatory-mfa-enforcement';
import { aksNetworkPoliciesPost } from './posts/aks-network-policies';
import { flexConsumptionPost } from './posts/flex-consumption-functions';
import { responsibleAiPost } from './posts/responsible-ai-azure-openai';

import type { BlogPost, LocalizedBlogPost, LocalizedText } from './types';

// Export all posts as named exports
export {
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
  aksNetworkPoliciesPost,
  flexConsumptionPost,
  responsibleAiPost,
};

// Combined array of all blog posts (sorted by date, newest first)
export const blogPosts: BlogPost[] = [
  aksNetworkPoliciesPost,
  flexConsumptionPost,
  responsibleAiPost,
  azureMcpServerPost,
  passwordlessAuthenticationPost,
  mandatoryMfaEnforcementPost,
  azureDevOpsAuditPost,
  azureProvisionedFileSharesPost,
  appRegistrationsSecurityPost,
  tokenConfigurationPost,
  azureUpdateManagerPost,
  claudeSonnetPost,
  grokCopilotPost,
  managedIdentitiesPost,
  bicepBestPracticesPost,
  azureIamGuidePost,
  appRegistrationsVsEnterpriseAppsPost,
  apiManagementHealthChecksPost,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Helper function to get localized text
function getLocalizedText(text: LocalizedText | undefined, locale: 'en' | 'nl'): string {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[locale] || text.en || '';
}

// Helper function to get a localized version of a blog post
export function getLocalizedBlogPost(post: BlogPost, locale: 'en' | 'nl' = 'en'): LocalizedBlogPost {
  return {
    id: post.id,
    title: getLocalizedText(post.title, locale),
    description: getLocalizedText(post.description, locale),
    date: post.date,
    author: post.author,
    tags: post.tags,
    image: post.image,
    excerpt: getLocalizedText(post.excerpt, locale),
    category: getLocalizedText(post.category, locale),
    readTime: post.readTime,
    content: {
      introduction: getLocalizedText(post.content.introduction, locale),
      sections: post.content.sections.map(section => ({
        title: getLocalizedText(section.title, locale),
        content: getLocalizedText(section.content, locale),
        code: section.code,
      })),
      conclusion: getLocalizedText(post.content.conclusion, locale),
    },
  };
}

// Helper function to get a blog post by ID
export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

// Helper function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

// Helper function to get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

// Helper function to get blog posts by category
export function getBlogPostsByCategory(category: string, locale: 'en' | 'nl' = 'en'): BlogPost[] {
  return blogPosts.filter(post => {
    const postCategory = typeof post.category === 'string' 
      ? post.category 
      : post.category[locale] || post.category.en;
    return postCategory === category;
  });
}
