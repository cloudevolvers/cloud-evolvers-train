"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Loader2 } from "lucide-react";
import { loginAction } from '@/lib/auth-actions'; // Import the Server Action

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true);

    try {
      const result = await loginAction(password); // Call the Server Action

      if (result.success) {
        console.log('Login successful, navigating to /admin...');
        // Force cache invalidation, avoid stale authentication state
        router.refresh(); // Refresh all Router Cache first
        
        // Increased delay to ensure cookie is properly set and middleware can read it
        setTimeout(() => {
          router.push('/admin'); // Then navigate
        }, 200);
      } else {
        setError(result.error || 'Login failed. Please check your password.');
      }
    } catch (err) {
      console.error("Login form error:", err);
      setError('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border/40 shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
      
      {/* Display error messages */}
      {!loading && error && (
        <Alert variant="destructive" className="mb-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Login Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {/* Use the handleLogin function for form submission */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading} // Disable input while loading
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </div>
  );
}
