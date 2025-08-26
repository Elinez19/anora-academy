'use client';

import { useRouter } from 'next/navigation';
import HeroSection from "@/components/homeSections/hero-section";
import PopularCoursesSection from "@/components/homeSections/popular-courses-section";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import InstructorBanner from "@/components/homeSections/instructor-banner";
import TrendingCoursesSection from "@/components/homeSections/trending-courses-section";
import CTABanner from "@/components/homeSections/cta-banner";
import { COURSE_DETAILS } from '@/constants/courses';
import VideoFeatureSection from "@/components/homeSections/video-feature-section";

export default function Home() {
  const router = useRouter();

  const handlePrimaryClick = () => {
    router.push('/sign-in');
  };

  const handleCourseClick = (courseId: string) => {
    // Find course by ID and navigate to slug-based URL
    const course = COURSE_DETAILS.find(c => c.id === courseId);
    if (course?.slug) {
      router.push(`/courses/${course.slug}`);
    } else {
      // Fallback to ID-based navigation
      router.push(`/courses/${courseId}`);
    }
  };

  const handleFavoriteToggle = (courseId: string) => {
    // Handle favorite toggle logic here
    console.log('Toggle favorite for course:', courseId);
  };

  const handleSaveToggle = (courseId: string) => {
    // Handle save toggle logic here
    console.log('Toggle save for course:', courseId);
  };

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection onPrimaryClick={handlePrimaryClick} />
        <VideoFeatureSection />
        <PopularCoursesSection 
          onCourseClick={handleCourseClick}
          onFavoriteToggle={handleFavoriteToggle}
        />
        <InstructorBanner />
        <TrendingCoursesSection 
          onCourseClick={handleCourseClick}
          onSaveToggle={handleSaveToggle}
        />
        <CTABanner />
      </Suspense>
    </ErrorBoundary>
  );
}
