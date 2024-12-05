import React from 'react';
import AboutHero from './AboutHero';
import AboutCard from './AboutCard';
import AboutTimeline from './AboutTimeline';
import { Scale, Heart, Users, Leaf } from 'lucide-react';

const values = [
  {
    Icon: Scale,
    title: 'Quality First',
    description: 'We maintain the highest standards in meat selection and processing, ensuring every cut meets our premium quality benchmarks.'
  },
  {
    Icon: Heart,
    title: 'Customer Care',
    description: 'Our commitment to customer satisfaction drives everything we do, from product selection to after-sales service.'
  },
  {
    Icon: Users,
    title: 'Community Impact',
    description: 'We believe in growing together with our communities, supporting local farmers and creating sustainable employment.'
  },
  {
    Icon: Leaf,
    title: 'Sustainability',
    description: 'Our practices are designed to protect the environment and ensure the long-term sustainability of our industry.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AboutCard key={index} {...value} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <AboutTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;