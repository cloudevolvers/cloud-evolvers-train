/**
 * Dutch Language Detection Utility
 * 
 * This utility contains common Dutch words that should NOT appear
 * on the English version of the homepage (except in language switcher contexts)
 */

// Common Dutch words that shouldn't appear in English content
export const commonDutchWords = [
  // Articles and pronouns
  'de', 'het', 'een', 'der', 'des', 'den',
  'wij', 'jullie', 'zij', 'hun', 'haar', 'zijn',
  'deze', 'dit', 'die', 'dat', 'welke', 'wat',
  
  // Prepositions and conjunctions  
  'van', 'naar', 'bij', 'met', 'voor', 'door', 'over', 'onder', 'tussen',
  'sinds', 'tijdens', 'binnen', 'buiten', 'zonder', 'tegen', 'achter',
  'en', 'of', 'maar', 'want', 'omdat', 'terwijl', 'hoewel', 'als', 'toen',
  
  // Common verbs
  'zijn', 'hebben', 'worden', 'kunnen', 'moeten', 'mogen', 'willen',
  'gaan', 'komen', 'doen', 'maken', 'krijgen', 'geven', 'zien', 'weten',
  'denken', 'zeggen', 'vinden', 'werken', 'leven', 'houden', 'staan',
  'zitten', 'liggen', 'lopen', 'praten', 'kijken', 'horen', 'voelen',
  
  // Common nouns
  'bedrijf', 'dienst', 'diensten', 'klant', 'klanten', 'project', 'projecten',
  'oplossing', 'oplossingen', 'team', 'mensen', 'tijd', 'jaar', 'dag', 'week',
  'maand', 'uur', 'minuut', 'huis', 'werk', 'geld', 'informatie', 'gegevens',
  'systeem', 'systemen', 'technologie', 'computer', 'internet', 'website',
  
  // Common adjectives
  'goed', 'groot', 'klein', 'nieuw', 'oud', 'jong', 'hoog', 'laag', 'lang',
  'kort', 'breed', 'smal', 'dik', 'dun', 'zwart', 'wit', 'rood', 'blauw',
  'groen', 'geel', 'belangrijk', 'mogelijk', 'moeilijk', 'makkelijk', 'snel',
  'langzaam', 'vroeg', 'laat', 'warm', 'koud', 'droog', 'nat',
  
  // Business/tech specific Dutch terms
  'consultancy', 'advies', 'ondersteuning', 'beheer', 'ontwikkeling',
  'implementatie', 'migratie', 'optimalisatie', 'analyse',
  'rapportage', 'cursus', 'opleiding', 'certificering',
  'expertise', 'ervaring', 'kennis', 'vaardigheden', 'competenties',
  
  // Azure/Cloud specific Dutch terms
  'wolk', 'wolken', 'beveiliging', 'veiligheid', 'gegevensopslag',
  'infrastructuur', 'netwerk', 'server', 'database', 'applicatie',
  'integratie', 'automatisering', 'schaalbaarheid', 'beschikbaarheid',
  
  // Business Dutch phrases/words
  'informatie', 'meer', 'ons', 'waarom', 'hoe', 'wat',
  'waar', 'wanneer', 'onze', 'jouw', 'jou', 'uw', 'u', 'over',
  
  // Navigation/UI Dutch terms
  'thuis', 'pagina', 'menu', 'navigatie', 'zoeken', 'vinden',
  'resultaten', 'volgende', 'vorige', 'eerste', 'laatste', 'terug',
  'verder', 'sluiten', 'openen', 'bewerken', 'verwijderen', 'toevoegen',
  
  // Form/contact Dutch terms
  'naam', 'email', 'telefoon', 'bericht', 'onderwerp', 'verzenden',
  'versturen', 'invullen', 'verplicht', 'optioneel', 'selecteer',
  'kies', 'kiezen', 'bevestig', 'bevestigen', 'annuleren', 'akkoord',
  
  // Time/date Dutch terms
  'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli',
  'augustus', 'september', 'oktober', 'november', 'december',
  'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag',
  'vandaag', 'gisteren', 'morgen', 'volgende', 'vorige', 'nu', 'straks',
];

