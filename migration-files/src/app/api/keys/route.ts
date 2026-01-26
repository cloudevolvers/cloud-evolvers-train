import { NextResponse } from 'next/server';

export async function GET() {
  // Get API keys from environment variables
  const keys = [
    {
      id: 'pexels',
      service: 'Pexels',
      key: process.env.PEXELS_API_KEY || '',
      description: 'Used for image search and gallery functionalities'
    },
    {
      id: 'unsplash',
      service: 'Unsplash',
      key: process.env.UNSPLASH_API_KEY || '',
      description: 'Used for high-quality image search'
    },
    {
      id: 'pixabay',
      service: 'Pixabay',
      key: process.env.PIXABAY_API_KEY || '',
      description: 'Used for royalty-free images and videos'
    }
  ];
  
  // Filter out any empty keys
  const validKeys = keys.filter(key => key.key !== '');
  
  return NextResponse.json(validKeys);
}
