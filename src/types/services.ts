export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  content: string;
  isPublished: boolean;
  publishedAt: string;
  updatedAt: string;
  order: number;
}

export interface ServiceTranslations {
  en: Service;
  nl: Service;
}

export interface AllServicesTranslations {
  [slug: string]: ServiceTranslations;
}
