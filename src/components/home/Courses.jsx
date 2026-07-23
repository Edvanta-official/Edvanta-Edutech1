import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock, FaBookReader } from 'react-icons/fa';
import { MOCK_COURSES } from '../../utils/constants';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { formatCurrency } from '../../utils/helper';

const Courses = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="Explore Trending Programs"
        subtitle="UPSKILL WITH THE BEST"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map((course) => (
          <Card key={course.id} className="flex flex-col h-full bg-primary/25">
            {/* Course Image */}
            <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex-grow flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-yellow-500 text-sm font-semibold">
                <FaStar />
                <span>{course.rating}</span>
                <span className="text-gray-500">({course.reviews} reviews)</span>
              </div>
              
              <h3 className="text-xl font-manrope font-bold text-white group-hover:text-accent transition-colors">
                {course.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Course Meta Info */}
            <div className="flex items-center justify-between border-y border-white/5 py-4 my-6 text-gray-400 text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <FaClock className="text-accent" /> {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <FaBookReader className="text-accent" /> Live Mentorship
              </span>
            </div>

            {/* Price & Action */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-500 text-xs block font-semibold uppercase">Course Fee</span>
                <span className="text-2xl font-extrabold text-white font-manrope">
                  {formatCurrency(course.price)}
                </span>
              </div>
              <Link to="/courses">
                <Button variant="primary" className="py-2 px-4 text-sm">
                  View Syllabus
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Courses;
