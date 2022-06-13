import { useState, useEffect } from 'react';

const useLocalStorage = (key, init) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || init
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
