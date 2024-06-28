import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !role) {
      alert('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const form = {
      name,
      email,
      password,
      confirmPassword,
      role,
    };
    console.log('Form data:', form);

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/signup',
        form,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response data:', response.data);
      alert('Signup successful!');
      navigate('/Login');
    } catch (error) {
      console.error(
        'Error response:',
        error.response ? error.response.data : error.message
      );
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <div className="w-full max-w-md px-8 py-2 bg-white rounded-lg shadow-md">
        <h1 className="text-[15px] text-yellow-300 font-bold pb-4">SIGN UP</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              required
            />
          </div>
          <div>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              required
            >
              <option value="admin">Admin</option>
              <option value="">Parent</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full h-8 text-[13px] rounded-md bg-yellow-300 text-gray-800 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-3 text-center text-[13px]">
          Already have an account?{' '}
          <Link to="/Login">
            <span className="text-red-600">Sign In</span>
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default Signup;
