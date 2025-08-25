// Navigation
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Programs', href: '/programs' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export const MEGA_MENU_ITEMS = {
  courses: [
    { name: 'Web Development', href: '/courses/web-development', description: 'Learn modern web technologies' },
    { name: 'Mobile Development', href: '/courses/mobile-development', description: 'iOS and Android app development' },
    { name: 'Data Science', href: '/courses/data-science', description: 'AI, ML, and data analytics' },
    { name: 'Cloud Computing', href: '/courses/cloud-computing', description: 'AWS, Azure, and DevOps' },
    { name: 'Cybersecurity', href: '/courses/cybersecurity', description: 'Security fundamentals and practices' },
    { name: 'UI/UX Design', href: '/courses/ui-ux-design', description: 'User experience and interface design' }
  ],
  company: [
    { name: 'About Us', href: '/about', description: 'Learn about our academy and mission' },
    { name: 'Our Instructors', href: '/about/instructors', description: 'Meet our expert instructors' },
    { name: 'Careers', href: '/careers', description: 'Join our growing team' },
    { name: 'Blog', href: '/blog', description: 'Latest tech insights and tutorials' }
  ]
};

export const COMPANY_INFO = {
  name: 'TechAcademy',
  tagline: 'Nigeria\'s Premier Technology Learning Platform',
  description: 'Leading technology academy in Nigeria specializing in web development, mobile applications, data science, and digital skills training.',
  email: 'hello@techacademy.ng',
  phone: '+234 (555) 123-4567',
  address: 'Abuja, Nigeria',
  founded: '2019'
};

// Hero Section
export const HERO_CONTENT = {
  badge: 'Learn Tech Skills Online',
  title: 'Nigeria\'s Premier Technology Learning Platform',
  subtitle: 'Master In-Demand Tech Skills',
  description: 'Join thousands of students learning web development, mobile apps, data science, and more. Get job-ready with our industry-aligned curriculum and expert instructors.',
  cta: {
    primary: { text: 'Start Learning', href: '#courses' },
    secondary: { text: 'View Courses', href: '#courses' }
  },
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  floatingCard: {
    value: '10k+',
    text: 'Students have already enrolled and transformed their careers'
  }
};

// Stats Section
export const STATS_DATA = [
  {
    icon: 'Users',
    value: '10,000+',
    label: 'Active Students',
    description: 'Learning across Nigeria and beyond'
  },
  {
    icon: 'Award',
    value: '50+',
    label: 'Expert Instructors',
    description: 'Industry professionals and educators'
  },
  {
    icon: 'Globe',
    value: '100+',
    label: 'Courses Available',
    description: 'Comprehensive tech curriculum'
  },
  {
    icon: 'Clock',
    value: '95%',
    label: 'Job Placement Rate',
    description: 'Graduates employed within 6 months'
  }
];

