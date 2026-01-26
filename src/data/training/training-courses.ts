import { getAllTrainings, TrainingMetadata } from '@/components/training/content';
import { getAllTrainings as getAllJSONTrainings } from '@/data/training-json';
import { TrainingJSON } from '@/data/training-json/types';
import { Training } from '@/types/training';

// Function to convert TrainingMetadata to Training format
function convertTrainingMetadata(metadata: TrainingMetadata): Training {
  // Map categories properly
  let category: any = 'Cloud Fundamentals'; // Default
  if (metadata.category === 'Azure') category = 'Cloud Fundamentals';
  else if (metadata.category === 'Microsoft 365') category = 'Microsoft 365';
  else if (metadata.category === 'Power Platform') category = 'Power Platform';
  else if (metadata.category === 'Security') category = 'Security & Compliance';

  return {
    id: metadata.id,
    slug: metadata.slug,
    code: metadata.certification?.examCode || metadata.tags?.find(tag => tag.includes('-')),
    title: metadata.title,
    description: metadata.description,
    category,
    subcategory: metadata.category,
    level: metadata.level as any,
    duration: {
      days: metadata.duration?.days || 0,
      hours: metadata.duration?.hours || 0,
      format: (metadata.duration?.days || 0) > 0 ? 'days' as const : 'hours' as const
    },
    price: {
      amount: metadata.price.amount,
      currency: metadata.price.currency
    },
    overview: metadata.description,
    learningObjectives: metadata.learningObjectives,
    prerequisites: metadata.prerequisites,
    targetAudience: metadata.targetAudience || [`Professionals seeking ${metadata.title} certification`, 'IT professionals', 'System administrators'],
    certification: metadata.certification?.available ? {
      available: true,
      name: metadata.certification.examCode || metadata.title,
      provider: 'Microsoft',
      examCode: metadata.certification.examCode
    } : {
      available: false,
      name: '',
    },
    modules: [
      {
        title: 'Core Concepts',
        duration: `${Math.floor((metadata.duration?.days || 0) * 8 / 3)} hours`,
        topics: metadata.learningObjectives?.slice(0, 3) || []
      },
      {
        title: 'Practical Implementation',
        duration: `${Math.floor((metadata.duration?.days || 0) * 8 / 2)} hours`,
        topics: metadata.learningObjectives?.slice(3, 6) || []
      },
      {
        title: 'Advanced Topics',
        duration: `${Math.ceil((metadata.duration?.days || 0) * 8 / 6)} hours`,
        topics: metadata.learningObjectives?.slice(6) || []
      }
    ].filter(module => module.topics.length > 0),
    highlights: metadata.learningObjectives?.slice(0, 4) || [],
    instructor: {
      id: metadata.instructor?.name?.toLowerCase().replace(/\s+/g, '-') || 'mct-instructor',
      name: metadata.instructor?.name || 'Microsoft Certified Trainer',
      title: metadata.instructor?.title || 'Azure Solutions Expert',
      bio: metadata.instructor?.experience || 'Microsoft Certified Trainer with extensive industry experience',
      certifications: [metadata.certification?.examCode || 'Microsoft Certified'].filter(Boolean),
      avatar: '/instructor-placeholder.jpg'
    },
    deliveryMethods: ['In-Person Workshop', 'Virtual Classroom', 'Hybrid'] as any[],
    maxParticipants: metadata.maxParticipants,
    featured: metadata.featured,
    tags: metadata.tags,
    isPublished: true,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    order: 0
  };
}

// Function to convert TrainingJSON to Training format
function convertTrainingJSON(jsonTraining: TrainingJSON): Training {
  // Map categories properly
  let category: any = 'Cloud Fundamentals'; // Default
  if (jsonTraining.category === 'Azure Administration') category = 'Cloud Fundamentals';
  else if (jsonTraining.category === 'AI & Machine Learning') category = 'AI & Machine Learning';
  else if (jsonTraining.category === 'Developer Tools') category = 'Developer Tools';
  else if (jsonTraining.category === 'Microsoft 365') category = 'Microsoft 365';
  else if (jsonTraining.category === 'Power Platform') category = 'Power Platform';
  else if (jsonTraining.category === jsonTraining.category) category = jsonTraining.category;

  return {
    id: jsonTraining.id,
    slug: jsonTraining.slug,
    code: jsonTraining.certification?.examCode || jsonTraining.tags?.find(tag => tag.includes('-')),
    title: jsonTraining.title,
    description: jsonTraining.description,
    category,
    subcategory: jsonTraining.subcategory,
    level: jsonTraining.difficulty as any,
    duration: jsonTraining.duration,
    price: jsonTraining.price,
    overview: jsonTraining.overview,
    learningObjectives: jsonTraining.learningObjectives.map(obj => obj.description),
    prerequisites: jsonTraining.prerequisites,
    targetAudience: jsonTraining.targetAudience,
    certification: jsonTraining.certification ? {
      available: true,
      name: jsonTraining.certification.name,
      provider: jsonTraining.certification.provider,
      examCode: jsonTraining.certification.examCode
    } : {
      available: false,
      name: '',
    },
    modules: jsonTraining.modules.map(module => ({
      title: module.title,
      topics: module.topics || [],
      duration: module.duration
    })),
    highlights: jsonTraining.learningObjectives.slice(0, 4).map(obj => obj.description),
    instructor: {
      id: jsonTraining.instructor.id,
      name: jsonTraining.instructor.name,
      title: jsonTraining.instructor.title,
      bio: jsonTraining.instructor.bio || '',
      certifications: jsonTraining.instructor.certifications || [],
      avatar: '/instructor-placeholder.jpg'
    },
    deliveryMethods: ['In-Person Workshop', 'Virtual Classroom', 'Hybrid'] as any[],
    maxParticipants: jsonTraining.maxParticipants,
    featured: jsonTraining.featured,
    tags: jsonTraining.tags,
    isPublished: true,
    publishedAt: jsonTraining.createdAt,
    updatedAt: jsonTraining.updatedAt,
    order: 0
  };
}

// Export all training courses converted from both metadata and JSON
export const trainingCourses: Training[] = [
  ...getAllTrainings().map(convertTrainingMetadata),
  ...getAllJSONTrainings().map(convertTrainingJSON)
];

// Export specific trainings for backward compatibility
export const azureFundamentalsTraining = trainingCourses.find(course => course.slug === 'azure-fundamentals');

// Helper functions
export const getTrainingBySlug = (slug: string) => trainingCourses.find(course => course.slug === slug);
export const getTrainingsByCategory = (category: string) => trainingCourses.filter(course => course.category.toLowerCase() === category.toLowerCase());
export const getFeaturedTrainings = () => trainingCourses.filter(course => course.featured);
