import React from 'react';
import { Leaf, Award, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-orange-500" />,
    title: 'Sustainable Farming',
    description: 'Our meats come from carefully selected farms that practice sustainable and ethical farming methods across Southern Africa.'
  },
  {
    icon: <Award className="w-12 h-12 text-orange-500" />,
    title: 'Premium Quality',
    description: 'Every cut of meat is inspected for quality, ensuring you get the finest selection for your table.'
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: 'Community First',
    description: 'We support local farmers and communities, fostering growth and development across the region.'
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-orange-500" />,
    title: 'Safety Guaranteed',
    description: 'Our facilities maintain the highest standards of food safety and hygiene, exceeding industry requirements.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Ubuntu Meats?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 25 years of experience, we've built our reputation on quality, 
            trust, and commitment to our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 text-center rounded-xl transition-all duration-300 hover:bg-orange-50"
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-8 rounded-xl bg-stone-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">25+</div>
                <div className="text-gray-600 mt-2">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600 mt-2">Store Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">100k+</div>
                <div className="text-gray-600 mt-2">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">3</div>
                <div className="text-gray-600 mt-2">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;