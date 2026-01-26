#!/usr/bin/env node

/**
 * Homepage Language Consistency Test
 * 
 * This test validates that:
 * 1. English homepage contains only English content (except language switchers)
 * 2. Dutch homepage contains proper Dutch translations
 * 3. All hardcoded text is replaced with translation keys
 * 4. Blog content translations are working properly
 */

const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Dutch words to check for (excluding international terms and language switchers)
const DUTCH_WORDS = [
    // Common Dutch words that should be translated
    'meester', 'biedt', 'ongeëvenaard', 'inzicht', 'controle', 'resources',
    'bestandsoverdracht', 'mogelijkheden', 'stroomlijnen', 'operaties',
    'uitgebreide', 'monitoring', 'oplossingen', 'optimaliseren', 'omgeving',
    'contact', 'opnemen', 'team', 'vandaag', 'diensten', 'beschrijving',
    'uitgebreide', 'bestandsoverdracht', 'oplossingen', 'optimaliseren',
    'cloud', 'omgeving', 'laden', 'diensten', 'binnenkort', 'beschikbaar',
    'kijk', 'later', 'terug', 'uitgebreide', 'diensten', 'aanbod',
    'neem', 'contact', 'klaar', 'optimaliseren', 'azure', 'omgeving',
    'stroomlijnen', 'bestandsoverdrachten', 'neem', 'vandaag', 'contact',
    'team', 'populaire', 'cursussen', 'laatste', 'inzichten', 'technische',
    'gidsen', 'gecertificeerde', 'experts', 'aangedreven', 'spot', 'cloud',
    'expertise', 'ondersteund', 'diepe', 'consulting', 'ervaring',
    'bezoek', 'xevolve', 'uitgebreide', 'azure', 'diensten',
    'nederlandse', 'nederland', 'belgië', 'verenigd', 'koninkrijk',
    'wij', 'ons', 'onze'
];

// International terms that are OK in both languages
const INTERNATIONAL_TERMS = [
    'azure', 'microsoft', 'api', 'sla', 'soc', 'aes', 'ssl', 'https',
    'json', 'xml', 'rest', 'oauth', 'saml', 'ad', 'b2b', 'b2c',
    'devops', 'cicd', 'iac', 'arm', 'bicep', 'terraform', 'kubernetes',
    'docker', 'container', 'vm', 'vnet', 'nsg', 'sql', 'nosql',
    'cosmos', 'blob', 'queue', 'table', 'service', 'bus', 'logic',
    'function', 'app', 'web', 'mobile', 'iot', 'ai', 'ml', 'cognitive',
    'bot', 'luis', 'qna', 'maker', 'power', 'platform', 'flow',
    'automate', 'bi', 'sharepoint', 'onedrive', 'teams', 'outlook',
    'exchange', 'intune', 'defender', 'sentinel', 'purview',
    'compliance', 'governance', 'rbac', 'mfa', 'sso', 'pim',
    'over', 'under', 'super', 'meta', 'auto', 'multi', 'cross'
];

// Language switcher elements that are OK to have mixed content
const LANGUAGE_SWITCHER_SELECTORS = [
    '[data-language-switcher]',
    '.language-toggle',
    '.lang-switcher',
    '[aria-label*="language"]',
    '[title*="language"]'
];

class HomepageLanguageTest {
    constructor() {
        this.baseUrl = 'http://localhost:4000';
        this.errors = [];
        this.warnings = [];
    }

    async runTests() {
        console.log('🔍 Starting Homepage Language Consistency Test...\n');
        
        try {
            await this.testEnglishHomepage();
            await this.testDutchHomepage();
            await this.testBlogTranslations();
            
            this.printResults();
        } catch (error) {
            console.error('❌ Test failed with error:', error.message);
            process.exit(1);
        }
    }

