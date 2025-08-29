"use client";

import React, { useState } from 'react';
import { X, Mail, CheckCircle, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface EmailOptInModalProps {
  onClose: () => void;
  isVisible: boolean;
}

export default function EmailOptInModal({ onClose, isVisible }: EmailOptInModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Keyboard escape key handler
  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVisible, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      
      const data = await response.json();
      setIsSubmitted(true);
      toast.success('Thank you for subscribing!');
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking on the background overlay, not the modal content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          type="button"
        >
          <X className="size-6 text-white" />
        </button>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Content and Form Column */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center lg:text-left mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Stay Updated!
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Get the latest course updates, learning tips, and exclusive content delivered to your inbox.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">Access to exclusive course content</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">Weekly learning tips and tricks</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">Early access to new courses</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-base sm:text-lg py-3 sm:py-4 px-4 border-2 border-gray-200 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="size-4 animate-spin" />
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Subscribe Now
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    )}
                  </Button>
                </form>

                {/* Footer */}
                <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center lg:text-left py-6 sm:py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Welcome aboard! 🎉
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  You&apos;re now subscribed to our newsletter. Check your email for a confirmation message.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Background Color/Image */}
          <div className="flex-1 bg-gradient-to-br from-primary via-primary/80 to-primary/60 relative order-1 lg:order-2 min-h-[200px] lg:min-h-0">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-4 sm:p-6 lg:p-8 text-center">
              <div className="max-w-xs">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto backdrop-blur-sm">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                  Join Our Learning Community
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  Connect with fellow learners, get exclusive insights, and stay ahead in your learning journey.
                </p>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
            <div className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
            <div className="hidden sm:block absolute top-1/2 right-12 w-8 h-8 bg-white/15 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
