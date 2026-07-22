import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Award, Briefcase, FileCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const PlacementsPage = () => {
  const hiringPartners = [
    { name: 'Microsoft India', location: 'Hyderabad', openRoles: '14 Roles' },
    { name: 'Adobe Systems', location: 'Noida / Bangalore', openRoles: '8 Roles' },
    { name: 'Autodesk Engineering', location: 'Pune', openRoles: '5 Roles' },
    { name: 'Cognizant Technology', location: 'Chennai', openRoles: '32 Roles' }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="CAREER TRANSITIONS" 
          title="Placement Assistance & Tracking"
          description="We work with leading enterprises to streamline your hiring. Track your shortlists and interviews directly from your dashboard."
        />

        {/* Highlight Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '48px'
        }} className="placement-stats-grid">
          <Card className="glass-panel" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent)' }}>₹6.8 LPA</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Average Graduate Package</p>
          </Card>
          <Card className="glass-panel" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent)' }}>₹24 LPA</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Highest Placement Package</p>
          </Card>
          <Card className="glass-panel" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent)' }}>500+</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Hiring Corporate Networks</p>
          </Card>
        </div>

        {/* Core Offering Description */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px' }}>Direct Recruiter Portals</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Unlike static boards, Edvanta connects your certifications, graded task files, and project outputs directly to recruiting HRs. Partners browse student profiles verified by actual codebase milestones.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>Direct Profile Sync to HR Hubs</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>ATS-Friendly Portfolio Exporter</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>1-on-1 Interview Simulations</span>
              </div>
            </div>
            <Button variant="primary">Launch Resume Builder <ChevronRight size={16} /></Button>
          </div>

          {/* Hiring partners listing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Active Enterprise Sprints:</h3>
            {hiringPartners.map((partner, idx) => (
              <Card key={idx} className="glass-panel" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 24px'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700' }}>{partner.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{partner.location}</span>
                </div>
                <span style={{
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  padding: '4px 12px',
                  borderRadius: '12px'
                }}>{partner.openRoles}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .placement-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default PlacementsPage;
