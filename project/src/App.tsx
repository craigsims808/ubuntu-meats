import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Products />
      <About />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;