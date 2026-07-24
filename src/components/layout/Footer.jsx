import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/5 pt-16 pb-8 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-2xl font-manrope font-extrabold tracking-wider text-gradient-accent">
            EDVANTA
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Upskilling engineering candidates and technology students. Build your career with live mentorship, verified internships, and corporate placements.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-accent hover:shadow-glow transition-all">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-accent hover:shadow-glow transition-all">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-accent hover:shadow-glow transition-all">
              <FaGithub size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-accent hover:shadow-glow transition-all">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-manrope font-bold mb-6 tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-3.5 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-accent transition-colors">Trending Courses</Link></li>
            <li><Link to="/internships" className="hover:text-accent transition-colors">Internship Programs</Link></li>
            <li><Link to="/webinars" className="hover:text-accent transition-colors">Live Webinars</Link></li>
            <li><Link to="/blogs" className="hover:text-accent transition-colors">Read Articles</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-manrope font-bold mb-6 tracking-wide">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary shrink-0" size={16} />
              <span>Bangalore Innovation Hub, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-secondary shrink-0" size={14} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-secondary shrink-0" size={14} />
              <span>support@edvanta.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-manrope font-bold mb-6 tracking-wide">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Subscribe to get latest course alerts, internship drives, and career guidance webinars.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-primary/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors w-full"
            />
            <button
              type="submit"
              className="bg-secondary text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-secondary-light hover:shadow-glow transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <span>© 2026 Edvanta Technologies Private Limited. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="https://lms.edvanta-edu.com/validate-certificate" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Verified Certification</Link>
          <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
