import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Azure Training Netherlands — MCT-Led Courses | Cloud Evolvers';
const DEFAULT_DESCRIPTION = 'Hands-on Azure certification training led by Microsoft Certified Trainer Yaïr Knijn. AZ-900, AZ-104, AZ-305, AZ-500 courses in Dutch and English.';
const DEFAULT_IMAGE = 'https://cloudevolvers.com/cloudevolvers-social-card.png';
const SITE_URL = 'https://cloudevolvers.com';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
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
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
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
    description: 'Hands-on Azure certification training led by Microsoft Certified Trainer Yaïr Knijn. AZ-900, AZ-104, AZ-305, AZ-500 courses in Dutch and English.',
    canonical: '/',
  },
  training: {
    title: 'Azure & Microsoft Training Courses',
    description: 'Full catalog of Azure and Microsoft certification courses. AZ-900, AZ-104, AZ-204, AZ-305, AZ-400, AZ-500, AI-102 and more. MCT-led with hands-on labs.',
    canonical: '/training',
  },
  services: {
    title: 'Cloud Consulting & Training Services',
    description: 'Azure consulting, corporate training, and cloud migration services in the Netherlands. Custom programs tailored to your team.',
    canonical: '/services',
  },
  about: {
    title: 'About Cloud Evolvers - MCT Certified Trainers',
    description: 'Meet Yaïr Knijn, Microsoft Certified Trainer with 15+ years of Azure and Microsoft 365 experience. Based in the Netherlands.',
    canonical: '/about',
  },
  blog: {
    title: 'Azure & Cloud Technology Blog',
    description: 'Azure tutorials, exam tips, and cloud architecture insights from a working Microsoft Certified Trainer. Practical advice, no fluff.',
    canonical: '/blog',
  },
  contact: {
    title: 'Contact Us - Azure Training Inquiries',
    description: 'Get in touch about Azure training, corporate programs, or consulting. We respond within one business day via WhatsApp or email.',
    canonical: '/contact',
  },
};

// Training course SEO generator
export function getTrainingSEO(courseCode: string, courseTitle: string, courseDescription: string) {
  return {
    title: `${courseCode}: ${courseTitle} Training`,
    description: `${courseDescription.slice(0, 155)}...`,
    canonical: `/training/${courseCode.toLowerCase()}`,
  };
}
