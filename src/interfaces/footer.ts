export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: string;
  companyName?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: FooterLink[];
  copyrightText?: string;
  showNewsletter?: boolean;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  onNewsletterSubmit?: (email: string) => void;
}
