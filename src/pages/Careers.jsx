import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    {
      title: 'Senior Frontend Developer (React / TS)',
      dept: 'Engineering',
      location: 'Noida (Hybrid)',
      type: 'Full-time',
      desc: 'Lead the architectural roadmap of our student-workspace portals. Deep React, state management, and CSS-in-JS skill required.'
    },
    {
      title: 'Technical Mentor - Machine Learning & AI',
      dept: 'Academics',
      location: 'Remote (India)',
      type: 'Part-time / Contract',
      desc: 'Deliver weekly live webinars, perform mock code assessments, and review student milestone submissions in the AI/ML track.'
    },
    {
      title: 'Placement & Corporate Relations Manager',
      dept: 'Hiring Network',
      location: 'Noida / Bangalore',
      type: 'Full-time',
      desc: 'Partner with enterprise HR teams (Adobe, Microsoft, Autodesk, etc.) to onboard them onto our recruitment pipeline dashboard.'
    }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="JOIN OUR TEAM" 
          title="We Are Hiring Active Builders"
          description="Help us restructure global computer science education. We are always looking for mentors, developers, and placement leaders."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {jobs.map((job, idx) => (
            <Card key={idx} className="career-job-card glass-panel" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '500px' }}>
                <span style={{
                  color: 'var(--accent)',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase'
                }}>{job.dept}</span>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{job.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{job.desc}</p>
                
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div>
                <Button variant="primary">Apply Now <ArrowRight size={16} /></Button>
              </div>

            </Card>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 600px) {
          .career-job-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .career-job-card button {
            width: 100% !important;
          }
        }
      `}} />
    </section>
  );
};

export default CareersPage;
