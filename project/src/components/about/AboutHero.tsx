import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-16">
      <div 
        className="h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Since 1995, Ubuntu Meats has been at the forefront of providing premium quality meats 
              to Southern Africa. Our journey began in South Africa and has grown to include Zambia 
              and Zimbabwe, bringing together the best of African farming traditions with modern 
              sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;