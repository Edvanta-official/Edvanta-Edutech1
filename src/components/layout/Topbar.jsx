import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 border-b border-white/5 bg-primary-dark/80 backdrop-blur-md px-8 flex items-center justify-between z-10 shrink-0">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Welcome back,</span>
        <span className="font-semibold text-white font-manrope">{user?.name || 'User'}</span>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-1.5 text-sm transition-colors">
          <FaHome />
          <span>Home</span>
        </Link>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-red-400 flex items-center gap-1.5 text-sm transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
