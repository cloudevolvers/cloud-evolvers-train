#!/usr/bin/env node

/**
 * Simple Language Validation Script
 * Tests the homepage for language consistency issues
 */

const fs = require('fs');
const path = require('path');

// Check Dutch translation file for English text
function checkDutchTranslations() {
    console.log('🔍 Checking Dutch translations file...\n');
    
    const nlTranslationsPath = path.join(__dirname, '../..', 'src/locales/nl.json');
    
    if (!fs.existsSync(nlTranslationsPath)) {
        console.log('❌ Dutch translations file not found');
        return false;
    }
    
    const content = fs.readFileSync(nlTranslationsPath, 'utf8');
    const translations = JSON.parse(content);
    
    // Sample some key translations that should be in Dutch
    const keyChecks = [
        { key: 'home.ctaButtonText', expected: 'Dutch', value: translations.home?.ctaButtonText },
        { key: 'navigation.backToHome', expected: 'Dutch', value: translations.navigation?.backToHome },
        { key: 'training.findYourTraining', expected: 'Dutch', value: translations.training?.findYourTraining },
        { key: 'services.pageTitle', expected: 'Dutch', value: translations.services?.pageTitle }
    ];
    
    let issues = 0;
    
    keyChecks.forEach(check => {
        const isDutch = check.value && (
            check.value.includes('uw') || 
            check.value.includes('onze') || 
            check.value.includes('het') ||
            check.value.includes('een') ||
            check.value.includes('voor') ||
            check.value.includes('naar') ||
            check.value.includes('Neem') ||
            check.value.includes('Vind') ||
            check.value.includes('Terug') ||
            check.value.includes('Onze')
        );
        
        const seemsEnglish = check.value && (
            check.value.includes('Our ') ||
            check.value.includes('Find ') ||
            check.value.includes('Back to') ||
            check.value.includes('Contact Us') ||
            check.value.includes('Get ') ||
            check.value.includes('Learn ') ||
            check.value.includes('View ') ||
            check.value.includes('Click ')
        );
        
        if (seemsEnglish && !isDutch) {
            console.log(`⚠️  ${check.key}: "${check.value}" - Seems to be English, should be Dutch`);
            issues++;
        } else if (isDutch) {
            console.log(`✅ ${check.key}: "${check.value}" - Looks like proper Dutch`);
        } else {
            console.log(`❓ ${check.key}: "${check.value}" - Cannot determine language`);
        }
    });
    
    console.log(`\n📊 Issues found in Dutch translations: ${issues}`);
    return issues === 0;
}

// Check homepage component for hardcoded strings
function checkHomepageHardcodedStrings() {
    console.log('\n🔍 Checking homepage component for hardcoded strings...\n');
    
    const homepagePath = path.join(__dirname, '../..', 'src/app/page.tsx');
    
    if (!fs.existsSync(homepagePath)) {
        console.log('❌ Homepage component not found');
        return false;
    }
    
    const content = fs.readFileSync(homepagePath, 'utf8');
    
    // Look for hardcoded English strings that should use translations
    const hardcodedStrings = [
        'Enterprise File Transfer SaaS',
        'Enterprise File Transfer Platform',
        'Military-Grade Security',
        'High Performance',
        'Azure API Monitoring',
        'Why Choose xEvolve',
        'Enterprise Scale',
        'Zero Trust Security',
        'Azure Native',
        'Bonus API Monitoring',
        'Live Platform Stats',
        'Uptime SLA',
        'Encryption',
        'Monitoring',
        'Compliant',
        'Live Platform Dashboard',
        'Real-time insights',
        'Expert Insights',
        'Latest updates',
        'Start Your Free Trial',
        'Ready to transform'
    ];
    
    let foundHardcoded = [];
    
    hardcodedStrings.forEach(str => {
        if (content.includes(`"${str}"`)) {
            foundHardcoded.push(str);
        }
    });
    
    if (foundHardcoded.length > 0) {
        console.log('❌ Found hardcoded strings that should use translations:');
        foundHardcoded.forEach(str => {
            console.log(`   - "${str}"`);
        });
    } else {
        console.log('✅ No obvious hardcoded strings found');
    }
    
    console.log(`\n📊 Hardcoded strings found: ${foundHardcoded.length}`);
    return foundHardcoded.length === 0;
}

// Main function
function runLanguageValidation() {
    console.log('🚀 Starting Language Validation...\n');
    console.log('=' .repeat(50));
    
    const translationsOk = checkDutchTranslations();
    const hardcodedOk = checkHomepageHardcodedStrings();
    
    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL RESULTS');
    console.log('='.repeat(50));
    
    if (translationsOk && hardcodedOk) {
        console.log('🎉 ALL CHECKS PASSED! Language consistency is good.');
        process.exit(0);
    } else {
        if (!translationsOk) {
            console.log('❌ Dutch translations need improvement');
        }
        if (!hardcodedOk) {
            console.log('❌ Homepage has hardcoded strings that need translation keys');
        }
        
        console.log('\n🔧 RECOMMENDATIONS:');
        console.log('   1. Update Dutch translations to be fully in Dutch');
        console.log('   2. Replace hardcoded strings with translation keys');
        console.log('   3. Test both English and Dutch language switching');
        console.log('   4. Verify blog translation functionality');
        
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    runLanguageValidation();
}

module.exports = { runLanguageValidation };
