import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/static/OMSAI_logo.png"
                alt="OM SAI ENGINEERING Logo"
                className="h-12 w-12 mr-3"
              />
              <div>
                <div className="text-xl font-bold">OM SAI ENGINEERING</div>
                <div className="text-xs text-gray-400">STRUCTURAL, FABRICATION & PIPING SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of structural, fabrication, and piping plant equipment
              maintenance services in Maharashtra, delivering quality engineering solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-white transition-colors">Quality</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">Structural Engineering Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">Fabrication Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">Piping Solutions</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">Plant Equipment Maintenance</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">PEB Erection Installtion</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-blue-600 cursor-pointer">Custom Engineering Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a
                  href="mailto:info@omsaiengineering.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  info@omsaiengineering.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a
                  href="tel:+919588601820"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  +91 958860 1820
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-400">Kalyan, Thane, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 OM SAI ENGINEERING. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;