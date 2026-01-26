#!/usr/bin/env node

/**
 * Comprehensive Language Test Script
 * 
 * This script tests:
 * 1. Dutch homepage has proper Dutch translations
 * 2. English homepage has proper English content
 * 3. Language switching functionality works
 * 4. Blog content translations are available
 */

const fs = require('fs');
const path = require('path');

// Test Dutch translations completeness
function testDutchTranslations() {
    console.log('🇳🇱 Testing Dutch Translations...\n');
    
    const nlPath = path.join(__dirname, '../..', 'src/locales/nl.json');
    const enPath = path.join(__dirname, '../..', 'src/locales/en.json');
    
    if (!fs.existsSync(nlPath) || !fs.existsSync(enPath)) {
        console.log('❌ Translation files missing');
        return false;
    }
    
    const nlContent = JSON.parse(fs.readFileSync(nlPath, 'utf8'));
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    
    // Key sections that must be properly translated
    const criticalSections = [
        'home',
        'navigation', 
        'training',
        'services',
        'form',
        'blog'
    ];
    
    let issues = 0;
    
    criticalSections.forEach(section => {
        if (!nlContent[section]) {
            console.log(`❌ Missing Dutch section: ${section}`);
            issues++;
            return;
        }
        
        if (!enContent[section]) {
            console.log(`❌ Missing English section: ${section}`);
            issues++;
            return;
        }
        
        // Check if key fields are translated
        const nlSection = nlContent[section];
        const enSection = enContent[section];
        
        // Sample key checks
        let sectionIssues = 0;
        Object.keys(enSection).forEach(key => {
            if (typeof enSection[key] === 'string' && typeof nlSection[key] === 'string') {
                // Check if Dutch version is actually different from English (i.e., translated)
                if (enSection[key] === nlSection[key] && 
                    enSection[key].length > 10 && 
                    !enSection[key].includes('Azure') && 
                    !enSection[key].includes('Microsoft') &&
                    !enSection[key].includes('365')) {
                    console.log(`⚠️  ${section}.${key} might not be translated: "${nlSection[key]}"`);
                    sectionIssues++;
                }
            }
        });
        
        if (sectionIssues === 0) {
            console.log(`✅ ${section}: Properly translated`);
        } else {
            console.log(`❌ ${section}: ${sectionIssues} potential translation issues`);
            issues += sectionIssues;
        }
    });
    
    console.log(`\n📊 Dutch translation issues: ${issues}\n`);
    return issues === 0;
}

// Test homepage component structure
function testHomepageComponent() {
    console.log('🏠 Testing Homepage Component...\n');
    
    const homepagePath = path.join(__dirname, '../..', 'src/app/page.tsx');
    
    if (!fs.existsSync(homepagePath)) {
        console.log('❌ Homepage component not found');
        return false;
    }
    
    const content = fs.readFileSync(homepagePath, 'utf8');
    
    // Check for proper translation usage
    const hasTranslationUsage = content.includes('t.') && content.includes('getTranslations');
    const hasLanguageContext = content.includes('useLanguage');
    const hasConditionalRendering = content.includes('isCloudEvolveBrand') || content.includes('CloudEvolversHome');
    
    if (!hasTranslationUsage) {
        console.log('❌ Homepage doesn\'t seem to use translations properly');
        return false;
    }
    
    if (!hasLanguageContext) {
        console.log('❌ Homepage doesn\'t use language context');
        return false;
    }
    
    if (!hasConditionalRendering) {
        console.log('❌ Homepage doesn\'t have brand switching logic');
        return false;
    }
    
    console.log('✅ Homepage component structure is correct');
    console.log('✅ Uses translation system');
    console.log('✅ Has language context');
    console.log('✅ Supports brand switching\n');
    
    return true;
}

// Test language context setup
function testLanguageContext() {
    console.log('🌐 Testing Language Context...\n');
    
    const contextPath = path.join(__dirname, '../..', 'src/contexts/LanguageContext.tsx');
    
    if (!fs.existsSync(contextPath)) {
        console.log('❌ Language context file not found');
        return false;
    }
    
    const content = fs.readFileSync(contextPath, 'utf8');
    
    // Check for proper language detection
    const hasLocalStorage = content.includes('localStorage.getItem');
    const hasCookieSupport = content.includes('document.cookie');
    const hasBrowserDetection = content.includes('navigator.language');
    const hasDefaultDutch = content.includes("'nl'");
    
    let score = 0;
    
    if (hasLocalStorage) {
        console.log('✅ LocalStorage language detection');
        score++;
    } else {
        console.log('❌ Missing localStorage language detection');
    }
    
    if (hasCookieSupport) {
        console.log('✅ Cookie-based language persistence');
        score++;
    } else {
        console.log('❌ Missing cookie support');
    }
    
    if (hasBrowserDetection) {
        console.log('✅ Browser language detection');
        score++;
    } else {
        console.log('❌ Missing browser language detection');
    }
    
    if (hasDefaultDutch) {
        console.log('✅ Default language is Dutch (Dutch company)');
        score++;
    } else {
        console.log('❌ Default language should be Dutch');
    }
    
    console.log(`\n📊 Language context score: ${score}/4\n`);
    return score >= 3;
}

