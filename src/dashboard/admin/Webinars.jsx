import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { MOCK_WEBINARS } from '../../utils/constants';

const Webinars = () => {
  const [webinars] = useState(MOCK_WEBINARS);

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-manrope text-white mb-2">Webinar Sessions</h1>
          <p className="text-gray-400 text-sm">Organize upcoming webinars, assign speakers, and post recordings.</p>
        </div>
        <Button variant="accent" className="text-xs" onClick={() => alert('Opening schedule webinar modal...')}>
          + Schedule Session
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webinars.map((w) => (
          <Card key={w.id} className="bg-primary/25 border-white/5 flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                  w.status === 'Upcoming' ? 'bg-red-500/10 text-red-500 border-red-500/20 animate-pulse' : 'bg-green-500/10 text-green-400 border-green-500/20'
                }`}>
                  {w.status}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">{w.duration}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{w.title}</h3>
              <p className="text-gray-500 text-xs">Speaker: {w.speaker}</p>
              <p className="text-gray-500 text-xs mt-1">Schedule: {w.date} — {w.time}</p>
            </div>
            
            <div className="flex gap-3 border-t border-white/5 pt-4 mt-6">
              <Button variant="outline" className="flex-grow py-1.5 text-xs" onClick={() => alert(`Editing ${w.title}...`)}>
                Edit Details
              </Button>
              <Button variant="danger" className="py-1.5 text-xs" onClick={() => { if(confirm('Cancel session?')) alert('Webinar cancelled!'); }}>
                Cancel
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Webinars;
