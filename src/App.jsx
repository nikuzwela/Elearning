import React from 'react';
import { BrowserRouter, Outlet,Route, Routes } from 'react-router-dom';
import LandingPage from './component/landingPage';
import Home from './pages/home';
import About from './pages/about';
import Footer from './component/footer';
import NavBar from './component/navbar';
import Level from './pages/Level';
import Contact from './pages/contact';
import Login from './component/authoPages/Login';
import OTP from './component/authoPages/OTP';
import Signup from './component/authoPages/SignUp';
import ConfirmNewPass from './component/authoPages/ComfirmNewPass';
import ResetPassword from './component/authoPages/ResetPassword';
import DashBoard from './pages/DashBoard';
import Lay from './component/shared/Lay';
import Parent from './component/shared/Parent';
import Instructors from './component/shared/Instructors';
import Course from './component/shared/course/Course';
import Dcourse from './component/shared/course/Dcourse';
import Play from './component/Parentdash/Play';
import Dash from './component/Parentdash/Dash';
import Books from './component/Parentdash/Books';
import Pinstructor from './component/Parentdash/Pinstructor';
import EditCourse from './component/shared/course/EditCourse';
import Messages from './component/shared/Messages';




const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="level" element={<Level />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
            
            <Route>
              <Route path="Login" element={<Login />} />
              <Route path="SignUp" element={<Signup />} />
              <Route path="OTP" element={<OTP />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
              <Route path="ConfirmNewPass" element={<ConfirmNewPass />} />
            </Route>
            <Route path="/" element={<Lay />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="parent" element={<Parent />} />
              <Route path="course" element={<Course />} />
              <Route path="EditCourse/:id" element={<EditCourse />} />
              <Route path="Dcourse" element={<Dcourse />} />
              <Route path="instructor" element={<Instructors />} />
              <Route path="instructor" element={<Instructors />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="/" element={<Play/>}>
              <Route path="dash" element={<Dash />} />
              <Route path="book" element={<Books />} />
              <Route path="pinstructor" element={<Pinstructor />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
};
export default App;
