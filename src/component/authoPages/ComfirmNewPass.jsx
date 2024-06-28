import React from 'react';

const ConfirmNewPass = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl text-yellow-300 font-bold text-center mb-4">
          CONFIRM NEW PASSWORD
        </h1>
        <h2 className="text-center text-gray-600 mb-6">
          Please fill in the following form to reset your password
        </h2>
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="px-3 py-2 rounded-md border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="password"
              id="ConfirmNewPassword"
              placeholder="Confirm new password"
              className="px-3 py-2 rounded-md border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <button className="w-full bg-yellow-300 py-2 rounded-md text-gray-800 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmNewPass;
