import React from 'react';

const Partners = () => {
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <span style={{
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: '600',
          color: 'var(--text-tertiary)'
        }}>Global Education and Corporate Affiliations</span>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '32px',
          opacity: 0.95
        }} className="partner-logo-strip">
          
          {/* Google */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Google</span>
          </div>

          {/* Microsoft */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="22" height="22" viewBox="0 0 23 23" fill="none">
              <rect width="10.5" height="10.5" fill="#F25022"/>
              <rect x="12.5" width="10.5" height="10.5" fill="#7FBA00"/>
              <rect y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
              <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Microsoft</span>
          </div>

          {/* Genpact */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="45" fill="#00A896"/><path d="M30 50 C30 35, 70 35, 70 50 C70 65, 30 65, 30 50 Z" stroke="white" strokeWidth="8" fill="none"/></svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>GENPACT</span>
          </div>

          {/* Accenture */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 18L18 6L14 6L4 14.5Z" fill="#A100FF"/><path d="M4 18L20 18L16.5 14.5L4 14.5Z" fill="#A100FF"/></svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.2rem', color: 'var(--text-primary)', textTransform: 'lowercase' }}>accenture</span>
          </div>

          {/* Infosys */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="16" fill="#007CC3"/><text x="50" y="68" fontFamily="sans-serif" fontWeight="900" fontSize="52" fill="white" textAnchor="middle">i</text></svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.2rem', color: '#007CC3' }}>Infosys</span>
          </div>

          {/* TATA */}
          <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="45" fill="#0F4C81"/><path d="M20 30 H80 V42 H56 V78 H44 V42 H20 Z" fill="white"/></svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.2rem', color: 'var(--text-primary)', letterSpacing: '0.08em' }}>TATA</span>
          </div>

        </div>
      </div>
      
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
    </section>
  );
};

export default Partners;
