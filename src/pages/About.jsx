import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const About = () => {
  return (
    <div className="bg-bgDark min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionTitle title="About Edvanta" subtitle="OUR MISSION & VISION" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-manrope font-bold text-white mb-6">
            Empowering Next-Gen Engineers to Solve Complex Industry Problems
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Edvanta was founded with a single mission: to bridge the gap between academic learning and industry requirements. Traditional university curricula often fall behind the fast-paced advancements of the tech world, leaving graduates underprepared for corporate roles.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            By providing verified courses in high-demand fields like Full Stack Development, AI/ML, and Cybersecurity, combined with active internship opportunities and mentorship from industry specialists, we turn learners into professionals.
          </p>
        </div>
        <div className="h-80 rounded-2xl overflow-hidden glass border border-white/5 relative flex items-center justify-center p-8 bg-gradient-to-br from-primary/50 to-primary-dark">
          {/* Decorative glowing gradient circle */}
          <div className="absolute w-48 h-48 bg-secondary/15 rounded-full blur-3xl"></div>
          <div className="text-center z-10">
            <span className="text-6xl font-manrope font-extrabold text-gradient-accent block mb-2">2026</span>
            <span className="text-white text-lg tracking-wider font-semibold uppercase">Building the Tech Future</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-primary/25 border-white/5">
          <h4 className="text-white font-bold text-lg mb-3">Verified Training</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Learn from verified professionals who build real systems. Get practical knowledge instead of dry slide decks.
          </p>
        </Card>
        <Card className="bg-primary/25 border-white/5">
          <h4 className="text-white font-bold text-lg mb-3">Live Projects</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every program features a mandatory project phase. Code, deploy, and showcase your achievements to companies.
          </p>
        </Card>
        <Card className="bg-primary/25 border-white/5">
          <h4 className="text-white font-bold text-lg mb-3">Global Community</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect with a network of peers, mentors, recruiters, and alumni working at top MNCs and tech startups.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
