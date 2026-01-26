import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authService, AUTH_COOKIE_NAME } from '@/lib/auth';

/**
 * Next.js middleware for request interception and authentication
 * Handles admin route protection and image route rewriting
 */
export async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Detailed logging for debugging middleware execution
    console.log(`[Next.js Middleware] 🚀 Processing request: ${request.method} ${pathname}`);

    // Force admin authentication for ANY route that starts with /admin
    if (pathname.startsWith('/admin')) {
      // Debug logging - log ALL /admin routes
      console.log(`[Middleware] 🔒 Admin route interception: ${pathname}`);

      // Special case: Skip auth check only for the login page itself
      if (pathname === '/admin/login') {
        // In development mode, redirect login page to admin dashboard
        if (process.env.NODE_ENV === 'development') {
          console.log('[Middleware] 🚀 Development mode - redirecting /admin/login to /admin');
          return NextResponse.redirect(new URL('/admin', request.url));
        }
        console.log('[Middleware] 👍 Allowing access to login page');
        return NextResponse.next();
      }

      // Development mode: Auto-allow admin access without authentication
      if (process.env.NODE_ENV === 'development') {
        console.log('[Middleware] 🚀 Development mode - auto-allowing admin access');
        return NextResponse.next();
      }

      // For ALL OTHER admin routes, STRICTLY enforce authentication
      const authToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;

      // Print all cookies for debugging (fixed to work with RequestCookies API)
      const cookieNames = request.cookies.getAll().map(cookie => cookie.name);
      const allCookies = cookieNames.map(name => {
        const value = request.cookies.get(name);
        return `${name}: ${value ? '[present]' : '[empty]'}`;
      }).join(', ');
      
      console.log(`[Middleware] 🍪 Available cookies: ${allCookies || 'none'}`);

      if (!authToken) {
        console.log(`[Middleware] ❌ No auth token found for ${pathname}`);
        return redirectToLogin(request.url, pathname);
      }

      console.log(`[Middleware] 🔑 Auth token found, verifying...`);

      // Verify token - NOTE: this runs on the Edge runtime where JWT validation works differently
      // The validation logic below happens *directly within the middleware* without external API calls.
      try {
        // Check if token appears to be a JWT (simple format check)
        const tokenParts = authToken.split('.');
        if (tokenParts.length !== 3) {
          console.log(`[Middleware] ⚠️ Token doesn't look like a valid JWT (has ${tokenParts.length} parts instead of 3)`);
          return redirectToLogin(request.url, pathname);
        }

        // Decode the payload (middle part) to check for expiration and role directly.
        // This avoids needing full JWT library verification which can be problematic in Edge Runtime.
        try {
          const payloadBase64 = tokenParts[1];
          // Base64 decode the payload
          const decodedPayload = JSON.parse(
            Buffer.from(payloadBase64, 'base64').toString('utf-8')
          );

          // Log decoded payload details for debugging
          console.log(`[Middleware] 📋 Token payload:`, JSON.stringify({
            hasId: !!decodedPayload.id,
            hasRole: !!decodedPayload.role,
            role: decodedPayload.role,
            expiresAt: decodedPayload.exp ? new Date(decodedPayload.exp * 1000).toISOString() : 'missing',
            currentTime: new Date().toISOString()
          }));

          // Check if token is expired directly within the middleware
          if (decodedPayload.exp && decodedPayload.exp * 1000 < Date.now()) {
            console.log(`[Middleware] ⌛ Token expired at ${new Date(decodedPayload.exp * 1000).toISOString()}`);
            const response = redirectToLogin(request.url, pathname);
            // Clear the expired cookie
            response.cookies.delete(AUTH_COOKIE_NAME);
            return response;
          }

          // Check for admin role directly within the middleware
          if (!decodedPayload.role || decodedPayload.role !== 'admin') {
            console.log(`[Middleware] 🚫 User does not have admin role: ${decodedPayload.role || 'no role'}`);
            return redirectToLogin(request.url, pathname);
          }

          // Authentication passed based on checks within the middleware, allow access
          console.log(`[Middleware] ✅ Authenticated access granted to ${pathname}`);
          return NextResponse.next();

        } catch (decodeError) {
          console.error(`[Middleware] 🔥 Error decoding token payload:`, decodeError);
          return redirectToLogin(request.url, pathname);
        }
      } catch (error) {
        console.error(`[Middleware] 🔥 Auth verification error:`, error);
        return redirectToLogin(request.url, pathname);
      }
    }

    // Handle specific dynamic image routes that need API processing
    // Note: Static images in /public are served automatically by Next.js
    // Only rewrite if we have dynamic image processing endpoints
    if (pathname.includes('-images/file/')) {
      console.log(`[Middleware] 🖼️ Rewriting dynamic image route: ${pathname} to /api${pathname}`);
      const apiUrl = new URL('/api' + pathname, request.url);
      return NextResponse.rewrite(apiUrl);
    }

    // All other routes pass through (including /images/training/* which are served from public folder)
    return NextResponse.next();
  } catch (error) {
    console.error('[Middleware] 🔥 Unhandled error:', error);
    // Ensure middleware doesn't crash the request on unexpected errors
    return NextResponse.next();
  }
}

/**
 * Helper function for login redirects
 * @param baseUrl - The base URL to construct the login URL from
 * @param returnPath - The path to redirect to after successful login
 * @returns NextResponse redirect to login page
 */
function redirectToLogin(baseUrl: string, returnPath: string) {
  const loginUrl = new URL('/admin/login', baseUrl); // Use /admin/login for admin routes
  loginUrl.searchParams.set('redirect', returnPath);
  console.log(`[Middleware] 🔄 Redirecting to ${loginUrl.toString()}`);
  return NextResponse.redirect(loginUrl);
}

// Critical: Explicitly configure matcher for admin routes and specific image processing
export const config = {
  matcher: [
    // Admin routes
    '/admin',
    '/admin/(.*)',
    // Only dynamic image processing routes (not static images from public folder)
    '/(.*)-images/file/:path*',
  ],
};
