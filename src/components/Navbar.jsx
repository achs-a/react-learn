import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-white ml-4">ACHSA</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Home</a></li>
            <li><a href="#" className="text-white hover:bg-gray-600 px-3 py-2 rounded">About Me</a></li>
            <li><a href="#" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Services</a></li>
            <li><a href="#" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Portfolio</a></li>
            <li><a href="#" className="text-white hover:bg-gray-600 px-3 py-2 rounded">Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="bg-gradient-to-r from-purple-800 to-pink-700 text-white px-4 py-2 rounded hover:bg-gradient-to-l">Connect With Me</a>
      </div>
    </header>
  );
}

export default Navbar;
