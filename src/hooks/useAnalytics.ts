import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Custom hook for Google Analytics
 * Automatically tracks page views on route changes
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    const pageUrl = window.location.origin + location.pathname + location.search;

    trackPageView(pageUrl, pageTitle);
  }, [location]);
};

export default usePageTracking;
