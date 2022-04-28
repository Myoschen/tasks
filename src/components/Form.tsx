import {
  useState, useEffect, MouseEvent, ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged,
  User,
} from 'firebase/auth';
import { useAppDispatch, setActiveUser } from '../slices';
import { auth } from '../firebase';
import { Toast } from '../utils/Notifications';
import ErrorHandler from '../firebase/error';

interface FormProps {
  isLogin: boolean;
  handleIsLogin: () => void;
}

function Form({ isLogin, handleIsLogin }: FormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser>({
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
      await signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          Toast.fire({ icon: 'success', titleText: 'Login Successful.' });
        }).catch((error: Error) => {
          const resMsg = ErrorHandler(error.message);
          Toast.fire({ icon: 'error', titleText: resMsg });
        });
    } else {
      Toast.fire({ icon: 'question', titleText: 'Your email or password is wrong or empty.' });
    }
  };

  // Handle user register
  const handleRegister = async () => {
    if (user.username && user.email && user.password) {
      const userDetails = await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => userCredential.user)
        .catch((error) => {
          const resMsg = ErrorHandler(error.message);
          Toast.fire({ icon: 'error', titleText: resMsg });
        }) as User;
      await updateProfile(userDetails, { displayName: user.username })
        .then(() => Toast.fire({ icon: 'success', titleText: 'Registration Successful.' }));
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userDetails) => {
      console.log(userDetails);
      if (userDetails !== null) {
        const displayName = userDetails.displayName || user.username;
        dispatch(setActiveUser(
          { userData: { username: displayName, email: userDetails?.email } },
        ));
        navigate('/dashboard');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate, user.username]);

  return (
    <form className="flex flex-col p-6 mt-6 gap-y-6">
      {!isLogin && (
        <label className="form-label" htmlFor="username">
          <span>Username</span>
          <input id="username" className="form-input" type="text" name="username" onChange={handleChange} />
        </label>
      )}
      <label className="form-label" htmlFor="email">
        <span>Email</span>
        <input id="email" className="form-input" type="email" name="email" onChange={handleChange} />
      </label>
      <label className="form-label" htmlFor="password">
        <span>Password</span>
        <input id="password" className="form-input" type="password" name="password" onChange={handleChange} />
      </label>
      <button className="mt-2 button" type="submit" onClick={handleSubmit}>Submit</button>
      <div className="flex justify-center mt-2 gap-x-2">
        <span>New member ?</span>
        <button type="button" className="font-bold hover:text-cherrystone-600" onClick={handleIsLogin}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
    </form>
  );
}

export default Form;
