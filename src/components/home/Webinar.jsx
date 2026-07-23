import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUserTie, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

const Webinar = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Attend Our Live Webinars" subtitle="LEARN IN REAL TIME" />

      <Card className="bg-gradient-to-r from-primary/65 to-primary-dark/80 border-secondary/25 p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Detail text */}
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="bg-red-500/10 text-red-500 font-bold text-xs uppercase px-3 py-1 rounded border border-red-500/20 self-start tracking-wider animate-pulse">
            Next Session Live
          </span>
          <h3 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white">
            Generative AI: The Future of Software Development
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Join Dr. Akash Sharma, former Google AI researcher, as he talks about artificial intelligence systems, LLM prompts, and how software engineers can stay competitive.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCalendarAlt className="text-accent" />
              <span>July 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaClock className="text-accent" />
              <span>06:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 col-span-2">
              <FaUserTie className="text-accent" />
              <span>Dr. Akash Sharma (Ex-Google Scientist)</span>
            </div>
          </div>
        </div>

        {/* CTA Form / Button */}
        <div className="w-full lg:w-auto shrink-0 flex flex-col gap-4 bg-primary/45 p-6 rounded-xl border border-white/5">
          <h4 className="text-white font-manrope font-bold text-lg text-center">Reserve Your Free Spot</h4>
          <form className="flex flex-col gap-3 min-w-[280px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Full Name"
              required
              className="bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors"
            />
            <Button variant="accent" type="submit" className="text-sm">
              Register Free <FaArrowRight size={12} />
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Webinar;
