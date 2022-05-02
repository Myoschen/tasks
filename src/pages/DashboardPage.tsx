import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function DashboardPage() {
  return (
    <div className="relative flex overflow-hidden tracking-wider">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default DashboardPage;