// Courses Section
export const COURSES_DATA = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Master modern web technologies including React, Node.js, and full-stack development.',
    features: ['HTML, CSS, JavaScript', 'React & Next.js', 'Node.js & Express', 'Database Design'],
    href: '/courses/web-development',
    duration: '6 months',
    level: 'Beginner to Advanced',
    price: '₦150,000',
    students: '2,500+',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'David Chen',
    lastUpdated: '1/2024',
    language: 'English'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Learn to build native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter Development', 'App Store Optimization', 'Mobile UI/UX'],
    href: '/courses/mobile-development',
    duration: '5 months',
    level: 'Intermediate to Advanced',
    price: '₦180,000',
    students: '1,800+',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'Sarah Johnson',
    lastUpdated: '12/2023',
    language: 'English'
  },
  {
    icon: 'Database',
    title: 'Data Science',
    description: 'Master data analysis, machine learning, and artificial intelligence fundamentals.',
    features: ['Python Programming', 'Data Analysis', 'Machine Learning', 'AI Fundamentals'],
    href: '/courses/data-science',
    duration: '7 months',
    level: 'Beginner to Advanced',
    price: '₦200,000',
    students: '1,200+',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'Michael Adebayo',
    lastUpdated: '11/2023',
    language: 'English'
  },
  {
    icon: 'Cloud',
    title: 'Cloud Computing',
    description: 'Learn cloud infrastructure, DevOps, and deployment strategies.',
    features: ['AWS & Azure', 'DevOps Practices', 'CI/CD Pipelines', 'Serverless Architecture'],
    href: '/courses/cloud-computing',
    duration: '6 months',
    level: 'Intermediate to Advanced',
    price: '₦170,000',
    students: '950+',
    rating: '4.7',
    image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'Grace Oke',
    lastUpdated: '10/2023',
    language: 'English'
  },
  {
    icon: 'Shield',
    title: 'Cybersecurity',
    description: 'Master security fundamentals, ethical hacking, and network protection.',
    features: ['Network Security', 'Ethical Hacking', 'Security Audits', 'Incident Response'],
    href: '/courses/cybersecurity',
    duration: '5 months',
    level: 'Intermediate to Advanced',
    price: '₦160,000',
    students: '1,100+',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'Emmanuel Okoro',
    lastUpdated: '9/2023',
    language: 'English'
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Learn user experience design, prototyping, and design systems.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    href: '/courses/ui-ux-design',
    duration: '4 months',
    level: 'Beginner to Intermediate',
    price: '₦120,000',
    students: '800+',
    rating: '4.6',
    image: 'https://images.pexels.com/photos/3183160/pexels-photo-3183160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: 'Aisha Bello',
    lastUpdated: '8/2023',
    language: 'English'
  }
];

// Features Section
export const FEATURES_DATA = [
  {
    icon: 'BookOpen',
    title: 'Structured Learning',
    description: 'Step-by-step curriculum designed by industry experts with hands-on projects.'
  },
  {
    icon: 'Users',
    title: 'Expert Instructors',
    description: 'Learn from professionals with real-world experience in top tech companies.'
  },
  {
    icon: 'Clock',
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with 24/7 access to course materials and support.'
  },
  {
    icon: 'Award',
    title: 'Industry Certificates',
    description: 'Earn recognized certificates that boost your career prospects and credibility.'
  },
  {
    icon: 'MessageCircle',
    title: 'Community Support',
    description: 'Join a community of learners and get help from peers and mentors.'
  },
  {
    icon: 'Briefcase',
    title: 'Career Support',
    description: 'Get job placement assistance, resume reviews, and interview preparation.'
  }
];

// Programs Section
export const PROGRAMS_DATA = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    category: 'web',
    description: 'Comprehensive program covering frontend, backend, and database development with modern technologies.',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL'],
    duration: '8 months',
    level: 'Beginner to Advanced',
    price: '₦250,000',
    liveUrl: '#',
    features: ['Portfolio Projects', 'Mentorship', 'Job Placement', 'Lifetime Access']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    category: 'mobile',
    description: 'Learn to build professional mobile applications for iOS and Android platforms.',
    technologies: ['React Native', 'Flutter', 'Firebase', 'App Store'],
    duration: '6 months',
    level: 'Intermediate to Advanced',
    price: '₦220,000',
    liveUrl: '#',
    features: ['App Store Publishing', 'Monetization', 'Performance Optimization', 'Testing']
  },
  {
    id: 3,
    title: 'Data Science & AI',
    category: 'data',
    description: 'Master data analysis, machine learning, and artificial intelligence fundamentals.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    duration: '9 months',
    level: 'Beginner to Advanced',
    price: '₦280,000',
    liveUrl: '#',
    features: ['Real Data Projects', 'AI Models', 'Portfolio', 'Industry Connections']
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    category: 'cloud',
    description: 'Learn cloud infrastructure, deployment, and DevOps practices for modern applications.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    duration: '7 months',
    level: 'Intermediate to Advanced',
    price: '₦240,000',
    liveUrl: '#',
    features: ['Cloud Projects', 'DevOps Tools', 'Certification Prep', 'Hands-on Labs']
  },
  {
    id: 5,
    title: 'Cybersecurity',
    category: 'security',
    description: 'Master security fundamentals, ethical hacking, and network protection strategies.',
    technologies: ['Linux', 'Networking', 'Penetration Testing', 'Security Tools'],
    duration: '6 months',
    level: 'Intermediate to Advanced',
    price: '₦200,000',
    liveUrl: '#',
    features: ['Security Labs', 'Certification Prep', 'Real Scenarios', 'Industry Tools']
  },
  {
    id: 6,
    title: 'UI/UX Design',
    category: 'design',
    description: 'Learn user experience design, prototyping, and creating beautiful interfaces.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    duration: '5 months',
    level: 'Beginner to Intermediate',
    price: '₦180,000',
    liveUrl: '#',
    features: ['Design Portfolio', 'User Research', 'Prototyping', 'Design Systems']
  }
];

