import React from 'react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { Users, GraduationCap, Building2, BookOpen } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { label: 'Active Students', value: '15,000+', icon: Users, color: '#3b82f6' },
    { label: 'Hiring Partners', value: '500+', icon: Building2, color: '#10b981' },
    { label: 'Courses & Programs', value: '120+', icon: BookOpen, color: '#f59e0b' },
    { label: 'Placement Success', value: '94%', icon: GraduationCap, color: '#8b5cf6' }
  ];

  return (
    <section style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="glass-panel" style={{
                textAlign: 'center',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    lineHeight: '1',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)'
                  }}>{stat.value}</h3>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}>{stat.label}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
