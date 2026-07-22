import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="GET IN TOUCH" 
          title="We'd Love to Hear From You"
          description="Have questions about admissions, webinar slots, or recruiter integrations? Reach out directly."
        />

        <div className="grid-2" style={{ alignItems: 'flex-start', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact details card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Contact Details</h3>
            
            <Card className="glass-panel" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                padding: '12px',
                borderRadius: '12px'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Office Address</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sector 62, Noida, Uttar Pradesh, India - 201301</p>
              </div>
            </Card>

            <Card className="glass-panel" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                padding: '12px',
                borderRadius: '12px'
              }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Call Us</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>+91 98765 43210 (Mon - Sat, 9am - 6pm)</p>
              </div>
            </Card>

            <Card className="glass-panel" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                padding: '12px',
                borderRadius: '12px'
              }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Email Inquiries</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>support@edvanta.com</p>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '24px' }}>Send a Message</h3>
            
            {submitted ? (
              <div style={{
                background: '#dcfce7',
                color: '#166534',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                Thank you! Your message has been received. Our team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--glass-border)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--glass-border)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--glass-border)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--glass-border)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px 0' }} icon={Send}>
                  Submit Inquiry
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