export const PROGRAMS_FILTERS = [
  { id: 'all', label: 'All Programs', icon: 'Filter' },
  { id: 'web', label: 'Web Development', icon: 'Code' },
  { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' },
  { id: 'data', label: 'Data Science', icon: 'Database' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: 'Cloud' },
  { id: 'security', label: 'Cybersecurity', icon: 'Shield' },
  { id: 'design', label: 'UI/UX Design', icon: 'Palette' }
];

// Testimonials Section
export const TESTIMONIALS_DATA = [
  {
    name: 'Sarah Johnson',
    role: 'Web Developer at TechStart Nigeria',
    content: 'TechAcademy transformed my career! I went from knowing nothing about coding to landing a developer job in just 8 months. The instructors are amazing!',
    rating: 5
  },
  {
    name: 'Michael Adebayo',
    role: 'Mobile Developer at Abuja Digital',
    content: 'The mobile development program at TechAcademy is world-class. I learned React Native and Flutter, and now I\'m building apps for major companies.',
    rating: 5
  },
  {
    name: 'Grace Oke',
    role: 'Data Scientist at Ado Ekiti Solutions',
    content: 'TechAcademy\'s data science program gave me the skills I needed to break into AI. The hands-on projects and mentorship were invaluable.',
    rating: 5
  }
];

// About Section
export const ABOUT_DATA = {
  story: {
    title: 'Our Story',
    content: [
      'Founded in 2019, TechAcademy began with a simple mission: to bridge the technology skills gap in Nigeria and empower individuals with in-demand tech skills.',
      'What started as a small coding bootcamp has grown into a comprehensive technology academy serving thousands of students across Nigeria and beyond. We\'ve helped over 10,000 students transform their careers and enter the tech industry.',
      'Today, we continue to expand our curriculum, bringing the latest technologies and industry best practices to our students, always staying ahead of the curve and delivering education that drives real career outcomes.'
    ]
  },
  values: [
    {
      icon: 'Target',
      title: 'Excellence',
      description: 'We strive for excellence in every course, delivering education that exceeds expectations.'
    },
    {
      icon: 'Heart',
      title: 'Passion',
      description: 'Our passion for technology education drives us to create innovative learning experiences.'
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to education.'
    },
    {
      icon: 'Shield',
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and exceptional education.'
    }
  ],
  team: [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Dean & Founder',
      bio: 'Education leader with 15+ years in technology education and curriculum development.',
      email: 'sarah@techacademy.ng',
      linkedin: '#',
      github: '#',
      twitter: '#',
      skills: ['Curriculum Design', 'Educational Leadership', 'Technology Education', 'Student Success']
    },
    {
      name: 'Prof. Michael Adebayo',
      role: 'Head of Computer Science',
      bio: 'Computer science professor specializing in software engineering and web technologies.',
      email: 'michael@techacademy.ng',
      linkedin: '#',
      github: '#',
      twitter: '#',
      skills: ['Software Engineering', 'Web Development', 'Database Design', 'System Architecture']
    },
    {
      name: 'Grace Oke',
      role: 'Head of Design & UX',
      bio: 'Creative director with expertise in UX/UI design and educational content creation.',
      email: 'grace@techacademy.ng',
      linkedin: '#',
      github: '#',
      twitter: '#',
      skills: ['UX/UI Design', 'Content Creation', 'Educational Design', 'Visual Communication']
    },
    {
      name: 'David Chen',
      role: 'Lead Instructor - Web Development',
      bio: 'Full-stack developer and instructor with deep knowledge of modern web technologies.',
      email: 'david@techacademy.ng',
      linkedin: '#',
      github: '#',
      twitter: '#',
      skills: ['React', 'Node.js', 'Python', 'Teaching & Mentoring']
    }
  ]
};

