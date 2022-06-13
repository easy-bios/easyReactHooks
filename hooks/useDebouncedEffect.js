import { useEffect } from 'react';

const useDeboucedEffect = (effect, deps, delay = 1000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      effect();
    }, delay);
    return () => clearTimeout(timer);
  }, deps);

  return;
};

export default useDeboucedEffect;
