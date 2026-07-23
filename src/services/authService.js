import { apiRequest } from './api';

export const authService = {
  login: async (email, password) => {
    return apiRequest('/auth/login', 'POST', { email, password });
  },
  register: async (name, email, password, role) => {
    return apiRequest('/auth/register', 'POST', { name, email, password, role });
  },
  getProfile: async () => {
    return apiRequest('/auth/profile', 'GET');
  },
  updateProfile: async (profileData) => {
    return apiRequest('/auth/profile', 'PUT', profileData);
  }
};
