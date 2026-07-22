import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How does Edvanta place students in corporate networks?',
      a: 'We sync student data (assessments, webinars attended, internship tasks completed) directly with pre-screened recruiters in our dashboard. Recruiters search candidates by verified work output rather than simple text resumes, streamlining interview shortlists.'
    },
    {
      q: 'Are the internship programs certified?',
      a: 'Yes, all our internship modules are ISO-certified and run in collaboration with actual industry partners. You will receive a verifiable work experience certificate, a unique digital completion badge, and a letter of recommendation based on performance.'
    },
    {
      q: 'Can I access the platform for free?',
      a: 'Yes, creating a profile, browsing courses, and attending introductory live webinars is completely free. Dedicated structured cohorts, certified internships, and placement assistance have nominal tuition fees.'
    },
    {
      q: 'What is the format of live webinars?',
      a: 'Webinars are live, interactive panels led by senior engineering heads and product experts from companies like Microsoft, Adobe, and Autodesk. They focus on structural code reviews, architecture designs, and recruitment insights.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionTitle 
          subtitle="COMMON INQUIRIES" 
          title="Frequently Asked Questions"
          description="Have questions about modules, dashboard trackers, or certification procedures? Browse our standard guides."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card 
                key={idx} 
                className="glass-panel" 
                hoverable={false}
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  border: isOpen ? '1.5px solid var(--accent)' : '1px solid var(--glass-border)',
                  transition: 'all var(--transition-fast)'
                }}
                onClick={() => handleToggle(idx)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)'
                  }}>{faq.q}</h4>
                  
                  <div style={{
                    color: isOpen ? 'var(--accent)' : 'var(--text-tertiary)',
                    flexShrink: 0
                  }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {isOpen && (
                  <p style={{
                    marginTop: '16px',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    animation: 'fadeIn 0.3s ease-out'
                  }}>
                    {faq.a}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
