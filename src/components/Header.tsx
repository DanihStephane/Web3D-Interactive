import React from 'react';
import { UserCircle2, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">3D World</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <UserCircle2 className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;