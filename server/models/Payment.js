import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true },
  paymentId: { type: String, default: '' },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'captured', 'failed'], default: 'pending' }
}, { timestamps: true });

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
export default Payment;
