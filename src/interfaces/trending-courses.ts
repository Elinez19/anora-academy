export interface TrendingCourse {
  id: string;
  title: string;
  imagePath: string;
  tags: string[];
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  lectures: number;
  slug?: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: string | 'Free';
  isFree?: boolean;
  isSaved?: boolean;
}

export interface TrendingCoursesSectionProps {
  title?: string;
  subtitle?: string;
  courses?: TrendingCourse[];
  onCourseClick?: (courseId: string) => void;
  onSaveToggle?: (courseId: string) => void;
}
