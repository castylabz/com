import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'
  const lastPathRef = useRef(pathname);

  useEffect(() => {
    // Save scroll for the previous path
    const previousPathname = lastPathRef.current;
    if (previousPathname) {
      try {
        sessionStorage.setItem(`scroll:${previousPathname}` , String(window.scrollY));
      } catch (_) {
        // ignore storage failures
      }
    }

    // Restore on back/forward, otherwise go to top
    try {
      const saved = sessionStorage.getItem(`scroll:${pathname}`);
      if (navigationType === 'POP' && saved) {
        window.scrollTo(0, parseInt(saved, 10) || 0);
      } else {
        window.scrollTo(0, 0);
      }
    } catch (_) {
      window.scrollTo(0, 0);
    }

    lastPathRef.current = pathname;
  }, [pathname, navigationType]);
};
