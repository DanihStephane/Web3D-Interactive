import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black/10 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} 3D World. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:contact@3dworld.com" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              contact@3dworld.com
            </a>
            <a href="tel:+33123456789" className="flex items-center hover:text-gray-300 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;