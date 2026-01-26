import fs from 'fs';
import path from 'path';

/**
 * Updates or adds an environment variable to the .env.local file
 */
export function updateEnvironmentVariable(key: string, value: string): boolean {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';
    
    // Read existing .env.local file if it exists
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }
    
    // Check if variable already exists
    const regex = new RegExp(`^${key}=.*$`, 'm');
    
    if (regex.test(envContent)) {
      // Replace existing variable
      envContent = envContent.replace(regex, `${key}="${value}"`);
    } else {
      // Add new variable
      envContent += `\n${key}="${value}"`;
    }
    
    // Write back to file
    fs.writeFileSync(envPath, envContent.trim());
    
    // Update runtime environment variable
    process.env[key] = value;
    
    return true;
  } catch (error) {
    console.error(`Failed to update environment variable ${key}:`, error);
    return false;
  }
}

/**
 * Gets an environment variable
 */
export function getEnvironmentVariable(key: string): string | undefined {
  return process.env[key];
}
