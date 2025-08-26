"use client";

import React from 'react';
import { authClient } from '@/lib/auth-client';
import { User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function User() {
  const router = useRouter();
  
  const { 
    data: session, 
    isPending, 
    error, 
    refetch 
  } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); 
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-6 h-6 border-2 border-mint-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-600 mb-2">Error loading user data</p>
        <Button onClick={() => refetch()} variant="outline" size="sm">
          Retry
        </Button>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="p-4 text-center">
        <p className="text-midnight-600 mb-2">Not signed in</p>
        <Button onClick={() => router.push('/signin')} variant="default" size="sm">
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 border border-midnight-200 rounded-lg">
      <div className="flex items-center space-x-3 mb-4">
        {session.user.image ? (
          <Image
            src={session.user.image} 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          />
        ) : (
          <div className="w-12 h-12 bg-mint-600 rounded-full flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-white" />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-midnight-900">
            {session.user.name || 'User'}
          </h3>
          <p className="text-sm text-midnight-600">{session.user.email}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <Button 
          onClick={handleLogout} 
          variant="outline" 
          className="w-full"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
