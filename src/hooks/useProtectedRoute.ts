import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

// redux
import { useAppDispatch, setActiveUser } from '../slices';

// utils
import { Popup } from '../utils/Notifications';

export default function useProtectedRoute() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        Popup.fire({ icon: 'warning', titleText: 'You don\'t have permission to access here.' });
        navigate('/', { replace: true });
      } else {
        setIsAuthorized(true);
        dispatch(setActiveUser({
          userData: {
            username: user.displayName,
            email: user.email,
          },
        }));
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return isAuthorized;
}
