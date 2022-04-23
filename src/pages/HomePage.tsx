import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="tracking-wider">
      <Navbar />
      <Hero />
      <Link to="/tasks/dashboard">
        DASHBOARD
      </Link>
    </div>
  );
}

export default HomePage;
