'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { CTABannerProps } from '@/interfaces/cta-banner';
import { CTA_BANNER_DEFAULTS } from '@/constants/cta-banner';

export const CTABanner: React.FC<CTABannerProps> = ({
  title = CTA_BANNER_DEFAULTS.title,
  subtitle = CTA_BANNER_DEFAULTS.subtitle,
  primaryButtonText = CTA_BANNER_DEFAULTS.primaryButtonText,
  secondaryButtonText = CTA_BANNER_DEFAULTS.secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage = CTA_BANNER_DEFAULTS.backgroundImage,
  showBackgroundImage = true
}) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      {showBackgroundImage && (
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onPrimaryClick}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={onSecondaryClick}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              {secondaryButtonText}
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/60 rounded-full"></div>
              <span className="text-sm font-medium">10K+ Students</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/60 rounded-full"></div>
              <span className="text-sm font-medium">500+ Courses</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white/60 rounded-full"></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
