import { useEffect, Dispatch, SetStateAction } from 'react';
import useLocalStorage from './useLocalStorage';

type ReturnType = [
  string | undefined,
  Dispatch<SetStateAction<string>>
]

const useDarkMode = (): ReturnType => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const prevTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    if (theme) {
      const root = window.document.getElementById('root');
      root?.classList.add(theme);
      root?.classList.remove(prevTheme);
    }
  }, [theme, prevTheme]);

  return [theme, setTheme];
};

export default useDarkMode;
