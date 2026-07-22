import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Edvanta API Gateway',
    status: 'online',
    timestamp: new Date()
  });
});

// Mock authentication routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    token: 'mock-jwt-token-string',
    user: {
      id: 'student-1',
      name: 'Alex Johnson',
      email,
      role: 'student'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Edvanta Server is running on port ${PORT}`);
});
