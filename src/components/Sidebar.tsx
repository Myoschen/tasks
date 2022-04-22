import React, { useState } from 'react';
import {
  MdList, MdDoneAll, MdPending, MdLogout, MdArrowForwardIos,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import userAvatar from '../assets/user-default.png';
import DarkMode from './DarkMode';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((state) => !state);
  };

  return (
    <div className={`${open ? 'w-72' : 'w-20'} duration-500 h-screen z-0 relative p-5 pt-8 transform shadow-2xl bg-nord-500`}>
      <div className="flex items-center space-x-4">
        <img src={userAvatar} className="w-10 rounded-full" alt="user-avatar" />
        <h1 className={`${!open && 'hidden'} flex-1 text-xl text-white font-bold`}>
          Username
        </h1>
        <button type="button" className={`${!open && 'hidden'} p-2 font-medium text-white duration-300 hover:text-nord-300`}>
          <MdLogout size={24} />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul className="pt-6 space-y-2">
          <li>
            <NavLink to="/all" className={({ isActive }) => `${isActive && 'bg-nord-300'} flex items-center p-2 text-white duration-300 rounded-md gap-x-4 hover:bg-nord-300`}>
              <MdList size={24} className="shrink-0" />
              <span className={`${!open && 'hidden'} font-medium text-md  leading-tight whitespace-nowrap flex-grow`}>All</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" className={({ isActive }) => `${isActive && 'bg-nord-300'} flex items-center p-2 text-white duration-300 rounded-md gap-x-4 hover:bg-nord-300`}>
              <MdDoneAll size={24} className="shrink-0" />
              <span className={`${!open && 'hidden'} font-medium text-md  whitespace-nowrap flex-grow`}>Completed</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/in-progress" className={({ isActive }) => `${isActive && 'bg-nord-300'} flex items-center p-2 text-white duration-300 rounded-md gap-x-4 hover:bg-nord-300`}>
              <MdPending size={24} className="shrink-0" />
              <span className={`${!open && 'hidden'} font-medium text-md  whitespace-nowrap flex-grow`}>In Progress</span>
            </NavLink>
          </li>
        </ul>
        <ul className="flex mb-10">
          <li className="p-2 text-white duration-300 rounded-md hover:bg-nord-300 text-[0px]">
            <DarkMode />
          </li>
        </ul>
      </div>
      <button type="button" onClick={handleOpen} className="absolute z-50 p-2 text-lg text-white duration-300 rounded-full bg-nord-700 top-1/2 -right-4 hover:ring hover:ring-nord-500">
        <MdArrowForwardIos className={`${open && 'rotate-180'} transform duration-300`} />
      </button>
    </div>
  );
}

export default Sidebar;
