import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
  const images = [
    'https://static.wixstatic.com/media/a4a49c_9e31647671234b0eacfbc3fc547270ea~mv2.png/v1/fill/w_640,h_360,al_c,q_85,enc_auto/a4a49c_9e31647671234b0eacfbc3fc547270ea~mv2.png',
    'https://cdn.elearningindustry.com/wp-content/uploads/2016/09/7-reasons-adopt-elearning-for-your-kids-768x432.jpeg',
    'https://beastacademy.com/assets/images/live-classes/Boy-and-Girl-Doing-Homework.png'
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  };

  return (
    <div className="w-full h-screen relative">
      <Slide {...properties}>
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <img
              className="w-full h-screen object-cover"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slide>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-70">
        <div className="text-center mb-4">
          <h1 className="text-yellow-300 text-4xl md:text-4xl lg:text-3xl font-bold">
            Welcome to EduSupport
          </h1>
          <p className="text-white text-2xl p-2 md:text-2lg lg:text-xl font-bold">
            Guiding Your Child's Educational Journey
          </p>
        </div>
        <p className="text-white text-xs md:text-sm lg:text-base mb-4 text-center">
          Create a consistent study routine and empower your child's learning with our resources and support.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <Link to="/About">
            <button className="bg-yellow-300 text-gray-800 text-xs md:text-sm lg:text-base rounded-md py-2 px-4 hover:bg-yellow-400">
              Learn More
            </button>
          </Link>
          <Link to="/Login">
            <button className="bg-white text-gray-800 text-xs md:text-sm lg:text-base rounded-md py-2 px-5 hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
