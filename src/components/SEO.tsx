import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Cloud Evolvers - Azure Training & Microsoft Certification';
const DEFAULT_DESCRIPTION = 'Official Microsoft Certified Trainer (MCT) led Azure training in the Netherlands. AZ-900, AZ-104, AZ-305, AZ-400, AZ-500 certification courses.';
const DEFAULT_IMAGE = 'https://cloudevolvers.com/cloudevolvers-social-card.png';
const SITE_URL = 'https://cloudevolvers.com';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  keywords,
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | Cloud Evolvers` : DEFAULT_TITLE;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: undefined, // Uses default
    description: 'Official Microsoft Certified Trainer (MCT) led Azure training in the Netherlands. AZ-900, AZ-104, AZ-305, AZ-400, AZ-500 certification courses with hands-on labs.',
    canonical: '/',
    keywords: 'Azure training, Microsoft certification, MCT trainer, Netherlands, cloud training',
  },
  training: {
    title: 'Azure & Microsoft Training Courses',
    description: 'Complete catalog of Azure and Microsoft certification training courses. AZ-900, AZ-104, AZ-204, AZ-305, AZ-400, AZ-500, AI-102, and more. MCT-led with hands-on labs.',
    canonical: '/training',
    keywords: 'Azure certification, Microsoft training, AZ-900, AZ-104, AZ-305, AZ-400, AZ-500, AI-102, DP-900',
  },
  azureExcellence: {
    title: 'Azure Excellence - Cloud Architecture & Best Practices',
    description: 'Expert Azure cloud architecture, DevOps implementation, and Microsoft best practices consulting. Optimize your cloud infrastructure with certified experts.',
    canonical: '/azure-excellence',
    keywords: 'Azure architecture, cloud consulting, DevOps, Azure best practices, cloud optimization',
  },
  services: {
    title: 'Cloud Consulting & Training Services',
    description: 'Professional Azure consulting, corporate training, and cloud migration services. Custom training programs for your organization.',
    canonical: '/services',
    keywords: 'Azure consulting, corporate training, cloud migration, custom training, Microsoft services',
  },
  about: {
    title: 'About Cloud Evolvers - MCT Certified Trainers',
    description: 'Meet our Microsoft Certified Trainers (MCT). Learn about Cloud Evolvers mission to provide excellence in Azure and Microsoft training.',
    canonical: '/about',
    keywords: 'MCT trainer, Microsoft Certified Trainer, Cloud Evolvers team, Azure experts',
  },
  blog: {
    title: 'Azure & Cloud Technology Blog',
    description: 'Latest insights, tutorials, and best practices for Azure, Microsoft 365, and cloud technologies. Expert articles from MCT certified trainers.',
    canonical: '/blog',
    keywords: 'Azure blog, cloud tutorials, Microsoft tips, Azure best practices, cloud technology',
  },
  contact: {
    title: 'Contact Us - Get Started with Azure Training',
    description: 'Contact Cloud Evolvers for Azure training inquiries, corporate programs, or consulting services. Quick response via WhatsApp or email.',
    canonical: '/contact',
    keywords: 'contact Azure training, training inquiry, corporate training contact',
  },
};

// Training course SEO generator
export function getTrainingSEO(courseCode: string, courseTitle: string, courseDescription: string) {
  return {
    title: `${courseCode}: ${courseTitle} Training`,
    description: `${courseDescription.slice(0, 155)}...`,
    canonical: `/training/${courseCode.toLowerCase()}`,
    keywords: `${courseCode}, ${courseTitle}, Azure certification, Microsoft training, hands-on labs`,
  };
}
