import { 
  ArrowRight, 
  Clock, 
  BookOpen,
  Users,
  ChartLine,
  Shield,
  Gear,
  CloudArrowUp
} from "@phosphor-icons/react";

// Enhanced popular courses data following our guidelines (NO FAKE DATA)
export const getPopularCourses = (t: any, language: string = 'en') => {
  const courses = t?.training?.popular?.courses || [];
  
  return [
  {
    id: 'azure-fundamentals', // Changed from 'az-900' to match training slug
    code: courses[1]?.code || 'AZ-900',
    title: courses[1]?.name || 'Azure Fundamentals',
    description: courses[1]?.description || 'Build foundational knowledge of Azure cloud services and core concepts',
    level: courses[1]?.level || 'Beginner',
    duration: courses[1]?.duration || '2 days',
    category: 'Cloud Fundamentals',
    icon: CloudArrowUp,
    levelColor: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300',
    iconBg: 'from-blue-500/20 to-cyan-500/20',
    highlights: courses[1]?.highlights || [
      'Describe cloud computing concepts',
      'Describe Azure core services and solutions',
      'Describe Azure security, privacy, compliance, and trust'
    ]
  },
  {
    id: 'azure-administrator', // Changed from 'az-104' to match training slug
    code: courses[0]?.code || 'AZ-104',
    title: courses[0]?.name || 'Azure Administrator Associate',
    description: courses[0]?.description || 'Master Azure administration skills for managing cloud infrastructure and resources',
    level: courses[0]?.level || 'Intermediate',
    duration: courses[0]?.duration || '4 days',
    category: 'Administration',
    icon: Gear,
    levelColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    iconBg: 'from-orange-500/20 to-red-500/20',
    highlights: courses[0]?.highlights || [
      'Manage Azure identities and governance',
      'Implement and manage storage solutions',
      'Deploy and manage Azure compute resources'
    ]
  },
  {
    id: 'azure-solutions-architect', // Changed from 'az-305' to match training slug
    code: courses[2]?.code || 'AZ-305',
    title: courses[2]?.name || 'Azure Solutions Architect',
    description: courses[2]?.description || 'Design and implement enterprise-level Azure solutions',
    level: courses[2]?.level || 'Advanced',
    duration: courses[2]?.duration || '4 days',
    category: 'Architecture',
    icon: Shield,
    levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
    iconBg: 'from-purple-500/20 to-indigo-500/20',
    highlights: courses[2]?.highlights || [
      'Design monitoring solutions',
      'Design identity and access solutions',
      'Design data storage solutions'
    ]
  },
  {
    id: 'azure-devops-engineer', // Changed from 'az-400' to match training slug
    code: 'AZ-400',
    title: language === 'nl' ? 'Azure DevOps Engineer Expert' : 'Azure DevOps Engineer Expert',
    description: language === 'nl' 
      ? 'Implementeer DevOps-processen en -praktijken voor continue integratie en levering met Azure-tools'
      : 'Implement DevOps processes and practices for continuous integration and delivery using Azure tools',
    level: language === 'nl' ? 'Geavanceerd' : 'Advanced',
    duration: language === 'nl' ? '5 dagen' : '5 days',
    category: 'DevOps',
    icon: ChartLine,
    levelColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    iconBg: 'from-pink-500/20 to-rose-500/20',
    highlights: language === 'nl' 
      ? [
          'CI/CD-pijplijnen ontwerpen',
          'Azure DevOps-services implementeren',
          'Source control strategieën beheren'
        ]
      : [
          'Design CI/CD pipelines',
          'Implement Azure DevOps services', 
          'Manage source control strategies'
        ]
  },
  {
    id: 'azure-developer', // Changed from 'az-204' to match training slug
    code: 'AZ-204',
    title: language === 'nl' ? 'Azure Developer Associate' : 'Azure Developer Associate',
    description: language === 'nl'
      ? 'Ontwikkel cloud-applicaties en -diensten op het Azure-platform met focus op ontwikkelingsvaardigheden'
      : 'Develop cloud applications and services on the Azure platform with focus on development skills',
    level: language === 'nl' ? 'Gemiddeld' : 'Intermediate',
    duration: language === 'nl' ? '4 dagen' : '4 days',
    category: 'Development',
    icon: BookOpen,
    levelColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    iconBg: 'from-cyan-500/20 to-blue-500/20',
    highlights: language === 'nl'
      ? [
          'Azure-applicaties ontwikkelen',
          'Azure-services integreren',
          'Monitoring en troubleshooting'
        ]
      : [
          'Develop Azure applications',
          'Integrate Azure services',
          'Monitor and troubleshoot'
        ]
  },
  {
    id: 'azure-security-engineer', // Changed from 'az-500' to match training slug
    code: 'AZ-500',
    title: language === 'nl' ? 'Azure Security Engineer Associate' : 'Azure Security Engineer Associate',
    description: language === 'nl'
      ? 'Implementeer beveiligingsmaatregelen voor identiteit, toegang, gegevens, applicaties en netwerken in Azure'
      : 'Implement security controls for identity, access, data, applications, and networks in Azure',
    level: language === 'nl' ? 'Geavanceerd' : 'Advanced',
    duration: language === 'nl' ? '4 dagen' : '4 days',
    category: 'Security',
    icon: Shield,
    levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
    iconBg: 'from-red-500/20 to-orange-500/20',
    highlights: language === 'nl'
      ? [
          'Microsoft Entra ID beheren',
          'Voorwaardelijke toegang configureren',
          'Privileged Identity Management'
        ]
      : [
          'Manage Microsoft Entra ID',
          'Configure conditional access',
          'Privileged Identity Management'
        ]
  }
];
};