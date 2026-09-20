import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../images/logo/logo2.png'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-6 p-4 bg-gray-900 text-white">
        <div>
          <img src={myLogo} alt="Logo" className='w-20' />
        </div>
        <nav className='flex justify-between gap-10 mr-5'>
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/course" className="hover:text-blue-400">Courses</Link>
          <Link to="/service" className="hover:text-blue-400">Service</Link>
          <Link to="/gallery" className="hover:text-blue-400">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/help" className="hover:text-blue-400">Help</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;