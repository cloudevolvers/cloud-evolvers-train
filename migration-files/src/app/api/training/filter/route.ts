import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface TrainingFilter {
  category?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  search?: string;
  featured?: boolean;
  tags?: string[];
}

interface Training {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  subcategory?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: {
    hours: number;
    format: string;
  };
  prerequisites: string[];
  learningObjectives: string[];
  instructor: {
    id: string;
    name: string;
    title: string;
  };
  image: string;
  imageAlt?: string;
  price: {
    amount: number;
    currency: string;
  };
  schedule: {
    available: boolean;
    nextSession?: string;
  };
  tags: string[];
  featured: boolean;
  certification: {
    available: boolean;
    name?: string;
  };
}

function getTrainingsDirectory() {
  return path.join(process.cwd(), 'public', 'trainings');
}

function parseTrainingFile(filePath: string): Training | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);
    
    const slug = path.basename(filePath, '.md');
    
    return {
      id: slug,
      slug,
      title: frontMatter.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: frontMatter.description || '',
      content,
      category: frontMatter.category || 'Azure',
      subcategory: frontMatter.subcategory,
      difficulty: frontMatter.difficulty || 'Intermediate',
      duration: frontMatter.duration || { hours: 40, format: '5 days' },
      prerequisites: frontMatter.prerequisites || [],
      learningObjectives: frontMatter.learningObjectives || [],
      instructor: frontMatter.instructor || {
        id: 'default',
        name: 'Azure Expert',
        title: 'Microsoft Certified Trainer'
      },
      image: frontMatter.image || `/images/trainings/${slug}.jpg`,
      imageAlt: frontMatter.imageAlt,
      price: frontMatter.price || { amount: 2999, currency: 'USD' },
      schedule: frontMatter.schedule || { available: true },
      tags: frontMatter.tags || [],
      featured: frontMatter.featured || false,
      certification: frontMatter.certification || { available: true }
    };
  } catch (error) {
    console.error(`Error parsing training file ${filePath}:`, error);
    return null;
  }
}

function getAllTrainings(): Training[] {
  const trainingsDirectory = getTrainingsDirectory();
  
  if (!fs.existsSync(trainingsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(trainingsDirectory);
  const trainings: Training[] = [];
  
  fileNames.forEach(fileName => {
    if (fileName.endsWith('.md')) {
      const filePath = path.join(trainingsDirectory, fileName);
      const training = parseTrainingFile(filePath);
      if (training) {
        trainings.push(training);
      }
    }
  });
  
  return trainings;
}

function filterTrainings(trainings: Training[], filters: TrainingFilter): Training[] {
  return trainings.filter(training => {
    // Category filter - improved to handle multiple mapping patterns
    if (filters.category) {
      const filterCategory = filters.category.toLowerCase();
      const trainingCategory = training.category.toLowerCase();
      const trainingSubcategory = (training.subcategory || '').toLowerCase();
      
      // Direct match with category
      if (trainingCategory === filterCategory) {
        return true;
      }
      
      // Handle specific category mappings
      const categoryMatches = {
        'azure-data': () => 
          trainingCategory === 'azure' && 
          (trainingSubcategory.includes('artificial intelligence') || 
           trainingSubcategory.includes('data') ||
           training.tags.some(tag => tag.toLowerCase().includes('ai')) ||
           training.tags.some(tag => tag.toLowerCase().includes('data'))),
        'azure-development': () => 
          trainingCategory === 'azure' && 
          (trainingSubcategory.includes('development') || 
           training.tags.some(tag => tag.toLowerCase().includes('development'))),
        'azure-administration': () => 
          trainingCategory === 'azure' && 
          (trainingSubcategory.includes('administration') || 
           training.tags.some(tag => tag.toLowerCase().includes('admin'))),
        'azure-security': () => 
          trainingCategory === 'azure' && 
          (trainingSubcategory.includes('security') || 
           training.tags.some(tag => tag.toLowerCase().includes('security'))),
        'azure-fundamentals': () => 
          trainingCategory === 'azure' && 
          (trainingSubcategory.includes('fundamentals') || 
           training.tags.some(tag => tag.toLowerCase().includes('fundamentals'))),
        'microsoft-365': () => 
          trainingCategory.includes('microsoft 365') || trainingCategory.includes('office 365')
      };
      
      // Check if there's a specific mapping function for this category
      const matchFunction = categoryMatches[filterCategory];
      if (matchFunction && matchFunction()) {
        return true;
      }
      
      // Fallback: no match found
      if (!matchFunction && trainingCategory !== filterCategory) {
        return false;
      }
    }
    
    // Difficulty filter
    if (filters.difficulty && training.difficulty !== filters.difficulty) {
      return false;
    }
    
    // Featured filter
    if (filters.featured !== undefined && training.featured !== filters.featured) {
      return false;
    }
    
    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => 
        training.tags.some(trainingTag => 
          trainingTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
      if (!hasMatchingTag) {
        return false;
      }
    }
    
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText = [
        training.title,
        training.description,
        training.content,
        training.category,
        training.subcategory || '',
        ...training.tags,
        ...training.prerequisites,
        ...training.learningObjectives
      ].join(' ').toLowerCase();
      
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }
    
    return true;
  });
}

export async function POST(request: NextRequest) {
  try {
    const filters: TrainingFilter = await request.json();
    
    const allTrainings = getAllTrainings();
    const filteredTrainings = filterTrainings(allTrainings, filters);
    
    return NextResponse.json(filteredTrainings);
  } catch (error) {
    console.error('Error filtering trainings:', error);
    return NextResponse.json(
      { error: 'Failed to filter trainings' },
      { status: 500 }
    );
  }
}
