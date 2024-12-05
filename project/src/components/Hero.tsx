import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400">
            Quality Meats from African Soil
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience the finest cuts of meat, sourced from sustainable farms across Southern Africa
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
            Find a Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;