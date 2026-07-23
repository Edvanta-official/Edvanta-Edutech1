import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';

// Route Imports
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config({ path: '../.env' }); // Load .env file from root directory

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes Hookups
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/payments', paymentRoutes);

// Connect Database
connectDB();

// Handle production client bundle routing static serves
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Edvanta Premium E-Learning API is active and running.');
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An internal server error occurred.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
