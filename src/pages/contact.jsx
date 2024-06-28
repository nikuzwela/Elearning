import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://parents-follow-u.onrender.com/followup/contactus/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess('Form submitted successfully!');
      setError('');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Error submitting form. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-evenly pt-10 pb-11 px-20">
      <div className="text-center mb-4 md:mb-12 flex flex-row items-center justify-center">  
        <h1 className="text-yellow-300 font-bold font-serif text-[20px] border-b-4 border-yellow-300 pb-[4px]  ">
          CONTACT
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col space-y-6 px-4 text-white">
          <h1 className="text-yellow-300 text-xl pl-6">Get In Touch</h1>
          <p className="text-white pl-6 ">
            Your feedback is crucial to us, and we're eager to hear
            from you. Together, let's make a difference in your child's
            educational journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 pl-4">
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-md px-3 text-[12px]  h-8 focus:outline-none focus:ring-1 focus:ring-yellow-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-3 h-8 text-[12px]  focus:outline-none focus:ring-1 focus:ring-yellow-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded-md px-3 h-8 text-[12px] focus:outline-none focus:ring-1 focus:ring-yellow-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded-md px-3  text-[12px] focus:outline-none focus:ring-1 focus:ring-yellow-300"
            rows="3"
          />
          <button className="bg-yellow-300 text-gray-800 px-6 h-8 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300" type="submit" onClick={handleSubmit}>
            Send message
          </button>
        </div>
      </div>

      {/* Display success message if available */}
      {success && (
        <div className="text-green-500 p-4 mt-4">
          {success}
        </div>
      )}

      {/* Display error message if available */}
      {error && (
        <div className="text-red-500 p-4 mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default Contact;
