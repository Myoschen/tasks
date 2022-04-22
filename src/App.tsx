import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<HomePage />} />
        <Route path="/tasks/all" element={<HomePage />} />
        <Route path="/tasks/completed" element={<HomePage />} />
        <Route path="/tasks/in-progress" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