// Test blog translation setup
function testBlogTranslations() {
    console.log('📝 Testing Blog Translation Setup...\n');
    
    const blogBackupPath = path.join(__dirname, '../..', 'public/blog_backup');
    const nlBlogPath = path.join(blogBackupPath, 'nl');
    const enBlogPath = blogBackupPath;
    
    if (!fs.existsSync(blogBackupPath)) {
        console.log('❌ Blog backup directory not found');
        return false;
    }
    
    if (!fs.existsSync(nlBlogPath)) {
        console.log('❌ Dutch blog directory not found');
        return false;
    }
    
    // Count blog files
    const enBlogs = fs.readdirSync(enBlogPath).filter(f => f.endsWith('.md') && !f.startsWith('.')).length;
    const nlBlogs = fs.readdirSync(nlBlogPath).filter(f => f.endsWith('.md')).length;
    
    console.log(`📄 English blog posts: ${enBlogs}`);
    console.log(`📄 Dutch blog posts: ${nlBlogs}`);
    
    if (nlBlogs === 0) {
        console.log('⚠️  No Dutch blog posts found - consider adding Dutch translations');
        return true; // Not critical
    }
    
    if (nlBlogs < enBlogs * 0.5) {
        console.log('⚠️  Dutch blog posts are less than 50% of English posts');
        return true; // Not critical but noted
    }
    
    console.log('✅ Blog translation setup looks good\n');
    return true;
}

// Main test function
function runComprehensiveLanguageTest() {
    console.log('🚀 Starting Comprehensive Language Test...\n');
    console.log('='.repeat(60));
    
    const results = {
        dutchTranslations: testDutchTranslations(),
        homepageComponent: testHomepageComponent(),
        languageContext: testLanguageContext(),
        blogTranslations: testBlogTranslations()
    };
    
    console.log('='.repeat(60));
    console.log('📊 TEST RESULTS');
    console.log('='.repeat(60));
    
    const passed = Object.values(results).filter(r => r).length;
    const total = Object.keys(results).length;
    
    Object.entries(results).forEach(([test, result]) => {
        const status = result ? '✅' : '❌';
        const testName = test.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        console.log(`${status} ${testName}`);
    });
    
    console.log('\n' + '='.repeat(60));
    console.log(`📈 Overall Score: ${passed}/${total} tests passed`);
    
    if (passed === total) {
        console.log('🎉 ALL TESTS PASSED! Language system is working correctly.');
        console.log('\n🔍 You can now test the website:');
        console.log('   • Visit http://localhost:4000 (English by default)');
        console.log('   • Add ?lang=nl for Dutch version');
        console.log('   • Use language switcher if available');
        console.log('   • Check both xEvolve and Cloud Evolvers brands');
    } else {
        console.log('⚠️  Some tests failed. Please review the issues above.');
        
        if (!results.dutchTranslations) {
            console.log('\n🔧 Dutch Translation Issues:');
            console.log('   • Check src/locales/nl.json for missing translations');
            console.log('   • Ensure all text is properly translated to Dutch');
        }
        
        if (!results.homepageComponent) {
            console.log('\n🔧 Homepage Component Issues:');
            console.log('   • Verify src/app/page.tsx uses translation system');
            console.log('   • Check for hardcoded strings that need translation keys');
        }
        
        if (!results.languageContext) {
            console.log('\n🔧 Language Context Issues:');
            console.log('   • Review src/contexts/LanguageContext.tsx setup');
            console.log('   • Ensure proper language detection and persistence');
        }
    }
    
    console.log('='.repeat(60));
    
    return passed === total;
}

// Run if called directly
if (require.main === module) {
    const success = runComprehensiveLanguageTest();
    process.exit(success ? 0 : 1);
}

module.exports = { runComprehensiveLanguageTest };
