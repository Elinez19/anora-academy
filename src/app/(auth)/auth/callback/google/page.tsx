"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function GoogleCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const error = searchParams.get('error');
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (error) {
      setStatus('error');
      setError('OAuth authentication was cancelled or failed');
      toast.error('Google sign-in failed');
      return;
    }

    if (!code || !state) {
      setStatus('error');
      setError('Missing authorization parameters');
      toast.error('Invalid authentication response');
      return;
    }

    // With Better Auth, the callback should automatically handle the OAuth flow
    // We just need to wait for the redirect to complete
    setStatus('success');
    toast.success('Successfully signed in with Google!');
    
    // Redirect to dashboard or intended page
    setTimeout(() => {
      router.push('/dashboard'); // or wherever you want to redirect after login
    }, 2000);
  }, [searchParams, router]);

  if (status === 'loading') {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto">
          <div className="w-8 h-8 border-4 border-mint-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-xl font-semibold text-midnight-900">Completing authentication...</h3>
        <p className="text-midnight-600">Please wait while we complete your Google sign-in</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-midnight-900">Authentication failed</h3>
        <p className="text-midnight-600">{error}</p>
        <button
          onClick={() => router.push('/auth')}
          className="text-mint-600 hover:text-mint-700 font-medium"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto">
        <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-midnight-900">Welcome!</h3>
      <p className="text-midnight-600">You have successfully signed in with Google</p>
      <p className="text-sm text-midnight-500">Redirecting to dashboard...</p>
    </div>
  );
}
