import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { FaPlayCircle, FaCalendarAlt } from 'react-icons/fa';

const WebinarRecordings = () => {
  const webinars = [
    { title: 'How to Crack Software Engineer Roles at FAANG', speaker: 'Neha Gupta', date: '2026-07-15' }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Webinar Recordings</h1>
        <p className="text-gray-400 text-sm">Watch past expert webinars and tutorials directly on-demand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webinars.map((w, idx) => (
          <Card key={idx} className="bg-primary/25 border-white/5 flex flex-col justify-between h-full p-6">
            <div>
              <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-0.5 border border-green-500/20 rounded uppercase tracking-wider self-start block w-fit mb-4">
                Completed
              </span>
              <h3 className="text-base font-bold text-white mb-2">{w.title}</h3>
              <p className="text-gray-500 text-xs mb-1">Speaker: {w.speaker}</p>
              <p className="text-gray-500 text-xs flex items-center gap-1.5 mb-6">
                <FaCalendarAlt /> Date: {w.date}
              </p>
            </div>
            
            <Button
              variant="accent"
              className="w-full flex items-center justify-center gap-2 text-xs"
              onClick={() => alert('Playing video playback...')}
            >
              <FaPlayCircle size={12} /> Play Recording
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WebinarRecordings;
