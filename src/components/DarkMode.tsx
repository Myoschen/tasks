import { ReactNode } from 'react';
import { MdModeNight, MdLightMode } from 'react-icons/md';
import useDarkMode from '../hooks/useDarkMode';

interface Props {
  styles?: string;
  children?: ReactNode;
}

function DarkMode(props: Props) {
  const { styles, children } = props;
  const [theme, setTheme] = useDarkMode();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={styles || 'p-2 rounded-md hover:bg-nord-300 duration-300'}
      onClick={handleClick}
    >
      {theme === 'dark'
        ? <MdLightMode size={24} className="shrink-0" />
        : <MdModeNight size={24} className="shrink-0" />}
      {children}
    </button>
  );
}

export default DarkMode;
