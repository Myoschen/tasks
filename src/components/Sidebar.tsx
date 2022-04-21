import React from 'react';
import { MdList, MdDoneAll, MdPending } from 'react-icons/md';
import userAvatar from '../assets/user.png';

function Sidebar() {
  return (
    <div className="h-screen p-5 pt-8 shadow-2xl w-72 bg-nord-500">
      <div className="flex items-center space-x-4">
        <img src={userAvatar} className="w-10 rounded-full cursor-pointer" alt="user-avatar" />
        <h1 className="flex-1 text-xl font-medium text-white origin-left">
          Myos
        </h1>
        <button type="button" className="p-2 font-medium text-white duration-300 shadow-sm shadow-black/30 bg-nord-300 hover:bg-nord-100 rounded-xl">Logout</button>
      </div>
      <ul className="pt-6">
        <li>
          <a className="flex items-center p-2 text-white rounded-md gap-x-4 hover:bg-nord-300" href="#1">
            <MdList size={20} />
            <span>All</span>
          </a>
        </li>
        <li>
          <a className="flex items-center p-2 text-white rounded-md gap-x-4 hover:bg-nord-300" href="#1">
            <MdDoneAll size={20} />
            <span>Completed</span>
          </a>
        </li>
        <li>
          <a className="flex items-center p-2 text-white rounded-md gap-x-4 hover:bg-nord-300" href="#1">
            <MdPending size={20} />
            <span>In Progress</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
