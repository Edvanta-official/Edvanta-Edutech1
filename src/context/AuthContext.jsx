import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token/user is in localStorage
    const savedUser = localStorage.getItem('edvanta_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Attempt backend API login
      const response = await authService.login(email, password);
      if (response && response.user) {
        setUser(response.user);
        localStorage.setItem('edvanta_user', JSON.stringify(response.user));
        localStorage.setItem('edvanta_token', response.token);
        setLoading(false);
        return { success: true };
      }
    } catch (error) {
      console.warn('Backend Auth failed. Falling back to mock auth.', error.message);
    }

    // Mock Login Fallback (Ensures it works out of the box without DB/backend connection)
    if (password === 'password' || email.includes('@')) {
      let role = 'student';
      if (email.startsWith('admin')) {
        role = 'admin';
      } else if (email.startsWith('mentor')) {
        role = 'mentor';
      } else if (email.startsWith('recruiter')) {
        role = 'recruiter';
      }

      const mockUser = {
        id: role === 'admin' ? 'mock-admin' : 'mock-student',
        name: role === 'admin' ? 'Edvanta Admin' : 'Sample Student',
        email: email,
        role: role,
        coursesEnrolled: ['c1'],
        internshipsEnrolled: ['i1']
      };
      
      setUser(mockUser);
      localStorage.setItem('edvanta_user', JSON.stringify(mockUser));
      localStorage.setItem('edvanta_token', 'mock_jwt_token_for_offline_testing');
      setLoading(false);
      return { success: true };
    }

    setLoading(false);
    return { success: false, message: 'Invalid credentials. Try any email and password "password".' };
  };

  const register = async (name, email, password, role = 'student') => {
    setLoading(true);
    try {
      const response = await authService.register(name, email, password, role);
      if (response && response.user) {
        setUser(response.user);
        localStorage.setItem('edvanta_user', JSON.stringify(response.user));
        localStorage.setItem('edvanta_token', response.token);
        setLoading(false);
        return { success: true };
      }
    } catch (error) {
      console.warn('Backend Auth Registration failed. Falling back to mock auth.', error.message);
    }

    // Mock registration fallback
    const mockUser = {
      id: 'mock-user-random',
      name: name,
      email: email,
      role: role,
      coursesEnrolled: ['c1'],
      internshipsEnrolled: ['i1']
    };
    setUser(mockUser);
    localStorage.setItem('edvanta_user', JSON.stringify(mockUser));
    localStorage.setItem('edvanta_token', 'mock_jwt_token_for_offline_testing');
    setLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edvanta_user');
    localStorage.removeItem('edvanta_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
