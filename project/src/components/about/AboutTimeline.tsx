import React from 'react';

const timelineEvents = [
  {
    year: '1995',
    title: 'The Beginning',
    description: 'Founded in Johannesburg with a single store and a vision for quality.'
  },
  {
    year: '2000',
    title: 'Expansion Begins',
    description: 'Opened our first stores in Cape Town and Durban.'
  },
  {
    year: '2005',
    title: 'International Growth',
    description: 'Expanded into Zimbabwe, bringing our quality meats to new markets.'
  },
  {
    year: '2010',
    title: 'Zambian Market',
    description: 'Successfully entered the Zambian market with stores in Lusaka.'
  },
  {
    year: '2020',
    title: 'Sustainability Focus',
    description: 'Launched our comprehensive sustainability program.'
  }
];

const AboutTimeline = () => {
  return (
    <div className="relative mt-16">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-orange-200" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-orange-500 font-bold text-xl mb-2 block">{event.year}</span>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;