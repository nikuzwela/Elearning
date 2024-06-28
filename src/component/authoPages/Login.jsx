import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setEmailError('Please enter your email address.');
      return;
    } else if (!isValidEmail(username)) {
      setEmailError('Please enter a valid email address (e.g., example@domain.com).');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 6) {
      setPasswordError('Your password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/signin',
        {
          email: username,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const { role } = response.data;
        alert('Login successful!');
        if (role === 'admin') {
          navigate('/Dashboard');
        } else if (role === 'parent') {
          navigate('/dash');
        } else {
          navigate('/Dashboard');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-[15px] text-yellow-300 font-bold pb-4">SIGN IN</h1>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Email"
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 h-8 text-[12px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-8 text[13px] rounded-md bg-yellow-300 text-gray-800 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-3 text-center text-[13px]">
          You don't have an account?{' '}
          <Link to="/SignUp">
            <span className="text-red-600">Sign Up</span>
          </Link>
          <br />
          Forgot Password?{' '}
          <Link to="/ResetPassword">
            <span className="text-red-600">Reset Password</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
