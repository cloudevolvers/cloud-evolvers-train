/**
 * Cloud Evolvers Image Enhancement Script
 * This script searches for and saves training-related images for the Cloud Evolvers homepage
 */

const searchQueries = [
  'cloud computing training',
  'azure certification',
  'microsoft teams training',
  'professional development',
  'online learning platform',
  'technical workshop',
  'cloud architecture',
  'data center technology',
  'cybersecurity training',
  'digital transformation'
];

async function searchAndSaveImage(query, filename) {
  try {
    console.log(`🔍 Searching for: ${query}`);
    
    // Search for images
    const searchResponse = await fetch(`/api/images/search/all?query=${encodeURIComponent(query)}&per_page=5`);
    
    if (!searchResponse.ok) {
      throw new Error(`Search failed: ${searchResponse.statusText}`);
    }
    
    const searchResults = await searchResponse.json();
    
    if (!searchResults.images || searchResults.images.length === 0) {
      console.log(`❌ No images found for: ${query}`);
      return null;
    }
    
    // Get the first high-quality image
    const selectedImage = searchResults.images.find(img => 
      img.width >= 1920 && img.height >= 1080
    ) || searchResults.images[0];
    
    console.log(`✅ Found image: ${selectedImage.url}`);
    
    // Save the image locally
    const saveResponse = await fetch('/api/images/save-from-provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer admin-token' // Replace with actual auth
      },
      body: JSON.stringify({
        url: selectedImage.url,
        filename: filename,
        category: 'training',
        metadata: {
          title: `Training - ${query}`,
          alt: `${query} related image`,
          source: selectedImage.provider || 'unknown',
          originalUrl: selectedImage.url,
          query: query
        }
      })
    });
    
    if (!saveResponse.ok) {
      throw new Error(`Save failed: ${saveResponse.statusText}`);
    }
    
    const saveResult = await saveResponse.json();
    console.log(`💾 Saved as: ${saveResult.path}`);
    
    return saveResult;
    
  } catch (error) {
    console.error(`❌ Error processing ${query}:`, error.message);
    return null;
  }
}

async function enhanceCloudEvolversImages() {
  console.log('🚀 Starting Cloud Evolvers image enhancement...');
  
  const results = [];
  
  // Create hero image
  const heroResult = await searchAndSaveImage(
    'professional cloud training workshop', 
    'cloud-training-hero.jpg'
  );
  if (heroResult) results.push(heroResult);
  
  // Create additional training images
  const trainingImages = [
    { query: 'azure cloud certification exam', filename: 'azure-certification.jpg' },
    { query: 'microsoft 365 training session', filename: 'm365-training.jpg' },
    { query: 'hands-on cloud computing lab', filename: 'hands-on-lab.jpg' },
    { query: 'professional development workshop', filename: 'professional-development.jpg' },
    { query: 'cloud architecture whiteboard', filename: 'cloud-architecture.jpg' }
  ];
  
  for (const { query, filename } of trainingImages) {
    const result = await searchAndSaveImage(query, filename);
    if (result) results.push(result);
    
    // Add delay to be respectful to APIs
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Successfully processed: ${results.length} images`);
  console.log(`❌ Failed: ${trainingImages.length + 1 - results.length} images`);
  
  if (results.length > 0) {
    console.log('\n🖼️  Available images:');
    results.forEach(result => {
      console.log(`   - ${result.path}`);
    });
  }
  
  return results;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { enhanceCloudEvolversImages, searchAndSaveImage };
}

// Run if executed directly
if (typeof window !== 'undefined') {
  // Browser environment - can be called from console
  window.enhanceCloudEvolversImages = enhanceCloudEvolversImages;
  console.log('Cloud Evolvers image enhancement functions loaded. Run enhanceCloudEvolversImages() to start.');
}
