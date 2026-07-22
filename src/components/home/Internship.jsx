import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { Calendar, CheckCircle2, Clipboard, ShieldCheck } from 'lucide-react';

const Internship = () => {
  const features = [
    { title: 'Project-Based Internships', desc: 'Solve actual enterprise backlogs and feature requests mentored by senior developers.' },
    { title: 'Verified Work Certificates', desc: 'Receive verifiable digital badges and letters of recommendation for your portfolio.' },
    { title: 'Resume Integration', desc: 'Sync your internship completions directly with your Edvanta Resume Builder profile.' }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.15)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Visual card of Internship pipeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Card className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                background: 'var(--accent)'
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent)' }}>Active Cohort</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Status: Active</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>Web Development Internship</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Collaborative team workspace developing a clean microservices architecture dashboard.</p>
              
              <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} />
                  <span>Duration: 8 Weeks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clipboard size={14} />
                  <span>Tasks: 5 Milestones</span>
                </div>
              </div>
            </Card>

            <Card className="glass-panel" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <ShieldCheck size={28} style={{ color: '#22c55e', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>ISO & Corporate Certified</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Valid globally for academic credits and hiring background checks.</p>
              </div>
            </Card>
          </div>

          {/* Details & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionTitle 
              subtitle="PRACTICAL EXPERIENCE" 
              title="Apply Skills on Real Corporate Pipelines"
              description="Our internship portal simulates modern engineering sprints. Complete tasks, review code with mentors, and earn certified experience badges."
              align="left"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>{feat.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '12px' }}>
              <Link to="/internships">
                <Button variant="primary">Explore Internships</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
