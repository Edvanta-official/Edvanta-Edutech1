import React, { useState } from 'react';
import { FaLaptopCode, FaCheckCircle, FaSearch } from 'react-icons/fa';
import { MOCK_INTERNSHIPS } from '../utils/constants';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const InternshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredInternships = MOCK_INTERNSHIPS.filter((i) =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Available Internship Openings" subtitle="EARN CORPORATE EXPERIENCE" />

      {/* Search bar */}
      <div className="mb-12 glass p-4 rounded-xl border border-white/5 flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search domains or tech..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-primary-dark/80 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInternships.map((internship) => (
          <Card key={internship.id} className="flex flex-col h-full bg-primary/25 border-white/5">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25">
                <FaLaptopCode size={22} />
              </div>
              <div>
                <span className="text-accent text-xs font-semibold tracking-wider uppercase block">{internship.domain}</span>
                <h3 className="text-lg font-manrope font-bold text-white">{internship.title}</h3>
              </div>
            </div>

            {/* Details */}
            <div className="flex-grow flex flex-col gap-6">
              <div className="bg-white/5 rounded-lg p-4 flex justify-between text-sm text-gray-300">
                <div>
                  <span className="text-gray-500 text-xs block mb-1">Duration</span>
                  <span className="font-semibold text-white">{internship.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs block mb-1">Stipend</span>
                  <span className="font-semibold text-white text-gradient-accent">{internship.stipend}</span>
                </div>
              </div>

              {/* Perks */}
              <div>
                <span className="text-white text-sm font-semibold block mb-3">Key Benefits & Perks</span>
                <ul className="flex flex-col gap-2.5">
                  {internship.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <FaCheckCircle className="text-accent shrink-0" size={14} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <span className="text-white text-sm font-semibold block mb-3">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-primary px-2.5 py-1 rounded text-gray-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="accent"
              className="mt-8 w-full text-sm"
              onClick={() => alert(`Applying for ${internship.title}! (Lead form submitted)`)}
            >
              Apply Online
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InternshipsPage;
