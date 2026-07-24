export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/courses' },
  { label: 'Internships', path: '/internships' },
  { label: 'Webinars', path: '/webinars' },
  { label: 'Placements', path: '/placements' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' }
];

export const MOCK_COURSES = [
  {
    id: 'c1',
    title: 'Full Stack Web Development (MERN)',
    description: 'Master MongoDB, Express.js, React, and Node.js with production-ready projects.',
    category: 'Software Development',
    duration: '6 Months',
    rating: 4.8,
    reviews: 1204,
    price: 9999,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      { week: 1, topics: ['Introduction to HTML, CSS & JS', 'Git & GitHub Basics'] },
      { week: 2, topics: ['React Components, State & Hooks', 'Tailwind CSS Integration'] },
      { week: 3, topics: ['Node.js Fundamentals', 'Express Router & Middlewares'] },
      { week: 4, topics: ['MongoDB Databases & Mongoose Schemas', 'JWT Authentication'] }
    ]
  },
  {
    id: 'c2',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Learn Python, Neural Networks, Deep Learning, and build intelligent AI models.',
    category: 'AI & Data Science',
    duration: '6 Months',
    rating: 4.9,
    reviews: 843,
    price: 14999,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      { week: 1, topics: ['Python for Data Analysis & NumPy', 'Pandas & Matplotlib'] },
      { week: 2, topics: ['Supervised & Unsupervised Machine Learning', 'Scikit-Learn'] },
      { week: 3, topics: ['Neural Networks & Deep Learning', 'TensorFlow & Keras'] },
      { week: 4, topics: ['Natural Language Processing (NLP)', 'Generative AI & LLMs'] }
    ]
  },
  {
    id: 'c3',
    title: 'Cyber Security & Ethical Hacking',
    description: 'Become a certified security expert. Learn penetration testing, network security, and cryptography.',
    category: 'Cyber Security',
    duration: '4 Months',
    rating: 4.7,
    reviews: 622,
    price: 11999,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    syllabus: [
      { week: 1, topics: ['Linux Fundamentals & Networking Basics', 'Information Gathering'] },
      { week: 2, topics: ['Vulnerability Assessment', 'Metasploit Framework'] },
      { week: 3, topics: ['Web Application Penetration Testing', 'OWASP Top 10'] },
      { week: 4, topics: ['System Hacking', 'Wireless Security & Cryptography'] }
    ]
  }
];

