import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Internships from '../pages/Internships';
import Placements from '../pages/Placements';
import Certifications from '../pages/Certifications';
import Webinars from '../pages/Webinars';
import Blogs from '../pages/Blogs';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/webinars" element={<Webinars />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Home />} /> {/* Fallback route */}
    </Routes>
  );
};

export default AppRoutes;
