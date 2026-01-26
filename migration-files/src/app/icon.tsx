import { ImageResponse } from 'next/og'
import { getBrandConfig } from '@/lib/brand-config'
import sharp from 'sharp'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default async function Icon() {
  const brand = getBrandConfig()
  
  try {
    // Determine logo path based on brand
    const logoPath = brand.name === 'Cloud Evolvers' 
      ? join(process.cwd(), 'public/cloudevolvers-logo/logo/high-res/logo-transparent.png')
      : join(process.cwd(), 'public/xevolve-logo/high-res/logo-transparent.png')
    
    // Read and resize the logo
    const logoBuffer = readFileSync(logoPath)
    const resizedLogo = await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()
    
    return new Response(resizedLogo as BodyInit, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
      },
    })
  } catch (error) {
    console.error('Error generating favicon:', error)
    
    // Fallback to emoji-based favicons
    if (brand.name === 'Cloud Evolvers') {
      return new ImageResponse(
        (
          <div
            style={{
              background: 'linear-gradient(135deg, #10b981, #14b8a6)',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              position: 'relative',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              🎓
            </div>
          </div>
        ),
        {
          ...size,
        }
      );
    } else {
      return new ImageResponse(
        (
          <div
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              position: 'relative',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ⚡
            </div>
          </div>
        ),
        {
          ...size,
        }
      );
    }
  }
}