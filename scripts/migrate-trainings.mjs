#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the training content directory
const migrationDir = path.join(__dirname, '../../migration-files/src/components/training/content');
const targetDir = path.join(__dirname, '../src/data/training');

// Mapping from old category/subcategory to new categories
const categoryMapping = {
  'Azure/Fundamentals': 'Cloud Fundamentals',
  'Azure/Administration': 'Azure Administration', 
  'Azure/Architecture': 'Azure Architecture',
  'Azure/Security': 'Security & Compliance',
  'Azure/Developer': 'Developer Tools',
  'Azure/DevOps': 'Developer Tools',
  'Azure/Network': 'Infrastructure',
  'Azure/AI': 'AI & Machine Learning',
  'Azure/IoT': 'AI & Machine Learning',
  'Azure/Infrastructure': 'Infrastructure',
  'Microsoft 365': 'Microsoft 365',
  'Power Platform': 'Power Platform',
  'Security': 'Security & Compliance',
  'Windows': 'Infrastructure'
};

// Helper to convert old metadata to new format
function convertMetadata(oldMetadata, language = 'en') {
  const category = categoryMapping[`${oldMetadata.category}/${oldMetadata.subcategory}`] || 
                  categoryMapping[oldMetadata.category] || 
                  oldMetadata.category;

  return {
    id: oldMetadata.id,
    slug: oldMetadata.slug,
    code: extractCourseCode(oldMetadata.title),
    title: oldMetadata.title,
    description: oldMetadata.description,
    category,
    level: oldMetadata.difficulty,
    duration: oldMetadata.duration,
    price: oldMetadata.price,
    
    overview: oldMetadata.content || oldMetadata.description,
    learningObjectives: oldMetadata.learningObjectives || [],
    prerequisites: oldMetadata.prerequisites || [],
    targetAudience: generateTargetAudience(category, oldMetadata.difficulty),
    
    certification: oldMetadata.certification,
    
    modules: generateModules(oldMetadata),
    highlights: generateHighlights(oldMetadata),
    
    instructor: oldMetadata.instructor || {
      id: 'default-instructor',
      name: 'Microsoft Certified Trainer',
      title: 'Azure Expert',
      certifications: ['Microsoft Certified Trainer'],
      specialties: [category]
    },
    
    deliveryMethods: ['Virtual Classroom', 'In-Person Workshop'],
    maxParticipants: oldMetadata.maxParticipants || 15,
    featured: oldMetadata.featured || false,
    tags: oldMetadata.tags || [],
    
    isPublished: true,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    order: 0
  };
}

// Extract course code from title
function extractCourseCode(title) {
  const codeMatch = title.match(/\(([A-Z]{2}-\d{3})\)/);
  return codeMatch ? codeMatch[1] : undefined;
}

// Generate target audience based on category and level
function generateTargetAudience(category, level) {
  const audiences = {
    'Cloud Fundamentals': ['IT professionals new to cloud', 'Business users evaluating cloud', 'Students beginning cloud career'],
    'Azure Administration': ['System administrators', 'Cloud administrators', 'Infrastructure engineers'],
    'Azure Architecture': ['Solution architects', 'Technical leads', 'Senior developers'],
    'Security & Compliance': ['Security professionals', 'Compliance officers', 'IT administrators'],
    'Developer Tools': ['Software developers', 'DevOps engineers', 'Application architects'],
    'Microsoft 365': ['IT administrators', 'Office administrators', 'Business users'],
    'Power Platform': ['Business analysts', 'Citizen developers', 'Process improvement specialists'],
    'Infrastructure': ['System administrators', 'Infrastructure engineers', 'Network administrators'],
    'AI & Machine Learning': ['Data scientists', 'AI developers', 'Machine learning engineers']
  };
  
  return audiences[category] || ['IT professionals', 'Technical specialists'];
}

// Generate course modules (simplified for now)
function generateModules(metadata) {
  // This would need to be expanded based on actual course content
  const baseModules = [
    {
      title: 'Introduction and Fundamentals',
      topics: ['Course overview', 'Key concepts', 'Getting started']
    },
    {
      title: 'Core Topics',
      topics: ['Main concepts', 'Practical exercises', 'Best practices']
    },
    {
      title: 'Advanced Scenarios',
      topics: ['Real-world applications', 'Troubleshooting', 'Optimization']
    },
    {
      title: 'Summary and Certification',
      topics: ['Review', 'Exam preparation', 'Next steps']
    }
  ];
  
  return baseModules;
}

// Generate highlights
function generateHighlights(metadata) {
  const highlights = [
    'Hands-on labs and practical exercises',
    'Expert instruction from certified trainers',
    'Real-world scenarios and case studies'
  ];
  
  if (metadata.certification?.available) {
    highlights.push(`Preparation for ${metadata.certification.name} certification`);
  }
  
  return highlights;
}

