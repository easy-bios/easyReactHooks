import { useState, useEffect } from 'react';

const useDeboucedState = (value, delay = 1000) => {
  const [state, setState] = useState(value);
  const [debouncedState, setDebouncedState] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
    return () => clearTimeout(timer);
  }, [state, delay]);

  return [state, setState, debouncedState];
};

export default useDeboucedState;
