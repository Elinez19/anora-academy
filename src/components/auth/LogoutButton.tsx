"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function LogoutButton({ 
  variant = 'outline', 
  size = 'default', 
  className = '',
  children 
}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST'
      });
      
      if (response.ok) {
        toast.success('Signed out successfully');
        // Trigger a custom event to notify UserMenu to refresh
        window.dispatchEvent(new CustomEvent('auth:logout'));
        // Small delay to ensure the event is processed
        setTimeout(() => {
          router.push('/signin'); // redirect to signin page
          router.refresh();
        }, 100);
      } else {
        throw new Error('Failed to sign out');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to sign out');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleLogout}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
          Signing out...
        </div>
      ) : (
        <div className="flex items-center">
          <LogOut className="w-4 h-4 mr-2" />
          {children || 'Sign out'}
        </div>
      )}
    </Button>
  );
}
