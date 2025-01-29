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
      className="bg-cover bg-center bg-fixed text-white shadow-xl sticky top-0 z-50"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-4xl font-extrabold tracking-wide text-transparent text-white">
          Byte Builder
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className="relative text-lg font-medium text-gray-100 hover:text-teal-400 transition duration-300 transform hover:scale-105 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="relative text-lg font-medium text-gray-100 hover:text-teal-400 transition duration-300 transform hover:scale-105 group"
            >
              Profile
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/youtube"
              className="relative text-lg font-medium text-gray-100 hover:text-teal-400 transition duration-300 transform hover:scale-105 group"
            >
              YouTube
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="relative text-lg font-medium text-gray-100 hover:text-teal-400 transition duration-300 transform hover:scale-105 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`fixed top-0 left-0 w-full bg-gradient-to-b from-teal-600 to-blue-600 text-white p-6 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="space-y-6">
          <li>
            <Link
              to="/"
              className="block text-2xl font-medium text-gray-100 hover:text-teal-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block text-2xl font-medium text-gray-100 hover:text-teal-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/youtube"
              className="block text-2xl font-medium text-gray-100 hover:text-teal-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              YouTube
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-2xl font-medium text-gray-100 hover:text-teal-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
