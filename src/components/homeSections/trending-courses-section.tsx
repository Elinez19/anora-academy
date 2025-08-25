'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrendingCourseCard } from '@/components/courses/TrendingCourseCard';
import { TrendingCoursesSectionProps } from '@/interfaces/trending-courses';
import { TRENDING_COURSES_DEFAULTS, TRENDING_COURSES } from '@/constants/trending-courses';

export const TrendingCoursesSection: React.FC<TrendingCoursesSectionProps> = ({
  title = TRENDING_COURSES_DEFAULTS.title,
  subtitle = TRENDING_COURSES_DEFAULTS.subtitle,
  courses = TRENDING_COURSES,
  onCourseClick,
  onSaveToggle
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(courses.length / cardsPerSlide);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getCurrentSlideCourses = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return courses.slice(startIndex, startIndex + cardsPerSlide);
  };

  const handleCourseClick = (courseId: string) => {
    onCourseClick?.(courseId);
  };

  const handleSaveToggle = (courseId: string) => {
    onSaveToggle?.(courseId);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              currentSlide > 0
                ? 'text-gray-700 hover:text-primary hover:shadow-xl hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              currentSlide < totalSlides - 1
                ? 'text-gray-700 hover:text-primary hover:shadow-xl hover:scale-110' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Course Cards Container */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {getCurrentSlideCourses().map((course) => (
                <TrendingCourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.id)}
                  onSaveToggle={() => handleSaveToggle(course.id)}
                />
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCoursesSection;
