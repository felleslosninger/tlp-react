import { useState, useEffect } from 'react';

type UseIsMobile = {
  mobile?: number;
  tablet?: number;
};

const useDeviceBreakpoints = (props: UseIsMobile = {}) => {
  const { mobile, tablet } = props;
  const mobileBreakpoint = mobile || 425;
  const tabletBreakpoint = tablet || 768;

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // throw error if mobile is bigger than tablet
  if (mobileBreakpoint > tabletBreakpoint) {
    throw new Error(
      `Mobile breakpoint cannot be bigger than tablet breakpoint. Mobile: ${mobileBreakpoint}px, Tablet: ${tabletBreakpoint}px`,
    );
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobileBreakpoint) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth <= tabletBreakpoint) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileBreakpoint, tabletBreakpoint]);

  return { isMobile, isTablet };
};

export default useDeviceBreakpoints;
