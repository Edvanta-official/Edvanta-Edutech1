import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Award, ShieldCheck, Search, Download, Printer } from 'lucide-react';

const CertificationsPage = () => {
  const [certId, setCertId] = useState('');
  const [searchedCert, setSearchedCert] = useState(null);
  const [error, setError] = useState('');

  const mockCerts = {
    'ED-WEB-982': {
      id: 'ED-WEB-982',
      name: 'Alex Johnson',
      program: 'Full Stack Web Development (MERN)',
      date: 'June 18, 2026',
      grade: 'Distinction (A+)',
      type: 'Course Completion'
    },
    'ED-DATA-743': {
      id: 'ED-DATA-743',
      name: 'Priya Sharma',
      program: 'Data Science & Machine Learning Operations',
      date: 'July 04, 2026',
      grade: 'First Class (A)',
      type: 'Internship completion'
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setSearchedCert(null);

    const found = mockCerts[certId.trim().toUpperCase()];
    if (found) {
      setSearchedCert(found);
    } else {
      setError('Certificate ID not found. Try searching "ED-WEB-982" or "ED-DATA-743".');
    }
  };

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionTitle 
          subtitle="CREDENTIAL VERIFICATION" 
          title="Verifiable Digital Certifications"
          description="Edvanta certificates are backed by direct industry partnerships. Enter your credential ID below to verify authenticity."
        />

        {/* Search Credential */}
        <Card className="glass-panel" style={{ padding: '32px', marginBottom: '40px' }}>
          <form onSubmit={handleSearch} style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g. ED-WEB-982)"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  borderRadius: '30px',
                  border: '1.5px solid var(--glass-border)',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
            </div>
            <Button type="submit" variant="primary" style={{ padding: '14px 28px' }}>Verify Credential</Button>
          </form>
          {error && <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '12px', paddingLeft: '16px' }}>{error}</p>}
        </Card>

        {/* Certificate Display */}
        {searchedCert ? (
          <div className="fade-in">
            <Card className="certificate-layout glass-panel" style={{
              padding: '40px',
              border: '2px solid var(--accent)',
              boxShadow: 'var(--shadow-lg)',
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '32px'
            }}>
              
              {/* Decorative Frame */}
              <div style={{
                border: '4px double rgba(37, 99, 235, 0.2)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Award size={64} style={{ color: '#2563eb', marginBottom: '20px' }} />
                
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '2.2rem', color: '#1e3a8a', marginBottom: '8px' }}>
                  EDVANTA ACADEMY
                </h2>
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '24px' }}>
                  CERTIFICATE OF COMPLETION
                </span>

                <p style={{ fontSize: '1rem', color: '#475569', fontStyle: 'italic', marginBottom: '8px' }}>
                  This credential is proudly presented to
                </p>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', minWidth: '300px' }}>
                  {searchedCert.name}
                </h3>

                <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '600px', lineHeight: '1.6', marginBottom: '24px' }}>
                  for successfully completing all milestones and assessments in the certified program <br />
                  <strong>{searchedCert.program}</strong> <br />
                  with an overall grade of <strong>{searchedCert.grade}</strong>.
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '20px',
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '20px'
                }} className="cert-signature-strip">
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Date of Issue</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>{searchedCert.date}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Credential ID</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#2563eb' }}>{searchedCert.id}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Authorized Signature</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: '800', fontStyle: 'italic', color: '#1e3a8a' }}>Amit Sharma</span>
                  </div>
                </div>
              </div>

            </Card>

            {/* Print/Download actions */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Button variant="primary" onClick={() => window.print()}><Printer size={16} /> Print Certificate</Button>
              <Button variant="secondary"><Download size={16} /> Download PDF</Button>
            </div>
          </div>
        ) : (
          <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: '24px',
            textAlign: 'center',
            border: '1.5px dashed var(--glass-border)'
          }}>
            <ShieldCheck size={48} style={{ color: 'var(--text-tertiary)', marginBottom: '16px' }} />
            <p style={{ color: 'var(--text-secondary)' }}>
              No credential active in view. Enter a valid ID in the box above to generate and inspect.
            </p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
          }
          .certificate-layout, .certificate-layout * {
            visibility: visible;
          }
          .certificate-layout {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .cert-signature-strip {
            flex-direction: column;
            gap: 16px;
            align-items: center;
            text-align: center !important;
          }
        }
      `}} />
    </section>
  );
};

export default CertificationsPage;
