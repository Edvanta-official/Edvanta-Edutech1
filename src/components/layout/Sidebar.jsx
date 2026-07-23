import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGraduationCap, FaUser, FaLaptopCode, FaAward, FaCalendarAlt, FaFileAlt, FaBriefcase, FaChartBar, FaCreditCard, FaTasks } from 'react-icons/fa';

const Sidebar = ({ role = 'student' }) => {
  const studentLinks = [
    { label: 'Profile', path: '/dashboard/student/profile', icon: <FaUser /> },
    { label: 'My Courses', path: '/dashboard/student/courses', icon: <FaGraduationCap /> },
    { label: 'Internships', path: '/dashboard/student/internship', icon: <FaLaptopCode /> },
    { label: 'Certificates', path: '/dashboard/student/certificates', icon: <FaAward /> },
    { label: 'Webinar Recordings', path: '/dashboard/student/webinars', icon: <FaCalendarAlt /> },
    { label: 'Resume Builder', path: '/dashboard/student/resume-builder', icon: <FaFileAlt /> },
    { label: 'Job Portal', path: '/dashboard/student/jobs', icon: <FaBriefcase /> }
  ];

  const adminLinks = [
    { label: 'Analytics', path: '/dashboard/admin/analytics', icon: <FaChartBar /> },
    { label: 'Students', path: '/dashboard/admin/students', icon: <FaUser /> },
    { label: 'Courses', path: '/dashboard/admin/courses', icon: <FaGraduationCap /> },
    { label: 'Internships', path: '/dashboard/admin/internships', icon: <FaLaptopCode /> },
    { label: 'Webinars', path: '/dashboard/admin/webinars', icon: <FaCalendarAlt /> },
    { label: 'Payments', path: '/dashboard/admin/payments', icon: <FaCreditCard /> },
    { label: 'Leads', path: '/dashboard/admin/leads', icon: <FaTasks /> }
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <aside className="w-64 bg-primary-dark border-r border-white/5 flex flex-col min-h-screen shrink-0">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <span className="font-manrope font-extrabold text-xl tracking-wider text-gradient-accent">
          {role === 'admin' ? 'ADMIN PANEL' : 'STUDENT HUB'}
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-secondary text-white shadow-glow'
                  : 'text-gray-400 hover:bg-primary hover:text-white'
              }`
            }
          >
            <span className="text-base shrink-0">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/5 text-xs text-gray-500 text-center">
        Powered by Edvanta
      </div>
    </aside>
  );
};

export default Sidebar;
