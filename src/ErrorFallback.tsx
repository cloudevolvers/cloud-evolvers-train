import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

import { AlertTriangleIcon, RefreshCwIcon, CodeIcon, BugIcon } from "lucide-react";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const isDev = import.meta.env.DEV;
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-destructive/50">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              {isDev ? (
                <BugIcon className="w-8 h-8 text-destructive" />
              ) : (
                <AlertTriangleIcon className="w-8 h-8 text-destructive" />
              )}
            </div>
            <CardTitle className="text-xl text-destructive">
              {isDev ? 'Development Error Caught' : 'Application Error'}
            </CardTitle>
            {isDev && (
              <Badge variant="outline" className="w-fit mx-auto mt-2">
                <CodeIcon className="w-3 h-3 mr-1" />
                Development Mode
              </Badge>
            )}
          </CardHeader>
          
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>
                {isDev ? 'Error Details for Debugging' : 'Something went wrong'}
              </AlertTitle>
              <AlertDescription>
                {isDev 
                  ? 'The application encountered an error during development. Check the details below and your browser console for more information.'
                  : 'Something unexpected happened while running the application. Please try refreshing the page or contact support if the problem persists.'
                }
              </AlertDescription>
            </Alert>
            
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <BugIcon className="w-4 h-4" />
                Error Information:
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Message:</label>
                  <pre className="text-sm text-destructive bg-muted/50 p-3 rounded border mt-1 overflow-auto">
                    {error.message || 'Unknown error occurred'}
                  </pre>
                </div>
                
                {isDev && error.stack && (
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Stack Trace:</label>
                    <pre className="text-xs text-muted-foreground bg-muted/50 p-3 rounded border mt-1 overflow-auto max-h-48 font-mono">
                      {error.stack}
                    </pre>
                  </div>
                )}
                
                {isDev && (
                  <div className="bg-blue-950/20 border-blue-800 rounded p-3">
                    <p className="text-blue-300">
                      <strong>Development Tips:</strong>
                      <br />• Check the browser console for additional error details
                      <br />• Look for syntax errors or missing imports in the stack trace
                      <br />• Verify that all components are properly exported/imported
                      <br />• Check if any required props are missing or undefined
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={resetErrorBoundary} 
                className="flex-1"
                variant="default"
              >
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              {isDev && (
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                  className="flex-1"
                >
                  <CodeIcon className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
