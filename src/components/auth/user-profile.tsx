'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { User, Settings, LogOut, BookOpen, Award, Heart, Crown } from 'lucide-react';

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role?: 'student' | 'instructor' | 'admin';
    membership?: 'free' | 'premium' | 'enterprise';
    coursesEnrolled?: number;
    certificatesEarned?: number;
  };
  onLogout?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
}

export default function UserProfile({ 
  user, 
  onLogout, 
  onProfileClick, 
  onSettingsClick 
}: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default user data for demo purposes
  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/images/instructor-avatar-1.jpg',
    role: 'student' as const,
    membership: 'premium' as const,
    coursesEnrolled: 12,
    certificatesEarned: 8
  };

  const currentUser = user || defaultUser;

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge variant="destructive" className="text-xs">Admin</Badge>;
      case 'instructor':
        return <Badge variant="secondary" className="text-xs">Instructor</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Student</Badge>;
    }
  };

  const getMembershipBadge = (membership: string) => {
    switch (membership) {
      case 'enterprise':
        return <Badge variant="default" className="text-xs bg-purple-600">Enterprise</Badge>;
      case 'premium':
        return <Badge variant="default" className="text-xs bg-yellow-600">Premium</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Free</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getInitials(currentUser.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{currentUser.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {currentUser.email}
            </p>
            <div className="flex items-center gap-2 mt-2">
              {getRoleBadge(currentUser.role)}
              {getMembershipBadge(currentUser.membership)}
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {/* User Stats */}
        <div className="p-4 bg-muted/50 rounded-lg mx-2 mb-2">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{currentUser.coursesEnrolled}</span>
              </div>
              <p className="text-xs text-muted-foreground">Courses</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">{currentUser.certificatesEarned}</span>
              </div>
              <p className="text-xs text-muted-foreground">Certificates</p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={onProfileClick}>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={onSettingsClick}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={onLogout}
          className="text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
