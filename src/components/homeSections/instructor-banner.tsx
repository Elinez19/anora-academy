'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { InstructorBannerProps } from '@/interfaces/instructor';
import { INSTRUCTOR_BANNER_DEFAULTS } from '@/constants/instructor';
import Image from 'next/image';
export const InstructorBanner: React.FC<InstructorBannerProps> = ({
  title = INSTRUCTOR_BANNER_DEFAULTS.title,
  description = INSTRUCTOR_BANNER_DEFAULTS.description,
  buttonText = INSTRUCTOR_BANNER_DEFAULTS.buttonText,
  onButtonClick
}) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative bg-orange-900 rounded-2xl p-12 lg:p-16 overflow-hidden">
          {/* Decorative Background Circles */}
          <div className="absolute top-8 left-8 w-32 h-32 bg-primary/20 rounded-full opacity-60"></div>
          <div className="absolute top-4 right-1/3 w-16 h-16 bg-primary/20 rounded-full opacity-60"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Text and Button */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h2>
              <div className="space-y-2 text-lg text-white/90 mb-8">
                {Array.isArray(description) ? (
                  description.map((line, index) => (
                    <p key={index} className="leading-relaxed">
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed">{description}</p>
                )}
              </div>
              
              {/* Button below the description */}
              <Button
                onClick={onButtonClick}
                className="bg-primary border-2 border-primary text-white hover:bg-primary/80 hover:text-white px-4 py-6 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {buttonText}
              </Button>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
                 <Image src="/images/hero-bg-img.svg" alt="Instructor" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBanner;
