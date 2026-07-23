import React from 'react';
import Card from '../../components/common/Card';
import { FaUserGraduate, FaCreditCard, FaTasks, FaBookReader } from 'react-icons/fa';

const Analytics = () => {
  const cards = [
    { label: 'Total Enrolled Students', value: '1,248', icon: <FaUserGraduate />, delta: '+12% this month' },
    { label: 'Total Revenue', value: '₹4.8 Lakhs', icon: <FaCreditCard />, delta: '+8% this week' },
    { label: 'Active Leads', value: '342', icon: <FaTasks />, delta: '56 new today' },
    { label: 'Courses Active', value: '12', icon: <FaBookReader />, delta: 'No changes' }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Analytics Overview</h1>
        <p className="text-gray-400 text-sm">Real-time enrollment, lead flow, and business health check reports.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, idx) => (
          <Card key={idx} className="bg-primary/25 border-white/5 p-6 flex flex-col justify-between gap-4">
            <div className="flex justify-between items-start">
              <span className="text-gray-500 text-xs font-semibold uppercase">{c.label}</span>
              <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                {c.icon}
              </div>
            </div>
            
            <div>
              <span className="text-2xl font-extrabold text-white font-manrope block">{c.value}</span>
              <span className="text-[10px] text-green-400 font-semibold">{c.delta}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
