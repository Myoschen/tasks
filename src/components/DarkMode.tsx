import { useState, ReactNode } from 'react';
import { MdModeNight, MdLightMode } from 'react-icons/md';

interface Props {
  styles?: string;
  children?: ReactNode;
}

function DarkMode(props: Props) {
  const { styles, children } = props;
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark((state) => !state);
  };

  return (
    <button className={styles || 'p-2 rounded-md hover:bg-nord-300 duration-300'} type="button" onClick={handleClick}>
      {dark ? <MdModeNight size={24} className="shrink-0" /> : <MdLightMode size={24} className="shrink-0" />}
      {children}
    </button>
  );
}

export default DarkMode;
