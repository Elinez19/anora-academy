'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  console.log('AuthGuard: user:', user, 'isLoading:', isLoading);

  useEffect(() => {
    if (!isLoading && !user) {
      console.log('AuthGuard: Redirecting to /auth');
      // TEMPORARY: Comment out redirect for testing
      // router.push('/auth');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-mint-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    console.log('AuthGuard: No user, returning null');
    return null; // Will redirect to auth page
  }

  console.log('AuthGuard: User authenticated, rendering children');
  return <>{children}</>;
}
