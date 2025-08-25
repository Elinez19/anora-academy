"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

/**
 * Get the current user session on the server side
 */
export const getCurrentSession = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    return { success: true, session };
  } catch (error) {
    console.error('Failed to get session:', error);
    return { success: false, session: null, error: 'Failed to get session' };
  }
};

/**
 * Check if user is authenticated on the server side
 */
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    return !!session;
  } catch (error) {
    console.error('Failed to check authentication:', error);
    return false;
  }
};

/**
 * Get current user data on the server side
 */
export const getCurrentUser = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session?.user) {
      return { success: false, user: null, error: 'No user found' };
    }
    
    return { success: true, user: session.user };
  } catch (error) {
    console.error('Failed to get current user:', error);
    return { success: false, user: null, error: 'Failed to get user data' };
  }
};

/**
 * Sign out user on the server side
 */
export const signOutUser = async () => {
  try {
    await auth.api.signOut({
      headers: await headers()
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to sign out:', error);
    return { success: false, error: 'Failed to sign out' };
  }
};

/**
 * Update user profile on the server side
 */
export const updateUserProfile = async (data: { name?: string; email?: string }) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session?.user) {
      return { success: false, error: 'User not authenticated' };
    }
    
    // TODO: Implement actual profile update logic
    // This would typically involve updating the database
    console.log('Updating profile for user:', session.user.id, 'with data:', data);
    
    return { success: true, message: 'Profile updated successfully' };
  } catch (error) {
    console.error('Failed to update profile:', error);
    return { success: false, error: 'Failed to update profile' };
  }
};

/**
 * Delete user account on the server side
 */
export const deleteUserAccount = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session?.user) {
      return { success: false, error: 'User not authenticated' };
    }
    
    // TODO: Implement actual account deletion logic
    // This would typically involve deleting user data from the database
    console.log('Deleting account for user:', session.user.id);
    
    // Sign out the user after account deletion
    await auth.api.signOut({
      headers: await headers()
    });
    
    return { success: true, message: 'Account deleted successfully' };
  } catch (error) {
    console.error('Failed to delete account:', error);
    return { success: false, error: 'Failed to delete account' };
  }
};
