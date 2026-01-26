#!/bin/bash

# Fix training content component colors to match the overview page styling

# List of training content files to update
files=(
  "src/components/training/content/AzureAdministratorContent.tsx"
  "src/components/training/content/AzureAIDeveloperBootcampContent.tsx"
  "src/components/training/content/AzureAIDeveloperContent.tsx"
  "src/components/training/content/AzureAIFundamentalsContent.tsx"
  "src/components/training/content/AzureDeveloperContent.tsx"
  "src/components/training/content/AzureDevOpsEngineerContent.tsx"
  "src/components/training/content/AzureFundamentalsContent.tsx"
  "src/components/training/content/AzureIoTDeveloperContent.tsx"
  "src/components/training/content/AzureNetworkEngineerContent.tsx"
  "src/components/training/content/AzureSecurityEngineerContent.tsx"
  "src/components/training/content/AzureSolutionsArchitectContent.tsx"
  "src/components/training/content/AzureSupportEngineerContent.tsx"
  "src/components/training/content/AzureVirtualDesktopContent.tsx"
  "src/components/training/content/Microsoft365CopilotMasteryContent.tsx"
  "src/components/training/content/Microsoft365FundamentalsContent.tsx"
  "src/components/training/content/PowerPlatformAutomationContent.tsx"
  "src/components/training/content/PowerPlatformFundamentalsContent.tsx"
  "src/components/training/content/WindowsServerHybridAdministratorContent.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Updating colors in $file"
    
    # Replace specific color backgrounds with neutral ones
    sed -i 's/bg-blue-50 dark:bg-blue-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-green-50 dark:bg-green-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-purple-50 dark:bg-purple-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-orange-50 dark:bg-orange-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-red-50 dark:bg-red-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-yellow-50 dark:bg-yellow-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-teal-50 dark:bg-teal-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-indigo-50 dark:bg-indigo-950\/20/bg-muted\/50/g' "$file"
    sed -i 's/bg-pink-50 dark:bg-pink-950\/20/bg-muted\/50/g' "$file"
    
    # Replace specific colored icons with muted ones
    sed -i 's/text-blue-600/text-muted-foreground/g' "$file"
    sed -i 's/text-green-600/text-primary/g' "$file"
    sed -i 's/text-purple-600/text-muted-foreground/g' "$file"
    sed -i 's/text-orange-600/text-muted-foreground/g' "$file"
    sed -i 's/text-red-600/text-muted-foreground/g' "$file"
    sed -i 's/text-yellow-600/text-muted-foreground/g' "$file"
    sed -i 's/text-teal-600/text-muted-foreground/g' "$file"
    sed -i 's/text-indigo-600/text-muted-foreground/g' "$file"
    sed -i 's/text-pink-600/text-muted-foreground/g' "$file"
    
    # Replace specific border colors with neutral ones
    sed -i 's/border-slate-200 dark:border-slate-700/border-border/g' "$file"
    sed -i 's/border-gray-200 dark:border-gray-700/border-border/g' "$file"
    sed -i 's/border-blue-200 dark:border-blue-700/border-border/g' "$file"
    sed -i 's/border-green-200 dark:border-green-700/border-border/g' "$file"
    
    # Replace specific background colors for cards/sections
    sed -i 's/bg-slate-50 dark:bg-slate-800/bg-muted\/30/g' "$file"
    sed -i 's/bg-gray-50 dark:bg-gray-800/bg-muted\/30/g' "$file"
    sed -i 's/bg-blue-50 dark:bg-blue-800/bg-muted\/30/g' "$file"
    sed -i 's/bg-green-50 dark:bg-green-800/bg-muted\/30/g' "$file"
    
    echo "Updated colors in $file"
  else
    echo "File $file not found"
  fi
done

echo "Color replacement complete!"
