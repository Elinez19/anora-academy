import { TrendingCourse } from '@/interfaces/trending-courses';

export const TRENDING_COURSES_DEFAULTS = {
  title: "Our Trending Courses",
  subtitle: "Check out most 🔥 courses in the market"
};

export const TRENDING_COURSES: TrendingCourse[] = [
  {
    id: 'time-management-course',
    title: 'Time Management Mastery: Do More, Stress Less',
    imagePath: '/images/course-img-1.jpg',
    tags: ['Design', 'Beginner'],
    rating: 4.0,
    reviews: 2000,
    students: 1200,
    duration: '09h 56m',
    lectures: 21,
    slug: 'time-management-mastery-do-more-stress-less',
    instructor: {
      name: 'Frances Guerrero',
      avatar: '/images/instructor-avatar-1.jpg'
    },
    price: '$200',
    isSaved: false
  },
  {
    id: 'digital-marketing-course',
    title: 'The complete Digital Marketing Course - 8 Course in 1',
    imagePath: '/images/hero-bg.jpg',
    tags: ['Design', 'Beginner'],
    rating: 4.5,
    reviews: 6500,
    students: 6500,
    duration: '6h 56m',
    lectures: 82,
    slug: 'complete-digital-marketing-course-8-course-in-1',
    instructor: {
      name: 'Larry Lawson',
      avatar: '/images/instructor-avatar-2.jpg'
    },
    price: 'Free',
    isFree: true,
    isSaved: false
  },
  {
    id: 'angular-course',
    title: 'Angular - The Complete Guide (2021 Edition)',
    imagePath: '/images/course-img-4.jpg',
    tags: ['Development', 'All level'],
    rating: 4.0,
    reviews: 3500,
    students: 4500,
    duration: '12h 45m',
    lectures: 65,
    slug: 'angular-complete-guide-2021-edition',
    instructor: {
      name: 'Billy Vasquez',
      avatar: '/images/instructor-avatar-3.jpg'
    },
    price: '$255',
    isSaved: true
  },
  {
    id: 'react-course',
    title: 'React JS: From Basics to Advanced',
    imagePath: '/images/course-card-img-8.jpg',
    tags: ['Development', 'Intermediate'],
    rating: 4.6,
    reviews: 2800,
    students: 3200,
    duration: '20h 15m',
    lectures: 25,
    slug: 'react-js-from-basics-to-advanced',
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/images/instructor-avatar-4.jpg'
    },
    price: '$180',
    isSaved: false
  },
  {
    id: 'ui-ux-design-course',
    title: 'UI/UX Design Fundamentals',
    imagePath: '/images/course-card-img-9.jpg',
    tags: ['Design', 'Beginner'],
    rating: 4.3,
    reviews: 1800,
    students: 2100,
    duration: '15h 30m',
    lectures: 45,
    slug: 'ui-ux-design-fundamentals',
    instructor: {
      name: 'Mike Chen',
      avatar: '/images/instructor-avatar-5.jpg'
    },
    price: '$150',
    isSaved: false
  },
  {
    id: 'python-data-science-course',
    title: 'Python for Data Science',
    imagePath: '/images/course-card-img-10.jpg',
    tags: ['Development', 'Advanced'],
    rating: 4.7,
    reviews: 4200,
    students: 3800,
    duration: '25h 20m',
    lectures: 95,
    slug: 'python-for-data-science',
    instructor: {
      name: 'Emma Wilson',
      avatar: '/images/instructor-avatar-6.jpg'
    },
    price: '$220',
    isSaved: true
  }
];
