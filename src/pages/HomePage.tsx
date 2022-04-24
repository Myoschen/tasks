import { Link } from 'react-router-dom';
import { MdLogin, MdPersonAdd } from 'react-icons/md';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import tasksIcon from '../assets/tasks.png';
import DarkMode from '../components/DarkMode';

const navItem = [
  {
    label: 'Login',
    icon: (<MdLogin size={24} className="shrink-0" />),
  },
  {
    label: 'Register',
    icon: (<MdPersonAdd size={24} className="shrink-0" />),
  },
];

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar
        icon={tasksIcon}
        name="Tasks"
      >
        {navItem.map((item) => (
          <li key={item.label}>
            <button type="button" className="link">
              {item.icon}
              <span>{item.label}</span>
            </button>
          </li>
        ))}
        <DarkMode />
      </Navbar>

      {/* Hero */}
      <Hero title="Hello !">
        <Link className="p-2 text-lg font-medium text-white rounded-md bg-nord-500" to="/tasks/dashboard">
          Get Started
        </Link>
      </Hero>
    </>
  );
}

export default HomePage;
