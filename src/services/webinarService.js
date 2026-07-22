import { request } from './api';

export const webinarService = {
  getWebinars: async () => {
    return request('/webinars');
  },

  registerForWebinar: async (webinarId) => {
    return request(`/webinars/${webinarId}/register`, {
      method: 'POST',
    });
  }
};

export default webinarService;
