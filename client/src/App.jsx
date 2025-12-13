import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero/>
      <Services/>
    </div>
  );
}

export default App;