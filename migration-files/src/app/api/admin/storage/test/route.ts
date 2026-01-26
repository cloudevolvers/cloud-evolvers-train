import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Test Azure Blob Storage connection
    const { BlobServiceClient } = await import('@azure/storage-blob');
    
    if (!process.env.AZURE_STORAGE_CONNECTION_STRING) {
      return NextResponse.json({
        success: false,
        error: 'Azure Storage connection string not configured'
      }, { status: 400 });
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING
    );

    // Try to get container properties to test connection
    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'images';
    const containerClient = blobServiceClient.getContainerClient(containerName);
    
    try {
      const properties = await containerClient.getProperties();
      
      return NextResponse.json({
        success: true,
        message: 'Successfully connected to Azure Blob Storage',
        accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
        containerName: containerName,
        lastModified: properties.lastModified
      });
    } catch (containerError: any) {
      if (containerError.statusCode === 404) {
        return NextResponse.json({
          success: false,
          error: `Container '${containerName}' not found`,
          suggestion: 'The container may need to be created in Azure Storage'
        }, { status: 404 });
      } else {
        throw containerError;
      }
    }

  } catch (error: any) {
    console.error('Error testing blob storage connection:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to connect to Azure Blob Storage'
    }, { status: 500 });
  }
}
