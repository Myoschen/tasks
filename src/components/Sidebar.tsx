import { useState } from 'react';
import {
  MdList, MdDoneAll, MdPending, MdLogout, MdArrowForwardIos,
} from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import userAvatar from '../assets/user-default.png';
import DarkMode from './DarkMode';

const navItems = [
  {
    name: 'All',
    to: 'all',
    icon: (<MdList size={24} className="shrink-0" />),
  },
  {
    name: 'Completed',
    to: 'completed',
    icon: (<MdDoneAll size={24} className="shrink-0" />),
  },
  {
    name: 'In Progress',
    to: 'in-progress',
    icon: (<MdPending size={24} className="shrink-0" />),
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${open ? 'w-72' : 'w-20'} duration-500 h-screen z-0 relative p-5 pt-8 transform shadow-lg shadow-nord-700 bg-nord-500`}>
      {/* Username and Image */}
      <div className="flex items-center space-x-4">
        <img src={userAvatar} className="w-10 rounded-full" alt="user-avatar" />
        <h1 className={`${!open && 'hidden'} flex-1 text-xl text-white font-bold`}>
          Username
        </h1>
        {/* TODO Go to Profile */}
      </div>
      <div className="h-[1px] w-full bg-nord-100 my-6" />

      {/* Link */}
      <div className="flex flex-col justify-between h-[calc(100%-6rem)]">
        <ul className="space-y-2 ">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to} className={({ isActive }) => `${isActive && 'bg-nord-300'} link group`}>
                {item.icon}
                <span className={`${!open && 'hidden'}`}>{item.name}</span>
                <span className={`tooltip ${open && 'hidden'}`}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          <li>
            <DarkMode styles="w-full text-left link group">
              <span className={`${!open && 'hidden'}`}>Darkmode</span>
              <span className={`tooltip ${open && 'hidden'}`}>Darkmode</span>
            </DarkMode>
          </li>
          <li>
            <button type="button" className="w-full text-left link group" onClick={() => navigate('/tasks/')}>
              <MdLogout size={24} className="shrink-0" />
              <span className={`${!open && 'hidden'}`}>Logout</span>
              <span className={`tooltip ${open && 'hidden'}`}>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <button type="button" onClick={() => setOpen((state) => !state)} className="absolute z-10 p-2 text-lg text-white duration-300 rounded-full bg-nord-500 top-1/2 -right-4">
        <MdArrowForwardIos className={`${open && 'rotate-180'} transform duration-300`} />
      </button>
    </div>
  );
}

export default Sidebar;
