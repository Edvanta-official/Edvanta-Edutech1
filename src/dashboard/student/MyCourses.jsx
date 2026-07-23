import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { MOCK_COURSES } from '../../utils/constants';
import { FaPlay } from 'react-icons/fa';

const MyCourses = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">My Enrolled Courses</h1>
        <p className="text-gray-400 text-sm">Access your course contents and start learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_COURSES.slice(0, 1).map((course) => (
          <Card key={course.id} className="bg-primary/25 border-white/5 flex flex-col justify-between h-full p-6">
            <div>
              <div className="h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-lg font-manrope font-bold text-white mb-2">{course.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{course.description}</p>
              
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-500 font-semibold mb-2">
                  <span>PROGRESS</span>
                  <span className="text-accent">45%</span>
                </div>
                <div className="w-full h-1.5 bg-primary-dark/80 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-accent"></div>
                </div>
              </div>
            </div>

            <Button variant="accent" className="w-full flex items-center justify-center gap-2 text-sm" onClick={() => alert('Opening course lecture player...')}>
              <FaPlay size={10} /> Continue Learning
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
