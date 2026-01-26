import type { Training, TrainingTranslations } from '../types/training';
import { getAllTrainings as getTrainingMetadata } from '../components/training/content/index';

// Convert TrainingMetadata to Training format
function convertToTraining(metadata: any): Training {
  return {
    id: metadata.id,
    slug: metadata.slug,
    code: metadata.certification?.examCode || metadata.tags?.find((tag: string) => tag.includes('-')),
    title: metadata.title,
    description: metadata.description,
    category: metadata.category as any,
    subcategory: metadata.category,
    level: metadata.level as any,
    duration: metadata.duration,
    price: metadata.price,
    
    overview: metadata.description,
    learningObjectives: metadata.learningObjectives || [],
    prerequisites: metadata.prerequisites || [],
    targetAudience: metadata.targetAudience || [],
    
    certification: metadata.certification ? {
      available: metadata.certification.available,
      name: metadata.certification.examCode || metadata.title,
      examCode: metadata.certification.examCode,
      provider: 'Microsoft'
    } : undefined,
    
    modules: [],
    highlights: metadata.learningObjectives?.slice(0, 3) || [],
    
    instructor: {
      id: metadata.instructor?.name?.toLowerCase().replace(/\s+/g, '-') || 'mct-instructor',
      name: metadata.instructor?.name || 'Microsoft Certified Trainer',
      title: metadata.instructor?.title || 'Azure Solutions Expert',
      bio: metadata.instructor?.experience || 'Expert Microsoft trainer with extensive real-world experience',
      avatar: '',
      certifications: [metadata.certification?.examCode || 'Microsoft Certified'].filter(Boolean),
      specialties: metadata.tags || []
    },
    
    deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'] as any[],
    maxParticipants: metadata.maxParticipants,
    featured: metadata.featured,
    tags: metadata.tags || [],
    
    isPublished: true,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    order: 0
  };
}

// Get all trainings from the new system
const allTrainingMetadata = getTrainingMetadata();
const allTrainings = allTrainingMetadata.map(convertToTraining);

// Create the training translations structure (English only for now)
const trainingData: TrainingTranslations = {};
allTrainings.forEach(training => {
  trainingData[training.id] = {
    en: training,
    nl: training // Use English as fallback for Dutch
  };
});

// Helper functions
export function getAllTrainings(language: 'en' | 'nl' = 'en'): Training[] {
  return Object.values(trainingData).map(course => course[language]);
}

export function getTraining(id: string, language: 'en' | 'nl' = 'en'): Training | undefined {
  const courseData = trainingData[id];
  return courseData ? courseData[language] : undefined;
}

export function getFeaturedTrainings(language: 'en' | 'nl' = 'en'): Training[] {
  return getAllTrainings(language).filter(course => course.featured);
}

export function getTrainingsByCategory(category: string, language: 'en' | 'nl' = 'en'): Training[] {
  return getAllTrainings(language).filter(course => course.category === category);
}

export function searchTrainings(query: string, language: 'en' | 'nl' = 'en'): Training[] {
  const searchTerm = query.toLowerCase();
  return getAllTrainings(language).filter(course => 
    course.title.toLowerCase().includes(searchTerm) ||
    course.description.toLowerCase().includes(searchTerm) ||
    course.category.toLowerCase().includes(searchTerm) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

export function getPopularTrainings(language: 'en' | 'nl' = 'en'): Training[] {
  // Return first 6 courses as popular for now
  return getAllTrainings(language).slice(0, 6);
}

export function getTrainingsByLevel(level: string, language: 'en' | 'nl' = 'en'): Training[] {
  return getAllTrainings(language).filter(course => course.level === level);
}

export default trainingData;
