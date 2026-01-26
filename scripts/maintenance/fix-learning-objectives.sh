#!/bin/bash

echo "🔧 Fixing Learning Objectives dark containers..."

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
    echo "🔄 Fixing Learning Objectives in $file..."
    
    # Fix the Learning Objectives containers specifically
    sed -i 's/bg-white dark:bg-slate-800 rounded-lg border border-border/bg-card border border-border rounded-lg/g' "$file"
    sed -i 's/bg-white dark:bg-slate-800 rounded-xl border border-border/bg-card border border-border rounded-xl/g' "$file"
    
    # Fix text color in learning objectives
    sed -i 's/text-muted-foreground leading-relaxed/text-foreground leading-relaxed/g' "$file"
    
    echo "✅ Fixed $file"
  else
    echo "⚠️ File not found: $file"
  fi
done

echo "🎉 Learning Objectives containers fixed!"
echo "📋 Changes applied:"
echo "   • bg-white dark:bg-slate-800 → bg-card (uses proper theme-aware background)"
echo "   • text-muted-foreground → text-foreground (better contrast for main content)"
echo "   • All Learning Objectives now have proper readable contrast!"
