import {useEffect, useRef} from 'react';

export const useDebounce = (handler, watchedValue, delay) => {
  const emittedFirst = useRef(false);
  
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      if (emittedFirst.current) {
        handler();
      }
      emittedFirst.current = true;
  
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [watchedValue, delay]);
  
}
