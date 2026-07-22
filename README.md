# Edvanta - Educational Networking & Career Transition Platform

Edvanta is a modern React/Vite educational web application designed for students, mentors, and corporate recruiters. 

## Features

- **About Edvanta Page**: A high-fidelity, premium mock-up that replicates the structure in your screenshot (with the brand name changed to "Edvanta"), floating decorative pills, mesh-gradient design, and university logo bars.
- **Responsive Navigation**: Full desktop glassmorphic pill menu, active capsule selections, dropdown selections under "Programs", career alert badges, and a custom sun/moon theme toggler.
- **Interactive Dashboards**: Role-based routing supporting custom panels for:
  - **Student modules**: Profile, Enrolled Courses, Internship Progress bars, Resume Builders, Job portals.
  - **Admin modules**: Admissions Leads, Payment records, Course Management, Student databases.
- **Dynamic Digital Certifications**: Interactive certificate verification module where looking up valid credentials (e.g., `ED-WEB-982`) generates a printable certificate directly in the web browser.
- **Live Webinars & Recorded Vault**: Interactive upcoming webinar registrations and play options for past webinars.

---

## Directory Layout

```text
edvanta/
├── public/                # Static public assets (robots.txt, images)
├── src/
│   ├── assets/            # Global media assets (logos, icons)
│   ├── components/
│   │   ├── common/        # Shared buttons, cards, skeletons, loaders
│   │   ├── layout/        # Navbar, Footer, Sidebar, Topbar layouts
│   │   └── home/          # Hero, Course grids, Webinars, Partners sliders
│   ├── pages/             # Route views (Home, About, Courses, Contact, etc.)
│   ├── context/           # Global states (ThemeContext, AuthContext)
│   ├── hooks/             # Custom React hooks (useAuth, useFetch)
│   ├── routes/            # React Router configurations
│   ├── utils/             # Helper tools, constants, validations
│   ├── App.jsx            # Application entry configuration
│   ├── main.jsx           # ReactDOM bootstrapper
│   └── index.css          # Design system tokens and global CSS
├── server/                # Express API Backend
│   ├── server.js          # Express app boot
│   └── package.json       # Backend server packages
├── .env                   # Configuration variables
├── package.json           # Frontend packages
└── vite.config.js         # Vite custom bundler settings
```

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation

1. Clone or download the directory to your computer.
2. Open a terminal at the root of the project:

#### Run the Frontend
```bash
# Install packages
npm install

# Run locally in development mode
npm run dev
```

#### Run the Backend
```bash
# Navigate to the server folder
cd server

# Install packages
npm install

# Start the mock backend server
npm start
```
