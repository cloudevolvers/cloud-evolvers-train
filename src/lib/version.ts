/**
 * Version Management System
 * 
 * Version is auto-updated by GitHub Actions on every commit to main.
 * Build date and commit SHA are injected at build time via environment variables.
 */

// Runtime environment variables (injected at build time)
const runtimeBuildDate = import.meta.env.VITE_BUILD_DATE;
const runtimeCommitSha = import.meta.env.VITE_COMMIT_SHA;
const runtimeEnvironment = import.meta.env.VITE_ENVIRONMENT;

export const VERSION_INFO = {
  version: '1.0.6',
  buildDate: runtimeBuildDate || new Date().toISOString(),
  commitSha: runtimeCommitSha || 'dev-local',
  environment: runtimeEnvironment || import.meta.env.MODE || 'development'
} as const;

export const getBuildInfo = () => {
  const buildDate = new Date(VERSION_INFO.buildDate);
  const shortSha = VERSION_INFO.commitSha.substring(0, 7);
  
  // Format as dd-mm-yyyy
  const day = buildDate.getDate().toString().padStart(2, '0');
  const month = (buildDate.getMonth() + 1).toString().padStart(2, '0');
  const year = buildDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  
  // Get day name and time
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[buildDate.getDay()];
  const hours = buildDate.getHours().toString().padStart(2, '0');
  const minutes = buildDate.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  return {
    version: VERSION_INFO.version,
    buildDate: formattedDate,
    buildTime: timeString,
    buildDay: dayName,
    commitSha: shortSha,
    environment: VERSION_INFO.environment,
    fullVersion: `v${VERSION_INFO.version} (${shortSha})`
  };
};

export const getVersionString = () => {
  const info = getBuildInfo();
  return `${info.fullVersion} - ${info.environment}`;
};

export const isProduction = () => VERSION_INFO.environment === 'production';
