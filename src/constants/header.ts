import { HeaderLink, MegaMenuSection } from '@/interfaces/header';

export const HEADER_DEFAULTS = {
  companyName: "AnoraTech",
  getStartedButtonText: "Get Started"
};

export const HEADER_NAVIGATION: HeaderLink[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Courses", href: "/courses", isActive: false },
  { label: "Portfolio", href: "/portfolio", isActive: false },
  { label: "Blog", href: "/blog", isActive: false },
  { label: "About", href: "/about", isActive: false },
  { label: "Contact", href: "/contact", isActive: false }
];

export const MEGA_MENUS: { [key: string]: MegaMenuSection[] } = {
  Courses: [
    {
      title: "Course Categories",
      items: [
        {
          title: "All Courses",
          description: "Browse our complete course catalog",
          href: "/courses"
        },
        {
          title: "Web Design",
          description: "Learn modern web design principles",
          href: "/courses?category=web-design"
        },
        {
          title: "Development",
          description: "Programming and software development",
          href: "/courses?category=development"
        },
        {
          title: "Graphic Design",
          description: "Visual design and creative skills",
          href: "/courses?category=graphic-design"
        }
      ]
    },
    {
      title: "Featured Courses",
      items: [
        {
          title: "Digital Marketing Masterclass",
          description: "Complete digital marketing course bundle",
          href: "/courses/digital-marketing-1"
        },
        {
          title: "React JS Fundamentals",
          description: "Learn React.js from basics to advanced",
          href: "/courses/react-js-1"
        },
        {
          title: "UI/UX Design Essentials",
          description: "Master user interface design",
          href: "/courses/ui-ux-1"
        },
        {
          title: "Python Programming",
          description: "Complete Python programming course",
          href: "/courses/python-1"
        }
      ]
    },
    {
      title: "Learning Paths",
      items: [
        {
          title: "Frontend Developer",
          description: "Complete path to frontend development",
          href: "/learning-paths/frontend"
        },
        {
          title: "Backend Developer",
          description: "Master backend development skills",
          href: "/learning-paths/backend"
        },
        {
          title: "Full Stack Developer",
          description: "End-to-end development expertise",
          href: "/learning-paths/fullstack"
        },
        {
          title: "Digital Marketing",
          description: "Comprehensive marketing education",
          href: "/learning-paths/marketing"
        }
      ]
    },
    {
      title: "Course Features",
      items: [
        {
          title: "Free Trial Courses",
          description: "Try before you buy with free trials",
          href: "/courses?price=free"
        },
        {
          title: "Certification Programs",
          description: "Get certified in your field",
          href: "/certifications"
        },
        {
          title: "Live Sessions",
          description: "Interactive live learning experiences",
          href: "/live-sessions"
        },
        {
          title: "Study Groups",
          description: "Learn together with peers",
          href: "/study-groups"
        }
      ]
    }
  ],
  Portfolio: [
    {
      title: "Web Projects",
      items: [
        {
          title: "E-commerce Platforms",
          description: "Modern online shopping experiences",
          href: "/portfolio/web/ecommerce"
        },
        {
          title: "Corporate Websites",
          description: "Professional business websites",
          href: "/portfolio/web/corporate"
        },
        {
          title: "Web Applications",
          description: "Custom business applications",
          href: "/portfolio/web/applications"
        },
        {
          title: "Landing Pages",
          description: "High-converting marketing pages",
          href: "/portfolio/web/landing-pages"
        }
      ]
    },
    {
      title: "Mobile Apps",
      items: [
        {
          title: "iOS Applications",
          description: "Native iPhone and iPad apps",
          href: "/portfolio/mobile/ios"
        },
        {
          title: "Android Applications",
          description: "Native Android mobile apps",
          href: "/portfolio/mobile/android"
        },
        {
          title: "Cross-Platform Apps",
          description: "React Native and Flutter applications",
          href: "/portfolio/mobile/cross-platform"
        },
        {
          title: "App Store Optimization",
          description: "ASO and app marketing strategies",
          href: "/portfolio/mobile/aso"
        }
      ]
    },
    {
      title: "Design Work",
      items: [
        {
          title: "Brand Identity",
          description: "Logo design and brand guidelines",
          href: "/portfolio/design/branding"
        },
        {
          title: "UI/UX Projects",
          description: "User interface and experience designs",
          href: "/portfolio/design/ui-ux"
        },
        {
          title: "Print Materials",
          description: "Business cards, brochures, and marketing materials",
          href: "/portfolio/design/print"
        },
        {
          title: "Digital Assets",
          description: "Icons, illustrations, and graphics",
          href: "/portfolio/design/digital"
        }
      ]
    }
  ]
};
