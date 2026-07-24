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
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';

// Student Dashboard Components
import StudentProfile from '../dashboard/student/Profile';
import StudentCourses from '../dashboard/student/MyCourses';
import StudentInternship from '../dashboard/student/InternshipProgress';
import StudentCertificates from '../dashboard/student/Certificates';
import StudentWebinars from '../dashboard/student/WebinarRecordings';
import StudentResume from '../dashboard/student/ResumeBuilder';
import StudentJobs from '../dashboard/student/JobPortal';

// Admin Dashboard Components
import AdminAnalytics from '../dashboard/admin/Analytics';
import AdminStudents from '../dashboard/admin/Students';
import AdminCourses from '../dashboard/admin/Courses';
import AdminInternships from '../dashboard/admin/Internships';
import AdminWebinars from '../dashboard/admin/Webinars';
import AdminLeads from '../dashboard/admin/Leads';
import AdminPayments from '../dashboard/admin/Payments';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-bgDark">
    <Navbar />
    <div className="flex-grow">{children}</div>
    <Footer />
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
      <Route path="/internships" element={<MainLayout><Internships /></MainLayout>} />
      <Route path="/placements" element={<MainLayout><Placements /></MainLayout>} />
      <Route path="/certifications" element={<MainLayout><Certifications /></MainLayout>} />
      <Route path="/webinars" element={<MainLayout><Webinars /></MainLayout>} />
      <Route path="/blogs" element={<MainLayout><Blogs /></MainLayout>} />
      <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />

      {/* Protected Dashboards (Handles student & admin layouts nested) */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Student Routes */}
        <Route path="student/profile" element={<StudentProfile />} />
        <Route path="student/courses" element={<StudentCourses />} />
        <Route path="student/internship" element={<StudentInternship />} />
        <Route path="student/certificates" element={<StudentCertificates />} />
        <Route path="student/webinars" element={<StudentWebinars />} />
        <Route path="student/resume-builder" element={<StudentResume />} />
        <Route path="student/jobs" element={<StudentJobs />} />

        {/* Admin Routes */}
        <Route path="admin" element={<AdminAnalytics />} />
        <Route path="admin/analytics" element={<AdminAnalytics />} />
        <Route path="admin/students" element={<AdminStudents />} />
        <Route path="admin/courses" element={<AdminCourses />} />
        <Route path="admin/internships" element={<AdminInternships />} />
        <Route path="admin/webinars" element={<AdminWebinars />} />
        <Route path="admin/leads" element={<AdminLeads />} />
        <Route path="admin/payments" element={<AdminPayments />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
