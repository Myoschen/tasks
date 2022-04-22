import React, { useState } from 'react';
import { MdModeNight, MdLightMode } from 'react-icons/md';

function DarkSwitcher() {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark((state) => !state);
  };

  return (
    <button className="duration-300" type="button" onClick={handleClick}>
      {dark ? <MdModeNight size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}

export default DarkSwitcher;
