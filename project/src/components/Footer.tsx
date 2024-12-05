import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ubuntu Meats</h3>
            <p className="text-gray-400">Bringing quality meats to Southern Africa since 1995</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="tel:+27123456789" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                +27 12 345 6789
              </a>
              <a href="mailto:info@ubuntumeats.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                info@ubuntumeats.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-stone-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ubuntu Meats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;