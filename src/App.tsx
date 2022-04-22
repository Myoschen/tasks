import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<HomePage />} />
        <Route path="/completed" element={<HomePage />} />
        <Route path="/in-progress" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
