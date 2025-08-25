'use client';

import React from 'react';
import { Heart, Clock, Building, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Course } from '@/interfaces/courses';

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
  onFavoriteToggle?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onClick,
  onFavoriteToggle
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'All level':
        return 'bg-purple-500';
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
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

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={course.imagePath}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Favorite Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle?.();
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors hover:bg-white"
        >
          <Heart 
            className={`w-5 h-5 ${course.isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
          />
        </button>
        {/* Level Badge Overlay */}
        <span className={`absolute top-3 left-3 ${getLevelColor(course.level)} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
          {course.level}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 leading-tight">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {renderStars(course.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {course.rating}/5.0
          </span>
        </div>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building className="w-4 h-4" />
            <span>{course.lectures} lectures</span>
          </div>
        </div>
      </div>
    </div>
  );
};
