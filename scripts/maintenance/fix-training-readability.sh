#!/bin/bash

# Script to update all training content components with proper readable styling

echo "Updating training content components with proper dark/light mode styling..."

# List of training content files
files=(
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
    echo "Updating $file..."
    
    # Replace card containers with proper bg-card and borders
    sed -i 's/p-3 bg-muted\/50 rounded-lg/p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow/g' "$file"
    sed -i 's/p-4 bg-muted\/30 rounded-lg/p-6 bg-card border border-border rounded-lg/g' "$file"
    sed -i 's/bg-muted\/30 rounded-lg p-4/p-6 bg-card border border-border rounded-lg/g' "$file"
    
    # Replace learning objective items with proper cards
    sed -i 's/flex items-start gap-3$/flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow/g' "$file"
    
    # Update text colors for better readability
    sed -i 's/text-foreground font-medium/text-muted-foreground/g' "$file"
    sed -i 's/font-medium text-foreground/font-semibold text-foreground/g' "$file"
    
    # Update icon sizes and colors
    sed -i 's/h-4 w-4 text-primary/h-5 w-5 text-primary/g' "$file"
    sed -i 's/h-5 w-5 text-muted-foreground/h-6 w-6 text-primary/g' "$file"
    
    # Update section spacing
    sed -i 's/space-y-6/space-y-8/g' "$file"
    sed -i 's/space-y-2/grid gap-4/g' "$file"
    sed -i 's/space-y-3/grid gap-4/g' "$file"
    
    # Update headings
    sed -i 's/text-lg font-semibold text-foreground/text-xl font-semibold text-foreground/g' "$file"
    sed -i 's/text-xl font-bold text-foreground/text-2xl font-bold text-foreground/g' "$file"
    
    echo "Updated $file"
  else
    echo "File $file not found"
  fi
done

echo "✅ All training content components updated with proper styling!"
