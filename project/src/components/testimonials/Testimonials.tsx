import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './TestimonialData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers across Southern Africa have to say about Ubuntu Meats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-orange-50 rounded-lg p-8">
            <p className="text-2xl font-semibold text-orange-800 mb-4">
              Join our satisfied customers today!
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Find Your Nearest Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;