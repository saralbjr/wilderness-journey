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
      <nav className="relative z-10 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <img src="/wilderness-experience-logo.png" alt="Wilderness Experience Logo" className="h-16 w-auto" />
          </div>
          <div className="flex justify-center space-x-16">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/destination">Destination</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/packages">Our Packages</NavLink>
          </div>
          <div className="w-16"></div> {/* Empty div for balance */}
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center h-screen">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-center font-segoe">Wilderness Experience</h1>
          <p className="text-xl italic text-center font-segoe">
            "The mountains are calling and I must go."
            <br />
            - John Muir
          </p>
        </div>
      </main>

      {/* Custom font styles */}
      <style>
        {`
          @font-face {
            font-family: 'Segoe UI Historic';
            src: url('/fonts/segoe-ui-historic.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors duration-300 font-segoe"
  >
    {children}
  </Link>
);

export default Index;