export const MOCK_INTERNSHIPS = [
  {
    id: 'i1',
    title: 'Front-End Development Internship',
    domain: 'Software',
    duration: '3 Months',
    stipend: 'Performance-based',
    perks: ['Certificate of Completion', 'Letter of Recommendation', 'Industry Mentorship'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
  },
  {
    id: 'i2',
    title: 'Data Science & Analytics Internship',
    domain: 'Data Science',
    duration: '3 Months',
    stipend: 'Performance-based',
    perks: ['Certificate of Completion', 'Letter of Recommendation', 'Real-world Project Experience'],
    skills: ['Python', 'SQL', 'Pandas', 'Machine Learning', 'Tableau']
  },
  {
    id: 'i3',
    title: 'UI/UX Design Internship',
    domain: 'Design',
    duration: '2 Months',
    stipend: 'Performance-based',
    perks: ['Certificate of Completion', 'LOR', 'Portfolio Building Guidance'],
    skills: ['Figma', 'Wireframing', 'User Research', 'Prototyping']
  }
];

export const MOCK_WEBINARS = [
  {
    id: 'w1',
    title: 'Generative AI: The Future of Software Development',
    speaker: 'Dr. Akash Sharma (Ex-Google AI Scientist)',
    date: '2026-07-28',
    time: '06:00 PM IST',
    duration: '2 Hours',
    status: 'Upcoming',
    registrationLink: '#'
  },
  {
    id: 'w2',
    title: 'How to Crack Software Engineer Roles at FAANG',
    speaker: 'Neha Gupta (Senior Engineer at Microsoft)',
    date: '2026-07-15',
    time: '04:00 PM IST',
    duration: '1.5 Hours',
    status: 'Completed',
    recordingUrl: '#'
  }
];

export const PARTNERS_LOGOS = [
  { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=120&h=40&q=80' },
  { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1625014020903-e329f586c990?auto=format&fit=crop&w=120&h=40&q=80' },
  { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=120&h=40&q=80' },
  { name: 'Meta', logo: 'https://images.unsplash.com/photo-1634084462412-b54873c0a66d?auto=format&fit=crop&w=120&h=40&q=80' }
];

export const SUCCESS_STORIES = [
  {
    id: 's1',
    name: 'Rahul Verma',
    course: 'Full Stack Web Development',
    company: 'Amazon',
    package: '24 LPA',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80',
    quote: 'The hands-on projects and interview preparation modules at Edvanta were the key factors behind my success. My mentor guided me step-by-step.'
  },
  {
    id: 's2',
    name: 'Priya Sen',
    course: 'AI & Machine Learning',
    company: 'TCS',
    package: '12 LPA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    quote: 'Edvantas internship program helped me apply machine learning to live business cases. It completely changed my perspective on AI engineering.'
  }
];

export const FAQS = [
  {
    question: 'What is the duration of the internship programs?',
    answer: 'Our internships typically run between 2 to 3 months, offering flexible hours to accommodate college coursework.'
  },
  {
    question: 'Will I receive a completion certificate?',
    answer: 'Yes! Upon successful completion of any course or internship, you will receive an industry-recognized Edvanta Certificate with a unique verification code.'
  },
  {
    question: 'How do live webinars work?',
    answer: 'Live webinars are hosted via secure video streams. Registered users receive link details prior to the session, and recordings are uploaded to the dashboard within 24 hours.'
  },
  {
    question: 'Are there any placement guarantees?',
    answer: 'We offer extensive placement assistance including resume building, mock interviews, and active referrals to our hiring network. We help match you with roles that suit your skills.'
  }
];

export const MOCK_BLOGS = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence: Shaping Next-Gen Tech Careers',
    excerpt: 'Explore generative AI architectures, neural networks, and computer vision frameworks.',
    author: 'Edvanta AI Lab',
    date: 'Jun 10, 2025',
    link: 'blog-ai.html',
    thumbnail: 'images/blog_ai.jpg'
  },
  {
    id: 'cybersec',
    title: 'Cyber Security Essentials: Defending Systems Against Threat Vectors',
    excerpt: 'Understand network security, penetration testing, threat hunting, and security auditing.',
    author: 'Security Team',
    date: 'Jun 12, 2025',
    link: 'blog-cyber.html',
    thumbnail: 'images/blog_cyber.jpg'
  },
  {
    id: 'ev-eng',
    title: 'Electric Vehicle Mobility: Battery Tech & Powertrain Innovations',
    excerpt: 'Study battery thermal control modules, battery management systems, and electric motors.',
    author: 'EV Innovations',
    date: 'Jun 14, 2025',
    link: 'blog-ev.html',
    thumbnail: 'images/blog_ev.jpg'
  },
  {
    id: 'iot',
    title: 'The Internet of Things (IoT): Connecting Smart Devices & Automation',
    excerpt: 'Build sensor node meshes, configure microcontrollers, and design automated robotics assemblies.',
    author: 'IoT & Robotics Team',
    date: 'Jun 09, 2025',
    link: 'blog-iot.html',
    thumbnail: 'images/blog_iot.jpg'
  },
  {
    id: 'ml',
    title: 'Unlocking Machine Learning: The Future of Intelligent Automation',
    excerpt: 'Master predictive modeling, pandas, scikit-learn, regression algorithms, and deep learning.',
    author: 'Data Science Faculty',
    date: 'Jun 08, 2025',
    link: 'blog-ml.html',
    thumbnail: 'images/blog_ml.jpg'
  },
  {
    id: 'vlsi',
    title: 'VLSI Chip Architecture: Designing Next-Gen Semiconductor Logic',
    excerpt: 'Design hardware systems, configure logic gates, test integrated circuits, and build silicon layouts.',
    author: 'VLSI Semiconductor Core',
    date: 'Jun 15, 2025',
    link: 'blog-vlsi.html',
    thumbnail: 'images/blog_vlsi.jpg'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development: Mastering MERN, React & Server Scalability',
    excerpt: 'Build scalable web applications with MongoDB, Express, React, Node.js, and cloud APIs.',
    author: 'Web Dev Mentors',
    date: 'Jun 16, 2025',
    link: 'blog-fullstack.html',
    thumbnail: 'images/about_inspiration_1.jpg'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing & DevOps: Kubernetes, Docker & AWS Orchestration',
    excerpt: 'Automate CI/CD pipelines, containerize microservices, and manage AWS cloud infra.',
    author: 'DevOps Guild',
    date: 'Jun 18, 2025',
    link: 'blog-cloud.html',
    thumbnail: 'images/about_inspiration_2.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science & Predictive Analytics: Transforming Big Data into Insights',
    excerpt: 'Clean big data arrays, build neural networks, and deploy AI models for enterprise intelligence.',
    author: 'Analytics Core',
    date: 'Jun 20, 2025',
    link: 'blog-data-science.html',
    thumbnail: 'images/about_inspiration_3.jpg'
  },
  {
    id: 'autocad',
    title: 'AutoCAD 2D/3D Engineering Drafting: Precision Blueprint & Model Design',
    excerpt: 'Learn architectural elevation drafting, GD&T standards, and CAD 3D assemblies.',
    author: 'CAD Engineering Team',
    date: 'Jun 22, 2025',
    link: 'blog-autocad.html',
    thumbnail: 'images/about_inspiration_4.jpg'
  },
  {
    id: 'revit',
    title: 'Revit Architecture & BIM: Modern Structural Modeling & Digital Building',
    excerpt: 'Master Building Information Modeling (BIM), structural frames, and 3D architectural plans.',
    author: 'BIM Specialists',
    date: 'Jun 24, 2025',
    link: 'blog-revit.html',
    thumbnail: 'images/about_inspiration_5.jpg'
  },
  {
    id: 'solidworks',
    title: 'SolidWorks Mechanical Design: 3D Product Simulation & CAD Modeling',
    excerpt: 'Run thermal stress simulations, design industrial mockups, and model sheet metal parts.',
    author: 'Mechanical Design Lab',
    date: 'Jun 26, 2025',
    link: 'blog-solidworks.html',
    thumbnail: 'images/about_inspiration_6.jpg'
  },
  {
    id: 'ansys',
    title: 'ANSYS Structural Analysis: Finite Element Simulation & Stress Auditing',
    excerpt: 'Run finite element analysis (FEA), stress-thermal simulation meshes, and fatigue testing.',
    author: 'FEA Simulation Lead',
    date: 'Jun 28, 2025',
    link: 'blog-ansys.html',
    thumbnail: 'images/about_inspiration_1.jpg'
  },
  {
    id: 'embedded',
    title: 'Embedded Systems Engineering: Microcontrollers & Firmware Programming',
    excerpt: 'Program ARM Cortex boards, configure real-time OS (RTOS), and build IoT hardware drivers.',
    author: 'Firmware Engineering Group',
    date: 'Jun 30, 2025',
    link: 'blog-embedded.html',
    thumbnail: 'images/about_inspiration_2.jpg'
  },
  {
    id: 'rtl',
    title: 'RTL Design & Verilog Hardware Verification: Silicon Chip Prototyping',
    excerpt: 'Synthesize Verilog code, optimize state machines, and verify digital chip assertions.',
    author: 'Silicon Prototyping Group',
    date: 'Jul 02, 2025',
    link: 'blog-rtl.html',
    thumbnail: 'images/about_inspiration_3.jpg'
  },
  {
    id: 'catia',
    title: 'CATIA 3D Product Design: Aerospace & Automotive Surface Engineering',
    excerpt: 'Develop parametric shapes, surface design models, and complex aerospace mechanical parts.',
    author: 'Aerospace Design Lead',
    date: 'Jul 04, 2025',
    link: 'blog-catia.html',
    thumbnail: 'images/about_inspiration_4.jpg'
  },
  {
    id: 'matlab',
    title: 'MATLAB & Simulink: Signal Processing & Control Loop Systems',
    excerpt: 'Model feedback loops, simulate signal grids, and program mathematical control systems.',
    author: 'Control Systems Lab',
    date: 'Jul 06, 2025',
    link: 'blog-matlab.html',
    thumbnail: 'images/about_inspiration_5.jpg'
  },
  {
    id: 'business',
    title: 'Business Analytics & Intelligence: Product Strategy & Market Modeling',
    excerpt: 'Build interactive Power BI dashboards, model business logic, and drive product discovery.',
    author: 'Business Strategy Lead',
    date: 'Jul 08, 2025',
    link: 'blog-business.html',
    thumbnail: 'images/about_inspiration_6.jpg'
  },
  {
    id: 'sixsigma',
    title: 'Lean Six Sigma Green Belt: Quality Operations & Agile Optimization',
    excerpt: 'Master DMAIC error reduction models, quality process audits, and industrial workflow checks.',
    author: 'Quality Audit Team',
    date: 'Jul 10, 2025',
    link: 'blog-sixsigma.html',
    thumbnail: 'images/about_inspiration_1.jpg'
  }
];