// FAQ Section
export const FAQ_DATA = [
  {
    question: 'What courses does TechAcademy offer?',
    answer: 'We offer comprehensive technology courses including web development, mobile development, data science, cloud computing, cybersecurity, and UI/UX design. Each course is designed to take you from beginner to job-ready.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course durations vary from 4-9 months depending on the program. Our web development program takes 8 months, mobile development is 6 months, and data science is 9 months. You can learn at your own pace with 24/7 access.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'Yes! We have a 95% job placement rate. Our career services include resume reviews, interview preparation, portfolio building, and connections to our network of hiring partners and tech companies.'
  },
  {
    question: 'What technologies do you teach?',
    answer: 'We teach modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, AWS, and more. Our curriculum is constantly updated to reflect current industry demands.'
  },
  {
    question: 'Do you offer financial aid or payment plans?',
    answer: 'Yes, we offer flexible payment plans and scholarships for deserving students. We also partner with organizations to provide funding opportunities for underrepresented groups in tech.'
  },
  {
    question: 'Can I access course materials after graduation?',
    answer: 'Absolutely! You get lifetime access to all course materials, updates, and our alumni community. This ensures you can continue learning and stay current with technology trends.'
  }
];

// Contact Section
export const CONTACT_DATA = {
  info: [
    {
      icon: 'Mail',
      title: 'Email Us',
      content: 'hello@techacademy.ng',
      link: 'mailto:hello@techacademy.ng',
      description: 'Send us an email and we\'ll get back to you within 24 hours.'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      content: '+234 (555) 123-4567',
      link: 'tel:+2345551234567',
      description: 'Speak directly with our admissions team during business hours.'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      content: 'Abuja, Nigeria',
      link: '#',
      description: 'Schedule an in-person campus tour and consultation.'
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM',
      link: '#',
      description: 'We\'re available during these hours for consultations.'
    }
  ],
  expectations: [
    'We\'ll respond within 24 hours of receiving your message',
    'Free initial consultation to understand your learning goals',
    'Detailed course information with curriculum and pricing',
    'Ongoing support throughout your learning journey'
  ]
};

// CTA Section
export const CTA_DATA = {
  title: 'Ready to Transform Your Career?',
  description: 'Join thousands of students who have already transformed their lives with our technology courses. Start your journey today!',
  buttons: [
    { text: 'Enroll Now', href: '/courses', variant: 'default' },
    { text: 'View Programs', href: '/programs', variant: 'outline' }
  ],
  contactInfo: [
    { icon: 'Phone', label: 'Call Us', value: '+234 (555) 123-4567' },
    { icon: 'Mail', label: 'Email Us', value: 'hello@techacademy.ng' }
  ],
  offer: {
    title: 'Limited Time Offer',
    description: 'Get 20% off your first course when you enroll within the next 7 days',
    cta: 'Claim Discount'
  }
};

// Footer Section
export const FOOTER_DATA = {
  links: {
    courses: [
      { name: 'Web Development', href: '/courses/web-development' },
      { name: 'Mobile Development', href: '/courses/mobile-development' },
      { name: 'Data Science', href: '/courses/data-science' },
      { name: 'Cloud Computing', href: '/courses/cloud-computing' },
      { name: 'Cybersecurity', href: '/courses/cybersecurity' },
      { name: 'UI/UX Design', href: '/courses/ui-ux-design' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Instructors', href: '/about/instructors' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Student Portal', href: '/portal' },
      { name: 'Course Materials', href: '/resources' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'GDPR Compliance', href: '/legal/gdpr' },
      { name: 'Data Protection', href: '/legal/data-protection' }
    ]
  },
  socialLinks: [
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Youtube', href: '#', label: 'YouTube' }
  ],
  newsletter: {
    title: 'Stay Updated',
    description: 'Get the latest insights on technology education and career opportunities delivered to your inbox.',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe'
  }
};

