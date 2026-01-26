import { NextResponse } from 'next/server';

// This is a placeholder handler for redirected API routes
export async function GET() {
  return NextResponse.json({ message: 'API routes disabled during build' });
}

export async function POST() {
  return NextResponse.json({ message: 'API routes disabled during build' });
}

export async function PUT() {
  return NextResponse.json({ message: 'API routes disabled during build' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'API routes disabled during build' });
}
