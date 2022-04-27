import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

type ReturnType = [
  string,
  (value: string | ((val: string) => string)) => void
];

const useDarkMode = (): ReturnType => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const prevTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const element = window.document.body;
    if (theme) {
      element.classList.add(theme);
      element.classList.remove(prevTheme);
    }
  }, [theme, prevTheme]);

  return [theme, setTheme];
};

export default useDarkMode;
