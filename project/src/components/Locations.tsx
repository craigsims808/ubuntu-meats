import React from 'react';
import { MapPin } from 'lucide-react';

const locations = {
  'South Africa': ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria'],
  'Zimbabwe': ['Harare', 'Bulawayo'],
  'Zambia': ['Lusaka', 'Kitwe']
};

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Locations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(locations).map(([country, cities]) => (
            <div key={country} className="border border-stone-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{country}</h3>
              <ul className="space-y-3">
                {cities.map((city) => (
                  <li key={city} className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-400 mr-2" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;