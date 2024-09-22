import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Navbar */}
      <nav className="relative z-10">
        <div className="container mx-auto px-6 py-3 flex flex-col items-center">
          <div className="mb-4">
            <img src="/wilderness-experience-logo.png" alt="Wilderness Experience Logo" className="h-16 w-auto" />
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/destination" className="text-white hover:text-gray-300">Destination</Link>
            <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
            <Link to="/packages" className="text-white hover:text-gray-300">Our Packages</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center h-screen">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-center">Wilderness Experience</h1>
          <p className="text-xl italic text-center">
            "The mountains are calling and I must go."
            <br />
            - John Muir
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
