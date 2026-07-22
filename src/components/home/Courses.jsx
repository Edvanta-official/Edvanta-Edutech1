import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';

const Courses = () => {
  const featuredCourses = [
    {
      id: 'fs-web',
      title: 'Full Stack Web Development (MERN)',
      category: 'Software Engineering',
      duration: '24 Weeks',
      modules: '12 Modules',
      rating: '4.9',
      reviews: '1.2k',
      price: '₹14,999',
      popular: true
    },
    {
      id: 'ai-ml',
      title: 'Advanced AI & Machine Learning Specialization',
      category: 'Data Science',
      duration: '28 Weeks',
      modules: '15 Modules',
      rating: '4.8',
      reviews: '980',
      price: '₹18,999',
      popular: false
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Computing & DevOps Architect',
      category: 'Cloud Engineering',
      duration: '18 Weeks',
      modules: '10 Modules',
      rating: '4.7',
      reviews: '640',
      price: '₹16,999',
      popular: false
    }
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="EXPLORE COURSES" 
          title="Industry-Guided Professional Programs"
          description="Learn from experts, work on active corporate pipelines, and earn verified certifications."
        />

        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {featuredCourses.map(course => (
            <Card key={course.id} className="glass-panel" style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              {course.popular && (
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--accent)',
                  color: 'var(--badge-text)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>POPULAR</span>
              )}

              <div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '12px'
                }}>{course.category}</span>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  lineHeight: '1.4'
                }}>{course.title}</h3>

                {/* Specs */}
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
                {/* Rating */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                  <span style={{ fontWeight: '700' }}>{course.rating}</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>({course.reviews} reviews)</span>
                </div>

                {/* Pricing / CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '20px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Course Fee</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)' }}>{course.price}</span>
                  </div>
                  <Link to="/courses">
                    <Button variant="outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Enroll Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/courses">
            <Button variant="secondary">View All Courses <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
