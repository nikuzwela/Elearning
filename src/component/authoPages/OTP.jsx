import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OTP = () => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Placeholder for user details
  const userDetails = {
    name: '', // Replace with actual name
    email: '', // Replace with actual email
    password: '', // Replace with actual password
    confirmPassword: '', // Replace with actual confirmPassword
    role: '', // Replace with actual role
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus next input field
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = async () => {
    const otp = code.join('');
    if (otp.length < 6) {
      setErrorMessage('Please enter the 6-digit code.');
      return;
    }

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/verify',
        { ...userDetails, otp }
      );

      if (response.status === 200) {
        setSuccessMessage('Verification successful!');
        setErrorMessage('');
        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      } else {
        setErrorMessage('Invalid OTP code.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 400) {
        setErrorMessage('Invalid OTP code.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className="h-fit flex flex-col items-center ml-20 justify-center bg-white p-8 shadow-md">
      <div className="rounded max-w-md w-full">
        <p className="text-2xl font-bold mb-6 text-yellow-300 text-center">
          Enter Authentication Code
        </p>
        <h2 className="my-5 text-gray-600">
          Please, enter the code that has been sent to your email!
        </h2>

        <div className="flex justify-center space-x-2">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded focus:ring-1 focus:ring-yellow-300"
            />
          ))}
        </div>
        <button
          className="mt-6 w-full bg-yellow-300 text-gray-800 py-2 rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          onClick={handleVerify}
        >
          Verify
        </button>
        {successMessage && (
          <p className="text-green-700 mt-3">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
      </div>
      <div className="mt-3 py-5 w-full">
        <p>
          Have not received code?{' '}
          <Link to="/Resetpassword">
            <span className="text-yellow-300 w-full">click here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OTP;
