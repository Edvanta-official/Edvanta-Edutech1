import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  syllabus: [{ week: Number, topics: [String] }],
  price: { type: Number, required: true },
  category: { type: String, required: true },
  duration: { type: String, required: true },
  thumbnail: { type: String, default: '' }
}, { timestamps: true });

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;