// Dutch phrases that commonly appear in business contexts
export const dutchPhrases = [
  'meer informatie',
  'neem contact op',
  'waarom kiezen voor',
  'onze diensten',
  'over ons',
  'wat wij doen',
  'hoe wij werken',
  'onze aanpak',
  'uw partner',
  'samen werken',
  'kwaliteit en service',
  'jarenlange ervaring',
  'deskundige ondersteuning',
  'op maat gemaakt',
  'volledig beheerd',
  'betrouwbare oplossing',
  'professionele dienstverlening',
];

// Words that are acceptable in both languages (international terms)
export const internationalTerms = [
  'azure', 'microsoft', 'cloud', 'api', 'monitoring', 'dashboard',
  'analytics', 'security', 'storage', 'database', 'server', 'network',
  'infrastructure', 'devops', 'kubernetes', 'docker', 'container',
  'automation', 'integration', 'scalability', 'performance', 'backup',
  'migration', 'optimization', 'compliance', 'governance', 'identity',
  'email', 'teams', 'office', 'copilot', 'ai', 'ml', 'data', 'power',
  'platform', 'solution', 'service', 'support', 'training', 'certification',
  'expert', 'professional', 'enterprise', 'business', 'management',
  'development', 'deployment', 'configuration', 'maintenance',
  'consulting', 'advisory', 'strategy', 'implementation', 'transformation',
  // Brand names and proper nouns
  'xevolve', 'evolve', 'cloud', 'evolvers', 'github', 'linkedin',
  // Technical abbreviations
  'http', 'https', 'api', 'rest', 'json', 'xml', 'sql', 'nosql',
  'ui', 'ux', 'css', 'html', 'js', 'ts', 'react', 'next', 'node',
  'npm', 'git', 'ci', 'cd', 'sso', 'mfa', 'rbac', 'saas', 'paas', 'iaas',
  // Common English words that might be confused
  'contact', 'home', 'about', 'services', 'beste', 'complete',
  'server', 'database', 'email',
];

/**
 * Check if a word is likely Dutch and should not appear in English content
 * @param word - The word to check
 * @returns boolean - true if the word is likely Dutch
 */
export function isDutchWord(word: string): boolean {
  const normalizedWord = word.toLowerCase().trim();
  
  // Skip if it's an international term
  if (internationalTerms.includes(normalizedWord)) {
    return false;
  }
  
  // Check against common Dutch words
  return commonDutchWords.includes(normalizedWord);
}

/**
 * Check if a text contains Dutch phrases
 * @param text - The text to check
 * @returns array of found Dutch phrases
 */
export function findDutchPhrases(text: string): string[] {
  const normalizedText = text.toLowerCase();
  return dutchPhrases.filter(phrase => normalizedText.includes(phrase.toLowerCase()));
}

/**
 * Extract and analyze words from text content
 * @param text - The text to analyze
 * @returns object with analysis results
 */
export function analyzeTextForDutch(text: string): {
  dutchWords: string[];
  dutchPhrases: string[];
  suspiciousContent: string[];
} {
  // Clean text - remove HTML, special chars, keep only words
  const cleanText = text
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/[^\w\s]/g, ' ') // Remove special characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
    
  // Extract words
  const words = cleanText.toLowerCase().split(/\s+/).filter(word => word.length > 1);
  
  // Find Dutch words
  const dutchWords = words.filter(word => isDutchWord(word));
  
  // Find Dutch phrases
  const dutchPhrasesFound = findDutchPhrases(text);
  
  // Additional suspicious content patterns
  const suspiciousContent: string[] = [];
  
  // Check for Dutch-specific patterns
  if (/\b(de|het)\s+\w+/gi.test(text)) {
    suspiciousContent.push('Dutch articles detected (de/het + noun)');
  }
  
  if (/\bvan\s+de\b/gi.test(text)) {
    suspiciousContent.push('Dutch prepositional phrase detected (van de)');
  }
  
  if (/\bnaar\s+de\b/gi.test(text)) {
    suspiciousContent.push('Dutch prepositional phrase detected (naar de)');
  }
  
  return {
    dutchWords: Array.from(new Set(dutchWords)), // Remove duplicates
    dutchPhrases: dutchPhrasesFound,
    suspiciousContent
  };
}
