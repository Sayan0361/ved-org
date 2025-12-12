import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero/>
      {/* <main className="px-4 sm:px-6 lg:px-8 py-8">
        <Hero/>
      </main> */}
    </div>
  );
}

export default App;