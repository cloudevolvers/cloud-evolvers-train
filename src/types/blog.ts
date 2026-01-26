export interface BlogPost {
  id: string;
  title: string | { en: string; nl: string };
  description: string | { en: string; nl: string };
  date: string;
  author: string;
  tags: string[];
  image: string;
  excerpt: string | { en: string; nl: string };
  category: string | { en: string; nl: string };
  content: {
    introduction: string | { en: string; nl: string };
    sections: BlogSection[];
    conclusion: string | { en: string; nl: string };
  };
  readTime: number;
}

export interface BlogSection {
  title: string | { en: string; nl: string };
  content: string | { en: string; nl: string };
  subsections?: BlogSubsection[];
}

export interface BlogSubsection {
  title: string | { en: string; nl: string };
  content: string | { en: string; nl: string };
  list?: string[] | { en: string[]; nl: string[] };
  table?: {
    headers: string[] | { en: string[]; nl: string[] };
    rows: string[][] | { en: string[][]; nl: string[][] };
  };
}

export interface BlogCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  readTime: number;
}