// Marketing Banners
export const MARKETING_BANNERS = {
  newsletter: {
    triggerPercentage: 30,
    bannerType: 'newsletter',
    title: 'Stay Updated with Tech Trends',
    description: 'Get the latest insights on technology education, career opportunities, and industry trends delivered to your inbox.',
    ctaText: 'Subscribe Now',
    triggerType: 'scroll' as const,
    cooldownMinutes: 10
  },
  offer: {
    triggerPercentage: 60,
    bannerType: 'offer',
    title: 'Limited Time Offer!',
    description: 'Get 20% off your first course when you enroll within the next 7 days.',
    ctaText: 'Claim Discount',
    triggerType: 'scroll' as const,
    cooldownMinutes: 10
  },
  exitIntent: {
    bannerType: 'promotion',
    title: 'Wait! Don\'t Miss Out',
    description: 'Get a free consultation and course recommendation before you go. No obligation, just expert advice.',
    ctaText: 'Get Free Consultation',
    triggerType: 'exit-intent' as const,
    cooldownMinutes: 10
  }
};

// Course Detail Pages
export const COURSE_DETAILS = {
  'Web Development': {
    learningOutcomes: [
      'Build responsive, modern web applications',
      'Master React.js and Next.js frameworks',
      'Develop secure backend APIs with Node.js',
      'Design and manage databases effectively',
      'Deploy applications to production environments',
      'Implement best practices for performance and security'
    ],
    curriculum: [
      {
        title: 'Frontend Fundamentals',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'CSS Grid & Flexbox']
      },
      {
        title: 'React Development',
        topics: ['Component Architecture', 'State Management', 'Hooks & Context', 'Routing & Navigation']
      },
      {
        title: 'Backend Development',
        topics: ['Node.js & Express', 'RESTful APIs', 'Database Design', 'Authentication & Authorization']
      },
      {
        title: 'Full-Stack Integration',
        topics: ['API Integration', 'State Management', 'Error Handling', 'Testing & Debugging']
      },
      {
        title: 'Advanced Topics',
        topics: ['Performance Optimization', 'Security Best Practices', 'SEO Optimization', 'PWA Development']
      },
      {
        title: 'Portfolio & Career',
        topics: ['Project Portfolio', 'Resume Building', 'Interview Preparation', 'Industry Networking']
      }
    ]
  },
  'Mobile Development': {
    learningOutcomes: [
      'Build native and cross-platform mobile apps',
      'Master React Native and Flutter frameworks',
      'Implement mobile UI/UX best practices',
      'Integrate with mobile APIs and services',
      'Publish apps to app stores',
      'Optimize app performance and user experience'
    ],
    curriculum: [
      {
        title: 'Mobile Fundamentals',
        topics: ['Mobile App Architecture', 'UI/UX Design Principles', 'Platform Guidelines', 'Development Tools']
      },
      {
        title: 'React Native Development',
        topics: ['Component System', 'Navigation & Routing', 'State Management', 'Native Modules']
      },
      {
        title: 'Flutter Development',
        topics: ['Dart Programming', 'Widget System', 'State Management', 'Platform Channels']
      },
      {
        title: 'Mobile APIs & Services',
        topics: ['REST APIs', 'Push Notifications', 'Location Services', 'Social Media Integration']
      },
      {
        title: 'App Store Publishing',
        topics: ['App Store Guidelines', 'App Submission', 'Marketing & ASO', 'Analytics & Monitoring']
      },
      {
        title: 'Advanced Mobile Topics',
        topics: ['Performance Optimization', 'Testing & Debugging', 'Security', 'Offline Capabilities']
      }
    ]
  },
  'Data Science': {
    learningOutcomes: [
      'Master Python for data analysis and machine learning',
      'Build predictive models and AI applications',
      'Analyze and visualize complex datasets',
      'Implement machine learning algorithms',
      'Deploy data science solutions',
      'Communicate insights effectively'
    ],
    curriculum: [
      {
        title: 'Python Fundamentals',
        topics: ['Python Programming', 'Data Structures', 'Object-Oriented Programming', 'Libraries & Packages']
      },
      {
        title: 'Data Analysis',
        topics: ['Pandas & NumPy', 'Data Cleaning', 'Exploratory Analysis', 'Statistical Methods']
      },
      {
        title: 'Data Visualization',
        topics: ['Matplotlib & Seaborn', 'Interactive Charts', 'Dashboard Creation', 'Storytelling with Data']
      },
      {
        title: 'Machine Learning',
        topics: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation']
      },
      {
        title: 'Deep Learning',
        topics: ['Neural Networks', 'TensorFlow & PyTorch', 'Computer Vision', 'Natural Language Processing']
      },
      {
        title: 'Real-World Projects',
        topics: ['Capstone Projects', 'Industry Datasets', 'Model Deployment', 'Portfolio Development']
      }
    ]
  },
  'Cloud Computing': {
    learningOutcomes: [
      'Master AWS and Azure cloud platforms',
      'Implement DevOps practices and CI/CD pipelines',
      'Design scalable cloud architectures',
      'Manage containerized applications',
      'Automate infrastructure deployment',
      'Ensure cloud security and compliance'
    ],
    curriculum: [
      {
        title: 'Cloud Fundamentals',
        topics: ['Cloud Computing Models', 'AWS Core Services', 'Azure Services', 'Cloud Architecture']
      },
      {
        title: 'Infrastructure as Code',
        topics: ['Terraform', 'CloudFormation', 'ARM Templates', 'Infrastructure Automation']
      },
      {
        title: 'Containerization',
        topics: ['Docker Fundamentals', 'Kubernetes Orchestration', 'Container Security', 'Microservices']
      },
      {
        title: 'DevOps Practices',
        topics: ['CI/CD Pipelines', 'GitOps', 'Monitoring & Logging', 'Automated Testing']
      },
      {
        title: 'Security & Compliance',
        topics: ['Identity & Access Management', 'Network Security', 'Compliance Frameworks', 'Security Best Practices']
      },
      {
        title: 'Advanced Cloud Topics',
        topics: ['Serverless Architecture', 'Multi-Cloud Strategies', 'Cost Optimization', 'Disaster Recovery']
      }
    ]
  },
  'Cybersecurity': {
    learningOutcomes: [
      'Understand cybersecurity fundamentals and threats',
      'Implement security controls and best practices',
      'Conduct ethical hacking and penetration testing',
      'Manage security incidents and response',
      'Ensure compliance with security standards',
      'Protect networks and systems effectively'
    ],
    curriculum: [
      {
        title: 'Security Fundamentals',
        topics: ['Security Principles', 'Threat Landscape', 'Risk Assessment', 'Security Frameworks']
      },
      {
        title: 'Network Security',
        topics: ['Network Protocols', 'Firewall Configuration', 'Intrusion Detection', 'VPN Technologies']
      },
      {
        title: 'Ethical Hacking',
        topics: ['Reconnaissance', 'Vulnerability Assessment', 'Penetration Testing', 'Social Engineering']
      },
      {
        title: 'Security Tools',
        topics: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite']
      },
      {
        title: 'Incident Response',
        topics: ['Security Monitoring', 'Incident Detection', 'Response Procedures', 'Forensic Analysis']
      },
      {
        title: 'Compliance & Governance',
        topics: ['Security Policies', 'Compliance Standards', 'Audit Procedures', 'Security Awareness']
      }
    ]
  },
  'UI/UX Design': {
    learningOutcomes: [
      'Create user-centered design solutions',
      'Master design tools and prototyping',
      'Conduct user research and testing',
      'Design accessible and inclusive interfaces',
      'Build design systems and components',
      'Present and defend design decisions'
    ],
    curriculum: [
      {
        title: 'Design Fundamentals',
        topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout & Composition']
      },
      {
        title: 'User Research',
        topics: ['User Interviews', 'Surveys & Analytics', 'Persona Development', 'User Journey Mapping']
      },
      {
        title: 'Wireframing & Prototyping',
        topics: ['Low-Fidelity Prototypes', 'High-Fidelity Designs', 'Interactive Prototypes', 'User Testing']
      },
      {
        title: 'Design Tools',
        topics: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping Tools']
      },
      {
        title: 'Design Systems',
        topics: ['Component Libraries', 'Design Tokens', 'Documentation', 'Design Handoffs']
      },
      {
        title: 'Portfolio & Career',
        topics: ['Project Portfolio', 'Client Communication', 'Design Presentations', 'Industry Networking']
      }
    ]
  }
};

