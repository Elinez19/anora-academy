"use client";

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { Github } from 'lucide-react';

export function GithubTest() {
  const [isPending, startTransition] = useTransition();
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 9)]);
  };

  const handleGithubSignIn = () => {
    startTransition(async () => {
      try {
        addLog('Starting GitHub OAuth...');
        
        await authClient.signIn.social({
          provider: "github",
          callbackURL: '/',
          fetchOptions: {
            onSuccess: () => {
              addLog('GitHub OAuth successful');
              toast.success("Signed in with GitHub, you will be redirected ...");
            },
            onError: (error: unknown) => {
              const errorMessage = error instanceof Error ? error.message : 'An error occurred during sign-in';
              addLog(`GitHub OAuth error: ${errorMessage}`);
              toast.error(errorMessage);
            },
          },
        });
        
        addLog('GitHub OAuth request sent');
      } catch (error) {
        console.error('GitHub sign-in error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to sign in with GitHub';
        addLog(`Exception: ${errorMessage}`);
        toast.error('Failed to sign in with GitHub');
      }
    });
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      <Button
        variant="outline"
        onClick={handleGithubSignIn}
        disabled={isPending}
        className="w-full bg-midnight-900 text-white border-midnight-900 hover:bg-mint-600 transition-colors"
      >
        {isPending ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
            Connecting to GitHub...
          </div>
        ) : (
          <div className="flex items-center justify-center cursor-pointer">
            <Github className="w-5 h-5" fill="white" />
            <span className="ml-2">Continue with GitHub</span>
          </div>
        )}
      </Button>

      {/* Instructions */}
      <div className="p-4 bg-mint-50 border border-mint-200 rounded-lg">
        <h4 className="text-sm font-medium text-mint-800 mb-2">How to test:</h4>
        <ol className="text-xs text-mint-700 space-y-1 list-decimal list-inside">
          <li>Click "Continue with GitHub"</li>
          <li>Complete GitHub OAuth flow</li>
          <li>Check the activity logs below</li>
          <li>Monitor browser console for errors</li>
        </ol>
      </div>

      {/* Logs Section */}
      <div className="p-4 bg-midnight-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-midnight-700">Activity Logs</h4>
          <button
            onClick={clearLogs}
            className="text-xs text-midnight-500 hover:text-midnight-700"
          >
            Clear
          </button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="text-xs text-midnight-600 font-mono">
              {log}
            </div>
          ))}
          {logs.length === 0 && (
            <div className="text-xs text-midnight-400 italic">No logs yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
