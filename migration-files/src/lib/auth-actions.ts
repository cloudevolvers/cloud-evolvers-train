'use server'; // Directive applies only to this file

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { authService, AUTH_COOKIE_NAME } from './auth';

// Helper function to determine if we're in build mode
// Helper to detect if we're in build mode or static generation
const isBuildMode = () => {
  // During Next.js build, check for specific environment indicators
  return process.env.NODE_ENV === 'production' && 
         (typeof process.env.PORT === 'undefined' || 
          process.env.NEXT_PHASE === 'phase-production-build');
};

/**
 * Helper function to check if code is running on client
 * Works in most cases, though not guaranteed in all environments
 */
const isClient = () => {
  return typeof window !== 'undefined';
};

/**
 * Server Action to check the current session status.
 * Reads the auth token cookie and verifies it.
 * Can be called directly from Client Components.
 * Auto-login in development mode for easier testing.
 * @returns {Promise<{ authenticated: boolean; user: { id: string; name: string; role: string } | null }>}
 */
export async function checkSessionAction(): Promise<{ authenticated: boolean; user: { id: string; name: string; role: string } | null }> {
  // Prevent execution during build time
  if (isBuildMode()) {
    return { authenticated: false, user: null };
  }
  
  // Only log in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log('[Server Action] checkSessionAction invoked');
    
    // Auto-login in development mode for easier testing
    const devUser = {
      id: 'dev-user',
      name: 'Developer',
      role: 'admin'
    };
    console.log('[Server Action] Development mode - auto-authenticating user');
    return { authenticated: true, user: devUser };
  }

  try {
    // If we detect we're running on client, return a safe default
    // This prevents cookies() errors when accidentally called client-side
    if (isClient()) {
      if (!isBuildMode()) {
        console.log('[Server Action] Running on client - cannot access cookies, returning unauthenticated');
      }
      return { authenticated: false, user: null };
    }
    
    // Safe to use server-only APIs now - properly await cookies() call
    // Note: In newer Next.js versions, cookies() should be awaited even though it returns synchronously
    const cookieStore = await cookies();
    // Access token after awaiting cookies
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      if (!isBuildMode()) {
        console.log('[Server Action checkSessionAction] No auth token cookie found.');
      }
      return { authenticated: false, user: null };
    }

    if (!isBuildMode()) {
      console.log('[Server Action checkSessionAction] Auth token found, verifying...');
    }
    const { valid, decoded, error } = authService.verifyToken(token);

    if (!valid || !decoded) {
      if (!isBuildMode()) {
        console.log(`[Server Action checkSessionAction] Token verification failed: ${error}`);
      }
      return { authenticated: false, user: null };
    }

    if (!isBuildMode()) {
      console.log('[Server Action checkSessionAction] Token verified successfully.');
    }
    const user = {
      id: decoded.id,
      name: decoded.name,
      role: decoded.role,
    };

    return { authenticated: true, user: user };
  } catch (error) {
    if (!isBuildMode()) {
      console.error('[Server Action checkSessionAction] Error:', error);
    }
    return { authenticated: false, user: null };
  }
}

/**
 * Server Action to log the user out.
 * Clears the authentication cookie.
 * Can be called directly from Client Components.
 * @returns {Promise<{ success: boolean }>}
 */
export async function logoutAction(): Promise<{ success: boolean }> {
  // Only log in development mode
  if (!isBuildMode()) {
    console.log('[Server Action] logoutAction invoked');
  }

  try {
    // If we detect we're running on client, return failure
    if (isClient()) {
      if (!isBuildMode()) {
        console.log('[Server Action] Running on client - cannot access cookies, logout failed');
      }
      return { success: false };
    }
    
    // Safe to use server-only APIs now - properly await cookies() call
    const cookieStore = await cookies();
    const cookieConfig = authService.getCookieConfig();

    // Clear the cookie
    cookieStore.delete(AUTH_COOKIE_NAME);

    if (!isBuildMode()) {
      console.log('[Server Action logoutAction] Auth token cookie cleared.');
    }
    return { success: true };
  } catch (error) {
    if (!isBuildMode()) {
      console.error('[Server Action logoutAction] Error clearing cookie:', error);
    }
    return { success: false };
  }
}

/**
 * Server Action to log the user in.
 * Verifies credentials, generates a token, and sets the auth cookie.
 * Auto-succeeds in development mode for easier testing.
 * @param {string} password - The password provided by the user.
 * @returns {Promise<{ success: boolean; error?: string }>}
 */
export async function loginAction(password: string): Promise<{ success: boolean; error?: string }> {
  if (!isBuildMode()) {
    console.log('[Server Action] loginAction invoked');
  }

  // Auto-succeed in development mode for easier testing
  if (process.env.NODE_ENV === 'development') {
    console.log('[Server Action] Development mode - auto-login successful');
    revalidatePath('/admin');
    return { success: true };
  }

  try {
    // Prevent client-side execution
    if (isClient()) {
      if (!isBuildMode()) {
        console.log('[Server Action] loginAction called on client - aborting.');
      }
      return { success: false, error: 'Login must be performed server-side.' };
    }

    // Authenticate using the authService
    const authResult = await authService.authenticate(password);

    if (!authResult.success || !authResult.token) {
      if (!isBuildMode()) {
        console.log(`[Server Action loginAction] Authentication failed: ${authResult.error}`);
      }
      return { success: false, error: authResult.error || 'Invalid credentials' };
    }

    // Set the cookie upon successful authentication
    const cookieStore = await cookies();
    const cookieConfig = authService.getCookieConfig();
    cookieStore.set(AUTH_COOKIE_NAME, authResult.token, cookieConfig);

    if (!isBuildMode()) {
      console.log('[Server Action loginAction] Authentication successful, cookie set.');
    }
    // Revalidate admin path to update session state without hard refresh
    revalidatePath('/admin');

    return { success: true };

  } catch (error) {
    if (!isBuildMode()) {
      console.error('[Server Action loginAction] Error during login:', error);
    }
    // Provide a generic error message to the client
    return { success: false, error: 'An unexpected error occurred during login.' };
  }
}
