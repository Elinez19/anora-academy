export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'All level' | 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  duration: string;
  lectures: number;
  isFavorite: boolean;
  imagePath: string;
  category: string;
  // Enhanced fields for course detail page
  slug?: string;
  enrolled?: number;
  lastUpdated?: string;
  language?: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  daysLeft?: number;
  deadline?: string;
  certificate?: boolean;
  whatYouLearn?: string[];
  instructor?: {
    name: string;
    avatar: string;
    bio?: string;
    expertise?: string[];
  };
  curriculum?: {
    section: string;
    lectures: {
      title: string;
      duration: string;
      type: 'video' | 'reading' | 'quiz';
    }[];
  }[];
  reviews?: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface CourseCategory {
  id: string;
  name: string;
  isActive: boolean;
}

export interface PopularCoursesSectionProps {
  title?: string;
  subtitle?: string;
  categories?: CourseCategory[];
  courses?: Course[];
  onCategoryChange?: (categoryId: string) => void;
  onCourseClick?: (courseId: string) => void;
  onFavoriteToggle?: (courseId: string) => void;
}

// New interface for comprehensive course data
export interface CourseDetail extends Course {
  slug: string;
  enrolled: number;
  lastUpdated: string;
  language: string;
  price: number;
  originalPrice: number;
  discount: number;
  daysLeft: number;
  deadline: string;
  certificate: boolean;
  whatYouLearn: string[];
  instructor: {
    name: string;
    avatar: string;
    bio: string;
    expertise: string[];
  };
  curriculum: {
    section: string;
    lectures: {
      title: string;
      duration: string;
      type: 'video' | 'reading' | 'quiz';
    }[];
  }[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
