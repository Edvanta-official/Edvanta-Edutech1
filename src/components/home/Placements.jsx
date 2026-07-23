import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { SUCCESS_STORIES } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

const Placements = () => {
  return (
    <section className="py-16 bg-primary-dark/20 border-y border-white/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Placement Success Stories"
          subtitle="REAL ACHIEVEMENTS BY REAL LEARNERS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SUCCESS_STORIES.map((story) => (
            <Card key={story.id} className="bg-primary/25 border-white/5 p-8 flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar & Placement Badge */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent"
                />
                <span className="bg-accent/15 text-accent text-xs font-bold px-2.5 py-1 rounded border border-accent/25">
                  {story.package}
                </span>
              </div>

              {/* Quote details */}
              <div className="flex-grow">
                <FaQuoteLeft className="text-secondary/20 mb-3" size={24} />
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  "{story.quote}"
                </p>
                <div>
                  <h4 className="text-white font-manrope font-bold text-base">{story.name}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {story.course} — Placed at <span className="text-secondary font-semibold">{story.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/placements">
            <Button variant="outline" className="inline-flex gap-2 mx-auto">
              View All Placements <FaArrowRight size={12} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Placements;
