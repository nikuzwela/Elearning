import React from 'react';

const LevelOne = () => {
  return (
    <div className="w-full pt-36 mb-8">
      <div className="text-center mb-8 md:mb-12 flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="block w-10 h-2 bg-yellow-300 mx-4"></span>
          <h1 className="text-yellow-300 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px]">
            LEVEL ONE COURSES
          </h1>
          <span className="block w-10 h-2 bg-yellow-300 mx-4"></span>
        </div>
      </div>

      <div className="flex flex-col bg-white py-2 px-4 md:px-12">
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
          {/* Filter courses to display only level one courses */}
          {courses
            .filter((course) => course.title.includes('Level One'))
            .map((course) => (
              <div
                key={course.title}
                className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80"
              >
                <div className="flex items-center justify-center h-64 bg-yellow-100 rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.alt}
                    className="rounded-full h-48 w-48"
                  />
                </div>
                <div className="px-4 py-6 flex flex-col items-center">
                  <h1 className="text-xl font-bold text-black">
                    {course.title}
                  </h1>
                  <button className="bg-yellow-300 text-white py-2 px-6 rounded-md mt-4 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                    Find More
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LevelOne;

// Sample course data (replace with your actual data)
const courses = [
  {
    title: 'Level One Course',
    image: '/public/photos/nursary1.png',
    alt: 'Level One Course',
  },
  {
    title: 'Level Two Course',
    image: '/public/photos/nursary2.png',
    alt: 'Level Two Course',
  },
  // ... add more courses here
];
