import { apiRequest } from './api';

export const courseService = {
  getAll: async () => {
    return apiRequest('/courses', 'GET');
  },
  getById: async (id) => {
    return apiRequest(`/courses/${id}`, 'GET');
  },
  create: async (courseData) => {
    return apiRequest('/courses', 'POST', courseData);
  },
  update: async (id, courseData) => {
    return apiRequest(`/courses/${id}`, 'PUT', courseData);
  },
  delete: async (id) => {
    return apiRequest(`/courses/${id}`, 'DELETE');
  }
};
