import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Facebook, Linkedin, Instagram } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/products' },
    { name: 'QUALITY', href: '/quality' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <>
      {/* Top Social Bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 text-sm">
              <a href="mailto:info@omsaiengineering.com" className="hover:text-yellow-400 transition-colors">
                info@omsaiengineering.com
              </a>
              <a  className="hover:text-yellow-400 transition-colors">
                +91 958860 1820
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg fixed' : 'bg-white relative'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="flex items-center">
                  <img 
                    src="/static/OMSAI_logo.png" 
                    alt="OM SAI ENGINEERING Logo" 
                    className="h-12 w-12 md:h-20 md:w-20 mr-1"
                  />
                  <div>
                    <div className="text-sm md:text-2xl font-bold text-gray-800">OM SAI ENGINEERING</div>
                    <div className="text-xs text-gray-600 -mt-1 hidden sm:block">STRUCTURAL, FABRICATION & PIPING SOLUTIONS</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-yellow-500 ${
                      location.pathname === item.href
                        ? 'text-yellow-500 border-b-2 border-yellow-500'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-2 font-semibold hover:bg-yellow-500 transition-colors duration-200"
                >
                  REQUEST QUOTE
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-yellow-500 bg-yellow-50'
                        : 'text-gray-700 hover:text-yellow-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 bg-yellow-400 text-gray-900 font-semibold text-center mt-4"
                >
                  REQUEST QUOTE
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;