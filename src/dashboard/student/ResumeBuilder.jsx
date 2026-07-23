import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { FaMagic } from 'react-icons/fa';

const ResumeBuilder = () => {
  const [name, setName] = useState('Sample Student');
  const [email, setEmail] = useState('student@edvanta.com');
  const [edu, setEdu] = useState('Bachelor of Technology in Computer Science');
  const [exp, setExp] = useState('Intern at Edvanta (React/Node Dev)');

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Resume Builder</h1>
        <p className="text-gray-400 text-sm">Build your technical resume using standardized layouts optimized for ATS screening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Editor Form */}
        <Card className="bg-primary/25 border-white/5 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2">Edit Resume Details</h3>
          
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">FULL NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">EDUCATION</label>
              <input
                type="text"
                value={edu}
                onChange={(e) => setEdu(e.target.value)}
                className="w-full bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold block mb-1">EXPERIENCE / PROJECTS</label>
              <textarea
                rows="3"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                className="w-full bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none resize-none"
              ></textarea>
            </div>

            <Button variant="accent" className="flex items-center justify-center gap-2 text-xs py-2.5 mt-2" onClick={() => alert('ATS analysis report: 85/100 score!')}>
              <FaMagic /> Analyze ATS Score
            </Button>
          </form>
        </Card>

        {/* Live Preview */}
        <Card className="bg-white text-gray-800 p-8 flex flex-col gap-6 font-serif select-none border-white/5 relative min-h-[300px]">
          <div className="absolute top-2 right-2 bg-secondary text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
            PREVIEW ONLY
          </div>
          
          <div className="text-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <span className="text-xs text-gray-500">{email}</span>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2 uppercase">Education</h3>
            <p className="text-xs text-gray-700 font-semibold">{edu}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2 uppercase">Experience & Projects</h3>
            <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">{exp}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumeBuilder;