// Main migration function
async function migrateTrainings() {
  console.log('🚀 Starting training content migration...');
  
  try {
    // Read all training content files
    const files = fs.readdirSync(migrationDir).filter(f => f.endsWith('Content.tsx'));
    
    console.log(`📚 Found ${files.length} training content files`);
    
    const trainingsByCategory = {};
    
    for (const file of files) {
      try {
        console.log(`📖 Processing ${file}...`);
        
        // Read the file content
        const filePath = path.join(migrationDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract metadata using regex (simplified)
        const metadataMatch = content.match(/export const trainingMetadata = ({[\s\S]*?});/);
        if (!metadataMatch) {
          console.log(`⚠️ No metadata found in ${file}`);
          continue;
        }
        
        // This is a simplified extraction - in a real scenario, we'd need proper parsing
        const metadataString = metadataMatch[1];
        
        // For now, let's create a basic structure
        const slug = file.replace('Content.tsx', '').toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '');
        const basicMetadata = {
          id: slug,
          slug: slug,
          title: file.replace('Content.tsx', '').replace(/([A-Z])/g, ' $1').trim(),
          category: determineCategory(file),
          difficulty: 'Intermediate',
          duration: { days: 3, format: 'days' },
          price: { amount: 1295, currency: 'EUR' },
          featured: ['AzureFundamentals', 'Microsoft365Fundamentals', 'PowerPlatformFundamentals'].some(f => file.includes(f))
        };
        
        const convertedMetadata = convertMetadata(basicMetadata);
        
        // Group by category
        if (!trainingsByCategory[convertedMetadata.category]) {
          trainingsByCategory[convertedMetadata.category] = [];
        }
        trainingsByCategory[convertedMetadata.category].push({
          slug: convertedMetadata.slug,
          data: convertedMetadata
        });
        
        console.log(`✅ Processed ${convertedMetadata.title}`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
    
    // Generate training data files by category
    for (const [category, trainings] of Object.entries(trainingsByCategory)) {
      await generateCategoryFile(category, trainings);
    }
    
    // Generate index file
    await generateIndexFile(trainingsByCategory);
    
    console.log('🎉 Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

function determineCategory(filename) {
  if (filename.includes('Azure')) {
    if (filename.includes('Fundamentals')) return 'Cloud Fundamentals';
    if (filename.includes('Administrator')) return 'Azure Administration';
    if (filename.includes('Architect')) return 'Azure Architecture';
    if (filename.includes('Security')) return 'Security & Compliance';
    if (filename.includes('Developer') || filename.includes('DevOps')) return 'Developer Tools';
    if (filename.includes('AI') || filename.includes('IoT')) return 'AI & Machine Learning';
    return 'Infrastructure';
  }
  if (filename.includes('Microsoft365')) return 'Microsoft 365';
  if (filename.includes('PowerPlatform')) return 'Power Platform';
  if (filename.includes('Security')) return 'Security & Compliance';
  if (filename.includes('Windows')) return 'Infrastructure';
  return 'Infrastructure';
}

async function generateCategoryFile(category, trainings) {
  const fileName = category.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.ts';
  const filePath = path.join(targetDir, fileName);
  
  const imports = "import type { TrainingTranslations } from '../../types/training';";
  
  const trainingObjects = trainings.map(({ slug, data }) => {
    return `  '${slug}': {
    en: ${JSON.stringify(data, null, 6).replace(/"([^"]+)":/g, '$1:')},
    nl: ${JSON.stringify({...data, 
      title: `${data.title} (Dutch)`, 
      description: `${data.description} - Nederlandse versie`
    }, null, 6).replace(/"([^"]+)":/g, '$1:')}
  }`;
  }).join(',\n');
  
  const exportName = category.replace(/[^a-zA-Z0-9]/g, '') + 'Courses';
  
  const content = `${imports}

// ${category} training courses
export const ${exportName}: TrainingTranslations = {
${trainingObjects}
};
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`📝 Generated ${fileName} with ${trainings.length} trainings`);
}

async function generateIndexFile(trainingsByCategory) {
  const imports = Object.keys(trainingsByCategory).map(category => {
    const fileName = category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const exportName = category.replace(/[^a-zA-Z0-9]/g, '') + 'Courses';
    return `import { ${exportName} } from './${fileName}';`;
  }).join('\n');
  
  const exports = Object.keys(trainingsByCategory).map(category => {
    const exportName = category.replace(/[^a-zA-Z0-9]/g, '') + 'Courses';
    return `  ...${exportName}`;
  }).join(',\n');
  
  const content = `import type { TrainingTranslations } from '../types/training';
${imports}

// Combine all training data
const allTrainingData: TrainingTranslations = {
${exports}
};

export default allTrainingData;
`;
  
  const indexPath = path.join(targetDir, 'index.ts');
  fs.writeFileSync(indexPath, content);
  console.log('📝 Generated training index file');
}

// Run migration
migrateTrainings();
