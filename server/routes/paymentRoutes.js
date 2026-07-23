import express from 'express';
import { createOrder, verifyPayment, getPaymentsList } from '../controllers/paymentController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.post('/order', protect, createOrder);
router.post('/verify', protect, verifyPayment);
router.get('/', protect, adminOnly, getPaymentsList);

export default router;
