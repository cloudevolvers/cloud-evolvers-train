import { 
  Cloud, 
  Gear, 
  Code, 
  Shield, 
  Globe, 
  Buildings,
  Database,
  ChartBar,
  Lightning,
  Cpu,
  Lock,
  Graph
} from '@phosphor-icons/react';

// Additional training courses beyond the basic Azure Excellence courses
export const extendedTrainingCourses = [
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Explore core data concepts and Azure data services. Learn about relational and non-relational data, analytics, and how to work with data in the cloud.",
    category: "Data & Analytics",
    icon: Database,
    color: "purple",
    highlights: ["Core data concepts", "Azure data services", "Data analytics", "Data visualization"]
  },
  {
    code: "PL-900",
    name: "Power Platform Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Discover how to build business solutions with Power Platform. Learn Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
    category: "Business Applications",
    icon: Lightning,
    color: "orange",
    highlights: ["Power Apps development", "Process automation", "Data visualization", "Chatbot creation"]
  },
  {
    code: "AI-900",
    name: "Azure AI Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Introduction to artificial intelligence and machine learning concepts on Azure. Explore AI workloads and considerations for responsible AI.",
    category: "Artificial Intelligence",
    icon: Cpu,
    color: "cyan",
    highlights: ["AI concepts", "Machine learning", "Computer vision", "Natural language processing"]
  },
  {
    code: "SC-900",
    name: "Security, Compliance & Identity Fundamentals",
    level: "Beginner",
    duration: "2 days",
    description: "Learn security, compliance, and identity concepts across Microsoft cloud services. Understand Zero Trust principles and governance.",
    category: "Security & Compliance",
    icon: Lock,
    color: "red",
    highlights: ["Zero Trust security", "Identity management", "Compliance standards", "Risk management"]
  },
  {
    code: "DP-203",
    name: "Azure Data Engineer",
    level: "Advanced",
    duration: "4 days",
    description: "Design and implement data storage, processing, and security on Azure. Master Azure data services for large-scale data solutions.",
    category: "Data Engineering",
    icon: Database,
    color: "indigo",
    highlights: ["Data lake design", "ETL processes", "Data security", "Performance optimization"]
  },
  {
    code: "DA-100",
    name: "Power BI Data Analyst",
    level: "Intermediate",
    duration: "3 days",
    description: "Transform data into compelling visual narratives. Master Power BI for data modeling, visualization, and business intelligence.",
    category: "Business Intelligence",
    icon: ChartBar,
    color: "yellow",
    highlights: ["Data modeling", "Advanced visualizations", "DAX formulas", "Report deployment"]
  }
];

// Color mappings for the new courses
export const extendedColorMappings = {
  purple: 'from-purple-500/10 to-violet-500/10 border-purple-200/20',
  orange: 'from-orange-500/10 to-amber-500/10 border-orange-200/20',
  cyan: 'from-cyan-500/10 to-sky-500/10 border-cyan-200/20',
  red: 'from-red-500/10 to-rose-500/10 border-red-200/20',
  indigo: 'from-indigo-500/10 to-blue-500/10 border-indigo-200/20',
  yellow: 'from-yellow-500/10 to-orange-500/10 border-yellow-200/20'
};

// Combine with existing color mappings
export const allColorMappings = {
  blue: 'from-blue-500/10 to-cyan-500/10 border-blue-200/20',
  sky: 'from-sky-500/10 to-blue-500/10 border-sky-200/20',
  ...extendedColorMappings
};
