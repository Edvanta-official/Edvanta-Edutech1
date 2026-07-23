import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FaUserGraduate, FaHandshake, FaBullseye } from 'react-icons/fa';

const Careers = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Career Guidance & Mentorship" subtitle="ACCELERATE YOUR GROWTH" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-primary/25 border-white/5 text-center flex flex-col items-center p-8">
          <FaUserGraduate className="text-secondary mb-4" size={42} />
          <h4 className="text-white font-bold text-lg mb-3">1-on-1 Mentorship</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get personalized reviews on code quality, projects, and career milestones from veteran professionals.
          </p>
        </Card>

        <Card className="bg-primary/25 border-white/5 text-center flex flex-col items-center p-8">
          <FaHandshake className="text-secondary mb-4" size={42} />
          <h4 className="text-white font-bold text-lg mb-3">Mock Interviews</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Simulate standard HR and Technical rounds. Receive specific tips on resolving design queries and problem solving.
          </p>
        </Card>

        <Card className="bg-primary/25 border-white/5 text-center flex flex-col items-center p-8">
          <FaBullseye className="text-secondary mb-4" size={42} />
          <h4 className="text-white font-bold text-lg mb-3">Direct Referrals</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get your profile pushed directly to technical hiring managers and corporate recruiters in our partner network.
          </p>
        </Card>
      </div>

      {/* Booking Form */}
      <Card className="bg-primary/30 max-w-2xl mx-auto border-white/5 p-8">
        <h3 className="text-2xl font-manrope font-bold text-white text-center mb-2">Book a Career Mentoring Session</h3>
        <p className="text-gray-400 text-sm text-center mb-8">Select your convenient slot and speak to an industry professional.</p>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Guidance session requested! Our team will contact you shortly.'); }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">YOUR NAME</label>
              <input type="text" required className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">EMAIL ADDRESS</label>
              <input type="email" required className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 font-semibold block mb-1">INTERESTED DOMAIN</label>
            <select className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent">
              <option>Full Stack Web Dev (React/Node)</option>
              <option>Artificial Intelligence & ML</option>
              <option>Cyber Security & Cryptography</option>
              <option>Embedded Systems / IoT</option>
            </select>
          </div>
          <Button variant="accent" type="submit" className="w-full py-3 mt-4">
            Schedule Session
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Careers;
