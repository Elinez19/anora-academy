'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sun, Moon, Menu, X } from 'lucide-react';
import { HeaderProps } from '@/interfaces/header';
import { HEADER_DEFAULTS, HEADER_NAVIGATION, MEGA_MENUS } from '@/constants/header';

export const Header: React.FC<HeaderProps> = ({
  companyName = HEADER_DEFAULTS.companyName,
  navigation = HEADER_NAVIGATION,
  megaMenus = MEGA_MENUS,
  showThemeToggle = true,
  showGetStartedButton = true,
  getStartedButtonText = HEADER_DEFAULTS.getStartedButtonText,
  onGetStartedClick,
  onThemeToggle
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    onThemeToggle?.();
  };

  const toggleMegaMenu = (menuName: string) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const hasMegaMenu = (label: string) => {
    return megaMenus && megaMenus[label];
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
                     {/* Logo */}
           <div className="flex items-center">
             <Link href="/" className="text-2xl font-bold">
               <span className="text-primary">Anora</span>
               <span className="text-gray-800">Tech</span>
             </Link>
           </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {hasMegaMenu(item.label) ? (
                  <button
                    onClick={() => toggleMegaMenu(item.label)}
                    onMouseEnter={() => setActiveMegaMenu(item.label)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeMegaMenu === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                                 ) : (
                   <Link
                     href={item.href}
                     className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                       item.isActive
                         ? 'text-primary bg-primary/10'
                         : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                     }`}
                   >
                     {item.label}
                   </Link>
                 )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {showThemeToggle && (
              <button
                onClick={handleThemeToggle}
                className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Get Started Button */}
            {showGetStartedButton && (
              <Button
                onClick={onGetStartedClick}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {getStartedButtonText}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menus */}
        {activeMegaMenu && megaMenus[activeMegaMenu] && (
          <div
            ref={megaMenuRef}
            onMouseLeave={closeMegaMenu}
            className="absolute left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-xl"
            style={{ width: '600px' }}
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {megaMenus[activeMegaMenu].map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className={`text-sm font-bold mb-3 ${
                      sectionIndex === 0 ? 'text-primary' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                                             {section.items.map((item, itemIndex) => (
                         <Link
                           key={itemIndex}
                           href={item.href}
                           className="block group p-2 rounded-md hover:bg-gray-50 transition-all duration-200"
                           onClick={closeMegaMenu}
                         >
                           <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                             {item.title}
                           </div>
                           <div className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">
                             {item.description}
                           </div>
                         </Link>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-8 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.label}>
                {hasMegaMenu(item.label) ? (
                  <div>
                    <button
                      onClick={() => toggleMegaMenu(item.label)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        item.isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeMegaMenu === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Mega Menu */}
                    {activeMegaMenu === item.label && megaMenus[item.label] && (
                      <div className="mt-3 ml-4 space-y-4">
                        {megaMenus[item.label].map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">
                              {section.title}
                            </h4>
                                                         <div className="space-y-2">
                               {section.items.map((item, itemIndex) => (
                                 <Link
                                   key={itemIndex}
                                   href={item.href}
                                   className="block text-sm text-gray-600 hover:text-primary transition-colors"
                                   onClick={() => {
                                     setMobileMenuOpen(false);
                                     closeMegaMenu();
                                   }}
                                 >
                                   {item.title}
                                 </Link>
                               ))}
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                                 ) : (
                   <Link
                     href={item.href}
                     className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                       item.isActive
                         ? 'text-primary bg-primary/10'
                         : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                     }`}
                     onClick={() => setMobileMenuOpen(false)}
                   >
                     {item.label}
                   </Link>
                 )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
