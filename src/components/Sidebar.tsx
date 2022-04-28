import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ViewListIcon, LogoutIcon, CheckIcon, DotsCircleHorizontalIcon, ChevronRightIcon,
} from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import userAvatar from '../assets/user-default.png';
import DarkMode from './DarkMode';
import useToggle from '../hooks/useToggle';
import { auth } from '../firebase';
import { Toast } from '../utils/Notifications';
import {
  useAppDispatch, useAppSelector, setUserLogOutState,
} from '../slices';
import ErrorHandler from '../firebase/error';

const navItems = [
  {
    name: 'All',
    to: 'all',
    icon: (<ViewListIcon className="w-6 shrink-0" />),
  },
  {
    name: 'Completed',
    to: 'completed',
    icon: (<CheckIcon className="w-6 shrink-0" />),
  },
  {
    name: 'In Progress',
    to: 'in-progress',
    icon: (<DotsCircleHorizontalIcon className="w-6 shrink-0" />),
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await signOut(auth)
        .then(() => {
          dispatch(setUserLogOutState());
          Toast.fire({ icon: 'success', titleText: 'Logout successful.' });
          navigate('/');
        })
        .catch((error: Error) => {
          const resMsg = ErrorHandler(error.message);
          Toast.fire({ icon: 'error', titleText: resMsg });
        });
    } catch (error) {
      assertIsError(error);
      Toast.fire({ icon: 'error', titleText: error.message });
    }
  };

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} transform relative h-screen p-5 pt-8 shadow-lg duration-300 bg-gray-200 dark:bg-nord-700`}>
      {/* Username and Image */}
      <div className="flex items-center space-x-4">
        <img src={userAvatar} className="w-10 border rounded-full drop-shadow" alt="user-avatar" />
        <h1 className={`${!isOpen && 'hidden'} flex-1 text-xl font-bold text-nord-600 dark:text-nord-100`}>
          {user.userData?.username}
        </h1>
        {/* TODO Go to Profile */}
      </div>
      <div className="h-[1px] w-full my-6 bg-nord-700 dark:bg-nord-100" />

      {/* nav__item  */}
      <div className="flex flex-col justify-between h-[calc(100%-6rem)]">
        <ul className="space-y-2 ">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to} className={({ isActive }) => `${isActive && 'bg-nord-300'} nav__item  group`}>
                {item.icon}
                <span className={`${!isOpen && 'hidden'}`}>{item.name}</span>
                <span className={`tooltip ${isOpen && 'hidden'}`}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          <li>
            <DarkMode styles="w-full text-left nav__item  group">
              <span className={`${!isOpen && 'hidden'}`}>Dark Mode</span>
              <span className={`tooltip ${isOpen && 'hidden'}`}>Dark Mode</span>
            </DarkMode>
          </li>
          <li>
            <button type="button" className="w-full text-left nav__item group" onClick={handleLogout}>
              <LogoutIcon className="w-6 shrink-0" />
              <span className={`${!isOpen && 'hidden'}`}>Logout</span>
              <span className={`tooltip ${isOpen && 'hidden'}`}>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen()}
        className="absolute z-10 p-2 duration-300 bg-gray-200 rounded-full top-1/2 -right-5 dark:bg-nord-700 text-nord-600 dark:text-nord-100"
      >
        <ChevronRightIcon className={`${isOpen && 'rotate-180'} w-6 transform duration-300`} />
      </button>
    </div>
  );
}

export default Sidebar;
