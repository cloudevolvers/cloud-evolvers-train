import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    console.log('[API Auth] Attempting login with provided password');

    // Authenticate using auth service
    const result = await authService.authenticate(password);
    
    if (!result.success) {
      console.log('[API Auth] Authentication failed:', result.error);
      return NextResponse.json(
        { success: false, error: result.error || 'Invalid password' },
        { status: 401 }
      );
    }

    console.log('[API Auth] Authentication successful');

    // Return the token from the authenticate method
    const response = NextResponse.json({
      success: true,
      data: {
        token: result.token,
        user: {
          id: 'admin-user',
          name: 'Administrator',
          role: 'admin'
        }
      }
    });

    // Set HTTP-only cookie
    response.cookies.set('auth_token', result.token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });

    console.log('[API Auth] Response prepared with cookie');
    return response;

  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
