import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/edvanta');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`MongoDB Connection failed: ${error.message}`);
    console.warn('The server is running in OFFLINE/MOCK DATABASE fallback state. Connect MongoDB to save records.');
  }
};
