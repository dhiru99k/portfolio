import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../image/1.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-cover bg-center bg-fixed text-white shadow-lg sticky top-0 z-50"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {['Home', 'Profile', 'YouTube', 'Projects'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative text-lg font-medium text-gray-100 transition duration-300 transform hover:scale-105 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-3 bg-teal-600 rounded-lg text-white shadow-lg hover:bg-teal-700 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 text-white p-6 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-6 text-gray-300 hover:text-white transition duration-300"
          aria-label="Close Menu"
        >
          ✖
        </button>

        <ul className="space-y-6 text-center mt-10">
          {['Home', 'Profile', 'YouTube', 'Projects'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="block text-2xl font-medium text-gray-200 hover:text-teal-400 transition duration-300"
                onClick={toggleMobileMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
