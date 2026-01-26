import { NextRequest, NextResponse } from 'next/server';
import { getAllTrainings as getAllEnglishTrainings } from '@/components/training/content';
import { getAllTrainings as getAllDutchTrainings } from '@/components/training/content-nl';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    
    console.log(`[TRAINING API] GET request - lang: ${lang}`);
    
    // Get trainings based on language
    let trainings;
    if (lang === 'nl') {
      trainings = getAllDutchTrainings();
    } else {
      trainings = getAllEnglishTrainings();
    }
    
    console.log(`[TRAINING API] Found ${trainings.length} training courses for language: ${lang}`);
    
    return NextResponse.json(trainings);
  } catch (error) {
    console.error('Error fetching training data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch training data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const training = await request.json();
    
    // In a real implementation, you would save to a database
    // For now, this is a placeholder
    console.log('Creating training:', training);
    
    return NextResponse.json(training, { status: 201 });
  } catch (error) {
    console.error('Error creating training:', error);
    return NextResponse.json(
      { error: 'Failed to create training' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const training = await request.json();
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would update in a database
    // For now, this is a placeholder
    console.log('Updating training:', slug, training);
    
    return NextResponse.json(training);
  } catch (error) {
    console.error('Error updating training:', error);
    return NextResponse.json(
      { error: 'Failed to update training' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would delete from a database
    // For now, this is a placeholder
    console.log('Deleting training:', slug);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting training:', error);
    return NextResponse.json(
      { error: 'Failed to delete training' },
      { status: 500 }
    );
  }
}
