import React from 'react';
import Card from '../components/common/Card';
import SectionTitle from '../components/common/SectionTitle';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BlogsPage = () => {
  const blogs = [
    {
      title: 'MERN Stack Roadmap: Day-1 Ready Engineer Checklist',
      author: 'Amit Sharma (CEO, Edvanta)',
      date: 'July 14, 2026',
      readTime: '6 min read',
      excerpt: 'What does it take to get hired as a junior dev in 2026? We break down the key repositories, state structures, and API patterns recruiters expect.',
      category: 'Software Engineering'
    },
    {
      title: 'Decoupling Monoliths: A Practical DevOps Guide',
      author: 'Sameer Sen (DevOps Architect)',
      date: 'July 09, 2026',
      readTime: '8 min read',
      excerpt: 'An architectural review on transitioning legacy codebases into containerized microservices running on secure, scaled Kubernetes clusters.',
      category: 'DevOps'
    },
    {
      title: 'Inside Microsoft India: Interview Preparation Secrets',
      author: 'Vikram Patel (Head of Placements)',
      date: 'June 28, 2026',
      readTime: '10 min read',
      excerpt: 'Read how 14 Edvanta alumni successfully navigated Microsoft technical and HR interview rounds in our latest summer cohort.',
      category: 'Career Guidance'
    }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="EDVANTA KNOWLEDGE" 
          title="Engineering & Placement Insights"
          description="Browse detailed roadmaps, system architectures, and interview success strategies compiled by our active mentors."
        />

        <div className="grid-3">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="glass-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                <span style={{
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '14px'
                }}>{blog.category}</span>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  lineHeight: '1.4',
                  marginBottom: '12px'
                }}>{blog.title}</h3>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '20px'
                }}>{blog.excerpt}</p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-tertiary)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>By {blog.author}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <span style={{ color: 'var(--accent)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      Read <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
