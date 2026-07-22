import { request } from './api';

export const courseService = {
  getCourses: async () => {
    return request('/courses');
  },

  getCourseById: async (id) => {
    return request(`/courses/${id}`);
  },

  enrollInCourse: async (courseId) => {
    return request(`/courses/${courseId}/enroll`, {
      method: 'POST',
    });
  }
};

export default courseService;
