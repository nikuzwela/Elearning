import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Fetch instructors data
    axios
      .get(
        'https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse'
      )
      .then((response) => {
        console.log(response);
        const courses = response.data.courses;
        // Extract unique instructors
        const uniqueInstructors = [
          ...new Set(courses.map((course) => course.courseTeacher)),
        ];
        // Map instructor data
        const mappedInstructors = uniqueInstructors.map((instructorName) => {
          // Filter courses for each instructor
          const instructorCourses = courses.filter(
            (course) => course.courseTeacher === instructorName
          );
          // Assuming contact information is available in the first course of each instructor
          const contactInfo =
            instructorCourses.length > 0
              ? instructorCourses[0].courseContact
              : '';
          return {
            name: instructorName,
            contact: contactInfo,
            courses: instructorCourses,
          };
        });
        setInstructors(mappedInstructors);
      })
      .catch((error) => {
        console.error('Error fetching instructor data:', error);
      });
  }, []);

  const handleSelectInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    // Assuming you want to clear chat when switching instructors
    setChat([]);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'Parent', // Assuming parent is the sender
        text: message.trim(),
      };
      setChat([...chat, newMessage]);
      // Clear input field after sending message
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome back on instructor </h1>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 mr-8">
          <h2 className="text-xl font-bold mb-4">All instructor</h2>
          <ul className="border rounded-lg p-4 h-full overflow-y-auto">
            {instructors.map((instructor) => (
              <li
                key={instructor.name}
                onClick={() => handleSelectInstructor(instructor)}
                className={`cursor-pointer mb-2 p-2 rounded ${
                  selectedInstructor &&
                  selectedInstructor.name === instructor.name
                    ? 'bg-yellow-300 font-bold'
                    : 'hover:bg-gray-200'
                }`}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 overflow-hidden">
          {selectedInstructor && (
            <div className="flex flex-col h-full">
              <div className="flex flex-col mb-6">
                <h2 className="text-xl font-bold mb-2">
                  {selectedInstructor.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  Contact: {selectedInstructor.contact}
                </p>
                <h3 className="text-lg font-semibold mb-2">Chat</h3>
                <div className="border rounded-lg p-4 flex-1 overflow-y-auto">
                  {chat.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        message.sender === 'Parent' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <span className="font-bold">{message.sender}: </span>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="flex mt-4">
                  <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type your message..."
                    className="border rounded-lg p-2 flex-grow mr-2"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Courses</h3>
                {selectedInstructor.courses.map((course) => (
                  <div key={course.id} className="border p-4 rounded-md mb-4">
                    <h4 className="text-xl font-semibold mb-2">
                      {course.courseTitles}
                    </h4>
                    <p className="text-gray-700 mb-2">
                      {course.courseDescription}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Level: {course.courseLevel}
                    </p>
                    <img
                      src={course.posterPath}
                      alt={course.courseTitles}
                      className="mb-2 w-full"
                    />
                    <a
                      href={course.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Link to the book
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
