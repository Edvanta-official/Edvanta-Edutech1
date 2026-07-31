import Razorpay from 'razorpay';
import Payment from '../models/Payment.js';
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_secret_placeholder'
});
export const createOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, 
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };
    const order = await razorpay.orders.create(options);
    await Payment.create({
      student: req.user._id,
      orderId: order.id,
      amount,
      status: 'pending'
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const verifyPayment = async (req, res) => {
  const { orderId, paymentId } = req.body;
  try {
    const payment = await Payment.findOne({ orderId });
    if (payment) {
      payment.paymentId = paymentId;
      payment.status = 'captured';
      await payment.save();
      res.json({ success: true, message: 'Payment successfully captured' });
    } else {
      res.status(404).json({ message: 'Order record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPaymentsList = async (req, res) => {
  try {
    const payments = await Payment.find({}).populate('student', 'name email');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};