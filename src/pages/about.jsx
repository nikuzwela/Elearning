import React from 'react';
import { FaGraduationCap, FaBookOpen, FaHome } from 'react-icons/fa';
import { PiChatCircleDotsLight } from 'react-icons/pi';
import { HiChevronRight } from 'react-icons/hi';

const About = () => {
  return (
    <div className="w-full pt-14 pb-4 bg-gray-500">
      <div className="text-center mb-4 md:mb-12 flex flex-row items-center justify-center">  
        <h1 className="text-yellow-300 font-bold font-serif text-[20px] border-b-4 border-yellow-300 pb-[4px]  ">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-8 px-6 md:px-20">
        <div className="bg-center bg-cover w-full md:w-96 h-[300px] rounded-lg shadow-md" style={{ backgroundImage: 'url(https://access2successonline.com/wp-content/uploads/2022/01/parents-student-online-learning-1024x683.png)' }}></div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-yellow-300 text-2xl md:text-2xl font-semibold mb-4">Welcome to EduSupport</h2>
          <p className="text-white text-[13px] mb-6">
            Welcome to EduSupport, your partner in supporting your children's education at home. Our mission is to empower parents with resources and strategies to enhance learning outside the classroom. We offer expert advice, interactive tools, and a supportive community, along with a chat feature for direct communication with your child's teacher. Together, we can ensure every child reaches their full potential.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <HiChevronRight className="text-yellow-300 text-[15px] mr-2" />
              <p className="text-[13px] text-gray-300">Best performance strategies</p>
            </div>
            <div className="flex items-center">
              <HiChevronRight className="text-yellow-300 text-[15px] mr-2" />
              <p className="text-[13px] text-gray-300">Direct chat with teachers</p>
            </div>
            <div className="flex items-center">
              <HiChevronRight className="text-yellow-300 text-[15px] mr-2" />
              <p className="text-[13px] text-gray-300">Extensive book library</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-6 pt-10 md:px-20">
        <div className="group bg-yellow-200 rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:border-2 hover:border-gray-800">
          <FaHome size={30} className=" mb-3 text-yellow-300 group-hover:text-gray-800" />
          <h2 className="text-black text-[15px] font-semibold mb-3 group-hover:text-gray-800">
            Home
          </h2>
          <p className="text-black text-center text-[13px] group-hover:text-gray-800">
            Welcome to EduSupport, your partner in guiding your children's educational journey at home.
          </p>
        </div>

        <div className="group bg-yellow-200 rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:border-2 hover:border-gray-800">
          <FaGraduationCap size={30} className=" mb-3 text-yellow-300 group-hover:text-gray-800" />
          <h2 className="text-black text-[15px] font-semibold mb-3 group-hover:text-gray-800">
            Skilled Students
          </h2>
          <p className="text-black text-center text-[13px] group-hover:text-gray-800">
            Our mission is to empower parents with resources to effectively assist their children with their studies.
          </p>
        </div>

        <div className="group bg-yellow-200 rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:border-2 hover:border-gray-800">
          <FaBookOpen size={30} className=" mb-3 text-yellow-300 group-hover:text-gray-800" />
          <h2 className="text-black text-[15px] font-semibold mb-3 group-hover:text-gray-800">
            Book Library
          </h2>
          <p className="text-black text-center text-[13px] group-hover:text-gray-800">
            We offer a variety of resources designed to help parents support their children's education.
          </p>
        </div>

        <div className="group bg-yellow-200 rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out hover:border-2 hover:border-gray-800">
          <PiChatCircleDotsLight size={30} className=" mb-3 text-yellow-300 group-hover:text-gray-800" />
          <h2 className="text-black text-[15px] font-semibold mb-3 group-hover:text-gray-800">
            Chat
          </h2>
          <p className="text-black text-center text-[13px] group-hover:text-gray-800">
            Information about the chat feature for parents to communicate with their child's teacher for follower-up.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
