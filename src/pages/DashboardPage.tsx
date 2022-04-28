import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import useProtectedRoute from '../hooks/useProtectedRoute';

function DashboardPage() {
  const isAuthorized = useProtectedRoute();

  return isAuthorized ? (
    <div className="relative flex overflow-hidden tracking-wider">
      <Sidebar />
      <Outlet />
    </div>
  ) : (<div />);
}

export default DashboardPage;
