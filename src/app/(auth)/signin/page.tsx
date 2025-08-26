import React from 'react';
import SignInForm from '@/components/auth/SignInForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (session?.user) {
      redirect('/');
    }
  } catch (error) {
    console.error('Session check error:', error);
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-16 border-4 border-white hover:border-white/80 transition-colors">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-midnight-900 mb-2">Welcome back</h1>
        <p className="text-midnight-600">Sign in to your account to continue</p>
      </div>
      
      <SignInForm />
    </div>
  );
}
