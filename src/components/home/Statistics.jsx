import React from 'react';
import Card from '../common/Card';

const Statistics = () => {
  const stats = [
    { value: '15,000+', label: 'Students Enrolled' },
    { value: '94%', label: 'Placement Success Rate' },
    { value: '12 LPA', label: 'Average Salary Package' },
    { value: '150+', label: 'Corporate Hiring Partners' }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="text-center flex flex-col items-center justify-center p-8 bg-primary/45 border-white/5">
            <span className="text-4xl md:text-5xl font-extrabold font-manrope text-gradient-accent mb-2">
              {stat.value}
            </span>
            <span className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
              {stat.label}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
