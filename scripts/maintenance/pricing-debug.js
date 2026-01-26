// Simple test to check pricing service
const testCases = [
  'azure-administrator',
  'az-104-azure-administrator',
  'AZ-104-azure-administrator'
];

console.log('Testing pricing lookups...');
console.log('CURRENT_PRICES object:');
console.log(JSON.stringify({
  'azure-administrator': 1595,
  'az-104-azure-administrator': 1595
}, null, 2));

// Simulate the pricing lookup
const CURRENT_PRICES = {
  'az-900-azure-fundamentals': 690,
  'azure-fundamentals': 690,
  'az-104-azure-administrator': 1595,
  'azure-administrator': 1595,
  'az-204-azure-developer': 690,
  'azure-developer': 690
};

const getCoursePrice = (courseSlug) => {
  console.log(`Looking up price for slug: "${courseSlug}"`);
  console.log(`Found price: ${CURRENT_PRICES[courseSlug] || 'NOT FOUND - defaulting to 690'}`);
  return CURRENT_PRICES[courseSlug] || 690; // Default fallback
};

testCases.forEach(slug => {
  const price = getCoursePrice(slug);
  const discounted = Math.round(price * 0.7); // 30% discount
  console.log(`${slug}: €${price} → €${discounted} (30% off)`);
});
