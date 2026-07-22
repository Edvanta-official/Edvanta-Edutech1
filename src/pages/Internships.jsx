import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Calendar, Briefcase, Trophy, ChevronRight, Laptop } from 'lucide-react';

const InternshipsPage = () => {
  const internships = [
    {
      id: 'web-dev',
      role: 'Frontend & Full-Stack Web Development',
      cohort: 'August 2026 Batch',
      duration: '8 Weeks',
      tasks: '5 Milestones',
      description: 'Build enterprise-grade SaaS user interfaces using React, state architectures, and robust API endpoints.',
      projects: ['Responsive CRM Workspace', 'Dynamic Payments Integrations']
    },
    {
      id: 'data-sci',
      role: 'Data Science & Machine Learning Operations',
      cohort: 'August 2026 Batch',
      duration: '10 Weeks',
      tasks: '6 Milestones',
      description: 'Clean data pipelines, train prediction models, and deploy automated inference APIs inside cloud wrappers.',
      projects: ['Customer Churn Predictions', 'API Model Endpoints Deployment']
    },
    {
      id: 'cloud-eng',
      role: 'Cloud Engineering & Continuous Integration',
      cohort: 'September 2026 Batch',
      duration: '8 Weeks',
      tasks: '4 Milestones',
      description: 'Deploy Kubernetes clusters, construct Docker files, configure GitHub Actions pipelines, and manage cloud clusters.',
      projects: ['Automatic CI/CD Deployments', 'Secure VPS Cluster Configurations']
    }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="INTERNSHIP OPPORTUNITIES" 
          title="Certified Industry-Level Tasks"
          description="Gain corporate experience by working on real-world backlogs under expert review. All programs are certified."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {internships.map(intern => (
            <Card key={intern.id} className="internship-page-card glass-panel" style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '32px',
              alignItems: 'center'
            }}>
              
              {/* Core Details */}
              <div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}>{intern.cohort}</span>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>{intern.role}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                  {intern.description}
                </p>

                <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} />
                    <span>Duration: {intern.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Laptop size={16} />
                    <span>Format: Remote Sprint</span>
                  </div>
                </div>

                {/* Sub-projects list */}
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>Milestone Projects:</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {intern.projects.map((proj, i) => (
                      <span key={i} style={{
                        background: 'var(--accent-light)',
                        color: 'var(--accent)',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}>{proj}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Value Proposition */}
              <div style={{
                borderLeft: '1px solid var(--glass-border)',
                paddingLeft: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }} className="internship-page-card-right">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Trophy size={20} style={{ color: '#fbbf24' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>ISO 9001:2015 Certified Badge</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Briefcase size={20} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Sync with Placement Tracker</span>
                </div>
                
                <div style={{ marginTop: '10px' }}>
                  <Button variant="primary" style={{ width: '100%' }}>Apply for Cohort <ChevronRight size={16} /></Button>
                </div>
              </div>

            </Card>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .internship-page-card {
            grid-template-columns: 1fr !important;
          }
          .internship-page-card-right {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--glass-border);
            padding-top: 24px;
          }
        }
      `}} />
    </section>
  );
};

export default InternshipsPage;
