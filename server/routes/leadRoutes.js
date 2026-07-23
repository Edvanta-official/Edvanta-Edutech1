import express from 'express';
import { createLead, getLeads } from '../controllers/leadController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createLead);
router.get('/', protect, adminOnly, getLeads);

export default router;
