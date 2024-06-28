import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dcourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [category, setCategory] = useState('');
  const [courses, setCourses] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = {
      tittle  : title,
      description: description,
      instructor: instructor,
      category: category,
    };
    await axios({
      method: 'POST',
      url: 'https://parents-follow-u.onrender.com/followup/course/add',
      data: formData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })

    // try {
    //   const response = await axios.post(
    //     'https://parents-follow-u.onrender.com/followup/course/add',
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
    //   console.log("response.data", response.data);
    //   // fetchCourses();
    //   toast.success('Adding course was successfully.');
    // } catch (error) {
    //   console.error(error);
    //   toast.error('Failed to add course.');
    // }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/course/getAll'
      );
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async (courseId) => {
    try {
      const updatedCourse = {
        title: title,
        description: description,
        instructor: instructor,
        category: category,
      };
      await axios.put(
        `https://parents-follow-u.onrender.com/followup/course/update/${courseId}`,
        updatedCourse,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      fetchCourses();
      toast.success('Course updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update course.');
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(
        `https://parents-follow-u.onrender.com/followup/course/delete/${courseId}`
      );
      fetchCourses();
      toast.success('Course deleted successfully!');
    } catch (error) {
      console.error(
        'Error deleting course:',
        error.response ? error.response.data : error.message
      );
      toast.error('Failed to delete course.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200">
        Courses
      </h2>
      <form onSubmit={handleAdd} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="border h-8 text-[12px] pl-2 outline-none rounded w-full"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border h-8 text-[12px] pl-2 outline-none rounded w-full"
        ></textarea>
        <input
          type="text"
          name="instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="Instructor"
          required
          className="border h-8 text-[12px] pl-2 outline-none rounded w-full"
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border h-8 text-[12px] pl-2 outline-none rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 9">Grade 9</option>
        </select>
        <Button
          type="submit"
          ripple={true}
          className="rounded bg-yellow-300 hover:bg-yellow-400"
          fullWidth={true}
        >
          Add Course
        </Button>
      </form>
      <ToastContainer />
      <ul className="mt-4 space-y-2">
        {courses.map((course) => (
          <li
            key={course._id}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex space-x-2">
              <Button
                color="yellow"
                ripple={true}
                className="rounded"
                onClick={() => {
                  setTitle(course.title);
                  setDescription(course.description);
                  setInstructor(course.instructor);
                  setCategory(course.category);
                  // Assuming you want to trigger the update process here
                  // You might need to implement a method to fill the form with the course details
                }}
              >
                Edit
              </Button>
              <Button
                color="red"
                ripple={true}
                className="rounded"
                onClick={() => deleteCourse(course._id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dcourse;
