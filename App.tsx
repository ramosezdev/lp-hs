import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vsl from './components/Vsl';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <Vsl />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;