'use client';

import React from 'react';
import { Bookmark, Star, Clock, Grid, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TrendingCourse } from '@/interfaces/trending-courses';

interface TrendingCourseCardProps {
  course: TrendingCourse;
  onClick?: () => void;
  onSaveToggle?: () => void;
}

export const TrendingCourseCard: React.FC<TrendingCourseCardProps> = ({
  course,
  onClick,
  onSaveToggle
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default navigation to course detail page using slug
      if (course.slug) {
        router.push(`/courses/${course.slug}`);
      } else {
        // Fallback to ID-based navigation if no slug
        router.push(`/courses/${course.id}`);
      }
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  const getTagColor = (tag: string) => {
    if (tag === 'Design') return 'bg-blue-500';
    if (tag === 'Development') return 'bg-blue-500';
    if (tag === 'Beginner') return 'bg-gray-600';
    if (tag === 'Intermediate') return 'bg-blue-600';
    if (tag === 'Advanced') return 'bg-red-600';
    if (tag === 'All level') return 'bg-gray-600';
    return 'bg-gray-500';
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden min-w-[320px]"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={course.imagePath}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
        
        {/* Free Label */}
        {course.isFree && (
          <div className="absolute top-3 left-3 bg-white border border-gray-300 text-gray-800 text-xs px-2 py-1 rounded font-medium">
            Free
          </div>
        )}
        
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSaveToggle?.();
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-primary transition-colors hover:bg-white"
        >
          <Bookmark 
            className={`w-5 h-5 ${course.isSaved ? 'fill-primary text-primary' : ''}`} 
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          {course.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`${getTagColor(tag)} text-white text-xs px-3 py-1 rounded-full font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 leading-tight">
          {course.title}
        </h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {renderStars(course.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {course.rating} ({course.reviews.toLocaleString()})
          </span>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Grid className="w-4 h-4" />
            <span>{course.lectures}</span>
          </div>
        </div>

        {/* Instructor and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {course.instructor.name}
            </span>
          </div>
          <div className="text-lg font-bold text-primary">
            {course.price}
          </div>
        </div>
      </div>
    </div>
  );
};
