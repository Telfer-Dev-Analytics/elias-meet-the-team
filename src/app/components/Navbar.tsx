"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 transition-transform duration-500 ease-in-out ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      } ${
        theme === 'dark'
          ? 'bg-black bg-opacity-50 backdrop-blur-lg'
          : 'bg-white bg-opacity-70 backdrop-blur-md'
      }`}
    >
      {/* Logo and Title Section */}
      <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400'} rounded-full p-3 px-6`}>
        <Image
          src="/path-to-logo-icon.svg" // Replace with your logo path
          alt="BTA Logo"
          width={20}
          height={20}
          priority={true}
        />
        <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>BTA</span>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={theme === 'dark' ? 'white' : 'black'}  // Adapting the color based on the theme
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Links Section for larger screens */}
      <div className={`hidden lg:flex space-x-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-full px-10 py-2`}>
        <Link href="/about" className={theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}>
          About Us
        </Link>
        <Link href="/events" className={theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}>
          Events
        </Link>
        <Link href="/team" className={theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}>
          Team
        </Link>
        <Link href="/faq" className={theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}>
          FAQ
        </Link>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div
          className={`lg:hidden absolute top-16 left-0 w-full z-40 py-4 shadow-lg ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <Link href="/about" className="block px-8 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            About Us
          </Link>
          <Link href="/events" className="block px-8 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Events
          </Link>
          <Link href="/team" className="block px-8 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Team
          </Link>
          <Link href="/faq" className="block px-8 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            FAQ
          </Link>
          <Link href="/join" className="block px-8 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Join
          </Link>
        </div>
      )}

      {/* Join Button and Theme Toggle Button Section */}
      <div className="hidden lg:flex items-center space-x-2">
        <div className={`rounded-full px-6 py-2 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'}`}>
          <Link href="/join" className={theme === 'dark' ? 'text-white' : 'text-black'}>
            Join
          </Link>
        </div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
