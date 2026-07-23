import React from 'react';
import { MOCK_BLOGS } from '../utils/constants';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Blogs = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Knowledge Center" subtitle="LATEST TECH BLOGS" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_BLOGS.map((blog) => (
          <Card key={blog.id} className="flex flex-col md:flex-row h-full bg-primary/25 border-white/5 p-6 gap-6 items-center">
            <div className="w-full md:w-48 h-36 rounded-lg overflow-hidden shrink-0">
              <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-grow flex flex-col justify-between h-full gap-3">
              <div>
                <span className="text-gray-500 text-xs font-semibold block mb-1">{blog.date} — By {blog.author}</span>
                <h3 className="text-lg font-manrope font-bold text-white mb-2 hover:text-accent cursor-pointer transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
              <Button variant="outline" className="py-1 px-3 text-xs w-fit mt-2" onClick={() => alert('Opening full article...')}>
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
