import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Search, Star, Clock, BookOpen, Filter, X, ArrowRight, Users, BarChart3, Zap } from 'lucide-react';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Programs Data Structure
  const programs = [
    {
      id: 'cse',
      name: 'Computer Science/Information Science',
      icon: '💻',
      description: 'Master cutting-edge software development and IT solutions',
      courseCount: 8
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      icon: '🏗️',
      description: 'Design and build sustainable infrastructure',
      courseCount: 6
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      icon: '⚡',
      description: 'Develop advanced communication systems',
      courseCount: 7
    },
    {
      id: 'mech',
      name: 'Mechanical Engineering',
      icon: '⚙️',
      description: 'Create innovative mechanical solutions',
      courseCount: 6
    },
    {
      id: 'aiml',
      name: 'Artificial Intelligence & ML',
      icon: '🤖',
      description: 'Build intelligent AI-powered applications',
      courseCount: 9
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: '☁️',
      description: 'Master cloud infrastructure and deployment',
      courseCount: 7
    }
  ];

  const categories = ['All', 'Software Engineering', 'Data Science & AI', 'Cyber Security', 'AutoCAD & MATLAB', 'UI/UX & Marketing'];

  const allCourses = [
    {
      id: 'fs-web',
      program: 'cse',
      title: 'Full Stack Web Development (MERN)',
      category: 'Software Engineering',
      duration: '24 Weeks',
      modules: '12 Modules',
      rating: '4.9',
      reviews: '1,200',
      price: '₹14,999',
      students: '5,200+',
      description: 'Master MongoDB, Express, React, Node.js and build scalable web services. Perfect for aspiring full-stack developers.',
      highlights: ['Live Project Development', 'Code Reviews', 'Industry Mentorship', 'Job-Ready Portfolio']
    },
    {
      id: 'ai-ml',
      program: 'aiml',
      title: 'Artificial Intelligence & Machine Learning Specialization',
      category: 'Data Science & AI',
      duration: '28 Weeks',
      modules: '15 Modules',
      rating: '4.8',
      reviews: '980',
      price: '₹18,999',
      students: '3,100+',
      description: 'Learn neural networks, deep learning models, natural language processing, and LLM fine-tuning with hands-on projects.',
      highlights: ['Advanced ML Algorithms', 'Deep Learning Frameworks', 'NLP & LLMs', 'Real-World Datasets']
    },
    {
      id: 'cybersec',
      program: 'cse',
      title: 'Ethical Hacking & Cyber Security Professional',
      category: 'Cyber Security',
      duration: '20 Weeks',
      modules: '11 Modules',
      rating: '4.6',
      reviews: '410',
      price: '₹15,499',
      students: '2,100+',
      description: 'Understand network defense, penetration testing, and secure application code designs. Certified security training.',
      highlights: ['Penetration Testing', 'Network Security', 'Secure Coding', 'Compliance Standards']
    },
    {
      id: 'iot-robotics',
      program: 'ece',
      title: 'Internet of Things (IoT) & Robotics Systems',
      category: 'Data Science & AI',
      duration: '22 Weeks',
      modules: '12 Modules',
      rating: '4.7',
      reviews: '340',
      price: '₹16,499',
      students: '1,800+',
      description: 'Program microcontroller boards, construct sensor meshes, and design automated robotics systems.',
      highlights: ['Embedded Systems', 'Sensor Integration', 'Robotics Programming', 'IoT Deployment']
    },
    {
      id: 'autocad-design',
      program: 'civil',
      title: 'AutoCAD Design & 3D Modeling Specialist',
      category: 'AutoCAD & MATLAB',
      duration: '16 Weeks',
      modules: '8 Modules',
      rating: '4.8',
      reviews: '280',
      price: '₹11,999',
      students: '2,900+',
      description: 'Develop detailed architectural drafts, parts assemblies, and parametric models. Industry-standard tool mastery.',
      highlights: ['2D & 3D Drafting', 'Architectural Design', 'BIM Workflows', 'Professional Standards']
    },
    {
      id: 'matlab-simulation',
      program: 'mech',
      title: 'MATLAB for Engineering Simulations',
      category: 'AutoCAD & MATLAB',
      duration: '18 Weeks',
      modules: '9 Modules',
      rating: '4.7',
      reviews: '310',
      price: '₹12,499',
      students: '2,200+',
      description: 'Analyze data arrays, construct state simulations, and test math frameworks. Essential for engineers.',
      highlights: ['Simulation & Modeling', 'Data Analysis', 'Scientific Computing', 'Visualization']
    },
    {
      id: 'uiux-marketing',
      program: 'cse',
      title: 'UI/UX Design & Digital Marketing Specialist',
      category: 'UI/UX & Marketing',
      duration: '20 Weeks',
      modules: '10 Modules',
      rating: '4.9',
      reviews: '620',
      price: '₹13,499',
      students: '3,500+',
      description: 'Create user interfaces in Figma, run SEO audits, and manage lead-conversion campaigns. Complete digital strategy.',
      highlights: ['Figma Design', 'UX Research', 'Digital Marketing', 'Analytics & Conversion']
    },
    {
      id: 'cloud-devops',
      program: 'cloud',
      title: 'Cloud Computing & DevOps Engineering',
      category: 'Software Engineering',
      duration: '24 Weeks',
      modules: '13 Modules',
      rating: '4.9',
      reviews: '890',
      price: '₹17,999',
      students: '4,100+',
      description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines. Industry-ready infrastructure expertise.',
      highlights: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      id: 'data-science',
      program: 'aiml',
      title: 'Data Science & Analytics Professional',
      category: 'Data Science & AI',
      duration: '22 Weeks',
      modules: '12 Modules',
      rating: '4.8',
      reviews: '560',
      price: '₹16,999',
      students: '2,800+',
      description: 'Advanced statistics, predictive modeling, and big data analysis. Transform data into insights.',
      highlights: ['Statistical Analysis', 'Predictive Modeling', 'Big Data Tools', 'Visualization & Reporting']
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesProgram = !selectedProgram || course.program === selectedProgram;
    return matchesSearch && matchesCategory && matchesProgram;
  });

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="OUR CURRICULUM" 
          title="Industry-Led Certified Programs"
          description="Choose your program, explore courses, and start your learning journey with us."
        />

        {/* PROGRAM SELECTOR */}
        {!selectedProgram && (
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>
              Select Your Program
            </h3>
            <div className="grid-3" style={{ gap: '24px' }}>
              {programs.map(prog => (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog.id)}
                  style={{
                    padding: '32px',
                    borderRadius: '20px',
                    background: 'var(--card-bg)',
                    border: '2px solid var(--glass-border)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{prog.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>{prog.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', minHeight: '45px' }}>
                    {prog.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: 'var(--accent)',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    <BookOpen size={16} />
                    <span>{prog.courseCount} Courses</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROGRAM SELECTED - SHOW COURSES */}
        {selectedProgram && (
          <>
            {/* Back Button & Program Header */}
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  setSelectedCourse(null);
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                ← Back to Programs
              </button>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', flex: 1, textAlign: 'center' }}>
                {programs.find(p => p.id === selectedProgram)?.name}
              </h2>
              <div style={{ width: '120px' }} />
            </div>

            {/* Filter & Search Bar */}
            <div className="filter-bar glass-panel" style={{
              padding: '20px',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '40px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              
              {/* Category Tabs */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '30px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                      color: activeCategory === cat ? 'var(--badge-text)' : 'var(--text-secondary)',
                      border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', color: 'var(--text-tertiary)' }} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: '10px 16px 10px 40px',
                    borderRadius: '30px',
                    border: '1.5px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'var(--text-primary)',
                    width: '280px',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid-3">
                {filteredCourses.map(course => (
                  <Card 
                    key={course.id} 
                    className="glass-panel" 
                    onClick={() => setSelectedCourse(course)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all var(--transition-normal)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                  >
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '10px'
                      }}>{course.category}</span>
                      
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '10px' }}>{course.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.5' }}>
                        {course.description}
                      </p>

                      <div style={{
                        display: 'flex',
                        gap: '16px',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '20px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <BookOpen size={16} />
                          <span>{course.modules}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '20px',
                        fontSize: '0.88rem'
                      }}>
                        <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                        <span style={{ fontWeight: '700' }}>{course.rating}</span>
                        <span style={{ color: 'var(--text-tertiary)' }}>({course.reviews} reviews)</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '16px'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Tuition Fee</span>
                          <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>{course.price}</span>
                        </div>
                        <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>View</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No courses matching your search or filters.</p>
              </div>
            )}
          </>
        )}

        {/* COURSE DETAILS MODAL */}
        {selectedCourse && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}>
            <div style={{
              background: 'var(--card-bg)',
              borderRadius: '24px',
              padding: '40px',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--btn-secondary-bg)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--btn-secondary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--btn-secondary-bg)'}
              >
                <X size={20} />
              </button>

              {/* Course Details */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {selectedCourse.category}
                </span>
              </div>

              <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px' }}>
                {selectedCourse.title}
              </h1>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '32px',
                paddingBottom: '24px',
                borderBottom: '1px solid var(--glass-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Star size={20} fill="#fbbf24" stroke="#fbbf24" />
                  <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{selectedCourse.rating}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>({selectedCourse.reviews} reviews)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                  <Users size={18} />
                  <span>{selectedCourse.students} enrolled</span>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>About This Course</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
                  {selectedCourse.description}
                </p>
              </div>

              {/* Course Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '32px',
                padding: '24px',
                background: 'var(--btn-secondary-bg)',
                borderRadius: '16px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Clock size={24} style={{ color: 'var(--accent)', marginBottom: '8px' }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Duration</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{selectedCourse.duration}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <BookOpen size={24} style={{ color: 'var(--accent)', marginBottom: '8px' }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Content</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{selectedCourse.modules}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <BarChart3 size={24} style={{ color: 'var(--accent)', marginBottom: '8px' }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Level</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>Professional</div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>What You'll Learn</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {selectedCourse.highlights.map((highlight, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px',
                      background: 'var(--btn-secondary-bg)',
                      borderRadius: '12px'
                    }}>
                      <Zap size={18} style={{ color: 'var(--accent)' }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '24px',
                borderTop: '1px solid var(--glass-border)'
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Investment</div>
                  <div style={{ fontSize: '2rem', fontWeight: '800' }}>{selectedCourse.price}</div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    style={{
                      padding: '12px 32px',
                      borderRadius: '30px',
                      border: '1.5px solid var(--glass-border)',
                      background: 'transparent',
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    Close
                  </button>
                  <button
                    style={{
                      padding: '12px 32px',
                      borderRadius: '30px',
                      border: 'none',
                      background: 'var(--accent-gradient)',
                      color: 'var(--badge-text)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    Enroll Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

};

export default CoursesPage;
