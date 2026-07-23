import React from 'react';
import Card from '../../components/common/Card';

const Students = () => {
  const students = [
    { name: 'Rahul Verma', email: 'rahul@example.com', role: 'student', course: 'MERN Full Stack' },
    { name: 'Priya Sen', email: 'priya@example.com', role: 'student', course: 'AI & Machine Learning' },
    { name: 'Amit Roy', email: 'amit@example.com', role: 'student', course: 'Cyber Security' }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Student Directory</h1>
        <p className="text-gray-400 text-sm">Review details of registered candidates and their program course alignments.</p>
      </div>

      <Card className="bg-primary/25 border-white/5 overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-primary-dark/80 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Active Program</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((s, idx) => (
                <tr key={idx} className="hover:bg-primary/10">
                  <td className="px-6 py-4 text-white font-semibold">{s.name}</td>
                  <td className="px-6 py-4 font-mono">{s.email}</td>
                  <td className="px-6 py-4">{s.course}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-secondary hover:text-accent font-semibold text-xs"
                      onClick={() => alert(`Opening student ledger for ${s.name}...`)}
                    >
                      View Details
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

export default Students;
