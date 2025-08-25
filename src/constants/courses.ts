import { Course, CourseCategory, CourseDetail } from '@/interfaces/courses';

export const COURSE_CATEGORIES: CourseCategory[] = [
  { id: 'all', name: 'All', isActive: true },
  { id: 'web-design', name: 'Web Design', isActive: false },
  { id: 'development', name: 'Development', isActive: false },
  { id: 'graphic-design', name: 'Graphic Design', isActive: false },
  { id: 'marketing', name: 'Marketing', isActive: false },
  { id: 'finance', name: 'Finance', isActive: false }
];

export const POPULAR_COURSES: Course[] = [
  {
    id: 'sketch-course',
    title: 'Sketch from A to Z: for app designer',
    description: 'Master the complete workflow from idea to Sketch to interactive prototype.',
    level: 'All level',
    rating: 4.8,
    duration: '12h 56m',
    lectures: 15,
    isFavorite: false,
    imagePath: '/images/course-card-img-1.jpg',
    category: 'web-design',
    slug: 'sketch-from-a-to-z-for-app-designer'
  },
  {
    id: 'photoshop-course',
    title: 'Photoshop CC 2020: Complete Photoshop Training',
    description: 'Learn Photoshop CC 2020 from scratch and master the most powerful image editing software.',
    level: 'Beginner',
    rating: 4.7,
    duration: '18h 30m',
    lectures: 22,
    isFavorite: true,
    imagePath: '/images/course-card-img-2.jpg',
    category: 'graphic-design',
    slug: 'photoshop-cc-2020-complete-photoshop-training'
  },
  {
    id: 'figma-course',
    title: 'Figma UI UX Design Essentials',
    description: 'Learn Figma from scratch and master the essential tools for UI/UX design.',
    level: 'Beginner',
    rating: 4.9,
    duration: '14h 20m',
    lectures: 18,
    isFavorite: false,
    imagePath: '/images/course-card-img-3.jpg',
    category: 'web-design',
    slug: 'figma-ui-ux-design-essentials'
  },
  {
    id: 'react-course',
    title: 'React JS: From Basics to Advanced',
    description: 'Learn React.js fundamentals and build real-world applications.',
    level: 'Intermediate',
    rating: 4.6,
    duration: '20h 15m',
    lectures: 25,
    isFavorite: true,
    imagePath: '/images/course-card-img-4.jpg',
    category: 'development',
    slug: 'react-js-from-basics-to-advanced'
  },
  {
    id: 'html-css-course',
    title: 'HTML5 & CSS3: Complete Web Development',
    description: 'Master HTML5 and CSS3 to create modern, responsive websites. Learn semantic markup, CSS Grid, Flexbox, and responsive design principles.',
    level: 'Beginner',
    rating: 4.5,
    duration: '16h 45m',
    lectures: 20,
    isFavorite: false,
    imagePath: '/images/course-card-img-5.jpg',
    category: 'development',
    slug: 'html5-css3-complete-web-development'
  },
  {
    id: 'css3-advanced-course',
    title: 'CSS3: Advanced Styling Techniques',
    description: 'Take your CSS skills to the next level with advanced styling techniques, animations, and modern CSS features.',
    level: 'Intermediate',
    rating: 4.4,
    duration: '12h 30m',
    lectures: 16,
    isFavorite: false,
    imagePath: '/images/course-card-img-6.jpg',
    category: 'development',
    slug: 'css3-advanced-styling-techniques'
  },
  {
    id: 'invision-prototyping-course',
    title: 'InVision: Prototyping Masterclass',
    description: 'Master InVision for creating interactive prototypes and design systems. Learn advanced prototyping techniques and collaboration features.',
    level: 'Advanced',
    rating: 4.3,
    duration: '10h 20m',
    lectures: 12,
    isFavorite: true,
    imagePath: '/images/course-card-img-7.jpg',
    category: 'web-design',
    slug: 'invision-prototyping-masterclass'
  },
  {
    id: 'javascript-es6-course',
    title: 'JavaScript ES6+: Modern Development',
    description: 'Master modern JavaScript ES6+ features and best practices. Learn async programming, modules, and modern development patterns.',
    level: 'Intermediate',
    rating: 4.7,
    duration: '22h 10m',
    lectures: 28,
    isFavorite: false,
    imagePath: '/images/course-card-img-8.jpg',
    category: 'development',
    slug: 'javascript-es6-modern-development'
  }
];

