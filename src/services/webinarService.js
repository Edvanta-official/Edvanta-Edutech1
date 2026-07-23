import { apiRequest } from './api';

export const webinarService = {
  getAll: async () => {
    return apiRequest('/webinars', 'GET');
  },
  register: async (webinarId) => {
    return apiRequest(`/webinars/${webinarId}/register`, 'POST');
  },
  create: async (webinarData) => {
    return apiRequest('/webinars', 'POST', webinarData);
  },
  update: async (id, webinarData) => {
    return apiRequest(`/webinars/${id}`, 'PUT', webinarData);
  },
  delete: async (id) => {
    return apiRequest(`/webinars/${id}`, 'DELETE');
  }
};
