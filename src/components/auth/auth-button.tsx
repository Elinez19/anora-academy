'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import UserProfile from './user-profile';

interface AuthButtonProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role?: 'student' | 'instructor' | 'admin';
    membership?: 'free' | 'premium' | 'enterprise';
    coursesEnrolled?: number;
    certificatesEarned?: number;
  };
}

export default function AuthButton({ isAuthenticated = false, user }: AuthButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthClick = () => {
    setIsLoading(true);
    router.push('/auth');
  };

  const handleLogout = () => {
    // Logout logic will be implemented later
    console.log('User logged out');
  };

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  if (isAuthenticated) {
    return (
      <UserProfile
        user={user}
        onLogout={handleLogout}
        onProfileClick={handleProfileClick}
        onSettingsClick={handleSettingsClick}
      />
    );
  }

  return (
    <Button
      variant="outline"
      onClick={handleAuthClick}
      disabled={isLoading}
      className="flex items-center gap-2"
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Sign In</span>
        </>
      )}
    </Button>
  );
}
