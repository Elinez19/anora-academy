"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { Mail, ArrowLeft, RefreshCw } from 'lucide-react';

export function EmailOTPTest() {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 9)]);
  };

  const handleEmailSignIn = async () => {
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    addLog(`Sending OTP to ${formData.email}...`);
    
    try {
      const result = await authClient.emailOTP.sendVerificationOTP({
        email: formData.email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            setShowOtpInput(true);
            setOtpSent(true);
            toast.success('OTP sent to your email');
            addLog('OTP sent successfully');
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'Failed to send OTP';
            toast.error(errorMessage);
            addLog(`Error sending OTP: ${errorMessage}`);
          },
        },
      });
      
      addLog(`API response: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error('Email sign-in error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send OTP';
      toast.error(errorMessage);
      addLog(`Exception: ${errorMessage}`);
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
    addLog(`Verifying OTP: ${formData.otp}...`);
    
    try {
      const result = await authClient.signIn.emailOtp({
        email: formData.email,
        otp: formData.otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!');
            addLog('OTP verified successfully - user signed in');
          },
          onError: (error: unknown) => {
            const errorMessage = error instanceof Error ? error.message : 'Invalid OTP';
            toast.error(errorMessage);
            addLog(`Error verifying OTP: ${errorMessage}`);
          },
        },
      });
      
      addLog(`Sign-in response: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error('OTP verification error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to verify OTP';
      toast.error(errorMessage);
      addLog(`Exception: ${errorMessage}`);
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
    addLog('Returned to email input');
  };

  const handleResendOtp = () => {
    addLog('Resending OTP...');
    handleEmailSignIn();
  };

  const clearLogs = () => {
    setLogs([]);
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
          <h3 className="text-lg font-semibold text-midnight-900 mb-2">
            Enter OTP
          </h3>
          <p className="text-midnight-600">
            We&apos;ve sent a one-time password to <strong>{formData.email}</strong>
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">One-Time Password</Label>
            <Input
              id="otp"
              name="otp"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={formData.otp}
              onChange={handleChange}
              maxLength={6}
              className="text-center text-lg tracking-widest"
              required
            />
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

        {/* Logs Section */}
        <div className="mt-6 p-4 bg-midnight-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-midnight-700">Activity Logs</h4>
            <button
              onClick={clearLogs}
              className="text-xs text-midnight-500 hover:text-midnight-700"
            >
              Clear
            </button>
          </div>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="text-xs text-midnight-600 font-mono">
                {log}
              </div>
            ))}
            {logs.length === 0 && (
              <div className="text-xs text-midnight-400 italic">No logs yet</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={(e) => { e.preventDefault(); handleEmailSignIn(); }} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
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
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending OTP...
            </div>
          ) : (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Send OTP
            </div>
          )}
        </Button>
      </form>

      {/* Instructions */}
      <div className="p-4 bg-mint-50 border border-mint-200 rounded-lg">
        <h4 className="text-sm font-medium text-mint-800 mb-2">How to test:</h4>
        <ol className="text-xs text-mint-700 space-y-1 list-decimal list-inside">
          <li>Enter your email address</li>
          <li>Click &quot;Send OTP&quot;</li>
          <li>Check the console for the OTP (in development)</li>
          <li>Enter the OTP to sign in</li>
          <li>Monitor the activity logs below</li>
        </ol>
      </div>

      {/* Logs Section */}
      <div className="p-4 bg-midnight-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-midnight-700">Activity Logs</h4>
          <button
            onClick={clearLogs}
            className="text-xs text-midnight-500 hover:text-midnight-700"
          >
            Clear
          </button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="text-xs text-midnight-600 font-mono">
              {log}
            </div>
          ))}
          {logs.length === 0 && (
            <div className="text-xs text-midnight-400 italic">No logs yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
