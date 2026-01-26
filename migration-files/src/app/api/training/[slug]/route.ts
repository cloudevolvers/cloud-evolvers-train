import { NextRequest, NextResponse } from 'next/server';
import { getAllTrainings as getAllEnglishTrainings } from '@/components/training/content';
import { getAllTrainings as getAllDutchTrainings } from '@/components/training/content-nl';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    
    console.log(`[TRAINING API] GET ${slug} - lang: ${lang}`);
    
    // Get trainings based on language
    let trainings;
    if (lang === 'nl') {
      trainings = getAllDutchTrainings();
    } else {
      trainings = getAllEnglishTrainings();
    }
    
    // Find training by slug
    const training = trainings.find(t => t.slug === slug);
    
    if (!training) {
      return NextResponse.json(
        { error: 'Training not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(training);
  } catch (error) {
    console.error('Error fetching training:', error);
    return NextResponse.json(
      { error: 'Failed to fetch training' },
      { status: 500 }
    );
  }
}
