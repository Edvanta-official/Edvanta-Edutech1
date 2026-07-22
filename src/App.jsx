import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative'
          }}>
            {/* Top Navigation */}
            <Navbar />
            
            {/* Main Page Area */}
            <main style={{ flex: '1 0 auto' }}>
              <AppRoutes />
            </main>

            {/* Bottom Footer */}
            <Footer />

            {/* Floating WhatsApp Widget (Matches the bottom-right green badge in the screenshot) */}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-widget"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.293 1.503 4.91 1.505 5.599.002 10.15-4.547 10.153-10.147.002-2.712-1.05-5.263-2.962-7.178C16.837 1.417 14.29 1.365 12 1.365c-5.6 0-10.15 4.548-10.153 10.148-.001 1.743.486 3.447 1.411 4.95L2.24 21.8l5.59-1.464c-.001-.001.002-.001.007-.002zm12.384-5.46c-.27-.135-1.597-.788-1.845-.878-.247-.09-.427-.135-.607.135-.18.27-.697.878-.854 1.058-.157.18-.315.203-.585.068-.27-.135-1.138-.42-2.167-1.34-1.03-.92-1.724-2.053-1.785-2.155-.06-.102-.007-.157.042-.207.045-.045.102-.12.152-.18.05-.06.067-.102.102-.17.033-.068.017-.128-.008-.18-.025-.052-.18-.427-.247-.59-.068-.163-.15-.14-.203-.14-.053-.002-.112-.002-.172-.002-.06 0-.157.022-.24.112-.082.09-.315.307-.315.75 0 .442.323.87.368.93.045.06.634.968 1.537 1.358.215.093.382.15.513.192.215.068.41.058.565.035.172-.025.534-.218.61-.428.075-.21.075-.39.052-.428-.022-.037-.082-.06-.352-.195z"/>
              </svg>
            </a>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
