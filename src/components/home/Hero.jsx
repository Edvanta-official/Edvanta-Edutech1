import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '48px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Left Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{
            background: 'var(--accent-light)',
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontWeight: '700',
            padding: '8px 16px',
            borderRadius: '30px',
            alignSelf: 'flex-start',
            letterSpacing: '0.05em'
          }}>
            🎓 NEXT-GENERATION EDUCATIONAL NETWORKING
          </span>

          <h1 style={{
            fontSize: '3.8rem',
            fontWeight: '900',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading)'
          }}>
            Accelerate your career <br />
            with <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>industry immersion</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            maxWidth: '580px'
          }}>
            Join Edvanta to explore university-accredited courses, live-mentored webinars, corporate placement trackers, and certified internship tasks in a single unified dashboard.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              <CheckCircle size={16} style={{ color: '#22c55e' }} />
              <span>Free Certifications</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              <CheckCircle size={16} style={{ color: '#22c55e' }} />
              <span>500+ Hiring Networks</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              <CheckCircle size={16} style={{ color: '#22c55e' }} />
              <span>Live Internships</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
            <Link to="/register">
              <Button variant="primary">Get Started Free <ArrowRight size={18} /></Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary"><Play size={16} /> How it Works</Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Visual Mockup */}
        <div style={{ position: 'relative' }} className="hero-visual">
          <div className="glass-panel" style={{
            borderRadius: '24px',
            padding: '24px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--glass-border)',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Mock Dashboard Window */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '12px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%' }} />
                <span style={{ width: '12px', height: '12px', background: '#f59e0b', borderRadius: '50%' }} />
                <span style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>student-workspace.edvanta</span>
            </div>

            {/* Dashboard Mock Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ background: 'var(--accent-light)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px' }}>
                  <span>AI/ML Internship</span>
                  <span style={{ color: 'var(--accent)' }}>74% Complete</span>
                </div>
                <div style={{ height: '8px', background: 'var(--glass-border)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '74%', height: '100%', background: 'var(--accent)', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Certificates Generated</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '4px' }}>04</div>
                </div>
                <div style={{ border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Live Webinars Attended</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', marginTop: '4px' }}>12</div>
                </div>
              </div>

              <div style={{ border: '1.5px dashed var(--accent)', padding: '12px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '600' }}>+ Upload Placement Resume</span>
              </div>
            </div>
          </div>

          {/* Glowing Backdrops */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '180px',
            height: '180px',
            background: 'var(--accent)',
            filter: 'blur(80px)',
            opacity: 0.25,
            zIndex: 1
          }} />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid div {
            align-items: center;
            justify-content: center;
            margin: 0 auto;
          }
          .hero-grid h1 {
            font-size: 2.8rem !important;
          }
          .hero-visual {
            margin-top: 40px !important;
            width: 100%;
            max-width: 450px;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
