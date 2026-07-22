import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { Sparkles, Briefcase, FileCheck, Landmark } from 'lucide-react';

const Placements = () => {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="PLACEMENT SUPPORT" 
          title="Connect with 500+ Top Hiring Networks"
          description="We guide you from training to your first salary. Track interview rounds directly inside the Edvanta placement tracker dashboard."
        />

        <div className="grid-3" style={{ marginBottom: '48px' }}>
          <Card className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent)',
              padding: '12px',
              borderRadius: '12px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>AI-Powered Resume Builder</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Create ATS-friendly profiles, sync certifications and code repos with one click, and receive matching score feedbacks.
            </p>
          </Card>

          <Card className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent)',
              padding: '12px',
              borderRadius: '12px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Briefcase size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Exclusive Job Board</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Gain direct access to junior, mid-level development and analyst roles posted by pre-verified corporate recruiters.
            </p>
          </Card>

          <Card className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent)',
              padding: '12px',
              borderRadius: '12px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Mock Interview Prep</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Book 1-on-1 sessions with seasoned corporate mentors to simulate technical rounds and soft skills assessments.
            </p>
          </Card>
        </div>

        {/* Dynamic visual dashboard teaser */}
        <div className="placement-teaser-grid glass-panel" style={{
          padding: '32px',
          borderRadius: '24px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>Track Active Hiring Sprints</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
              Recruiters track students in real-time based on live webinar attendance, module grading, and mock test scores. This transparent pipeline allows you to receive direct interview invites.
            </p>
            <Link to="/placements">
              <Button variant="primary">Access Placement Tracker</Button>
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1.5px solid var(--glass-border)',
            padding: '20px',
            borderRadius: '16px'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '12px' }}>Hiring Status</span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '600' }}>Adobe Systems Inc.</span>
                <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>Shortlisted</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '600' }}>Microsoft India</span>
                <span style={{ background: '#eff6ff', color: '#1e40af', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>HR Round Scheduled</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '600' }}>Autodesk Engineering</span>
                <span style={{ background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>Technical Round</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .placement-teaser-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Placements;
