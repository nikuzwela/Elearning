import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    fetch('https://parents-follow-u.onrender.com/followup/book/list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error('Error fetching data:', error));

    fetch('https://api.example.com/data') // Replace with your actual new URL
      .then((response) => response.json())
      .then((data) => setNewBooks(data))
      .catch((error) => console.error('Error fetching new data:', error));
  }, []);

  const handleUpdateBook = (bookId) => {
    console.log(`Updating book with ID: ${bookId}`);
    // Implement update logic here
  };

  const handleDeleteBook = (bookId) => {
    console.log(`Deleting book with ID: ${bookId}`);
    // Implement delete logic here
  };

  const handleAddBook = () => {
    console.log('Adding a new book');
    // Implement add logic here
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end mt-4">
        <Link to="/AddB">
          <button
            onClick={handleAddBook}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Book
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:-translate-y-1 hover:shadow-lg w-64"
          >
            <img
              className="w-full h-48 object-cover"
              src={book.image.url}
              alt={book.bookName}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{book.bookName}</h3>
              <p className="mt-2 text-gray-600">By: {book.writerName}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
        {newBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:-translate-y-1 hover:shadow-lg w-64"
          >
            <img
              className="w-full h-48 object-cover"
              src={book.image.url}
              alt={book.bookName}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{book.bookName}</h3>
              <p className="mt-2 text-gray-600">By: {book.writerName}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
              <div className="flex mt-4">
                <button
                  onClick={() => handleUpdateBook(book._id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteBook(book._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
