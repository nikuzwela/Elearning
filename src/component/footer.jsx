import React from 'react';
import { FaCopyright, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-6 px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className='text-[12px]'>
            <h1 className="text-xl mb-4">Quick Links</h1>

            <div className="flex items-center mb-2">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <Link to="/About">
                <p className="text-white hover:text-yellow-300">About Us</p>
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <Link to="/Contact">
                <p className="text-white hover:text-yellow-300">Contact Us</p>
              </Link>
            </div>
            <div className="flex items-center">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <Link to="/Level">
                <p className="text-white hover:text-yellow-300">Level</p>
              </Link>
            </div>
          </div>
          <div className='text-[12px]'>
            <h3 className="text-xl mb-4">Developers</h3>
            <div className="flex items-center mb-2">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <p className="text-white">Documentation</p>
            </div>
            <div className="flex items-center mb-2">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <p className="text-white">API</p>
            </div>
            <div className="flex items-center">
              <HiOutlineArrowRight className="text-yellow-300 mr-2" />
              <p className="text-white">Open Source</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-yellow-300 text-[14px] mr-2" />
              <p className="text-white text-[12px]">+250 790000000</p>
            </div>
            <div className="flex items-center">
              <MdOutlineEmail className="text-yellow-300 text-[15px] mr-2 mt-[3px]" />
              <p className="text-white">
                <Link to="/" className="hover:text-yellow-300 text-[12px]">wwwwchool@gmail.com</Link>
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <AiFillTwitterCircle className="text-[15px] text-yellow-300 hover:text-yellow-400" />
              <BsFacebook className="text-[15px] text-yellow-300 hover:text-yellow-400" />
              <IoLogoYoutube className="text-[15px] text-yellow-300 hover:text-yellow-400" />
              <BsInstagram className="text-[15px] text-yellow-300 hover:text-yellow-400" />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Footer;
