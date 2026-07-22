import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rohan Mehta',
      role: 'Full Stack Engineer at Microsoft',
      review: 'The structured internship at Edvanta was exactly what I needed. Building production features under expert feedback gave me the confidence to ace my Microsoft interview rounds.',
      rating: 5,
      avatarBg: '#dbeafe'
    },
    {
      name: 'Neha Roy',
      role: 'Product Analyst at Adobe',
      review: 'From live webinars to personalized resumes, Edvanta’s dashboard is extremely well structured. Being able to track recruiter interest and build verified profiles helped me land my dream role.',
      rating: 5,
      avatarBg: '#ffe4e6'
    },
    {
      name: 'Aditya Sen',
      role: 'Cloud Engineer at Autodesk',
      review: 'I took the DevOps pathway. The hand-on labs, digital certification, and 1-on-1 mock interviews prepared me thoroughly. I recommend Edvanta to every graduating engineer.',
      rating: 5,
      avatarBg: '#fef3c7'
    }
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="SUCCESS STORIES" 
          title="Designed for Outcomes. Validated by Alumni."
          description="Hear from Edvanta graduates who transitioned from academic environments into top global technology corporations."
        />

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <Card key={idx} className="glass-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <Quote size={40} style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                color: 'var(--accent)',
                opacity: 0.15
              }} />

              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontSize: '0.98rem'
                }}>
                  "{rev.review}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '16px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: rev.avatarBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  color: 'var(--text-primary)'
                }}>
                  {rev.name.split(' ').map(n => n.charAt(0)).join('')}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>{rev.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>{rev.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
