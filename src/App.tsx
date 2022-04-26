import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Content from './components/Content';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<HomePage />} />
        <Route path="/tasks/dashboard" element={<DashboardPage />}>
          <Route index element={<Content title="All" />} />
          <Route path="all" element={<Content title="All" />} />
          <Route path="completed" element={<Content title="Completed" />} />
          <Route path="in-progress" element={<Content title="In Progress" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
