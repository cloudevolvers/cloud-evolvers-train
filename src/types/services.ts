export interface ServiceSectionItem {
  title: string;
  description: string;
}

export interface ServiceSection {
  title: string;
  description?: string;
  items?: ServiceSectionItem[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  sections: ServiceSection[];
  benefits: ServiceSectionItem[];
  closingText: string;
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
