import React from 'react';
import { FaUserCircle, FaQuoteRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Testimonials = () => {
  const reviews = [
    { name: 'Sameer Sen', text: 'The mentoring sessions were extremely helpful. Working on real-world projects helped me understand production code setups.', role: 'CSE Student' },
    { name: 'Kriti Deshmukh', text: 'I completed the AI & ML internship and received a Letter of Recommendation. I strongly suggest Edvanta for upskilling.', role: 'ECE Student' },
    { name: 'Amit Roy', text: 'Excellent platform for getting industry experience. The syllabus is up-to-date and the placement assistance team is active.', role: 'Developer' }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="What Our Students Say" subtitle="TESTIMONIALS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <Card key={idx} className="bg-primary/25 border-white/5 flex flex-col justify-between p-6">
            <div>
              <FaQuoteRight className="text-secondary/15 mb-4 float-right" size={24} />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <FaUserCircle className="text-accent" size={32} />
              <div>
                <h4 className="text-white font-semibold text-sm">{r.name}</h4>
                <span className="text-gray-500 text-xs">{r.role}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
