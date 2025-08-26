import React from 'react';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-midnight-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-midnight-900 mb-2">Reset password</h1>
        <p className="text-midnight-600">Enter your email to receive reset instructions</p>
      </div>
      
      <ForgotPasswordForm />
      
      <div className="mt-6 text-center">
        <p className="text-midnight-600">
          Remember your password?{' '}
          <Link href="/signin" className="text-mint-600 hover:text-mint-700 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
