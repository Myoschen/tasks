import React from 'react';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="relative flex overflow-hidden tracking-wider">
      <Sidebar />
      <main className="flex-1 h-screen overflow-auto text-2xl font-semibold z-1 p-7">
        <div className="container">
          <h1 className="text-6xl font-bold">
            Title
          </h1>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
