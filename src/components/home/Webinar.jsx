import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { Video, Calendar, User, ArrowRight } from 'lucide-react';

const Webinar = () => {
  const webinars = [
    {
      title: 'Decentralized Apps & Web3.0 Architecture',
      host: 'Vikash Kumar (Senior Engineer, Adobe)',
      date: 'July 24, 2026 at 6:00 PM',
      duration: '90 Mins',
      status: 'upcoming'
    },
    {
      title: 'Navigating AI Engineering in Enterprise Cloud',
      host: 'Srinivas Murthy (Principal Architect, Microsoft)',
      date: 'July 28, 2026 at 5:30 PM',
      duration: '120 Mins',
      status: 'upcoming'
    }
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="LIVE WEBINARS" 
          title="Interactive Guidance Sessions"
          description="Attend direct mentorship panels, project architectural reviews, and resume bootcamps."
        />

        <div className="grid-2" style={{ marginBottom: '32px' }}>
          {webinars.map((web, idx) => (
            <Card key={idx} className="glass-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#ef4444',
                    animation: 'pulse 1.5s infinite'
                  }} />
                  Live Webinar
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px' }}>{web.title}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <User size={16} />
                    <span>Host: {web.host}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Calendar size={16} />
                    <span>Time: {web.date} ({web.duration})</span>
                  </div>
                </div>
              </div>

              <div style={{
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Platform: Teams Live</span>
                <Link to="/webinars">
                  <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Register Free</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/webinars">
            <Button variant="secondary">View Webinar Recordings <ArrowRight size={16} /></Button>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}} />
    </section>
  );
};

export default Webinar;
