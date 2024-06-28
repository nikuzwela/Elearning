import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  return (
    <section className="text-gray-800 flex justify-between items-center fixed w-full z-50 px-16 py-2 bg-yellow-300 shadow-md">
      <div className="flex items-center">
        <h1 className="text-gray-800 text-2xl font-semibold pl-4"> EduSu </h1>
      </div>
      <div className="md:hidden">
        <FaBars className="text-gray-800 cursor-pointer" onClick={toggleMenu} />
      </div>

      <nav className="hidden md:flex md:items-center gap-6">
        <NavLink to="/" className="hover:text-gray-800 mx-2">
          Home
        </NavLink>
        <NavLink to="/About" className="hover:text-gray-800 mx-2">
          About
        </NavLink>
        <NavLink to="/Level" className="hover:text-gray-800 mx-2">
          Level
        </NavLink>
        <NavLink to="/Contact" className="hover:text-gray-800 mx-2">
          Contact
        </NavLink>
        <NavLink to="/Login" className="hover:text-gray-800 mx-2">
          <button className="bg-gray-500 text-white flex justify-center items-center text-[14px] rounded-md h-8 px-6 hover:bg-gray-700">
            Login
          </button>
        </NavLink>
      </nav>

      {/* Conditional Rendering of Navigation List for Small Screens */}
      {showMenu && (
        <div className="absolute top-16 right-0 w-full md:hidden bg-yellow-300 shadow-lg rounded-md p-4">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className="hover:text-gray-800 block"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="hover:text-gray-800 block"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/Level"
              className="hover:text-gray-800 block"
              onClick={toggleMenu}
            >
              Level
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:text-gray-800 block"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/Login"
              className="hover:text-gray-800 block"
              onClick={toggleMenu}
            >
              <button className="bg-gray-800 text-white text-lg rounded-md py-2 px-4 w-full hover:bg-gray-700">
                Login
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </section>
  );
};

export default NavBar;
