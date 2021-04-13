import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      const theSize = {
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(theSize);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return [windowSize];
};
