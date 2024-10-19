"use client"; // Ensure this is marked as a Client Component

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-white">
          Task<span className="text-yellow-300">Manager</span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links (hidden in mobile view) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-yellow-300 transition duration-300 font-semibold">
            Home
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition duration-300 font-semibold">
            About
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition duration-300 font-semibold">
            Contact
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition duration-300 font-semibold">
            Account
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition duration-300 bg-white rounded-lg shadow-md mt-2`}>
        <div className="flex flex-col items-center p-4">
          <a href="#" className="text-blue-500 hover:text-yellow-300 transition duration-300 font-semibold mb-2">
            Home
          </a>
          <a href="#" className="text-blue-500 hover:text-yellow-300 transition duration-300 font-semibold mb-2">
            About
          </a>
          <a href="#" className="text-blue-500 hover:text-yellow-300 transition duration-300 font-semibold mb-2">
            Contact
          </a>
          <a href="#" className="text-blue-500 hover:text-yellow-300 transition duration-300 font-semibold mb-2">
            Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
