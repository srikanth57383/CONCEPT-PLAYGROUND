// What is a custom hook?
// A reusable function that starts with use and uses built-in hooks internally.
// Why do we need custom hooks?
// To abstract and reuse logic like data fetching, form handling, etc.
// Can hooks be called inside loops or conditionals?
// ❌ No — always call hooks at the top level of the function.
// How do you debug a custom hook?
// Just like any component logic; add console.log, React DevTools, or breakpoints.


// ✅ What Are Custom Hooks?

// A custom hook is a JavaScript function whose name starts with use and that can call other hooks inside it.

// 🔥 Why use Custom Hooks?
// 	•	To extract and reuse logic across multiple components.
// 	•	To keep components clean and readable.
// 	•	To encapsulate complex state or side-effects.


import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function if value changes before delay
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};


