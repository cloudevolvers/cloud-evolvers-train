import localServicesData from '@/data/services.json';

// Types
interface Service {
  slug: string;
  title: string;
  description: string;
  content?: string;
  imageUrl?: string;
  icon?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
}

/**
 * Static fallback data for when Azure Storage is unavailable
 * This is used in static export mode or when Azure Storage is down
 */

// Sample service data
const staticServices = [
  {
    slug: 'cloud-management',
    title: 'Cloud Management',
    description: 'Manage your cloud infrastructure efficiently.',
    content: '<p>Our cloud management services help you optimize costs and improve performance.</p>',
    icon: 'cloud',
    featured: true
  },
  {
    slug: 'security-services',
    title: 'Security Services',
    description: 'Keep your systems secure and protected.',
    content: '<p>We provide comprehensive security services to protect your data and systems.</p>',
    icon: 'shield',
    featured: true
  },
  {
    slug: 'cost-optimization',
    title: 'Cost Optimization',
    description: 'Reduce cloud costs without sacrificing performance.',
    content: '<p>Our cost optimization strategies help you save money while maintaining performance.</p>',
    icon: 'dollar-sign',
    featured: false
  }
];

// Sample blog data
const staticBlogPosts = [
  {
    slug: 'understanding-managed-identities',
    title: 'Understanding Azure Managed Identities',
    excerpt: 'Learn how Azure Managed Identities can simplify authentication.',
    content: '<p>Azure Managed Identities make authentication to Azure services easy and secure.</p>',
    author: 'John Doe',
    date: 'January 15, 2023',
    category: 'Azure',
    tags: ['Azure', 'Security', 'Authentication'],
    image: '/blog/managed-identities.jpg',
    featured: true
  },
  {
    slug: 'app-registrations-vs-enterprise-applications',
    title: 'App Registrations vs Enterprise Applications',
    excerpt: 'Understand the differences between these two Azure AD concepts.',
    content: '<p>App Registrations and Enterprise Applications serve different purposes in Azure AD.</p>',
    author: 'Jane Smith',
    date: 'February 20, 2023',
    category: 'Azure AD',
    tags: ['Azure', 'Azure AD', 'Authentication'],
    image: '/blog/azure-ad.jpg',
    featured: false
  }
];

/**
 * Get static service data for build time
 * @param slug Optional slug to get specific service
 * @returns Service data or array of services
 */
export function getStaticServiceData(slug?: string): Service | Service[] | null {
  const services = localServicesData as Service[];
  
  if (slug) {
    const service = services.find(s => s.slug === slug);
    return service || null;
  }
  
  return services;
}

/**
 * Get static blog data for build time
 * @param slug Optional slug to get specific blog post
 * @returns Blog post data or array of blog posts
 */
export function getStaticBlogData(slug?: string): BlogPost | BlogPost[] | null {
  // This would ideally come from a local JSON file
  // For now, return a simple mock
  const mockBlogPosts: BlogPost[] = [
    {
      slug: 'understanding-managed-identities',
      title: 'Understanding Managed Identities in Azure',
      excerpt: 'Learn how to leverage Azure Managed Identities to secure your applications.',
      content: '<p>This is a placeholder for blog content about Azure Managed Identities.</p>',
      author: 'Azure Expert',
      date: '2023-05-15'
    },
    {
      slug: 'app-registrations-vs-enterprise-applications',
      title: 'App Registrations vs Enterprise Applications',
      excerpt: 'Understand the difference between app registrations and enterprise applications in Azure AD.',
      content: '<p>This is a placeholder for blog content about Azure AD applications.</p>',
      author: 'Azure Expert',
      date: '2023-06-20'
    },
    {
      slug: 'api-management-health-checks',
      title: 'Implementing Health Checks in API Management',
      excerpt: 'Learn how to implement health checks in Azure API Management for better reliability.',
      content: '<p>This is a placeholder for blog content about Azure API Management health checks.</p>',
      author: 'Azure Expert',
      date: '2023-07-10'
    }
  ];
  
  if (slug) {
    const post = mockBlogPosts.find(p => p.slug === slug);
    return post || null;
  }
  
  return mockBlogPosts;
}
