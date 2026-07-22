import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Sun, Moon, User, LogIn, LogOut, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const categoryTimerRef = React.useRef(null);

  const handleCategoryHover = (catId) => {
    if (categoryTimerRef.current) clearTimeout(categoryTimerRef.current);
    categoryTimerRef.current = setTimeout(() => {
      setActiveCategory(catId);
    }, 350);
  };

  const handleCategoryClick = (catId) => {
    if (categoryTimerRef.current) clearTimeout(categoryTimerRef.current);
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      padding: '20px 0',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 102
        }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="url(#logo-grad)" />
            <path d="M25 35L45 55L25 75" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50 35H75" stroke="white" strokeWidth="10" strokeLinecap="round" />
            <path d="M50 55H70" stroke="white" strokeWidth="10" strokeLinecap="round" />
            <path d="M50 75H75" stroke="white" strokeWidth="10" strokeLinecap="round" />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb" />
                <stop offset="0.5" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{
            fontSize: '1.6rem',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center'
          }}>
            ED<span style={{ fontWeight: '500' }}>VANTA</span>
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="desktop-menu glass-panel" style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 12px',
          borderRadius: '40px',
          gap: '4px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 101,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            About
          </NavLink>

          {/* Programs Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => {
              setDropdownOpen(false);
              setActiveCategory(null);
              if (categoryTimerRef.current) clearTimeout(categoryTimerRef.current);
            }}
          >
            <button className={`nav-item dropdown-toggle ${dropdownOpen ? 'open' : ''}`}>
              Programs <ChevronDown size={14} style={{ marginLeft: '4px', transition: 'transform var(--transition-fast)' }} />
            </button>
            
            {dropdownOpen && (
              <div className="glass-panel dropdown-menu" style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '10px',
                width: '320px',
                borderRadius: '20px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 200
              }}>
                <div 
                  className={`dropdown-item-row ${activeCategory === 'cs' ? 'active open' : ''}`}
                  onClick={() => handleCategoryClick('cs')}
                  onMouseEnter={() => handleCategoryHover('cs')}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>💻 Computer Science</span>
                  {activeCategory === 'cs' && (
                    <div className="programs-sub-flyout open" style={{
                      position: 'absolute',
                      top: 0,
                      left: '100%',
                      marginLeft: '10px',
                      width: '260px',
                      borderRadius: '16px',
                      padding: '12px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--shadow-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      <Link to="/courses" className="dropdown-link">Artificial Intelligence</Link>
                      <Link to="/courses" className="dropdown-link">Cyber Security</Link>
                      <Link to="/courses" className="dropdown-link">Data Science</Link>
                      <Link to="/courses" className="dropdown-link">Web Development</Link>
                    </div>
                  )}
                </div>

                <div 
                  className={`dropdown-item-row ${activeCategory === 'civil' ? 'active open' : ''}`}
                  onClick={() => handleCategoryClick('civil')}
                  onMouseEnter={() => handleCategoryHover('civil')}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>🏗️ Civil Engineering</span>
                  {activeCategory === 'civil' && (
                    <div className="programs-sub-flyout open" style={{
                      position: 'absolute',
                      top: 0,
                      left: '100%',
                      marginLeft: '10px',
                      width: '260px',
                      borderRadius: '16px',
                      padding: '12px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--shadow-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      <Link to="/courses" className="dropdown-link">AutoCAD 2D/3D</Link>
                      <Link to="/courses" className="dropdown-link">Revit BIM</Link>
                    </div>
                  )}
                </div>

                <div 
                  className={`dropdown-item-row ${activeCategory === 'ece' ? 'active open' : ''}`}
                  onClick={() => handleCategoryClick('ece')}
                  onMouseEnter={() => handleCategoryHover('ece')}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>⚡ Electronics & Comm.</span>
                  {activeCategory === 'ece' && (
                    <div className="programs-sub-flyout open" style={{
                      position: 'absolute',
                      top: 0,
                      left: '100%',
                      marginLeft: '10px',
                      width: '260px',
                      borderRadius: '16px',
                      padding: '12px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--shadow-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      <Link to="/courses" className="dropdown-link">VLSI Chip Design</Link>
                      <Link to="/courses" className="dropdown-link">Embedded Systems & IoT</Link>
                    </div>
                  )}
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '6px', paddingTop: '6px' }}>
                  <Link to="/courses" className="dropdown-link" style={{ fontWeight: '700', color: 'var(--accent)' }}>See All Courses →</Link>
                  <Link to="/internships" className="dropdown-link">Internships</Link>
                  <Link to="/placements" className="dropdown-link">Placement Assistance</Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/careers" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Career
            <span className="badge-new" style={{
              background: '#000000',
              color: '#ffffff',
              fontSize: '0.62rem',
              fontWeight: '800',
              padding: '2px 8px',
              borderRadius: '999px',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap'
            }}>
              WE ARE HIRING
            </span>
          </NavLink>

          <NavLink to="/blogs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Blogs
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Action Buttons (Right side) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          zIndex: 102
        }} className="navbar-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-secondary" style={{ padding: '8px 16px', borderRadius: '30px' }}>
                <User size={16} />
                <span className="hide-mobile">Dashboard</span>
              </Link>
              <button onClick={logout} className="btn btn-outline" style={{ padding: '8px 16px', borderRadius: '30px' }}>
                <LogOut size={16} />
                <span className="hide-mobile">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="btn btn-secondary navbar-btn-signup" style={{
                padding: '10px 20px',
                borderRadius: '30px',
                background: 'var(--btn-secondary-bg)',
                border: '1px solid var(--glass-border)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <User size={16} />
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-primary navbar-btn-login" style={{
                padding: '10px 22px',
                borderRadius: '30px',
                background: 'var(--badge-bg)',
                color: '#ffffff',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <LogIn size={16} />
                Login
              </Link>
            </>
          )}

          {/* Custom Theme Switch Toggle (Matching the screenshot on the right) */}
          <div className="theme-switch" onClick={toggleTheme}>
            <div className="theme-switch-slider" />
            <Sun size={14} className={theme === 'light' ? 'active' : ''} style={{ color: theme === 'light' ? '#eab308' : 'var(--text-tertiary)' }} />
            <Moon size={14} className={theme === 'dark' ? 'active' : ''} style={{ color: theme === 'dark' ? '#3b82f6' : 'var(--text-tertiary)' }} />
          </div>

          {/* Mobile Menu Icon */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} style={{
            display: 'none',
            padding: '8px',
            color: 'var(--text-primary)'
          }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="glass-panel mobile-menu-panel" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99,
          padding: '100px 24px 40px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</NavLink>
            
            {/* Mobile Programs submenu */}
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>Programs</div>
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/courses" className="mobile-nav-link-sub" onClick={toggleMobileMenu}>Courses</Link>
                <Link to="/internships" className="mobile-nav-link-sub" onClick={toggleMobileMenu}>Internships</Link>
                <Link to="/certifications" className="mobile-nav-link-sub" onClick={toggleMobileMenu}>Certifications</Link>
                <Link to="/webinars" className="mobile-nav-link-sub" onClick={toggleMobileMenu}>Live Webinars</Link>
                <Link to="/placements" className="mobile-nav-link-sub" onClick={toggleMobileMenu}>Placement Assistance</Link>
              </div>
            </div>

            <NavLink to="/careers" className="mobile-nav-link" onClick={toggleMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Career
              <span style={{
                background: 'var(--badge-bg)',
                color: 'var(--badge-text)',
                fontSize: '0.62rem',
                fontWeight: '800',
                padding: '2px 8px',
                borderRadius: '4px'
              }}>
                WE ARE HIRING
              </span>
            </NavLink>
            <NavLink to="/blogs" className="mobile-nav-link" onClick={toggleMobileMenu}>Blogs</NavLink>
            <NavLink to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</NavLink>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {user ? (
              <>
                <Link to="/dashboard" className="btn btn-primary" style={{ width: '100%' }} onClick={toggleMobileMenu}>Dashboard</Link>
                <button onClick={() => { logout(); toggleMobileMenu(); }} className="btn btn-outline" style={{ width: '100%' }}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-secondary" style={{ width: '100%' }} onClick={toggleMobileMenu}>Sign Up</Link>
                <Link to="/login" className="btn btn-primary" style={{ width: '100%', background: 'var(--badge-bg)' }} onClick={toggleMobileMenu}>Login</Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Styled JSX tags to handle specific responsive css and nav classes */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-item {
          padding: 8px 18px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }
        
        .nav-item:hover, .nav-item.active {
          color: var(--text-primary);
        }

        .nav-item.active {
          background-color: var(--btn-secondary-bg);
          box-shadow: var(--shadow-sm);
        }

        .dropdown-link {
          padding: 8px 12px;
          border-radius: 8px;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .dropdown-link:hover {
          background-color: var(--accent-light);
          color: var(--accent);
          padding-left: 16px;
        }

        .dropdown-toggle svg {
          margin-top: 2px;
        }

        .dropdown-toggle.open svg {
          transform: rotate(180deg);
        }

        .mobile-nav-link {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mobile-nav-link-sub {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .navbar-actions .navbar-btn-login,
          .navbar-actions .navbar-btn-signup {
            display: none !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}} />
    </header>
  );
};

export default Navbar;
