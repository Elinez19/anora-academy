"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { FcGoogle } from "react-icons/fc";

import { Github, Mail, ArrowLeft, Loader2,  } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isGithubPending, setIsGithubPending] = useState(false);
  const [isGooglePending, setIsGooglePending] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const searchParams = useSearchParams();

  const handleGithubSignIn = async () => {
    setIsGithubPending(true);
    try {
      const callbackURL = searchParams.get('callbackUrl') || '/dashboard';
      
      await authClient.signIn.social({
        provider: "github",
        callbackURL,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with GitHub, you will be redirected ...");
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred during sign-in';
            toast.error(errorMessage);
          },
        },
      });
    } catch (error) {
      console.error('GitHub sign-in error:', error);
      toast.error('Failed to sign in with GitHub');
    } finally {
      setIsGithubPending(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGooglePending(true);
    try {
      const callbackURL = searchParams.get('callbackUrl') || '/dashboard';
      
      await authClient.signIn.social({
        provider: "google",
        callbackURL,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Google, you will be redirected ...");
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred during sign-in';
            toast.error(errorMessage);
          },
        },
      });
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error('Failed to sign in with Google');
    } finally {
      setIsGooglePending(false);
    }
  };

  const handleEmailSignIn = async () => {
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      await authClient.emailOtp.sendVerificationOtp({
        email: formData.email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            setShowOtpInput(true);
            setOtpSent(true);
            toast.success('OTP sent to your email');
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'Failed to send OTP';
            toast.error(errorMessage);
          },
        },
      });
    } catch (error) {
      console.error('Email sign-in error:', error);
      toast.error('Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerification = async () => {
    if (!formData.otp.trim()) {
      toast.error('Please enter the OTP');
      return;
    }

    setIsLoading(true);
    try {
      await authClient.signIn.emailOtp({
        email: formData.email,
        otp: formData.otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!');
            window.location.href = '/dashboard';
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'Invalid OTP';
            toast.error(errorMessage);
          },
        },
      });
    } catch (error) {
      console.error('OTP verification error:', error);
      toast.error('Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackToEmail = () => {
    setShowOtpInput(false);
    setOtpSent(false);
    setFormData(prev => ({ ...prev, otp: '' }));
  };

  const handleResendOtp = () => {
    handleEmailSignIn();
  };

  if (showOtpInput) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <button
            onClick={handleBackToEmail}
            className="flex items-center text-midnight-600 hover:text-midnight-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to email
          </button>
          <h2 className="text-xl font-semibold text-midnight-900 mb-2">
            Enter OTP
          </h2>
          <p className="text-midnight-600">
            We&apos;ve sent a one-time password to <strong>{formData.email}</strong>
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp" className="text-center block">One-Time Password</Label>
            <div className="flex justify-center">
              <InputOTP
                value={formData.otp}
                onChange={(value) => setFormData(prev => ({ ...prev, otp: value }))}
                maxLength={6}
                containerClassName="gap-2"
                className="justify-center"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <p className="text-xs text-midnight-500 text-center">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <Button
            onClick={handleOtpVerification}
            className="w-full"
            disabled={isLoading || !formData.otp.trim()}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </Button>

          <div className="text-center">
            <p className="text-sm text-midnight-600 mb-2">
              Didn&apos;t receive the code?
            </p>
            <button
              onClick={handleResendOtp}
              disabled={isLoading}
              className="text-mint-600 hover:text-mint-700 text-sm font-medium disabled:opacity-50"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6"> 
      <Button
        variant="outline"
        onClick={handleGithubSignIn}
        disabled={isGithubPending}
        className="w-full bg-black text-white border-black hover:bg-black/80 transition-colors rounded-lg hover:text-white shadow-lg cursor-pointer"
      >
        {isGithubPending ? (
          <div className="flex items-center justify-center">
            <Loader2 className="size-4 animate-spin" />
            Connecting to GitHub...
          </div>
        ) : (
          <div className="flex items-center justify-center cursor-pointer">
            <Github className="w-5 h-4" fill="white" />
            <span className="ml-2">Continue with GitHub</span>
          </div>
        )}
      </Button>

      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        disabled={isGooglePending}
        className="w-full bg-orange-700 text-white border-orange-500 hover:bg-orange-600 transition-colors rounded-lg hover:text-white shadow-lg cursor-pointer"
      >
        {isGooglePending ? (
          <div className="flex items-center justify-center">
            <Loader2 className="size-4 animate-spin" />
            Connecting to Google...
          </div>
        ) : (
          <div className="flex items-center justify-center cursor-pointer">
            <FcGoogle className="w-6 h-6" fill="white" />
            <span className="ml-2">Continue with Google</span>
          </div>
        )}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-midnight-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-midnight-500">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleEmailSignIn(); }} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading || !formData.email.trim()}
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="size-4 animate-spin" />
              Sending email...
            </div>
          ) : (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Continue with email
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}
