import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell, Mail, ChevronDown } from 'lucide-react';

const Topbar = ({ title = 'Dashboard' }) => {
  const { user } = useAuth();

  return (
    <div className="glass-panel topbar" style={{
      width: '100%',
      padding: '16px 32px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Title / Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{title}</h2>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} className="hide-mobile">
          <Search size={18} style={{
            position: 'absolute',
            left: '12px',
            color: 'var(--text-tertiary)'
          }} />
          <input 
            type="text" 
            placeholder="Search details..." 
            style={{
              padding: '10px 16px 10px 40px',
              borderRadius: '30px',
              border: '1.5px solid var(--glass-border)',
              background: 'rgba(255,255,255,0.2)',
              color: 'var(--text-primary)',
              width: '280px',
              outline: 'none',
              fontSize: '0.9rem',
              transition: 'border var(--transition-fast)'
            }}
            className="topbar-search-input"
          />
        </div>
      </div>

      {/* User Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button className="topbar-icon-btn"><Mail size={18} /></button>
        <button className="topbar-icon-btn" style={{ position: 'relative' }}>
          <Bell size={18} />
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '8px',
            height: '8px',
            background: 'red',
            borderRadius: '50%'
          }} />
        </button>

        {/* User Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderLeft: '1px solid var(--glass-border)',
          paddingLeft: '20px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: 'var(--badge-text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '1rem'
          }}>
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }} className="hide-mobile">
            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{user?.name || 'Guest User'}</span>
            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--accent)', 
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>{user?.role || 'Guest'}</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .topbar-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .topbar-icon-btn:hover {
          background: var(--btn-secondary-hover);
          color: var(--text-primary);
        }
        .topbar-search-input:focus {
          border-color: var(--accent);
        }
        @media (max-width: 768px) {
          .topbar {
            padding: 12px 16px;
          }
        }
      `}} />
    </div>
  );
};

export default Topbar;
