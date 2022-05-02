import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';
import { updateProfile, sendEmailVerification } from '../firebase';
import { useAppSelector } from '../slices';
import DefaultImage from '../assets/user-default.png';
import SubmitButton from './Button/SubmitButton';
import useAuth from '../hooks/useAuth';
import { Toast } from '../utils/Notifications';

function Information() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const { currentUser } = useAuth();
  const [form, setForm] = useState<Omit<IUser, 'password'>>({
    username: user?.username || '',
    email: user?.email || '',
    emailVerified: user?.emailVerified || false,
    photoURL: user?.photoURL || '',
    creationTime: user?.creationTime || '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await updateProfile(
      currentUser as User,
      { displayName: form.username, photoURL: form.photoURL },
    ).then(() => {
      Toast.fire({ icon: 'success', titleText: 'Update successful !' });
      navigate(0); // Reload page
    });
  };

  const verifyEmail = async () => {
    await sendEmailVerification(currentUser as User);
    Toast.fire({ icon: 'info', titleText: 'It has sent a verification email to your mailbox.' });
  };

  return (
    <form className="flex flex-col items-center w-full md:flex-row md:justify-evenly gap-y-8 md:gap-y-0">
      <img
        className="rounded-full w-60 h-60 drop-shadow"
        src={user?.photoURL || DefaultImage}
        alt="user_photo"
      />
      <div className="flex flex-col gap-y-6">
        <label htmlFor="photo">
          <span className="text-lg font-semibold dark:text-gray-200">Photo URL</span>
          <input
            id="photoURL"
            name="photoURL"
            className="px-4 py-2 ml-4 text-gray-200 rounded-md w-80 dark:text-nord-700 bg-nord-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            value={form.photoURL}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          <span className="text-lg font-semibold dark:text-gray-200">Username</span>
          <input
            id="username"
            name="username"
            className="px-4 py-2 ml-4 text-gray-200 rounded-md w-80 dark:text-nord-700 bg-nord-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <span className="text-lg font-semibold dark:text-gray-200">Email</span>
          <input
            id="email"
            name="email"
            className="px-4 py-2 ml-4 text-gray-200 rounded-md w-80 dark:text-nord-700 bg-nord-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            value={form.email}
            disabled
          />
          <button
            type="button"
            className={`${form.emailVerified ? 'bg-green-400' : ' bg-red-400'} ml-2 p-2 font-semibold rounded-md `}
            onClick={verifyEmail}
            disabled={form.emailVerified}
          >
            {form.emailVerified ? 'Verified' : 'Not Verified'}
          </button>
        </label>
        <span className="text-lg font-semibold dark:text-gray-200">
          Created at:
          {' '}
          {form.creationTime}
        </span>
        <SubmitButton handleClick={handleSubmit}>Confirm</SubmitButton>
      </div>
    </form>
  );
}

export default Information;
