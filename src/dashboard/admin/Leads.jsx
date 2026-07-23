import React, { useState } from 'react';
import Card from '../../components/common/Card';

const Leads = () => {
  const [leads, setLeads] = useState([
    { name: 'Kunal Patil', email: 'kunal@gmail.com', phone: '+91 99999 88888', interest: 'AI & ML Course', status: 'new' },
    { name: 'Siddharth Mehta', email: 'sid@gmail.com', phone: '+91 88888 77777', interest: 'MERN Dev Internship', status: 'contacted' },
    { name: 'Neha Reddy', email: 'neha@gmail.com', phone: '+91 77777 66666', interest: 'Cyber Security Course', status: 'converted' }
  ]);

  const toggleStatus = (idx) => {
    const updated = [...leads];
    updated[idx].status = updated[idx].status === 'new' ? 'contacted' : updated[idx].status === 'contacted' ? 'converted' : 'new';
    setLeads(updated);
  };

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Leads Management</h1>
        <p className="text-gray-400 text-sm">Review enquiries, callbacks, and program enrollment interests.</p>
      </div>

      <Card className="bg-primary/25 border-white/5 overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-primary-dark/80 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Interest Area</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((l, idx) => (
                <tr key={idx} className="hover:bg-primary/10">
                  <td className="px-6 py-4 text-white font-semibold">{l.name}</td>
                  <td className="px-6 py-4">
                    <p className="font-mono text-xs">{l.email}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{l.phone}</p>
                  </td>
                  <td className="px-6 py-4">{l.interest}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                      l.status === 'new'
                        ? 'bg-red-500/10 text-red-500 border-red-500/20'
                        : l.status === 'contacted'
                        ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        : 'bg-green-500/10 text-green-400 border-green-500/20'
                    }`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-secondary hover:text-accent font-semibold text-xs"
                      onClick={() => toggleStatus(idx)}
                    >
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Leads;
