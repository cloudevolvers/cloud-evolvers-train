import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'xEvolve Website API',
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      port: process.env.DETECTED_PORT || process.env.PORT || 'unknown',
      version: process.env.npm_package_version || 'unknown'
    });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        error: 'Health check failed',
        timestamp: new Date().toISOString(),
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
