import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'mentor', 'recruiter', 'admin'], default: 'student' },
  profile: {
    phone: { type: String, default: '' },
    resumeUrl: { type: String, default: '' },
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    skills: { type: [String], default: [] }
  },
  coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', default: [] }],
  internshipsEnrolled: [{ type: String, default: [] }]
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
