'use client';

import { useEffect, useRef, useState } from 'react';

export type UseDebounceProps<T> = {
  /** Delay time in milliseconds, default `400` */
  delay?: number;
  initialValue?: T;
};

/** Debouncing state value */
function useDebounce<T>({
  delay = 400,
  initialValue
}: UseDebounceProps<T> = {}): [
  T | undefined,
  (newValue: T | undefined) => void
] {
  const isMounted = useRef<boolean>(false);
  const [value, setValue] = useState<T | undefined>(initialValue);
  const [debounceValue, setDebounceValue] = useState<T | undefined>(
    initialValue
  );

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debounceValue, setValue];
}

export default useDebounce;
