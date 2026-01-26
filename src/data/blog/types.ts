/**
 * Blog Post Type Definitions
 * Modular blog system with bilingual support (EN/NL)
 */

export interface LocalizedText {
  en: string;
  nl: string;
}

export interface BlogSection {
  title: LocalizedText;
  content: LocalizedText;
  code?: {
    language: string;
    code: string;
  };
  image?: string;
  subsections?: BlogSubsection[];
}

export interface BlogSubsection {
  title: LocalizedText;
  content: LocalizedText;
  list?: LocalizedText[];
  table?: {
    headers: LocalizedText[];
    rows: LocalizedText[][];
  };
}

export interface BlogContent {
  introduction: LocalizedText;
  sections: BlogSection[];
  conclusion: LocalizedText;
}

export interface BlogPost {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
  author: string;
  tags: string[];
  image: string;
  excerpt: LocalizedText;
  category: LocalizedText;
  readTime: number;
  content: BlogContent;
}

export interface LocalizedBlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  excerpt: string;
  category: string;
  readTime: number;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      code?: {
        language: string;
        code: string;
      };
      image?: string;
      subsections?: Array<{
        title: string;
        content: string;
        list?: string[];
        table?: {
          headers: string[];
          rows: string[][];
        };
      }>;
    }>;
    conclusion: string;
  };
}

export type SupportedLanguage = 'en' | 'nl';
