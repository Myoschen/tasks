import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <main className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1 className="text-4xl font-bold">Home Page</h1>
      </main>
    </div>
  );
}

export default App;
