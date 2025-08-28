'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useActiveRoute = () => {
  const pathname = usePathname();

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const getActiveRouteClass = (path: string, activeClass: string, defaultClass: string = '') => {
    return isActiveRoute(path) ? activeClass : defaultClass;
  };

  return {
    pathname,
    isActiveRoute,
    getActiveRouteClass,
  };
};
