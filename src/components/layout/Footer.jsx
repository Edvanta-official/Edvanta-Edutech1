import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Youtube, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-panel" style={{
      marginTop: '80px',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: '40px 40px 0 0',
      padding: '64px 0 32px 0',
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.02)'
    }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '48px' }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="url(#footer-logo-grad)" />
                <path d="M25 35L45 55L25 75" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 35H75" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <path d="M50 55H70" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <path d="M50 75H75" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)'
              }}>
                ED<span style={{ fontWeight: '500' }}>VANTA</span>
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Empowering students, mentors, and recruiters through an integrated learning and placement network. Where ideas are discussed and growth is focused upon.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.linkedin.com/company/edvanta-edutech/" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/edvanta_official" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/blogs" className="footer-link">Blogs</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Programs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Programs</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <Link to="/courses" className="footer-link">Online Courses</Link>
              <Link to="/internships" className="footer-link">Internship Program</Link>
              <Link to="/certifications" className="footer-link">Certifications</Link>
              <Link to="/webinars" className="footer-link">Live Webinars</Link>
              <Link to="/placements" className="footer-link">Placement Assistance</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span>Sector 62, Noida, Uttar Pradesh, India - 201301</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--accent)' }} />
                <span>support@edvanta.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-tertiary)'
        }} className="footer-bottom">
          <p>© {new Date().getFullYear()} Edvanta. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Sitemap</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-link {
          transition: all var(--transition-fast);
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--btn-secondary-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: var(--accent);
          color: var(--badge-text);
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
