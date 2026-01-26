#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the services directory from migration files
const migrationServicesDir = path.join(__dirname, '../migration-files/src/data/services');
const targetDir = path.join(__dirname, '../src/data/services');

// Create target directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to convert markdown content to HTML-like structure for React
function markdownToReactContent(content) {
  // Remove frontmatter if exists
  const lines = content.split('\n');
  let startIndex = 0;
  
  // Skip frontmatter if it exists
  if (lines[0] === '---') {
    const endIndex = lines.findIndex((line, i) => i > 0 && line === '---');
    if (endIndex > 0) {
      startIndex = endIndex + 1;
    }
  }
  
  const mainContent = lines.slice(startIndex).join('\n').trim();
  
  // Simple markdown to JSX conversion (basic)
  return mainContent
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .split('\n\n')
    .map(para => para.includes('<h') || para.includes('<ul') ? para : `<p>${para}</p>`)
    .join('\n\n');
}

async function migrateServices() {
  console.log('🚀 Starting services migration...');
  
  try {
    // Read all service files
    const files = fs.readdirSync(migrationServicesDir).filter(f => f.endsWith('.md'));
    console.log(`📚 Found ${files.length} service files`);
    
    const services = [];
    
    for (const file of files) {
      try {
        console.log(`📖 Processing ${file}...`);
        
        const filePath = path.join(migrationServicesDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const serviceId = data.id || path.basename(file, '.md');
        
        // Convert content
        const reactContent = markdownToReactContent(content);
        
        const serviceData = {
          id: serviceId,
          title: data.title || '',
          slug: data.slug || serviceId,
          description: data.description || '',
          icon: data.icon || 'Settings',
          features: data.features || [],
          content: reactContent,
          isPublished: data.isPublished !== false,
          publishedAt: data.publishedAt || new Date().toISOString(),
          updatedAt: data.updatedAt || new Date().toISOString(),
          order: data.order || 0
        };
        
        services.push({
          slug: serviceId,
          data: serviceData
        });
        
        console.log(`✅ Processed ${data.title || serviceId}`);
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
    
    // Sort by order
    services.sort((a, b) => a.data.order - b.data.order);
    
    // Generate TypeScript file
    await generateServicesFile(services);
    
    console.log('🎉 Services migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

async function generateServicesFile(services) {
  const imports = "import type { ServiceTranslations } from '../../types/services';";
  
  const serviceObjects = services.map(({ slug, data }) => {
    return `  '${slug}': {
    en: ${JSON.stringify(data, null, 6).replace(/"([^"]+)":/g, '$1:')},
    nl: ${JSON.stringify({...data, 
      title: `${data.title}`, // Keep English titles for now
      description: `${data.description}`
    }, null, 6).replace(/"([^"]+)":/g, '$1:')}
  }`;
  }).join(',\n');
  
  const content = `${imports}

// All services data
export const allServices: ServiceTranslations = {
${serviceObjects}
};

// Helper functions
export function getAllServices(language: 'en' | 'nl' = 'en') {
  return Object.values(allServices).map(service => service[language]).filter(s => s.isPublished);
}

export function getServiceBySlug(slug: string, language: 'en' | 'nl' = 'en') {
  const service = allServices[slug];
  return service ? service[language] : null;
}

export function getServicesCount() {
  return Object.keys(allServices).length;
}

export function getFeaturedServices(language: 'en' | 'nl' = 'en', limit: number = 6) {
  return getAllServices(language)
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}
`;
  
  const filePath = path.join(targetDir, 'index.ts');
  fs.writeFileSync(filePath, content);
  console.log(`📝 Generated services index with ${services.length} services`);
}

// Run migration
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateServices();
}

export { migrateServices };
