import jwt from 'jsonwebtoken';
import type { SignOptions, JwtPayload } from 'jsonwebtoken';
// Import ResponseCookie type for better typing
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

// Define the authentication cookie name (must match middleware.ts and auth-middleware.js)
export const AUTH_COOKIE_NAME = 'auth_token';

// Store sensitive data in environment variables
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'yesbb';
// Use JWT_SECRET consistent with the backend middleware
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-jwt-key'; 

// Only log password info in development AND when explicitly enabled
if (process.env.NODE_ENV === 'development' && process.env.LOCAL_DEV === 'true') {
  console.log(`[AuthService] ADMIN_PASSWORD: [REDACTED]`);
}

// Log the ADMIN_PASSWORD being used (masked) - only in development
if (process.env.NODE_ENV === 'development') {
  const MASKED_ADMIN_PASSWORD = ADMIN_PASSWORD.length > 2 ? `${ADMIN_PASSWORD.substring(0, 1)}...${ADMIN_PASSWORD.substring(ADMIN_PASSWORD.length - 1)}` : '**';
  console.log(`[AuthService] Using ADMIN_PASSWORD (masked): ${MASKED_ADMIN_PASSWORD}`);
}

// JWT token configuration
const JWT_CONFIG: SignOptions = {
  expiresIn: '24h', // 24 hours expiration
  issuer: 'xEvolve',
  audience: 'xEvolve-admin'
};

// Define an interface for our JWT token payload
interface AdminJwtPayload extends JwtPayload {
  id: string;
  role: string;
  name: string;
  email?: string;
}

// Authentication service
export const authService = {
  /**
   * Authenticate with password and generate JWT token
   * This function MUST run server-side (e.g., in an API route)
   * because it uses JWT_SECRET.
   */
  authenticate: async (password: string): Promise<{ success: boolean; token?: string; error?: string }> => {
    // Explicitly check for minimum length (at least 1 character)
    if (!password || password.length < 1) { 
      console.log('[AuthService] Password length check failed.');
      return { 
        success: false, 
        // Updated error message
        error: 'Password must be at least 1 character long' 
      };
    }

    // Log the comparison attempt
    console.log('[AuthService] Comparing provided password with ADMIN_PASSWORD.');
    if (password !== ADMIN_PASSWORD) {
      // Log the failure reason
      console.log('[AuthService] Password comparison failed.'); 
      return { 
        success: false, 
        error: 'Invalid password' 
      };
    }
    // Log success
    console.log('[AuthService] Password comparison successful.'); 

    try {
      // Check if JWT_SECRET is properly configured before signing
      if (!JWT_SECRET || JWT_SECRET === 'your-secret-jwt-key') {
        console.error('[AuthService] JWT_SECRET environment variable not set or using default.');
        throw new Error('Server configuration error: JWT secret not set.');
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: '1', 
          role: 'admin',
          name: 'Admin',
          email: process.env.NOTIFICATION_EMAIL || 'info@xevolve.io'
        },
        JWT_SECRET, // Use the server-side secret
        JWT_CONFIG
      );

      return {
        success: true,
        token
      };
    } catch (error) {
      console.error('[AuthService] Error generating token:', error);
      return {
        success: false,
        error: 'Authentication failed'
      };
    }
  },

  /**
   * Verify JWT token
   * This function MUST run server-side (e.g., in middleware or API routes)
   * because it uses JWT_SECRET.
   */
  verifyToken: (token: string): { valid: boolean; decoded?: AdminJwtPayload; error?: string } => {
    if (!token) {
      return { valid: false, error: 'No token provided' };
    }

    try {
      // Check if JWT_SECRET is properly configured before verifying
      if (!JWT_SECRET || JWT_SECRET === 'your-secret-jwt-key') {
        console.error('[AuthService] JWT_SECRET environment variable not set or using default for verification.');
        throw new Error('Server configuration error: JWT secret not set.');
      }
      
      // Verification requires the secret
      const decoded = jwt.verify(token, JWT_SECRET, {
        // Add audience/issuer validation if needed, matching JWT_CONFIG
        audience: JWT_CONFIG.audience,
        issuer: JWT_CONFIG.issuer,
      });
      
      // Type guard to check if decoded is an object with our required properties
      const isValidPayload = (payload: string | JwtPayload): payload is AdminJwtPayload => {
        return typeof payload === 'object' && payload !== null && 
               'id' in payload && 'role' in payload;
      };
      
      // Ensure the token contains required user data
      if (!decoded || !isValidPayload(decoded)) {
        return { valid: false, error: 'Token missing required user data' };
      }
      
      return { valid: true, decoded };
    } catch (error) {
      console.error('[AuthService] Token verification error:', error);
      const errorType = error.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token';
      return { valid: false, error: errorType };
    }
  },

  /**
   * Get user data from token
   * This function MUST run server-side as it relies on verifyToken.
   */
  getUserFromToken: (token: string) => {
    const { valid, decoded } = authService.verifyToken(token);
    
    if (!valid || !decoded) {
      return null;
    }

    return {
      id: decoded.id,
      role: decoded.role,
      name: decoded.name,
      email: decoded.email
    };
  },
  
  /**
   * Check if a user has admin role from token
   * Returns boolean for simple authorization checks
   */
  isAdmin: (token: string): boolean => {
    const user = authService.getUserFromToken(token);
    return !!user && user.role === 'admin';
  },
  
  /**
   * Generate cookie config for setting auth cookie
   * Uses same settings in both API routes and middleware
   * Explicitly types the return value to match ResponseCookie expectations.
   */
  getCookieConfig: (isProduction = process.env.NODE_ENV === 'production'): Partial<ResponseCookie> => {
    return {
      httpOnly: true,
      secure: isProduction,
      // Explicitly cast the conditional result to the expected literal type
      sameSite: isProduction ? 'strict' : 'lax', 
      path: '/',
      maxAge: 24 * 60 * 60 // maxAge should be in seconds, not milliseconds
    };
  }
};

// --- Remove Server Actions from this file ---
// The checkSessionAction and logoutAction functions have been moved to auth-actions.ts