// Team Data
export const TEAM_DATA = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Dean & Founder',
    bio: 'Education leader with 15+ years in technology education and curriculum development. Passionate about empowering students with tech skills.',
    email: 'sarah@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['Curriculum Design', 'Educational Leadership', 'Technology Education', 'Student Success']
  },
  {
    name: 'Prof. Michael Adebayo',
    role: 'Head of Computer Science',
    bio: 'Computer science professor specializing in software engineering and web technologies. Leads our technical curriculum development.',
    email: 'michael@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['Software Engineering', 'Web Development', 'Database Design', 'System Architecture']
  },
  {
    name: 'Grace Oke',
    role: 'Head of Design & UX',
    bio: 'Creative director with expertise in UX/UI design and educational content creation. Ensures engaging learning experiences.',
    email: 'grace@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['UX/UI Design', 'Content Creation', 'Educational Design', 'Visual Communication']
  },
  {
    name: 'David Chen',
    role: 'Lead Instructor - Web Development',
    bio: 'Full-stack developer and instructor with deep knowledge of modern web technologies. Passionate about teaching and mentoring.',
    email: 'david@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['React', 'Node.js', 'Python', 'Teaching & Mentoring']
  },
  {
    name: 'Aisha Bello',
    role: 'Lead Instructor - Mobile Development',
    bio: 'Mobile development expert specializing in React Native and Flutter. Creates engaging mobile learning experiences.',
    email: 'aisha@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
  },
  {
    name: 'Emmanuel Okoro',
    role: 'Lead Instructor - Data Science',
    bio: 'Data scientist and AI researcher focused on practical applications. Teaches real-world data analysis and machine learning.',
    email: 'emmanuel@techacademy.ng',
    linkedin: '#',
    github: '#',
    twitter: '#',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI Research']
  }
];

