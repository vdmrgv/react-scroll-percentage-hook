import { useLayoutEffect, useRef, useState } from 'react';
import debounceFn from 'lodash.debounce';

export interface Percentage {
  vertical: number;
  horizontal: number;
}
export interface UseScrollPercentageOptions {
  onProgress?: (percentage: Percentage) => void;
  windowScroll?: boolean;
  timeout?: number;
}

const useScrollPercentage = <T extends HTMLElement>(options?: UseScrollPercentageOptions) => {
  const { onProgress, windowScroll, timeout } = options || {};

  const ref = useRef<T>(null);
  const [percentage, setPercentage] = useState<Percentage>({
    vertical: 0,
    horizontal: 0,
  });

  useLayoutEffect(() => {
    let mounted = true;

    const container = windowScroll ? document.scrollingElement! : ref.current;
    const listener = windowScroll ? document : ref.current;

    const handleScroll = () => {
      if (mounted && container) {
        const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = container;

        const percentage = {
          vertical: Math.abs((scrollTop / (scrollHeight - clientHeight)) * 100),
          horizontal: Math.abs((scrollLeft / (scrollWidth - clientWidth)) * 100),
        };

        setPercentage(percentage);
        onProgress?.(percentage);
      }
    };

    const scrollFunc = debounceFn(handleScroll, timeout ?? 10);

    listener?.addEventListener('scroll', scrollFunc);

    return () => {
      mounted = false;
      listener?.removeEventListener('scroll', scrollFunc);
    };
  }, [onProgress, ref, timeout, windowScroll]);

  return { percentage, ref };
};

export default useScrollPercentage;
