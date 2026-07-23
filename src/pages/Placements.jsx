import React from 'react';
import { SUCCESS_STORIES } from '../utils/constants';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { FaQuoteLeft } from 'react-icons/fa';

const PlacementsPage = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Successful Placement Track" subtitle="PLACEMENTS PORTAL" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SUCCESS_STORIES.map((story) => (
          <Card key={story.id} className="bg-primary/25 border-white/5 p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center gap-3 shrink-0">
              <img src={story.avatar} alt={story.name} className="w-20 h-20 rounded-full object-cover border-2 border-accent" />
              <span className="bg-accent/15 text-accent text-xs font-bold px-2.5 py-1 rounded border border-accent/25">
                {story.package}
              </span>
            </div>
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
    </div>
  );
};

export default PlacementsPage;
