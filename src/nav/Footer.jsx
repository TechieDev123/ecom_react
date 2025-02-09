import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">eMart</h3>
          <p className="text-sm text-gray-400">Shop for the best deals on products online!</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">manikonda, hyderabad, india</p>
          <p className="text-gray-400 text-sm">email: support@emart.com</p>
          <p className="text-gray-400 text-sm">phone: +91-1234567890</p>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-700 py-4 mt-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} eMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
