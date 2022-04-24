import { ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';

interface Props {
  icon: string;
  name: string;
  children: ReactNode;
}

function Navbar({ icon, name, children }: Props) {
  return (
    <nav className="relative px-6 py-4 text-white bg-nord-400">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="flex items-center gap-x-2">
          <img className="object-center w-8 rounded-md" src={icon} alt="tasks-icon" />
          <span className="text-2xl font-bold">{name}</span>
        </div>
        <ul className="flex gap-x-2">
          {children}
        </ul>
      </div>
      {/* <button
        className="absolute duration-300 rounded-md right-6 top-6 hover:bg-nord-300"
        type="button"
      >
        <MdMenu size={24} className="shrink-0" />
      </button> */}
    </nav>
  );
}

export default Navbar;
