import React from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-stone-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Ubuntu Meats</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-orange-400 px-3 py-2">Home</a>
              <a href="#about" className="hover:text-orange-400 px-3 py-2">About</a>
              <a href="#products" className="hover:text-orange-400 px-3 py-2">Products</a>
              <a href="#locations" className="hover:text-orange-400 px-3 py-2">Locations</a>
              <a href="#contact" className="hover:text-orange-400 px-3 py-2">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-orange-400 px-3 py-2">Home</a>
            <a href="#about" className="block hover:text-orange-400 px-3 py-2">About</a>
            <a href="#products" className="block hover:text-orange-400 px-3 py-2">Products</a>
            <a href="#locations" className="block hover:text-orange-400 px-3 py-2">Locations</a>
            <a href="#contact" className="block hover:text-orange-400 px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;