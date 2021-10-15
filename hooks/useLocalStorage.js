import { useState } from 'react';

const useLocalStorage = (key, init) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || init);

    const saveToLocalStorage = (input) => {
        localStorage.setItem(key, JSON.stringify(input));
        setValue(input);
    };

    return [value, saveToLocalStorage];
};

export default useLocalStorage;
