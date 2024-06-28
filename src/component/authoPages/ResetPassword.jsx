import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/resetpassword',
        { email }
      );
      console.log(response.data); 
    } catch (error) {
      console.error(error.response?.data || error.message); 
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-[15px] text-center font-bold pb-4 text-yellow-300">
          RESET ACCOUNT PASSWORD
        </h1>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
          />
        </div>

        <Link to="/ConfirmNewPass">
          <button
            onClick={handleResetPassword}
            className="w-full h-8 text-[13px] rounded-md bg-yellow-300 text-gray-800 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Reset Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
