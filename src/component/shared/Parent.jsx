import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dcourse = () => {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/parents/list'
      );
      const dataArray = Array.isArray(response.data.getParents)
        ? response.data.getParents
        : [];
      setParents(dataArray);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error('Error fetching parents data');
    }
  };

  const fetchParentById = async (id) => {
    try {
      const parentDetails = await axios.get(`https://parents-follow-u.onrender.com/followup/parents/${id}`);
      setSelectedParent(parentDetails.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error('Error fetching parent details');
    }
  };

  const handleAddParentClick = () => {
    console.log('Add Parent button clicked');
    toast.info('Add Parent button clicked');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-center text-2xl font-semibold mb-4">Loading...</h2>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="relative h-screen p-8 bg-gray-100">
      <ToastContainer />
      <div className="absolute top-4 right-4">
        <Button onClick={handleAddParentClick} ripple="dark" color="yellow">
          Add Parent
        </Button>
      </div>
      <h2 className="text-center text-2xl font-semibold mb-6 text-yellow-300">
        Display Parent Details
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg h-[70vh]">
        <table className="min-w-full text-sm">
          <thead className="bg-yellow-300">
            <tr>
              {/* <th className="px-4 py-2">ID</th> */}
              <th className="px-4 py-2">Parent Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Child Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent, index) => (
              <tr key={index} className="border-b">
                {/* <td className="px-4 py-2">{parent._id}</td> */}
                <td className="px-4 py-2">{parent.parentName}</td>
                <td className="px-4 py-2">{parent.parentEmail}</td>
                <td className="px-4 py-2">{parent.childName}</td>
                <td className="px-4 py-2">{parent.category}</td>
                <td className="px-4 py-2">{parent.parentContact}</td>
              </tr>
            ))}
            {selectedParent && (
              <tr className="bg-yellow-100">
                <td colSpan="6">{selectedParent._id}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedParent && (
        <div className="mt-6 p-4 bg-yellow-300 shadow-md rounded-lg text-sm">
          <h3 className="text-xl font-semibold mb-4">Selected Parent Details:</h3>
          {/* <p><strong>ID:</strong> {selectedParent._id}</p> */}
          <p><strong>Name:</strong> {selectedParent.parentName}</p>
          <p><strong>Email:</strong> {selectedParent.parentEmail}</p>
          <p><strong>Child Name:</strong> {selectedParent.childName}</p>
          <p><strong>Category:</strong> {selectedParent.category}</p>
          <p><strong>Contact:</strong> {selectedParent.parentContact}</p>
        </div>
      )}
    </div>
  );
};

export default Dcourse;
