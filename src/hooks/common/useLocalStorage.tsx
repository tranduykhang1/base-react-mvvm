import { useState } from "react";

export function useLocalStorage<T>(
    key: string,
    defaultValue = null
): { value: T; setValue: (value: T) => void } {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    });

    const setValue = (value: T) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return { value: storedValue, setValue };
}
