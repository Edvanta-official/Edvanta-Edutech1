import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Mail, Lock, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [localLoading, setLocalLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalLoading(true);
    try {
      await login(email, password, role);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    } finally {
      setLocalLoading(false);
    }
  };

  const handleQuickLogin = async (selectedRole) => {
    setLocalLoading(true);
    const mockEmail = selectedRole === 'admin' ? 'admin@edvanta.com' : 'student@edvanta.com';
    try {
      await login(mockEmail, 'password123', selectedRole);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <section style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="container" style={{ maxWidth: '450px' }}>
        <Card className="glass-panel" style={{ padding: '32px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px' }}>Welcome Back</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Access your Edvanta workspace dashboard</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Mail size={16} style={{ position: 'absolute', left: '12px', color: 'var(--text-tertiary)' }} />
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 36px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Password</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock size={16} style={{ position: 'absolute', left: '12px', color: 'var(--text-tertiary)' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 36px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            {/* Role dropdown for custom logins */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Login Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1.5px solid var(--glass-border)',
                  background: 'var(--bg-app)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              >
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
                <option value="recruiter">Recruiter</option>
                <option value="admin">System Admin</option>
              </select>
            </div>

            <Button type="submit" variant="primary" style={{ width: '100%', padding: '10px 0' }} disabled={localLoading}>
              {localLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>

          {/* Quick Demo Logins */}
          <div style={{
            marginTop: '24px',
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '20px'
          }}>
            <span style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'var(--text-tertiary)',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>Quick Demo Logins</span>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button 
                type="button" 
                onClick={() => handleQuickLogin('student')}
                style={{
                  padding: '8px',
                  background: 'var(--btn-secondary-bg)',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                Demo Student
              </button>
              <button 
                type="button" 
                onClick={() => handleQuickLogin('admin')}
                style={{
                  padding: '8px',
                  background: 'var(--btn-secondary-bg)',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                Demo Admin
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Don't have an account? </span>
            <Link to="/register" style={{ color: 'var(--accent)', fontWeight: '600' }}>Register</Link>
          </div>

        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
