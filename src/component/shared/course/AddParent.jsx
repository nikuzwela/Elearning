import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
// import { useHistory } from 'react-router-dom';

const AddParent = () => {
  // const history = useHistory();
  const [parentDetails, setParentDetails] = useState({
    parentName: '',
    parentEmail: '',
    childName: '',
    category: 'Grade 1',
    parentContact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParentDetails({ ...parentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://parents-follow-u.onrender.com/followup/parents/add',
        parentDetails
      );
      alert('Parent added successfully');
      history.push('/'); // Navigate back to the parent list
    } catch (error) {
      console.error(error);
      alert('Failed to add parent');
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Add New Parent
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-4 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="parentName" className="block text-gray-700">
            Parent Name
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={parentDetails.parentName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="parentEmail" className="block text-gray-700">
            Parent Email
          </label>
          <input
            type="email"
            id="parentEmail"
            name="parentEmail"
            value={parentDetails.parentEmail}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="childName" className="block text-gray-700">
            Child Name
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={parentDetails.childName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={parentDetails.category}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="parentContact" className="block text-gray-700">
            Parent Contact
          </label>
          <input
            type="text"
            id="parentContact"
            name="parentContact"
            value={parentDetails.parentContact}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <Button type="submit" ripple="dark">
          Add Parent
        </Button>
      </form>
    </div>
  );
};

export default AddParent;
