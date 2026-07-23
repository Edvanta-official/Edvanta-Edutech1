import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  const { title, description, syllabus, price, category, duration, thumbnail } = req.body;
  try {
    const course = await Course.create({ title, description, syllabus, price, category, duration, thumbnail });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
