// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from './logo1.jpeg';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = () => {
    setDropdownOpen(false); 
  };

  return (
    <div className="bg-gray-800 text-white">
        
      <div className="container  flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* logo image */}
          <img src={logo1} alt="Logo" className="h-8 " />
          {/* Hide on small devices */}
          <span className="ml-2 text-lg font-semibold hidden sm:inline ">Dynamics</span>
        </div>

        <div className="relative group bg-white text-black rounded mr-8 p-2">
          {/* Hide on small devices */}
          <span className="hidden sm:inline cursor-pointer" onClick={toggleDropdown}>
            Full_Name
          </span>
          <button className="ml-2  mr-2 text-black focus:outline-none" onClick={toggleDropdown}>
            ▼
          </button>
          <div
            className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white text-black py-2 mt-2 rounded shadow-lg`}
          >
            
            <Link to="/my-profile" className="block px-4 py-2 hover:bg-gray-200 " onClick={handleOptionClick}>
              My Profile
            </Link>
            <Link to="/leaderboard" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              LeaderBoard
            </Link>
            <Link to="/account" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              My Account
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              Contact Us
            </Link>
            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              LogOut
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