// Comprehensive course details for the course detail page
export const COURSE_DETAILS: CourseDetail[] = [
  {
    id: 'sketch-course',
    title: 'Sketch from A to Z: for app designer',
    description: 'Master the complete workflow from idea to Sketch to interactive prototype. This comprehensive course covers everything from basic tools to advanced techniques for creating stunning app designs.',
    level: 'All level',
    rating: 4.8,
    duration: '12h 56m',
    lectures: 15,
    isFavorite: false,
    imagePath: '/images/course-card-img-1.jpg',
    category: 'web-design',
    slug: 'sketch-from-a-to-z-for-app-designer',
    enrolled: 8500,
    lastUpdated: '12/2023',
    language: 'English',
    price: 89,
    originalPrice: 199,
    discount: 55,
    daysLeft: 7,
    deadline: 'Dec 15 2023',
    certificate: true,
    whatYouLearn: [
      'Master Sketch fundamentals and interface',
      'Create wireframes and prototypes',
      'Design for iOS and Android apps',
      'Use Sketch plugins and automation',
      'Export assets for development',
      'Collaborate with team members',
      'Create design systems and libraries',
      'Optimize designs for performance'
    ],
    instructor: {
      name: 'Sarah Chen',
      avatar: '/images/instructor-avatar-1.jpg',
      bio: 'Senior UI/UX Designer with 8+ years of experience at top tech companies. Specialized in mobile app design and design systems.',
      expertise: ['UI/UX Design', 'Mobile Design', 'Design Systems', 'Prototyping']
    },
    curriculum: [
      {
        section: 'Getting Started with Sketch',
        lectures: [
          { title: 'Introduction to Sketch', duration: '15:30', type: 'video' },
          { title: 'Installing and Setting Up', duration: '12:45', type: 'video' },
          { title: 'Interface Overview', duration: '18:20', type: 'video' },
          { title: 'Basic Tools and Shortcuts', duration: '22:10', type: 'video' }
        ]
      },
      {
        section: 'Design Fundamentals',
        lectures: [
          { title: 'Understanding Grid Systems', duration: '25:15', type: 'video' },
          { title: 'Typography and Text Styles', duration: '20:30', type: 'video' },
          { title: 'Color Theory and Palettes', duration: '18:45', type: 'video' },
          { title: 'Shapes and Vector Graphics', duration: '16:20', type: 'video' }
        ]
      },
      {
        section: 'App Design Process',
        lectures: [
          { title: 'User Research and Personas', duration: '30:00', type: 'video' },
          { title: 'Information Architecture', duration: '28:15', type: 'video' },
          { title: 'Wireframing Techniques', duration: '35:20', type: 'video' },
          { title: 'High-Fidelity Mockups', duration: '40:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Alex Johnson',
        rating: 5,
        comment: 'Excellent course! Sarah explains everything clearly and the practical exercises are very helpful.',
        date: '2023-11-15'
      },
      {
        id: '2',
        user: 'Maria Garcia',
        rating: 5,
        comment: 'Perfect for beginners. I went from knowing nothing to creating professional app designs.',
        date: '2023-11-10'
      },
      {
        id: '3',
        user: 'David Kim',
        rating: 4,
        comment: 'Great content and instructor. Would love to see more advanced techniques covered.',
        date: '2023-11-05'
      }
    ],
    faqs: [
      {
        question: 'Do I need any prior design experience?',
        answer: 'No prior experience is required. This course starts from the basics and gradually builds up to advanced concepts.'
      },
      {
        question: 'What software do I need?',
        answer: 'You\'ll need Sketch (Mac only) or Sketch for Web. A free trial is available for both.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course content, including all future updates.'
      }
    ]
  },
  {
    id: 'photoshop-course',
    title: 'Photoshop CC 2020: Complete Photoshop Training',
    description: 'Learn Photoshop CC 2020 from scratch and master the most powerful image editing software. From basic tools to advanced techniques, this course covers everything you need to know.',
    level: 'Beginner',
    rating: 4.7,
    duration: '18h 30m',
    lectures: 22,
    isFavorite: true,
    imagePath: '/images/course-card-img-2.jpg',
    category: 'graphic-design',
    slug: 'photoshop-cc-2020-complete-photoshop-training',
    enrolled: 12500,
    lastUpdated: '10/2023',
    language: 'English',
    price: 129,
    originalPrice: 299,
    discount: 57,
    daysLeft: 12,
    deadline: 'Dec 20 2023',
    certificate: true,
    whatYouLearn: [
      'Master Photoshop interface and tools',
      'Understand layers and masks',
      'Create stunning photo manipulations',
      'Design graphics and layouts',
      'Use advanced selection techniques',
      'Work with typography and text effects',
      'Master color correction and grading',
      'Create digital paintings and illustrations'
    ],
    instructor: {
      name: 'Michael Rodriguez',
      avatar: '/images/instructor-avatar-2.jpg',
      bio: 'Professional photographer and graphic designer with 12+ years of experience. Adobe Certified Instructor and creative director.',
      expertise: ['Photography', 'Graphic Design', 'Photo Editing', 'Digital Art']
    },
    curriculum: [
      {
        section: 'Photoshop Basics',
        lectures: [
          { title: 'Welcome to Photoshop', duration: '20:00', type: 'video' },
          { title: 'Interface and Workspace', duration: '25:15', type: 'video' },
          { title: 'Essential Tools Overview', duration: '30:20', type: 'video' },
          { title: 'File Management', duration: '15:45', type: 'video' }
        ]
      },
      {
        section: 'Working with Layers',
        lectures: [
          { title: 'Understanding Layers', duration: '28:30', type: 'video' },
          { title: 'Layer Styles and Effects', duration: '35:15', type: 'video' },
          { title: 'Blending Modes', duration: '32:20', type: 'video' },
          { title: 'Layer Masks', duration: '40:10', type: 'video' }
        ]
      },
      {
        section: 'Advanced Techniques',
        lectures: [
          { title: 'Advanced Selections', duration: '45:30', type: 'video' },
          { title: 'Photo Manipulation', duration: '50:15', type: 'video' },
          { title: 'Color Grading', duration: '38:45', type: 'video' },
          { title: 'Typography and Text Effects', duration: '42:20', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Jennifer Lee',
        rating: 5,
        comment: 'Michael is an amazing instructor. His explanations are clear and the examples are practical.',
        date: '2023-11-12'
      },
      {
        id: '2',
        user: 'Robert Wilson',
        rating: 4,
        comment: 'Great course for beginners. I learned a lot about Photoshop fundamentals.',
        date: '2023-11-08'
      },
      {
        id: '3',
        user: 'Lisa Thompson',
        rating: 5,
        comment: 'Excellent content and very well structured. Highly recommended!',
        date: '2023-11-03'
      }
    ],
    faqs: [
      {
        question: 'Which version of Photoshop do I need?',
        answer: 'This course is designed for Photoshop CC 2020, but the concepts apply to newer versions as well.'
      },
      {
        question: 'Is this suitable for complete beginners?',
        answer: 'Yes, the course starts from the very basics and gradually progresses to advanced techniques.'
      },
      {
        question: 'Do I need a graphics tablet?',
        answer: 'While not required, a graphics tablet will enhance your learning experience, especially for drawing and painting.'
      }
    ]
  },
  {
    id: 'figma-course',
    title: 'Figma UI UX Design Essentials',
    description: 'Learn Figma from scratch and master the essential tools for UI/UX design. Create beautiful interfaces, prototypes, and collaborate with your team effectively.',
    level: 'Beginner',
    rating: 4.9,
    duration: '14h 20m',
    lectures: 18,
    isFavorite: false,
    imagePath: '/images/course-card-img-3.jpg',
    category: 'web-design',
    slug: 'figma-ui-ux-design-essentials',
    enrolled: 9800,
    lastUpdated: '11/2023',
    language: 'English',
    price: 79,
    originalPrice: 179,
    discount: 56,
    daysLeft: 5,
    deadline: 'Dec 10 2023',
    certificate: true,
    whatYouLearn: [
      'Master Figma interface and tools',
      'Create UI components and design systems',
      'Build interactive prototypes',
      'Use Figma plugins effectively',
      'Collaborate with team members',
      'Design responsive layouts',
      'Create design tokens and variables',
      'Export assets for development'
    ],
    instructor: {
      name: 'Emma Davis',
      avatar: '/images/instructor-avatar-3.jpg',
      bio: 'Senior Product Designer with 10+ years of experience. Former design lead at Google and Figma power user.',
      expertise: ['UI/UX Design', 'Product Design', 'Design Systems', 'Prototyping']
    },
    curriculum: [
      {
        section: 'Figma Fundamentals',
        lectures: [
          { title: 'Introduction to Figma', duration: '18:30', type: 'video' },
          { title: 'Getting Started', duration: '22:15', type: 'video' },
          { title: 'Interface and Tools', duration: '25:40', type: 'video' },
          { title: 'Basic Shapes and Elements', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Design Principles',
        lectures: [
          { title: 'UI Design Fundamentals', duration: '28:15', type: 'video' },
          { title: 'Typography and Text', duration: '24:30', type: 'video' },
          { title: 'Color Theory and Palettes', duration: '26:45', type: 'video' },
          { title: 'Layout and Grid Systems', duration: '30:20', type: 'video' }
        ]
      },
      {
        section: 'Advanced Features',
        lectures: [
          { title: 'Components and Instances', duration: '35:10', type: 'video' },
          { title: 'Auto Layout', duration: '32:25', type: 'video' },
          { title: 'Prototyping Basics', duration: '38:15', type: 'video' },
          { title: 'Collaboration Features', duration: '25:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Chris Anderson',
        rating: 5,
        comment: 'Emma is an excellent instructor. The course is well-structured and covers everything I needed.',
        date: '2023-11-14'
      },
      {
        id: '2',
        user: 'Amanda White',
        rating: 5,
        comment: 'Perfect for beginners. I learned Figma quickly and can now create professional designs.',
        date: '2023-11-09'
      },
      {
        id: '3',
        user: 'Daniel Brown',
        rating: 4,
        comment: 'Great course with practical examples. Would recommend to anyone learning Figma.',
        date: '2023-11-05'
      }
    ],
    faqs: [
      {
        question: 'Do I need any design experience?',
        answer: 'No prior experience is required. The course covers design fundamentals along with Figma tools.'
      },
      {
        question: 'Is Figma free to use?',
        answer: 'Figma has a free plan with limited features. For advanced features, you\'ll need a paid plan.'
      },
      {
        question: 'Can I use this on Windows?',
        answer: 'Yes, Figma works on all platforms through the web browser or desktop app.'
      }
    ]
  },
  {
    id: 'react-course',
    title: 'React JS: From Basics to Advanced',
    description: 'Master React.js from fundamentals to advanced concepts. Build real-world applications, understand hooks, context, and modern React patterns.',
    level: 'Intermediate',
    rating: 4.6,
    duration: '20h 15m',
    lectures: 25,
    isFavorite: true,
    imagePath: '/images/course-card-img-4.jpg',
    category: 'development',
    slug: 'react-js-from-basics-to-advanced',
    enrolled: 15600,
    lastUpdated: '09/2023',
    language: 'English',
    price: 149,
    originalPrice: 299,
    discount: 50,
    daysLeft: 15,
    deadline: 'Dec 25 2023',
    certificate: true,
    whatYouLearn: [
      'Master React fundamentals and JSX',
      'Understand component lifecycle and hooks',
      'Build stateful and functional components',
      'Implement routing with React Router',
      'Manage state with Context and Redux',
      'Create custom hooks and utilities',
      'Build and deploy React applications',
      'Implement testing with Jest and React Testing Library'
    ],
    instructor: {
      name: 'Alex Thompson',
      avatar: '/images/instructor-avatar-4.jpg',
      bio: 'Senior Full-Stack Developer with 8+ years of experience. React core contributor and tech lead at major tech companies.',
      expertise: ['React', 'JavaScript', 'TypeScript', 'Full-Stack Development']
    },
    curriculum: [
      {
        section: 'React Fundamentals',
        lectures: [
          { title: 'Introduction to React', duration: '25:00', type: 'video' },
          { title: 'Setting Up Development Environment', duration: '20:15', type: 'video' },
          { title: 'JSX and Components', duration: '30:20', type: 'video' },
          { title: 'Props and State', duration: '35:10', type: 'video' }
        ]
      },
      {
        section: 'Advanced Concepts',
        lectures: [
          { title: 'Hooks Deep Dive', duration: '40:15', type: 'video' },
          { title: 'Context API', duration: '32:30', type: 'video' },
          { title: 'Performance Optimization', duration: '38:45', type: 'video' },
          { title: 'Error Boundaries', duration: '28:20', type: 'video' }
        ]
      },
      {
        section: 'Real-World Projects',
        lectures: [
          { title: 'Building a Todo App', duration: '45:30', type: 'video' },
          { title: 'E-commerce Dashboard', duration: '50:15', type: 'video' },
          { title: 'Authentication System', duration: '42:20', type: 'video' },
          { title: 'Deployment and CI/CD', duration: '35:10', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Sarah Wilson',
        rating: 5,
        comment: 'Alex is an incredible instructor. The course covers everything from basics to advanced React patterns.',
        date: '2023-11-18'
      },
      {
        id: '2',
        user: 'Mike Johnson',
        rating: 4,
        comment: 'Great course structure and practical examples. Helped me level up my React skills significantly.',
        date: '2023-11-12'
      },
      {
        id: '3',
        user: 'Lisa Chen',
        rating: 5,
        comment: 'Excellent content and real-world projects. Highly recommended for React developers.',
        date: '2023-11-08'
      }
    ],
    faqs: [
      {
        question: 'Do I need JavaScript experience?',
        answer: 'Yes, basic JavaScript knowledge is required. The course covers ES6+ features but assumes familiarity with JS fundamentals.'
      },
      {
        question: 'Which React version is covered?',
        answer: 'The course covers React 18 with modern hooks and patterns. All concepts are forward-compatible.'
      },
      {
        question: 'Are there coding exercises?',
        answer: 'Yes, the course includes hands-on projects and coding challenges to reinforce learning.'
      }
    ]
  },
  {
    id: 'html-css-course',
    title: 'HTML5 & CSS3: Complete Web Development',
    description: 'Master HTML5 and CSS3 to create modern, responsive websites. Learn semantic markup, CSS Grid, Flexbox, and responsive design principles.',
    level: 'Beginner',
    rating: 4.5,
    duration: '16h 45m',
    lectures: 20,
    isFavorite: false,
    imagePath: '/images/course-card-img-5.jpg',
    category: 'development',
    slug: 'html5-css3-complete-web-development',
    enrolled: 11200,
    lastUpdated: '08/2023',
    language: 'English',
    price: 69,
    originalPrice: 149,
    discount: 54,
    daysLeft: 18,
    deadline: 'Dec 28 2023',
    certificate: true,
    whatYouLearn: [
      'Master HTML5 semantic markup',
      'Create responsive layouts with CSS Grid and Flexbox',
      'Implement modern CSS animations and transitions',
      'Build mobile-first responsive designs',
      'Optimize websites for performance and accessibility',
      'Use CSS custom properties and modern features',
      'Create cross-browser compatible layouts',
      'Deploy websites to production environments'
    ],
    instructor: {
      name: 'David Kim',
      avatar: '/images/instructor-avatar-5.jpg',
      bio: 'Frontend Developer and CSS expert with 10+ years of experience. Specialized in modern web standards and responsive design.',
      expertise: ['HTML5', 'CSS3', 'Responsive Design', 'Web Standards']
    },
    curriculum: [
      {
        section: 'HTML5 Fundamentals',
        lectures: [
          { title: 'Introduction to HTML5', duration: '18:30', type: 'video' },
          { title: 'Semantic HTML Elements', duration: '22:15', type: 'video' },
          { title: 'Forms and Input Types', duration: '25:40', type: 'video' },
          { title: 'HTML5 APIs and Features', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'CSS3 Mastery',
        lectures: [
          { title: 'CSS Fundamentals and Selectors', duration: '28:15', type: 'video' },
          { title: 'Box Model and Layout', duration: '24:30', type: 'video' },
          { title: 'CSS Grid Layout', duration: '26:45', type: 'video' },
          { title: 'Flexbox Layout', duration: '30:20', type: 'video' }
        ]
      },
      {
        section: 'Responsive Design',
        lectures: [
          { title: 'Mobile-First Design', duration: '35:10', type: 'video' },
          { title: 'Media Queries', duration: '32:25', type: 'video' },
          { title: 'Responsive Images', duration: '38:15', type: 'video' },
          { title: 'Testing and Debugging', duration: '25:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Emily Rodriguez',
        rating: 5,
        comment: 'David explains complex CSS concepts in a very clear way. The responsive design section was particularly helpful.',
        date: '2023-11-20'
      },
      {
        id: '2',
        user: 'James Wilson',
        rating: 4,
        comment: 'Great course for beginners. I learned a lot about modern CSS and HTML5 features.',
        date: '2023-11-15'
      },
      {
        id: '3',
        user: 'Sophie Chen',
        rating: 5,
        comment: 'Excellent course structure and practical examples. Highly recommended for web developers.',
        date: '2023-11-10'
      }
    ],
    faqs: [
      {
        question: 'Do I need any programming experience?',
        answer: 'No prior experience is required. This course starts from the very basics of HTML and CSS.'
      },
      {
        question: 'Which browsers are supported?',
        answer: 'The course covers modern browsers and includes fallbacks for older browser support.'
      },
      {
        question: 'Will I learn responsive design?',
        answer: 'Yes, responsive design is a major focus of the course with dedicated sections on mobile-first design.'
      }
    ]
  },
  {
    id: 'css3-advanced-course',
    title: 'CSS3: Advanced Styling Techniques',
    description: 'Take your CSS skills to the next level with advanced styling techniques, animations, and modern CSS features.',
    level: 'Intermediate',
    rating: 4.4,
    duration: '12h 30m',
    lectures: 16,
    isFavorite: false,
    imagePath: '/images/course-card-img-6.jpg',
    category: 'development',
    slug: 'css3-advanced-styling-techniques',
    enrolled: 8900,
    lastUpdated: '07/2023',
    language: 'English',
    price: 89,
    originalPrice: 179,
    discount: 50,
    daysLeft: 22,
    deadline: 'Dec 30 2023',
    certificate: true,
    whatYouLearn: [
      'Master advanced CSS selectors and specificity',
      'Create complex animations and transitions',
      'Use CSS custom properties and variables',
      'Implement advanced layout techniques',
      'Create stunning visual effects with CSS',
      'Optimize CSS for performance',
      'Use modern CSS features and APIs',
      'Build complex UI components'
    ],
    instructor: {
      name: 'Rachel Green',
      avatar: '/images/instructor-avatar-6.jpg',
      bio: 'Senior Frontend Developer and CSS specialist with 12+ years of experience. Expert in modern CSS techniques and performance optimization.',
      expertise: ['Advanced CSS', 'CSS Animations', 'Performance Optimization', 'UI Components']
    },
    curriculum: [
      {
        section: 'Advanced Selectors and Specificity',
        lectures: [
          { title: 'CSS Selector Mastery', duration: '20:30', type: 'video' },
          { title: 'Understanding Specificity', duration: '18:45', type: 'video' },
          { title: 'Pseudo-classes and Pseudo-elements', duration: '22:15', type: 'video' },
          { title: 'Attribute Selectors', duration: '16:20', type: 'video' }
        ]
      },
      {
        section: 'Advanced Layout Techniques',
        lectures: [
          { title: 'CSS Grid Advanced Patterns', duration: '25:30', type: 'video' },
          { title: 'Flexbox Deep Dive', duration: '28:15', type: 'video' },
          { title: 'CSS Shapes and Clip-path', duration: '24:40', type: 'video' },
          { title: 'Advanced Positioning', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Animations and Effects',
        lectures: [
          { title: 'CSS Animations Mastery', duration: '30:10', type: 'video' },
          { title: 'Advanced Transitions', duration: '32:25', type: 'video' },
          { title: 'Transform and 3D Effects', duration: '35:15', type: 'video' },
          { title: 'Performance Optimization', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Michael Brown',
        rating: 4,
        comment: 'Rachel is an excellent instructor. The advanced CSS techniques covered are very practical.',
        date: '2023-11-18'
      },
      {
        id: '2',
        user: 'Lisa Davis',
        rating: 5,
        comment: 'Great course for intermediate developers. I learned many new CSS tricks and techniques.',
        date: '2023-11-12'
      },
      {
        id: '3',
        user: 'Tom Anderson',
        rating: 4,
        comment: 'The animation section was fantastic. Very comprehensive coverage of advanced CSS features.',
        date: '2023-11-08'
      }
    ],
    faqs: [
      {
        question: 'What CSS knowledge do I need?',
        answer: 'You should have a solid understanding of basic CSS concepts before taking this advanced course.'
      },
      {
        question: 'Are modern CSS features covered?',
        answer: 'Yes, the course covers the latest CSS features including Grid, Flexbox, and CSS custom properties.'
      },
      {
        question: 'Will I learn about performance?',
        answer: 'Yes, there\'s a dedicated section on CSS performance optimization and best practices.'
      }
    ]
  },
  {
    id: 'invision-prototyping-course',
    title: 'InVision: Prototyping Masterclass',
    description: 'Master InVision for creating interactive prototypes and design systems. Learn advanced prototyping techniques and collaboration features.',
    level: 'Advanced',
    rating: 4.3,
    duration: '10h 20m',
    lectures: 12,
    isFavorite: true,
    imagePath: '/images/course-card-img-7.jpg',
    category: 'web-design',
    slug: 'invision-prototyping-masterclass',
    enrolled: 7200,
    lastUpdated: '06/2023',
    language: 'English',
    price: 119,
    originalPrice: 249,
    discount: 52,
    daysLeft: 25,
    deadline: 'Jan 05 2024',
    certificate: true,
    whatYouLearn: [
      'Master InVision Studio and DSM',
      'Create interactive prototypes with animations',
      'Build and manage design systems',
      'Collaborate effectively with team members',
      'Integrate with design tools and workflows',
      'Create responsive prototypes',
      'Use advanced prototyping features',
      'Implement user testing and feedback'
    ],
    instructor: {
      name: 'Carlos Martinez',
      avatar: '/images/instructor-avatar-7.jpg',
      bio: 'Senior Product Designer and InVision expert with 15+ years of experience. Former InVision team member and design systems specialist.',
      expertise: ['InVision', 'Design Systems', 'Prototyping', 'Product Design']
    },
    curriculum: [
      {
        section: 'InVision Studio Fundamentals',
        lectures: [
          { title: 'Getting Started with InVision Studio', duration: '25:30', type: 'video' },
          { title: 'Interface and Tools Overview', duration: '22:15', type: 'video' },
          { title: 'Creating Your First Prototype', duration: '28:40', type: 'video' },
          { title: 'Working with Layers and Components', duration: '24:25', type: 'video' }
        ]
      },
      {
        section: 'Advanced Prototyping',
        lectures: [
          { title: 'Interactive Animations', duration: '30:10', type: 'video' },
          { title: 'State Management', duration: '32:25', type: 'video' },
          { title: 'Responsive Design', duration: '28:15', type: 'video' },
          { title: 'Advanced Interactions', duration: '25:30', type: 'video' }
        ]
      },
      {
        section: 'Design Systems and Collaboration',
        lectures: [
          { title: 'Building Design Systems', duration: '35:10', type: 'video' },
          { title: 'Team Collaboration', duration: '32:25', type: 'video' },
          { title: 'User Testing and Feedback', duration: '38:15', type: 'video' },
          { title: 'Integration and Workflows', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Anna Thompson',
        rating: 5,
        comment: 'Carlos is incredibly knowledgeable about InVision. The course covers everything I needed to know.',
        date: '2023-11-22'
      },
      {
        id: '2',
        user: 'Kevin Lee',
        rating: 4,
        comment: 'Great course for advanced users. The prototyping techniques are very practical and useful.',
        date: '2023-11-16'
      },
      {
        id: '3',
        user: 'Maria Garcia',
        rating: 4,
        comment: 'Excellent coverage of InVision Studio and design systems. Highly recommended.',
        date: '2023-11-10'
      }
    ],
    faqs: [
      {
        question: 'Do I need InVision experience?',
        answer: 'Yes, this is an advanced course that assumes familiarity with basic InVision concepts.'
      },
      {
        question: 'Which InVision products are covered?',
        answer: 'The course covers InVision Studio, DSM, and the main prototyping platform.'
      },
      {
        question: 'Will I learn about design systems?',
        answer: 'Yes, there\'s a comprehensive section on building and managing design systems with InVision.'
      }
    ]
  },
  {
    id: 'javascript-es6-course',
    title: 'JavaScript ES6+: Modern Development',
    description: 'Master modern JavaScript ES6+ features and best practices. Learn async programming, modules, and modern development patterns.',
    level: 'Intermediate',
    rating: 4.7,
    duration: '22h 10m',
    lectures: 28,
    isFavorite: false,
    imagePath: '/images/course-card-img-8.jpg',
    category: 'development',
    slug: 'javascript-es6-modern-development',
    enrolled: 18300,
    lastUpdated: '05/2023',
    language: 'English',
    price: 139,
    originalPrice: 279,
    discount: 50,
    daysLeft: 30,
    deadline: 'Jan 10 2024',
    certificate: true,
    whatYouLearn: [
      'Master ES6+ features and syntax',
      'Understand async programming with Promises and async/await',
      'Work with modules and modern JavaScript',
      'Implement functional programming concepts',
      'Use modern JavaScript tools and build systems',
      'Debug and test JavaScript code',
      'Optimize JavaScript performance',
      'Build real-world applications'
    ],
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/images/instructor-avatar-8.jpg',
      bio: 'Senior JavaScript Developer and educator with 12+ years of experience. Expert in modern JavaScript and full-stack development.',
      expertise: ['JavaScript', 'ES6+', 'Async Programming', 'Full-Stack Development']
    },
    curriculum: [
      {
        section: 'ES6+ Fundamentals',
        lectures: [
          { title: 'Introduction to Modern JavaScript', duration: '25:30', type: 'video' },
          { title: 'Arrow Functions and Lexical Scope', duration: '22:15', type: 'video' },
          { title: 'Destructuring and Spread Operator', duration: '28:40', type: 'video' },
          { title: 'Template Literals and String Methods', duration: '24:25', type: 'video' }
        ]
      },
      {
        section: 'Advanced JavaScript Features',
        lectures: [
          { title: 'Classes and Inheritance', duration: '30:10', type: 'video' },
          { title: 'Modules and Import/Export', duration: '32:25', type: 'video' },
          { title: 'Generators and Iterators', duration: '28:15', type: 'video' },
          { title: 'Symbols and Meta Programming', duration: '25:30', type: 'video' }
        ]
      },
      {
        section: 'Async Programming',
        lectures: [
          { title: 'Promises and Promise Chaining', duration: '35:10', type: 'video' },
          { title: 'Async/Await Patterns', duration: '32:25', type: 'video' },
          { title: 'Error Handling and Debugging', duration: '38:15', type: 'video' },
          { title: 'Performance Optimization', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Robert Chen',
        rating: 5,
        comment: 'Sarah is an excellent instructor. The ES6+ features are explained very clearly with practical examples.',
        date: '2023-11-25'
      },
      {
        id: '2',
        user: 'Jennifer White',
        rating: 4,
        comment: 'Great course for intermediate developers. I learned many modern JavaScript patterns and best practices.',
        date: '2023-11-18'
      },
      {
        id: '3',
        user: 'David Wilson',
        rating: 5,
        comment: 'The async programming section was fantastic. Very comprehensive coverage of modern JavaScript.',
        date: '2023-11-12'
      }
    ],
    faqs: [
      {
        question: 'What JavaScript knowledge do I need?',
        answer: 'You should have a solid understanding of basic JavaScript concepts before taking this course.'
      },
      {
        question: 'Which ES version is covered?',
        answer: 'The course covers ES6+ features up to the latest ECMAScript standards.'
      },
      {
        question: 'Will I learn about async programming?',
        answer: 'Yes, there\'s a comprehensive section on Promises, async/await, and modern async patterns.'
      }
    ]
  },
  {
    id: 'time-management-course',
    title: 'Time Management Mastery: Do More, Stress Less',
    description: 'Master the art of time management and productivity. Learn proven techniques to organize your life, reduce stress, and achieve more in less time.',
    level: 'All level',
    rating: 4.0,
    duration: '09h 56m',
    lectures: 21,
    isFavorite: false,
    imagePath: '/images/course-img-1.jpg',
    category: 'marketing',
    slug: 'time-management-mastery-do-more-stress-less',
    enrolled: 1200,
    lastUpdated: '04/2023',
    language: 'English',
    price: 200,
    originalPrice: 299,
    discount: 33,
    daysLeft: 35,
    deadline: 'Jan 15 2024',
    certificate: true,
    whatYouLearn: [
      'Master time management principles and techniques',
      'Create effective daily and weekly schedules',
      'Prioritize tasks using proven methodologies',
      'Overcome procrastination and distractions',
      'Build sustainable productivity habits',
      'Manage energy and focus effectively',
      'Use technology to enhance productivity',
      'Create work-life balance strategies'
    ],
    instructor: {
      name: 'Frances Guerrero',
      avatar: '/images/instructor-avatar-1.jpg',
      bio: 'Productivity coach and time management expert with 15+ years of experience. Helped thousands of professionals optimize their time and productivity.',
      expertise: ['Time Management', 'Productivity', 'Work-Life Balance', 'Personal Development']
    },
    curriculum: [
      {
        section: 'Time Management Fundamentals',
        lectures: [
          { title: 'Understanding Time Management', duration: '20:30', type: 'video' },
          { title: 'The Psychology of Time', duration: '18:45', type: 'video' },
          { title: 'Common Time Wasters', duration: '22:15', type: 'video' },
          { title: 'Setting Clear Goals', duration: '16:20', type: 'video' }
        ]
      },
      {
        section: 'Productivity Techniques',
        lectures: [
          { title: 'The Pomodoro Technique', duration: '25:30', type: 'video' },
          { title: 'Getting Things Done (GTD)', duration: '28:15', type: 'video' },
          { title: 'Time Blocking Strategies', duration: '24:40', type: 'video' },
          { title: 'Priority Matrix Methods', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Building Sustainable Habits',
        lectures: [
          { title: 'Habit Formation Science', duration: '30:10', type: 'video' },
          { title: 'Creating Morning Routines', duration: '32:25', type: 'video' },
          { title: 'Managing Energy Levels', duration: '35:15', type: 'video' },
          { title: 'Long-term Productivity Planning', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Alex Thompson',
        rating: 5,
        comment: 'Frances is an amazing instructor. The time management techniques have completely transformed my productivity.',
        date: '2023-11-20'
      },
      {
        id: '2',
        user: 'Sarah Wilson',
        rating: 4,
        comment: 'Great course with practical techniques. I learned many new ways to manage my time effectively.',
        date: '2023-11-15'
      },
      {
        id: '3',
        user: 'Mike Johnson',
        rating: 5,
        comment: 'Excellent course structure and very practical advice. Highly recommended for anyone struggling with time management.',
        date: '2023-11-10'
      }
    ],
    faqs: [
      {
        question: 'Do I need any prior experience?',
        answer: 'No prior experience is required. This course is designed for everyone looking to improve their time management skills.'
      },
      {
        question: 'How long will it take to see results?',
        answer: 'Most students see immediate improvements within the first week of implementing the techniques.'
      },
      {
        question: 'Are the techniques suitable for all professions?',
        answer: 'Yes, the time management principles apply to any profession or lifestyle.'
      }
    ]
  },
  {
    id: 'digital-marketing-course',
    title: 'The Complete Digital Marketing Course - 8 Course in 1',
    description: 'Master digital marketing with this comprehensive course bundle covering SEO, social media, PPC, email marketing, and more. Perfect for beginners and professionals.',
    level: 'All level',
    rating: 4.5,
    duration: '6h 56m',
    lectures: 82,
    isFavorite: false,
    imagePath: '/images/hero-bg.jpg',
    category: 'marketing',
    slug: 'complete-digital-marketing-course-8-course-in-1',
    enrolled: 6500,
    lastUpdated: '03/2023',
    language: 'English',
    price: 0,
    originalPrice: 299,
    discount: 100,
    daysLeft: 40,
    deadline: 'Jan 20 2024',
    certificate: true,
    whatYouLearn: [
      'Master SEO fundamentals and keyword research',
      'Create effective social media marketing campaigns',
      'Run successful PPC and Google Ads campaigns',
      'Build email marketing lists and automation',
      'Create compelling content marketing strategies',
      'Analyze marketing performance with analytics',
      'Implement conversion rate optimization',
      'Develop comprehensive marketing strategies'
    ],
    instructor: {
      name: 'Larry Lawson',
      avatar: '/images/instructor-avatar-2.jpg',
      bio: 'Digital marketing expert and entrepreneur with 20+ years of experience. Built multiple successful online businesses and helped thousands of students.',
      expertise: ['Digital Marketing', 'SEO', 'Social Media', 'PPC', 'Email Marketing']
    },
    curriculum: [
      {
        section: 'Digital Marketing Fundamentals',
        lectures: [
          { title: 'Introduction to Digital Marketing', duration: '15:30', type: 'video' },
          { title: 'Marketing Funnel Basics', duration: '18:45', type: 'video' },
          { title: 'Target Audience Research', duration: '22:15', type: 'video' },
          { title: 'Marketing Strategy Planning', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Search Engine Optimization',
        lectures: [
          { title: 'SEO Fundamentals', duration: '25:30', type: 'video' },
          { title: 'Keyword Research Techniques', duration: '28:15', type: 'video' },
          { title: 'On-Page SEO Optimization', duration: '24:40', type: 'video' },
          { title: 'Link Building Strategies', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Social Media Marketing',
        lectures: [
          { title: 'Platform Selection', duration: '30:10', type: 'video' },
          { title: 'Content Creation Strategies', duration: '32:25', type: 'video' },
          { title: 'Community Management', duration: '35:15', type: 'video' },
          { title: 'Paid Social Advertising', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Emily Rodriguez',
        rating: 5,
        comment: 'Larry is incredibly knowledgeable about digital marketing. This course covers everything I needed to know.',
        date: '2023-11-22'
      },
      {
        id: '2',
        user: 'David Kim',
        rating: 4,
        comment: 'Great comprehensive course. The SEO and social media sections were particularly helpful.',
        date: '2023-11-18'
      },
      {
        id: '3',
        user: 'Lisa Chen',
        rating: 5,
        comment: 'Excellent course structure and very practical advice. Perfect for digital marketing beginners.',
        date: '2023-11-14'
      }
    ],
    faqs: [
      {
        question: 'Is this course suitable for beginners?',
        answer: 'Yes, this course is designed for beginners and covers all the fundamentals of digital marketing.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to all course content and future updates.'
      },
      {
        question: 'Will I get a certificate?',
        answer: 'Yes, you\'ll receive a certificate upon completion of the course.'
      }
    ]
  },
  {
    id: 'angular-course',
    title: 'Angular - The Complete Guide (2021 Edition)',
    description: 'Master Angular from the ground up. Learn to build modern, scalable web applications with Angular 12+, TypeScript, and best practices.',
    level: 'All level',
    rating: 4.0,
    duration: '12h 45m',
    lectures: 65,
    isFavorite: false,
    imagePath: '/images/course-img-4.jpg',
    category: 'development',
    slug: 'angular-complete-guide-2021-edition',
    enrolled: 4500,
    lastUpdated: '02/2023',
    language: 'English',
    price: 255,
    originalPrice: 399,
    discount: 36,
    daysLeft: 45,
    deadline: 'Jan 25 2024',
    certificate: true,
    whatYouLearn: [
      'Master Angular fundamentals and architecture',
      'Build reactive forms and validation',
      'Implement routing and navigation',
      'Work with HTTP and REST APIs',
      'Use Angular Material and UI components',
      'Implement state management with NgRx',
      'Deploy Angular applications',
      'Follow Angular best practices and patterns'
    ],
    instructor: {
      name: 'Billy Vasquez',
      avatar: '/images/instructor-avatar-3.jpg',
      bio: 'Senior Angular Developer and instructor with 10+ years of experience. Expert in modern web development and Angular ecosystem.',
      expertise: ['Angular', 'TypeScript', 'Web Development', 'Frontend Architecture']
    },
    curriculum: [
      {
        section: 'Angular Fundamentals',
        lectures: [
          { title: 'Introduction to Angular', duration: '25:30', type: 'video' },
          { title: 'Setting Up Development Environment', duration: '22:15', type: 'video' },
          { title: 'Components and Templates', duration: '28:40', type: 'video' },
          { title: 'Data Binding and Directives', duration: '24:25', type: 'video' }
        ]
      },
      {
        section: 'Advanced Angular Features',
        lectures: [
          { title: 'Services and Dependency Injection', duration: '30:10', type: 'video' },
          { title: 'Routing and Navigation', duration: '32:25', type: 'video' },
          { title: 'Forms and Validation', duration: '28:15', type: 'video' },
          { title: 'HTTP and REST APIs', duration: '25:30', type: 'video' }
        ]
      },
      {
        section: 'Real-World Applications',
        lectures: [
          { title: 'Building a Shopping Cart', duration: '35:10', type: 'video' },
          { title: 'User Authentication System', duration: '32:25', type: 'video' },
          { title: 'State Management with NgRx', duration: '38:15', type: 'video' },
          { title: 'Deployment and Testing', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Robert Davis',
        rating: 4,
        comment: 'Billy explains Angular concepts very clearly. The course covers everything from basics to advanced features.',
        date: '2023-11-24'
      },
      {
        id: '2',
        user: 'Jennifer White',
        rating: 5,
        comment: 'Great course structure and practical examples. Perfect for learning Angular development.',
        date: '2023-11-18'
      },
      {
        id: '3',
        user: 'Michael Chen',
        rating: 4,
        comment: 'Excellent coverage of Angular features. The real-world projects were very helpful.',
        date: '2023-11-12'
      }
    ],
    faqs: [
      {
        question: 'Do I need JavaScript experience?',
        answer: 'Yes, basic JavaScript knowledge is recommended before taking this Angular course.'
      },
      {
        question: 'Which Angular version is covered?',
        answer: 'This course covers Angular 12+ with modern features and best practices.'
      },
      {
        question: 'Will I learn TypeScript?',
        answer: 'Yes, TypeScript is covered as it\'s essential for Angular development.'
      }
    ]
  },
  {
    id: 'ui-ux-design-course',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the fundamentals of UI/UX design. Master user research, wireframing, prototyping, and design principles to create user-centered digital experiences.',
    level: 'Beginner',
    rating: 4.3,
    duration: '15h 30m',
    lectures: 45,
    isFavorite: false,
    imagePath: '/images/course-card-img-9.jpg',
    category: 'web-design',
    slug: 'ui-ux-design-fundamentals',
    enrolled: 2100,
    lastUpdated: '01/2023',
    language: 'English',
    price: 150,
    originalPrice: 249,
    discount: 40,
    daysLeft: 50,
    deadline: 'Jan 30 2024',
    certificate: true,
    whatYouLearn: [
      'Understand UX design principles and methodology',
      'Conduct user research and create personas',
      'Design wireframes and prototypes',
      'Create user flows and information architecture',
      'Apply visual design principles and typography',
      'Use design tools like Figma and Sketch',
      'Conduct usability testing and user feedback',
      'Build a professional design portfolio'
    ],
    instructor: {
      name: 'Mike Chen',
      avatar: '/images/instructor-avatar-5.jpg',
      bio: 'Senior UI/UX Designer with 12+ years of experience. Worked with major tech companies and specializes in user-centered design.',
      expertise: ['UI/UX Design', 'User Research', 'Prototyping', 'Visual Design']
    },
    curriculum: [
      {
        section: 'UX Design Fundamentals',
        lectures: [
          { title: 'Introduction to UX Design', duration: '20:30', type: 'video' },
          { title: 'User Research Methods', duration: '25:45', type: 'video' },
          { title: 'Creating User Personas', duration: '22:15', type: 'video' },
          { title: 'Information Architecture', duration: '18:20', type: 'video' }
        ]
      },
      {
        section: 'Design Process and Tools',
        lectures: [
          { title: 'Wireframing Techniques', duration: '28:30', type: 'video' },
          { title: 'Prototyping with Figma', duration: '32:15', type: 'video' },
          { title: 'Visual Design Principles', duration: '24:40', type: 'video' },
          { title: 'Typography and Color Theory', duration: '20:25', type: 'video' }
        ]
      },
      {
        section: 'Testing and Iteration',
        lectures: [
          { title: 'Usability Testing Methods', duration: '30:10', type: 'video' },
          { title: 'User Feedback and Iteration', duration: '32:25', type: 'video' },
          { title: 'Design Systems and Components', duration: '35:15', type: 'video' },
          { title: 'Portfolio Building', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Lisa Anderson',
        rating: 5,
        comment: 'Mike is an excellent instructor. The course covers all the fundamentals of UI/UX design very comprehensively.',
        date: '2023-11-26'
      },
      {
        id: '2',
        user: 'Tom Wilson',
        rating: 4,
        comment: 'Great course for beginners. I learned a lot about user research and design principles.',
        date: '2023-11-20'
      },
      {
        id: '3',
        user: 'Sarah Brown',
        rating: 5,
        comment: 'Excellent course structure and practical exercises. Perfect for starting a career in UX design.',
        date: '2023-11-15'
      }
    ],
    faqs: [
      {
        question: 'Do I need any design experience?',
        answer: 'No prior experience is required. This course starts from the basics of UX design.'
      },
      {
        question: 'Which design tools are covered?',
        answer: 'The course covers Figma, Sketch, and other popular design tools.'
      },
      {
        question: 'Will I get a portfolio?',
        answer: 'Yes, you\'ll build a professional portfolio as part of the course projects.'
      }
    ]
  },
  {
    id: 'python-data-science-course',
    title: 'Python for Data Science',
    description: 'Master Python for data science and machine learning. Learn data manipulation, analysis, visualization, and machine learning algorithms.',
    level: 'Advanced',
    rating: 4.7,
    duration: '25h 20m',
    lectures: 95,
    isFavorite: false,
    imagePath: '/images/course-card-img-10.jpg',
    category: 'development',
    slug: 'python-for-data-science',
    enrolled: 3800,
    lastUpdated: '12/2022',
    language: 'English',
    price: 220,
    originalPrice: 349,
    discount: 37,
    daysLeft: 55,
    deadline: 'Feb 05 2024',
    certificate: true,
    whatYouLearn: [
      'Master Python programming fundamentals',
      'Work with data manipulation libraries (Pandas, NumPy)',
      'Create data visualizations with Matplotlib and Seaborn',
      'Implement machine learning algorithms',
      'Perform statistical analysis and hypothesis testing',
      'Build predictive models and evaluate performance',
      'Work with real-world datasets',
      'Deploy machine learning models'
    ],
    instructor: {
      name: 'Emma Wilson',
      avatar: '/images/instructor-avatar-6.jpg',
      bio: 'Data Scientist and Python expert with 15+ years of experience. PhD in Computer Science and worked with major tech companies.',
      expertise: ['Python', 'Data Science', 'Machine Learning', 'Statistics']
    },
    curriculum: [
      {
        section: 'Python Fundamentals for Data Science',
        lectures: [
          { title: 'Python Basics and Data Types', duration: '25:30', type: 'video' },
          { title: 'Control Structures and Functions', duration: '22:15', type: 'video' },
          { title: 'Object-Oriented Programming', duration: '28:40', type: 'video' },
          { title: 'Working with Files and APIs', duration: '24:25', type: 'video' }
        ]
      },
      {
        section: 'Data Manipulation and Analysis',
        lectures: [
          { title: 'Introduction to Pandas', duration: '30:10', type: 'video' },
          { title: 'Data Cleaning and Preprocessing', duration: '32:25', type: 'video' },
          { title: 'Exploratory Data Analysis', duration: '28:15', type: 'video' },
          { title: 'Statistical Analysis with Python', duration: '25:30', type: 'video' }
        ]
      },
      {
        section: 'Machine Learning and Visualization',
        lectures: [
          { title: 'Data Visualization with Matplotlib', duration: '35:10', type: 'video' },
          { title: 'Introduction to Machine Learning', duration: '32:25', type: 'video' },
          { title: 'Supervised Learning Algorithms', duration: '38:15', type: 'video' },
          { title: 'Model Evaluation and Deployment', duration: '28:30', type: 'video' }
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'David Rodriguez',
        rating: 5,
        comment: 'Emma is incredibly knowledgeable about data science. The course covers everything from Python basics to advanced ML.',
        date: '2023-11-28'
      },
      {
        id: '2',
        user: 'Anna Thompson',
        rating: 4,
        comment: 'Great comprehensive course. The practical projects with real datasets were very valuable.',
        date: '2023-11-22'
      },
      {
        id: '3',
        user: 'Chris Lee',
        rating: 5,
        comment: 'Excellent course structure and very practical examples. Perfect for data science beginners.',
        date: '2023-11-16'
      }
    ],
    faqs: [
      {
        question: 'What Python knowledge do I need?',
        answer: 'Basic Python programming knowledge is recommended before taking this course.'
      },
      {
        question: 'Will I learn machine learning?',
        answer: 'Yes, the course covers fundamental machine learning algorithms and techniques.'
      },
      {
        question: 'Are real datasets used?',
        answer: 'Yes, you\'ll work with real-world datasets throughout the course.'
      }
    ]
  }
];

export const COURSE_SECTION_DEFAULTS = {
  title: "Most Popular Courses",
  subtitle: "Choose from hundreds of courses from specialist organizations"
};
