'use server';

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};

export const getUser = async () => {
  const session = await getSession();
  return session?.user || null;
};

export const isAuthenticated = async () => {
  const session = await getSession();
  return !!session?.user;
};

export const requireAuth = async () => {
  const session = await getSession();
  if (!session?.user) {
    throw new Error('Authentication required');
  }
  return session.user;
};

export const signOut = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });
};

export const updateUserProfile = async (data: { name?: string; email?: string }) => {
  const user = await requireAuth();
  
  // Here you would typically update the user profile in your database
  // For now, we'll just return the user data
  return {
    ...user,
    ...data,
  };
};

export const deleteUserAccount = async () => {
  const user = await requireAuth();
  
  // Here you would typically delete the user account from your database
  // For now, we'll just sign them out
  await signOut();
  
  return { success: true };
};

export const changePassword = async (currentPassword: string, newPassword: string) => {
  const user = await requireAuth();
  
  // Here you would typically verify the current password and change it
  // For now, we'll just return success
  return { success: true };
};

export const enableTwoFactorAuth = async () => {
  const user = await requireAuth();
  
  // Here you would typically enable 2FA for the user
  // For now, we'll just return success
  return { success: true };
};

export const disableTwoFactorAuth = async () => {
  const user = await requireAuth();
  
  // Here you would typically disable 2FA for the user
  // For now, we'll just return success
  return { success: true };
};

export const getLoginHistory = async () => {
  const user = await requireAuth();
  
  // Here you would typically fetch login history from your database
  // For now, we'll return mock data
  return [
    {
      id: '1',
      timestamp: new Date().toISOString(),
      ipAddress: '192.168.1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      location: 'New York, NY',
      success: true,
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      ipAddress: '192.168.1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      location: 'New York, NY',
      success: true,
    },
  ];
};

export const revokeSession = async (sessionId: string) => {
  const user = await requireAuth();
  
  // Here you would typically revoke a specific session
  // For now, we'll just return success
  return { success: true };
};

export const getActiveSessions = async () => {
  const user = await requireAuth();
  
  // Here you would typically fetch active sessions from your database
  // For now, we'll return mock data
  return [
    {
      id: '1',
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      ipAddress: '192.168.1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      location: 'New York, NY',
      isCurrent: true,
    },
  ];
};
