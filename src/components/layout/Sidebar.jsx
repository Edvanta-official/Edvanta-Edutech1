import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, BookOpen, Briefcase, Video, Award, BarChart2, DollarSign, FileText, Bell, 
  User, CheckSquare, BookOpen as BookIcon, FolderGit, LayoutDashboard, Globe
} from 'lucide-react';

const Sidebar = ({ role = 'student', activeTab, setActiveTab }) => {
  // Define menu items for student role
  const studentItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'internship', label: 'Internship Progress', icon: FolderGit },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'webinars', label: 'Webinar Recordings', icon: Video },
    { id: 'assignments', label: 'Assignments', icon: CheckSquare },
    { id: 'resume', label: 'Resume Builder', icon: FileText },
    { id: 'jobs', label: 'Job Portal', icon: Briefcase },
  ];

  // Define menu items for admin role
  const adminItems = [
    { id: 'dashboard', label: 'Analytics Dashboard', icon: BarChart2 },
    { id: 'students', label: 'Students Management', icon: Users },
    { id: 'courses', label: 'Courses Management', icon: BookOpen },
    { id: 'internships', label: 'Internship Management', icon: FolderGit },
    { id: 'webinars', label: 'Webinar Management', icon: Video },
    { id: 'certificates', label: 'Certificate Generator', icon: Award },
    { id: 'placements', label: 'Placement Tracker', icon: Briefcase },
    { id: 'leads', label: 'Leads Management', icon: Globe },
    { id: 'payments', label: 'Payment Management', icon: DollarSign },
    { id: 'blogs', label: 'Blog Management', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const items = role === 'admin' ? adminItems : studentItems;

  return (
    <aside className="glass-panel sidebar" style={{
      width: '280px',
      height: 'calc(100vh - 100px)',
      position: 'sticky',
      top: '90px',
      borderRadius: '24px',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      overflowY: 'auto'
    }}>
      <div style={{
        padding: '0 12px 16px 12px',
        borderBottom: '1px solid var(--glass-border)',
        marginBottom: '16px'
      }}>
        <span style={{
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          fontWeight: '700',
          color: 'var(--text-tertiary)'
        }}>
          {role === 'admin' ? 'Admin Panel' : 'Student Workspace'}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-light)' : 'transparent',
                transition: 'all var(--transition-fast)',
                textAlign: 'left'
              }}
            >
              <IconComponent size={18} style={{ color: isActive ? 'var(--accent)' : 'var(--text-tertiary)' }} />
              {item.label}
            </button>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .sidebar-link:hover {
          background-color: var(--accent-light);
          color: var(--accent) !important;
        }
        .sidebar-link:hover svg {
          color: var(--accent) !important;
        }
      `}} />
    </aside>
  );
};

export default Sidebar;
