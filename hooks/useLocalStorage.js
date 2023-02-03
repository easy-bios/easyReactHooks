import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(
        typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem(key)) || defaultValue
            : defaultValue
    );

    useEffect(() => {
        if (value !== undefined)
            localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;
