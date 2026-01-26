"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { checkSessionAction, logoutAction } from './auth-actions';

// Define the User type (ensure it matches the structure returned by checkSessionAction)
type User = {
  id: string;
  name: string;
  role: string;
  // Add email if it's part of the user object returned by checkSessionAction
  // email?: string;
} | null; // Allow null

// Define props for AuthProvider, including initial state
interface AuthProviderProps {
  children: React.ReactNode;
  initialIsAuthenticated: boolean;
  initialUser: User;
}

// Create a context for authentication
const AuthContext = createContext<{
  addAuthToRequest: (init?: RequestInit) => RequestInit;
  isAuthenticated: boolean;
  user: User; // Type updated to allow null
  logout: () => Promise<void>;
  checkSession: () => Promise<boolean>; // Keep for manual checks
}>({
  addAuthToRequest: (init) => init || {},
  isAuthenticated: false,
  user: null,
  logout: async () => {},
  checkSession: async () => false,
});

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Update AuthProvider to accept initial state props
export function AuthProvider({
  children,
  initialIsAuthenticated,
  initialUser,
}: AuthProviderProps) {
  // Initialize state directly from props
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialIsAuthenticated);
  const [user, setUser] = useState<User>(initialUser);
  // Start loading as true until client-side check confirms
  const [loading, setLoading] = useState<boolean>(true); 
  const [isClient, setIsClient] = useState(false); // Track if component is mounted client-side
  
  // Add refs to track session check calls and prevent loops
  const checkSessionCallCountRef = useRef(0);
  const lastCheckTimeRef = useRef(Date.now());
  const redirectInProgressRef = useRef(false);
  
  const router = useRouter();
  const pathname = usePathname();

  // Set isClient to true once mounted
  useEffect(() => {
    setIsClient(true);
    // Initial client-side check after mount, respecting initial state
    if (initialIsAuthenticated) {
      setLoading(false); // If initially authenticated, stop loading
    } else {
      // If initially unauthenticated, perform a client-side check
      checkSession().finally(() => setLoading(false));
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Client-side effect for handling redirects based on auth state changes
  useEffect(() => {
    // Only run redirects on the client and when not loading
    if (!isClient || loading || redirectInProgressRef.current) {
      return;
    }

    const isAdminRoute = pathname?.startsWith('/admin');
    const isAdminLoginPage = pathname === '/admin/login'; // Use the correct admin login path

    if (!isAuthenticated && isAdminRoute && !isAdminLoginPage) {
      console.log(`[AuthProvider useEffect] Client-side: Not authenticated on protected route (${pathname}), redirecting to /admin/login.`);
      redirectInProgressRef.current = true;
      router.push('/admin/login'); // Ensure this uses the correct admin login path
    }
    
    // Reset redirect flag if we are authenticated or on a non-admin/login page
    if (isAuthenticated || !isAdminRoute || isAdminLoginPage) {
       redirectInProgressRef.current = false;
    }

  }, [isAuthenticated, pathname, router, isClient, loading]); // Add isClient and loading dependencies

  // Manual session check with loop protection
  const checkSession = async (): Promise<boolean> => {
    // Protect against frequent/infinite calls
    const now = Date.now();
    const timeSinceLastCheck = now - lastCheckTimeRef.current;
    
    // If called too frequently, return cached state
    if (timeSinceLastCheck < 1000) { // 1 second minimum between checks
      console.log(`[AuthProvider] Blocking too frequent session check (${timeSinceLastCheck}ms since last check)`);
      return isAuthenticated;
    }
    
    // Update tracking references
    lastCheckTimeRef.current = now;
    checkSessionCallCountRef.current += 1;
    
    // Log warning if being called excessively
    if (checkSessionCallCountRef.current > 5) {
      console.warn(`[AuthProvider] Warning: checkSession called ${checkSessionCallCountRef.current} times`);
    }
    
    // Actual session check logic
    try {
      console.log('[AuthProvider] Manually calling checkSessionAction...');
      const session = await checkSessionAction();
      console.log('[AuthProvider] Manual checkSessionAction response:', session);

      setIsAuthenticated(session.authenticated);
      setUser(session.user);

      return session.authenticated;
    } catch (error) {
      console.error('[AuthProvider] Error calling manual checkSessionAction:', error);
      setIsAuthenticated(false);
      setUser(null);
      
      return false;
    }
  };

  // ... existing addAuthToRequest ...
  const addAuthToRequest = (init: RequestInit = {}): RequestInit => {
    return {
      ...init,
      credentials: 'include' as RequestCredentials
    };
  };

  // Logout with protection against loops
  const logout = async () => {
    if (redirectInProgressRef.current) {
      console.log('[AuthProvider] Logout called while redirect in progress, ignoring');
      return;
    }
    
    try {
      console.log('[AuthProvider] Calling logoutAction...');
      await logoutAction();
    } catch (error) {
      console.error('[AuthProvider] Error calling logoutAction:', error);
    } finally {
      // Ensure state is updated and redirect happens
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
      
      console.log('[AuthProvider] State updated post-logout, redirecting to /admin/login...');
      redirectInProgressRef.current = true;
      router.push('/admin/login'); // Changed from /admin/login to /admin/login
    }
  };

  // Reset redirect flag when pathname changes (client-side only)
  useEffect(() => {
    if (isClient) {
      redirectInProgressRef.current = false;
    }
  }, [pathname, isClient]);

  // Render loading state or null initially on server / before client mount
  if (!isClient || loading) {
     // Render children if initially authenticated, otherwise null/spinner
     // This prevents rendering protected content prematurely server-side if unauthenticated
     return initialIsAuthenticated ? children : null; // Or a loading spinner
  }

  // Client-side: If still determined to be unauthenticated on a protected route, render null while redirecting
  if (!isAuthenticated && pathname?.startsWith('/admin') && pathname !== '/admin/login') {
    // The useEffect hook handles the actual redirect
    return null; 
  }

  // Render children once client-side checks are complete and auth state is confirmed
  return (
    <AuthContext.Provider value={{
      addAuthToRequest,
      isAuthenticated,
      user,
      logout,
      checkSession
    }}>
      {children}
    </AuthContext.Provider>
  );
}
