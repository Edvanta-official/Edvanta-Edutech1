import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Video, Calendar, User, Clock, Search, Play } from 'lucide-react';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      title: 'Decentralized Apps & Web3.0 Architecture',
      host: 'Vikash Kumar (Senior Engineer, Adobe)',
      date: 'July 24, 2026 at 6:00 PM',
      duration: '90 Mins',
      platform: 'Teams Live'
    },
    {
      title: 'Navigating AI Engineering in Enterprise Cloud',
      host: 'Srinivas Murthy (Principal Architect, Microsoft)',
      date: 'July 28, 2026 at 5:30 PM',
      duration: '120 Mins',
      platform: 'Teams Live'
    }
  ];

  const recordedWebinars = [
    {
      title: 'Scale & Performance Tuning in NodeJS Services',
      host: 'Anjali Sharma (Principal Engineer, Amazon)',
      duration: '1 hr 45 min',
      views: '4.2k views',
      tag: 'Backend'
    },
    {
      title: 'Mastering Figma to Production UI Workflow',
      host: 'Mark Peterson (UX Lead, Autodesk)',
      duration: '1 hr 12 min',
      views: '2.8k views',
      tag: 'UI/UX Design'
    },
    {
      title: 'Kubernetes Cluster Provisioning on AWS',
      host: 'Sameer Sen (DevOps Architect, Google)',
      duration: '2 hr 10 min',
      views: '3.9k views',
      tag: 'DevOps'
    }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="MENTOR PANEL" 
          title="Live Webinars & Recorded Vault"
          description="Attend upcoming live panels or browse our extensive archive of past engineering reviews."
        />

        {/* Live Section */}
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '24px' }}>Upcoming Interactive Live Panels</h3>
        <div className="grid-2" style={{ marginBottom: '60px' }}>
          {upcomingWebinars.map((web, idx) => (
            <Card key={idx} className="glass-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>LIVE IN 7 DAYS</span>
                
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px' }}>{web.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <User size={16} />
                    <span>Host: {web.host}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Calendar size={16} />
                    <span>Date: {web.date}</span>
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
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{web.platform}</span>
                <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Register Free</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Recorded Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Past Webinar Vault</h3>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              placeholder="Search recordings..."
              style={{
                padding: '8px 16px 8px 36px',
                borderRadius: '30px',
                border: '1.5px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
          </div>
        </div>

        <div className="grid-3">
          {recordedWebinars.map((rec, idx) => (
            <Card key={idx} className="glass-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                {/* Simulated Thumbnail */}
                <div style={{
                  height: '150px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  position: 'relative'
                }} className="webinar-thumb">
                  <Play size={40} style={{ opacity: 0.8 }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'var(--badge-bg)',
                    color: 'var(--badge-text)',
                    fontSize: '0.75rem',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>{rec.duration}</span>
                </div>

                <span style={{
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>{rec.tag}</span>

                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px', lineHeight: '1.4' }}>{rec.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>{rec.host}</p>
              </div>

              <div style={{
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-tertiary)'
              }}>
                <span>{rec.views}</span>
                <span style={{ color: 'var(--accent)', fontWeight: '600', cursor: 'pointer' }}>Watch Now</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .webinar-thumb:hover svg {
          transform: scale(1.1);
          color: var(--accent);
          transition: all var(--transition-fast);
        }
      `}} />
    </section>
  );
};

export default WebinarsPage;
