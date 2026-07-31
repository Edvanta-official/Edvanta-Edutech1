import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../common/Button';
import { useAuth } from '../../hooks/useAuth';
import EdvantaLogo from '../common/EdvantaLogo';
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
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="w-full px-6 md:px-10 flex items-center justify-start gap-6">
        <div className="flex items-center justify-center h-28 px-6 rounded-3xl bg-white border border-slate-200 shadow-md shrink-0">
          <Link to="/" className="flex items-center text-decoration-none">
            <EdvantaLogo height={90} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center h-14 px-6 rounded-full bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-2xl space-x-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            const isPrograms = link.name === 'Programs';
            if (link.external) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-all duration-200 px-4 py-2 rounded-full text-slate-900 hover:text-emerald-600 hover:bg-slate-100"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-200 px-4 py-2 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-400/80 font-bold shadow-sm'
                    : 'text-slate-900 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <span>{link.name}</span>
                {isPrograms && <FaChevronDown className="w-2.5 h-2.5 opacity-80" />}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center h-14 px-2 rounded-full bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-2xl ml-auto shrink-0">
          {user ? (
            <div className="flex items-center space-x-3 px-3">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-emerald-600"
              >
                <FaUserCircle className="w-5 h-5 text-emerald-600" />
                <span>{user.name || 'Dashboard'}</span>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-full border-slate-300">
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/register" className="px-1">
              <button className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-emerald-600 transition-all duration-200 shadow-sm">
                Sign Up
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center h-14 px-4 rounded-full bg-white/95 border border-slate-200/90 shadow-md ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 hover:text-emerald-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden max-w-md mx-auto mt-3 px-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-3">
            {NAV_LINKS.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-full text-base font-semibold text-slate-900 hover:bg-slate-100"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-full text-base font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-400/80 font-bold shadow-sm'
                      : 'text-slate-900 hover:bg-emerald-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-full text-base font-semibold text-slate-900 hover:bg-slate-100"
                  >
                    Dashboard
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="w-full rounded-full">
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-3 rounded-full bg-black text-white font-bold text-sm shadow-md hover:bg-emerald-600">
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;