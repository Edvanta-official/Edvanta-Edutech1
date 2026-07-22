import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowRight, Users, Trophy, BookOpen, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Background Decorative Floating Pills (Matches the screenshot) */}
      <div className="floating-pills-container">
        <div className="floating-pill pill-1" />
        <div className="floating-pill pill-2" />
        <div className="floating-pill pill-3" />
        <div className="floating-pill pill-4" />
      </div>

      {/* Hero Section */}
      <section style={{
        padding: '100px 0 80px 0',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="fade-in-up" style={{
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            letterSpacing: '0.25em',
            fontWeight: '800',
            color: 'var(--text-secondary)',
            display: 'block',
            marginBottom: '24px'
          }}>
            ABOUT EDVANTA
          </span>
          
          <h1 className="fade-in-up" style={{
            fontSize: '4.2rem',
            fontWeight: '900',
            lineHeight: '1.15',
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            marginBottom: '40px',
            fontFamily: 'var(--font-heading)'
          }}>
            Where ideas are talked about <br className="hide-mobile" />
            and <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900'
            }}>growth</span> is focused upon
          </h1>

          <p className="fade-in-up" style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            maxWidth: '720px',
            margin: '0 auto 40px auto'
          }}>
            Edvanta is a progressive educational hub built for students, academic institutions, and leading employers. We bridge the gap between classroom theory and enterprise reality.
          </p>

          <div className="fade-in-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/courses">
              <Button variant="primary">Explore Programs <ArrowRight size={16} /></Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Logos Bar (Matches the bottom row of logos in the screenshot) */}
      <section className="glass-panel" style={{
        margin: '20px auto 80px auto',
        maxWidth: '1200px',
        borderRadius: '30px',
        padding: '30px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        position: 'relative',
        zIndex: 10
      }}>
        <span style={{
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: '600',
          color: 'var(--text-tertiary)'
        }}>Trusted By Global Universities & Corporate Partners</span>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '30px',
          opacity: 0.75
        }} className="partner-logo-strip">
          {/* University of Dubai Mock Logo */}
          <div className="partner-logo">
            <svg width="150" height="40" viewBox="0 0 150 40" fill="currentColor">
              <rect x="0" y="5" width="30" height="30" rx="4" fill="var(--accent)" />
              <path d="M5 20L15 10L25 20L15 30Z" fill="white" />
              <text x="38" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="11">UNIVERSITY</text>
              <text x="38" y="34" fontFamily="var(--font-body)" fontSize="9" fontWeight="500">OF DUBAI</text>
            </svg>
          </div>

          {/* Mississippi State Mock Logo */}
          <div className="partner-logo">
            <svg width="170" height="40" viewBox="0 0 170 40" fill="currentColor">
              <text x="0" y="24" fontFamily="var(--font-heading)" fontWeight="900" fontSize="16" letterSpacing="0.05em" fill="#800000">MISSISSIPPI STATE</text>
              <text x="0" y="34" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" letterSpacing="0.1em" fill="var(--text-secondary)">U N I V E R S I T Y</text>
            </svg>
          </div>

          {/* Microsoft Logo */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 23 23" fill="none">
              <rect width="10.5" height="10.5" fill="#F25022"/>
              <rect x="12.5" width="10.5" height="10.5" fill="#7FBA00"/>
              <rect y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
              <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Microsoft</span>
          </div>

          {/* Adobe Logo */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="#FF0000">
              <path d="M19.1 4h10.9v24h-10.9zM12.9 4h-10.9v24h10.9zM16 11.2l9 16.8h-4.8l-4.2-8.5-4.2 8.5h-4.8z" />
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-secondary)', letterSpacing: '-0.02em' }}>Adobe</span>
          </div>

          {/* Autodesk Logo */}
          <div className="partner-logo">
            <svg width="150" height="40" viewBox="0 0 150 40" fill="currentColor">
              <path d="M5 10L15 28L25 10" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" fill="none" />
              <text x="35" y="26" fontFamily="var(--font-heading)" fontWeight="800" fontSize="18" letterSpacing="0.05em">AUTODESK</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Core Stats Section */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-4">
            <Card hoverable={false} className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={32} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>15,000+</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Active Students</p>
            </Card>

            <Card hoverable={false} className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Trophy size={32} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>94%</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Placement Success Rate</p>
            </Card>

            <Card hoverable={false} className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <BookOpen size={32} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>120+</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Industry-led Courses</p>
            </Card>

            <Card hoverable={false} className="glass-panel" style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Lightbulb size={32} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>500+</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Hiring Partners</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story & Vision */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.1em' }}>OUR STORY</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Building the future of learning and employment</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Edvanta started with a simple belief: education should be outcome-driven. In today's fast-paced digital economy, standard curricula fall behind. We partner directly with companies to create modules that make students day-one ready.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                We don't just offer courses; we create careers. From our live interactive webinars to dedicated placement assistance and certified internship programs, we provide a structured path for students to discover, practice, and validate their skills.
              </p>
            </div>

            {/* Beautiful visual card layout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Card className="glass-panel" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent-light)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>Our Mission</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    To deliver highly impactful, industry-aligned tech education and internships that empower learners worldwide.
                  </p>
                </div>
              </Card>

              <Card className="glass-panel" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent-light)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: 'var(--accent)',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>Our Values</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Transparency, academic integrity, continuous mentorship, and creating equal employment opportunities.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mentors */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <SectionTitle 
            subtitle="MEET OUR LEADERS" 
            title="Guided by Industry Experts"
            description="Our team consists of former engineers, academics, and recruitment specialists from top-tier institutions."
          />

          <div className="grid-3">
            <Card style={{ padding: '24px', textAlign: 'center' }} className="glass-panel">
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontWeight: '700',
                fontSize: '2rem'
              }}>
                AS
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px' }}>Amit Sharma</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>CEO & Co-founder</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Former Product Lead at Adobe, passionate about building open educational frameworks.</p>
            </Card>

            <Card style={{ padding: '24px', textAlign: 'center' }} className="glass-panel">
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontWeight: '700',
                fontSize: '2rem'
              }}>
                RK
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px' }}>Dr. Ritu Kapoor</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>Dean of Academics</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ex-professor at IIT Delhi, 15+ years restructuring corporate learning paths.</p>
            </Card>

            <Card style={{ padding: '24px', textAlign: 'center' }} className="glass-panel">
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontWeight: '700',
                fontSize: '2rem'
              }}>
                VP
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px' }}>Vikram Patel</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>Head of Placement</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ex-Recruiting Lead at Microsoft, building the bridge to 500+ global recruiters.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Styles for partner logos responsive layout */}
      <style dangerouslySetInnerHTML={{__html: `
        .partner-logo-strip .partner-logo {
          transition: transform var(--transition-fast), filter var(--transition-fast);
          filter: grayscale(100%);
          display: flex;
          align-items: center;
          color: var(--text-secondary);
        }
        .partner-logo-strip .partner-logo:hover {
          filter: grayscale(0%);
          transform: scale(1.05);
          color: var(--text-primary);
        }
      `}} />
    </div>
  );
};

export default About;
