import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import { MOCK_INTERNSHIPS } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

const Internship = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="Industrial Internship Programs"
        subtitle="EARN VALUABLE EXPERIENCE"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {MOCK_INTERNSHIPS.map((internship) => (
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

            {/* Program Details */}
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

              {/* Skills covered */}
              <div>
                <span className="text-white text-sm font-semibold block mb-3">Technologies Covered</span>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-primary px-2.5 py-1 rounded text-gray-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <Link to="/internships" className="mt-8 block w-full">
              <Button variant="accent" className="w-full text-sm">
                Apply Now <FaChevronRight size={10} />
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Internship;
