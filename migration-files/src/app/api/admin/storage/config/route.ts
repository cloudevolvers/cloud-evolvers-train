import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check Azure Blob Storage configuration
    const config = {
      accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME || 'Not configured',
      containerName: process.env.AZURE_STORAGE_CONTAINER_NAME || 'Not configured',
      hasConnectionString: !!process.env.AZURE_STORAGE_CONNECTION_STRING,
      environment: process.env.NODE_ENV || 'unknown',
      localDev: process.env.LOCAL_DEV === 'true'
    };

    return NextResponse.json({
      success: true,
      config,
      message: 'Azure Blob Storage configuration retrieved'
    });

  } catch (error) {
    console.error('Error checking blob storage config:', error);
    return NextResponse.json(
      { error: 'Failed to check blob storage configuration' },
      { status: 500 }
    );
  }
}
