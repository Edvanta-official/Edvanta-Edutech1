import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { FaAward, FaDownload } from 'react-icons/fa';

const Certificates = () => {
  const certs = [
    { title: 'Full Stack Web Development (MERN)', id: 'ED-MERN-2026-984', date: 'Enrolled (In Progress)' }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">My Certificates</h1>
        <p className="text-gray-400 text-sm">Download your earned certifications upon program completion.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((c, idx) => (
          <Card key={idx} className="bg-primary/25 border-white/5 flex flex-col justify-between h-full p-6">
            <div className="flex items-start justify-between mb-4">
              <FaAward className="text-yellow-500" size={36} />
              <span className="text-[10px] text-gray-500 font-mono">{c.id}</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-1">{c.title}</h3>
            <p className="text-gray-500 text-xs mb-6">Issued: {c.date}</p>
            
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-xs"
              disabled={c.date.includes('In Progress')}
              onClick={() => alert('Downloading certificate PDF...')}
            >
              <FaDownload size={10} /> Download PDF
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
