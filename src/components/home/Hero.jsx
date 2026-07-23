import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-grid-pattern px-4 md:px-8 py-16">
      {/* Decorative Radial Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center gap-6">
        {/* Banner Chip */}
        <div className="glass px-4 py-1.5 rounded-full text-xs md:text-sm text-accent font-medium tracking-wider flex items-center gap-2 animate-bounce border border-accent/20">
          <FaRocket size={12} />
          <span>UPGRADE YOUR SKILLS FOR 2026</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-manrope font-extrabold tracking-tight leading-tight max-w-4xl text-gradient">
          Bridge the Gap Between <span className="text-gradient-accent">Academics & Industry</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Edvanta offers premium tech education, certified internships with real industry project experience, and dedicated placement services to launch your career.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link to="/courses" className="w-full sm:w-auto">
            <Button variant="accent" className="w-full sm:w-auto px-8 py-3.5 text-base">
              Explore Programs <FaArrowRight size={14} />
            </Button>
          </Link>
          <Link to="/internships" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-base">
              Apply for Internships
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
