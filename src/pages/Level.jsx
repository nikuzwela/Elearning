import React from 'react';
import { Link } from 'react-router-dom';

const Level = () => {
  return (
    <div className="w-full pt-14 mb-8 bg-gray-500">
      <div className="text-center mb-8 md:mb-12 flex flex-col items-center justify-center">
      <div className="text-center mb-4 md:mb-12 flex flex-row items-center justify-center">  
        <h1 className="text-yellow-300 font-bold font-serif text-[20px] border-b-4 border-yellow-300 pb-[4px]  ">
          COURSES
        </h1>
      </div>
      </div>

      <div className="flex flex-col  py-2 px-4 md:px-12 pl-20 pr-20">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level One"
              src="https://st.depositphotos.com/1000137/2646/i/450/depositphotos_26460023-stock-photo-group-of-cute-little-prescool.jpg"
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL ONE</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Dive into the world of advanced learning with our comprehensive Level One courses...
              </p>

              <Link
                to="/LevelOneDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level Two"
              src="https://media.gettyimages.com/id/1170717275/photo/lets-learn-something-new-today.jpg?s=612x612&w=gi&k=20&c=07IYMQ87SCMKLM3sKi5gNYX6W_QGBWAcYYg6ouoHKZE="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL TWO</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Elevate your expertise with our Level Two courses, meticulously designed to deepen your understanding...
              </p>

              <Link
                to="/LevelTwoDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level Three"
              src="https://media.istockphoto.com/id/1338344319/photo/happy-diverse-junior-school-students-children-looking-at-camera-in-classroom.jpg?s=612x612&w=0&k=20&c=rTFnd9t0Zi58eAa_uzHhORC-sMhpGtAISuY48TJVXQ8="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL THREE</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Embark on a transformative journey with our Level Three courses, designed for ambitious individuals...
              </p>

              <Link
                to="/LevelThreeDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level Four"
              src="https://media.istockphoto.com/id/1475870297/photo/kids-fun-stretching-and-classroom-hands-in-the-air-for-happy-children-assessment-growth-in-a.webp?b=1&s=170667a&w=0&k=20&c=fo0U72QFIHc2F39bKf0FBvMpEOzC08EY-dWlEOUCvuI="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL FOUR</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Advance your expertise and prepare for the pinnacle of achievement with our Level Four courses...
              </p>

              <Link
                to="/LevelFourDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level Five"
              src="https://media.istockphoto.com/id/1446488662/photo/group-work-of-school-children-students-discuss-a-collective-project-at-school.jpg?s=612x612&w=0&k=20&c=TcK_54lNHDS8i3kOI00hiXjz8_ZD9r7_Y9sV-Hz8pHU="
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL FIVE</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Achieve unparalleled mastery and specialize in your field with our Level Five courses, designed for the most dedicated learners...
              </p>

              <Link
                to="/LevelFiveDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg w-full sm:w-80 transform transition-transform duration-300 hover:scale-105">
            <img
              alt="Level Six"
              src="https://static8.depositphotos.com/1018113/869/i/450/depositphotos_8693822-stock-photo-emotional-friends.jpg"
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 sm:p-6 px-4 py-6 flex flex-col items-center">
              <a href="#">
                <h3 className="text-xl font-medium text-yellow-500">LEVEL SIX</h3>
              </a>

              <p className="mt-2 text-sm text-gray-600">
                Advance your expertise and prepare for the pinnacle of achievement with our Level Four courses...
              </p>

              <Link
                to="/LevelSixDetails"
                className="inline-flex items-center gap-1 text-sm font-medium text-yellow-500 mt-4"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all transform ml-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Level;
