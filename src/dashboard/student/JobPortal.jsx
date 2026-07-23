import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { FaBriefcase, FaBuilding, FaMoneyBillWave } from 'react-icons/fa';

const JobPortal = () => {
  const jobs = [
    { title: 'Associate Software Engineer', company: 'Cognizant', loc: 'Bangalore (On-site)', pkg: '4.5 - 6.5 LPA', skills: 'React, SQL, Java' },
    { title: 'AI Developer Intern', company: 'Rinex AI Lab', loc: 'Remote', pkg: 'Stipend: 15K/Mo', skills: 'Python, PyTorch' },
    { title: 'Cyber Security Analyst', company: 'Deloitte', loc: 'Hyderabad (Hybrid)', pkg: '7.5 LPA', skills: 'Network Security, Linux' }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Job Portal</h1>
        <p className="text-gray-400 text-sm">Direct referral drives from collaborating companies in our upskilling pool.</p>
      </div>

      <div className="flex flex-col gap-4">
        {jobs.map((j, idx) => (
          <Card key={idx} className="bg-primary/25 border-white/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <FaBriefcase size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-0.5">{j.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><FaBuilding /> {j.company}</span>
                  <span>Location: {j.loc}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="text-left md:text-right shrink-0">
                <span className="text-[10px] text-gray-500 block uppercase font-semibold">Compensation</span>
                <span className="text-sm font-bold text-gradient-accent flex items-center gap-1">
                  <FaMoneyBillWave /> {j.pkg}
                </span>
              </div>

              <Button variant="accent" className="text-xs py-2 px-4" onClick={() => alert(`Application for ${j.title} submitted! Your profile was pushed.`)}>
                Apply Referral
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;
