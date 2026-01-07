import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof globalThis.window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
      // Default to dark
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = globalThis.window.document.documentElement;
    // Remove both classes to be safe
    root.classList.remove('light', 'dark');
    // Add the current theme class
    root.classList.add(theme);
    // Save to localStorage
    localStorage.setItem('theme', theme);
    console.log('Theme applied:', theme, 'Classes:', root.className);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
