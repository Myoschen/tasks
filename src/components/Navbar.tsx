import { LoginIcon, MenuIcon } from '@heroicons/react/solid';
import tasksIcon from '../assets/tasks.png';
import DarkMode from './DarkMode';
import Modal from './Modal';
import useToggle from '../hooks/useToggle';
import Form from './Form';
import NavItem from './NavItem';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useToggle();
  const [isLoginOpen, setIsLoginOpen] = useToggle();
  const [isLogin, setIsLogin] = useToggle(true);

  return (
    <>
      <nav className="relative z-10 px-6 py-4 transition-colors duration-300 bg-gray-200 shadow-lg dark:bg-nord-700">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center gap-x-2">
            <img className="object-center w-8 rounded-md drop-shadow-lg" src={tasksIcon} alt="tasks-icon" />
            <span className="text-2xl font-bold text-nord-600 dark:text-nord-100">Tasks</span>
          </div>
          <ul className="flex gap-x-2">
            <NavItem
              as="button"
              icon={<LoginIcon className="w-6" />}
              label="Login"
              handleClick={setIsLoginOpen}
              isOpen
              withTooltip={false}
            />
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
        {/* <button
        className="absolute duration-300 rounded-md right-6 top-6 hover:bg-nord-300"
        type="button"
      >
        <MdMenu size={24} className="shrink-0" />
      </button> */}
      </nav>

      {/* Modal */}
      <Modal isOpen={isLoginOpen} close={setIsLoginOpen}>
        <h1 className="text-4xl font-bold text-center">
          {isLogin ? 'Login' : 'Register'}
        </h1>
        <Form isLogin={isLogin} handleIsLogin={setIsLogin} />
      </Modal>
    </>
  );
}

export default Navbar;
