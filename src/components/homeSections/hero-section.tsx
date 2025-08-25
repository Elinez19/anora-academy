'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check, Monitor, GraduationCap, CheckCircle } from 'lucide-react';
import { HeroSectionProps } from '@/interfaces/hero';
import { HERO_DEFAULTS, DEFAULT_STATS } from '@/constants';
import { HeroVideoDialog } from '@/components/magicui/hero-video-dialog';

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = HERO_DEFAULTS.title,
  subtitle = HERO_DEFAULTS.subtitle,
  features = HERO_DEFAULTS.features,
  primaryButtonText = HERO_DEFAULTS.primaryButtonText,
  secondaryButtonText = HERO_DEFAULTS.secondaryButtonText,
  stats = DEFAULT_STATS,
  heroImage = HERO_DEFAULTS.heroImage,
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
         <section className="relative min-h-screen bg-background">
       <div className="container mx-auto px-8 lg:px-16 py-20">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
         {/* Left Content */}
           <div className="relative z-10">
             <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                {title.split(' ').map((word: string, index: number) => (
                 <span key={index}>
                   {word === 'fingertips' ? (
                     <span className="relative">
                       {word}
                       <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/60 -z-10 rounded-full"></span>
                     </span>
                   ) : (
                     word
                   )}
                   {index < title.split(' ').length - 1 ? ' ' : ''}
                 </span>
               ))}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              {subtitle}
            </p>
            
             {/* Features list */}
             <div className="space-y-4 mb-10">
                             {features.map((feature: string, index: number) => (
                 <div key={index} className="flex items-center space-x-3">
                   <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <span className="text-foreground font-medium">{feature}</span>
                 </div>
               ))}
            </div>
            
            {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-6 mb-10">
               <Button 
                 onClick={onPrimaryClick}
                 className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
               >
                 {primaryButtonText}
               </Button>
               
               <Button 
                 variant="outline"
                 onClick={onSecondaryClick}
                 className="border-3 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
               >
                 <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                   <Play className="w-6 h-6 text-white" />
                 </div>
                 {secondaryButtonText}
               </Button>
             </div>
            
              </div>
          
             {/* Right Content - Hero Video */}
           <div className="relative">
             <div className="px-8">
               <HeroVideoDialog
                 animationStyle="from-center"
                 videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                 thumbnailSrc={heroImage}
                 thumbnailAlt="Welcome to Anora Academy"
                 className="w-full max-w-lg mx-auto"
               />
             </div>
           </div>
        </div>
        
         {/* Statistics Section */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
           {stats.map((stat, index: number) => (
             <div key={index} className={`${stat.color} p-6 rounded-lg text-center text-white shadow-lg`}>
               <div className="flex justify-center mb-3">
                 {stat.iconName === 'Monitor' && <Monitor className="w-6 h-6" />}
                 {stat.iconName === 'GraduationCap' && <GraduationCap className="w-6 h-6" />}
                 {stat.iconName === 'CheckCircle' && <CheckCircle className="w-6 h-6" />}
               </div>
               <div className="text-2xl font-bold mb-1">{stat.value}</div>
               <div className="text-sm opacity-90">{stat.label}</div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
