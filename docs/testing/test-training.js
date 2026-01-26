// Quick test to see if training data loads correctly
import { getAllTrainings } from './src/components/training/content/index.ts';

console.log('Testing training data loading...');

try {
  const trainings = getAllTrainings();
  console.log(`✅ Successfully loaded ${trainings.length} trainings:`);
  
  trainings.forEach((training, index) => {
    console.log(`${index + 1}. ${training.title} (${training.slug})`);
    console.log(`   Category: ${training.category}`);
    console.log(`   Level: ${training.level}`);
    console.log('');
  });

  // Test getting training by slug
  const azFundamentals = trainings.find(t => t.slug === 'az-900-azure-fundamentals');
  if (azFundamentals) {
    console.log('✅ Successfully found Azure Fundamentals training by slug');
    console.log(`   Title: ${azFundamentals.title}`);
    console.log(`   Duration: ${azFundamentals.duration}`);
  } else {
    console.log('❌ Could not find Azure Fundamentals training');
  }

} catch (error) {
  console.error('❌ Error loading training data:', error);
}
