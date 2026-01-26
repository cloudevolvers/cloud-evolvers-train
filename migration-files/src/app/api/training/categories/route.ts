import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories = [
      {
        id: 'azure-fundamentals',
        name: 'Azure Fundamentals',
        description: 'Core Azure concepts and services',
        count: 3
      },
      {
        id: 'azure-administration',
        name: 'Azure Administration',
        description: 'Managing Azure resources and services',
        count: 2
      },
      {
        id: 'azure-development',
        name: 'Azure Development',
        description: 'Building applications on Azure',
        count: 3
      },
      {
        id: 'azure-data',
        name: 'Azure Data & AI',
        description: 'Data engineering and AI solutions',
        count: 2
      },
      {
        id: 'azure-security',
        name: 'Azure Security',
        description: 'Security and compliance in Azure',
        count: 1
      },
      {
        id: 'microsoft-365',
        name: 'Microsoft 365',
        description: 'Microsoft 365 and productivity tools',
        count: 2
      }
    ];
    
    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error fetching training categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
