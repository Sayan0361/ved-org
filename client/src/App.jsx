import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import VisonGlow from './sections/VisionGlow';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero/>
      <Services/>
      <VisonGlow/>
    </div>
  );
}

export default App;