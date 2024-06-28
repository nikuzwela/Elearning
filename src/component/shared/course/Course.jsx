import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableComponent = () => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCourse = () => {
    const newCourse = {
      id: course.length + 1,
      title: '',
      description: '',
      instructor: '',
      category: '',
    };
    setCourse([...course, newCourse]);
  };

  const handleFetchCourse = () => {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'https://parents-follow-u.onrender.com/followup/course/list',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        setCourse(response.data.getCourses);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        toast.error("Error fetching courses");
      });
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await axios.delete(`https://parents-follow-u.onrender.com/followup/course/delete/${id}`);
        setCourse(course.filter((course) => course._id !== id));
        toast.success("Course deleted successfully");
      } catch (error) {
        console.error('Error deleting course:', error);
        toast.error("Error deleting course");
      }
    }
  };

  useEffect(() => {
    handleFetchCourse();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-screen p-8">
        <ToastContainer />
        <div className="flex justify-end mb-4">
          <Link to="/Dcourse">
            <button
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 text-[13px] py-2 px-4 rounded shadow-lg transition duration-300"
              onClick={handleAddCourse}
            >
              Add Course
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto flex-1">
          <div className="inline-block min-w-full align-middle">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-500">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {course.map((course) => (
                    <tr key={course._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.instructor}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/EditCourse/${course._id}`}>
                          <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 transition duration-300">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                          onClick={() => handleDeleteCourse(course._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isLoading && <p className="text-center py-4">Loading...</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
