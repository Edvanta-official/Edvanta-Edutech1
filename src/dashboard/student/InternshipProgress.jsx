import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';

const InternshipProgress = () => {
  const milestones = [
    { title: 'Milestone 1: Project Setup & Proposal', date: 'Done', status: 'Completed' },
    { title: 'Milestone 2: Database Schema & Auth Setup', date: 'July 20, 2026', status: 'Pending' },
    { title: 'Milestone 3: UI Implementation & Testing', date: 'Aug 05, 2026', status: 'Pending' }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">My Internship Progress</h1>
        <p className="text-gray-400 text-sm">Submit assignments, check milestones, and track progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Progress Timeline */}
        <Card className="bg-primary/25 border-white/5 md:col-span-2 flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white mb-2">Milestones Timeline</h3>
          
          <div className="flex flex-col gap-6 relative border-l border-white/10 pl-6 ml-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 ${
                  m.status === 'Completed' ? 'bg-green-500 border-green-500' : 'bg-primary-dark border-gray-600'
                }`}></div>
                
                <h4 className="text-white font-semibold text-sm">{m.title}</h4>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <FaRegCalendarAlt /> Deadline/Date: {m.date} — Status: <span className={m.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}>{m.status}</span>
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Task submission */}
        <Card className="bg-primary/25 border-white/5 flex flex-col gap-4">
          <FaTasks className="text-accent" size={32} />
          <h3 className="text-lg font-bold text-white">Task Submission</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Attach your project repository link or document submission here for reviewer analysis.
          </p>
          <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => { e.preventDefault(); alert('Assignment link submitted!'); }}>
            <input
              type="url"
              required
              placeholder="https://github.com/your-username/repo"
              className="bg-primary-dark/85 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none"
            />
            <Button variant="accent" type="submit" className="text-xs py-2">
              Submit Link
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default InternshipProgress;
