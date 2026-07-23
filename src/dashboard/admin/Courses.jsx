import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { MOCK_COURSES } from '../../utils/constants';

const Courses = () => {
  const [courses] = useState(MOCK_COURSES);

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-manrope text-white mb-2">Manage Courses</h1>
          <p className="text-gray-400 text-sm">Add, edit, or archive educational syllabus assets.</p>
        </div>
        <Button variant="accent" className="text-xs" onClick={() => alert('Opening create new course modal...')}>
          + Create Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((c) => (
          <Card key={c.id} className="bg-primary/25 border-white/5 flex flex-col justify-between p-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
              <span className="text-[10px] text-accent uppercase font-bold tracking-wider block mb-4">{c.category}</span>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{c.description}</p>
            </div>
            
            <div className="flex gap-3 border-t border-white/5 pt-4">
              <Button variant="outline" className="flex-1 py-1.5 text-xs" onClick={() => alert(`Editing ${c.title}...`)}>
                Edit Details
              </Button>
              <Button variant="danger" className="flex-1 py-1.5 text-xs" onClick={() => { if(confirm('Archive course?')) alert('Archived successfully!'); }}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
