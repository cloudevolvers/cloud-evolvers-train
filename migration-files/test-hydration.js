// Test script to check hydration issues
const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting hydration test...');
  
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Listen for console messages
  page.on('console', (msg) => {
    if (msg.type() === 'error' && msg.text().includes('Hydration')) {
      console.log('❌ HYDRATION ERROR FOUND:', msg.text());
    } else if (msg.type() === 'error') {
      console.log('❌ ERROR:', msg.text());
    } else if (msg.type() === 'warning' && msg.text().includes('Hydration')) {
      console.log('⚠️ HYDRATION WARNING:', msg.text());
    }
  });
  
  try {
    await page.goto('http://localhost:4001', { waitUntil: 'networkidle2' });
    
    // Wait for the page to fully load
    await page.waitForTimeout(3000);
    
    console.log('✅ Page loaded successfully');
    
    // Test brand switching if dev brand switcher is available
    const brandSwitcher = await page.$('[data-testid="brand-switcher"]');
    if (brandSwitcher) {
      console.log('✅ Brand switcher found - testing...');
      await brandSwitcher.click();
      await page.waitForTimeout(1000);
      console.log('✅ Brand switching test completed');
    }
    
    console.log('✅ Hydration test completed successfully');
    
  } catch (error) {
    console.log('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();
