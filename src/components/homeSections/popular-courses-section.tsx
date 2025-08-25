'use client';

import React, { useState } from 'react';
import { CourseCard } from '@/components/courses/CourseCard';
import { PopularCoursesSectionProps } from '@/interfaces/courses';
import { COURSE_SECTION_DEFAULTS, COURSE_CATEGORIES, POPULAR_COURSES } from '@/constants/courses';

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  title = COURSE_SECTION_DEFAULTS.title,
  subtitle = COURSE_SECTION_DEFAULTS.subtitle,
  categories = COURSE_CATEGORIES,
  courses = POPULAR_COURSES,
  onCategoryChange,
  onCourseClick,
  onFavoriteToggle
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories.find(cat => cat.isActive)?.id || categories[0]?.id
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleCourseClick = (courseId: string) => {
    onCourseClick?.(courseId);
  };

  const handleFavoriteToggle = (courseId: string) => {
    onFavoriteToggle?.(courseId);
  };

  // Filter courses based on active category
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course.id)}
              onFavoriteToggle={() => handleFavoriteToggle(course.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
