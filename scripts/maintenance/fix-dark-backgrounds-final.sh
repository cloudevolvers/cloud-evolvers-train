#!/bin/bash

echo "🔧 Final fix for dark background containers..."

# List of training content files to fix
files=(
  "src/components/training/content/WindowsServerHybridAdministratorContent.tsx"
  "src/components/training/content/AzureStackHubContent.tsx"
  "src/components/training/content/Microsoft365SecurityAdministratorContent.tsx"
  "src/components/training/content/Microsoft365IdentityAccessAdministratorContent.tsx"
  "src/components/training/content/Microsoft365CopilotMasteryContent.tsx"
  "src/components/training/content/AzureVirtualDesktopContent.tsx"
  "src/components/training/content/AzureDevOpsEngineerContent.tsx"
  "src/components/training/content/AzureAIFundamentalsContent.tsx"
  "src/components/training/content/AzureAIDeveloperBootcampContent.tsx"
  "src/components/training/content/AzureAdministratorMasteryContent.tsx"
  "src/components/training/content/AzureNetworkEngineerContent.tsx"
  "src/components/training/content/AzureFundamentalsContent.tsx"
  "src/components/training/content/AzureAdministratorContent.tsx"
  "src/components/training/content/AzureDeveloperContent.tsx"
  "src/components/training/content/AzureSolutionsArchitectContent.tsx"
  "src/components/training/content/AzureSecurityEngineerContent.tsx"
  "src/components/training/content/Microsoft365FundamentalsContent.tsx"
  "src/components/training/content/PowerPlatformFundamentalsContent.tsx"
  "src/components/training/content/AzureIoTDeveloperContent.tsx"
  "src/components/training/content/AzureAIDeveloperContent.tsx"
  "src/components/training/content/PowerPlatformAutomationContent.tsx"
  "src/components/training/content/SecurityComplianceIdentityFundamentalsContent.tsx"
  "src/components/training/content/AzureSecurityFundamentalsContent.tsx"
  "src/components/training/content/AzureSupportEngineerContent.tsx"
  "src/components/training/content/TeamsAdvancedAdministrationContent.tsx"
  "src/components/training/content/WindowsServerHybridInfrastructureContent.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "🔄 Fixing $file..."
    
    # Fix problematic dark background patterns in icon containers
    sed -i 's/bg-slate-100 dark:bg-slate-900\/30/bg-primary\/5 dark:bg-primary\/10/g' "$file"
    sed -i 's/bg-gray-100 dark:bg-gray-900\/30/bg-primary\/5 dark:bg-primary\/10/g' "$file"
    sed -i 's/bg-blue-100 dark:bg-blue-900\/30/bg-blue-50 dark:bg-blue-950\/20/g' "$file"
    sed -i 's/bg-purple-100 dark:bg-purple-900\/30/bg-purple-50 dark:bg-purple-950\/20/g' "$file"
    sed -i 's/bg-pink-100 dark:bg-pink-900\/30/bg-pink-50 dark:bg-pink-950\/20/g' "$file"
    sed -i 's/bg-indigo-100 dark:bg-indigo-900\/30/bg-indigo-50 dark:bg-indigo-950\/20/g' "$file"
    sed -i 's/bg-green-100 dark:bg-green-900\/30/bg-green-50 dark:bg-green-950\/20/g' "$file"
    sed -i 's/bg-orange-100 dark:bg-orange-900\/30/bg-orange-50 dark:bg-orange-950\/20/g' "$file"
    
    # Fix prerequisite and target audience dark backgrounds
    sed -i 's/bg-gray-50 dark:bg-gray-900\/20/bg-card dark:bg-card/g' "$file"
    sed -i 's/bg-slate-50 dark:bg-slate-900\/20/bg-card dark:bg-card/g' "$file"
    
    echo "✅ Fixed $file"
  else
    echo "⚠️ File not found: $file"
  fi
done

echo "🎉 All training content components updated with proper backgrounds!"
echo "📋 Fixed patterns:"
echo "   • Icon containers: Now use light backgrounds with better contrast"
echo "   • Prerequisites/Audience: Now use bg-card for consistency"
echo "   • All dark backgrounds that caused readability issues have been resolved"
