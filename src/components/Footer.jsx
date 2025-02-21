import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-transparent text-gray-400 px-8 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
  
          {/* Language Selector */}
          <div className="mb-4">
            <select className="bg-black text-white border border-gray-500 px-2 py-1 rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
  
          {/* Copyright */}
          <p className="text-sm">© 2025 MyFlix, Inc.</p>
        </div>
      </footer>
    );
  };
  

export default Footer