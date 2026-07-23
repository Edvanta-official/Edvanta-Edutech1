import React, { useState } from 'react';
import { FaStar, FaClock, FaBookReader, FaSearch } from 'react-icons/fa';
import { MOCK_COURSES } from '../utils/constants';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { formatCurrency } from '../utils/helper';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Software Development', 'AI & Data Science', 'Cyber Security'];

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Our Upskilling Programs" subtitle="ADVANCE YOUR CAREER" />

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 glass p-4 rounded-xl border border-white/5">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-primary-dark/80 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-secondary text-white shadow-glow'
                  : 'bg-primary-dark/50 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col h-full bg-primary/25 border-white/5">
              {/* Image */}
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

              {/* Title & Stats */}
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
                
                {/* Syllabus Mini Outline */}
                <div className="mt-4 bg-primary-dark/40 rounded-lg p-4 border border-white/5">
                  <span className="text-white text-xs font-bold block mb-2 uppercase tracking-wide">Syllabus Overview</span>
                  <ul className="flex flex-col gap-1.5 text-xs text-gray-400">
                    {course.syllabus.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-accent font-semibold">W{item.week}:</span>
                        <span>{item.topics[0]} & more</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Duration Meta */}
              <div className="flex items-center justify-between border-y border-white/5 py-4 my-6 text-gray-400 text-xs font-medium">
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-accent" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaBookReader className="text-accent" /> Live Mentorship
                </span>
              </div>

              {/* Price & Apply */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-xs block font-semibold uppercase">Fee</span>
                  <span className="text-2xl font-extrabold text-white font-manrope">
                    {formatCurrency(course.price)}
                  </span>
                </div>
                <Button variant="accent" className="py-2 px-5 text-sm" onClick={() => alert(`Enrolling in ${course.title}! (Integrating with Razorpay checkout)`)}>
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass rounded-xl border border-white/5">
          <p className="text-gray-400 text-lg">No programs match your search or filter options.</p>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
