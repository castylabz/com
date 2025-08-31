import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Additional mobile-specific scroll handling
    if (window.innerWidth <= 768) {
      // Force scroll to top for mobile devices
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [pathname]);
};
