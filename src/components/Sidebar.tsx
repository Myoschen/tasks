import { useNavigate } from 'react-router-dom';
import {
  ViewListIcon, LogoutIcon, CheckIcon, DotsCircleHorizontalIcon, ChevronRightIcon, CogIcon,
} from '@heroicons/react/solid';
import ErrorHandler from '../firebase/error';
import {
  useAppDispatch, useAppSelector,
} from '../slices';
import DarkMode from './DarkMode';
import useToggle from '../hooks/useToggle';
import { Toast } from '../utils/Notifications';
import DefaultImage from '../assets/user-default.png';
import NavItem from './NavItem';
import ToolTip from './ToolTip';
import Button from './Button/Button';
import { logout } from '../slices/auth/async';

const navItems = [
  {
    label: 'All',
    path: 'all',
    icon: (<ViewListIcon className="w-6 shrink-0" />),
  },
  {
    label: 'Completed',
    path: 'completed',
    icon: (<CheckIcon className="w-6 shrink-0" />),
  },
  {
    label: 'In Progress',
    path: 'in-progress',
    icon: (<DotsCircleHorizontalIcon className="w-6 shrink-0" />),
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  // Handle user logout
  const handleLogout = async () => {
    dispatch(logout())
      .unwrap()
      .then((res) => {
        Toast.fire({ icon: 'success', title: res });
        navigate('/');
      })
      .catch((errorMessage: string) => {
        const msg = ErrorHandler(errorMessage);
        Toast.fire({ icon: 'error', title: msg });
      });
  };

  return (
    <div className={`${isOpen ? 'w-72' : 'w-20'} transform relative h-screen p-5 pt-8 shadow-lg duration-300 bg-gray-200 dark:bg-nord-700`}>
      {/* Username and Image */}
      <div className="flex items-center space-x-4">
        <img src={user?.photoURL || DefaultImage} className="w-10 h-10 rounded-full drop-shadow" alt="user-avatar" />
        <h1 className={`${!isOpen && 'hidden'} flex-1 text-xl font-bold text-nord-600 dark:text-nord-100`}>
          {user?.username}
        </h1>
        <Button className={`${!isOpen && 'hidden'}`} handleClick={() => navigate('/dashboard/information')}>
          <CogIcon className="w-6 shrink-0" />
        </Button>
      </div>
      <div className="h-[1px] w-full my-6 bg-nord-700 dark:bg-nord-100" />

      <div className="flex flex-col justify-between h-[calc(100%-6rem)]">
        <ul className="space-y-2 ">
          {
            navItems.map((item) => (
              <NavItem
                key={item.label}
                as="link"
                path={item.path}
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
                withTooltip
              />
            ))
          }
        </ul>
        <ul className="space-y-2">
          <li>
            <DarkMode
              styles="w-full text-left group flex items-center p-2 rounded-md gap-x-2 relative duration-300 bg-nord-100 text-nord-600 hover:bg-nord-300 dark:bg-nord-600 dark:text-nord-100 dark:hover:bg-nord-300"
            >
              <span className={`${!isOpen && 'hidden'} font-medium whitespace-nowrap flex-grow`}>Dark Mode</span>
              <ToolTip label="Dark Mode" className={`${isOpen && 'hidden'}`} />
            </DarkMode>
          </li>
          <NavItem
            as="button"
            icon={<LogoutIcon className="w-6 shrink-0" />}
            label="Logout"
            handleClick={handleLogout}
            withTooltip
            isOpen={isOpen}
          />
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
