import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [category, setCategory] = useState('');
  const [courses, setCourses] = useState([]);
  const params = useParams();
  const courseId = params.id;
  const navigate = useNavigate();

  const handlFetchById = async () => {
    await axios({
      method: 'GET',
      url: `https://parents-follow-u.onrender.com/followup/course/get/${courseId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        setTitle(response?.data?.tittle);
        setDescription(response?.data.description);
        setInstructor(response?.data.instructor);
        setCategory(response?.data?.category);
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlFetchById();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = {
      tittle: title,
      description: description,
      instructor: instructor,
      category: category,
    };

    await axios
      .put(
        `https://parents-follow-u.onrender.com/followup/course/update/${courseId}`,
        form
      )
      .then((response) => {
        setTimeout(() => {
          toast.success(response.message);
          navigate('/course');
        }, 3000);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <ToastContainer />
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200 ">
        Update Courses form
      </h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          name="tittle" // Corrected field name as per API requirement
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tittle"
          required
          className="border h-8 text-[12px] rounded w-full"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border h-8 text-[12px] rounded w-full"
        ></textarea>
        <input
          type="text"
          name="instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="Instructor"
          required
          className="border h-8 text-[12px] rounded w-full"
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border h-8 text-[12px] rounded w-full"
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
          onClick={handleUpdate}
          type="submit"
          color="teal"
          ripple={true}
          className="rounded"
          fullWidth={true}
        >
          Update Course
        </Button>
      </form>
      <ul className="mt-4 space-y-2">
        {/* {courses.map((course) => (
          <li
            key={course.id}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex space-x-2">
              <Button
                color="yellow"
                ripple={true}
                className="rounded"
                onClick={() => updateCourse(course.id)}
              >
                Edit
              </Button>
              <Button
                color="red"
                ripple={true}
                className="rounded"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default EditCourse;
