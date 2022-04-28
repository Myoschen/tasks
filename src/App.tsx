import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Content from './components/Content';

// Pages
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';

// Store
import store from './slices/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<Content title="All" />} />
            <Route path="all" element={<Content title="All" />} />
            <Route path="completed" element={<Content title="Completed" />} />
            <Route path="in-progress" element={<Content title="In Progress" />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
