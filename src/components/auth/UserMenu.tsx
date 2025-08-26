"use client";

import React, { useState, useEffect } from 'react';
import { User, Settings, ChevronDown, LogOut } from 'lucide-react';
import LogoutButton from './LogoutButton';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{
    id: string;
    email?: string;
    name?: string;
    image?: string;
  } | null>(null);

  // Debug: Log user state changes
  useEffect(() => {
    console.log('UserMenu - User state changed:', user);
  }, [user]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
    
    // Listen for authentication changes
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    
    // Listen for logout events
    const handleLogout = () => {
      setUser(null);
    };
    
    // Listen for page visibility changes (when user comes back from OAuth)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAuthStatus();
      }
    };
    
    // Set up periodic auth check (every 30 seconds)
    const intervalId = setInterval(checkAuthStatus, 30000);
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('auth:logout', handleLogout);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth:logout', handleLogout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/session');
      if (response.ok) {
        const data = await response.json();
        console.log('UserMenu - Session data:', data);
        if (data.session?.user) {
          console.log('UserMenu - Setting user:', data.session.user);
          setUser(data.session.user);
        } else {
          console.log('UserMenu - No user in session');
          setUser(null);
        }
      } else {
        console.log('UserMenu - Session response not ok');
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to check auth status:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Button variant="outline" disabled className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        <span className="hidden sm:inline">Loading...</span>
      </Button>
    );
  }

  if (!user) {
    return (
      <Link href="/signin">
        <Button variant="outline" className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white hover:text-white rounded-lg">
          <span className="hidden sm:inline">Get Started</span>
        </Button>
      </Link>
    );
  }

  return (
    <div className="relative">
             <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-midnight-50 transition-colors">
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="flex items-center space-x-2"
         >
           {user.image && user.image.trim() !== '' ? (
             <Image
               src={user.image}
               alt="Profile"
               width={32}
               height={32}
               className="w-8 h-8 rounded-full object-cover"
               onError={(e) => {
                 console.log('Image failed to load:', user.image);
                 // Fallback to initials if image fails
                 const target = e.target as HTMLImageElement;
                 target.style.display = 'none';
                 target.nextElementSibling?.classList.remove('hidden');
               }}
             />
           ) : null}
           <div className={`w-8 h-8 bg-mint-600 rounded-full flex items-center justify-center ${user.image && user.image.trim() !== '' ? 'hidden' : ''}`}>
             <User className="w-4 h-4 text-white" />
           </div>
           <span className="text-midnight-900 font-medium">
             {user.name || user.email || 'User'}
           </span>
           <ChevronDown className={`w-4 h-4 text-midnight-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
         </button>
         <button
           onClick={(e) => {
             e.stopPropagation();
             checkAuthStatus();
           }}
           className="ml-2 p-1 hover:bg-midnight-100 rounded transition-colors"
           title="Refresh auth status"
         >
           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
           </svg>
         </button>
       </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-midnight-200 py-2 z-50">
                     <div className="px-4 py-3 border-b border-midnight-100">
             <div className="flex items-center gap-3">
               {user.image && user.image.trim() !== '' ? (
                 <Image
                   src={user.image}
                   alt={user.name || user.email || 'User Avatar'}
                   width={40}
                   height={40}
                   className="h-10 w-10 rounded-full object-cover"
                   onError={(e) => {
                     console.log('Dropdown image failed to load:', user.image);
                     // Fallback to initials if image fails
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
               ) : null}
               <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold ${user.image && user.image.trim() !== '' ? 'hidden' : ''}`}>
                 {user.name ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
               </div>
               <div>
                 <p className="text-sm font-medium text-foreground">
                   {user.name || user.email}
                 </p>
                 {user.name && user.email && (
                   <p className="text-xs text-muted-foreground truncate">
                     {user.email}
                   </p>
                 )}
               </div>
             </div>
           </div>
          
          <Link
            href="/profile"
            className="flex items-center px-4 py-2 text-sm text-midnight-700 hover:bg-midnight-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
          
          <Link
            href="/settings"
            className="flex items-center px-4 py-2 text-sm text-midnight-700 hover:bg-midnight-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Link>
          
          <div className="border-t border-midnight-100 mt-2 pt-2">
            <LogoutButton
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Logout
            </LogoutButton>
          </div>
        </div>
      )}
    </div>
  );
}
