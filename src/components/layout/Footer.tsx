'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { FooterProps } from '@/interfaces/footer';
import { FOOTER_DEFAULTS, FOOTER_SECTIONS, SOCIAL_LINKS } from '@/constants/footer';

export const Footer: React.FC<FooterProps> = ({
  companyName = FOOTER_DEFAULTS.companyName,
  description = FOOTER_DEFAULTS.description,
  sections = FOOTER_SECTIONS,
  socialLinks = SOCIAL_LINKS,
  copyrightText = FOOTER_DEFAULTS.copyrightText,
  showNewsletter = true,
  newsletterPlaceholder = FOOTER_DEFAULTS.newsletterPlaceholder,
  newsletterButtonText = FOOTER_DEFAULTS.newsletterButtonText,
  onNewsletterSubmit
}) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onNewsletterSubmit) {
      onNewsletterSubmit(email.trim());
      setEmail('');
    }
  };

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {companyName}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {description}
              </p>
            </div>

            {/* Newsletter Signup */}
            {showNewsletter && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest course updates and learning tips delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder={newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-gray-700 transition-all duration-200"
                  >
                    {getSocialIcon(social.label)}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              {copyrightText}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
