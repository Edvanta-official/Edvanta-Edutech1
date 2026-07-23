import React from 'react';
import { FaCalendarAlt, FaClock, FaUserTie, FaPlayCircle } from 'react-icons/fa';
import { MOCK_WEBINARS } from '../utils/constants';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Webinars = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Live Coding Webinars" subtitle="LEARN DIRECTLY FROM THE EXPERTS" />

      {/* Webinars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {MOCK_WEBINARS.map((webinar) => {
          const isUpcoming = webinar.status === 'Upcoming';
          return (
            <Card key={webinar.id} className="flex flex-col justify-between h-full bg-primary/25 border-white/5 p-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded border uppercase tracking-wider ${
                    isUpcoming 
                      ? 'bg-red-500/10 text-red-500 border-red-500/25 animate-pulse'
                      : 'bg-green-500/10 text-green-500 border-green-500/25'
                  }`}>
                    {webinar.status}
                  </span>
                  <span className="text-gray-500 text-xs font-semibold">{webinar.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-manrope font-extrabold text-white mb-4">
                  {webinar.title}
                </h3>

                <div className="flex flex-col gap-3 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <FaUserTie className="text-accent" />
                    <span>{webinar.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-accent" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
              </div>

              {isUpcoming ? (
                <Button variant="accent" className="w-full" onClick={() => alert('Successfully registered for live session!')}>
                  Register Free Seat
                </Button>
              ) : (
                <Button variant="primary" className="w-full flex items-center justify-center gap-2" onClick={() => alert('Playing webinar recording...')}>
                  <FaPlayCircle size={16} /> Watch Recording
                </Button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Webinars;
