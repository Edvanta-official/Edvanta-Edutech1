import React, { useState } from 'react';
const courseBucketData = {
  it: {
    categoryName: "💻 IT & Emerging Technologies",
    badge: "14 PROGRAMS",
    courses: [
      {
        id: "ai",
        name: "Artificial Intelligence (AI)",
        duration: "4 Months Duration",
        overview: "Comprehensive AI engineering program covering Neural Networks, Deep Learning, NLP, and Computer Vision.",
        modules: ["Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Computer Vision & OpenCV", "AI Model Deployment & MLOps"],
        link: "pages/courses/course-ai-core.html"
      },
      {
        id: "ml",
        name: "Machine Learning (ML)",
        duration: "4 Months Duration",
        overview: "Hands-on ML algorithm engineering with Scikit-Learn, TensorFlow, Regression, Classification, and Predictive AI.",
        modules: ["Supervised & Unsupervised Learning", "TensorFlow & PyTorch Foundations", "Feature Engineering & Model Tuning", "Predictive Analytics Projects"],
        link: "pages/courses/course-ai-ml.html"
      },
      {
        id: "python",
        name: "Python Programming",
        duration: "3 Months Duration",
        overview: "Core to Advanced Python development covering Data Structures, OOPs, Automation, and Web API integration.",
        modules: ["Python Basics & Advanced Data Types", "Object-Oriented Programming (OOP)", "File Handling & Automation Scripts", "REST API Development"],
        link: "pages/courses/course-ai-ml.html"
      },
      {
        id: "datascience",
        name: "Data Science",
        duration: "4 Months Duration",
        overview: "End-to-end Data Science curriculum with Pandas, NumPy, Machine Learning, Statistical Inference, and PowerBI.",
        modules: ["Data Wrangling with Pandas & NumPy", "Statistical Modeling & Hypothesis Testing", "Machine Learning Algorithms", "PowerBI & Executive Dashboards"],
        link: "pages/courses/course-data-science.html"
      },
      {
        id: "dataanalytics",
        name: "Data Analytics",
        duration: "4 Months Duration",
        overview: "Business Intelligence, Advanced Excel, SQL Queries, Tableau Visualization, and Data-Driven Decision Making.",
        modules: ["Advanced Excel & Pivot Tables", "Complex SQL Database Queries", "Tableau & PowerBI Dashboards", "Business Metric Case Studies"],
        link: "pages/courses/course-data-analytics.html"
      },
      {
        id: "cybersec",
        name: "Cyber Security & Ethical Hacking",
        duration: "4 Months Duration",
        overview: "Network Auditing, Penetration Testing, Risk Assessment, Cryptography, and Defense Security Architecture.",
        modules: ["Ethical Hacking & Penetration Testing", "Network Security & Wireshark", "Web Application Vulnerability Auditing", "Cryptography & Risk Compliance"],
        link: "pages/courses/course-cybersec.html"
      },
      {
        id: "bizanalytics",
        name: "Business Analytics",
        duration: "4 Months Duration",
        overview: "Agile Project Modeling, Requirement Gathering, Process Intelligence, and Business Performance Metrics.",
        modules: ["Requirement Gathering & Agile BRD", "Process Modeling & BPMN", "SQL for Business Analysts", "Executive Data Storytelling"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "cloud",
        name: "Cloud Computing",
        duration: "4 Months Duration",
        overview: "AWS & Azure Infrastructure management, Virtual Machines, Cloud Networking, and Serverless Systems.",
        modules: ["AWS EC2, S3 & IAM Security", "Cloud Architecture & VPC Networking", "Azure Cloud Fundamentals", "Cloud Migration Strategies"],
        link: "pages/courses/course-cloud-devops.html"
      },
      {
        id: "devops",
        name: "DevOps",
        duration: "4 Months Duration",
        overview: "CI/CD Pipeline Automation, Docker Containerization, Kubernetes Orchestration, and Infrastructure as Code.",
        modules: ["Docker Containerization", "Kubernetes Cluster Management", "Jenkins & GitHub Actions CI/CD", "Terraform & Ansible Infrastructure"],
        link: "pages/courses/course-cloud-devops.html"
      },
      {
        id: "fullstack",
        name: "Full Stack Development",
        duration: "4 Months Duration",
        overview: "MERN Stack Web Engineering: React, Node.js, Express, MongoDB, and Scalable Web Applications.",
        modules: ["HTML5, CSS3 & Modern JavaScript", "React.js Component Architecture", "Node.js & Express REST APIs", "MongoDB Database Architecture"],
        link: "pages/courses/course-fullstack-web.html"
      },
      {
        id: "uiux",
        name: "UI/UX Design",
        duration: "3 Months Duration",
        overview: "User Research, Wireframing, Figma Interactive Prototyping, Usability Testing, and Design Systems.",
        modules: ["User Experience Research & Personas", "Figma Interactive Prototyping", "UI Design Systems & Components", "Usability Testing & Micro-interactions"],
        link: "pages/courses/course-fullstack-web.html"
      },
      {
        id: "sixsigma",
        name: "Lean-Six Sigma",
        duration: "3 Months Duration",
        overview: "DMAIC Quality Control Metrics, Statistical Process Control, Waste Reduction, and Lean Management.",
        modules: ["DMAIC Framework Execution", "Statistical Process Control (SPC)", "Root Cause Analysis (RCA)", "Lean Process Optimization"],
        link: "pages/courses/course-six-sigma.html"
      },
      {
        id: "genai",
        name: "Generative AI",
        duration: "3 Months Duration",
        overview: "LLMs, Prompt Engineering, LangChain, RAG Systems, Transformer Models, and Custom AI Agents.",
        modules: ["LLM Architecture & OpenAI API", "Prompt Engineering Mastery", "LangChain & RAG Systems", "Custom Autonomous AI Agents"],
        link: "pages/courses/course-ai-core.html"
      },
      {
        id: "iot",
        name: "IoT & Robotics",
        duration: "4 Months Duration",
        overview: "ESP32 Sensor Networks, MQTT Protocol, Embedded Robotics, and Real-Time Telemetry Systems.",
        modules: ["ESP32 Microcontroller Programming", "MQTT & Wireless Telemetry", "IoT Cloud Platforms", "Embedded Robotics Kinematics"],
        link: "pages/courses/course-embedded-systems.html"
      }
    ]
  },
  eng: {
    categoryName: "⚙️ Core Engineering Programs",
    badge: "7 PROGRAMS",
    courses: [
      {
        id: "vlsi",
        name: "VLSI Design",
        duration: "4 Months Duration",
        overview: "CMOS Circuit Design, SystemVerilog HDL, FPGA Synthesis, and Physical Silicon Verification.",
        modules: ["CMOS Transistor Theory", "SystemVerilog for Design & Verification", "FPGA Synthesis & Logic Mapping", "Physical Design & Layout Verification"],
        link: "pages/courses/course-vlsi-design.html"
      },
      {
        id: "embedded",
        name: "Embedded Systems",
        duration: "4 Months Duration",
        overview: "ARM Cortex Microcontrollers, Real-Time Operating Systems (RTOS), C/C++ Firmware, and Peripherals.",
        modules: ["ARM Cortex Microcontroller Architecture", "Embedded C & Peripheral Drivers", "FreeRTOS Real-Time Kernel", "Hardware Debugging & Logic Analyzers"],
        link: "pages/courses/course-embedded-systems.html"
      },
      {
        id: "rtl",
        name: "RTL Design",
        duration: "4 Months Duration",
        overview: "RTL Coding in Verilog, Digital Logic Synthesis, Static Timing Analysis (STA), and ASIC Verification.",
        modules: ["Verilog HDL & FSM State Machines", "RTL Synthesis & Clock Domain Crossing", "Static Timing Analysis (STA)", "UVM Testbench Architecture"],
        link: "pages/courses/course-vlsi-design.html"
      },
      {
        id: "autocad",
        name: "AutoCAD",
        duration: "3 Months Duration",
        overview: "2D Drafting, 3D Architectural & Mechanical Modeling, Layer Management, and Layout Drawings.",
        modules: ["2D Precision Mechanical Drafting", "3D Surface & Solid Modeling", "Architectural Floorplan Design", "Plotting & Engineering Layouts"],
        link: "pages/courses/course-six-sigma.html"
      },
      {
        id: "catia",
        name: "CATIA",
        duration: "3 Months Duration",
        overview: "Part Design, Surface Modeling, Assembly Design, and Aerospace & Automotive Component Engineering.",
        modules: ["Part Design & Generative Shape", "Complex Surface Wireframe Modeling", "Mechanical Assembly & Kinematics", "DMU Fitting & Drawing Production"],
        link: "pages/courses/course-six-sigma.html"
      },
      {
        id: "solidworks",
        name: "SolidWorks",
        duration: "3 Months Duration",
        overview: "Parametric 3D Modeling, Sheet Metal Design, Weldments, Finite Element Analysis (FEA) Simulation.",
        modules: ["3D Parametric Part Modeling", "Sheet Metal & Weldments", "Assembly Motion Analysis", "FEA Structural & Thermal Simulation"],
        link: "pages/courses/course-six-sigma.html"
      },
      {
        id: "revit",
        name: "Revit Architecture",
        duration: "3 Months Duration",
        overview: "BIM Architectural Design, Structural Modeling, 3D Rendering, Construction Documentation.",
        modules: ["Building Information Modeling (BIM)", "3D Wall, Roof & Structural Elements", "Photorealistic Architectural Rendering", "Construction Working Drawings"],
        link: "pages/courses/course-six-sigma.html"
      }
    ]
  },
  mgmt: {
    categoryName: "📊 Management & Non-IT Programs",
    badge: "7 PROGRAMS",
    courses: [
      {
        id: "hr",
        name: "Human Resource (HR)",
        duration: "3 Months Duration",
        overview: "Talent Acquisition, Payroll Management, Labor Law Compliance, HR Analytics, and Employee Relations.",
        modules: ["End-to-End Talent Acquisition", "Payroll Processing & Statutory Compliance", "HR Analytics & Performance Metrics", "Employee Engagement & Labor Laws"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "finance",
        name: "Finance & Accounting",
        duration: "4 Months Duration",
        overview: "Corporate Financial Analysis, Tally Prime, GST Taxation, Financial Modeling, and Auditing.",
        modules: ["Financial Accounting & Bookkeeping", "GST Taxation & Compliance", "Corporate Financial Statement Analysis", "Excel Financial Modeling"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "sap",
        name: "SAP (FICO/MM/SD)",
        duration: "4 Months Duration",
        overview: "SAP ERP Enterprise Management across Financial Accounting (FICO), Materials Management (MM), Sales & Distribution (SD).",
        modules: ["SAP ERP Navigation & Configuration", "SAP FICO General Ledger & Accounts", "SAP MM Procurement & Inventory", "SAP SD Order-to-Cash Workflow"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "digitalmkt",
        name: "Digital Marketing",
        duration: "3 Months Duration",
        overview: "SEO, Google Ads PPC, Social Media Marketing (SMM), Content Strategy, and Analytics.",
        modules: ["Search Engine Optimization (SEO)", "Google Search & Display PPC Ads", "Social Media Campaign Strategy", "Google Analytics 4 & Funnels"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "mktmgmt",
        name: "Marketing Management",
        duration: "3 Months Duration",
        overview: "Brand Strategy, Market Research, Consumer Behavior, Channel Distribution, and Campaign ROI.",
        modules: ["Strategic Brand Positioning", "Market Research & Consumer Insights", "Integrated Marketing Communications", "Channel Distribution Strategy"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "bda",
        name: "Business Development Associate (BDA)",
        duration: "3 Months Duration",
        overview: "B2B Sales Pipeline, Lead Generation, Client Relationship Management, Pitching, and Revenue Growth.",
        modules: ["B2B & B2C Lead Generation", "Cold Pitching & Negotiation Tactics", "CRM System Management", "Closing High-Value Client Deals"],
        link: "pages/courses/course-business-analyst.html"
      },
      {
        id: "entrepreneurship",
        name: "Entrepreneurship",
        duration: "4 Months Duration",
        overview: "Startup Ideation, Business Model Canvas, Venture Pitching, Fundraising, and Scalable Execution.",
        modules: ["Startup Opportunity Validation", "Business Model Canvas (BMC)", "Investor Pitch Deck Preparation", "Venture Capital & Unit Economics"],
        link: "pages/courses/course-business-analyst.html"
      }
    ]
  }
};
const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('it');
  const [selectedCourse, setSelectedCourse] = useState(courseBucketData.it.courses[0]);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isExplorerModalOpen, setIsExplorerModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const handleSelectCategory = (key) => {
    setActiveCategory(key);
    setSelectedCourse(courseBucketData[key].courses[0]);
    setIsCategoryModalOpen(false);
    setIsExplorerModalOpen(true);
  };
  const currentCatData = courseBucketData[activeCategory];
  return (
    <section id="programs" className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center relative bg-transparent">
      <div className="mb-8">
        <span className="inline-block font-sans font-extrabold text-xs tracking-[2.5px] text-emerald-600 bg-emerald-500/10 border border-emerald-500/30 px-6 py-2 rounded-full uppercase mb-4">
          EXPLORE OUR CURRICULUM
        </span>
        <h2 className="font-sans font-black text-4xl sm:text-5xl text-black leading-tight tracking-tight mb-4">
          Our Online Training Programs
        </h2>
        <p className="font-sans font-semibold text-base sm:text-lg text-slate-600">
          All courses have verified ISO &amp; Govt. Recognized Certification partners.
        </p>
      </div>
      <div className="border-2 sm:border-[2.5px] border-emerald-500 rounded-3xl sm:rounded-[36px] bg-white p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl shadow-emerald-500/10 hover:scale-[1.01] transition-all duration-300">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-4xl">🛒</span>
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-black tracking-tight">
            CLICK COURSE BUCKET
          </h3>
        </div>
        <p className="font-sans font-bold text-base sm:text-lg text-emerald-600 mb-8">
          Click to blur &amp; reveal IT Programs, Core Engineering, and Management Courses
        </p>
        <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-extrabold text-sm sm:text-base tracking-wider px-8 py-4 rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all duration-300 uppercase inline-flex items-center gap-3"
        >
          <span>OPEN ANIMATED BUCKET</span>
          <span className="text-xl">↓</span>
        </button>
      </div>
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] border-2 border-emerald-500 max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsCategoryModalOpen(false)}
              className="absolute top-6 right-6 bg-black text-white w-10 h-10 rounded-full font-bold flex items-center justify-center text-lg hover:bg-slate-800"
            >
              ✕
            </button>
            <div className="text-center mb-8">
              <span className="inline-block font-sans font-extrabold text-xs tracking-widest text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full uppercase mb-3">
                SELECT YOUR COURSE BUCKET
              </span>
              <h3 className="font-sans font-black text-3xl text-black mb-2">
                Choose a Program Category
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Click any bucket below to explore left-side course listings and right-side detailed curriculum.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div
                onClick={() => handleSelectCategory('it')}
                className="bg-white rounded-2xl border-2 border-emerald-500 p-7 cursor-pointer hover:-translate-y-1.5 transition-all shadow-lg hover:shadow-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">💻</span>
                    <span className="bg-black text-white font-extrabold text-[10px] px-3 py-1 rounded-full">
                      14 PROGRAMS
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-xl text-black mb-2">
                    IT &amp; Emerging Technologies
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Artificial Intelligence (AI), Machine Learning (ML), Python, Data Science, Cyber Security, Cloud, DevOps, Full Stack &amp; GenAI.
                  </p>
                </div>
                <button className="w-full bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2">
                  <span>Explore IT Bucket</span>
                  <span>→</span>
                </button>
              </div>
              <div
                onClick={() => handleSelectCategory('eng')}
                className="bg-white rounded-2xl border-2 border-black p-7 cursor-pointer hover:-translate-y-1.5 transition-all shadow-lg hover:shadow-black/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">⚙️</span>
                    <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full">
                      7 PROGRAMS
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-xl text-black mb-2">
                    Core Engineering Programs
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    VLSI Design, Embedded Systems, RTL Design, AutoCAD, CATIA, SolidWorks, and Revit Architecture.
                  </p>
                </div>
                <button className="w-full bg-black text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2">
                  <span>Explore Engineering Bucket</span>
                  <span>→</span>
                </button>
              </div>
              <div
                onClick={() => handleSelectCategory('mgmt')}
                className="bg-white rounded-2xl border-2 border-emerald-500 p-7 cursor-pointer hover:-translate-y-1.5 transition-all shadow-lg hover:shadow-emerald-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">📊</span>
                    <span className="bg-black text-white font-extrabold text-[10px] px-3 py-1 rounded-full">
                      7 PROGRAMS
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-xl text-black mb-2">
                    Management &amp; Non-IT Programs
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Human Resource (HR), Finance &amp; Accounting, SAP (FICO/MM/SD), Digital Marketing, BDA &amp; Entrepreneurship.
                  </p>
                </div>
                <button className="w-full bg-emerald-600 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2">
                  <span>Explore Management Bucket</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isExplorerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] border-2 border-emerald-500 max-w-6xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl text-left">
            <div className="bg-black text-white px-7 py-4 flex items-center justify-between border-b-2 border-emerald-500 shrink-0">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setIsExplorerModalOpen(false);
                    setIsCategoryModalOpen(true);
                  }}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2"
                >
                  <span>←</span>
                  <span>Back to Buckets</span>
                </button>
                <h3 className="font-sans font-black text-xl text-white">
                  {currentCatData.categoryName}
                </h3>
              </div>
              <button
                onClick={() => setIsExplorerModalOpen(false)}
                className="bg-white/15 text-white w-9 h-9 rounded-full font-bold flex items-center justify-center hover:bg-white/25"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <div className="w-80 sm:w-96 bg-slate-50 border-r border-slate-200 p-5 overflow-y-auto shrink-0 space-y-2.5">
                <span className="block font-sans font-extrabold text-xs tracking-wider text-emerald-600 uppercase mb-3">
                  SELECT COURSE
                </span>
                {currentCatData.courses.map((course) => {
                  const isSelected = selectedCourse.id === course.id;
                  return (
                    <div
                      key={course.id}
                      onClick={() => setSelectedCourse(course)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-emerald-100 border-emerald-500 border-l-4 border-l-emerald-600'
                          : 'bg-white border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <h4 className={`font-sans font-bold text-sm ${isSelected ? 'text-emerald-800' : 'text-slate-900'}`}>
                        {course.name}
                      </h4>
                      <span className="text-xs font-semibold text-slate-500 mt-1 block">
                        ⏱ {course.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1 p-8 overflow-y-auto bg-white">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-emerald-600 text-white font-extrabold text-[10px] tracking-widest px-4 py-1.5 rounded-full uppercase">
                    VERIFIED INDUSTRY CURRICULUM
                  </span>
                  <span className="bg-slate-100 text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full">
                    ⏱ {selectedCourse.duration}
                  </span>
                </div>
                <h3 className="font-sans font-black text-3xl text-black mb-4">
                  {selectedCourse.name}
                </h3>
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                  {selectedCourse.overview}
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
                  <h4 className="font-sans font-extrabold text-xs text-black uppercase tracking-wider mb-4">
                    📌 KEY LEARNING MODULES
                  </h4>
                  <ul className="space-y-3">
                    {selectedCourse.modules.map((mod, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-900 font-semibold">
                        <span className="text-emerald-600 font-black">✔</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black text-white rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] font-extrabold tracking-widest opacity-70 uppercase">
                      CONTACT OFFICIAL ADMISSIONS
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      Email: hr@edvanta-edu.com | Phone: 7075854314
                    </span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full">
                    📍 Madhapur, Hyderabad
                  </span>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => setIsDetailModalOpen(true)}
                    className="bg-emerald-600 text-white font-extrabold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-all flex items-center gap-2"
                  >
                    <span>View Full Course Curriculum</span>
                    <span>→</span>
                  </button>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScQnNse67qz9SkYDNQFTO2nY4hdeT7J0KqmyripVtCsrzDZ2g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-slate-800 transition-all"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] border-2 border-emerald-600 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative shadow-2xl text-left">
            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="absolute top-6 right-6 bg-black text-white w-9 h-9 rounded-full font-bold flex items-center justify-center"
            >
              ✕
            </button>
            <span className="inline-block font-sans font-extrabold text-[11px] tracking-widest text-emerald-700 bg-emerald-100 px-4 py-1.5 rounded-full uppercase mb-4">
              COMPLETE PROGRAM SPECIFICATION
            </span>
            <h3 className="font-sans font-black text-3xl text-black mb-4">
              {selectedCourse.name}
            </h3>
            <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
              {selectedCourse.overview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-xs text-black mb-1">🎓 CERTIFICATION</h5>
                <p className="text-xs text-slate-600">ISO &amp; Govt. Recognized Partner Certificate upon completion.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-xs text-black mb-1">⏱ DURATION &amp; FORMAT</h5>
                <p className="text-xs text-slate-600">Live Mentor Sessions + Hands-on Projects &amp; Capstone Labs.</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 p-5 rounded-2xl text-center mb-8">
              <h4 className="font-bold text-base text-emerald-900 mb-1">
                Ready to start learning {selectedCourse.name}?
              </h4>
              <p className="text-xs text-emerald-700">
                Enroll today to lock in 50% Early Bird Scholarship discount.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQnNse67qz9SkYDNQFTO2nY4hdeT7J0KqmyripVtCsrzDZ2g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white font-extrabold text-sm px-8 py-4 rounded-full inline-block shadow-lg shadow-emerald-600/30"
              >
                Proceed To Registration Form →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Courses;