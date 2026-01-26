import { test, expect, Page } from '@playwright/test';
import { analyzeTextForDutch, isDutchWord } from '../utils/dutch-detection';

// Elements to exclude from Dutch detection (these can contain Dutch text legitimately)
const EXCLUDED_SELECTORS = [
  '[data-testid="language-selector"]', // Language switcher
  '[data-testid="flag-nl"]', // Dutch flag
  '.language-option', // Language options
  '[aria-label*="language"]', // Language related elements
  '[title*="Nederlands"]', // Dutch language references
  '[title*="Dutch"]', // Dutch language references
  'script', // Script tags
  'style', // Style tags
  'meta', // Meta tags
  'link', // Link tags
];

// Cookie banner and other UI elements that might have Dutch
const UI_SELECTORS_TO_CHECK = [
  '.cookie-banner',
  '.notification-banner',
  '.alert',
  '.toast',
];

test.describe('English Homepage Language Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Ensure we're testing the English version
    await page.goto('/?lang=en');
    
    // Wait for the page to be fully loaded and hydrated
    await page.waitForLoadState('networkidle');
    
    // Wait a bit more for any dynamic content to load
    await page.waitForTimeout(2000);
  });

  test('should not contain Dutch words in main content areas', async ({ page }) => {
    // Define main content areas to check
    const contentSelectors = [
      'main',
      'header',
      'nav',
      '.hero-section',
      '.services-section', 
      '.features-section',
      '.benefits-section',
      '.contact-section',
      '.blog-section',
      'footer',
      // Specific component selectors
      '[data-testid="hero-title"]',
      '[data-testid="hero-subtitle"]',
      '[data-testid="services-grid"]',
      '[data-testid="features-list"]',
      '[data-testid="blog-posts"]',
    ];

    const dutchIssues: Array<{
      selector: string;
      dutchWords: string[];
      dutchPhrases: string[];
      suspiciousContent: string[];
      textSample: string;
    }> = [];

    for (const selector of contentSelectors) {
      const elements = await page.locator(selector).all();
      
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        
        // Skip if this element is in our exclusion list
        let shouldSkip = false;
        for (const excludedSelector of EXCLUDED_SELECTORS) {
          try {
            const excludedElements = await element.locator(excludedSelector).count();
            if (excludedElements > 0) {
              shouldSkip = true;
              break;
            }
          } catch (error) {
            // Ignore errors when checking for excluded selectors
          }
        }
        
        if (shouldSkip) continue;

        try {
          // Get text content, but exclude child elements that are in our exclusion list
          let textContent = await element.textContent() || '';
          
          // Remove text from excluded child elements
          for (const excludedSelector of EXCLUDED_SELECTORS) {
            try {
              const excludedElements = await element.locator(excludedSelector).all();
              for (const excludedElement of excludedElements) {
                const excludedText = await excludedElement.textContent() || '';
                if (excludedText) {
                  textContent = textContent.replace(excludedText, '');
                }
              }
            } catch (error) {
              // Ignore errors when removing excluded text
            }
          }

          if (!textContent.trim()) continue;

          // Analyze the text for Dutch content
          const analysis = analyzeTextForDutch(textContent);
          
          if (analysis.dutchWords.length > 0 || 
              analysis.dutchPhrases.length > 0 || 
              analysis.suspiciousContent.length > 0) {
            dutchIssues.push({
              selector: `${selector}[${i}]`,
              dutchWords: analysis.dutchWords,
              dutchPhrases: analysis.dutchPhrases,
              suspiciousContent: analysis.suspiciousContent,
              textSample: textContent.substring(0, 200) + (textContent.length > 200 ? '...' : '')
            });
          }
        } catch (error) {
          console.warn(`Error analyzing selector ${selector}[${i}]:`, error);
        }
      }
    }

    // Report all Dutch issues found
    if (dutchIssues.length > 0) {
      let errorMessage = `Found Dutch content in English homepage:\\n\\n`;
      
      for (const issue of dutchIssues) {
        errorMessage += `Selector: ${issue.selector}\\n`;
        
        if (issue.dutchWords.length > 0) {
          errorMessage += `  Dutch words: ${issue.dutchWords.join(', ')}\\n`;
        }
        
        if (issue.dutchPhrases.length > 0) {
          errorMessage += `  Dutch phrases: ${issue.dutchPhrases.join(', ')}\\n`;
        }
        
        if (issue.suspiciousContent.length > 0) {
          errorMessage += `  Suspicious patterns: ${issue.suspiciousContent.join(', ')}\\n`;
        }
        
        errorMessage += `  Text sample: "${issue.textSample}"\\n\\n`;
      }
      
      expect.soft(false, errorMessage).toBe(true);
    }

    expect(dutchIssues).toHaveLength(0);
  });

  test('should have proper language attribute set to English', async ({ page }) => {
    // Check html lang attribute
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBe('en');
    
    // Check if there's a meta tag specifying content language
    const contentLanguage = await page.locator('meta[http-equiv="content-language"]').getAttribute('content');
    if (contentLanguage) {
      expect(contentLanguage).toBe('en');
    }
  });

  test('should not contain Dutch text in form labels and placeholders', async ({ page }) => {
    // Check form elements
    const formElements = await page.locator('input, textarea, select, label').all();
    const dutchFormIssues: Array<{
      element: string;
      attribute: string;
      value: string;
      dutchWords: string[];
    }> = [];

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      const tagName = await element.evaluate(el => el.tagName.toLowerCase());
      
      // Check various attributes that might contain text
      const attributesToCheck = ['placeholder', 'aria-label', 'title', 'value'];
      if (tagName === 'label') {
        attributesToCheck.push('textContent');
      }
      
      for (const attr of attributesToCheck) {
        let value = '';
        try {
          if (attr === 'textContent') {
            value = await element.textContent() || '';
          } else {
            value = await element.getAttribute(attr) || '';
          }
        } catch (error) {
          continue;
        }
        
        if (!value.trim()) continue;
        
        const analysis = analyzeTextForDutch(value);
        if (analysis.dutchWords.length > 0) {
          dutchFormIssues.push({
            element: `${tagName}[${i}]`,
            attribute: attr,
            value: value,
            dutchWords: analysis.dutchWords
          });
        }
      }
    }

    if (dutchFormIssues.length > 0) {
      let errorMessage = `Found Dutch content in form elements:\\n\\n`;
      
      for (const issue of dutchFormIssues) {
        errorMessage += `Element: ${issue.element}\\n`;
        errorMessage += `  Attribute: ${issue.attribute}\\n`;
        errorMessage += `  Value: "${issue.value}"\\n`;
        errorMessage += `  Dutch words: ${issue.dutchWords.join(', ')}\\n\\n`;
      }
      
      expect.soft(false, errorMessage).toBe(true);
    }

    expect(dutchFormIssues).toHaveLength(0);
  });

  test('should not contain Dutch text in button text', async ({ page }) => {
    const buttons = await page.locator('button, a[role="button"], .button, [class*="btn"]').all();
    const dutchButtonIssues: Array<{
      element: string;
      text: string;
      dutchWords: string[];
    }> = [];

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      
      // Skip if this is part of language selector
      let isLanguageSelector = false;
      try {
        const closest = await button.locator('xpath=ancestor-or-self::*[@data-testid="language-selector"]').count();
        isLanguageSelector = closest > 0;
      } catch (error) {
        // Ignore error
      }
      
      if (isLanguageSelector) continue;
      
      const text = await button.textContent() || '';
      if (!text.trim()) continue;
      
      const analysis = analyzeTextForDutch(text);
      if (analysis.dutchWords.length > 0) {
        dutchButtonIssues.push({
          element: `button[${i}]`,
          text: text.trim(),
          dutchWords: analysis.dutchWords
        });
      }
    }

    if (dutchButtonIssues.length > 0) {
      let errorMessage = `Found Dutch content in buttons:\\n\\n`;
      
      for (const issue of dutchButtonIssues) {
        errorMessage += `Element: ${issue.element}\\n`;
        errorMessage += `  Text: "${issue.text}"\\n`;
        errorMessage += `  Dutch words: ${issue.dutchWords.join(', ')}\\n\\n`;
      }
      
      expect.soft(false, errorMessage).toBe(true);
    }

    expect(dutchButtonIssues).toHaveLength(0);
  });

  test('should not contain Dutch text in navigation elements', async ({ page }) => {
    const navElements = await page.locator('nav a, .nav-link, [role="navigation"] a').all();
    const dutchNavIssues: Array<{
      element: string;
      text: string;
      href?: string;
      dutchWords: string[];
    }> = [];

    for (let i = 0; i < navElements.length; i++) {
      const navElement = navElements[i];
      
      // Skip language selector links
      let isLanguageSelector = false;
      try {
        const closest = await navElement.locator('xpath=ancestor-or-self::*[@data-testid="language-selector"]').count();
        isLanguageSelector = closest > 0;
      } catch (error) {
        // Ignore error
      }
      
      if (isLanguageSelector) continue;
      
      const text = await navElement.textContent() || '';
      const href = await navElement.getAttribute('href') || '';
      
      if (!text.trim()) continue;
      
      const analysis = analyzeTextForDutch(text);
      if (analysis.dutchWords.length > 0) {
        dutchNavIssues.push({
          element: `nav-link[${i}]`,
          text: text.trim(),
          href: href || undefined,
          dutchWords: analysis.dutchWords
        });
      }
    }

    if (dutchNavIssues.length > 0) {
      let errorMessage = `Found Dutch content in navigation:\\n\\n`;
      
      for (const issue of dutchNavIssues) {
        errorMessage += `Element: ${issue.element}\\n`;
        errorMessage += `  Text: "${issue.text}"\\n`;
        if (issue.href) {
          errorMessage += `  Link: ${issue.href}\\n`;
        }
        errorMessage += `  Dutch words: ${issue.dutchWords.join(', ')}\\n\\n`;
      }
      
      expect.soft(false, errorMessage).toBe(true);
    }

    expect(dutchNavIssues).toHaveLength(0);
  });

  test('should verify language switcher is present and functional', async ({ page }) => {
    // The language switcher should be present and allow changing to Dutch
    // This test ensures the language switching functionality exists
    
    // Look for language selector elements
    const languageSelectors = [
      '[data-testid="language-selector"]',
      '.language-switch',
      '.language-toggle',
      '[aria-label*="language"]',
      '[title*="language"]'
    ];
    
    let languageSelectorFound = false;
    
    for (const selector of languageSelectors) {
      const count = await page.locator(selector).count();
      if (count > 0) {
        languageSelectorFound = true;
        break;
      }
    }
    
    // Also check for flag elements which might be used for language switching
    const dutchFlag = await page.locator('[data-testid="flag-nl"], [data-testid="flag-NL"]').count();
    const englishFlag = await page.locator('[data-testid="flag-gb"], [data-testid="flag-GB"], [data-testid="flag-us"], [data-testid="flag-US"]').count();
    
    if (dutchFlag > 0 && englishFlag > 0) {
      languageSelectorFound = true;
    }
    
    expect(languageSelectorFound, 'Language switcher should be present on the homepage to allow users to change language').toBe(true);
  });

  test('should handle brand switching correctly for language', async ({ page }) => {
    // Test both xEvolve and Cloud Evolvers brands to ensure Dutch detection works for both
    
    // Test default brand (xEvolve)
    await page.goto('/?lang=en');
    await page.waitForLoadState('networkidle');
    
    const xEvolveContent = await page.locator('main').textContent() || '';
    const xEvolveAnalysis = analyzeTextForDutch(xEvolveContent);
    
    expect.soft(xEvolveAnalysis.dutchWords.length, `xEvolve brand should not contain Dutch words: ${xEvolveAnalysis.dutchWords.join(', ')}`).toBe(0);
    
    // Test Cloud Evolvers brand if environment supports it
    await page.evaluate(() => {
      localStorage.setItem('dev-brand-override', 'cloud-evolvers');
      window.dispatchEvent(new Event('storage'));
    });
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Wait for brand switching
    
    const cloudEvolversContent = await page.locator('main').textContent() || '';
    const cloudEvolversAnalysis = analyzeTextForDutch(cloudEvolversContent);
    
    expect.soft(cloudEvolversAnalysis.dutchWords.length, `Cloud Evolvers brand should not contain Dutch words: ${cloudEvolversAnalysis.dutchWords.join(', ')}`).toBe(0);
  });

  test('should validate meta tags and page title are in English', async ({ page }) => {
    // Check page title
    const title = await page.title();
    const titleAnalysis = analyzeTextForDutch(title);
    expect(titleAnalysis.dutchWords.length, `Page title should not contain Dutch words: "${title}" - Found: ${titleAnalysis.dutchWords.join(', ')}`).toBe(0);
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content') || '';
    if (description) {
      const descAnalysis = analyzeTextForDutch(description);
      expect(descAnalysis.dutchWords.length, `Meta description should not contain Dutch words: "${description}" - Found: ${descAnalysis.dutchWords.join(', ')}`).toBe(0);
    }
    
    // Check meta keywords if present
    const keywords = await page.locator('meta[name="keywords"]').getAttribute('content') || '';
    if (keywords) {
      const keywordsAnalysis = analyzeTextForDutch(keywords);
      expect(keywordsAnalysis.dutchWords.length, `Meta keywords should not contain Dutch words: "${keywords}" - Found: ${keywordsAnalysis.dutchWords.join(', ')}`).toBe(0);
    }
    
    // Check Open Graph title
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content') || '';
    if (ogTitle) {
      const ogTitleAnalysis = analyzeTextForDutch(ogTitle);
      expect(ogTitleAnalysis.dutchWords.length, `OG title should not contain Dutch words: "${ogTitle}" - Found: ${ogTitleAnalysis.dutchWords.join(', ')}`).toBe(0);
    }
    
    // Check Open Graph description
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content') || '';
    if (ogDescription) {
      const ogDescAnalysis = analyzeTextForDutch(ogDescription);
      expect(ogDescAnalysis.dutchWords.length, `OG description should not contain Dutch words: "${ogDescription}" - Found: ${ogDescAnalysis.dutchWords.join(', ')}`).toBe(0);
    }
  });
});
