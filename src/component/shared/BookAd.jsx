import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch initial list of books
    fetch('https://parents-follow-u.onrender.com/followup/book/list')
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddBook = () => {
    // Example API call to add a book
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Your book details here
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Update the local state to reflect the new book
        setBooks([...books, data.newlyAddedBook]);
        toast.success('Book added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to add book.');
      });
  };

  return (
    <div>
      <Link to="/AddB">
        <button
          onClick={handleAddBook}
          className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
        >
          Add Book
        </button>
      </Link>

      {/* Displaying books */}
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
    </div>
  );
};

export default Books;
