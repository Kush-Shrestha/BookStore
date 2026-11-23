import { useEffect, useState } from 'react';

// Works like useState, but the value also survives page reloads (it is saved in localStorage).
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? initial : JSON.parse(raw);
    } catch {
      return initial; // storage blocked, or the saved text is not valid JSON
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // private mode or a full storage must not crash the page
    }
  }, [key, value]);

  return [value, setValue];
}
