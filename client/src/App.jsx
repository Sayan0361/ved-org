import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import VisonGlow from './sections/VisionGlow';
import DreamDesign from './sections/DreamDesign';
import CustomerTestimonials from './sections/CustomerTestimonials';
import NewsletterSubscription from './sections/NewsletterSubscription';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero/>
      <Services/>
      <VisonGlow/>
      <DreamDesign/>
      <CustomerTestimonials/>
      <NewsletterSubscription/>
      <Footer/>
    </div>
  );
}

export default App;