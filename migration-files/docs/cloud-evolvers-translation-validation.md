# Cloud Evolvers Translation Validation

This document explains how to use the translation validation script to ensure all elements in the Cloud Evolvers website are properly translated.

## Quick Start

```bash
# Run the validation script
npm run validate:translations

# Alternative command
npm run check:translations

# Direct execution
node scripts/validate-cloud-evolvers-translations.js
```

## What the Script Checks

### 1. Missing Translations ✅
- Compares English and Dutch translation files
- Identifies keys present in one language but missing in the other
- Ensures translation completeness

### 2. Cloud Evolvers Specific Translations ✅
- Validates all Cloud Evolvers brand-specific translation keys
- Checks for training-focused content translations
- Ensures brand switching works with proper translations

### 3. Hardcoded Strings ❌
- Scans components for untranslated text
- Identifies JSX text that should use translation keys
- Flags geographic terms, UI text, and content that needs translation

### 4. Brand-Specific Content Usage ✅
- Verifies components properly implement brand detection
- Ensures Cloud Evolvers components use translation system
- Checks for proper fallback handling

## How to Fix Issues

### Adding Missing Translations

The script outputs suggested translations. Add them to both files:

**English** (`src/locales/en.json`):
```json
{
  "geographic": {
    "netherlands": "Netherlands",
    "belgium": "Belgium",
    "uk": "United Kingdom"
  },
  "cloudEvolversExtended": {
    "comprehensiveServices": "Comprehensive Azure Services",
    "beyondTraining": "Beyond training, we offer complete consulting services"
  }
}
```

**Dutch** (`src/locales/nl.json`):
```json
{
  "geographic": {
    "netherlands": "Nederland", 
    "belgium": "België",
    "uk": "Verenigd Koninkrijk"
  },
  "cloudEvolversExtended": {
    "comprehensiveServices": "Uitgebreide Azure Diensten",
    "beyondTraining": "Naast training bieden wij complete consulting diensten"
  }
}
```

### Replacing Hardcoded Strings

Replace hardcoded text with translation keys:

**Before:**
```tsx
<h2>Comprehensive Azure Services</h2>
<p>Beyond training, we offer complete services</p>
```

**After:**
```tsx
<h2>{t.cloudEvolversExtended?.comprehensiveServices || 'Comprehensive Azure Services'}</h2>
<p>{t.cloudEvolversExtended?.beyondTraining || 'Beyond training, we offer complete services'}</p>
```

### Geographic Content Translation

For country names and geographic content:

**Before:**
```tsx
<span>Netherlands</span>
<p>Primarily serving customers in Netherlands, Belgium and UK</p>
```

**After:**
```tsx
<span>{t.geographic?.netherlands || 'Netherlands'}</span>
<p>{t.geographic?.servingCustomers || 'Primarily serving customers in Netherlands, Belgium and UK'}</p>
```

## Testing Translations

### 1. Development Brand Switcher
- Use the development toggle in the header
- Switch between xEvolve and Cloud Evolvers
- Verify translations work for both brands

### 2. Language Toggle  
- Test both English and Dutch versions
- Ensure all Cloud Evolvers content is translated
- Check training pages, headers, footers

### 3. Brand Detection
```bash
# Test Cloud Evolvers branding
NEXT_PUBLIC_CLOUD_EVOLVERS=1 npm run dev

# Test xEvolve branding (default)
npm run dev
```

## Common Translation Patterns

### Training Content
```tsx
// Cloud Evolvers specific training content
{t.training?.cloudEvolvers?.heroTitle || 'Default English text'}
{t.training?.cloudEvolvers?.expertTraining || 'MCT-Led Training'}
```

### Geographic Content
```tsx
// Country names and locations
{t.geographic?.netherlands || 'Netherlands'}
{t.geographic?.servingCustomers || 'Serving customers in...'}
```

### UI Elements
```tsx
// Buttons, loading text, CTAs
{t.cloudEvolversExtended?.browseAllCourses || 'Browse All Courses'}
{t.cloudEvolversExtended?.loadingBlogPosts || 'Loading blog posts...'}
```

## Integration with CI/CD

Add to your GitHub Actions workflow:

```yaml
- name: Validate Translations
  run: npm run validate:translations
```

This ensures translations are validated on every commit and prevents untranslated content from being deployed.

## Best Practices

1. **Always use translation keys** for user-facing text
2. **Add fallback text** for graceful degradation
3. **Test both languages** after making changes
4. **Run validation script** before committing
5. **Consider context** when translating (Dutch business context)
6. **Keep keys organized** by feature/component
7. **Use descriptive key names** that indicate purpose

## Script Output

- 🟢 **Green checkmarks**: Tests passed
- 🔴 **Red X marks**: Issues found that need fixing  
- 🟡 **Yellow warnings**: Potential improvements
- 🔵 **Blue sections**: Information and suggestions

The script exits with code 0 if all checks pass, or code 1 if issues are found, making it suitable for CI/CD integration.
