import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { FaAward, FaQrcode, FaCheckDouble } from 'react-icons/fa';

const Certifications = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Verify Your Achievement" subtitle="EDVANTA CERTIFICATE PORTAL" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-manrope font-bold text-white mb-6">
            Industry Recognized & Verifiable Credentials
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            Every student who successfully completes a program or internship at Edvanta receives a unique certificate. This contains an encrypted certificate ID and a QR code for direct verification by HR and recruitment teams.
          </p>
          <ul className="flex flex-col gap-4 mb-6">
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <FaCheckDouble className="text-accent" />
              <span>Co-validated by corporate training partners.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <FaCheckDouble className="text-accent" />
              <span>Verifiable ID hosted on Edvanta public portal.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300">
              <FaCheckDouble className="text-accent" />
              <span>Integrate directly with LinkedIn Profile credentials.</span>
            </li>
          </ul>
        </div>

        {/* Mock Certificate Preview */}
        <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-primary/80 to-primary-dark/95 shadow-glow-lg relative overflow-hidden">
          {/* Watermarks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <FaAward size={250} />
          </div>
          
          {/* Certificate Content */}
          <div className="border border-yellow-600/30 p-6 rounded-lg text-center flex flex-col gap-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-yellow-500">Certificate of Completion</span>
            <div>
              <h4 className="text-white font-manrope font-extrabold text-2xl mb-1">EDVANTA TECHNOLOGIES</h4>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest">Skills Transformation Academy</p>
            </div>
            
            <p className="text-gray-300 text-xs italic my-2">
              This is to certify that a student has completed all coursework and projects for the program
            </p>
            
            <h5 className="text-gradient-accent font-manrope font-bold text-lg">Full Stack Web Development (MERN)</h5>
            
            <div className="flex justify-between items-end mt-8 border-t border-white/5 pt-6 text-left">
              <div>
                <span className="text-[10px] text-gray-500 block">VERIFIABLE ID</span>
                <span className="text-xs text-gray-300 font-mono">ED-MERN-2026-984</span>
              </div>
              <div className="flex flex-col items-center">
                <FaQrcode size={38} className="text-white mb-1" />
                <span className="text-[8px] text-gray-500 font-mono">SCAN TO VERIFY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
