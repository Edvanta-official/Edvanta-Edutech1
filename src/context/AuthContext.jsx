import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  const login = async (email, password, role = 'student') => {
    setLoading(true);
    // Simulate API login call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let mockUser;
        if (email.includes('admin')) {
          mockUser = { id: 'admin-1', name: 'System Admin', email, role: 'admin' };
        } else if (email.includes('mentor')) {
          mockUser = { id: 'mentor-1', name: 'Dr. Sarah Connor', email, role: 'mentor' };
        } else if (email.includes('recruiter')) {
          mockUser = { id: 'recruiter-1', name: 'John Doe Recruiting', email, role: 'recruiter' };
        } else {
          mockUser = { id: 'student-1', name: 'Alex Johnson', email, role: role };
        }

        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        setLoading(false);
        resolve(mockUser);
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (name, email, password, role = 'student') => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = { id: `user-${Date.now()}`, name, email, role };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        setLoading(false);
        resolve(mockUser);
      }, 800);
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
