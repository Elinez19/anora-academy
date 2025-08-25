import { FooterSection, FooterLink } from '@/interfaces/footer';

export const FOOTER_DEFAULTS = {
  companyName: "Anora Academy",
  description: "Empowering learners worldwide with expert-led courses and cutting-edge technology education. Join our community and unlock your potential.",
  copyrightText: "© 2024 Anora Academy. All rights reserved.",
  newsletterPlaceholder: "Enter your email address",
  newsletterButtonText: "Subscribe"
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Learning",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Learning Paths", href: "/learning-paths" },
      { label: "Certifications", href: "/certifications" },
      { label: "Skill Assessments", href: "/assessments" },
      { label: "Study Groups", href: "/study-groups" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Webinars", href: "/webinars" },
      { label: "Download App", href: "/app" },
      { label: "API Documentation", href: "/api" }
    ]
  }
];

export const SOCIAL_LINKS: FooterLink[] = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" }
];
