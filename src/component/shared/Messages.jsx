import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://parents-follow-u.onrender.com/followup/contactus/listMessage');
      if (Array.isArray(response.data)) {
        setMessages(response.data);
      } else {
        throw new Error('API response is not an array');
      }
      setLoading(false);
    } catch (error) {
      console.error("Fetch messages error:", error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred while fetching messages.');
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`https://parents-follow-u.onrender.com/followup/contactus/delete/${id}`);
      const updatedMessages = messages.filter(message => message.id !== id);
      setMessages(updatedMessages);
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error("Error deleting message:", error);
      setError(error.response?.data?.message || 'An error occurred while deleting the message.');
      toast.error('Error deleting message');
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading messages: {error}</p>;

  return (
    <div className="container mx-auto px-4">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">Messages from Parents</h2>
      <div className="max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">{message.fullName}</h3>
              <p className="text-sm"><strong>Email:</strong> {message.email}</p>
              <p className="text-sm"><strong>Message:</strong> {message.message}</p>
              <p className="text-sm"><strong>Date:</strong> {new Date(message.createdAt).toLocaleDateString()}</p>
              <button
                onClick={() => deleteMessage(message.id)}
                className="mt-4 inline-block bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
