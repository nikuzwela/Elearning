import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';

const LandingPage = () => {
  return (
    <section className='bg-gray-500'>
      <Home />
      <About />
     <Contact/>
    </section>
  );
};
export default LandingPage;
