import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <Icon className="w-8 h-8 text-orange-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutCard;