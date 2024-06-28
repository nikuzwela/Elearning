import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LevelTwoDetails = () => {
  const courses = [
    {
      name: 'Mathematics',
      description:
        'This mathematics book for primary school children introduces fundamental concepts through interactive exercises and clear explanations.',
      imgSrc: './photos/mathP1.png',
    },
    {
      name: 'English',
      description:
        'This English book for primary school students introduces basic vocabulary and engaging stories to foster language learning.',
      imgSrc: './photos/englishP2.jpg',
    },
    {
      name: 'Course 3',
      description: 'Description of Course 3',
      imgSrc: './photos/kinyaP1.png',
    },
    {
      name: 'Science',
      description:
        'This science book for primary school children explores fascinating topics through interactive experiments and colorful illustrations.',
      imgSrc: './photos/scinceP1.png',
    },
    {
      name: 'French',
      description:
        'This French book for primary school children introduces language basics and cultural insights through fun activities and colorful illustrations.',
      imgSrc: './photos/franceP1.png',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pt-20 pb-8 mb-8">
      <div className="text-center mb-4 md:mb-6 flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="block w-10 h-2 bg-yellow-300 mx-4"></span>
          <h1 className="text-yellow-300 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px] mb-2 md:mb-4">
            Discover Our Primary School Books
          </h1>
          <span className="block w-10 h-2 bg-yellow-300 mx-4"></span>
        </div>
      </div>

      <div className="bg-white py-2 px-4 md:px-12 lg:px-20">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2"
            >
              <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt={course.name}
                  src={course.imgSrc}
                  className="h-96 w-full object-cover rounded-t-lg"
                  style={{ minHeight: '250px' }}
                />
                <div className="p-4 sm:p-6 flex flex-col items-center">
                  <h3 className="text-xl font-medium text-teal-600">
                    {course.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600 text-center">
                    {course.description}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LevelTwoDetails;
