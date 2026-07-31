# Edvanta | Premium Tech Education, Internships & Placements

Edvanta is a modern upskilling e-learning platform based on the rinex.ai layout, featuring technical courses, verified training milestones, career guidance, and corporate job portal referral drives.

## Premium Tech Stack
- **Frontend**: React.js + Vite + Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (via Mongoose)
- **Payments**: Razorpay
- **Authentication**: JWT Cookies / Headers

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### 1. Installation
Install frontend and backend dependencies:
```bash
# Install frontend packages (at root)
npm install

# Install backend packages
cd server
npm install
```

### 2. Configure Environment Variables
Configure your database and signature keys inside the `.env` file at the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/edvanta
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### 3. Run Development Servers
Start both servers simultaneously:
```bash
# Start Vite development server (at root)
npm run dev

# Start Node server
cd server
npm run dev
```

---

## Mock Dashboard Preview (Offline Mode)
To guarantee that you can test and explore the entire platform out-of-the-box (even without a running MongoDB database or internet connection), the app is equipped with a smart offline mock fallback.

Use the following credentials on the login page:
- **Password**: `password` (for all options below)
- **Student Dashboard**: `student@edvanta.com`
- **Admin Dashboard**: `admin@edvanta.com`
