import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { MOCK_INTERNSHIPS } from '../../utils/constants';

const Internships = () => {
  const [internships] = useState(MOCK_INTERNSHIPS);

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-manrope text-white mb-2">Manage Internships</h1>
          <p className="text-gray-400 text-sm">Add or edit domain-specific training internship paths.</p>
        </div>
        <Button variant="accent" className="text-xs" onClick={() => alert('Opening create internship modal...')}>
          + Create Internship
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map((i) => (
          <Card key={i.id} className="bg-primary/25 border-white/5 flex flex-col justify-between p-6">
            <div>
              <h3 className="text-base font-bold text-white mb-1">{i.title}</h3>
              <span className="text-[10px] text-accent uppercase font-bold tracking-wider block mb-4">{i.domain}</span>
              <p className="text-gray-400 text-xs sm:text-sm mb-6">Duration: {i.duration} — Stipend: {i.stipend}</p>
            </div>
            
            <div className="flex gap-3 border-t border-white/5 pt-4">
              <Button variant="outline" className="flex-1 py-1.5 text-xs" onClick={() => alert(`Editing ${i.title}...`)}>
                Edit Details
              </Button>
              <Button variant="danger" className="flex-1 py-1.5 text-xs" onClick={() => { if(confirm('Archive internship?')) alert('Archived successfully!'); }}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Internships;
