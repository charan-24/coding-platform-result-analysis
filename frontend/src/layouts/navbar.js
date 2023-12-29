// Navbar.js
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.jpeg';
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [style,setStyle] = useState({});
  const [clicked,setClicked] = useState(0);
  const toggleDropdown = () => {
    if(!isDropdownOpen){
      setStyle({
        transform: 'rotate(180deg)',
        transition: 'transform 150ms ease',
      });
    }
    else{
      setStyle({
        transform: 'rotate(360deg)',
        transition: 'transform 150ms ease',
      });
    }
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = () => {
    setStyle({
      transform: 'rotate(360deg)',
      transition: 'transform 150ms ease',
    });
    setDropdownOpen(false); 
  };

  // useEffect(()=>{

  // },[clicked])
  //  document.addEventListener('click',(e)=>{
  //   console.log(e.target.className);
  //   if(e.target.className!=="dropdownmenu" && e.target.className!=="dropdown" && e.target.className!=="full_name"){
  //     toggleDropdown();
  //   }
  //  });

  return (
    <div className="bg-gray-800 text-white">    
      <div className="container  flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* logo image */}
          <img src={logo1} alt="Logo" className="h-8 " />
          {/* Hide on small devices */}
          <span className="ml-2 text-lg font-semibold hidden sm:inline ">Dynamics</span>
        </div>

        <div className=" dropdownmenu relative group bg-white text-black rounded mr-4 p-2" id='dropdownmeu' name="dropdownmenu" >
          {/* Hide on small devices */}
          <span className=" full_name hidden sm:inline cursor-pointer" id="full_name" name="full_name" onClick={toggleDropdown}>
            Full_Name
          </span>
          <button className="ml-2  mr-2 text-black focus:outline-none" id='dropdown' name="dropdown" onClick={toggleDropdown}>
            {<IoIosArrowDropdownCircle className='dropdown text-[20px]' style={style}/>}
          </button>
          <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white text-black py-2 mt-2 rounded shadow-lg`}>            
            <Link to="/my-profile" className="block px-4 py-2 hover:bg-gray-200 " onClick={handleOptionClick}>
              My Profile
            </Link>
            <Link to="/leaderboard" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              LeaderBoard
            </Link>
            <Link to="/my-account" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              My Account
            </Link>
            {/* <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              Contact Us
            </Link>
            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200" onClick={handleOptionClick}>
              LogOut
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
