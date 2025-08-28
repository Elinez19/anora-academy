'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function AuthPage() {
  const handleGoogleSignIn = () => {
    window.location.href = '/api/auth/sign-in/google';
  };

  const handleGitHubSignIn = () => {
    window.location.href = '/api/auth/sign-in/github';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-midnight-100 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-midnight-900 mb-2">Welcome to AnoraTech Academy</h1>
        <p className="text-midnight-600">Choose an option to continue</p>
      </div>
      
      <div className="space-y-4">
        {/* OAuth Providers */}
        <Button 
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50" 
          size="lg"
        >
        <FcGoogle
          size={20}
          className="mr-2"
        />
          Continue with Google
        </Button>

        <Button 
          onClick={handleGitHubSignIn}
          className="w-full bg-gray-900 text-white hover:bg-gray-800" 
          size="lg"
        >
        <FaGithub
          size={20}
          className="mr-2"
        />
          Continue with GitHub
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <Link href="/signin" className="block">
          <Button className="w-full" size="lg" variant="outline">
            Sign In with Email
          </Button>
        </Link>
        
        <div className="pt-4">
          <Link
            href="/forgot-password"
            className="text-sm text-midnight-600 hover:text-midnight-700"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
