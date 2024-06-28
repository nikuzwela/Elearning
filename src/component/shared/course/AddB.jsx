import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dcourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/book/getAll'
      );
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bookName', title);
    formData.append('description', description);
    formData.append('writerName', instructor);
    if (image) {
      const base64Image = await fileToBase64(image);
      formData.append('image', base64Image, image.name);
    }

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/book/add',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      fetchBooks();
      toast.success('Book added successfully.');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add book.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200">
        Books
      </h2>
      <form onSubmit={handleAddBook} className="flex flex-col space-y-4">
        <input
          type="text"
          name="bookName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Name"
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border p-2 rounded w-full"
        ></textarea>
        <input
          type="text"
          name="writerName"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="Writer Name"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded w-full"
        />
        <Button
          type="submit"
          color="teal"
          ripple={true}
          className="rounded"
          fullWidth={true}
        >
          Add Book
        </Button>
      </form>
      <ToastContainer />
      {/* Display list of books */}
    </div>
  );
};

export default Dcourse;
