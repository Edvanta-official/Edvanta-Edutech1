import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = ''
}) => {
  const alignStyle = {
    textAlign: align,
    maxWidth: align === 'center' ? '700px' : '100%',
    margin: align === 'center' ? '0 auto 40px auto' : '0 0 32px 0'
  };

  return (
    <div style={alignStyle} className={`section-header ${className}`}>
      {subtitle && (
        <span style={{
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: 'var(--accent)',
          display: 'block',
          marginBottom: '10px'
        }}>
          {subtitle}
        </span>
      )}
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: description ? '16px' : '0',
        letterSpacing: '-0.02em',
        fontFamily: 'var(--font-heading)'
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
