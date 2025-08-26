'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, MEGA_MENU_ITEMS, COMPANY_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { HeaderProps } from '@/@interfaces';
import { useActiveRoute } from '@/hooks/useActiveRoute';
import UserMenu from './UserMenu';
import { authClient } from '@/lib/auth-client';

interface AuthHeaderProps extends HeaderProps {
  user?: {
    id: string;
    email?: string;
    name?: string;
    image?: string;
  } | null;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ isDarkMode, toggleDarkMode, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const { pathname, isActiveRoute, getActiveRouteClass } = useActiveRoute();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-mega-menu]')) {
        setActiveMegaMenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMegaMenuEnter = (title: string) => {
    setActiveMegaMenu(title);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const hasMegaMenu = (item: string) => {
    return item === 'Courses' || item === 'About';
  };

  const megaMenuItems = (item: string) => {
    if (item === 'Courses') return MEGA_MENU_ITEMS.courses;
    if (item === 'About') return MEGA_MENU_ITEMS.company;
    return [];
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-subtle backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center flex-shrink-0" prefetch={true}>
            <span className="font-space text-2xl font-bold bg-gradient-to-r from-midnight-900 to-mint-600 bg-clip-text text-transparent">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasMegaMenu(item.name) && handleMegaMenuEnter(item.name)}
                    onMouseLeave={handleMegaMenuLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                        getActiveRouteClass(
                          item.href,
                          'text-mint-600 bg-mint-50',
                          'text-midnight-800 hover:text-mint-600'
                        )
                      }`}
                      prefetch={true}
                    >
                      {item.name}
                      {hasMegaMenu(item.name) && <ChevronDown size={16} />}
                    </Link>
                    {/* Mega Menu */}
                    <AnimatePresence>
                      {hasMegaMenu(item.name) && activeMegaMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-midnight-100 rounded-lg shadow-xl z-[60] min-w-[600px]"
                          style={{
                            maxWidth: '90vw'
                          }}
                          data-mega-menu
                        >
                          <div className="grid grid-cols-2 gap-6 p-6 justify-items-center">
                            {megaMenuItems(item.name).map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group p-4 rounded-lg hover:bg-midnight-50 transition-colors text-center w-full"
                                onClick={() => setActiveMegaMenu(null)}
                                prefetch={true}
                              >
                                <h3 className="font-semibold text-midnight-900 group-hover:text-mint-600 transition-colors">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm text-midnight-600 mt-1">
                                  {subItem.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Auth Section */}
            {user ? (
              <UserMenu user={user} />
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/signin">
                  <Button variant="default" size="sm">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-midnight-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => {
                  return (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                            getActiveRouteClass(
                              item.href,
                              'text-midnight-800 hover:text-mint-600',
                              'text-midnight-800 hover:text-mint-600'
                            )
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                          prefetch={true}
                        >
                          {item.name}
                        </Link>
                        {hasMegaMenu(item.name) && (
                          <button
                            onClick={() => setMobileSubmenuOpen(
                              mobileSubmenuOpen === item.name ? null : item.name
                            )}
                            className="p-2 text-midnight-600 hover:text-mint-600 transition-colors"
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${
                                mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {hasMegaMenu(item.name) && mobileSubmenuOpen === item.name && (
                        <div className="mt-2 ml-4 space-y-2">
                          {megaMenuItems(item.name).map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-3 text-sm text-midnight-600 hover:text-mint-600 hover:bg-mint-50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                              prefetch={true}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {/* Mobile Auth Section */}
                <div className="pt-4 space-y-2">
                  {user ? (
                    <>
                      <div className="px-3 py-2 border-b border-midnight-100">
                        <p className="text-sm text-midnight-600">{user.email}</p>
                      </div>
                      <Link href="/profile">
                        <Button variant="ghost" className="w-full justify-start">
                          Profile
                        </Button>
                      </Link>
                      <Link href="/settings">
                        <Button variant="ghost" className="w-full justify-start">
                          Settings
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => {
                          authClient.signOut({
                            fetchOptions: {
                              onSuccess: () => {
                                setIsMenuOpen(false);
                              },
                            },
                          });
                        }}
                      >
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/signin">
                        <Button variant="default" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AuthHeader;