// Culture Data
export const CULTURE_DATA = [
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and peer learning to achieve the best educational outcomes.'
  },
  {
    title: 'Innovation',
    description: 'Constantly exploring new teaching methods and technologies to enhance the learning experience.'
  },
  {
    title: 'Excellence',
    description: 'Committed to delivering high-quality education that exceeds student expectations and industry standards.'
  }
];

// Contact FAQ Data
export const CONTACT_FAQ_DATA = [
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we provide free initial consultations to understand your learning goals and recommend the best course path.'
  },
  {
    question: 'What information should I provide?',
    answer: 'Please include details about your current skill level, learning goals, preferred schedule, and any specific technologies you\'re interested in.'
  },
  {
    question: 'Do you work with international students?',
    answer: 'Absolutely! We welcome students from around the world and offer online courses accessible from anywhere.'
  }
];

// SEO Constants
export const HOME_PAGE_SEO = {
  title: "Best Technology Academy in Nigeria - TechAcademy",
  description: "Leading technology academy in Nigeria offering web development, mobile development, data science, and digital skills training. Transform your career with our expert-led courses.",
  keywords: ['best technology academy Nigeria', 'coding bootcamp Abuja', 'web development course Nigeria', 'mobile development training', 'data science course Nigeria', 'tech education Nigeria', 'programming courses Abuja', 'technology training FCT'],
  url: "/",
  type: "website"
};

