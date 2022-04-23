import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="tracking-wider">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
