const fs = require('fs');

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], prefix + key + '.'));
    } else {
      keys.push(prefix + key);
    }
  }
  return keys;
}

try {
  const enData = JSON.parse(fs.readFileSync('./src/locales/en.json', 'utf8'));
  const nlData = JSON.parse(fs.readFileSync('./src/locales/nl.json', 'utf8'));

  const enKeys = getAllKeys(enData).sort();
  const nlKeys = getAllKeys(nlData).sort();

  console.log('📊 Translation Key Analysis:');
  console.log('  English keys:', enKeys.length);
  console.log('  Dutch keys:', nlKeys.length);
  
  // Find missing keys
  const missingInNL = enKeys.filter(key => !nlKeys.includes(key));
  const extraInNL = nlKeys.filter(key => !enKeys.includes(key));
  
  if (missingInNL.length > 0) {
    console.log('\n❌ Keys missing in Dutch:');
    missingInNL.forEach(key => console.log('  -', key));
  }
  
  if (extraInNL.length > 0) {
    console.log('\n➕ Extra keys in Dutch (not in English):');
    extraInNL.forEach(key => console.log('  +', key));
  }
  
  if (missingInNL.length === 0 && extraInNL.length === 0) {
    console.log('\n✅ Perfect key alignment - all keys match between EN and NL!');
  }
  
  // Check for English text in Dutch translations
  console.log('\n🔍 Checking for potential untranslated content in Dutch...');
  
  function checkForEnglish(obj, path = '') {
    let issues = [];
    for (let key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === 'string') {
        const value = obj[key];
        if (
          /\b(the|and|or|with|for|in|on|at|by|from|to|of|a|an)\b/gi.test(value) &&
          !currentPath.includes('submitIdea') && 
          !currentPath.includes('geographic') && 
          !currentPath.includes('cloudEvolversExtended')
        ) {
          issues.push(`    ${currentPath}: ${value}`);
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        issues = issues.concat(checkForEnglish(obj[key], currentPath));
      }
    }
    return issues;
  }
  
  const englishInDutch = checkForEnglish(nlData);
  if (englishInDutch.length > 0) {
    console.log('⚠️  Potential English content in Dutch translations:');
    englishInDutch.forEach(issue => console.log(issue));
  } else {
    console.log('✅ No obvious English content detected in Dutch translations');
  }
  
  console.log('\n🎯 Final Assessment:');
  console.log(`  ✅ Translation files are valid JSON`);
  console.log(`  ✅ Key count: EN(${enKeys.length}) vs NL(${nlKeys.length})`);
  console.log(`  ${missingInNL.length === 0 ? '✅' : '❌'} Missing keys: ${missingInNL.length}`);
  console.log(`  ${englishInDutch.length === 0 ? '✅' : '⚠️ '} Untranslated content: ${englishInDutch.length} issues`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