export const ABOUT_PAGE_SEO = {
  title: "About Us - TechAcademy | Leading Technology Education",
  description: "Learn about TechAcademy's story, our expert instructors, and our mission to deliver world-class technology education in Nigeria and beyond.",
  keywords: ['about TechAcademy', 'technology education Nigeria', 'tech instructors Abuja', 'academy about us'],
  url: "/about",
  type: "website"
};

export const COURSES_PAGE_SEO = {
  title: "Our Courses - TechAcademy | Web Development, Mobile Apps, Data Science",
  description: "Comprehensive technology courses including web development, mobile development, data science, cloud computing, cybersecurity, and UI/UX design.",
  keywords: ['technology courses', 'web development course Nigeria', 'mobile development training', 'data science course'],
  url: "/courses",
  type: "website"
};

// Function to generate course-specific SEO data
export const getCourseSEO = (courseTitle: string, courseDescription: string, courseLevel: string) => ({
  title: `${courseTitle} - TechAcademy`,
  description: courseDescription,
  keywords: [courseTitle, 'tech courses', 'programming', courseLevel, 'TechAcademy', 'technology education Nigeria'],
  url: `/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-')}`,
  type: "website"
});

export const PROGRAMS_PAGE_SEO = {
  title: "Our Programs - TechAcademy | Comprehensive Tech Education Programs",
  description: "Explore our comprehensive technology education programs designed to take you from beginner to job-ready professional.",
  keywords: ['technology programs', 'tech education programs', 'coding bootcamp Nigeria', 'tech training programs'],
  url: "/programs",
  type: "website"
};

export const CONTACT_PAGE_SEO = {
  title: "Contact Us - TechAcademy | Get Your Free Consultation",
  description: "Contact TechAcademy for your technology education needs. Get a free consultation and course recommendation. Based in Abuja, serving Nigeria and beyond.",
  keywords: ['contact technology academy', 'free consultation Nigeria', 'course recommendation', 'contact TechAcademy'],
  url: "/contact",
  type: "website"
};

export const BLOG_PAGE_SEO = {
  title: "Blog - TechAcademy | Technology Education Insights and Tutorials",
  description: "Stay updated with the latest technology trends, educational insights, and industry updates from TechAcademy.",
  keywords: ['technology education blog', 'tech tutorials Nigeria', 'programming insights', 'tech education blog'],
  url: "/blog",
  type: "website"
};

// Blog Data
export const BLOG_DATA = {
  hero: {
    title: "Technology Education Insights & Tutorials",
    subtitle: "Stay ahead with the latest trends in technology education, programming, and career development",
    description: "Explore our latest articles, tutorials, and insights on technology education, learning best practices, and industry trends."
  },
  posts: [
    {
      id: 1,
      title: "The Future of Technology Education in 2024",
      excerpt: "Explore the latest trends and technologies that will shape technology education in the coming year.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "future-of-technology-education-2024"
    },
    {
      id: 2,
      title: "Building Your First React Application: A Beginner's Guide",
      excerpt: "Step-by-step tutorial for beginners to create their first React application with modern best practices.",
      author: "David Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "building-first-react-application-beginners-guide"
    },
    {
      id: 3,
      title: "Getting Started with Data Science: Essential Skills for Beginners",
      excerpt: "Discover the fundamental skills and tools you need to begin your journey in data science and AI.",
      author: "Emmanuel Okoro",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Data Science",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "getting-started-data-science-essential-skills-beginners"
    },
    {
      id: 4,
      title: "Mobile App Development: React Native vs Flutter",
      excerpt: "Comprehensive comparison of React Native and Flutter for cross-platform mobile development.",
      author: "Aisha Bello",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "mobile-app-development-react-native-vs-flutter"
    }
  ],
  categories: [
    { name: "All Posts", slug: "all", count: 4 },
    { name: "Education", slug: "education", count: 1 },
    { name: "Web Development", slug: "web-development", count: 1 },
    { name: "Data Science", slug: "data-science", count: 1 },
    { name: "Mobile Development", slug: "mobile-development", count: 1 }
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest insights on technology education and career opportunities delivered to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe"
  }
};

