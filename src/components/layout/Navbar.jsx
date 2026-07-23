import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaArrowRight } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../common/Button';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="glass sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo (Exact Calligraphic E + EDVANTA Green Badge Matching Screenshot) */}
        <Link to="/" className="flex items-center text-decoration-none">
          <svg className="logo-svg" viewBox="0 0 420 95" width="150" height="38" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@500;600;700&display=swap');
                .l-box-bg { fill: #ffffff; stroke: #94a3b8; stroke-width: 2.5; rx: 6px; }
                .l-name-bg { fill: #8ba895; rx: 6px; }
                .l-script-e { font-family: 'Great Vibes', 'Playfair Display', cursive, serif; font-size: 68px; font-weight: 700; font-style: italic; fill: #0f172a; }
                .l-text-edvanta { font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 700; fill: #ffffff; letter-spacing: 6.5px; }
                [data-theme="dark"] .l-box-bg { fill: #1e293b; stroke: #cbd5e1; }
                [data-theme="dark"] .l-script-e { fill: #ffffff; }
                `}
              </style>
            </defs>
            <rect x="4" y="4" width="85" height="85" rx="8" className="l-box-bg" />
            <text x="46.5" y="67" textAnchor="middle" className="l-script-e">E</text>
            <rect x="98" y="4" width="318" height="85" rx="8" className="l-name-bg" />
            <text x="257" y="56" textAnchor="middle" className="l-text-edvanta">EDVANTA</text>
          </svg>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-accent ${isActive ? 'text-accent' : 'text-gray-300'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA / Profile Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student/profile'}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-all"
              >
                <FaUserCircle size={22} className="text-accent" />
                <span>Dashboard ({user.name.split(' ')[0]})</span>
              </Link>
              <Button variant="outline" className="py-1.5 px-4 text-sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/register">
              <Button variant="primary" className="py-2 px-5 text-sm">
                Sign Up <FaArrowRight size={12} />
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-[73px] left-0 right-0 glass border-b border-white/5 py-6 px-6 flex flex-col gap-6 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-[1px] bg-white/5 w-full"></div>
          {user ? (
            <div className="flex flex-col gap-4">
              <Link
                to={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/student/profile'}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-all"
              >
                <FaUserCircle size={22} className="text-accent" />
                <span>Dashboard ({user.name})</span>
              </Link>
              <Button variant="outline" className="w-full" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="primary" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