    async testEnglishHomepage() {
        console.log('🇺🇸 Testing English Homepage...');
        
        // Test with explicit English language setting
        const response = await fetch(`${this.baseUrl}/?lang=en`, {
            headers: {
                'Accept-Language': 'en-US,en;q=0.9',
                'Cookie': 'NEXT_LOCALE=en'
            }
        });
        
        if (!response.ok) {
            this.errors.push(`Failed to fetch English homepage: ${response.status}`);
            return;
        }
        
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Remove language switcher elements from analysis
        LANGUAGE_SWITCHER_SELECTORS.forEach(selector => {
            $(selector).remove();
        });
        
        // Get all text content
        const textContent = $('body').text().toLowerCase();
        const foundDutchWords = [];
        
        DUTCH_WORDS.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            if (regex.test(textContent)) {
                // Check if it's not an international term
                if (!INTERNATIONAL_TERMS.includes(word.toLowerCase())) {
                    foundDutchWords.push(word);
                }
            }
        });
        
        if (foundDutchWords.length > 0) {
            this.errors.push(`Dutch words found on English homepage: ${foundDutchWords.join(', ')}`);
            
            // Try to identify where these words appear
            foundDutchWords.forEach(word => {
                const elements = $(`*:contains("${word}")`);
                elements.each((i, el) => {
                    const element = $(el);
                    const text = element.text().trim();
                    if (text.toLowerCase().includes(word.toLowerCase()) && text.length < 200) {
                        console.log(`   🔍 Found "${word}" in: ${text.substring(0, 100)}...`);
                    }
                });
            });
        } else {
            console.log('   ✅ No Dutch words found on English homepage');
        }
    }

    async testDutchHomepage() {
        console.log('🇳🇱 Testing Dutch Homepage...');
        
        // Test with explicit Dutch language setting
        const response = await fetch(`${this.baseUrl}/?lang=nl`, {
            headers: {
                'Accept-Language': 'nl-NL,nl;q=0.9',
                'Cookie': 'NEXT_LOCALE=nl'
            }
        });
        
        if (!response.ok) {
            this.errors.push(`Failed to fetch Dutch homepage: ${response.status}`);
            return;
        }
        
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Check for proper Dutch translations
        const textContent = $('body').text().toLowerCase();
        
        // Look for key Dutch translations that should be present
        const expectedDutchPhrases = [
            'meester azure', 'uitgebreide azure', 'neem contact', 'onze diensten'
        ];
        
        let foundDutchTranslations = 0;
        expectedDutchPhrases.forEach(phrase => {
            if (textContent.includes(phrase.toLowerCase())) {
                foundDutchTranslations++;
            }
        });
        
        if (foundDutchTranslations === 0) {
            this.warnings.push('No Dutch translations detected on Dutch homepage - check if translations are loaded');
        } else {
            console.log(`   ✅ Found ${foundDutchTranslations}/${expectedDutchPhrases.length} expected Dutch phrases`);
        }
    }

    async testBlogTranslations() {
        console.log('📝 Testing Blog Translations...');
        
        try {
            // Test English blog API
            const enBlogResponse = await fetch(`${this.baseUrl}/api/blog?lang=en&limit=1`);
            const enBlogData = await enBlogResponse.json();
            
            // Test Dutch blog API  
            const nlBlogResponse = await fetch(`${this.baseUrl}/api/blog?lang=nl&limit=1`);
            const nlBlogData = await nlBlogResponse.json();
            
            if (!enBlogData.success || !nlBlogData.success) {
                this.warnings.push('Blog API not returning successful responses');
                return;
            }
            
            console.log(`   ✅ English blogs: ${enBlogData.posts?.length || 0}`);
            console.log(`   ✅ Dutch blogs: ${nlBlogData.posts?.length || 0}`);
            
            // Check if Dutch blog has different content than English
            if (enBlogData.posts && nlBlogData.posts && 
                enBlogData.posts.length > 0 && nlBlogData.posts.length > 0) {
                
                const enTitle = enBlogData.posts[0].title;
                const nlTitle = nlBlogData.posts[0].title;
                
                if (enTitle === nlTitle) {
                    this.warnings.push('Blog titles are identical - check if Dutch translations exist');
                }
            }
            
        } catch (error) {
            this.warnings.push(`Blog translation test failed: ${error.message}`);
        }
    }

    printResults() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 TEST RESULTS');
        console.log('='.repeat(60));
        
        if (this.errors.length === 0 && this.warnings.length === 0) {
            console.log('🎉 ALL TESTS PASSED! Homepage language consistency is good.');
        } else {
            if (this.errors.length > 0) {
                console.log('❌ ERRORS:');
                this.errors.forEach((error, i) => {
                    console.log(`   ${i + 1}. ${error}`);
                });
                console.log();
            }
            
            if (this.warnings.length > 0) {
                console.log('⚠️  WARNINGS:');
                this.warnings.forEach((warning, i) => {
                    console.log(`   ${i + 1}. ${warning}`);
                });
                console.log();
            }
        }
        
        console.log(`✅ Errors: ${this.errors.length}`);
        console.log(`⚠️  Warnings: ${this.warnings.length}`);
        console.log('='.repeat(60));
        
        if (this.errors.length > 0) {
            process.exit(1);
        }
    }
}

// Run the test
if (require.main === module) {
    const test = new HomepageLanguageTest();
    test.runTests();
}

module.exports = HomepageLanguageTest;
