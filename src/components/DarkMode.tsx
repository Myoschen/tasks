import { ReactNode } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import useDarkMode from '../hooks/useDarkMode';

interface DarkModeProps {
  styles?: string;
  children?: ReactNode;
}

function DarkMode(props: DarkModeProps) {
  const { styles, children } = props;
  const [theme, setTheme] = useDarkMode();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={styles || 'p-2 rounded-md duration-300 bg-nord-100 text-nord-600 hover:bg-nord-300 dark:bg-nord-600 dark:text-nord-100 dark:hover:bg-nord-300'}
      onClick={handleClick}
    >
      {theme === 'dark'
        ? <SunIcon className="w-6 shrink-0" />
        : <MoonIcon className="w-6 shrink-0" />}
      {children}
    </button>
  );
}

export default DarkMode;
