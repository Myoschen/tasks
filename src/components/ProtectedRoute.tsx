import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useAppDispatch, init } from '../slices';

interface ProtectedRouteProps {
  children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (currentUser) {
    dispatch(init({
      username: currentUser.displayName,
      email: currentUser.email,
      emailVerified: currentUser.emailVerified,
      photoURL: currentUser.photoURL,
      creationTime: currentUser.metadata.creationTime,
    }));
    return children;
  }

  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
