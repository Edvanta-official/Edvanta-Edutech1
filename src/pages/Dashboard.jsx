import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Users, BookOpen, Briefcase, Video, Award, BarChart2, DollarSign, FileText, Bell, 
  User, CheckSquare, Plus, Mail, CheckCircle2, ChevronRight, Send, Trash, Edit 
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // --- STUDENT MODULE RENDERS ---
  const renderStudentContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="dash-stats">
              <Card className="glass-panel">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Enrolled Programs</span>
                <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>02</h3>
              </Card>
              <Card className="glass-panel">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Completed Tasks</span>
                <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>14</h3>
              </Card>
              <Card className="glass-panel">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Webinar Attendance</span>
                <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>88%</h3>
              </Card>
            </div>
            
            <Card className="glass-panel">
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Current Progress Track</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                <span>MERN Fullstack Internship</span>
                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Task 3/5 in review</span>
              </div>
              <div style={{ height: '8px', background: 'var(--btn-secondary-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '60%', height: '100%', background: 'var(--accent)' }} />
              </div>
            </Card>
          </div>
        );
      case 'profile':
        return (
          <Card className="glass-panel" style={{ maxWidth: '600px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px' }}>Student Profile Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Full Name</span>
                <p style={{ fontWeight: '600' }}>{user.name}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Email Address</span>
                <p style={{ fontWeight: '600' }}>{user.email}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Registration Role</span>
                <p style={{ fontWeight: '600', textTransform: 'capitalize' }}>{user.role}</p>
              </div>
            </div>
          </Card>
        );
      case 'courses':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '700' }}>Full Stack Web Development (MERN)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>24 Weeks course • Graded</p>
              </div>
              <Button variant="outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Resume Lecture</Button>
            </Card>
          </div>
        );
      case 'internship':
        return (
          <Card className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Internship Task Dashboard</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px' }}>Approved</span>
                <h4 style={{ fontWeight: '700', marginTop: '6px' }}>Milestone 1: CSS Grid & Flexbox Portfolio</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Score: 98/100 • Code reviewed by Dean</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', background: '#eff6ff', color: '#1e40af', padding: '2px 8px', borderRadius: '4px' }}>Under Review</span>
                <h4 style={{ fontWeight: '700', marginTop: '6px' }}>Milestone 2: Dynamic Express Routing Backend</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Submitted 2 days ago</p>
              </div>
            </div>
          </Card>
        );
      case 'certificates':
        return (
          <Card className="glass-panel" style={{ textAlign: 'center', padding: '40px' }}>
            <Award size={48} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>Your Credentials</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>Complete your active Web Dev course milestones to generate certificate.</p>
            <Button variant="outline" style={{ margin: '0 auto' }}>Generate Mock Certificate</Button>
          </Card>
        );
      case 'resume':
        return (
          <Card className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Interactive Resume Builder</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>Sync your course certifications and internship projects directly with your PDF exporter.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="primary">Export CV (PDF)</Button>
              <Button variant="secondary">Sync LinkedIn</Button>
            </div>
          </Card>
        );
      case 'jobs':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '700' }}>Junior Frontend Engineer</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Adobe Systems • Delhi NCR</p>
              </div>
              <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Apply</Button>
            </Card>
            <Card className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '700' }}>Software Engineer Intern</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Microsoft India • Hyderabad</p>
              </div>
              <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Apply</Button>
            </Card>
          </div>
        );
      default:
        return <div>Module Under Construction</div>;
    }
  };

  // --- ADMIN PANEL MODULE RENDERS ---
  const renderAdminContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="dash-stats">
              <Card className="glass-panel">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total Students</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>15,240</h3>
              </Card>
              <Card className="glass-panel">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Active Leads</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>384</h3>
              </Card>
              <Card className="glass-panel">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Revenue (MTD)</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>₹8.4L</h3>
              </Card>
              <Card className="glass-panel">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Certificates Issued</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>1,840</h3>
              </Card>
            </div>

            {/* Leads Teaser */}
            <Card className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Recent Admissions Leads</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', cursor: 'pointer' }} onClick={() => setActiveTab('leads')}>View All Leads</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                  <span>Siddharth Roy (Noida)</span>
                  <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Follow Up</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Amit Verma (Bangalore)</span>
                  <span style={{ color: 'green', fontWeight: '600' }}>Interested</span>
                </div>
              </div>
            </Card>
          </div>
        );
      case 'students':
        return (
          <Card className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Students Directory</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--glass-border)', textAlign: 'left', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px' }}>Name</th>
                  <th style={{ padding: '12px' }}>Email</th>
                  <th style={{ padding: '12px' }}>Registered Track</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '12px' }}>Alex Johnson</td>
                  <td style={{ padding: '12px' }}>alex@edvanta.com</td>
                  <td style={{ padding: '12px' }}>Web Dev (MERN)</td>
                  <td style={{ padding: '12px', color: 'green', fontWeight: '600' }}>Active</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>Priya Sharma</td>
                  <td style={{ padding: '12px' }}>priya@edvanta.com</td>
                  <td style={{ padding: '12px' }}>Data Science & ML</td>
                  <td style={{ padding: '12px', color: 'green', fontWeight: '600' }}>Active</td>
                </tr>
              </tbody>
            </table>
          </Card>
        );
      case 'courses':
        return (
          <Card className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Manage Programs</h3>
              <Button variant="primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} icon={Plus}>Add Program</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                <div>
                  <h4 style={{ fontWeight: '700' }}>Full Stack Web Development (MERN)</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Category: Engineering • Tuition: ₹14,999</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ color: 'var(--accent)' }}><Edit size={16} /></button>
                  <button style={{ color: 'red' }}><Trash size={16} /></button>
                </div>
              </div>
            </div>
          </Card>
        );
      case 'leads':
        return (
          <Card className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Admissions Leads Tracker</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--glass-border)', textAlign: 'left', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '12px' }}>Lead Name</th>
                  <th style={{ padding: '12px' }}>Inquiry Source</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '12px' }}>Vikram Patel</td>
                  <td style={{ padding: '12px' }}>Webinar Landing</td>
                  <td style={{ padding: '12px', color: 'orange', fontWeight: '600' }}>Contacted</td>
                  <td style={{ padding: '12px' }}>July 16, 2026</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>Soniya Roy</td>
                  <td style={{ padding: '12px' }}>Direct Course Page</td>
                  <td style={{ padding: '12px', color: 'green', fontWeight: '600' }}>Interested</td>
                  <td style={{ padding: '12px' }}>July 15, 2026</td>
                </tr>
              </tbody>
            </table>
          </Card>
        );
      case 'payments':
        return (
          <Card className="glass-panel">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Payment Invoices</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ fontWeight: '700' }}>INV-2026-082</span>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', display: 'block' }}>Alex Johnson • MERN Web Dev</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: '700' }}>₹14,999</span>
                  <span style={{ color: 'green', fontSize: '0.75rem', display: 'block', fontWeight: '600' }}>Paid</span>
                </div>
              </div>
            </div>
          </Card>
        );
      default:
        return <div>Module Under Construction</div>;
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0', minHeight: '80vh' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '32px',
        alignItems: 'flex-start'
      }} className="dashboard-grid">
        
        {/* Sidebar Panel */}
        <Sidebar 
          role={user.role} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Workspace Panel */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <Topbar title={`${user.role.toUpperCase()} Workspace - ${activeTab.toUpperCase()}`} />
          
          <div className="dashboard-tab-content">
            {user.role === 'admin' ? renderAdminContent() : renderStudentContent()}
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
          .dashboard-grid aside {
            width: 100% !important;
            height: auto !important;
            position: relative !important;
            top: 0 !important;
            margin-bottom: 24px;
          }
          .dash-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
};

export default Dashboard;
