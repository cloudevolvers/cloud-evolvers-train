'use client'; // Mark as client component

import React from 'react'; // Standard React import
import { useState, FormEvent } from 'react'; // Import hooks
import { useRouter } from 'next/navigation';
import { Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/lib/auth-provider'; // Import useAuth

// Define expected shape of auth context value
interface AuthContextType {
  login?: (token: string) => void;
  // Add other properties from your context if needed
}

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();
  // Explicitly type the context value if possible, otherwise use check
  const auth = useAuth() as AuthContextType; 
  const login = auth?.login; // Safely access login

  const handleSubmit = async (e: FormEvent) => { // Use imported FormEvent
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Login failed:', data.error);
        setIsLoading(false); 
        return;
      }

      setIsAuthenticating(true);
      
      localStorage.setItem('auth_token', data.token); 

      // Update the Auth Context state immediately - check if login exists
      if (login && typeof login === 'function') {
        login(data.token); 
        console.log('[LoginPage] Auth context updated with new token.');
      } else {
        console.warn('[LoginPage] Login function not found or not a function in auth context.');
        // Consider alternative like page reload if context update isn't possible
        // window.location.href = '/dashboard'; 
        // return; 
      }

      router.push('/dashboard');
      console.log('[LoginPage] Redirecting to dashboard...');

    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticating(false); 
      setIsLoading(false); // Ensure loading is reset on error
    } 
    // Removed finally block as state is handled within try/catch
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Zap className="h-10 w-10 text-blue-500" />
            <span className="text-3xl font-bold">xEvolve</span>
          </div>
        </div>
        
        <Card className="border border-border/40 bg-background/50 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your password to access the dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-9"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading || isAuthenticating}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading || isAuthenticating}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Verifying...</span>
                  </div>
                ) : isAuthenticating ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Logging in...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-4">
          By logging in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}