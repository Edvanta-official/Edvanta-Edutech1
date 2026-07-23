import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  interestedIn: { type: String, default: '' },
  status: { type: String, enum: ['new', 'contacted', 'converted', 'closed'], default: 'new' }
}, { timestamps: true });

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
export default Lead;
