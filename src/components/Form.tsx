import {
  useState, MouseEvent, ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';

// components
import SubmitButton from './Button/SubmitButton';

// utils
import { Toast } from '../utils/Notifications';
import ErrorHandler from '../firebase/error';

// redux
import { useAppDispatch } from '../slices';
import { login, register } from '../slices/auth/async';

interface FormProps {
  isLogin: boolean;
  handleIsLogin: () => void;
}

function Form({ isLogin, handleIsLogin }: FormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UserLoginOrRegister>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle user login
  const handleLogin = async () => {
    if (user.email && user.password) {
      const userData = {
        email: user.email,
        password: user.password,
      };
      dispatch(login(userData))
        .unwrap()
        .then((res) => {
          Toast.fire({ icon: 'success', title: res.message });
          navigate('/dashboard');
        })
        .catch((errorMessage: string) => {
          const msg = ErrorHandler(errorMessage);
          Toast.fire({ icon: 'error', title: msg });
        });
    } else {
      Toast.fire({ icon: 'question', title: 'Your email or password is wrong or empty.' });
    }
  };

  // Handle user register
  const handleRegister = async () => {
    if (user.username && user.email && user.password) {
      const userData = {
        username: user.username,
        email: user.email,
        password: user.password,
      };
      dispatch(register(userData))
        .unwrap()
        .then((res) => {
          Toast.fire({ icon: 'success', title: res.message });
          navigate('/dashboard');
        })
        .catch((errorMessage: string) => {
          const msg = ErrorHandler(errorMessage);
          Toast.fire({ icon: 'error', title: msg });
        });
    } else {
      Toast.fire({ icon: 'question', titleText: 'Your username, email or password is wrong or empty.' });
    }
  };

  // Handle form submit
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <form className="flex flex-col p-6 mt-6 gap-y-6">
      {!isLogin && (
        <label className="flex flex-col gap-y-2" htmlFor="username">
          <span className="text-lg tracking-wider">Username</span>
          <input
            id="username"
            className="px-4 py-2 text-lg tracking-wider rounded-md text-nord-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="username"
            onChange={handleChange}
          />
        </label>
      )}
      <label className="flex flex-col gap-y-2" htmlFor="email">
        <span className="text-lg tracking-wider">Email</span>
        <input
          id="email"
          className="px-4 py-2 text-lg tracking-wider rounded-md text-nord-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col gap-y-2" htmlFor="password">
        <span className="text-lg tracking-wider">
          Password
          {
            isLogin
          && <button type="button" className="ml-2 text-sm font-semibold text-gray-400">Forgot password ?</button>
          }
        </span>
        <input
          id="password"
          className="px-4 py-2 text-lg tracking-wider rounded-md text-nord-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </label>
      <SubmitButton className="mt-2" handleClick={handleSubmit}>Submit</SubmitButton>
      <div className="flex justify-center mt-2 gap-x-2">
        <span>
          {isLogin ? 'New user ?' : 'You already have a account ?'}
          <button type="button" className="ml-2 font-bold hover:text-cherrystone-600" onClick={handleIsLogin}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </span>
      </div>
    </form>
  );
}

export default Form;
