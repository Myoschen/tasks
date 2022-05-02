/* eslint-disable max-len */
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Content from './components/Content';
import TaskList from './components/Task/TaskList';
import Analytics from './components/Analytics';
import Information from './components/Information';

// Pages
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import store from './slices/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
            <Route index element={<Content title="Analytics"><Analytics /></Content>} />
            <Route path="all" element={<Content title="All"><TaskList /></Content>} />
            <Route path="completed" element={<Content title="Completed"><TaskList /></Content>} />
            <Route path="in-progress" element={<Content title="In Progress"><TaskList /></Content>} />
            <Route path="information" element={<Content title="Your information"><Information /></Content>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
