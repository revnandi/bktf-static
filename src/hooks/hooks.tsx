import { useCallback, useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState(state => !state), []);
  return [state, toggle];
};

const isBrowser = typeof window !== `undefined`;

function getScrollPosition(): ScrollPosition {
  return isBrowser ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 };
}

export function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] = useState<ScrollPosition>(getScrollPosition());

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return position;
}

export function useScrollXPosition(): number {
  const { x } = useScrollPosition();
  return x;
}

export function useScrollYPosition(): number {
  const { y } = useScrollPosition();
  return y;
}
